---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.factory-assembled-mdf-timber-straight-stair-set
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 工厂装配直跑 MDF 梯梁木楼梯交付套件

## 1. 范围与适用性

实物对象为一段室内直跑有踢面楼梯：两侧 MDF 梯梁、实际木材或 MDF 踏步与踢面，以及指定木质斜段栏杆和楼梯柱交付套件。路线为外购干燥锯材及未饰面 MDF 机械加工、PVAc 分散液胶接、机械固定、验收和包裹打包。梯段在工厂完成装配；已声明的散件楼梯柱与斜段组件捆包后用于现场安装。交付配置必须区分装配件与散件。完整已安装楼梯、不相关的平台栏杆或单独踏步均不是参考对象。来源：`staircraft-stairs-2023`.

基础路线为未涂饰、无防腐或阻燃处理，不在场内窑干、制板或燃烧。需记录全电力工厂公用工程；调湿储存、抽尘和搬运仍须纳入。EPD 支持实际产品与装配路线，但不证明每个工厂都满足更窄的未涂饰、PVAc 和电力条件；这些是供方或现场准入要求。若使用任何涂饰、其他胶种、燃料、外购热载体、润滑剂、清洗水或额外包装，在逐项定义并验证真实交换之前，基础清单均不完整。无借用调查平均值。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.factory-assembled-mdf-timber-straight-stair-set |
| classification_refs | CPC 3.0 31629; narrower; 范围及已接受决定见 `classifications/mappings/cpc-3.0-to-pcr.yaml` 和其引用的 ADR |
| covered_products | 上述唯一配置的工厂装配 MDF 梯梁直跑楼梯交付套件 |
| excluded_products | 窗 31621；门 31622；混凝土模板 31623；木瓦 31624；单独柱梁 31625；地板拼装板 31626；工程结构木 31627；竹制品；弯曲、转向或螺旋楼梯；单独出售的散件；全实木楼梯；涂饰或处理楼梯；已安装工程 |
| representative_product | 直跑 MDF 梯梁梯段及指定斜段栏杆和楼梯柱套件；完整工厂发运配置 |
| production_route | 接收储存 → CNC 加工及横截 → 胶接、紧固、夹具装配 → 验收 → 包裹打包 |
| market_state | 验收合格工厂发运套件净量；披露已装配和散件状态；排除包装质量 |

现有锯材、连续成型木竹材和 MDF PCR 在各自输入产品出厂状态处结束。路线适用时可支持上游制造，但不覆盖楼梯物料完整性、装配、混合材料质量或发运套件配置。CPC 31629 为剩余类别；排除相邻子类只支持该更窄边界，不代表整个类别覆盖。正式 CPC 说明本身未明确列举楼梯。来源：`un-cpc-3-2025`; `staircraft-stairs-2023`.

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 验收合格配置工厂楼梯交付套件 |
| How much | 交付含水状态下 1 kg 合格交付套件净质量 |
| How well | 声明图纸、物料表、级高、级深、宽度、荷载及验收规格；不假定认证或性能 |
| How long or cycle | 一次制造交付；不规定使用寿命 |
| reference_flow_link | `stair_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 其他建筑细木工和木竹木工 `b8edb107-92dc-43d0-a6d0-0c2c898799d5` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 图纸、物料表和完整套件；斜段栏杆、楼梯柱的装配或散件状态；两侧 MDF 梯梁；树种、产地及干燥；板材等级、胶种、厚度；未涂饰未处理状态；PVAc 配方及固含量；实际紧固件；交付含水率；排除包装的净质量；性能验收；地点年份；供电与计量边界 |

所有必需限定信息须写入数据集元数据或等效字段。完整套件质量 M 须称量；不能由示例几何尺寸虚构 M。kg 声明单位是生产缩放基准，不证明不同设计楼梯的功能等价。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | stair_output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | cp_output 测量合格套件净质量。全部行按每 1 kg 参考流归一化；共同分母 D 为同一采集期完整合格套件净质量之和。 |
| moisture_basis | sawnwood; mdf; wastes; stair_output | Mass | kg | 实际湿质量、干固体与水分别保留；u = 水/干固体，w = 水/湿质量。MDF 须验证树脂或挥发物修正；烘干减重不自动等于水分。 |
| count_mass | screws; staples; packaging | Mass | kg | 使用同规格实测样品质量与数量；不能借用另一产品的名义密度或质量。 |
| electric_energy | electricity | Net calorific value | MJ | 电表 kWh 乘 3.6 换算 MJ；匹配交付电压、变压损耗边界与电网背景。此能量属性不证明蒸汽或净热量基准。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购干燥木材、MDF、实际装配及包装用品于工厂接收处 |
| starting_condition_role | foreground production |
| product_classification_scope | 31629 下的一种配置直跑木材及 MDF 楼梯套件子集 |
| recursive_input_rule | 不能将外购成品楼梯重新标记为本制造过程。返工留在内部；外购替换组件须具备独立核实的上游状态。 |
| upstream_dataset_requirement | 连接实际兼容的木材、MDF、胶、紧固件、电力、包装、入厂运输与废物处理；身份本身不是背景数据资格 |
| disclosure | 工厂采集期、套件配置、阶段计量、库存、装配状态、排除项、废物去向、上游交接点及未决链接 |

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_route | stair-line | 纳入接收与含水稳定、加工横截、施胶夹紧紧固、验收返工、抽尘与包装。在同一前景单元保留阶段计量；内部转移两端数量相等。 | `staircraft-stairs-2023` |
| boundary_gate | stair-line | 于工厂发运处结束；仍链接上游制造、入厂运输与实际废物处理。现场安装、使用、下游运输及寿命终结属于另行情景。不能移植 EPD 寿命或填埋假设。 | `staircraft-stairs-2023` |
| boundary_gaps | all rows | 缺失身份或计量不等于零。每个额外实际化学品、载体、包装或废物均需独立原子交换；基础路线改变时须重审适用性与完整性。 | `staircraft-stairs-2023` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| stair-line | 聚合工厂楼梯制造与包装 | required | 已定义基础路线 | foreground production | 1 kg 合格楼梯套件净量 |

实物阶段：接收与含水稳定 → CNC 与横截 → 夹具胶接紧固装配 → 验收返工 → 包裹打包发运。实物固体、水、碳账与分配后环境负荷账分开。包装改变发运包装状态，不改变参考产品质量。工厂装配梯段与包装后梯段是同一输出；保留阶段记录，不重复产品交换。来源：`staircraft-stairs-2023`; `usda-wood-handbook-2021`.

### 过程：工厂楼梯生产线（`stair-line`）

#### 输入

##### 产品流

###### 外购干燥未处理楼梯细木工锯材（`sawnwood`）
按同批净实木体积测量；需供方与背景数据明确其 m3 基准、交接点、含水状态并相互兼容；未知时数量与背景链接未完成，不能用数据库次级质量系数作密度。


树种、干燥状态和供方边界须与实际物料清单一致；不能用生材或防腐处理材替代。

- 选定流：木材，方材 `ca253295-1699-4c83-9933-9467a136a4fc`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：以 cp_material 采集期内数量 q_sawnwood；按 q_sawnwood/D 归一化至 1 kg 参考输出。无默认数量。
- 数值来源模式：`calculated_value`
- 适用范围：`product_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`staircraft-stairs-2023`

###### 中密度纤维板（`mdf`）

外购未饰面干法 MDF 用于两侧梯梁及实际踏步、踢面；厚度、胶种和甲醛等级来自供方记录。

- 选定流：中密度纤维板 `57c184ac-a2d3-4500-af7b-80609ed89d2f`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：以 cp_material 采集期内数量 q_mdf；按 q_mdf/D 归一化至 1 kg 参考输出。无默认数量。
- 数值来源模式：`calculated_value`
- 适用范围：`product_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`staircraft-stairs-2023`

###### 水性聚醋酸乙烯酯木工胶分散液（`pva`）
此广义身份包含水中聚合的 PVAc 乳液；仅在供方确认实际供货为该水性配方时使用。背景参考 kg 是供货湿配方还是聚合物固体必须独立核实；记录实测或供方固含量、水与添加剂。未知基准时留数量未决；不能把仅聚合物固体的背景数据当作完整湿胶。


仅适用已声明的 PVAc 分散液路线；称量供货配方，以实际供方证据记录固含量与水。不能将干聚合物质量当作湿胶质量。

- 选定流：聚醋酸乙烯酯 `46c91184-28ea-4b2e-a4e7-c07f3f84369b`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：以 cp_material 采集期内数量 q_pva；按 q_pva/D 归一化至 1 kg 参考输出。无默认数量。
- 数值来源模式：`calculated_value`
- 适用范围：`product_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`staircraft-stairs-2023`

###### 钢螺钉（`screws`）

实际嵌入产品的钢螺钉；牌号、镀层和尺寸须与供方兼容。抽样称量批次，完成数量到质量的换算。

- 选定流：钢螺钉 `895204f6-6425-4814-afc5-cb97e530e892`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：以 cp_material 采集期内数量 q_screws；按 q_screws/D 归一化至 1 kg 参考输出。无默认数量。
- 数值来源模式：`calculated_value`
- 适用范围：`product_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`staircraft-stairs-2023`

###### 装配用钢码钉（`staples`）

仅纳入实际装配物料表中供入的钢码钉，每个交换一种规格。本广义钢装配紧固件身份须记录实际牌号、镀层、钉丝/钉冠/钉腿尺寸、散件或成排供货状态、计数配对样本质量及提供方参考数量兼容性。不能用螺钉或未识别混合五金数量替代，也不能将包装或载体质量计作钢材。对匹配紧固件参考基准之外实际存在的其他排钉连接材料另行记录并列入交换，不编造配方。原始CPC42944排除成排码钉：供货为成排时须保留源分类澄清债务，不能声称已核实精确成排覆盖或匹配的排钉背景。

- 选定流：钢紧固件 `691b2092-38f6-4125-bfb4-cab3d86af41f`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：以 cp_material 采集期内数量 q_staples；按 q_staples/D 归一化至 1 kg 参考输出。无默认数量。
- 数值来源模式：`calculated_value`
- 适用范围：`product_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`staircraft-stairs-2023`

###### 交流电（`electricity`）

仅适用用户端 1–35 kV 电网平均交流电。按电表边界纳入变压损耗、CNC、锯切、夹紧、抽尘、电力调湿及合理归属的辅助用电。其他电压或供电路线需兼容身份。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：以 cp_energy 采集期内数量 q_electricity；按 q_electricity/D 归一化至 1 kg 参考输出。无默认数量。
- 数值来源模式：`calculated_value`
- 适用范围：`product_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：`staircraft-stairs-2023`

###### 聚丙烯扁平包装打包带（`pp_band`）

以实际 PP 打包带规格为纳入条件；捆扎绳、钢带和尼龙扎带属于不同产品。分别记录随合格成套产品离厂的净打包带与制造裁余。

- 选定流：聚丙烯扁平包装打包带
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：以 cp_pack 采集期内数量 q_pp_band；按 q_pp_band/D 归一化至 1 kg 参考输出。无默认数量。
- 数值来源模式：`calculated_value`
- 适用范围：`product_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`staircraft-stairs-2023`

###### 低密度聚乙烯薄膜（PE-LD）（`ldpe_wrap`）

仅适用非自粘、非泡孔、非层压、非增强、无支承且未与其他材料类似复合的LDPE包裹薄膜。核实实际供方形态、规格与质量；不能以泡沫、背胶、支承复合或多层材料替代。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：以 cp_pack 采集期内数量 q_ldpe_wrap；按 q_ldpe_wrap/D 归一化至 1 kg 参考输出。无默认数量。
- 数值来源模式：`calculated_value`
- 适用范围：`product_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`staircraft-stairs-2023`

###### 瓦楞纸板（`cardboard`）

有条件纳入纤维含量≥80%、含再生成分且处于可回收状态的C/E/F型防护瓦楞纸板。核实实际供方配方和接收方对该状态的认可；可回收性或再生成分本身不构成自动回收信用。

- 选定流：瓦楞纸板 `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：以 cp_pack 采集期内数量 q_cardboard；按 q_cardboard/D 归一化至 1 kg 参考输出。无默认数量。
- 数值来源模式：`calculated_value`
- 适用范围：`product_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`staircraft-stairs-2023`

#### 输出

##### 产品流

###### 工厂装配直跑 MDF 梯梁木楼梯交付套件（`stair_output`）

一个验收合格交付套件：已装配梯段、指定斜段栏杆及单独捆包的楼梯柱。参考质量排除包装；不能将单独踏步或平台栏杆作为此输出。

- 选定流：其他建筑细木工和木竹木工 `b8edb107-92dc-43d0-a6d0-0c2c898799d5`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 kg
- 数值来源模式：`fixed_value`
- 适用范围：`product_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_output`
- 来源：`staircraft-stairs-2023`

##### 废物流

###### 未处理锯材实心边角料（`timber_offcut`）

与锯屑及含树脂 MDF 分开；记录实际接收设施及回收或处置边界。

- 选定流：木材边角料 `acc22294-8e77-4784-988f-2499be3c60eb`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：以 cp_waste 采集期内数量 q_timber_offcut；按 q_timber_offcut/D 归一化至 1 kg 参考输出。无默认数量。
- 数值来源模式：`calculated_value`
- 适用范围：`product_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`staircraft-stairs-2023`

###### 捕集的未处理锯材机械加工粉尘（`timber_dust`）

仅适用于实际未处理实木锯切、砂光或研磨中单独捕集的细粉或微小木屑，记录树种、颗粒形态、无树脂/化学处理状态、收尘器及含水基准。采用此未处理焚烧/回收身份前须核实实际场外焚烧/回收接收方及兼容的废物运输/处理参考数量；未知或相反去向保持待定，必要时采用另行核实交换。排除粗边角料和含树脂MDF粉尘。按相同含水基准分别称量净收集、外运与留存库存。捕集废物与室外空气排放分开，不编造焚烧/回收数量或信用。

- 选定流：木屑废物 `e1a44d20-d968-4d64-bd7c-253a1441ab35`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：以 cp_waste 采集期内数量 q_timber_dust；按 q_timber_dust/D 归一化至 1 kg 参考输出。无默认数量。
- 数值来源模式：`calculated_value`
- 适用范围：`product_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`staircraft-stairs-2023`

###### 未饰面树脂胶合 MDF 实心边角料（`mdf_offcut`）

含胶废物须与未处理实木分开；不能假定其燃料或处置路线等同清洁木材。

- 选定流：木材边角料 `acc22294-8e77-4784-988f-2499be3c60eb`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：以 cp_waste 采集期内数量 q_mdf_offcut；按 q_mdf_offcut/D 归一化至 1 kg 参考输出。无默认数量。
- 数值来源模式：`calculated_value`
- 适用范围：`product_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`staircraft-stairs-2023`

###### 捕集的树脂胶合 MDF 机械加工粉尘（`mdf_dust`）

粉尘仅作为实际含树脂MDF机械加工细颗粒的广义非金属捕集废物身份。记录板材/胶配方、树脂状态、含水基准、收尘器、产生工序、同一时段场址归属及接收单位/去向。混合收尘器须实测材料归属，并使用准确描述实际混合粉尘的交换；不能把干净实木粉尘、实心裁余或室外空气释放合并到本行。分别称量净外运量与收尘库存。数据集完整前须核实接收方/提供方参考数量、组成、含水及处理兼容性；本身份自身不匹配处理背景，也不指定处置、焚烧或回收。

- 选定流：粉尘 `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：以 cp_waste 采集期内数量 q_mdf_dust；按 q_mdf_dust/D 归一化至 1 kg 参考输出。无默认数量。
- 数值来源模式：`calculated_value`
- 适用范围：`product_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`staircraft-stairs-2023`

###### 未固化水性 PVAc 废胶（`adhesive_waste`）

记录送往处理的未固化残余配方；不能采用晶圆生产残胶或纯聚合物流。

- 选定流：未固化水性 PVAc 废胶
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：以 cp_waste 采集期内数量 q_adhesive_waste；按 q_adhesive_waste/D 归一化至 1 kg 参考输出。无默认数量。
- 数值来源模式：`calculated_value`
- 适用范围：`product_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`staircraft-stairs-2023`

##### 基本流

###### 颗粒物 (PM2.5)（`pm_fine`）

室外空气未特指；实际排放粒径≤2.5 µm 的颗粒物。不能从木料处理量假定粒径分布。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：以 cp_air 采集期内数量 q_pm_fine；按 q_pm_fine/D 归一化至 1 kg 参考输出。无默认数量。
- 数值来源模式：`calculated_value`
- 适用范围：`product_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：

###### 颗粒物 (PM2.5 - PM10)（`pm_coarse`）

室外空气未特指；互斥的 >2.5 至≤10 µm 粒径段，不是累积 PM10。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：以 cp_air 采集期内数量 q_pm_coarse；按 q_pm_coarse/D 归一化至 1 kg 参考输出。无默认数量。
- 数值来源模式：`calculated_value`
- 适用范围：`product_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：

###### 颗粒物（> PM10）（`pm_over10`）

室外空气未特指；实际 >10 µm 质量。不能在三个粒径段之外再叠加总悬浮颗粒物。

- 选定流：颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：以 cp_air 采集期内数量 q_pm_over10；按 q_pm_over10/D 归一化至 1 kg 参考输出。无默认数量。
- 数值来源模式：`calculated_value`
- 适用范围：`product_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：

###### 甲醛（`formaldehyde`）

CAS 50-00-0；室外空气未特指。仅计实际制造或储存废气；板材释放舱试验或职业接触浓度不是排放通量。

- 选定流：甲醛 `08a91e70-3ddc-11dd-941b-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：以 cp_air 采集期内数量 q_formaldehyde；按 q_formaldehyde/D 归一化至 1 kg 参考输出。无默认数量。
- 数值来源模式：`calculated_value`
- 适用范围：`product_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：

###### 水蒸气（`water_air`）

CAS 7732-18-5；室外空气未特指。纳入平衡含水率和胶干燥过程实测净水释放；树脂或抽提物挥发不能自动计为水。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：以 cp_water 采集期内数量 q_water_air；按 q_water_air/D 归一化至 1 kg 参考输出。无默认数量。
- 数值来源模式：`calculated_value`
- 适用范围：`product_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：`usda-wood-handbook-2021`

## 7. 分配与共产品处理

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_direct | stair-line | 优先使用独立物料表及阶段计量；对共享资源记录有因果依据的机时或抽尘分配，并采用同一期间分母。EPD 质量或体积分配是案例，不是通用因子。 | `staircraft-stairs-2023` |
| allocation_physical | all products and wastes | 不能将联产品或废物实物输出乘以环境负荷分配份额。先核对实物平衡，再分配负荷。出售可用残余物时需证实废物终止边界、分配理由及单独产品流；不能于此工厂交接点声称避免能源信用。 | `staircraft-stairs-2023` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | stair-line | stair_output | foreground_record | 套件编号；物料表；装配与散件表；净 M；含水率；合格数量；皮重 | 校准完整套件称量，或在证明完整性的前提下对组成件配对称量；排除包装及未验收返工 | kg; m3; count; fraction | 每批每班；排放按代表性监测期 | 所有数量及 D 采用同一声明生产期 | 一个声明工厂与配置路线 | 每 1 kg 参考流 | 校准、供方记录、采样覆盖、不确定性与核对 |
| cp_material | stair-line | materials and fixings | foreground_record | 供货批次；树种配方；接收领用库存净量；固含量；码钉牌号/镀层/尺寸/成排状态；参考数量；存在时另行记录排钉连接材料；样本数量质量 | 称量领用及期末库存；供方 SDS、物料表、等级记录；逐件用品采用配对样品质量 | kg; m3; count; fraction | 每批每班；排放按代表性监测期 | 所有数量及 D 采用同一声明生产期 | 一个声明工厂与配置路线 | 每 1 kg 参考流 | 校准、供方记录、采样覆盖、不确定性与核对 |
| cp_energy | stair-line | electricity | foreground_record | 电压；电表 kWh；计量边界；时间；阶段机时；变压损耗；共享份额 | 阶段分表及经验证的总表核对，含工厂辅助服务 | kg; kWh | 每批每班；排放按代表性监测期 | 所有数量及 D 采用同一声明生产期 | 一个声明工厂与配置路线 | 每 1 kg 参考流 | 校准、供方记录、采样覆盖、不确定性与核对 |
| cp_pack | stair-line | packaging | foreground_record | 聚合物及楞型规格；LDPE自粘/支承状态；纸板可回收条件及接收认可；交付质量；裁余；库存；数量；样品皮重 | 分别称量实际打包带、薄膜、防护纸板；保留裁余去向，包装不进入 M | kg; m3; count; fraction | 每批每班；排放按代表性监测期 | 所有数量及 D 采用同一声明生产期 | 一个声明工厂与配置路线 | 每 1 kg 参考流 | 校准、供方记录、采样覆盖、不确定性与核对 |
| cp_waste | stair-line | each waste row | foreground_record | 材料/胶配方；颗粒实物状态；湿干质量；收尘器/产生工序；同一时段场址/材料归属；外运库存；接收方；实际去向；接收方/提供方参考数量 | 独立料箱、地磅及收尘器库存核对；混合流须实测归属。分别核实干净实木焚烧/回收路线及MDF粉尘组成/含水/接收兼容性；捕集质量不是空气排放 | kg; m3; count; fraction | 每批每班；排放按代表性监测期 | 所有数量及 D 采用同一声明生产期 | 一个声明工厂与配置路线 | 每 1 kg 参考流 | 校准、供方记录、采样覆盖、不确定性与核对 |
| cp_air | stair-line | PM bins; formaldehyde | foreground_record | 物种；排口；介质；浓度；体积流量；温压湿干基准；运行时长；控制措施；检出限；粒径段 | 代表性排口或逸散排放采样，匹配浓度及气体体积基准；积分实际质量通量；不能使用劳动者接触数据替代 | kg; m3; count; fraction | 每批每班；排放按代表性监测期 | 所有数量及 D 采用同一声明生产期 | 一个声明工厂与配置路线 | 每 1 kg 参考流 | 校准、供方记录、采样覆盖、不确定性与核对 |
| cp_water | stair-line | water_air; solids balance | foreground_record | 同批前后湿干质量；采样方法；树脂或挥发物修正；胶水含水；剩余库存 | 经验证的代表性水分测量并单列水平衡；解释任何未证实为水的干燥减重 | kg; m3; count; fraction | 每批每班；排放按代表性监测期 | 所有数量及 D 采用同一声明生产期 | 一个声明工厂与配置路线 | 每 1 kg 参考流 | 校准、供方记录、采样覆盖、不确定性与核对 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_denominator | all rows | D = sum(M_k) | cp_output 中合格完整套件净质量 | 共同期间 kg 分母；排除包装及返工库存 | `staircraft-stairs-2023` |
| calc_normalize | all non-reference rows | a_i = q_i / D | 可归属期间数量及同期间 D | 每 1 kg 参考流的行数量 | `staircraft-stairs-2023` |
| calc_count | screws; staples; packaging | q_i = count_i × sample_mass_i / sample_count_i | 匹配实物规格及实测批次样品 | 期间 kg | `staircraft-stairs-2023` |
| calc_electric | electricity | q_electricity = 3.6 × kWh | 已归属电表 kWh | MJ | `staircraft-stairs-2023` |
| calc_moisture | wood and board | dry_mass = wet_mass / (1 + u); water_mass = wet_mass - dry_mass; w = u / (1 + u) | 经验证的干基含水率小数 u；需要时进行树脂或挥发物修正 | 独立固体及水账 | `usda-wood-handbook-2021` |
| calc_air | PM bins; formaldehyde | q_i = integral(C_i × Vdot × dt)，kg/m3、m3/时间及时间须同基准；使用实测互斥粒径段 | cp_air 排放采样及控制记录 | 排向室外空气的实际 kg；未测粒径段仍为缺失 |  |
| complete_period_normalization | 所有清单行 | 每项既有工期、批次或批量数量规则及关联采集协议均采用同声明产品、等级、路线、配置、场址和参考状态的单一有记录完整统计期汇总组。验收批次措辞仅限定分母；原生单位原始分子记录保留全部可归属启动、停机、整批失败或零产出批次、废品、在制品和返工。返工参考产品仅在最终验收时计一次。各可归属交换在匹配汇总组内求和，仅除一次同组严格正值、采用声明分母单位的验收参考产品数量，再按声明参考数量缩放。不得平均批次比率、丢弃失败批次、混合无关产品/时期或改变分子原生单位。整个匹配汇总组无验收产出时保留未归一化绝对清单并要求审查，不生成归一化结果或虚构产量。库存/退回及实物交接账与负荷分配独立保留；分配不得删去已经发生的失败/返工活动。 | 全部关联原始采集协议；验收参考产品汇总组；库存及返工链接 | 各原生交换单位每声明参考数量；零产出汇总组保持未归一化 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| quality_balance | stair-line | 按库存变化、捕集与排放粉尘及返工，分别核对干固体、胶固体、金属、包装、水与碳。量化不确定性；不明差额不能虚构为排放。 | cp_output; cp_material; cp_pack; cp_waste; cp_air; cp_water |
| quality_identity | all rows | 路线材料状态属性兼容与数量背景兼容分开。不能将 Tiangong 身份注释中的配方或文献平均值转成现场默认值。 | supplier records; direct identity and background definition |
| quality_completeness | all rows | 保留缺值、检出限与遗漏活动。前景全电力范围不删除上游或废物处理生物 CO2；实际释放留在各自过程，与产品储碳分开。 | site coverage and linked datasets |

## 9. 校验规则

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| validation_reference | stair_output | 须且仅有一个以行 ID 链接的成品输出，并具备完整套件限定信息及经核实的参考身份、属性和单位。中间输出不能共用成品参考 UUID。参考身份未决时不能形成完整数据集。 | `staircraft-stairs-2023` |
| validation_denominator | all rows | 参考数量、行数量、采集期及计算均使用 1 kg 套件净量及相同 D；件数、发运毛重或不完整组件表不能替代 D。 | `staircraft-stairs-2023` |
| validation_pm | pm_fine; pm_coarse; pm_over10 | 仅用三个互斥粒径段；不得叠加累积 PM10 或总悬浮颗粒物。核查排口或逸散采样介质条件；明确标识未测排放。 |  |
| validation_boundary | stair-line | 路线准入、物料表及质量水碳闭合须与负荷分配分别验证。不能由此生产清单声称认证、寿命等价或完整 31629 覆盖。 | `staircraft-stairs-2023`; `un-cpc-3-2025` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 精确配置楼梯交付套件的上游制造 |
| allowed_use | 仅在解决全部适用身份、背景、数量和完整性缺口后使用；匹配配置、工厂、年份与路线 |
| excluded_use | 泛木制品；安装；全实木、竹或转向楼梯；完整分类映射；寿命或法规声称 |
| required_metadata | 完整参考限定信息；PCR 身份；净 D；期间工厂；上游交接点；行协议；实物与分配账 |
| required_quality_disclosure | 缺失参考或流身份；计量背景不确定性；排除活动；采样覆盖；翻译与方法状态 |
| update_trigger | 物料表、装配散件状态、树种、板材、胶、涂饰、紧固件、电压、公用工程、包装、控制或背景改变 |

## 11. 数据源

| source_id | type | 参考 | 用途 |
| --- | --- | --- | --- |
| `staircraft-stairs-2023` | literature | [Staircraft Timber Staircases with Balustrades, HUB-0834](https://staircraftgroup.com/wp-content/uploads/2024/06/EPD_Staircraft_Group_Ltd_Timber_staircases_HUB-0834_2024-06-19.pdf); pp. 2–7; 10 November 2023 | 实际木材与 MDF 产品、工厂装配及包裹散件楼梯柱、1 kg 缩放、边界与分配案例。英国 2021–2022 多工厂证据；不移植物料比例、能耗、60 年寿命、碳因子或填埋情景。EPD 路线不证明更窄的未涂饰、PVAc、全电力准入条件。 |
| `usda-wood-handbook-2021` | handbook | [Wood handbook, FPL-GTR-282](https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf); Chapter 13, pp. 13–1 to 13–2, eq. 13–1 | 含水测量、干湿基准及树脂、挥发物、电测法局限。无楼梯排放因子、固定密度、通用含水率或清单范围。空气通量与平衡协议为明确前景要求，不是 USDA 排放规定。 |
| `un-cpc-3-2025` | official_guidance | [CPC 3.0 Explanatory Notes, 30 June 2025](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf); pp. 142–143, subclasses 31621–31629 | 仅支持相邻子类排除和剩余细木工分类背景。楼梯套件的 narrower 关系属于分类解释，以权威映射及其 ADR 为准；说明未提供楼梯工厂方法或参考 UUID。 |
