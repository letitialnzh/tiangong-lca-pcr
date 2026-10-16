---
pcr_id: pcr.farmed-live-whole-earthen-pond-spotted-babylon
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 土池养殖活体完整方斑东风螺

## 1. 范围与适用性

本 PCR 规定泰国海水沙底土池单养方斑东风螺 Babylonia areolata 的前景数据生产方法：购入孵化场苗种，实际投喂鲜低值鱼，笼捕后以活体完整状态交付养殖者产品的第一实体接收方。Petchaburi 研究试验记载了符合本范围的路线，包括泵送、曝气、初始苗种规格选择及取样和捕收笼具，并明确没有开展生长期分级。这不能证明当前普遍商业实践、现时盈利状况或任一实际交付批次的处理方式。实际捕后分选、活体暂养及呈现必须由前景生产者提供证据。由于正文与表格数值存在矛盾，且非实际前景记录，本方法不采用试验饵料系数、产量、成活率、尺寸、规格、养殖周期或财务默认值。

排除野生采集、其他物种、混养、循环水或流水混凝土及帆布池生长养殖、去壳、烹煮、冷冻、可食肉参考对象及首次实体接收后的作业。实际场内育苗须明确接收到放养的责任范围；成本表育苗资产不证明其已发生。活体暂养仅指有记录的干预；活体市场背景不推定清洗、浸水、净化、冷却温度或安全货架期。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.farmed-live-whole-earthen-pond-spotted-babylon |
| classification_refs | cpc:3.0:04492 |
| covered_products | 指定泰国海水沙底土池单养路线生产的活体完整 Babylonia areolata，包含天然壳 |
| excluded_products | 野生螺；其他物种；鲍、双壳及头足类；其他养殖系统；混养；加工、去壳或死亡最终参考产品 |
| representative_product | 养殖者产品的第一实体接收方验收的活体完整养殖方斑东风螺 |
| production_route | 购入孵化场苗种接收及初始选择；整塘与鲜鱼饲料管理生长养殖；笼捕；实际条件性捕后分选与活体暂养；真实呈现及实体交付 |
| market_state | 带天然壳的活体完整动物；FAO 历史活体渠道仅支持适用状态，不代表当前销售规模或某个具体养殖场交付门 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 养殖者产品的第一实体接收方验收的活体完整 Babylonia areolata |
| How much | 1 kg 验收完整动物净质量，含天然壳，扣除游离水、沙、容器皮重及拒收部分 |
| How well | 实体接收方验收的已声明物种、泰国池塘来源、活体状态、带天然壳完整状态及实际等级去向；不虚构规格或质量阈值 |
| How long or cycle | 已识别养殖批次及接收到验收的完整期间；关联池塘建成、批次间准备、生长养殖、捕收、暂养、交付、失败及资产服务时段 |
| reference_flow_link | `accepted_live_whole` |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 养殖者产品的第一实体接收方验收的活体完整 Babylonia areolata |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Babylonia areolata 身份; 泰国场址及池塘编号; 海水沙底土池单养; 购入孵化场苗种及实际接收; 鲜鱼饲料身份状态; 批次及期间; 笼捕; 实际分选暂养呈现分支; 活体完整天然壳状态; 验收净质量及皮重扣除; 实体接收方及验收日期; 上游苗种饲料和运输覆盖; 共享资产分配; 土地历史及未解决数据缺口 |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `accepted_mass` | reference product | Mass | kg | 采用 cp_presentation_delivery 测量同批验收活体完整动物净质量 A；扣除游离水、沙、箱和拒收动物，保留天然壳。A 必须为正。 |
| `whole_mass_basis` | all inventory rows | Actual row property | native row unit | 将每项已分配实体量按同一验收质量 A 归一化为每 1 kg 参考流。内部完整动物交接保留真实质量，不能设为 1 kg。 |
| `count_conversion` | seed_received, standing_stock, harvest_stock_in | Mass | kg | 数量转质量时保留计数、完整动物抽样质量、抽样设计及不确定性；不采用文献默认数量每千克、壳转肉系数或物种替代。 |
| `native_unit_basis` | all inventory rows | Actual instance property | native instance unit | 保留原始电量 kWh、燃料质量或有依据密度转换、水 m3、运输 t km 及服务土地单位。污染物物种、化学基准、介质和换算须明确；kg N 不是 kg 氨，kg P 不是 kg 磷酸盐。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 孵化场购入苗种在已识别泰国养殖场实体接收，具实际接收量、供应方及运输历史 |
| starting_condition_role | 前景采集起点，不切断孵化、育苗及苗种交付负担 |
| product_classification_scope | 本语义物种、养殖路线、活体完整状态及首次实体接收方门比 CPC 3.0 其他养殖软体动物范围窄 |
| recursive_input_rule | 同类别苗种或退回活体批次作为单独已识别输入，具数量、来源、既有负担和期间关联；不得对最终参考自循环，也不自动视作无负担苗种 |
| upstream_dataset_requirement | 实际接收苗种、鱼饲料、诱饵、公用工程、材料、资产及服务关联适当上游数据集或另行采集的一手活动；缺口明确保留，不省去负担 |
| disclosure | 声明场址、批次、实际步骤及旁路、历史试验适用性、真实育苗责任、上游覆盖、失败事件、土地历史、受纳介质、资产服务归属及不确定性 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route` | pond_growout, trap_harvest | 将土池单养管理生产责任与笼具移出池中存量分开。捕收输出为捕获完整活体动物，不是池中生物量、可食肉或含水总捕获质量。 | naca-babylon-pond-2005 |
| `boundary_actual_nodes` | postharvest_sort, live_hold, presentation_delivery | 分选仅在真实等级去向分离时启用；暂养仅在有可用活体前后状态及作业责任证据的有限干预时启用。呈现声明真实产品容器界面。记录唯一实际分支及每次实体交接；不强制生长期分级、清洗或净化。 | naca-babylon-pond-2005; fao-fish-feed-2009 |
| `boundary_gate` | presentation_delivery | 包括首次实体验收前的全部实体交付及保护，不受付款者或所有者限制；按真实服务商服务范围去重。记录接收者、地点、日期和验收；远程发票、出口或餐馆零售不定义本门。 | |
| `boundary_management` | pond_growout | 包括整塘、沙围网水泵鼓风机供给、水及饲料管理、含后续放养前死亡的真实苗种接收、实际场内育苗、维护、替换、损失及失败或终止养殖批次。 | naca-babylon-pond-2005 |
| `boundary_fates` | all processes | 列举有意产出、留存或退回活体存量、损失及实际处理排放去向。区分技术圈废物转移、直接载体水平衡及具体物质基本排放；不自动标废物、零负担或抵扣。 | |
| `boundary_period_assets` | all processes | 记录建成及土地历史、准备、养殖、捕收、处理交付期间；列举共享池塘蓄水池泵鼓风机、笼具、储存和车辆及全部使用节点池塘与服务期间。由单一归属者分配包括失败批次的共享负担；不重复服务商负担。 | naca-babylon-pond-2005 |

## 6. 过程清单结构

### 过程图

| process_id | Process name | Inclusion | Inclusion condition | Role | Quantitative reference |
| --- | --- | --- | --- | --- | --- |
| pond_growout | 池塘准备、苗种接收及管理生长养殖 | required | | 管理生物生产；具准备、接收到放养、生长养殖及失败期间的养殖批次模式 | 移交捕收的实际池中活体存量 |
| trap_harvest | 从池中存量笼捕收获 | required | | 独立移出及捕获产出责任；按捕收事件索引 | 实际笼捕活体完整螺 |
| postharvest_sort | 实际捕后等级去向分选 | conditional | 真实分选产生至少两种已声明等级或去向状态 | 目标、其他等级、退回存量及拒收废物独立交接；不预设生长期分级 | 实际目标及其他产出质量 |
| live_hold | 实际有限活体暂养干预 | conditional | 呈现前存在保留可用活体批次的真实干预，并有前后状态、作业及责任证据 | 保留活体状态，计实际损失，缺省作业则旁路 | 实际存活活体完整输出 |
| presentation_delivery | 保护呈现及首次实体接收方交付 | required | | 呈现记录实际容器或无包装界面；交付作业单独索引直至验收 | 1 kg 验收活体完整参考输出 |

养殖批次有独立批次索引。准备、清塘、换水、饲料储存、实际育苗、取样、捕收及资产替换具独立事件期间编号。取样后放回活体仍为存量；移出样品须记录明确去向。任何材料、燃料、服务、物种或污染物实例均无统一固定数值上限。

下列每张条件性伞式卡仅凭记录生成零、一或多个真实交换，保留其明确方向、流类型、物质材料服务身份及原生属性单位。实际属性不同须按已核实支持身份分别实例化。对于每行及实例 i，U_row,i 是以每 1 kg 参考流为基准、用该实例原生单位表示的数量；它是尚待证实的证据需求，不是经验上限、默认数值或硬性准入限值。最终数据集使用前须根据各行自身记录及不确定性独立建立边界。零值须有未发生或节点未启用证据；缺失证据不是零。仅同批验收输出具精确恒等式 A/A = 1。

### 过程：池塘准备、苗种接收及管理生长养殖（`pond_growout`）

#### 输入

##### 产品流

###### 购入并实际接收的活体孵化场苗种（`seed_received`）

称量实际接收的整个供应批次，包括接收后、放养前死亡的苗种。数量和抽样完整动物质量须核对；存活放养数单列管理字段。按实际接收量承接上游孵化、育苗和运输负担。

- 选定流：养殖场接收时的活体 Babylonia areolata 孵化场苗种
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：各具体实例实际可归属量，每 1 kg 参考流；保留原生单位及真实内部量；cp_pond_growout。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pond_growout`
- 来源：`naca-babylon-pond-2005`
- 数量范围：独立暂定行实例边界；U 是未解决数量，不是经验限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_seed_received,i
  - 单位：kg
  - 基准：每 1 kg 参考流；根据各具体行实例自身记录独立建立边界
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 实际购入用于饲料储存的冰（`feed_storage_ice`）

本卡仅记录用于饲料储存的实际购入冰质量，不是活螺参考产品用冰。场内制冰时不填购冰，而将其电力、实际供水或环境源水、资产及排放归属各对应养殖卡，由单一责任者记录制冰作业，且不重复服务负担。

- 选定流：场内鲜鱼饲料储存用冰
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：各具体实例实际可归属量，每 1 kg 参考流；保留原生单位及真实内部量；cp_pond_growout。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pond_growout`
- 来源：`naca-babylon-pond-2005`
- 数量范围：独立暂定行实例边界；U 是未解决数量，不是经验限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_feed_storage_ice,i
  - 单位：kg
  - 基准：每 1 kg 参考流；根据各具体行实例自身记录独立建立边界
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 池塘作业计量电力（`growout_electricity`）

按设备实际作业和养殖期计量或分配电量。注明供电结构及损失；购冰或完整服务已含能源与场内直接耗电分开。

- 选定流：池塘曝气、泵送、饲料储存及实际场内制冰供电
- 流属性/单位：Energy / kWh
- 数量规则：各具体实例实际可归属量，每 1 kg 参考流；保留原生单位及真实内部量；cp_pond_growout。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pond_growout`
- 来源：`naca-babylon-pond-2005`
- 数量范围：独立暂定行实例边界；U 是未解决数量，不是经验限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_growout_electricity,i
  - 单位：kWh
  - 基准：每 1 kg 参考流；根据各具体行实例自身记录独立建立边界
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 海水直接取用（`seawater_abstraction`）

按来源和日期计量进水、补水和换水。区分环境直接取水和外购技术圈供水；另计泵送能源，不设置默认换水率。

- 选定流：从实际水渠来源取用的海水
- 流属性/单位：Volume / m3
- 数量规则：各具体实例实际可归属量，每 1 kg 参考流；保留原生单位及真实内部量；cp_pond_growout。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pond_growout`
- 来源：`naca-babylon-pond-2005`
- 数量范围：独立暂定行实例边界；U 是未解决数量，不是经验限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_seawater_abstraction,i
  - 单位：m3
  - 基准：每 1 kg 参考流；根据各具体行实例自身记录独立建立边界
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 移交笼捕的池中活体存量（`standing_stock`）

按池塘、批次和交接编号将实际完整动物存量质量或公开的抽样估计移交捕收。区分池中存量、笼捕收获量及验收量；内部量不得固定为最终参考量。

- 选定流：捕收责任移交时池内活体完整 Babylonia areolata 存量
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：各具体实例实际可归属量，每 1 kg 参考流；保留原生单位及真实内部量；cp_pond_growout。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pond_growout`
- 来源：`naca-babylon-pond-2005`
- 数量范围：独立暂定行实例边界；U 是未解决数量，不是经验限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_standing_stock,i
  - 单位：kg
  - 基准：每 1 kg 参考流；根据各具体行实例自身记录独立建立边界
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 实际送处理的池塘废水（`pond_wastewater_treatment`）

仅记录实际送处理水体积、组成、固体营养物基准及处理方。与池塘水量平衡核对载体水；处理转移与直接排口分开，不重复处理排放。

- 选定流：转移至已识别处理服务的池塘废水
- 流属性/单位：Volume / m3
- 数量规则：各具体实例实际可归属量，每 1 kg 参考流；保留原生单位及真实内部量；cp_pond_growout。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pond_growout`
- 数量范围：独立暂定行实例边界；U 是未解决数量，不是经验限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_pond_wastewater_treatment,i
  - 单位：m3
  - 基准：每 1 kg 参考流；根据各具体行实例自身记录独立建立边界
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：笼捕收获（`trap_harvest`）

#### 输入

##### 产品流

###### 捕收接收的池中存量交接（`harvest_stock_in`）

按相同交接编号和实际存量质量与 standing_stock 配对；保留不确定性，不能把内部投入设为 1 kg。

- 选定流：捕收责任移交时池内活体完整 Babylonia areolata 存量
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：各具体实例实际可归属量，每 1 kg 参考流；保留原生单位及真实内部量；cp_trap_harvest。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_trap_harvest`
- 来源：`naca-babylon-pond-2005`
- 数量范围：独立暂定行实例边界；U 是未解决数量，不是经验限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_harvest_stock_in,i
  - 单位：kg
  - 基准：每 1 kg 参考流；根据各具体行实例自身记录独立建立边界
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 笼捕所得活体完整螺（`collected_live_snails`）

称量捕收完整动物并扣除游离海水、沙及笼具。分选启用时移交分选，否则按实际交接编号移交活体暂养或呈现。未捕获存活者与死亡或逃逸存量分开。

- 选定流：土池笼捕所得活体完整 Babylonia areolata
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：各具体实例实际可归属量，每 1 kg 参考流；保留原生单位及真实内部量；cp_trap_harvest。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_trap_harvest`
- 来源：`naca-babylon-pond-2005`
- 数量范围：独立暂定行实例边界；U 是未解决数量，不是经验限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_collected_live_snails,i
  - 单位：kg
  - 基准：每 1 kg 参考流；根据各具体行实例自身记录独立建立边界
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

### 过程：实际捕后分选（`postharvest_sort`）

#### 输入

##### 产品流

###### 分选接收的捕收活螺（`sort_snails_in`）

接收实际捕收交接质量；仅在分选产生至少两种明确等级或去向状态时启用。试验初始苗种选择不是生长期分级，也不能证明本捕后步骤发生。

- 选定流：土池笼捕所得活体完整 Babylonia areolata
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：各具体实例实际可归属量，每 1 kg 参考流；保留原生单位及真实内部量；cp_postharvest_sort。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_postharvest_sort`
- 来源：`naca-babylon-pond-2005`
- 数量范围：独立暂定行实例边界；U 是未解决数量，不是经验限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_sort_snails_in,i
  - 单位：kg
  - 基准：每 1 kg 参考流；根据各具体行实例自身记录独立建立边界
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

#### 输出

##### 产品流

###### 目标活体完整等级移交（`sorted_target`）

按实测数量、等级声明和交接编号移交活体暂养或呈现，不固定为最终质量。

- 选定流：分选后实际目标活体完整 Babylonia areolata 等级
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：各具体实例实际可归属量，每 1 kg 参考流；保留原生单位及真实内部量；cp_postharvest_sort。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_postharvest_sort`
- 数量范围：独立暂定行实例边界；U 是未解决数量，不是经验限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_sorted_target,i
  - 单位：kg
  - 基准：每 1 kg 参考流；根据各具体行实例自身记录独立建立边界
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 实际送处理的分选废水（`sort_wastewater_treatment`）

按处理者记录真实送处理冲洗或其他水体积及组成；直接退水分列，不重复服务商排放。

- 选定流：转移至已识别处理服务的分选废水
- 流属性/单位：Volume / m3
- 数量规则：各具体实例实际可归属量，每 1 kg 参考流；保留原生单位及真实内部量；cp_postharvest_sort。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_postharvest_sort`
- 数量范围：独立暂定行实例边界；U 是未解决数量，不是经验限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_sort_wastewater_treatment,i
  - 单位：m3
  - 基准：每 1 kg 参考流；根据各具体行实例自身记录独立建立边界
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：实际活体暂养（`live_hold`）

#### 输入

##### 产品流

###### 进入实际暂养的活体完整批次（`hold_snails_in`）

按实际交接质量及编号接收分选目标或未经分选捕收批次；查明真实存活状态、暂养起止及责任方。

- 选定流：暂养前实际活体完整 Babylonia areolata 批次
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：各具体实例实际可归属量，每 1 kg 参考流；保留原生单位及真实内部量；cp_live_hold。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_live_hold`
- 来源：`fao-fish-feed-2009`
- 数量范围：独立暂定行实例边界；U 是未解决数量，不是经验限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_hold_snails_in,i
  - 单位：kg
  - 基准：每 1 kg 参考流；根据各具体行实例自身记录独立建立边界
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

#### 输出

##### 产品流

###### 暂养结束移出的活体完整批次（`held_live_snails`）

称量存活可用动物并移交呈现；与进入批次核对状态、质量变化、死亡、拒收及交接。

- 选定流：暂养后实际活体完整 Babylonia areolata 批次
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：各具体实例实际可归属量，每 1 kg 参考流；保留原生单位及真实内部量；cp_live_hold。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_live_hold`
- 数量范围：独立暂定行实例边界；U 是未解决数量，不是经验限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_held_live_snails,i
  - 单位：kg
  - 基准：每 1 kg 参考流；根据各具体行实例自身记录独立建立边界
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 实际送处理的暂养废水（`hold_wastewater_treatment`）

按处理方记录实际处理转移体积和组成；本行不含直接排口或重复服务商排放。

- 选定流：转移至已识别处理服务的暂养废水
- 流属性/单位：Volume / m3
- 数量规则：各具体实例实际可归属量，每 1 kg 参考流；保留原生单位及真实内部量；cp_live_hold。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_live_hold`
- 数量范围：独立暂定行实例边界；U 是未解决数量，不是经验限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_hold_wastewater_treatment,i
  - 单位：m3
  - 基准：每 1 kg 参考流；根据各具体行实例自身记录独立建立边界
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：呈现及首次实体接收方交付（`presentation_delivery`）

#### 输入

##### 产品流

###### 进入呈现环节的活体完整批次（`presentation_snails_in`）

采用真实暂养、分选或直接捕收分支之一，记录数量及交接编号；旁路步骤不得重复输入。

- 选定流：呈现前实际活体完整 Babylonia areolata 批次
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：各具体实例实际可归属量，每 1 kg 参考流；保留原生单位及真实内部量；cp_presentation_delivery。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_presentation_delivery`
- 数量范围：独立暂定行实例边界；U 是未解决数量，不是经验限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_presentation_snails_in,i
  - 单位：kg
  - 基准：每 1 kg 参考流；根据各具体行实例自身记录独立建立边界
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 养殖者产品的第一实体接收方验收的活体完整方斑东风螺（`accepted_live_whole`）

本行是真实参考输出。A 为含天然壳的验收完整动物净质量，扣除游离水、沙、箱及拒收动物。核对实体接收、存活状态、物种来源及同批称量，不能换成可食肉等价量。

- 选定流：养殖者产品的第一实体接收方验收的活体完整 Babylonia areolata
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_presentation_delivery`
- 来源：`same-lot-mass-identity`
- 数量范围：同批验收质量恒等式
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`same-lot-mass-identity`

##### 废物流

##### 基本流

## 7. 分配与副产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocate_output_set` | all processes | 完整列举目标活螺、其他有意等级、其他独立有意产品、退回留存活体存量、拒收及废物，并记录交接。单养不保证只有一个销售等级。材料仅在具真实有意用途及接收者证据时成为副产品；死亡动物、污泥、伴随捕获及回用包装不自动成为有价产品。 | |
| `allocate_precedence` | all processes | 优先按真实批次、节点和产出划分实测作业。可比活体完整等级的剩余共同负担，在代表因果物理关系时按共同分离门实测完整动物质量分配，记录理由。若功能不同且无因果物理关系，以同期间真实收入份额分配，注明币种日期及价格敏感性。披露替代方案及敏感性；不套用通用经济份额、替代抵扣或低值鱼饲料零负担。 | fao-fish-feed-2009 |
| `allocate_periods` | pond_growout, trap_harvest, live_hold, presentation_delivery | 将建成、准备、成功失败养殖、分批捕收、结转存量、暂养、交付及替换终止事件关联真实期间。记录期初期末存量及剩余服务能力。失败与闲置作业归属造成该作业的服务产出系统；不选择性删除失败期间，也不任意设定年批次数。 | |
| `allocate_shared` | all processes | 为池塘蓄水池水泵鼓风机、饲料冷储、笼具、分选暂养设施及车辆维护单一资产服务台账。列举全部节点池塘批次及期间。优先分表计量，否则采用有证据的因果作业如计量水量扬程、工时负荷、面积时间或载重距离，记录分母、份额、理由及敏感性。按有证据服务能力分配资产供给替换，不设通用寿命。份额须对完整共享负担仅核算一次。 | |
| `allocate_no_duplicate` | all processes | 内部配对交接具相同编号及真实数量，上游负担不重复扣除或计入。完整购入服务含服务商燃料资产排放；完整服务与前景组件清单二选一。饲料领用诱饵、动物批次及回用容器仅核算一次。拒收或退回批次的作业跟随真实去向，不虚构避免影响。 | |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_pond_growout | pond_growout | 每张养殖卡及具体实例 | 接收、批次、仪表、存量、废物、土地、资产及环境记录 | 场址；池塘；批次；日期；行和实例；供应者物种状态；接收 kg 数量；放养前死亡；存活放养；饲料诱饵库存；进退水储量；电量；燃料；材料替换质量；土地状态面积时间；资产使用者服务期；抽样设计；污染物物质基准介质浓度和水量；废物处理者；失败；交接编号；A | 经校准秤称量接收饲料废物，核对发票计数抽样及存量；计量水和能源或保留有证据作业分配；追溯资产土地记录；代表性进退水采样并保留实验室基准检出限或有依据模型 | 实际实例 kg、m3、kWh、土地服务原生单位 | 每次接收投喂事件及仪表期间；完整批次和失败结算 | 相关建成及原土地历史；接收准备生长失败维护和服务期间 | 已识别泰国池塘及包括其他使用者的共享养殖场资产 | 每 1 kg 参考流 | 秤仪表校准、发票、日志、实验室模型方法、未检出、归属服务台账、存量水平衡、不确定性及缺失 |
| cp_trap_harvest | trap_harvest | 每张捕收卡及具体实例 | 笼捕事件、称量、诱饵、作业和去向记录 | 池塘；批次；事件日期；进入存量估计；交接编号；捕获活体 kg；诱饵身份质量来源；笼具取样作业；伴随产出；拒收死亡未捕逃逸存量；废物排放去向；接收者；A | 称量实际捕获动物净量并扣游离水沙笼；将存量抽样与捕获核对；计量诱饵和自有购入捕收作业；记录全部移出、留存或放回去向 | 实际实例 kg 及设备服务原生单位 | 每次取样捕收事件及最终存量结算 | 选定养殖批次的全部捕收事件，包括失败尝试 | 已识别池塘及捕收责任方 | 每 1 kg 参考流 | 校准、事件日志、抽样不确定性、诱饵台账、服务说明及完整去向核对 |
| cp_postharvest_sort | postharvest_sort | 每张分选卡及具体实例 | 实际等级去向分离及支持作业记录 | 启用证据；进入交接；等级标签；目标其他退回拒收 kg；接收方期间；实际材料能源供水和直接水；取退水处理体积；物质基准介质浓度；废物去向；A | 观察真实分离并用经校准秤称量每个产出状态；追溯交接、支持作业及真实冲洗、直接水平衡、处理和具体物质排放；未发生时记录旁路 | 实际实例 kg 及公用工程服务原生单位 | 每次实际分选事件 | 选定批次捕收到下次交接期间 | 已识别分选责任者及位置 | 每 1 kg 参考流 | 秤记录、等级去向台账、启用旁路证据、进出核对及不确定性 |
| cp_live_hold | live_hold | 每张暂养卡及具体实例 | 实际活体干预、仪表及去向记录 | 启用；进入批次 kg 活体状态；起止；责任者；真实技术；水能源材料作业；存活 kg；死亡拒收；废物处理；物质基准介质；交接编号；A | 观察记录有限干预；称量进入及存活动物；计量真实支持和直接水；以方法证据化验或模型估算排放；保留旁路及失败干预记录 | 实际实例 kg、m3、kWh 及服务原生单位 | 每次暂养事件及计量采样期间 | 实际批次进入到移出，包括死亡失败 | 已识别暂养责任者及地点 | 每 1 kg 参考流 | 活体状态时间日志、校准称量计量、实验室模型基准、作业归属、水质量去向核对 |
| cp_presentation_delivery | presentation_delivery | 每张呈现交付卡及验收参考 | 皮重、发运、路线、实体接收及验收记录 | 来源交接；批次物种来源；真实包装回用归属；总 kg；游离水沙皮重拒收 kg；验收活体完整净质量 A；实体接收者地点日期；活体状态；真实载重距离装载空返；支持作业；拒收去向；共享服务期间 | 使用经校准秤作同批完整动物净称量并查实体验收；核对发运、皮重和活体状态；检查真实呈现、包装回收及接收前真实路线，不受付款者或所有者限制；保留支持排放证据 | A 及材料为 kg；运输为 t km；其他真实原生单位 | 每次发运实体接收拒收及容器退回；仪表服务期间 | 呈现至首次实体验收及相关接收前失败 | 已识别养殖场、交付责任者及首次实体接收方 | 每 1 kg 参考流 | 校准、配对发运接收、活体状态证据、皮重杂物扣除、路线记录、归属退回台账及完整拒收死亡记录 |

各节点协议汇总到相同参考基准：先按已规定产出、期间和共享作业规则对实测原生量只分配一次，再除以同一正值验收净质量 A。真实内部交接配对而不固定为 1 kg；仅 accepted_live_whole 输出给出 A/A = 1。节点原始记录须保留其他产出份额、水量去向核对及容器退回。

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| gate_mass_identity | accepted_live_whole | A = 同批验收活体完整动物净质量 kg；A/A = 每 1 kg 参考流中的 1 kg | 验收总质量；扣除游离水沙皮重拒收；cp_presentation_delivery | 验收参考质量恒等式 | same-lot-mass-identity |
| instance_attribution | all inventory rows | 各真实实例量按记录份额仅归属到节点、产出及期间一次，再除以同一正值 A；保留原生分子单位及不确定性 | 节点协议；真实量；共享产出期间台账；A | 每 1 kg 参考流实例量 | |
| stock_fate_reconciliation | pond_growout, trap_harvest, postharvest_sort, live_hold, presentation_delivery | 以兼容的实测数量质量基准核对期初存量、真实接收交接、期末存活、有意产出、死亡及其他移出；生长须另有证据，不能假设湿质量守恒 | 各节点协议；交接编号；计数完整质量抽样；生长存量去向记录 | 含不确定性的完整存量去向核对 | |
| pollutant_water_basis | collect_pond_pollutant_releases, collect_sort_pollutant_releases, collect_hold_environment | 采用实际浓度及相应水量时间、物种基准换算证据和适用的入口背景储量处理项；直接排放和处理转移分开 | 节点协议；配对样品；计量水；实验室基准；有依据模型 | 已命名物质介质排放清单及不确定性 | |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity_gate | accepted_live_whole | 物种池塘路线、天然壳完整状态及真实活体状态须符合实体接收方验收；文献活体渠道或发票不能证明实际批次交付 | 苗种来源记录；同批实体接收；称量及活体状态证据 |
| dq_complete_periods | all processes | 完整准备到验收活动及失败闲置期间、土地历史、共享使用者服务分母、替换存量项；不选择成功批次数据 | 节点事件台账、土地资产失败记录、完整期间边界 |
| dq_measurement | all inventory rows | 保留原生单位及每个具体实例的属性支持身份、校准抽样基准检出限、污染物介质及换算不确定性 | 校准；化验模型；原始单位；密度计数及物种换算证据 |
| dq_ranges | all inventory rows | 将各独立符号 U_row,i 替换为经审查记录边界或保留量值缺口；不统一经验上限、不虚构试验默认、不自动填零、不将暂定限值用于关键发布约束 | 行实例范围证据及缺失报告 |
| dq_sources | all processes | 历史试验仅支持符合范围路线；矛盾数值及经济值不得用作当前生产默认。鱼饲料及诱饵须保留来源分配证据 | 前景适用性比较及上游来源负担记录 |
| dq_bindings | all inventory rows | 实际交换须核实具体流属性单位身份；条件性伞式语义名称不提供 UUID，也不使最终数据集完整 | 具体实例详情支持核实及未解决身份登记 |
| `collect_fresh_fish_feed` | `pond_growout`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：按实际物种和供货状态区分的鲜鱼饲料. 逐项记录鱼种、整鱼或鱼架状态、购入质量、储存损失和投喂量。查明捕捞或养殖及加工来源、负担分配；低值或俗称杂鱼不能证明其为零负担废物。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则：各具体实例实际可归属量，每 1 kg 参考流；保留原生单位及真实内部量；cp_pond_growout。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_pond_growout` <br> - 来源：`naca-babylon-pond-2005`; `fao-fish-feed-2009` <br> - 数量范围：独立暂定行实例边界；U 是未解决数量，不是经验限值 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_fresh_fish_feed,i <br> - 单位：kg <br> - 基准：每 1 kg 参考流；根据各具体行实例自身记录独立建立边界 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_growout_fuels` | `pond_growout`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：已识别池塘设备消耗的燃料或润滑剂. 逐项实例化燃料或润滑剂，注明配方、生物来源比例及体积记录转质量证据；发动机运行和维护关联养殖期。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则：各具体实例实际可归属量，每 1 kg 参考流；保留原生单位及真实内部量；cp_pond_growout。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_pond_growout` <br> - 来源：`naca-babylon-pond-2005` <br> - 数量范围：独立暂定行实例边界；U 是未解决数量，不是经验限值 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_growout_fuels,i <br> - 单位：kg <br> - 基准：每 1 kg 参考流；根据各具体行实例自身记录独立建立边界 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_pond_materials_assets` | `pond_growout`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际池塘、蓄水池、沙、围网、管线、水泵及鼓风机材料或资产供给. 按材料和替换质量分别实例化。记录既有或新建资产、建造维护、寿命证据、池塘面积及土地历史。共享泵、蓄水池、鼓风机须覆盖全部使用池塘和时段，包括失败养殖批次。实际在本节点运行的饲料储存或制冰资产须纳入且共享作业仅分配一次。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则：各具体实例实际可归属量，每 1 kg 参考流；保留原生单位及真实内部量；cp_pond_growout。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_pond_growout` <br> - 来源：`naca-babylon-pond-2005` <br> - 数量范围：独立暂定行实例边界；U 是未解决数量，不是经验限值 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_pond_materials_assets,i <br> - 单位：kg <br> - 基准：每 1 kg 参考流；根据各具体行实例自身记录独立建立边界 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_growout_management_services` | `pond_growout`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际购入的整塘、苗种运输、育苗或管理服务. 按原生单位分别建立具体服务实例。实际有场内育苗时明确接收到放养的投入、死亡和输出责任；不能仅凭投资表推定育苗阶段。购入完整服务时不重复服务商燃料、资产和排放。 <br> - 流属性/单位：实际服务属性 / 原生服务单位 <br> - 数量规则：各具体实例实际可归属量，每 1 kg 参考流；保留原生单位及真实内部量；cp_pond_growout。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_pond_growout` <br> - 来源：`naca-babylon-pond-2005` <br> - 数量范围：独立暂定行实例边界；U 是未解决数量，不是经验限值 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_growout_management_services,i <br> - 单位：native service unit <br> - 基准：每 1 kg 参考流；根据各具体行实例自身记录独立建立边界 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_growout_supplied_water` | `pond_growout`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：按来源质量及场内用途区分的实际供水产品. 实际购入或供给公用水与环境取水分列，包括真实存在场内制冰时用水。查明淡海水质量、供给者及处理；不得推定海水制冰或重复服务商泵送处理。 <br> - 流属性/单位：Volume / m3 <br> - 数量规则：各具体实例实际可归属量，每 1 kg 参考流；保留原生单位及真实内部量；cp_pond_growout。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_pond_growout` <br> - 数量范围：独立暂定行实例边界；U 是未解决数量，不是经验限值 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_growout_supplied_water,i <br> - 单位：m3 <br> - 基准：每 1 kg 参考流；根据各具体行实例自身记录独立建立边界 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_pond_land_use` | `pond_growout`; 输入; 基本流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：按土地状态区分的实际土地占用或转化. 按真实服务时段分别实例化占用面积时间及转化面积，注明先前土地状态、建成日期、证据和分配。既有池塘不消除历史转化；缺失历史须披露，不虚构因子。 <br> - 流属性/单位：实际土地属性 / 原生土地单位 <br> - 数量规则：各具体实例实际可归属量，每 1 kg 参考流；保留原生单位及真实内部量；cp_pond_growout。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_pond_growout` <br> - 数量范围：独立暂定行实例边界；U 是未解决数量，不是经验限值 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_pond_land_use,i <br> - 单位：native land unit <br> - 基准：每 1 kg 参考流；根据各具体行实例自身记录独立建立边界 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_growout_other_direct_water` | `pond_growout`; 输入; 基本流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：从单独已识别公用水来源直接取用的实际水. 仅在管理、饲料储存或场内制冰真实从有证据来源直接环境取水时记录。查明来源数量；seawater_abstraction 已记录水渠海水不在本采集义务重复。不预设需水或来源。 <br> - 流属性/单位：Volume / m3 <br> - 数量规则：各具体实例实际可归属量，每 1 kg 参考流；保留原生单位及真实内部量；cp_pond_growout。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_pond_growout` <br> - 数量范围：独立暂定行实例边界；U 是未解决数量，不是经验限值 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_growout_other_direct_water,i <br> - 单位：m3 <br> - 基准：每 1 kg 参考流；根据各具体行实例自身记录独立建立边界 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_growout_other_products` | `pond_growout`; 输出; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际单独销售的生物或回收材料产出. 列举每项有意产出及实体接收方、质量和负担分配。不能根据经济表脚注不一致虚构海鲈或混养产出；实际混养路线在本 PCR 之外。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则：各具体实例实际可归属量，每 1 kg 参考流；保留原生单位及真实内部量；cp_pond_growout。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_pond_growout` <br> - 来源：`naca-babylon-pond-2005` <br> - 数量范围：独立暂定行实例边界；U 是未解决数量，不是经验限值 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_growout_other_products,i <br> - 单位：kg <br> - 基准：每 1 kg 参考流；根据各具体行实例自身记录独立建立边界 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_growout_waste` | `pond_growout`; 输出; 废物流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：按组成和处理去向区分的实际移出池塘废物. 分别实例化放养前及养殖期死亡动物、回收残饵、污泥、破损围网塑料、废油及其他移出废物。记录干湿基、水分、接收者和处理；留在池底的沉积物不能同时列为废物转移和环境排放。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则：各具体实例实际可归属量，每 1 kg 参考流；保留原生单位及真实内部量；cp_pond_growout。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_pond_growout` <br> - 来源：`naca-babylon-pond-2005` <br> - 数量范围：独立暂定行实例边界；U 是未解决数量，不是经验限值 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_growout_waste,i <br> - 单位：kg <br> - 基准：每 1 kg 参考流；根据各具体行实例自身记录独立建立边界 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_pond_water_return` | `pond_growout`; 输出; 基本流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：直接排入已识别受纳水体的水. 直接排口体积及受纳介质与蒸发、渗漏和储量变化分开。送处理水列 pond_wastewater_treatment。载体水本身不是污染物质量或避免影响抵扣。 <br> - 流属性/单位：Volume / m3 <br> - 数量规则：各具体实例实际可归属量，每 1 kg 参考流；保留原生单位及真实内部量；cp_pond_growout。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_pond_growout` <br> - 来源：`naca-babylon-pond-2005` <br> - 数量范围：独立暂定行实例边界；U 是未解决数量，不是经验限值 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_pond_water_return,i <br> - 单位：m3 <br> - 基准：每 1 kg 参考流；根据各具体行实例自身记录独立建立边界 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_pond_pollutant_releases` | `pond_growout`; 输出; 基本流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：向明确水、土壤或空气介质排放的实际已命名污染物. 按实测或有依据模型建立各物质及介质实例：氮物种及以氮计基准、磷物种及以磷计基准、实际报告有机物、沉积物或金属。配对进出负荷及存量项；不得将总氨氮等同氨质量，或将全部载体水标成废水污染。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则：各具体实例实际可归属量，每 1 kg 参考流；保留原生单位及真实内部量；cp_pond_growout。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_pond_growout` <br> - 来源：`naca-babylon-pond-2005` <br> - 数量范围：独立暂定行实例边界；U 是未解决数量，不是经验限值 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_pond_pollutant_releases,i <br> - 单位：kg <br> - 基准：每 1 kg 参考流；根据各具体行实例自身记录独立建立边界 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_growout_air_releases` | `pond_growout`; 输出; 基本流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：池塘作业向空气排放的实际已命名气体或颗粒物. 实际发生时分别记录化石和生物源 CO2、其他气体及粒径，注明因子或实测及空气介质。池塘生物气体仅凭场址方法证据纳入。来源未知的通用 CO2 不能继承化石专用 UUID；不得一概填零或采用推测因子。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则：各具体实例实际可归属量，每 1 kg 参考流；保留原生单位及真实内部量；cp_pond_growout。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_pond_growout` <br> - 数量范围：独立暂定行实例边界；U 是未解决数量，不是经验限值 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_growout_air_releases,i <br> - 单位：kg <br> - 基准：每 1 kg 参考流；根据各具体行实例自身记录独立建立边界 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_harvest_bait` | `trap_harvest`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际投入捕收笼具的诱饵. 单列诱饵身份、实际购入或转移量及剩余量，和养殖饲料分开。同一饲料库存领用时核对单一台账且只归属一次，不设通用诱饵比。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则：各具体实例实际可归属量，每 1 kg 参考流；保留原生单位及真实内部量；cp_trap_harvest。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_trap_harvest` <br> - 来源：`naca-babylon-pond-2005` <br> - 数量范围：独立暂定行实例边界；U 是未解决数量，不是经验限值 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_harvest_bait,i <br> - 单位：kg <br> - 基准：每 1 kg 参考流；根据各具体行实例自身记录独立建立边界 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_harvest_services_assets` | `trap_harvest`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际笼具材料供给或完整捕收服务. 按实际原生属性实例化笼具材料、替换、能源和完整购入服务。区分取样与捕收及共享时段；自有设备排放列 collect_harvest_releases，完整服务自带上游负担。 <br> - 流属性/单位：实际实例属性 / 原生实例单位 <br> - 数量规则：各具体实例实际可归属量，每 1 kg 参考流；保留原生单位及真实内部量；cp_trap_harvest。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_trap_harvest` <br> - 来源：`naca-babylon-pond-2005` <br> - 数量范围：独立暂定行实例边界；U 是未解决数量，不是经验限值 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_harvest_services_assets,i <br> - 单位：native instance unit <br> - 基准：每 1 kg 参考流；根据各具体行实例自身记录独立建立边界 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_harvest_other_intended` | `trap_harvest`; 输出; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际独立销售的伴随捕收产出. 列举实际有意产出身份、交接及分配；不预设通用副渔获产品或销售。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则：各具体实例实际可归属量，每 1 kg 参考流；保留原生单位及真实内部量；cp_trap_harvest。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_trap_harvest` <br> - 数量范围：独立暂定行实例边界；U 是未解决数量，不是经验限值 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_harvest_other_intended,i <br> - 单位：kg <br> - 基准：每 1 kg 参考流；根据各具体行实例自身记录独立建立边界 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_harvest_reject_waste` | `trap_harvest`; 输出; 废物流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：按组成及去向区分的实际捕收废物. 记录实际移出待处置的破损死亡动物、回收诱饵、沙及非目标材料；放回活体、逃逸动物及留在池塘的材料单列去向记录，不能虚构废物转移。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则：各具体实例实际可归属量，每 1 kg 参考流；保留原生单位及真实内部量；cp_trap_harvest。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_trap_harvest` <br> - 数量范围：独立暂定行实例边界；U 是未解决数量，不是经验限值 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_harvest_reject_waste,i <br> - 单位：kg <br> - 基准：每 1 kg 参考流；根据各具体行实例自身记录独立建立边界 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_harvest_releases` | `trap_harvest`; 输出; 基本流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际已命名捕收污染物及受纳介质. 按物质及介质实例化实际直接燃料排放、分别列化石和生物源 CO2、气体颗粒物、泄漏及其他实测排放；记录遗失渔具、逃逸和栖息地观察，不虚构基本流因子或抵扣。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则：各具体实例实际可归属量，每 1 kg 参考流；保留原生单位及真实内部量；cp_trap_harvest。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_trap_harvest` <br> - 数量范围：独立暂定行实例边界；U 是未解决数量，不是经验限值 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_harvest_releases,i <br> - 单位：kg <br> - 基准：每 1 kg 参考流；根据各具体行实例自身记录独立建立边界 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_sort_support` | `postharvest_sort`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际分选材料、公用工程或完整服务. 记录实际分选设备材料、电力、供水产品和完整服务，注明来源及归属。环境直接水列 collect_sort_direct_water，真实输出分列退水处理污染物卡。不预设清洗、净化或规格阈值。 <br> - 流属性/单位：实际实例属性 / 原生实例单位 <br> - 数量规则：各具体实例实际可归属量，每 1 kg 参考流；保留原生单位及真实内部量；cp_postharvest_sort。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_postharvest_sort` <br> - 数量范围：独立暂定行实例边界；U 是未解决数量，不是经验限值 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_sort_support,i <br> - 单位：native instance unit <br> - 基准：每 1 kg 参考流；根据各具体行实例自身记录独立建立边界 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_sort_direct_water` | `postharvest_sort`; 输入; 基本流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：按来源区分的实际分选干预直接取水. 仅在真实分选或冲洗中环境直接取水时发生。记录来源、计量和期间；供水产品仍列 collect_sort_support。不预设清洗。 <br> - 流属性/单位：Volume / m3 <br> - 数量规则：各具体实例实际可归属量，每 1 kg 参考流；保留原生单位及真实内部量；cp_postharvest_sort。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_postharvest_sort` <br> - 数量范围：独立暂定行实例边界；U 是未解决数量，不是经验限值 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_sort_direct_water,i <br> - 单位：m3 <br> - 基准：每 1 kg 参考流；根据各具体行实例自身记录独立建立边界 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_sorted_other_grades` | `postharvest_sort`; 输出; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际独立销售或留养的活体完整螺等级. 分别实例化降级或其他等级及实际接收者或结转库存。返回养殖的活体批次按重新开启时段及负担记录内部转移，不是第二个最终参考输出。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则：各具体实例实际可归属量，每 1 kg 参考流；保留原生单位及真实内部量；cp_postharvest_sort。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_postharvest_sort` <br> - 数量范围：独立暂定行实例边界；U 是未解决数量，不是经验限值 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_sorted_other_grades,i <br> - 单位：kg <br> - 基准：每 1 kg 参考流；根据各具体行实例自身记录独立建立边界 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_sort_rejects` | `postharvest_sort`; 输出; 废物流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：按组成及去向区分的实际捕后分选废物. 分开记录死亡或拒收不能销售动物、沙、杂物和包装废物；实际送处理冲洗水仅列 sort_wastewater_treatment。注明各去向，不自动抵扣。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则：各具体实例实际可归属量，每 1 kg 参考流；保留原生单位及真实内部量；cp_postharvest_sort。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_postharvest_sort` <br> - 数量范围：独立暂定行实例边界；U 是未解决数量，不是经验限值 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_sort_rejects,i <br> - 单位：kg <br> - 基准：每 1 kg 参考流；根据各具体行实例自身记录独立建立边界 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_sort_water_return` | `postharvest_sort`; 输出; 基本流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际分选向明确水体直接退水. 计量实际直接退水体积及受纳水，与储量、蒸发和处理转移分开；载体水不是污染物质量。 <br> - 流属性/单位：Volume / m3 <br> - 数量规则：各具体实例实际可归属量，每 1 kg 参考流；保留原生单位及真实内部量；cp_postharvest_sort。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_postharvest_sort` <br> - 数量范围：独立暂定行实例边界；U 是未解决数量，不是经验限值 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_sort_water_return,i <br> - 单位：m3 <br> - 基准：每 1 kg 参考流；根据各具体行实例自身记录独立建立边界 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_sort_pollutant_releases` | `postharvest_sort`; 输出; 基本流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际已命名分选污染物及受纳介质. 仅在真实实测或模型直接排放时发生：明确物质、营养元素物种基准、介质、水量及方法。计入实际直接燃烧气体并分开化石生物源 CO2；不得采用通用有机物水 UUID 或自动填零。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则：各具体实例实际可归属量，每 1 kg 参考流；保留原生单位及真实内部量；cp_postharvest_sort。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_postharvest_sort` <br> - 数量范围：独立暂定行实例边界；U 是未解决数量，不是经验限值 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_sort_pollutant_releases,i <br> - 单位：kg <br> - 基准：每 1 kg 参考流；根据各具体行实例自身记录独立建立边界 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_hold_support` | `live_hold`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际活体暂养材料、供水、能源或完整服务. 仅记录已观察到的有限干预及实际供水、曝气、冷却和物资、原生数量与责任。不规定浸水、温度、净化、消毒或货架期。直接取水列 collect_hold_direct_water；实际退水、处理和污染物使用各自独立输出卡。 <br> - 流属性/单位：实际实例属性 / 原生实例单位 <br> - 数量规则：各具体实例实际可归属量，每 1 kg 参考流；保留原生单位及真实内部量；cp_live_hold。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_live_hold` <br> - 数量范围：独立暂定行实例边界；U 是未解决数量，不是经验限值 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_hold_support,i <br> - 单位：native instance unit <br> - 基准：每 1 kg 参考流；根据各具体行实例自身记录独立建立边界 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_hold_direct_water` | `live_hold`; 输入; 基本流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：按来源区分的实际活体暂养直接取水. 仅按来源、计量及期间记录实际环境直接取水；供水产品仍列 collect_hold_support。不能从活体销售状态推定需水。 <br> - 流属性/单位：Volume / m3 <br> - 数量规则：各具体实例实际可归属量，每 1 kg 参考流；保留原生单位及真实内部量；cp_live_hold。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_live_hold` <br> - 数量范围：独立暂定行实例边界；U 是未解决数量，不是经验限值 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_hold_direct_water,i <br> - 单位：m3 <br> - 基准：每 1 kg 参考流；根据各具体行实例自身记录独立建立边界 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_hold_other_live_products` | `live_hold`; 输出; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：暂养移出的实际独立有意其他活体完整批次. 逐项列举真实其他活体等级去向及移交呈现、其他接收方或结转存量的实体交接。可存活退回批次仍是存量并承接真实后续作业，不得悄然标废物或与 held_live_snails 及最终验收输出重复。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则：各具体实例实际可归属量，每 1 kg 参考流；保留原生单位及真实内部量；cp_live_hold。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_live_hold` <br> - 数量范围：独立暂定行实例边界；U 是未解决数量，不是经验限值 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_hold_other_live_products,i <br> - 单位：kg <br> - 基准：每 1 kg 参考流；根据各具体行实例自身记录独立建立边界 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_hold_waste` | `live_hold`; 输出; 废物流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：按组成及处理去向区分的实际活体暂养废物. 按去向分别记录死亡或拒收动物及废弃固体材料；送处理水仅列 hold_wastewater_treatment。验收产品归一化不能悄然省去死亡负担。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则：各具体实例实际可归属量，每 1 kg 参考流；保留原生单位及真实内部量；cp_live_hold。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_live_hold` <br> - 数量范围：独立暂定行实例边界；U 是未解决数量，不是经验限值 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_hold_waste,i <br> - 单位：kg <br> - 基准：每 1 kg 参考流；根据各具体行实例自身记录独立建立边界 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_hold_water_return` | `live_hold`; 输出; 基本流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际活体暂养向明确水体直接退水. 计量实际退水体积、受纳介质及储量蒸发项；已命名污染物质量列 collect_hold_environment，与处理转移分开。 <br> - 流属性/单位：Volume / m3 <br> - 数量规则：各具体实例实际可归属量，每 1 kg 参考流；保留原生单位及真实内部量；cp_live_hold。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_live_hold` <br> - 数量范围：独立暂定行实例边界；U 是未解决数量，不是经验限值 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_hold_water_return,i <br> - 单位：m3 <br> - 基准：每 1 kg 参考流；根据各具体行实例自身记录独立建立边界 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_hold_environment` | `live_hold`; 输出; 基本流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：向明确受纳介质排放的实际已命名暂养排放物. 仅凭方法证据实例化真实污染物及介质、化石与生物源 CO2 和生物过程排放。直接取水和退水有独立体积卡；保留水量平衡，不虚构冲洗。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则：各具体实例实际可归属量，每 1 kg 参考流；保留原生单位及真实内部量；cp_live_hold。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_live_hold` <br> - 数量范围：独立暂定行实例边界；U 是未解决数量，不是经验限值 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_hold_environment,i <br> - 单位：kg <br> - 基准：每 1 kg 参考流；根据各具体行实例自身记录独立建立边界 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_presentation_materials` | `presentation_delivery`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际容器、衬垫、固定材料、标签或可重复呈现资产. 分别实例化实际材料及皮重；记录一次性或回用归属、真实周转次数、清洁替换作业和接收方或使用终结交接。无包装交接明确为无包装作业，不是产品上游零负担。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则：各具体实例实际可归属量，每 1 kg 参考流；保留原生单位及真实内部量；cp_presentation_delivery。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_presentation_delivery` <br> - 数量范围：独立暂定行实例边界；U 是未解决数量，不是经验限值 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_presentation_materials,i <br> - 单位：kg <br> - 基准：每 1 kg 参考流；根据各具体行实例自身记录独立建立边界 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_delivery_service` | `presentation_delivery`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际接收前完整运输或交付服务. 记录首次实体接收前真实完整购入运输作业、载重、路线、距离、装载率、空返和活体保护，不受付款者或所有者限制。交付与包装分开。自营燃料资产列 collect_delivery_owned_inputs，排放列 collect_delivery_releases。发票地点或付款不终止实体责任；按服务范围去重。 <br> - 流属性/单位：运输服务 / t km <br> - 数量规则：各具体实例实际可归属量，每 1 kg 参考流；保留原生单位及真实内部量；cp_presentation_delivery。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_presentation_delivery` <br> - 数量范围：独立暂定行实例边界；U 是未解决数量，不是经验限值 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_delivery_service,i <br> - 单位：t km <br> - 基准：每 1 kg 参考流；根据各具体行实例自身记录独立建立边界 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_delivery_owned_inputs` | `presentation_delivery`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际接收前自营燃料、资产、公用工程或保护投入. 首次实体验收前按原生单位分别实例化真实燃料润滑剂质量、电能、车辆容器材料或资产服务及保护物资，不受付款者或所有者限制。完整购入 collect_delivery_service 排除相同服务商组件输入；直接排放列 collect_delivery_releases。 <br> - 流属性/单位：实际实例属性 / 原生实例单位 <br> - 数量规则：各具体实例实际可归属量，每 1 kg 参考流；保留原生单位及真实内部量；cp_presentation_delivery。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_presentation_delivery` <br> - 数量范围：独立暂定行实例边界；U 是未解决数量，不是经验限值 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_delivery_owned_inputs,i <br> - 单位：native instance unit <br> - 基准：每 1 kg 参考流；根据各具体行实例自身记录独立建立边界 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_delivery_other_products` | `presentation_delivery`; 输出; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际单独验收的其他活体批次或可回收包装产品. 逐项列举独立有意产出、接收方及分配。回用包装退回属于资产归还，不自动成为可售副产品；其他批次不能重复列入 accepted_live_whole。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则：各具体实例实际可归属量，每 1 kg 参考流；保留原生单位及真实内部量；cp_presentation_delivery。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_presentation_delivery` <br> - 数量范围：独立暂定行实例边界；U 是未解决数量，不是经验限值 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_delivery_other_products,i <br> - 单位：kg <br> - 基准：每 1 kg 参考流；根据各具体行实例自身记录独立建立边界 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_delivery_rejects` | `presentation_delivery`; 输出; 废物流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：按组成及去向区分的实际接收前交付废物. 记录参考验收前死亡、拒收、材料破损及废物去向；退回活体仍为库存并承接实际后续负担。不能将全部拒收标废物或假设移走其负担。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则：各具体实例实际可归属量，每 1 kg 参考流；保留原生单位及真实内部量；cp_presentation_delivery。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_presentation_delivery` <br> - 数量范围：独立暂定行实例边界；U 是未解决数量，不是经验限值 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_delivery_rejects,i <br> - 单位：kg <br> - 基准：每 1 kg 参考流；根据各具体行实例自身记录独立建立边界 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_delivery_releases` | `presentation_delivery`; 输出; 基本流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际已命名接收前运输或呈现污染物及介质. 实例化实际自营燃料排放，分别列化石或生物源 CO2、其他气体颗粒物、泄漏及真实水和污染物排放。完整购入服务已经含服务商排放时不得重复。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则：各具体实例实际可归属量，每 1 kg 参考流；保留原生单位及真实内部量；cp_presentation_delivery。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_presentation_delivery` <br> - 数量范围：独立暂定行实例边界；U 是未解决数量，不是经验限值 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_delivery_releases,i <br> - 单位：kg <br> - 基准：每 1 kg 参考流；根据各具体行实例自身记录独立建立边界 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `dq_logistics_water_balance` | 运输、服务和水/营养物平衡 | 运输实际载荷包括随行水、冰、包装及其他货物；空返或调位虽无产品载荷仍有活动负荷，须以实际燃料/距离/车辆服务及明确分配计入，不能以零吨公里消去。完整服务与其已覆盖燃料、材料、资产和直接排放不得重复计入。外部取水、供水产品、内部循环和实际返排水分别计量；内部循环不得再从外部取水中重复扣减。净营养物增量/滞留只用于独立平衡诊断，不自动成为负基本流、负排放或避免负荷。 | 实际载荷和车辆活动记录、服务覆盖、同批水/物质平衡与方法证据 |

## 9. 验证规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_scope_gate` | accepted_live_whole | 拒绝错误物种、野生混养其他路线、加工死亡最终状态、缺首次实体接收方门、验收 A 或皮重扣除。天然壳属于完整质量；不能以可食肉替代。 | naca-babylon-pond-2005 |
| `validate_node_states` | all processes | 检查养殖批次模式及完整事件期间关联；要求池中存量到捕获输出的捕收交接。启用分选时声明目标及全部其他退回拒收状态和交接。启用暂养时声明已观察前后活体状态及真实干预损失；呈现声明产品包装界面和单独证实的交付。旁路须真实记录。 | |
| `validate_balance_fates` | all processes | 检查含放养前死亡的真实接收、完整动物交接存量核对、饲料诱饵库存平衡、水平衡、完整有意产出、废物处理者及直接排放介质。未捕或逃逸存量不自动成为废物交换；处理转移不得重复排放。 | |
| `validate_attribution` | all processes | 核对每项产出、共享资产服务和期间分配分母为包含失败闲置替换及结转的完整负担且只计一次；要求因果理由及敏感性。完整购入服务不能与服务商组件重复计入。 | |
| `validate_amount_range` | all inventory rows | 检查同批正值 A、每 1 kg 参考流量、实际内部交接、独立原生单位实例边界及不确定性。仅 accepted_live_whole 具精确 1..1 恒等式；符号上限仍为未解决证据需求，不是通过验证的经验限值。 | same-lot-mass-identity |
| `validate_identity_evidence` | all inventory rows | 具体数据集交换须准确核实流属性单位支持。候选方法可保留已登记未解决语义卡；不代表数据集完整、可启用方法或发布就绪。CO2 来源、营养物基准或污染物介质未知时须保持未解决。 | |
| `validate_source_limits` | all processes | 要求当前前景路线交付门证据；不声称普遍商业盈利，不复制矛盾试验数值或假设生长期分级，不仅凭低值而给予鱼饲料零负担。 | naca-babylon-pond-2005; fao-fish-feed-2009 |
| `validate_atomic_completion` | 所有适用的逐流采集义务和最终交换 | 只有每项实际发生的交换均有独立原子卡及其自身的数量、属性/原生单位、采集或计算证据、范围/不确定性证据、归一化、实际去向和已验证UUID时，最终数据包才可完成并通过验证。未知身份、活动状态、数量、范围证据或去向会阻断完成；不得视为零、默认为旁路或靠省略义务通过。所有重要具体流须保留自身范围/不确定性证据采集责任；符号上限不是实证范围。 | |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景采集包，支持 process/lifecyclemodel 投影；实际完成后按限定条件作为 secondary_dataset 或 background_dataset |
| downstream_use | 活体完整池塘养殖 Babylonia areolata 至养殖者产品的第一实体接收方清单，含上游苗种饲料材料服务关联及已声明不确定性 |
| allowed_use | 相同物种、符合范围海水沙底土池单养、活体完整状态及实体交付门，并明确评价地域期间技术代表性 |
| excluded_use | 泰国通用生产平均；野生混养其他养殖系统；可食肉；加工死亡最终产品；出口餐馆零售清单；食品安全福利合法性或当前盈利声明 |
| required_metadata | 场址池塘批次期间；物种苗种来源接收；实际饲料诱饵；养殖捕收方法；真实育苗分选暂养呈现；接收方门及 A；土地资产共享作业；有意产出分配；废物排放去向；具体身份支持 |
| required_quality_disclosure | 试验适用性局限；量值证据及未解决 U 边界；完整性缺失记录失败闲置期间；上游覆盖；分配替代方案；水污染物基准；测量模型不确定性及未解决 UUID |
| update_trigger | 物种路线饲料苗种来源、活体状态门、场址土地历史、干预、产出、服务归属、期间资产分配、量值证据或具体流身份变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| naca-babylon-pond-2005 | literature | Kritsanapuntu S., Chaitanawisuti N., Santhaweesuk W., Natsukari Y. (2005). Large-scale growout of spotted Babylon, Babylonia areolata in earthen ponds: Pilot monoculture operation. Aquaculture Asia 10(3), 39–43. https://library.enaca.org/AquacultureAsia/Articles/July-Sept-2005/July-Sept-2005.pdf | 历史 Petchaburi 海水沙底土池路线、购入苗种及初始选择、无生长期分级、鲜鱼饲料、泵送曝气、饲料储存用冰、表 2 中取样捕收笼具；不采用量值或普遍商业默认 |
| fao-fish-feed-2009 | official_guidance | Hasan M.R. and Halwart M. (eds) (2009). Fish as feed inputs for aquaculture: practices, sustainability and implications. FAO Fisheries and Aquaculture Technical Paper 518, section 5.5, pp. 108–109. https://www.fao.org/docrep/012/i1140e/i1140e.pdf | 历史 Babylonia areolata 养殖、活体市场及鲜鱼饲料定性背景；鱼饲料可能来自人食市场，非天然零负担废物；不支持量值或具体交付门声明 |
| unsd-cpc-3-2025 | official_guidance | United Nations Statistics Division. CPC Version 3.0 explanatory notes, 30 June 2025, subclass 04492, printed p. 52. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅为较广其他养殖软体动物分类背景，不是规范 PCR 身份或生产事实来源 |
| same-lot-mass-identity | method_factor | 本 PCR 的 accepted_mass 测量规则、cp_presentation_delivery 采集协议及 gate_mass_identity 计算；同批验收净质量恒等式 | 仅为最终参考 A/A = 1 精确恒等式，不是经验清单因子或边界 |
