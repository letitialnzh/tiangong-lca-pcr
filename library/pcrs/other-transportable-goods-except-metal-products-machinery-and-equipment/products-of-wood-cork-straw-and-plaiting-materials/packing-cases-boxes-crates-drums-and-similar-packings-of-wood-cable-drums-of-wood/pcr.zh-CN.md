---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.packing-cases-boxes-crates-drums-and-similar-packings-of-wood-cable-drums-of-wood
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 未涂饰钉装针叶锯材运输箱

## 1. 范围与适用性

本 PCR 覆盖外购窑干、未浸渍针叶实木锯材板料钉装的新制未涂饰运输空箱。侧板、端板、底板及配套盖板提供箱体围护强度，可含整体加固木档。前景使用电动裁切、电动压缩空气驱动钉枪、除尘及电动搬运。单元终止于空箱及配套盖板验收和工厂门口交付。实际树种、板材等级及厚度、箱图纸和钉装安排是必需描述，不能用来选择不兼容产品。[usda-nailing-1959; usda-crate-1964]

排除电缆盘、木条桶、托盘及托盘套环、开敞条板箱、结构框架板条箱、胶合板/OSB/刨花板箱、胶合或涂饰箱、单独拆装箱片、修复/再用箱、货物及货物内部缓冲材料。现场干燥、热处理、熏蒸、燃烧和燃料驱动搬运不属本明确限定路线；若其实际发生，本清单不完整，不能称为完整产品数据集。上游供应商干燥或处理须声明，并由实际采购板材数据集覆盖。不预设 IPPC 标识、普遍处理或出口适用性。[ippc-ispm15-2018]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.packing-cases-boxes-crates-drums-and-similar-packings-of-wood-cable-drums-of-wood |
| classification_refs | CPC 3.0 31701; narrower; 范围及已接受决定见 `classifications/mappings/cpc-3.0-to-pcr.yaml` 和其引用的 ADR |
| covered_products | 未涂饰钉装针叶实木锯材运输空箱，含配套盖板及整体木档 |
| excluded_products | 电缆盘、木桶、托盘、开敞条板箱、结构框架箱、人造板箱、胶合箱、拆装箱片、再用箱 |
| representative_product | 外购窑干针叶板料裁切钉装的新制运输箱；不指定默认尺寸、载荷或质量 |
| production_route | 板材接收 → 裁切 → 钉装箱体和配套盖板 → 返工/验收 → 空箱交付 |
| market_state | 工厂门口新制成品空箱，盖板可配套单独交付 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 为声明货物提供围护及运输支撑 |
| How much | 1 kg 验收成品空箱；实物件数与实测净质量另行报告 |
| How well | 声明内外尺寸、设计载荷和分布、搬运/堆码条件及实际验收试验；体积/载荷不能替代箱质量 |
| How long or cycle | 一次声明的运输使用；不预设复用寿命或循环次数 |
| reference_flow_link | `finished_box` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 木质包装箱、盒子、板条箱、圆桶和类似包装，木制电缆卷筒 `39feb4f9-43da-4106-aa3c-f52afb654078` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 箱型/图纸及 BOM；树种和板材等级/尺寸；含水率及干/湿基；钉材质、表面状态、规格及数量；盖板交付状态；验收净质量 kg/件；尺寸和有效容积；载荷分布/搬运/堆码及验收依据；生产地区和期间；供应商干燥/处理证明；前景无处理声明；废物流接收路线 |

该流身份包含本类实木板制造成品箱，但不限定具体设计。其广义数据库名称不能将本 PCR 扩展到其他容器。单独的 kg 结果不能用于不同尺寸或额定载荷箱的功能比较。必需限定信息须在具体数据包中声明；本 PCR 的规则不是工厂实测结果。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考量为 1 kg 工厂门口验收成品空箱；采用 cp_output。按同一配置称量完整箱体、配套盖板、整体木档和已装钢钉，排除货物、缓冲物和独立运输包装。 |
| campaign_basis | 所有清单行共用的参考产品质量分母 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 所有行均按每 1 kg 参考流报告；同一批次验收净质量总量 Q 是共同分母。按件计量须使用同一配置实测 kg/件和实际件数换算至 Q，不得用容量或载荷代替。 必需质量/kg仅描述验收产品Q；各分子保留自身原生行参考属性和单位。 |
| wood_mass | sawn_timber, wood_offcut, sawdust_waste | 质量 | kg | 交付/转出湿质量与烘干木质量分别记录；干基含水分数 u=(湿质量-干质量)/干质量，干木质量=湿质量/(1+u)。背景采购 kg 基准须兼容同一水分状态。 |
| electric_units | electricity | 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 电力以记录的电能参考属性表示；1 kWh=3.6 MJ。这不是燃料热值相乘；仅汇总用户侧实际电量，并核对低压接口。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 供应商交付的已窑干未浸渍针叶锯材和外购钢钉到厂；含水率及上游干燥/处理已声明 |
| starting_condition_role | 前景接收边界；不免除上游原材料及运输负荷 |
| product_classification_scope | CPC 31701 的钉装实木板箱子集，narrower |
| recursive_input_rule | 新箱制造不以已有成品箱作同类投入；实际再用/修复箱属范围外，不递归截断采购板材上游负荷 |
| upstream_dataset_requirement | 板材须覆盖林业/锯材及实际窑干、采购钉制造、供电、实际润滑油和到厂运输；废物接收处理须记录。身份 UUID 不等于完整背景数据集 |
| disclosure | 前景一体聚合单元及阶段分表；采购状态、地区/期间、运输距离、废物路线、实际或缺失处理证据和所有排除项 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_upstream | all inputs | 连接与实际交付状态、树种、含水率、路线、属性和单位兼容的上游数据；不得把其他 PCR 或 CORRIM 区域锯材调查的参数当成本箱厂系数。 | usda-wood-handbook-2021 |
| boundary_aggregation | box_manufacture | 裁切、箱片钉装、总装、返工、除尘、验收和交付前搬运是一前景聚合单元，各阶段独立计量。过程内箱片交接仅作实物账，不形成第二个相同参考 UUID 成品输出。内部转移两端记录同量，不重复计入外部交换。 | usda-nailing-1959 |
| boundary_treatment | box_manufacture | 仅凭木箱、窑干或分类名称不得加入热处理/熏蒸及 IPPC 标识。实际供应商处理由其有来源的上游数据覆盖；若前景实际发生处理，必须补齐独立处理工序、逐种原子投入/排放及能量基准后另行审查，当前路线数据不完整。 | ippc-ispm15-2018 |
| boundary_emissions | pm_fine, pm_coarse, pm_large | 仅记录释放到外环境的颗粒物，捕集量作为技术系统废物。EPA 锯木厂 PTE 不覆盖锅炉、凝结颗粒或箱厂实测系数；不得复制其室内活动零排放假定。 | epa-sawmill-dust-2014 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| box_manufacture | 裁切、钉装、除尘和验收 | required | 本声明路线 | foreground | 1 kg 验收成品空箱 |

实物阶段：外购板材及钢钉 → 裁切/部件准备 → 箱体/盖板钉装 → 验收 → finished_box。裁切及返工 → 洁净边角料和捕集锯屑；钢钉失效 → 单独钢钉废料。按实际阶段计量压缩机、除尘和搬运电能。控制设备后逸出木尘 → 三项互不重叠的颗粒物行。先保留实物质量/水/碳账，再单独记录环境负荷账。条件行实际存在时采集；未发生须有核查记录，不能自动置零。

### 过程：裁切、钉装和验收（`box_manufacture`）

#### 输入

##### 产品流

###### 窑干针叶锯材板料（`sawn_timber`）

侧板、端板、盖板、底板及整体木档使用同一均质未浸渍针叶锯材等级。选定UUID仅适用于实际进厂厚度大于6毫米的实木锯材板料；逐项实测并记录构件厚度。厚度小于或等于6毫米的投入须在完成数据集前另行核实身份及适用性，不能推定工厂板厚或沿用本定位流。原始账逐项记录BOM构件；不同木材等级须另建原子行。供应商窑干属于上游，不能据此假定箱厂实施热处理。

- 选定流：窑干锯材（针叶材） `50904047-e5b0-4110-990a-53751d250267`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：同一批次的实际归属交换总量除以验收净质量 Q；cp_material。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`usda-nailing-1959`; `usda-wood-handbook-2021`

###### 未涂层钢丝箱钉（`steel_nails`）

本行仅为规定的未涂层碳钢钢丝箱钉。记录钉尺寸、钉杆形态、批次及称量的领用和退回质量；按个数记录时须称量同一钢钉 SKU。广义钢紧固件身份限定为这一个实际钢钉 SKU；其制造/装配辅料路线没有相反材质或涂层限制。不得用螺钉、螺栓、涂层或通用紧固件用量估算替代；仍须核实匹配的供应商钢钉制造背景。

- 选定流：钢紧固件 `ebfe08f5-42c8-484e-b39a-684a35981c24`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：同一批次的实际归属交换总量除以验收净质量 Q；cp_material。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`usda-nailing-1959`

###### 用户侧电力（`electricity`）

分阶段计量裁切、压缩机、除尘、返工、检验及可归属搬运电量，再在本聚合前景单元内只汇总一次。选定记录为到用户的低于1千伏电网平均交流电，原始供给地域为CN。须针对关联背景核实实际供方、供给地区、参考年份、原生数量/单位基准、用户侧交付边界及已含供电损耗。物理交流电身份本身不能确立全球或场址匹配的背景。实际供方/地域/年份/数量兼容性仍待核实；供电不匹配时须在完成数据集前另行审核身份和背景。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：同一批次的实际归属交换总量除以验收净质量 Q；cp_energy。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：`usda-nailing-1959`

###### 石油基润滑油（`mineral_oil`）

仅在本路线实际使用需加油的工具或发生可归属压缩机维护时纳入。记录采购石油基油品等级、补加量及库存变化。选定记录为石油馏分润滑油，不是 PAO、润滑脂或蜡/溶剂润滑剂。记录的热值元数据不构成默认用量或燃烧交换。

- 选定流：润滑油 `66628f20-9d33-4997-bd6c-6357453fa268`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：同一批次的实际归属交换总量除以验收净质量 Q；cp_maintenance。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_maintenance`
- 来源：`usda-nailing-1959`

#### 输出

##### 产品流

###### 验收成品空箱（`finished_box`）

交付净质量包含完整制成空箱、配套的固定或可拆盖板、整体木构件和已装钢钉。盖板可为后续装货单独交付，但须与配套箱体一起称量。广义选定流在物理上限定为本类箱；其定义中的其他子类不属适用范围。

- 选定流：木质包装箱、盒子、板条箱、圆桶和类似包装，木制电缆卷筒 `39feb4f9-43da-4106-aa3c-f52afb654078`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_output`
- 来源：`usda-nailing-1959`; `usda-crate-1964`

##### 废物流

###### 洁净锯材边角废料（`wood_offcut`）

称量外运的未团聚、洁净未处理且无胶黏剂/涂层污染的针叶实木板边角料，包括进入同一有记录废物流的不合格木部件。单列过程内回用及期初期末库存；回用边角料不得同时作为外部输出。声明实际木料状态和接收方。选定记录的分类字段有冲突；有条件采用其广义木工边角料物理身份，仍须澄清源数据/供应方信息。

- 选定流：木材边角料 `acc22294-8e77-4784-988f-2499be3c60eb`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：同一批次的实际归属交换总量除以验收净质量 Q；cp_residue。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residue`
- 来源：`usda-nailing-1959`; `usda-wood-handbook-2021`

###### 收集的洁净锯屑废物（`sawdust_waste`）

称量跨技术系统边界的收集锯屑，包括除尘设备捕集木尘。选定未处理焚烧/回收身份须有转交该路线的记录；不代表现场锅炉或空气排放。同一捕集颗粒不得重复计入排放颗粒物。

- 选定流：木屑废物 `e1a44d20-d968-4d64-bd7c-253a1441ab35`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：同一批次的实际归属交换总量除以验收净质量 Q；cp_residue。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residue`
- 来源：`epa-sawmill-dust-2014`

###### 不合格钢箱钉废物（`steel_nail_scrap`）

仅纳入木箱装配或废品返工中实际单独收集的弯曲、误打或拆出的未涂层碳钢钉。本广义终装废钢身份带有中国厂内源语境，未指定回收/处置路线，不代表机加工切屑。记录实际钉SKU、钢号/尺寸、无镀层状态、废品来源、木料附着/污染、接收单位及实际去向。出现相反镀层或不可分离物料状态时须另行审核适用性。废钢须与附着木料分开称量，并区分退回库存的未用钢钉；不能将木钢混合毛重当作钢质量，也不能推定废物等于投入。完成数据集前须针对中国源语境核实实际厂址/接收方、年份、组成及原生质量/运输/处理参考兼容性。不推定回收数量或信用。

- 选定流：废钢 `0e66603a-40d3-4c52-9223-4c18d32c11fd`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：同一批次的实际归属交换总量除以验收净质量 Q；cp_residue。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residue`
- 来源：`usda-nailing-1959`

###### 废润滑油（`used_oil`）

仅在范围内设备实际排出废油时纳入。单独称量受污染油，记录废物交接及库存，并链接有记录的下游处理；不得强令其质量等于新油投入。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：同一批次的实际归属交换总量除以验收净质量 Q；cp_maintenance。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_maintenance`
- 来源：`usda-nailing-1959`

##### 基本流

###### 向室外排出的细木颗粒（`pm_fine`）

记录经厂房及控制设备后向外环境释放的 PM2.5，包括排气及实际无组织排放。介质为空气未特指（室外）；职业暴露及捕集粉尘不是基本输出。不得以化石/生物二氧化碳身份或校正流替代颗粒物。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：同一批次的实际归属交换总量除以验收净质量 Q；cp_air。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`epa-sawmill-dust-2014`

###### 向室外排出的中间粒径木颗粒（`pm_coarse`）

仅记录与其他颗粒物行具有相同采样、时段及控制基准的 PM2.5 至 PM10 区间颗粒。本行是互不重叠的粒径区间，不是额外的全部 PM10 总量。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：同一批次的实际归属交换总量除以验收净质量 Q；cp_air。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`epa-sawmill-dust-2014`

###### 向室外排出的超过 PM10 木颗粒（`pm_large`）

仅记录排出的超过 PM10 颗粒；身份为空气未特指（室外），不是高空或室内空气。总颗粒物、PM10、PM2.5 总量可保留为监测字段，不得再作为三项额外交换相加。

- 选定流：颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：同一批次的实际归属交换总量除以验收净质量 Q；cp_air。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`epa-sawmill-dust-2014`

###### 制造和储存中木材失去的水分（`water_vapour`）

仅在限定批次期间实测向室外空气产生非负水分损失时纳入。以实测含水率分别确定保留木材水分及残余物水分；不能假定干材无水。若净吸收大气水分，须在数据集完成前另建经核实的原子输入，不得强塞为负排放。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：同一批次的实际归属交换总量除以验收净质量 Q；cp_moisture。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_moisture`
- 来源：`usda-wood-handbook-2021`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | box_manufacture | 优先按同一箱型批次实测/分表归属电力与材料。共享压缩空气、除尘及搬运采用实测电量与可核查运行时间或服务量归属，披露因果关系；不能以载荷额定值代替耗能驱动因素。 | usda-nailing-1959 |
| allocation_waste | wood_offcut, sawdust_waste, steel_nail_scrap, used_oil | 本路线仅有 finished_box 合格产品输出；有记录的废物转交不产生默认共产品份额或替代信用。若残料作为独立有用共产品销售，须先以正确产品身份、采集及独立分配裁定修订清单；不能继续沿用废物流并假称完整。 | usda-wood-handbook-2021 |
| allocation_physical | all inventory rows | 环境负荷归属后仍保留完整实物产出和质量/水/碳账。不得把废物或共产品实物输出乘环境分配份额，也不得用废物信用补齐质量差。过程内循环两端同量且只计外部净流。 | usda-wood-handbook-2021 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | box_manufacture | finished_box | 称重/验收 | 箱型、配置、批次、件数、逐箱含盖净质量、已装钉质量及同 SKU 钉装账、验收记录、含水率 | 使用经校准的秤称量验收完整空箱及配套盖板；扣除秤盘/独立外包装，排除货物；逐配置汇总净质量 Q，不混不同载荷/尺寸箱。 | kg | 逐箱验收；批次复核 | 同一完整代表性生产批次；覆盖库存及维护事件 | 同一厂址、路线和箱配置 | 每 1 kg 参考流 | 校准证书、称重原件、验收及盖板配套记录 |
| cp_material | box_manufacture | sawn_timber; steel_nails | 领用/退回/库存 | 物料SKU、树种、等级、构件厚度及选定UUID大于6毫米适用性、板尺寸/实材体积、含水率、采购净质量、期初期末库存、领用/退回、钉规格/称重 | 板材与钢钉分别称量领用、退回和库存，匹配 BOM 及批次；实材体积仅可配合本批同含水率实测密度换算，绝不用箱腔体积。钢钉计数须与同 SKU 实测单钉质量相连。 | kg | 逐批；采购及库存交接 | 同一完整代表性生产批次；覆盖库存及维护事件 | 同一厂址、路线和箱配置 | 每 1 kg 参考流 | 采购单、领退单、BOM、批次称重和含水率 |
| cp_energy | box_manufacture | electricity | 电表/服务归属 | 裁切、钉装压缩空气、除尘、返工、验收、搬运电表读数，电压、供方、供给地域、年份、提供方参考数量/单位及交付/损耗边界、共享运行/服务量 | 读取校准用户侧电表及分表；保留各阶段消耗与共享归属依据，不重复计算压缩机和钉枪。无分表时记录实测可归属能耗及不确定性，未证明归属不得完成数据。 | kWh | 逐批及账期核对 | 同一完整代表性生产批次；覆盖库存及维护事件 | 同一厂址、路线和箱配置 | 每 1 kg 参考流 | 校准、电费单、分表和归属记录 |
| cp_residue | box_manufacture | wood_offcut; sawdust_waste; steel_nail_scrap | 称重/废物转交 | 各原子废物净质量、含水率、容器皮重、期初期末库存、回用、钉SKU/钢号/镀层及装配废品来源、木料附着及独立钢质量、接收方/用途、实际接收与中国参考基准兼容性 | 逐种称量洁净边角料、捕集锯屑及不合格钢钉；核对去向，不把捕集量作排放，不把回用作外部转出；区分废物与实际共产品。 | kg | 每次转交；批次/库存复核 | 同一完整代表性生产批次；覆盖库存及维护事件 | 同一厂址、路线和箱配置 | 每 1 kg 参考流 | 称重原件、废物凭证和回用账 |
| cp_maintenance | box_manufacture | mineral_oil; used_oil | 维护/油料称重 | 油品等级/SDS、领用/退回、补加、油箱库存、排出废油、维护设备和服务归属 | 分别称量实际石油基新油及排出废油，按本路线设备服务归属；核对库存、消耗及去向，不推断未测油雾或泄漏为零；实际泄漏须增加对应独立介质/物种行。 | kg | 每次补加/换油；覆盖维护周期 | 同一完整代表性生产批次；覆盖库存及维护事件 | 同一厂址、路线和箱配置 | 每 1 kg 参考流 | 油品文件、维护及废油交接原件 |
| cp_air | box_manufacture | pm_fine; pm_coarse; pm_large | 排气/无组织监测 | 总可过滤颗粒物、PM10、PM2.5、采样介质、干湿/温压基准、流量、运行时长、控制工况和无组织源 | 以实际排口和外逸源的适用监测或经核实场址模型核算排放，保留采样方法、检出限和不确定性；浓度与排气体积使用同一干湿温压基准。粒径数据不兼容时保持未决，不套用 EPA 锯木厂系数。 | kg | 代表性运行/控制工况；每批时长 | 同一完整代表性生产批次；覆盖库存及维护事件 | 同一厂址、路线和箱配置 | 每 1 kg 参考流 | 监测原件、排口/无组织源清单及控制日志 |
| cp_moisture | box_manufacture | water_vapour; all wood rows | 含水率/物料平衡 | 各木材入出/库存湿质量与干基含水率、烘干样本、树种、采样位置、木材留存水和排出水 | 按 Wood Handbook 第 13 章代表性取样并烘干至稳定质量，以对应湿质量计算干基含水率；经校准且有树种/温度修正的电测须用烘干比对。分别平衡木材、钢钉、油和水；未解释质量差不能全当蒸发。 | kg; dry-basis fraction | 各原料/成品/残料批次与库存时点 | 同一完整代表性生产批次；覆盖库存及维护事件 | 同一厂址、路线和箱配置 | 每 1 kg 参考流 | 取样、称重、烘干和不确定性记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| campaign_normalization | all inventory rows | Q=同一批次验收空箱及配套盖板净质量之和；各原子交换=同批可归属外部交换总量/Q；finished_box=Q/Q=1 kg。先按同一库存边界核对领退及出入量。 | campaign totals; Q; cp_output | per 1 kg reference flow | usda-nailing-1959 |
| count_disclosure | finished_box; steel_nails | 按箱配置报告实测 kg/件=验收净质量总量/验收件数；钉计数质量=同 SKU 钉数量×该 SKU 实测平均单钉质量，披露取样和不确定性；不设默认单件质量。 | cp_output; cp_material | measured kg/box and kg nail | usda-nailing-1959 |
| wood_water_balance | all wood rows; water_vapour | 对各纯木材流：干木质量=湿木质量/(1+u)，木材水=湿木质量-干木质量。成品箱湿木质量=验收空箱净质量减去同 SKU 钉装账中的已装钢钉质量；绝不能将含钉的整个箱质量除以 1+u。木材干质量输入+期初库存=成品干木+废木干质量+排出颗粒中的干木质量+期末库存+经证实其他损失；钢钉和油分别核对。输入水+期初水库存=成品及残料保留水+排出颗粒所含水+期末水库存+经证实水蒸气损失；本路线不加工艺水。排水量仅由本同批水分账确定；须表征颗粒的木材/水/碳分数，不假定全部颗粒物都是烘干木。 | cp_material; cp_output; cp_residue; cp_air; cp_moisture | unallocated dry wood and water balance | usda-wood-handbook-2021 |
| electric_conversion | electricity | 同批实际电量 kWh×3.6 得 MJ，再除 Q；记录各阶段，不重复加压缩空气能量。 | cp_energy; Q | MJ per 1 kg reference flow | usda-nailing-1959 |
| particle_intervals | pm_fine; pm_coarse; pm_large | 仅在同采样、时段、介质及控制基准时：细颗粒=PM2.5；中间颗粒=PM10-PM2.5；大颗粒=总可过滤颗粒物-PM10。各区间非负；计入相应行前按 Q 归一化。互不兼容、不完整或负差值须复核，不能强行截零。 | cp_air; Q | three disjoint kg exchanges per 1 kg reference flow | epa-sawmill-dust-2014 |
| complete_period_normalization | 所有清单行 | 每项既有工期、批次或批量数量规则及关联采集协议均采用同声明产品、等级、路线、配置、场址和参考状态的单一有记录完整统计期汇总组。验收批次措辞仅限定分母；原生单位原始分子记录保留全部可归属启动、停机、整批失败或零产出批次、废品、在制品和返工。返工参考产品仅在最终验收时计一次。各可归属交换在匹配汇总组内求和，仅除一次同组严格正值、采用声明分母单位的验收参考产品数量，再按声明参考数量缩放。不得平均批次比率、丢弃失败批次、混合无关产品/时期或改变分子原生单位。整个匹配汇总组无验收产出时保留未归一化绝对清单并要求审查，不生成归一化结果或虚构产量。库存/退回及实物交接账与负荷分配独立保留；分配不得删去已经发生的失败/返工活动。 | 全部关联原始采集协议；验收参考产品汇总组；库存及返工链接 | 各原生交换单位每声明参考数量；零产出汇总组保持未归一化 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_quantity | all inventory rows | 逐行区分身份核实与数量/背景兼容；空 UUID 是身份待定，缺少实测不是零，数据未齐不可称完整。 | 供应商文件、监测和逐行身份/背景审查 |
| representativeness | box_manufacture | 记录厂址、批次、生产期、样本数、校准、库存、损失和维护事件；不能借用区域软木调查扩展到所有木材或箱厂。 | 原始记录和不确定性 |
| carbon_balance | all wood rows | 以实测干木质量和有来源碳分数核对输入、成品、残料、排出木颗粒和库存生物碳；不设默认碳分数或负排放信用。上游吸收只计一次；实际生物 CO2 不得因温室气体统计约定从 LCI 删除，若前景燃烧发生，本路线须补齐后再审查。 | 实物碳账、上游数据和碳分数来源 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | finished_box | 只接受上述新制钉装针叶实木板箱；电缆盘、胶合板箱等不能通过 family selector 纳入。实际前景处理或燃烧发生而未建完整行时，校验结论为不完整。 | usda-nailing-1959; usda-crate-1964; ippc-ispm15-2018 |
| validate_reference | finished_box | 必须有唯一参考成品输出及 1 kg 共同分母、同配置箱含配套盖净质量实测记录；尺寸、有效容积和载荷不是质量或性能等同证据。 | usda-nailing-1959; usda-wood-handbook-2021 |
| validate_atomic | all inventory rows | 每行只含一个原子交换，空 UUID、未确定背景数量基准及遗漏正排放保持未决；条件项须有发生/未发生记录，不得把检索失败等同无匹配或把身份成功等同完整数据。 | usda-wood-handbook-2021 |
| validate_balance | all inventory rows | 以分配前实物账验证同批木材、钢钉、油、水和有来源生物碳；内部交接两端同量，残料转交、库存和回用不重复；质量差和监测不确定性须解释，不能用分配份额或信用补平。 | usda-wood-handbook-2021 |
| validate_air | pm_fine; pm_coarse; pm_large; water_vapour | 空气介质及粒径须匹配直读身份；仅用互斥粒径行，捕集锯屑不是排放。实际其他 VOC、油雾、凝结物或泄漏须以具体物种/介质另建行后再称完整，不能用宽泛污染物或校正流顶替。 | epa-sawmill-dust-2014 |
| validate_treatment | finished_box | 窑干及原料采购记录不能单独证明热处理工艺或合法 IPPC 标识；声明来源、处理场所及实际证明，缺失时不作合规声称。 | ippc-ispm15-2018 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 仅在独立审查及数据完整后，作为工厂门口箱制造模块用于声明匹配的运输包装模型 |
| allowed_use | 仅在实际路线、箱配置/性能、水分及数据完整性匹配时连接使用；按实测 kg/件换算购箱件数 |
| excluded_use | 电缆盘、板材箱、桶、托盘、结构框架箱、拆装箱片、再用箱、处理/燃烧扩展路线、泛用所有木包装系数或出口合规证明 |
| required_metadata | 第 3 节限定信息；边界、年份/地区、参考量、数量/背景兼容、上游链接、废物接收和排放介质 |
| required_quality_disclosure | 采集覆盖、校准/样本数、质量水碳账、分表/共享归属、未测/未决行及监测检出限；本方法尚未经独立科学审查 |
| update_trigger | 箱结构、树种/板等级、水分、钉表面状态、供电、废物去向、处理或制造路线、来源/计量证据变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| usda-nailing-1959 | handbook | L. O. Anderson, USDA Forest Products Laboratory, Nailing Better Wood Boxes and Crates, Agriculture Handbook 160, September 1959; https://www.govinfo.gov/content/pkg/GOVPUB-A-PURL-gpo19907/pdf/GOVPUB-A-PURL-gpo19907.pdf | 印刷 pp1、8：钉装木箱部件及装配；历史工艺说明，不转移设计尺寸、钉用量或现代设备能耗系数 |
| usda-crate-1964 | handbook | L. O. Anderson and T. B. Heebink, USDA Forest Products Laboratory, Wood Crate Design Manual, Agriculture Handbook 252, February 1964; https://www.govinfo.gov/content/pkg/GOVPUB-A-PURL-gpo21815/pdf/GOVPUB-A-PURL-gpo21815.pdf | 印刷 p1：木箱与受力框架板条箱不同；仅作边界反证，不转用板条箱设计系数 |
| usda-wood-handbook-2021 | handbook | USDA Forest Products Laboratory, Wood handbook—wood as an engineering material, FPL-GTR-282, 2021; https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf | 印刷 pp4–1、4–11、13–2：干基含水率、质量/体积密度基准和烘干法；不采用物种密度、水分或窑干系数默认值 |
| epa-sawmill-dust-2014 | official_guidance | EPA Region 10, Particulate Matter Potential to Emit Emission Factors for Activities at Sawmills, Excluding Boilers, Located in Pacific Northwest Indian Country, May 8 2014; https://www.epa.gov/sites/default/files/2016-09/documents/spmpteef_memo.pdf | PDF p2 表头及脚注：嵌套可过滤粒径、捕集/排出和来源局限；不作为箱厂实测系数，不复制室内零排放，排除锅炉及凝结颗粒 |
| ippc-ispm15-2018 | official_guidance | IPPC, ISPM 15 Regulation of wood packaging material in international trade, 2018年版本（修订附录1及2），2019年2月修正（标准首次采用于2002年）; https://www.ippc.int/static/media/files/publication/en/2019/02/ISPM_15_2018_En_WoodPackaging_Post-CPM13_Rev_Annex1and2_Fixed_2019-02-01.pdf | 第 2、2.1、3.1 节（印刷 p7）：木包装范围与处理/标识；用于防止预设处理，不声称实际箱处理或当前司法辖区合规 |
