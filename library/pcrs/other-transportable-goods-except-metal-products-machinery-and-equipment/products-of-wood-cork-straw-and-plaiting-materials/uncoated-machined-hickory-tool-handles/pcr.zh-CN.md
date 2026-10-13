---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.uncoated-machined-hickory-tool-handles
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 常规机加工的无涂层山核桃实木工具柄

## 1. 范围与适用性

本候选稿描述按指定配合图纸验收、经打磨且无涂层的真山核桃实木替换工具柄，用于敲击或园艺手工具。不涵盖工具本体/工具头、完整工具、扫帚/刷体及柄、鞋楦或鞋撑、涂层或浸渍柄、层压/胶合柄，也不涵盖无树脂热致密化坯料。木材采用常规锯切、车削/成型及打磨，不进行有意的热压缩。USDA说明优质真山核桃木的工具柄用途；制造商提供定制工具柄，并区分打磨或涂饰交付。这些资料支持产品边界，不是制造数据集或数值默认值[usda-wood-handbook-2021; arnold-hickory-handles]。

声明数量是部件生产参考，不是寿命等效的服务功能单位。客户配合及验收要求必须另行提供。不虚构柄质量、强度门槛、含水率目标、工具寿命、收率或排放系数。广义前景木质材料定位在实物上包含本单一材料成品柄子集，并须保留以下树种/形态/处理/路线限定。该身份不提供制造商清单、实测参考数量或背景数据。本候选方法需独立审核；完整场址数据集仍须真实采集及背景兼容。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.uncoated-machined-hickory-tool-handles |
| classification_refs | CPC 3.0 31911; narrower; 范围及已接受决定见 `classifications/mappings/cpc-3.0-to-pcr.yaml` 和其引用的 ADR |
| covered_products | 无涂层、未处理、非胶合、未致密化的真山核桃实木成品替换工具柄，可按指定工具图纸安装 |
| excluded_products | 完整工具；工具本体/头；扫帚/刷体及柄；鞋楦/鞋撑；粗修未加工木棍；压缩/致密化、涂层、浸渍或胶合柄；附装金属件 |
| representative_product | 指定工具头配合的打磨真山核桃实木替换锤柄；不含工具头或金属套箍 |
| production_route | 采购厚度大于6毫米的窑干非针叶锯材 → 接收/分选 → 锯切 → 车削/成型及配合特征加工 → 打磨 → 检验 → 必要时互锁瓦楞包装 |
| market_state | 工具柄工厂门的成品部件；按声明图纸不需继续成型；装配及使用在下游 |

CPC 31330木棍仅粗修，明确未经车削、弯曲或其他加工；不是已具最终握持和配合几何的验收工具柄。CPC 31520致密化木材采用实质不同路线，予以排除。31911混合标签不能使工具本体、清洁用具及鞋楦在方法上互换。

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供指定敲击或园艺工具的木质握持及配合界面 |
| How much | 声明交付含水率下1千克合格成品柄木料净质量；排除包装及工具头 |
| How well | 买方图纸、树种、纹理/缺陷检验、表面及配合验收；不宣称通用强度或配合性能 |
| How long or cycle | 一次制造及工厂门交付周期；使用寿命与更换频次需另有依据的研究 |
| reference_flow_link | finished_handle |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 木质材料 `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 真山核桃植物树种；实木/非胶合/未致密化/未处理/无涂层状态；采购窑干交付门及进料含水率；型号及预期工具；握持尺寸及配合图纸；纹理/缺陷及表面验收记录；交付含水率方法及数值；净质量及包装排除；前景周期/场址；供电电压；供方/背景数量基准兼容性 |

全部限定信息须在数据集元数据、过程说明或等效产品记录中声明。木质材料是广义前景实物定位，明确未特指树种、形态、处理、水分、生产路线及供方。此处仅用于上述严格限定的单一材料成品柄；不证明任何供方/背景数据集、多材料装配工具、柄数值质量或性能。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q为一个声明同质生产批组的合格柄木料正值净质量总量，在验收后、包装前以经校准的秤称量，采用cp_reference采集；全部实物流行使用同一Q。 |
| moisture_basis | wood_input; finished_handle; offcut; captured_sawdust; sanding_dust; spent_abrasive | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分开记录交付/接收湿态质量与绝干木质质量。u=(m_wet-m_dry)/m_dry为干基含水率分数；m_dry=m_wet/(1+u)。每种状态均须代表性取样，保留含水率仪修正及挥发性抽提物不确定性[usda-wood-handbook-2021]。 |
| electricity_quantity | electricity | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 平台将此能量属性用于电力。计量千瓦时乘以3.6转换为MJ；这是电能而非燃料燃烧热。在背景链接前核实用户侧电压、地区/年份、供方及损失。 |
| transport_quantity | inbound_transport | 质量*距离 `118f2a40-50ec-457c-aa60-9bc6b6af9931` | kg*km | 各批次千克质量乘以路段公里距离后求和。背景t*km需按1000换算；单纯质量属性的运输流或货车质量不能表示货运工作量。 |
| count_conversion | reference product | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 件数仅支持验收及收率核对。各型号/含水率分层均以实际校准称重转换件数；不得虚构通用的单柄质量或密度。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 供方锯木厂门的外购已窑干、未处理、厚度大于6毫米的真山核桃锯材；记录接收含水率及交付运输 |
| starting_condition_role | 前景采集起始门，不排除上游林业/锯切/干燥负荷 |
| product_classification_scope | 机加工实木成品工具柄部件子集；外部分类别不定义全部路线 |
| recursive_input_rule | 外购已成型柄需单独披露仅精加工路线并链接其上游数据集；不能作为原木料或重复计入制造 |
| upstream_dataset_requirement | 兼容的林业/锯切/窑干木材、电力、磨料、包装、货运及接收废物处理数据集；身份UUID不能提供其清单 |
| disclosure | 树种/型号/批组、进出料含水率、供应门、运输/损失覆盖、控制措施、废物接收方、全部缺口及有单独证据的辅料扩展 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | handle_unit | 纳入接收、分选/不合格品、锯切、车削/成型、配合特征加工、打磨、除尘、检验、包装及可归属的共用电力。采购窑干在上游。本路线不包括场内窑、锅炉、涂层、施胶、热致密化或金属工具头装配。 | usda-wood-handbook-2021; arnold-hickory-handles |
| boundary_completeness | all inventory rows | 检查实际设备/材料清单及维护日志；若存在消耗润滑剂、切削工具、包装部件及其废物，各自增加具体命名的原子行，不能用集合占位、静默截断或未测量零值。场内自产压缩空气计入空压机电力；外购空气需单独流。 | |
| boundary_carbon | upstream and foreground ledgers | 实际上游或单独建模的废物燃烧处理LCI须保留生物CO2，即使某LCIA口径将其排除于汇总指标。干式机械路线不默认产生场内燃烧。另行披露产品碳存量；避免重复已在上游表示的大气摄取。 | |
| boundary_emissions | pm25; pmcoarse; pmover10 | 测量实际控制后环境排放并与捕集废物分开。EPA锯木厂PTE系数排除锅炉，不能证明山核桃车削/打磨实际排放或通用粒径比例。新发现的物种或水分交换需明确原子扩展及身份核查。 | epa-sawmill-pte-2014 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| handle_unit | 接收、常规机加工、打磨、验收及包装 | required | 声明的外购窑干材路线 | 单一前景制造单元，保留分阶段计量及实物账 | 1千克验收柄木料净质量 |

分阶段记录保留库存移动及内部交接两端相等数量，仅在单元汇总时抵销。中间柄输出不重复最终参考身份。本基准清单为路线特定方法，声明完整数据集前须检查真实场址覆盖及扩展。

### 过程：工具柄制造（`handle_unit`）

#### 输入

##### 产品流

###### 采购山核桃锯材（`wood_input`）

必需投入为已窑干、未处理、厚度大于6毫米的真山核桃锯材。广义非针叶材身份包含本子集；树种、干燥及含水率一致的背景数据须另行核实。

- 选定流：厚度超过6毫米的非针叶木锯材、纵向刨切材、切片或单板材 `6568e32b-edf1-47c9-8d04-6b31af0d8c1c`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：库存修正后的实际消耗湿态净质量除以Q。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wood`
- 来源：`usda-wood-handbook-2021`

###### 外购低压电力（`electricity`）

用户侧低于1千伏的电网平均供电；涵盖锯切、车削/成型、打磨、除尘、场内空压机、搬运及包装。其他电压需单独核实身份。 源地理背景为CN。实际场址／供方地理、年份、供电结构及用户侧交付／损耗边界兼容仍待核实；本实物身份不是通用发电背景。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：可归属的计量千瓦时乘以3.6再除以Q；包括有依据的共用服务份额。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：

###### 新砂纸（`abrasive`）

一项纸基磨料耗材；记录磨料矿物、黏结剂、粒度、背基及供方。家具工厂地点不能证明工具柄场址或背景供应。不得用CAS冲突的散装氧化物替代。

- 选定流：砂纸 `b09187da-c3cb-49e6-9b07-9e4ff091fd74`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实际消耗的新砂纸净质量除以Q；排除附着在废砂纸上的木屑。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_aux`
- 来源：

###### 瓦楞纸板套包装（`packing_board`）

本交付方案采用无额外胶带、塑料薄膜或钉子的互锁纸板套/箱时纳入。身份限定C/E/F楞型、纤维至少80%且含再生材料；须核实，其他包装保留另一个具体未决流。包装不计入参考质量。 源记录还限定材料可回收；将其保留为实际包装／源兼容的有条件要求，不作为未来回收、再生成分配方或替代产品信用证据。

- 选定流：瓦楞纸板 `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：库存修正后的纸板套用量及可归属包装损耗质量除以Q。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_aux`
- 来源：

###### 进厂公路货运服务（`inbound_transport`）

各进厂公路段在交付原料或辅料数据集尚未包含时纳入。已确认的质量*距离参考单位为kg*km，不是单独质量；背景t*km需明确除以1000。

- 选定流：货物运输 `4f1a3f30-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量*距离 `118f2a40-50ec-457c-aa60-9bc6b6af9931` / kg*km
- 数量规则：各运输批次实际千克质量乘以该路段公里距离后求和，再除以Q。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_transport`
- 来源：

##### 废物流

##### 基本流


#### 输出

##### 产品流

###### 验收成品柄（`finished_handle`）

在几何、配合、纹理/缺陷及含水率检查后形成的一项最终合格输出；尚未安装工具头或金属件。加工和包装为同一单元，分阶段件数及计量保留为独立采集字段。

- 选定流：木质材料 `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reference`
- 来源：`usda-wood-handbook-2021`

##### 废物流

###### 清洁木材边角料（`offcut`）

未团聚、无树脂及无涂层的山核桃边角料与不合格柄木料，和细粉分离；无胶/涂层污染须有证据，并记录接收设施与处理。源分类冲突继续作为元数据待澄清项。

- 选定流：木材边角料 `acc22294-8e77-4784-988f-2499be3c60eb`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：库存修正后的外运边角料湿态净质量除以Q。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue`
- 来源：`usda-wood-handbook-2021`

###### 捕集清洁木屑（`captured_sawdust`）

仅包含锯切/车削/成型产生的未处理、未团聚木颗粒；排除已排入空气的粉尘及含磨料的打磨粉尘。核实实际焚烧/回收接收方；该废物身份不代表场内燃烧。

- 选定流：木屑废物 `e1a44d20-d968-4d64-bd7c-253a1441ab35`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：库存修正后的外运捕集木屑湿态净质量除以Q。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue`
- 来源：`usda-wood-handbook-2021`

###### 废纸基砂磨耗材（`spent_abrasive`）

实际从木材表面精整拆卸的整件纸基砂磨耗材，含剩余矿物、结合剂、纸背基及附着山核桃木质。实测外送质量，量化木质／含水率／组分比例、污染、进入捕集尘或空气的磨损及接收处理／供方兼容。广义表面精整废研磨料身份无仅限金属或散粉限制，但不建立特定纸基砂磨或废物处理背景。与砂光粉尘及新砂纸分开，不推定砂带结构或默认废弃比例。

- 选定流： 废研磨料 `f0a52dd6-0027-4033-9068-f293526f958f`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量废砂磨耗材净质量除以Q；实测附着木质比例用于木材/碳账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue`
- 来源：`usda-wood-handbook-2021`

###### 含磨料颗粒的木材打磨粉尘（`sanding_dust`）

仅实际独立捕集的含山核桃木质及磨损矿物／结合剂颗粒的砂光粉尘，与清洁切削／车削木屑及拆卸纸基耗材分开。按收集状态称重，保留实测含水率、木质／矿物／结合剂比例、各组分绝干质量／碳、污染及真实接收方／供方接纳。通用工业粉尘废流无相反材质、来源工艺或处理路线，但不建立特定组成或处理背景。捕集量不是烟囱PM，不替换为清洁木料、煤／软木或金属抛光污泥。

- 选定流： 粉尘 `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：库存修正后的外运捕集打磨粉尘质量除以Q；排除废砂纸及已排入空气的颗粒物。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue`
- 来源：`usda-wood-handbook-2021`

##### 基本流

###### 细颗粒物排放（`pm25`）

加工、除尘排气及物料搬运的实际控制后环境排放，介质为空气、未特指；粒径不大于2.5微米。不能将室内职业暴露粉尘作为环境排放。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测排出的PM2.5质量除以Q。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emission`
- 来源：`epa-sawmill-pte-2014`

###### 中间粒径颗粒物排放（`pmcoarse`）

介质为空气、未特指；大于2.5且不大于10微米的互斥区间。累积PM10不是该区间；须使用同源、同控制及同时间的测量。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：同条件累积PM10减去PM2.5的质量，再除以Q；也可直接测量互斥区间。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emission`
- 来源：`epa-sawmill-pte-2014`

###### 大粒径颗粒物排放（`pmover10`）

介质为空气、未特指；粒径大于10微米。不能用修正流或粒径未特指的总颗粒物替代。须确认总颗粒物与PM10测量方法可比。

- 选定流：颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：同条件可过滤总颗粒物减去PM10的质量，再除以Q；也可直接测量互斥区间。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emission`
- 来源：`epa-sawmill-pte-2014`


## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_single_product | handle_unit | 本基准路线只有一项合格产品，并将分流废物交至披露的接收处理/回收设施。可归属制造负荷分配给合格柄；记录真实废物处理负荷及单独声明的回收约定，不自动给予替代信用。有销售功能的联产品不能静默标为废物：使用联产品路线前，须确认实物状态、接收方及经济功能，并建立单独有依据的分配规则。 | |
| allocation_shared_services | electricity; inbound_transport | 优先计量/分离共用操作；无法分离时，采用有记录的因果机器时间/功率或实际运输服务份额，保留总量及敏感性。等额、价值或绝干木料份额不能互换，也不是通用默认值。 | |
| allocation_physical_ledgers | all inventory rows | 未分配的木材、水、碳及包装实物账须与环境负荷账分开。不能用负荷分配份额乘真实余料/产品输出或内部链接任一端的量。不合格/返工木料仅对账一次，不重复计入合格输出。 | |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

以下协议规定后续真实采集；本PCR不包含已取得的工厂测量。采用同一声明周期及同质树种/型号/含水率批组。Q是合格木料净质量千克且须为正值。保留聚合单元内的分阶段记录。下表汇总基准描述最终清单基准；归一化前保留原始批组总量。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_reference | handle_unit | finished_handle | 验收/称重 | 植物树种；型号/图纸；各阶段合格及不合格件数；批次湿态净质量Q；皮重；含水率样品；绝干木质质量；实测绝干木材碳比例及方法；验收缺陷 | 验收后使用经校准的秤称量裸柄，排除包装；代表性水分取样及绝干比对，或经树种修正且保留不确定性的仪表。保留握持/配合及等级检查。 | kg；件数；含水率分数 | 每验收批；各批次/状态代表性水分采样 | 完整声明生产周期 | 选定工具柄场址及同质批组 | 每 1 kg 参考流 | 秤校准、皮重记录、图纸、检验及水分测试原件 |
| cp_wood | handle_unit | wood_input | 接收/库存/称重 | 植物树种；窑干交付门；进料尺寸大于6毫米；接收千克；期初/期末库存；报废/返工移动；各状态含水率；代表性分析或可追溯兼容供方证据提供的绝干木材碳比例；供方数据集基准 | 核对发票及库存，称量实际消耗净木料，分状态取样水分；核对上游木材树种、处理/干燥及交付数量定义。 | kg；含水率分数 | 每次接收及库存移动 | 与Q相同周期 | 选定批组进料批次 | 每 1 kg 参考流 | 供方及批次记录、校准、水分测试及背景交付门声明 |
| cp_energy | handle_unit | electricity | 计量 | 分阶段千瓦时表读数；日期；电压；供方/地区/年份；除尘/空压机/包装计量或因果共用服务证据；待机/启动量 | 读取经校准仪表，保留可归属阶段及共用服务总量、待机/启动覆盖和电费核对。另行选择电力组合及用户侧损失边界。 | kWh；MJ | 连续或每生产班次 | 与Q相同周期，覆盖代表性工作循环 | 选定产线及可归属服务 | 每 1 kg 参考流 | 仪表校准、电费核对及服务分配记录 |
| cp_aux | handle_unit | abrasive; packing_board | 发票/库存/称重 | 新磨料矿物/黏结剂/背基/粒度及质量；纸板楞型/纤维/再生成分及质量；期初/期末库存；阶段损耗；设备清单及维护辅料 | 实测并修正库存后的新料消耗；分开整张砂纸与散装矿物，核查包装规格。检查维护并将各真实润滑剂/工具更换补为独立流；排除无关库存。 | kg | 每次领用、更换/包装批 | 与Q相同周期 | 选定产线及包装批组 | 每 1 kg 参考流 | 供方规格、称重/库存记录、维护清单及缺口登记 |
| cp_transport | handle_unit | inbound_transport | 货运记录 | 路段；供方门；运输千克；实际公里距离；货车/载荷类型；分配/装载/空驶定义；交付数据集运输包含范围 | 核对运单及实际公路段，以实际运输质量及距离计算；记录背景车辆/载荷基准，防止与交付物料数据集重复。 | kg；km；kg*km | 每进厂批次 | 与Q同批组供料周期 | 仅实际进厂路段 | 每 1 kg 参考流 | 运单、路径证据、供方交付覆盖及背景数量定义 |
| cp_residue | handle_unit | offcut; captured_sawdust; spent_abrasive; sanding_dust | 废物外运/库存测试 | 分流种类；质量/皮重；期初/期末库存；木材含水率；木质/矿物比例及各组分绝干碳比例；胶/涂层状态；目的地/处理；接收单；经济状态 | 外运时用经校准秤分流称量；保留水分及代表性木质/矿物组成、接收条件和处理证据。分开清洁切削粉尘、受污染打磨粉尘和废砂纸。 | kg；含水率及木质/矿物分数 | 每次外运；各流/批次代表性组成取样 | 与Q相同周期 | 全部废物来源及接收设施 | 每 1 kg 参考流 | 废物接收单、校准、污染测试及接收方规格 |
| cp_emission | handle_unit | pm25; pmcoarse; pmover10 | 环境排放测试/活动记录 | 排放源/控制状态；浓度及气量；测试时长；运行小时；空气动力学粒径切割及可过滤/可凝结约定；木质/矿物碳比例；无组织采样；检出限 | 获取代表性真实控制后源测试及对应活动日志；单独记录无组织排放。采用可比累积测试或直接测量互斥区间。未测量源/未知可比粒径拆分是缺口而非零值。 | kg；mg/m3；m3；h | 代表性源测试及连续活动/控制日志 | 与Q相同周期，记录外推依据 | 实际环境排口及无组织源，排除捕集废物与职业暴露 | 每 1 kg 参考流 | 原始报告、方法兼容性、控制、活动、不确定性、介质及重复计算核查 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_reference | all inventory rows | x_i=q_i/Q；q_i为相应单位下可归属且经库存修正的实物批组总量；Q为同批组最终合格木料净质量千克，排除包装。参考输出Q/Q=1千克。归一化不是负荷分配。 | q_i; Q; cp_reference; linked protocol | 每1千克参考流的x_i | |
| calculate_moisture | wood_input; finished_handle; offcut; captured_sawdust; spent_abrasive; sanding_dust | u=(m_wet-m_dry)/m_dry；m_dry=m_wet/(1+u)；m_water=m_wet-m_dry；m_dry>0。u是分数，干基百分数需除以100。混合打磨余料先按实测分开木质与矿物/黏结剂质量；不能对整个混合物使用木材含水率。 | cp_reference; cp_wood; cp_residue | 木质绝干质量及所含水千克 | usda-wood-handbook-2021 |
| calculate_electricity | electricity | Energy_MJ=3.6 × attributable electricity_kWh；x_electricity=Energy_MJ/Q。电力不能使用燃料热值或锅炉效率系数。 | cp_energy; Q | 每1千克参考流的MJ | |
| calculate_transport | inbound_transport | Work_kgkm=sum(shipment_kg × leg_km)；Work_tkm=Work_kgkm/1000；x_transport=Work_kgkm/Q。实际装载/空驶约定保留在兼容的背景服务中，避免同一路段重复计入。 | cp_transport; Q | 每1千克参考流的kg*km | |
| calculate_particles | pm25; pmcoarse; pmover10 | E25=E_PM2.5；Ecoarse=E_PM10-E_PM2.5；Elarge=E_filterable_total-E_PM10。仅同方法/源/控制/时间/数量基准允许相减，各区间在报告不确定性内须非负。浓度乘实际对应气量时采用1mg=0.000001kg；实际各源区间排放求和后除以Q。不能把累积PM2.5、PM10及总量合计为独立排放。 | cp_emission; Q | 每1千克参考流的互斥区间千克 | epa-sawmill-pte-2014 |
| reconcile_physical_ledgers | all inventory rows | 绝干木输入+期初绝干库存=合格绝干木+边角料绝干木+清洁捕集绝干木+废砂纸/打磨粉尘中实测木质+木源空气颗粒物+期末绝干库存+未解释残差。水输入+期初水+实测吸收=合格木料/余料含水+实测释放+期末水+水残差。碳输入+期初碳=合格木料/余料碳+木源空气碳+期末碳+碳残差，采用各实测绝干碳比例。实际挥发碳排放须另行扩展为具体排放流。大气净水分交换须有证据，不能假定零值。量化残差与不确定性，不把未测量损失改称零值或虚构排放。包装纸/矿物及磨料分别平衡；内部交接保留相等两端后抵销。 | cp_reference; cp_wood; cp_aux; cp_residue; cp_emission | 分开的实物绝干木、水及碳平衡、残差和材料组成账 | usda-wood-handbook-2021 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | finished_handle | 完成数据集前确认一项已公布可用参考流及兼容属性/单位基准；不以邻近产品替代 | 经核实的身份、图纸、树种及验收记录 |
| quality_quantities | all inventory rows | 保留原始周期总量、阶段数量、库存/返工修正、同一Q、真实不确定性及全部源覆盖；不使用通用数值默认值 | 关联协议及分开的实物/负荷账 |
| quality_background | UUID-bearing flows | 实物身份与背景数量兼容分开核查。核对木材树种/干燥/水分、磨料/纸板规格、用户电压及供应边界、货运kg*km/t*km和接收处理；矛盾元数据或未知兼容性为未决 | 供方原始定义、属性/单位组记录及数据集交付门 |
| quality_completeness | all inventory rows | 未知数量或身份、设备辅料未覆盖、实际存在的挥发物排放、大气水分交换及不可比颗粒物方法均阻止完整LCI声明；真实扩展须为原子流 | 场址清单、缺口登记、源测试、库存平衡及覆盖审计 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | finished_handle | 恰好一项验收成品输出使用声明参考对象及净1千克基准。核实实物身份及数量支持；广义定位必须始终携带实际木材树种、成品柄形态、处理/路线、含水率及净质量限定；身份确认不证明供方/背景数量兼容。 | |
| validate_basis | all inventory rows | 中英文使用同批组Q、1千克净木料分母、来源ID、行ID、协议及换算。件数、包装毛质量、绝干质量及交付湿态质量不能静默替换该分母。 | usda-wood-handbook-2021 |
| validate_route | handle_unit | 核实真山核桃实木成品柄状态、最终握持/配合、无致密化/树脂/涂层/浸渍或安装金属件；31330粗修木棍或31520致密化坯料均不符合。 | usda-wood-handbook-2021; arnold-hickory-handles |
| validate_atomic | all inventory rows | 每一选定流为一项交换，具有经核实的参考属性及单位。缺失身份保留具体未决名称；不能以修正/集合流代替基础排放，也不能以未使用砂纸代替废砂纸。 | |
| validate_mass_carbon | all inventory rows | 按测量不确定性审核未分配的库存/木材/水/碳平衡及残差。捕集木料、砂纸附着木质、受污染粉尘及环境排放互斥。不删除上游/废物处理LCI中的真实生物CO2，也不使用通用木材碳比例。 | usda-wood-handbook-2021 |
| validate_particles | pm25; pmcoarse; pmover10 | 核实空气未特指介质及一致的互斥粒径定义；排除室内暴露、累积指标重复计算、负区间差和无依据的PTE转实际排放。 | epa-sawmill-pte-2014 |
| validate_readiness | all inventory rows | 确认限定参考适用性；在声明完整LCI前解决废物身份缺口、真实场址覆盖及供方/背景兼容。在设为reviewed状态前独立审核方法；authored候选指南仍需审核。机械检查通过不证明科学批准。 | |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 实际前景采集、身份完整及独立审核后的secondary_dataset |
| downstream_use | 可用于将声明的无涂层山核桃实木柄安装至单独建模工具的background_dataset；本PCR不产生该数据集 |
| allowed_use | 缺口解决后，兼容的树种/型号/图纸、含水率、路线、交付门及数量基准 |
| excluded_use | 寿命/服务替代；完整工具；所有木材行业通用平均；清洁用具柄/刷体；鞋楦；涂层、胶合或致密化柄；无支持的环境声明 |
| required_metadata | 参考UUID及属性、型号/图纸/树种、状态/含水率及净质量、周期/场址、起始门、过程图、供方/背景交付门、废物接收方、协议及计算版本 |
| required_quality_disclosure | 取样/计量覆盖、不确定性、材料/颗粒物/生物碳账、辅料扩展、供方兼容性、分配选择及剩余缺口 |
| update_trigger | 树种/几何/干燥/表面/致密化路线、设备/控制/包装、供方数量定义、参考元数据或新证据变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| usda-wood-handbook-2021 | handbook | USDA林产品实验室，《Wood Handbook—Wood as an Engineering Material》，FPL-GTR-282（2021），第2章2–7页（PDF35），第13章13–1至13–3页（尤其PDF324、式13–1及采样/仪表限制）。[官方存档版](https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf) | 真山核桃柄料身份；水分/绝干质量计量。不提供工具柄制造参数调查。 |
| arnold-hickory-handles | literature | H. Arnold Wood Turning，“Hickory Tool Handles”发布方页面，Custom Hickory Handles for OEM Production、Common Uses、Finishing & Options各节；页面时间2026-08-19，读取2026-10-12。[制造商原始技术页面](https://www.arnoldwood.com/wood-products/handles/hickory-tool-handles/) | 指定山核桃工具柄部件及打磨/涂饰选项的市场技术证据；非同行评议资料，不提供定量或窑干路线默认值。 |
| epa-sawmill-pte-2014 | official_guidance | US EPA Region 10，“Particulate Matter Potential to Emit Emission Factors for Activities at Sawmills, Excluding Boilers, Located in Pacific Northwest Indian Country”（2014-05-08），第1–2页、范围脚注及PM/PM10/PM2.5表头。[官方备忘录](https://www.epa.gov/sites/default/files/2016-09/documents/spmpteef_memo.pdf) | 仅用于范围限制及颗粒物累积指标提醒。不采用区域锯木厂PTE系数或针叶材干燥比例代表山核桃柄机加工实际排放。 |
