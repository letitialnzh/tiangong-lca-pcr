---
pcr_id: pcr.constructions-and-construction-services.construction-services.hammer-driven-precast-prestressed-concrete-pile-installation-services
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 锤击预制预应力混凝土桩安装服务

## 1. 范围与适用性

本规则约束工厂预制预应力混凝土桩的冲击锤安装服务数据生产。适用范围从实际接收桩节及已释放安装界面开始，直至项目验收、责任内桩头处理和机械连接完成并撤场。实际施工批须保留全部准备、打桩、复打/检测、返工和失败工作；不规定通用设计性能或生产率。不同桩型、焊接接桩/桩靴、结构焊修或打桩辅助路线须先审查范围。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.hammer-driven-precast-prestressed-concrete-pile-installation-services |
| classification_refs | CPC 3.0 54511；拟议 narrower 对应关系，与方法学身份分开治理 |
| covered_products | 工厂预制预应力混凝土桩的冲击锤安装，含实际负责的机械桩靴/接桩、搬运、必要复打/检测和桩头处理 |
| excluded_products | 钻孔或现浇桩；钢/木桩；振动、水冲或预钻路线；焊接接桩/桩靴及现场结构焊接；桩制造、承台、基础开挖及独立场地形成 |
| representative_product | 实际截桩面以下、项目验收的锤击预应力混凝土桩 |
| production_route | 桩节接收；准备及搬运；冲击打入并机械安装实际指定部件；执行指令复打/检测；处理桩头；验收及撤场 |
| market_state | 在项目桩验收交接点完成的安装服务，不含承台施工 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 验收锤击预制预应力混凝土桩的安装服务 |
| How much | 1 m 唯一验收轴向桩长 L，按实际桩尖至实际截桩面测量 |
| How well | 满足项目设计/打桩准则及必要检测；责任内机械连接及桩头处理完成；保留桩号及验收证据 |
| How long or cycle | 完整责任施工批：接收/保管、准备/打桩、指令复打/检测、桩头处理、验收/撤场。索引全部实际期间和事件；生产验收试桩仅计一次，另保留失败/未结作业及其负担 |
| reference_flow_link | `reference_service` |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 锤击预制预应力混凝土桩安装服务 |
| Reference flow property | 长度 `838aaa23-0117-11db-92e3-0800200c9a66` |
| Reference unit group | 长度单位组 `838aaa22-0117-11db-92e3-0800200c9a66` |
| Reference unit | m |
| Required qualifiers | 项目/场址及报告时段; 桩号; 预制/预应力体系; 实际截面/孔洞几何; 交付长度和质量; 桩尖/截桩测量及轴向/斜桩方法; 打桩准则修订; 桩锤/垫材; 机械桩靴/接桩表; 检测/验收/桩头处理状态; 设备所有权及供应商范围 |

构建具体前景数据包时，须在元数据、过程说明或参考流注释中声明全部必需限定信息。未声明验收状态或实际路线不能推定合格。

## 4. 计量与单位规则

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| `accepted_length` | reference_service | 长度 `838aaa23-0117-11db-92e3-0800200c9a66` | m | 从桩台账和测量、结合斜桩修正，独立测量 L，即唯一验收桩尖至截桩面轴向长度之和。L 必须为正；采用 cp_pile_install_material。重复打桩/检测事件不增加长度。 |
| `same_state_bridges` | precast_pile_sections; shoe_joint_components; pile_cushion_material; head_preparation_consumables; diesel_fuel; water_supplied; lubricants_other_operating_products; packaging_received; direct_freshwater_abstraction; usable_material_exits; returnable_packaging_exit; concrete_cutoff_waste; separated_reinforcement_waste; damaged_pile_waste; spent_cushion_waste; packaging_waste; oily_consumable_waste; collected_wastewater_slurry; fossil_co2_air; other_engine_species_air; physical_particulate_air; water_vapour_air; specific_direct_water_releases | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 保留每项材料或物种的原生测量。数量、几何或体积转换只能采用同 SKU、同状态的实测桥接，包括实心/空心及配筋含量。不得使用跨 SKU 平均，也不得由残余质量推断未知物种。 |
| `utility_service_units` | electricity; hired_equipment_services | 能量；时长 | kWh; h | 电量采用实测实际电能，设备服务采用真实可归属设备时段。单位换算须有证据；热值不能替代 Energy，人工时或默认班次不能替代设备 Duration。明确保留每项未决支持身份。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已释放项目桩位和设计/打桩准则、观测地面/平台及通行条件，以及实际交付预制预应力桩节 |
| starting_condition_role | 观测安装界面，不虚构场地形成或就绪交换 |
| product_classification_scope | 本机械冲击锤击预制预应力路线是 CPC 3.0 54511 内更窄的安装类别 |
| recursive_input_rule | 若同类别独立供应安装服务跨越边界，识别其实际范围及供应商数据集；不得递归重建或再次计算已含作业。节点内阶段不是购买服务输入 |
| upstream_dataset_requirement | 将实际交付桩/材料和单独购买服务关联相容状态/供应商数据集；披露缺失的生产、运输、设备资本或处理覆盖。身份本身不证明数据集完整 |
| disclosure | 声明起始界面、实际路线和排除责任、桩验收交接点、报告期间、供应商边界、未结库存及未决身份/数量证据 |

### 边界规则

| 规则编号 | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `b_owned` | pile_install | 纳入接收桩节和实际永久机械桩靴/接头；分别保留垫材、桩头作业及运行耗材。一个负责节点承担实际搬运、冲击打桩、安装、必要指令复打/检测、桩头处理和附带清理，直至桩验收。输出为验收安装桩服务，绝非承台。 | `fhwa-gec15-2022`; `fhwa-pile-inspection` |
| `b_start` | 起始界面 | 将已释放桩位、设计/打桩准则、地面/平台及通行条件作为观测起始事实。既有资产就绪、检查步骤和节点内库存变化自身不生成产品卡。仅在有证据的独立负责材料状态交接时重新考虑节点。 | `pile-installation-attribution-method` |
| `b_route` | 路线变化 | 实际需要焊接接桩/桩靴连接、焊接桩头加高/结构修复、钻孔/钢/木桩或振动/水冲/预钻时，停止并审查范围。保留真实责任，评估路线材料、排放、废物和验收，不得将焊接隐藏为无材料机械接头。桩制造、承台、开挖和独立场地形成是此前景外的上/下游界面。 | `fhwa-gec15-2022`; `fhwa-pile-inspection` |
| `b_phases` | 期间及责任 | 用桩、事件、设备及报告期间关联接收/保管、准备/打桩、指令复打/检测、桩头处理和验收/撤场。跟踪未验收/损伤/拒收/弃置状态，以及 pile_install 内工程师指令的复打、移除或替换；真实材料离场保留接收方和状态。 | `fhwa-gec15-2022`; `pile-installation-attribution-method` |
| `b_assets` | 设备及仪表 | 识别实际桩锤、起重机、通行/物流及检测资产和全部消耗桩/阶段/期间，包括责任内怠速和返工。记录供应商燃料/资本/维护覆盖及仪表边界。已用资产返还是资产观测，不是未用材料退回；自有制造归属须有实际寿命/服务能力/使用/损伤证据，否则披露缺口。 | `pile-installation-attribution-method` |
| `boundary_atomic_completion` | 所有过程 | 本节的采集要求是必须执行的采集与适用性指令，不是聚合清单交换。完成前景数据集前，必须为每一种实际产品、废物流、物质及环境子区室建立独立原子流卡／交换。保留全部实际事件、上游负荷、退回及原生单位；所链接公式应按每个兼容身份分别执行。环境资源提取记为输入，环境释放记为输出。不得相加不同原生单位、用一个 UUID 代表整个采集池、将缺记录解释为零，或与已有具体卡重复计入。保留宿主的文件性接口仅传递状态，不形成新采购资产。适用成员未明确或未有证据证明不存在时，定量清单仍不完整；非强制筛查提示不能补造数量或化学组成。 |  |

### 条件性清单补全要求

以下标识符表示采集池或文件性状态台账。一个池可能有零个、一个或多个实际成员。须依据真实记录判断适用性，并为每个成员保留原有数量方法和采集协议；只有兼容的数量才能共同核对。下列原有可选筛查区间仅作为暂定复核提示，不得强加于不同材料或混合采集池。

#### 采集要求：永久机械桩靴与接头 (`shoe_joint_components`)

过程／待建立交换的方向／类型：`pile_install` / `inputs` / `product`.

仅纳入实际规定并永久机械安装的桩靴和接桩部件。记录每个 SKU、桩位置和同 SKU 数量转质量证据。不接桩的桩无需虚构接头。焊接或焊修须在数据生产前审查范围。范围证据需求：实际桩号构件计划及构件质量；按实际领用量核对留存及未用量，不得按长度推定接头。

- 采集对象：永久机械安装桩靴和接桩构件
- 流属性/单位：质量 / kg
- 数量规则：本行每个实际具体交换的归属数量 / L；采用 cp_pile_install_material；不采用异质合计。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_pile_install_material`
- 来源：`pile-installation-attribution-method`; `fhwa-gec15-2022`; `fhwa-pile-inspection`

#### 采集要求：桩垫耗材 (`pile_cushion_material`)

过程／待建立交换的方向／类型：`pile_install` / `inputs` / `product`.

逐次领用和更换时识别垫材、尺寸及锤/桩工况。可复用硬件进入资产台账。范围证据需求：指定打桩工况下实际材料及更换历史；核对未用、留存和废弃状态，不得采用默认更换率。

- 采集对象：实际牺牲性或更换的桩垫及锤垫材料
- 流属性/单位：质量 / kg
- 数量规则：本行每个实际具体交换的归属数量 / L；采用 cp_pile_install_material；不采用异质合计。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_pile_install_material`
- 来源：`pile-installation-attribution-method`; `fhwa-gec15-2022`; `fhwa-pile-inspection`

#### 采集要求：桩头处理及获准修复产品 (`head_preparation_consumables`)

过程／待建立交换的方向／类型：`pile_install` / `inputs` / `product`.

按实际工具或修复产品 SKU 和状态记录耗材，并关联桩头几何及获准作业。排除另行记录的润滑剂、水、能源和包装。水性修复产品的内含水仍属其组分；另加水是独立输入。范围证据需求：实际切割/钻孔/修复作业、产品状态及实测消耗量。按同一作业和输出残余物核对产品领用量及组分；本规则不提供通用桩头处理用量。

- 采集对象：实际切割、钻孔耗材及获准附带桩头修复产品
- 流属性/单位：质量 / kg
- 数量规则：本行每个实际具体交换的归属数量 / L；采用 cp_pile_install_material；不采用异质合计。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_pile_install_material`
- 来源：`pile-installation-attribution-method`; `fhwa-gec15-2022`; `fhwa-pile-inspection`

#### 采集要求：其他运行及清理产品 (`lubricants_other_operating_products`)

过程／待建立交换的方向／类型：`pile_install` / `inputs` / `product`.

按 SKU/当前状态及维护或泄漏事件区分每种润滑剂、运行液、抹布或吸附材料。范围证据需求：实际领用、密度或实测质量及维护/泄漏历史。将同类材料及组分与留存、退回和含油废物状态比较；含油抹布质量不等于纯油质量。

- 采集对象：实际润滑剂、运行液及清理载体产品
- 流属性/单位：质量 / kg
- 数量规则：本行每个实际具体交换的归属数量 / L；采用 cp_pile_install_material；不采用异质合计。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_pile_install_material`
- 来源：`pile-installation-attribution-method`

#### 采集要求：单独供应的设备服务 (`hired_equipment_services`)

过程／待建立交换的方向／类型：`pile_install` / `inputs` / `product`.

识别设备、供应商、服务范围及实际占用/作业时段。记录是否已含燃料、制造和维护；不得重复同一资产服务。范围证据需求：有证据的服务边界、占用/作业小时及独立 L。人工小时或假定班次不是设备时长。既有设备质量是观测值，不是耗用材料。

- 采集对象：实际单独供应的吊装、通行、打桩或物流设备服务
- 流属性/单位：时长 / h
- 数量规则：本行每个实际具体交换的归属数量 / L；采用 cp_pile_install_asset；不采用异质合计。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_pile_install_asset`
- 来源：`pile-installation-attribution-method`

#### 采集要求：进入本施工批保管的包装 (`packaging_received`)

过程／待建立交换的方向／类型：`pile_install` / `inputs` / `product`.

将实际包装材料及状态与内容物分开记录，包括可复用包装保管。范围证据需求：供应商包装质量及拆包/退回记录。逐个包装池核对退回、复用、留存库存和废物；不得按桩质量套用包装百分比。

- 采集对象：实际随附包装
- 流属性/单位：质量 / kg
- 数量规则：本行每个实际具体交换的归属数量 / L；采用 cp_pile_install_material；不采用异质合计。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_pile_install_material`
- 来源：`pile-installation-attribution-method`

#### 采集要求：直接环境淡水取用 (`direct_freshwater_abstraction`)

过程／待建立交换的方向／类型：`pile_install` / `inputs` / `elementary`.

仅对实际直接取用且具有来源介质及独立计量的淡水记录该基本输入。范围证据需求：实际水源、取水读数及作业需求。核对纯水组分台账，排除已由供应水表示的任何同一物理体积；不得从位置推断水源身份。

- 采集对象：从声明环境源直接取用的实际淡水
- 流属性/单位：质量 / kg
- 数量规则：本行每个实际具体交换的归属数量 / L；采用 cp_pile_install_release；不采用异质合计。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_pile_install_release`
- 来源：`pile-installation-attribution-method`

#### 采集要求：可用材料退回与转移 (`usable_material_exits`)

过程／待建立交换的方向／类型：`pile_install` / `outputs` / `product`.

用接收方证据区分未用退回、已用但可用的转移及降级产品状态。范围证据需求：材料/SKU/当前状态可用量、独立质量及发运记录。每项离场须由自身相容材料池支持；异质总量仅作 QA，不得作具体交换或避免生产信用。

- 采集对象：实际离开保管的可用材料
- 流属性/单位：质量 / kg
- 数量规则：本行每个实际具体交换的归属数量 / L；采用 cp_pile_install_material；不采用异质合计。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_pile_install_material`
- 来源：`pile-installation-attribution-method`

#### 采集要求：离开保管的返还包装 (`returnable_packaging_exit`)

过程／待建立交换的方向／类型：`pile_install` / `outputs` / `product`.

识别实际可复用包装及返还时状态，包括损伤或污染。范围证据需求：匹配的包装可用量及保管/发运记录。避免退回、留存和废物重复归属；已用设备返还不是未用包装退回，也不隐含避免新包装信用。

- 采集对象：实际离开保管的可返还包装
- 流属性/单位：质量 / kg
- 数量规则：本行每个实际具体交换的归属数量 / L；采用 cp_pile_install_material；不采用异质合计。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_pile_install_material`
- 来源：`pile-installation-attribution-method`

#### 采集要求：复合混凝土桩头截除废物 (`concrete_cutoff_waste`)

过程／待建立交换的方向／类型：`pile_install` / `outputs` / `waste`.

按实际钢筋含量和物理状态计量截除物及捕集干细料。范围证据需求：实际移除几何、复合组分、捕集及接收方记录。不得重复计算已分离钢材，也不得把已捕集细料再次计为空气颗粒；单凭验收长度不能确定截除比例。

- 采集对象：实际捕集状态及接收方的富混凝土桩头废物
- 流属性/单位：质量 / kg
- 数量规则：本行每个实际具体交换的归属数量 / L；采用 cp_pile_install_material；不采用异质合计。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_pile_install_material`
- 来源：`pile-installation-attribution-method`

#### 采集要求：物理分离的钢筋废料 (`separated_reinforcement_waste`)

过程／待建立交换的方向／类型：`pile_install` / `outputs` / `waste`.

须有真实分离及废物发运事件，并保留切割/释放历史。范围证据需求：移除桩头池中实际存在的钢材及独立分离金属称重。须从复合截除物核算中扣除该金属；默认配筋比或仅设计钢材表不能证明废物量。

- 采集对象：实际物理分离的钢筋或预应力钢材废物
- 流属性/单位：质量 / kg
- 数量规则：本行每个实际具体交换的归属数量 / L；采用 cp_pile_install_material；不采用异质合计。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_pile_install_material`
- 来源：`pile-installation-attribution-method`

#### 采集要求：废弃包装 (`packaging_waste`)

过程／待建立交换的方向／类型：`pile_install` / `outputs` / `waste`.

与可复用返还物分开记录，包括实际污染。范围证据需求：匹配的包装输入/库存及互斥的退回、复用、留存和废物观测。核对相容可用量及新增污染物；不得将包装平衡残差假定为废物。

- 采集对象：按材料、状态及接收方区分的实际废弃包装
- 流属性/单位：质量 / kg
- 数量规则：本行每个实际具体交换的归属数量 / L；采用 cp_pile_install_material；不采用异质合计。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_pile_install_material`
- 来源：`pile-installation-attribution-method`

#### 采集要求：含油运行与清理废物 (`oily_consumable_waste`)

过程／待建立交换的方向／类型：`pile_install` / `outputs` / `waste`.

区分实际收集废物中的油/液体、抹布/吸附材料及水分组分。范围证据需求：实测废物状态质量、载体领用及污染记录。核对全部相容组分池，不得仅以润滑剂质量约束混合含油抹布；处理身份遵循真实接收方。

- 采集对象：实际发运状态及接收方的含油耗材废物
- 流属性/单位：质量 / kg
- 数量规则：本行每个实际具体交换的归属数量 / L；采用 cp_pile_install_material；不采用异质合计。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_pile_install_material`
- 来源：`pile-installation-attribution-method`

#### 采集要求：其他发动机排放物种 (`other_engine_species_air`)

过程／待建立交换的方向／类型：`pile_install` / `outputs` / `elementary`.

逐项展开实际排放物质/物种计量基础及空气介质，并以发动机、燃料、工况记录及因子/模型适用性支持。范围证据需求：确切物质或报告物种基础、实际运行条件及不确定性。概念性发动机排放集合没有有意义的数值范围；不得借用化石 CO2 身份或强行闭合燃料总质量。

- 采集对象：实际物质特定的发动机空气排放
- 流属性/单位：质量 / kg
- 数量规则：本行每个实际具体交换的归属数量 / L；采用 cp_pile_install_release；不采用异质合计。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_pile_install_release`
- 来源：`pile-installation-attribution-method`

#### 采集要求：未捕集的物理颗粒 (`physical_particulate_air`)

过程／待建立交换的方向／类型：`pile_install` / `outputs` / `elementary`.

识别粒径/组成及来源混凝土、垫材或其他材料池；区分未捕集排放与收集粉尘。范围证据需求：实际来源材料及有依据的捕集/排放量。核对相容干组分，不得把全部缺失库存归为空气排放或规定通用粉尘比例。

- 采集对象：实际作业产生并未捕集的空气颗粒
- 流属性/单位：质量 / kg
- 数量规则：本行每个实际具体交换的归属数量 / L；采用 cp_pile_install_release；不采用异质合计。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_pile_install_release`
- 来源：`pile-installation-attribution-method`

#### 采集要求：物质特定的直接水排放 (`specific_direct_water_releases`)

过程／待建立交换的方向／类型：`pile_install` / `outputs` / `elementary`.

区分每项实际排放物质及接收水介质；仅在有证据时纳入该物理水排放身份。范围证据需求：实际排放量、浓度/物种及介质。排除送处理废水，并避免重复其组分；概念性排放集合没有通用数值范围。

- 采集对象：排入声明水介质的实际物质特定直接排放
- 流属性/单位：质量 / kg
- 数量规则：本行每个实际具体交换的归属数量 / L；采用 cp_pile_install_release；不采用异质合计。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_pile_install_release`
- 来源：`pile-installation-attribution-method`

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `pile_install` | 锤击预制预应力混凝土桩安装 | `required` | 实际本研究机械冲击路线 | 负责搬运、机械构件安装、打桩、指令复打/检测、桩头处理和验收的一个阶段索引节点；拒收/未结状态及返工循环保留原桩关联 | `reference_service`; 1 m |

### 过程：锤击预制预应力混凝土桩安装（`pile_install`）

节点内事件台账须覆盖所有实际阶段、设备和桩号。永久构件包括接收桩节及实际机械桩靴/接头；未接桩配置不虚构第二构件。准备、复打和检查是同一责任内的事件，不各自生成产品。记录工程师指令的复打、移除、替换及真实退回/降级/留存/废物/原位弃置去向；未决去向仍为缺口。

#### 输入

##### 产品流

###### 进场预应力混凝土桩节 (`precast_pile_sections`)

按收货状态记录完整桩节，包括其实际钢筋。保留桩号、预应力体系、实心/空心截面几何、经证明或实测桩节质量和交付长度。记录实际进入本施工批保管的桩节及分配期初库存，并独立记录期末库存和离场量。已作为输出交换记录的退回量不得再次从同一总收货量扣除；验收长度不等于交付长度。范围证据需求：须用实际截面几何、同截面质量及截桩、接桩和移除记录建立 kg/m。逐个相容桩节池核对验收留存材料、截除物、拒收/弃置库存及离场量；不得假定通用每米桩质量。

- 选定流：工厂养护预制预应力混凝土桩节
- 流属性/单位：质量 / kg
- 数量规则：本行每个实际具体交换的归属数量 / L；采用 cp_pile_install_material；不采用异质合计。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_pile_install_material`
- 来源：`pile-installation-attribution-method`; `fhwa-gec15-2022`; `fhwa-pile-inspection`

###### 责任边界内燃烧的柴油 (`diesel_fuel`)

仅计量自有或独立计量设备消耗的柴油；体积转换须保留燃料批次及观测状态密度。纳入已归属的准备、预热、怠速、打桩、复打、检测、桩头作业及返工。范围证据需求：实际设备工况、校准仪表/库存记录及独立 L；有效冲击或吊装能量不能替代燃油。归一化前核对同种燃料库存和供应商覆盖范围。该身份不提供密度、化石比例或热值。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：质量 / kg
- 数量规则：本行每个实际具体交换的归属数量 / L；采用 cp_pile_install_utility；不采用异质合计。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_pile_install_utility`
- 来源：`pile-installation-attribution-method`

###### 归属电力 (`electricity`)

识别来源、电压及计量拓扑；分配完整记录时段，包括责任内检测和怠速。范围证据需求：设备工况、校准时段读数及独立 L。核对直接与共用消耗之和及总表读数。Energy/kWh 表示所需物理量；热值属性不能证明电力 Energy 属性支持。

- 选定流：实际供电状态的电力
- 流属性/单位：能量 / kWh
- 数量规则：本行每个实际具体交换的归属数量 / L；采用 cp_pile_install_utility；不采用异质合计。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_pile_install_utility`
- 来源：`pile-installation-attribution-method`

###### 供应的工艺及清理用水 (`water_supplied`)

记录实际供应状态及独立计量的湿作业或清理用水，包括循环和返还。同一取水不得重复计作直接环境取水。范围证据需求：实际湿作业、取水量及有独立证据的纯水组分去向。比较水组分而非浆液总质量；不规定通用需水量。

- 选定流：实际处理及交付状态的供应水
- 流属性/单位：质量 / kg
- 数量规则：本行每个实际具体交换的归属数量 / L；采用 cp_pile_install_utility；不采用异质合计。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_pile_install_utility`
- 来源：`pile-installation-attribution-method`

##### 基本流

#### 输出

##### 产品流

###### 验收桩安装服务 (`reference_service`)

仅在满足项目打桩/检测准则且责任内机械连接和桩头处理完成后计入唯一验收桩。用测量标高及斜桩修正独立确定正值 L，即桩尖至实际截桩面轴向长度之和。订货/交付长度、重复打入次数、拒收桩及原位弃置桩不增加 L；其归属负担仍保留。L / L 自归一化恰得 1 m。作为生产桩验收的试桩只计一次。

- 选定流：锤击预制预应力混凝土桩安装服务
- 流属性/单位：长度 / m
- 数量规则：1 m
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_pile_install_material`
- 来源：`pile-installation-attribution-method`; `fhwa-gec15-2022`; `fhwa-pile-inspection`; `accepted-axial-length-identity`

- 数量范围：验收长度自归一化恒等关系
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：m
  - 基准：每 1 m 参考流；独立采集正值 L 后按 L / L
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：由采集数据计算（`calculated_from_collection`）
  - 来源：`accepted-axial-length-identity`

##### 废物流

###### 移除的拒收桩废物 (`damaged_pile_waste`)

须有失败评估、移除/替换决定及实际废物接收方。范围证据需求：已移除桩号质量及发运记录。分别保留拒收、未结和原位弃置库存；未验收地下桩不是可虚构的平衡废物离场量，也不计入验收 L。

- 选定流：实际移除并作为废物发运的拒收混凝土桩材料
- 流属性/单位：质量 / kg
- 数量规则：本行每个实际具体交换的归属数量 / L；采用 cp_pile_install_material；不采用异质合计。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_pile_install_material`
- 来源：`pile-installation-attribution-method`; `fhwa-gec15-2022`; `fhwa-pile-inspection`

###### 废弃垫材 (`spent_cushion_waste`)

将废弃垫材关联领用/更换，记录留存硬件、水分及污染。范围证据需求：实际领用/留存垫材量及独立称量的废物状态。仅核对相容垫材/组分池；不得采用通用垫材损失比例。

- 选定流：实际废垫材
- 流属性/单位：质量 / kg
- 数量规则：本行每个实际具体交换的归属数量 / L；采用 cp_pile_install_material；不采用异质合计。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_pile_install_material`
- 来源：`pile-installation-attribution-method`

###### 收集废水与浆液 (`collected_wastewater_slurry`)

用收集/捕集证据及处理目的地计量混合物质量与水/干固体/化学组分。范围证据需求：实际水源、夹带固体、浓度或独立组分测量及发运。不得在干废物或直接水排放中重复计算浆液固体；混合物总质量不能闭合纯水组分台账。

- 选定流：实际收集并送处理的废水或切割/清理浆液
- 流属性/单位：质量 / kg
- 数量规则：本行每个实际具体交换的归属数量 / L；采用 cp_pile_install_material；不采用异质合计。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_pile_install_material`
- 来源：`pile-installation-attribution-method`

##### 基本流

###### 化石二氧化碳排入空气 (`fossil_co2_air`)

用适用燃料/工况测量或有文档的因子/模型及不确定性确定实际化石 CO2。保留该身份的未特指空气子环境；更具体介质须有自身已核实身份。碳约束采用独立确定的实际燃烧化石碳，绝不能把柴油总 kg 当作 CO2 kg。不授权完全氧化假设或虚构氧气交换。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：本行每个实际具体交换的归属数量 / L；采用 cp_pile_install_release；不采用异质合计。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_pile_install_release`
- 来源：`pile-installation-attribution-method`; `carbon-oxidation-identity`

- 数量范围：独立化石碳约束
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：44/12
  - 单位：kg CO2/kg fossil carbon burned
  - 基准：每 kg 独立确定的实际燃烧化石碳，尚未按 L 归一化
  - 基准类型：燃料清单（`fuel_inventory`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`carbon-oxidation-identity`

###### 蒸发至空气的水 (`water_vapour_air`)

须有实际湿作业及独立支持的蒸发测量/模型；零值须有证据。保留未特指空气身份。范围证据需求：可用纯水组分池及有依据、附不确定性的蒸发估计。比较水组分及库存变化；闭合残差不是水蒸气。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：本行每个实际具体交换的归属数量 / L；采用 cp_pile_install_release；不采用异质合计。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_pile_install_release`
- 来源：`pile-installation-attribution-method`

## 7. 分配与联产品处理

| 规则编号 | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `a_direct` | 共用运行负担 | 首先归属直接计量的桩/阶段用量。对共用桩锤、起重机、仪表或检测资源，列出全部消耗对象和期间，仅按有文档的实际工况或其他有证据因果份额分配核对后残余量；各份额须将该残余量完整且仅分配一次。声明怠速/准备/检测责任及期间截点处理。 | `pile-installation-attribution-method` |
| `a_provider` | 供应商及可复用资产 | 供应商已含燃料、资本和维护仅计一次；排除相同已含活动重复的自有柴油/设备条目。仅在具有实际服务能力/寿命、本批使用及损伤证据时归属自有制造，否则披露未决缺口。可复用设备质量及其已用返还不构成全量耗用材料输入/输出。 | `pile-installation-attribution-method` |
| `a_rework` | 返工及验收长度 | 在安装批次保留归属的失败打桩、复打、检测、移除和替换负担。记录原桩及事件关联和实际退回/降级/留存/废物/弃置去向。拒收或未结桩不贡献 L；重复打入及生产验收试桩不得重复 L。未决替换/终止在期间截点仍为未结缺口。 | `pile-installation-attribution-method` |
| `a_exits` | 材料离场及归一化 | 按身份/状态/接收方记录真实可用退回和废物发运；不得假定避免生产或回收信用。对有证据的联产品责任采用细分或有文档因果处理。每个具体归属分子仅除以独立测量 L 一次；异质总量仅作 QA。 | `pile-installation-attribution-method` |

## 8. 前景数据采集、计算与质量规则

四个协议均由 pile_install 独占负责，采用通用事件/身份/阶段键；各具体交换保留独立数量及转换证据。协议不是集合流身份。

### 数据采集协议

| protocol_id | process_id | 流角色 | 记录类型 | 原始字段 | 采集方法 | 单位 | 频率 | 时间覆盖 | 场址范围 | 汇总规则 | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_pile_install_material` | `pile_install` | 材料构件、耗材、库存、离场及参考量 | 桩台账及身份/事件台账 | 事件/批次/配置；桩或资产编号；过程/阶段/时间及报告期间；责任人及角色；实际身份/SKU/当前状态；原生数量/单位；实测同状态桥接；接收方/介质；证据及不确定性；实际发生是/否/未决；桩预应力体系及截面/孔洞几何；交付/验收/拒收状态；桩尖/截桩测量和斜度；桩节质量；桩头/分离/捕集；库存变动；准则修订及桩头/检测/验收记录 | 称量或采用可追溯同截面质量证明及校准原生量；测量实际桩尖与截桩面，按轴向/斜桩几何修正，并将唯一验收桩与检查/检测记录核对。按具体身份/状态/接收方分别跟踪期初、收货、领用、转移、留存/拒收/弃置库存和发运。 汇总过程：确定独立正值验收 L；按每 1 m 参考流计算各具体归属材料分子 / L；reference_service 按 L / L 自归一化；异质总量仅作 QA。 | kg；m；原生数量/几何；实测桥接 | 每次收货、领用、桩头/返工/分离、库存截点及验收/离场事件 | 完整施工批及跨全部报告期间的期初/期末库存 | 项目桩批及实际材料保管边界 | 每 1 m 参考流 | 校准/证明；测量；桩及决定台账；签认桩头/检测/验收；发运接收方 |
| `cp_pile_install_utility` | `pile_install` | 柴油、电力及供应水 | 燃料/公用工程仪表及库存台账 | 事件/批次/配置；桩或资产编号；过程/阶段/时间及报告期间；责任人及角色；实际身份/SKU/当前状态；原生数量/单位；实测同状态桥接；接收方/介质；证据及不确定性；实际发生是/否/未决；计量拓扑及读数时段；密度/温度；公用工程来源/电压/处理；设备工况/怠速/检测/返工；供应商覆盖；直接归属及残余消耗份额 | 对完整责任时段采用校准读数或库存核对。仅以实际同燃料/状态证据转换；保留水循环及共用仪表核对。区分设备有效能量与购买电力或柴油，排除供应商已含重复消耗。 汇总过程：先归属直接用量，再将有证据且已核对的共用残余量分配一次；按每 1 m 参考流计算各具体归属公用工程分子 / L。 | kg；kWh；原生体积及仪表单位 | 每个计量时段、加油、库存变动及湿作业 | 完整责任准备/怠速/打桩/复打/检测/桩头/返工/撤场时段及期间截点 | 服务项目批次的全部实际设备及仪表，识别其他消耗对象 | 每 1 m 参考流 | 仪表校准、库存凭证、状态特定密度、消耗对象核对及供应商边界 |
| `cp_pile_install_asset` | `pile_install` | 自有及供应设备使用和资本覆盖 | 资产/服务事件及消耗对象台账 | 事件/批次/配置；桩或资产编号；过程/阶段/时间及报告期间；责任人及角色；实际身份/SKU/当前状态；原生数量/单位；实测同状态桥接；接收方/介质；证据及不确定性；实际发生是/否/未决；供应商范围及资产身份；占用/作业时段；全部消耗对象/期间；制造/维护/燃料纳入；服务能力/寿命及损伤；已用返还/库存状态 | 将实际资产日志、供应商合同及发票与桩/阶段事件核对；测量实际设备服务时长。观测可复用质量/当前状态，不将其视为耗用材料。自有资本须采集实际寿命/能力/使用/损伤；证据缺失处保留缺口。 汇总过程：按每 1 m 参考流计算各单独购买具体服务分子 / L；按有证据覆盖及能力/使用分配共用和自有负担一次；不虚构寿命。 | h；原生能力/使用及状态量 | 每次进场、作业/怠速/返工时段、维护、损伤及返还事件 | 完整服务施工批及相关有证据的资产寿命/服务期间 | 实际桩锤/起重机/通行/物流/检测资产及全部消耗对象 | 每 1 m 参考流 | 合同、发票、时段日志、消耗对象清单及实际寿命/使用/损伤证据或缺口 |
| `cp_pile_install_release` | `pile_install` | 直接取水及物质/介质排放 | 物质/介质测量及模型台账 | 事件/批次/配置；桩或资产编号；过程/阶段/时间及报告期间；责任人及角色；实际身份/SKU/当前状态；原生数量/单位；实测同状态桥接；接收方/介质；证据及不确定性；实际发生是/否/未决；确切物质/物种/颗粒及介质；来源组分池；燃烧化石碳；湿作业纯水输入/库存/去向；捕集/排放；模型/因子适用性及不确定性 | 采用直接测量或有文档且适用的排放/蒸发/排水模型，支持于实际燃料、设备、湿作业和来源池证据。保留原生测量及组分浓度；独立测量取水。保留实际介质，不将台账残差转成排放。 汇总过程：按每 1 m 参考流计算各具体物质和介质分子 / L；分别比较相容干组分、纯水和化石碳池；不生成残差交换。 | kg；原生排放体积/浓度及采样单位 | 每个排放相关工况/湿作业/排水事件及代表性测量时段 | 全部适用阶段及实际排放/来源时段，包括返工 | 项目批实际设备/材料排放点及接收介质 | 每 1 m 参考流 | 采样/仪表校准；模型/因子范围；组成、捕集/接收方及不确定性证据 |

### 计算规则

| 规则编号 | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `c_length` | reference_service | L = 唯一验收桩从实际桩尖至实际截桩面轴向长度之和；采用实测几何及斜桩修正，排除未验收/拒收/弃置桩及重复打桩或检测次数。L 为正时参考数量 = L / L = 1 m。 | 桩台账; 测量; 准则/检测/桩头/验收; cp_pile_install_material | L；1 m reference_service | `accepted-axial-length-identity`; `fhwa-gec15-2022`; `fhwa-driven-length-review` |
| `c_exchange` | 所有清单行 | 对每个实际具体身份/SKU/当前状态/接收方或物质/介质，q_concrete_ref = 用其自身有证据同状态桥接转换的归属原生数量 / L。仅应用一次；组分量与混合物全质量分开保留，不把异质总量导出为交换。 | 实际具体事件数量; 同状态桥接; L; cp_pile_install_material; cp_pile_install_utility; cp_pile_install_asset; cp_pile_install_release | 逐项归一化具体交换 | `pile-installation-attribution-method` |
| `c_shared` | 所有清单行 | 将直接归属实际用量与共用总量分开；共用剩余负担 = 已核对总量 - 直接归属 - 明确排除消耗对象覆盖。按实际工况或有文档且合计为一的因果份额，将残余量向有证据消耗对象/期间分配一次；保留不确定性及供应商覆盖。 | 消耗对象/阶段/期间台账; 直接读数; 核对总量; 供应商范围; cp_pile_install_utility; cp_pile_install_asset | 不重复的本批归属数量 | `pile-installation-attribution-method` |
| `c_pools` | 所有清单行 | 对每个相容材料/当前状态或组分池，比较期初库存 + 实际流入，与留存安装/可用库存 + 期末拒收/未结/弃置库存 + 独立观测离场/排放。转换须有明确实测组分桥接。纯水去向和化石碳保持独立；报告残差及不确定性，不虚构平衡交换。 | 同池库存/流入; 实测转换; 实际去向; cp_pile_install_material; cp_pile_install_release | 池 QA、披露残差及缺口 | `compatible-pool-balance-identity` |
| `c_carbon` | fossil_co2_air | m_CO2_fossil <= C_fossil_burned * 44 / 12；C_fossil_burned 为独立确定的实际燃烧化石碳质量。该上限恒等关系不表示完全氧化，不估计其他物种，也不将燃料质量等同 CO2 质量。 | 实际燃料及化石碳组成; 工况; 适用模型/测量; cp_pile_install_release | 化石碳 CO2 QA 约束 | `carbon-oxidation-identity` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_gate` | reference_service | 保留桩号、预应力体系、截面/孔洞几何、交付质量/长度、实际桩尖/截桩标高及轴向/斜桩方法、打桩准则修订、桩锤/垫材及机械桩靴/接桩表。匹配必要检测、桩头处理及验收记录；不规定通用承载力、击数、能量或检测频率阈值。 | 测量、签认桩/检测/桩头/验收台账；fhwa-gec15-2022；fhwa-pile-inspection |
| `dq_occurrence` | 所有清单行 | 以证据记录每项条件作业/材料/去向为是、否或未决。未知不是未激活或零。分别展开每个真实 SKU/状态/接收方或物质/介质；最终交换生产前核实其具体身份及支持。保留 Energy 和 Duration 支持缺口，不借用热值或复合时间维度。 | 实际事件/身份/阶段台账及具体绑定/支持证据 |
| `dq_range` | 所有清单行 | 在声明范围前，用实际供应商/项目/接收方数据及适用已审观测解决各卡特定范围证据需求。保留身份、状态、分母和不确定性。此处仅提供参考自归一化及化石碳 44/12 上限约束；不得用任意宽泛或虚假收紧数字替代其余24项证据需求。 | 各卡描述；实际范围观测及适用不确定性 |
| `dq_reject` | pile_install | 按实际工程师决定及接收方/状态跟踪每根失败/未结/拒收/弃置桩及原桩至复打/移除/替换关联。保留负担及期间截点库存；仅唯一验收长度进入 L。未决最终去向或替换是披露缺口并阻止数据集定稿。 | 桩决定、事件日志、库存/发运及期间核对 |
| `dq_shared` | pile_install | 记录每个实际共用桩锤/起重机/检测/仪表消耗对象及期间、直接归属、残余分配和供应商纳入。制造归属须有自有寿命/能力/使用/损伤证据；不得默默遗漏资本或计入全部既有资产。 | 合同、仪表、资产状态/使用及核对后的消耗对象份额 |
| `dq_pools` | 所有清单行 | 区分完整产品和实测组分。区分复合截除物与物理分离钢材、捕集固体与空气颗粒、收集浆液与直接排水，以及纯水与湿混合物总量。燃料碳不是燃料质量或燃烧总质量；不允许虚构 O2 卡或残差排放。 | 组分检验、同状态桥接、来源池及捕集/接收方记录 |
| `dq_coverage` | pile_install | 用校准、不确定性及缺失记录披露覆盖接收到撤场、责任内准备/怠速/检测/返工和全部期间边界。保留原生测量及每个具体分子/L计算；身份解析本身不是数量证据，也不证明上游覆盖完整。 | 四个节点自有协议、事件日志及数据缺口台账 |

## 9. 验证规则

| 规则编号 | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `v_scope` | pile_install | 核实实际预制预应力冲击锤机械路线、责任阶段和验收交接。焊接或其他排除路线须在应用本规则前审查范围；独立交接须重新考虑边界。 | `pile-installation-attribution-method` |
| `v_reference` | reference_service | 要求独立正值 L、实际桩尖/截桩及轴向/斜桩证据、准则修订、完整责任内桩头/机械连接义务及必要检测/验收。核对每根唯一桩；拒绝重复复打/检测长度和未验收/拒收/弃置长度。 | `pile-installation-attribution-method` |
| `v_events` | 期间及返工 | 将每个输入、资产、输出及返工/拒收事件与 pile_install、实际阶段和报告期间核对。核实真实退回/降级/移除/废物/留存/弃置去向及原桩关联；未决终止/替换阻止定稿而负担仍保留。 | `pile-installation-attribution-method` |
| `v_shared` | 共用资产/服务/仪表 | 枚举全部真实桩锤/起重机/通行/检测/仪表消耗对象及期间；核对直接归属及残余份额，包括责任内准备/怠速/返工。拒绝供应商服务已含的重复燃料/资本/维护。要求实际自有寿命/能力/使用/损伤，否则报告缺口。 | `pile-installation-attribution-method` |
| `v_exchanges` | 所有清单行 | 核实具体身份/SKU/状态/接收方或物质/介质、条件发生证据、实际原生量及其自身同状态桥接和分子/L。拒绝异质总量交换、借用 UUID、未决最终绑定、重复组分或无依据零值。分别核对纯水和化石碳，不生成闭合交换。 | `pile-installation-attribution-method` |
| `v_evidence` | 数据包完整性 | 报告已执行/跳过检查、发现、完整性、未决支持及各卡范围证据。候选数量警告不证明方法学可激活。最终数据集须解决适用身份/数量/责任/最终去向缺口并支持不确定性；仅检查通过既不证明外部核实也不证明就绪。 | `pile-installation-attribution-method` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 声明桩批的前景安装数据包 |
| downstream_use | secondary_dataset；background_dataset；process 和 lifecyclemodel 投影 |
| allowed_use | 具有证据的冲击锤击预制预应力机械路线和声明验收长度交接点，并完整披露责任及覆盖 |
| excluded_use | 设计或结构认证；通用性能比较；排除桩型/打桩辅助/焊接；桩制造或承台施工；未决最终交换 |
| required_metadata | 必需参考限定信息；边界及供应商范围；桩/阶段/期间事件台账；具体流身份/状态/接收方；原生记录、桥接及独立 L；上游/处理覆盖 |
| required_quality_disclosure | 校准、不确定性、发生是/否/未决、未决身份/支持/范围/寿命/去向缺口、返工/失败库存负担、材料池残差及已执行/跳过验证 |
| update_trigger | 桩/截面/预应力或安装路线、准则/交接、设备/供应商覆盖、来源介质、具体身份、材料去向变化，或数量/寿命证据改进 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `fhwa-gec15-2022` | `official_guidance` | FHWA-HIF-22-024 (2022), Acceptance Procedures for Deep Foundations, chapter 4, especially §§4.2–4.4, printed pp.4-6–4-9. https://www.fhwa.dot.gov/engineering/geotech/pubs/hif22024.pdf | 项目特定安装计划、打桩准则、垫材、复打/检测、损伤桩评估及桩头检查；不提供通用材料/燃料率，也不采用示例验收阈值 |
| `fhwa-pile-inspection` | `official_guidance` | FHWA, Construction Program Management and Inspection Guide, Appendix D, Driven Piling. https://www.fhwa.dot.gov/construction/cpmi04d2.cfm | 桩/锤/垫材/桩靴/接头记录、搬运、实际桩尖/截桩及交付/订货/入土长度区分；仅使用相关锤击桩段落，不设通用消耗先验 |
| `fhwa-driven-length-review` | `official_guidance` | FHWA, Pile Driving Review, Measurement and Payment. https://www.fhwa.dot.gov/construction/reviews/revpile1.cfm | 仅用于截桩以下验收打入长度与订货长度的区别及记录核对。钢桩/套管、涂层、接桩、桩锤和混凝土浇筑数值示例不迁移到预制预应力桩 |
| `accepted-axial-length-identity` | `method_factor` | 作者定义的规范方法身份：唯一验收桩尖至实际截桩面的轴向长度，L > 0；L / L = 1 m 参考服务 | 独立分母、轴向/斜桩测量、唯一桩验收及自归一化；这是声明方法，不是外部观测 |
| `pile-installation-attribution-method` | `method_factor` | 作者定义的规范方法身份：具体事件/身份/阶段归属及按独立验收 L 仅归一化一次 | 责任内单节点事件/期间核算、共用残余因果分配、防止供应商重叠、实际资产能力/使用证据及具体交换归一化；不是经验率 |
| `compatible-pool-balance-identity` | `method_factor` | 作者定义的规范物理核算恒等关系：具有独立观测去向的相容材料/当前状态/组分池 | 相容库存/离场 QA、干组分及纯水池分别处理；披露残差，不虚构交换或闭合燃烧总质量 |
| `carbon-oxidation-identity` | `method_factor` | 作者定义的规范碳化学计量恒等关系：一质量单位化石碳至多形成 44/12 质量单位化石 CO2 | 仅用于化石碳基础的 CO2 上限 QA 约束，不是完全氧化或燃料消耗因子 |
