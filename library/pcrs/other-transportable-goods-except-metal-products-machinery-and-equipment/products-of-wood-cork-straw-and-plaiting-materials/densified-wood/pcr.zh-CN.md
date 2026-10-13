---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.densified-wood
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 无树脂热定形致密化实木

## 1. 范围与适用性

本PCR针对通过热压使木材细胞结构发生实际压缩、并在规定调湿状态下保持压缩形态的未胶合实木坯料。代表产品为黄桦工具柄用未涂饰坯料；工艺依据为实木型Staypak的热定形压缩原理，不假定当代工厂已达到历史试样的性能。实木保留连续木纹，不添加浸渍树脂、胶、涂层或化学脱木质素处理。天然高密度树种未经压缩不属于致密化木；单纯烘干失水或仅热改性也不能证明致密化。

树脂浸渍压缩木（compreg）在树脂进入木材后压缩并固化，须单独采集树脂、水、固化及排放。普通胶合板和细木工板以单板或木条胶接形成板材，压胶工序不等于实木压缩定形；MDF与刨花板以纤维或颗粒重组，同样排除。胶合压缩单板、纯树脂增重木和未经定形验证的湿木压缩均不在本件范围。CPC 31520只是分类背景，不确认实际路线。

本件只描述电热压板及电驱动、工厂门交付的代表路线。现场若有外购蒸汽、热量、燃料燃烧、化学添加、制冷剂、额外包装或直接水体排放，须先补充相应原子流及供应/处理边界，不得套用现有清单或默认零排放。蒸汽MJ属性本身不能确认净交付热量，必须对应供应方定义和现场焓平衡。没有通用密度提升倍数、压力、温度、回弹限值或使用寿命。[来源：usda-wood-handbook-2021；usda-staypak-1956；cabral-densification-2022。]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.densified-wood |
| classification_refs | CPC 3.0 31520; narrower; 范围及已接受决定见 `classifications/mappings/cpc-3.0-to-pcr.yaml` 和其引用的 ADR |
| covered_products | 无树脂、未胶合、热定形压缩实木工具柄坯料；黄桦为代表 |
| excluded_products | compreg；普通胶合板/细木工板；胶合压缩单板；MDF；刨花板；天然高密度但未压缩木；仅热改性木；涂饰或化学处理产品 |
| representative_product | 黄桦未涂饰工具柄坯料，验收调湿后工厂门净质量 |
| production_route | 窑干实木接收 → 水分调节 → 电热压缩 → 持压冷却/定形 → 调湿及回弹验收 → 修边及包装 |
| market_state | 未涂饰实木坯料，进一步加工为工具柄；不代表完整工具 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供实际压缩且热定形的未涂饰实木坯料供工具柄制造，不宣称跨材料性能等价 |
| How much | 工厂门1 kg验收调湿后净木材，不含包装 |
| How well | 声明树种、尺寸、密度的含水基准、压缩方向及热定形/回弹验收状态；根据订单用途验收 |
| How long or cycle | 一个明确的生产交付核算期，不设定终端使用寿命 |
| reference_flow_link | `finished_blank` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 木质材料 `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 植物种；原料实木及锯切方向；原料和成品含水率及干基定义；压缩前后同状态体积和质量；压力/温度/时间及冷却记录；压缩方向；释放及调湿回弹测试；胶/树脂/涂层无添加声明与配料证据；成品尺寸及工具柄用途验收；厂址/期间；交付状态；供电电压及边界 |

上述限定信息必须在数据包中声明。已核实的木质材料前景身份未特指树种、形态、处理、含水状态、路线和供方，只有在这些物理限定下才涵盖声明的无树脂压缩实木子集。须为实际黄桦、连续木纹、无外加树脂/胶/涂层，并有成对压缩及调湿回弹实测、形状和验收出厂净质量。UUID本身不确立致密化生产背景、数量、机械性能或持久定形；实际供方及参考数量基准均须另行核实。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 以调湿后验收净木材质量为分母，包装和不合格品不计入分母；不使用绝干质量或毛重代替。 |
| moisture_basis | birch_stock, finished_blank | 质量 | kg | u = (m_wet - m_dry) / m_dry；m_dry = m_wet / (1 + u)。u为干基质量比，百分数须先除以100。配对原料与成品在同含水/温度状态比较密度，并区分失水和实物压缩。 |
| energy_unit | electricity | 净热值 | MJ | 记录低压交流电用量，1 kWh = 3.6 MJ；此换算不代表热压效率或蒸汽净交付热量。 |
| hydraulic_volume | hydraulic_oil | 体积 | m3 | 采用记录温度下的实际油体积；仅用同牌号同温度实测、正且有限的kg/m3密度作V = m / rho(T)。V/D以m3/kg报告，另保留m = rho(T)*V用于质量平衡，不设默认密度。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 窑干、未胶合、未浸渍黄桦实木在工厂接收，实际含水率/来源有记录 |
| starting_condition_role | 前景接收门点；不豁免原料上游负荷 |
| product_classification_scope | CPC 31520中无树脂热定形实木子集；排除树脂/单板/重组板路线 |
| recursive_input_rule | 内部返工不设外部投入和产出；外购已致密化实木单列实际状态及其上游数据集，且不得重复压缩负荷 |
| upstream_dataset_requirement | 保留林业、锯切、窑干及交付运输负荷；用真实树种/地区/含水/干燥路线背景，不套用针叶调查均值 |
| disclosure | 声明供应边界、各阶段电表、损耗及废品、回弹测试、辅助料、废物去向和排气控制；缺失为未决 |

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_route | manufacture | 仅纳入声明的电驱动热压实木路线；压缩和后续调湿验收、修边/包装合并为一前景单元，阶段分表独立保留。 | usda-wood-handbook-2021; cabral-densification-2022 |
| boundary_complete | manufacture | 包括实际可归属待机、废品、返工、冷却和控制设备；运输以单列服务背景链接，新增流必须原子化。 | usda-wood-handbook-2021; cabral-densification-2022 |
| boundary_external | manufacture | 上游排放由链接背景承担；现场排气只列现场实测排放。外部废物处理不同时列为现场排放。 | usda-wood-handbook-2021; cabral-densification-2022 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| manufacture | 实木热压致密化、调湿验收及交付 | required | 声明无树脂电热路线 | foreground | 1 kg 验收净木材 |

物理阶段：接收 → 调湿 → 热压/持压冷却 → 调湿/回弹测试 → 修边/包装 → 交付。内部交接留有批号、质量和水分记录，两端数量相等；该单元内部交接不重复列为外部产品流。

### 过程：实木热压致密化及交付（`manufacture`）

#### 输入

##### 产品流

###### 窑干黄桦实木锯材 (`birch_stock`)

投入实际未胶合、未经化学处理的窑干黄桦锯材。该广义阔叶锯材身份位于锯木厂门；核实实际植物种、含水率、尺寸、锯切方向、供应方交付边界及无胶合或化学处理。其下游座架加工示例不限定本产品用途。树种未指定的身份不等于已核实黄桦背景：实际阔叶材及树种、交付边界与背景的兼容性须另行确认；未知兼容性保持未完成，所采用锯材分类要求实际料厚大于6 mm；更薄料须另核身份。不可用针叶材替代。

- 选定流：硬木锯材 `43103a96-43df-4f35-ad02-728237b3f815`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按 `cp_wood` 采集并归一化至每 1 kg 参考流
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_wood`
- 来源：`usda-wood-handbook-2021`; `usda-staypak-1956`; `cabral-densification-2022`

###### 交流电 (`electricity`)

仅适用于用户侧低压（<1 kV）交流供电。计量电调湿、热压板、压机驱动、冷却、修边、除尘、辅助设备及可归属待机和废品用电；与供应边界核对变压器损耗。所采用记录为CN消费供电：须核实实际场址区域和年份、供方组合、电压、用户交付或损耗边界及原生电能基准；该身份不使中国背景成为全球默认。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 单位组：`93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：按 `cp_energy` 采集并归一化至每 1 kg 参考流
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：`usda-wood-handbook-2021`; `usda-staypak-1956`; `cabral-densification-2022`

###### 工艺用水 (`conditioning_water`)

调湿或冷却补水时纳入。记录实际水质及供方处理，计入外部净供水，不重复计入内部循环水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按 `cp_water` 采集并归一化至每 1 kg 参考流
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：`usda-wood-handbook-2021`; `usda-staypak-1956`; `cabral-densification-2022`

###### 压机用矿物基液压油 (`hydraulic_oil`)

使用液压机时纳入：该广义液压油身份仅用于实际矿物基础油配方和有记录的添加剂牌号。供应方交付及背景组成须匹配；通用身份不等于具体配方数据集。记录实测温度下的液体体积；只有质量记录时，除以同温度下该牌号实测、正且有限的密度，不假设通用密度。外部供油及未使用库存转入的新增油仅计一次，不计泵循环流量或每周期重复计入在用油；排出废油为单独输出，不从新油输入扣减。

- 选定流：液压油 `30691a38-a947-4b41-991e-194f6c9aa88f`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 单位组：`93a60a57-a3c8-12da-a746-0800200c9a66`
- 数量规则：按 `cp_hydraulic` 采集期间新增液压油体积V；V / D，单位为每 1 kg 参考流的m3
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_hydraulic`
- 来源：`usda-wood-handbook-2021`; `usda-staypak-1956`; `cabral-densification-2022`

###### 聚乙烯薄膜 (`packing_film`)

仅在使用聚乙烯交付包膜时纳入，薄膜质量不进入净木材分母；保留聚合物牌号、膜质量及包装规格，PET不能替代PE。须为实际无衬背、非自黏非层合聚乙烯薄膜，核实组成与供方兼容性。源名称、CAS及注释一致指聚乙烯薄膜，但CPC29220错指箱包；须保留源数据澄清债务，不声称分类已修复。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按 `cp_aux` 采集并归一化至每 1 kg 参考流
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_aux`
- 来源：`usda-wood-handbook-2021`; `usda-staypak-1956`; `cabral-densification-2022`

#### 输出

##### 产品流

###### 无树脂热定形致密化黄桦实木坯料 (`finished_blank`)

工厂门验收、调湿、未涂饰的实木工具柄坯料。最终修边和包装归入本单元，不另建同参考UUID的产品输出。

- 选定流：木质材料 `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`product_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_reference`
- 来源：`usda-wood-handbook-2021`; `usda-staypak-1956`; `cabral-densification-2022`

##### 废物流

###### 木屑废物 (`captured_sawdust`)

捕集的锯切或打磨木粉尘交外部废物处理，与逸散空气颗粒物分别计量。须将实际压缩前后热处理状态、无化学浸渍/胶/树脂状态及实际接收方，与所采用未处理木屑燃烧或回收身份核对；其他污染或处理路线须另审身份。若作为联产品销售，须先确认产品流身份再采用该路线。

- 选定流：木屑废物 `e1a44d20-d968-4d64-bd7c-253a1441ab35`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按 `cp_residues` 采集并归一化至每 1 kg 参考流
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residues`
- 来源：`usda-wood-handbook-2021`; `usda-staypak-1956`; `cabral-densification-2022`

###### 交废物处理的未处理黄桦刨削木屑 (`planing_shavings`)

刨削时纳入并分别称量实际松散黄桦刨屑，记录压缩前后来源、含水率及无外加胶、树脂或涂层。不能自动视为锯切粉尘、人造板给料、木片或颗粒燃料。广义废木料身份须匹配实际制造来源和接收处理；其原生生产措辞及CPC39282团聚分类与此未团聚残余物状态存在待澄清源元数据债务。名称和注释一致指废木料，并不证明发生制粒或压块。

- 选定流：废木料 `2ef9d37a-2fbf-42f6-8ccf-5d6677d5cfd8`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按 `cp_residues` 采集并归一化至每 1 kg 参考流
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residues`
- 来源：`usda-wood-handbook-2021`; `usda-staypak-1956`; `cabral-densification-2022`

###### 交废物处理的不合格致密化黄桦实木坯料 (`rejected_solid`)

分别称量不可回收废品坯料和实木修边料，与粉尘及刨屑分开。记录实际热压历史、回弹失效或缺陷、含水率、无外加树脂/胶/涂层及接收处理。连续实木压缩并非木颗粒团聚；广义废木料记录的CPC39282团聚字段及原生生产措辞须按实际未团聚制造残余物澄清，不借此默认处置背景。内部返工留在本单元内且只计一次，不同时列为外送废物。

- 选定流：废木料 `2ef9d37a-2fbf-42f6-8ccf-5d6677d5cfd8`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按 `cp_residues` 采集并归一化至每 1 kg 参考流
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residues`
- 来源：`usda-wood-handbook-2021`; `usda-staypak-1956`; `cabral-densification-2022`

###### 废润滑油 (`used_oil`)

外送压机废润滑或液压油时纳入，记录矿物基身份、污染物及接收方；流UUID不指定处置或再生抵扣。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按 `cp_aux` 采集并归一化至每 1 kg 参考流
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_aux`
- 来源：`usda-wood-handbook-2021`; `usda-staypak-1956`; `cabral-densification-2022`

###### 交外部废水处理的未处理木材调湿冷凝水 (`conditioning_effluent`)

收集冷凝水或冷却排污水并交外部处理时纳入，采集体积、组成及接收方；不得用造纸废水替代，也不得同时列为直接环境排放。

- 选定流：交外部废水处理的未处理木材调湿冷凝水
- 流属性/单位：体积 / m3；供方单位和属性身份待确认
- 数量规则：按 `cp_water` 采集并归一化至每 1 kg 参考流
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：`usda-wood-handbook-2021`; `usda-staypak-1956`; `cabral-densification-2022`

##### 基本流

###### 水蒸气 (`water_vapour`)

向室外空气排放的净水蒸气，子介质未指定。核对木材水分、补水、液体废水及留存水，不计内部冷凝回用。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按 `cp_air` 采集并归一化至每 1 kg 参考流
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`usda-wood-handbook-2021`; `usda-staypak-1956`; `cabral-densification-2022`

###### 颗粒物 (PM2.5) (`pm_fine`)

仅记录经收集控制后排向室外空气的PM2.5，子介质未指定；捕集粉尘不填入本行。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按 `cp_air` 采集并归一化至每 1 kg 参考流
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`usda-wood-handbook-2021`; `usda-staypak-1956`; `cabral-densification-2022`

###### 颗粒物 (PM2.5 - PM10) (`pm_coarse`)

仅记录排向室外空气的>2.5且≤10微米颗粒物，子介质未指定；排除平流层及长期排放流变体。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按 `cp_air` 采集并归一化至每 1 kg 参考流
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`usda-wood-handbook-2021`; `usda-staypak-1956`; `cabral-densification-2022`

###### 颗粒物（> PM10） (`pm_large`)

仅记录排向室外空气的>10微米颗粒物，子介质未指定。须在同一采样基准下对嵌套粒径结果求差，再采用三个不重叠区间。

- 选定流：颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按 `cp_air` 采集并归一化至每 1 kg 参考流
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`usda-wood-handbook-2021`; `usda-staypak-1956`; `cabral-densification-2022`

###### 甲醇 (`methanol_air`)

现场排气筛查确认存在甲醇排放时纳入。室外空气、子介质未指定；不采用总VOC量或树脂路线因子替代。

- 选定流：甲醇 `fe0acd60-3ddc-11dd-a935-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按 `cp_air` 采集并归一化至每 1 kg 参考流
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`usda-wood-handbook-2021`; `usda-staypak-1956`; `cabral-densification-2022`

###### 甲醛 (`formaldehyde_air`)

筛查确认存在甲醛排放时纳入；无树脂并不能证明木材自身排放为零。室外空气、子介质未指定。

- 选定流：甲醛 `08a91e70-3ddc-11dd-941b-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按 `cp_air` 采集并归一化至每 1 kg 参考流
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`usda-wood-handbook-2021`; `usda-staypak-1956`; `cabral-densification-2022`

###### 乙酸 (`acetic_acid_air`)

筛查确认存在乙酸排放时纳入，室外空气、子介质未指定；酸质量与以碳当量报告的VOC计量分别保留。

- 选定流：乙酸 `08a91e70-3ddc-11dd-92c3-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按 `cp_air` 采集并归一化至每 1 kg 参考流
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`usda-wood-handbook-2021`; `usda-staypak-1956`; `cabral-densification-2022`

###### 二氧化碳（生物源） (`biogenic_co2`)

测量和碳核对确认热处理存在木材来源CO2排放时纳入，不假定现场燃烧。无论气候报告口径如何均保留在LCI中。

- 选定流：二氧化碳（生物源） `08a91e70-3ddc-11dd-9c15-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按 `cp_air` 采集并归一化至每 1 kg 参考流
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`usda-wood-handbook-2021`; `usda-staypak-1956`; `cabral-densification-2022`

## 7. 分配与共产品处理

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_physical | all inventory rows | 保留未经分配的实物木材/水/碳平衡与分配后环境负荷账；内部链接两端同量，联产品实物产出不得机械乘分配份额。 |  |
| allocation_subdivision | manufacture | 优先分开直接计量；共享电量记录设备负载/运行时间等实际驱动依据及残差，不按压机额定功率猜耗电。 |  |
| allocation_residues | manufacture | 本清单废物行对应废物交付；出售的锯屑/刨屑/边料须改用经核实的独立原子产品行并核查共产品身份，不能直接用废物UUID。给共产品分配前记录因果依据，无法建立时声明经济分配价格期间/份额和敏感性；不预设回收抵扣。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_reference | manufacture | finished_blank | collected_record | 验收批号；净湿质量；绝干抽样质量；尺寸/体积；含水率；调湿温湿度/时间；最终用途和废品 | 使用经校准秤和尺寸量具；配对样本水分测定；按订单标准验收；排除包材; 验收净木材质量作为期间分母D；所有交换按每 1 kg 参考流聚合 | kg; m3; % | 每批/连续监测及期间核对 | 声明期间全部代表生产，覆盖启动/待机/废品 | 同厂址同路线及明确设备 | 每 1 kg 参考流 | 校准证书、批记录、检测报告及不确定性 |
| cp_wood | manufacture | birch_stock | collected_record | 植物种；来源/干燥状态；批号；质量/水分/尺寸；年轮方向；胶/树脂/涂层/化学品配方无添加记录 | 收货称量、发票与供应商配料核对；绝干配对抽样；可追溯到成品批号; 外部原料消耗及库存变化除以D；每 1 kg 参考流 | kg; m3; % | 每批/连续监测及期间核对 | 声明期间全部代表生产，覆盖启动/待机/废品 | 同厂址同路线及明确设备 | 每 1 kg 参考流 | 校准证书、批记录、检测报告及不确定性 |
| cp_press | manufacture | manufacture | collected_record | 压力/力与受压面积；板面/芯部温度；保压/冷却时间；压缩方向；初始t0、持压tc、释放tr、调湿tf、循环后tcycle；失效/裂纹 | 批次连续记录压机传感器；记录真实温湿循环和重新调湿状态，比较同状态密度；禁止仅以液压油压冒充木材压力; 批次分布及与D关联；清单统一每 1 kg 参考流 | MPa; degC; s; mm | 每批/连续监测及期间核对 | 声明期间全部代表生产，覆盖启动/待机/废品 | 同厂址同路线及明确设备 | 每 1 kg 参考流 | 校准证书、批记录、检测报告及不确定性 |
| cp_energy | manufacture | electricity | collected_record | 分阶段电表起止；kWh；电压；设备负荷；待机/废品；供方和变压器边界 | 校准电表并核对购电/总表；记录阶段共享计量分配驱动和残差; 期间可归属电量换算MJ后除以D；每 1 kg 参考流 | kWh; MJ | 每批/连续监测及期间核对 | 声明期间全部代表生产，覆盖启动/待机/废品 | 同厂址同路线及明确设备 | 每 1 kg 参考流 | 校准证书、批记录、检测报告及不确定性 |
| cp_water | manufacture | conditioning_water; conditioning_effluent | collected_record | 供水量/等级；循环与净补水；冷凝/排污量；去向；水质；库存变化 | 校准计量、罐液位及流量核对；记录液体密度和温度再作质量/体积换算; 每个外部水流分别除以D；每 1 kg 参考流 | kg; m3 | 每批/连续监测及期间核对 | 声明期间全部代表生产，覆盖启动/待机/废品 | 同厂址同路线及明确设备 | 每 1 kg 参考流 | 校准证书、批记录、检测报告及不确定性 |
| cp_aux | manufacture | used_oil; packing_film | collected_record | 各废油或薄膜牌号；质量；入库/库存；废油接收单；污染物 | 分别称量外送废油和包装膜消耗；不从新增液压油输入扣除废油排出；各质量除以D；每 1 kg 参考流 | kg | 每批/连续监测及期间核对 | 声明期间全部代表生产，覆盖启动/待机/废品 | 同厂址同路线及明确设备 | 每 1 kg 参考流 | 校准证书、批记录、检测报告及不确定性 |
| cp_hydraulic | manufacture | hydraulic_oil | collected_record | 矿物基牌号及添加剂规格；新油交付/退货；未使用及在用油期初期末库存；加注/补充体积；温度；质量；牌号实测密度；排油及损失 | 校准流量/罐液位/票据核对；仅凭同温度实测正且有限密度作V = m / rho(T)；新油体积等于交付加未用期初库存减未用期末库存及未用退货；另核对在用期初库存加新增量与在用期末库存、排油及实际损失。不得计循环量或从新油扣减废油。各期间新油体积除以D；每 1 kg 参考流 | m3; kg; kg/m3; degC | 每批/连续监测及期间核对 | 声明期间全部代表生产，覆盖启动/待机/废品 | 同厂址同路线及明确设备 | 每 1 kg 参考流 | 校准证书、批记录、检测报告及不确定性 |
| cp_residues | manufacture | captured_sawdust; planing_shavings; rejected_solid | collected_record | 分别称量粉尘/刨屑/实木废品；水分；内部返工；外送联单；销售或处置合同 | 分开容器和称量；复核现场/接收端同批湿干基；防止捕集/逸散双计; 各外送残余物流除以D；每 1 kg 参考流 | kg | 每批/连续监测及期间核对 | 声明期间全部代表生产，覆盖启动/待机/废品 | 同厂址同路线及明确设备 | 每 1 kg 参考流 | 校准证书、批记录、检测报告及不确定性 |
| cp_air | manufacture | water_vapour; pm_fine; pm_coarse; pm_large; methanol_air; formaldehyde_air; acetic_acid_air; biogenic_co2 | collected_record | 排口/无组织来源；控制设备；气量/温压湿干状态；各物种浓度/检测限；时间；粒径嵌套基准；生物碳证据 | 现场筛查和合格物种/粒径测试；统一气量浓度状态，积分真实运行时间；记录未检出和未测区别，不假设零；水/碳平衡交叉核对; 各独立排放质量除以D；每 1 kg 参考流；保留生物CO2 | kg | 每批/连续监测及期间核对 | 声明期间全部代表生产，覆盖启动/待机/废品 | 同厂址同路线及明确设备 | 每 1 kg 参考流 | 校准证书、批记录、检测报告及不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| period_normalization | all inventory rows | D = 期间验收调湿后净木材kg；各物理交换期间总量 / D，得到每 1 kg 参考流数量。D必须大于零；缺少现场值时不填造数。 | cp_reference; all collection protocols | 每 1 kg 参考流交换量 |  |
| hydraulic_conversion | hydraulic_oil | q = V / D；以实测质量换算时，按同牌号实测温度T的密度作V = m / rho(T)。另保留实物油质量m = rho(T)*V和在用库存/排油/损失平衡；不得假设默认密度或从新油输入扣除废油。 | cp_hydraulic; cp_reference | 每kg参考流的m3液压油，及独立实物质量平衡 |  |
| density_compression | birch_stock, finished_blank | rho = m / V；以配对同含水/温度状态初始rho0及最终rhof验证物理密度提高，同时记录体积变化、绝干木质量损失。压缩比CR = (t0 - tf) / t0；释放回弹SB = (tr - tc) / tc；本件定义的循环压缩损失比R = (tcycle - tf) / (t0 - tf)。均为无量纲比，分母非正时标未定义；tcycle在回到tf对应调湿状态后测量。R是本件明确规定的测试约定，不得与定义不同的文献SR指标直接比较。 | cp_wood; cp_reference; cp_press | 密度和独立回弹/定形恢复测试指标 | usda-wood-handbook-2021; cabral-densification-2022 |
| physical_balance | manufacture | 分别保留绝干木材、水和碳账：投入+期初库存 = 成品+各残余流+实际排放+期末库存+未解释差额；记录差额/测量不确定性，不以假造排放闭合。木中碳来自实测/可追溯树种数据，无默认含碳率；CO2碳质量按分子质量比12/44核对。 | cp_wood; cp_reference; cp_residues; cp_water; cp_air | 实物平衡及残差 | usda-wood-handbook-2021 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_route | all inventory rows | 必须核实实木连续木纹、实际压缩/定形及无胶/浸渍；有UUID不等于背景兼容 | cp_wood; cp_press; cp_reference |
| coverage | all inventory rows | 逐行声明适用/不适用/未测和检测限；未知不置零，额外物种和辅料拆为原子行 | cp_air; cp_aux; batch records |
| physical_basis | all inventory rows | 中英文分母均为验收调湿净木材；生物CO2不从LCI删除；不能将嵌套PM重复相加 | cp_reference; cp_air |
| source_scope | manufacture | 历史胶合北美鹅掌楸单板试验、针叶材调查及锯木厂PTE不能作为本实木厂默认量；需现场全流程记录 | usda-staypak-1956; site records |

## 9. 校验规则

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_reference | finished_blank | 要求已核实木质材料身份及实际无树脂黄桦压缩定形、含水率、形状、净质量和供方/数量全部限定。不可用MDF、木芯胶合板、普通压胶板或宽泛人造板替代。参考输出恰好一行；物理身份核实不代表实测或背景链接完整。 | usda-wood-handbook-2021; usda-staypak-1956; cabral-densification-2022 |
| validate_fixation | manufacture | 用配对质量/体积/含水及压缩、释放、调湿循环记录核对真实压缩定形；纯失水/天然高密度或未经测试的稳定性声明不合格。 | usda-wood-handbook-2021; usda-staypak-1956; cabral-densification-2022 |
| validate_quantities | all inventory rows | 采用同一正的D、真实压力/温度/时间、水分和分阶段计量；未知数量及身份保持未决，不从历史数据捏造增强倍数。 | usda-wood-handbook-2021; usda-staypak-1956; cabral-densification-2022 |
| validate_hydraulic | hydraulic_oil | 核实实际矿物配方、供应方/背景边界、原生体积m3基准及换算所需同温度实测正且有限密度。新油体积采用同一D；只有kg而无匹配密度的证据为不完整。废油保持单独质量输出及在用油实物库存平衡，不重复计循环量或净扣排油。 |  |
| validate_air | manufacture | 介质须匹配室外空气；不得用室内、平流层、长期或生物CO2吸收/修正流代替。颗粒物按不重叠区间；甲醇、甲醛和乙酸分别报告；新增物种不得藏于总VOC。 | usda-wood-handbook-2021; usda-staypak-1956; cabral-densification-2022 |
| validate_balances | manufacture | 检查实物木材/水/碳平衡、内部交接等量及残差；分配份额只作用于相应负荷账。缺失背景兼容或测量覆盖应报告不完整。 | usda-wood-handbook-2021; usda-staypak-1956; cabral-densification-2022 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 完成身份/计量/背景及独立审查后，用于该实际工具柄坯料生产路线 |
| allowed_use | 实测采集及供方资格核实后，用于相符树种、路线、交付状态及声明用途；candidate方法本身不提供完整实测数据集 |
| excluded_use | 全CPC 31520均值；普通板材/compreg/MDF；终端功能等价；未经验证稳定性或增强倍数 |
| required_metadata | 厂址、年份、树种、工艺和压力/温度/回弹记录；净质量含水基准；身份、背景和废物路线 |
| required_quality_disclosure | 逐行测量/未决/不适用；不确定性、平衡残差、分配驱动及所有未覆盖范围 |
| update_trigger | 树种、热源、压力/温度路线、胶/树脂、稳定性、规格、背景或废物去向变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| usda-wood-handbook-2021 | handbook | USDA Forest Products Laboratory (2021), Wood handbook—wood as an engineering material, FPL-GTR-282. https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf; Chapters 4, 13 and 19, especially printed 19-5 and 19-10 | 含水/密度基准；无树脂压缩木、compreg及湿木回弹差别；用途限制。不移植工艺数值。 |
| usda-staypak-1956 | official_guidance | Seborg, Millett and Stamm, Heat-stabilized compressed wood (Staypak), FPL Report No. 1580 (Revised), information reviewed and reaffirmed March 1956. https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo43146/pdf/GOVPUB-A13-PURL-gpo43146.pdf; printed pages 1, 7-8 | 实木黄桦与无合成树脂路线的历史证据。北美鹅掌楸胶合单板试验不能当本实木厂参数。 |
| cabral-densification-2022 | literature | Cabral et al. (2022), Densification of timber: a review on the process, material properties, and application. Journal of Wood Science 68:20. https://doi.org/10.1186/s10086-022-02028-3; Fundamentals of timber densification, Fig. 4 and Eqs. 1-3 | 压缩阶段、释放回弹与循环定形恢复的区别；本件测试公式明确规定尺寸状态，不采用文献的普遍增强或工厂均值。 |
