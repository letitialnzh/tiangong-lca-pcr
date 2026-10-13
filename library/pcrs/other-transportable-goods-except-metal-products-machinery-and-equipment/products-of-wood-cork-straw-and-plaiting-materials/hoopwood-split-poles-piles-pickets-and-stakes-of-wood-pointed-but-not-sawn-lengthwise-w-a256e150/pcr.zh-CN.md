---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.hoopwood-split-poles-piles-pickets-and-stakes-of-wood-pointed-but-not-sawn-lengthwise-w-a256e150
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 未防腐欧洲栗劈裂尖桩

## 1. 范围与适用性

本类别支持沿纹劈裂、削尖后以生材或自然风干状态交付的单根未防腐欧洲栗（Castanea sativa）木桩。用于农业围栏或植株支撑的生产数据应按尺寸与交付含水率类别分别建模，不据此认定不同形态具有相同结构性能或使用寿命。

真实代表形态为去皮的欧洲栗劈裂桩，在大端削出四面尖头，不做化学处理或人工干燥（eff-split-stake，第 1 页）。厂家规格只支持一条路线实例，不提供行业出材率、能耗、寿命、密度或碳足迹默认值。林业资料独立区分劈裂围栏材、圆桩、锯切立柱与其他商品形态（forestry-practice-1958，第 17 章）；其历史尺寸不构成现行要求。

箍木、未削尖劈杆、结构桩、手杖/雨伞/工具柄粗坯木棒和刨花木具有不同形态或功能，均不纳入。纵向锯切、车削、弯曲、钻孔、型面加工、防腐处理和人工干燥产品不纳入。允许横截定长及修削尖头；沿长度锯出立柱平面不纳入。分类名称本身不能扩大范围。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.hoopwood-split-poles-piles-pickets-and-stakes-of-wood-pointed-but-not-sawn-lengthwise-w-a256e150 |
| classification_refs | CPC 3.0 31330; narrower; 范围及已接受决定见 `classifications/mappings/cpc-3.0-to-pcr.yaml` 和其引用的 ADR |
| covered_products | 农业围栏或植株支撑用去皮、劈裂、削尖的 Castanea sativa 木桩；生材或自然风干状态 |
| excluded_products | 箍木；未削尖劈杆；结构桩；粗坯木棒；刨花木；纵锯、车削、弯曲、钻孔、型面加工、防腐或人工干燥产品 |
| representative_product | 一根去皮的欧洲栗劈裂桩，在大端削出四面尖头 |
| production_route | 运抵的未防腐欧洲栗原木 → 分选与横截定长 → 去皮 → 沿纹劈裂 → 削尖 → 条件性自然风干 → 验收与捆扎 |
| market_state | 粗加工场出厂的单根成品桩；声明交付含水率与几何形态；运输包装不计入净参考质量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供用于已声明农业围栏或植株支撑用途的单根劈裂尖桩 |
| How much | 交付含水率状态下 1 kg 验收桩净质量 |
| How well | 声明树种、长度、劈裂截面和尖头几何形态；剔除破损及不适用桩；不假设统一强度等级 |
| How long or cycle | 一个制造与出厂交付周期；使用阶段寿命由下游应用另行确定 |
| reference_flow_link | final_stake |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 木质材料 `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 前景实物定位符仅限一种实际成品单根桩规格，不表示未特指的含木装配体；实际产品/供应方、粗加工场与生产期；实测验收出厂净质量 B 及校准；无胶、胶结剂、涂层或化学处理；无人工干燥；Castanea sativa；农业围栏或植株支撑；尺寸与劈裂形态；削尖方法及大端尖头；已去皮；未防腐；生材或自然风干；干基交付含水率；不含包装的净质量；粗加工场出厂；实际设备与供电边界 |

必需限定信息应写入数据集元数据、过程说明或参考流描述。千克仅为生产报告单位，不能证明不同几何形态的桩具有等效功能。广义木质材料身份仅与这些具体桩材限定信息共同使用，不证明已匹配林业或生产后台、供应方负荷、强度、耐久性、认证、合规或实测数量。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| net_reference_mass | final_stake | Mass | kg | 使用经校准的秤称量出厂含水率状态下的验收桩净质量并扣除包装皮重；原始字段及校准记录见 cp_mass。 |
| same_denominator | 所有清单行 | 行特定属性 | 行特定单位 | 全程使用每 1 kg 参考流；所有交换与验收净质量均采集自同一可追溯批次或经核对的生产期。 |
| moisture_basis | wood_input; final_stake; bark_waste; offcut_waste; sawdust_waste | Mass | kg | 对相同材料和时点测量湿质量与烘干样品质量；干基含水率小数 u = (湿质量 - 干质量) / 干质量。不得代入湿基含水率或通用树种密度（usda-wood-handbook-2021，第 4–1 页）。 |
| electricity_unit | electricity | Net calorific value | MJ | 数据库此属性表示电能，不证明净交付热量。保持电表边界；1 kWh = 3.6 MJ。外购电只记录一次，纳入场内变压损失；不得由此推断蒸汽或锅炉热量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 运抵粗加工场的未防腐 Castanea sativa 原木，附树种、湿质量及含水率记录 |
| starting_condition_role | 前景加工的上游产品投入，不作为环境木材资源提取 |
| product_classification_scope | CPC 3.0 31330 仅提供分类语境；支持范围仅为未防腐欧洲栗劈裂尖桩 |
| recursive_input_rule | 本路线不使用外购成品桩。场内返工是内部交接，不得同时作为新增原木投入与新增成品输出。 |
| upstream_dataset_requirement | 链接独立适用且包含实际到场运输的林业/采伐及原木交付数据集，披露树种、地区、含水率、林业碳与分配基准。林道交付数据集需另行建模到场运输。 |
| disclosure | 披露数据集是前景门到门还是包含上游负荷；声明含水率、设备、供电电压、包装、废物去向及路线排除项 |

前景包括接收、分选、横截定长、去皮、沿纹劈裂、削尖、条件性自然风干、搬运、剔除、除尘、维护与捆扎。各阶段在一个聚合前景单元内分别计量或观察，仅有一个最终产品输出。削尖、风干和捆扎之间的实物交接属于内部流转，不是第二个可销售参考产品输出。

自然风干为条件性阶段：记录堆垛方式、日期、场址天气、初始/最终含水率、废次品与搬运能耗。生材交付可无专门风干阶段，但储存期间的含水率变化仍须核对。《木材手册》区分自然风干与风机辅助或加热干燥（usda-wood-handbook-2021，第 13–6 页）；不将锯材干燥制度与目标含水率移植到桩材。人工干燥不属于本支持路线。后续扩展必须识别实际设备、热源、水/冷凝液、干燥排放及实测能耗，窑干锯材清单不能替代这些证据。本路线不包含场内燃烧、燃油动力设备及热/蒸汽供应，应用于这些路线前必须增加独立原子流。已链接上游 LCI 的生物 CO2 交换必须保留，不能以温室气体统计口径删除实物生物排放。产品储碳不作为避免排放收益。

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| stake_conversion | 粗加工与出厂交付 | required | 已声明的手工或电力劈裂、削尖路线；无人工干燥或场内燃烧 | foreground | 1 kg 参考流 |

cp_route 分阶段观察横截、去皮、劈裂、削尖、自然风干、分选与捆扎。劈裂采用楔子或劈木设备沿纹进行；尖头通过受控修削形成，不车削杆身、不纵锯立柱平面。设备设计、工序顺序与实际能耗来自场址记录，不假设每家厂家均相同。

### 过程：粗加工与出厂交付（`stake_conversion`）


#### 输入

##### 产品流

###### 运抵粗加工场的未防腐欧洲栗原木（`wood_input`）

记录实际运抵本场的未防腐、未施胶 Castanea sativa 原木，核实供应方及林业来源、到场尺寸及圆木形态、带皮状态、湿质量、含水率和期初/期末库存。木质材料仅为此单独描述的原木投入提供前景实物定位符。原木与成品桩共用此身份不使两者状态可互换，不表示递归，也不证明已匹配上游供应方、运输或负荷。声称上游覆盖前须独立审查适用的林业/采伐及到场原木数据集与实际交付运输。

- 选定流：木质材料 `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98`
- 流属性/单位：Mass / kg
- 数量规则：依据 cp_wood 采集实际交换数量并除以同期验收桩净质量；实际未发生时保留可审查的缺省证据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_wood`

###### 交流电（`electricity`）

对使用电力的横截、去皮、劈裂、削尖、抽尘、场内搬运及捆扎计量，不含干燥热量。此 UUID 仅适用于已核实的 1–35 kV 到场电网供电，包含场内变压及损失；其他电压或供电路线需另核适用身份。链接后台电力前须核实实际供给地区、供应方及年份、电网组合和损失边界；此物理定位符不证明全球通用供电或默认生产地区。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value / MJ
- 数量规则：依据 cp_energy 采集实际交换数量并除以同期验收桩净质量；实际未发生时保留可审查的缺省证据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

###### 润滑油（`lubricating_oil`）

仅在设备实际使用石油馏分润滑油时纳入补充量。核对期初/期末库存、采购、设备留存、回收油及损失；不用于 PAO 或可生物降解链条油。

- 选定流：润滑油 `66628f20-9d33-4997-bd6c-6357453fa268`
- 流属性/单位：Mass / kg
- 数量规则：依据 cp_maintenance 采集实际交换数量并除以同期验收桩净质量；实际未发生时保留可审查的缺省证据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_maintenance`

###### 聚丙烯捆扎绳（`polypropylene_twine`）

实际使用时记录随交付捆扎件出厂的聚丙烯绳，不计入桩净质量；其他包装组件必须另设独立行。核实实际供应的 PP 绳等级、形态及供应方/使用状态兼容性；此身份不能向本粗加工场移植农场门口地区、行业平均数量或生产后台。

- 选定流：聚丙烯捆扎绳 `0f3c91d9-9f30-42ab-b5e4-0b3ce42cb0fe`
- 流属性/单位：Mass / kg
- 数量规则：依据 cp_pack 采集实际交换数量并除以同期验收桩净质量；实际未发生时保留可审查的缺省证据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_pack`

#### 输出

##### 产品流

###### 粗加工场出厂的未防腐欧洲栗劈裂尖桩（`final_stake`）

在条件性自然风干及验收后仅记录一次验收尖桩净输出，不含包装。所有交换分母均对应此同一输出质量。木质材料仅为一种实际已去皮、沿纹劈裂、削尖的 Castanea sativa 木桩规格提供前景定位符，记录尺寸、劈裂截面、尖头形态、生材或自然风干含水率、未防腐/未施胶/无涂层状态及粗加工场/供应方出厂边界。它与投入原木为不同交换，本身不证明实测质量或制造后台。

- 选定流：木质材料 `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98`
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_mass`

##### 废物流

###### 树皮（`bark_waste`）

称量送往场外废物管理的去除树皮，记录含水率与去向；可销售树皮属于共产品，应用本稿前须增加独立核实的产品行。

- 选定流：树皮 `a2536c07-fbe1-4a12-90fb-21bd2e99b74e`
- 流属性/单位：Mass / kg
- 数量规则：依据 cp_residues 采集实际交换数量并除以同期验收桩净质量；实际未发生时保留可审查的缺省证据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residues`

###### 木材边角料（`offcut_waste`）

称量实际作为边角料弃置的松散、未团聚、未防腐、未施胶实木欧洲栗横截端头、粗削尖余料与废次品，排除树皮、捕集细木屑、空气粉尘及场内返工材料。记录实际颗粒形态、含水率、污染状态和去向，匹配废物管理前核实接收方/供应方接受此废物状态；广义边角料身份不证明处理路线或负荷。

- 选定流：木材边角料 `acc22294-8e77-4784-988f-2499be3c60eb`
- 流属性/单位：Mass / kg
- 数量规则：依据 cp_residues 采集实际交换数量并除以同期验收桩净质量；实际未发生时保留可审查的缺省证据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residues`

###### 木屑废物（`sawdust_waste`）

称量捕集的未处理木屑与木粉尘，仅记一次。捕集粉尘属于固体废物，不是大气排放；仅在实际接收方及废物状态符合已记录的焚烧或材料回收分支时，使用未处理焚烧/回收身份；独立匹配供应方与管理边界。它不强制焚烧，也不证明处置服务、能量收益或废物处理后台。其他去向需另审身份及适用性；捕集粉尘与空气排放仍分开。

- 选定流：木屑废物 `e1a44d20-d968-4d64-bd7c-253a1441ab35`
- 流属性/单位：Mass / kg
- 数量规则：依据 cp_residues 采集实际交换数量并除以同期验收桩净质量；实际未发生时保留可审查的缺省证据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residues`

###### 废润滑油（`spent_oil`）

纳入实际从设备回收并送往场外处理的废润滑油，记录废物规格、库存及处理链接；不得假设全部油投入均成为此输出。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：Mass / kg
- 数量规则：依据 cp_maintenance 采集实际交换数量并除以同期验收桩净质量；实际未发生时保留可审查的缺省证据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_maintenance`

##### 基本流

###### 颗粒物 (PM2.5)（`pm25`）

记录控制后排向室外空气、未捕集的 PM2.5 木粉尘，测量排放边界与粒径分布；不将锯木厂潜在排放因子套用于劈裂或削尖。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：依据 cp_air 采集实际交换数量并除以同期验收桩净质量；实际未发生时保留可审查的缺省证据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`

###### 颗粒物 (PM2.5 - PM10)（`pmcoarse`）

记录大于 PM2.5 至 PM10 的独立空气粒径区间；包含性 PM10 与 PM2.5 总量必须在同一采样基准下相减。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：依据 cp_air 采集实际交换数量并除以同期验收桩净质量；实际未发生时保留可审查的缺省证据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`

###### 颗粒物（> PM10）（`pmover10`）

记录排向室外空气、大于 PM10 的木粉尘，并在同一采样基准下与总颗粒物质量核对；不得另加包含性 PM10 或总粉尘交换。

- 选定流：颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：依据 cp_air 采集实际交换数量并除以同期验收桩净质量；实际未发生时保留可审查的缺省证据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`

###### 水蒸气（`water_vapour`）

对已记录的自然风干或储存失水，依据配对干/湿质量平衡计算蒸发水，区分降雨进入、液态排水与木材剔除；质量差本身不能证明蒸发。此输出仅记录有证据的正净蒸发；实际大气吸湿、降雨进入与液态排水跨越边界时须分别识别独立原子交换，不得作为负水蒸气输出或用于强行闭合未解释残差。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：依据 cp_moisture 的水量平衡计算并除以同期验收桩净质量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_moisture`

## 7. 分配与共产品处理

优先分批与分阶段计量以避免可避免的分配。在负荷分配前保留完整木材、含水量及碳的实物账：原木投入加期初库存等于验收输出、残余物、排放与期末库存，并核对实测平衡残差。阶段内部交接两端实物量一致，共产品实物输出绝不乘以分配份额。

本路线残余物行表示弃置废物。若树皮、劈裂边角料或木屑具有单独销售功能，应用前必须先以已核实的独立原子产品行识别真实共产品及其交付状态。随后负荷分配需独立审查的因果关系或有理由的替代方法，并保留场址质量、含水率、价值及敏感性证据。本规则不设通用质量/经济分配比例、替代燃料收益或避免处置收益。场外废物管理仅链接一次；上游林业分配另行披露。

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | stake_conversion | final_stake | 称量 | 批次；验收净千克；包装皮重；树种；形态；出厂含水率；秤校准 |经校准秤称量验收批次，排除废次品与包装；记录分母 B 为验收桩净质量；实测产量总量另保留，交换原始总量按 normalize_batch 除以 B 一次。 | kg | 每个验收批次 | 同一可追溯生产期，含储存与出厂 | 一个已记录的粗加工场 | 每 1 kg 参考流 | 校准及验收记录 |
| cp_wood | stake_conversion | wood_input | 接收记录 | 批次；供应方；树种证明；到场湿千克；含水率；带皮状态；上游数据集；运输覆盖；库存 |称量到场欧洲栗原木并核对期初/期末库存和可追溯上游交付；记录分子的计算方式为：消耗到场原木量；保留对应完整生产期原始总量，按 normalize_batch 仅除以 B 一次。 | kg | 每个到场批次 | 同一可追溯生产期，含储存与出厂 | 一个已记录的粗加工场 | 每 1 kg 参考流 | 树种、地磅及供应方记录 |
| cp_energy | stake_conversion | electricity | 电表记录 | 电表期初/期末；kWh；期间；电压；供电组合；变压损失；阶段；其他用户；验收净千克 |读取校准电表并隔离实际可归属用电，核对外购供电；记录分子的计算方式为：可归属外购 kWh × 3.6；保留对应完整生产期原始总量，按 normalize_batch 仅除以 B 一次。 | MJ | 每批次或经核对生产期 | 同一可追溯生产期，含储存与出厂 | 一个已记录的粗加工场 | 每 1 kg 参考流 | 电表校准及供应方供电边界记录 |
| cp_maintenance | stake_conversion | lubricating_oil; spent_oil | 维护记录 | 油品规格；期初/期末库存；采购；补充；设备留存千克；回收废油千克；泄漏评估；验收净千克 |分别测量净消耗与回收废油，检查损失路径；记录分子的计算方式为：各独立投入或输出千克；保留对应完整生产期原始总量，按 normalize_batch 仅除以 B 一次。 | kg | 每次维护并核对至生产期 | 同一可追溯生产期，含储存与出厂 | 一个已记录的粗加工场 | 每 1 kg 参考流 | 油品规格、维护日志及废物交接记录 |
| cp_pack | stake_conversion | polypropylene_twine | 包装记录 | 绳的聚合物；领用/退回千克；捆数；验收净千克；其他包装 |称量聚丙烯绳领用减退回量，核对实际随货交付材料；记录分子的计算方式为：出厂绳千克；保留对应完整生产期原始总量，按 normalize_batch 仅除以 B 一次。 | kg | 每个发货批次 | 同一可追溯生产期，含储存与出厂 | 一个已记录的粗加工场 | 每 1 kg 参考流 | 包装记录及材料规格 |
| cp_residues | stake_conversion | bark_waste; offcut_waste; sawdust_waste | 称量及废物记录 | 独立残余物种类；湿千克；干基含水率；阶段；去向；出售/弃置状态；库存；验收净千克 |称量分类残余物流，核对质量、粉尘捕集及去向；记录分子的计算方式为：各独立废物千克；保留对应完整生产期原始总量，按 normalize_batch 仅除以 B 一次。 | kg | 每批次与每次交接 | 同一可追溯生产期，含储存与出厂 | 一个已记录的粗加工场 | 每 1 kg 参考流 | 称量、含水率及去向记录 |
| cp_air | stake_conversion | pm25; pmcoarse; pmover10 | 排放测量 | 工序；排气/无组织边界；采样空气体积；质量；粒径区间；控制状态；活动量；采样不确定性；验收净千克 |采用经验证的粒径采样方法测量实际室外排放，按可追溯活动量积分；无组织排放单独表征；记录分子的计算方式为：各独立空气颗粒物区间千克；保留对应完整生产期原始总量，按 normalize_batch 仅除以 B 一次。 | kg | 有代表性的运行状态及生产期核对 | 同一可追溯生产期，含储存与出厂 | 一个已记录的粗加工场 | 每 1 kg 参考流 | 采样方法、校准、排气/无组织覆盖及不确定性 |
| cp_moisture | stake_conversion | water_vapour | 配对含水率及水量记录 | 批次；阶段；湿千克；烘干样品千克；堆垛日期；天气；降雨进入；排水千克；废次品；库存；验收净千克 |采用同批配对湿/干样品与可追溯质量记录，分别核对实际风干/储存失水与液态排水；记录分子的计算方式为：蒸发水千克；保留对应完整生产期原始总量，按 normalize_batch 仅除以 B 一次。 | kg | 接收、储存前后及出厂 | 同一可追溯生产期，含储存与出厂 | 一个已记录的粗加工场 | 每 1 kg 参考流 | 样品代表性、烘干试验记录与水量平衡 |
| cp_route | stake_conversion | all inventory rows | 场址观察 | 阶段顺序；设备；手工/电力作业；自然风干；无化学/人工干燥/燃烧证据；全部公用工程/材料/废物/排放路径 |检查实际工艺及供应方记录，识别所有条件性与未列出的实物交换；路线记录的对应范围为：路线记录对应同一批次或生产期及每 1 kg 参考流。 | stage records | 初始调查及每次路线变化 | 同一可追溯生产期，含储存与出厂 | 一个已记录的粗加工场 | 每 1 kg 参考流 | 工艺调查、照片、设备及供应方记录 |

所有原始分子均为生产期总量，仅除以同一验收出厂净质量 B（kg）一次。B 来自实测，不按桩数量猜测转换。件数与几何体积仅用于辅助质量核验；体积转质量需同批实测密度及含水率。不设通用密度、出材率、能耗或排放因子。以下平衡在归一化及负荷分配前保留实物总量。

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_batch | 所有清单行 | 各生产期交换总量仅除以实测验收出厂净质量 B（kg）一次；final_stake 为 1 千克。 | 生产期交换总量；B；cp_mass | 每 1 kg 参考流的交换数量 |  |
| dry_wood_balance | wood_input; final_stake; bark_waste; offcut_waste; sawdust_waste | 对每个木材流，干质量 = 湿质量 / (1 + u)；核对干木投入加期初库存与输出加期末库存，包含空气木粉尘及定量损失。 | 湿质量；u；库存；cp_moisture；cp_residues；cp_air | 分配前实物干木账 | usda-wood-handbook-2021 |
| water_balance | water_vapour | 蒸发水 = 原木带入水 + 期初存水 + 降雨进入 - 出厂木材/残余物带出水 - 期末存水 - 液态排水；单独保留平衡残差，不强行并入蒸发。 | 配对湿/干质量；进入水；排水；库存；cp_moisture | 生产期蒸发水千克；归一化 water_vapour | usda-wood-handbook-2021 |
| particle_partition | pm25; pmcoarse; pmover10 | 同一采样基准下 PMcoarse = PM10 - PM2.5，PMover10 = 总颗粒物 - PM10。核查包含性总量的顺序及非负性；最终交换仅为 PM2.5、PMcoarse 与 PMover10。 | cp_air；总颗粒物；PM10；PM2.5 | 三个不重复的空气颗粒物区间 |  |
| carbon_balance | wood_input; final_stake; bark_waste; offcut_waste; sawdust_waste | 木材流使用实测干质量与树种/批次特定碳证据，负荷分配前核对碳投入、库存、输出与已记录排放；生物木碳与化石润滑油/包装碳分别记录，不设通用含碳率或碳汇收益。 | cp_wood；cp_mass；cp_residues；cp_air；批次碳证据 | 实物木碳账与明确不确定性 |  |
| complete_period_normalization | 所有清单行 | 每项既有工期、批次或批量数量规则及关联采集协议均采用同声明产品、等级、路线、配置、场址和参考状态的单一有记录完整统计期汇总组。验收批次措辞仅限定分母；原生单位原始分子记录保留全部可归属启动、停机、整批失败或零产出批次、废品、在制品和返工。返工参考产品仅在最终验收时计一次。各可归属交换在匹配汇总组内求和，仅除一次同组严格正值、采用声明分母单位的验收参考产品数量，再按声明参考数量缩放。不得平均批次比率、丢弃失败批次、混合无关产品/时期或改变分子原生单位。整个匹配汇总组无验收产出时保留未归一化绝对清单并要求审查，不生成归一化结果或虚构产量。库存/退回及实物交接账与负荷分配独立保留；分配不得删去已经发生的失败/返工活动。 | 全部关联原始采集协议；验收参考产品汇总组；库存及返工链接 | 各原生交换单位每声明参考数量；零产出汇总组保持未归一化 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| route_coverage | 所有清单行 | 调查实际发生的每个输入/输出。缺少燃料、化学品、包装、液体或 VOC 物种时，应用前必须增加独立原子行与适用身份；不得把无法测量当作零。 | cp_route 与实测过程记录 |
| identity_state | wood_input; final_stake | 核实每行实际树种、实物形态、加工路线、含水率、供应方交付边界、属性及单位。广义前景物料身份须与这些具体行限定信息共同使用；原木投入与削尖成品即使同 UUID 仍为不同交换。不得以矛盾路线替代；供应方/后台负荷匹配及实测数量需独立证据。 | 供应方/产品规格与已核实流原件 |
| mass_reconciliation | 所有清单行 | 同批边界、净 B、库存及木材、水与碳平衡；保留不确定性并解释残差，不虚构闭合容差。 | cp_mass; cp_wood; cp_residues; cp_moisture |
| emission_coverage | pm25; pmcoarse; pmover10; water_vapour | 测量控制后的室外排放并记录子介质；未指定空气不能推断高烟囱或城市条件。检查 VOC/淋溶/排水路径，并为实际物种或流逐项扩展清单。 | cp_air; cp_moisture; cp_route |
| conditional_absence | 所有清单行 | 每行记录实测量或有证据的不适用状态；手工作业不能证明全部搬运能耗或排放均不存在。 | 场址调查与生产期记录 |

## 9. 校验规则

- 恰好一个 final_stake 参考输出，表示 1 千克验收桩净质量；所有分母与中英文规则一致。
- 核查 Castanea sativa、沿纹劈裂及削尖成品状态；拒绝纵锯、车削、弯曲、型面加工、防腐或人工干燥路线。
- 要求实测 B 与完整批次/库存核对，包括水量及未分配实物碳账。数量非负且不确定性有解释，不虚构参数。
- 核实每个采用 UUID 的类型、属性、单位、路线与介质；声称完整最终数据集前须完成实际限定信息及供应方/后台兼容性。广义前景木料定位符本身不证明后台匹配或采集数量；不得以产品流木料替代废物流或基本流身份。
- 要求接受限定信息、实际路线覆盖与缺省证据；未表征排放或不支持的供热仍为未决。
- 仅相加不重复的空气颗粒物区间，捕集粉尘属于另一固体流；不得由技术圈废物流推断环境排放或重复计算上游过程排放。

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景门到门尖桩加工数据集；仅在有适用的到场原木及废物管理数据集时扩展上游 |
| downstream_use | 实际实物限定信息、完整采集数据及独立兼容的供应方/后台证据确立后方可作 secondary_dataset；background_dataset |
| allowed_use | 已声明几何形态、生材/自然风干交付状态的未防腐欧洲栗劈裂尖桩生产 |
| excluded_use | CPC 整叶覆盖；箍木、杆材、结构桩、工具柄坯料、刨花木；纵锯、车削、弯曲、防腐或人工干燥路线；无依据寿命比较 |
| required_metadata | 树种、形态、用途、尖头形状、含水率、净参考质量、场址、生产期、上游运输及分配、设备、电网边界、废物去向、包装及排放覆盖 |
| required_quality_disclosure | 具体前景身份限定信息及未决供应方/后台兼容性、实测/估算/跳过交换、自然风干状态、质量/水/碳残差、不确定性、路线排除及任何负荷分配 |
| update_trigger | 新参考身份；树种/形态/用途变化；处理/干燥/供能路线、包装、共产品或观察到的排放路径变化 |

## 11. 数据源

| Source id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| eff-split-stake | literature | EFF Piquets, Fiche technique Piquet fendu, p. 1; https://www.eff-piquets.fr/wp-content/uploads/2025/10/Fiche-technique-Piquet-fendu.pdf | 代表树种、劈裂/去皮/削尖形态及无人工干燥/化学处理；不采用寿命或碳收益宣称 |
| forestry-practice-1958 | official_guidance | Forestry Commission, Forestry Practice, Bulletin 14, seventh edition 1958, chapter 17, printed pp. 76–77; https://cdn.forestresearch.gov.uk/1958/04/fcbu014_7ed.pdf | 独立历史资料对木材市场形态的区分；不采用数值默认值 |
| usda-wood-handbook-2021 | handbook | USDA Forest Products Laboratory, Wood Handbook, FPL-GTR-282 (2021), printed pp. 4–1, 13–6; https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf | 干基含水率定义及自然/人工干燥区分；不采用锯材制度或行业参数 |
