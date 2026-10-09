---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.nylon-six-cotton-weft-greige-tyre-cord-fabric
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 尼龙 6 棉纬坯帘子布制造


## 1. 范围与适用性

本方法适用于以已制成的高强尼龙 6 复丝纱线，在场内初捻/复捻成经向帘线，并与稀疏、未染色未上浆的纯棉纬纱交织的未浸胶轮胎增强坯布。代表产品为按客户规格交付、供后续粘合处理的坯布卷。捻合帘线、帘线排布和未浸胶交付态使其区别于普通高强 PET 机织布。来源：`un-cpc-2025`；`century-nylon-cord`。

排除尼龙 66 及其他聚酰胺、PET、人造丝、芳纶、钢丝帘线、混合帘线、涤棉纬纱、仅用购入已复捻帘线的路线、场内聚合/纺丝/拉伸、上浆、染色、精练、粘合浸胶（RFL 或其他体系）、热拉伸/热定型、橡胶压延、轮胎成型/硫化、使用及处置。燃气供热、直接取水及场内废水处理需明确扩展方法，不得默默纳入。声明来料纺丝油剂，不将其混为粘合浸胶。此窄范围不代表整个 CPC 分类已覆盖。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.nylon-six-cotton-weft-greige-tyre-cord-fabric |
| classification_refs | CPC 3.0: 27996; narrower |
| covered_products | 未浸胶尼龙 6 帘线经纱、纯棉纬纱轮胎增强坯布 |
| excluded_products | 排除尼龙 66 及其他聚酰胺、PET、人造丝、芳纶、钢丝帘线、混合帘线、涤棉纬纱、仅用购入已复捻帘线的路线、场内聚合/纺丝/拉伸、上浆、染色、精练、粘合浸胶（RFL 或其他体系）、热拉伸/热定型、橡胶压延、轮胎成型/硫化、使用及处置。燃气供热、直接取水及场内废水处理需明确扩展方法，不得默默纳入。声明来料纺丝油剂，不将其混为粘合浸胶。此窄范围不代表整个 CPC 分类已覆盖。 |
| representative_product | 客户规格的尼龙 6 捻合帘线经纱、稀疏棉纬布卷；不虚构旦数或捻度 |
| production_route | 购入拉伸高强纱 -> 初捻/复捻 -> 整经/卷轴 -> 织造 -> 检验 -> 包装 |
| market_state | 未浸胶坯布卷，规定调湿态，工厂门口 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供供后续轮胎帘布粘合处理的纺织增强前体 |
| How much | 1 千克净合格坯帘子布 |
| How well | 声明尼龙 6 等级、棉纯度、股数/捻度、帘线间距、幅宽、调湿单位面积质量及客户验收试验；不等同于浸胶粘合性能 |
| How long or cycle | 一个制造周期至放行；不赋予服役寿命或轮胎耐久性 |
| reference_flow_link | finished_greige |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 尼龙 6 棉纬坯帘子布 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 尼龙 6 聚合物及纱线等级；纱线油剂；纯棉未上浆未染色纬纱；线密度；股数；捻向及捻度；帘线间距；组织；有效幅宽；调湿单位面积质量；含水调湿程序；验收试验；未浸胶坯态；地域；期间；场内工序；包装 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用规定调湿后实测净合格织物质量。排除卷芯/包装膜、不合格布及样品。保留尼龙/棉含水基准。 |
| energy_property | cord_electricity; weave_electricity; release_electricity; humidity_electricity | 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | kWh | 保留公开能量参考及单位组；依据已核验单位定义 1 kWh = 3.6 MJ。不得改写为质量。 |
| water_mass | tap_water; humidity_drain; water_vapour | Mass | kg | 使用公开质量基准 kg；仅有体积的水记录须具备实际状态下实测密度，并随 cp_water 保留。水蒸气质量不等于液态废水。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收购入的已纺丝/拉伸尼龙 6 高强纱及可织造棉纱；前景不接收聚合物切片 |
| starting_condition_role | upstream product input |
| product_classification_scope | 仅轮胎帘子布分类内所述尼龙 6/棉坯布子范围 |
| recursive_input_rule | 跨场门的同类别布投入只作为一个上游产品投入，不递归重建其内含生产。仅购入布的路线不在本方法内。内部帘线/布转移在场址汇总时抵消。 |
| upstream_dataset_requirement | 扩展模型关联代表性供应商纱线、棉纺、电力、水、包装及场外废物处理数据集。棉花农业和聚合物合成为上游，不属于织造活动。 |
| disclosure | 声明工序、来料等级、携带油剂、未覆盖路线、内部转移、调湿、公用工程、控制设施和废物去向。仅前景数据不能称为完整摇篮到大门。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| sb_route | foreground | 包括捻线、准备、织造、检验及包装，以及实际电动压缩空气、除尘和调湿；所声明坯布路线排除浸胶/热定型/橡胶工序。 | century-nylon-cord |
| sb_accounting | all inventory rows | 外部交换与内部转移分开计量；若实际消耗辅助化学品、过滤器或包装，增加各自原子行。不得以集合行代替未指定物料清单。 |  |
| sb_treatment | waste outputs | 此路线将排污液及固体废物送场外。披露去向及上游/背景关联，处理不得重复计量。依据研究目标单独披露设备资本品是否纳入。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| cording | 纱线接收、初捻及复捻 | required | 始终纳入；包括卷绕及实际捻线顺序 | 前景制造 | 每 1 kg 参考流 |
| weaving | 整经及稀疏纬纱织造 | required | 始终纳入；包括卷轴、张力控制及实际存在的压缩空气和除尘 | 前景制造 | 每 1 kg 参考流 |
| release | 检验、净重称量及包装 | required | 始终纳入；包括破坏性抽检损耗 | 前景制造 | 每 1 kg 参考流 |
| humidification | 电动车间调湿 | conditional | 仅在实际电动调湿使用外购自来水时纳入 | 前景制造 | 每 1 kg 参考流 |

各工段数量使用相同最终合格质量分母。内部帘线及坯布行保留工段平衡，汇总时抵消。压缩机通过电量建模，不再为同一场内压缩机加入外购压缩空气。实际存在捕集绒尘时须按组成建立废物行，不等同于残余空气颗粒物。

### 过程：纱线接收、初捻及复捻（`cording`）

#### 输入

##### 产品流

###### 高强尼龙 6 复丝纱线（`nylon_yarn`）

接收已纺丝拉伸、未染色且纺丝油剂明确的纱线。追溯聚合物、线密度、强度试验和供应批号；聚合与纺丝属于上游。

- 选定流：高强尼龙 6 复丝纱线
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每 1 kg 参考流的实测交换数量；采用 cp_exchange。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_exchange`
- 来源：`century-nylon-cord`

###### 交流电（`cord_electricity`）

此公开身份仅用于中国用户端低于 1 kV 的电网平均供电；其他地域、电压、自发电或合同供电需匹配相应身份。按工段电表采集，将压缩机和通风分摊电量只计一次。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：每 1 kg 参考流的实测交换数量；采用 cp_energy。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：`century-nylon-cord`

###### 矿物润滑油（`mineral_oil`）

仅在机械维护使用矿物油时纳入；采集油品等级、库存变化和消耗量。来料携带的纺丝油剂不得重复记为购入。

- 选定流：矿物润滑油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每 1 kg 参考流的实测交换数量；采用 cp_exchange。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_exchange`
- 来源：`century-nylon-cord`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 未处理尼龙 6 捻合轮胎帘线（`cord_output`）

按规定捻向、股数和捻度完成初捻及复捻后内部转移；称量转移净质量。

- 选定流：未处理尼龙 6 捻合轮胎帘线
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每 1 kg 参考流的实测交换数量；采用 cp_exchange。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_exchange`
- 来源：`century-nylon-cord`

##### 废物流

###### 尼龙 6 纱线切头（`nylon_offcuts`）

捻线工段外送的单独尼龙 6 纱线废切头；可用纱回用为内部流，不计外送废物。

- 选定流：尼龙 6 纱线切头
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每 1 kg 参考流的实测交换数量；采用 cp_exchange。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_exchange`
- 来源：`century-nylon-cord`

###### 废润滑油（`spent_oil`）

仅在单独收集废机械润滑油时纳入；记录污染状况及场外处理去向。不得与含水冷却液合并。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每 1 kg 参考流的实测交换数量；采用 cp_exchange。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_exchange`
- 来源：`century-nylon-cord`

##### 基本流

### 过程：整经及稀疏纬纱织造（`weaving`）

#### 输入

##### 产品流

###### 未处理尼龙 6 捻合轮胎帘线（`cord_input`）

与 cord_output 匹配的内部转移；包括整经、卷轴和张力控制喂入。不得再次关联上游纱线数据集。

- 选定流：未处理尼龙 6 捻合轮胎帘线
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每 1 kg 参考流的实测交换数量；采用 cp_exchange。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_exchange`
- 来源：`century-nylon-cord`

###### 含棉重量达85%或85%以上的棉纱（缝纫线除外）（`cotton_weft`）

仅用于供应商确认的 100% 棉、未染色未上浆纬纱，非缝纫线。公开类别较宽；元数据和上游数据集选择须保留实际组成、纱支及来料加工态。

- 选定流：含棉重量达85%或85%以上的棉纱（缝纫线除外） `526fe0a1-be6d-4384-b609-4ca604628ec4`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每 1 kg 参考流的实测交换数量；采用 cp_exchange。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_exchange`
- 来源：`century-nylon-cord`

###### 交流电（`weave_electricity`）

此公开身份仅用于中国用户端低于 1 kV 的电网平均供电；其他地域、电压、自发电或合同供电需匹配相应身份。按工段电表采集，将压缩机和通风分摊电量只计一次。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：每 1 kg 参考流的实测交换数量；采用 cp_energy。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：`century-nylon-cord`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 未检验尼龙 6 棉纬坯帘子布（`greige_output`）

记录检验前内部布卷转移。稀疏棉纬固定尼龙帘线经纱位置；不包括粘合浸胶或橡胶涂覆。

- 选定流：未检验尼龙 6 棉纬坯帘子布
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每 1 kg 参考流的实测交换数量；采用 cp_exchange。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_exchange`
- 来源：`century-nylon-cord`

##### 废物流

###### 未染色棉纬纱切头（`cotton_offcuts`）

纯棉纬纱切头与尼龙纱、混合布废料分开；按各去向计量。

- 选定流：未染色棉纬纱切头
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每 1 kg 参考流的实测交换数量；采用 cp_exchange。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_exchange`
- 来源：`century-nylon-cord`

##### 基本流

###### 颗粒物，粒径未特指（`air_particles`）

仅在实测存在控制设施后残余颗粒物直接排向未特指空气、且无可靠粒径分级时纳入；捕集粉尘属于废物，不是空气排放。若已知城市/非城市介质或 PM 粒径，须使用匹配身份；不规定必然排放系数。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每 1 kg 参考流的实测交换数量；采用 cp_releases。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_releases`
- 来源：`century-nylon-cord`

### 过程：检验、净重称量及包装（`release`）

#### 输入

##### 产品流

###### 未检验尼龙 6 棉纬坯帘子布（`greige_input`）

与 greige_output 匹配的内部转移；按客户规格检验帘线间距、疵点、幅宽、捻度及拉伸/伸长性能。

- 选定流：未检验尼龙 6 棉纬坯帘子布
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每 1 kg 参考流的实测交换数量；采用 cp_exchange。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_exchange`
- 来源：`century-nylon-cord`

###### 交流电（`release_electricity`）

此公开身份仅用于中国用户端低于 1 kV 的电网平均供电；其他地域、电压、自发电或合同供电需匹配相应身份。按工段电表采集，将压缩机和通风分摊电量只计一次。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：每 1 kg 参考流的实测交换数量；采用 cp_energy。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：`century-nylon-cord`

###### 圆纸筒（`paper_core`）

仅在实际采用纸板卷芯交付时纳入；卷芯与织物分开称重。复用卷芯依据有记录的更换和周转，不虚构寿命。

- 选定流：圆纸筒 `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每 1 kg 参考流的实测交换数量；采用 cp_exchange。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_exchange`
- 来源：`century-nylon-cord`

###### 聚乙烯薄膜（`pe_wrap`）

仅在使用聚乙烯包装膜时纳入；记录树脂、薄膜等级、原生/再生成分和包装消耗。PET 膜及多层复合膜为不同交换。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每 1 kg 参考流的实测交换数量；采用 cp_exchange。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_exchange`
- 来源：`century-nylon-cord`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 尼龙 6 棉纬坯帘子布（`finished_greige`）

规定调湿态的合格净织物，不含包装和不合格布卷；不声称已具备橡胶粘合性能或轮胎寿命。

- 选定流：尼龙 6 棉纬坯帘子布
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_output`
- 来源：`century-nylon-cord`

##### 废物流

###### 尼龙 6 棉纬坯布废片（`fabric_scrap`）

计量送处理的不合格尼龙 6/棉混合坯布及破坏性试验废片。明确尼龙和棉比例，不得套用纯尼龙废料身份。

- 选定流：尼龙 6 棉纬坯布废片
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每 1 kg 参考流的实测交换数量；采用 cp_exchange。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_exchange`
- 来源：`century-nylon-cord`

##### 基本流

### 过程：电动车间调湿（`humidification`）

#### 输入

##### 产品流

###### 自来水（`tap_water`）

仅在电动车间调湿使用外购处理自来水时纳入；保留公开质量参考属性。体积采集时须实测来源特定密度并换算为 kg；不得使用地下水资源身份。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每 1 kg 参考流的实测交换数量；采用 cp_water。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：`century-nylon-cord`

###### 交流电（`humidity_electricity`）

此公开身份仅用于中国用户端低于 1 kV 的电网平均供电；其他地域、电压、自发电或合同供电需匹配相应身份。按工段电表采集，将压缩机和通风分摊电量只计一次。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：每 1 kg 参考流的实测交换数量；采用 cp_energy。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：`century-nylon-cord`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 调湿器排污废水（`humidity_drain`）

仅在存在单独液体排污送场外处理时纳入；计量质量、化学组成及接收处理。不得混入染整或浸胶废液。

- 选定流：调湿器排污废水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每 1 kg 参考流的实测交换数量；采用 cp_water。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：`century-nylon-cord`

##### 基本流

###### 水蒸气（`water_vapour`）

仅在量化调湿产生的净即时水蒸气排向未特指空气时纳入。核对进水、排污、织物含水及库存，不得假定购入水全部蒸发。已知具体受纳空气子介质时须匹配相应身份。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每 1 kg 参考流的实测交换数量；采用 cp_water。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：`century-nylon-cord`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| alloc_subdivision | shared operations | 优先以工段分表及实测机器时间/负荷记录拆分产品。共享电表分摊比例须有工厂证据、比例和为一并披露敏感性；不同捻线/织造路线不预设质量分配。 |  |
| alloc_scrap | scrap; rejects; internal returns | 将周期内真实不合格品和抽样负荷计入合格生产。不得自动给废料避免原生材料信用。出售废料若成为共产品，须以实测数量/价格及适用方案记录其状态、拆分和物理/经济分配依据，明确角色变化。内部回用不是共产品。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | release | finished_greige | weighing | 批次；布卷；毛重及皮重；合格净 kg；调湿；幅宽；单位面积质量；验收；不合格 kg | 经校准称量调湿后合格布卷，扣除卷芯/包装；核对验收及库存。面积记录需实际幅宽/长度和实测调湿单位面积质量，与称重交叉核验。 | kg | 每批 | 代表性完整生产周期及季节条件 | 同场址同组成同工艺 | 每 1 kg 参考流 | 秤校准；皮重；验收；调湿记录 |
| cp_exchange | cording; weaving; release | atomic mass exchanges | mass balance | 批次；row_id；组成；状态；领用 kg；退回；库存；转移；废料；去向 | 各原子流分开称量；核对领用、库存、内部回用、工段转移及场外联单。分别记录油品等级、携带油剂、织物含水和包装。 | kg | 每批并按周期核对 | 与合格产量同一期间 | 同生产工段 | 每 1 kg 参考流 | 称量凭据；组成证明；库存及联单 |
| cp_energy | cording; weaving; release; humidification | electricity | meter | 工段；kWh；电表；电压；地域；来源；共享比例；压缩机负荷 | 工段分表及分摊辅助电量；匹配电压/地域。核对变压器/电表边界，不重复压缩机或车间调湿消耗。 | kWh | 连续计量按批关联 | 同期完整周期 | 同场址计量边界 | 每 1 kg 参考流 | 电表校准；账单；分摊负荷记录 |
| cp_releases | weaving | residual airborne particles | monitoring | 排放点；控制设施；浓度；风量；运行时长；粒径方法；子介质 | 采用代表性实测残余出口排放及实际运行时长；保留测量积分和捕集平衡。不使用未经测量的系数或虚构必然粉尘排放。 | kg | 代表性监测及工况变化时 | 与产量期间一致 | 实际排放点 | 每 1 kg 参考流 | 方法；校准；控制工况；不确定性 |
| cp_water | humidification | tap water; purge; vapour | water balance | 进水质量或体积；实测密度；排污 kg；蒸发 kg；织物含水变化；库存；期间 | 分别计量自来水及排污；体积转质量使用实际状态实测密度。通过包含织物保水的有记录平衡或实测确定净水蒸气；保留不确定性。 | kg | 每周期及季节变化 | 同产量期间 | 仅实际调湿设备 | 每 1 kg 参考流 | 水表；密度实测；排污检测；含水平衡 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_exchange | all inventory rows | 将各周期归属交换除以合格净织物质量 kg，得到每 1 kg 参考流。保留原分子单位；场址汇总前核对中间转移对。 | cp_output; cp_exchange; cp_energy; cp_releases; cp_water | 各行归一化数量 |  |
| mass_from_volume | tap_water; humidity_drain | 以实际采集状态实测液体密度将体积换为质量；保留来源体积、密度及不确定性，不默认 1000 kg/m3。 | cp_water | 实测水质量 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| dq_product | reference product | 证明尼龙 6、拉伸高强纱、股数/捻度结构、纯棉纬纱、无浸胶/热定型/橡胶、调湿及客户验收。营销耐久说法不得当作寿命。 | cp_output; cp_exchange; century-nylon-cord |
| dq_completeness | all inventory rows | 分别核对尼龙、棉、随纱油剂、内部回用、成布、样品、废料及含水。实际未列辅助物以原子行补充并披露覆盖缺口。 | cp_exchange; cp_output |
| dq_representative | all records | 声明场址、技术、完整周期、季节湿度、仪表校准及不确定性。缺失实测保持缺失，不把本 PCR 当作默认配方填数。 | cp_energy; cp_water; cp_releases |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| val_scope | dataset | 拒绝基于本仅前景方法声称全分类、浸胶、PET/人造丝/尼龙66或完整摇篮到大门覆盖。限定信息与实际纳入工段必填。 | un-cpc-2025; century-nylon-cord |
| val_mass | all inventory rows | 要求正合格净质量、一致调湿和同期分母；核对尼龙/棉平衡、内部转移抵消、包装排除及无重复上游纱线负荷。 |  |
| val_identity | flow identities | 未解决 UUID 必须逐行明确审查，不默默替换通用流。匹配公开流类型、参考属性、单位组及环境子介质，包括即时与长期排放。 |  |
| val_quantities | foreground records | 不得使用无依据温度、配方、能耗、损耗、产量或寿命默认值。捕集废物与直接排放分开，外购水区别于资源取水，液体排污区别于水蒸气。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground manufacturing dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 供后续浸胶/轮胎模型使用的所声明尼龙 6/棉坯布转化前景；可通过明确供应商及处理关联扩展系统 |
| excluded_use | 浸胶粘合性能、轮胎寿命比较、纤维/聚合物制造、完整 CPC 覆盖或无关联摇篮到大门结果 |
| required_metadata | 全部参考限定；场址及期间；工艺路线；数量及原单位；调湿；范围；分配及内部转移；上游数据集身份；废物去向 |
| required_quality_disclosure | 缺失身份/实测、未监测排放、分子/分母不确定性、共享电表分摊、供应商代表性及未纳入的上游/末端阶段 |
| update_trigger | 聚合物、纬纱、油剂、帘线规格、供电电压、场址路线、验收、控制设施、分配或原始证据变化 |

## 11. 数据源

| 来源标识 | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| un-cpc-2025 | official_guidance | UN Statistics Division, CPC Ver. 3.0 Explanatory Notes, 30 June 2025, p.129, 27996. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅分类背景；标题不是完整制造方法 |
| century-nylon-cord | literature | Century Enka, Nylon Tyre Cord Fabric, sections Greige Fabric, Dipped Fabric, Manufacturing process. https://www.centuryenka.com/product/nylon-tyre-cord-fabric.html | 制造商原始技术说明：捻线/织造以及坯布和浸胶交付态区别；仅定性路线证据，不是通用规格或当前批准。排除无关占位文字及历史认证说法。 |
