---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.dry-combed-wool-noils
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 干法精梳羊毛落毛


## 1. 范围与适用性

本规则适用于购入已洗净梳理毛条经毛纺精梳机械分离所得、随后干法整理、检验并包装销售的未染色绵羊毛短纤维落毛。制造前景从梳理毛条接收开始，到验收包装落毛结束，参考质量不含包装。Woolmark 将针梳与精梳区分为不同工序，并将分离的短纤维称为落毛；本规则不规定固定加工道数。

不覆盖动物细毛落毛、羊毛／合成纤维混纺、丝或棉落毛、再生回收纤维、纱线及仅由粗梳产生的废纤维。洗毛、碳化、漂白、染色、化学防缩、追加加工油剂、主动加湿及加热干燥不在本干法路线方法内。场址实施这些操作时，须先补充明确的逐工序清单及证据，方可声称覆盖。按声明称重条件进行被动平衡纳入范围；下游粗纺及消费不纳入。产品属于纺织中间体，不是具有寿命的功能服务；不暗示已完整覆盖从摇篮到工厂门。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.dry-combed-wool-noils |
| classification_refs | CPC 3.0 26140; narrower |
| covered_products | 声明干法路线所得未染色绵羊毛精梳落毛 |
| excluded_products | 动物细毛落毛；染色或碳化落毛；回收纤维；纺纱废料；混纺落毛 |
| representative_product | 一个规格明确、以聚丙烯编织袋包装的干法整理绵羊毛落毛批次 |
| production_route | 接收梳理毛条 → 精梳前针梳 → 机械精梳分离毛条与落毛 → 落毛干法整理与检验 → 称重包装 |
| market_state | 销售给纺织加工者的未纺短纤维；声明含水率及采购方规格 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供符合声明规格的绵羊毛落毛短纤维纺织原料 |
| How much | 声明工厂门处 1 kg 验收落毛净质量 |
| How well | 批次特定物种／组成、长度分布、直径、植物杂质及含水率；与采购方验收记录核实 |
| How long or cycle | 一个制造报告批次；不声明寿命或下游纺纱性能等效 |
| reference_flow_link | `reference_product_noils` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 经干法整理打包的未染色绵羊毛精梳落毛 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 绵羊毛组成；进料洗毛／梳理态；落毛来源；纤维长度及直径测量或声明的检测缺口；植物杂质；含水率测量与质量基准；已有油剂；排除处理标识；产出验收规格；报告期；场址；包装配置；分配方法及分离点 |

前景数据集须声明全部必需限定信息。参考产品与对应产出行保留完全一致的具体名称，其公开身份仍待解决。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用验收落毛净质量，排除全部编织袋及容器。采用 cp_noil 采集，保留实测质量与含水率条件。 |
| moisture_basis | 全部纤维质量平衡 | Mass | kg | 含水率采用湿质量基准实测。干质量 = 实测净质量 ×（1 − 实测含水率分数）。按干物质核对进料、毛条、落毛及不合格纤维平衡；1 kg 参考流保留实际交付质量。不得采用默认公定回潮率。 |
| energy_conversion | 电力行 | Net calorific value | MJ | 保留原始计量千瓦时；按 1 kWh = 3.6 MJ 换算。核实的电力流采用其原能量属性，不得改为质量。 |
| package_measurement | polypropylene_sack | Mass | kg | 采用经校准的秤称量实际空袋，核对领用数量、重复使用及未用退回；不得由标称容量推断袋质量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 报告工厂接收的已洗净未染色梳理绵羊毛条，声明此前加工及含水率 |
| starting_condition_role | 购入中间体；联合干法精梳前景的起点 |
| product_classification_scope | 仅 CPC 26140 中干法精梳绵羊毛落毛；不代表动物细毛或全部分类路线 |
| recursive_input_rule | 购入落毛属于另一起点路线，须单独声明并带入原已分配上游负荷；不得递归为零负荷平均落毛 |
| upstream_dataset_requirement | 连接包含绵羊饲养、剪毛、洗毛及粗梳上游的梳理毛条数据集；连接实际电力、袋、润滑油及场外处理，避免重复前景工序 |
| disclosure | 工厂门、全部工序、来料态、落毛与毛条产率、含水率基准、库存变化、分配、环境排放点、条件交换、排除路线及上游缺口 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_joint | joint_combing | 纳入接收、搬运、精梳前针梳、机械精梳、共用输送及除尘直到毛条／落毛物理分离点。分离后的毛条整理仅归属于毛条。 | woolmark-topmaking |
| boundary_noil | noil_finishing | 纳入落毛干法整理、验收检验、被动平衡、称重、实际采用的压实及包装。不得悄然加入新的湿处理。 | woolmark-topmaking |
| boundary_environment | 环境接口 | 电力为技术圈投入；不假定存在锅炉燃料或燃烧排放。捕集粉尘为废物转移；仅有记录的外部空气释放属于基本流。本干法路线不暗示工艺用水或废水。实际有水跨边界时，须拆分供水、取水、排放和处理，并审查扩展路线。 |  |
| boundary_disclosure | 数据集完整性 | 披露纳入或遗漏的运输、设备资本品、维护耗材及共用服务，提供实测相关性与理由。只有另外组装并评估全部必需上游数据集及运输关联后，方可声称完整从摇篮到工厂门。 | ghg-product-2011 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| joint_combing | 接收、针梳及联合精梳 | required | 声明梳理毛条干法路线 | 联合毛条／落毛分离及原始批次台账 | 每 1 kg 参考流 |
| noil_finishing | 落毛干法整理与交付 | required | 全部验收落毛批次；包装取决于实际配置 | 分离后的落毛专用作业 | 每 1 kg 参考流 |

每行代表一个物理身份明确的交换。条件行仅在实际存在时纳入；不存在须有路线证据。未来数据集须为额外实测的材料、包装、废物或排放物种分别增加原子行，不得用集合标签。合并系统中内部落毛转移行抵消。物理共产品产出质量在平衡台账保持未分配；归属交换及负荷另存。

### 过程：接收、针梳及联合精梳 (`joint_combing`)

#### 输入

##### 产品流

###### 已洗净未染色的梳理绵羊毛条 (`carded_wool_input`)

工厂接收的必需进料。记录绵羊毛组成、已有加工油剂、含水率、梳理历史及供应商数据集；不将农场门梳理纤维身份用于工厂接收的中间体。

- 选定流： 已洗净未染色的梳理绵羊毛条
- 流属性/单位： Mass / kg
- 数量规则： 每参考流分配给落毛的实测进料；保留未分配的批次进料，在除以验收落毛质量前应用 allocation_shared。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_joint`
- 来源： `woolmark-topmaking`

###### 交流电 (`joint_electricity`)

尽可能分别计量接收、精梳前针梳、精梳、输送及共用除尘电量。本流表示使用点能量，不代表电网组合；连接适合场址的供电数据集。

- 选定流： 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位： Net calorific value / MJ
- 数量规则： 每参考流的分配后计量电量；按第 4 节以兆焦表达表读数。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_energy`
- 来源： `woolmark-topmaking`

###### 矿物基础油型机械润滑油 (`mineral_machine_oil`)

条件项：仅在维护记录证实本生产线消耗矿物基础油型润滑油时纳入。购入毛条已有加工油剂不再作为投入重复记录；合成油须另设具体行。

- 选定流： 矿物基础油型机械润滑油
- 流属性/单位： Mass / kg
- 数量规则： 每参考流的可归属实测润滑油消耗；共用生产线消耗应用 allocation_shared。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_auxiliary`
- 来源： `woolmark-topmaking`

#### 输出

##### 产品流

###### 未打包未染色的羊毛精梳落毛 (`unbaled_noils_output`)

送往落毛整理的必需短纤维物流；属于内部转移，不是第二份可销售参考产出。即使负荷已分配，也保留完整物理产率。

- 选定流： 未打包未染色的羊毛精梳落毛
- 流属性/单位： Mass / kg
- 数量规则： 按声明含水率基准计量每参考流的内部转移量；不得用负荷分配份额缩减物理产出质量。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_joint`
- 来源： `woolmark-topmaking`

###### 毛条毛线类 (`combed_wool_coproduct`)

记录分离点的长纤维精梳毛条共产品，不含后续复针梳或纺纱。保留公开流正式中文名；本行实物为未纺纱毛条，不是毛线。

- 选定流： 毛条毛线类 `a19fde0b-23f4-4ab7-9832-317affa7ab44`
- 流属性/单位： Mass / kg
- 数量规则： 每参考流的实测共产品产出；在联合生产台账保留未分配的完整物理质量。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_joint`
- 来源： `woolmark-topmaking`

##### 废物流

###### 羊毛精梳分离的植物性杂质 (`vegetable_reject`)

条件项，为单独收集的草刺及种子植物性杂质；声明组成、污染状态及处置去向。不得将可销售纤维落毛列为此废物。

- 选定流： 羊毛精梳分离的植物性杂质
- 流属性/单位： Mass / kg
- 数量规则： 每参考流的可归属称重植物残余物；保留总残余物量与分配依据。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_residue`
- 来源： `woolmark-topmaking`

###### 捕集的羊毛纤维粉尘 (`captured_wool_dust`)

条件项，为从收集设备清出的、送场外处理的粉尘；捕集固体与空气排放分别计量。可回用纤维应另设共产品行。

- 选定流： 捕集的羊毛纤维粉尘
- 流属性/单位： Mass / kg
- 数量规则： 每参考流可归属捕集羊毛粉尘的称重质量；扣除过滤介质皮重。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_residue`
- 来源： `woolmark-topmaking`

###### 废矿物基础油型机械润滑油 (`used_mineral_oil`)

条件项，矿物油维护产生单独收集的废油时纳入；设备内保有油及库存变化纳入平衡。

- 选定流： 废矿物基础油型机械润滑油
- 流属性/单位： Mass / kg
- 数量规则： 每参考流的可归属实测废油量；不假定损耗比例。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_auxiliary`
- 来源： `woolmark-topmaking`

##### 基本流

###### 颗粒物，粒径未特指 (`airborne_dust`)

仅在实测或有记录证实向环境空气释放、且子介质与粒径分级未特指时纳入。室内循环不是环境交换。若已知为 PM10 或其他分级，改用独立核验的具体行，不得重叠。

- 选定流： 颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位： Mass / kg
- 数量规则： 采用排放浓度、排气量和运行时长计算每参考流的可归属实测空气排放；缺失监测属于明确数据缺口，不等于零。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_air`
- 来源： `woolmark-topmaking`

### 过程：落毛干法整理与交付 (`noil_finishing`)

#### 输入

##### 产品流

###### 未打包未染色的羊毛精梳落毛 (`unbaled_noils_input`)

与 unbaled_noils_output 为同一内部转移，按批次及含水率基准核对；在合并系统中不得重复购入。

- 选定流： 未打包未染色的羊毛精梳落毛
- 流属性/单位： Mass / kg
- 数量规则： 每参考流的实测转移量；与 unbaled_noils_output 核对。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_noil`
- 来源：

###### 交流电 (`finishing_electricity`)

落毛专用的干法整理、检验、压实及包装电量，直接归属于落毛，不再进行毛条／落毛分配。

- 选定流： 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位： Net calorific value / MJ
- 数量规则： 每参考流的落毛专用计量电量；按第 4 节以兆焦表达表读数。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_energy`
- 来源：

###### 羊毛落毛包装用聚丙烯编织袋 (`polypropylene_sack`)

仅在实际采用此包装配置时纳入。测量空袋质量、使用数量及重复使用记录；不设固定袋容量。其他包装组件须分别设行。

- 选定流： 羊毛落毛包装用聚丙烯编织袋
- 流属性/单位： Mass / kg
- 数量规则： 每参考流的实测编织袋消耗；累计实际空袋质量，排除产品质量及批次内未消耗的可复用容器。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_pack`
- 来源：

#### 输出

##### 产品流

###### 经干法整理打包的未染色绵羊毛精梳落毛 (`reference_product_noils`)

验收可销售的短纤维产品，排除包装。按声明的采购方规格验收；不宣称通用纤维长度、直径、杂质限值或健康批准。

- 选定流： 经干法整理打包的未染色绵羊毛精梳落毛
- 流属性/单位： Mass / kg
- 数量规则： 1 千克
- 数值来源模式： `fixed_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_noil`
- 来源：

##### 废物流

###### 不合格未染色羊毛落毛纤维 (`rejected_noil_fibre`)

条件项，为最终检验剔除并送处理的不可销售纤维；记录不合格原因及去向。生产线内返工属于内部流，不跨越本边界。

- 选定流： 不合格未染色羊毛落毛纤维
- 流属性/单位： Mass / kg
- 数量规则： 每参考流的实测不合格纤维量；纳入库存变化，排除重复计算的内部返工。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_noil`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_subdivision | joint_combing；noil_finishing | 先分离可计量的落毛专用与毛条专用活动。落毛专用整理及包装直接归属于落毛。不得因落毛是短纤维副产物便自动赋予零负荷。 | ghg-product-2011; woolmark-topmaking |
| allocation_shared | 共同投入及负荷 | 对无法拆分的共同作业，先证明底层物理关系，再选择物理分配。仅有质量份额不构成因果证据。无法支持物理分配时，记录同期分离点毛条、可销售落毛及其他每项可销售共产品的价格和数量，并论证经济分配。经济份额 a_noil = 落毛分离点价值 / 全部共产品分离点价值之和；采用一致币种、期间及含水率基准。保留价格、产出、方法及合理替代方案敏感性。不得规定默认落毛／毛条价格比。 | ghg-product-2011 |
| allocation_balance | 共产品与废物台账 | 对共同上游梳理毛条负荷和共同工序活动应用一致份额，不将下游毛条整理分配给落毛。各可销售产出的份额之和为一。废物处理负荷归其产生作业；不得为假定替代原生羊毛而创建负信用。总物理产出不得按负荷份额缩减。 | ghg-product-2011 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

各协议保留批次总量；汇总以可归属量除以验收落毛净千克质量，按每 1 kg 参考流报告。物理联合产出量不做负荷分配即可归一化。原始与归一化记录分别保留。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_joint | joint_combing | 进料及分离产出 | 批次称重 | 批次；物种；来料态；净进料；毛条质量；未打包落毛质量；库存变化；实测含水率；已有油剂 | 采用经校准的秤及接收、分离点批次含水率检测；核对供应商与工厂记录 | kg | 每批次 | 覆盖全部纳入班次的完整声明批次；披露季节性及缺失记录 | 指定工厂及实际纳入工序 | 每 1 kg 参考流 | 校准；可追溯批次记录；平衡核对；缺口评估 |
| cp_noil | noil_finishing | 落毛转移、验收与剔除 | 批次称重与检验 | 批次；转移质量；验收落毛净质量；剔除质量；皮重；含水率；规格；库存变化 | 使用经校准的秤称量并排除袋；保留实测含水率及采购方检验记录 | kg | 每批次 | 覆盖全部纳入班次的完整声明批次；披露季节性及缺失记录 | 指定工厂及实际纳入工序 | 每 1 kg 参考流 | 校准；可追溯批次记录；平衡核对；缺口评估 |
| cp_energy | joint_combing; noil_finishing | 电力 | 计量读数 | 工序；表号；起止千瓦时；运行小时；空载时间；分配份额；供应方 | 专用计量表或有记录的经测试分表平衡；区分落毛专用与共用电量 | kWh | 每班及批次 | 覆盖全部纳入班次的完整声明批次；披露季节性及缺失记录 | 指定工厂及实际纳入工序 | 每 1 kg 参考流 | 校准；可追溯批次记录；平衡核对；缺口评估 |
| cp_auxiliary | joint_combing | 矿物油及废油 | 维护记录 | 油品身份；领用质量；保有库存；收集废油质量；去向；共用线小时 | 库存核对及废油容器称重；由供应商记录确认矿物基础油组成 | kg | 每次维护 | 覆盖全部纳入班次的完整声明批次；披露季节性及缺失记录 | 指定工厂及实际纳入工序 | 每 1 kg 参考流 | 校准；可追溯批次记录；平衡核对；缺口评估 |
| cp_residue | joint_combing | 植物残余物及捕集纤维粉尘分别记录 | 称重转移记录 | 单独物流编号；毛重；皮重；含水率；组成；去向 | 各物流分别称重，保留废物转移单；避免混淆空气排放与收集粉尘 | kg | 每次清出 | 覆盖全部纳入班次的完整声明批次；披露季节性及缺失记录 | 指定工厂及实际纳入工序 | 每 1 kg 参考流 | 校准；可追溯批次记录；平衡核对；缺口评估 |
| cp_air | joint_combing | 外部颗粒物释放 | 排放监测 | 出口；排放介质；粒径分级；浓度；排气体积；时长；治理状态 | 在实际对外出口进行代表性监测；核对检测时长及批次排气记录 | kg | 代表性运行条件及批次 | 覆盖全部纳入班次的完整声明批次；披露季节性及缺失记录 | 指定工厂及实际纳入工序 | 每 1 kg 参考流 | 校准；可追溯批次记录；平衡核对；缺口评估 |
| cp_pack | noil_finishing | 聚丙烯编织袋 | 包装消耗 | 配置；空袋质量；领用数量；退回；复用历史 | 称量实际空袋；核对生产领退用；各组件分开记录 | kg | 每种配置及批次 | 覆盖全部纳入班次的完整声明批次；披露季节性及缺失记录 | 指定工厂及实际纳入工序 | 每 1 kg 参考流 | 校准；可追溯批次记录；平衡核对；缺口评估 |
| cp_allocation | joint_combing | 联合生产分配 | 分离点价值及因果证据 | 全部可销售产出；干质量及交付质量；价格；币种；期间；分离点；方法；因果检验 | 保留同期分离点销售／转移价格及采用的物理研究；排除毛条下游增加值 | kg; currency | 每批次及价格期间 | 覆盖全部纳入班次的完整声明批次；披露季节性及缺失记录 | 指定工厂及实际纳入工序 | 每 1 kg 参考流 | 校准；可追溯批次记录；平衡核对；缺口评估 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| campaign_normalization | 所有清单行 | 可归属批次交换量 / 验收落毛净质量（千克）；输出按每 1 kg 参考流。联合总质量及分配台账另存。 | cp_joint; cp_noil; cp_energy; cp_auxiliary; cp_residue; cp_air; cp_pack; cp_allocation | 每参考流交换数量 |  |
| energy_conversion | joint_electricity；finishing_electricity | 实测千瓦时 × 3.6 = 兆焦；保留表读数，先归属再进行批次归一化。 | cp_energy | 每参考流兆焦 |  |
| moisture_reconciliation | carded_wool_input；unbaled_noils_output；unbaled_noils_input；combed_wool_coproduct；reference_product_noils；rejected_noil_fibre | 干质量 = 净湿质量 ×（1 − 实测湿基含水率分数）。按干基对比期初库存 + 投入与产出 + 期末库存，并解释残差。 | cp_joint; cp_noil; cp_residue | 干物质平衡；保留实测参考质量 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| dq_identity | 纤维及路线 | 核实绵羊毛来源、此前洗毛／梳理、未实施排除处理及采购方验收；不得替代动物细毛路线。 | 供应商声明与检测记录 |
| dq_completeness | 全部交换 | 记录产率、库存变化、剔除量、公用工程、维护及排放接口；区分不存在、未测及排除。不设默认配方、温度、能耗、产率或损耗。 | 完整批次台账及缺口登记 |
| dq_uncertainty | 测量与分配 | 披露校准、含水率检测、代表性排放监测、分配价格期、不确定性及敏感性。符合本规则不代表通用质量批准。 | 仪器及分配证据 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_scope | 数据集 | 要求全部参考限定信息与确切干法起点态；动物细毛、湿处理或纱线制造标为未覆盖。 | woolmark-topmaking |
| validate_balance | 质量及内部转移 | 核实验收落毛净分母为正、英中参考行一致、称重校准、含水率换算、库存核对及内部落毛转移抵消。调查未解释质量差异；不编造允许偏差。 |  |
| validate_allocation | 联合台账 | 核实分离点、全部可销售产出、直接归属工序、共同分配证据及份额和为一。拒绝没有另行论证方法的零负荷落毛。 | ghg-product-2011 |
| validate_interfaces | 流身份及排放 | 各身份须匹配确切属性、单位、环境介质及路线。缺失排放监测为不确定，不是零。未解决身份保留为声明缺口；不得以纺纱废料或通用原毛替代。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 声明落毛路线的前景制造数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 带核实上游关联及分配的下游纺织建模中的声明绵羊毛落毛供应 |
| excluded_use | 全部 CPC 覆盖、动物细毛、染色／碳化落毛、零负荷再生纤维、纱线性能比较及自动从摇篮到工厂门声明 |
| required_metadata | 场址与期间；批次组成；起点态；工序覆盖；验收；含水率／质量基准；落毛与毛条产出；上游关联；包装；分配及价格 |
| required_quality_disclosure | 身份缺口；测量完整性；排除项；不确定性；采样代表性；分配敏感性及颗粒物流影响评价覆盖 |
| update_trigger | 纤维来源、来料态、精梳技术、处理、包装、分配价格、排放监测或上游代表性变化 |

## 11. 数据源

| 来源 ID | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| un-cpc-3-2025 | official_guidance | UNSD, CPC Ver. 3.0 Structure, 30 June 2025, row 26140. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 仅分类名称；不是生产方法或批准 |
| woolmark-topmaking | extension_guidance | The Woolmark Company, Top-making, undated official page, sections Gilling and Combing. https://www.woolmark.com/industry/product-development/wool-processing/worsted-top-making/ | 绵羊毛定性路线及落毛／毛条分离；无定量工艺假设，不外推动物细毛 |
| ghg-product-2011 | official_guidance | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), chapter 9, printed p. 63, Tables 9.1–9.2 (PDF p. 65). https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 作为声明的方法参考支持分配层级；不是现行法律、纺织产品认证或落毛专属因子 |
