---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.wood-sawn-or-chipped-lengthwise-sliced-or-peeled-of-a-thickness-exceeding-6-mm-of-non-c-2b701f10
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 厚度大于6毫米的间接蒸汽窑干刨光温带非针叶锯材

## 1. 范围与适用性

本PCR直接支持未处理温带非针叶实木：原木纵向锯切或接收粗锯生材，经间接蒸汽加热窑干、平面刨削，以实际成品厚度大于6毫米发运。唯一终端状态是窑干且刨光。质量声明单位用于制造核算，不确立结构或终端功能等效性，也不赋予使用寿命。

排除热带树种、针叶木、生材或气干终端产品、未刨光粗锯终端产品、切片/旋切材、厚度不超过6毫米的单板、轨枕、连续型材、浸渍/涂层/胶合/层压材或工程木。气干预干、直燃、除湿、真空和太阳能窑须单独审核适配，本清单不表示这些路线。温带/热带属性依据植物学身份及原产生长地区/生态区声明，不能从“硬木”贸易名称推断；产地不明须审核，两组不得混合平均。

生材表示新鲜/未干燥木材，须测初始含水率。气干表示环境空气降低水分，受气候、季节、储存和树种影响，不是固定含水率目标。窑干表示有记录的受控干燥操作，不意味着通用终含水率。本版仅最后一种状态具有终端参考对象。生材中间UUID不是生材终端数据集定义；尚未建立气干身份/参考对象，不得把本窑干UUID用于这两种状态。[usda-wood-handbook-2021第4/13章；corrim-hardwood-2020 §3.3–4.4。]

2020年CORRIM报告描述美国NE/NC工厂2017生产年，支持过程拆分及地区质量分配案例，不提供热带数据或通用树种密度、含水率、收率、窑干能耗和排放系数。不能将针叶树脂/萜烯调查改名为阔叶材实测。

## 2. 产品类别身份

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.wood-sawn-or-chipped-lengthwise-sliced-or-peeled-of-a-thickness-exceeding-6-mm-of-non-c-2b701f10 |
| classification_refs | CPC 3.0 31102; narrower; 范围及已接受决定见 `classifications/mappings/cpc-3.0-to-pcr.yaml` 和其引用的 ADR |
| covered_products | 未处理、窑干且平面刨削的温带非针叶纵向锯切实木；实际厚度大于6毫米 |
| excluded_products | 热带或针叶木；生材/气干或未刨光成品；切片/旋切材；厚度不超过6毫米单板；轨枕；型材；处理/胶合/工程木；其他干燥路线 |
| representative_product | 声明发运含水率下出厂验收合格的窑干刨光温带硬木 |
| production_route | 原木接收/剥皮/锯切→粗锯生材交接→间接蒸汽窑→粗锯窑干材交接→平面刨削/分等/包装；锅炉按条件纳入 |
| market_state | 窑干、平面刨削、未处理；声明实际产品含水率与等级 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应厚度大于6毫米、窑干刨光温带非针叶锯材供后续制造 |
| How much | 验收发运净质量1千克，不含包装 |
| How well | 声明植物学树种、产地、等级、实测几何与发运含水率；窑干且刨光 |
| How long or cycle | 一个有记录的生产核算期；不声明终端寿命 |
| reference_flow_link | `finished_kiln_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 硬木锯材 `e58cb409-74f7-4f0b-bfc0-9261c27c14be` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 植物学树种及组成；温带生长地区/生态区与林业产地；实际厚度大于6毫米、宽度、长度、等级和废品；无浸渍/胶合状态；间接蒸汽窑程；刨光状态；发运干基含水率及抽样方法；校准湿态净质量且不含包装；换算时状态匹配的实材体积/密度；场址、时期、供应商厂门和分配 |

每个具体数据集须声明全部必需限定信息。通用硬木身份不提供树种实测数据或含水率数值。本唯一对象及关联输出不覆盖生材/气干发运。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用cp_reference校准验收发运湿态净质量，不含包装。各数据集固定一个树种/等级/含水率/几何范围。 |
| `moisture_basis` | 木材与木材残余物 | 明确干基或湿基水分比例 | 无量纲小数比例 | u=(m_wet-m_od)/m_od；w=(m_wet-m_od)/m_wet；w=u/(1+u)；u=w/(1-w)；m_od=m_wet/(1+u)=m_wet×(1-w)。百分数先除以100；m_od>0、u≥0、0≤w<1。各树种/状态单独测量，包括树皮与燃料。[usda-wood-handbook-2021第4章式4-1/4-2；corrim-hardwood-2020 §3.3；代数换算。] |
| `solid_volume` | 按体积报告的木材 | 匹配质量与实材体积 | kg; m3 | m_wet=rho_u×V_u，树种、含水率和几何须匹配。基本密度为绝干质量/生材实材体积，与绝干密度或发运湿态密度不同。实测尺寸与密度；干燥收缩和刨削损失分开。名义板英尺/原木检尺及堆积/松散体积无实测换算不能替代实材体积，不提供通用硬木密度。[usda-wood-handbook-2021第4章表4-5；corrim-hardwood-2020表2–4。] |
| `carrier_units` | 电力、蒸汽热与燃料 | 核实的参考属性 | MJ; kg; m3 | 保留各核实参考属性/单位。电量kWh乘3.6得MJ。蒸汽热须满足下述独立记录的热量边界与凝结水约定：同为MJ或数据库总热值标签，不能等同燃料高位热值、锅炉总产热和接收端净有用热。燃料质量/体积/热量换算须用实际成分、密度、含水率及明确基准的实测低位/高位热值。不得假设生物质热值、气体参考条件或锅炉效率。 |
| `steam_heat_basis` | drying_heat; heat_out | 有文件支持的传递热边界 | MJ | 所选蒸汽流仅确认工业蒸汽身份及总热值/MJ参考属性；原件未定义接收端净有用热或凝结水参考焓。以其UUID绑定数量/背景数据前，须取得供应方或匹配背景数据文件，定义与本行相同的交付点、所含损失、蒸汽/凝结水物流及焓基准。现场用管路/计量图、校准热量表定义，或实测质量/压力/温度/蒸汽干度及可追溯蒸汽物性计算确认；记录返回比例、凝结水温压、焓零点及排放/泄漏物流。保留边界对照及任何实测换算/损失核对。标签或同为MJ不是换算证据。兼容性未知须保持待审：保留现场记录，但不得视为UUID—数量/背景绑定已确立，或声明数据集完整。 |
| `gas_volume_basis` | heat_gas | 有文件支持的气体状态体积 | m3 | 按核实的Volume/m3参考记录管输气态天然气，使用每1千克终端参考流的立方米量，不强制换成kg。供应方/气表与背景数据的参考温度、绝对压力、干湿基及成分须匹配。需要换算时，采用有文件支持的气表/供应方校正，使用实际压缩因子/成分及状态，披露输入和不确定性。原件不确立标况/标准立方米状态、纯甲烷成分、通用密度/热值，也不能把质量属性meanValue为1.0视为密度。具体数据集体积/背景兼容性未知时保留未决。 |
| nox_quantity_basis | yard_nox; heat_nox | 质量；经核实数量约定 | kg | 计算前记录实际监测或系数所得NOx的数量约定、化学/物种范围、浓度及气体状态基准，并独立核实其与所选LCI流及评价方法的关系。原生质量/kg不证明NO2当量约定。采用当量基准时保留真实NO/NO2物种量及有文件支持的换算/组分证据，不采用通用换算或假定比例。核对总量与另建NO/NO2行的重叠，N2O另立记录，同一释放不得重复计量。约定、物种组成或LCI/评价相容关系缺失时，原始结果及归一化交换保持待审，不静默标为NO2当量或虚构零值。 |

## 5. 系统边界

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 运抵的温带硬木锯材原木，树皮与含水率实测；或声明供应商厂门的外购粗锯硬木生材 |
| starting_condition_role | 前景制造起始厂门；另行关联上游生产 |
| product_classification_scope | CPC 31102的较窄子集；排除热带、非窑干/气干预干与切片/旋切路线 |
| recursive_input_rule | 外购生材携带供应商生产与运输负荷；记录精确状态，在核实的供应商厂门终止本地递归。内部交接仅抵消一次，不是新增购买。 |
| upstream_dataset_requirement | 关联匹配树种/产地的森林经营、采伐、土地利用变化/碳及运抵运输，还有公用工程/燃料/材料生产。运抵原木不是零负荷；缺少上游不能声明摇篮到厂门。 |
| disclosure | 场址/时期、树种/产地、起始厂门、供应商覆盖、树皮、含水率、窑/治理/供热技术、分配账与物理账及全部排除 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_operations` | 工厂制造 | 纳入接收、剥皮、锯切、内部交接、窑风机/控制/蒸汽、干燥废品、刨削/分等、包装、废水和实际排放。厂内锅炉按条件纳入；外购热须上游覆盖且不重复算厂内排放。排除使用/寿命末端及员工通勤；披露资本设施范围。危险流不能按小质量自动截断。 | corrim-hardwood-2020 |
| `boundary_screening` | 实际场址 | 筛查实际工艺图、供应商SDS、许可/烟道物种分析及废水去向。声明完整现场数据集前，逐个补充实际缺少的化学品、废物或基本流原子交换。不能强令所有条件示例污染物发生，也不能把缺数当零。 | corrim-hardwood-2020; epa-wood-boiler-2022 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| sawing | 接收、剥皮与锯切 | conditional | 转换运抵原木时；外购生材供应商边界须保留 | 粗锯生材中间品及物理共产品 | 每 1 kg 参考流 |
| processing | 窑干、平面刨削、分等与包装 | required | 生材投入；不表示气干预干；各阶段分表计量 | 聚合终端单元；唯一成品输出 | 每 1 kg 参考流 |
| heat | 厂内间接蒸汽供热 | conditional | 厂内锅炉；外购热且上游边界核实时省略 | 有效蒸汽热、燃料和排放 | 每 1 kg 参考流 |

物理图：sawing的rough_green_out→processing的drying_green_in；purchased_green_in另外进入；heat_out→processing的drying_heat。聚合processing单元内的粗窑干交接保留在cp_material阶段记录中，不是单独外送交换。窑干与刨削分别保留仪表、损失及分配账。内部交接两端记录完全相等的数量与状态。finished_kiln_product为唯一参考输出。明确分支销售与内部燃烧残余物；包装排除于木材净质量。干燥不产生干木质量，水分损失与收缩不同。

所有卡片均使用同一终端1千克分母。物理交换总量与负荷分配是分开的账；卡片表示物理交换。各空气卡片是按条件筛查的对象，不是阔叶材排放实测系数。只有无法建立更具体区间时报告室外空气未指定子介质；不能静默重映射已测高烟囱/城市/室内释放。

### 过程：接收与锯切 (`sawing`)

#### 输入

##### 产品流

###### 运抵工厂的带皮非针叶锯材原木 (`sawlogs_in`)

必须记录运抵锯材原木，注明树种、树皮比例、湿态净质量和含水率。

- 选定流：运抵工厂的带皮非针叶锯材原木
- 流属性/单位：质量 / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`corrim-hardwood-2020`; `usda-wood-handbook-2021`

###### 交流电 (`sawing_electricity`)

仅适用于用户侧低于1千伏的电网平均交流电；其他供电须使用独立精确身份。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：`corrim-hardwood-2020`; `usda-wood-handbook-2021`

###### 柴油 (`yard_diesel`)

仅在前景原木场设备燃用柴油时纳入；不重复计入已包含在运抵原木背景中的承运运输。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fuel`
- 来源：`corrim-hardwood-2020`; `usda-wood-handbook-2021`

###### 锯材机械用石油润滑油 (`sawing_oil`)

仅记录锯材机械实际使用的石油润滑油，计量补充量和期末存量。

- 选定流：锯材机械用石油润滑油
- 流属性/单位：质量 / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_lubricant`
- 来源：`corrim-hardwood-2020`; `usda-wood-handbook-2021`

###### 自来水 (`yard_tap_water`)

仅在原木场使用外购自来水时纳入；天然淡水取用属于单独的上游交换，不能当作自来水。

- 选定流：自来水 `c6fb2442-d527-4e3d-bf01-4c94ea2b71ec`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：`corrim-hardwood-2020`; `usda-wood-handbook-2021`

###### 汽油 (`yard_gasoline`)

声明路线实际存在时纳入；单独计量，并披露不存在或数据缺失。

- 选定流：汽油 `e6677cd5-b574-4e00-a3bd-c373ac796135`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fuel`
- 来源：`corrim-hardwood-2020`

###### 叉车丙烷燃料 (`yard_propane`)

声明路线实际存在时纳入；单独计量，并披露不存在或数据缺失。

- 选定流：叉车丙烷燃料
- 流属性/单位：质量 / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fuel`
- 来源：`corrim-hardwood-2020`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 绿色非针叶材锯材，粗锯 (`rough_green_out`)

转入调质单元的未防腐非针叶粗锯生材，厚度大于6毫米；记录未分配的物理交接量及含水状态，在同一交接点与drying_green_in完全对应。

- 选定流：绿色非针叶材锯材，粗锯 `e882cc86-ffc0-4470-8534-84fef54f20a0`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`corrim-hardwood-2020`; `usda-wood-handbook-2021`

###### 未处理非针叶木片共产品 (`chips_coproduct`)

在这一独立可回收共产品的实际退出点记录，包括销售和单独识别的内部转移；不得与废物输出重复。

- 选定流：未处理非针叶木片共产品
- 流属性/单位：质量 / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`corrim-hardwood-2020`; `usda-wood-handbook-2021`

###### 非针叶树皮共产品 (`bark_coproduct`)

在这一独立可回收共产品的实际退出点记录，包括销售和单独识别的内部转移；不得与废物输出重复。

- 选定流：非针叶树皮共产品
- 流属性/单位：质量 / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`corrim-hardwood-2020`; `usda-wood-handbook-2021`

###### 未处理非针叶锯屑共产品 (`sawdust_coproduct`)

在这一独立可回收共产品的实际退出点记录，包括销售和单独识别的内部转移；不得与废物输出重复。

- 选定流：未处理非针叶锯屑共产品
- 流属性/单位：质量 / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`corrim-hardwood-2020`; `usda-wood-handbook-2021`

##### 废物流

###### 树皮 (`bark_discard`)

仅记录作为废物弃置的树皮；排除销售树皮和单独记录的锅炉燃料。

- 选定流：树皮 `a2536c07-fbe1-4a12-90fb-21bd2e99b74e`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`corrim-hardwood-2020`; `usda-wood-handbook-2021`

###### 木屑废物 (`sawdust_discard`)

仅记录作为废物弃置的未处理锯屑；排除销售或厂内燃烧锯屑。

所选未处理木屑废物身份仅限有文件支持的相容外部焚烧或物料回收接收方及匹配未处理废物状态。保留整项实测废物质量、水分/组成、实际接收方及处理/供方边界。其他或未核实路线、处理过或受污染物料须有另经核实的相容身份或具体UUID缺口；全部真实实物废物交换仍须保留，不假定处理、不替换为内部燃料或推定回收信用。

- 选定流：木屑废物 `e1a44d20-d968-4d64-bd7c-253a1441ab35`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`corrim-hardwood-2020`; `usda-wood-handbook-2021`

###### 送废水处理的锯材厂原木场径流水 (`yard_runoff`)

仅记录转入处理的已收集原木场径流水；不得与窑干冷凝水合并。

- 选定流：送废水处理的锯材厂原木场径流水
- 流属性/单位：质量 / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`corrim-hardwood-2020`; `usda-wood-handbook-2021`

##### 基本流

###### 颗粒物 (PM2.5) (`sawing_pm25`)

现场测量或适用的树种、来源、燃料和控制技术特定模型证实该室外空气排放时纳入；未报告值表示未知，不代表零。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission`
- 来源：`corrim-hardwood-2020`

###### 颗粒物 (PM2.5 - PM10) (`sawing_pm25_10`)

现场测量或适用的树种、来源、燃料和控制技术特定模型证实该室外空气排放时纳入；未报告值表示未知，不代表零。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission`
- 来源：`corrim-hardwood-2020`

###### 颗粒物（> PM10） (`sawing_pm_gt10`)

现场测量或适用的树种、来源、燃料和控制技术特定模型证实该室外空气排放时纳入；未报告值表示未知，不代表零。

- 选定流：颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission`
- 来源：`corrim-hardwood-2020`

###### 二氧化碳（化石源） (`yard_co2_fossil`)

现场测量或适用的树种、来源、燃料和控制技术特定模型证实该室外空气排放时纳入；未报告值表示未知，不代表零。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission`
- 来源：`corrim-hardwood-2020`

###### 一氧化碳（化石源） (`yard_co_fossil`)

现场测量或适用的树种、来源、燃料和控制技术特定模型证实该室外空气排放时纳入；未报告值表示未知，不代表零。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission`
- 来源：`corrim-hardwood-2020`

###### 甲烷 (化石源) (`yard_ch4_fossil`)

现场测量或适用的树种、来源、燃料和控制技术特定模型证实该室外空气排放时纳入；未报告值表示未知，不代表零。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission`
- 来源：`corrim-hardwood-2020`

###### 一氧化二氮 (`yard_n2o`)

现场测量或适用的树种、来源、燃料和控制技术特定模型证实该室外空气排放时纳入；未报告值表示未知，不代表零。

- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission`
- 来源：`corrim-hardwood-2020`

###### 氮氧化物 (`yard_nox`)

现场测量或适用的树种、来源、燃料和控制技术特定模型证实该室外空气排放时纳入；未报告值表示未知，不代表零。

- 选定流：氮氧化物 `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission`
- 来源：`corrim-hardwood-2020`

###### 二氧化硫 (`yard_so2`)

现场测量或适用的树种、来源、燃料和控制技术特定模型证实该室外空气排放时纳入；未报告值表示未知，不代表零。

- 选定流：二氧化硫 `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission`
- 来源：`corrim-hardwood-2020`

### 过程：窑干、刨削与发运 (`processing`)

#### 输入

##### 产品流

###### 绿色非针叶材锯材，粗锯 (`drying_green_in`)

来自rough_green_out的同批非针叶粗锯生材：两端未分配物理量在同一交接点及含水基准下相等。后续干燥变化属于调质单元内部；分配份额不得改变该转移量。

- 选定流：绿色非针叶材锯材，粗锯 `e882cc86-ffc0-4470-8534-84fef54f20a0`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material_processing`
- 来源：`corrim-hardwood-2020`; `usda-wood-handbook-2021`

###### 交流电 (`drying_electricity`)

仅为风机及间接蒸汽窑控制计量用户侧低于1千伏的电网电力；该阶段与刨削/包装分表计量。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy_processing`
- 来源：`corrim-hardwood-2020`; `usda-wood-handbook-2021`

###### 蒸汽工艺热 (`drying_heat`)

仅为间接窑加热的蒸汽工艺热，须证明供应方/匹配背景的热量边界及凝结水约定与本行数量一致。UUID原件未确认净有用交付热。现场采集并对照蒸汽输入、凝结水返回及其他排放/管线损失边界；外购与内部发生热量分别追溯。内部交接时heat_out与drying_heat仅在相同、已核实边界和约定下同量。兼容性未知是待审计量/背景缺口；不能等同燃料高位热值、锅炉总输出和接收端净有用热。

- 选定流：蒸汽工艺热 `fcf9e128-688f-42f0-9dca-85d2319cfac5`
- 流属性/单位：总热值, 高位热值 `93a60a56-a3c8-14da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：供应方/背景热量基准兼容性取得文件确认后，以共同交付边界实测未分配热量总量除以验收终端湿态净千克，仅归一化一次。heat_out和drying_heat在该边界同量；未知兼容性是待审事项，不是已确认UUID—数量绑定。原始数量和损失另行保留，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy_processing`
- 来源：`corrim-hardwood-2020`; `usda-wood-handbook-2021`

###### 交流电 (`finishing_electricity`)

仅记录修边、分等、平面刨削和包装使用的低于1千伏电网电力。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy_processing`
- 来源：`corrim-hardwood-2020`; `usda-wood-handbook-2021`

###### 聚乙烯薄膜 (`film_in`)

仅记录实际发运包装中的聚乙烯薄膜；不包含在参考产品净质量中。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`corrim-hardwood-2020`; `usda-wood-handbook-2021`

###### 聚丙烯包装捆扎带 (`strap_in`)

仅记录实际发运包装中的聚丙烯捆扎带；不能替换为聚丙烯树脂。

- 选定流：聚丙烯包装捆扎带
- 流属性/单位：质量 / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`corrim-hardwood-2020`; `usda-wood-handbook-2021`

###### 绿色非针叶材锯材，粗锯 (`purchased_green_in`)

声明路线实际存在时纳入；单独计量，并披露不存在或数据缺失。

- 选定流：绿色非针叶材锯材，粗锯 `e882cc86-ffc0-4470-8534-84fef54f20a0`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material_processing`
- 来源：`corrim-hardwood-2020`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 硬木锯材 (`finished_kiln_product`)

出厂验收合格、未处理、窑干平面刨削温带非针叶锯材，实际成品厚度大于6毫米。此为唯一终端产品，不得以热带、生材或气干材替代。

- 选定流：硬木锯材 `e58cb409-74f7-4f0b-bfc0-9261c27c14be`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_reference`
- 来源：`corrim-hardwood-2020`; `usda-wood-handbook-2021`

###### 未处理非针叶刨花共产品 (`shavings_coproduct`)

仅记录该整理步骤的可回收未处理刨花；上游已退出的树皮与木片不承担整理负荷。

- 选定流：未处理非针叶刨花共产品
- 流属性/单位：质量 / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material_processing`
- 来源：`corrim-hardwood-2020`; `usda-wood-handbook-2021`

###### 未处理非针叶锯屑共产品 (`finishing_sawdust`)

声明路线实际存在时纳入；单独计量，并披露不存在或数据缺失。

- 选定流：未处理非针叶锯屑共产品
- 流属性/单位：质量 / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material_processing`
- 来源：`corrim-hardwood-2020`

##### 废物流

###### 木材边角料 (`offcut_discard`)

仅记录作为废物弃置的未处理木材边角料；销售和厂内燃料须分开转移。

本行仅计真实未团聚、未处理且未胶合的粗木料边角料；保留含水率与接收方记录，在链接处理数据前核实实物状态和接收方/供应数据兼容性。不得替代为团聚燃料或捕集粉尘。

- 选定流：木材边角料 `acc22294-8e77-4784-988f-2499be3c60eb`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste_processing`
- 来源：`corrim-hardwood-2020`; `usda-wood-handbook-2021`

##### 基本流

###### 水蒸气 (`drying_water_vapour`)

现场测量或适用的树种、来源、燃料和控制技术特定模型证实该室外空气排放时纳入；未报告值表示未知，不代表零。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission_processing`
- 来源：`corrim-hardwood-2020`

###### 甲醇 (`drying_methanol`)

现场测量或适用的树种、来源、燃料和控制技术特定模型证实该室外空气排放时纳入；未报告值表示未知，不代表零。

- 选定流：甲醇 `fe0acd60-3ddc-11dd-a935-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission_processing`
- 来源：`corrim-hardwood-2020`

###### 甲醛 (`drying_formaldehyde`)

现场测量或适用的树种、来源、燃料和控制技术特定模型证实该室外空气排放时纳入；未报告值表示未知，不代表零。

- 选定流：甲醛 `08a91e70-3ddc-11dd-941b-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission_processing`
- 来源：`corrim-hardwood-2020`

###### 苯酚 (`drying_phenol`)

现场测量或适用的树种、来源、燃料和控制技术特定模型证实该室外空气排放时纳入；未报告值表示未知，不代表零。

- 选定流：苯酚 `fe0acd60-3ddc-11dd-aa41-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission_processing`
- 来源：`corrim-hardwood-2020`

###### 乙醛 (`drying_acetaldehyde`)

现场测量或适用的树种、来源、燃料和控制技术特定模型证实该室外空气排放时纳入；未报告值表示未知，不代表零。

- 选定流：乙醛 `fe0acd60-3ddc-11dd-a7a5-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission_processing`
- 来源：`corrim-hardwood-2020`

###### 丙醛 (`drying_propanal`)

现场测量或适用的树种、来源、燃料和控制技术特定模型证实该室外空气排放时纳入；未报告值表示未知，不代表零。

- 选定流：丙醛 `fe0acd60-3ddc-11dd-9f05-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission_processing`
- 来源：`corrim-hardwood-2020`

###### 丙烯醛 (`drying_acrolein`)

现场测量或适用的树种、来源、燃料和控制技术特定模型证实该室外空气排放时纳入；未报告值表示未知，不代表零。

- 选定流：丙烯醛 `08a91e70-3ddc-11dd-91a4-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission_processing`
- 来源：`corrim-hardwood-2020`

###### 颗粒物 (PM2.5) (`drying_pm25`)

现场测量或适用的树种、来源、燃料和控制技术特定模型证实该室外空气排放时纳入；未报告值表示未知，不代表零。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission_processing`
- 来源：`corrim-hardwood-2020`

###### 颗粒物 (PM2.5 - PM10) (`drying_pm25_10`)

现场测量或适用的树种、来源、燃料和控制技术特定模型证实该室外空气排放时纳入；未报告值表示未知，不代表零。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission_processing`
- 来源：`corrim-hardwood-2020`

###### 颗粒物（> PM10） (`drying_pm_gt10`)

现场测量或适用的树种、来源、燃料和控制技术特定模型证实该室外空气排放时纳入；未报告值表示未知，不代表零。

- 选定流：颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission_processing`
- 来源：`corrim-hardwood-2020`

###### 颗粒物 (PM2.5) (`finishing_pm25`)

现场测量或适用的树种、来源、燃料和控制技术特定模型证实该室外空气排放时纳入；未报告值表示未知，不代表零。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission_processing`
- 来源：`corrim-hardwood-2020`

###### 颗粒物 (PM2.5 - PM10) (`finishing_pm25_10`)

现场测量或适用的树种、来源、燃料和控制技术特定模型证实该室外空气排放时纳入；未报告值表示未知，不代表零。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission_processing`
- 来源：`corrim-hardwood-2020`

###### 颗粒物（> PM10） (`finishing_pm_gt10`)

现场测量或适用的树种、来源、燃料和控制技术特定模型证实该室外空气排放时纳入；未报告值表示未知，不代表零。

- 选定流：颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission_processing`
- 来源：`corrim-hardwood-2020`

### 过程：蒸汽发生 (`heat`)

#### 输入

##### 产品流

###### 未处理非针叶树皮燃料 (`heat_bark_fuel`)

仅在实际燃烧该单独称量的未处理非针叶残余物时记录；注明内部来源或外部供应商、含水率与热值基准。

- 选定流：未处理非针叶树皮燃料
- 流属性/单位：质量 / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fuel_heat`
- 来源：`corrim-hardwood-2020`; `usda-wood-handbook-2021`

###### 未处理非针叶锯屑燃料 (`heat_sawdust_fuel`)

仅在实际燃烧该单独称量的未处理非针叶残余物时记录；注明内部来源或外部供应商、含水率与热值基准。

- 选定流：未处理非针叶锯屑燃料
- 流属性/单位：质量 / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fuel_heat`
- 来源：`corrim-hardwood-2020`; `usda-wood-handbook-2021`

###### 未处理非针叶木片燃料 (`heat_chips_fuel`)

仅在实际燃烧该单独称量的未处理非针叶残余物时记录；注明内部来源或外部供应商、含水率与热值基准。

- 选定流：未处理非针叶木片燃料
- 流属性/单位：质量 / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fuel_heat`
- 来源：`corrim-hardwood-2020`; `usda-wood-handbook-2021`

###### 气态天然气 (`heat_gas`)

仅记录经管道运抵窑干锅炉的实际气态天然气，须匹配直读的消费端气体身份。核实供应方成分与交付状态；计量体积注明参考温度、绝对压力和干湿基，并匹配关联背景数据。原件未规定这些气体状态数值或可用密度；声明完整数据集前须披露参考状态兼容性未决。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- 数量规则：实际计量气体体积按有文件支持且与供应方/背景匹配的状态，除以验收终端湿态净千克，仅归一化一次；分子保留m3。任何温压/干湿基校正须记录供应方/气表方法及实际输入。体积/背景兼容性未知须待审；不自动换为kg或燃料能量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fuel_heat`
- 来源：`corrim-hardwood-2020`; `usda-wood-handbook-2021`

###### 柴油 (`heat_diesel`)

仅记录锅炉实际使用的辅助柴油；排除原木场柴油与已包含在上游外购热中的燃料。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fuel_heat`
- 来源：`corrim-hardwood-2020`; `usda-wood-handbook-2021`

###### 交流电 (`heat_electricity`)

仅记录锅炉辅机和实际污染治理使用的低于1千伏电网电力。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy_heat`
- 来源：`corrim-hardwood-2020`; `usda-wood-handbook-2021`

###### 自来水 (`heat_water`)

声明路线实际存在时纳入；单独计量，并披露不存在或数据缺失。

- 选定流：自来水 `c6fb2442-d527-4e3d-bf01-4c94ea2b71ec`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water_heat`
- 来源：`corrim-hardwood-2020`

###### 未处理非针叶刨花燃料 (`heat_shavings_fuel`)

声明路线实际存在时纳入；单独计量，并披露不存在或数据缺失。

- 选定流：未处理非针叶刨花燃料
- 流属性/单位：质量 / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fuel_heat`
- 来源：`corrim-hardwood-2020`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 蒸汽工艺热 (`heat_out`)

仅为间接窑加热的蒸汽工艺热，须证明供应方/匹配背景的热量边界及凝结水约定与本行数量一致。UUID原件未确认净有用交付热。现场采集并对照蒸汽输入、凝结水返回及其他排放/管线损失边界；外购与内部发生热量分别追溯。内部交接时heat_out与drying_heat仅在相同、已核实边界和约定下同量。兼容性未知是待审计量/背景缺口；不能等同燃料高位热值、锅炉总输出和接收端净有用热。

- 选定流：蒸汽工艺热 `fcf9e128-688f-42f0-9dca-85d2319cfac5`
- 流属性/单位：总热值, 高位热值 `93a60a56-a3c8-14da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：供应方/背景热量基准兼容性取得文件确认后，以共同交付边界实测未分配热量总量除以验收终端湿态净千克，仅归一化一次。heat_out和drying_heat在该边界同量；未知兼容性是待审事项，不是已确认UUID—数量绑定。原始数量和损失另行保留，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy_heat`
- 来源：`corrim-hardwood-2020`; `usda-wood-handbook-2021`

##### 废物流

###### 未处理木材燃烧底灰 (`heat_bottom_ash`)

仅记录这一独立收集的木材燃烧灰流；测量其质量、未燃碳与处理去向。

- 选定流：未处理木材燃烧底灰
- 流属性/单位：质量 / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste_heat`
- 来源：`corrim-hardwood-2020`; `usda-wood-handbook-2021`

###### 未处理木材燃烧飞灰 (`heat_fly_ash`)

仅记录这一独立收集的木材燃烧灰流；测量其质量、未燃碳与处理去向。

- 选定流：未处理木材燃烧飞灰
- 流属性/单位：质量 / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste_heat`
- 来源：`corrim-hardwood-2020`; `usda-wood-handbook-2021`

###### 送废水处理的锅炉排污水 (`heat_blowdown`)

声明路线实际存在时纳入；单独计量，并披露不存在或数据缺失。

- 选定流：送废水处理的锅炉排污水
- 流属性/单位：质量 / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water_heat`
- 来源：`corrim-hardwood-2020`

##### 基本流

###### 二氧化碳（生物源） (`heat_co2_bio`)

现场测量或适用的树种、来源、燃料和控制技术特定模型证实该室外空气排放时纳入；未报告值表示未知，不代表零。

- 选定流：二氧化碳（生物源） `08a91e70-3ddc-11dd-9c15-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission_heat`
- 来源：`epa-wood-boiler-2022`

###### 一氧化碳（生物源） (`heat_co_bio`)

现场测量或适用的树种、来源、燃料和控制技术特定模型证实该室外空气排放时纳入；未报告值表示未知，不代表零。

- 选定流：一氧化碳（生物源） `8a313a02-e251-11e6-bf01-fe55135034f3`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission_heat`
- 来源：`epa-wood-boiler-2022`

###### 甲烷 (生物源) (`heat_ch4_bio`)

现场测量或适用的树种、来源、燃料和控制技术特定模型证实该室外空气排放时纳入；未报告值表示未知，不代表零。

- 选定流：甲烷 (生物源) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission_heat`
- 来源：`epa-wood-boiler-2022`

###### 二氧化碳（化石源） (`heat_co2_fossil`)

现场测量或适用的树种、来源、燃料和控制技术特定模型证实该室外空气排放时纳入；未报告值表示未知，不代表零。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission_heat`
- 来源：`epa-wood-boiler-2022`

###### 一氧化碳（化石源） (`heat_co_fossil`)

现场测量或适用的树种、来源、燃料和控制技术特定模型证实该室外空气排放时纳入；未报告值表示未知，不代表零。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission_heat`
- 来源：`epa-wood-boiler-2022`

###### 甲烷 (化石源) (`heat_ch4_fossil`)

现场测量或适用的树种、来源、燃料和控制技术特定模型证实该室外空气排放时纳入；未报告值表示未知，不代表零。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission_heat`
- 来源：`epa-wood-boiler-2022`

###### 一氧化二氮 (`heat_n2o`)

现场测量或适用的树种、来源、燃料和控制技术特定模型证实该室外空气排放时纳入；未报告值表示未知，不代表零。

- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission_heat`
- 来源：`epa-wood-boiler-2022`

###### 氮氧化物 (`heat_nox`)

现场测量或适用的树种、来源、燃料和控制技术特定模型证实该室外空气排放时纳入；未报告值表示未知，不代表零。

- 选定流：氮氧化物 `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission_heat`
- 来源：`epa-wood-boiler-2022`

###### 二氧化硫 (`heat_so2`)

现场测量或适用的树种、来源、燃料和控制技术特定模型证实该室外空气排放时纳入；未报告值表示未知，不代表零。

- 选定流：二氧化硫 `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission_heat`
- 来源：`epa-wood-boiler-2022`

###### 颗粒物 (PM2.5) (`heat_pm25`)

现场测量或适用的树种、来源、燃料和控制技术特定模型证实该室外空气排放时纳入；未报告值表示未知，不代表零。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission_heat`
- 来源：`epa-wood-boiler-2022`

###### 颗粒物 (PM2.5 - PM10) (`heat_pm25_10`)

现场测量或适用的树种、来源、燃料和控制技术特定模型证实该室外空气排放时纳入；未报告值表示未知，不代表零。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission_heat`
- 来源：`epa-wood-boiler-2022`

###### 颗粒物（> PM10） (`heat_pm_gt10`)

现场测量或适用的树种、来源、燃料和控制技术特定模型证实该室外空气排放时纳入；未报告值表示未知，不代表零。

- 选定流：颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission_heat`
- 来源：`epa-wood-boiler-2022`

###### 甲醛 (`heat_formaldehyde`)

声明路线实际存在时纳入；单独计量，并披露不存在或数据缺失。

- 选定流：甲醛 `08a91e70-3ddc-11dd-941b-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`epa-wood-boiler-2022`; `corrim-hardwood-2020`

###### 甲醇 (`heat_methanol`)

声明路线实际存在时纳入；单独计量，并披露不存在或数据缺失。

- 选定流：甲醇 `fe0acd60-3ddc-11dd-a935-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`epa-wood-boiler-2022`; `corrim-hardwood-2020`

###### 苯酚 (`heat_phenol`)

声明路线实际存在时纳入；单独计量，并披露不存在或数据缺失。

- 选定流：苯酚 `fe0acd60-3ddc-11dd-aa41-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`epa-wood-boiler-2022`; `corrim-hardwood-2020`

###### 乙醛 (`heat_acetaldehyde`)

声明路线实际存在时纳入；单独计量，并披露不存在或数据缺失。

- 选定流：乙醛 `fe0acd60-3ddc-11dd-a7a5-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`epa-wood-boiler-2022`; `corrim-hardwood-2020`

###### 丙醛 (`heat_propanal`)

声明路线实际存在时纳入；单独计量，并披露不存在或数据缺失。

- 选定流：丙醛 `fe0acd60-3ddc-11dd-9f05-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`epa-wood-boiler-2022`; `corrim-hardwood-2020`

###### 丙烯醛 (`heat_acrolein`)

声明路线实际存在时纳入；单独计量，并披露不存在或数据缺失。

- 选定流：丙烯醛 `08a91e70-3ddc-11dd-91a4-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`epa-wood-boiler-2022`; `corrim-hardwood-2020`

###### 氯化氢 (`heat_hcl`)

声明路线实际存在时纳入；单独计量，并披露不存在或数据缺失。

- 选定流：氯化氢 `fe0acd60-3ddc-11dd-aab0-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`epa-wood-boiler-2022`; `corrim-hardwood-2020`

###### 铅 (`heat_lead`)

声明路线实际存在时纳入；单独计量，并披露不存在或数据缺失。

- 选定流：铅 `4d9a8790-3ddd-11dd-91dc-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`epa-wood-boiler-2022`; `corrim-hardwood-2020`

###### 汞 (`heat_mercury`)

声明路线实际存在时纳入；单独计量，并披露不存在或数据缺失。

- 选定流：汞 `fe0acd60-3ddc-11dd-a8c4-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`epa-wood-boiler-2022`; `corrim-hardwood-2020`

###### 萘 (`heat_naphthalene`)

声明路线实际存在时纳入；单独计量，并披露不存在或数据缺失。

- 选定流：萘 `fe0acd60-3ddc-11dd-a682-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`epa-wood-boiler-2022`; `corrim-hardwood-2020`

###### 水蒸气 (`heat_water_vapour`)

锅炉尾气水分中燃料水分、燃烧生成水及夹带工艺水，须与窑木材失水分开记录；核对锅炉物理水分账。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：匹配生产组的未分配物理交换总量除以验收终端湿态净千克，仅归一化一次。保留原始总量和来源/去向，不乘共产品份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water_heat`
- 来源：`epa-wood-boiler-2022`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_separate` | 物理图与负荷账 | 未分配物理过程图、干物质/水/碳平衡、相等内部链接及完整共产品质量，与环境负荷账分开。不得把物理共产品输出或内部交接量乘分配份额。核对实测物理总量后，仅分配原始共同能源/上游/排放负荷；不改变终端1千克对象。 | corrim-hardwood-2020; usda-wood-handbook-2021 |
| `allocation_steps` | 共同木产品工序 | 先拆分有分表的工序，专属操作直接归属。不可拆分同材木共产品采用共同工序输出的实测绝干质量份额a_i=m_od_i/sum(m_od_j)；这是参考报告质量分配案例形成的PCR方法选择，不是报告现场份额。内部燃料残余物纳入共同工序产品分母，生产负荷随之进入供热。干燥前离开的生树皮/木片不承担后续窑干/刨削负荷；干燥负荷附于实际干燥材，刨削份额仅在刨削工序应用。 | corrim-hardwood-2020; usda-wood-handbook-2021 |
| `allocation_destination` | 残余物与废物去向 | 用交接和销售/处理凭证区分各残余物销售、内燃和弃置部分。无产品功能废物承担处理负荷，不制造负信用。内部燃料不能同时外售或赋零继承负荷，不自动抵扣化石燃料/处置。经济分配或替代仅作另行论证的敏感性情景，附价格/时间/边界和结果，不混入基线。 | corrim-hardwood-2020 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_reference | processing | 参考净质量与状态 | 验收/发运记录 | 批次；树种；产地/生态区；等级；成品尺寸；湿态净千克；废品；含水率；包装皮重 统计期汇总组；整批失败；返工来源与最终验收ID | 校准净称重排除包装；核对验收与发运；匹配抽样水分与实际几何 完整汇总组纳入失败及返工记录；仅最终验收净产量计入分母，返工仅计一次，零产出汇总组保留未归一化状态。 | kg | 各批次及仪表/监测区间 | 完整声明生产期，覆盖季节干燥 | 仅声明工厂及匹配供应商 | 每 1 kg 参考流 | 校准、批次/库存核对、抽样及来源适用性；未知记录不入平均并披露覆盖 |
| cp_material | sawing | 木材与共产品 | 批次与交接台账 | 树种；实际实材尺寸/体积；湿态净质量；干/湿基；绝干样；树皮；去向；内部交接两端；库存变化；实际归属 sawing；原始记录ID；共享表号；外部/内部状态；匹配交接ID | 称批次和残余物；按树种/厚度/心边材分层；代表样及时密封/称量，按USDA第13章烘至恒重，评估抽提物偏差；相同含水状态配对测体积与质量。水分仪须树种/温度校准与烘干核对。 仅采集实际 sawing 阶段记录；原有字段与质量证据仅按该阶段真实适用性保留。共享总表或来源记录作为核对证据，不另增交换：以实测阶段/服务归属在各配套协议间仅计一次每个可归属外部原始记录，各份额核对至总表合计。内部发送/接收记录分别保留且状态、期间、数量相同；任一端都不新增外购或排放。全部配套协议使用同一完整验收产出统计期汇总组，保留失败/返工活动与原生单位原始量。 | kg; m3; moisture fraction | 各批次及仪表/监测区间 | 完整声明生产期，覆盖季节干燥 | 仅声明工厂及匹配供应商 | 每 1 kg 参考流 | 校准、批次/库存核对、抽样及来源适用性；未知记录不入平均并披露覆盖 |
| cp_material_processing | processing | 木材与共产品 | 批次与交接台账 | 树种；实际实材尺寸/体积；湿态净质量；干/湿基；绝干样；树皮；去向；内部交接两端；库存变化；实际归属 processing；原始记录ID；共享表号；外部/内部状态；匹配交接ID | 称批次和残余物；按树种/厚度/心边材分层；代表样及时密封/称量，按USDA第13章烘至恒重，评估抽提物偏差；相同含水状态配对测体积与质量。水分仪须树种/温度校准与烘干核对。 仅采集实际 processing 阶段记录；原有字段与质量证据仅按该阶段真实适用性保留。共享总表或来源记录作为核对证据，不另增交换：以实测阶段/服务归属在各配套协议间仅计一次每个可归属外部原始记录，各份额核对至总表合计。内部发送/接收记录分别保留且状态、期间、数量相同；任一端都不新增外购或排放。全部配套协议使用同一完整验收产出统计期汇总组，保留失败/返工活动与原生单位原始量。 | kg; m3; moisture fraction | 各批次及仪表/监测区间 | 完整声明生产期，覆盖季节干燥 | 仅声明工厂及匹配供应商 | 每 1 kg 参考流 | 校准、批次/库存核对、抽样及来源适用性；未知记录不入平均并披露覆盖 |
| cp_lubricant | sawing | 实际独立润滑油交换 | 润滑油领用及库存台账 | 牌号/SDS及化学组成；供方；原始kg；期初/期末存量；领用/退回；实际使用设备；废油去向；汇总组及失败批次ID | 称量真实独立领用、退回及存量，核对补充、实际消耗、残留及独立废油交接；保留归一化前绝对kg总量，不对润滑油套用木材树种/绝干抽样。 | kg | 各批次及仪表/监测区间 | 完整声明生产期，覆盖季节干燥 | 仅声明工厂及匹配供应商 | 每 1 kg 参考流 | 校准、批次/库存核对、抽样及来源适用性；未知记录不入平均并披露覆盖 |
| cp_energy | sawing | 电力与有效热 | 仪表与窑记录 | kWh；蒸汽热MJ及核算边界；供应方/背景热量定义凭证；管路/计量位置；蒸汽/凝结水质量、绝对压力、温度、蒸汽干度、焓及共同参考零点；凝结水返回比例/去向；排放/泄漏/管线损失；仪表定义/校准；窑批次/树种/厚度；时间/温度/湿度；锅炉/治理；共表拆分；实际归属 sawing；原始记录ID；共享表号；外部/内部状态；匹配交接ID | 读取校准阶段仪表并核查供汽/回水管路图。取得供应方说明或匹配背景的定量参考定义，对照仪表数量的边界、损失纳入范围和凝结水/焓约定。计算焓差时采用实测流体状态及有记录的物性方法，基准零点一致且覆盖相关返回/排放物流；不能无证据假设蒸汽全部返回，或把锅炉给水当接收端凝结水。不同边界须记录逐源实测核对后才能绑定热量UUID/背景。未知定义保留为兼容性待审缺口，不是已核实换算。逐批窑程、季节和废品另行记录。 仅采集实际 sawing 阶段记录；原有字段与质量证据仅按该阶段真实适用性保留。共享总表或来源记录作为核对证据，不另增交换：以实测阶段/服务归属在各配套协议间仅计一次每个可归属外部原始记录，各份额核对至总表合计。内部发送/接收记录分别保留且状态、期间、数量相同；任一端都不新增外购或排放。全部配套协议使用同一完整验收产出统计期汇总组，保留失败/返工活动与原生单位原始量。 | MJ; kWh | 各批次及仪表/监测区间 | 完整声明生产期，覆盖季节干燥 | 仅声明工厂及匹配供应商 | 每 1 kg 参考流 | 校准、供汽/回水图及供应方/背景参考定义；签认边界对照与实测核对；明确披露待定定义 |
| cp_energy_processing | processing | 电力与有效热 | 仪表与窑记录 | kWh；蒸汽热MJ及核算边界；供应方/背景热量定义凭证；管路/计量位置；蒸汽/凝结水质量、绝对压力、温度、蒸汽干度、焓及共同参考零点；凝结水返回比例/去向；排放/泄漏/管线损失；仪表定义/校准；窑批次/树种/厚度；时间/温度/湿度；锅炉/治理；共表拆分；实际归属 processing；原始记录ID；共享表号；外部/内部状态；匹配交接ID | 读取校准阶段仪表并核查供汽/回水管路图。取得供应方说明或匹配背景的定量参考定义，对照仪表数量的边界、损失纳入范围和凝结水/焓约定。计算焓差时采用实测流体状态及有记录的物性方法，基准零点一致且覆盖相关返回/排放物流；不能无证据假设蒸汽全部返回，或把锅炉给水当接收端凝结水。不同边界须记录逐源实测核对后才能绑定热量UUID/背景。未知定义保留为兼容性待审缺口，不是已核实换算。逐批窑程、季节和废品另行记录。 仅采集实际 processing 阶段记录；原有字段与质量证据仅按该阶段真实适用性保留。共享总表或来源记录作为核对证据，不另增交换：以实测阶段/服务归属在各配套协议间仅计一次每个可归属外部原始记录，各份额核对至总表合计。内部发送/接收记录分别保留且状态、期间、数量相同；任一端都不新增外购或排放。全部配套协议使用同一完整验收产出统计期汇总组，保留失败/返工活动与原生单位原始量。 | MJ; kWh | 各批次及仪表/监测区间 | 完整声明生产期，覆盖季节干燥 | 仅声明工厂及匹配供应商 | 每 1 kg 参考流 | 校准、供汽/回水图及供应方/背景参考定义；签认边界对照与实测核对；明确披露待定定义 |
| cp_energy_heat | heat | 电力与有效热 | 仪表与窑记录 | kWh；蒸汽热MJ及核算边界；供应方/背景热量定义凭证；管路/计量位置；蒸汽/凝结水质量、绝对压力、温度、蒸汽干度、焓及共同参考零点；凝结水返回比例/去向；排放/泄漏/管线损失；仪表定义/校准；窑批次/树种/厚度；时间/温度/湿度；锅炉/治理；共表拆分；实际归属 heat；原始记录ID；共享表号；外部/内部状态；匹配交接ID | 读取校准阶段仪表并核查供汽/回水管路图。取得供应方说明或匹配背景的定量参考定义，对照仪表数量的边界、损失纳入范围和凝结水/焓约定。计算焓差时采用实测流体状态及有记录的物性方法，基准零点一致且覆盖相关返回/排放物流；不能无证据假设蒸汽全部返回，或把锅炉给水当接收端凝结水。不同边界须记录逐源实测核对后才能绑定热量UUID/背景。未知定义保留为兼容性待审缺口，不是已核实换算。逐批窑程、季节和废品另行记录。 仅采集实际 heat 阶段记录；原有字段与质量证据仅按该阶段真实适用性保留。共享总表或来源记录作为核对证据，不另增交换：以实测阶段/服务归属在各配套协议间仅计一次每个可归属外部原始记录，各份额核对至总表合计。内部发送/接收记录分别保留且状态、期间、数量相同；任一端都不新增外购或排放。全部配套协议使用同一完整验收产出统计期汇总组，保留失败/返工活动与原生单位原始量。 | MJ; kWh | 各批次及仪表/监测区间 | 完整声明生产期，覆盖季节干燥 | 仅声明工厂及匹配供应商 | 每 1 kg 参考流 | 校准、供汽/回水图及供应方/背景参考定义；签认边界对照与实测核对；明确披露待定定义 |
| cp_fuel | sawing | 各燃料 | 燃料收用/检测 | 燃料身份；供应方气体成分/交付；气表原始与校正m3；参考温度/绝对压力；干湿基；校正方法/压缩因子及校准；匹配背景体积定义；树种/残余物来源；湿千克；干比例；密度；匹配基准实测低位/高位热值；期初/期末存量；内供质量；实际归属 sawing；原始记录ID；共享表号；外部/内部状态；匹配交接ID | 核对收用、库存和计量用量。天然气核查气表/校正证书及供应方账单气体状态/成分；取得关联背景的参考体积定义，对照温度、绝对压力和干湿基。保留Volume/m3；质量/能量换算须实际同状态密度/热值，不能依靠数据库meanValue或标签。缺少参考状态兼容性则待审。称内部木燃料，采集水分、碳、灰分/热值及物理平衡燃烧空气，不导入通用树种燃料属性。 仅采集实际 sawing 阶段记录；原有字段与质量证据仅按该阶段真实适用性保留。共享总表或来源记录作为核对证据，不另增交换：以实测阶段/服务归属在各配套协议间仅计一次每个可归属外部原始记录，各份额核对至总表合计。内部发送/接收记录分别保留且状态、期间、数量相同；任一端都不新增外购或排放。全部配套协议使用同一完整验收产出统计期汇总组，保留失败/返工活动与原生单位原始量。 | kg; m3; MJ | 各批次及仪表/监测区间 | 完整声明生产期，覆盖季节干燥 | 仅声明工厂及匹配供应商 | 每 1 kg 参考流 | 校准、批次/库存核对、抽样及来源适用性；未知记录不入平均并披露覆盖 |
| cp_fuel_heat | heat | 各燃料 | 燃料收用/检测 | 燃料身份；供应方气体成分/交付；气表原始与校正m3；参考温度/绝对压力；干湿基；校正方法/压缩因子及校准；匹配背景体积定义；树种/残余物来源；湿千克；干比例；密度；匹配基准实测低位/高位热值；期初/期末存量；内供质量；实际归属 heat；原始记录ID；共享表号；外部/内部状态；匹配交接ID | 核对收用、库存和计量用量。天然气核查气表/校正证书及供应方账单气体状态/成分；取得关联背景的参考体积定义，对照温度、绝对压力和干湿基。保留Volume/m3；质量/能量换算须实际同状态密度/热值，不能依靠数据库meanValue或标签。缺少参考状态兼容性则待审。称内部木燃料，采集水分、碳、灰分/热值及物理平衡燃烧空气，不导入通用树种燃料属性。 仅采集实际 heat 阶段记录；原有字段与质量证据仅按该阶段真实适用性保留。共享总表或来源记录作为核对证据，不另增交换：以实测阶段/服务归属在各配套协议间仅计一次每个可归属外部原始记录，各份额核对至总表合计。内部发送/接收记录分别保留且状态、期间、数量相同；任一端都不新增外购或排放。全部配套协议使用同一完整验收产出统计期汇总组，保留失败/返工活动与原生单位原始量。 | kg; m3; MJ | 各批次及仪表/监测区间 | 完整声明生产期，覆盖季节干燥 | 仅声明工厂及匹配供应商 | 每 1 kg 参考流 | 校准、批次/库存核对、抽样及来源适用性；未知记录不入平均并披露覆盖 |
| cp_water | sawing | 水与排水 | 水表与排水记录 | 供应千克/立方米；水源；循环；径流/排污；返回凝结水；去向；实测成分；实际归属 sawing；原始记录ID；共享表号；外部/内部状态；匹配交接ID | 计量跨边界净水量；核对循环、凝结水、蒸气、废水及产品水分变化；外送废水作废物，直接环境释放逐物种列实际介质 仅采集实际 sawing 阶段记录；原有字段与质量证据仅按该阶段真实适用性保留。共享总表或来源记录作为核对证据，不另增交换：以实测阶段/服务归属在各配套协议间仅计一次每个可归属外部原始记录，各份额核对至总表合计。内部发送/接收记录分别保留且状态、期间、数量相同；任一端都不新增外购或排放。全部配套协议使用同一完整验收产出统计期汇总组，保留失败/返工活动与原生单位原始量。 | kg; m3 | 各批次及仪表/监测区间 | 完整声明生产期，覆盖季节干燥 | 仅声明工厂及匹配供应商 | 每 1 kg 参考流 | 校准、批次/库存核对、抽样及来源适用性；未知记录不入平均并披露覆盖 |
| cp_water_heat | heat | 水与排水 | 水表与排水记录 | 供应千克/立方米；水源；循环；径流/排污；返回凝结水；去向；实测成分；实际归属 heat；原始记录ID；共享表号；外部/内部状态；匹配交接ID | 计量跨边界净水量；核对循环、凝结水、蒸气、废水及产品水分变化；外送废水作废物，直接环境释放逐物种列实际介质 仅采集实际 heat 阶段记录；原有字段与质量证据仅按该阶段真实适用性保留。共享总表或来源记录作为核对证据，不另增交换：以实测阶段/服务归属在各配套协议间仅计一次每个可归属外部原始记录，各份额核对至总表合计。内部发送/接收记录分别保留且状态、期间、数量相同；任一端都不新增外购或排放。全部配套协议使用同一完整验收产出统计期汇总组，保留失败/返工活动与原生单位原始量。 | kg; m3 | 各批次及仪表/监测区间 | 完整声明生产期，覆盖季节干燥 | 仅声明工厂及匹配供应商 | 每 1 kg 参考流 | 校准、批次/库存核对、抽样及来源适用性；未知记录不入平均并披露覆盖 |
| cp_packaging | processing | 薄膜与捆扎带 | 包装领用台账 | 各材料；配方；质量；回收/复用；供应商边界 | 称量或核对各材料采购、用量和库存；拆分组件，包装排除于木材参考质量 | kg | 各批次及仪表/监测区间 | 完整声明生产期，覆盖季节干燥 | 仅声明工厂及匹配供应商 | 每 1 kg 参考流 | 校准、批次/库存核对、抽样及来源适用性；未知记录不入平均并披露覆盖 |
| cp_waste | sawing | 各弃置残余物 | 废物转移记录 | 身份；质量/水分；去向；处理；产品/废物证据；实际归属 sawing；原始记录ID；共享表号；外部/内部状态；匹配交接ID | 称量并保留处理/销售证据；捕集粉尘与大气释放分开，底灰与飞灰分开 仅采集实际 sawing 阶段记录；原有字段与质量证据仅按该阶段真实适用性保留。共享总表或来源记录作为核对证据，不另增交换：以实测阶段/服务归属在各配套协议间仅计一次每个可归属外部原始记录，各份额核对至总表合计。内部发送/接收记录分别保留且状态、期间、数量相同；任一端都不新增外购或排放。全部配套协议使用同一完整验收产出统计期汇总组，保留失败/返工活动与原生单位原始量。 | kg | 各批次及仪表/监测区间 | 完整声明生产期，覆盖季节干燥 | 仅声明工厂及匹配供应商 | 每 1 kg 参考流 | 校准、批次/库存核对、抽样及来源适用性；未知记录不入平均并披露覆盖 |
| cp_waste_processing | processing | 各弃置残余物 | 废物转移记录 | 身份；质量/水分；去向；处理；产品/废物证据；实际归属 processing；原始记录ID；共享表号；外部/内部状态；匹配交接ID | 称量并保留处理/销售证据；捕集粉尘与大气释放分开，底灰与飞灰分开 仅采集实际 processing 阶段记录；原有字段与质量证据仅按该阶段真实适用性保留。共享总表或来源记录作为核对证据，不另增交换：以实测阶段/服务归属在各配套协议间仅计一次每个可归属外部原始记录，各份额核对至总表合计。内部发送/接收记录分别保留且状态、期间、数量相同；任一端都不新增外购或排放。全部配套协议使用同一完整验收产出统计期汇总组，保留失败/返工活动与原生单位原始量。 | kg | 各批次及仪表/监测区间 | 完整声明生产期，覆盖季节干燥 | 仅声明工厂及匹配供应商 | 每 1 kg 参考流 | 校准、批次/库存核对、抽样及来源适用性；未知记录不入平均并披露覆盖 |
| cp_waste_heat | heat | 各弃置残余物 | 废物转移记录 | 身份；质量/水分；去向；处理；产品/废物证据；实际归属 heat；原始记录ID；共享表号；外部/内部状态；匹配交接ID | 称量并保留处理/销售证据；捕集粉尘与大气释放分开，底灰与飞灰分开 仅采集实际 heat 阶段记录；原有字段与质量证据仅按该阶段真实适用性保留。共享总表或来源记录作为核对证据，不另增交换：以实测阶段/服务归属在各配套协议间仅计一次每个可归属外部原始记录，各份额核对至总表合计。内部发送/接收记录分别保留且状态、期间、数量相同；任一端都不新增外购或排放。全部配套协议使用同一完整验收产出统计期汇总组，保留失败/返工活动与原生单位原始量。 | kg | 各批次及仪表/监测区间 | 完整声明生产期，覆盖季节干燥 | 仅声明工厂及匹配供应商 | 每 1 kg 参考流 | 校准、批次/库存核对、抽样及来源适用性；未知记录不入平均并披露覆盖 |
| cp_air | heat | 各室外空气物种 | 监测/模型记录 | 物种/CAS；源/燃料生物或化石属性；烟气流量；时长；浓度；治理；方法/检出限；PM粒径/可过滤/可凝结；NOx以NO2计；采样期；路线/树种/系数条件；实际归属 heat；原始记录ID；共享表号；外部/内部状态；匹配交接ID | 采用代表性治理后检测或独立论证的逐源模型；按实际阔叶树种/窑程筛查窑有机物。地区混合锅炉LCI和针叶树脂VOC不是阔叶窑实测。累计PM换算为不重叠粒径段，保留限定及未检出处理。 仅采集实际 heat 阶段记录；原有字段与质量证据仅按该阶段真实适用性保留。共享总表或来源记录作为核对证据，不另增交换：以实测阶段/服务归属在各配套协议间仅计一次每个可归属外部原始记录，各份额核对至总表合计。内部发送/接收记录分别保留且状态、期间、数量相同；任一端都不新增外购或排放。全部配套协议使用同一完整验收产出统计期汇总组，保留失败/返工活动与原生单位原始量。 | kg | 各批次及仪表/监测区间 | 完整声明生产期，覆盖季节干燥 | 仅声明工厂及匹配供应商 | 每 1 kg 参考流 | 校准、批次/库存核对、抽样及来源适用性；未知记录不入平均并披露覆盖 |
| cp_air_sawing | sawing | 各室外空气物种 | 监测/模型记录 | 物种/CAS；源/燃料生物或化石属性；烟气流量；时长；浓度；治理；方法/检出限；PM粒径/可过滤/可凝结；NOx以NO2计；采样期；路线/树种/系数条件；实际归属 sawing；原始记录ID；共享表号；外部/内部状态；匹配交接ID | 采用代表性治理后检测或独立论证的逐源模型；按实际阔叶树种/窑程筛查窑有机物。地区混合锅炉LCI和针叶树脂VOC不是阔叶窑实测。累计PM换算为不重叠粒径段，保留限定及未检出处理。 仅采集实际 sawing 阶段记录；原有字段与质量证据仅按该阶段真实适用性保留。共享总表或来源记录作为核对证据，不另增交换：以实测阶段/服务归属在各配套协议间仅计一次每个可归属外部原始记录，各份额核对至总表合计。内部发送/接收记录分别保留且状态、期间、数量相同；任一端都不新增外购或排放。全部配套协议使用同一完整验收产出统计期汇总组，保留失败/返工活动与原生单位原始量。 | kg | 各批次及仪表/监测区间 | 完整声明生产期，覆盖季节干燥 | 仅声明工厂及匹配供应商 | 每 1 kg 参考流 | 校准、批次/库存核对、抽样及来源适用性；未知记录不入平均并披露覆盖 |
| cp_air_processing | processing | 各室外空气物种 | 监测/模型记录 | 物种/CAS；源/燃料生物或化石属性；烟气流量；时长；浓度；治理；方法/检出限；PM粒径/可过滤/可凝结；NOx以NO2计；采样期；路线/树种/系数条件；实际归属 processing；原始记录ID；共享表号；外部/内部状态；匹配交接ID | 采用代表性治理后检测或独立论证的逐源模型；按实际阔叶树种/窑程筛查窑有机物。地区混合锅炉LCI和针叶树脂VOC不是阔叶窑实测。累计PM换算为不重叠粒径段，保留限定及未检出处理。 仅采集实际 processing 阶段记录；原有字段与质量证据仅按该阶段真实适用性保留。共享总表或来源记录作为核对证据，不另增交换：以实测阶段/服务归属在各配套协议间仅计一次每个可归属外部原始记录，各份额核对至总表合计。内部发送/接收记录分别保留且状态、期间、数量相同；任一端都不新增外购或排放。全部配套协议使用同一完整验收产出统计期汇总组，保留失败/返工活动与原生单位原始量。 | kg | 各批次及仪表/监测区间 | 完整声明生产期，覆盖季节干燥 | 仅声明工厂及匹配供应商 | 每 1 kg 参考流 | 校准、批次/库存核对、抽样及来源适用性；未知记录不入平均并披露覆盖 |
| cp_emission | sawing | 各室外空气物种 | 监测/模型记录 | 物种/CAS；源/燃料生物或化石属性；烟气流量；时长；浓度；治理；方法/检出限；PM粒径/可过滤/可凝结；NOx以NO2计；采样期；路线/树种/系数条件；实际归属 sawing；原始记录ID；共享表号；外部/内部状态；匹配交接ID | 采用代表性治理后检测或独立论证的逐源模型；按实际阔叶树种/窑程筛查窑有机物。地区混合锅炉LCI和针叶树脂VOC不是阔叶窑实测。累计PM换算为不重叠粒径段，保留限定及未检出处理。 仅采集实际 sawing 阶段记录；原有字段与质量证据仅按该阶段真实适用性保留。共享总表或来源记录作为核对证据，不另增交换：以实测阶段/服务归属在各配套协议间仅计一次每个可归属外部原始记录，各份额核对至总表合计。内部发送/接收记录分别保留且状态、期间、数量相同；任一端都不新增外购或排放。全部配套协议使用同一完整验收产出统计期汇总组，保留失败/返工活动与原生单位原始量。 | kg | 各批次及仪表/监测区间 | 完整声明生产期，覆盖季节干燥 | 仅声明工厂及匹配供应商 | 每 1 kg 参考流 | 校准、批次/库存核对、抽样及来源适用性；未知记录不入平均并披露覆盖 |
| cp_emission_processing | processing | 各室外空气物种 | 监测/模型记录 | 物种/CAS；源/燃料生物或化石属性；烟气流量；时长；浓度；治理；方法/检出限；PM粒径/可过滤/可凝结；NOx以NO2计；采样期；路线/树种/系数条件；实际归属 processing；原始记录ID；共享表号；外部/内部状态；匹配交接ID | 采用代表性治理后检测或独立论证的逐源模型；按实际阔叶树种/窑程筛查窑有机物。地区混合锅炉LCI和针叶树脂VOC不是阔叶窑实测。累计PM换算为不重叠粒径段，保留限定及未检出处理。 仅采集实际 processing 阶段记录；原有字段与质量证据仅按该阶段真实适用性保留。共享总表或来源记录作为核对证据，不另增交换：以实测阶段/服务归属在各配套协议间仅计一次每个可归属外部原始记录，各份额核对至总表合计。内部发送/接收记录分别保留且状态、期间、数量相同；任一端都不新增外购或排放。全部配套协议使用同一完整验收产出统计期汇总组，保留失败/返工活动与原生单位原始量。 | kg | 各批次及仪表/监测区间 | 完整声明生产期，覆盖季节干燥 | 仅声明工厂及匹配供应商 | 每 1 kg 参考流 | 校准、批次/库存核对、抽样及来源适用性；未知记录不入平均并披露覆盖 |
| cp_emission_heat | heat | 各室外空气物种 | 监测/模型记录 | 物种/CAS；源/燃料生物或化石属性；烟气流量；时长；浓度；治理；方法/检出限；PM粒径/可过滤/可凝结；NOx以NO2计；采样期；路线/树种/系数条件；实际归属 heat；原始记录ID；共享表号；外部/内部状态；匹配交接ID | 采用代表性治理后检测或独立论证的逐源模型；按实际阔叶树种/窑程筛查窑有机物。地区混合锅炉LCI和针叶树脂VOC不是阔叶窑实测。累计PM换算为不重叠粒径段，保留限定及未检出处理。 仅采集实际 heat 阶段记录；原有字段与质量证据仅按该阶段真实适用性保留。共享总表或来源记录作为核对证据，不另增交换：以实测阶段/服务归属在各配套协议间仅计一次每个可归属外部原始记录，各份额核对至总表合计。内部发送/接收记录分别保留且状态、期间、数量相同；任一端都不新增外购或排放。全部配套协议使用同一完整验收产出统计期汇总组，保留失败/返工活动与原生单位原始量。 | kg | 各批次及仪表/监测区间 | 完整声明生产期，覆盖季节干燥 | 仅声明工厂及匹配供应商 | 每 1 kg 参考流 | 校准、批次/库存核对、抽样及来源适用性；未知记录不入平均并披露覆盖 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_records` | 所有清单行 | 同一声明时期各归属物理交换合计，除以验收终端湿态净千克，保留分子单位。终端产品为1千克；分母不能变为绝干千克、立方米、窑批次或生材输出。仅在相同合格状态/树种/路线内按交换合计/匹配输出合计聚合场址；未知不是零。 对每张流卡及关联协议使用同一有记录、同产品、等级、路线、配置和场址的统计期汇总组；原始分子总量纳入全部可归属启动、停机、整批失败、废品及返工。返工产品仅在最终验收时计一次。各原生单位交换合计仅除一次，采用同组严格正值验收净kg；不得平均批次比率或删去零产出批次。整个匹配汇总组无合格产出时保留绝对清单并要求审查，不生成每kg结果，不虚构产量或转嫁给无关产品/时期。实物交接及库存平衡与负荷分配独立保留。 | 各行协议；cp_reference；归属交换总量；验收净千克 | 每 1 kg 参考流的物理交换 | corrim-hardwood-2020 |
| `convert_moisture_volume` | 木材质量与体积 | 对配对实测状态应用moisture_basis与solid_volume；干木、含水、实材体积收缩及机械加工损失分开。体积参考数据库行应使用同状态实测密度，不能仅因单位拒绝。 | cp_material; cp_material_processing; cp_reference | 可追溯质量/体积/含水率换算 | usda-wood-handbook-2021; corrim-hardwood-2020 |
| `steam_heat_reconciliation` | drying_heat; heat_out | 先对照现场热表边界/定义和供应方或匹配背景的热参考，包括凝结水焓零点、返回比例、排放与管线损失处理。仅在确立等效或有证据的换算后，使用记录的仪表数量，或以实测质量/状态/焓在一致零点上的流体能量平衡。燃料高位输入热、锅炉总产热和接收端有效传递分别记录；同为MJ或总热值标签不产生换算系数。内部两端采用同一已核实交付量，再除以相同验收终端净千克。无证据时保留原始总量并标记兼容性待审，不虚造交付MJ换算。 | cp_energy; cp_energy_processing; cp_energy_heat; cp_water; cp_water_heat; cp_reference | 经条件核实的每1千克参考流交付MJ，或兼容性待审 | corrim-hardwood-2020 |
| `gas_volume_reconciliation` | heat_gas | 供应方/气表体积保留明确温度、绝对压力和干湿基/成分，匹配背景气体参考体积。核实m3总量按验收终端净千克归一化，无须气体转kg。状态间校正采用实际有记录的气表/供应方程序与输入，不用假设标况、密度或属性meanValue。缺少背景/参考条件保留兼容性待审。 | cp_fuel; cp_fuel_heat; cp_reference | 每1千克参考流的m3，或兼容性待审 | epa-wood-boiler-2022 |
| `drying_water` | 窑水分平衡 | 逐匹配窑批核对木材入水减出水，加喷淋/蒸汽加水，减凝结水/液体排放和库存变化，得到排出水分。投入木材含水不能重复列为购买水，锅炉燃烧水不能归于窑木材失水。 | cp_material; cp_material_processing; cp_energy; cp_energy_processing; cp_energy_heat; cp_water; cp_water_heat | 水分账与蒸气量 | usda-wood-handbook-2021; corrim-hardwood-2020 |
| `particle_fractions` | PM空气行 | 仅在方法/源/治理/时期及粒径定义兼容时：PM2.5–10=PM10-PM2.5；PM>10=兼容总PM-PM10。差值须非负，不能把总PM、PM10及PM2.5叠加。可凝结PM须另有支持的定义，不得对不兼容检测相减。 | cp_air; cp_air_sawing; cp_air_processing; cp_emission; cp_emission_processing; cp_emission_heat | 不重叠PM粒径段 | epa-wood-boiler-2022; epa-sawmill-pte-2014 |
| `allocated_burdens` | 环境负荷账 | 各共同工序以a_i乘原始共同负荷分配；份额合计为一，并追溯至后续加工/供热的传递。保留未分配物理行与相等交接，专属负荷直接归属；经济敏感性另行保留。 | cp_material; cp_material_processing; cp_energy; cp_energy_processing; cp_energy_heat; cp_air; cp_air_sawing; cp_air_processing; cp_emission; cp_emission_processing; cp_emission_heat; allocation_steps | 独立分配后产品LCI | corrim-hardwood-2020 |
| `carbon_balance` | 木材及燃烧碳 | 用抽样干燃料/木材碳及记录的化石比例核对产品/残余物、CO2、CO、CH4、其他含碳物种、灰和库存碳；CO2碳质量=CO2质量乘12/44。无论温室气体统计约定如何，LCI均报告生物CO2；吸收/储存/寿命末端另行披露，不自动赋碳中和。 | cp_fuel; cp_fuel_heat; cp_material; cp_material_processing; cp_air; cp_air_sawing; cp_air_processing; cp_emission; cp_emission_processing; cp_emission_heat | 分开的生物/化石碳账 | epa-wood-boiler-2022; corrim-hardwood-2020 |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `quality_species` | 产品与木材投入 | 植物学身份、温带来源生态区及组成份额；测状态特定水分/密度/收率。不得外推热带、通用硬木密度或树脂VOC默认值。CORRIM表4是地区组成，不是树种鉴定权威。 | 供应商/产地文件与批次抽样 |
| `quality_missing` | 所有行 | 区分实测、计算、模型、未检出及缺失数量；条件不存在须记录物理不存在。披露覆盖与不确定性，不提供通用数值范围或虚构工厂数据。 | 原始记录、监测基准与检出限 |
| `quality_identity` | 所有适用交换 | 核实精确流类型、参考属性/单位、状态及介质。身份核验本身不确认数量/背景兼容性：蒸汽须明确供应方/背景热量及凝结水定义，天然气须匹配参考体积条件。未知身份或物理约定均须披露待审并阻止完整数据集声明。通用总金属身份须用实测总金属，不表示任意化合物。 | 生产者身份与介质核对 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | 单一数据集参考 | 要求1千克净窑干刨光温带非针叶厚度大于6毫米锯材，且恰好关联一个finished_kiln_product。拒绝热带、生材/气干、粗锯、切片/旋切、处理材或其他窑路线使用本参考。核对全部限定及中英分母、公式、行数和来源数一致。 | corrim-hardwood-2020; usda-wood-handbook-2021 |
| `validate_balances` | 所有阶段 | 核对干木、水、能量和碳物理平衡、库存变化、逐源损失及相等内部链接。另行核对负荷份额并追溯原始总量，不能缩放共产品物理产出。按实测不确定性解释残差，不虚设容差。 | corrim-hardwood-2020; usda-wood-handbook-2021 |
| `validate_emissions` | 空气及其他释放 | 针叶树脂系数不是阔叶实测，CORRIM二级锅炉LCI不是窑特定监测，PTE能力系数不是实际排放，锯材粉尘备忘录不能用于锅炉。要求化学物种/源/化石生物/介质匹配及实测治理、不重叠PM；保留生物CO2。仅监测基准支持时以NO2当量质量报告NOx。 | corrim-hardwood-2020; epa-wood-boiler-2022; epa-sawmill-pte-2014 |
| `validate_energy_compatibility` | drying_heat; heat_out; heat_gas | 须有现场仪表/供应方证据及匹配背景定量参考定义。蒸汽核对共同交付/损失边界、凝结水返回及焓零点；换算须证据，内部交接须同量。总热值标签或同为MJ不能证明燃料高位热值、锅炉总热和接收端净有用热相等。天然气须为管输气态、实际成分及匹配温度/绝对压力/干湿体积约定。不支持或缺少兼容性表示待审/适用性不完整，不能因已知流UUID而视绑定已验证。Builder参考基准检查不核实这些现场条件。 | corrim-hardwood-2020; epa-wood-boiler-2022 |
| `validate_completeness` | 现场数据集就绪性 | 声明完整解析数据集前核实各适用身份、现场筛查缺少的交换及上游边界。空身份是审查缺口，不是通过；builder检查不构成科学批准。 | corrim-hardwood-2020 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 场址特定制造方法，未分配物理图与窑干产品分配后LCI分开 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 身份/完整性审核后用于树种/产地、窑、刨削、尺寸、水分及边界相符的制造 |
| excluded_use | EPD认证；结构等效；热带/生材/气干/粗锯或其他窑替代；碳中和，或适用身份未决时完整解析清单声明 |
| required_metadata | 必需参考限定；过程/物理图；时期/场址；供应商覆盖；实测换算；相等交接；共产品去向；负荷份额；生物/化石碳约定 |
| required_quality_disclosure | 实测/估算区分、不确定性、损失、排除、缺失身份及未审核适用性 |
| update_trigger | 树种/产地/状态、几何/等级、窑/供热/治理路线、分配、边界或证据变化 |

## 11. 数据源

| 来源编号 | 类型 | 参考资料 | 用途 |
| --- | --- | --- | --- |
| `usda-wood-handbook-2021` | handbook | USDA FPL（2021），《木材手册：木材作为工程材料》，FPL-GTR-282。第4章4-1、4-11页及表4-5；第13章13-1至13-7页。[官方原件](https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf)。 | 水分/密度状态定义、抽样与气干/窑干区别；无数值密度默认值 |
| `corrim-hardwood-2020` | literature | Hubbard、Bergman、Sahoo、Bowe（2020-04-27），《美国东北及中北部硬木锯材生产生命周期评价》，CORRIM，45页。§§1.2.3–1.2.6、3.2–3.3、4.4、6.4；表2–10。[USDA原件](https://research.fs.usda.gov/download/treesearch/60571.pdf)；[CORRIM原件](https://corrim.org/wp-content/uploads/2020/06/FINAL-Northeast-and-Northcentral-Hardwood-Lumber-Production-LCA-CORRIM-Report.pdf)。 | 2017年NE/NC六厂案例：物理工序、间接蒸汽窑、刨削/包装、质量分配先例及限定。不采用调查数量或热带默认值 |
| `epa-wood-boiler-2022` | official_guidance | EPA（2022年3月），AP-42 §1.6《锅炉木材残余物燃烧》；§§1.6.1–1.6.4及表1.6-1脚注。[原件](https://www.epa.gov/system/files/documents/2022-03/c1s6_final.pdf)。 | 锅炉源/燃料/水分/治理依赖、排放筛查及嵌套PM注意；无通用排放系数，保留生物CO2 |
| `epa-sawmill-pte-2014` | official_guidance | EPA第10区（2014-05-08），《太平洋西北印第安地区锯木厂活动（不含锅炉）颗粒物潜在排放系数》；备忘录第1页及表第2页。[原件](https://www.epa.gov/sites/default/files/2016-09/documents/spmpteef_memo.pdf)。 | 仅用于范围排除和累计PM方法注意；PTE是能力，不是实际工厂排放；不采用数值系数 |
