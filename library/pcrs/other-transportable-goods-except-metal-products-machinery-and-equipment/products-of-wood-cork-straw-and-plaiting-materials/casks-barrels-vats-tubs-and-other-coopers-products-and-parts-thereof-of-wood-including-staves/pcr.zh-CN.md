---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.casks-barrels-vats-tubs-and-other-coopers-products-and-parts-thereof-of-wood-including-staves
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 新制橡木酒桶生产


## 1. 范围与适用性

本方法适用于在制桶厂门验收的、未使用过的新制葡萄酒桶，其实心橡木桶板和橡木桶底由永久钢箍固定。方法区分毛桶板、风干坯料、已成形桶壳和通过试漏的完整酒桶。烘烤程度属于声明的产品配置，不是通用温度或排放因子。天然风干、机械作业、蒸汽／火弯、感官烘烤、装箍及试漏分别保留活动记录。厂商实例证明可行工艺，不构成行业平均物料清单。[seguin-process; seguin-toasts; taransaud-quality]

排除以桶板／桶底半成品作为参考产出的数据、其他树种或复合桶、槽／盆、炭化烈酒桶、用过的酒桶和翻新桶。翻新需另有使用历史、清洗、受污染木材去除、修理及服务能力证据，不能继承新制参考。橡木产地、树种、容积、风干时长、烘烤强度及寿命均无默认值。实际可选耗材、处理、排放和包装，在数据集声明完整前必须各自补为一个原子交换。[usda-wood-2021; thermal-wood-2005]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.casks-barrels-vats-tubs-and-other-coopers-products-and-parts-thereof-of-wood-including-staves |
| classification_refs | CPC 3.0 31703; narrower; 范围及已接受决定见 `classifications/mappings/cpc-3.0-to-pcr.yaml` 和其引用的 ADR |
| covered_products | 新制全橡木葡萄酒桶，黑色或镀锌钢箍，声明弯曲和烘烤配置 |
| excluded_products | 单独销售的桶板／桶底；旧桶／翻新桶；非橡木或复合桶；槽／盆；炭化烈酒桶 |
| representative_product | 一个已明确型号的新制橡木葡萄酒桶；不固定橡木产地、容积或寿命 |
| production_route | 声明劈裂／锯制橡木收货或已核实风干坯料；天然风干；加工；立桶；蒸汽／火弯；烘烤；桶底／箍组装；试漏；净质量验收及包装 |
| market_state | 新制、未使用、空置、在厂门验收的完整酒桶 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 为声明的葡萄酒陈酿或发酵用途提供完整新制橡木容器 |
| How much | 1 千克验收新制橡木酒桶净质量；同时报告验收桶数及各型号容积，不把容积直接换算产品质量 |
| How well | 满足声明的型号、桶板／桶底结构、箍规格、烘烤曲线和有记录的试漏判据；仅比较等效配置 |
| How long or cycle | 一次制造及出厂验收周期。葡萄酒使用次数和寿命需独立用户证据，不默认年数或灌装次数 |
| reference_flow_link | accepted_new_oak_barrel |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 木桶、木桶、大桶、木桶和其他铜器产品及其零件，包括木条 `8b100f0f-21c2-4373-b469-a67b4f87973e` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 新制／未使用状态；葡萄酒功能；橡木树种及核实产地或明确未知产地；劈裂／锯制路线和收货含水率；风干起止及供应边界；实测酒桶净质量及含水率；验收数量；标称／核实容积；桶板／桶底尺寸；永久箍材质／涂层／质量；随附闭合件；弯曲方法；烘烤标识及真实温度／时间程序、燃料和氧条件；试漏方法／判据／结果；工厂／年份；交付边界；包装单列；生物碳基准；数据集分配与缺失证据 |

广义产品 UUID 包含本方法限定的物理成桶，但不建立橡木专用背景数据集。全部限定信息应写入数据集元数据或等效证据；缺少身份或验收限定时，数据包不完整。按葡萄酒服务容积比较时，需证明容积、服务周期及等效酒质功能；1 千克只是清单归一化基准，不证明葡萄酒服务等效。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | accepted_new_oak_barrel | Mass | kg | Q 为同配置完整酒桶在试漏排水后实测的批次验收净质量，包含装入的箍及随附闭合件，排除试漏水及运输包装。采用 cp_acceptance。全部清单行以每 1 kg 参考流为基准，保留原始批次总量。 |
| wood_water_basis | 采用实际状态经验证方法的单独实测木质组分 | Mass | kg | 逐阶段记录真实木质组分湿质量及干基含水率u，方法须针对真实树种及物理／热／化学状态独立验证。m_wood_dry = m_wood_wet/(1+u)，u为同一组分实测千克水／千克绝干木；非木组分另留。采用适合橡木的取样并报告浸出物／挥发损失不确定性，不套通用密度或针叶材含水率。本组分规则不替换包含装入桶箍／闭合件的完整验收酒桶Q、整桶不合格品质量或残余物原生完整交换质量。无机灰、炭化／化学转化炭、金属、塑料及液态残余物采用自身相容的固体／水／组成测量，不对转化材料自动应用普通木材含水率或木材碳比例。热处理后未转化的真实木质组分仅在实际状态方法经验证时继续纳入。失水不自动等于木材得率损失。[usda-wood-2021] |
| power_basis | all electricity rows | Net calorific value | MJ | 对已核实低于 1 kV 的交流电，实测 kWh × 3.6 = MJ 电能。匹配供方电压及交付边界；不能由数据库属性标签推定燃料热值或发电效率换算。 |
| gas_volume_basis | all natural gas rows | Volume | m3 | 采用 cp_heat 获取在声明温压、组成、湿干状态及压缩因子下实测体积，并匹配背景参考体积约定。兼容性未知保持未决，不由次级流系数假设密度。 |
| steam_basis | bending_purchased_steam | Mass | kg | 采集交付蒸汽质量、压力、温度、干度及返回条件。净交付热量计算需供方焓定义及现场蒸汽／凝结水／排污平衡；单有 MJ 属性不足。不能把高压或来源特定的造纸／化工蒸汽用于未特指制桶供汽。 |
| elementary_basis | all elementary output rows | Mass | kg | 保留化学／CAS 身份、碳来源、来源阶段和空气子介质。NOx 质量与 NO2 当量需明确兼容定义；排除 N2O，避免重复 NO/NO2。PM2.5、PM2.5-PM10 和 >PM10 是互斥排放区间，不是三个累积颗粒物总量。[epa-wood-boilers; epa-sawmill-pte-scope] |


## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 运抵风干场／制桶厂的未处理生劈／粗锯橡木坯料，或另行识别且已核实上游风干覆盖的采购风干橡木坯料 |
| starting_condition_role | 前景切入点，并显式链接上游从摇篮负荷；不是无负荷原料或通用行业起点 |
| product_classification_scope | CPC3.0 31703 的新制橡木酒桶子集；不覆盖以桶板为参考、槽或翻新数据集 |
| recursive_input_rule | 采购已制备坯料或部件应链接其真实上游制造／风干供应过程。场内保留木材及循环水是阶段实物记录，不是新采购或重复摇篮负荷 |
| upstream_dataset_requirement | 与树种／路线／状态兼容的林业、坯料制备、交付运输、钢箍制造／涂层、交付公用工程、包装及废物处理；未决供应过程须披露，并在声称从摇篮到厂门前完成 |
| disclosure | 收货状态、上游覆盖、实测阶段图、公用工程／外购与内部供热、废物去向、试漏验收、分配、排除项及遗漏证据。成桶在厂门待发运；本生产数据集不含葡萄酒使用及生命末端 |

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_states | new_barrel_production | 保留毛坯／风干／桶壳／完整成桶状态及全部实际工序。收货至验收发运作为一体化制桶单元计一次；阶段交接通过内部计量台账保留，不新增参考产品输出。 | seguin-process, taransaud-quality |
| boundary_thermal | thermal and boiler stages | 区分弯曲加热与感官烘烤、直接燃料燃烧与保留橡木热解，并分开锅炉排口。EPA 锅炉证据仅用于匹配真实锅炉；开放火源需自身现场排放证据。 | seguin-toasts, thermal-wood-2005, epa-wood-boilers |
| boundary_material | all inventory rows | 纳入实际原料、公用工程、不合格品、废水、废物及排放。UUID 缺失不允许省略实物流；保留具体原子交换及供应／身份缺口。声明完整前，实际处理添加剂、胶、油、包装部件及直接天然水体排放须各自单列。 | usda-wood-2021, taransaud-quality |
| boundary_carbon | wood and air outputs | 将干木、保留烘烤层碳、外送残料、捕集炭／灰碳和排放物种碳纳入可核对实物账；清单保留生物源 CO2。森林上游吸收仅在链接边界计一次，不推定为制桶负排放。 | usda-wood-2021, thermal-wood-2005, epa-wood-boilers |


## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| new_barrel_production | 新制橡木酒桶生产 | required | 声明收货／配置的全部实际阶段 | 前景生产 | 每 1 kg 参考流 |

采用一个一体化前景单元，因为同一酒桶连续经过加工、成形、试漏和包装，仅有一个可销售参考输出。下列有序实物阶段图及实测质量、水、碳交接独立于环境负荷账保留。若阶段独立建模，链接两端须为同一真实中间物、同量、同含水率和时间；禁止虚构第二个成桶 UUID 或按分配份额缩小交接量。

| stage_id | 纳入状态 | 作业 | 实物记录 |
| --- | --- | --- | --- |
| receipt | required | 木材收货及库存核对 | 树种、劈裂／锯制／风干状态、批次质量及供方覆盖 |
| seasoning | conditional | 天然风干 | 生材收货必须纳入；记录日期、空气／降雨、喷淋、损失及水／能源；采购风干材链接上游 |
| machining | required | 截短、刨削、刮内壁、桶板拼缝；加工桶底及槽口 | 逐作业保留木材得率、锯屑、刨花、边角料、除尘及用电 |
| bending | required | 立桶、预热及蒸汽／火弯 | 声明实际方法；区分湿润、蒸汽、燃料、场内／外供热及温度／时间历史 |
| toasting | conditional | 感官烘烤 | 声明不烘烤或真实烘烤标识、温度／时间／氧条件和燃料；保留烘烤层不同于移除炭 |
| assembly | required | 装桶底、永久金属箍及最终打磨 | 桶板／桶底／箍／塞净质量、临时工具重复使用、实际采购或场内成形箍 |
| leak_test | required | 水密性试漏及纠正返工 | 真实注水／压力／时长／判据、重复用水、不合格品及最终验收；无默认试漏水量 |
| dispatch | required | 排水、测净质量及发运准备包装 | 验收数量及质量 Q、残留水、包装单列及交付边界 |
| boiler | conditional | 场内产汽 | 仅在真实锅炉运行时纳入：给水、燃料、内部蒸汽、凝结水、排污、灰及独立烟囱监测 |

### 过程：新制橡木桶生产（`new_barrel_production`）

#### 输入

##### 产品流

###### 生劈橡木制桶坯料（`green_split_oak_blank`）

仅接收未经化学处理的生劈橡木坯料；称量同类批次并保留树种、劈裂路线、尺寸和含水率。本行不包含锯制或已风干的收货。

- 选定流：裂开的木材 `7f0b2ade-9ce4-4cbb-a05f-6a30d7fbf0cc`
- 流属性/单位：Mass / kg

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_wood 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wood`
- 来源：`seguin-process`

###### 生橡木粗锯板（`green_sawn_oak_blank`）

仅适用于厚度超过 6 mm、经纹理和水密性验收的未干燥橡木粗锯板；记录供应路线和上游运输，不替代劈裂木材。 源记录指上游P3工厂门中间物；实际供方制备、运输及交付边界兼容仍待核实，不替换已声明的未干燥、厚度>6 mm橡木粗锯状态。

- 选定流：绿色非针叶材锯材，粗锯 `e882cc86-ffc0-4470-8534-84fef54f20a0`
- 流属性/单位：Mass / kg

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_wood 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wood`
- 来源：`seguin-process`

###### 已天然风干的橡木制桶毛坯（`seasoned_oak_blank`）

实际收货为经天然风干的未处理全橡木制桶毛坯，与生材收货分开。保留实测交付含水率、尺寸、树种和批次质量，核实上游制备／风干历史及其用水、损失、能源和供方交付边界，不在本场址重复供应方风干。广义木质材料身份未特指形态、含水率、路线或供方，不建立橡木专用背景；量值及供方兼容仍待核实。

- 选定流： 木质材料 `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98`
- 流属性/单位：Mass / kg

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_wood 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wood`
- 来源：`seguin-process`

###### 风干喷淋泵用电（`season_electricity`）

本阶段运行时分表计量低压电网电力；本 UUID 仅用于用户侧低于 1 kV 的交流电。保留电表边界，共用压缩机或除尘负荷只归属一次。 源地理背景为CN。实际场址／供方地理、供电结构及交付／损耗边界兼容仍待核实；本身份不建立通用电力背景。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value / MJ

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_resources 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_resources`
- 来源：`seguin-process`

###### 截短、刨削、拼缝与桶底加工用电（`machining_electricity`）

本阶段运行时分表计量低压电网电力；本 UUID 仅用于用户侧低于 1 kV 的交流电。保留电表边界，共用压缩机或除尘负荷只归属一次。 源地理背景为CN。实际场址／供方地理、供电结构及交付／损耗边界兼容仍待核实；本身份不建立通用电力背景。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value / MJ

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_resources 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_resources`
- 来源：`seguin-process`

###### 蒸汽或机械弯曲辅助设备用电（`bending_electricity`）

本阶段运行时分表计量低压电网电力；本 UUID 仅用于用户侧低于 1 kV 的交流电。保留电表边界，共用压缩机或除尘负荷只归属一次。 源地理背景为CN。实际场址／供方地理、供电结构及交付／损耗边界兼容仍待核实；本身份不建立通用电力背景。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value / MJ

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_resources 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_resources`
- 来源：`seguin-process`

###### 烘烤控制或电加热器用电（`toasting_electricity`）

本阶段运行时分表计量低压电网电力；本 UUID 仅用于用户侧低于 1 kV 的交流电。保留电表边界，共用压缩机或除尘负荷只归属一次。 源地理背景为CN。实际场址／供方地理、供电结构及交付／损耗边界兼容仍待核实；本身份不建立通用电力背景。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value / MJ

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_resources 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_resources`
- 来源：`seguin-process`

###### 装箍与表面打磨用电（`hooping_electricity`）

本阶段运行时分表计量低压电网电力；本 UUID 仅用于用户侧低于 1 kV 的交流电。保留电表边界，共用压缩机或除尘负荷只归属一次。 源地理背景为CN。实际场址／供方地理、供电结构及交付／损耗边界兼容仍待核实；本身份不建立通用电力背景。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value / MJ

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_resources 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_resources`
- 来源：`seguin-process`

###### 试漏泵和压缩机用电（`testing_electricity`）

本阶段运行时分表计量低压电网电力；本 UUID 仅用于用户侧低于 1 kV 的交流电。保留电表边界，共用压缩机或除尘负荷只归属一次。 源地理背景为CN。实际场址／供方地理、供电结构及交付／损耗边界兼容仍待核实；本身份不建立通用电力背景。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value / MJ

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_resources 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_resources`
- 来源：`seguin-process`

###### 试漏后干燥与出厂准备用电（`packing_electricity`）

本阶段运行时分表计量低压电网电力；本 UUID 仅用于用户侧低于 1 kV 的交流电。保留电表边界，共用压缩机或除尘负荷只归属一次。 源地理背景为CN。实际场址／供方地理、供电结构及交付／损耗边界兼容仍待核实；本身份不建立通用电力背景。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value / MJ

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_resources 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_resources`
- 来源：`seguin-process`

###### 场内产汽辅助设备用电（`boiler_electricity`）

本阶段运行时分表计量低压电网电力；本 UUID 仅用于用户侧低于 1 kV 的交流电。保留电表边界，共用压缩机或除尘负荷只归属一次。 源地理背景为CN。实际场址／供方地理、供电结构及交付／损耗边界兼容仍待核实；本身份不建立通用电力背景。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value / MJ

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_resources 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_resources`
- 来源：`seguin-process`

###### 风干喷淋自来水（`season_spray_water`）

人工喷淋与降雨及循环用水分别记录。

- 选定流：自来水 `c6fb2442-d527-4e3d-bf01-4c94ea2b71ec`
- 流属性/单位：Mass / kg

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_resources 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_resources`
- 来源：`seguin-process`

###### 弯曲湿润自来水（`bending_water`）

记录实际火弯湿润或浸泡补水。

- 选定流：自来水 `c6fb2442-d527-4e3d-bf01-4c94ea2b71ec`
- 流属性/单位：Mass / kg

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_resources 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_resources`
- 来源：`seguin-process`

###### 试漏自来水（`test_water`）

计量试漏新鲜补水；重复利用水是循环记录，不是再次投入新鲜水。

- 选定流：自来水 `c6fb2442-d527-4e3d-bf01-4c94ea2b71ec`
- 流属性/单位：Mass / kg

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_resources 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_resources`
- 来源：`taransaud-quality`

###### 锅炉补给自来水（`boiler_makeup_water`）

仅在场内锅炉运行时计入；核对产汽、返回凝结水、排污及损失。

- 选定流：自来水 `c6fb2442-d527-4e3d-bf01-4c94ea2b71ec`
- 流属性/单位：Mass / kg

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_resources 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_resources`
- 来源：`seguin-process`

###### 橡木桶板弯曲用外购蒸汽（`bending_purchased_steam`）

仅计跨边界交付的外购蒸汽质量。记录压力、温度、干度、焓和返回条件；供应方参考基准兼容前，供应过程链接保持未决。场内锅炉蒸汽只记阶段台账，不作为另一个外部投入。

- 选定流：橡木桶板弯曲用外购蒸汽
- 流属性/单位：Mass / kg
- 数量规则：采用 cp_heat 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat`
- 来源：`seguin-toasts`

###### 弯曲火源外购阔叶燃料木（`bending_purchased_fuelwood`）

仅用于另行采购、符合阔叶燃料木身份的短原木或劈柴。保留树种、含水率、污染和交付路线；自用橡木边角料进入干木台账，不再次赋予上游采购负荷。 源上游交付为林道旁未加工燃料木。实际制备、交付／运输及供方兼容仍待核实，不覆盖场内生成边角料燃料。

- 选定流：非针叶树木柴 `aaabc17f-c8db-4493-aa7d-1acb67ee3fa2`
- 流属性/单位：Mass / kg

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_heat 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat`
- 来源：`thermal-wood-2005`

###### 弯曲火源天然气（`bending_natural_gas`）

按实际使用计入管输气态天然气，参考属性为 Volume/m3。数量链接前核对温度、绝对压力、湿干组成、压缩因子及供方背景立方米定义；数据库次级质量系数不是密度。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3

身份支持：流属性 `93a60a56-a3c8-22da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-12da-a746-0800200c9a66`

- 数量规则：采用 cp_heat 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat`
- 来源：`thermal-wood-2005`

###### 烘烤火源外购阔叶燃料木（`toasting_purchased_fuelwood`）

仅用于另行采购、符合阔叶燃料木身份的短原木或劈柴。保留树种、含水率、污染和交付路线；自用橡木边角料进入干木台账，不再次赋予上游采购负荷。 源上游交付为林道旁未加工燃料木。实际制备、交付／运输及供方兼容仍待核实，不覆盖场内生成边角料燃料。

- 选定流：非针叶树木柴 `aaabc17f-c8db-4493-aa7d-1acb67ee3fa2`
- 流属性/单位：Mass / kg

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_heat 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat`
- 来源：`thermal-wood-2005`

###### 烘烤火源天然气（`toasting_natural_gas`）

按实际使用计入管输气态天然气，参考属性为 Volume/m3。数量链接前核对温度、绝对压力、湿干组成、压缩因子及供方背景立方米定义；数据库次级质量系数不是密度。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3

身份支持：流属性 `93a60a56-a3c8-22da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-12da-a746-0800200c9a66`

- 数量规则：采用 cp_heat 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat`
- 来源：`thermal-wood-2005`

###### 场内木料锅炉外购阔叶燃料木（`boiler_purchased_fuelwood`）

仅用于另行采购、符合阔叶燃料木身份的短原木或劈柴。保留树种、含水率、污染和交付路线；自用橡木边角料进入干木台账，不再次赋予上游采购负荷。 源上游交付为林道旁未加工燃料木。实际制备、交付／运输及供方兼容仍待核实，不覆盖场内生成边角料燃料。

- 选定流：非针叶树木柴 `aaabc17f-c8db-4493-aa7d-1acb67ee3fa2`
- 流属性/单位：Mass / kg

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_heat 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat`
- 来源：`epa-wood-boilers`

###### 场内木料锅炉天然气（`boiler_natural_gas`）

按实际使用计入管输气态天然气，参考属性为 Volume/m3。数量链接前核对温度、绝对压力、湿干组成、压缩因子及供方背景立方米定义；数据库次级质量系数不是密度。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3

身份支持：流属性 `93a60a56-a3c8-22da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-12da-a746-0800200c9a66`

- 数量规则：采用 cp_heat 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat`
- 来源：`epa-wood-boilers`

###### 成品黑色碳钢桶箍（`black_steel_hoop`）

仅用于实际采购的闭合永久黑色碳钢桶箍。实测装入质量含真实涂层，保留钢种、再生成分、环尺寸、成形／焊接和供方边界；临时组装箍仍属工具，记录真实使用／更换。通用箍名称／描述指圆环且无硬性处理路线，源CPC42946却涉及围栏刺线或扭制箍线。分类歧义保留未决并向源方／供方澄清；本身份不建立精确成品环制造、涂层配方或背景兼容。

- 选定流： 箍，未指定 `1b7aae9d-e2c8-4cbe-b979-4966170154e3`
- 流属性/单位：Mass / kg

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_parts 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_parts`
- 来源：`seguin-process`

###### 成品镀锌碳钢桶箍（`galvanized_steel_hoop`）

仅用于实际采购的闭合永久镀锌碳钢桶箍。实测装入质量包含真实锌涂层，保留钢种、环尺寸、成形／焊接、涂层和供方边界；不虚构额外锌质量，也不替代为打包带。通用箍名称／描述指圆环且无硬性处理路线，源CPC42946却涉及围栏刺线或扭制箍线。分类歧义保留未决并向源方／供方澄清；本身份不建立精确成品环制造、镀锌配方或背景兼容。

- 选定流： 箍，未指定 `1b7aae9d-e2c8-4cbe-b979-4966170154e3`
- 流属性/单位：Mass / kg

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_parts 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_parts`
- 来源：`seguin-process`

###### 成品橡木桶塞（`oak_bung`）

仅纳入随验收酒桶交付的实际加工完成全橡木桶塞，独立称量并计入装入净质量。保留尺寸、处理状态和加工／供方边界。广义木质材料身份不证明桶塞制造背景；量值及供方兼容仍待核实。硅胶、软木、胶合或复合闭合件须另列真实原子行和配置。

- 选定流： 木质材料 `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98`
- 流属性/单位：Mass / kg

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_parts 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_parts`
- 来源：`taransaud-quality`

###### 出厂低密度聚乙烯薄膜（`packaging_ldpe`）

按实际计量非泡沫、非自粘、未增强的低密度聚乙烯薄膜。运输包装不进入验收酒桶净质量；其他包装聚合物应分别列行。 源薄膜还限定为非层压且无支撑复合结构；核实实际牌号、厚度、物理形态及供方边界。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：Mass / kg

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_parts 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_parts`
- 来源：`seguin-process`

#### 输出

##### 产品流

###### 验收新制橡木酒桶（`accepted_new_oak_barrel`）

1 千克验收新制完整橡木酒桶净质量，含装入的永久桶箍和随附桶塞，排除运输包装及残留试漏水。本行是唯一参考产品输出。 源官方中文baseName将制桶误译为铜器；保留官方显示名，并披露待源方澄清的翻译缺陷。相互一致的英文名称、木材分类及容器描述支持本限定完整木桶，不表示铜材。

- 选定流：木桶、木桶、大桶、木桶和其他铜器产品及其零件，包括木条 `8b100f0f-21c2-4373-b469-a67b4f87973e`
- 流属性/单位：Mass / kg

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：1 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_acceptance`
- 来源：`taransaud-quality`

###### 供销售的未处理橡木锯屑（`sold_sawdust`）

实际独立收集并销售的未处理橡木锯屑，保留实测湿质量、含水率、干质量／碳及污染状态。核实合法联产品状态、销售合同、客户验收规格、真实用途及接收方，不能只凭收费证明产品状态。与废弃木材、内部燃料及返料实物流分开。广义木质材料身份未特指形态、含水率、路线或供方；供方／客户量值和交付边界兼容仍待核实。负荷分配份额不乘实物产量。

- 选定流： 木质材料 `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98`
- 流属性/单位：Mass / kg

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_residues 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residues`
- 来源：`corrim-allocation-case`

###### 供销售的未处理橡木刨花（`sold_shavings`）

实际独立收集并销售的未处理橡木刨花，保留实测湿质量、含水率、干质量／碳及污染状态。核实合法联产品状态、销售合同、客户验收规格、真实用途及接收方，不能只凭收费证明产品状态。与废弃木材、内部燃料及返料实物流分开。广义木质材料身份未特指形态、含水率、路线或供方；供方／客户量值和交付边界兼容仍待核实。负荷分配份额不乘实物产量。

- 选定流： 木质材料 `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98`
- 流属性/单位：Mass / kg

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_residues 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residues`
- 来源：`corrim-allocation-case`

###### 供销售的未处理橡木未压制边角料（`sold_offcuts`）

实际独立收集并销售的未处理橡木未团聚实木边角料，保留实测湿质量、含水率、干质量／碳及污染状态。核实合法联产品状态、销售合同、客户验收规格、真实用途及接收方，不能只凭收费证明产品状态。与废弃木材、内部燃料及返料实物流分开。广义木质材料身份未特指形态、含水率、路线或供方；供方／客户量值和交付边界兼容仍待核实。负荷分配份额不乘实物产量。

- 选定流： 木质材料 `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98`
- 流属性/单位：Mass / kg

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_residues 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residues`
- 来源：`corrim-allocation-case`

##### 废物流

###### 废弃未处理橡木锯屑（`discarded_sawdust`）

仅计离开本单元的已收集废锯屑，不包括销售锯屑、已排空气颗粒物或自用燃料。 源路线为未处理、供燃烧／回收；仅在真实接收路线兼容且有接收方证据时采用。未知或其他去向保持未决，不推定燃料信用或实际处理排放。

- 选定流：木屑废物 `e1a44d20-d968-4d64-bd7c-253a1441ab35`
- 流属性/单位：Mass / kg

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_residues 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residues`
- 来源：`seguin-process`

###### 废弃未处理橡木刨花（`discarded_shavings`）

实际独立收集的未团聚未处理橡木刨花，分别称量，保留实测含水率、材质／污染状态及真实接收方。广义废木料名称／同义词／描述包含木材残余物，原生生产路线可对应制造残料；源CPC39282团聚分类却与实物描述冲突。源分类及接收方／供方澄清保持未决，不声称精确团聚或处理身份。排除销售联产品、内部燃料／返料、排气颗粒和分选炭，不移用源城市垃圾比例。

- 选定流： 废木料 `2ef9d37a-2fbf-42f6-8ccf-5d6677d5cfd8`
- 流属性/单位：Mass / kg

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_residues 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residues`
- 来源：`seguin-process`

###### 废弃未压制橡木边角料（`discarded_offcuts`）

称量实际未团聚橡木块，明确无胶／化学污染或表征真实污染状态，并声明接收方。本行有条件使用物理身份，源分类冲突保持未决。

- 选定流：木材边角料 `acc22294-8e77-4784-988f-2499be3c60eb`
- 流属性/单位：Mass / kg

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_residues 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residues`
- 来源：`seguin-process`

###### 不合格新制橡木酒桶（`rejected_barrel`）

仅计离开单元的不合格成桶；拆解时回收桶箍与木材分开。场内返工消耗资源，但不是第二个参考产品输出。

- 选定流：不合格新制橡木酒桶
- 流属性/单位：Mass / kg
- 数量规则：采用 cp_residues 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residues`
- 来源：`taransaud-quality`

###### 已收集橡木风干径流（`season_runoff`）

计量送处理的已收集浸出径流；区分降雨、喷淋和木材浸出物负荷，不作为直接排入天然水体。

- 选定流：已收集橡木风干径流
- 流属性/单位：Mass / kg
- 数量规则：采用 cp_residues 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residues`
- 来源：`seguin-process`

###### 未处理酒桶试漏废水（`test_wastewater`）

计量重复利用后外送的试漏水；保留污染、接收处理和实际添加剂信息。

- 选定流：未处理酒桶试漏废水
- 流属性/单位：Mass / kg
- 数量规则：采用 cp_residues 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residues`
- 来源：`taransaud-quality`

###### 木火底灰（`thermal_bottom_ash`）

弯曲或烘烤木燃料产生并独立收集的实际无机底灰，保留实测质量、燃料／来源、无机组成、未燃碳、含水率、污染／危害状态及接收方。通用灰分身份无相反来源／路线，但不建立木燃料处理背景；量值及供方兼容仍待核实。分选炭、留桶烘烤层、捕集飞灰和排气颗粒分别记录。

- 选定流： 灰分 `d74120f1-379f-4d45-a254-c2fd0b3f05e2`
- 流属性/单位：Mass / kg

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_residues 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residues`
- 来源：`thermal-wood-2005`

###### 分选橡木炭残渣（`thermal_char`）

仅计移除的炭残渣，不包括留在酒桶中的烘烤层。记录碳量、去向及后续实际燃烧。

- 选定流：分选橡木炭残渣
- 流属性/单位：Mass / kg
- 数量规则：采用 cp_residues 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residues`
- 来源：`thermal-wood-2005`

###### 木料锅炉底灰（`boiler_bottom_ash`）

仅用于场内木料锅炉独立收集的实际无机底灰，保留实测质量、燃料／来源、无机组成、未燃碳、含水率、污染／危害状态及接收方。通用灰分身份无相反来源／路线，但不建立锅炉专用处理背景；量值及供方兼容仍待核实。分选炭、捕集飞灰和排气颗粒分别记录。

- 选定流： 灰分 `d74120f1-379f-4d45-a254-c2fd0b3f05e2`
- 流属性/单位：Mass / kg

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_residues 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residues`
- 来源：`epa-wood-boilers`

###### 已收集木料锅炉飞灰（`boiler_fly_ash`）

仅纳入木料锅炉烟气净化控制设备实际捕集并移除的灰，与源流处理路线一致。实测收集质量，保留燃料、设备、无机组成、未燃碳、含水率／污染及接收方／供方边界。捕集灰不是烟囱颗粒排放、底灰或加工粉尘；实际处理和供方量值兼容仍待核实。

- 选定流： 除尘灰 `2802116a-dd90-4bad-a456-5afe7d7fa1d6`
- 流属性/单位：Mass / kg

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_residues 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residues`
- 来源：`epa-wood-boilers`

###### 未处理锅炉排污水（`boiler_blowdown`）

计场内锅炉外排排污水，识别溶解固体和去向。

- 选定流：未处理锅炉排污水
- 流属性/单位：Mass / kg
- 数量规则：采用 cp_residues 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residues`
- 来源：`epa-wood-boilers`

###### 装箍钢废料（`hoop_steel_scrap`）

计场内金属安装产生、在厂内未经处理的废料，记录实际钢种及接收回收方。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：Mass / kg

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_residues 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residues`
- 来源：`seguin-process`

###### 未处理废低密度聚乙烯薄膜（`packing_film_scrap`）

仅计生产包装边角料或废品，不计下游包装处置；声明污染及处理。

- 选定流：未处理废低密度聚乙烯薄膜
- 流属性/单位：Mass / kg
- 数量规则：采用 cp_residues 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residues`
- 来源：`seguin-process`

##### 基本流

以下基本排放卡片均指向室外空气、未特指子介质。场址若已明确城市近地、高烟囱或其他受纳条件，应选择匹配且已核实的子类；这些记录不能替代室内职业暴露。来源阶段及排口是分开的采集字段；同一热工罩不能按服务的每个阶段重复计量。

###### 风干水蒸气（`season_water_vapour`）

由校正水平衡计算蒸发水，保留降雨、喷淋、径流和库存变化；湿质量损失也可能包含干物质损失。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass / kg

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_balance 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_balance`
- 来源：`usda-wood-2021`

###### 试漏后干燥水蒸气（`test_drying_vapour`）

核算试漏后失水，试漏水不进入验收酒桶净质量。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass / kg

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_balance 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_balance`
- 来源：`usda-wood-2021`

###### 机械加工PM2.5（`machining_pm25`）

按实际控制后排放测量本粒径区间，保留排口、空气动力学粒径定义及可过滤／可凝结范围。粒径区间必须互斥，不再叠加总颗粒物或累积 PM10，不能由可见烟雾或捕集粉尘推算千克。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：Mass / kg

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_air 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`epa-sawmill-pte-scope`

###### 机械加工PM2.5 至 PM10 区间（`machining_pm_between`）

按实际控制后排放测量本粒径区间，保留排口、空气动力学粒径定义及可过滤／可凝结范围。粒径区间必须互斥，不再叠加总颗粒物或累积 PM10，不能由可见烟雾或捕集粉尘推算千克。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：Mass / kg

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_air 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`epa-sawmill-pte-scope`

###### 机械加工大于 10 微米颗粒物（`machining_pm_coarse`）

按实际控制后排放测量本粒径区间，保留排口、空气动力学粒径定义及可过滤／可凝结范围。粒径区间必须互斥，不再叠加总颗粒物或累积 PM10，不能由可见烟雾或捕集粉尘推算千克。

- 选定流：颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位：Mass / kg

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_air 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`epa-sawmill-pte-scope`

###### 弯曲及烘烤排气PM2.5（`thermal_pm25`）

按实际控制后排放测量本粒径区间，保留排口、空气动力学粒径定义及可过滤／可凝结范围。粒径区间必须互斥，不再叠加总颗粒物或累积 PM10，不能由可见烟雾或捕集粉尘推算千克。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：Mass / kg

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_air 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`thermal-wood-2005`

###### 弯曲及烘烤排气PM2.5 至 PM10 区间（`thermal_pm_between`）

按实际控制后排放测量本粒径区间，保留排口、空气动力学粒径定义及可过滤／可凝结范围。粒径区间必须互斥，不再叠加总颗粒物或累积 PM10，不能由可见烟雾或捕集粉尘推算千克。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：Mass / kg

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_air 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`thermal-wood-2005`

###### 弯曲及烘烤排气大于 10 微米颗粒物（`thermal_pm_coarse`）

按实际控制后排放测量本粒径区间，保留排口、空气动力学粒径定义及可过滤／可凝结范围。粒径区间必须互斥，不再叠加总颗粒物或累积 PM10，不能由可见烟雾或捕集粉尘推算千克。

- 选定流：颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位：Mass / kg

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_air 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`thermal-wood-2005`

###### 场内锅炉排气PM2.5（`boiler_pm25`）

按实际控制后排放测量本粒径区间，保留排口、空气动力学粒径定义及可过滤／可凝结范围。粒径区间必须互斥，不再叠加总颗粒物或累积 PM10，不能由可见烟雾或捕集粉尘推算千克。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：Mass / kg

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_air 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`epa-wood-boilers`

###### 场内锅炉排气PM2.5 至 PM10 区间（`boiler_pm_between`）

按实际控制后排放测量本粒径区间，保留排口、空气动力学粒径定义及可过滤／可凝结范围。粒径区间必须互斥，不再叠加总颗粒物或累积 PM10，不能由可见烟雾或捕集粉尘推算千克。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：Mass / kg

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_air 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`epa-wood-boilers`

###### 场内锅炉排气大于 10 微米颗粒物（`boiler_pm_coarse`）

按实际控制后排放测量本粒径区间，保留排口、空气动力学粒径定义及可过滤／可凝结范围。粒径区间必须互斥，不再叠加总颗粒物或累积 PM10，不能由可见烟雾或捕集粉尘推算千克。

- 选定流：颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位：Mass / kg

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_air 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`epa-wood-boilers`

###### 弯曲与烘烤生物源二氧化碳（`thermal_co2_bio`）

按排口及来源阶段测量或计算真实空气释放。区分燃料燃烧与酒桶木材热解，核实生物／化石来源、控制及启停。不存在需有路线或检出限证据，不能默认零。 无论温室气体统计是否排除，清单都保留生物源 CO2；不自动给予碳中和或储碳信用。

- 选定流：二氧化碳（生物源） `08a91e70-3ddc-11dd-9c15-0050c2490048`
- 流属性/单位：Mass / kg

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_air 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`thermal-wood-2005`

###### 弯曲与烘烤化石源二氧化碳（`thermal_co2_fossil`）

按排口及来源阶段测量或计算真实空气释放。区分燃料燃烧与酒桶木材热解，核实生物／化石来源、控制及启停。不存在需有路线或检出限证据，不能默认零。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_air 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`thermal-wood-2005`

###### 弯曲与烘烤生物源一氧化碳（`thermal_co_bio`）

按排口及来源阶段测量或计算真实空气释放。区分燃料燃烧与酒桶木材热解，核实生物／化石来源、控制及启停。不存在需有路线或检出限证据，不能默认零。

- 选定流：一氧化碳（生物源） `8a313a02-e251-11e6-bf01-fe55135034f3`
- 流属性/单位：Mass / kg

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_air 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`thermal-wood-2005`

###### 弯曲与烘烤化石源一氧化碳（`thermal_co_fossil`）

按排口及来源阶段测量或计算真实空气释放。区分燃料燃烧与酒桶木材热解，核实生物／化石来源、控制及启停。不存在需有路线或检出限证据，不能默认零。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：Mass / kg

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_air 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`thermal-wood-2005`

###### 弯曲与烘烤生物源甲烷（`thermal_ch4_bio`）

按排口及来源阶段测量或计算真实空气释放。区分燃料燃烧与酒桶木材热解，核实生物／化石来源、控制及启停。不存在需有路线或检出限证据，不能默认零。

- 选定流：甲烷 (生物源) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 流属性/单位：Mass / kg

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_air 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`thermal-wood-2005`

###### 弯曲与烘烤化石源甲烷（`thermal_ch4_fossil`）

按排口及来源阶段测量或计算真实空气释放。区分燃料燃烧与酒桶木材热解，核实生物／化石来源、控制及启停。不存在需有路线或检出限证据，不能默认零。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：Mass / kg

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_air 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`thermal-wood-2005`

###### 弯曲与烘烤一氧化二氮（`thermal_n2o`）

按排口及来源阶段测量或计算真实空气释放。区分燃料燃烧与酒桶木材热解，核实生物／化石来源、控制及启停。不存在需有路线或检出限证据，不能默认零。

- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：Mass / kg

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_air 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`thermal-wood-2005`

###### 弯曲与烘烤氮氧化物（`thermal_nox`）

按排口及来源阶段测量或计算真实空气释放。区分燃料燃烧与酒桶木材热解，核实生物／化石来源、控制及启停。不存在需有路线或检出限证据，不能默认零。 NOx 排除 N2O，不再重复计入组分 NO/NO2。Mass/kg 不证明以 NO2 当量计量；监测、清单记录和影响评价定义一致后才能使用。

- 选定流：氮氧化物 `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- 流属性/单位：Mass / kg

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_air 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`thermal-wood-2005`

###### 弯曲与烘烤二氧化硫（`thermal_so2`）

按排口及来源阶段测量或计算真实空气释放。区分燃料燃烧与酒桶木材热解，核实生物／化石来源、控制及启停。不存在需有路线或检出限证据，不能默认零。

- 选定流：二氧化硫 `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- 流属性/单位：Mass / kg

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_air 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`thermal-wood-2005`

###### 场内锅炉生物源二氧化碳（`boiler_co2_bio`）

按排口及来源阶段测量或计算真实空气释放。区分燃料燃烧与酒桶木材热解，核实生物／化石来源、控制及启停。不存在需有路线或检出限证据，不能默认零。 无论温室气体统计是否排除，清单都保留生物源 CO2；不自动给予碳中和或储碳信用。

- 选定流：二氧化碳（生物源） `08a91e70-3ddc-11dd-9c15-0050c2490048`
- 流属性/单位：Mass / kg

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_air 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`epa-wood-boilers`

###### 场内锅炉化石源二氧化碳（`boiler_co2_fossil`）

按排口及来源阶段测量或计算真实空气释放。区分燃料燃烧与酒桶木材热解，核实生物／化石来源、控制及启停。不存在需有路线或检出限证据，不能默认零。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_air 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`epa-wood-boilers`

###### 场内锅炉生物源一氧化碳（`boiler_co_bio`）

按排口及来源阶段测量或计算真实空气释放。区分燃料燃烧与酒桶木材热解，核实生物／化石来源、控制及启停。不存在需有路线或检出限证据，不能默认零。

- 选定流：一氧化碳（生物源） `8a313a02-e251-11e6-bf01-fe55135034f3`
- 流属性/单位：Mass / kg

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_air 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`epa-wood-boilers`

###### 场内锅炉化石源一氧化碳（`boiler_co_fossil`）

按排口及来源阶段测量或计算真实空气释放。区分燃料燃烧与酒桶木材热解，核实生物／化石来源、控制及启停。不存在需有路线或检出限证据，不能默认零。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：Mass / kg

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_air 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`epa-wood-boilers`

###### 场内锅炉生物源甲烷（`boiler_ch4_bio`）

按排口及来源阶段测量或计算真实空气释放。区分燃料燃烧与酒桶木材热解，核实生物／化石来源、控制及启停。不存在需有路线或检出限证据，不能默认零。

- 选定流：甲烷 (生物源) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 流属性/单位：Mass / kg

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_air 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`epa-wood-boilers`

###### 场内锅炉化石源甲烷（`boiler_ch4_fossil`）

按排口及来源阶段测量或计算真实空气释放。区分燃料燃烧与酒桶木材热解，核实生物／化石来源、控制及启停。不存在需有路线或检出限证据，不能默认零。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：Mass / kg

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_air 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`epa-wood-boilers`

###### 场内锅炉一氧化二氮（`boiler_n2o`）

按排口及来源阶段测量或计算真实空气释放。区分燃料燃烧与酒桶木材热解，核实生物／化石来源、控制及启停。不存在需有路线或检出限证据，不能默认零。

- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：Mass / kg

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_air 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`epa-wood-boilers`

###### 场内锅炉氮氧化物（`boiler_nox`）

按排口及来源阶段测量或计算真实空气释放。区分燃料燃烧与酒桶木材热解，核实生物／化石来源、控制及启停。不存在需有路线或检出限证据，不能默认零。 NOx 排除 N2O，不再重复计入组分 NO/NO2。Mass/kg 不证明以 NO2 当量计量；监测、清单记录和影响评价定义一致后才能使用。

- 选定流：氮氧化物 `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- 流属性/单位：Mass / kg

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_air 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`epa-wood-boilers`

###### 场内锅炉二氧化硫（`boiler_so2`）

按排口及来源阶段测量或计算真实空气释放。区分燃料燃烧与酒桶木材热解，核实生物／化石来源、控制及启停。不存在需有路线或检出限证据，不能默认零。

- 选定流：二氧化硫 `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- 流属性/单位：Mass / kg

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_air 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`epa-wood-boilers`

###### 烘烤甲醇（`thermal_methanol`）

作为热解排气待核实物种，不默认存在正排放。测量燃烧或控制后实际逸出物种；原件热解产物百分比和留在木材中的香气均不是空气排放因子。

- 选定流：甲醇 `fe0acd60-3ddc-11dd-a935-0050c2490048`
- 流属性/单位：Mass / kg

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_air 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`thermal-wood-2005`

###### 烘烤乙醛（`thermal_acetaldehyde`）

作为热解排气待核实物种，不默认存在正排放。测量燃烧或控制后实际逸出物种；原件热解产物百分比和留在木材中的香气均不是空气排放因子。

- 选定流：乙醛 `fe0acd60-3ddc-11dd-a7a5-0050c2490048`
- 流属性/单位：Mass / kg

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_air 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`thermal-wood-2005`

###### 烘烤丙烯醛（`thermal_acrolein`）

作为热解排气待核实物种，不默认存在正排放。测量燃烧或控制后实际逸出物种；原件热解产物百分比和留在木材中的香气均不是空气排放因子。

- 选定流：丙烯醛 `08a91e70-3ddc-11dd-91a4-0050c2490048`
- 流属性/单位：Mass / kg

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_air 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`thermal-wood-2005`

###### 烘烤乙酸（`thermal_acetic`）

作为热解排气待核实物种，不默认存在正排放。测量燃烧或控制后实际逸出物种；原件热解产物百分比和留在木材中的香气均不是空气排放因子。

- 选定流：乙酸 `08a91e70-3ddc-11dd-92c3-0050c2490048`
- 流属性/单位：Mass / kg

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_air 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`thermal-wood-2005`

###### 锅炉甲醛（`boiler_formaldehyde`）

依据 AP-42 表 1.6-3 对木料锅炉物种进行条件核实。采用现场测量或可证明与锅炉、燃料及控制匹配的因子并报告不确定性，不把锅炉因子移植到开放烘烤火源。

- 选定流：甲醛 `08a91e70-3ddc-11dd-941b-0050c2490048`
- 流属性/单位：Mass / kg

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_air 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`epa-wood-boilers`

###### 锅炉乙醛（`boiler_acetaldehyde`）

依据 AP-42 表 1.6-3 对木料锅炉物种进行条件核实。采用现场测量或可证明与锅炉、燃料及控制匹配的因子并报告不确定性，不把锅炉因子移植到开放烘烤火源。

- 选定流：乙醛 `fe0acd60-3ddc-11dd-a7a5-0050c2490048`
- 流属性/单位：Mass / kg

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_air 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`epa-wood-boilers`


###### 弯曲及烘烤水蒸气（`thermal_water_vapour`）

室外空气排放，子介质未特指。核对木材、燃料及施加水的蒸发，并将燃烧形成且另有证据的化学水分开；锅炉／热工排口分开，不复用风干或试漏后蒸发总量。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass / kg

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_balance 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_balance`
- 来源：`thermal-wood-2005`

###### 场内锅炉水蒸气（`boiler_water_vapour`）

室外空气排放，子介质未特指。核对木材、燃料及施加水的蒸发，并将燃烧形成且另有证据的化学水分开；锅炉／热工排口分开，不复用风干或试漏后蒸发总量。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass / kg

身份支持：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：采用 cp_balance 采集每 1 kg 参考流的真实交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_balance`
- 来源：`epa-wood-boilers`

## 7. 分配与共产品处理

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_direct | new_barrel_production | 先采用实测细分或因果直接归属。精加工、试漏、永久桶箍及酒桶专用包装归酒桶。可销售木联产品依据真实去向／合同识别；仅有废物去向不建立联产品。 | corrim-allocation-case, taransaud-quality |
| allocation_physical_ledger | all inventory rows | 保留完整未分配阶段、干质量／水／碳实物账。内部边角料燃料只记一次，产出与消耗质量及含水率匹配。全单元内部交接相互抵消；无单独声明替代情景时，不赋予避免上游燃料负荷，也不重复采购。 | usda-wood-2021, thermal-wood-2005 |
| allocation_shared_burden | shared environmental burdens | 若仍有不可避免的共同负荷，对合格联产品论证场址特定物理因果关系，报告可分配质量及份额。若物理关系不能成立，以同期间净收益论证经济归属并检验替代方案。针叶材案例不提供橡木制桶分配份额或默认方法。 | corrim-allocation-case |
| allocation_no_mass_scaling | coproduct outputs and internal links | 分配份额仅作用于负荷账，不乘真实酒桶／联产品产量、残余碳、内部木材交接或实测水量。分配后产品数据集旁保留完整实物账；核对实物账，而不是要求缩减负荷账满足实物闭合。 | usda-wood-2021, corrim-allocation-case |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_acceptance | new_barrel_production | 验收产品 | 验收／称量 | 型号；批次；树种；容积；永久箍／闭合件质量；试漏结果；验收数量；验收净质量 Q；排水状态；含水率；库存变动 | 使用经校准的秤称量排净试漏水后的每种验收配置；排除运输包装，核对批次及发运记录; 验收净千克之和 Q；全部每 1 kg 参考流清单的分母 | kg；数量；型号容积 | 每验收批 | 覆盖制造日期并含退回及不合格品 | 仅同型号／同烘烤配置批次 | 每 1 kg 参考流 | 秤校准及链接验收／发运凭据 |
| cp_wood | new_barrel_production | 橡木收货及阶段状态 | 库存／称量／含水率 | 批号；植物树种；产地证据／未知；劈裂／锯制／风干；湿质量；尺寸；含水样本；期初／期末库存；不合格品；时间 | 称量批次及阶段木材；用代表性样本烘干恒重或经橡木校准且以烘干法核查的仪表测含水，记录浸出物／挥发损失不确定性; 校正库存变化；以 Q 将归属木材合计为每 1 kg 参考流 | kg；干基含水率 | 每批及状态变化 | 包括跨季风干批次，不仅当年发运 | 识别风干场及制桶厂／供方 | 每 1 kg 参考流 | 批次追溯、样本代表性、配对质量／含水率记录 |
| cp_resources | new_barrel_production | 阶段电力及水 | 计量／活动 | 阶段；批次；计量表；起止；千瓦时；新鲜水千克或体积／密度；降雨；循环水；泵／压缩机／除尘边界；库存 | 分阶段电表及校准水表；按实测因果工况记录共同负荷，核对账单；水体积仅用真实状态／密度换算; 实测归属数量合计 / Q；每 1 kg 参考流 | kWh；MJ；kg；m3 | 每阶段／批，账单每报告期 | 与 Q 相同制造／风干批次 | 声明厂内计量边界 | 每 1 kg 参考流 | 表校准、账单及共同负荷核对 |
| cp_heat | new_barrel_production | 燃料、蒸汽及内部热 | 燃料／焓 | 阶段；批次；外购燃料；内部边角料燃料；树种；含水率；实测热值基准；燃气温压湿干组成 Z；供方立方米；蒸汽质量压温干度；凝结水；排污；热边界 | 校准燃料／蒸汽表及称重；取得供方参考定义；仅在全部相关状态有记录时用现场蒸汽水平衡与焓平衡换算热量; 兼容外部交换数量合计 / Q；每 1 kg 参考流；保留内部台账 | kg；m3；有定义基准的 MJ | 每批及来源变化并含启停 | 覆盖真实风干辅助／弯曲／烘烤／锅炉运行 | 采购与内部供给分开 | 每 1 kg 参考流 | 供方基准、仪表、热／燃料平衡及缺失状态披露 |
| cp_parts | new_barrel_production | 箍、闭合件及包装 | 物料表／称量 | 型号；部件；材料／涂层；来源／供方；永久／临时；净质量；废料；包装部件；库存；工具更换 | 分别称量装入部件及耗用包装；采用兼容供方物料表，核对临时工具使用／更换记录; 归属部件合计 / Q；每 1 kg 参考流 | kg | 每批／型号／部件变化 | 与 Q 相同验收期 | 声明工厂及供方 | 每 1 kg 参考流 | 可追溯物料表、含涂层、运输包装分列 |
| cp_residues | new_barrel_production | 各自联产品／废物流 | 称量／去向 | 阶段；废流；来源；含水率；干质量；碳；销售／自用／废弃；合同；价格；处理方；库存；原生完整交换质量；分离组分质量；实际状态经验证水／固体方法；木质组分含水率；灰／炭干无机固体及独立检测碳；液体水／非水分数；金属／塑料组成；碳来源 | 分选称量，取样测碳／含水率；核对废物联单、销售及自用燃料；采集径流／试漏／排污流量及污染; 完整实物产出 / Q；每 1 kg 参考流；分配另存。独立分离实际组分；wood_water_basis/dry_wood仅用于真实树种／状态方法已验证的实测木质。液体保留整份质量及另测水／非水组分，金属／塑料保留完整质量／组成，不合格酒桶保留完整量及另测木材／桶箍／其他组分。无机灰及炭化炭采用经验证材质特定固体／水检测及独立碳检测，不套普通木材含水率或木材碳比例。保留全部原生完整交接质量，分离或实际状态方法未知保持待定。 | kg；水体积及已定义密度 | 每移除或销售批 | 相同已校正库存生产／风干批次 | 风干场／制桶厂及接收处理 | 每 1 kg 参考流 | 合同／凭据、不同废流及去向 |
| cp_air | new_barrel_production | 各排放物种／排口 | 源测试／物种分析 | 阶段；排口；运行时间；燃料／木碳来源；物种 CAS；浓度；气体流量；温压水分氧；检出限；粒径方法；可过滤／可凝结；控制；启停 | 控制后代表性源采样及校准排气流积分；物种特定已验证因子仅在燃料／技术／控制／活动基准匹配且附不确定性时使用。未知是缺失，不是零; 同类来源工况物种排放质量合计 / Q；每 1 kg 参考流 | 物种 kg；浓度及已定义气体体积 | 代表性工况及每控制／燃料／烘烤变化 | 积分完整报告期及过渡工况 | 热工罩、加工排口及锅炉烟囱分开 | 每 1 kg 参考流 | 实验室／方法、校准、不确定性、物种／来源证据 |
| cp_balance | new_barrel_production | 木材水碳实物台账 | 阶段核对 | 干木投入／产出；酒桶保留木；木材／箍质量；内部燃料；收水／雨／喷淋／重复水／径流／蒸汽／蒸发；炭／灰；排放物种碳；碳分数；库存；独立整份／组分质量；状态特定木质、灰／炭、无机固体、液体水／非水及金属／塑料碳证据 | 用实测库存变化、含水率及元素碳核对阶段台账；调查残差，区分热致干物质损失与蒸发，核实排放而非生成物种; 库存校正完整平衡 / Q；每 1 kg 参考流。保留完整酒桶Q及原生完整交换量；木材、水、无机固体及独立检测材质碳为独立组分账，披露分离／状态方法未知项。 | kg 干物质；kg 水；kg 碳 | 每批群及报告期 | 覆盖风干至 Q 验收制造 | 未分配前景实物账含内部链接 | 每 1 kg 参考流 | 闭合残差及不确定性，不强制置零 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_batch | all inventory rows | 以 cp_acceptance 的验收酒桶净质量 Q 除库存校正归属交换总量，表示每 1 kg 参考流。参考产品 Q/Q = 1 kg/kg。实物账与分配后负荷账分别保留。 | cp_acceptance; cp_resources; cp_wood; cp_heat; cp_parts; cp_residues; cp_air; cp_balance | 批次归一化交换 | usda-wood-2021 |
| dry_wood | 采用实际状态经验证方法的单独实测木质组分 | u = (m_wood_wet - m_wood_oven)/m_wood_oven; m_wood_dry = m_wood_wet/(1+u)。取样对应同一真实木质组分／树种／状态，采用独立验证的仅失水质量终点，计入浸出物／挥发或化学降解不确定性；不再次从实测绝干质量扣水。换算前把木材与桶箍、涂层、矿物、塑料及其他组分分开，不将完整验收／不合格酒桶或整份混合废物换算为木材。保留原生完整交换质量。灰／炭化炭采用材质特定实测干固体、水及独立检测碳，无机固体不计绝干木，不对转化材料套普通木材碳比例。液体保留整份湿质量与另测水／非水组分，金属／塑料保留真实质量及组成。组分分离或实际状态方法未知保持待定。 | m_wood_wet; m_wood_oven; cp_wood; cp_residues | 单独实测绝干木质及水分；独立整份／组分材料账 | usda-wood-2021 |
| water_reconcile | season_water_vapour, test_drying_vapour, thermal_water_vapour, boiler_water_vapour | 对每个指定阶段及批群独立计算：蒸发 = 流入水（木材、燃料、新鲜水、降雨、外购蒸汽及内部交接）+ 另有证据的反应生成水 - 流出保留／外送水（木材、径流、试漏、排污、凝结水及内部交接）- 储水变化。内部交接两端同量，仅在全单元台账抵消。不得把全单元蒸发总量赋给多个阶段行。未知渗漏、反应生成或阶段划分保持未决。 | cp_balance; cp_wood; cp_resources; cp_heat; cp_residues | 水平衡及有证据水蒸气质量 | usda-wood-2021 |
| carbon_reconcile | wood, fuel and air rows | 逐碳来源：投入碳 = 酒桶保留碳 + 外送联产品／废物碳 + 移除炭／灰碳 + 排放物种碳 + 库存变化 + 已披露残差。采用实测干质量乘兼容实测碳分数，以摩尔化学计量求物种碳。燃烧与热解共享同一碳供应，不能各自计全部投入碳。 碳采用真实组分／状态相容检测；灰／炭无机固体不是绝干木，转化炭／灰不套普通木材碳比例，不将金属／塑料／液体非水固体或整桶混合质量作为木质碳。 | cp_balance; cp_wood; cp_heat; cp_residues; cp_air | 生物／化石碳分开台账 | thermal-wood-2005, epa-wood-boilers |
| particulate_partition | all PM rows | 在同排口、期间、方法及颗粒相基准下，2.5-10 区间等于累积 PM10 减累积 PM2.5；>10 等于可比总 PM 减 PM10。仅采用有证据非负差值并传播不确定性，否则粒径分布未决。不能在互斥区间之外再叠加累积总量。 | cp_air; outlet and phase compatibility | 互斥排放颗粒区间 | epa-sawmill-pte-scope, epa-wood-boilers |
| complete_period_normalization | 所有清单行 | 每项既有工期、批次或批量数量规则及关联采集协议均采用同声明产品、等级、路线、配置、场址和参考状态的单一有记录完整统计期汇总组。验收批次措辞仅限定分母；原生单位原始分子记录保留全部可归属启动、停机、整批失败或零产出批次、废品、在制品和返工。返工参考产品仅在最终验收时计一次。各可归属交换在匹配汇总组内求和，仅除一次同组严格正值、采用声明分母单位的验收参考产品数量，再按声明参考数量缩放。不得平均批次比率、丢弃失败批次、混合无关产品/时期或改变分子原生单位。整个匹配汇总组无验收产出时保留未归一化绝对清单并要求审查，不生成归一化结果或虚构产量。库存/退回及实物交接账与负荷分配独立保留；分配不得删去已经发生的失败/返工活动。 | 全部关联原始采集协议；验收参考产品汇总组；库存及返工链接 | 各原生交换单位每声明参考数量；零产出汇总组保持未归一化 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_basis | all inventory rows | 采用同收货／型号／烘烤批群及完整风干库存变化，不以旧库存投入除以仅当期发运 Q | cp_acceptance, cp_wood |
| quality_uncertainty | all inventory rows | 未知产地、容积、寿命、数量、供应基准、化学定义或排放分布均明确保留。缺少独立且边界兼容证据时不提供经验默认范围。报告仪表、波动及模型不确定性 | cp_heat, cp_air, cp_balance |
| quality_evidence | new_barrel_production | 厂商工艺与实验热解案例仅支持方法设计。不把针叶调查得率／含水率、法规潜在排放、生成热解物百分比或香气测量移作实际排放千克 | usda-wood-2021, thermal-wood-2005, epa-sawmill-pte-scope, corrim-allocation-case |


## 9. 校验规则

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_scope | reference flow | 要求新制未使用全橡木酒桶身份、成桶完整及试漏验收；拒绝仅桶板、翻新或未限定的不同烘烤／服务配置。UUID 包含目标物不解决背景适用性。 | taransaud-quality, seguin-toasts |
| validate_denominator | all inventory rows | 恰有一个 accepted_new_oak_barrel 参考输出为 1 千克，全部交换使用同一库存校正 Q 分母。保留阶段差别，避免重复产品输出，并审计所有内部链接实物同量。 | usda-wood-2021 |
| validate_flows | all inventory rows | 以名称、CAS、路线、当前分类、参考属性和单位核实精确物理／化学身份；相反物种／CAS 或硬性处理／路线阻止采用，不能仅看近名。孤立源分类错置仅在实物身份一致且明确记录元数据债务、核实实际材质／状态／供方并待源方澄清时，可条件使用；不能声称全部元数据验证通过。每行是原子流，存在官方中文 baseName 时逐字使用；空 UUID 保留具体交换及身份缺失披露。 | usda-wood-2021 |
| validate_energy | all utility rows | 要求供方兼容基准上的实测交付能源／体积／质量。区分外购蒸汽与内部锅炉热，kWh/MJ 换算仅用于电能，燃气／蒸汽基准兼容未知时保留未决。 | epa-wood-boilers |
| validate_emissions | all elementary outputs | 要求排口／介质、真实逸出物种、碳来源及数量定义证据。核实 NOx 约定并排除 N2O、颗粒互斥及可过滤／可凝结范围。不能替代为校正流或把可见烟雾等同颗粒质量；无论温室气体报告惯例如何均保留生物源 CO2。 | thermal-wood-2005, epa-wood-boilers, epa-sawmill-pte-scope |
| validate_closure | physical ledger and allocation | 结合库存及不确定性核对干物质、水、生物／化石碳和所有实测去向，保留未解释残差。分配依据完整未分配实物账及独立分配负荷账审查，不通过改变联产品质量使分配负荷闭合。 | usda-wood-2021, corrim-allocation-case |
| validate_completeness | dataset profile | 声明完整从摇篮到厂门数据集前，解决实存流 UUID／供方缺口及路线数量，补入实际未列原子流及处理排放，披露跳过检查和不确定性，核对全部必需限定。PCR 已编写状态不证明现场数据完整或独立方法批准。 | taransaud-quality, usda-wood-2021 |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 在葡萄酒模型中合格的新橡木桶供应，或制桶制造次级数据集 |
| allowed_use | 仅用于匹配的新桶材料、状态、容积／型号、弯曲／烘烤配置及声明供应边界；服务数量换算须有独立实测桶质量／容积及使用周期 |
| excluded_use | 仅桶板、旧桶／翻新、烈酒炭化、其他树种及未限定葡萄酒服务比较；碳中和声称或不支持的橡木行业通用因子 |
| required_metadata | 参考限定、工厂／年份及批群、上游／供方边界、原子交换及属性／单位、原始协议记录、质量／水／碳实物台账、排放定义及分配基准 |
| required_quality_disclosure | 身份／供方／数量缺口、缺失范围、采样／含水率／碳不确定性、遗漏阶段／流、燃气／蒸汽基准兼容性、颗粒物／NOx 约定及方法／场址审查状态 |
| update_trigger | 树种／来源、收货含水率／状态、风干、几何、箍／涂层、弯曲／烘烤／燃料／控制、试漏方法、供应／供方或分配变化 |


## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| seguin-process | literature | Seguin Moreau, From forest to product, current original snapshot; https://www.seguin-moreau.fr/en/innovation/from-forest-to-product/; 检索日期 2026-10-12 | 工序顺序、天然风干、机械加工、火弯；厂商实例，不提供定量默认值 |
| seguin-toasts | literature | Seguin Moreau, Wine barrels, Toast levels; https://www.seguin-moreau.fr/en/wine-ranges/barrels-wine/; 检索日期 2026-10-12 | 蒸汽收紧与感官烘烤分开，烘烤曲线依产品而异 |
| taransaud-quality | literature | Taransaud, Quality Control team; https://www.taransaud.com/en/craftsmanship/our-teams/quality-control-team/; 检索日期 2026-10-12 | 逐桶试漏、最终验收及追溯；不泛化厂商的产地或风干时长 |
| usda-wood-2021 | handbook | USDA FPL, Wood Handbook FPL-GTR-282 (2021), Ch.4 pp.4-1/4-11; Ch.13 pp.13-2/13-6; Ch.18 p.18-14; https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf; 检索日期 2026-10-12 | 一般含水率／密度基准、烘干测量、干燥和光学烟雾与颗粒质量区别；不套用建筑木材含水率 |
| thermal-wood-2005 | handbook | Rowell and LeVan-Green (2005), Thermal Properties, Handbook of Wood Chemistry and Wood Composites, pp.121-125, Sec.6.1, Table6.1; https://research.fs.usda.gov/download/treesearch/22046.pdf; 检索日期 2026-10-12 | 木材热解与燃烧及条件物种筛查；实验热解产物份额不是橡木桶排放因子 |
| epa-wood-boilers | official_guidance | US EPA AP-42 Section1.6 Wood Residue Combustion in Boilers (March2022), Sec.1.6.1-1.6.4, Tables1.6-1/1.6-3 and footnotes; https://www.epa.gov/system/files/documents/2022-03/c1s6_final.pdf; 检索日期 2026-10-12 | 仅条件匹配锅炉：物种、燃料／控制依赖、因子基准及颗粒物定义；不默认因子或 99% 碳转化率 |
| epa-sawmill-pte-scope | official_guidance | US EPA Region10 (8May2014), Particulate Matter PTE Emission Factors for Activities at Sawmills, Excluding Boilers, pp.1-2; https://www.epa.gov/sites/default/files/2016-09/documents/spmpteef_memo.pdf; 检索日期 2026-10-12 | 适用范围、烟气不透明度不能换算颗粒质量及累积粒径定义；潜在排放因子不是制桶实测清单 |
| corrim-allocation-case | literature | CORRIM (22July2025), LCA of Softwood Lumber Production – Northern Region, Sec.3.2.6 p.16; https://corrim.org/wp-content/uploads/2025/07/LCA-Report-Northern-Lumber-Report-07222025.pdf; 检索日期 2026-10-12 | 仅作针叶材案例中的负荷分配及成品专用包装示例；不移植制桶分配份额、得率、燃料或含水率 |
