---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.untreated-prf-glulam-straight-beams
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 未处理 PRF 胶合木直梁

## 1. 范围与适用性

本 PCR 仅覆盖一条制造路线：以外购窑干且已结构分等的针叶锯材层板制造未处理、未涂饰胶合木直梁，所有层板木纹平行梁长，按需采用 PRF 指接、双组分 PRF 面胶合、液压夹紧及室温固化。纳入电力设备及电力室内/清洗水加热；不表示厂内锯材窑干、燃烧、外购蒸汽或燃料供热。等级及胶合适用性由真实产品/工厂记录建立，不由本 PCR 赋予。[usda-wood-handbook-2021，第11章11-18–11-21页；dynea-prf-tds-2014。]

排除 CLT 正交层板、LVL/PSL/LSL/OSL、含单板的受拉层板、工字梁、家具拼板、曲梁/变截面梁或块胶合/再胶合构件、阔叶木/竹、防腐/阻燃处理、涂层/封闭剂、另加胶黏剂增量填料、射频/热压及带金属连接件的安装组合件。不同路线需单独审查适用性和清单；本方法不是工程木产品间的选择器。不提供结构设计值、认证、承载等效性或使用寿命。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.untreated-prf-glulam-straight-beams |
| classification_refs | CPC 3.0 31627; narrower; 范围及已接受决定见 `classifications/mappings/cpc-3.0-to-pcr.yaml` 和其引用的 ADR |
| covered_products | 未处理、未涂饰的针叶锯材层板 PRF 胶合木直梁 |
| excluded_products | CLT；LVL 及其他结构复合材；经处理/涂饰/弯曲/单板增强或热/射频固化产品 |
| representative_product | 一个有真实层板等级组合记录的直梁配置 |
| production_route | 外购窑干锯材；核实等级/含水率；备层板；PRF 指接；新鲜刨削胶合面；树脂与粉料配胶；铺层；液压夹紧；室温固化；修整/刨削；检测；交付保护 |
| market_state | 厂门已验收制造成品梁；木材及固化胶净质量，交付保护单列清单 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应用于声明结构应用的胶合木梁材料，不建立结构等效性 |
| How much | 厂门净验收梁 1 kg，排除包装 |
| How well | 真实树种、层板等级/位置、梁尺寸、胶黏剂适用证明及指接/胶合验收记录；不虚构强度 |
| How long or cycle | 一个声明的生产/交付核算期；不指定服务时长 |
| reference_flow_link | `finished` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 工程结构木制品 `7d571023-9d51-45d7-86d4-4cceefb3d06c` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 植物树种/混合比例；锯材层板尺寸、等级及位置；梁几何及对称/非对称铺层；真实接头类型；液体 PRF 和粉料品级/批号；留存固化胶；真实木材干基含水率及采样；不含包装净质量；无处理/涂饰；液压室温路线；有记录的适用证明和检测状态；场址/时期；外购锯材供应方厂门及数量基准 |

在具体数据包中声明全部必需限定信息。广义产品 UUID 是此明确限定子集的实物定位；选用它不代表已建立匹配供应数据。此处是质量声明单位，不是 1 m3 或承载服务功能单位。服务比较须另作设计研究，核实荷载、几何、暴露、时长及更换。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | 质量 | kg | 用 cp_reference 中经校准的秤称量验收成品梁，包装另行扣皮。净验收产品包含实际水分及固化胶；报废和检测样品质量不进入此分母。 |
| `wood_moisture` | 未施胶木材及单独木材组分 | 干基水分比例 | dimensionless | u=(m_wet-m_dry)/m_dry；m_dry=m_wet/(1+u)；百分数须除以100。采用代表性配对木样及有记录的绝干方法；不得把木材 u 用于含胶胶合木总质量。胶固体、水和挥发物分开保留。[usda-wood-handbook-2021，第4章式4-1/4-2。] |
| `solid_volume` | wood_input | 体积；匹配质量 | m3; kg | 在记录的木材含水状态下测量真实实材尺寸/体积；质量换算使用同批湿密度，不采用名义截面或树种平均/基本密度。链接前核实供应方 m3 状态及测量约定。成品梁体积及承载服务始终不替代净验收 kg 分母。 |
| `electric_energy` | electricity | 数据库净热值能量属性 | MJ | 在低于1 kV用户边界计量交付电力 kWh，乘3.6换算为 MJ。匹配供应方电压、电网结构、地域、年份和损耗边界；不解释为燃料热量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已交付窑干分等未处理针叶锯材及分开外购的 PRF 组分 |
| starting_condition_role | 厂门至厂门前景梁制造；外购锯材干燥位于上游 |
| product_classification_scope | CPC 3.0 31627; narrower |
| recursive_input_rule | 外购兼容材料保留为显式投入并链接供应方厂门负荷；不把本成品梁参考流递归用作内部中间成品 |
| upstream_dataset_requirement | 匹配窑干锯材，包括林业、锯材加工及干燥；进厂运输；两种配方 PRF 组分；电力、水、包装、维护及废物供应数据。实物 UUID 与数量/背景兼容性须分别核实 |
| disclosure | 场址、批组、收货/交付厂门、供应方排除项、控制路线、损失、存量变化、未决身份/供应数据及运输建模。厂门至厂门不等于完整摇篮至厂门 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_stages` | glulam_manufacture | 纳入等级/含水率核实、缺陷去除、实际指接的切削/施胶/端压/固化、新鲜面刨削、配胶/涂胶、铺层、液压夹紧/室温固化、修整、最终检查/检测试件、除尘排风、清洗、维护及真实交付保护。各阶段在聚合前景单元内独立记录。 | `usda-wood-handbook-2021`; `dynea-prf-tds-2014` |
| `boundary_emissions` | all emissions and wastes | 定量控制后的真实释放；捕集粉尘及含胶清洗水保留为废物转移。室外空气记录不代表车间暴露或水体排放。依据当前配方/SDS及测量筛查真实物种；数据集完成前逐项补入每个缺失的适用交换，包括废液压油、其他耗材及实测水蒸气。不得因质量阈值删除已知毒性流。 | `dynea-prf-tds-2014` |
| `boundary_carbon` | wood and adhesive carbon | 投入、验收梁、残余物、水和空气损失中的木材生物碳与胶黏剂化石/生物碳分别核算，采用实测/已核实组成。上游森林吸收只继承一次，不在胶合木厂虚构。产品储碳不是负前景排放或避免排放信用。若真实直接排放生物 CO2，即使温室气体报告口径不计，也须在 LCI 单独保留；本路线无默认燃烧。 | `usda-wood-handbook-2021` |
| `boundary_downstream` | downstream use | 本制造厂门排除交付后的运输、安装、结构服务及寿命终结。明确说明资本和人员活动的边界处理及重要性；省略阶段不等于零。现场燃料作业、外购热及不同胶黏剂/固化路线需经审查的清单扩展。 | `usda-wood-handbook-2021` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `glulam_manufacture` | 分等、PRF 接合/胶合、修整、质量保证和交付 | required | 范围所定义的唯一外购锯材室温液压路线 | 一个聚合前景单元，保留独立阶段测量和实物账 | `finished` |

锯材收货 → 等级/含水率检查及缺陷切除 → 按需指接备料/PRF 接合 → 新鲜面刨削 → PRF 配胶/涂胶及声明铺层 → 液压夹紧及室温固化 → 修整/刨削和质量检测 → 受保护厂门交付。中间层板和未修整梁留在本单元内；使用匹配的原始转移记录及阶段数量，不增设相同参考 UUID 的第二产品输出。

以下卡片描述每 1 kg 参考流的未分配实物交换。真实批组总量除以验收梁净 kg；归一化不是负荷分配。在任何分配前保留原始质量、水/胶/碳清单及存量变化。内部转移两端采用相同量。实际适用但未测量的条件交换为未决，不是零。

### 过程：梁制造 (`glulam_manufacture`)

#### 输入

##### 产品流

###### 建筑用木料 (`wood_input`)

外购窑干、未处理且层板等级已核实的针叶锯材；实测收货含水状态下的实材体积，保留湿质量和绝干质量。排除 LVL 受拉层板。供应方实材体积参考量及含水状态必须一致；名义板材体积或松散堆积体积不足以建立链接。

- 选定流： 建筑用木料 `73ef1fef-6aa1-43b0-8721-c8f2f1385509`
- 流属性/单位： 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则： 采用 cp_material 的实测实物交换总量，除以 cp_reference 的验收梁净 kg；保留原始记录及阶段归属。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_material`
- 来源： `usda-wood-handbook-2021`

###### 液体苯酚-间苯二酚-甲醛胶黏树脂 (`prf_resin`)

记录指接和面胶合所用单独供货的液体 PRF 配方质量，以及供应商品级、批号、固体、水和挥发物组成。不得用干酚醛聚合物替代配方树脂，或移植历史混合比例。

- 选定流： 液体苯酚-间苯二酚-甲醛胶黏树脂
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 采用 cp_adhesive 的实测实物交换总量，除以 cp_reference 的验收梁净 kg；保留原始记录及阶段归属。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_adhesive`
- 来源： `dynea-prf-tds-2014`

###### PRF 木材胶黏剂粉状硬化剂 (`prf_hardener`)

粉状配方的实耗质量与树脂分开记录。核实当前 TDS/SDS、反应性组分及内含填料；纯多聚甲醛身份不能代表此混合配方。本路线排除另外加入的填料。

- 选定流： PRF 木材胶黏剂粉状硬化剂
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 采用 cp_adhesive 的实测实物交换总量，除以 cp_reference 的验收梁净 kg；保留原始记录及阶段归属。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_adhesive`
- 来源： `dynea-prf-tds-2014`

###### 交流电 (`electricity`)

计量用户侧低于 1 kV 的电网平均供电。包括搬运、机加工、指接、配胶、液压泵、排风除尘、电力室内调温、电热清洗水、质量检测和包装。保留数据库净热值的能量表达；电力不是燃烧燃料。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 采用 cp_energy 的实测实物交换总量，除以 cp_reference 的验收梁净 kg；保留原始记录及阶段归属。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_energy`
- 来源：

###### 自来水 (`water`)

在配胶设备清洗和质量检测实际使用外购处理后自来水时纳入。计量实际水体积；不得从该流次级质量属性移植默认密度。实物定位不表示已匹配供水方或交付背景；须独立核实实际提供方、地域、水处理厂与交付厂门、输配负荷及参考体积兼容性，未匹配的提供方链接保持待定。电热耗电计入电力行。

- 选定流： 自来水 `3a8411b6-e476-4f98-9d77-0d492661a07f`
- 流属性/单位： 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则： 采用 cp_material 的实测实物交换总量，除以 cp_reference 的验收梁净 kg；保留原始记录及阶段归属。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_material`
- 来源： `dynea-prf-tds-2014`

###### 聚乙烯薄膜 (`pe_wrap`)

厂门交付实际使用聚乙烯保护包膜时纳入。称量安装薄膜并单列废膜；不替代纸、PET、涂层或封闭剂。背景链接前核实实际聚乙烯薄膜状态、等级及供应方/提供方兼容性，聚合物实物身份不表示已匹配包装数据集。包装质量始终不进入梁的分母。

- 选定流： 聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 采用 cp_packaging 的实测实物交换总量，除以 cp_reference 的验收梁净 kg；保留原始记录及阶段归属。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_packaging`
- 来源：

###### 聚丙烯包装打包带 (`pp_strap`)

仅在实际采用成品 PP 包装打包带时纳入，单独称量。树脂粒料、纱线、捆扎绳和钢带为不同产品；采用非 PP 包装需另列经审核的行。

- 选定流： 聚丙烯包装打包带
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 采用 cp_packaging 的实测实物交换总量，除以 cp_reference 的验收梁净 kg；保留原始记录及阶段归属。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_packaging`
- 来源：

###### 液压油 (`hydraulic_oil`)

液压夹紧系统实际消耗的补充或更换油液，采用真实含添加剂配方。不得每根梁重复计入原有油液装填量；追踪泄漏和废油去向。计量真实油液体积并核实供应方数量基准；质量换算需实测同牌号密度及温度，不假定系数。

- 选定流： 液压油 `30691a38-a947-4b41-991e-194f6c9aa88f`
- 流属性/单位： 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则： 采用 cp_maintenance 的实测实物交换总量，除以 cp_reference 的验收梁净 kg；保留原始记录及阶段归属。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_maintenance`
- 来源：

#### 输出

##### 产品流

###### 工程结构木制品 (`finished`)

仅指全部由针叶锯材层板组成、木纹平行梁长的验收未处理、未涂饰 PRF 胶合木直梁。广义数据库身份包含此子集；它不选择 CLT/LVL，也不批准强度、使用等级或背景数据集。净质量包括留存固化胶及实际木材水分，排除全部包装。

- 选定流： 工程结构木制品 `7d571023-9d51-45d7-86d4-4cceefb3d06c`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 1 千克
- 数值来源模式： `fixed_value`
- 适用范围： `product_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `method_formula`
- 采集协议： `cp_reference`
- 来源： `usda-wood-handbook-2021`

##### 废物流

###### 木屑废物 (`clean_shavings`)

胶合前锯切/刨削中单独收集的未施胶、未处理机加工颗粒，以非团聚废物送外部回收。核实接收方及废物状态与已验证的未处理焚烧/回收身份一致。不得用于含胶修整粉尘，也不得把捕集物再次计为空气排放。

- 选定流： 木屑废物 `e1a44d20-d968-4d64-bd7c-253a1441ab35`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 采用 cp_waste 的实测实物交换总量，除以 cp_reference 的验收梁净 kg；保留原始记录及阶段归属。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_waste`
- 来源： `usda-wood-handbook-2021`

###### 未处理未施胶针叶木边角料废物 (`clean_offcuts`)

胶合前备料的单独未处理、未施胶、非团聚针叶木粗实心边角料及分等不合格投入锯材；分别称量并记录实际木材状态、含水率及去向，处理链接前核实接收方/提供方接受条件。广义木工余料定位不表示已匹配处理或团聚木块状态。

- 选定流： 木材边角料 `acc22294-8e77-4784-988f-2499be3c60eb`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 采用 cp_waste 的实测实物交换总量，除以 cp_reference 的验收梁净 kg；保留原始记录及阶段归属。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_waste`
- 来源： `usda-wood-handbook-2021`

###### PRF 胶合木边角料废物 (`bonded_trim`)

含固化 PRF 的固体端头修边料、质量检测试件及加工边角料；记录固化胶含量和去向。排除粉尘及整根报废梁。

- 选定流： PRF 胶合木边角料废物
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 采用 cp_waste 的实测实物交换总量，除以 cp_reference 的验收梁净 kg；保留原始记录及阶段归属。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_waste`
- 来源： `usda-wood-handbook-2021`

###### PRF 污染木材机加工粉尘废物 (`bonded_dust`)

单独称量胶合后刨削/砂磨所捕集的含固化胶粉尘，与未施胶粉尘分开。存在废滤材时另列其交换。

- 选定流： PRF 污染木材机加工粉尘废物
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 采用 cp_waste 的实测实物交换总量，除以 cp_reference 的验收梁净 kg；保留原始记录及阶段归属。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_waste`
- 来源： `usda-wood-handbook-2021`

###### 报废 PRF 胶合木梁废物 (`rejected_beam`)

最终质量检验不合格的完整胶合构件；从验收产量中扣除其质量，保留其生产投入和有记录的返工/回收去向。

- 选定流： 报废 PRF 胶合木梁废物
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 采用 cp_waste 的实测实物交换总量，除以 cp_reference 的验收梁净 kg；保留原始记录及阶段归属。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_waste`
- 来源： `usda-wood-handbook-2021`

###### 未固化混合 PRF 胶黏剂废物 (`adhesive_waste`)

单独收集适用期届满或剩余的未固化混合 PRF；排除留存在木材中及已进入清洗废水的胶。记录真实湿配方及危险废物判定。

- 选定流： 未固化混合 PRF 胶黏剂废物
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 采用 cp_waste 的实测实物交换总量，除以 cp_reference 的验收梁净 kg；保留原始记录及阶段归属。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_waste`
- 来源： `dynea-prf-tds-2014`

###### PRF 配胶设备清洗废水 (`washwater`)

实际发生时纳入送外部处理的含胶清洗废水，测量体积和组成。其为技术圈废物，不是自来水，也不是直接进入受纳水体的基本排放。

- 选定流： PRF 配胶设备清洗废水
- 流属性/单位： 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则： 采用 cp_waste 的实测实物交换总量，除以 cp_reference 的验收梁净 kg；保留原始记录及阶段归属。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_waste`
- 来源： `dynea-prf-tds-2014`

###### 废矿物基液压油 (`used_oil`)

实际单独转移时纳入含真实添加剂及污染物的废矿物基液压油。称量并核实外部接收方；不得重复计入设备留存装填油量。

- 选定流： 废矿物基液压油
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 采用 cp_waste 的实测实物交换总量，除以 cp_reference 的验收梁净 kg；保留原始记录及阶段归属。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_waste`
- 来源：

###### 废聚乙烯包膜 (`pe_scrap`)

实际送回收/处理的包膜边角废料；区分随产品交付的薄膜与丢弃薄膜，记录聚合物和去向。

- 选定流： 废聚乙烯包膜
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 采用 cp_waste 的实测实物交换总量，除以 cp_reference 的验收梁净 kg；保留原始记录及阶段归属。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_waste`
- 来源：

##### 基本流

###### 颗粒物 (PM2.5) (`pm_fine`)

机加工/搬运实际控制后排至室外空气的 PM2.5。颗粒来源为木材或含胶木材粉尘，不是燃烧；保留来源、空气动力学粒径切割、可过滤/可凝结测定方法和出口条件。

- 选定流： 颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 采用 cp_emission 的实测实物交换总量，除以 cp_reference 的验收梁净 kg；保留原始记录及阶段归属。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_emission`
- 来源： `usda-wood-handbook-2021`

###### 颗粒物 (PM2.5 - PM10) (`pm_mid`)

在与细粒相同来源、控制和测量基准下，实际排至室外空气的大于 PM2.5 且不超过 PM10 的颗粒。不是累计 PM10。

- 选定流： 颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 采用 cp_emission 的实测实物交换总量，除以 cp_reference 的验收梁净 kg；保留原始记录及阶段归属。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_emission`
- 来源： `usda-wood-handbook-2021`

###### 颗粒物（> PM10） (`pm_coarse`)

实际排至室外空气的大于 PM10 的颗粒。不是总悬浮颗粒或累计 PM10；不得把嵌套粒径区间重复累加。

- 选定流： 颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 采用 cp_emission 的实测实物交换总量，除以 cp_reference 的验收梁净 kg；保留原始记录及阶段归属。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_emission`
- 来源： `usda-wood-handbook-2021`

###### 甲醛 (`formaldehyde`)

配胶、指接、固化或搬运实际向室外空气释放 CAS 50-00-0 时纳入；出口及逸散释放分别定量后聚合。存在树脂不等于有默认正排放量。

- 选定流： 甲醛 `08a91e70-3ddc-11dd-941b-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 采用 cp_emission 的实测实物交换总量，除以 cp_reference 的验收梁净 kg；保留原始记录及阶段归属。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_emission`
- 来源： `dynea-prf-tds-2014`

###### 苯酚 (`phenol`)

当前 SDS 和监测证明存在 CAS 108-95-2 室外空气释放时纳入。不得采用环己醇、室内空气、水体或校正记录替代。

- 选定流： 苯酚 `fe0acd60-3ddc-11dd-aa41-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 采用 cp_emission 的实测实物交换总量，除以 cp_reference 的验收梁净 kg；保留原始记录及阶段归属。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_emission`
- 来源： `dynea-prf-tds-2014`

###### 甲醇 (`methanol`)

有记录的胶黏剂载体或木材工序实际向室外空气释放 CAS 67-56-1 时纳入。核实来源碳属性并监测；不得用 α-甲基苯甲醇替代或假定溶剂比例。

- 选定流： 甲醇 `fe0acd60-3ddc-11dd-a935-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 采用 cp_emission 的实测实物交换总量，除以 cp_reference 的验收梁净 kg；保留原始记录及阶段归属。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_emission`
- 来源： `dynea-prf-tds-2014`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_separate` | physical and burden ledgers | 实物投入、全部残余物输出及匹配内部转移保持原量。共享工厂优先使用阶段计量及批次路线细分；梁线材料消耗直接归属。不得把联产品输出质量或终端 1 kg 乘分配份额。 |  |
| `allocation_status` | residue status | 依据真实法律、接收方及市场证据，区分送处理/回收的废物与有意生产销售的联产品。废物输出计入真实处理负荷，不赋予避免能源/材料信用。单有销售价格不把所有残余物重新定义为联产品。若存在真正联产品，完成前另列其原子输出和适用身份。 |  |
| `allocation_joint` | remaining shared burdens | 若细分仍不能拆分共同负荷，记录已证明的物理因果关系并仅据此分配该负荷。否则须明确论证所选替代方案，如同期间价格与数量的经济分配，并作敏感性分析。不提供通用质量或收入份额。cp_allocation 记录原负荷、份额、直接负荷、目标及来源；各共同工序的份额之和为一。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_reference` | glulam_manufacture | 验收产品 | 原始实测记录 | 批次；梁编号/配置；合格及报废状态；尺寸；皮重；净质量；交付存量；等级/铺层；木材含水率；留存胶 | 经校准的净称重，排除全部包装；链接真实等级、铺层、接头/胶合适用证明、检查及交付记录。核对合格产出、期初/期末存量和交付。 | kg | 每批次/计量间隔或转移；聚合声明时期 | 声明的代表性生产期，覆盖等级组合、环境季节、批次固化和维护 | 一个声明工厂及独立梁产线 | 每 1 kg 参考流 | 校准、可追溯批号和记录、当前适用证明/检测、样本代表性、平衡及不确定性 |
| `cp_material` | glulam_manufacture | 木材和水 | 原始实测记录 | 收货批次；树种；阶段；原始湿/绝干质量；实际实材体积；尺寸；配对含水样品；水表；存量和转移；密度 | 木材单独称量，测量实际含水状态的实材尺寸。使用有记录的绝干木样和经树种/温度校正的含水率仪。保留水表计量；不从成品复合材总质量推算绝干木材。 | kg; m3 | 每批次/计量间隔或转移；聚合声明时期 | 声明的代表性生产期，覆盖等级组合、环境季节、批次固化和维护 | 一个声明工厂及独立梁产线 | 每 1 kg 参考流 | 校准、可追溯批号和记录、当前适用证明/检测、样本代表性、平衡及不确定性 |
| `cp_adhesive` | glulam_manufacture | PRF组分及接合控制 | 原始实测记录 | 树脂/粉料配方；批号；当前TDS/SDS；供货/使用/存量质量；配胶记录；固体/水/挥发物；留存胶；接头几何；层板面等级/位置；表面加工时间；组装时间；端压；面压；固化温度/时长；检测 | 液体树脂和粉料分别称量，核对批次混合及损失；指接和面胶合批次独立记录。核实层板位置、新鲜清洁平行胶合面、合格涂胶/夹紧/固化控制及真实检测结果。历史供应方数值仅为实例，不是默认值或当前认证。 | kg | 每批次/计量间隔或转移；聚合声明时期 | 声明的代表性生产期，覆盖等级组合、环境季节、批次固化和维护 | 一个声明工厂及独立梁产线 | 每 1 kg 参考流 | 校准、可追溯批号和记录、当前适用证明/检测、样本代表性、平衡及不确定性 |
| `cp_energy` | glulam_manufacture | 电力 | 原始实测记录 | 阶段；电表；起止读数；kWh；电压；电网/供应方；室内/水加热；抽尘；质量保证；待机/返工；变压边界 | 分阶段计量并将产线总量与购电记录核对；共享公用工程采用实测因果归属并说明不确定性。kWh乘3.6换算为MJ；避免控制设备和电热重复计量。 | MJ | 每批次/计量间隔或转移；聚合声明时期 | 声明的代表性生产期，覆盖等级组合、环境季节、批次固化和维护 | 一个声明工厂及独立梁产线 | 每 1 kg 参考流 | 校准、可追溯批号和记录、当前适用证明/检测、样本代表性、平衡及不确定性 |
| `cp_packaging` | glulam_manufacture | 各包装组分 | 原始实测记录 | 聚合物；成品形态；安装质量；废弃质量；交付；购入/期初/期末存量 | PE膜和PP打包带独立称量；核对安装膜、废料及存量。两者均排除于参考质量。 | kg | 每批次/计量间隔或转移；聚合声明时期 | 声明的代表性生产期，覆盖等级组合、环境季节、批次固化和维护 | 一个声明工厂及独立梁产线 | 每 1 kg 参考流 | 校准、可追溯批号和记录、当前适用证明/检测、样本代表性、平衡及不确定性 |
| `cp_maintenance` | glulam_manufacture | 液压油 | 原始实测记录 | 油品牌号/添加剂；补充/更换消耗；留存装填量；泄漏；废油接收方；维护期 | 记录真实维护消耗和去向；在有记录的覆盖产量内归属维护，不重复计入全部装填量。测量油液体积、温度及配方特定密度以支持质量换算，并核实供方参考基准。存在废油和基本泄漏时另列。 | kg; m3 | 每批次/计量间隔或转移；聚合声明时期 | 声明的代表性生产期，覆盖等级组合、环境季节、批次固化和维护 | 一个声明工厂及独立梁产线 | 每 1 kg 参考流 | 校准、可追溯批号和记录、当前适用证明/检测、样本代表性、平衡及不确定性 |
| `cp_waste` | glulam_manufacture | 各残余物 | 原始实测记录 | 阶段；未施胶/已胶合；物理状态；湿质量；木材含水率；固化胶；废水体积/组成；试件；报废品；接收方；废物/联产品状态；存量 | 按阶段和污染状态分开每项所列废物。固体称量，废水计量并检测；核实接收处理/回收，避免粉尘捕集物、留存于木材的胶或进入废水的胶重复计量。 | kg; m3 | 每批次/计量间隔或转移；聚合声明时期 | 声明的代表性生产期，覆盖等级组合、环境季节、批次固化和维护 | 一个声明工厂及独立梁产线 | 每 1 kg 参考流 | 校准、可追溯批号和记录、当前适用证明/检测、样本代表性、平衡及不确定性 |
| `cp_emission` | glulam_manufacture | 各物种及粒径区间 | 原始实测记录 | 物种/CAS；来源；室外介质；碳来源；控制设施；出口/逸散方法；浓度；干/湿气基准；气体流量；运行/待机/固化时间；检出限；PM切割及可过滤/可凝结基准 | 在真实作业期间进行代表性控制后测量，相关时包括固化/储存及逸散。浓度与匹配气流和运行时间按一致单位积分；记录未检出及不确定性。估算需有与路线/配方/控制匹配的原件因子及其活动基准；本方法不提供因子。筛查全部真实物种，不局限于此表。 | kg | 每批次/计量间隔或转移；聚合声明时期 | 声明的代表性生产期，覆盖等级组合、环境季节、批次固化和维护 | 一个声明工厂及独立梁产线 | 每 1 kg 参考流 | 校准、可追溯批号和记录、当前适用证明/检测、样本代表性、平衡及不确定性 |
| `cp_allocation` | glulam_manufacture | 独立环境负荷账 | 原始实测记录 | 原记录链接；共同/直接负荷；工序；目标；因果测量；联产品证据；份额；价格时期；继承来源；敏感性 | 独立保留实物账。先记录直接归属，再记录有论据的剩余分配；不覆盖实物量或重复继承负荷。 | kg; MJ | 每批次/计量间隔或转移；聚合声明时期 | 声明的代表性生产期，覆盖等级组合、环境季节、批次固化和维护 | 一个声明工厂及独立梁产线 | 每 1 kg 参考流 | 校准、可追溯批号和记录、当前适用证明/检测、样本代表性、平衡及不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `period_balance` | all inventory rows | 在同一批组内，用原始实物单位核对收货、期初/期末存量、合格产出、返工、报废构件、试件、残余物和损失。各未分配实物交换总量除以 cp_reference 中同一验收梁净 kg。内部阶段转移保持等量并保留原始记录。终端产品始终为1千克。 | `cp_reference`; `cp_material`; `cp_adhesive`; `cp_energy`; `cp_packaging`; `cp_maintenance`; `cp_waste`; `cp_emission` | 每1kg参考流的未分配实物交换 |  |
| `component_balance` | wood water adhesive and carbon | 采用实测组分质量及存量变化，分别闭合绝干木材、水、胶固体/挥发物及碳账。不得从绝干木材扣胶中水，或把复合材烘干损失视作纯木材水分。留存胶依据记录分至验收梁及含胶残余物，不假定配方或收率。木材和胶中碳分开核算，纳入实测排放及废水碳。 | `cp_material`; `cp_adhesive`; `cp_reference`; `cp_waste`; `cp_emission` | 保留残差不确定性的未分配木材/水/胶/碳平衡 | `usda-wood-handbook-2021` |
| `particle_partition` | pm_fine; pm_mid; pm_coarse | 在相同来源/控制/活动及可过滤基准下，对可比累计测量，PM2.5-10=PM10-PM2.5，PM>10=总可过滤PM-PM10。要求区间非负并保留实测粒径切割定义。不得把累计PM10或总PM加到这些互斥区间。可凝结PM使用前需单独方法及适用身份。 | `cp_emission` | 互斥真实颗粒质量 |  |
| `burden_account` | shared environmental burdens | 在独立账中保留分配负荷=直接归属负荷+有论据份额×剩余共同负荷。除以同一验收梁净kg，保留原负荷/记录链接。分配份额仅作用于环境账；全部实物残余物输出及内部转移总量保持原量。 | `cp_allocation`; `cp_reference` | 与实物图分开的可追溯已分配LCI |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_structure` | lamellas joints and accepted product | 保留真实树种及等级组合、层板位置、受拉/受压朝向、尺寸、接头几何、胶适用证明及批号、阶段设置、接头检测和面胶合剪切/剥离结果，并与真实适用规范核对。记录不合格批次及返工。手册描述或数据库名称不是强度或认证证据。 | `usda-wood-handbook-2021`; `apa-a190-overview`; actual qualification records |
| `quality_identity` | every applicable exchange | 核对实物产品/废物/物种、配方/状态/路线、参考属性/单位及真实接收介质。实物身份与供应数据及数量兼容性分开核实；适用UUID/背景未决阻止完整已链接数据包，但不阻止保留具体名称的流卡。 | 直读记录、生产者和供应方证据 |
| `quality_coverage` | whole production cohort | 覆盖等级/树种组合、环境固化季节、启动/待机/返工、含除尘和检测设备的全部能源、清洗及维护。筛查此处卡片未含的真实材料/废物/物种，发布数据集前补为独立原子行。评估平衡残差及不确定性；不提供通用收率、密度、胶含量、排放因子、强度或数量范围。 | 原始记录、工艺图、当前TDS/SDS、测量及残差评估 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | applicability | 拒绝用于CLT、LVL、其他排除产品/路线或无适用依据的树种/胶组合。恰有一个产品输出为所选参考finished，具有1千克净验收质量及完整限定信息。 |  |
| `validate_measurement` | all inventory rows | 中英文参考、每kg清单基准、协议聚合及归一化须一致。验收批组质量必须为正；报废梁和包装不得进入分母。内部实物转移两端相等；已分配负荷不得覆盖质量/水/碳总量。 |  |
| `validate_quality` | structural and bond claims | 声明须有真实当前规范、适用证明及批号关联检测，包括层板等级/位置和接头/界面。缺失证据保持明确；不生成默认结构强度或认证。 | `usda-wood-handbook-2021`; `apa-a190-overview` |
| `validate_emissions` | elementary flows and waste | 核实精确化学物种、室外空气介质、物种质量及互斥PM区间。控制后数量与捕集废物分开追踪；不得重复合计累计颗粒或把废水直接替代为基本流。条件适用而未测的排放不得填零。新增生物/化石排放须有分别准确的身份。 |  |
| `validate_completeness` | dataset delivery | 适用交换/供应数据、配方、数量、处理、适用证明和平衡核实前，不宣称完整已链接清单。报告已实施检测、未检查范围、缺口及不确定性；不得从投影或计量检查推定科学批准。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 适用于明确限定梁路线的前景制造数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 用于具有匹配净质量及上游边界的建筑LCA制造投入，须核实适用性 |
| excluded_use | 通用工程木选择器；认证强度/设计服务；CLT/LVL；完整建筑生命周期或替代信用 |
| required_metadata | 范围及全部必需限定信息；场址/年份/技术；功能分母；阶段图；供应方基准；控制；废物接收方；质量保证及分配方法；运输及上游边界 |
| required_quality_disclosure | UUID/供应数据/配方缺口；适用证明及真实检测覆盖；测量代表性；平衡、不确定性、分配敏感性及排除项 |
| update_trigger | 树种/等级/铺层、胶/硬化剂、接头/压合/固化路线、处理/涂饰、电力边界、接收方或测量证据变更 |

## 11. 数据源

| 来源编号 | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| `usda-wood-handbook-2021` | handbook | 美国农业部林产品实验室，Wood handbook—wood as an engineering material，FPL-GTR-282（2021），第11章11-18–11-21页（PDF294–297），第4章4-1页式4-1/4-2（PDF95）。 [GovInfo](https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf) | 层板分等/位置、指接及面胶合控制、夹紧、修整/试件和木材含水定义。仅采用定性方法；不移植数值强度、固化时长或通用清单因子。 |
| `dynea-prf-tds-2014` | extension_guidance | Dynea Aerodux185技术数据表，05.2014，分销商镜像上的七页制造商原件；第1–3、5–7页。 [TDS](https://www.redwood-uk.com/wp-content/uploads/2025/02/RI130225001-Aerodux-185-TDS.pdf) | 历史双组分PRF制造商实例：液体树脂/粉料分列、表面准备、组装/压力/固化监测及污染清洗废水。须有当前配方特定TDS/SDS和适用证明；历史配方、含水/压力/时间值及批准不是默认值。 |
| `apa-a190-overview` | official_guidance | APA对ANSI A190.1-2022的发布者概览；Scope and Key Requirements及锯材/胶、接头和质量控制段落。不将此概览视为标准全文。 [APA](https://www.apawood.org/what-we-do/standards-development/ansi-a1901-standard-for-structural-glued-laminated-timber/) | 仅支持平行层板胶合木身份和适用证明/质量保证证据类别；不声称认证或数值规范。 |
