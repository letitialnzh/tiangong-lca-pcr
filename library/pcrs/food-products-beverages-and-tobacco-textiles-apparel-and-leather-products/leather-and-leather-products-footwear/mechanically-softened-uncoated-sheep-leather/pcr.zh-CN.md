---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.mechanically-softened-uncoated-sheep-leather
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
---

# 染色坯革机械软化制无涂层绵羊皮革


## 1. 范围与适用性

本 PCR 仅适用于无毛绵羊或羔羊皮革的干式机械后整饰：接收已完成铬鞣、复鞣、染色、加脂和干燥的坯革，记录适合机械软化的来料含水状态；拉软，可按实际工艺进行不加化学品的干摔软，再修边、分级并验收无涂层皮革，供后续服装或手套加工。代表产品为无表面涂层的染色绵羊纳帕革。工序顺序和验收规格由场址与产品确定 [assomac-finishing; goldpanel-production]。边界始于上游湿加工和干燥完成之后；排除原皮、蓝湿革投入、场内湿式复鞣/染色/加脂、主动加水、再次热干燥、涂层、磨面绒面革/磨砂革、漆皮、镀金属革、再生革、山羊及其他物种，以及皮革制品制造与消费。出现这些工序时，须另行审查路线扩展并逐项建模其交换。CPC 29130 还包括其他皮革与再生革，本 PCR 不代表整个子类已覆盖 [un-cpc-2025]。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.mechanically-softened-uncoated-sheep-leather |
| classification_refs | CPC 3.0:29130；范围较窄；仅为分类背景 |
| covered_products | 以已调湿坯革为来料的无涂层、无毛、铬鞣染色绵羊/羔羊皮革 |
| excluded_products | 山羊/小山羊皮革；再生革；湿加工；涂层；合成革；制成品 |
| representative_product | 供服装加工的机械软化无涂层染色绵羊纳帕革 |
| production_route | 已调湿染色坯革接收 → 拉软 → 实际采用时干摔软 → 修边/分级 → 净质量验收及包装 |
| market_state | 声明平衡含水状态的干态可售皮革；不是制成品，不声明使用寿命 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应用于后续加工的无涂层机械软化绵羊皮革 |
| How much | 声明调湿状态下的 1 kg 验收皮革净质量 |
| How well | 声明绵羊/羔羊来源、铬鞣、已有染料/加脂剂、厚度、柔软度及买方验收规格；不假设与其他路线质量等同 |
| How long or cycle | 一个声明的同质工厂核算汇总组，覆盖纳入批次、失败生产及返工；不赋予消费使用期限 |
| reference_flow_link | finished_leather |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 无涂层铬鞣染色绵羊皮革 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 物种；供应商及批次；来料加工态；铬鞣；染料/加脂剂组成证据；来料及产出含水状态；无涂层表面；厚度及柔软度验收；工序顺序；地域及计量供电电压；废物去向；上游缺口 |

在前景数据集元数据或过程说明中声明全部必需限定信息。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | 质量 | kg | 采用 cp_mass 在声明调湿状态称量验收皮革净质量，排除包装、废物及低等级产品。所有清单分母均为相同的 1 kg 参考流。 |
| area_conversion | dyed_sheep_crust; finished_leather | 质量 | kg | 保留供应商面积或张数作为辅助记录。在声明含水状态和厚度下取得同批质量与面积/张数配对测量，质量换算只能由这些观测支持。不得套用通用 kg/m2 或 kg/张系数，不得将公开流属性改写为 Mass。 |
| electricity_units | electricity_lv; electricity_mv | 净热值 | MJ | 保留引用属性 `93a60a56-a3c8-11da-a746-0800200c9a66` 与能量单位组 `93a60a57-a3c8-11da-a746-0800200c9a66`。采集 kWh，再按精确关系 1 kWh = 3.6 MJ 换算；不使用燃料质量或热值替代电量。 |
| moisture_state | reference product | 质量 | kg | 参考质量包括声明验收状态下的水分，不是烘干胶原质量。单独记录水分比例并核对蒸发量；不得自动改定义为绝干质量。 |

## 5. 系统边界

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | foreground | 纳入接收、储存、搬运、所有机械软化遍数、修边、质量分级、返工、包装、抽风及可归属场址电力。机械后整饰与上游湿式坯革生产分开 [assomac-finishing; goldpanel-production]。 | assomac-finishing; goldpanel-production |
| boundary_upstream | upstream | 购买坯革须链接兼容供应商数据集，并核对其实际动物生产、屠宰/皮回收、保存、脱毛、鞣制、复鞣、染色、加脂及干燥范围；披露上游缺口。不要在后整饰前景重复负荷，也不得仅凭此前景宣称完整从摇篮到大门。 | goldpanel-production |
| boundary_water | water and releases | 定义的干式路线不包括主动加水、湿洗或湿式工艺废水。披露坯革带入水分、合格皮革保留水分及实测蒸发损失；将其与液态废水分开。实际发生湿式清洗或调湿时须扩展路线，分别增加技术圈供水、废水及实测直接排放行，不能用水资源基本流替代废水。 | assomac-finishing |
| boundary_release | air and waste | 收集的含铬皮革纤维粉尘和边角料属于技术圈废物移交。空气颗粒物和蒸发水是独立的条件性环境交换，只有测量或独立闭合水分平衡支持时才能计入；不推断铬、溶剂或燃烧排放必然发生。声明实际接收子介质及后续处理。 | assomac-finishing |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 购买已调湿、染色、加脂、铬鞣干态绵羊坯革；场内不进行湿加工 |
| starting_condition_role | 上游坯革制备完成后的前景制造投入 |
| product_classification_scope | CPC 29130 中范围较窄的绵羊皮革干式机械路线 |
| recursive_input_rule | 同类别成品返工须保留此前生产数据集并单列返工需求；不作为初次坯革，不无限递归 |
| upstream_dataset_requirement | 兼容的已调湿绵羊坯革、电力和实际包装供应及废物处理；披露缺失的动物与鞣革阶段 |
| disclosure | 物种、鞣制、染料/加脂剂、含水状态、部分边界、场内遍数、直接排放、电压、处理与供应商上游范围 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| reception | 染色坯革接收与搬运 | required | 所有适用批次 | 前景制造 | 每 1 kg 参考流 |
| softening | 拉软与干式机械软化 | required | 所选路线采用拉软；仅在实际采用且不加化学品时纳入干摔软 | 前景制造 | 每 1 kg 参考流 |
| acceptance | 修边、分级、验收与包装 | required | 所有适用批次；仅实际使用时记录纸盒 | 前景制造 | 每 1 kg 参考流 |
| utilities | 可归属电力与抽风服务 | required | 所有适用批次；按实际计量边界选择供电电压行 | 前景制造 | 每 1 kg 参考流 |

### 过程：染色坯革接收与搬运（`reception`）

#### 输入

##### 产品流

###### 铬鞣染色加脂干态绵羊坯革（`dyed_sheep_crust`）

称量本批接收绵羊坯革净质量；记录物种、鞣制化学、已含染料/加脂剂、含水状态及厚度。绵羊原皮、蓝湿革及未限定动物皮革不等同于该来料加工态。

- 选定流：铬鞣染色加脂干态绵羊坯革
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用 cp_material 采集实际可归属批次数量；完成声明分配后，汇总同一同质核算汇总组的可归属数量，包含整批报废及返工，再统一除以cp_mass记录的该组正值验收参考产品净kg。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：`goldpanel-production`

#### 输出


### 过程：拉软与干式机械软化（`softening`）

#### 输入

#### 输出

##### 废物流

###### 收集的铬鞣染色绵羊皮革纤维粉尘（`captured_leather_dust`）

条件性：干摔软、拉软或搬运中实际抽取的粉尘。按声明含水状态称量集尘器卸料，记录含铬状态、实际接收去向及接收方相应许可资质；不将收集粉尘计为空气排放。

- 选定流：收集的铬鞣染色绵羊皮革纤维粉尘
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用 cp_waste 采集实际可归属批次数量；完成声明分配后，汇总同一同质核算汇总组的可归属数量，包含整批报废及返工，再统一除以cp_mass记录的该组正值验收参考产品净kg。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：`assomac-finishing`

##### 基本流

###### 颗粒物，粒径未特指（`particulate_air`）

条件性：有测量支持的总颗粒质量空气排放，粒径及空气子介质均未特指。记录捕集后采样方法、流量和时长。若已明确粒径级分或城市/高烟囱位置，须选择另经核验的相容身份；不得将总粉尘标作 PM10 或叠加重叠级分。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用 cp_air 采集实际可归属批次数量；完成声明分配后，汇总同一同质核算汇总组的可归属数量，包含整批报废及返工，再统一除以cp_mass记录的该组正值验收参考产品净kg。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`assomac-finishing`

###### 水蒸气（`water_vapour_air`）

条件性：废气测量或闭合批次水分平衡支持的来料皮革水分蒸发。身份是排入未特指子介质的空气，不是淡水排放或取水。不设默认蒸发百分比。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用 cp_moisture 采集实际可归属批次数量；完成声明分配后，汇总同一同质核算汇总组的可归属数量，包含整批报废及返工，再统一除以cp_mass记录的该组正值验收参考产品净kg。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_moisture`
- 来源：`assomac-finishing`


### 过程：修边、分级、验收与包装（`acceptance`）

#### 输入

##### 产品流

###### 纸盒（`paper_box`）

条件性：交付实际使用的裁切、折叠、层压纸盒。称量纸盒净质量并披露结构；其他包装组件须另设原子行。所有包装质量均排除在皮革参考质量外。

- 选定流：纸盒 `12d5d744-7725-4dbc-b102-43c80547f777`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用 cp_material_acceptance 采集实际可归属批次数量；完成声明分配后，汇总同一同质核算汇总组的可归属数量，包含整批报废及返工，再统一除以cp_mass记录的该组正值验收参考产品净kg。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material_acceptance`
- 来源：`goldpanel-production`

#### 输出

##### 产品流

###### 无涂层铬鞣染色绵羊皮革（`finished_leather`）

按声明买方规格验收无涂层染色绵羊皮革。在记录的调湿/含水状态称量验收净产量，排除包装与不合格批次。

- 选定流：无涂层铬鞣染色绵羊皮革
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：1 千克
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_mass`
- 来源：`goldpanel-production`

###### 降级无涂层铬鞣染色绵羊皮革（`downgraded_sheep_leather`）

条件性：跨越边界出售的独立低等级产品。记录其实际质量等级、质量、含水状态、价格与买方；内部返工不是额外可售输出。

- 选定流：降级无涂层铬鞣染色绵羊皮革
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用 cp_products 采集实际可归属批次数量；完成声明分配后，汇总同一同质核算汇总组的可归属数量，包含整批报废及返工，再统一除以cp_mass记录的该组正值验收参考产品净kg。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_products`
- 来源：`goldpanel-production`

##### 废物流

###### 铬鞣染色绵羊皮革边角料（`leather_trimmings`）

条件性：实际切除且作为废物移交的皮革。称量净质量，记录组成、铬含量证据、含水状态和去向。作为共产品出售的材料须声明并分配，不能暗中赋予零负荷。

- 选定流：铬鞣染色绵羊皮革边角料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用 cp_waste_acceptance 采集实际可归属批次数量；完成声明分配后，汇总同一同质核算汇总组的可归属数量，包含整批报废及返工，再统一除以cp_mass记录的该组正值验收参考产品净kg。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste_acceptance`
- 来源：`goldpanel-production`


### 过程：可归属电力与抽风服务（`utilities`）

#### 输入

##### 产品流

###### 交流电（`electricity_lv`）

条件性：仅适用于 CN 电网平均消费组合、用户端供电电压 <1 kV。计量拉软、摔软、搬运、抽风及可归属储存/包装电量；排除中压行已计入供电。其他地域或供电须使用另经核验的流。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 单位组：`93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：采用 cp_energy 采集实际可归属批次数量；完成声明分配后，汇总同一同质核算汇总组的可归属数量，包含整批报废及返工，再统一除以cp_mass记录的该组正值验收参考产品净kg。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：`assomac-finishing`

###### 交流电（`electricity_mv`）

条件性：仅适用于 CN 电网平均消费组合、用户端供电电压 1–35 kV。保留实际购电计量边界并归属需求。同一变压器馈电不得再作为低压电网供电重复计入。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 单位组：`93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：采用 cp_energy 采集实际可归属批次数量；完成声明分配后，汇总同一同质核算汇总组的可归属数量，包含整批报废及返工，再统一除以cp_mass记录的该组正值验收参考产品净kg。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：`assomac-finishing`

#### 输出


## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | shared foreground | 优先分离批次、实测设备时间及返工。共享电量按实测具有因果关系的设备耗电/时间归属，并一致处理空载需求；不采用无依据标准百分比。 |  |
| allocation_products | saleable grades | 记录每个可售等级及实测质量。优先采用过程拆分或经论证的物理关系；若没有可辩护物理关系解释经济分级，则对剩余共同负荷采用同期净销售价值，披露依据并检验质量分配敏感性。这是明确的前景建模选择，不是全行业默认值或来源因子。 |  |
| allocation_waste | leather residues | 废物属性按实际处置/销售合同判定。纳入废物移交和匹配处理；不在此归因型前景内部赋予替代原生皮革或能源的抵扣。返工皮片留在批次内直至最终验收，其加工负荷只计一次。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | acceptance | finished_leather | 称量与验收 | 批次；验收皮革净质量；皮重；含水状态；厚度；柔软度；等级；经校准秤；验收记录；核算汇总组ID；全部纳入批次ID；整批报废记录；返工关联；等级分配台账 | 在声明调湿后使用经校准秤称量验收皮革净质量；排除全部包装、废物及低等级产品。 保留批次原始数量，按声明分配真实副产品负担，并将归属参考产品的失败批次数量纳入同一同质组后，再除以其正值验收参考等级净kg；该总量为零时保留绝对记录并要求审查。 | kg | 每批及相关运行时段 | 声明包含空载及返工的代表生产期间；披露日期及排除项 | 适用后整饰场址与相应批次 | 每 1 kg 参考流 | 校准；批次核对；原始记录；不确定性；供应商及移交证据 |
| cp_material | reception | dyed_sheep_crust | 投入领用与净称量 | 批次；供应商；物种；来料加工态；鞣制；染料/加脂剂证据；材料名称；领用/退回质量；含水状态；辅助面积/张数；核算汇总组ID；全部纳入批次ID；整批报废记录；返工关联；等级分配台账 | 对每种原子材料核对经校准净称量、仓库领用、退回及供应商记录；面积/张数换算使用同批配对测量。 保留批次原始数量，按声明分配真实副产品负担，并将归属参考产品的失败批次数量纳入同一同质组后，再除以其正值验收参考等级净kg；该总量为零时保留绝对记录并要求审查。 | kg | 每批及相关运行时段 | 声明包含空载及返工的代表生产期间；披露日期及排除项 | 适用后整饰场址与相应批次 | 每 1 kg 参考流 | 校准；批次核对；原始记录；不确定性；供应商及移交证据 |
| cp_material_acceptance | acceptance | paper_box | 投入领用与净称量 | 批次；供应商；材料名称；纸及纸板和包装结构；供货状态；领用/退回净质量；含水状态；纸盒件数；皮重；核算汇总组ID；全部纳入批次ID；整批报废记录；返工关联；等级分配台账 | 对每种原子材料核对经校准净称量、仓库领用、退回及供应商记录；面积/张数换算使用同批配对测量。 保留批次原始数量，按声明分配真实副产品负担，并将归属参考产品的失败批次数量纳入同一同质组后，再除以其正值验收参考等级净kg；该总量为零时保留绝对记录并要求审查。 | kg | 每批及相关运行时段 | 声明包含空载及返工的代表生产期间；披露日期及排除项 | 适用后整饰场址与相应批次 | 每 1 kg 参考流 | 校准；批次核对；原始记录；不确定性；供应商及移交证据 |
| cp_energy | utilities | electricity_lv; electricity_mv | 电量计量 | 批次；地域；购电电压；计量边界；起止 kWh；运行/空载时间；路线；设备；返工；分配依据；核算汇总组ID；全部纳入批次ID；整批报废记录；返工关联；等级分配台账 | 读取经校准分表，或按实际设备负荷/时间核对场址电表；保留购电边界内损耗且不重复计入。以 3.6 将 kWh 换算为 MJ。 保留批次原始数量，按声明分配真实副产品负担，并将归属参考产品的失败批次数量纳入同一同质组后，再除以其正值验收参考等级净kg；该总量为零时保留绝对记录并要求审查。 | MJ | 每批及相关运行时段 | 声明包含空载及返工的代表生产期间；披露日期及排除项 | 适用后整饰场址与相应批次 | 每 1 kg 参考流 | 校准；批次核对；原始记录；不确定性；供应商及移交证据 |
| cp_waste | softening | captured_leather_dust | 废物称量与移交 | 批次；独立粉尘/边角料质量；含水状态；含铬证据；容器皮重；移交日期；接收方；处理；核算汇总组ID；全部纳入批次ID；整批报废记录；返工关联；等级分配台账 | 使用经校准秤分别称量每项废物，核对集尘/修边日志与实际移交记录；不得与液态废水混合。 保留批次原始数量，按声明分配真实副产品负担，并将归属参考产品的失败批次数量纳入同一同质组后，再除以其正值验收参考等级净kg；该总量为零时保留绝对记录并要求审查。 | kg | 每批及相关运行时段 | 声明包含空载及返工的代表生产期间；披露日期及排除项 | 适用后整饰场址与相应批次 | 每 1 kg 参考流 | 校准；批次核对；原始记录；不确定性；供应商及移交证据 |
| cp_waste_acceptance | acceptance | leather_trimmings | 废物称量与移交 | 批次；独立粉尘/边角料质量；含水状态；含铬证据；容器皮重；移交日期；接收方；处理；核算汇总组ID；全部纳入批次ID；整批报废记录；返工关联；等级分配台账 | 使用经校准秤分别称量每项废物，核对集尘/修边日志与实际移交记录；不得与液态废水混合。 保留批次原始数量，按声明分配真实副产品负担，并将归属参考产品的失败批次数量纳入同一同质组后，再除以其正值验收参考等级净kg；该总量为零时保留绝对记录并要求审查。 | kg | 每批及相关运行时段 | 声明包含空载及返工的代表生产期间；披露日期及排除项 | 适用后整饰场址与相应批次 | 每 1 kg 参考流 | 校准；批次核对；原始记录；不确定性；供应商及移交证据 |
| cp_air | softening | particulate_air | 排放测量 | 批次；采样方法；粒径范围；浓度；排气流量；时长；捕集状态；空气子介质；不确定性；核算汇总组ID；全部纳入批次ID；整批报废记录；返工关联；等级分配台账 | 在粉尘捕集之后测量浓度与相应排气流量/时长；积分实际排放并记录位置。颗粒物身份不表示排放必然发生。 保留批次原始数量，按声明分配真实副产品负担，并将归属参考产品的失败批次数量纳入同一同质组后，再除以其正值验收参考等级净kg；该总量为零时保留绝对记录并要求审查。 | kg | 每批及相关运行时段 | 声明包含空载及返工的代表生产期间；披露日期及排除项 | 适用后整饰场址与相应批次 | 每 1 kg 参考流 | 校准；批次核对；原始记录；不确定性；供应商及移交证据 |
| cp_moisture | softening | water_vapour_air | 水分平衡或废气测量 | 批次；来料湿质量；验收质量；低等级质量；粉尘/边角料质量；各自水分比例；库存变化；废气水蒸气测量；不确定性；核算汇总组ID；全部纳入批次ID；整批报废记录；返工关联；等级分配台账 | 分别测量全部批次输出与库存的质量和水分；独立核对水分平衡或使用经校准废气水蒸气测量。未闭合水分不能直接假定为蒸发。 保留批次原始数量，按声明分配真实副产品负担，并将归属参考产品的失败批次数量纳入同一同质组后，再除以其正值验收参考等级净kg；该总量为零时保留绝对记录并要求审查。 | kg | 每批及相关运行时段 | 声明包含空载及返工的代表生产期间；披露日期及排除项 | 适用后整饰场址与相应批次 | 每 1 kg 参考流 | 校准；批次核对；原始记录；不确定性；供应商及移交证据 |
| cp_products | acceptance | downgraded_sheep_leather | 可售等级与价值 | 批次；等级；净质量；含水状态；实际销售价值；买方；返工历史；核算汇总组ID；全部纳入批次ID；整批报废记录；返工关联；等级分配台账 | 称量每个可售低等级并核对同期销售发票；将内部返工与实际出厂产品分开。 保留批次原始数量，按声明分配真实副产品负担，并将归属参考产品的失败批次数量纳入同一同质组后，再除以其正值验收参考等级净kg；该总量为零时保留绝对记录并要求审查。 | kg | 每批及相关运行时段 | 声明包含空载及返工的代表生产期间；披露日期及排除项 | 适用后整饰场址与相应批次 | 每 1 kg 参考流 | 校准；批次核对；原始记录；不确定性；供应商及移交证据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| lot_normalization | all inventory rows | 按场址、期间、物种、来料加工态、调湿状态及参考等级规格定义同质核算汇总组；保留各批记录，真实不同可售等级按allocation_subdivide及allocation_products处理。各行按原生单位汇总全部纳入批次中归属参考产品的实测或计算数量，含整批报废、空载活动及返工，再统一除以cp_mass记录的同组验收参考等级净kg。最终验收返工产出只计一次；低等级产品、包装及废物不进入分母。不得对零产出批次单独相除或丢弃其可归属负担。组分母须为正；整组无验收参考产品时，保留绝对清单及有据副产品分配，报告参考产品无法归一化并要求审查，不虚构质量或设零负担。 | cp_mass; applicable collection protocol | 每 1 kg 参考流的交换 |  |
| meter_conversion | electricity_lv; electricity_mv | 使用精确单位关系 1 kWh = 3.6 MJ 将分配后的 kWh 读数换算为 MJ，再汇总全部纳入批次，除以声明核算汇总组同一正值验收参考等级净kg，保留整批报废及返工电耗。 | cp_energy; cp_mass | 每 1 kg 参考流的 MJ |  |
| release_integration | particulate_air | 在所测运行期间积分相应实测浓度 × 排气体积，以显式单位换算为 kg，并在归一化前核对未采样期间。 | cp_air; cp_mass | 每 1 kg 参考流的颗粒物 kg |  |
| moisture_reconciliation | water_vapour_air | 从来料水分中扣除实测输出保留水分及净库存水分增加量；须独立闭合且不存在其他液体出口，才能将正余量赋予大气水蒸气。否则采用直接废气测量或保留明确数据缺口。 | cp_moisture; cp_mass | 每 1 kg 参考流的蒸发水 kg |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | all inventory rows | 核验物种、加工态、化学组成、公开 UUID 参考属性与正式中文流名；禁止原皮/坯革/成品革互相替代。 | 供应商声明；直接流/属性/单位记录 |
| quality_measurement | foreground | 使用供应商/场址实际配方与条件记录；不得编造鞣制配方、能耗、损耗、净产量、质量或寿命。确认时间代表性并核对材料/干物质/水分平衡。 | 校准；验收测试；质量平衡；原始日期；不确定性 |
| quality_completeness | boundary | 将所有实际辅料及包装记录为新增原子交换。区分活动不存在与未测量；披露缺口不等于零。湿式/涂层路线使适用性失效。 | 路线审计；采购台账；废物/空气记录；缺失数据登记 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | reference product | 确认绵羊/羔羊来源、来料为染色加脂铬鞣坯革，且无主动加水、新湿加工、热干燥或涂层；否则本 PCR 不适用。 | un-cpc-2025; goldpanel-production |
| validate_reference | finished_leather | 要求参考产品与输出行名称完全相同、同一核算汇总组的实测验收参考等级净kg为正、声明含水状态及全部限定信息；零产出批次仍纳入分子。核验双语及全部采集协议采用相同1kg参考基准。整组参考等级产出为零时保留绝对量，并报告无法归一化以供审查。 |  |
| validate_balance | foreground | 按实测不确定性核对来料固体与水分相对于验收输出、低等级、残余物、蒸发与库存变化的平衡。不编造通用收率或容差；无法解释的不平衡保留为发现。 |  |
| validate_identity | UUID rows | 重新核验公开 state-100 身份、参考属性/单位组、电压/地域和空气子介质。空 UUID 保留为明确身份缺口；候选检查与身份核验均不构成科学批准。 |  |
| validate_completeness | dataset | 适用行须有实际数量和协议，不适用行须有依据，同时提供分配依据与不确定性披露、匹配上游数据集和处理去向。不得将此部分前景称为完整从摇篮到大门。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 绵羊皮革干式机械后整饰前景过程 |
| downstream_use | secondary_dataset；background_dataset，须独立审查并链接供应商数据 |
| allowed_use | 含水状态与上游加工态匹配的无涂层铬鞣染色绵羊皮革后整饰 |
| excluded_use | 整个 CPC 覆盖；一体化鞣革；再生革；有涂层或其他物种皮革；未经进一步审查的产品比较或消费寿命 |
| required_metadata | 全部参考限定；批次日期；净产量；路线；电压；供应商上游阶段；分配；水分；废物与排放介质 |
| required_quality_disclosure | 部分前景边界；数据缺口与空身份；实际采集覆盖；不确定性；缺失动物/鞣革上游阶段；审查状态 |
| update_trigger | 物种、供应商加工态、鞣制、配方、水分、路线、涂层、电压或重要采集变化 |

## 11. 数据源

| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| un-cpc-2025 | official_guidance | UNSD, CPC Ver. 3.0 Explanatory Notes, 30 June 2025, printed p. 134. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅用于分类边界；子类只有标题，无进一步工艺说明 |
| assomac-finishing | handbook | Assomac, A03 - Finishing machinery, undated publisher page, A03.01–A03.03, A03.08. https://assomac.it/en/technological-guide/tanning-machinery/a03-finishing-machinery/ | 定性机械软化、受控水分和抽风选项；不规定通用顺序或数值性能；干式路线为明确子集 |
| goldpanel-production | handbook | GoldPanel Group, Leather Tannery Department Production Process, undated publisher page; Dry Crusting, Finishing, Quality Inspection, Types of Leather. https://goldpanelgroup.com/page/site-page/leather-tannery-department-production-process.html | 绵羊纳帕革制造背景、上游染色坯革状态及按产品确定的后整饰/分级/返工；制造商特定证据，不是行业默认值 |
