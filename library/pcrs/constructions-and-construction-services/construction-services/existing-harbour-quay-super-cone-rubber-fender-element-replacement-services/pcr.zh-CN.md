---
pcr_id: pcr.construction-services.existing-harbour-quay-super-cone-rubber-fender-element-replacement-services
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 既有码头标准安装超级锥型橡胶护舷单元更换服务

## 1. 范围与适用性

本 PCR 适用于既有混凝土港口码头上损坏的标准安装 SCN 型超级锥型橡胶护舷单元更换。经确认合格且兼容的钢制前面板、UHMWPE 面层、链条及既有锚固件继续使用。承包方负责安全作业施工通行与作业辅助及支撑、受控拆除、接口检查与清洁、安装获批新橡胶锥体、重新连接与调整、完成实际规定检查以及签署更换交接。手册支持部件接口及损坏后的更换判断，不提供通用 LCA 数量，也不保证其直接适用于当前项目。

排除新码头或全新护舷系统；SCK、拱型、泡沫、充气、反向安装及平行运动结构；船用护舷；新锚固件、结构重建或前面板更换；冷/热硫化修补；后续靠泊、港口运营及计划维护。如保留接口未通过资格确认，应停止本路线并另行确定维修范围。来源：`un-cpc3-2025`；`trelleborg-scn-sck-2018`；`trelleborg-fender-systems-2019`。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.construction-services.existing-harbour-quay-super-cone-rubber-fender-element-replacement-services |
| classification_refs | CPC 3.0 54232；属于更窄的维修子集，须经单独语义映射审查 |
| covered_products | 在保留合格兼容码头、面板/面层、链条及锚固件的标准安装位置，完成一个获批完整 SCN 橡胶锥体的验收更换 |
| excluded_products | 新护舷系统、新码头/锚固件/面板、其他护舷技术或安装方式、硫化修补及运营靠泊服务 |
| representative_product | 在唯一标识的泊位位置完成全部限定验收门槛的一个场址特定锥体更换 |
| production_route | 授权并支撑保留面板；拆除损坏锥体；检查/清洁保留接口；安装获批锥体及必要匹配紧固件；调整链条/对中；完成规定检查并交接 |
| market_state | 业主签署交接时已完成的承包维修服务；橡胶等级与规格为申报配置属性，不是等效系数 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| what | 既有码头一个位置上完全验收的标准安装 SCN 橡胶锥体更换 |
| how_much | 1 item；N 为最终验收的唯一橡胶单元更换 ID 正数，不是尝试、螺栓、面板或整个码头数量 |
| how_well | 保留面板/面层、链条及锚固件合格且兼容；实际获批锥体配置；完成安全支撑、就位/紧固件、对中/链条设置以及全部项目规定扭矩、复紧或试验，签署限定范围交接 |
| how_long_or_cycle | 从获批准备至必要后续验收的一个限定维修批次；记录全部实际日期/期间及重复作业。不设未来寿命或服务间隔 |
| reference_flow_link | `accepted_element_replacement` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 既有码头标准安装超级锥型橡胶护舷单元验收更换服务 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量单位组 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | item |
| 必需限定信息 | 泊位及单元 ID；标准安装；实际 SCN 规格/等级/胶料及嵌入件；出厂证书；保留面板/面层/链条/锚固件资格确认；获批图纸及吊装方案；当地环境/荷载背景；验收标准/结果/签字；作业期间；排除的大范围缺陷 |


## 4. 计量与单位规则

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| reference_count | 参考产品 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | item | 仅计入全部限定门槛已签署完成的唯一更换 ID。N 必须为正；重复拆装、吊装失败、锥体拒收及未解决位置不得增加 N。一个计数不表示质量、寿命或吸能等效。 |
| native_quantity | 所有清单行 | 实际核验的交换属性 | 实际原生单位 | 各 SKU/材料/服务保留原生计量单位；等级、扭矩结果与作业小时是限定属性或活动，只有核验匹配服务参考量后才可成为服务交换。不同单位不得相加。 |
| physical_conversion | 材料及流体行 | 质量或实际原生属性 | kg 或实际原生单位 | 件数转质量须有同一实际 SKU 净单件质量；体积转质量须有该材料实际体积/单位、密度、状态、温度及来源。污染混合废物质量不得推断报废件数。 |
| stock_basis | 材料/燃料投入及对外退回 | 实际原生属性 | 同一台账内使用相同单位 | 毛收货量指扣皮重而未扣退回的数量。每个关联供应范围仅选消耗量法或毛投入含出口法；不得将净采购投入与毛退回同时使用。期初/期末库存及其上游负担须衔接。 |
| species_basis | routine_substance_release;incident_substance_release | Mass | kg | 明确实际物质/化学种或粒径类别及受纳介质。整液物理损失与部分组分视图不相加；质量平衡残差、SDS 百分比或低 VOC 标签本身不是排放量。 |
| `count_unit_alias` | 存在时的计数交换 | Count | item | 本 PCR 的显示别名 item 表示已核实的物品数量单位组参考单位 Item(s)，系数为 1。具体数据集须保留实际参考单位身份；此书写别名不建立质量、面积或服务之间的等价关系。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 既有混凝土码头的 SCN 锥体损坏；保留面板/面层、链条及锚固件已确认合格且兼容，可开展本限定更换；申报实际危险、施工通行与作业辅助及损坏记录 |
| starting_condition_role | 保留的生产性资产状态及安装接口，按位置/状况记录；无新制造交换或避免更换信用 |
| product_classification_scope | 港口码头维修子集；分类说明服务背景，不定义部件身份或方法学 |
| recursive_input_rule | 购买独立完成的同类更换服务时，明确其已验收位置 ID、服务范围和上游数据集；本地作业排除已覆盖资源。内部作业阶段不是另一个验收维修产品 |
| upstream_dataset_requirement | 每个新锥体、单独购买的紧固件/耗材、直接公用工程、运输及限定供应商/共享资产贡献，须有兼容身份、数量及上游范围后方可完成最终数据集 |
| disclosure | 申报保留主体资格、供应/保留部件、毛投入或消耗量台账选择、失败/返工负担、所有期间/供应商、库存结转、去向记录、共享资产完整寿命范围及剩余不确定性 |

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| qualified_host | 保留面板/面层、链条、套筒、螺纹、锚固件或码头不兼容/不合格时，不得验收更换。识别并在约定小修范围内修复本次作业造成的损坏；重大缺陷停止本路线。 | trelleborg-fender-systems-2019;trelleborg-scn-sck-2018 |
| integration_boundary | 一个一体化承包责任覆盖拆除、重新连接至交接。拆除无独立验收的中间产品交接。保留接口与新模制橡胶体是不同装配角色；锥体已嵌入/成套包含的硬件不得再次计为单独供应。 | trelleborg-fender-systems-2019 |
| support_gate | 记录实际设计施工通行与作业辅助/隔离、保护储运、合格吊装/支撑及实际质量/重心依据。必要部件全部固定前持续支撑面板；执行实际获批紧固顺序、就位及链条/对中标准。样本值不是通用作业设置。 | trelleborg-fender-systems-2019 |
| incremental_scope | 包括准备、围护、清洗水/清洁剂、工具/保护、实际涂层修复、全部安装/试验/返工资源、进退场及去向，包括供应商支付的资源。记录实际未发生事项；未知不是零。 |  |
| period_shared_scope | 按实际期间索引准备、实施、后续检查和关闭事件。共享起重机、索具、施工通行与作业辅助设备、临时支撑及工具须覆盖所有使用者/期间的制造、维护/替换及寿终；与直接运行及真实供应商范围分开。不得设通用资产寿命。 |  |
| `boundary_atomic_completion` | 所有过程 | 本节的采集要求是必须执行的采集与适用性指令，不是聚合清单交换。完成前景数据集前，必须为每一种实际产品、废物流、物质及环境子区室建立独立原子流卡／交换。保留全部实际事件、上游负荷、退回及原生单位；所链接公式应按每个兼容身份分别执行。环境资源提取记为输入，环境释放记为输出。不得相加不同原生单位、用一个 UUID 代表整个采集池、将缺记录解释为零，或与已有具体卡重复计入。保留宿主的文件性接口仅传递状态，不形成新采购资产。适用成员未明确或未有证据证明不存在时，定量清单仍不完整；非强制筛查提示不能补造数量或化学组成。 |  |

### 条件性清单补全要求

以下标识符表示采集池或文件性状态台账。一个池可能有零个、一个或多个实际成员。须依据真实记录判断适用性，并为每个成员保留原有数量方法和采集协议；只有兼容的数量才能共同核对。下列原有可选筛查区间仅作为暂定复核提示，不得强加于不同材料或混合采集池。

#### 采集要求：单独供应的兼容护舷紧固部件 (`separate_fasteners`)

过程／待建立交换的方向／类型：`element_replacement` / `inputs` / `product`.

实际按螺栓/螺母/垫圈等单独供应 SKU 及接口展开本条件角色。保留并检验的紧固件没有新供应数量。确认螺纹/材料兼容性及实际更换需要；锥体或供应商成套服务已包含的硬件不重复计入。

- 采集对象：单独供应的兼容护舷紧固部件
- 流属性/单位：Count / item
- 数量规则：q_scope / N；cp_separate_fasteners；按实际原生单位表示每参考流可追溯批次量，采用第8节精确对应本行的计算规则。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_separate_fasteners`
- 来源：`trelleborg-fender-systems-2019`

范围证据需求：须有实际逐件数量、报废件数、安装/保留件数；换算时须有真实 SKU 质量。紧固表不规定通用硬件需求。

#### 采集要求：实际清洁及紧固维护配方 (`maintenance_formulations`)

过程／待建立交换的方向／类型：`element_replacement` / `inputs` / `product`.

按本作业实际获批清洁剂、防锈剂、润滑脂等配方分别展开，记录组成和包装边界。仅使用实际兼容产品；排除硫化材料及假设必须使用的化学品。配方质量不是活性物质质量或排放量。

- 采集对象：实际清洁及紧固维护配方
- 流属性/单位：Mass / kg
- 数量规则：q_scope / N；cp_maintenance_formulations；按实际原生单位表示每参考流可追溯批次量，采用第8节精确对应本行的计算规则。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_maintenance_formulations`
- 来源：`trelleborg-scn-sck-2018`

范围证据需求：须有实际配方身份、消耗/毛投入方法、库存、退回、去向和组成。不设通用剂量；VOC 比例不是排放因子。

#### 采集要求：实际作业损坏的涂层修复材料 (`coating_remedy`)

过程／待建立交换的方向／类型：`element_replacement` / `inputs` / `product`.

仅在需要修复本次搬运或更换造成的损坏时，纳入兼容底漆/涂料/稀释剂。记录保留表面、获批体系及耗材归属。重大面板重建或更换不在本产品范围内。

- 采集对象：实际作业损坏的涂层修复材料
- 流属性/单位：Mass / kg
- 数量规则：q_scope / N；cp_coating_remedy；按实际原生单位表示每参考流可追溯批次量，采用第8节精确对应本行的计算规则。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_coating_remedy`
- 来源：`trelleborg-fender-systems-2019`

范围证据需求：须有实际涂层体系、毛投入/消耗供应量、规定的膜层/固化验收、损失及去向。不设默认修复面积、固含收率、干燥时间或 VOC 释放。

#### 采集要求：实际临时保护及围控耗材 (`protection_consumables`)

过程／待建立交换的方向／类型：`element_replacement` / `inputs` / `product`.

按材料展开实际非重复使用的保护材料、吸附剂、清洁布、遮蔽或围控物。可重复使用垫具、支撑及索具通过 shared_asset_service 分配；实际增量磨损/替换仅记录一次。包括准备、试验及全部重复搬运。

- 采集对象：实际临时保护及围控耗材
- 流属性/单位：Mass / kg
- 数量规则：q_scope / N；cp_protection_consumables；按实际原生单位表示每参考流可追溯批次量，采用第8节精确对应本行的计算规则。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_protection_consumables`
- 来源：`trelleborg-fender-systems-2019`

范围证据需求：须有作业收货、库存、使用及去向。不假定吊带、吸附剂或围挡的默认件数或质量。

#### 采集要求：实际计量的直接电力或其他供应能量 (`direct_energy`)

过程／待建立交换的方向／类型：`element_replacement` / `inputs` / `product`.

按载能体和计量边界展开电动起重机、工具、照明、清洁/试验设备或临时设施。核验完成供应商服务已含的相同运行不再计入。运行时间不是能量；不得以燃料热值属性替代电力。

- 采集对象：实际计量的直接电力或其他供应能量
- 流属性/单位：实际核验的能量属性 / 实际原生能量单位
- 数量规则：q_scope / N；cp_direct_energy；按实际原生单位表示每参考流可追溯批次量，采用第8节精确对应本行的计算规则。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_direct_energy`

范围证据需求：须有实际载能体/属性/单位、仪表读数，或包含空转/返工的设备负载时间模型、校准及重叠边界。本 PCR 不设通用起重机能耗强度。

#### 采集要求：直接建模设备及车辆的实际供应燃料 (`direct_fuel`)

过程／待建立交换的方向／类型：`element_replacement` / `inputs` / `product`.

按实际燃料身份及发动机/车辆范围展开；仅在本地归属时包括空转、进退场及返工。采用库存调整后供应量及实际对外出口，或在消耗量视图中仅扣除一次匹配对外可用退回供应。未退回燃料废物和未围控损失仍承担上游供应负担；已燃量另作为燃烧活动。未燃泄漏回收与保留库存为物理台账，不是通用污染物流。

- 采集对象：直接建模设备及车辆的实际供应燃料
- 流属性/单位：Mass / kg
- 数量规则：q_scope / N；cp_direct_fuel；按实际原生单位表示每参考流可追溯批次量，采用第8节精确对应本行的计算规则。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_direct_fuel`

范围证据需求：须有同范围期初/毛收货/期末及互斥未燃退回/废物/未围控量，体积换算须有密度/状态/温度。总泄漏仅审计；回收液仅归入最终去向一次。

#### 采集要求：实际单独购买的运输及进退场服务 (`transport_service`)

过程／待建立交换的方向／类型：`element_replacement` / `inputs` / `product`.

按方式/供应商/荷载/路线展开锥体、物资、废物或设备进退场的已完成运输。核验服务参考单位及覆盖范围；直接车辆燃料/能量/资产使用替代对应服务，不与该覆盖重复叠加。

- 采集对象：实际单独购买的运输及进退场服务
- 流属性/单位：实际核验的运输属性 / 实际原生运输单位
- 数量规则：q_scope / N；cp_transport_service；按实际原生单位表示每参考流可追溯批次量，采用第8节精确对应本行的计算规则。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_transport_service`

范围证据需求：须有实际载荷、距离、载货/空载航段、方式、供应商及参考单位；若采用质量距离，须有实际 kg 与 km。不设通用距离，不按发票价格默认分配。

#### 采集要求：真实限定购买的吊装施工通行与作业辅助或试验服务 (`provider_service`)

过程／待建立交换的方向／类型：`element_replacement` / `inputs` / `product`.

仅实例化真实独立限定且已完成的供应商服务，具有实际资源/结果及申报上游覆盖。起重机小时价格、扭矩报告或租用资产本身不等于完整更换服务件数。本地未覆盖的准备/耗材/直接公用工程仍在此归属。

- 采集对象：真实限定购买的吊装施工通行与作业辅助或试验服务
- 流属性/单位：实际核验的服务属性 / 实际原生服务单位
- 数量规则：q_scope / N；cp_provider_service；按实际原生单位表示每参考流可追溯批次量，采用第8节精确对应本行的计算规则。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_provider_service`

范围证据需求：须有实际合同、已完成范围/结果、参考属性/单位及排除资源。服务小时不得默认为 item；数量或上游范围缺失阻止最终数据集。

#### 采集要求：共享吊装及支撑资产完整寿命服务的归属量 (`shared_asset_service`)

过程／待建立交换的方向／类型：`element_replacement` / `inputs` / `product`.

按在作业或期间间共享的实际起重机、施工通行与作业辅助设备、索具、工具和临时支撑展开。按一致服务基准覆盖制造、维护/替换及寿终；从该贡献中排除直接运行、单独清单备件及已购买供应商覆盖。

- 采集对象：共享吊装及支撑资产完整寿命服务的归属量
- 流属性/单位：实际核验的资产服务属性 / 实际原生服务单位
- 数量规则：q_scope / N；cp_shared_asset_service；按实际原生单位表示每参考流可追溯批次量，采用第8节精确对应本行的计算规则。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_shared_asset_service`

范围证据需求：须有所有使用者/期间、兼容驱动量分子/完整寿命分母及完整负担范围。采用已观察完整寿命，或历史加有依据剩余服务/替换/终止/寿终，并记录不确定性、敏感性和更新；不得用年化掩盖缺失范围。

#### 采集要求：实际对外退回的未用或拒收件数原生部件 (`counted_returns`)

过程／待建立交换的方向／类型：`element_replacement` / `outputs` / `product`.

锥体及单独供应匹配紧固件按 SKU 和去向展开，仅当其作为可用供应商退回/回收产品离开前景保管范围时记录。期末库存不是对外退回；损坏报废件属于废物。每项退回保留其上游负担/核算处理，不自动产生信用。

- 采集对象：实际对外退回的未用或拒收件数原生部件
- 流属性/单位：Count / item
- 数量规则：q_scope / N；cp_counted_returns；按实际原生单位表示每参考流可追溯批次量，采用第8节精确对应本行的计算规则。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_counted_returns`

范围证据需求：须有实际签署退回件数、SKU/状态、保管、去向及交易范围。匹配收货及报废/安装件数台账；混合废物质量不能决定退回件数。

#### 采集要求：实际对外退回的未用质量原生材料 (`mass_returns`)

过程／待建立交换的方向／类型：`element_replacement` / `outputs` / `product`.

按实际身份及对外保管转移展开清洁可用配方、燃料、水等质量原生供应品。区分供应商退回、污染废物、保留泄漏回收液及期末库存。与毛投入/消耗量选择匹配，不输出虚构负供应或避免负担。

- 采集对象：实际对外退回的未用质量原生材料
- 流属性/单位：Mass / kg
- 数量规则：q_scope / N；cp_mass_returns；按实际原生单位表示每参考流可追溯批次量，采用第8节精确对应本行的计算规则。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_mass_returns`

范围证据需求：须有实际称量净退回量、身份/组成、状态及去向。体积计量须有实际密度/状态/温度/来源，不假定清洁比例。

#### 采集要求：拆除旧橡胶护舷及拒收橡胶废物 (`removed_rubber`)

过程／待建立交换的方向／类型：`element_replacement` / `outputs` / `waste`.

区分来源记录拆除旧锥体及新供应后拒收处置/回收锥体，包括不可分离的嵌入硬件。明确污染、状态、实际保管和废物去向。旧主体单元不是本维修新制造投入，其增量拆除与处理仍应纳入。

- 采集对象：拆除旧橡胶护舷及拒收橡胶废物
- 流属性/单位：Mass / kg
- 数量规则：q_scope / N；cp_removed_rubber；按实际原生单位表示每参考流可追溯批次量，采用第8节精确对应本行的计算规则。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_removed_rubber`
- 来源：`trelleborg-scn-sck-2018`

范围证据需求：须有实际净质量、拆除/拒收件数、嵌入金属边界及去向联单；不得由尺寸套用通用质量，不自动计橡胶回收信用。

#### 采集要求：拆除单独紧固金属及金属碎屑废物 (`removed_metal`)

过程／待建立交换的方向／类型：`element_replacement` / `outputs` / `waste`.

包括实际报废的保留或新紧固件及单独拆除金属碎屑；保留来源 SKU/件数与状态。拆除橡胶毛废物质量已含的嵌入钢板不得再次计入。面板更换不在范围内。

- 采集对象：拆除单独紧固金属及金属碎屑废物
- 流属性/单位：Mass / kg
- 数量规则：q_scope / N；cp_removed_metal；按实际原生单位表示每参考流可追溯批次量，采用第8节精确对应本行的计算规则。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_removed_metal`
- 来源：`trelleborg-fender-systems-2019`

范围证据需求：须有逐 SKU 实际报废件数、净金属质量、嵌入/单独边界及去向。污染混合废物 kg 不能换算紧固件件数。

#### 采集要求：实际固体清洁涂层及围控残余废物 (`solid_cleanup_waste`)

过程／待建立交换的方向／类型：`element_replacement` / `outputs` / `waste`.

按组成与去向展开实际清除海生物/异物、涂层碎屑、污染吸附剂/清洁布及废保护材料。必要时区分干载体与捕集污染物视图，避免相加两次。作业涂层修复及事故清理归属本节点。

- 采集对象：实际固体清洁涂层及围控残余废物
- 流属性/单位：Mass / kg
- 数量规则：q_scope / N；cp_solid_cleanup_waste；按实际原生单位表示每参考流可追溯批次量，采用第8节精确对应本行的计算规则。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_solid_cleanup_waste`

范围证据需求：须有实际毛/皮/净质量、湿度/污染基准、来源事件和联单。不得将未测清洁残差变为物质排放。

#### 采集要求：实际捕集洗液及送处理污染流体 (`liquid_cleanup_waste`)

过程／待建立交换的方向／类型：`element_replacement` / `outputs` / `waste`.

按组成与保管记录实际捕集洗水/清洁剂、不可用配方/燃料及送废物处理泄漏回收液。整液废物质量包括其组分；部分污染物分析为描述或不可加组分存量。可用退回液和保留回收库存另有去向。

- 采集对象：实际捕集洗液及送处理污染流体
- 流属性/单位：Mass / kg
- 数量规则：q_scope / N；cp_liquid_cleanup_waste；按实际原生单位表示每参考流可追溯批次量，采用第8节精确对应本行的计算规则。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_liquid_cleanup_waste`

范围证据需求：须有实际质量或体积密度证据、组成、收集路线及处理去向。不得因为在码头清洗就假定排海；未围控液体须有实际受纳介质/物质证据。

#### 采集要求：实际废弃供应包装 (`packaging_waste`)

过程／待建立交换的方向／类型：`element_replacement` / `outputs` / `waste`.

按材料展开实际锥体/紧固件/配方包装，包括前景废弃运输保护物。可重复使用包装进入实际退回或共享服务台账；已由上游覆盖的包装须披露，不重复添加。

- 采集对象：实际废弃供应包装
- 流属性/单位：Mass / kg
- 数量规则：q_scope / N；cp_packaging_waste；按实际原生单位表示每参考流可追溯批次量，采用第8节精确对应本行的计算规则。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging_waste`

范围证据需求：须有实际材料、净质量/皮重、保管、上游范围及去向；不设按锥体数量固定的包装比例。

#### 采集要求：向明确受纳介质的实际已识别常规物质释放 (`routine_substance_release`)

过程／待建立交换的方向／类型：`element_replacement` / `outputs` / `elementary`.

仅在识别直接归属燃烧、涂装/清洁或其他常规活动的物质/化学种或粒径及介质后，创建零、一或多个实际基本交换。采用测量或有效活动/组成/归趋/因子计算并记录单位和来源；排除上游供应商已归属的排放。

- 采集对象：向明确受纳介质的实际已识别常规物质释放
- 流属性/单位：Mass / kg
- 数量规则：q_scope / N；cp_routine_substance_release；按实际原生单位表示每参考流可追溯批次量，采用第8节精确对应本行的计算规则。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_routine_substance_release`

范围证据需求：须有实际物质、介质、活动、适用浓度/流量测量或有效因子/归趋证据。宽泛 VOC/NOx/油混合物、SDS 组成及未解释平衡残差不能支持固定 UUID 或释放量。

#### 采集要求：向明确受纳介质的实际已识别事故物质释放 (`incident_substance_release`)

过程／待建立交换的方向／类型：`element_replacement` / `outputs` / `elementary`.

仅在实际事故且回收材料已追踪到最终退回、废物或期末库存后，实例化未围控向空气、水或土壤释放。整液损失为物理审计；组分物质为基本流视图，不得与整液混合物相加。事故归属与常规释放分开。

- 采集对象：向明确受纳介质的实际已识别事故物质释放
- 流属性/单位：Mass / kg
- 数量规则：q_scope / N；cp_incident_substance_release；按实际原生单位表示每参考流可追溯批次量，采用第8节精确对应本行的计算规则。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_incident_substance_release`

范围证据需求：须有实际事件、流体身份/组成、回收/未围控量、受纳介质及有效物质/归趋计算；总泄漏仅审计。缺少事故记录或低 VOC 认证均不能证明零。

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| element_replacement | 标准安装锥型橡胶单元一体化更换 | required | 保留接口合格的实际限定更换作业 | 授权拆除、检查/清洁、新锥体/紧固件集成、链条/对中调整、规定后续检查、缺陷关闭及签字交接 | accepted_element_replacement |

同一节点负责全部返工回路及物理出口：不匹配或损坏的新锥体进入记录的供应商退回、本范围外修复/回收或废物去向；就位、对中或检查失败留在本节点纠正。两种情况均不是验收输出。检查、起重机使用与扭矩检测为辅助活动，不是独立制造节点。保留码头/面板/面层/链条/锚固件是 cp_accepted_element_replacement 中的状态接口，不是新制造投入。来源：`trelleborg-fender-systems-2019`；`trelleborg-scn-sck-2018`。

### 过程：标准安装锥型橡胶单元一体化更换 (`element_replacement`)

#### 输入

##### 产品流

###### 供应的获批完整模制 SCN 超级锥型橡胶护舷单元 (`replacement_cone`)

记录实际标准安装锥体 SKU、尺寸/等级/胶料、嵌入钢板及出厂证书。供应状态不含单独开票的紧固件。批次台账保留全部损坏、拒收或重复供应的锥体；安装需求不自动等于采购一个锥体。

- 选定流：供应的获批完整模制 SCN 超级锥型橡胶护舷单元
- 流属性/单位：Count / item
- 数量规则：q_scope / N；cp_replacement_cone；按实际原生单位表示每参考流可追溯批次量，采用第8节精确对应本行的计算规则。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_replacement_cone`
- 来源：`trelleborg-scn-sck-2018`; `trelleborg-fender-systems-2019`

范围证据需求：须有实际 SKU 收货、期初/期末库存、验收安装、拒收件数、供应商退回及净单件质量。样本尺寸不能推出通用锥体质量或更换收率。

###### 实际供应的接口及橡胶清洗水 (`cleaning_water`)

实施清洗时记录去除海生物/异物及接口清洁的实际供应水，包括返工和围控清理。区分购买水与直接取水；仅在证据确定直接取水边界时改用实际基本资源卡。

- 选定流：实际供应的接口及橡胶清洗水
- 流属性/单位：Mass / kg
- 数量规则：q_scope / N；cp_cleaning_water；按实际原生单位表示每参考流可追溯批次量，采用第8节精确对应本行的计算规则。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cleaning_water`
- 来源：`trelleborg-scn-sck-2018`

范围证据需求：计量/称量实际供水、库存、清洁退回和捕集液；体积换算须有实际密度/状态/温度/来源。清洁指引不提供通用用水量。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 既有码头标准安装超级锥型橡胶护舷单元验收更换服务 (`accepted_element_replacement`)

此最终输出为一个唯一标识的单元更换：保留接口合格，实际获批新锥体/紧固件、保护吊装/支撑、就位/紧固、链条/对中以及全部规定后续/复紧/试验完成，并签署限定交接。N 只计最终验收 ID；参考表达 N/N = 1 是归一化定义，不是经验供应收率。全部失败/重复资源仍除以实际 N。

- 选定流：既有码头标准安装超级锥型橡胶护舷单元验收更换服务
- 流属性/单位：Count / item
- 数量规则：1 item
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_accepted_element_replacement`
- 来源：`trelleborg-fender-systems-2019`; `trelleborg-scn-sck-2018`

范围证据需求：仅为精确参考归一化。须有实际最终验收 ID、配置、标准、结果、签字、日期及全部缺陷关闭；不推断质量、扭矩、通用复紧间隔或寿命。

##### 废物流

##### 基本流

## 7. 分配与联产品处理

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| accepted_denominator | 限定批次采用实际正数 N，即唯一最终验收位置更换 ID。全部相关尝试、拒收、吊装失败、重复检查、后续与返工归属于这些 ID；不得删除负担或将重复尝试计为额外产品。 |  |
| ledger_method | 每个部件/配方/燃料范围仅选消耗量投入或含出口的毛投入法。毛量为扣皮重而未扣退回。期初库存结转上游负担；期末库存及其负担保留在库，不是对外流。内部领用/回收不得形成第二次外部收货。 供应归属量明确从期初结转库存 + 新外部毛收货 - 期末结转库存计算，同一 SKU/单位并结转对应上游负担。毛投入含出口法保留实际对外出口；消耗量法仅扣除一次对应对外退回供应。最终安装/保留去向、报废量、对外退回与期末库存互斥；中间使用/投加活动不可相加。燃料消耗供应量只排除匹配对外可用退回；未燃废物和未围控损失仍承接上游供应负担。已燃平衡另用于燃烧活动。 |  |
| components_balance | 件数台账满足期初 + 毛收货 = 期末 + 最终安装 + 退回 + 实际报废 + 其他有记录的件数去向，全部互斥。最终安装不含废物/释放/退回；采用实际报废件数，不从混合废物质量推断。材料质量台账以同样方式核对各最终去向；中间使用/投加活动不可加总。 |  |
| fuel_balance | 同一单位/范围内，燃烧燃料 = 期初 + 毛收货 - 期末 - 对外可用退回 - 最终未燃废物 - 最终未围控整液损失 - 其他有记录的未燃出口。回收泄漏仅归入退回/废物/期末一次；总泄漏仅用于审计。保留回收液已在期末库存中，不得再次扣减。 |  |
| reject_paths | 损坏或不兼容的新锥体/紧固件，仅在获批时于本节点实际纠正，否则由记录的可用退回、外部回收或废物去向退出。拆除旧单元和拒收件不是验收更换服务输出。本范围不含硫化修补回路。 | trelleborg-scn-sck-2018 |
| shared_full_life | 逐个共享资产/服务识别所有使用作业/节点/期间、兼容计量驱动量及完整寿命分母；作业份额 = 作业驱动量 / 全使用者完整寿命驱动量。追溯制造、维护、替换及寿终。使用已观察完整寿命，或历史加有依据剩余寿命事件，并记录来源、不确定性、敏感性及更新计划。缺失分母/范围阻止最终数据集，不设默认寿命。排除直接运行/备件/供应商重复。 |  |
| period_events | 列出准备、拆装、重复工作、后续及交接期间，以及共享资产购置、维护/替换与终止/寿终阶段。按 ID 和期间关联每项投入/事件/输出；期间间库存只结转一次。每项事件仅分配一次给实际使用者，不指定通用未来护舷寿命。 |  |
| provider_and_cooutput | 不单凭价格分配。真实限定供应商服务使用核验后的原生参考单位及已完成范围；各直接资源仅有一个归属。废物和供应商退回是须申报上游/处理方法的物理出口，不自动生成联产品信用。实际销售/回收若需其他方法，应在最终数据集前披露并审查。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_replacement_cone | element_replacement | 供应的获批完整模制 SCN 超级锥型橡胶护舷单元 | actual_record | campaign_id;period_id;event_id;ledger_method;q_scope;quantity_unit;N;accepted_ids;sku;cone_size;grade;compound;embedded_hardware;factory_certificate;opening_count;gross_receipt_count;closing_count;installed_count;returned_count;discarded_count;other_count_destination;net_unit_mass_kg;unit_mass_source | 按实际锥体 SKU 件数台账核对出厂/保管证据及实际安装、退回、报废、库存；区分消耗法与毛投入法。 供应归属量明确从期初结转库存 + 新外部毛收货 - 期末结转库存计算，同一 SKU/单位并结转对应上游负担。毛投入含出口法保留实际对外出口；消耗量法仅扣除一次对应对外退回供应。最终安装/保留去向、报废量、对外退回与期末库存互斥；中间使用/投加活动不可相加。 q_scope 为台账及归属核对后可追溯的批次归属量；q_scope 和 N 为数值，ID/标准为类别。N 与 cp_accepted_element_replacement 核对。 | item | 每次实际收货/活动/出口及最终核对 | 准备至必要后续检查和签字交接的完整期间，包括失败/重复工作 | 申报泊位/作业及参与供应商、资产和使用者 | per reference flow | 校准仪表或可追溯原始记录、保管/验收证据、台账核对、不确定性及实际未发生证据；未知阻止最终数据集。 |
| cp_separate_fasteners | element_replacement | 单独供应的兼容护舷紧固部件 | actual_record | campaign_id;period_id;event_id;ledger_method;q_scope;quantity_unit;N;accepted_ids;sku;interface;thread;material;bundled_scope;opening_count;gross_receipt_count;closing_count;installed_count;returned_count;discarded_count;other_count_destination;net_unit_mass_kg;unit_mass_source | 按单独供应的兼容硬件 SKU 计数，核对实际报废及保留/安装状态，排除成套/保留重复收货。 供应归属量明确从期初结转库存 + 新外部毛收货 - 期末结转库存计算，同一 SKU/单位并结转对应上游负担。毛投入含出口法保留实际对外出口；消耗量法仅扣除一次对应对外退回供应。最终安装/保留去向、报废量、对外退回与期末库存互斥；中间使用/投加活动不可相加。 q_scope 为台账及归属核对后可追溯的批次归属量；q_scope 和 N 为数值，ID/标准为类别。N 与 cp_accepted_element_replacement 核对。 | item | 每次实际收货/活动/出口及最终核对 | 准备至必要后续检查和签字交接的完整期间，包括失败/重复工作 | 申报泊位/作业及参与供应商、资产和使用者 | per reference flow | 校准仪表或可追溯原始记录、保管/验收证据、台账核对、不确定性及实际未发生证据；未知阻止最终数据集。 |
| cp_cleaning_water | element_replacement | 实际供应的接口及橡胶清洗水 | actual_record | campaign_id;period_id;event_id;ledger_method;q_scope;quantity_unit;N;accepted_ids;water_identity;supply_boundary;opening_kg;gross_receipt_kg;closing_kg;returned_kg;captured_waste_kg;uncontained_whole_fluid_kg;other_final_destination_kg;volume;volume_unit;density;density_unit;state;temperature;density_source | 计量或称量包括准备/返工的实际供水，核对同单位平衡与捕集/未围控最终去向，不再添加中间使用活动。 供应归属量明确从期初结转库存 + 新外部毛收货 - 期末结转库存计算，同一 SKU/单位并结转对应上游负担。毛投入含出口法保留实际对外出口；消耗量法仅扣除一次对应对外退回供应。最终安装/保留去向、报废量、对外退回与期末库存互斥；中间使用/投加活动不可相加。 q_scope 为台账及归属核对后可追溯的批次归属量；q_scope 和 N 为数值，ID/标准为类别。N 与 cp_accepted_element_replacement 核对。 | kg | 每次实际收货/活动/出口及最终核对 | 准备至必要后续检查和签字交接的完整期间，包括失败/重复工作 | 申报泊位/作业及参与供应商、资产和使用者 | per reference flow | 校准仪表或可追溯原始记录、保管/验收证据、台账核对、不确定性及实际未发生证据；未知阻止最终数据集。 |
| cp_maintenance_formulations | element_replacement | 实际清洁及紧固维护配方 | actual_record | campaign_id;period_id;event_id;ledger_method;q_scope;quantity_unit;N;accepted_ids;formulation_id;composition;sds;opening_kg;gross_receipt_kg;closing_kg;retained_final_kg;returned_kg;waste_kg;uncontained_whole_fluid_kg;other_final_destination_kg;dosed_activity_kg;volume;volume_unit;density;density_unit;state;temperature;density_source | 逐配方扣皮重称量，并核对互斥最终去向；投加活动仅用于审计，不与去向相加。 供应归属量明确从期初结转库存 + 新外部毛收货 - 期末结转库存计算，同一 SKU/单位并结转对应上游负担。毛投入含出口法保留实际对外出口；消耗量法仅扣除一次对应对外退回供应。最终安装/保留去向、报废量、对外退回与期末库存互斥；中间使用/投加活动不可相加。 q_scope 为台账及归属核对后可追溯的批次归属量；q_scope 和 N 为数值，ID/标准为类别。N 与 cp_accepted_element_replacement 核对。 | kg | 每次实际收货/活动/出口及最终核对 | 准备至必要后续检查和签字交接的完整期间，包括失败/重复工作 | 申报泊位/作业及参与供应商、资产和使用者 | per reference flow | 校准仪表或可追溯原始记录、保管/验收证据、台账核对、不确定性及实际未发生证据；未知阻止最终数据集。 |
| cp_coating_remedy | element_replacement | 实际作业损坏的涂层修复材料 | actual_record | campaign_id;period_id;event_id;ledger_method;q_scope;quantity_unit;N;accepted_ids;surface_id;damage_event;coating_system;formulation_id;composition;opening_kg;gross_receipt_kg;closing_kg;installed_dry_kg;returned_kg;waste_kg;released_species_kg;other_final_destination_kg;volume;volume_unit;density;density_unit;state;temperature;density_source;acceptance_result | 追溯实际作业损坏修复、净供应、获批体系和实际固化/检查门槛；组成与膜层本身不证明蒸发。 供应归属量明确从期初结转库存 + 新外部毛收货 - 期末结转库存计算，同一 SKU/单位并结转对应上游负担。毛投入含出口法保留实际对外出口；消耗量法仅扣除一次对应对外退回供应。最终安装/保留去向、报废量、对外退回与期末库存互斥；中间使用/投加活动不可相加。 q_scope 为台账及归属核对后可追溯的批次归属量；q_scope 和 N 为数值，ID/标准为类别。N 与 cp_accepted_element_replacement 核对。 | kg | 每次实际收货/活动/出口及最终核对 | 准备至必要后续检查和签字交接的完整期间，包括失败/重复工作 | 申报泊位/作业及参与供应商、资产和使用者 | per reference flow | 校准仪表或可追溯原始记录、保管/验收证据、台账核对、不确定性及实际未发生证据；未知阻止最终数据集。 |
| cp_protection_consumables | element_replacement | 实际临时保护及围控耗材 | actual_record | campaign_id;period_id;event_id;ledger_method;q_scope;quantity_unit;N;accepted_ids;material_id;reusable_flag;opening_kg;gross_receipt_kg;closing_kg;returned_kg;discarded_kg;other_final_destination_kg;upstream_scope | 称量增量非重复使用保护/围控供应品，并追踪全部尝试；重复使用资产另有完整寿命范围。 供应归属量明确从期初结转库存 + 新外部毛收货 - 期末结转库存计算，同一 SKU/单位并结转对应上游负担。毛投入含出口法保留实际对外出口；消耗量法仅扣除一次对应对外退回供应。最终安装/保留去向、报废量、对外退回与期末库存互斥；中间使用/投加活动不可相加。 q_scope 为台账及归属核对后可追溯的批次归属量；q_scope 和 N 为数值，ID/标准为类别。N 与 cp_accepted_element_replacement 核对。 | kg | 每次实际收货/活动/出口及最终核对 | 准备至必要后续检查和签字交接的完整期间，包括失败/重复工作 | 申报泊位/作业及参与供应商、资产和使用者 | per reference flow | 校准仪表或可追溯原始记录、保管/验收证据、台账核对、不确定性及实际未发生证据；未知阻止最终数据集。 |
| cp_direct_energy | element_replacement | 实际计量的直接电力或其他供应能量 | actual_record | campaign_id;period_id;event_id;ledger_method;q_scope;quantity_unit;N;accepted_ids;carrier;property_id;unit_group_id;meter_id;reading_start;reading_end;native_unit;equipment_id;activity_hours;load_value;load_unit;load_source;idle_energy;rework_energy;coverage_overlap | 采用校准计量或透明设备/负载/时间证据，包含空转/返工；核验实际能量支持链并排除供应商重复。 q_scope 为台账及归属核对后可追溯的批次归属量；q_scope 和 N 为数值，ID/标准为类别。N 与 cp_accepted_element_replacement 核对。 | 实际原生能量单位 | 每次实际收货/活动/出口及最终核对 | 准备至必要后续检查和签字交接的完整期间，包括失败/重复工作 | 申报泊位/作业及参与供应商、资产和使用者 | per reference flow | 校准仪表或可追溯原始记录、保管/验收证据、台账核对、不确定性及实际未发生证据；未知阻止最终数据集。 |
| cp_direct_fuel | element_replacement | 直接建模设备及车辆的实际供应燃料 | actual_record | campaign_id;period_id;event_id;ledger_method;q_scope;quantity_unit;N;accepted_ids;fuel_id;composition;opening_kg;gross_receipt_kg;closing_kg;outward_return_kg;final_nonburned_waste_kg;final_uncontained_whole_fluid_kg;other_nonburned_exit_kg;total_spilled_audit_kg;recovered_to_return_kg;recovered_to_waste_kg;recovered_to_closing_kg;volume;volume_unit;density;density_unit;state;temperature;density_source | 按 fuel_balance 同范围推导燃烧燃料；回收去向已包含于最终出口/期末，不能额外扣减。毛投入含出口与仅排除可用退回的消耗投入视图互斥，已燃量另用于排放活动。 供应归属量明确从期初结转库存 + 新外部毛收货 - 期末结转库存计算，同一 SKU/单位并结转对应上游负担。毛投入含出口法保留实际对外出口；消耗量法仅扣除一次对应对外退回供应。最终安装/保留去向、报废量、对外退回与期末库存互斥；中间使用/投加活动不可相加。燃料消耗供应量只排除匹配对外可用退回；未燃废物和未围控损失仍承接上游供应负担。已燃平衡另用于燃烧活动。 q_scope 为台账及归属核对后可追溯的批次归属量；q_scope 和 N 为数值，ID/标准为类别。N 与 cp_accepted_element_replacement 核对。 | kg | 每次实际收货/活动/出口及最终核对 | 准备至必要后续检查和签字交接的完整期间，包括失败/重复工作 | 申报泊位/作业及参与供应商、资产和使用者 | per reference flow | 校准仪表或可追溯原始记录、保管/验收证据、台账核对、不确定性及实际未发生证据；未知阻止最终数据集。 |
| cp_transport_service | element_replacement | 实际单独购买的运输及进退场服务 | actual_record | campaign_id;period_id;event_id;ledger_method;q_scope;quantity_unit;N;accepted_ids;leg_id;mode;provider;origin;destination;payload_kg;distance_km;empty_leg;native_quantity;native_unit;reference_property;completed_scope;overlap_exclusions | 采集实际航段/联单及已完成服务核验单位；质量距离须有实际兼容载荷和距离；每段一个归属。 q_scope 为台账及归属核对后可追溯的批次归属量；q_scope 和 N 为数值，ID/标准为类别。N 与 cp_accepted_element_replacement 核对。 | 实际原生运输单位 | 每次实际收货/活动/出口及最终核对 | 准备至必要后续检查和签字交接的完整期间，包括失败/重复工作 | 申报泊位/作业及参与供应商、资产和使用者 | per reference flow | 校准仪表或可追溯原始记录、保管/验收证据、台账核对、不确定性及实际未发生证据；未知阻止最终数据集。 |
| cp_provider_service | element_replacement | 真实限定购买的吊装施工通行与作业辅助或试验服务 | actual_record | campaign_id;period_id;event_id;ledger_method;q_scope;quantity_unit;N;accepted_ids;provider;contract_id;completed_scope;result_id;native_quantity;native_unit;reference_property;upstream_coverage;excluded_resources;overlap_exclusions | 核对已完成限定供应商范围/结果及匹配参考量；本地未覆盖资源明确保留。小时发票或价格不证明件数身份。 q_scope 为台账及归属核对后可追溯的批次归属量；q_scope 和 N 为数值，ID/标准为类别。N 与 cp_accepted_element_replacement 核对。 | 实际原生服务单位 | 每次实际收货/活动/出口及最终核对 | 准备至必要后续检查和签字交接的完整期间，包括失败/重复工作 | 申报泊位/作业及参与供应商、资产和使用者 | per reference flow | 校准仪表或可追溯原始记录、保管/验收证据、台账核对、不确定性及实际未发生证据；未知阻止最终数据集。 |
| cp_shared_asset_service | element_replacement | 共享吊装及支撑资产完整寿命服务的归属量 | actual_record | campaign_id;period_id;event_id;ledger_method;q_scope;quantity_unit;N;accepted_ids;asset_id;service_unit;job_driver;driver_unit;all_consumer_driver;all_consumer_ids;all_period_ids;manufacture_scope;maintenance_scope;replacement_events;termination_event;eol_scope;observed_history;remaining_service_projection;projection_source;uncertainty;sensitivity;update_trigger;overlap_exclusions | 追溯完整寿命负担及兼容全使用者分母；份额采用实际驱动量及完整观察寿命或有依据剩余寿命。排除直接运行、单独备件及供应商已覆盖负担。 q_scope 为台账及归属核对后可追溯的批次归属量；q_scope 和 N 为数值，ID/标准为类别。N 与 cp_accepted_element_replacement 核对。 | 实际原生服务单位 | 每次实际收货/活动/出口及最终核对 | 准备至必要后续检查和签字交接的完整期间，包括失败/重复工作 | 申报泊位/作业及参与供应商、资产和使用者 | per reference flow | 校准仪表或可追溯原始记录、保管/验收证据、台账核对、不确定性及实际未发生证据；未知阻止最终数据集。 |
| cp_accepted_element_replacement | element_replacement | 既有码头标准安装超级锥型橡胶护舷单元验收更换服务 | actual_record | campaign_id;period_id;event_id;ledger_method;q_scope;quantity_unit;N;accepted_ids;accepted_id;position_id;actual_cone_sku;size;grade;compound;factory_certificate;retained_frame_facing_condition;retained_chain_condition;retained_anchor_quay_condition;approved_drawing;lifting_plan;actual_weight_cg;fastener_compatibility;seating_result;torque_criterion;torque_result;retorque_required;retorque_result;alignment_chain_result;test_criterion;test_result;defect_closure;release_signature;release_date;periods | 所有实际项目标准及后续检查关闭后仅计唯一签署验收 ID；制造商联系决定损坏适用性，不采用通用裂纹规则。 q_scope 为台账及归属核对后可追溯的批次归属量；q_scope 和 N 为数值，ID/标准为类别。N 与 cp_accepted_element_replacement 核对。 | item | 每次实际收货/活动/出口及最终核对 | 准备至必要后续检查和签字交接的完整期间，包括失败/重复工作 | 申报泊位/作业及参与供应商、资产和使用者 | per reference flow | 校准仪表或可追溯原始记录、保管/验收证据、台账核对、不确定性及实际未发生证据；未知阻止最终数据集。 |
| cp_counted_returns | element_replacement | 实际对外退回的未用或拒收件数原生部件 | actual_record | campaign_id;period_id;event_id;ledger_method;q_scope;quantity_unit;N;accepted_ids;sku;origin_receipt;condition;returned_count;destination;custody_receipt;stock_flag;upstream_burden_treatment | 逐 SKU 记录实际可用部件对外退回件数，核对收货/安装/报废/库存台账，不自动产生信用。 q_scope 为台账及归属核对后可追溯的批次归属量；q_scope 和 N 为数值，ID/标准为类别。N 与 cp_accepted_element_replacement 核对。 | item | 每次实际收货/活动/出口及最终核对 | 准备至必要后续检查和签字交接的完整期间，包括失败/重复工作 | 申报泊位/作业及参与供应商、资产和使用者 | per reference flow | 校准仪表或可追溯原始记录、保管/验收证据、台账核对、不确定性及实际未发生证据；未知阻止最终数据集。 |
| cp_mass_returns | element_replacement | 实际对外退回的未用质量原生材料 | actual_record | campaign_id;period_id;event_id;ledger_method;q_scope;quantity_unit;N;accepted_ids;material_id;composition;origin_receipt;returned_kg;gross_kg;tare_kg;destination;custody_receipt;stock_flag;volume;volume_unit;density;density_unit;state;temperature;density_source | 扣皮重称量实际可用对外退回液，保留组成/保管及原生单位换算证据；期末库存不是退回。 q_scope 为台账及归属核对后可追溯的批次归属量；q_scope 和 N 为数值，ID/标准为类别。N 与 cp_accepted_element_replacement 核对。 | kg | 每次实际收货/活动/出口及最终核对 | 准备至必要后续检查和签字交接的完整期间，包括失败/重复工作 | 申报泊位/作业及参与供应商、资产和使用者 | per reference flow | 校准仪表或可追溯原始记录、保管/验收证据、台账核对、不确定性及实际未发生证据；未知阻止最终数据集。 |
| cp_removed_rubber | element_replacement | 拆除旧橡胶护舷及拒收橡胶废物 | actual_record | campaign_id;period_id;event_id;ledger_method;q_scope;quantity_unit;N;accepted_ids;origin_old_or_new;cone_id;removed_count;rejected_count;discarded_count;embedded_metal_scope;gross_kg;tare_kg;net_kg;contamination;destination;manifest_id | 称量拆除/拒收橡胶废物，记录实际件数/来源及嵌入硬件边界；追溯实际处理保管。 q_scope 为台账及归属核对后可追溯的批次归属量；q_scope 和 N 为数值，ID/标准为类别。N 与 cp_accepted_element_replacement 核对。 | kg | 每次实际收货/活动/出口及最终核对 | 准备至必要后续检查和签字交接的完整期间，包括失败/重复工作 | 申报泊位/作业及参与供应商、资产和使用者 | per reference flow | 校准仪表或可追溯原始记录、保管/验收证据、台账核对、不确定性及实际未发生证据；未知阻止最终数据集。 |
| cp_removed_metal | element_replacement | 拆除单独紧固金属及金属碎屑废物 | actual_record | campaign_id;period_id;event_id;ledger_method;q_scope;quantity_unit;N;accepted_ids;sku;origin_old_or_new;discarded_count;embedded_metal_excluded;gross_kg;tare_kg;net_kg;composition;destination;manifest_id | 称量并计数实际报废的单独紧固金属，排除嵌入金属重复及面板更换。 q_scope 为台账及归属核对后可追溯的批次归属量；q_scope 和 N 为数值，ID/标准为类别。N 与 cp_accepted_element_replacement 核对。 | kg | 每次实际收货/活动/出口及最终核对 | 准备至必要后续检查和签字交接的完整期间，包括失败/重复工作 | 申报泊位/作业及参与供应商、资产和使用者 | per reference flow | 校准仪表或可追溯原始记录、保管/验收证据、台账核对、不确定性及实际未发生证据；未知阻止最终数据集。 |
| cp_solid_cleanup_waste | element_replacement | 实际固体清洁涂层及围控残余废物 | actual_record | campaign_id;period_id;event_id;ledger_method;q_scope;quantity_unit;N;accepted_ids;material_id;source_event;gross_kg;tare_kg;net_kg;moisture_basis;contaminant_composition;captured_species_subset;destination;manifest_id | 称量实际独立固体/吸附物/碎屑，追踪捕集污染物不可加视图及去向。 q_scope 为台账及归属核对后可追溯的批次归属量；q_scope 和 N 为数值，ID/标准为类别。N 与 cp_accepted_element_replacement 核对。 | kg | 每次实际收货/活动/出口及最终核对 | 准备至必要后续检查和签字交接的完整期间，包括失败/重复工作 | 申报泊位/作业及参与供应商、资产和使用者 | per reference flow | 校准仪表或可追溯原始记录、保管/验收证据、台账核对、不确定性及实际未发生证据；未知阻止最终数据集。 |
| cp_liquid_cleanup_waste | element_replacement | 实际捕集洗液及送处理污染流体 | actual_record | campaign_id;period_id;event_id;ledger_method;q_scope;quantity_unit;N;accepted_ids;fluid_id;source_event;composition;gross_kg;tare_kg;net_kg;volume;volume_unit;density;density_unit;state;temperature;density_source;constituent_subset;destination;manifest_id | 称量或有效换算捕集液体废物；处理/保管记录确定去向，部分组成不是额外整液质量。 q_scope 为台账及归属核对后可追溯的批次归属量；q_scope 和 N 为数值，ID/标准为类别。N 与 cp_accepted_element_replacement 核对。 | kg | 每次实际收货/活动/出口及最终核对 | 准备至必要后续检查和签字交接的完整期间，包括失败/重复工作 | 申报泊位/作业及参与供应商、资产和使用者 | per reference flow | 校准仪表或可追溯原始记录、保管/验收证据、台账核对、不确定性及实际未发生证据；未知阻止最终数据集。 |
| cp_packaging_waste | element_replacement | 实际废弃供应包装 | actual_record | campaign_id;period_id;event_id;ledger_method;q_scope;quantity_unit;N;accepted_ids;material_id;gross_kg;tare_kg;net_kg;reusable_flag;upstream_scope;destination;manifest_id | 称量逐材料废弃包装并确认前景保管/上游边界；重复使用退回另列。 q_scope 为台账及归属核对后可追溯的批次归属量；q_scope 和 N 为数值，ID/标准为类别。N 与 cp_accepted_element_replacement 核对。 | kg | 每次实际收货/活动/出口及最终核对 | 准备至必要后续检查和签字交接的完整期间，包括失败/重复工作 | 申报泊位/作业及参与供应商、资产和使用者 | per reference flow | 校准仪表或可追溯原始记录、保管/验收证据、台账核对、不确定性及实际未发生证据；未知阻止最终数据集。 |
| cp_routine_substance_release | element_replacement | 向明确受纳介质的实际已识别常规物质释放 | actual_record | campaign_id;period_id;event_id;ledger_method;q_scope;quantity_unit;N;accepted_ids;source_activity;substance_id;species_or_particle_class;receiving_medium;activity_amount;activity_unit;concentration;concentration_unit;flow_amount;flow_unit;factor;factor_unit;factor_source;composition;fate_fraction;method_source;coverage_exclusions;species_mass_kg | 使用实际测量或量纲有效的活动/因子、浓度/流量及组成/归趋证据；绑定前先确定各实际物质和介质。 q_scope 为台账及归属核对后可追溯的批次归属量；q_scope 和 N 为数值，ID/标准为类别。N 与 cp_accepted_element_replacement 核对。 | kg | 每次实际收货/活动/出口及最终核对 | 准备至必要后续检查和签字交接的完整期间，包括失败/重复工作 | 申报泊位/作业及参与供应商、资产和使用者 | per reference flow | 校准仪表或可追溯原始记录、保管/验收证据、台账核对、不确定性及实际未发生证据；未知阻止最终数据集。 |
| cp_incident_substance_release | element_replacement | 向明确受纳介质的实际已识别事故物质释放 | actual_record | campaign_id;period_id;event_id;ledger_method;q_scope;quantity_unit;N;accepted_ids;incident_id;fluid_id;composition;total_spilled_audit_kg;recovered_to_return_kg;recovered_to_waste_kg;recovered_to_closing_kg;uncontained_whole_fluid_kg;substance_id;species_or_particle_class;receiving_medium;fate_fraction;method_source;species_mass_kg | 核对事故流体最终去向，再推导物质介质释放一次。整液审计与组分基本流视图不可相加；常规与事故范围不重叠。 q_scope 为台账及归属核对后可追溯的批次归属量；q_scope 和 N 为数值，ID/标准为类别。N 与 cp_accepted_element_replacement 核对。 | kg | 每次实际收货/活动/出口及最终核对 | 准备至必要后续检查和签字交接的完整期间，包括失败/重复工作 | 申报泊位/作业及参与供应商、资产和使用者 | per reference flow | 校准仪表或可追溯原始记录、保管/验收证据、台账核对、不确定性及实际未发生证据；未知阻止最终数据集。 |

### 计算规则

| rule_id | applies_to | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_replacement_cone | replacement_cone | normalized_quantity = q_scope / N; q_scope 为台账核对后的批次归属量，单位为卡片原生单位; N 为唯一最终验收单元更换 ID。 | q_scope;N;cp_replacement_cone | 每参考流的数量，单位 item |  |
| calc_separate_fasteners | separate_fasteners | normalized_quantity = q_scope / N; q_scope 为台账核对后的批次归属量，单位为卡片原生单位; N 为唯一最终验收单元更换 ID。 | q_scope;N;cp_separate_fasteners | 每参考流的数量，单位 item |  |
| calc_cleaning_water | cleaning_water | normalized_quantity = q_scope / N; q_scope 为台账核对后的批次归属量，单位为卡片原生单位; N 为唯一最终验收单元更换 ID。 | q_scope;N;cp_cleaning_water | 每参考流的数量，单位 kg |  |
| calc_maintenance_formulations | maintenance_formulations | normalized_quantity = q_scope / N; q_scope 为台账核对后的批次归属量，单位为卡片原生单位; N 为唯一最终验收单元更换 ID。 | q_scope;N;cp_maintenance_formulations | 每参考流的数量，单位 kg |  |
| calc_coating_remedy | coating_remedy | normalized_quantity = q_scope / N; q_scope 为台账核对后的批次归属量，单位为卡片原生单位; N 为唯一最终验收单元更换 ID。 | q_scope;N;cp_coating_remedy | 每参考流的数量，单位 kg |  |
| calc_protection_consumables | protection_consumables | normalized_quantity = q_scope / N; q_scope 为台账核对后的批次归属量，单位为卡片原生单位; N 为唯一最终验收单元更换 ID。 | q_scope;N;cp_protection_consumables | 每参考流的数量，单位 kg |  |
| calc_direct_energy | direct_energy | normalized_quantity = q_scope / N; q_scope 为台账核对后的批次归属量，单位为卡片原生单位; N 为唯一最终验收单元更换 ID。 | q_scope;N;cp_direct_energy | 每参考流的数量，单位 实际原生能量单位 |  |
| calc_direct_fuel | direct_fuel | normalized_quantity = q_scope / N; q_scope 为台账核对后的批次归属量，单位为卡片原生单位; N 为唯一最终验收单元更换 ID。 | q_scope;N;cp_direct_fuel | 每参考流的数量，单位 kg |  |
| calc_transport_service | transport_service | normalized_quantity = q_scope / N; q_scope 为台账核对后的批次归属量，单位为卡片原生单位; N 为唯一最终验收单元更换 ID。 | q_scope;N;cp_transport_service | 每参考流的数量，单位 实际原生运输单位 |  |
| calc_provider_service | provider_service | normalized_quantity = q_scope / N; q_scope 为台账核对后的批次归属量，单位为卡片原生单位; N 为唯一最终验收单元更换 ID。 | q_scope;N;cp_provider_service | 每参考流的数量，单位 实际原生服务单位 |  |
| calc_shared_asset_service | shared_asset_service | normalized_quantity = q_scope / N; q_scope 为台账核对后的批次归属量，单位为卡片原生单位; N 为唯一最终验收单元更换 ID。 | q_scope;N;cp_shared_asset_service | 每参考流的数量，单位 实际原生服务单位 |  |
| calc_accepted_element_replacement | accepted_element_replacement | reference_count = N / N = 1 item; N 为全部门槛完成后唯一最终验收 ID 正数。 | q_scope;N;cp_accepted_element_replacement | 每参考流的数量，单位 item |  |
| calc_counted_returns | counted_returns | normalized_quantity = q_scope / N; q_scope 为台账核对后的批次归属量，单位为卡片原生单位; N 为唯一最终验收单元更换 ID。 | q_scope;N;cp_counted_returns | 每参考流的数量，单位 item |  |
| calc_mass_returns | mass_returns | normalized_quantity = q_scope / N; q_scope 为台账核对后的批次归属量，单位为卡片原生单位; N 为唯一最终验收单元更换 ID。 | q_scope;N;cp_mass_returns | 每参考流的数量，单位 kg |  |
| calc_removed_rubber | removed_rubber | normalized_quantity = q_scope / N; q_scope 为台账核对后的批次归属量，单位为卡片原生单位; N 为唯一最终验收单元更换 ID。 | q_scope;N;cp_removed_rubber | 每参考流的数量，单位 kg |  |
| calc_removed_metal | removed_metal | normalized_quantity = q_scope / N; q_scope 为台账核对后的批次归属量，单位为卡片原生单位; N 为唯一最终验收单元更换 ID。 | q_scope;N;cp_removed_metal | 每参考流的数量，单位 kg |  |
| calc_solid_cleanup_waste | solid_cleanup_waste | normalized_quantity = q_scope / N; q_scope 为台账核对后的批次归属量，单位为卡片原生单位; N 为唯一最终验收单元更换 ID。 | q_scope;N;cp_solid_cleanup_waste | 每参考流的数量，单位 kg |  |
| calc_liquid_cleanup_waste | liquid_cleanup_waste | normalized_quantity = q_scope / N; q_scope 为台账核对后的批次归属量，单位为卡片原生单位; N 为唯一最终验收单元更换 ID。 | q_scope;N;cp_liquid_cleanup_waste | 每参考流的数量，单位 kg |  |
| calc_packaging_waste | packaging_waste | normalized_quantity = q_scope / N; q_scope 为台账核对后的批次归属量，单位为卡片原生单位; N 为唯一最终验收单元更换 ID。 | q_scope;N;cp_packaging_waste | 每参考流的数量，单位 kg |  |
| calc_routine_substance_release | routine_substance_release | normalized_quantity = q_scope / N; q_scope 为台账核对后的批次归属量，单位为卡片原生单位; N 为唯一最终验收单元更换 ID。 | q_scope;N;cp_routine_substance_release | 每参考流的数量，单位 kg |  |
| calc_incident_substance_release | incident_substance_release | normalized_quantity = q_scope / N; q_scope 为台账核对后的批次归属量，单位为卡片原生单位; N 为唯一最终验收单元更换 ID。 | q_scope;N;cp_incident_substance_release | 每参考流的数量，单位 kg |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| identity_scope | 所有清单行 | 最终 TIDAS 投影前核验各实际具体交换及属性/单位组/单位；语义通用卡不表示已搜索或核验。 | 精确详情/支持链及实际前景身份 |
| acceptance_completeness | accepted_element_replacement | 每个计数 ID 有适用保留接口、锥体、吊装/安装、紧固/对中/链条、后续/试验及签署关闭证据；不推断通用寿命或性能。 | 实际项目获批指令、出厂证书及签字维修档案 |
| ledger_complete | 所有清单行 | 全部期间、尝试、库存、供应、最终去向、原生件数报废/退回及上游结转核对，且一个归属。 | 收货/库存/活动/保管台账及定量核对 |
| asset_complete | shared_asset_service;provider_service;transport_service | 完整相关寿命和使用者分母，或真实限定完成供应商范围；未来不确定阶段有来源/敏感性/更新；资源不重叠。 | 资产历史/预测、供应商覆盖及归属矩阵 |
| release_evidence | routine_substance_release;incident_substance_release | 实际物质/粒径及介质具有有效数量证据；整液/组分视图不可相加，残差不作排放。 | 测量或有效因子/组成/归趋方法及事件台账 |
| temporal_quality | 所有清单行 | 覆盖实际准备至后续交接及资产阶段；披露地区、技术、日期、不确定性、缺失记录及更新触发。 | 完整带日期来源记录及实际未发生证据 |


## 9. 验证规则

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| scope_gate | 拒绝范围外技术/安装方式及新码头/锚固件/面板工程；保留缺陷或缺失获批维修决策阻止本产品。 | trelleborg-scn-sck-2018;trelleborg-fender-systems-2019 |
| installation_gate | 验收前核对实际锥体出厂/配置和保留兼容性、设计支撑/搬运、实际紧固件/就位/顺序/扭矩结果、对称方位与链条调整，以及全部实际要求复紧/试验结果。反向安装后续要求和未来温带检查间隔不是通用当前门槛。 | trelleborg-fender-systems-2019;trelleborg-scn-sck-2018 |
| accepted_only | N 须为唯一最终验收 ID 正数，各计一次。未解决拒收/返工仍不验收；保留其全部负担及实际出口/回路。 |  |
| stocks_native | 核对毛投入/消耗法选择、皮重、期初/期末结转、原生 SKU 安装/退回/报废件数字段及实际材料/流体去向；不得重复使用活动、扣回收泄漏或从混合废物 kg 推断件数。 |  |
| shared_periods | 须有每个使用者/期间及完整制造/维护/替换/寿终分母，或真实供应商范围。终止/剩余寿命证据缺失或重叠阻止最终数据集；不得默默年化。 |  |
| actual_exchanges | 最终数据集前核验每个具体流 UUID 及精确支持/单位；未知身份明确保留。检查物质/介质/数量证据及整液不可加性。自动目标检查通过不核验具体交换，也不证明发布就绪。 |  |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 限定已完成单元更换维修服务的前景数据生产方法学 |
| downstream_use | secondary_dataset; background_dataset；下游 process 与 lifecyclemodel 投影 |
| allowed_use | 保留接口合格、实际申报且作业证据完整的标准安装 SCN 单元更换；仅比较申报兼容配置/边界 |
| excluded_use | 整个港口或全护舷系统、新面板/锚固件、其他技术/安装方式、硫化修补、未来靠泊性能或寿命/避免停运主张 |
| required_metadata | PCR/版本；泊位/位置及验收 ID；实际锥体/配置及保留接口；供应商/资源范围；期间；计量/台账方法；上游数据集；实际验收门槛/结果；去向及共享资产寿命/使用者 |
| required_quality_disclosure | 全部缺失证据/身份、不确定性、代表性、库存/返工、换算/物质方法、完整寿命未来假设/敏感性及重叠控制 |
| update_trigger | 获批锥体/接口/路线/门槛、材料/供应商/单位、去向、共享分母/寿命证据、来源适用性变化或身份缺口解决 |


## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | 联合国，CPC 3.0 解释性说明，2025年6月30日，印刷页285；https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅支持 54232 港口/码头维修背景，不创建规范产品身份 |
| trelleborg-scn-sck-2018 | handbook | Trelleborg，Super Cone (SCN) 与 Cell (SCK) 护舷搬运/储存/安装/维护手册，页脚 MN-I&M-RUB-SCN&SCK-v1.0-EN2018，印刷页9–10、18–21；https://www.trelleborg.com/marine-and-infrastructure/-/media/marine-systems/resources/guides-and-design-manual/downloads/scn-sck_hsim.pdf?rev=f45ab129397b4f5bb202d0a78dea029d | 保护搬运、互联接口、实际损坏评估、清洁及可能完整橡胶单元更换；排除 SCK/硫化及未来间隔表 |
| trelleborg-fender-systems-2019 | handbook | Trelleborg，Fender Systems 搬运/储存/安装/维护手册，2019年，印刷页14–22；https://www.trelleborg.com/marine-and-infrastructure/-/media/marine-systems/resources/guides-and-design-manual/downloads/fender_systems_hsim_2019.pdf?rev=152f8df1a47a4a3eb360ba42e548e3d7 | 标准安装搬运/支撑、实际质量/重心、部件/锚固接口、紧固/顺序、链条/对中及作业涂层损坏修复；实际当前获批项目标准控制 |
