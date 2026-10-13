---
pcr_id: pcr.constructions-and-construction-services.constructions.airfield-pavement-and-associated-works-delivery
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 机场铺面及相关工程施工交付

## 1. 范围与适用性

本规则针对实际场址已交付的机场跑道、滑行道、机坪及相关非建筑构筑物实体，而非施工服务、航空器运营或一包建材。包含实际柔性沥青、刚性水泥混凝土、粒料／草皮及混合铺面路线；不把任一路线作为默认。每份数据包须绑定完整声明工程及其中用途与结构一致的验收面积，记录排水、标线、刻槽、灯光及其他相关工程的实际配置。航站楼、机库等建筑物以及独立设备制造不属于该实体。

施工前景从记录的初始场地与供应产品交付开始，包含实际清场／初始拆除、土方、各层、安装、试验和返工，止于实体验收交付。材料生产、进场运输、现场施工、实际维护／更新、运营、最终拆除与去向分别识别；交付后各阶段不纳入本施工数据集。仅凭现场清单不得声称完整从摇篮到交付或全寿命覆盖。FAA 工程项目用于工序证据，只有项目实际适用条件与规范满足时方可引用相应验收依据，本文不赋予监管批准。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.airfield-pavement-and-associated-works-delivery |
| classification_refs | CPC 3.0 53213 |
| covered_products | 机场跑道、滑行道、机坪及相关非建筑机场构筑物；实际铺装／未铺装路线与交付范围 |
| excluded_products | 机场建筑物；独立建材／设备制造；一般施工服务；运营期维护服务；航空器与机场运输运营 |
| representative_product | 具有实测面积、实际用途和已签署交付状态的机场铺面工程 |
| production_route | 实际土方与压实、路基与各层、对应表面建造、规定相关工程、检查修正与验收 |
| market_state | 在场址已建成、具声明交付状态的固定土木实体 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供用于声明航空器地面起降、滑行或停放的实体机场铺面及归属相关工程 |
| How much | 1 m2 已验收水平平面面积；声明完整工程面积、用途分区、长度宽度、每层厚度与相关工程数量 |
| How well | 实际结构、路基、荷载／航空器用途要求、表面、排水及安装配置；保留设计与批次检测、平整度、层厚、压实或强度、接缝及实际适用验收规范 |
| How long or cycle | 一次实际施工至交付周期；不假定使用寿命。服务期比较须另有可核实的使用、维护和更新情景 |
| reference_flow_link | reference_airfield |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 已交付机场铺面及其相关非建筑工程 |
| 参考流属性 | 面积 `93a60a56-a3c8-19da-a746-0800200c9a66` |
| 参考单位组 | 面积单位组 `93a60a57-a3c8-18da-a746-0800200c9a66` |
| 参考单位 | m2 |
| 必需限定信息 | 场址／工程包；跑道／滑行道／机坪用途；实际铺面路线；验收面积测量法及长度宽度；层厚与材料状态；路基与气候；设计航空器／荷载要求；相关工程配置及分配；实际检测与交付完整性；施工日期；上游与运输门槛；遗漏和后续阶段 |

参考量包括完整工程相应份额，并不把一平方米孤立面层作为产品。面积不同用途／结构的区域须先分别采集，不以重复计算交叉口扩增产出。完整项目总量与实际面积均须保留；不能用造价、假定质量或名义面积换算。必需限定信息缺失即不具备可比性。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_area | reference product | 面积 `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | 使用 cp_handover 测量实际验收平面面积；所有清单按每声明的参考流采集。用相应工程总量除以同范围验收面积，保留原始总量、归属依据与除数；不重复叠加各层面积。 |
| energy_units | cn_lv; cn_mv | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留公开净热值属性及能量单位组。现场计量 kWh 按单位组 3.6 MJ/kWh 换算；不得把该属性改成质量。 |
| material_state | fresh_concrete; topsoil; supplied_water; washout_liquid | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 记录实际物理状态与测量体积。体积转质量须有相同材料状态与批次实测密度；挖方、松散与压实土方不可无依据等量。 |
| asset_area | 关联plywood_form、pp_geotextile及grass_sod的辅助安装或部署几何 | 面积 `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | 安装或部署几何、厚度、组成及单位面积质量为辅助实测记录，不替代原生清单分子。外购物织物和草皮按实际可归属消耗面积计入，包括损耗，并核对收货、退回及库存。可复用模板制造按cp_formwork_assets采用模板存量面积乘守恒制造份额，不把重复部署面积作为新制造。不得仅因名称相似把公开质量属性改为面积。 |
| transport_units | road_freight | 质量*距离 `118f2a40-50ec-457c-aa60-9bc6b6af9931` | t*km | 保留公开质量*距离属性，其组参考 kg*km，1 t*km = 1000 kg*km；按实际货量和路程计算，不假定距离或载荷。 |

| 字段 | 值 |
| --- | --- |
| mass_unit_group | `93a60a57-a4c8-11da-a746-0800200c9a66` |
| volume_unit_group | `93a60a57-a3c8-12da-a746-0800200c9a66` |
| energy_unit_group | `93a60a57-a3c8-11da-a746-0800200c9a66` |
| item_unit_group | `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| transport_unit_group | `3620148f-c5db-48ce-9065-a10092089aca` |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际施工开始前场地、保留设施状态与外部供应产品交付门槛 |
| starting_condition_role | foreground_start |
| product_classification_scope | 机场铺面及相关非建筑实体；用途及交付范围显式声明 |
| recursive_input_rule | 保留的同类别旧铺面作为具状态和负担记录的既有资产输入；不自动递归复制其全工程历史 |
| upstream_dataset_requirement | 各实际供应产品链接匹配状态、技术、地域与单位的制造数据；现场拌合须独立展开实际配料、加热、燃料及释放，不与成品制造重复 |
| disclosure | 上游制造覆盖、实际运输与现场工程、初始拆除、保留资产、各相关设施、外包、检测、遗漏及验收后阶段 |

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_delivery | dataset | 逐工序记录实际土方、各层、排水、标线／刻槽、灯光与检验交付。列出的材料不是通用完整配方；实际其他材料、包装、润滑油、植被投入、辅助及临时工程逐一增加原子行，并说明未发生工序。 | faa-airport-construction-2018 |
| boundary_consumed_inputs | 全部选定或真实尝试施工路线的外购消耗或永久供货产品投入；排除可复用资产制造 | 投入量包含全部真实可归属消耗，含安装前损坏、拒收供货、切割或施用损耗及交付前替换。这是对局部“安装、施用或使用”措辞的显式例外：该措辞识别目标路线和配置，不将分子限为成功安装量。按原生单位核对投入=可归属总收货+期初库存−经核实退回或转移−期末可复用库存；安装验收量及真实废物分别保留。精确保留供货身份、状态和总成边界，不重复内含组分或可复用资产制造。  本库存消耗公式不适用于cp_assets/cp_formwork_assets管理的可复用设备或胶合板模板制造份额。这些行仍按allocation_assets/asset_share采用有依据累计使用制造归属，即使实体退回、转移或留在可复用期末库存亦如此；实物库存流转另记，不能抵消本次使用份额。 | |
| boundary_stages | dataset | 材料制造和运输分别链接，现场铺筑不代表材料生产。运营电力、航空器、交付后维护／更换、最终拆除和去向不纳入；若另建这些阶段，采用真实情景并显式重新声明边界。 | fhwa-pavement-lca-2016 |
| boundary_environment | utilities; waste | 计入实际施工公用工程及有依据直接释放，区别燃料供应与燃烧、外购水与资源取用、抽排转移与排放、废液与沉淀固体。噪声保留实际设备、持续时间、位置和测量，不虚构默认声能基础流；任何有据排放都按确切物质和介质另列。 | epa-construction-dust-1995; epa-concrete-washout-2012 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| site | 场地测量、清场与土方 | required | 实际场址起始条件及全部归属工程；按实际需要挖方、整平、填筑、压实 | foreground_production | 每声明的参考流 |
| base | 路基、底基层与基层施工 | required | 核对实际铺面设计；仅计安装各层与规定处理路线 | foreground_production | 每声明的参考流 |
| flexible | 柔性沥青铺面摊铺与碾压 | conditional | 实际沥青层或沥青稳定基层 | foreground_production | 每声明的参考流 |
| rigid | 刚性混凝土铺筑、接缝与养护 | conditional | 实际水泥混凝土层或混凝土相关构筑物 | foreground_production | 每声明的参考流 |
| unpaved | 粒料／草皮表面建造 | conditional | 实际未铺装粒料／草皮路线；粒料在基层计入，不重复 | foreground_production | 每声明的参考流 |
| drainage | 排水及相关土建工程 | conditional | 实际排水、涵管、出水口或附属非建筑构筑物 | foreground_production | 每声明的参考流 |
| finish | 标线、刻槽与机场灯光安装 | conditional | 实际规定标线、刻槽或安装系统；不作普遍必需要求 | foreground_production | 每声明的参考流 |
| utilities | 现场机械、施工公用工程与直接释放 | required | 所有实际承包方，包括抽排、压实、铺筑、锯切、养护、抑尘与调试 | foreground_production | 每声明的参考流 |
| transport | 进场及施工废物运输 | required | 交付前全部实际供应与废物外运路线 | foreground_production | 每声明的参考流 |
| waste | 施工废物分类与去向 | required | 验收前全部实际产生废物流；不存在须有记录 | foreground_production | 每声明的参考流 |
| handover | 检测、修正与实体验收 | required | 已验收实际面积与声明相关工程；计入检测和拒收工程修正 | foreground_production | 每声明的参考流 |

### 过程：场地测量、清场与土方（`site`）

该工序按实际设计与现场记录适用；设备、用水、燃料、返工及废物的机时／任务记录归入本工序并与公用工程／废物表核对，不重复计入。遗漏的真实交换须单独补充，不能以空 UUID 或过程名称表示完整清单。

#### 输入

##### 产品流

###### 外购矿质填土（`mineral_fill`）

仅计实际外购工程填土；保留组成、污染状况和压实／松散工程量。场内挖方回填是内部转移，不是新增外购物料。

- 选定流：外购矿质填土
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用 cp_site 采集该行实际交换数量，按同范围实测验收面积归一化；保留 kg 与原始工程总量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_site`
- 来源：`faa-airport-construction-2018`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：路基、底基层与基层施工（`base`）

该工序按实际设计与现场记录适用；设备、用水、燃料、返工及废物的机时／任务记录归入本工序并与公用工程／废物表核对，不重复计入。遗漏的真实交换须单独补充，不能以空 UUID 或过程名称表示完整清单。

#### 输入

##### 产品流

###### 铺面基层碎石集料（`crushed_base`）

实际设计碎石层，记录级配、层厚、含水率与压实。圆砾或土壤修复身份不能自动作为本材料。

- 选定流：铺面基层碎石集料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用 cp_base 采集该行实际交换数量，按同范围实测验收面积归一化；保留 kg 与原始工程总量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_base`
- 来源：`faa-airport-construction-2018`

###### 水泥，硅酸盐水泥（`portland_cement`）

仅计实际用于土／基层稳定或现场拌合的硅酸盐水泥。不规定胶结料比例；外购混凝土内已有的水泥不得再次投入。

- 选定流：水泥，硅酸盐水泥 `3c9e98a5-0a1e-4a18-9545-1475a87fcab7`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用 cp_base 采集该行实际交换数量，按同范围实测验收面积归一化；保留 kg 与原始工程总量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_base`
- 来源：`faa-airport-construction-2018`

###### 路基稳定用熟石灰（`hydrated_lime`）

仅适用于场址实际采用的熟石灰处理；区别生石灰、窑灰，按称重施工记录取得剂量。

- 选定流：路基稳定用熟石灰
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用 cp_base 采集该行实际交换数量，按同范围实测验收面积归一化；保留 kg 与原始工程总量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_base`
- 来源：`faa-airport-construction-2018`

###### 聚丙烯土工隔离布（`pp_geotextile`）

实际为声明路线消耗的外供聚丙烯隔离织物，包括安装前损坏、拒收及切割物料；保留准确施工功能、供货状态、等级及单位面积质量。供入或消耗面积与安装覆盖范围分别记录。

- 选定流：聚丙烯土工隔离布
- 流属性/单位：面积 `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- 数量规则：使用 cp_base 采集该行实际交换数量，按同范围实测验收面积归一化；保留 m2 与原始工程总量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_base`
- 来源：`faa-airport-construction-2018`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：柔性沥青铺面摊铺与碾压（`flexible`）

该工序按实际设计与现场记录适用；设备、用水、燃料、返工及废物的机时／任务记录归入本工序并与公用工程／废物表核对，不重复计入。遗漏的真实交换须单独补充，不能以空 UUID 或过程名称表示完整清单。

#### 输入

##### 产品流

###### 沥青混合料（`asphalt_mix`）

仅计实际供应的沥青混合料，记录胶结料类型、生产配合比、温度、再生含量与层位。摊铺、碾压和修正分别计量；制造归上游，除非明确单列现场拌合站。

- 选定流：沥青混合料 `ad29a865-2fd6-41da-99d2-9669b9c7984d`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用 cp_flexible 采集该行实际交换数量，按同范围实测验收面积归一化；保留 kg 与原始工程总量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_flexible`
- 来源：`faa-airport-construction-2018`

###### 铺面粘层用乳化沥青（`asphalt_emulsion`）

仅计实际粘层乳化沥青；称量供应配方，记录残留胶结料浓度、水分与供应方。不得把整份乳液作为纯沥青。

- 选定流：铺面粘层用乳化沥青
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用 cp_flexible 采集该行实际交换数量，按同范围实测验收面积归一化；保留 kg 与原始工程总量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_flexible`
- 来源：`faa-airport-construction-2018`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：刚性混凝土铺筑、接缝与养护（`rigid`）

该工序按实际设计与现场记录适用；设备、用水、燃料、返工及废物的机时／任务记录归入本工序并与公用工程／废物表核对，不重复计入。遗漏的真实交换须单独补充，不能以空 UUID 或过程名称表示完整清单。

#### 输入

##### 产品流

###### 摊铺前交付的新拌水泥混凝土（`fresh_concrete`）

仅计刚性铺面或贫混凝土层实际新拌水泥混凝土；使用批次票据、交付体积、换算所需实测密度与拒收批次。硬化现浇混凝土或泛称胶结料不能证明新拌状态。

- 选定流：摊铺前交付的新拌水泥混凝土
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：使用 cp_rigid 采集该行实际交换数量，按同范围实测验收面积归一化；保留 m3 与原始工程总量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_rigid`
- 来源：`faa-airport-construction-2018`

###### 钢制铺面接缝传力杆（`steel_dowel`）

实际为声明路线消耗的外供传力杆，包括安装前损坏、拒收后的替换；保留钢级、涂层、几何、消耗件数及供应商质量，安装验收件数另存。真实使用的钢筋和拉杆仍须按实际另列行。

- 选定流：钢制铺面接缝传力杆
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用 cp_rigid 采集该行实际交换数量，按同范围实测验收面积归一化；保留 kg 与原始工程总量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_rigid`
- 来源：`faa-airport-construction-2018`

###### 聚硫，密封化合物（`polysulfide_seal`）

仅在实际接缝设计采用该聚硫配方时计入；记录缝尺寸、配方及施用质量。其他化学体系另立身份，不得替代。

- 选定流：聚硫，密封化合物 `e533bf45-bf2b-47ee-88ff-fc67ba2cac05`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用 cp_rigid 采集该行实际交换数量，按同范围实测验收面积归一化；保留 kg 与原始工程总量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_rigid`
- 来源：`faa-airport-construction-2018`

###### 石蜡乳液混凝土养护剂（`wax_curing`）

仅当施用该成膜养护配方时计入；保留浓度、施用记录和容器残留。湿养护水在现场用水计入，不规定必然养护配方。

- 选定流：石蜡乳液混凝土养护剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用 cp_rigid 采集该行实际交换数量，按同范围实测验收面积归一化；保留 kg 与原始工程总量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_rigid`
- 来源：`faa-airport-construction-2018`

###### 混凝土模板用胶合板（`plywood_form`）

仅计实际可重复使用胶合板模板。记录板厚、组成、部署面积与复用台账；通过 cp_formwork_assets 跨使用累计一次制造负担，不按每次浇筑重置。

- 选定流：混凝土模板用胶合板
- 流属性/单位：面积 `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- 数量规则：以cp_rigid部署及存量记录和有据累计制造份额为基础，由cp_formwork_assets采集可归属模板制造面积，再按实测验收工程面积归一化，保留m2与原始记录。部署面积本身不等于新模板制造量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_formwork_assets`
- 来源：`faa-airport-construction-2018`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：粒料／草皮表面建造（`unpaved`）

该工序按实际设计与现场记录适用；设备、用水、燃料、返工及废物的机时／任务记录归入本工序并与公用工程／废物表核对，不重复计入。遗漏的真实交换须单独补充，不能以空 UUID 或过程名称表示完整清单。

#### 输入

##### 产品流

###### 草皮铺面用筛分表土（`topsoil`）

仅适用于实际草皮路线或相关平整地带植被工程；记录土质、层厚、来源和实测铺设体积。

- 选定流：草皮铺面用筛分表土
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：使用 cp_unpaved 采集该行实际交换数量，按同范围实测验收面积归一化；保留 m3 与原始工程总量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_unpaved`
- 来源：`faa-airport-construction-2018`

###### 带根系土的栽培草皮（`grass_sod`）

仅计实际外购草皮。记录物种组成、根系土厚度、安装面积和成坪验收。播种建植须另列实际种子及施用养分的具体物理清单。

- 选定流：带根系土的栽培草皮
- 流属性/单位：面积 `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- 数量规则：使用 cp_unpaved 采集该行实际交换数量，按同范围实测验收面积归一化；保留 m2 与原始工程总量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_unpaved`
- 来源：`faa-airport-construction-2018`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：排水及相关土建工程（`drainage`）

该工序按实际设计与现场记录适用；设备、用水、燃料、返工及废物的机时／任务记录归入本工序并与公用工程／废物表核对，不重复计入。遗漏的真实交换须单独补充，不能以空 UUID 或过程名称表示完整清单。

#### 输入

##### 产品流

###### 预制水泥混凝土雨水排水管（`concrete_pipe`）

实际为声明路线消耗的混凝土排水管，含安装前损坏、拒收及替换；保留直径、长度、等级、配筋及供应商实测质量，安装验收量另存。实际垫层、端墙及排出口工程分别作为产品与过程记录。

- 选定流：预制水泥混凝土雨水排水管
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用 cp_drainage 采集该行实际交换数量，按同范围实测验收面积归一化；保留 kg 与原始工程总量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_drainage`
- 来源：`faa-airport-construction-2018`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：标线、刻槽与机场灯光安装（`finish`）

该工序按实际设计与现场记录适用；设备、用水、燃料、返工及废物的机时／任务记录归入本工序并与公用工程／废物表核对，不重复计入。遗漏的真实交换须单独补充，不能以空 UUID 或过程名称表示完整清单。

#### 输入

##### 产品流

###### 白色水性丙烯酸铺面标线漆（`white_paint`）

仅计实际白色水性丙烯酸标线漆。称量供应配方，记录固含量与标线；验收前返工重涂计入，运营期重涂不计入。

- 选定流：白色水性丙烯酸铺面标线漆
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用 cp_finish 采集该行实际交换数量，按同范围实测验收面积归一化；保留 kg 与原始工程总量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_finish`
- 来源：`faa-airport-construction-2018`

###### 黄色水性丙烯酸铺面标线漆（`yellow_paint`）

仅计实际黄色水性丙烯酸标线漆；保留颜色、配方、使用质量与实际布局。

- 选定流：黄色水性丙烯酸铺面标线漆
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用 cp_finish 采集该行实际交换数量，按同范围实测验收面积归一化；保留 kg 与原始工程总量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_finish`
- 来源：`faa-airport-construction-2018`

###### 铺面标线用玻璃反光珠（`glass_beads`）

声明标线路线实际消耗的玻璃珠，包括可归属施用损耗及损坏、拒收物料；与涂料分开称量，保留粒级及供应方处理，消耗量与成功施用量分开。

- 选定流：铺面标线用玻璃反光珠
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用 cp_finish 采集该行实际交换数量，按同范围实测验收面积归一化；保留 kg 与原始工程总量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_finish`
- 来源：`faa-airport-construction-2018`

###### 完整嵌入式机场 LED 灯具（`airfield_light`）

声明路线实际消耗的本型号及功能完整灯具，包括安装或验收前失效、拒收后的替换；消耗件数与安装验收件数分别记录。边灯、隔离变压器、调光器、套管及基础等真实组件须按实际供货边界各列产品行，不用整个灯光系统集合行。

- 选定流：完整嵌入式机场 LED 灯具
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：使用 cp_finish 采集该行实际交换数量，按同范围实测验收面积归一化；保留 item 与原始工程总量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_finish`
- 来源：`faa-airport-construction-2018`

###### 绝缘铜芯机场灯光电缆（`copper_cable`）

声明路线实际消耗的铜电缆，含验收前切割、损坏及拒收、替换的长度；保留导体截面、绝缘、电压等级、消耗长度及实测质量，安装长度另存。供方每米质量须有真实电缆特定核验证据。

- 选定流：绝缘铜芯机场灯光电缆
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用 cp_finish 采集该行实际交换数量，按同范围实测验收面积归一化；保留 kg 与原始工程总量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_finish`
- 来源：`faa-airport-construction-2018`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：现场机械、施工公用工程与直接释放（`utilities`）

该工序按实际设计与现场记录适用；设备、用水、燃料、返工及废物的机时／任务记录归入本工序并与公用工程／废物表核对，不重复计入。遗漏的真实交换须单独补充，不能以空 UUID 或过程名称表示完整清单。

#### 输入

##### 产品流

###### 完整液压挖掘机（`excavator_asset`）

仅计实际使用资产的制造贡献。保留资产身份／配置及原始制造数据；cp_assets 按有依据累计使用提供守恒工程份额。部署机时不是消耗一台新整机。不得每项目重置完整制造负担。

- 选定流：完整液压挖掘机
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：使用 cp_assets 的实际资产制造份额记录归一化至每声明的参考流，保留物品数量属性，不将部署机时视为新机数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`

###### 完整自行式压路机（`roller_asset`）

仅计实际使用资产的制造贡献。保留资产身份／配置及原始制造数据；cp_assets 按有依据累计使用提供守恒工程份额。部署机时不是消耗一台新整机。不得每项目重置完整制造负担。

- 选定流：完整自行式压路机
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：使用 cp_assets 的实际资产制造份额记录归一化至每声明的参考流，保留物品数量属性，不将部署机时视为新机数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`

###### 完整沥青摊铺机（`paver_asset`）

仅计实际使用资产的制造贡献。保留资产身份／配置及原始制造数据；cp_assets 按有依据累计使用提供守恒工程份额。部署机时不是消耗一台新整机。不得每项目重置完整制造负担。

- 选定流：完整沥青摊铺机
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：使用 cp_assets 的实际资产制造份额记录归一化至每声明的参考流，保留物品数量属性，不将部署机时视为新机数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`

###### 完整水泥混凝土泵（`pump_asset`）

仅计实际使用资产的制造贡献。保留资产身份／配置及原始制造数据；cp_assets 按有依据累计使用提供守恒工程份额。部署机时不是消耗一台新整机。不得每项目重置完整制造负担。

- 选定流：完整水泥混凝土泵
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：使用 cp_assets 的实际资产制造份额记录归一化至每声明的参考流，保留物品数量属性，不将部署机时视为新机数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`

###### 柴油（`site_diesel`）

挖掘机、平地机、压路机、摊铺机、泵或发电机实际消耗的供应柴油；记录设备／任务、批次牌号、化石比例、密度及净热值。这是燃料供应身份，不是已含燃烧的服务。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用 cp_utilities 采集该行实际交换数量，按同范围实测验收面积归一化；保留 kg 与原始工程总量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

###### 交流电（`cn_lv`）

仅限中国电网低于 1 kV 的现场消费；供应方、电压、场址地域和计量日期必须匹配。其他地域或电压另列核实身份。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：使用 cp_utilities 采集该行实际交换数量，按同范围实测验收面积归一化；保留 MJ 与原始工程总量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

###### 交流电（`cn_mv`）

仅限中国电网 1–35 kV 的现场消费；不得在低压行重复同一计量供电，也不得重复计入自产电。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：使用 cp_utilities 采集该行实际交换数量，按同范围实测验收面积归一化；保留 MJ 与原始工程总量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

###### 送达施工现场的处理后自来水（`supplied_water`）

分任务计量实际用于压实、抑尘、锯切、清洗或养护的外购水。不规定密度，不用香港供应替代未限定场址。

- 选定流：送达施工现场的处理后自来水
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：使用 cp_utilities 采集该行实际交换数量，按同范围实测验收面积归一化；保留 m3 与原始工程总量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

##### 废物流

##### 基本流

###### 河水（`river_water`）

仅计现场直接从河流取水，作为资源输入记录位置、日期与实际体积。外购水为技术圈输入，降水抽排与回流水另行核对。

- 选定流：河水 `805a7346-1664-4483-afe3-4b224be5e361`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：使用 cp_utilities 采集该行实际交换数量，按同范围实测验收面积归一化；保留 m3 与原始工程总量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

###### 地下水（`ground_water`）

仅计直接地下水抽取，记录水源与体积；区分施工用水取用和降水抽排转移，记录去向与回流体积。不声称无依据净耗水或稀缺性结果。

- 选定流：地下水 `4f462198-40cd-4184-8733-86648a20dc3f`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：使用 cp_utilities 采集该行实际交换数量，按同范围实测验收面积归一化；保留 m3 与原始工程总量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 二氧化碳（化石源）（`fossil_co2`）

仅计现场燃烧实际化石 CO2，采用实测或燃料碳平衡，排至空气、子介质未指定、即时释放。排除生物源碳和上游排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用 cp_utilities 采集该行实际交换数量，按同范围实测验收面积归一化；保留 kg 与原始工程总量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

###### 一氧化碳（化石源）（`fossil_co`）

仅计有依据的实际化石 CO，排至空气、子介质未指定；实测或设备特定因子须匹配燃料和控制设施。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用 cp_utilities 采集该行实际交换数量，按同范围实测验收面积归一化；保留 kg 与原始工程总量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

###### 一氧化氮（`nitric_oxide`）

仅计实测或有效单独物种分解的 NO，排至空气、子介质未指定。按 NO2 当量表达的总 NOx 不得直接当作 NO。

- 选定流：一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用 cp_utilities 采集该行实际交换数量，按同范围实测验收面积归一化；保留 kg 与原始工程总量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

###### 二氧化氮（`nitrogen_dioxide`）

仅计有依据的单独 NO2 排放，排至空气、子介质未指定；区别 NO、亚硝酸盐和 N2O，不规定 NOx 默认分配。

- 选定流：二氧化氮 `08a91e70-3ddc-11dd-96e5-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用 cp_utilities 采集该行实际交换数量，按同范围实测验收面积归一化；保留 kg 与原始工程总量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

###### 颗粒物，粒径未特指（`dust_unspecified`）

仅计已量化现场扬尘，排至空气，粒径及子介质未特指。保留活动、含水率、控制与不确定性。同一源的分级颗粒已单列时不得再叠加总量。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用 cp_utilities 采集该行实际交换数量，按同范围实测验收面积归一化；保留 kg 与原始工程总量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

###### 颗粒物 (PM2.5 - PM10)（`coarse_pm`）

仅计单独量化的 2.5–10 微米粒径段，排至空气、子介质未指定；排除 PM2.5，不与 PM10 总量或未分级扬尘重叠。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用 cp_utilities 采集该行实际交换数量，按同范围实测验收面积归一化；保留 kg 与原始工程总量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

###### 颗粒物 (PM10)（`pm10_total`）

仅计实测或有效量化的 PM10 总量，排至空气、子介质未指定。同一排放源总量与单独实测粒径段只计一次；TSP 与 PM2.5 不自动等于 PM10。

- 选定流：颗粒物 (PM10) `08a91e70-3ddc-11dd-91be-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用 cp_utilities 采集该行实际交换数量，按同范围实测验收面积归一化；保留 kg 与原始工程总量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

### 过程：进场及施工废物运输（`transport`）

该工序按实际设计与现场记录适用；设备、用水、燃料、返工及废物的机时／任务记录归入本工序并与公用工程／废物表核对，不重复计入。遗漏的真实交换须单独补充，不能以空 UUID 或过程名称表示完整清单。

#### 输入

##### 产品流

###### 货物运输（`road_freight`）

实际公路交付和废物外运各段，记录货物质量、距离、车辆／载荷与空返分配。本服务不含现场机械作业；未链接服务时使用独立实测燃料，不得同一路段重复计入。

- 选定流：货物运输 `4f1a3f30-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量*距离 `118f2a40-50ec-457c-aa60-9bc6b6af9931` / t*km
- 数量规则：使用 cp_transport 采集该行实际交换数量，按同范围实测验收面积归一化；保留 t*km 与原始工程总量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_transport`
- 来源：`fhwa-pavement-lca-2016`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：施工废物分类与去向（`waste`）

该工序按实际设计与现场记录适用；设备、用水、燃料、返工及废物的机时／任务记录归入本工序并与公用工程／废物表核对，不重复计入。遗漏的真实交换须单独补充，不能以空 UUID 或过程名称表示完整清单。

#### 输入

##### 产品流

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 外运处置的未污染开挖矿质土（`soil_export`）

仅计作为废物外运的土；保留实测质量、水分、污染检测、处置去向和是否转为复用。

- 选定流：外运处置的未污染开挖矿质土
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用 cp_waste 采集该行实际交换数量，按同范围实测验收面积归一化；保留 kg 与原始工程总量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`

###### 拆除沥青铺面铣刨废料（`asphalt_waste`）

仅计本施工周期清场或修正时实际拆除、铣刨的已铺筑沥青铺面，记录已铺筑状态、来源及回收路线。未铺筑的拒收或剩余外供混合料不是铺面铣刨废料：完整清单必须按cp_waste另行记录其真实未铺筑状态、实测质量和接收方，保留可归属上游制造及运输负担。经核实退回及内部复用分别核对，不改名为铣刨废料。交付后拆除不计入。

- 选定流：拆除沥青铺面铣刨废料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用 cp_waste 采集该行实际交换数量，按同范围实测验收面积归一化；保留 kg 与原始工程总量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`

###### 硬化水泥混凝土施工废料（`concrete_waste`）

仅计实际分类的硬化水泥混凝土残料或废弃验收芯样；湿清洗废液另列。

- 选定流：硬化水泥混凝土施工废料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用 cp_waste 采集该行实际交换数量，按同范围实测验收面积归一化；保留 kg 与原始工程总量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`

###### 水泥混凝土设备清洗浆液（`washout_liquid`）

仅计外送处理的液体／浆液，记录实测体积、固含量与去向。不得表示为水资源或假定排至土壤／水。沉淀固体另行记录。

- 选定流：水泥混凝土设备清洗浆液
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：使用 cp_waste 采集该行实际交换数量，按同范围实测验收面积归一化；保留 m3 与原始工程总量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：`epa-concrete-washout-2012`

##### 基本流

### 过程：检测、修正与实体验收（`handover`）

该工序按实际设计与现场记录适用；设备、用水、燃料、返工及废物的机时／任务记录归入本工序并与公用工程／废物表核对，不重复计入。遗漏的真实交换须单独补充，不能以空 UUID 或过程名称表示完整清单。

#### 输入

##### 产品流

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已交付机场铺面及其相关非建筑工程（`reference_airfield`）

一平方米已验收平面面积，绑定完整声明的跑道、滑行道、机坪或机场工程包；包括归属的下部各层与规定相关工程，不是单独面层材料片。

- 选定流：已交付机场铺面及其相关非建筑工程
- 流属性/单位：面积 `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- 数量规则：1 m2
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_handover`
- 来源：`faa-airport-construction-2018`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_project | all inventory rows | 先用分表、称重、机时、实际施工区和批次记录划分机场各工程，直接归属优先于分配。共享活动只用有测量支持的因果物理驱动量分配；保留所有受益工程及分母，总份额等于一。面积仅用于同用途／同结构工程内的参考归一化，不能默认分摊异质工程。 |  |
| allocation_assets | plywood_form; utilities | 使用 cp_assets / cp_formwork_assets 记录每件设备和复用构件制造负担、各项目／期间实际活动和有依据累计服务量；同一资产跨项目、期间和重复使用的累计制造份额不得大于一。未知寿命／累计活动须保留审查与完整性缺口，不按每项目重置。 |  |
| allocation_recovery | waste | 施工废物、再利用旧铺面和外送铣刨料不自动产生抵扣。记录实际处置／回收门槛、质量状态与接收方；任何替代收益或回收分配须另有已说明方法、来源及敏感性，不能同时获得避免制造和零负担双重收益。 | fhwa-pavement-lca-2016 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_site | site | 每行具体交换 | foreground_records | 前后测量；土层；挖填体积；外购质量；污染与去向 | 用实测断面、校准地磅和土方日志；保留松散／压实状态及换算实测密度 | 各行单位 kg、m3、m2、MJ、item、t*km | 逐交付、批次、机时、计量周期与验收事件 | 实际开工至交付全期间，明确未计量间隔 | 声明工程与全部外包归属范围 | 每声明的参考流 | 校准、原始票据、竣工测量、批次检测、返工、归属与不确定性 |
| cp_base | base | 每行具体交换 | foreground_records | 层面积／厚度；级配；每种胶结料领退；处理、含水率、碾压与压实试验 | 核对实测交付、安装几何与场址试验；记录实际处理，不假定剂量 | 各行单位 kg、m3、m2、MJ、item、t*km | 逐交付、批次、机时、计量周期与验收事件 | 实际开工至交付全期间，明确未计量间隔 | 声明工程与全部外包归属范围 | 每声明的参考流 | 校准、原始票据、竣工测量、批次检测、返工、归属与不确定性 |
| cp_flexible | flexible | 每行具体交换 | foreground_records | 混合料批次与配合比；交付／退回／拒收质量；温度；铺设面积、厚度；碾压和摊铺机时；芯样／平整度 | 保留批次票据、称重、试验段及批次检测／修正记录；区别上游拌合站与现场活动 | 各行单位 kg、m3、m2、MJ、item、t*km | 逐交付、批次、机时、计量周期与验收事件 | 实际开工至交付全期间，明确未计量间隔 | 声明工程与全部外包归属范围 | 每声明的参考流 | 校准、原始票据、竣工测量、批次检测、返工、归属与不确定性 |
| cp_rigid | rigid | 每行具体交换 | foreground_records | 混凝土批次；新拌体积及密度；配方；接缝；传力杆；养护；强度／厚度试验；拒收批次 | 用拌合交付票据、实测几何与质量、设备／任务计量、接缝养护日志及验收试验 | 各行单位 kg、m3、m2、MJ、item、t*km | 逐交付、批次、机时、计量周期与验收事件 | 实际开工至交付全期间，明确未计量间隔 | 声明工程与全部外包归属范围 | 每声明的参考流 | 校准、原始票据、竣工测量、批次检测、返工、归属与不确定性 |
| cp_unpaved | unpaved | 每行具体交换 | foreground_records | 表面路线；表土体积；草皮组成、厚度与面积；建植试验 | 测量已验收粒料／草皮面积，保留实际种植交付与验收前灌溉／建植工程 | 各行单位 kg、m3、m2、MJ、item、t*km | 逐交付、批次、机时、计量周期与验收事件 | 实际开工至交付全期间，明确未计量间隔 | 声明工程与全部外包归属范围 | 每声明的参考流 | 校准、原始票据、竣工测量、批次检测、返工、归属与不确定性 |
| cp_drainage | drainage | 每行具体交换 | foreground_records | 管等级、直径、长度、质量；垫层；挖方；端墙；水力路线与试验 | 核对竣工排水图、供应方称重及包含出水口的安装／检查日志 | 各行单位 kg、m3、m2、MJ、item、t*km | 逐交付、批次、机时、计量周期与验收事件 | 实际开工至交付全期间，明确未计量间隔 | 声明工程与全部外包归属范围 | 每声明的参考流 | 校准、原始票据、竣工测量、批次检测、返工、归属与不确定性 |
| cp_finish | finish | 每行具体交换 | foreground_records | 标线颜色／配方；实际漆／玻璃珠质量；槽长度／深度；灯具型号／数量；电缆质量／长度；调试 | 保留校准领退记录、竣工标线／刻槽、设备计量、安装表与试验 | 各行单位 kg、m3、m2、MJ、item、t*km | 逐交付、批次、机时、计量周期与验收事件 | 实际开工至交付全期间，明确未计量间隔 | 声明工程与全部外包归属范围 | 每声明的参考流 | 校准、原始票据、竣工测量、批次检测、返工、归属与不确定性 |
| cp_utilities | utilities | 每行具体交换 | foreground_records | 燃料库存／收货；设备／任务机时；电表／地域／电压；供应／取用水、抽排与回流；排放物种、介质与控制 | 按工程包分表计量；用库存与承包方记录核对耗油；保留批次密度／碳／净热值、经验证源特定排放方法及不确定性 | 各行单位 kg、m3、m2、MJ、item、t*km | 逐交付、批次、机时、计量周期与验收事件 | 实际开工至交付全期间，明确未计量间隔 | 声明工程与全部外包归属范围 | 每声明的参考流 | 校准、原始票据、竣工测量、批次检测、返工、归属与不确定性 |
| cp_transport | transport | 每行具体交换 | foreground_records | 各段货物 kg、实际 km；车辆／载荷；空返；服务门槛 | 用运单、称重、路线与车辆日志；将实际 kg 换算吨以计 t*km；区分项目运送与背景已含部分 | 各行单位 kg、m3、m2、MJ、item、t*km | 逐交付、批次、机时、计量周期与验收事件 | 实际开工至交付全期间，明确未计量间隔 | 声明工程与全部外包归属范围 | 每声明的参考流 | 校准、原始票据、竣工测量、批次检测、返工、归属与不确定性 |
| cp_waste | waste | 每行具体交换 | foreground_records | 流身份／状态；质量／体积；水／固体；处理、回收或处置去向；转移日期；沥青已铺筑或未铺筑状态；分别记录未铺筑拒收料与铺面铣刨料；经核实退回及复用 | 用分类容器、校准称重／计量、分析与接收方票据；记录围控、沉淀与实际水路 | 各行单位 kg、m3、m2、MJ、item、t*km | 逐交付、批次、机时、计量周期与验收事件 | 实际开工至交付全期间，明确未计量间隔 | 声明工程与全部外包归属范围 | 每声明的参考流 | 校准、原始票据、竣工测量、批次检测、返工、归属与不确定性 |
| cp_handover | handover | 每行具体交换 | foreground_records | 项目／工程包边界；验收平面面积 m2；跑道／滑行道／机坪长度宽度；各层；能力／荷载使用要求；相关工程；试验与签署日期 | 测量竣工已验收水平表面多边形，交叉处不重叠；将批次验收、几何、实际功能、表面状态及相关构筑物追溯到签署交付 | 各行单位 kg、m3、m2、MJ、item、t*km | 逐交付、批次、机时、计量周期与验收事件 | 实际开工至交付全期间，明确未计量间隔 | 声明工程与全部外包归属范围 | 每声明的参考流 | 校准、原始票据、竣工测量、批次检测、返工、归属与不确定性 |
| cp_assets | utilities | 设备制造份额 | asset_ledger | 资产标识；原始制造负担；各项目活动；已用份额；累计服务量依据；停用／转移 | 读取制造数据、租赁与设备／模板部署台账，跨项目核对累计份额；未知保持缺口；保留真实工序ID utilities，并与cp_formwork_assets共享同一资产台账，防止两协议重复分配份额 | 无量纲份额及源数据单位 | 每次部署及周期结束 | 所有已发生使用期间及有依据服务量 | 同一资产所有工程 | 每声明的参考流 | 可追溯资产记录；独立份额核对 |
| cp_formwork_assets | rigid | 可复用胶合板模板制造份额 | asset_ledger | 资产标识；原始制造负担；各项目活动；已用份额；累计服务量依据；停用／转移；模板存量面积；各浇筑部署面积；模板厚度和组成；关联cp_rigid | 结合cp_rigid读取模板制造、部署及存量台账；区分真实模板存量面积与重复部署面积，将有据累计使用份额用于存量制造面积，并与cp_assets核对同一资产台账。保留真实工序ID rigid；未知寿命或存量保持缺口，不设默认份额。 | 无量纲份额及源数据单位 | 每次部署及周期结束 | 所有已发生使用期间及有依据服务量 | 同一资产所有工程 | 每声明的参考流 | 可追溯资产记录；独立份额核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_area | all inventory rows | 将同用途／同结构工程中归属的每种交换总量除以 cp_handover 记录的实际验收平面面积 m2，形成每声明的参考流数量；产出固定为 1 m2。保留原始总量及实测面积，不用层面积或造价代替。 | cp_handover; project exchange records | 每声明的参考流交换量 |  |
| preserve_units | all inventory rows | 按明确单位组换算同量纲单位；质量与体积换算仅用同批次实际密度，电力 kWh 转 MJ 乘 3.6。保留原计量与不确定性。 | cp_utilities; cp_transport; supplier records | 行单位数量 |  |
| direct_emissions | utilities | 由实际测量或适用于具体设备／燃料／控制的经验证方法计算各物种释放量；保留方法原始单位与归属。化石碳平衡使用实际燃料碳与燃烧证据；不引入默认因子或总 NOx 默认拆分，扬尘总量与分级不能叠加。 | cp_utilities; site measurements; applicable method evidence | 各具体物种 kg | epa-construction-dust-1995 |
| asset_share | plywood_form; utilities | 把有依据累计活动中的本工程实际份额用于制造负担，再按相同工程面积归一化。使用累计台账证明所有已分配份额不大于一；未知分母保持审查，不产生数值。 | cp_assets / cp_formwork_assets; cp_handover | 每声明的参考流归属制造负担 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_scope | dataset | 逐用途、层结构及验收范围保留实测面积和完整配置，不把不同荷载／工况的每平方米视为等价。 | cp_handover; faa-airport-construction-2018 |
| quality_records | all inventory rows | 保留实际施工全期间记录、计量校准、拒收返工与外包，核对材料净收货、安装及废物。缺失记录注明并阻止完整数据宣称，不以默认损耗补齐。 | cp_site; cp_base; cp_flexible; cp_rigid; cp_waste |
| quality_environment | utilities; waste | 水路、颗粒分级、排放介质和化石来源须有证据；AP-42 旧总体因子不作为机场现场默认量，不从城市监测浓度直接推出项目排放质量。 | cp_utilities; epa-construction-dust-1995; epa-concrete-washout-2012 |
| quality_gaps | dataset | 披露未匹配 UUID、未覆盖上游、未计量间隔、设备制造份额缺口、方法适用性与科学审查状态。 | cp_assets / cp_formwork_assets; supplier records |

## 9. 校验规则

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_reference | reference_airfield | 检查 1 m2 产出、Area 属性、实测面积、工程完整性与限定信息一致，所有行与协议采用同一工程分母。无面积／归属证据或存在重叠计量则数据不完整。 | un-cpc3-2025 |
| validate_route | dataset | 按实际设计逐层核对土方、路基、粒料、沥青／混凝土／草皮和规定相关工程，核实每项适用／不适用与返工。任何空 UUID 不代表交换未发生，不得用泛称集合补齐。 | faa-airport-construction-2018 |
| validate_identities | all inventory rows | 核对每个公开身份的物质、状态、路线、地域／电压、环境介质与主属性；没有支持的质量／面积／体积关系保持空身份。两语言 row_id、rule_id、UUID 与官方中文名称必须一致。 |  |
| validate_coverage | dataset | 核对现场燃烧、运输、上游制造与处理数据无重叠；汇总水与废物实际去向、精确排放物种及设备累计份额。缺口不得宣称通过完整环境清单验证；现场交付不构成全寿命或科学／合规批准。 | fhwa-pavement-lca-2016; epa-concrete-washout-2012 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 明确用途与结构机场工程施工交付的每平方米清单；完整上游链接后按实际声明门槛使用；功能、荷载、结构、气候及边界一致才比较 |
| excluded_use | 全寿命；航空器运行；一般施工服务；每平方米自动功能等价；默认寿命／配比／质量；监管合规批准 |
| required_metadata | 全部参考限定信息；实测工程总面积与分区；结构各层；交付相关设施；逐阶段原始总量、归属与单位；签署验收；来源门槛与更新日期 |
| required_quality_disclosure | 缺失身份、数据与上游；实际测量／计算方法；排放适用性；未计量间隔；复用资产累计份额；所有后续阶段遗漏 |
| update_trigger | 用途、几何、结构、荷载要求、场址、交付配置、供应、施工实测或证据／身份变化 |

## 11. 数据源

| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025, p. 279. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 53213 实体范围，含滑行道、机坪及相关非建筑构筑物；仅分类范围 |
| faa-airport-construction-2018 | official_guidance | FAA AC 150/5370-10H, Standard Specifications for Construction of Airports, 21 December 2018, updated errata 19 August 2020. https://www.faa.gov/documentLibrary/media/Advisory_Circular/150-5370-10H.pdf | P-152 pp.103–116 土方；P-154 pp.121–128 底基层；P-209 pp.173–182 碎石基层；P-217 pp.207–214 粒料／草皮；P-401 pp.263–293 沥青；P-501 pp.347–390 混凝土；P-605 p.499起 接缝；P-620 p.521起 标线；P-621 p.537起 刻槽；D-701 p.575起 排水；L-125 p.713起 灯光；T-901 p.613起 播种，T-904 p.627起 铺草皮，T-905 p.633起 表土。美国施工定性与验收证据；不移用数值、设计配比、荷载门槛或合规要求 |
| fhwa-pavement-lca-2016 | official_guidance | FHWA-HIF-16-014, Pavement Life-Cycle Assessment Framework, July 2016, §1.2 p.1-4; §3.2.3; Chapter 4. https://rosap.ntl.bts.gov/view/dot/38470/dot_38470_DS1.pdf | 道路框架的材料／施工／运营／维护／寿命终止阶段区别与边界披露；不导入道路车辆影响或机场寿命数值 |
| epa-construction-dust-1995 | official_guidance | US EPA AP-42 §13.2.3 Heavy Construction Operations, January 1995, pp.13.2.3-1–2. https://www.epa.gov/sites/default/files/2020-10/documents/13.2.3_heavy_construction_operations.pdf | 历史施工扬尘机制与现场条件需求，仅定性；不采用旧总体 TSP 因子，不推导 PM 分级 |
| epa-concrete-washout-2012 | official_guidance | US EPA, Stormwater Best Management Practice: Concrete Washout, EPA 833-F-11-006, February 2012, pp.1–2. https://www.epa.gov/sites/default/files/2015-11/documents/concretewashout_0.pdf | 混凝土设备清洗液、沉淀固体和围控／实际水去向区别；不假定水体／土壤排放或默认 pH、浓度 |
