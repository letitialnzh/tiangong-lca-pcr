---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.wood-in-chips-or-particles
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 木片与非压制木颗粒

## 1. 范围与适用性

本方法覆盖经机械尺寸加工、筛分与储存后散装交付的洁净、未处理、未胶结木片和木颗粒。声明树种、进料来源、粒径规格、树皮及杂质含量和实测含水率。非锯材用圆木的专门削片与洁净木材加工共产品制备是不同路线。后者继承来源工序负荷；低价格、已存在或“残余物”称呼均不构成零负荷规则。[corrim-northern-lumber-2025; fao-residue-preparation。]

排除胶结刨花板、OSB、制浆、木丝或木粉、压制颗粒或块状燃料、热改性或浸渍木材、受污染消费后木材、零售袋装产品及前景人工热干燥。纳入自然储存含水率变化；洁净边角料此前的干燥保留在上游负荷中。锅炉或热干燥机需要独立审阅的扩展及独立燃烧证据。销售作为燃料不使本数据集成为燃烧或避免燃料数据集。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.wood-in-chips-or-particles |
| classification_refs | CPC 3.0 31230; narrower; 范围及已接受决定见 `classifications/mappings/cpc-3.0-to-pcr.yaml` 和其引用的 ADR |
| covered_products | 规格及含水率明确的洁净非压制木片或木颗粒 |
| excluded_products | 胶结板材；压制燃料颗粒；木粉或木丝；处理或污染木材；前景人工热干燥产品 |
| representative_product | 制备厂门口的筛分散装未处理木片 |
| production_route | 专门机械削片或继承木材加工共产品；筛分、回料、自然储存及散装装载 |
| market_state | 未胶结、无包装的散装交付；声明含水率及粒径 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在制备厂门口提供指定规格散装木片原料 |
| How much | 交付含水率状态下1 m3实体木材体积，排除颗粒间空隙 |
| How well | 满足声明的粒径、树种、树皮或杂质及含水率验收；不规定统一等级或含水率 |
| How long or cycle | 声明储存停留后的一次验收散装交付 |
| reference_flow_link | chips |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 木片 `3fa2a6a7-224c-4d99-bd55-a214f0a83161` |
| 参考流属性 | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` |
| 参考单位组 | 体积单位组 `93a60a57-a3c8-12da-a746-0800200c9a66` |
| 参考单位 | m3 |
| 必需限定信息 | 路线；木材来源及生产者分配边界；树种或混合组成；木片粒径及验收；树皮或杂质；含水率及干湿基准；实体体积测量状态；批次实体与堆积体积及装填；干湿质量；储存时长、条件及库存；供应过程与运输边界；分配方法；时空范围；供应方参考数量及实体或堆积定义和证据定位；链接的含水率、树种、装填及损失边界核对；量值或背景兼容性状态 |

必需限定信息须在数据集元数据或等效过程或参考流说明中声明。须保留三项独立判断：(a) 已核实的Wood Chip产品身份及Volume/m3属性单位链；(b) 本PCR定义的交付含水率下1 m3实体木材体积，排除颗粒间空隙；(c) 每个链接的供应方或背景过程自身具体的体积定义及参考数量。流记录只证明(a)；(b)是本PCR的声明单位选择，不能证明数据库或任何背景过程采用实体体积。松散一立方米或一千克均不能直接作为一个参考单位。本单位是声明的生产单位，不证明下游燃料、制浆或板材功能等效。

可条件采用已核实的木片身份，但须通过cp_volume_link对incoming_chips、chips及每个木片供应方或背景链接独立确认量值与背景兼容性。供应方通用Volume/m3标签或相同UUID不足为证：须取得其有记录的实体或堆积定义、参考数量、含水率或树种状态及已纳入的损失边界。定义或适用实测换算未知时，保持量值或背景兼容性pending，披露缺失证据，阻止标记为已完成背景链接及作为完整数据集使用。不得把已知产品身份改称缺失。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| solid_basis | reference product | 体积 | m3 | 实体体积排除空隙并按交付含水率状态测量。采用cp_reference，保留同树种同含水率密度，不套用通用换算系数。 |
| moisture_basis | wood exchanges | 质量 | kg | 分别保留湿质量m_w、烘干质量m_d及水。w=(m_w-m_d)/m_w；u=(m_w-m_d)/m_d；m_d=m_w*(1-w)=m_w/(1+u)。w及u为分数而非百分数，百分数须明确除以100。[usda-wood-handbook-2021; fao-units。] |
| volume_state | cp_reference; cp_material | 体积与质量 | m3; kg | V_s=m_w/rho_ws，质量和实体密度须对应同一实测含水率；V_b为包含空隙的实测松散堆积体积。k=V_s/V_b须按批次测定，不用干实体密度换算湿质量。 |
| energy_state | electricity; diesel | energy; mass | MJ; kg | 电力kWh*3.6=MJ；柴油仍按千克计，体积交付须采用实际供应方密度。燃料发热能不等于有用热。 |
| nox_quantity_basis | nox | 质量；经核实数量约定 | kg | 计算前记录实际监测或系数所得NOx的数量约定、化学/物种范围、浓度及气体状态基准，并独立核实其与所选LCI流及评价方法的关系。原生质量/kg不证明NO2当量约定。采用当量基准时保留真实NO/NO2物种量及有文件支持的换算/组分证据，不采用通用换算或假定比例。核对总量与另建NO/NO2行的重叠，N2O另立记录，同一释放不得重复计量。约定、物种组成或LCI/评价相容关系缺失时，原始结果及归一化交换保持待审，不静默标为NO2当量或虚构零值。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 林道端圆木；原生产者门口的洁净边角料或输入木片，均衔接继承负荷 |
| starting_condition_role | foreground_gate_input_with_upstream_background |
| product_classification_scope | CPC31230中支持的洁净机械制备子集 |
| recursive_input_rule | 输入木片保留已核实上游制备与来源负荷，禁止递归自引用，运输或储存只计一次 |
| upstream_dataset_requirement | 专门路线采用有代表性的林业及采伐数据；残余路线采用原工序已分配共产品数据；能源、物料、运输和废物处理采用匹配供应过程；木片链接另须有供应方参考体积定义及cp_volume_link兼容性证据 |
| disclosure | 披露上游纳入、生产者分配或细分、树种、进料处理史、缺失供应过程、运输、储存、粉尘与控制、剔除产品及分配台账 |

纳入接收检验、实际剥皮、削片、筛分、两类回料、输送、除尘、自然储存损失及散装装载；纳入应归属的维护和处置。购入服务的排放只计一次；前景柴油排放仅针对这些服务之外的机械。机械制造与场地工程须有重要性核查及明确边界裁定，不采用统一数字截断。下游制浆、板材、压粒及燃烧在厂门之外；不使用避免燃料或储存信用。

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| preparation | 接收、机械制备、筛分、自然储存及散装交付 | required | 支持范围路线 | foreground | chips |

将连续物理制备至散装交付聚合为一个前景单元，保留阶段独立计量及下列内部实物台账。筛后中间木片及储存木片不是额外参考产品输出。回料配对两端须具有相同未分配实物数量、含水率及批次。

| transfer_id | 具体内部物料 | 起点 → 终点 | 计量与核算 |
| --- | --- | --- | --- |
| oversize_return | 超规格未处理木片 | screen → chipper | 按cp_recirculation逐次称量千克；两端等量，不计为新进料或销售产品 |
| fines_return | 回用洁净木细料 | screen or collector → preparation | 与超规格料分开称量，明确每次回用去向，不再计作粉尘排放或处置 |
| storage_dry_loss | 储存消耗的干木材物质 | pile → measured fate | 按cp_storage扣除库存、实体外送和逸散木材损失后的剩余量；水损失分开；未解释去向为平衡缺口，不是交换UUID |

### 过程：机械制备（`preparation`）

#### 输入

##### 产品流

###### 针叶圆木、其他 (`conifer_roundwood`)

专门削片路线接收非锯材用针叶圆木时纳入。记录湿质量、树皮比例、含水率和林道交付上游负荷；进厂运输另列。

- 选定流：针叶圆木、其他 `3dbbedd2-fb9d-478e-a4b4-4a76a4d97804`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_material取得实际归属交换量，除以验收交付实体体积V_s；保留未分配实物台账。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_material`
- 来源：`usda-wood-handbook-2021`

###### 阔叶圆木、其他 (`hardwood_roundwood`)

专门削片路线接收非锯材用阔叶圆木时纳入；使用独立树种、质量及含水率记录，不套用针叶材得率或密度。

- 选定流：阔叶圆木、其他 `b8b84d78-13c2-4dab-9b6d-8e7d9dc32f3b`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_material取得实际归属交换量，除以验收交付实体体积V_s；保留未分配实物台账。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_material`
- 来源：`usda-wood-handbook-2021`

###### 未浸渍木材边角料 (`offcuts`)

共产品路线：生产者门口的一项洁净实体边角料交换。衔接生产者共同工序分配及既有干燥负荷，另计削片；价格低或为零不意味着既有碎料无负荷。

- 选定流：未浸渍木材边角料
- 流属性/单位：质量 / kg
- 数量规则：按cp_material取得实际归属交换量，除以验收交付实体体积V_s；保留未分配实物台账。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_material`
- 来源：`corrim-northern-lumber-2025`; `fao-residue-preparation`

###### 木片 (`incoming_chips`)

仅在接收已削片的洁净共产品并继续筛分或储存时纳入；记录继承的木片生产负荷及接收数量。通过cp_volume_link确认供应方或背景的参考数量、实体或堆积口径、含水率或树种状态、装填及损失边界。归一化前以匹配测量证据计算接收实体体积；背景需求用供应方自身已核实的参考体积表达。定义或换算未知则链接保持pending，对应数据集不完整。本行为投入，不是成品参考输出，不再将同一木材按圆木或边角料计入。

- 选定流：木片 `3fa2a6a7-224c-4d99-bd55-a214f0a83161`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：按cp_material取得实际归属交换量，除以验收交付实体体积V_s；保留未分配实物台账。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_material`
- 来源：`fao-units`; `corrim-northern-lumber-2025`

###### 交流电 (`electricity`)

用于剥皮、削片、筛分、输送、除尘及装载的低于1千伏电网交付电力。分阶段计量，包含回料再加工电耗。其他电压或自发电须另行核实流身份与供应过程。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值（电能） `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：按cp_energy取得实际归属交换量，除以验收交付实体体积V_s；保留未分配实物台账。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_energy`
- 来源：

###### 柴油 (`diesel`)

实际使用时计入前景削片机或装载机的石油柴油；称量或核对购入、消耗和库存。燃料供应止于燃烧前，发动机直接排放另列，不重复计入运输服务中的燃料。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_energy取得实际归属交换量，除以验收交付实体体积V_s；保留未分配实物台账。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_energy`
- 来源：

###### 润滑油 (`lubricant`)

机械维护实际消耗的石油润滑油；按质量计量，不把展示的发热量作为有用热。合成油须使用其自身身份。

- 选定流：润滑油 `66628f20-9d33-4997-bd6c-6357453fa268`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_energy取得实际归属交换量，除以验收交付实体体积V_s；保留未分配实物台账。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_energy`
- 来源：

###### 自来水 (`water`)

实际清洗或抑尘所用外供自来水；记录水源、供应过程和千克量。体积表计须用有记录的水密度换算，河流原水不是本流。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_material取得实际归属交换量，除以验收交付实体体积V_s；保留未分配实物台账。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_material`
- 来源：

###### 公路运输 (`freight`)

仅在实际车辆和供应过程符合30吨柴油货车身份时计入进厂公路运输。按承运湿载荷乘载货距离计算，供应过程披露装载率及空返。其他车辆须另行核实。

- 选定流：公路运输 `9425f2bf-e734-4884-be1b-645473a3e82d`
- 流属性/单位：质量*距离 `118f2a40-50ec-457c-aa60-9bc6b6af9931` / kg*km
- 数量规则：按cp_transport取得实际归属交换量，除以验收交付实体体积V_s；保留未分配实物台账。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_transport`
- 来源：

##### 基本流

###### 室外木片堆吸收的雨水 (`rain`)

仅用于室外储存：降雨进入堆体的水，排除未进入堆体的径流。用实测降雨、暴露面积及吸收监测估算，不把湿质量增加作为木材增产。

- 选定流：室外木片堆吸收的雨水
- 流属性/单位：质量 / kg
- 数量规则：按cp_storage取得实际归属交换量，除以验收交付实体体积V_s；保留未分配实物台账。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_storage`
- 来源：

#### 输出

##### 产品流

###### 木片 (`chips`)

筛分、库存核对及装载后的一项散装成品交付。1 m3实体体积是本PCR的声明定义，实际量值须由cp_reference证实，同时保留实测干湿质量及堆积体积。通过cp_volume_link确认任何接收方或背景链接自身的实体或堆积参考数量、含水率或树种、装填及损失边界。仅有产品身份不能完成量值或链接；缺失测量或供应方兼容性证据时保持pending，阻止作为完整数据集使用。

- 选定流：木片 `3fa2a6a7-224c-4d99-bd55-a214f0a83161`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：1 m3
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_reference`
- 来源：`usda-wood-handbook-2021`; `fao-units`

###### 洁净未浸渍树皮共产品 (`bark`)

仅记录可单独销售的树皮部分。记录湿质量、干质量及去向，不按环境负荷份额缩减实体产量。不以混合木屑燃料顶替纯树皮身份。

- 选定流：洁净未浸渍树皮共产品
- 流属性/单位：质量 / kg
- 数量规则：按cp_material取得实际归属交换量，除以验收交付实体体积V_s；保留未分配实物台账。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_material`
- 来源：`corrim-northern-lumber-2025`; `fao-residue-preparation`

###### 洁净木锯屑细料 (`fines`)

仅记录不符合木片验收规格且分离销售的锯屑细料；不是内部回用细料或大气粉尘，须单独称量。

- 选定流：洁净木锯屑细料
- 流属性/单位：质量 / kg
- 数量规则：按cp_material取得实际归属交换量，除以验收交付实体体积V_s；保留未分配实物台账。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_material`
- 来源：`fao-residue-preparation`

##### 废物流

###### 树皮 (`bark_waste`)

送往处理且不可销售的剥皮残渣，与树皮共产品行互斥。记录去向、含水率及处理负荷，不假设能源替代。

- 选定流：树皮 `a2536c07-fbe1-4a12-90fb-21bd2e99b74e`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_waste取得实际归属交换量，除以验收交付实体体积V_s；保留未分配实物台账。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_waste`
- 来源：

###### 送处置的洁净木筛分剔除料 (`reject_wood`)

仅记录内部再加工结束后跨前景边界送处置的木质剔除料；排除可销售细料及已配对的内部回料。

- 选定流：送处置的洁净木筛分剔除料
- 流属性/单位：质量 / kg
- 数量规则：按cp_waste取得实际归属交换量，除以验收交付实体体积V_s；保留未分配实物台账。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_waste`
- 来源：

###### 未污染矿物土筛分剔除物 (`soil_reject`)

从洁净进料中分出的矿物土；记录千克量及实际处理，不用采矿废物或污染土壤身份顶替。

- 选定流：未污染矿物土筛分剔除物
- 流属性/单位：质量 / kg
- 数量规则：按cp_waste取得实际归属交换量，除以验收交付实体体积V_s；保留未分配实物台账。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_waste`
- 来源：

###### 废钢 (`metal_reject`)

仅记录送回收的分离钢质杂物，与矿物土分别称量。其他金属种类及处置路线须另列身份。

- 选定流：废钢 `6b1343f5-929b-4a1b-8459-f741ed19ebd2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_waste取得实际归属交换量，除以验收交付实体体积V_s；保留未分配实物台账。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_waste`
- 来源：

###### 送处置的捕集洁净木粉尘 (`captured_dust`)

跨处理边界的除尘器捕集物，按料箱更换及库存称量；不是逸散颗粒物。内部回用的捕集粉尘只进入内部台账。

- 选定流：送处置的捕集洁净木粉尘
- 流属性/单位：质量 / kg
- 数量规则：按cp_waste取得实际归属交换量，除以验收交付实体体积V_s；保留未分配实物台账。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_waste`
- 来源：`epa-sawmill-pte-2014`

###### 从储存堆移出的变质木片 (`spoiled_wood`)

单独称量移出的腐败木材。本实体输出不同于生物降解干物质损失，也不同于筛分剔除料。

- 选定流：从储存堆移出的变质木片
- 流属性/单位：质量 / kg
- 数量规则：按cp_waste取得实际归属交换量，除以验收交付实体体积V_s；保留未分配实物台账。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_waste`
- 来源：

###### 送污水处理的收集木片储存径流 (`runoff`)

收集并交付处理的受污染储存水；测定质量及悬浮、溶解负荷。实际环境直排须另列受纳介质及物种，不能按本处理外送流建模。

- 选定流：送污水处理的收集木片储存径流
- 流属性/单位：质量 / kg
- 数量规则：按cp_storage取得实际归属交换量，除以验收交付实体体积V_s；保留未分配实物台账。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_storage`
- 来源：

###### 废润滑油 (`spent_oil`)

维护时实际移出的废油；单独计量并衔接真实处理，不与水或木废料合并。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_waste取得实际归属交换量，除以验收交付实体体积V_s；保留未分配实物台账。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_waste`
- 来源：

##### 基本流

###### 颗粒物 (PM2.5) (`pm25`)

机械搬运及实际发动机产生的PM2.5区间大气颗粒物，只计未被控制设施捕集的排放。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_dust取得实际归属交换量，除以验收交付实体体积V_s；保留未分配实物台账。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_dust`
- 来源：`epa-sawmill-pte-2014`

###### 颗粒物 (PM2.5 - PM10) (`pmcoarse`)

大于PM2.5至PM10的大气颗粒物，只由可兼容的嵌套测量推导，不再次加入PM10总量。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_dust取得实际归属交换量，除以验收交付实体体积V_s；保留未分配实物台账。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_dust`
- 来源：`epa-sawmill-pte-2014`

###### 颗粒物（> PM10） (`pmover10`)

木片搬运或储存产生的大于PM10的大气颗粒物；排除捕集物，不以PM10顶替。

- 选定流：颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_dust取得实际归属交换量，除以验收交付实体体积V_s；保留未分配实物台账。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_dust`
- 来源：`epa-sawmill-pte-2014`

###### 二氧化碳（化石源） (`co2f`)

实际石油燃料发动机二氧化碳；保留化石来源并与储存生物碳区分。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_engine取得实际归属交换量，除以验收交付实体体积V_s；保留未分配实物台账。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_engine`
- 来源：

###### 二氧化碳（生物源） (`co2b`)

储存腐败实际释放的生物源二氧化碳。实测或采用经现场校准且按物种分解的碳模型；不因LCIA报告惯例而从LCI删除。

- 选定流：二氧化碳（生物源） `08a91e70-3ddc-11dd-9c15-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_storage取得实际归属交换量，除以验收交付实体体积V_s；保留未分配实物台账。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_storage`
- 来源：

###### 甲烷 (化石源) (`ch4f`)

实际石油燃料发动机运行的化石甲烷；须有供应方及负荷特定排放证据。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_engine取得实际归属交换量，除以验收交付实体体积V_s；保留未分配实物台账。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_engine`
- 来源：

###### 甲烷 (生物源) (`ch4b`)

实际储存条件及测量证明释放时的生物甲烷；不得仅凭木材干质量损失推断。

- 选定流：甲烷 (生物源) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_storage取得实际归属交换量，除以验收交付实体体积V_s；保留未分配实物台账。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_storage`
- 来源：

###### 氮氧化物 (`nox`)

实测按明确质量表达口径报告的发动机NOx；不得以一氧化氮替代聚合NOx。

- 选定流：氮氧化物 `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_engine取得实际归属交换量，除以验收交付实体体积V_s；保留未分配实物台账。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_engine`
- 来源：

###### 一氧化碳（化石源） (`co`)

实际石油燃料发动机的化石一氧化碳，保留物种及来源。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_engine取得实际归属交换量，除以验收交付实体体积V_s；保留未分配实物台账。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_engine`
- 来源：

###### 一氧化二氮 (`n2o`)

实际发动机存在时的一氧化二氮，按N2O质量报告，不按氮当量。

- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_engine取得实际归属交换量，除以验收交付实体体积V_s；保留未分配实物台账。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_engine`
- 来源：

###### 二氧化硫 (`so2`)

实际发动机燃料产生的二氧化硫，不以硫氧化物集合或元素硫顶替。

- 选定流：二氧化硫 `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_engine取得实际归属交换量，除以验收交付实体体积V_s；保留未分配实物台账。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_engine`
- 来源：

###### 水蒸气 (`vapour`)

木片自然储存调节时离开的水蒸气；区分蒸发水与干木材损失。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_storage取得实际归属交换量，除以验收交付实体体积V_s；保留未分配实物台账。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_storage`
- 来源：

## 7. 分配与共产品处理

保留两套相互链接的账：未分配的木材、水和碳实物过程台账，以及环境负荷分配台账。可测量时直接归属专用接收、再削片、筛分和储存负荷，先细分再做共同分配。上游锯木厂已分离的共产品必须继承该阶段负荷。不得将分离之后的锯材干燥负荷追分至木片，但收到的边角料实际已有干燥须保留。[corrim-northern-lumber-2025 §3.2.6，仅北部美国锯木案例。]

对因果关系适宜的共同木材工序，仅按实测烘干可用输出质量分配共同负荷：a_i=d_i/sum(d_j)。分母为同一工序输出，排除废物和内部循环。同批次份额之和为一；各实体输出质量保持原值，成品参考仍为1 m3。这是本PCR的干质量实施方法，不是统一调查得率。输出功能或因果基础明显不同时，数据集使用前须明确复核并以同期价格开展经济分配敏感性分析；不设统一价格或份额。

专门削片的专用负荷归属所产木片，同时明确共同可售树皮或细料处理。输入残余物不得假定为免费无负荷原料。废物默认不取得可售输出份额，但须承担实际搬运和处理负荷。按真实销售、回用和废物去向划分树皮或细料，避免重叠。内部能源使用需要独立核实的能源单元及转移台账，不能以信用隐藏被排除的前景锅炉运行。本归属型厂门数据集不允许避免燃料、避免处置或替代信用。[usda-wood-handbook-2021; corrim-northern-lumber-2025。]

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_reference` | preparation | 验收交付 | 测量及可溯源记录 | 批次；树种；规格；含水率；湿质量；皮重；验收实体体积V_s；堆积体积V_b；实体颗粒密度；装填；储存时长；供应方参考数量及实体或堆积定义；有记录的含水率、树种、装填及已纳入损失厂门；兼容性证据定位 | 用经校准的秤称量验收净散装产品。按树种、粒径及交付含水率代表性采样；测定经吸水校正的实体排液体积，或采用可溯源同状态密度求得V_s。测量校准容器或车厢堆积体积并记录沉降，不设通用实体或堆积系数。 独立核对cp_volume_link；实测前景实体体积不证明供应方的参考口径。 | kg; m3 | 每批次或表计周期；储存按停留时长重复测量 | 声明有代表性的运行期，覆盖季节性含水率变化，不虚构最低时长 | 一个声明场址及配对批次或路线 | 每参考流 | 校准；原始记录；配对库存；采样代表性；不确定性；供应方及测试边界 |
| `cp_material` | preparation | 每项木材或水交换 | 测量及可溯源记录 | 来源；厂门；树种；生产者路线及分配；上游既有干燥；干湿质量；含水率基准；树皮；杂质；接收；库存；去向；V_s；V_b；供应方参考数量及实体或堆积定义；有记录的含水率、树种、装填及已纳入损失厂门；兼容性证据定位 | 各流分别称量并配对批次含水率样品。按手册第13章方法烘干代表性木材样品至稳定质量，保留温度、间隔、挥发性提取物偏差及不确定性。供应方含水率仪须有树种及温度校准。样品含水率是物料证据，不是统一范围。 独立核对cp_volume_link；实测前景实体体积不证明供应方的参考口径。 | kg; m3 | 每批次或表计周期；储存按停留时长重复测量 | 声明有代表性的运行期，覆盖季节性含水率变化，不虚构最低时长 | 一个声明场址及配对批次或路线 | 每参考流 | 校准；原始记录；配对库存；采样代表性；不确定性；供应方及测试边界 |
| `cp_energy` | preparation | 每项能源或物料投入 | 测量及可溯源记录 | 阶段表计始末；电压；kWh；柴油购入、使用、库存及密度；润滑油质量；工时；再加工 | 采用阶段分表及有记录核对，能源载体与维护油分开；纳入再加工及除尘消耗。 | MJ; kg | 每批次或表计周期；储存按停留时长重复测量 | 声明有代表性的运行期，覆盖季节性含水率变化，不虚构最低时长 | 一个声明场址及配对批次或路线 | 每参考流 | 校准；原始记录；配对库存；采样代表性；不确定性；供应方及测试边界 |
| `cp_transport` | preparation | 进厂运输 | 测量及可溯源记录 | 车辆类型；供应过程；起点或厂门；湿载荷；载货距离；装载率；空返；重复供应边界 | 采用交付称量及路线记录，核对真实30吨柴油运输服务。将上游交付厂门与运输起点衔接，防止遗漏或重复路段。 | kg*km | 每批次或表计周期；储存按停留时长重复测量 | 声明有代表性的运行期，覆盖季节性含水率变化，不虚构最低时长 | 一个声明场址及配对批次或路线 | 每参考流 | 校准；原始记录；配对库存；采样代表性；不确定性；供应方及测试边界 |
| `cp_recirculation` | preparation | 超规格及细料回料 | 测量及可溯源记录 | 转移标识；阶段；遍数；批次；干湿质量；含水率；回料起点或终点；能耗表计 | 每次分别称量超规格回料及细料回料，负荷归属前按同量配对实物两端。跟踪累计加工能源，不把循环作为新得率。 | kg | 每批次或表计周期；储存按停留时长重复测量 | 声明有代表性的运行期，覆盖季节性含水率变化，不虚构最低时长 | 一个声明场址及配对批次或路线 | 每参考流 | 校准；原始记录；配对库存；采样代表性；不确定性；供应方及测试边界 |
| `cp_waste` | preparation | 每项独立残渣 | 测量及可溯源记录 | 流；物料；销售或废物状态；去向；干湿质量；含水率；接收或处理；料箱及库存；回收路线 | 分别称量树皮废物、木筛分料、矿物土、钢杂物、捕集粉尘、变质木材及废油；保留接收及处理证据，额外真实物料须另列具体行。 | kg | 每批次或表计周期；储存按停留时长重复测量 | 声明有代表性的运行期，覆盖季节性含水率变化，不虚构最低时长 | 一个声明场址及配对批次或路线 | 每参考流 | 校准；原始记录；配对库存；采样代表性；不确定性；供应方及测试边界 |
| `cp_storage` | preparation | 水及储存生物损失 | 测量及可溯源记录 | 批次；期初期末干湿库存；接收或交付；停留；温度；覆盖；雨水吸收；蒸发水；径流；干物质外移；碳含量；气体物种；测量不确定性 | 在实际停留期间重复测量同批次库存、含水率及损失，计量收集径流及雨水吸收。实测气体，或以真实监测校准物种特定碳模型。区分生物损失、木粉尘外移和水变化；未解释亏损为数据缺口，不能全部归为CO2。 | kg | 每批次或表计周期；储存按停留时长重复测量 | 声明有代表性的运行期，覆盖季节性含水率变化，不虚构最低时长 | 一个声明场址及配对批次或路线 | 每参考流 | 校准；原始记录；配对库存；采样代表性；不确定性；供应方及测试边界 |
| `cp_dust` | preparation | 每项不重叠粒径 | 测量及可溯源记录 | 来源阶段；工时；搬运质量；总PM；PM10；PM2.5；采样方法；控制；捕集；逸散；空白；粒径定义 | 采用可兼容的真实排放测量，或与阶段及控制匹配的现场验证因子，核对捕集实体。EPA潜在排放表只作范围及粒径定义核查，不是真实排放数据或锅炉证据。 | kg | 每批次或表计周期；储存按停留时长重复测量 | 声明有代表性的运行期，覆盖季节性含水率变化，不虚构最低时长 | 一个声明场址及配对批次或路线 | 每参考流 | 校准；原始记录；配对库存；采样代表性；不确定性；供应方及测试边界 |
| `cp_engine` | preparation | 每项发动机气体 | 测量及可溯源记录 | 燃料身份；牌号；化石或生物比例；发动机类型；负荷或工时；实测燃烧量；C/N/S；分物种实测排放或供应方因子；控制；单位 | 采用真实发动机测试或监测证据，或保留单位与负荷条件的适用供应方因子，乘实测活动量。保留不确定性，缺失物种不是零。本柴油行为纯石油来源，混合燃料须拆分身份及碳来源。 | kg | 每批次或表计周期；储存按停留时长重复测量 | 声明有代表性的运行期，覆盖季节性含水率变化，不虚构最低时长 | 一个声明场址及配对批次或路线 | 每参考流 | 校准；原始记录；配对库存；采样代表性；不确定性；供应方及测试边界 |
| `cp_volume_link` | preparation | 木片量值及供应过程链接兼容性 | 供应方参考文件及匹配测量 | 供应方或背景过程标识及版本；参考数量A_provider及单位；实体或堆积定义；定义定位；树种或组成；含水率及基准；粒径；装填或沉降；rho_ws；V_s；V_b；k；测量批次及校准；不确定性；供应方、接收及交付厂门；已纳入损失及储存；证据定位；兼容性裁定及缺失证据 | 读取供应方参考交换文件，表述含糊时取得可溯源供应方声明。与接收及输出实体体积定义独立比较。在同批次测量装填或密度，或采用具有树种、含水率、粒径、装填及状态适用性记录的代表性可溯源数据。配对交付及损失厂门，避免重复计量；含水率或树种变化须有证据的物料状态核对。数据库次级属性系数及FAO平均表不证明匹配换算。缺失供应方定义、换算或边界证据时记录pending，不建立已完成链接，并将对应数据集标为不完整。 | m3; kg | 每个拟链接供应过程及批次；状态或供应过程改变时复核 | 声明实测批次或有记录的代表性覆盖 | 供应方厂门、接收、验收输出及每个拟链接背景接口 | 每参考流 | 供应方参考定位；校准的匹配测量；代表性；不确定性；无重复损失核对；明确pending缺口 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_solid | all inventory rows | x_i=X_i/V_s；X_i为配对生产批次的归属交换数量，V_s为其验收实体体积交付。参考木片输出等于1 m3。按总交换量除以配对V_s之和，不平均批次比值。 | X_i; V_s; cp_reference | 每参考流交换 |  |
| wood_moisture | cp_material; cp_reference | w=(m_w-m_d)/m_w；u=(m_w-m_d)/m_d；m_d=m_w*(1-w)=m_w/(1+u)。实测百分数先转为分数。 | m_w; m_d; cp_material | 干湿木材及水质量 | usda-wood-handbook-2021; fao-units |
| solid_bulk | cp_reference | V_s=m_w/rho_ws；k=V_s/V_b。使用同状态实测实体颗粒密度并保留不确定性；密度不得包含颗粒间空隙。 | m_w; rho_ws; V_b; cp_reference | 区分实体及堆积体积 | usda-wood-handbook-2021; fao-units |
| particle_intervals | pm25; pmcoarse; pmover10 | PMfine=PM2.5；PMcoarse=PM10-PM2.5；PMlarge=PMtotal-PM10。测量须覆盖相同来源、时间、气溶胶方法及控制。负差值表示证据不一致，不能将嵌套总量或捕集木材质量加入排放区间。 | cp_dust | 三个不重叠大气颗粒量 | epa-sawmill-pte-2014 |
| storage_balance | cp_storage | 期初干库存+干进料=期末干库存+干交付+干实体剔除料+离开的干木粉尘+生物干损失+未解释剩余项。水单独核对，包括雨水或抑尘投入、径流、保留水分及蒸气。比较相同含水率或体积状态；仅体积沉降不等于木材损失。 | cp_material; cp_storage; cp_waste; cp_dust | 未分配木材及水平衡 | usda-wood-handbook-2021 |
| carbon_balance | cp_storage; cp_engine | 生物与化石碳账分开。实测干质量乘实测碳比例得到物料碳；核对产品、库存、残渣、溶解或悬浮碳及气体碳。CO2中C=12/44乘CO2质量；CH4中C=12/16乘CH4质量。缺失气体分配或碳去向须明确保留，不强行用CO2闭合或给予碳储存信用。 | cp_storage; cp_engine | 实物碳闭合及明确缺口 |  |
| joint_burdens | joint wood step | a_i=d_i/sum(d_j)；B_i=a_i*B_joint+B_exclusive,i。d_j为同一工序实测烘干可用输出，仅在负荷账应用份额，不缩放实物交换。 | cp_material; joint-step data | 独立已分配负荷账 | corrim-northern-lumber-2025; usda-wood-handbook-2021 |
| provider_volume_link | incoming_chips; chips | 对匹配供应方厂门或状态，V_b,provider=V_s,link/k_provider，其中k_provider=V_s,provider/V_b,provider为有证据且适用于该供应方状态的实体或堆积装填换算。对于堆积m3背景，n_provider=V_b,provider/A_provider；对于实体m3背景，n_provider=V_s,link/A_provider。A_provider为供应方按其声明体积口径记录的参考数量。V_s,link为配对供应方厂门的实物数量，不能自动等同于接收或最终交付体积；各厂门间真实损失及库存独立核对。只有含水率、树种、装填及损失边界兼容性成立后才应用这些关系，任何状态调整均须有自身测量证据。定义、k_provider或必需调整未知时，兼容性为pending，不产生数值需求、通用回退或已完成链接。 | cp_volume_link; cp_reference; cp_material; cp_storage | 已核实兼容性的供应方参考需求，或明确pending |  |
| complete_period_normalization | 所有清单行 | 每项既有工期、批次或批量数量规则及关联采集协议均采用同声明产品、等级、路线、配置、场址和参考状态的单一有记录完整统计期汇总组。验收批次措辞仅限定分母；原生单位原始分子记录保留全部可归属启动、停机、整批失败或零产出批次、废品、在制品和返工。返工参考产品仅在最终验收时计一次。各可归属交换在匹配汇总组内求和，仅除一次同组严格正值、采用声明分母单位的验收参考产品数量，再按声明参考数量缩放。不得平均批次比率、丢弃失败批次、混合无关产品/时期或改变分子原生单位。整个匹配汇总组无验收产出时保留未归一化绝对清单并要求审查，不生成归一化结果或虚构产量。库存/退回及实物交接账与负荷分配独立保留；分配不得删去已经发生的失败/返工活动。 | 全部关联原始采集协议；验收参考产品汇总组；库存及返工链接 | 各原生交换单位每声明参考数量；零产出汇总组保持未归一化 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| identity_quality | all inventory rows | 一项真实流及匹配的公开身份、属性、单位和介质；未决UUID留空。身份不证明上游供应过程代表性。 | 流直读及供应过程核验 |
| measurement_quality | cp_reference; cp_material | 同状态实体或堆积体积及干湿质量；树皮或杂质分开；校准秤和代表性采样 | cp_reference; cp_material |
| balance_quality | preparation | 阶段实物木材、水、碳账在声明测量不确定性内闭合，未解释损失保留披露；分配前内部转移两端等量。 | cp_recirculation; cp_storage |
| representativeness | preparation | 覆盖路线、树种、季节、实际控制、发动机及供应过程；区域调查或PTE因子不外推为全球默认 | cp_energy; cp_dust; cp_engine |
| completeness | preparation | 不存在的设备可据实标为不适用；未知排放、UUID或供应过程为缺口，不是零。额外真实化学品、物料或排放须有独立原子行及检索。 | 路线核查及签认平衡记录 |
| quantity_background_compatibility | incoming_chips; chips; 木片链接 | 分别核实身份、PCR实体体积量值及供应方参考兼容性。实体或堆积、树种或含水率或装填、换算及损失厂门均须有cp_volume_link证据。已知身份加通用Volume/m3不能解决这些量值。证据缺失保持pending并阻止已完成链接或作为完整数据集使用。 | cp_reference; cp_material; cp_volume_link; 供应方定义及测量定位 |

## 9. 校验规则

校验恰有一项1 m3验收成品木片输出，且各协议与清单行使用配对批次分母。核实全部必需限定信息、上游来源负荷、交付厂门及供应过程覆盖。独立比较实体或堆积体积及干湿质量，不接受无证据装填系数或密度。负荷分配前核查各回料配对、树皮销售或废物拆分、细料销售或回用拆分、库存及储存平衡。核查各真实共同工序份额之和为一，且未缩放实物输出。

对incoming_chips、chips及每个木片供应方或背景链接，校验三个独立状态：已知产品或属性单位身份、实测PCR实体体积量值、供应方参考兼容性。检查供应方参考数量或定义及其证据定位，再独立核实实体或堆积、含水率或树种或装填、同状态换算及已纳入运输、搬运或储存损失。背景按堆积m3表达时，通过provider_volume_link中有证据的供应方状态k_provider及A_provider表达需求，不直接复制实体m3数量。不用数据库次级属性系数或FAO平均值替代匹配测量证据。供应方体积定义或适用换算、状态、损失证据缺失时，量值或背景兼容性保持pending，对应数据集不完整；保留已核实木片身份，但阻止已完成链接及完整数据集使用。Builder检查通过不解除此pending状态。

核查基本流质量、物种、介质及化石或生物来源，三个不重叠颗粒区间，捕集与排放粉尘，以及水蒸发与干物质损失。LCI保留生物CO2。缺失或不匹配身份、未解释平衡、无证据数量、无物种或介质行的污水直排，以及前景热干燥或锅炉均使对应数据集不完整；作为完整数据集使用前须解决。Builder计量检查验证声明分母关系，不建立科学批准、实测得率、供应过程有效性或全部平衡方程的成立。

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_production_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 作为声明散装洁净木片厂门供应，用于具有独立下游单位的物料或燃料建模 |
| excluded_use | 压粒或板材制造、交付有用热、残余物零负荷主张、避免燃料、无限定功能比较 |
| required_metadata | 参考限定信息、来源厂门、供应过程、路线、实物平衡、分配账、采集覆盖及单位 |
| required_quality_disclosure | 未决流、供应过程或物种；量值或背景兼容性pending及缺失供应方定义或换算证据；缺失损失、不确定性、季节覆盖、来源限定、厂门排除项 |
| update_trigger | 树种、来源工序分配、进料处理、制备或干燥、含水率或装填、储存或控制、运输或流身份改变 |

## 11. 数据源

| 来源标识 | 类型 | 参考资料 | 用途 |
| --- | --- | --- | --- |
| `usda-wood-handbook-2021` | handbook | 美国农业部林产品实验室（2021），Wood handbook—wood as an engineering material，FPL-GTR-282，第4章4-1、4-11页，第13章13-1至13-2页。 [GovInfo](https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf) | 含水率及密度状态定义、重量法采集，不采用默认密度 |
| `corrim-northern-lumber-2025` | literature | CORRIM，Life Cycle Assessment of Softwood Lumber Production—Northern Region，2025年7月22日修订，§§3.2.4、3.2.6，第14、16页。 [CORRIM](https://corrim.org/wp-content/uploads/2025/07/LCA-Report-Northern-Lumber-Report-07222025.pdf) | 北部美国2023锯木调查案例的实物核算及环境负荷分配；不采用全球得率、树种密度或份额 |
| `epa-sawmill-pte-2014` | official_guidance | EPA第10区，Particulate Matter Potential to Emit Emission Factors for Activities at Sawmills, Excluding Boilers, Located in Pacific Northwest Indian Country（2014年5月8日），封面及活动表和注释。 [EPA](https://www.epa.gov/sites/default/files/2016-09/documents/spmpteef_memo.pdf) | 仅机械搬运或控制范围及嵌套可过滤颗粒定义；监管最大PTE不是真实LCA，排除锅炉 |
| `fao-units` | official_guidance | FAO，Unified Bioenergy Terminology（UBET），§5.1.1及§5.1.3。 [FAO](https://www.fao.org/4/j4504e/j4504e08.htm) | 干湿含水率基准及实体或堆积计量概念；不采用表中通用换算值或燃料性能 |
| `fao-residue-preparation` | official_guidance | FAO，Energy conservation in the mechanical forest industries，§6.2及§6.4。 [FAO](https://www.fao.org/4/T0269E/t0269e08.htm) | 来源及残余物区分、制备筛分储存路线；不采用行业数字得率、燃料信用或燃烧因子 |
