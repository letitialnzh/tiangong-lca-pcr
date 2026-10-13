---
schema_version: 1
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.wood-marquetry-and-inlaid-wood-cases-for-jewellery-or-cutlery-and-similar-articles-of-w-26cf8014
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 单块阔叶实木雕刻室内装饰品（虫胶刷涂）

## 1. 范围与适用性

本方法覆盖由一块未处理窑干非针叶木料制造的新室内装饰雕像或独立摆件，经机械雕刻、干砂光，再以干燥精制虫胶与未变性乙醇调配、刷涂并在环境条件下干燥。以 1 kg 作为声明生产单位，不证明等质量摆件具有相同审美服务；比较须附功能描述、设计及验收条件。涂层用于室内外观与可清洁性，不宣称定量寿命或食品接触认证。[usda-wood-handbook-2021; usda-finishing-1999; gsa-shellac-2017]

CPC3.0 31913 混合了镶嵌表面、保护性储存箱盒和装饰物，功能限定及工艺不同。本方法仅覆盖雕刻装饰子集。排除细工镶嵌、首饰餐具盒、餐具、玩具、画框、家具、建材、胶拼块材与层压材、人造板、竹软木、防腐木、模塑木复合物、镀金、颜料、填料、油、蜡、PU/UV/硝基涂层及喷涂。排除厂内窑干、燃烧、热氧化及溶剂回收。切削损失不自动成为废物；涂层、胶黏剂或处理污染会改变接收要求。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.wood-marquetry-and-inlaid-wood-cases-for-jewellery-or-cutlery-and-similar-articles-of-w-26cf8014 |
| classification_refs | CPC 3.0 31913; narrower; 范围及已接受决定见 `classifications/mappings/cpc-3.0-to-pcr.yaml` 和其引用的 ADR |
| covered_products | 单块阔叶实木雕刻、虫胶刷涂的室内装饰雕像与摆件 |
| excluded_products | 细工镶嵌；储存箱盒；功能性家具、餐具、玩具；胶合或处理木料；其他饰面路线 |
| representative_product | 窑干单块阔叶实木装饰雕像，干砂光及透明虫胶刷涂 |
| production_route | 交付窑干未处理阔叶实木 → 雕刻 → 干砂光 → 虫胶乙醇调配 → 刷涂 → 环境干燥 → 检验 → 包装 |
| market_state | 工厂交付门口验收的室内装饰成品，包装单独计量 |



## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 具有指定雕刻设计与可清洁透明涂层的室内装饰展示 |
| How much | 1 kg 验收装饰成品净质量，含保留涂层，不含运输包装 |
| How well | 声明并通过设计尺寸、植物学树种、含水率、工艺质量、干膜验收及室内暴露条件 |
| How long or cycle | 一次工厂生产及交付周期；无固定使用寿命或替换等效关系 |
| reference_flow_link | finished_ornament |



| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 木制镶嵌装饰品及嵌木细工，木制首饰盒、餐具盒及类似物品箱盒，木制的小雕像及其他木制装饰物 `0c60a652-810a-4789-ab0c-ee9babbb3fd7` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 装饰功能与设计；室内暴露；单块结构；植物学树种及来源；未处理窑干供应；进料与成品干基含水率；虫胶牌号及含蜡状态；溶剂纯度、来源、水分；刷涂与环境干燥路线；干膜及残留溶剂验收；验收产品净质量；场址时段；低压计量表；残余物接收方与状态；包装规格 |



在数据集元数据、过程说明、参考流备注或产品描述中声明全部必需限定信息。广义流 UUID 不替代这些实物限定，也不证明背景数据集兼容。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 用校准秤称量干燥至规格的验收装饰成品，排除包装。净产出包含保留虫胶、水分及残留溶剂，另存各组分数量；按同树种、设计和饰面批次汇总。 |
| moisture_basis | dry_wood; finished_ornament; offcut_sale; offcut_waste; dust_waste; reject_waste | Mass | kg | 记录干基含水率 u = 水质量 / 全干木质量。未涂层木料的全干木质量 = 湿木质量 / (1 + u)，使用实测树种批次含水率。涂层成品及废品先扣除实测涂层与溶剂质量，再进行木料水分换算。挥发性提取物可能使烘干含水率测量偏高，须评估实际树种与不确定性，不将涂层整件作为木样烘干。[usda-wood-handbook-2021] |
| solvent_basis | ethanol; ethanol_air; shellac_waste; solvent_waste | Mass | kg | 交付液体质量、乙醇物种质量、虫胶干固体和水分别记录。链接前核实供方参考基准；不得替代为通用醇、变性剂或混淆湿干基。体积转质量须实际温度及实测或供方核实的溶液密度，不用数据库次级系数。 |
| electrical_basis | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 电力记录采用以 MJ 为参考的能量属性，不表示燃料燃烧热。按 1 kWh = 3.6 MJ 将表计电量转换；匹配 <1 kV 用户侧交付，避免变压损失重复。 |
| particle_basis | pm25; pmcoarse; pmover10 | Mass | kg | 以同来源、时段、方法及实际释放边界报告互斥粒级。拒绝负差值或不兼容总量；粒径分布未知时保持未决，不将缺测粒级置零。 |



## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 未处理窑干非针叶锯材毛坯及分别外购干虫胶、乙醇、耗材交付到厂 |
| starting_condition_role | foreground_entry |
| product_classification_scope | CPC3.0 31913 的雕刻装饰子集，不作为全分类方法 |
| recursive_input_rule | 外购成品摆件或已涂层毛坯不属于本制造路线，不改称原生干锯材。同批内部返工留在同一单元，不增加参考输出。 |
| upstream_dataset_requirement | 将木料林业、锯木及干燥、树脂精制、乙醇制造、电力及各耗材链接至兼容供方或背景数据集，包括进厂运输及废物处理。前景起点不构成负荷截断。 |
| disclosure | 声明场址时段、树种及供应处理、表计、涂层配方、包装、释放子介质、库存变化、残余物去向、分配及供方数量兼容未决。 |



| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_upstream | all inventory rows | 上游生产与实际交付运输各纳入一次；上游生物与化石碳排放保留为不同 LCI 交换。不得因温室气体统计口径删除生物 CO2。缺少交付背景或废物接收链接属于数据不完整。 | corrim-northern-lumber-2025 |
| boundary_stages | ornament_manufacture | 将雕刻、砂光、调配、刷涂、环境干燥、检验与包装聚合为一个前景单元，保留独立阶段计量。不重复列中间成品交换；若后续拆单元，内部链接两端实物量相同。 | usda-wood-handbook-2021; epa-coating-eiip-2001 |
| boundary_losses | ornament_manufacture | 核算废品返工、除尘设备、逸散粉尘及溶剂水释放。厂内照明通风电力实测并归属；可重复使用的资本设备与刷具制造在所声明前景外，披露排除并审查重要性。不默认阈值以省略已检化学物或重要废物。 | epa-coating-eiip-2001 |
| boundary_route | ornament_manufacture | 核实刷涂及环境干燥，不含燃烧、干燥窑、热治理或溶剂回收。引入这些工序、变性剂、涂层后砂光或其他饰面时，须补原子清单并审查方法，不默用本路线。 | gsa-shellac-2017; usda-finishing-1999 |



## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| ornament_manufacture | 雕刻至成品交付 | required | 声明的单块阔叶实木虫胶刷涂路线 | foreground_production | 1 kg finished_ornament |



### 过程：雕刻、砂光、虫胶饰面及包装（`ornament_manufacture`）

独立记录包括收货、粗精雕刻、砂光除尘、树脂溶剂调配、刷涂、环境干燥、检验及包装交付。不规定配方、得率、粉尘系数、溶剂残留、涂层厚度或平均能耗。条件行须有实测量或有据的不存在裁定；空 UUID 不允许省略。

#### 输入

##### 产品流

###### 外购未处理窑干阔叶实木锯材毛坯 (`dry_wood`)

外购未处理窑干阔叶实木锯材毛坯。记录植物学树种、尺寸、含水率、来源和供方。通用锯材身份不提供树种特定背景或损失系数。 选定窑干硬木锯材身份仅适用于实际到场毛坯厚度大于 6 mm 的情形；实测并声明该尺寸、树种、处理与含水状态及锯木厂端与到厂交付边界。更薄进料须另审流身份及适用性，不虚构尺寸。座架示例不证明本装饰品供应方或到厂后台匹配。

- 选定流：硬木锯材 `43103a96-43df-4f35-ad02-728237b3f815`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实测批次交换量 / 验收装饰成品批次净质量；采用 cp_materials 记录。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_materials`
- 来源：`usda-wood-handbook-2021`

###### 用户侧低压（<1 kV）计量表处外购电网电力 (`electricity`)

用户侧低压（<1 kV）计量表处外购电网电力。包括雕刻、除尘风机、砂光、调配、通风和包装，保留各阶段独立分表记录。仅在电压与交付接口相符时使用该 UUID，并链接实际地区和年度背景。 实际供应方、供给地区、年份、电网组合和损失边界仍须核实；此低压实物定位符不证明中国或全球通用后台。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：实测批次交换量 / 验收装饰成品批次净质量；采用 cp_energy 记录。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_energy`
- 来源：

###### 一项纸基砂光磨料耗材 (`abrasive`)

一项纸基砂光磨料耗材。核实实际磨料矿物、背基、粘结剂、粒度和供方；计量整个耗材质量，不用散装氧化铝替代。通用砂纸身份仅适用于实际纸基结构，排除布基砂带。

- 选定流：砂纸 `ba6c99d4-60d9-46a5-9ef5-ca3d0b877d57`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实测批次交换量 / 验收装饰成品批次净质量；采用 cp_materials 记录。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_materials`
- 来源：`usda-wood-handbook-2021`

###### 干燥精制紫胶虫分泌的虫胶树脂，厂内与单列乙醇调配 (`shellac`)

干燥精制紫胶虫分泌的虫胶树脂，厂内与单列乙醇调配。要求供方牌号、含蜡状态、干固体及杂质声明。粗树胶渗出物、中国树漆和预混清漆不是该交换。

- 选定流：干燥精制虫胶树脂片
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实测批次交换量 / 验收装饰成品批次净质量；采用 cp_finish 记录。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_finish`
- 来源：`usda-finishing-1999`; `gsa-shellac-2017`

###### 未变性乙醇用于虫胶调配及刷具清洗，不有意加入其他溶剂 (`ethanol`)

未变性乙醇用于虫胶调配及刷具清洗，不有意加入其他溶剂。记录交付纯度和水分，核对供方数量基准。化学身份不限定发酵或化石生产路线。交付质量与乙醇物种质量分开；供方混入物需新增原子行并审查范围。

- 选定流：乙醇 `df7bb021-85c3-4d72-ad46-29e83afe64e2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实测批次交换量 / 验收装饰成品批次净质量；采用 cp_finish 记录。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_finish`
- 来源：`gsa-shellac-2017`; `epa-coating-eiip-2001`

###### 外购成型瓦楞运输箱，声明实际纤维配比和供方 (`carton`)

外购成型瓦楞运输箱，声明实际纤维配比和供方。称量发出箱体并扣除退回，明确核算任何废箱；不把数据库纤维配方当作现场默认。 此 UUID 的来源纤维组成明确为原生纤维 16.6%、再生纤维 83.4%。仅在供方证据确认实际箱体纤维配比、结构及交付/参考基准兼容后条件性使用。上述数值限定 UUID 适用性，不作为工厂配方或假定实测组成。实际配比不同或未知时，供应方/后台链接保持未决，使用链接前另审适用身份。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实测批次交换量 / 验收装饰成品批次净质量；采用 cp_pack 记录。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_pack`
- 来源：

###### 仅在实际使用时纳入聚乙烯保护薄膜 (`film`)

仅在实际使用时纳入聚乙烯保护薄膜。确认 PE 聚合物、薄膜形态、厚度和供方。该薄膜身份不用于其他聚合物或泡沫。 链接后台前核实实际供应 PE 薄膜等级及供应方/参考状态；实物聚合物身份不解决来源分类债务。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实测批次交换量 / 验收装饰成品批次净质量；采用 cp_pack 记录。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_pack`
- 来源：

#### 输出

##### 产品流

###### 恰好一个最终参考输出：虫胶干燥、包装后验收的单块阔叶实木雕刻装饰品，质量不含包装 (`finished_ornament`)

恰好一个最终参考输出：虫胶干燥、包装后验收的单块阔叶实木雕刻装饰品，质量不含包装。广义产品记录明确包含木制雕像，数据集限定信息将其收窄到本方法；中间输出不得再使用此参考 UUID。

- 选定流：木制镶嵌装饰品及嵌木细工，木制首饰盒、餐具盒及类似物品箱盒，木制的小雕像及其他木制装饰物 `0c60a652-810a-4789-ab0c-ee9babbb3fd7`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：1 千克
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_product`
- 来源：`usda-wood-handbook-2021`

###### 仅纳入单独分选、具有记录的用途和买方验收的清洁锯切或雕刻边角料 (`offcut_sale`)

仅纳入单独分选、具有记录的用途和买方验收的清洁锯切或雕刻边角料。先记录实际实物输出，再作负荷分配。同一块料不得同时进入 offcut_waste；散木片或粉尘若销售，需各自身份。 木质材料是广义前景产品流定位符，此处仅限一种单独分选的实际清洁、未施胶、无涂层、未处理实木阔叶雕刻边角料等级，声明树种、尺寸形态、含水率、实际用途、买方/供应方交付边界和实测质量。本身不证明废物转产品、已约定销售功能、原生产品等效、后台负荷或替代信用。涂层废品、未分选木片及粉尘不属于本行。

- 选定流：木质材料 `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实测批次交换量 / 验收装饰成品批次净质量；采用 cp_residues 记录。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_residues`
- 来源：`corrim-northern-lumber-2025`

##### 废物流

###### 虫胶涂布前产生、无胶黏污染的未团聚未处理阔叶木雕刻边角料，交给确定接收方 (`offcut_waste`)

虫胶涂布前产生、无胶黏污染的未团聚未处理阔叶木雕刻边角料，交给确定接收方。确认实际清洁状态及接收条件。不得将本行用于涂层不合格品。

- 选定流：木材边角料 `acc22294-8e77-4784-988f-2499be3c60eb`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实测批次交换量 / 验收装饰成品批次净质量；采用 cp_residues 记录。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_residues`
- 来源：`corrim-northern-lumber-2025`

###### 饰面前从料仓和滤器移出的清洁锯切、雕刻、砂光细木屑 (`dust_waste`)

饰面前从料仓和滤器移出的清洁锯切、雕刻、砂光细木屑。记录包含打磨与研磨，只用于未处理木屑焚烧或回收接收路线。收集物与逸散空气颗粒、留在废砂纸上的粉尘分别称量。

- 选定流：木屑废物 `e1a44d20-d968-4d64-bd7c-253a1441ab35`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实测批次交换量 / 验收装饰成品批次净质量；采用 cp_residues 记录。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_residues`
- 来源：`usda-wood-handbook-2021`

###### 废弃虫胶涂层木质装饰品，声明涂层质量、化学组成和接收方 (`reject_waste`)

废弃虫胶涂层木质装饰品，声明涂层质量、化学组成和接收方。广义废木料定义包含耐用木制品，但不建立处理方式或清洁燃料适用性。不得与清洁边角料合并，不默认替代原生木材。 仅用于实际未团聚、废弃的完整雕刻木件或碎件，声明保留虫胶/乙醇/水组成及污染，独立核实接收方/供应方接受条件与处理兼容性。来源原生生产标签不识别处理技术，也不使涂层污染消失。

- 选定流：废木料 `2ef9d37a-2fbf-42f6-8ccf-5d6677d5cfd8`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实测批次交换量 / 验收装饰成品批次净质量；采用 cp_residues 记录。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_residues`
- 来源：`usda-finishing-1999`

###### 废弃整张砂纸，声明附着木粉尘和矿物、粘结剂组成 (`spent_abrasive`)

废弃整张砂纸，声明附着木粉尘和矿物、粘结剂组成。实物平衡中附着木料仅核算一次，不再计为散 dust_waste。链接实际接收方，不默认清洁废纸回收。 广义废研磨料废物流身份仅与此实际干砂光整项纸基耗材共同使用，声明纸基、磨料矿物、粘结剂、附着清洁阔叶木粉尘、水分及污染组成，核实接收方/供应方接受条件。不假定金属喷砂介质、清洁废纸、布基砂带、清洁废纸回收或处理负荷。

- 选定流：废研磨料 `f0a52dd6-0027-4033-9068-f293526f958f`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实测批次交换量 / 验收装饰成品批次净质量；采用 cp_residues 记录。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_residues`
- 来源：

###### 从独立涂料容器废弃的未用虫胶涂层溶液 (`shellac_waste`)

从独立涂料容器废弃的未用虫胶涂层溶液。测量湿质量及虫胶、乙醇、水组成。同一液体不得再报刷洗废溶剂；留存乙醇不计为空气排放。 广义废涂料残渣身份仅条件性适用于此调配/涂布路线单独收集的实际湿态剩余精制虫胶/乙醇/水涂层，并须由接收方/供应方确认该液态废物状态。记录组成、产生质量、储存及接受的场外处理；不因广义名称推断颜料、过喷、污泥、滤器、通用涂料配方或危废分类。它不识别独立的乙醇刷洗废液，也不证明处理后台兼容。

- 选定流：废涂料残渣 `877e5a04-76c8-4c5b-ac4c-062f5beeb2bd`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实测批次交换量 / 验收装饰成品批次净质量；采用 cp_finish 记录。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_finish`
- 来源：`epa-coating-eiip-2001`

###### 独立容器收集的可重复使用涂刷刷具乙醇刷洗废溶剂，计量虫胶污染及水分 (`solvent_waste`)

独立容器收集的可重复使用涂刷刷具乙醇刷洗废溶剂，计量虫胶污染及水分。纳入收集与场外处理，不默认厂内溶剂焚烧、蒸馏或回收单元。

- 选定流：废乙醇刷洗溶剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实测批次交换量 / 验收装饰成品批次净质量；采用 cp_finish 记录。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_finish`
- 来源：`epa-coating-eiip-2001`

##### 基本流

###### 排放至室外空气、子介质未特指的 PM2.5 木粉尘粒级 (`pm25`)

排放至室外空气、子介质未特指的 PM2.5 木粉尘粒级。包括除尘后实测出口及无组织排放，不包括滤器收集物或工人室内暴露。未分析不得把矿物磨料份额归为木料。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实测批次交换量 / 验收装饰成品批次净质量；采用 cp_air 记录。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_air`
- 来源：`epa-sawmill-pte-2014`

###### 室外空气中 PM2.5 与 PM10 之间的木颗粒粒级 (`pmcoarse`)

室外空气中 PM2.5 与 PM10 之间的木颗粒粒级。仅从兼容的成对 PM10、PM2.5 观测求差；若只测总颗粒物，保持粒径分配未决，不虚构比例。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实测批次交换量 / 验收装饰成品批次净质量；采用 cp_air 记录。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_air`
- 来源：`epa-sawmill-pte-2014`

###### 室外空气中大于 PM10 的木颗粒粒级 (`pmover10`)

室外空气中大于 PM10 的木颗粒粒级。仅从兼容的总颗粒物与 PM10 观测求差。本行与另两个粒级互斥；不得再将 PM10 或总颗粒物作为额外交换累加。

- 选定流：颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实测批次交换量 / 验收装饰成品批次净质量；采用 cp_air 记录。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_air`
- 来源：`epa-sawmill-pte-2014`

###### 虫胶调配、刷涂、干燥及刷洗中跨厂界排放至室外空气、子介质未特指的乙醇 CAS64-17-5 (`ethanol_air`)

虫胶调配、刷涂、干燥及刷洗中跨厂界排放至室外空气、子介质未特指的乙醇 CAS64-17-5。物种质量平衡包括库存、成品残留溶剂及单独移出的废液。同一质量的室内暴露不是额外 LCI 排放。

- 选定流：乙醇 `08a91e70-3ddc-11dd-9349-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实测批次交换量 / 验收装饰成品批次净质量；采用 cp_finish 记录。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_finish`
- 来源：`epa-coating-eiip-2001`

###### 木料环境平衡及涂层干燥期间向室外空气净释放的水蒸气 (`water_air`)

木料环境平衡及涂层干燥期间向室外空气净释放的水蒸气。计量木料水分变化及供给乙醇、树脂中的水、残液和成品中的水。净蒸发为负时需另列吸水交换，不强制置零。 仅在蒸发有证据时记非负输出；实际大气吸湿须另核独立原子投入，不作为负蒸气输出或用于强行闭合平衡残差。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实测批次交换量 / 验收装饰成品批次净质量；采用 cp_water 记录。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_water`
- 来源：`usda-wood-handbook-2021`

###### 仅在实际木料或涂层释放测试中识别时，纳入排放至室外空气的乙酸 CAS64-19-7 (`acetic_air`)

仅在实际木料或涂层释放测试中识别时，纳入排放至室外空气的乙酸 CAS64-19-7。物种身份不证明正排放。筛查实际树种与环境温度路线，不移植窑干排放系数。

- 选定流：乙酸 `08a91e70-3ddc-11dd-92c3-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实测批次交换量 / 验收装饰成品批次净质量；采用 cp_air 记录。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_air`
- 来源：

###### 仅在实际树种与排放物种分析证明时，纳入室外空气 α-蒎烯 CAS80-56-8 (`pinene_air`)

仅在实际树种与排放物种分析证明时，纳入室外空气 α-蒎烯 CAS80-56-8。不得用特定对映体 CAS7785-26-4 替代未分离的 α-蒎烯测量；其他萜烯另列。

- 选定流：蒎烯 `0a701083-c7e6-43d1-8ae5-e62050edc5dc`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实测批次交换量 / 验收装饰成品批次净质量；采用 cp_air 记录。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_air`
- 来源：

###### 仅在实际木料或涂层代表性测试发现时，纳入室外空气甲醛 CAS50-00-0 (`formaldehyde_air`)

仅在实际木料或涂层代表性测试发现时，纳入室外空气甲醛 CAS50-00-0。未使用合成胶不证明天然释放为零；证据应区分未检出、检出限、未测量与实测零。

- 选定流：甲醛 `08a91e70-3ddc-11dd-941b-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实测批次交换量 / 验收装饰成品批次净质量；采用 cp_air 记录。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_air`
- 来源：

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_physical | ornament_manufacture | 保留未分配木料、水、涂层、碳实物账及单独的环境负荷账。不得把实测产品与共产品输出质量乘以分配份额。内部转移和库存均为实物量，得率先于分配核对。 | corrim-northern-lumber-2025; usda-wood-handbook-2021 |
| allocation_status | offcut_sale; offcut_waste; dust_waste; reject_waste | 按实际用途、市场规格、清洁或污染状态及接收方裁定残余物状态，不把全部木料损失归为无负担废物。销售本身不产生避免产品信用；废物运输处理仍归生产，污染物决定接收适用性。 | corrim-northern-lumber-2025 |
| allocation_burdens | ornament_manufacture | 先以记录划分可归属阶段负荷，最终饰面和包装归装饰品。对真实共享的剩余负荷，论证物理关系及其测量基准；若无可辩护物理关系，披露以一致数量、价格作经济分配及敏感性分析。不移植 CORRIM 锯材质量份额，不自动赋零负荷。 | corrim-northern-lumber-2025 |
| allocation_no_credit | ornament_manufacture | 本路线不对外送边角料、木粉尘自动给替代或能源信用，亦不含厂内生物质利用。若扩展系统，须单独识别实际替代功能、接收过程、质量及互斥归属，并保留真实碳释放。 | corrim-northern-lumber-2025 |



## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | ornament_manufacture | accepted output | measured_record | 批号；树种；设计；验收产品净 kg；废品数量质量；饰面含蜡状态；干膜；含水率；残留溶剂；包装皮重；期末库存 | 饰面验收后按批校准称重，记录水分、保留涂层与溶剂测试，留存图纸、单块证明及验收记录。 | kg | 每个验收批次 | 完整所选生产时段，披露季节班次覆盖 | 单个声明场址及同树种设计饰面路线 | 每 1 kg 参考流 | 原始单据；校准；不确定性；供方证书；库存与阶段核对 |
| cp_materials | ornament_manufacture | dry wood and abrasive | measured_record | 供方批次；植物学树种；产地；窑干处理；木料净 kg；水分样品湿干质量；磨料质量、矿物、背基、粘结剂；收货；期初期末库存；退回；采用体积时的密度及体积基准 | 校准秤和未处理木料代表性烘干含水率样品；木料与涂层固体分开，核对发票库存及供方交付背景。 | kg | 每次收货及生产批次 | 完整所选生产时段，披露季节班次覆盖 | 单个声明场址及同树种设计饰面路线 | 每 1 kg 参考流 | 原始单据；校准；不确定性；供方证书；库存与阶段核对 |
| cp_energy | ornament_manufacture | electricity | measured_record | 表号；电压；kWh 读数；阶段设备运行时间；风机通风照明负荷；批次闲置状态；归属证据 | 读取校准 <1 kV 用户侧总表与分表；核对含停机及除尘风机的全时段电量，按实测阶段用量归属。 | MJ | 每班并核对批次 | 完整所选生产时段，披露季节班次覆盖 | 单个声明场址及同树种设计饰面路线 | 每 1 kg 参考流 | 原始单据；校准；不确定性；供方证书；库存与阶段核对 |
| cp_finish | ornament_manufacture | shellac and ethanol balance | measured_record | 树脂乙醇交付质量组成；纯度含蜡状态；水份额；溶剂来源；供方数量基准；配方单；批次投料；清洗领用；期初期末库存；成品废品残留溶剂；废涂层及独立刷洗液；实测出口无组织乙醇；不确定性 | 校准重量调配库存核对及供方证书，分别采样废液、保留干膜和残溶剂；核实刷涂环境路线且无变性剂。以物种质量平衡和代表性测试计量，不以总 VOC 碳量或百分比配方替代。 | kg | 每次调配、清洗及批次 | 完整所选生产时段，披露季节班次覆盖 | 单个声明场址及同树种设计饰面路线 | 每 1 kg 参考流 | 原始单据；校准；不确定性；供方证书；库存与阶段核对 |
| cp_residues | ornament_manufacture | each segregated residue | measured_record | 行 ID；阶段；批次；毛重皮重；湿木与干固体；涂层溶剂及砂纸附尘；库存变化；销售合同；必要价格；接收方及接受处理；转移单 | 分别称量各边角料、粉尘、废品、砂纸流并核对接收单。先记录组成与实物去向，再分配环境负荷，排除废物流间重复。 | kg | 每仓、每次外送及批次 | 完整所选生产时段，披露季节班次覆盖 | 单个声明场址及同树种设计饰面路线 | 每 1 kg 参考流 | 原始单据；校准；不确定性；供方证书；库存与阶段核对 |
| cp_air | ornament_manufacture | each outdoor particulate/species | measured_record | 来源阶段；采样方法；气量温压湿干基；浓度；时长；捕集出口无组织测量；PMtotal、PM10、PM2.5；木料矿物份额；CAS 物种分析；未检出限；环境空白；不确定性 | 以同步兼容气量基准和粒径方法进行代表性治理后室外释放测试，积分浓度 × 排气量及无组织时段。筛查实际木料涂层物种，不以 EPA 锯木厂 PTE 系数或针叶调查值作为雕刻默认。 | kg | 代表性运行状态及每次路线树种变化 | 完整所选生产时段，披露季节班次覆盖 | 单个声明场址及同树种设计饰面路线 | 每 1 kg 参考流 | 原始单据；校准；不确定性；供方证书；库存与阶段核对 |
| cp_water | ornament_manufacture | net ambient water transfer | measured_record | 进料成品残余物干质量与水分；树脂乙醇及废液水分；成品保留水；期初期末库存；环境温湿度；吸水与蒸发 | 采用成对重量水分与液体组成记录，并校正库存；声明不确定性及符号，区分环境吸水与蒸气释放，不假定窑干。 | kg | 每批，含环境干燥期间 | 完整所选生产时段，披露季节班次覆盖 | 单个声明场址及同树种设计饰面路线 | 每 1 kg 参考流 | 原始单据；校准；不确定性；供方证书；库存与阶段核对 |
| cp_pack | ornament_manufacture | carton and PE film | measured_record | 实际材质规格与纤维配比；PE 聚合物厚度；供方；净发质量；退回废料；产出包装单；进货运输基准 | 分别称量各包装组件并核对库房交付。未使用薄膜须有据声明不存在；产生包装废物则另增各自原子行及接收方。 | kg | 每个包装批次 | 完整所选生产时段，披露季节班次覆盖 | 单个声明场址及同树种设计饰面路线 | 每 1 kg 参考流 | 原始单据；校准；不确定性；供方证书；库存与阶段核对 |



### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| batch_normalization | all inventory rows | 每行在所选同质生产时段合计可归属实测交换量，再除以验收装饰成品净 kg；最终参考产出为 1 kg。不合格产出计入负荷与废物，不计入验收分母。 | batch exchange amount; accepted net finished-ornament kg; cp_product | 每 1 kg 参考流的交换量 |  |
| electricity_conversion | electricity | 表计电力 MJ = 记录 kWh × 3.6，再以相同验收装饰成品净 kg 归一化。 | meter kWh; cp_energy; cp_product | MJ per 1 kg reference flow |  |
| uncoated_wood_moisture | 未涂层木样及实测成品组分分离 | 以下采集账公式用于归一化与负荷分配前。B 为验收批次装饰成品净质量（kg）。每个未涂层木样：u = (m_wet - m_dry) / m_dry，m_dry = m_wet / (1 + u)。涂层成品、废品先按实测组成区分木料、水、保留虫胶及残留溶剂，整件质量不是全干木质量。 | cp_materials; cp_product; cp_residues | 独立木料、水、涂层和溶剂数量 | usda-wood-handbook-2021 |
| dry_wood_reconciliation | ornament_manufacture实物干木账 | 进料干木 + 期初干木库存 = 验收成品保留干木 + 可销售边角料干木 + 废弃边角料 + 收集粉尘 + 废品 + 废砂纸附着木粉尘 + 室外木粉尘释放 + 木源挥发物质量 + 期末干木库存 + 实测核对差额。按组成区分木料与矿物粉尘，不把全部 PM 强行作为木料得率损失。包括在制品库存变化，内部返工转移在单元内抵消。差额带测量不确定性并调查，不新增虚构废物流。 | cp_materials; cp_product; cp_residues; cp_air | 干木平衡、在制品/返工及实测残差 |  |
| ethanol_shellac_reconciliation | 虫胶及乙醇物种账 | 乙醇物种账：交付乙醇 + 期初乙醇库存 = 成品废品残留乙醇 + 废涂层溶液内乙醇 + 独立刷洗溶剂内乙醇 + 室外乙醇释放 + 期末库存 + 核对差额。进料物种质量 = 交付液体质量 × 实测乙醇质量份额。调配、刷涂、干燥、清洗释放各合计一次并扣环境背景，不假定 100% 挥发。虫胶干固体另在验收膜、废品、废涂层、刷洗残渣及库存间平衡。 | cp_finish; cp_product; cp_residues; cp_air | 乙醇物种与独立虫胶干固体平衡 | epa-coating-eiip-2001 |
| matched_particle_partition | pm25; pmcoarse; pmover10 | 兼容累积颗粒观测：PM2.5 粒级 = PM2.5；粗粒级 = PM10 - PM2.5；>PM10 粒级 = PMtotal - PM10。要求 PMtotal ≥ PM10 ≥ PM2.5 ≥ 0，且同粒径定义、方法、时段、来源及治理后室外释放。这些粒级仅合计一次 PMtotal；滤器收集物仍为废物，室内采样不能再次加入同一释放质量。PTE 表不是测量。 | cp_air; cp_residues | 互斥室外颗粒质量 | epa-sawmill-pte-2014 |
| water_carbon_reconciliation | ornament_manufacture实物水/碳账 | 水账包括木料水分、液体进料水、废液水、成品残余物保留水、库存及净环境吸水或蒸气。碳账分别记录由实测或供方组成取得的干木虫胶碳、由已确认物种质量得到的乙醇碳、保留碳、销售废物转移和室外挥发物颗粒碳。不假定通用木碳份额，不移植北方针叶调查系数。追踪木料树脂乙醇及背景排放的生物或化石来源；LCIA 口径不改变实物账。 | cp_materials; cp_finish; cp_product; cp_residues; cp_air; cp_water | 独立实测水及生物/化石碳账 |  |
| complete_period_normalization | 所有清单行 | 每项既有工期、批次或批量数量规则及关联采集协议均采用同声明产品、等级、路线、配置、场址和参考状态的单一有记录完整统计期汇总组。验收批次措辞仅限定分母；原生单位原始分子记录保留全部可归属启动、停机、整批失败或零产出批次、废品、在制品和返工。返工参考产品仅在最终验收时计一次。各可归属交换在匹配汇总组内求和，仅除一次同组严格正值、采用声明分母单位的验收参考产品数量，再按声明参考数量缩放。不得平均批次比率、丢弃失败批次、混合无关产品/时期或改变分子原生单位。整个匹配汇总组无验收产出时保留未归一化绝对清单并要求审查，不生成归一化结果或虚构产量。库存/退回及实物交接账与负荷分配独立保留；分配不得删去已经发生的失败/返工活动。 | 全部关联原始采集协议；验收参考产品汇总组；库存及返工链接 | 各原生交换单位每声明参考数量；零产出汇总组保持未归一化 |  |



### 实物核对程序

以下采集账公式用于归一化与负荷分配前。B 为验收批次装饰成品净质量（kg），不引入虚构机器质量。每个未涂层木样：u = (m_wet - m_dry) / m_dry，m_dry = m_wet / (1 + u)。涂层成品、废品先按实测组成区分木料、水、保留虫胶及残留溶剂，整件质量不是全干木质量。[usda-wood-handbook-2021]

进料干木 + 期初干木库存 = 验收成品保留干木 + 可销售边角料干木 + 废弃边角料 + 收集粉尘 + 废品 + 废砂纸附着木粉尘 + 室外木粉尘释放 + 木源挥发物质量 + 期末干木库存 + 实测核对差额。按组成区分木料与矿物粉尘，不把全部 PM 强行作为木料得率损失。包括在制品库存变化，内部返工转移在单元内抵消。差额带测量不确定性并调查，不新增虚构废物流。

乙醇物种账：交付乙醇 + 期初乙醇库存 = 成品废品残留乙醇 + 废涂层溶液内乙醇 + 独立刷洗溶剂内乙醇 + 室外乙醇释放 + 期末库存 + 核对差额。进料物种质量 = 交付液体质量 × 实测乙醇质量份额。调配、刷涂、干燥、清洗释放各合计一次并扣环境背景，不假定 100% 挥发。虫胶干固体另在验收膜、废品、废涂层、刷洗残渣及库存间平衡。[epa-coating-eiip-2001]

兼容累积颗粒观测：PM2.5 粒级 = PM2.5；粗粒级 = PM10 - PM2.5；>PM10 粒级 = PMtotal - PM10。要求 PMtotal ≥ PM10 ≥ PM2.5 ≥ 0，且同粒径定义、方法、时段、来源及治理后室外释放。这些粒级仅合计一次 PMtotal；滤器收集物仍为废物，室内采样不能再次加入同一释放质量。PTE 表不是测量。[epa-sawmill-pte-2014]

水账包括木料水分、液体进料水、废液水、成品残余物保留水、库存及净环境吸水或蒸气。碳账分别记录由实测或供方组成取得的干木虫胶碳、由已确认物种质量得到的乙醇碳、保留碳、销售废物转移和室外挥发物颗粒碳。不假定通用木碳份额，不移植北方针叶调查系数。追踪木料树脂乙醇及背景排放的生物或化石来源；LCIA 口径不改变实物账。

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_basis | all inventory rows | 全部记录使用相同验收 1 kg 分母；同树种设计饰面范围或单独测量分层。拒绝无据的数量体积湿干或供方参考换算。 | cp_product; cp_materials; cp_finish |
| quality_absence | conditional rows | 未检出、实测零、工序不存在、未测量各不同。声明测试覆盖及检出限；不确定性物种缺口保持未决。识别额外成分、包装废物或排放物种时增加具体原子行。 | cp_air; cp_finish; cp_pack |
| quality_identity | UUID-bearing rows | 核实实际材质、路线、介质、属性、供方数量基准与背景上下文。身份检索成功不等于数据包完整；未知 UUID 或来源缺陷保持披露，解决后方可声称链接完整兼容。 | supplier certificates; receiver manifests; direct identity metadata |
| quality_coverage | ornament_manufacture | 披露生产时段、季节班次场址代表性、校准与不确定性；保留完整阶段实物账及单独负荷分配账。来源调查数值不是本阔叶木路线行业默认。 | all collection protocols |



## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | reference product | 拒绝仅凭分类标签判适用。核实单块未处理窑干阔叶实木、室内装饰功能、虫胶未变性乙醇刷涂路线及全部必需限定；排除的产品功能需要其他方法。 | usda-wood-handbook-2021; usda-finishing-1999 |
| validate_reference | all inventory rows | 恰好一个 finished_ornament 产品输出带参考 UUID 及 1 kg。全部行、协议与归一化分母一致；参考净质量不含包装，分母不含废品。 |  |
| validate_balances | ornament_manufacture | 以声明不确定性及库存变化核对实测干木、涂层固体、乙醇物种、水和碳平衡。调查差额，确认内部转移两端同量及共产品实物产出未乘分配份额。 | usda-wood-handbook-2021; epa-coating-eiip-2001; corrim-northern-lumber-2025 |
| validate_emissions | elementary outputs | 核实室外空气子介质、CAS 与物种质量，不用以碳计总 VOC。要求互斥颗粒粒级且无室内室外重复。不得使用未经核实的校正流、替代物、对映体或缺测粒级代填；未测排放保持未决。 | epa-coating-eiip-2001; epa-sawmill-pte-2014 |
| validate_destinations | waste and coproduct outputs | 核实清洁污染状态、独立接收功能、组成及上游处理链接。不默认木料损失零负担，不自动给替代信用。披露缺失 UUID 与来源元数据缺陷，不声称科学批准或完全完整。 | corrim-northern-lumber-2025 |



## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 完成数据采集、兼容链接及独立质量审核后，供应所声明室内虫胶阔叶实木雕刻装饰品 |
| allowed_use | 同树种设计功能路线及参考基准，明确不确定性及适用性审查 |
| excluded_use | 整个 CPC31913 覆盖；箱盒镶嵌餐具家具替代；其他涂层；通用每件审美等效；由包装推定方法批准 |
| required_metadata | 全部参考限定、生产时段场址、供方背景固定引用及交付基准、接收路线、完整实物账与负荷分配 |
| required_quality_disclosure | UUID 缺口；元数据缺陷；测量未检出；不确定性；平衡；代表性；排除；待独立科学审查 |
| update_trigger | 树种供应处理、设计、涂层溶剂变性剂、涂布干燥治理、供方参考基准、电力边界或残余物去向变化 |



## 11. 数据源

| 来源 ID | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| usda-wood-handbook-2021 | handbook | USDA FPL, Wood handbook, FPL-GTR-282 (2021), Ch4 pp4-1,4-11; Ch13 pp13-2; Ch16 pp16-29–16-30. https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf | 干基含水率、实测质量与密度及室内表面准备；不采用通用树种含水率或密度。 |
| usda-finishing-1999 | handbook | USDA FPL, Williams (1999), FPL-GTR-113, Ch15 p15-31, Surface Coats. https://research.fs.usda.gov/download/treesearch/7145.pdf | 虫胶室内透明涂层及遇水敏感性；历史描述不作为生产配方或定量寿命。 |
| gsa-shellac-2017 | official_guidance | GSA, Cleaning and refinishing of woodwork, procedure modified 2017-07-28, Part2 materials and Part3 §3.02. https://www.gsa.gov/real-estate/historic-preservation/historic-preservation-policy-tools/preservation-tools-resources/technical-procedures/cleaning-and-refinishing-of-woodwork | 虫胶与醇组合及基材相关验收。修复用途布涂、上蜡和过夜时间不移植到装饰品制造；供方须证明所选未变性乙醇刷涂路线。 |
| epa-coating-eiip-2001 | official_guidance | US EPA EIIP VolII Ch7 (July 2001), §§3.1.1,4.1,4.2,6.1.1; pp7.4-10–7.4-11. https://www.epa.gov/sites/default/files/2015-08/documents/ii07_july2001.pdf | 场址涂层物料平衡、物种组成与捕集、无组织排放区分；不采用示例用量、配方或去除效率。 |
| corrim-northern-lumber-2025 | literature | CORRIM, Life Cycle Assessment of Softwood Lumber Production – Northern Region (2025-07-22), §3.2.6 p16. https://corrim.org/wp-content/uploads/2025/07/LCA-Report-Northern-Lumber-Report-07222025.pdf | 反对将全部残余物视为无负担的证据：报告在锯材与副产品间分摊环境负荷，包装归最终产品。其针叶调查、系数及分配份额不移植到阔叶木装饰品。 |
| epa-sawmill-pte-2014 | official_guidance | US EPA Region10 (2014-05-08), PM Potential to Emit Factors for Activities at Sawmills Excluding Boilers, pp1–2. https://www.epa.gov/sites/default/files/2016-09/documents/spmpteef_memo.pdf | 锯木厂潜在排放表的适用限制及嵌套颗粒粒径口径；其最大产能系数不计量实际雕刻排放或锅炉排放。 |
