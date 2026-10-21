---
pcr_id: pcr.constructions-and-construction-services.construction-services.drill-and-blast-non-ore-hard-rock-underground-mine-access-decline-development-services
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 非矿石硬岩地下矿山通行下斜巷钻爆掘进施工服务

## 1. 范围和适用性

本 PCR 适用于在非矿石硬岩中采用钻孔爆破掘进的有限永久矿山通行下斜巷区段，随后完成找顶排险、支护、实际排水通风及服务接口连接、测试和验收。交付产品为已支护且可使用的区段，不是松散岩渣或单纯开挖工程。几何、支护和安全通行要求由具备资质的场址设计和实际管辖要求确定。Minto 仅为历史路线案例，案例尺寸、爆破配方、生产比率、许可和排放因子均不构成默认值。[minto-development-plan-2014; ontario-ground-control]

排除矿石生产采场、可销售矿石联产品、仅用于勘探的钻孔、竖井和天井、机械开挖路线、非矿山交通隧道、整座矿山建设与运营及仅提供无支护开挖的合同。发现有意生产可销售矿石、路线不相容或缺少支护与交接证据时，应停止采用本 PCR 并审查范围。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.drill-and-blast-non-ore-hard-rock-underground-mine-access-decline-development-services |
| classification_refs | CPC 3.0 54261；拟议 narrower 关系，仅覆盖矿山隧道和巷道施工子集 [un-cpc-3-2025] |
| covered_products | 实际工程支护与服务接口齐备并已验收的永久非矿石硬岩矿山通行下斜巷区段 |
| excluded_products | 整座矿山设施；矿石开采；竖井和天井；TBM/悬臂掘进机；交通隧道；仅开挖产出 |
| representative_product | 在业主签署交接时已识别、已测量且完成支护的矿山通行下斜巷区段 |
| production_route | 测量并确认既有入口；钻孔、装药和爆破；通风并确认可重新进入；出渣、运输和找顶排险；安装实际工程支护和服务延伸；核验、整改复测并交接 |
| market_state | 已完成施工服务；既有矿山和岩体为已声明的状态接口 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 已验收且完成支护的非矿石矿山通行下斜巷掘进施工 |
| How much | 1 m 唯一已验收掘进中心线长度 |
| How well | 实际批准的断面、坡度、端点、围岩类别和支护设计；爆破解除、找顶排险、支护质量控制、实际排水通风及服务接口测试，以及区段验收签署 |
| How long or cycle | 从入口资格确认到交接的有限作业、施工阶段及已识别掘进循环，包括准备、失败循环、整改和重复测试；报告全部掘进、支护和调试期间 |
| reference_flow_link | `accepted_decline` |

| 字段 | 值 |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | 已验收且完成支护的非矿石硬岩矿山通行下斜巷掘进施工服务 |
| reference_flow_property | Length `838aaa23-0117-11db-92e3-0800200c9a66` |
| reference_unit_group | 长度单位组 `838aaa22-0117-11db-92e3-0800200c9a66` |
| reference_unit | m |
| required_qualifiers | 矿山与场址; 作业、区段、端点; 非矿石地质及围岩类别; 实测中心线、断面与坡度; 开挖及超挖测量; 实际支护规格和安装质量控制; 爆破及重新进入批准; 水和岩渣分类与去向; 服务接口; 日期与期间; 验收签署人及实际管辖要求 |


## 4. 计量与单位规则

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| `accepted_length` | accepted_decline | Length | m | L > 0 为以可追溯测量和区段验收签署确定的唯一最终已验收掘进中心线长度，采用 cp_accept。钻孔长度、计划进尺、循环数量、超挖和重复尝试均不得增加 L。 |
| `native_ledger` | 所有清单行 | 实际原生属性 | 实际原生单位 | 分别保留每种实际 SKU、原生单位及产出状态。净皮重收货、领用、退回和结转库存以相同单位核对；内部领用不构成采购。不得虚构数量转质量或长度转质量关系。 |
| `rock_states` | rock_spoil | Mass; Volume | kg; m3 | 分别记录实测原位开挖体积、松散岩渣体积及净称湿质量或干质量。仅在存在独立需要时换算，须具备匹配的密度、状态、水分、温度和来源，不得套用通用膨胀系数。 |
| `explosive_states` | explosives; initiators; explosive_return; initiator_return; development_waste; development_air | Mass; Count | kg; item | 供应、领用、装药、实际起爆、拒爆、未用结转库存、可用外退及危险废物处置须分状态追踪。起爆器材保持原生 Count，除非确需独立实测质量视图。 |
| `environment_views` | development_air; support_air; development_water_out; support_water_out | 实际物种介质及整体流体 | kg; m3 | 整体气体或流体平衡与物种基本流释放为不可相加视图。安全空气浓度及解除标准不能确定排放质量。湿拌物、干胶结料、加水及固化安装状态须分开。 |
| `count_unit_alias` | 存在时的计数交换 | Count | item | 本 PCR 的显示别名 item 表示已核实的物品数量单位组参考单位 Item(s)，系数为 1。具体数据集须保留实际参考单位身份；此书写别名不建立质量、面积或服务之间的等价关系。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 有限掘进循环前已确认合格的既有矿山入口或洞口，以及已测量非矿石硬岩掌子面 |
| starting_condition_role | 既有承载设施及地质状态，不是新购矿山、洞口或岩石 |
| product_classification_scope | 有限永久矿山通行下斜巷施工，为 CPC 54261 子集 |
| recursive_input_rule | 既有同类别区段属于起始状态；纳入实际可归属的作业诱发维护和延伸资源，不递归重复采购此前区段。采购有界分包工作须明确范围并排除资源责任重叠。 |
| upstream_dataset_requirement | 实际材料、公用设施、运输、分包服务和可归属资产生命周期须有相容上游数据集，全部实际由服务方支付的资源只归属一次。 |
| disclosure | 记录保留的承载设施、开挖与支护边界、全部循环期间事件、共享通风泵送及车队使用者、水和废物去向、供应与实际起爆量、排除项及未解决数据 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `route_handoff` | development; support | 掘进独立将原位岩体变为清渣后的开口及已移除废石；内部测量与围岩检查记录只在具备资质的安全控制下授权下一任务，不表示可任意进入无支护围岩或已经最终验收。支护将锚杆、网片、实际胶结料和服务延伸整合为已检查的可用区段。连接、灌浆或喷射混凝土制备及测试均嵌入支护，不虚构独立配方工厂。 | minto-development-plan-2014; ontario-ground-control |
| `full_job` | all inventory rows | 纳入入口资格确认、准备、钻孔爆破和重新进入前通风、出渣运输与找顶排险、支护、实际需要的临时及永久服务延伸、清理、缺陷移除、失败循环、拒爆处理和重复测试，直至签署交接。排除后续矿山运营及有意矿石生产。 | minto-development-plan-2014 |
| `ground_gate` | support; accepted_decline | 须有当前实际的合格岩土与围岩控制设计、围岩检查与排险及已安装支护质量证据。实际锚杆、网片、胶结料、支护和测试职责按批准的场址设计确定。不得将安大略管辖要求或历史案例尺寸普遍化。 | ontario-ground-control |
| `blast_gate` | development; accepted_decline | 须有实际获批的爆破设计、爆炸物追踪、隔离、重新进入及空气解除，以及按实际要求实施的安全接口交接。未解除拒爆或不安全围岩不得贡献验收产出。 | minto-development-plan-2014 |
| `water_spoil` | development; support | 纳入实际供应与取水、钻孔、抑尘、清洗和测试用水，以及矿井涌水拦截、泵送、处理及分类去向。岩渣按分类和接收者独立追踪，不赋予通用有用产品或避免处置信用。 | minto-development-plan-2014 |
| `ownership` | all inventory rows | 直接作业、场址公用设施、运输、分包、租赁、资产及备件各保留唯一资源责任方。工厂整体包与另购组成部件互斥；披露供应商覆盖并排除重叠。 |  |
| `period_boundary` | development; support | 将全部投入、转移、失败与验收事件、资产、库存变化及更换关联至实际作业、施工阶段、掘进循环、工序和报告期间。期末库存属于结转状态，不是外退。 |  |
| `installed_states` | support_bolts; support_mesh; support_binder; service_extensions; support_other_native; support_waste | 最终安装保留材料排除可用外退、废物、释放及结转供应库存。使用、投料、装药及新鲜拌料活动为不可相加过程视图。实际干粉、加水、新鲜湿拌料及固化安装质量体积须分开；独立需要换算时须有匹配状态、密度、水分、温度、单位及来源。 |  |
| `boundary_atomic_completion` | 所有过程 | 本节的采集要求是必须执行的采集与适用性指令，不是聚合清单交换。完成前景数据集前，必须为每一种实际产品、废物流、物质及环境子区室建立独立原子流卡／交换。保留全部实际事件、上游负荷、退回及原生单位；所链接公式应按每个兼容身份分别执行。环境资源提取记为输入，环境释放记为输出。不得相加不同原生单位、用一个 UUID 代表整个采集池、将缺记录解释为零，或与已有具体卡重复计入。保留宿主的文件性接口仅传递状态，不形成新采购资产。适用成员未明确或未有证据证明不存在时，定量清单仍不完整；非强制筛查提示不能补造数量或化学组成。 |  |

### 条件性清单补全要求

以下标识符表示采集池或文件性状态台账。一个池可能有零个、一个或多个实际成员。须依据真实记录判断适用性，并为每个成员保留原有数量方法和采集协议；只有兼容的数量才能共同核对。下列原有可选筛查区间仅作为暂定复核提示，不得强加于不同材料或混合采集池。

#### 采集要求：实际供应的起爆组件 (`initiators`)

过程／待建立交换的方向／类型：`development` / `inputs` / `product`.

按实际供应记录分别记录原生计数的雷管、以数量供应的起爆药柱、连接件及其他实际器材，不以散装炸药质量替代。

- 采集对象：实际供应的起爆组件
- 流属性/单位： Count / item
- 数量规则： 实际可归属起爆组件供应量 item / L。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 m 参考流
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 基于采集计算（`calculated_from_collection`）
- 采集协议： `cp_dev_ledger`

范围证据需求： 须有实际组件清单、收货及循环领用退回账，无默认每循环数量。

#### 采集要求：实际钻孔与掘进耗材 (`drill_consumables`)

过程／待建立交换的方向／类型：`development` / `inputs` / `product`.

纳入实际消耗钻杆钻头、润滑、清洁及围堵材料，排除资产已承担的设备生命周期。

- 采集对象：实际钻孔与掘进耗材
- 流属性/单位： Mass / kg
- 数量规则： 实际可归属耗材净供应质量 kg / L。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 m 参考流
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 基于采集计算（`calculated_from_collection`）
- 采集协议： `cp_dev_ledger`

范围证据需求： 须有实际材料供应和磨损记录及相容产出基准，无标准磨耗额。

#### 采集要求：实际供应的掘进燃料 (`development_fuel`)

过程／待建立交换的方向／类型：`development` / `inputs` / `product`.

记录实际燃料等级及原生收货量；体积收货时仅在独立需要下采用匹配密度状态确定质量。已燃活动与供应分开。

- 采集对象：实际供应的掘进燃料
- 流属性/单位： Mass / kg
- 数量规则： 实际可归属燃料供应量 kg / L。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 m 参考流
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 基于采集计算（`calculated_from_collection`）
- 采集协议： `cp_dev_ledger`

范围证据需求： 须有实际供应、库存、退回、燃烧、废物及泄漏记录，无默认每米油耗。

#### 采集要求：可归属掘进资产生命周期服务 (`development_assets`)

过程／待建立交换的方向／类型：`development` / `inputs` / `product`.

实际钻机、装载机、运输设备、风机、泵和基础设施纳入跨全部使用者及期间的制造、维护、更换和寿命终结。Count 为已识别完整资产的等效份额，不是租赁小时。

- 采集对象：可归属掘进资产生命周期服务
- 流属性/单位： Count / item
- 数量规则： 归属掘进的实际完整资产生命周期等效份额 / L。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 m 参考流
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 基于采集计算（`calculated_from_collection`）
- 采集协议： `cp_dev_services`

范围证据需求： 须有相容全寿命驱动量分母，或历史及有证据的剩余寿命、更换、终止和寿命终结，并有敏感性分析；缺覆盖不得定稿。

#### 采集要求：实际掘进运输服务 (`development_freight`)

过程／待建立交换的方向／类型：`development` / `inputs` / `product`.

纳入实际进场供应和外运岩渣、废物及退回运输，记录载荷距离、方式和空返处理。直接燃料车辆生命周期与采购运输或服务方范围互斥，不重复已由直接设备承担的运输。

- 采集对象：实际掘进运输服务
- 流属性/单位：mass*distance / kg*km
- 数量规则：实际归属质量距离运输服务 kg*km / L。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_dev_services`

范围证据需求：须有实际载荷距离分段、方式、返程空载处理及服务方和直接作业互斥责任。

#### 采集要求：实际其他原生单位掘进供应 (`development_other_native`)

过程／待建立交换的方向／类型：`development` / `inputs` / `product`.

仅纳入尚未由质量原生流卡覆盖的实际计数、面积或长度原生掘进耗材组件。保留实际原生属性单位，创建具体交换前核实支持身份；无独立必要实测质量时，不得把钻头片材或长度强行换成 kg。

- 采集对象：实际其他原生单位掘进供应
- 流属性/单位：实际原生属性 / 实际原生单位
- 数量规则：以已核实原生单位计的实际可归属供应量 / L。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_dev_ledger`

范围证据需求：须有实际供应商原生单位及实测供应出口账，替代单位视图不可相加。

#### 采集要求：实际掘进环境取水 (`development_withdrawal`)

过程／待建立交换的方向／类型：`development` / `inputs` / `elementary`.

按已识别水源和环境区室记录实际环境资源取水，仅在发生时适用。采购或提供水仅记入 development_water；截取矿井涌水为独立承载状态水平衡，不自动成为采购供应或第二次取水。

- 采集对象：实际掘进环境取水
- 流属性/单位：Volume / m3
- 数量规则：实际按水源记录的环境取水 m3 / L。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_dev_environment`

范围证据需求：须有实际取水批准、水源、计量及区室，排除与采购水及承载设施涌水重叠。

#### 采集要求：可用爆炸物外退 (`explosive_return`)

过程／待建立交换的方向／类型：`development` / `outputs` / `product`.

只记录可追踪的实际物理外退，仍保留为期末库存的可用材料不是外出；排除危险废物和拒爆物。

- 采集对象：可用爆炸物外退
- 流属性/单位： Mass / kg
- 数量规则： 实际可用爆炸物外退质量 kg / L。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 m 参考流
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 基于采集计算（`calculated_from_collection`）
- 采集协议： `cp_dev_ledger`

范围证据需求： 须有实际供应商退回收据、状态及精确质量，无假定退回比例。

#### 采集要求：可用起爆组件外退 (`initiator_return`)

过程／待建立交换的方向／类型：`development` / `outputs` / `product`.

原生计数实际组件须与散装炸药退回、处置及拒爆分开。

- 采集对象：可用起爆组件外退
- 流属性/单位： Count / item
- 数量规则： 实际可用起爆组件外退数量 item / L。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 m 参考流
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 基于采集计算（`calculated_from_collection`）
- 采集协议： `cp_dev_ledger`

范围证据需求： 须有以原生单位确认的实际计数外退凭证。

#### 采集要求：实际可用非爆炸物质量供应外退 (`development_mass_return`)

过程／待建立交换的方向／类型：`development` / `outputs` / `product`.

仅记录实际以质量为原生单位的可用燃料、耗材及其他非爆炸物物理外退；爆炸物和计数起爆器材另记。期末结转库存不是外退。

- 采集对象：实际可用非爆炸物质量供应外退
- 流属性/单位：Mass / kg
- 数量规则：实际可用非爆炸物外退质量 kg / L。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_dev_ledger`

范围证据需求：须有实际 SKU、质量原生供应账、可用状态及接收退回确认，不重复上游信用。

#### 采集要求：实际可用其他原生单位掘进供应外退 (`development_other_return`)

过程／待建立交换的方向／类型：`development` / `outputs` / `product`.

仅记录与 development_other_native 匹配的可用数量面积长度原生非爆炸物物理外退，不强行换质量、不把期末库存当出口、不重复退回信用。

- 采集对象：实际可用其他原生单位掘进供应外退
- 流属性/单位：实际原生属性 / 实际原生单位
- 数量规则：以已核实原生单位计的实际可用外退量 / L。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_dev_ledger`

范围证据需求：须有原生单位供应匹配及接收者可用退回确认。

#### 采集要求：实际掘进危险与其他材料废物 (`development_waste`)

过程／待建立交换的方向／类型：`development` / `outputs` / `waste`.

纳入按授权程序处理的不可用爆炸物和拒爆残留、包装、废耗材、燃料废物及泄漏清理物，各自分类至实际去向。

- 采集对象：实际掘进危险与其他材料废物
- 流属性/单位： Mass / kg
- 数量规则： 离开掘进的实际独立分类废物质量 kg / L。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 m 参考流
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 基于采集计算（`calculated_from_collection`）
- 采集协议： `cp_dev_ledger`

范围证据需求： 须有分类废物票据及互斥爆炸物和燃料出口，无假定废物比例。

#### 采集要求：去往处理或处置的实际掘进水与泥浆 (`development_water_out`)

过程／待建立交换的方向／类型：`development` / `outputs` / `waste`.

分别追踪泵出涌水、供应水、循环、库存、受控污泥及去向。整体流体运输处理与污染物基本流释放视图不可相加。

- 采集对象：去往处理或处置的实际掘进水与泥浆
- 流属性/单位： Volume / m3
- 数量规则： 实际整体水或泥浆外流量 m3 / L。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 m 参考流
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 基于采集计算（`calculated_from_collection`）
- 采集协议： `cp_dev_environment`

范围证据需求： 须有水源、流量、接收者、泥浆固体及水分状态记录，不假定供水全部成为排水。

#### 采集要求：实际掘进物质向已识别介质的释放 (`development_air`)

过程／待建立交换的方向／类型：`development` / `outputs` / `elementary`.

按实际爆破烟气物种、燃烧物种、粉尘粒径或水土物质及接收介质分别实例化。实际起爆和实际燃料燃烧分别驱动各自方法。安全浓度、SDS 组成和算术残差不是排放质量。

- 采集对象：实际掘进物质向已识别介质的释放
- 流属性/单位： Mass / kg
- 数量规则： 采用实际实测或有效活动因子与组成去向方法确定的物质释放 kg / L。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 m 参考流
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 基于采集计算（`calculated_from_collection`）
- 采集协议： `cp_dev_environment`

范围证据需求： 须有实际物种介质、采样流量时间或相容有效因子、捕集保留去向及不确定性，无理论完全起爆或通用空气排放因子。

#### 采集要求：实际供应的围岩支护锚杆及配件 (`support_bolts`)

过程／待建立交换的方向／类型：`support` / `inputs` / `product`.

实际工程支护规格及安装质量控制决定组件身份和原生数量，废弃且未退回的不合格组件保留于供应量。

- 采集对象：实际供应的围岩支护锚杆及配件
- 流属性/单位： Count / item
- 数量规则： 实际可归属锚杆及配件供应量 item / L。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 m 参考流
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 基于采集计算（`calculated_from_collection`）
- 采集协议： `cp_sup_ledger`

范围证据需求： 须有实际支护设计、材料清单、收货安装不合格退回账及检查结果，无默认锚杆间距数量。

#### 采集要求：实际供应的围岩支护网片和加固材料 (`support_mesh`)

过程／待建立交换的方向／类型：`support` / `inputs` / `product`.

采用实测实际原生质量，不得无独立需要和实测单位质量便把片数或覆盖面积换算为质量。

- 采集对象：实际供应的围岩支护网片和加固材料
- 流属性/单位： Mass / kg
- 数量规则： 实际可归属支护网片及加固材料供应质量 kg / L。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 m 参考流
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 基于采集计算（`calculated_from_collection`）
- 采集协议： `cp_sup_ledger`

范围证据需求： 须有实际材料等级及质量面积数量记录，独立需要的换算须有据，无标准网片用量。

#### 采集要求：实际供应的支护胶结料或喷射混凝土组分 (`support_binder`)

过程／待建立交换的方向／类型：`support` / `inputs` / `product`.

实际树脂、灌浆和喷射混凝土 SKU 由场址设计确定。工厂预拌料与另购组分互斥；加水、新鲜湿拌物及固化安装状态属于独立物理视图。现场制备服务于支护，不是独立销售配方。

- 采集对象：实际供应的支护胶结料或喷射混凝土组分
- 流属性/单位： Mass / kg
- 数量规则： 实际可归属胶结料或实际预拌料供应质量 kg / L。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 m 参考流
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 基于采集计算（`calculated_from_collection`）
- 采集协议： `cp_sup_ledger`

范围证据需求： 须有实际批准配方或 SKU、交付状态、组成及批次质量控制，无通用配方、厚度或湿态转固化产率。

#### 采集要求：实际供应的矿山服务延伸材料 (`service_extensions`)

过程／待建立交换的方向／类型：`support` / `inputs` / `product`.

实际排水管、风筒及服务电缆软管是不同身份，实际以长度供应时各有原生长度账。其他原生单位须先有实际已核实支持，再创建交换。

- 采集对象：实际供应的矿山服务延伸材料
- 流属性/单位： Length / m
- 数量规则： 实际可归属延伸材料供应长度 m / L。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 m 参考流
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 基于采集计算（`calculated_from_collection`）
- 采集协议： `cp_sup_ledger`

范围证据需求： 须有实际设计、原生交付和安装长度及废物退回账，无每验收米固定延伸长度。

#### 采集要求：实际支护准备清洁测试和围堵用品 (`support_consumables`)

过程／待建立交换的方向／类型：`support` / `inputs` / `product`.

在安装组件以外纳入实际清洁剂、养护测试用品、围堵和安装耗材。

- 采集对象：实际支护准备清洁测试和围堵用品
- 流属性/单位： Mass / kg
- 数量规则： 实际可归属耗材净供应质量 kg / L。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 m 参考流
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 基于采集计算（`calculated_from_collection`）
- 采集协议： `cp_sup_ledger`

范围证据需求： 须有实际供应及质量控制、测试、清理记录，包括由服务方支付的增量资源。

#### 采集要求：实际供应的支护燃料 (`support_fuel`)

过程／待建立交换的方向／类型：`support` / `inputs` / `product`.

供应燃料与实际燃烧、可用退回、结转库存、未燃废物及未受控损失分开。

- 采集对象：实际供应的支护燃料
- 流属性/单位： Mass / kg
- 数量规则： 实际可归属燃料供应量 kg / L。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 m 参考流
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 基于采集计算（`calculated_from_collection`）
- 采集协议： `cp_sup_ledger`

范围证据需求： 须有实际燃料完整供应出口和燃烧核对，无默认设备油耗。

#### 采集要求：实际有界已完成支护与验收服务 (`support_provider`)

过程／待建立交换的方向／类型：`support` / `inputs` / `product`.

仅适用于已识别可计数已完成服务单元，且有结果和完整资源上游覆盖；实际小时或价格须采用正确原生属性及支持，绝不能当作 Count。

- 采集对象：实际有界已完成支护与验收服务
- 流属性/单位： Count / item
- 数量规则： 实际归属支护的已完成原生计数服务量 / L。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 m 参考流
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 基于采集计算（`calculated_from_collection`）
- 采集协议： `cp_sup_services`

范围证据需求： 须有实际合格设计测试安装服务范围、完成证据和原生单位；实际未发生可凭证说明。

#### 采集要求：可归属支护与交接资产生命周期服务 (`support_assets`)

过程／待建立交换的方向／类型：`support` / `inputs` / `product`.

纳入实际安装测试设备和共享风机、泵及承载设施生命周期，覆盖完整维护、更换及寿命终结；不得重新采购保留矿山。

- 采集对象：可归属支护与交接资产生命周期服务
- 流属性/单位： Count / item
- 数量规则： 归属支护的实际完整资产生命周期等效份额 / L。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 m 参考流
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 基于采集计算（`calculated_from_collection`）
- 采集协议： `cp_sup_services`

范围证据需求： 须有跨全部作业节点期间的相容实测寿命驱动量，并对有据剩余寿命报告不确定性和敏感性；分母未知不得完成最终数据。

#### 采集要求：实际支护运输服务 (`support_freight`)

过程／待建立交换的方向／类型：`support` / `inputs` / `product`.

承担实际支护供应、废物及可用退回运输段，记录载荷距离方式，排除供应商、直接燃料资产或有界服务已覆盖的运输。

- 采集对象：实际支护运输服务
- 流属性/单位：mass*distance / kg*km
- 数量规则：实际归属质量距离运输服务 kg*km / L。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_sup_services`

范围证据需求：须有实际路线载荷距离记录及服务方上游范围，无默认路线或信用。

#### 采集要求：实际其他原生单位支护供应 (`support_other_native`)

过程／待建立交换的方向／类型：`support` / `inputs` / `product`.

仅纳入尚未由对应质量数量长度流卡承担的实际面积计数长度原生网片、耗材或组件。保留实际原生属性单位，具体交换前核实支持身份；独立需要的质量视图须实测且不可相加。

- 采集对象：实际其他原生单位支护供应
- 流属性/单位：实际原生属性 / 实际原生单位
- 数量规则：以已核实原生单位计的实际可归属供应量 / L。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_sup_ledger`

范围证据需求：须有实际原生供应安装退回废物账及独立需要的实测单位质量或面积视图。

#### 采集要求：实际支护环境取水 (`support_withdrawal`)

过程／待建立交换的方向／类型：`support` / `inputs` / `elementary`.

仅在实际发生时记录按水源区室识别的支护环境取水；采购提供水仍属 support_water。内部循环水和承载设施涌水分别追踪，为不可相加状态。

- 采集对象：实际支护环境取水
- 流属性/单位：Volume / m3
- 数量规则：实际按水源记录的环境取水 m3 / L。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_sup_environment`

范围证据需求：须有实际水源区室及计量取水量，责任互斥。

#### 采集要求：可用支护组件外退 (`support_return`)

过程／待建立交换的方向／类型：`support` / `outputs` / `product`.

只纳入供应商原生账实际计数的锚杆配件。其他实际材料须保持自身原生单位外退账并另建具体交换，不得强行归入此计数流卡。

- 采集对象：可用支护组件外退
- 流属性/单位： Count / item
- 数量规则： 实际可用计数支护组件外退数量 item / L。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 m 参考流
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 基于采集计算（`calculated_from_collection`）
- 采集协议： `cp_sup_ledger`

范围证据需求： 须有实际计数退回凭证，不推断退回率或将所有退回转换为质量。

#### 采集要求：实际可用质量支护供应外退 (`support_mass_return`)

过程／待建立交换的方向／类型：`support` / `outputs` / `product`.

仅记录实际以质量为原生单位且可用的网片、胶结料、耗材或燃料物理外退；计数锚杆和原生长度延伸退回另行归属。

- 采集对象：实际可用质量支护供应外退
- 流属性/单位：Mass / kg
- 数量规则：实际可用质量原生支护供应外退 kg / L。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_sup_ledger`

范围证据需求：须有实际原生质量退回记录及接收可用状态，排除期末库存和废物。

#### 采集要求：实际可用原生长度服务材料外退 (`support_length_return`)

过程／待建立交换的方向／类型：`support` / `outputs` / `product`.

仅记录实际以长度供应的风筒、管道、软管或电缆可用外退，不强行归入质量或计数锚杆退回。

- 采集对象：实际可用原生长度服务材料外退
- 流属性/单位：Length / m
- 数量规则：实际可用原生长度外退 m / L。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_sup_ledger`

范围证据需求：须有配对实际 SKU 原生长度供应和退回凭证，除非独立需要且实测，不作长度质量换算。

#### 采集要求：实际可用其他原生单位支护供应外退 (`support_other_return`)

过程／待建立交换的方向／类型：`support` / `outputs` / `product`.

仅记录与 support_other_native 匹配的可用实际原生单位退回，排除已在数量质量长度退回流卡中的数量。保留实际单位和已核实支持。

- 采集对象：实际可用其他原生单位支护供应外退
- 流属性/单位：实际原生属性 / 实际原生单位
- 数量规则：以已核实原生单位计的实际可用外退量 / L。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_sup_ledger`

范围证据需求：须有原生供应商和接收者匹配账，排除期末库存和重复退回视图。

#### 采集要求：实际不合格支护与安装材料废物 (`support_waste`)

过程／待建立交换的方向／类型：`support` / `outputs` / `waste`.

被移除失败支护、过喷回弹、不可退剩余拌料、包装、测试残余及清理废物均保留供应负担，并各至实际接收者。固化安装材料排除这些出口。

- 采集对象：实际不合格支护与安装材料废物
- 流属性/单位： Mass / kg
- 数量规则： 离开支护的实际独立分类废物质量 kg / L。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 m 参考流
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 基于采集计算（`calculated_from_collection`）
- 采集协议： `cp_sup_ledger`

范围证据需求： 须有实际不合格及移除材料、新鲜固化水分状态和废物票据，无固定回弹或不合格比例。

#### 采集要求：去往处理或处置的实际支护清洗测试水与泥浆 (`support_water_out`)

过程／待建立交换的方向／类型：`support` / `outputs` / `waste`.

分别记录实际保留或固化水、蒸发、循环、受控污泥和外出流体；物质释放为独立不可相加视图。

- 采集对象：去往处理或处置的实际支护清洗测试水与泥浆
- 流属性/单位： Volume / m3
- 数量规则： 实际整体支护水或泥浆外流量 m3 / L。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 m 参考流
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 基于采集计算（`calculated_from_collection`）
- 采集协议： `cp_sup_environment`

范围证据需求： 须有实测实际外流量及去向状态，不自动将差值当作排放。

#### 采集要求：实际支护物质向已识别介质的释放 (`support_air`)

过程／待建立交换的方向／类型：`support` / `outputs` / `elementary`.

按物种介质分别实例化实际燃烧物种、材料排放、粉尘粒径或水土释放，并记录捕集和去向。SDS 或无 VOC 声明不能成为排放量。

- 采集对象：实际支护物质向已识别介质的释放
- 流属性/单位： Mass / kg
- 数量规则： 采用实际实测或有效活动因子与组成去向方法确定的物质释放 kg / L。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 m 参考流
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 基于采集计算（`calculated_from_collection`）
- 采集协议： `cp_sup_environment`

范围证据需求： 须有实际物种介质量化方法、捕集保留及不确定性，无通用排放因子。

#### 采集要求：实际批准供应的爆炸物产品 (`explosives`)

过程／待建立交换的方向／类型：`development` / `inputs` / `product`.

按每个真实 SKU、组成/状态及保管关系建立独立原子交换。本要求不是通用集合流。真实完整的采购总成可采用其经核实的整包边界，已含部件不再额外采购。

实际供应商形态、SKU 和批准用途决定每项具体交换；仅在实际记录证明时才采用 ANFO 或乳化炸药。

- 采集对象： 实际批准供应的爆炸物产品
- 流属性/单位： Mass / kg
- 数量规则： 实际可归属爆炸物供应量 kg / L；未退回处置物、拒爆残留及损失保留上游负担。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 m 参考流
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 基于采集计算（`calculated_from_collection`）
- 采集协议： `cp_dev_ledger`

范围证据需求： 须按掘进循环、围岩类别及断面取得实际 SKU 供应及爆破核对记录，无默认爆破配方或每米用药量。

## 6. 过程清单结构

这些质量流卡仅适用于实际质量原生供应。其他原生计数、面积或长度材料由各节点 other_native 流卡独立保留单位，不能无独立需要及实测换算便强行采用质量。

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| development | 钻爆开挖、出渣与找顶排险 | required | 实际非矿石硬岩下斜巷掘进 | 从原位掌子面到已清渣开口及分类岩渣的独立资源移除职责，按安全控制转入支护，不含矿石生产 | 每 1 m 参考流的实际作业清单 |
| support | 工程支护、服务整合与验收 | required | 全部纳入区段均须完成实际工程支护及交接 | 整合支护组件及实际延伸，检查测试、整改复测并签署验收可用区段 | 1 m 已验收支护下斜巷 |

内部开口交接属于具备资质的安全作业控制下的任务和围岩状态记录，使用作业、区段、掘进循环及测量标识；它不表示可以一般性进入无支护围岩，也不形成另购服务或第二项最终产出。岩渣转运采用成对转移标识。几何或支护不合格时返回产生问题的掘进或支护节点实施整改，移除材料由该节点废物流卡记录。

### 过程：钻爆掘进 (`development`)

#### 输入

##### 产品流

###### 实际供应的掘进电力 (`development_electricity`)

钻孔、照明、充电、通风、压缩空气及泵送电耗只归属一次，包括实际共享期间份额及爆破解除通风。

- 选定流： 实际供应的掘进电力
- 流属性/单位： Energy / kWh
- 数量规则： 实际可归属电量 kWh / L。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 m 参考流
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 基于采集计算（`calculated_from_collection`）
- 采集协议： `cp_dev_services`

范围证据需求： 须有电表及全矿共享使用者驱动量记录，安全解除时间不是默认能耗。

###### 实际采购或提供的掘进水 (`development_water`)

仅记录作为产品流实际采购或提供的水及钻孔、抑尘、清理和冲洗用途。实际环境取水由基本流输入单独记录，截取涌水属于独立状态水平衡。

- 选定流： 实际采购或提供的掘进水
- 流属性/单位： Volume / m3
- 数量规则： 实际进入掘进的可归属水量 m3 / L。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 m 参考流
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 基于采集计算（`calculated_from_collection`）
- 采集协议： `cp_dev_environment`

范围证据需求： 须有水表、水源、涌水分离及实际循环回路，无任意每米用水量。

###### 实际有界已完成掘进服务 (`development_provider`)

仅在合同定义可计数已完成服务单元及完整资源、结果和上游覆盖时适用。否则先取得实际原生服务属性和已核实支持身份，再生成具体交换；价格或小时不是 item。

- 选定流： 实际有界已完成掘进服务
- 流属性/单位： Count / item
- 数量规则： 实际归属掘进的已完成原生计数服务量 / L。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 m 参考流
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 基于采集计算（`calculated_from_collection`）
- 采集协议： `cp_dev_services`

范围证据需求： 须有实际有界服务单位、完成结果及资源覆盖，未发生须有证据。

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 去往分类去向的实际非矿石开挖岩渣 (`rock_spoil`)

地质岩石不是采购材料。内部出渣转运和运输独立记录；边界废物去向承担实际处置或有据再利用，不虚构联产品价值。

- 选定流： 去往分类去向的实际非矿石开挖岩渣
- 流属性/单位： Mass / kg
- 数量规则： 分别运至各去向的实际净称非矿石岩渣质量 kg / L。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 m 参考流
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 基于采集计算（`calculated_from_collection`）
- 采集协议： `cp_dev_environment`

范围证据需求： 须有成对岩渣票据、岩石特征及需要时的实测状态换算，无假定堆积密度或膨胀率。

##### 基本流

### 过程：支护整合和验收 (`support`)

#### 输入

##### 产品流

###### 实际供应的支护与交接电力 (`support_electricity`)

按实际电表或完整相容期间驱动量，将实际支护安装、泵送、通风、调试、照明及重复测试电耗只归属一次。

- 选定流： 实际供应的支护与交接电力
- 流属性/单位： Energy / kWh
- 数量规则： 实际可归属电量 kWh / L。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 m 参考流
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 基于采集计算（`calculated_from_collection`）
- 采集协议： `cp_sup_services`

范围证据需求： 须有实际电量和完整共享使用者驱动量覆盖，无通用通风功率或运行时间。

###### 实际采购或提供的支护与交接水 (`support_water`)

纳入实际灌浆喷射混凝土加水、清洁、养护、冲洗、围堵和接口测试，内部回收水属于不可相加转移。

- 选定流： 实际采购或提供的支护与交接水
- 流属性/单位： Volume / m3
- 数量规则： 实际进入的可归属水量 m3 / L。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 m 参考流
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 基于采集计算（`calculated_from_collection`）
- 采集协议： `cp_sup_environment`

范围证据需求： 须有实际拌料测试清理用水及库存出口状态，本 PCR 不规定水胶比。

##### 基本流

#### 输出

##### 产品流

###### 已验收且完成支护的非矿石硬岩矿山通行下斜巷掘进施工服务 (`accepted_decline`)

仅计全部实际爆破、围岩、支护、排水、通风及服务接口门槛合格且业主签署交接后的唯一最终实测已验收支护中心线进尺。

- 选定流： 已验收且完成支护的非矿石硬岩矿山通行下斜巷掘进施工服务
- 流属性/单位： Length / m
- 数量规则： 1 m
- 数值来源模式： 固定值（`fixed_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 m 参考流
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_accept`

范围证据需求： 1 m 是精确参考归一化，不是经验产率或验收容差。

##### 废物流

##### 基本流

## 7. 分配与联产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `no_ore` | all inventory rows | 本子集不有意产出可销售矿石。非矿石岩渣采用实际分类处理、再利用或处置去向，不默认赋予避免产品或处置信用。有价值矿石生产须采用另一经审查方法。 |  |
| `stock_supply` | explosives; initiators; drill_consumables; development_fuel; support_bolts; support_mesh; support_binder; service_extensions; support_consumables; support_fuel; development_other_native; support_other_native | 对实际 SKU 和原生单位：可归属供应量 = 期初可归属库存 + 外部扣皮重总收货 - 期末结转库存。总量加出口法保留全部实际外出；仅消耗法可对匹配的可用外退及其上游负担排除一次，不得再增加退回信用。未退回的废物和损失保留上游负担。 |  |
| `fuel_balance` | development_fuel; support_fuel; development_air; support_air | 在核对期初期末状态后，将实际供应燃料分为实际燃烧、可用外退、未燃废物及未受控损失。总泄漏仅供审计，回收并保留的泄漏已属于期末库存或可追踪废物及退回。只有实际燃烧用于燃烧排放；不得把燃料供应设为仅等于已燃数量。 |  |
| `blast_balance` | explosives; initiators; explosive_return; initiator_return; development_waste; development_air | 按掘进循环将外部供应与结转库存同领用、装药、实际起爆、拒爆解除、废物及可用退回分别核对。内部领用和装药属于不可相加活动；相容爆破排放方法采用实际起爆量，未退回的未用、拒爆或处置物保留上游负担。 |  |
| `failed_rounds` | development; support; accepted_decline | 准备、失败循环、重复爆破、排险和支护、移除及重复测试的负担保留在同一唯一验收区段分母内。失败或未满足门槛不产生验收米数。整改循环和废物出口须关联产生问题的节点。 |  |
| `shared_periods` | development_electricity; support_electricity; development_assets; support_assets; development_provider; support_provider | 列明每个使用作业、节点、期间和生命周期阶段。优先直接计量，否则采用实际相容实测驱动量分子除以完整使用者与期间驱动量分母。全部资产制造、维护、更换及寿命终结负担在所有作业、节点和期间分配。全寿命分母须有完整实测寿命，或已有历史及有证据的剩余寿命、更换、终止和寿命终结，并报告不确定性、敏感性及更新。缺覆盖或分母则不得完成最终数据。期间份额及直接、供应商资源份额只核对一次。 |  |


## 8. 前景数据采集、计算和质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_accept | support | 最终验收产出 | survey_acceptance | site_id; mine_id; job_id; segment_id; campaign_id; round_id; event_id; phase_id; period_id; record_id; start_chainage; end_chainage; centreline_m; cross_section; gradient; ground_class; non_ore_evidence; blast_clearance; scaling_record; support_design; support_qc; drainage_test; ventilation_test; service_test; defects_closed; signatory; acceptance_date | 以可追溯前后中心线测量核对唯一区段标识、合格实际设计及全部门槛通过后的验收签署 | m | 每个最终区段及每次失败复测事件 | 整个施工阶段直至最终验收 | 同一已命名矿山场址区段 | 每参考流 | 测量校准、图纸、循环记录、爆破围岩支护接口测试及交接签署 |
| cp_dev_ledger | development | 供应库存退回安装活动与废物 | native_stock_ledger | site_id; mine_id; job_id; segment_id; campaign_id; round_id; event_id; phase_id; period_id; record_id; sku; supplier; native_property; native_unit; opening_stock; gross_receipts; net_tare; closing_stock; internal_issue; charged; detonated; misfire_state; installed; usable_return; nonburned_waste; uncontained_loss; total_spill_audit; recovered_spill_fate; waste_id; receiver; amount; amount_unit; density; density_unit; physical_state; moisture; temperature; conversion_source; temperature_unit; actual_fuel_volume; fuel_volume_unit; fuel_density_source | 核对实际 SKU 原生供应出口记录、爆破及燃料活动账、安装记录及接收确认；不适用字段须有未发生证据，不推断为零；保留事件转移关联 | 实际原生单位；kg；item；m | 每次收货领用掘进循环安装退回废物及库存边界 | 期初至期末全部实际作业期间含失败事件 | 同一已命名场址及过程责任方 | 每参考流 | 经校准库存称重记录、供应退回凭证、实际爆破日志、安装质量控制及废物票据 |
| cp_dev_environment | development | 水、岩渣和物质释放 | flow_fate_record | site_id; mine_id; job_id; segment_id; campaign_id; round_id; event_id; phase_id; period_id; record_id; source; destination; transfer_id; material_id; rock_class; in_situ_volume; loose_volume; wet_mass; dry_mass; amount; amount_unit; density; density_unit; physical_state; moisture; temperature; conversion_source; inflow; supplied_water; recirculation; closing_water; outflow; sludge; species; medium; particle_fraction; sampling_method; concentration; gas_flow; sampling_time; activity; factor; factor_basis; capture; retention; fate; uncertainty; temperature_unit; activity_unit; factor_unit; factor_source; composition_basis; composition_source; fate_source | 以流量计、测量、秤和接收记录确定不同岩水状态；各实际物种介质采用可追溯流量时间采样或相容有效活动因子组成去向。空气解除浓度仅供安全证据 | m3；kg；物种特定 kg | 每个掘进循环事件出口和报告期间 | 完整施工阶段含爆破解除通风及事故 | 同一场址过程；实际接收介质及接收者 | 每参考流 | 仪表测量称重校准、实验室特征、去向票据、因子有效性和不确定性及事故责任 |
| cp_dev_services | development | 公用设施运输服务及完整资产生命周期 | resource_ownership_record | site_id; mine_id; job_id; segment_id; campaign_id; round_id; event_id; phase_id; period_id; record_id; asset_id; provider_id; service_id; consumer_id; ownership_scope; completed_native_unit; completed_quantity; electricity_kwh; transport_load; distance; transport_mode; direct_resources; provider_resources; lifecycle_manufacture; lifecycle_maintenance; lifecycle_replacement; lifecycle_eol; driver_unit; actual_driver; all_consumer_driver; observed_history; evidenced_remainder; termination; uncertainty; sensitivity; update_date; remainder_source; transport_load_unit; distance_unit; empty_return_method; upstream_scope | 计量公用设施和运输活动；核对有界已完成服务资源结果及相容原生单位；列明完整资产公用设施使用者及实测寿命驱动量和有据剩余寿命；服务方燃料公用设施及运输各有唯一责任 | 实际已核实原生单位；kWh；kg*km；等效 item | 每次作业事件、计量期间及资产寿命更新 | 全部服务期间及实测或有据资产剩余寿命 | 实际矿山以及完整共享资产使用者范围 | 每参考流 | 仪表、运单、实际服务范围结果、车队历史、制造维护更换寿命终结覆盖、寿命证据和敏感性 |
| cp_sup_ledger | support | 供应库存退回安装活动与废物 | native_stock_ledger | site_id; mine_id; job_id; segment_id; campaign_id; round_id; event_id; phase_id; period_id; record_id; sku; supplier; native_property; native_unit; opening_stock; gross_receipts; net_tare; closing_stock; internal_issue; charged; detonated; misfire_state; installed; usable_return; nonburned_waste; uncontained_loss; total_spill_audit; recovered_spill_fate; waste_id; receiver; amount; amount_unit; density; density_unit; physical_state; moisture; temperature; conversion_source; temperature_unit; actual_fuel_volume; fuel_volume_unit; fuel_density_source | 核对实际 SKU 原生供应出口记录、爆破及燃料活动账、安装记录及接收确认；不适用字段须有未发生证据，不推断为零；保留事件转移关联 | 实际原生单位；kg；item；m | 每次收货领用掘进循环安装退回废物及库存边界 | 期初至期末全部实际作业期间含失败事件 | 同一已命名场址及过程责任方 | 每参考流 | 经校准库存称重记录、供应退回凭证、实际爆破日志、安装质量控制及废物票据 |
| cp_sup_environment | support | 水、岩渣和物质释放 | flow_fate_record | site_id; mine_id; job_id; segment_id; campaign_id; round_id; event_id; phase_id; period_id; record_id; source; destination; transfer_id; material_id; rock_class; in_situ_volume; loose_volume; wet_mass; dry_mass; amount; amount_unit; density; density_unit; physical_state; moisture; temperature; conversion_source; inflow; supplied_water; recirculation; closing_water; outflow; sludge; species; medium; particle_fraction; sampling_method; concentration; gas_flow; sampling_time; activity; factor; factor_basis; capture; retention; fate; uncertainty; temperature_unit; activity_unit; factor_unit; factor_source; composition_basis; composition_source; fate_source | 以流量计、测量、秤和接收记录确定不同岩水状态；各实际物种介质采用可追溯流量时间采样或相容有效活动因子组成去向。空气解除浓度仅供安全证据 | m3；kg；物种特定 kg | 每个掘进循环事件出口和报告期间 | 完整施工阶段含爆破解除通风及事故 | 同一场址过程；实际接收介质及接收者 | 每参考流 | 仪表测量称重校准、实验室特征、去向票据、因子有效性和不确定性及事故责任 |
| cp_sup_services | support | 公用设施运输服务及完整资产生命周期 | resource_ownership_record | site_id; mine_id; job_id; segment_id; campaign_id; round_id; event_id; phase_id; period_id; record_id; asset_id; provider_id; service_id; consumer_id; ownership_scope; completed_native_unit; completed_quantity; electricity_kwh; transport_load; distance; transport_mode; direct_resources; provider_resources; lifecycle_manufacture; lifecycle_maintenance; lifecycle_replacement; lifecycle_eol; driver_unit; actual_driver; all_consumer_driver; observed_history; evidenced_remainder; termination; uncertainty; sensitivity; update_date; remainder_source; transport_load_unit; distance_unit; empty_return_method; upstream_scope | 计量公用设施和运输活动；核对有界已完成服务资源结果及相容原生单位；列明完整资产公用设施使用者及实测寿命驱动量和有据剩余寿命；服务方燃料公用设施及运输各有唯一责任 | 实际已核实原生单位；kWh；kg*km；等效 item | 每次作业事件、计量期间及资产寿命更新 | 全部服务期间及实测或有据资产剩余寿命 | 实际矿山以及完整共享资产使用者范围 | 每参考流 | 仪表、运单、实际服务范围结果、车队历史、制造维护更换寿命终结覆盖、寿命证据和敏感性 |

### 计算规则

| rule_id | applies_to | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `native_supply` | explosives; initiators; drill_consumables; development_fuel; support_bolts; support_mesh; support_binder; service_extensions; support_consumables; support_fuel; development_other_native; support_other_native | 对各实际 SKU 和原生单位，采用期初可归属库存 + 外部扣皮重总收货 - 期末结转库存；选择总量加出口法，或一次性排除匹配可用退回。实际可归属原生数量除以 L。 | cp_dev_ledger; cp_sup_ledger; cp_accept | 每 1 m 参考流的原生供应 |  |
| `native_outlets` | explosive_return; initiator_return; support_return; rock_spoil; development_waste; support_waste; development_water; support_water; development_water_out; support_water_out; development_withdrawal; support_withdrawal; development_mass_return; support_mass_return; support_length_return; development_other_return; support_other_return | 对相同责任方和状态汇总实际独立追踪的原生边界数量，再除以 L。内部转移标识成对匹配，不作为额外外部供应或产出相加。仅对实际独立需要的换算采用匹配的实测状态、密度、水分和来源。 | cp_dev_ledger; cp_sup_ledger; cp_dev_environment; cp_sup_environment; cp_accept | 每 1 m 参考流的实际原生交换 |  |
| `owned_services` | development_electricity; support_electricity; development_provider; support_provider; development_assets; support_assets; development_freight; support_freight | 实际直接资源加上完整共享资源中按实际相容期间或生命周期驱动量确定的份额，排除供应商、直接活动和资产已承担的重叠部分；可归属原生数量除以 L。资产驱动量分母覆盖全部生命周期使用者。运输采用实际载荷与距离，上游覆盖仅承担一次。 | cp_dev_services; cp_sup_services; cp_accept | 每 1 m 参考流的原生资源、服务单位及生命周期等效份额 |  |
| `species_release` | development_air; support_air | 对各实际物种和介质，以相容流量和时间积分实测浓度，或采用实际活动量乘匹配物种排放因子，或整体流体质量乘匹配组成及去向比例的方法；完整物种排放因子不得再次乘组成比例，排除捕集、保留、退回和废物一次，再除以 L。实际起爆与燃料燃烧活动分开；不得把安全读数当作排放质量或只凭残差判断。 | cp_dev_environment; cp_sup_environment; cp_dev_ledger; cp_sup_ledger; cp_accept | 每 1 m 参考流的实际物种释放 |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| `identity_scope` | all inventory rows | 将每个实际最终交换解析为一个已核实具体 UUID，以及符合实际 SKU、服务、物种、介质的独立已核实属性单位支持；未知属于缺口，不是零。 | 实际供应商与流及支持详情记录；场址路线地质 |
| `complete_campaign` | all inventory rows | 覆盖完整作业及全部直接和服务方资源、期间、失败循环及事故，实际为零须有未发生证据。 | 按责任记录的事件期间账及签署完整性审查 |
| `state_reconciliation` | all inventory rows | 核对库存出口、爆炸物状态、燃料燃烧、岩石体积质量水分、新鲜固化支护及流体物种视图，报告未闭合平衡和不确定性。 | 经校准原始记录；成对转移与接收证据 |
| `gate_quality` | accepted_decline | 缺实际设计、安全爆破重新进入、支护质量控制或接口验收签署时，不得形成已验收产出。 | 合格批准、经校准测试、缺陷闭合与唯一测量 |
| `lifetime_quality` | development_assets; support_assets | 缺完整实测或有据寿命驱动量及使用者覆盖时，不得完成最终数据；披露敏感性并更新剩余寿命证据。 | 资产历史、剩余寿命、更换、终止、寿命终结及分配审计 |


## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `acceptance_check` | accepted_decline | 确认 L > 0 及最终精确 1 m 参考量；唯一测量端点、非矿石地质、实际断面坡度、爆破与重新进入、排险、支护、排水、通风和服务门槛及验收签署均齐备。不计失败区段或重复尝试。 | minto-development-plan-2014; ontario-ground-control |
| `native_check` | all inventory rows | 核查原生属性单位、库存出口规则、直接分母 L、仅在需要时使用的实测状态换算，不虚构支护配方、矿石产率、膨胀或理论爆破排放。 |  |
| `coverage_check` | development; support | 核查全部期间与工序、事故、拒爆、不合格支护整改及废物出口、直接与供应商及运输责任、完整共享使用者和寿命驱动量及敏感性。不将覆盖缺失或未明确的更换终止当作零。 |  |
| `identity_check` | all inventory rows | 最终 TIDAS 交换前核实每个实际具体流、属性、单位和限定条件；供应商、服务、物种或支持身份未解决时不得生成最终交换，并须披露。候选方法不是可发布数据集。 |  |
| `environment_check` | development_air; support_air; rock_spoil; development_water_out; support_water_out | 验证实际起爆与燃烧活动及物种介质方法；区分空气安全标准与质量排放、原位与松散及称重岩渣状态、供应水与涌水及循环水和最终去向，禁止重复相加视图或通用信用。 |  |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 完成支护矿山下斜巷施工服务的前景数据包 |
| downstream_use | secondary_dataset; background_dataset; process 和 lifecyclemodel 投影 |
| allowed_use | 实际匹配的非矿石钻爆已支护下斜巷服务，并披露场址几何、地质、支护、期间、接口和验收 |
| excluded_use | 整座矿山；矿石生产；竖井天井；机械隧道；交通隧道；仅开挖；未来运营或避免矿石、电力及处置信用 |
| required_metadata | 矿山、场址、作业、区段、施工阶段、掘进循环、事件、工序和期间；几何和唯一 L；非矿石地质；实际设计、支护质量控制；爆破重新进入；接口测试及签署；实际 SKU、服务、单位；库存出口状态；水岩渣去向；共享使用者及生命周期范围 |
| required_quality_disclosure | 边界和数据覆盖、直接及服务方责任、计量状态换算、实际物种因子、未知身份支持、缺失记录、不确定性敏感性、历史剩余寿命证据和日期 |
| update_trigger | 实际地质、路线、支护、几何、门槛、管辖要求、供应商服务与去向、期间责任或剩余寿命证据改变；计量身份更正 |


## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc-3-2025 | official_guidance | UN Statistics Division, CPC Version 3.0 explanatory notes, 30 June 2025, p. 287, subclass 54261; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅用于分类范围，矿山相关隧道和巷道，不用于生产数量 |
| minto-development-plan-2014 | literature | Minto Explorations Ltd, Underground Mine Development and Operations Plan, June 2014, sections 4.1, 6.3.5, 7.5–7.8; https://emr-ftp.gov.yk.ca/emrweb/COMM/major-mines/minto/mml_minto_11underground_mine_development_operations_plan_june2014.pdf | 历史运营者案例，支撑下斜巷通行、支护、钻爆掘进与废物分离以及水和爆炸物职责；不采用更广矿山矿石范围及其数值模式 |
| ontario-ground-control | official_guidance | Ontario Ministry of Labour, Immigration, Training and Skills Development, Ground control in underground mines, published/updated 21 December 2023; https://www.ontario.ca/page/ground-control-underground-mines | 场址围岩设计检查、找顶排险、支护安装与质量控制依据；实际管辖和项目设计控制，不声称支撑 LCA 库存燃料资产代数 |
