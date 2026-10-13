---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.doors-and-their-frames-and-thresholds-made-out-of-wood
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 工厂门口未涂装实木硬木榫接门扇

## 1. 范围与适用性

适用于单个验收未涂装实木硬木门梃/横档门扇，采用实木硬木镶板、榫接及单组分PVAc常温胶合。它是已在工厂加工、打磨和检验的门扇成品，仍需下游涂装和安装。本声明单位用于制造，不代表完整安装门洞或全寿命服务比较。市场交付路线由`adk-solid-door-route`支持；不采用该制造商的质量、配方或树种占比。

先区分实木门扇、木框架填芯/平板门扇（纸蜂窝、刨花板、矿物或复合芯及表皮）、独立门框/门槛和整套门组件。这里只涵盖第一种且不带玻璃、五金、密封或涂层。排除CPC 31610空芯板半成品、工程木/贴面门扇、玻璃、厂内涂装门扇、室外耐候门和经认证的声学/耐火整套门。本方法包括门级榫接、固化、最终加工和验收，不重复板材PCR。选定路线不含厂内窑干、锅炉、热压、水洗和溶剂涂装；证据表明存在这些活动时，须明确扩展路线并新增原子交换。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.doors-and-their-frames-and-thresholds-made-out-of-wood |
| classification_refs | CPC 3.0 31622; narrower; 范围及已接受决定见 `classifications/mappings/cpc-3.0-to-pcr.yaml` 和其引用的 ADR |
| covered_products | 未涂装、无玻璃的实木硬木榫接门扇 |
| excluded_products | 填芯门扇；门框；门槛；整套门；空芯板半成品；贴面/工程木或涂装门扇 |
| representative_product | 一扇已打磨验收、不带安装五金的实木硬木镶板门扇 |
| production_route | 采购窑干刨光硬木 → 锯切/成形/开榫 → 常温PVAc组装 → 门级精加工/打磨 → 检验 → 包装 |
| market_state | 工厂门口未涂装门扇成品；尚需下游涂装和安装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 经涂装和安装后关闭室内开口的门扇 |
| How much | 同一声明配置验收门扇净质量中的1 kg；实物门扇逐扇称量 |
| How well | 符合实际签署图纸及尺寸、接合、外观验收记录；不假定声学或耐火等级 |
| How long or cycle | 一次制造批次至工厂发运；声明单位不涵盖使用寿命 |
| reference_flow_link | accepted_leaf |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 木制门及其门框和门槛 `6ae3ac1d-ab21-4c46-8d5a-cf630e05496a` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 单独门扇身份；室内用途；树种和原产地；净质量及含水率；高/宽/厚及面积；实木镶板/门梃/横档尺寸和接合；无填芯和表皮；胶配方/固体/水分及供方胶合条件；未涂装状态；五金/密封/玻璃缺席；验收图纸及结果；实际功能声明和声学/耐火证据或明确无声明；工厂/计量点电压/批次；包装 |

各限定信息均须在数据集元数据或关联原始记录中声明。广义数据库名在这里被限定为门扇身份，不允许选择门框或整套门。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass | kg | 采用1 kg验收未涂装门扇净质量，不含任何包装。按cp_mass使用经校准的秤逐扇称量完整验收门扇，核对配置和验收记录，再汇总同配置批次净质量。不给每门默认重量，不用面积乘假定密度替代。 |
| wood_moisture | hardwood, clean_offcut, clean_sawdust, glued_dust | Mass | kg | 分别记录收到状态质量和干基含水率。仅对木材，干质量 = 湿质量 / (1 + 干基含水率 / 100)。按cp_material用树种校准水分仪并以代表性烘干试样核对；胶和磨料部分不属于木材。 |
| electricity_basis | electricity | 净热值 | MJ | 将实测kWh乘3.6转换为MJ，与已核实单位组一致；核对外购中压供电及厂内损耗。 |
| geometry | reference product | Mass | kg | 保留实际测量门扇面积和厚度作为配置描述，不替代质量。声学/耐火声明须对应受测门扇/组件、五金、密封和安装；缺少组件证据不得建立等级。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 门厂接收窑干刨光未处理硬木及供货即用型PVAc胶 |
| starting_condition_role | 前景起始门点，不是全生命周期截断 |
| product_classification_scope | CPC 31622中的室内实木硬木门扇窄子集，不涵盖所有门扇/门框/门槛身份 |
| recursive_input_rule | 采购验收门扇不属于此制造路线。厂内返工保留内部，不作为新采购门扇或第二参考输出。 |
| upstream_dataset_requirement | 关联树种/状态兼容且含干燥的锯材生产、胶配方制造、实际供电、磨料和包装生产；保留上游排放，包括某影响小计不计入的生物CO2。UUID身份不证明背景完整性。 |
| disclosure | 声明起止门点、供方工序、外包、返工、损耗、包装、废物去向、背景缺口和排除的下游涂装/安装/使用/报废 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b-door-gate | door_manufacture | 纳入锯切/成形/开榫、镶板准备、涂胶、夹紧/固化、门扇最终加工、打磨、尺寸/接合验收、不合格品处理和包装。一个聚合前景单元内部保留阶段计量及质量记录，避免虚构中间门扇输出。 | adk-solid-door-route; woodtech-door-quality |
| b-route | door_manufacture | 确认实木镶板、无另加催化剂或涂层、干式清理且无厂内燃烧。实际活动不同则重判范围并分别新增各化学品、公用工程、废物和物种排放，不得为符合路线隐去已知交换。 | usda-wood-handbook-2021 |
| b-background | all inventory rows | 独立于流身份核实供方过程边界和数量；完成数据集时以独立识别的运输服务计入外包及实际材料运输。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| door_manufacture | 门扇制造、验收和包装 | required | 声明的实木硬木常温胶合路线 | 聚合前景生产，保留阶段记录 | 1 kg验收门扇净质量 |

### 过程：门扇制造、验收和包装（`door_manufacture`）

#### 输入

##### 产品流

###### 硬木锯材 (`hardwood`)

仅用于实木门梃、横档及实木镶板的窑干刨光、未处理硬木锯材。逐树种和供方批次记录；不得以单板、复合芯、刨花板或针叶材替代。该身份未说明树种占比，须关联树种兼容的上游数据集并采集实际质量和含水率，不继承其既往用途。

- 选定流：硬木锯材 `e58cb409-74f7-4f0b-bfc0-9261c27c14be`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_material采集的每参考流交换量；依第8节进行批次归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`usda-wood-handbook-2021`

###### 聚醋酸乙烯酯 (`pvac_glue`)

购入即用型单组分水性聚醋酸乙烯酯木工胶，按一股供货状态混合物交换记录。采集品牌、批次、供方SDS/配方、实际聚合物和总固含量、水分及其他已披露配方组分，并记录胶合条件和接合验收。该广义身份包含水性PVAc乳液，但不规定其浓度或配方。关联数量前核实供方/背景参考量是供货湿混合物还是干固体；兼容性未知须明确保留。不得把已包含的树脂、载水或添加剂再次列为单独外购输入。另加催化剂、填料或稀释水不属于声明路线。

- 选定流：聚醋酸乙烯酯 `46c91184-28ea-4b2e-a4e7-c07f3f84369b`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_material采集的每参考流交换量；依第8节进行批次归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`usda-wood-handbook-2021`

###### 交流电 (`electricity`)

计量机加工、夹紧、打磨、除尘、压缩空气生产及包装所用外购电网电力。本UUID仅表示用户侧1–35 kV供电；核对供电计量点电压、上游供方、年份、地区及损耗边界，厂内变压损耗只计一次。低压计量点须另行核实兼容身份。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：按cp_energy采集的每参考流交换量；依第8节进行批次归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`

###### 砂纸 (`abrasive_paper`)

门扇打磨用纸基磨料；记录磨粒矿物、粘结剂、粒度、背材及消耗的砂纸质量。不得用氧化铝原料替代制造成品砂纸；此广义身份不提供材料组成。

- 选定流：砂纸 `ba6c99d4-60d9-46a5-9ef5-ca3d0b877d57`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_material采集的每参考流交换量；依第8节进行批次归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`woodtech-door-quality`

###### 瓦楞纸板 (`cardboard`)

瓦楞纸板保护包装，实际使用时纳入。所选记录限定含再生材料的C/E/F楞纸板、纤维含量至少80%；须核实实际纸板符合身份限定。不得将其组成作为默认配方。

- 选定流：瓦楞纸板 `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_pack采集的每参考流交换量；依第8节进行批次归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`woodtech-door-quality`

###### 低密度聚乙烯薄膜（PE-LD） (`ldpe_film`)

非泡沫、非自粘低密度聚乙烯包裹薄膜，实际使用时纳入；分别计量领用薄膜、随货包装和边角废料。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_pack采集的每参考流交换量；依第8节进行批次归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`

###### 木制托盘、箱式托盘和其他装载板，木制托盘套环 (`wood_pallet`)

一个实物平板木托盘，发运使用时纳入。本PCR限定广义身份中的平板木托盘子集，不是托盘/套环选择器。记录新旧状态、皮重、供方结构、返还率及经核实周转次数；将消耗归属本次发运，不缩小实物托盘交接量。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_pack采集的每参考流交换量；依第8节进行批次归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`woodtech-door-quality`

#### 输出

##### 产品流

###### 木制门及其门框和门槛 (`accepted_leaf`)

完成门级机加工、榫接组装、打磨和尺寸/接合检验后的验收未涂装实木硬木门扇，不含运输包装。数据库显示名虽涵盖门与门框，本交换仅代表声明的门扇。不以此参考UUID再列中间输出。

- 选定流：木制门及其门框和门槛 `6ae3ac1d-ab21-4c46-8d5a-cf630e05496a`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：1 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass`
- 来源：`adk-solid-door-route`

##### 废物流

###### 未处理硬木机加工边角料，未团聚 (`clean_offcut`)

胶合前清洁边角料运出厂界。按批次和去向称量；不包含团聚块料或带胶修边料。

- 选定流：未处理硬木机加工边角料，未团聚
- 流属性/单位：Mass / kg
- 数量规则：按cp_waste采集的每参考流交换量；依第8节进行批次归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`

###### 木屑废物 (`clean_sawdust`)

胶合前捕集的未处理硬木木屑，送厂外焚烧或回收，与所选路线一致。捕集物为废物，不是空气排放；排除带胶打磨粉尘，并记录含水率及实际去向。

- 选定流：木屑废物 `e1a44d20-d968-4d64-bd7c-253a1441ab35`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_waste采集的每参考流交换量；依第8节进行批次归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`

###### 捕集的PVAc胶合硬木打磨粉尘 (`glued_dust`)

胶合后实物收集的单一混合打磨粉尘流。记录存在的木材、固化胶和磨料组成；不得复用未处理木屑UUID，也不得将捕集粉尘再计为室外颗粒物。

- 选定流：捕集的PVAc胶合硬木打磨粉尘
- 流属性/单位：Mass / kg
- 数量规则：按cp_waste采集的每参考流交换量；依第8节进行批次归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`

###### 待处置的不合格未涂装PVAc胶合实木硬木门扇 (`rejected_leaf`)

不可修复的组装门扇作为废物跨界。返工后验收合格的门扇留在内部，不列废弃输出；本废物身份不使用验收成品UUID。

- 选定流：待处置的不合格未涂装PVAc胶合实木硬木门扇
- 流属性/单位：Mass / kg
- 数量规则：按cp_waste采集的每参考流交换量；依第8节进行批次归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`

###### 刮除的PVAc木工残胶 (`glue_residue`)

单独刮除的水性/固化PVAc残胶；计量状态、含水量、容器皮重及处置。不得以晶圆生产残胶代替。声明清理路线为干式刮除；若用水清洗，须另列并核实用水和废水交换。

- 选定流：刮除的PVAc木工残胶
- 流属性/单位：Mass / kg
- 数量规则：按cp_waste采集的每参考流交换量；依第8节进行批次归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`

###### 废研磨料 (`spent_abrasive`)

打磨后移除的废砂纸。核对剩余背材、磨粒、粘结剂和附着粉尘；不得重复计入已进入glued_dust的磨损物或粉尘。

- 选定流：废研磨料 `f0a52dd6-0027-4033-9068-f293526f958f`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_waste采集的每参考流交换量；依第8节进行批次归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`

###### 包装废弃物，纸板 (`cardboard_scrap`)

条件性纸板包装裁切料和损坏保护材料。称量实际质量，不采用数据库备注中的专家判断废料百分比。

- 选定流：包装废弃物，纸板 `72270223-04b1-4986-a546-94e5a0821317`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_waste采集的每参考流交换量；依第8节进行批次归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`

###### 门厂未清洗的LDPE包裹薄膜边角废料 (`ldpe_scrap`)

厂内处理前LDPE边角废料，产生时纳入。不得以PET废料、PP废料或回收厂清洗后的PE替代。

- 选定流：门厂未清洗的LDPE包裹薄膜边角废料
- 流属性/单位：Mass / kg
- 数量规则：按cp_waste采集的每参考流交换量；依第8节进行批次归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`

##### 基本流

###### 颗粒物 (PM2.5) (`pmfine`)

治理后排入室外空气的机加工/打磨残余粉尘PM2.5级分；介质为空气/未特指。记录采样时长、气量、捕集效率证据和不确定性。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_air采集的每参考流交换量；依第8节进行批次归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`

###### 颗粒物 (PM2.5 - PM10) (`pmmid`)

室外残余粉尘的不重叠>PM2.5至PM10级分，空气/未特指；累计PM10结果须先与相同采样基准的PM2.5核对。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_air采集的每参考流交换量；依第8节进行批次归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`

###### 颗粒物（> PM10） (`pmcoarse`)

室外残余>PM10粉尘，空气/未特指；须有实际粒径分级结果或有效的总颗粒物减PM10核算，不采用通用颗粒物默认量。

- 选定流：颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_air采集的每参考流交换量；依第8节进行批次归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`

###### 水蒸气 (`water_vapor`)

调湿/固化时木材水分及供货胶中水分净蒸发至室外空气/未特指。建立批次水平衡，区分胶中残留水、废物含水量和环境吸湿；不移植针叶材调查的干燥系数。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_water采集的每参考流交换量；依第8节进行批次归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`usda-wood-handbook-2021`

###### 乙酸 (`acetic_acid`)

乙酸（CAS 64-19-7）排至室外空气/未特指，仅在实际胶/木材排放证据确认并定量时纳入。PVAc产品或检索到的UUID不构成正排放证据；完成数据集前须逐项核实所有其他已识别挥发物。

- 选定流：乙酸 `08a91e70-3ddc-11dd-92c3-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_air采集的每参考流交换量；依第8节进行批次归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`usda-wood-handbook-2021`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a-physical | door_manufacture | 负荷分配前保留阶段实物账：木材干质量、水和碳投入应与验收门扇、实际废物、排放和库存变化在记录的计量不确定性内相符。包装单独建立发运账，不计入门扇净质量。内部交接和返工两端保持同量。 |  |
| a-attribution | door_manufacture | 优先使用专属批次计量及领料记录。共享电力/除尘/压缩空气系统按实测运行时间/负载或分表证据归属，并披露驱动量。环境负荷账与实物输出分开，绝不把废物或共产品实物数量乘负荷份额。 |  |
| a-residues | clean_offcut, clean_sawdust, glued_dust | 本清单行为具有实际处理关联的废物交接，不计避免产品信用。若残余物是有意生产的可销售共产品，记录其身份并在出具该数据集前通过独立审查重判分配；不给默认替代或经济分割。 |  |

## 8. 前景数据采集、计算与质量规则

同一配置批次以实测验收净质量S（kg）=各验收门扇净质量之和为唯一分母。不合格品和包装不计入S，其生产投入和废物仍保留在分子。所有采集协议返回每1 kg参考流数量，同时保留实物批次总量及归一化结果。不需要虚构每门质量或行业配方。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | door_manufacture | 验收门扇净质量 | foreground_record | 配置；批次；门扇标识；校准；逐扇净质量；验收数量；S；图纸；高/宽/厚；面积；验收缺陷；声明/测试引用 | 使用经校准的秤逐扇称量无运输包装的完整验收未涂装门扇，核对图纸、配置和验收记录；保留各读数并汇总为S。使用核实的量具测量尺寸。 | kg | 每扇；批次结算 | 完整声明批次及代表性工况覆盖 | 明确工厂与配置 | 每 1 kg 参考流 | 校准、原始记录及核对后的批次账 |
| cp_material | door_manufacture | 木材、胶和磨料投入 | foreground_record | 供方批次；树种/产地；交付状态；领用；期初/期末库存；湿/干基准；水分方法；供方配方/SDS；胶固体/水分；磨料组成 | 分原子材料称量并核对批次收货、领用及库存。对同批代表试样用树种校准水分仪及烘干复核木材水分；胶属性来自供方及核实批次采样，不假定聚合物浓度。记录常温胶合条件和固化验收。 | kg | 每批来料及生产批次 | 完整声明批次及代表性工况覆盖 | 明确工厂与配置 | 每 1 kg 参考流 | 校准、原始记录及核对后的批次账 |
| cp_energy | door_manufacture | 电力 | foreground_record | 电表读数；供电电压；阶段运行时间/负载；场址供电；变压损耗；kWh；归属驱动；供方背景边界 | 使用经校准外购电表及阶段分表，核对批次总量和共享负载，含除尘及空压机用电。将kWh转换为MJ，不重复添加上游供电损耗。 | MJ | 连续计量，批次汇总 | 完整声明批次及代表性工况覆盖 | 明确工厂与配置 | 每 1 kg 参考流 | 校准、原始记录及核对后的批次账 |
| cp_pack | door_manufacture | 各包装投入 | foreground_record | 包装单；独立纸板/薄膜/托盘质量；皮重；返还及周转记录；发运量；废料；库存 | 逐包装材料独立称量；核对领用、随货保护包装、废料和库存变化。可复用托盘分别保留实物交接/返还记录及经核实使用期归属。 | kg | 每次发运 | 完整声明批次及代表性工况覆盖 | 明确工厂与配置 | 每 1 kg 参考流 | 校准、原始记录及核对后的批次账 |
| cp_waste | door_manufacture | 各废物输出 | foreground_record | 行身份；胶合前后阶段；容器皮重；湿质量；含水率；附着胶/磨料；去向；交接单；返工库存 | 分类废物容器称量并扣皮重，保留处理交接证据。区分清洁边角料、未处理木屑、带胶粉尘、不合格门扇、PVAc残胶、废砂纸和各包装废料；脱落材料仅核算一次。 | kg | 每次移出及生产批次 | 完整声明批次及代表性工况覆盖 | 明确工厂与配置 | 每 1 kg 参考流 | 校准、原始记录及核对后的批次账 |
| cp_air | door_manufacture | 各空气基本流排放 | foreground_record | 物种/CAS；介质/子介质；阶段；治理设备；采样/气量/时长；粒径基准；检出限；逸散估计及不确定性；胶SDS | 对治理后室外排口按兼容采样时段测量，并包括有记录的逸散。分别取得各物种及不重叠粒径粉尘总量。乙酸须有实际源识别及测量；未知或低于检出限须披露，不虚构为零。 | kg | 代表性工况及生产批次 | 完整声明批次及代表性工况覆盖 | 明确工厂与配置 | 每 1 kg 参考流 | 校准、原始记录及核对后的批次账 |
| cp_water | door_manufacture | 蒸发水 | foreground_record | 木材前后水分；胶投入水分；验收门扇及废物含水；库存变化；环境吸湿；气量/湿度交叉核对 | 以一致批次水平衡求净蒸发量，可行时用排口气量/湿度交叉核对；记录残留水及环境吸湿，不把全部供货胶水分视作蒸气。 | kg | 每生产批次 | 完整声明批次及代表性工况覆盖 | 明确工厂与配置 | 每 1 kg 参考流 | 校准、原始记录及核对后的批次账 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| campaign_normalization | all inventory rows | 各非参考行归一化交换量 = 归属的实物批次总量 / S；S为各实测验收门扇净质量之和，单位kg。accepted_leaf = 1 kg。全清单采用同一批次与配置。 | cp_mass; cp_material; cp_energy; cp_pack; cp_waste; cp_air; cp_water | 每1 kg参考流交换量 |  |
| wood_balance | hardwood, clean_offcut, clean_sawdust, glued_dust | 木材干质量 = 湿木材质量 / (1 + 干基含水率 / 100)；复合流只对木材部分应用。保留包含库存变化的未分配干木材/水/碳平衡；碳比例须有实际树种/组成证据，不采用通用默认值。 | cp_material; cp_waste; cp_water | 干木材质量及实物平衡 | usda-wood-handbook-2021 |
| particle_partition | pmfine, pmmid, pmcoarse | 同一有效样本报告累计量时，中间级分 = PM10 − PM2.5，粗级分 = 总悬浮颗粒物 − PM10；须非负、采样/治理基准相同且记录不确定性。只加不重叠级分，不把PM10与其PM2.5子集合相加。 | cp_air | 批次归一化前不重叠粒径总量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq-route | door_manufacture | 核实实际实木门扇结构及完整门成品门点，保留排除活动核对和阶段记录。 | 图纸、物料表、工艺路线及验收 |
| dq-mass | all inventory rows | S须为正且实测；报告秤分辨率/校准、采样覆盖、时段和分母。数量、空值、检出限和活动缺席须区分。 | 可追溯原始批次记录 |
| dq-background | all inventory rows | 关联背景前确认实际供货组成、地区/时间代表性及单位基准。未决废物身份或供货兼容性须明确保留，阻止数据集声明完整，不妨碍规定未来采集协议。 | 供方声明、状态核实身份及关联过程边界 |
| dq-functions | reference product | 面积、厚度、胶、芯材/表皮/涂层/五金缺席及功能声明须有原始证据。不从树种或材料质量推断声学/耐火认证。 | 对应配置的产品清单及测试报告，或明确无声明 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v-identity | reference product | 必须只有一个由accepted_leaf关联的完整验收门扇产品输出，等于1 kg净质量。门框、门槛、填芯板或包装毛质量不符合范围。 | adk-solid-door-route |
| v-basis | all inventory rows | 中英文保持行、数量、S分母、来源和公式一致。每行只有一个原子流、参考基准和明确采集协议；条件活动缺席须有路线证据。 |  |
| v-balance | door_manufacture | 分配前核对实物质量/水/碳及包装账。检查内部交接、返工、捕集与排放粉尘无重复。记录差异和测量不确定性，不虚构闭合数量。 |  |
| v-emissions | pmfine, pmmid, pmcoarse, water_vapor, acetic_acid | 核对物种、适用CAS、室外空气/子介质、粒径分割及实际治理边界。保留关联上游LCI中的生物CO2，另行披露影响核算口径。不以通用颗粒物或校正流代替具体排放。 |  |
| v-completeness | all inventory rows | 缺失身份、供方组成/单位不兼容、数量未测或存在未知流，则具体数据集不完整。所有证据支持的额外交换须逐原子添加；身份检索成功不批准数量或背景数据。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 用于指定未涂装室内实木硬木门扇，关联上游制造并披露门点外的涂装/安装 |
| allowed_use | 匹配门扇几何、配置、水分、性能、门点及完整供货数据后的制造比较 |
| excluded_use | 整套安装门；门框/门槛；填芯板；经认证耐火/声学组件；通用每门重量 |
| required_metadata | 工厂、批次、S及验收数量、质量校准、尺寸/树种/路线、胶配方、声明及验收、边界和背景、包装、分配、UUID缺口 |
| required_quality_disclosure | 实测/估计/缺失数量、采样及不确定性、数据年代、供方兼容性和未决身份或背景缺口 |
| update_trigger | 树种、结构、胶、涂装、功能声明、计量边界、能源路线、废物去向或供方背景变化 |

## 11. 数据源

| 来源标识 | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| usda-wood-handbook-2021 | handbook | USDA Forest Products Laboratory, Wood Handbook, FPL-GTR-282 (2021), Table 10-1 / pp.10-9, 10-12; ch.13 p.13-2. https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf | 木材水分测量；即用型PVAc与常温固化/挥发物限制。不提供门质量、配方、排放因子或行业均值。 |
| adk-solid-door-route | literature | Adirondack Naturals, Custom, Solid Wood Doors Handmade Since 1999, Welcome and FAQ, undated publisher page. https://www.adknaturals.com/ | 制造商原件支持实木榫接结构及未涂装单独门扇交付；仅定性子集。 |
| woodtech-door-quality | literature | WoodTech Door, Specifications, §§4–6, undated publisher page. https://woodtechdoor.net/specifications | 独立制造商原件支持门级加工/打磨、方正/翘曲检验及发运保护。不采用工程木构件配方及数值公差。 |
