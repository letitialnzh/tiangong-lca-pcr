---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.stitch-quilted-polyester-taffeta-wadding
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 单面缝合绗缝聚酯塔夫绸絮片匹料

## 1. 范围与适用性

本PCR覆盖干法机械缝合绗缝匹料：一种购入的已加工平纹聚酯长丝塔夫绸面料与一种购入的高蓬松聚酯絮片，以聚酯连续复丝缝纫线缝合。代表输出为供后续服装衬里加工的单面保温卷材。须声明纤维来源、固结辅料及整理剂；“聚酯”不表示所有非纤维组分均为PET。商业结构由 xmt-q1 和 ptg-one-sided 支持，缝合路线背景由 schmetz-quilting 支持。这些来源确立有限路线，不代表行业平均配方。

排除制成被褥、枕头、床垫装配、成衣、刺绣、毡及非织造材料制造、双面夹层匹料、其他纤维结构、纯胶粘或热合绗缝、泡沫填充，以及加工场址内的涂层、洗涤、染色和热定形。这些路线须另行方法评估并明确扩展过程。CPC 3.0 27999宽于本范围；本记录不证明整个分类的覆盖。不给定使用寿命、保温性能等同性、健康声明或合规批准。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.stitch-quilted-polyester-taffeta-wadding |
| classification_refs | CPC 3.0: 27999；较窄语义范围参考，不代表已接受映射 |
| covered_products | 单面缝合绗缝聚酯塔夫绸絮片匹料 |
| excluded_products | 双面或混纤绗缝；熔合或胶粘结合；制成品；上游面料及絮片形成 |
| representative_product | 单面缝合绗缝聚酯塔夫绸絮片匹料 |
| production_route | 接收与放卷；叠层对齐；多针缝合；修边；检验；卷绕；实际包装；条件性可归属维护 |
| market_state | 验收合格的中间匹料卷材，一面面料、另一面外露絮片 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 加工厂门口的缝合聚酯衬里材料 |
| How much | 1 kg验收合格绗缝纺织品净质量，不含包装 |
| How well | 符合声明的塔夫绸、絮片及缝纫线规格；层间连接完整，并符合客户规定的幅宽、图案、缝迹外观及缺陷验收条件 |
| How long or cycle | 制造厂门口一个生产统计期；不定义使用期时长或保温服务功能等同性 |
| reference_flow_link | finished_roll |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 单面缝合绗缝聚酯塔夫绸絮片匹料 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 单面结构；塔夫绸组织及纤维组成；絮片纤维组成、固结路线与蓬松度；添加剂及整理；原生/再生来源与证据；缝纫线牌号及线密度；线迹类型、图案及密度；验收幅宽、长度及完整成品实测单位面积质量；净质量及调湿态；客户验收条件；场址、电压及生产期；包装及外包工序 |

前景数据集须声明全部限定信息。成品UUID为空表示明确身份缺口，不得以普通织物或制成被褥替代。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | finished_roll | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 以校准秤称量验收调湿卷材，扣除实测卷芯与包膜皮重。汇总统计期验收净产量；不含废品，返工后可售产量只计一次。 |
| area_mass | finished_roll | Mass / Area | kg; m2 | 以实测完整成品净质量除以实测验收面积。仅絮片的标称g/m2不是复合成品单位面积质量；幅宽和长度须对应验收修边后的输出。 完整成品的该比值仅用于成品输出。taffeta_input 与 wadding_input 各自保留独立实测的实际 kg；需要面积换算时，采用该输入自身实测供货状态克重、领退面积及损耗记录，不采用复合成品比值。 |
| electricity_conversion | quilting_electricity; finishing_electricity | Net calorific value | MJ | 保留公开流的引用属性。按1 kWh = 3.6 MJ换算校准电表读数；记录计量范围及分配。 |
| basis_consistency | 所有清单行 | 各行指定属性 | 各行指定单位 | 所有交换使用同一验收纺织品净质量及统计期。面积和卷数作为补充，未有实测质量换算时不得替代kg分母。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 加工场址接收已加工染色聚酯塔夫绸、成型聚酯絮片及缝纫级聚酯线 |
| starting_condition_role | 购入或转入中间产品；本前景无原纤维转化 |
| product_classification_scope | 宽泛CPC 27999内的单面机械缝合聚酯匹料 |
| recursive_input_rule | 接收同类别绗缝匹料须单列输入并关联上游数据集；仅计后续范围内作业，不重复已完成绗缝 |
| upstream_dataset_requirement | 分别关联代表性的塔夫绸（含织造和染色）、絮片（含纤维和固结）、缝纫线、电力、油、包装及场外处理数据集。若其他路线涉及农业纤维原料，其农业生产不属于本加工前景。 |
| disclosure | 仅为前景gate-to-gate；披露外包缝合、运输链接、上游缺失、排除、计量、废物去向及未解决身份。缺少上游及运输关联时不得声称完整cradle-to-gate。 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_dry_route | quilting; finishing | 纳入接收、放卷、叠层喂入、缝合、可归属压缩机和抽尘电量、检验、修边、卷绕及实际包装。计量实际作业，不以铭牌数据作清单。 | mammut-vmk |
| boundary_finishing | 前景 | 供应塔夫绸已染色并整理。不假定湿法整理废水或燃烧排放。若发生洗涤、涂层、热合或锅炉运行，本有限路线不充分，使用前须另列过程、原子交换及实测排放。 | ptg-one-sided |
| boundary_transfers | quilted_intermediate_out; quilted_intermediate_in | 配对内部转移，仅合并对应过程时抵消。外包作业须作为有独立记录的输入关联，不得静默排除。 |  |
| boundary_actual_exchanges | 前景支持及包装 | 这些行卡定义声明路线，不代表场址清单穷尽。每项实际消耗的针、替换滤材、不同润滑剂、其他包装组件或产生的包装废料，须另列一个化学或物理明确的原子行。采集数量、上游或处理关联及身份；不得静默遗漏已观察交换或以集合标签代替。包装和维护衡算须与纺织质量分别核对。不设默认截断。 | |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | inclusion_condition | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| quilting | 接收、叠层喂入及缝合 | required | 全部范围内产品 | 前景缝合装配 | 每 1 kg 参考流 |
| finishing | 修边、检验、卷绕及包装 | required | 包装组件仅实际使用时 | 前景完成 | 每 1 kg 参考流 |
| maintenance | 可归属用油维护 | conditional | 实际使用矿物油或收集废油时 | 前景支持 | 每 1 kg 参考流 |

### 过程：接收、叠层喂入及缝合 (`quilting`)

#### 输入

##### 产品流

###### 染色平纹聚酯长丝塔夫绸 (`taffeta_input`)

接收已织造、已完成加工的聚酯塔夫绸，声明染色态、整理、幅宽、单位面积质量及供应批号。织造和染整属于来料上游，不在此干法加工过程重复计入。

- 选定流：染色平纹聚酯长丝塔夫绸
- 流属性/单位：质量 / kg
- 数量规则：实测可归属批次交换量除以匹配的验收纺织品净kg，每 1 kg 参考流
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 高蓬松聚酯纤维絮片 (`wadding_input`)

记录一种购入的成型聚酯絮片，注明成网固结路线、蓬松度、纤维来源及粘合剂或整理剂。不得替代为松散PET纤维或致密过滤布。粘合剂化学组成及非纤维物质含量须与纤维组成分别披露。

- 选定流：高蓬松聚酯纤维絮片
- 流属性/单位：质量 / kg
- 数量规则：实测可归属批次交换量除以匹配的验收纺织品净kg，每 1 kg 参考流
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 连续复丝聚酯缝纫线 (`thread_input`)

记录实际使用的同一规格缝纫级聚酯针线和弯针线。若使用不同牌号，应拆成独立原子行。记录线密度、捻度及整理；不得用原丝代替缝纫线。

- 选定流：连续复丝聚酯缝纫线
- 流属性/单位：质量 / kg
- 数量规则：实测可归属批次交换量除以匹配的验收纺织品净kg，每 1 kg 参考流
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：`schmetz-quilting`

###### 交流电 (`quilting_electricity`)

仅在中国电网平均用户端供电且电压低于1千伏时采用此身份。计量放卷、缝合、抽尘及可归属压缩机用电；扣除已在后整理或维护申报的电量。其他地域、电压及自发电须另用核验流。设备铭牌不能作为耗量。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 / MJ
- 数量规则：计量kWh乘以3.6 MJ/kWh，再除以匹配的验收纺织品净kg，每 1 kg 参考流
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 未经检验的单面缝合绗缝聚酯塔夫绸絮片 (`quilted_intermediate_out`)

称量转入后整理的内部卷材。此转移不是额外可售产品，合并数据集时应与后整理对应输入抵消。

- 选定流：未经检验的单面缝合绗缝聚酯塔夫绸絮片
- 流属性/单位：质量 / kg
- 数量规则：实测可归属批次交换量除以匹配的验收纺织品净kg，每 1 kg 参考流
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_transfer`
- 来源：

##### 废物流

###### 聚酯缝纫线修剪废料 (`thread_waste`)

单独收集线头及缝纫启动废线，记录实际去向。不得默认回收废线抵扣原生线投入。

- 选定流：聚酯缝纫线修剪废料
- 流属性/单位：质量 / kg
- 数量规则：实测可归属批次交换量除以匹配的验收纺织品净kg，每 1 kg 参考流
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste`
- 来源：

###### 捕集聚酯纤维粉尘 (`captured_dust`)

条件行：称量从干式收集装置移除的聚酯粉尘。如更换受污染滤材，须增补单独身份；不能从捕集量推断环境排放。

- 选定流：捕集聚酯纤维粉尘
- 流属性/单位：质量 / kg
- 数量规则：实测可归属批次交换量除以匹配的验收纺织品净kg，每 1 kg 参考流
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste`
- 来源：

##### 基本流

###### 排入空气的聚酯纤维颗粒物，子介质未指定 (`pet_dust_air`)

条件行：仅以监测或经验证的物料衡算支持，记录实际越过场址边界排入空气的未捕集聚酯纤维粉尘。捕集粉尘属于废物而非空气排放。不假定排放因子、粒径分段或必然排放。

选定身份为空气、子介质未特指且粒径未特指的颗粒物排放类别。实际聚酯来源的材料组成、监测、治理及释放依据作为过程限定保留；该身份不提供特定聚合物化学组成、粒径分布、默认数量或微塑料表征因子，须核对精确流与所选影响评价方法的覆盖。实测确认粒径或接收子介质时改用相应已核实身份。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测可归属批次交换量除以匹配的验收纺织品净kg，每 1 kg 参考流
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_emission`
- 来源：

### 过程：修边、检验、卷绕及包装 (`finishing`)

#### 输入

##### 产品流

###### 未经检验的单面缝合绗缝聚酯塔夫绸絮片 (`quilted_intermediate_in`)

与 quilted_intermediate_out 使用相同批次、调湿质量及物理身份。

- 选定流：未经检验的单面缝合绗缝聚酯塔夫绸絮片
- 流属性/单位：质量 / kg
- 数量规则：实测可归属批次交换量除以匹配的验收纺织品净kg，每 1 kg 参考流
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_transfer`
- 来源：

###### 交流电 (`finishing_electricity`)

仅用于中国电网平均用户端低于1千伏的供电；将检验、修边、卷绕及包装电量与缝合分别计量。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 / MJ
- 数量规则：计量kWh乘以3.6 MJ/kWh，再除以匹配的验收纺织品净kg，每 1 kg 参考流
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy`
- 来源：

###### 低密度聚乙烯薄膜（PE-LD） (`ldpe_wrap`)

条件行：记录实际领用的LDPE卷材包膜，包括包装损耗。此身份不适用于PVC、多层阻隔膜或聚合物树脂。包装不计入纺织品净参考质量。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：质量 / kg
- 数量规则：实测可归属批次交换量除以匹配的验收纺织品净kg，每 1 kg 参考流
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_pack`
- 来源：

###### 圆纸筒 (`paper_core`)

条件行：记录实际随货交付的纸板卷芯。单独测量卷芯皮重；复用次数须来自可追溯退回记录，不假定寿命。

- 选定流：圆纸筒 `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- 流属性/单位：质量 / kg
- 数量规则：实测可归属批次交换量除以匹配的验收纺织品净kg，每 1 kg 参考流
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

###### 单面缝合绗缝聚酯塔夫绸絮片匹料 (`finished_roll`)

修边、检验后验收可售的单面绗缝匹料，具有声明的双层结构与缝合方式，不含卷芯及包膜。

- 选定流：单面缝合绗缝聚酯塔夫绸絮片匹料
- 流属性/单位：质量 / kg
- 数量规则：1 千克
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_output`
- 来源：

##### 废物流

###### 缝合聚酯塔夫绸絮片复合修边废料 (`composite_offcuts`)

记录此一种结构的复合边料及不合格卷长，注明保留缝纫线及实际处置或回收去向。不得与散线或含污染废油混合。

- 选定流：缝合聚酯塔夫绸絮片复合修边废料
- 流属性/单位：质量 / kg
- 数量规则：实测可归属批次交换量除以匹配的验收纺织品净kg，每 1 kg 参考流
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste`
- 来源：

##### 基本流

### 过程：可归属用油维护 (`maintenance`)

#### 输入

##### 产品流

###### 矿物基缝纫机润滑油 (`mineral_oil`)

条件行：仅当实际维护产品为矿物基油时使用。记录牌号、添加剂、补充量及设备范围。合成PAO润滑油不属于此身份，须另列行。

- 选定流：矿物基缝纫机润滑油
- 流属性/单位：质量 / kg
- 数量规则：实测可归属批次交换量除以匹配的验收纺织品净kg，每 1 kg 参考流
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_maintenance`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废矿物基缝纫机润滑油 (`spent_oil`)

条件行：实际收集的废油须与补充油、水及污染吸附物分别计量。记录组成及适用时的接收处置去向；不假定固定油损失。

- 选定流：废矿物基缝纫机润滑油
- 流属性/单位：质量 / kg
- 数量规则：实测可归属批次交换量除以匹配的验收纺织品净kg，每 1 kg 参考流
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_maintenance`
- 来源：

##### 基本流

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_trace | 各产品批次 | 先将单独计量的缝合电量、领料及废品归属实际产品批次。共享设备用电及支持作业采用实测运行时间结合实测工况功率或分表电量，与场址总量核对，披露待机和换型归属。产品针迹密度或蓬松度不同时，仅按质量分电须有实证依据。 |  |
| allocation_scrap | 废料及返工 | 除非有记录的共产品功能要求细分或分配，否则将不合格生产负荷留在合格产品中。废料出售本身不能证明应给予避免原生生产信用。记录回收边料及处理，不重复内部回用；披露任何多输出分配基准、价格、期间及敏感性。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_material | quilting | taffeta_input; wadding_input; thread_input | 质量领用 | 批号；组成；整理；来源；领用kg；退回kg；期初期末库存；验收产量kg | 校准称重及关联批次的领料账；核对领用、在制品及验收产量 | kg | 每批；每统计期核对 | 完整声明期，包括启动、停机、废品及返工 | 声明的加工场址及可归属外包作业 | 每 1 kg 参考流 | 校准、批次账、原始记录、不确定性及核对 |
| cp_output | finishing | finished_roll | 验收净质量 | 卷号；毛重kg；实测皮重kg；净重kg；幅宽m；长度m；完整成品面密度；调湿；缺陷 ；统计期汇总组标识；同产品结构等级；失败及零产出批号；返工来源及最终验收卷号 | 称量每卷验收产品；测量验收面积；按声明的客户条件检查层间连接及缝迹缺陷  将全部批次（含整批失败）核对到同产品统计期汇总组；保留零产出批活动供分子归属，最终验收返工品只计一次。按该组汇总验收净质量用于normalize_batch。 | kg; m2 | 每批；每统计期核对 | 完整声明期，包括启动、停机、废品及返工 | 声明的加工场址及可归属外包作业 | 每 1 kg 参考流 | 校准、批次账、原始记录、不确定性及核对 |
| cp_transfer | quilting; finishing | quilted_intermediate_out; quilted_intermediate_in | 内部质量转移 | 批号；转移kg；在制品kg；调湿；输出及接收过程 | 相同调湿基准的配对校准称重记录 | kg | 每批；每统计期核对 | 完整声明期，包括启动、停机、废品及返工 | 声明的加工场址及可归属外包作业 | 每 1 kg 参考流 | 校准、批次账、原始记录、不确定性及核对 |
| cp_energy | quilting; finishing | quilting_electricity; finishing_electricity | 电力计量 | 表号；期初kWh；期末kWh；电压；地域；设备工况；运行时间；压缩机抽尘分配；验收产量kg | 对匹配批次读取校准分表；独立核对支持电量与场址总表 | kWh; MJ | 每批；每统计期核对 | 完整声明期，包括启动、停机、废品及返工 | 声明的加工场址及可归属外包作业 | 每 1 kg 参考流 | 校准、批次账、原始记录、不确定性及核对 |
| cp_pack | finishing | ldpe_wrap; paper_core | 包装质量 | 组件牌号；领用kg；损耗kg；皮重kg；可追溯退回；验收产量kg | 分别称量各包装组件，核对实际领用及复用卷芯退回 | kg | 每批；每统计期核对 | 完整声明期，包括启动、停机、废品及返工 | 声明的加工场址及可归属外包作业 | 每 1 kg 参考流 | 校准、批次账、原始记录、不确定性及核对 |
| cp_waste | quilting; finishing | thread_waste; composite_offcuts; captured_dust | 废物质量 | 废物流身份；产生kg；回用kg；去向；运输；污染；验收产量kg | 独立校准容器称重及去向凭证；不同废物不得合并 | kg | 每批；每统计期核对 | 完整声明期，包括启动、停机、废品及返工 | 声明的加工场址及可归属外包作业 | 每 1 kg 参考流 | 校准、批次账、原始记录、不确定性及核对 |
| cp_emission | quilting | pet_dust_air | 条件性监测排放 | 物质身份；采样方法；时长；实际空气体积；浓度；捕集边界；子介质；不确定性；验收产量kg | 采用统计期代表性实测排放；证明颗粒物身份，以实测风量和时长换算浓度；未发生证据与缺失数据分别记录 | kg | 每批；每统计期核对 | 完整声明期，包括启动、停机、废品及返工 | 声明的加工场址及可归属外包作业 | 每 1 kg 参考流 | 校准、批次账、原始记录、不确定性及核对 |
| cp_maintenance | maintenance | mineral_oil; spent_oil | 油质量记录 | 牌号；矿物基；领用kg；移除废油kg；污染；设备服务时间；分配；去向；验收产量kg | 独立称量补充油及移除废油，保留供应与维护记录，并按实际设备服务产出归属维护 | kg | 每批；每统计期核对 | 完整声明期，包括启动、停机、废品及返工 | 声明的加工场址及可归属外包作业 | 每 1 kg 参考流 | 校准、批次账、原始记录、不确定性及核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_batch | 所有清单行 | 对同一声明产品结构、等级、场址及调湿状态建立有记录的统计期汇总组，纳入全部可归属启动、停机、整批失败、废品及返工。对每项交换j，归一化量=该汇总组全部可归属实测交换j之和/同组验收纺织品净质量总kg。返工产品仅在最终验收时计一次；废品不计入合格产出，其可归属交换仍留在分子。不得对整批失败用零产量归一化、删去其负担或平均各批比率。整个汇总组没有正合格产出时，保留未归一化清单并要求审查，不虚构产出或每kg结果。不得混合无关产品、除以包装卷毛重或重复计内部转移。 | cp_material; cp_output; cp_transfer; cp_energy; cp_pack; cp_waste; cp_emission; cp_maintenance | 各交换单位每 1 kg 参考流 |  |
| electricity_conversion | quilting_electricity; finishing_electricity | MJ电量 = 电表kWh电量乘以3.6；再应用 normalize_batch。此精确单位换算不是能耗强度假设。 | cp_energy; cp_output | MJ per 1 kg reference flow |  |
| area_reporting | finished_roll | 验收面积 = 各卷验收幅宽乘以验收长度之和；完整成品面密度 = 验收纺织品净kg / 验收m2。仅有面积统计时，应称量具有完整结构的代表样并验证卷质量换算。不得以仅絮片g/m2作为成品总质量。 | cp_output | m2及kg/m2，作为kg参考的补充 | xmt-q1 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | finished_roll; taffeta_input; wadding_input; thread_input | 保留组成、加工来料态、固结辅料、供应批号、实际缝迹结构及客户验收记录；再生纤维含量须可追溯证明。 | cp_material; cp_output |
| dq_complete | 所有清单行 | 按一致含湿基准核对纺织领用、验收质量、废品、在制品、捕集粉尘及任何已证实排放。声明剩余不平衡并调查；不得捏造闭合或零排放。 | cp_material; cp_transfer; cp_waste; cp_emission |
| dq_temporal | 场址记录 | 采用一个完整代表生产期，报告实际日期、技术、产能利用、启动停机、批次组合及覆盖缺失。不以文献配方、能耗、温度或产率作默认。 | cp_energy; cp_output |
| dq_uncertainty | 计量及关联 | 保留校准与不确定性、面积质量换算检查、上游代表性、分配敏感性及全部未解决UUID。记录缺失不同于工序不适用。 | cp_output; cp_energy; cp_waste |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | finished_roll | 拒绝用于单面聚酯缝合路线以外的产品；要求完整限定及实际客户验收。不得从中间纺织品记录推断成衣合规或保温等同性。 |  |
| validate_basis | 所有清单行 | 要求正值验收净kg、实测皮重、共同调湿态、内部转移配对及可复现归一化交换。以直接卷称重核对完整复合面密度；不得以标称絮片规格作分母。  核查同产品统计期汇总组分子完整纳入整批失败，且采用同组唯一正合格质量分母。零产出汇总组保留未归一化状态并要求审查，不得平均批次比率或删去失败批交换。 | xmt-q1 |
| validate_identity | 公开流及未解决行 | 使用前核验公开流类型、引用属性、单位、地域、电压、材质及来料态。空UUID仍保留精确命名交换，并阻止全关联清单声明；身份解决不代表方法学批准。 |  |
| validate_emissions | pet_dust_air; captured_dust | 将空气基本流排放与捕集废物及技术圈水分开。本干法路线不强制湿法废水或燃烧排放；实际额外作业须完整增补过程并核验交换身份。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 干法绗缝加工前景数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 作为声明服装衬里或其他适用下游匹料加工的输入，结构、地域、期间及上游关联须匹配 |
| excluded_use | 整个CPC覆盖；上游及运输不完整的cradle-to-gate；成衣或被褥完整LCA；保温服务比较；未经测量的配方或生命周期声明 |
| required_metadata | 限定信息；净参考质量；边界起点；场址及日期；计量；输入上游数据集；废物去向；分配；外包过程 |
| required_quality_disclosure | 计量不确定性；实际组成及质量衡算；采样；遗漏工序；UUID缺口；上游完整性；科学审查状态 |
| update_trigger | 层结构、纤维来源、整理、缝合图案、场址供能、设备、上游来源、废物路线变化，或实质计量错误证据 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc-2025 | official_guidance | UNSD CPC Version 3.0 Explanatory Notes, 30 June 2025, printed/PDF p.130, 27999. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅宽泛分类名称；不规定具体路线或方法 |
| xmt-q1 | handbook | XM Textiles: Quilted fabric, 1-sided (Q1), undated technical data sheet, p.1. https://www.xmtextiles.com/workwear-fabrics/tds/Quilted-fabric-1-sided-Q1-TDS%20-XMT.pdf | 单面聚酯塔夫绸/絮片商业结构；区分絮片质量与复合成品总质量。列示示意规格不是PCR默认或合规批准。 |
| ptg-one-sided | handbook | Polish Textile Group: ONE-SIDED QUILTED FIBRE, undated product description, Description and Characteristics. https://polishtextilegroup.com/produkty_page/one-sided-quilted-fibre-en/ | 独立支持缝合聚酯塔夫绸/高蓬松非织造层结构；不采纳健康或认证声明 |
| schmetz-quilting | handbook | SCHMETZ Sewing Focus: Quilting, undated technical sewing information, PDF p.1 and pp.2-5. https://www.schmetz.com/mm/media/en/web/7_tochtergesellschaften/bilder_18/schmetz/pdfs_4/sewing_focus/SewingFocus_40_3075-36_Quilting_D.pdf | 多针匹料、缝纫级聚酯复丝线及缝迹缺陷检验背景；不作为默认针迹密度或强制换针频率 |
| mammut-vmk | handbook | Mammut: VMK Double Chainstitch-Multi-Needle Quilter, undated manufacturer page, material-roll feeding and thread-cutter features, Electrical/Mechanical Data. https://www.mammut.de/en/double-chainstitch-multi-needle-quilter-mammut-vmk | 一种设备的卷料喂入、缝合、剪线及压缩空气支持；额定数据不是实测能耗、产量或普遍路线要求 |
