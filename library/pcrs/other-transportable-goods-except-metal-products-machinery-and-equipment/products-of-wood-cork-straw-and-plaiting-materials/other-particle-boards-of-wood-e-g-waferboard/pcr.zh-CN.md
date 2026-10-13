---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.other-particle-boards-of-wood-e-g-waferboard
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 无涂层随机铺装PF胶合木质waferboard

## 1. 范围与适用性

适用于由宽薄木质刨片形成、声明实际几何分布并依靠自由落料随机铺装、以未固化粉状PF甲阶酚醛树脂热压胶合的无涂层、无防腐处理waferboard成品。不得具有主动定向表层或交错定向层结构；由重力造成的偶然排列须披露并测量。本试点路线采用外购蒸汽间接干燥/热压供热、电动搬运及干式收尘。厂内燃烧、直燃干燥、热氧化、湿式洗涤、砂光、涂层/覆面、阻燃、防腐、其他胶种和石蜡乳液须另行审查适用性及清单。来源：epa-waferboard-2002；usda-waferboard-types-1986。

刨片宽度、长度、厚度及取向分布将本产品与细粒UF particleboard及长窄刨片主动定向分层OSB区分开。历史技术文献广义particleboard包含waferboard；这种术语重叠不能使不同生产方法互换。定向waferboard或Aspenite商品名不足以证明本随机结构。来源：usda-waferboard-types-1986；epa-waferboard-2002。

真实产品锚点为FPL-GTR-53印刷第5页图2所示的宽刨片板材，以及FPL-RP-574印刷第2页表1中的加拿大粉状树脂商业waferboard W1–W7（1985年样本，1999年报告）。后者称其为轻微取向waferboard，并包含安大略的W4产品。这仅证明产品存在，不声明W4具有本稿PF化学、树种、完全随机制造设置或蒸汽路线；这些事实须在实际场址核实。历史等级、试验尺寸和强度不是现代默认值或法定验收标准。不设通用刨片尺寸、含水率、配方、密度、寿命、能耗或排放因子。来源：usda-commercial-panels-1999；usda-waferboard-types-1986。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.other-particle-boards-of-wood-e-g-waferboard |
| classification_refs | CPC 3.0 31439; narrower; 范围及已接受决定见 `classifications/mappings/cpc-3.0-to-pcr.yaml` 和其引用的 ADR |
| covered_products | 随机宽薄木质刨片waferboard；粉状PF及声明的间接蒸汽/干式控制试点路线 |
| excluded_products | 细粒UF板；主动定向OSB/waferboard；纤维板；单板胶合板；非木质板；涂层/覆面/处理板；其他胶种和供热/控制路线 |
| representative_product | 厂门验收随机宽刨片PF板材净成品；历史图2/W系列锚点不是供方清单数据 |
| production_route | 运抵原木→剥皮/按需解冻/横截/刨片→间接干燥/筛分→粉状PF及按需纯石蜡混拌→随机铺装→热压→冷却/修边→分等/包装 |
| market_state | 实际发运含水率下无涂层、无防腐处理的成品板材；声明等级及适用性，不自动赋予建筑用途批准 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应合格随机木质刨片板材；不假定与OSB或UF板提供等效结构服务 |
| How much | 厂门验收waferboard成品净质量1千克，不含包装 |
| How well | 实际宽刨片几何/取向、粉状PF配方、声明等级、厚度、密度及发运含水率和方法 |
| How long or cycle | 一个生产核算期；不赋予使用阶段寿命 |
| reference_flow_link | `finished_waferboard` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 其他木质刨花板（如刨花板） `dc4d3259-45c1-4d98-8264-35a90058e65c` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 场址/核算期及厂界；植物学树种组成与原木/树皮状态；刨片长/宽/厚分布及随机取向证据；实际PF供方/配方/固形物/固化适用性；使用时的纯石蜡牌号；板材等级与实际验收标准/试验；板材尺寸/净质量/密度；含水率基准/方法；无涂层/无防腐状态；间接蒸汽定义、电压、收尘控制、包装及残余物去向 |

具体数据包须声明全部必需限定信息。成品分类UUID包含该物理子集并标识质量交换；它不能确立等级、刨片结构、供方清单或不相关背景数据集的兼容性。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | 质量 | kg | cp_reference使用校准称重所得验收发运板材净质量，不含包装和废品。 |
| same_denominator | 所有清单行 | 参考产品质量 | kg | 每行均以每1 kg参考流计；实际归属核算期总量除以cp_reference所得验收成品净质量Q。 |
| moisture_basis | 木材与板材 | 质量 | kg | 未处理木材采集湿质量和绝干质量：u=(wet-dry)/dry，dry=wet/(1+u)。区分百分数/小数及湿基含水率。胶合板材采用经验证的含水率方法，区分水分损失与挥发/固化损失；木材干质量不包含胶/蜡固形物。来源：usda-wood-moisture-2021。 |
| energy_basis | electricity, steam, condensate | 能量和质量 | MJ; kg | 按声明电压计量电力；1 kWh = 3.6 MJ。蒸汽清单按实测kg计，并依据进入/返还/损失状态另建净焓账。链接前核对供方背景交付与凝结水抵扣定义。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 未处理针叶/阔叶板用原木接收厂界，记录带皮状态与含水率；场内电动搬运 |
| starting_condition_role | foreground_entry |
| product_classification_scope | CPC 3.0 31439内的物理随机刨片PF试点子集 |
| recursive_input_rule | 购入成品waferboard不能作为原木铺装料。内部刨片、板坯、返工及粉尘回料保留在阶段交接/库存记录中；仅有一个最终成品参考输出。 |
| upstream_dataset_requirement | 匹配的原木林业/备料及到厂运输；粉状PF/石蜡、声明电压电力、约定返还口径的交付蒸汽、水与包装供应；各项外部废物处理。上游燃烧排放保留在链接清单中。 |
| disclosure | 前景厂门到厂门；用于摇篮到厂门时明确链接上游。安装、使用与寿命终止单独建模；披露资本设备/截断及缺失供应活动。 |

采用贯穿包装的统一前景单元p_wafer。独立保留阶段记录：s_receive（堆场/解冻/剥皮/横截）、s_wafer（刨片）、s_dry（间接干燥/筛分）、s_blend（粉状PF/纯石蜡）、s_form（重力随机铺装）、s_press、s_finish（冷却/修边）、s_pack及s_control（干式收尘/清洗）。内部交接两端的实际数量与状态须相同；中间板材不复用最终参考UUID。来源：epa-waferboard-2002。

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| b_route | p_wafer | 核实完整声明路线。直燃干燥、厂内燃料锅炉/RTO、湿式控制、砂光及表面处理不属于本试点，不得用外购热措辞掩盖；扩展方法前须审查并增补精确清单。 | epa-waferboard-2002 |
| b_stack | p_wafer | 每个排气筒/源仅记录一次实际干式控制后排放。捕集物为固体残余，不是大气排放；干燥、热压/冷却及修边源分别可追溯。 | epa-waferboard-2002 |
| b_heat | steam, condensate | 外部蒸汽生产位于上游。纳入实际进入蒸汽、返还凝结水、损失及净焓核对；不将供方燃料另计为厂内燃料，不建立未计量热量输出。 | epa-waferboard-2002 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| p_wafer | 随机PF waferboard制造与发运 | required | 声明的试点接收厂界至包装 | foreground | 1 kg reference flow |

### 过程：随机waferboard制造（`p_wafer`）

#### 输入

##### 产品流

###### 带皮未处理针叶材板用原木（`conifer_logs`）

仅记录单独称重的针叶原木流；记录树种、带皮状态、供料等级与实际含水率，不在阔叶原木输入中重复记录。

- 选定流：带皮未处理针叶材板用原木
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测实物核算期交换总量 / Q；用所链接协议保留阶段与物流明细。分配另作用于环境负荷，不乘实物输出。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`epa-waferboard-2002`

###### 带皮未处理阔叶材板用原木（`hardwood_logs`）

仅记录单独称重的阔叶原木流；记录植物学组成、带皮状态、供料等级与含水率。

- 选定流：带皮未处理阔叶材板用原木
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测实物核算期交换总量 / Q；用所链接协议保留阶段与物流明细。分配另作用于环境负荷，不乘实物输出。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`epa-waferboard-2002`

###### 未固化粉状PF甲阶酚醛树脂（`pf_powder`）

用于刨片胶合的未固化粉状PF甲阶酚醛树脂；记录实际配方、固形物、游离苯酚/甲醛及固化适用性。通用树脂身份不确立供方背景状态或施胶率。其他胶种及液态/乳液供料不在本路线内。

- 选定流：酚醛树脂 `9f10798f-ffb5-402d-b805-27d2db4e2caf`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测实物核算期交换总量 / Q；用所链接协议保留阶段与物流明细。分配另作用于环境负荷，不乘实物输出。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`epa-waferboard-2002`

###### 石油基石蜡（`wax`）

按条件纳入纯石油基石蜡或熔融石蜡施加量，按供货形态称重；该身份不适用于石蜡乳液或废塑料再生蜡。数据库热值元数据不是施加量或能源默认值。

- 选定流：石蜡 `17bff97f-179d-49d4-9e97-5128bd6020a6`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测实物核算期交换总量 / Q；用所链接协议保留阶段与物流明细。分配另作用于环境负荷，不乘实物输出。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`epa-waferboard-2002`

###### 低压电网交流电（`electricity`）

设备使用点低于1千伏的电网交流电，包含电动场内搬运、风机和干式收尘。供电电压、变压损耗与计量边界须与背景核对；不能与较高电压供电互换。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：实测千瓦时 × 3.6 兆焦/千瓦时 / Q；cp_utility保留声明电压、归属计量及损耗。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utility`
- 来源：`epa-waferboard-2002`

###### 外购供热蒸汽（`steam`）

外购蒸汽用于间接干燥、实际存在的原木解冻及热压供热。进入质量与返还凝结水分别记录；实测压力、温度、蒸汽品质并取得供热定义。不设固定焓、总热值或0.45 MPaG假定。

- 选定流：外购供热蒸汽
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测实物核算期交换总量 / Q；用所链接协议保留阶段与物流明细。分配另作用于环境负荷，不乘实物输出。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_steam`
- 来源：`epa-waferboard-2002`

###### 自来水（`water`）

实际存在时用于解冻/清洗的外购自来水；不重复计供方锅炉用水或闭路循环水。其他水源须有独立精确流行。

- 选定流：自来水 `c6fb2442-d527-4e3d-bf01-4c94ea2b71ec`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测实物核算期交换总量 / Q；用所链接协议保留阶段与物流明细。分配另作用于环境负荷，不乘实物输出。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utility`
- 来源：`epa-waferboard-2002`

###### waferboard机械用石油基润滑油（`oil`）

按条件纳入机械用石油基润滑油；核对采购、库存与实测使用量，明确牌号及添加剂；数据库热值系数不能替代实际配方。

- 选定流：waferboard机械用石油基润滑油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测实物核算期交换总量 / Q；用所链接协议保留阶段与物流明细。分配另作用于环境负荷，不乘实物输出。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`epa-waferboard-2002`

###### 聚乙烯发运薄膜（`film`）

按条件纳入发运用聚乙烯成品薄膜，单独称重；板材参考质量不包含包装。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测实物核算期交换总量 / Q；用所链接协议保留阶段与物流明细。分配另作用于环境负荷，不乘实物输出。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`epa-waferboard-2002`

###### 聚丙烯包装带（`strap`）

按条件纳入聚丙烯成品扁包装带，按质量计或用经核实的件数/长度转质量；聚合物树脂和捆扎绳不是本交换。

- 选定流：聚丙烯包装带
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测实物核算期交换总量 / Q；用所链接协议保留阶段与物流明细。分配另作用于环境负荷，不乘实物输出。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`epa-waferboard-2002`

#### 输出

##### 产品流

###### 随机铺装木质waferboard成品（`finished_waferboard`）

冷却、修边、分等与包装后唯一的随机宽刨片PF板材验收净成品输出。广义分类UUID仅用于此物理子集；保留正式中文显示名，另行限定刨片形态。

- 选定流：其他木质刨花板（如刨花板） `dc4d3259-45c1-4d98-8264-35a90058e65c`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_reference`
- 来源：`epa-waferboard-2002`

###### 未处理树皮燃料共产品（`bark`）

仅计单独收集且实际作为燃料共产品出售的未处理树皮；保留销售证据与干/湿质量，同批实物不得同时计为树皮废物。

- 选定流：未处理树皮燃料共产品
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测实物核算期交换总量 / Q；用所链接协议保留阶段与物流明细。分配另作用于环境负荷，不乘实物输出。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residue`
- 来源：`epa-waferboard-2002`

###### 未施胶干木质刨片细料燃料共产品（`fines`）

仅计实际作为燃料共产品出售的未施胶干刨片筛分细料。与树皮及含树脂物分开；其余细料内部返回或进入fines_waste，不重复记录。

- 选定流：未施胶干木质刨片细料燃料共产品
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测实物核算期交换总量 / Q；用所链接协议保留阶段与物流明细。分配另作用于环境负荷，不乘实物输出。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residue`
- 来源：`epa-waferboard-2002`

###### 返还供方的蒸汽凝结水（`condensate`）

实际跨厂界返还蒸汽供方的凝结水，实测质量及回水温度/压力。供方协议决定是否单独给予返还抵扣，不假定进入量等于返还量。

- 选定流：返还供方的蒸汽凝结水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测实物核算期交换总量 / Q；用所链接协议保留阶段与物流明细。分配另作用于环境负荷，不乘实物输出。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_steam`
- 来源：`epa-waferboard-2002`

##### 废物流

###### 固化PF胶合waferboard边角料废物（`trim_waste`）

仅计作为废物离厂的固化PF板材实心边角料/废品；捕集锯尘计入bonded_dust，内部返工保留在交接记录中。

- 选定流：固化PF胶合waferboard边角料废物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测实物核算期交换总量 / Q；用所链接协议保留阶段与物流明细。分配另作用于环境负荷，不乘实物输出。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residue`
- 来源：`epa-waferboard-2002`

###### 捕集的固化PF胶合waferboard锯切粉尘废物（`bonded_dust`）

仅计送厂外的固化PF板材锯切捕集粉尘；与实心边角料、逸散粉尘和未施胶木屑分开。

- 选定流：捕集的固化PF胶合waferboard锯切粉尘废物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测实物核算期交换总量 / Q；用所链接协议保留阶段与物流明细。分配另作用于环境负荷，不乘实物输出。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residue`
- 来源：`epa-waferboard-2002`

###### 未处理原木横截锯切木屑废物（`dust_waste`）

仅计送厂外焚烧/回收的未施胶原木横截锯切捕集木屑。含树脂板材粉尘计入bonded_dust，筛分刨片细料另计。

- 选定流：木屑废物 `e1a44d20-d968-4d64-bd7c-253a1441ab35`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测实物核算期交换总量 / Q；用所链接协议保留阶段与物流明细。分配另作用于环境负荷，不乘实物输出。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residue`
- 来源：`epa-waferboard-2002`

###### 未施胶木质刨片筛分细料废物（`fines_waste`）

仅计送厂外处置的未施胶筛分刨片细料；与售出细料和内部返回量互斥。

- 选定流：未施胶木质刨片筛分细料废物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测实物核算期交换总量 / Q；用所链接协议保留阶段与物流明细。分配另作用于环境负荷，不乘实物输出。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residue`
- 来源：`epa-waferboard-2002`

###### 剥皮树皮废物（`bark_waste`）

仅计实际作为废物离厂的剥皮树皮，记录去向；共产品树皮仅计入bark，不虚构销售收入。

- 选定流：树皮 `a2536c07-fbe1-4a12-90fb-21bd2e99b74e`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测实物核算期交换总量 / Q；用所链接协议保留阶段与物流明细。分配另作用于环境负荷，不乘实物输出。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residue`
- 来源：`epa-waferboard-2002`

###### 送外部处理的waferboard清洗废水（`wastewater`）

仅计实际送外部处理的清洗/解冻废水；实测质量、组成与去向，不作为直接水环境排放。

- 选定流：送外部处理的waferboard清洗废水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测实物核算期交换总量 / Q；用所链接协议保留阶段与物流明细。分配另作用于环境负荷，不乘实物输出。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residue`
- 来源：`epa-waferboard-2002`

###### 废润滑油（`oil_waste`）

仅计送处理的排出废润滑油；保留实际组成、危险属性及去向，不假定数据库已确立处置路线。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测实物核算期交换总量 / Q；用所链接协议保留阶段与物流明细。分配另作用于环境负荷，不乘实物输出。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residue`
- 来源：`epa-waferboard-2002`

###### 未固化PF树脂粉料废物（`pf_waste`）

搬运损失或废弃后送厂外的未固化PF粉料，区别于固化含胶板材废物；核对游离组分与保留树脂固形物。

- 选定流：未固化PF树脂粉料废物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测实物核算期交换总量 / Q；用所链接协议保留阶段与物流明细。分配另作用于环境负荷，不乘实物输出。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residue`
- 来源：`epa-waferboard-2002`

##### 基本流

###### 可过滤颗粒物不大于2.5微米（`pm25`）

仅指室外空气排放，子介质未特指；在实际排放口测量该物种/粒径，保留源、采样方法、不确定性与相态。不得替换为室内、长期、土壤/水、修正流或指定对映异构体。 本行为条件性物种/相态筛查卡，不预设发生或默认排放；须证明未发生或实测排放，未知测量不等于零。OSB直燃干燥表仅提供候选物种/CAS名称，不提供间接waferboard数量。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测实物核算期交换总量 / Q；用所链接协议保留阶段与物流明细。分配另作用于环境负荷，不乘实物输出。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission`
- 来源：`epa-waferboard-2002`

###### 可过滤颗粒物大于2.5至不大于10微米（`pmcoarse`）

仅指室外空气排放，子介质未特指；在实际排放口测量该物种/粒径，保留源、采样方法、不确定性与相态。不得替换为室内、长期、土壤/水、修正流或指定对映异构体。 本行为条件性物种/相态筛查卡，不预设发生或默认排放；须证明未发生或实测排放，未知测量不等于零。OSB直燃干燥表仅提供候选物种/CAS名称，不提供间接waferboard数量。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测实物核算期交换总量 / Q；用所链接协议保留阶段与物流明细。分配另作用于环境负荷，不乘实物输出。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission`
- 来源：`epa-waferboard-2002`

###### 可过滤颗粒物大于10微米（`pmover10`）

仅指室外空气排放，子介质未特指；在实际排放口测量该物种/粒径，保留源、采样方法、不确定性与相态。不得替换为室内、长期、土壤/水、修正流或指定对映异构体。 本行为条件性物种/相态筛查卡，不预设发生或默认排放；须证明未发生或实测排放，未知测量不等于零。OSB直燃干燥表仅提供候选物种/CAS名称，不提供间接waferboard数量。

- 选定流：颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测实物核算期交换总量 / Q；用所链接协议保留阶段与物流明细。分配另作用于环境负荷，不乘实物输出。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission`
- 来源：`epa-waferboard-2002`

###### 可凝结有机颗粒物（`condensable_pm`）

在间接刨片干燥后单独采集可凝结有机颗粒物，披露采样条件；不与已包含相同物质的粒径分段/VOC质量相加，不使用泛称PM身份代替。 本行为条件性物种/相态筛查卡，不预设发生或默认排放；须证明未发生或实测排放，未知测量不等于零。OSB直燃干燥表仅提供候选物种/CAS名称，不提供间接waferboard数量。

- 选定流：可凝结有机颗粒物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测实物核算期交换总量 / Q；用所链接协议保留阶段与物流明细。分配另作用于环境负荷，不乘实物输出。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission`
- 来源：`epa-waferboard-2002`

###### 甲醛（`formaldehyde`）

仅指室外空气排放，子介质未特指；在实际排放口测量该物种/粒径，保留源、采样方法、不确定性与相态。不得替换为室内、长期、土壤/水、修正流或指定对映异构体。 本行为条件性物种/相态筛查卡，不预设发生或默认排放；须证明未发生或实测排放，未知测量不等于零。OSB直燃干燥表仅提供候选物种/CAS名称，不提供间接waferboard数量。

- 选定流：甲醛 `08a91e70-3ddc-11dd-941b-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测实物核算期交换总量 / Q；用所链接协议保留阶段与物流明细。分配另作用于环境负荷，不乘实物输出。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission`
- 来源：`epa-waferboard-2002`

###### 苯酚（`phenol`）

仅指室外空气排放，子介质未特指；在实际排放口测量该物种/粒径，保留源、采样方法、不确定性与相态。不得替换为室内、长期、土壤/水、修正流或指定对映异构体。 本行为条件性物种/相态筛查卡，不预设发生或默认排放；须证明未发生或实测排放，未知测量不等于零。OSB直燃干燥表仅提供候选物种/CAS名称，不提供间接waferboard数量。

- 选定流：苯酚 `fe0acd60-3ddc-11dd-aa41-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测实物核算期交换总量 / Q；用所链接协议保留阶段与物流明细。分配另作用于环境负荷，不乘实物输出。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission`
- 来源：`epa-waferboard-2002`

###### 甲醇（`methanol`）

仅指室外空气排放，子介质未特指；在实际排放口测量该物种/粒径，保留源、采样方法、不确定性与相态。不得替换为室内、长期、土壤/水、修正流或指定对映异构体。 本行为条件性物种/相态筛查卡，不预设发生或默认排放；须证明未发生或实测排放，未知测量不等于零。OSB直燃干燥表仅提供候选物种/CAS名称，不提供间接waferboard数量。

- 选定流：甲醇 `fe0acd60-3ddc-11dd-a935-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测实物核算期交换总量 / Q；用所链接协议保留阶段与物流明细。分配另作用于环境负荷，不乘实物输出。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission`
- 来源：`epa-waferboard-2002`

###### 未限定对映异构体的α-蒎烯（`alpha_pinene`）

仅指室外空气排放，子介质未特指；在实际排放口测量该物种/粒径，保留源、采样方法、不确定性与相态。不得替换为室内、长期、土壤/水、修正流或指定对映异构体。 本行为条件性物种/相态筛查卡，不预设发生或默认排放；须证明未发生或实测排放，未知测量不等于零。OSB直燃干燥表仅提供候选物种/CAS名称，不提供间接waferboard数量。

- 选定流：蒎烯 `0a701083-c7e6-43d1-8ae5-e62050edc5dc`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测实物核算期交换总量 / Q；用所链接协议保留阶段与物流明细。分配另作用于环境负荷，不乘实物输出。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission`
- 来源：`epa-waferboard-2002`

###### 乙醛（`acetaldehyde`）

仅指室外空气排放，子介质未特指；在实际排放口测量该物种/粒径，保留源、采样方法、不确定性与相态。不得替换为室内、长期、土壤/水、修正流或指定对映异构体。 本行为条件性物种/相态筛查卡，不预设发生或默认排放；须证明未发生或实测排放，未知测量不等于零。OSB直燃干燥表仅提供候选物种/CAS名称，不提供间接waferboard数量。

- 选定流：乙醛 `fe0acd60-3ddc-11dd-a7a5-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测实物核算期交换总量 / Q；用所链接协议保留阶段与物流明细。分配另作用于环境负荷，不乘实物输出。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission`
- 来源：`epa-waferboard-2002`

###### 丙烯醛（`acrolein`）

仅指室外空气排放，子介质未特指；在实际排放口测量该物种/粒径，保留源、采样方法、不确定性与相态。不得替换为室内、长期、土壤/水、修正流或指定对映异构体。 本行为条件性物种/相态筛查卡，不预设发生或默认排放；须证明未发生或实测排放，未知测量不等于零。OSB直燃干燥表仅提供候选物种/CAS名称，不提供间接waferboard数量。

- 选定流：丙烯醛 `08a91e70-3ddc-11dd-91a4-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测实物核算期交换总量 / Q；用所链接协议保留阶段与物流明细。分配另作用于环境负荷，不乘实物输出。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission`
- 来源：`epa-waferboard-2002`

###### 丙醛（`propionaldehyde`）

仅指室外空气排放，子介质未特指；在实际排放口测量该物种/粒径，保留源、采样方法、不确定性与相态。不得替换为室内、长期、土壤/水、修正流或指定对映异构体。 本行为条件性物种/相态筛查卡，不预设发生或默认排放；须证明未发生或实测排放，未知测量不等于零。OSB直燃干燥表仅提供候选物种/CAS名称，不提供间接waferboard数量。

- 选定流：丙醛 `fe0acd60-3ddc-11dd-9f05-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测实物核算期交换总量 / Q；用所链接协议保留阶段与物流明细。分配另作用于环境负荷，不乘实物输出。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission`
- 来源：`epa-waferboard-2002`

###### 水蒸气（`water_vapour`）

进入室外空气的木材蒸发水分及实际蒸汽放空；采用实测水平衡，不包含返还凝结水及背景蒸汽生产用水。 本行为条件性物种/相态筛查卡，不预设发生或默认排放；须证明未发生或实测排放，未知测量不等于零。OSB直燃干燥表仅提供候选物种/CAS名称，不提供间接waferboard数量。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测蒸发及实际放空水质量 / Q；cp_water核对全部进入、保留、排放及返还水。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：`epa-waferboard-2002`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| a_separate | p_wafer | 实物质量/水/碳/能量未分配账及内部交接，与产品归属环境负荷账分别保留。共产品实物质量保持实际值。 | ghg-allocation-2011 |
| a_hierarchy | p_wafer | 用阶段/源计量避免分配。其余共用负荷须证明因果物理关系；干质量仅在有理由时适用。否则记录同一核算期经济关系及敏感性，披露价格和市场，不自动设零价值或避免燃料抵扣。 | ghg-allocation-2011 |
| a_residue | bark, fines, bark_waste, fines_waste | 依据去向证据将各残余批次分为售出共产品、内部返回或废物，数量互斥。含树脂残余与未施胶木材分开，并使用各自处理数据集。 | epa-waferboard-2002 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_reference | p_wafer | 成品板材与分母 | weighing_acceptance | 场址；核算期；批次；验收净质量Q；含水率；等级/试验；实际尺寸/密度；刨片几何/取向；PF配方 | 校准称重且排除包装/废品；可追溯验收与经验证的板材含水率试验；结合铺装设备记录抽样刨片形状/方向；汇总计算：汇总验收板材净质量Q；板材输出按每1 kg参考流计 | kg | 每发运批次 | 完整声明核算期 | 同一场址及路线 | 每 1 kg 参考流 | 秤校准；票据；配方；照片；试验 |
| cp_material | p_wafer | 每项投入材料与包装 | stock_batch | row_id；批次；阶段；供方；组成及实测生物/化石碳质量分数；固化状态；湿/干质量；含水率；期初/采购/期末库存；退料 | 分别校准称重、库存核对、供方证书、未处理木材绝干抽样及实验室/供方组分碳记录；核实PF固形物/固化适用性及石油蜡牌号；汇总计算：分别将实物归属总量 / Q；每1 kg参考流 | kg | 每批及库存结算 | 完整声明核算期 | 同一场址及路线 | 每 1 kg 参考流 | 称重/校准；库存闭合；配方 |
| cp_utility | p_wafer | 电力与自来水分别计量 | submeter | row_id；阶段；仪表；电压；千瓦时；自来水千克；测体积时的密度；库存/损耗；共用驱动因素 | 校准阶段计量与供方账单核对；核实电力变压/损耗边界及供水身份；汇总计算：各归属总量 / Q；电量转MJ；每1 kg参考流 | kWh; kg | 连续计量与每月核对 | 完整声明核算期 | 同一场址/电压/来源 | 每 1 kg 参考流 | 仪表校准；账单；损耗核对 |
| cp_steam | p_wafer | 蒸汽进入与凝结水返还分别计量 | enthalpy_balance | 阶段；进入/返还质量；压力；温度；蒸汽品质；放空/泄漏质量；库存；供方焓口径及返还抵扣 | 校准质量仪表与状态传感器；经验证的蒸汽物性方法；供热/背景定义凭证；逐阶段及整个交付系统核对；汇总计算：进入蒸汽kg / Q与返还凝结水kg / Q分别计；净焓另行核对；每1 kg参考流 | kg; MJ | 连续记录及每次供热状态变化 | 完整声明核算期 | 同一供方及场址交付/返还边界 | 每 1 kg 参考流 | 校准；状态；供方边界；不确定性 |
| cp_residue | p_wafer | 每项共产品与废物 | weighing_destination | row_id；阶段；批次；湿/干质量；树脂污染；售价；去向；废物状态；库存；内部返回id | 分别校准称重与去向票据；抽样组成/含水率；审核售出/废物/内部批次互斥；汇总计算：各实际外部物流总量 / Q；实物输出不乘分配权重；每1 kg参考流 | kg | 每残余批次 | 完整声明核算期 | 同一场址及明确去向 | 每 1 kg 参考流 | 票据；状态分类；库存/交接闭合 |
| cp_emission | p_wafer | 每种物种及颗粒物分段 | outlet_sampling | row_id；源/阶段；控制；物种/CAS；相态；出口气量；浓度；湿/干/标态条件；时间；检出限；可过滤/可凝结口径 | 代表性控制后出口测试结合运行时间/气量记录；逸散估计单独证明；核实三个不重叠可过滤PM段及VOC/可凝结物重叠；汇总计算：各物种/分段积分实物质量 / Q；每1 kg参考流；共用排气筒不重复计 | kg | 代表性测量期及每次配方/控制变化 | 全部声明运行工况及季节性 | 同一场址及控制后出口 | 每 1 kg 参考流 | 测试方法；检出/不确定性；控制/运行记录 |
| cp_water | p_wafer | 蒸发与水平衡闭合 | water_balance | 木材/载体水；蒸汽；自来水；板材/残余含水；废水；凝结水；放空；期初/期末水库存 | 可追溯含水率与流量测量；结合cp_material、cp_reference、cp_steam及cp_residue核对全部水路径；汇总计算：实际排放水质量 / Q；每1 kg参考流；保留闭合差及不确定性 | kg | 每测量期及核算期结算 | 完整声明核算期 | 同一综合场址边界 | 每 1 kg 参考流 | 成对水路径；含水率方法；闭合 |
| cp_allocation | p_wafer | 环境负荷归属与实物清单分开 | attribution_account | 阶段直接负荷；共用负荷；因果驱动量；产品实测干质量；销售/价格；边界；敏感性 | 先审核计量细分，再审核记录的物理/经济关系；保留独立分配矩阵及原始实物流账；汇总计算：归属环境负荷 / Q；实物物流总量保持不变；每1 kg参考流 | kg; MJ; currency | 每声明核算期及分配变化 | 与清单同一核算期 | 同一场址与共用过程 | 每 1 kg 参考流 | 驱动量理由；价格；核对；敏感性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| period_normalization | 所有清单行 | 每个实际实物交换采用归属核算期总量除以Q；成品输出恰为1千克。Q为正值验收发运湿态净质量。 | Q; period totals; cp_reference | 每个交换按每1 kg参考流计 | epa-waferboard-2002 |
| dry_wood_account | conifer_logs, hardwood_logs | 每批未处理木材：干木材=湿木材/(1+u)；水=湿木材-干木材。板材和废物内分别保留胶/蜡固形物及碳来源；绝干板材不等于干木材。 | wet mass; dry-basis u; cp_material | 实物干物质与水账 | usda-wood-moisture-2021 |
| steam_enthalpy | steam, condensate | 净交付焓=进入质量×进入比焓-返还质量×返还比焓-其他输出物流焓-储能增加量，采用明确共同基准。热损、放空与阶段有用热分别核对。供方返还抵扣须遵循其背景口径；进入蒸汽质量或数据库能量单位均不能单独等于净有用热。 | inlet/return/outgoing states; mass; stock; cp_steam | 核对能量账及兼容蒸汽链接 | epa-waferboard-2002 |
| pm_partition | pm25, pmcoarse, pmover10, condensable_pm | 对于成对兼容的可过滤测量：细段=PM2.5；中段=PM10-PM2.5；粗段=可过滤PM总量-PM10。各段非负；必须保留不确定性及一致采样条件，不再加累计PM10/总PM。可凝结测量及分子VOC质量按相态保留且不重复。 | paired outlet tests; cp_emission | 互斥实物颗粒及分子物种清单 | epa-waferboard-2002 |
| physical_closure | p_wafer | 将期初库存+外部输入，与成品+实际共产品+废物+基本排放+期末库存在干物质、水及生物/化石碳账中分别核对。包括胶/蜡固形物与挥发损失。内部交接两端数量/状态一致且在厂级抵消；报告余差及实测不确定性。 | all stream totals; stock; material carbon composition; cp_material; cp_water; cp_residue; cp_emission | 未分配平衡账 | epa-waferboard-2002 |
| burden_attribution | p_wafer | 先归属直接负荷。仅将有理由的分配份额作用于其余共用环境负荷，同一范围份额之和为一。全部产品实物数量保持不变；产品归属负荷除以Q形成下游数据集。 | direct/common burdens; allocation drivers; cp_allocation; Q | 独立产品归属负荷账 | ghg-allocation-2011 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | p_wafer | 核实实际木刨片几何/随机结构、未固化PF配方、产品验收及排除项；商品名或分类标签不足以证明。 | 铺装日志；几何照片/试验；供方证书 |
| dq_coverage | 所有清单行 | 覆盖完整代表性运行核算期及全部测量工况；区分实测零、低于检出、未发生及缺测。缺失UUID或供方数量/背景兼容性须明确；完整数据集不得静默替代。 | 逐行覆盖；校准；不确定性；供方定义 |
| dq_limits | p_wafer | 历史EPA/FPL来源仅提供方法背景。不得将针叶锯木厂CORRIM数量、锯木粉尘或锅炉因子移用于waferboard间接干燥/热压。为额外实际交换增设独立行并保留相态特定排放。 | 范围/路线对照；现场筛查；原始方法 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| v_reference | finished_waferboard | 恰有一个1千克验收板材净成品参考输出；Q为正且各行/协议采用同一分母。拒绝重复参考中间物、含包装质量分母及中英文定义差异。 | epa-waferboard-2002 |
| v_architecture | p_wafer | 要求宽薄刨片形态及非主动定向随机铺装证据、实际PF化学/牌号和声明供热/控制路线。拒绝长刨片定向OSB、细粒UF particleboard及排除变体。 | usda-waferboard-types-1986 |
| v_balance | p_wafer | 在负荷分配前审核干物质/水/能量及按来源分开的碳闭合，交接成对一致。声明完整链接数据集前须解决供方蒸汽口径、电压、PF/蜡状态及缺失身份。 | usda-wood-moisture-2021 |
| v_emission | p_wafer | 控制后出口物种/相态数量仅计一次，PM分段不重叠。上游LCI及另行审查的厂内燃烧扩展均保留实际生物/化石CO2；温室气体报告口径不得从实物清单删去生物CO2。披露未测物种，不声称完整覆盖。 | epa-waferboard-2002 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 经核实场址/核算期随机刨片PF板材生产负荷，每1千克验收成品净材料 |
| allowed_use | 匹配物理结构、配方及试点路线；链接实际上游供应及去向过程，披露分配 |
| excluded_use | 泛称其他板或OSB/UF代理；结构服务等效；现代法定/等级认证；UUID/蒸汽/PF/蜡背景链接未完整 |
| required_metadata | 必需限定信息；场址/核算期；上游厂界；方法；全部流数量与身份；实物平衡及分配账；原始来源定位 |
| required_quality_disclosure | 缺失/条件行、检出/不确定性、身份与数量/背景兼容性区别、排除项、代表性及历史来源限定 |
| update_trigger | 树种/刨片结构、PF/蜡供应、产品等级、蒸汽/电力边界、控制、去向、缺失身份或场址核算期变化 |

## 11. 数据源

| 来源id | 类型 | 参考资料 | 用途 |
| --- | --- | --- | --- |
| epa-waferboard-2002 | official_guidance | US EPA. AP-42 §10.6.1 Waferboard/Oriented Strandboard Manufacturing, March 2002. https://www.epa.gov/sites/default/files/2020-10/documents/c10s06-1.pdf | 第10.6.1.1–.3节，印刷10.6.1-1–4页及图10.6.1-1：历史路线/随机铺装/热压/成品。第12页表10.6.1-3描述木料直燃针叶OSB干燥；仅用候选物种/CAS名称作现场筛查，不将发生情况、排放率或控制性能移用于本间接路线。 |
| usda-waferboard-types-1986 | handbook | Carll, C.G. Wood particleboard and flakeboard: types, grades, and uses. FPL-GTR-53, November 1986. https://research.fs.usda.gov/download/treesearch/5677.pdf | 印刷第1、5页及图2：广义术语、典型PF二类板背景、真实宽刨片样品及更窄的定向OSB；不设现代等级/强度默认值。 |
| usda-commercial-panels-1999 | literature | Laufenberg, T.L.; Palka, L.C.; McNatt, J.D. Creep and creep-rupture behavior of wood-based structural panels. FPL-RP-574, June 1999. https://research.fs.usda.gov/download/treesearch/5817.pdf | 摘要、印刷第1–2页及表1：真实1985年轻微取向商业waferboard W1–W7及抽样限定。不证明W4树种、PF化学、供热路线、现代配方、寿命或排放。 |
| usda-wood-moisture-2021 | handbook | USDA Forest Products Laboratory. Wood handbook—wood as an engineering material. FPL-GTR-282, 2021. https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf | 第4章印刷4-1页、式4-1/4-2：木材干基含水率定义；不假定树种含水率/密度，也不充当含树脂板材烘干损失规则。 |
| ghg-allocation-2011 | standard | WRI/WBCSD. Product Life Cycle Accounting and Reporting Standard, 2011, Chapter 9 p.63 Tables 9.1–9.2. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 仅用于避免分配及有记录的物理/经济关系。不采用仅温室气体报告的实物LCI排放删减，也不预设残余物价格/份额。 |

