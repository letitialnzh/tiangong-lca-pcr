---
pcr_id: pcr.construction-services.gasket-jointed-external-building-sanitary-drain-installation-services
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 密封圈连接室外建筑污水排水接管安装服务

## 1. 范围与适用性

适用于私人无车通行裸地场址上，既有建筑外出水口至已备好且经授权既有接收端之间的六英寸刚性 PVC DR35 密封圈连接重力污水建筑支管安装。安装方负责新垫层、铺设、密封圈装配、腋角、实际水试纠正、完整场外运入回填、分层压实及约定裸地标高直至最终签署验收。选定路线采用手工撬杆垫块插入及实际手工或电网、电池电动支持设备。须声明项目设计、土壤荷载条件、配套产品及胜任人员验收准则；公开厂商指导与地方示例说明不能构成场址设计。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.construction-services.gasket-jointed-external-building-sanitary-drain-installation-services |
| classification_refs | CPC 3.0 54622; narrower |
| covered_products | 完整回填压实并最终验收的室外建筑污水支管安装 |
| excluded_products | 室内管道及通气网；地方污水主干及新井室；开挖和独立负责临时工程、土方运输；道路路面及裸地标高外景观；雨水、合流及压力系统；溶剂连接；其他管材规格；后续运营处理维护 |
| representative_product | 六英寸 ASTM D3034 DR35 密封圈连接刚性 PVC 污水支管，含配套管件、密封圈及批准场外运入填料 |
| production_route | 手工密封圈插接；新垫层腋角；隐蔽前仅用水介质的试验批准；完整场外运入填料、分层压实、裸地标高；最终移交 |
| market_state | 已验收完整埋地支管服务，尚未进入运营污水输送 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 已验收完全覆土的密封圈连接室外建筑污水排水接管 |
| How much | 1 m |
| How well | 配套批准部件；可视接头水试及隐蔽批准；完整回填、分层压实、约定裸地标高和签署最终竣工验收 |
| How long or cycle | 一次实际安装至最终验收；作业日期关联资产制造、使用、维护、更换及退役期间 |
| reference_flow_link | `accepted_external_drain_connection` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 已验收完全覆土的密封圈连接室外建筑污水排水接管 |
| 参考流属性 | Length `838aaa23-0117-11db-92e3-0800200c9a66` |
| 参考单位组 | Units of length `838aaa22-0117-11db-92e3-0800200c9a66` |
| 参考单位 | m |
| 必需限定信息 | 室外出水口及接收端基准和授权；作业场址日期；六英寸 DR35 SKU 及密封圈管件 BOM；沟槽负责人及几何；土壤荷载设计；填料等级、阶段、水分及压实准则；测试批准时序；最终路径 ID 及 D；裸地标高和签署验收；实际设备、能源及供应方边界 |

## 4. 计量与单位规则

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| reference_path | reference product | Length `838aaa23-0117-11db-92e3-0800200c9a66` | m | D 为从声明的建筑外出水口基准点至已备好的既有接收端基准点之间，以唯一 ID 标识的最终验收输送路径中心线管段长度之和，单位 m。每个经过管件的中心线路径计一次，不增加承插重叠长度。排除独立清扫口检修立管长度、拆除、失败或未安装管段及重复或重叠试验段。检修立管材料仍入清单。核对最终竣工测量、管段 ID 和端点；总到货、管身、切割及铺设长度另记。更换时退役原 ID 并给最终管段新 ID；D 只含最终路径。 |
| mass_conversion | gasketed_dr35_pipe; gasketed_fittings_and_interfaces; replacement_gaskets; imported_approved_fill; approved_gasket_lubricant; cleaning_and_protection_consumables; incoming_packaging; supplied_water; usable_stock_returns; dry_nonusable_residuals; rejected_joint_components; contaminated_consumable_residuals; used_water_to_recipient; airborne_particulate; water_to_air; other_evidenced_species_release | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用校准净称重或经验证的准确 SKU、物流及状态换算。保留原量、皮重、密度水分约定和因子来源；不同材料池分开。本规则不将电量、服务事件或资产份额转成质量。 |
| energy_boundary | installation_electricity | Energy | kWh | 仅用实际外部计量 kWh，按 cp_energy 真实共享使用及补电分配。Energy 属性支持未决，不能以 NCV 替代。 |
| count_scope | owned_equipment_attribution; hired_support_service | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | 分数资产件数表示有证据隐含份额，不是称重质量或小时使用。租用计数仅对真实完整合同事件启用；实际小时合同保留小时及未核实 Duration 支持。 |
| `count_unit_alias` | 存在时的计数交换 | Count | item | 本 PCR 的显示别名 item 表示已核实的物品数量单位组参考单位 Item(s)，系数为 1。具体数据集须保留实际参考单位身份；此书写别名不建立质量、面积或服务之间的等价关系。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 私人无车通行裸地的安全稳定预挖沟槽；已提供配套建筑外出水口和已备好授权既有接收端；临时工程独立负责；无带流接入旁路 |
| starting_condition_role | 有记录的上游施工及端点交接，不是虚构就绪交换 |
| product_classification_scope | CPC 3.0 54622; 建筑外排水铺设子集，排除 54621 室内管道及 54251 地方主干 |
| recursive_input_rule | 不递归消耗相同完整排水服务。记录供应部件资源和独立负责上游场址责任；以完整服务为另一起点需审查边界变更。 |
| upstream_dataset_requirement | 匹配已交付部件、填料、润滑剂、水电及自有供应方生命周期数据集；披露交付、包装及维护。为下游汇总保留另需沟槽临时工程责任，不重复土方运输。 |
| disclosure | 实际场址设计、负责人及端点；交接及最终关口；资源期间边界；实测 D；全部数量、身份、支持及范围缺口 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_owner | external_drain_install | 仅在有记录的安全稳定预挖沟槽和配套既有室外端点交接后开始。开挖、独立负责的支护降水及弃土保管运输由声明供应方负责；披露所需上游责任，防止下游汇总隐性遗漏。开挖土不进入选定填料。 | `cpc3-current` |
| installation_gate | external_drain_install | 顺序为就绪 → 新垫层、管材管件密封圈及腋角且接头可见 → 兼容仅用水介质的试验、纠正复测及胜任人员隐蔽批准 → 完整新购场外运入覆土、分层压实及约定裸地标高 → 签署最终竣工验收。全部阶段归一个节点；待覆盖不是最终输出。 | `charlotte-plastics-manual`; `seattle-side-sewer-notes-2024` |
| gasket_joining | gasketed_dr35_pipe; gasketed_fittings_and_interfaces | 清洁承口、密封圈及插口，确认密封圈就位，用批准润滑剂并以直线手工撬杆垫块插至正确标记。异常阻力需拆开检查，不能动力强推。现场切口方正、倒角并按匹配部件说明重新标记。不推定溶剂或固化步骤。 | `charlotte-plastics-manual` |
| resources_and_scope | all inventory rows | 纳入实际永久部件、各批准场外运入填料阶段、消耗品、包装来源池、外部水电、自有资源归属及真实租用服务。本路线仅用手工或电网、电池电动资源；内燃或带流旁路需审查范围变更。排除主干及新井室、室内管道、路面及道路穿越、裸地标高外景观和后续运营处理。到场供应数据集须披露交付及包装边界。 | `charlotte-dr35`; `charlotte-underground` |
| asset_periods | owned_equipment_attribution; hired_support_service | 识别实际插管工具、切割机、夯实机、泵、计量器及充电器及其权属、制造购入、全部消费作业及报告期间、维护更换和退役。将真实作业投入事件及验收移交关联至同一期间索引；用电和租用供应方负荷各有唯一负责人。未知利用率保留缺口。 |  |
| `boundary_atomic_completion` | 所有过程 | 本节的采集要求是必须执行的采集与适用性指令，不是聚合清单交换。完成前景数据集前，必须为每一种实际产品、废物流、物质及环境子区室建立独立原子流卡／交换。保留全部实际事件、上游负荷、退回及原生单位；所链接公式应按每个兼容身份分别执行。环境资源提取记为输入，环境释放记为输出。不得相加不同原生单位、用一个 UUID 代表整个采集池、将缺记录解释为零，或与已有具体卡重复计入。保留宿主的文件性接口仅传递状态，不形成新采购资产。适用成员未明确或未有证据证明不存在时，定量清单仍不完整；非强制筛查提示不能补造数量或化学组成。 |  |

### 条件性清单补全要求

以下标识符表示采集池或文件性状态台账。一个池可能有零个、一个或多个实际成员。须依据真实记录判断适用性，并为每个成员保留原有数量方法和采集协议；只有兼容的数量才能共同核对。下列原有可选筛查区间仅作为暂定复核提示，不得强加于不同材料或混合采集池。

#### 采集要求：配套密封圈管件、接头与检修部件 (`gasketed_fittings_and_interfaces`)

过程／待建立交换的方向／类型：`external_drain_install` / `inputs` / `product`.

将实际弯头、分支、端部接头及清扫口 BOM 与件数及实测或同 SKU 净质量核对。随件密封圈只计一次。经授权的既有端点已提供；不含新建主干、井室或带流接入。D 仅含经过的管件输送路径；检修立管材料仍入清单。 计算规则：normalize_exchange. 数量范围证据需求：形成管件 kg/路径 m 区间前，需端点兼容性及批准、竣工管件与检修 BOM、SKU 净重及密封圈边界和实际更换记录。

- 采集对象：配套密封圈管件、接头与检修部件
- 流属性/单位：Mass / kg
- 数量规则：实际归属交换数量分子除以实测 D
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`charlotte-dr35`; `charlotte-plastics-manual`; `seattle-side-sewer-notes-2024`

#### 采集要求：单独领用的替换或追加密封圈 (`replacement_gaskets`)

过程／待建立交换的方向／类型：`external_drain_install` / `inputs` / `product`.

仅对部件外另行领用的密封圈启用。称重或将实际领退件数乘以经验证的同 SKU 密封圈质量；关联原接头、弹性体规格及拆除密封圈接收方。 计算规则：normalize_exchange. 数量范围证据需求：尚需实际配套尺寸及材质、净质量、追加领用件数、更换原因与去向。符合 ASTM F477 不能确定弹性体身份或质量。

- 采集对象：单独领用的替换或追加密封圈
- 流属性/单位：Mass / kg
- 数量规则：实际归属交换数量分子除以实测 D
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`charlotte-dr35`; `charlotte-plastics-manual`

#### 采集要求：按材料及阶段记录的新购场外运入项目批准填料 (`imported_approved_fill`)

过程／待建立交换的方向／类型：`external_drain_install` / `inputs` / `product`.

采用称重单及库存、退料、铺填记录。即使同种材料用于多阶段，也区分垫层、腋角、初始覆盖和上部回填。由实测体积换算时，验证实际状态密度和含水率，并考虑管道外形占据的体积、沟槽几何和压实。开挖土仍由开挖供应方负责。 计算规则：normalize_exchange. 数量范围证据需求：尚需项目土壤、荷载及覆土设计、阶段几何、材料等级、称重量、含水率及密度基准、损失和铺填验收。一般 4 in 垫层、岩石上 6 in、6 in 分层和 85–95% 压实指导有条件适用，不是清单区间或场址合规证据。

- 采集对象：按材料及阶段记录的新购场外运入项目批准填料
- 流属性/单位：Mass / kg
- 数量规则：实际归属交换数量分子除以实测 D
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`charlotte-plastics-manual`; `charlotte-underground`; `seattle-side-sewer-notes-2024`

#### 采集要求：实际消耗的清洁、标记与保护用品 (`cleaning_and_protection_consumables`)

过程／待建立交换的方向／类型：`external_drain_install` / `inputs` / `product`.

从领退、容器差量或经验证的用品件数质量因子记录实际消耗 SKU 数量，关联清洁对象及事件。仅纳入真实活动；可复用保护用品归设备，不预设使用溶剂清洗剂。 计算规则：normalize_exchange. 数量范围证据需求：尚需实际对象及频次、产品剂量或用品质量与组成、库存和捕集残余；无通用清洁 kg/m 区间。

- 采集对象：实际消耗的清洁、标记与保护用品
- 流属性/单位：Mass / kg
- 数量规则：实际归属交换数量分子除以实测 D
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`charlotte-plastics-manual`

#### 采集要求：实际入场包装材料 (`incoming_packaging`)

过程／待建立交换的方向／类型：`external_drain_install` / `inputs` / `product`.

计量关联货批的包装质量或同批件数及皮重，核对库存、复用、退回和废物。仅在到场供应数据集未含该包装负荷时实例化负荷投入；否则保留实体保管台账而不重复制造负荷。 计算规则：normalize_exchange. 数量范围证据需求：尚需逐货批实际包装材质及重量和供应方边界；散装填料无包装也需证据。包装废物不能代替缺失的入场来源池。

- 采集对象：实际入场包装材料
- 流属性/单位：Mass / kg
- 数量规则：实际归属交换数量分子除以实测 D
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：

#### 采集要求：每项实际自有可复用资产的归属份额 (`owned_equipment_attribution`)

过程／待建立交换的方向／类型：`external_drain_install` / `inputs` / `product`.

记录准确型号、序列号及件数，并将实际本作业活动与覆盖所有消费作业及期间的有证据同基准寿命活动核对。制造只分配一次；保留真实制造、维护、更换及退役边界。匹配生命周期数据集须明确包含维护；否则需审查正确类型的维护角色。不得将维护质量或小时换成资产件数。 计算规则：owned_asset_normalize. 数量范围证据需求：尚需资产特定隐含负荷证据、全部消费方及期间活动、维护、更换、终止和有依据的剩余使用不确定性；不得整工具/作业分配、采用标准寿命或通用份额区间。

- 采集对象：每项实际自有可复用资产的归属份额
- 流属性/单位：Number of items / item
- 数量规则：实际归属交换数量分子除以实测 D
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_services`
- 来源：

#### 采集要求：实际完整承包支持服务事件 (`hired_support_service`)

过程／待建立交换的方向／类型：`external_drain_install` / `inputs` / `product`.

仅计数供应方定义且完整验收的真实服务事件，再应用有证据的本作业份额。保留准确供应方范围及设备包含项；租用资产不归自有资产。真实按小时合同保留实际小时并需审查 Duration 支持，不能改称事件。开挖与临时工程就绪不入本数量分子。 计算规则：hired_service_normalize. 数量范围证据需求：尚需真实合同单位、验收事件定义或小时、供应方制造、维护、燃料和用电边界及消费方份额。无通用事件/m；小时 Duration 支持仍未决。

- 采集对象：实际完整承包支持服务事件
- 流属性/单位：Number of items / item
- 数量规则：实际归属交换数量分子除以实测 D
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_services`
- 来源：

#### 采集要求：按实际材料退回的可用原状库存 (`usable_stock_returns`)

过程／待建立交换的方向／类型：`external_drain_install` / `outputs` / `product`.

称量退回库存或使用经验证的同 SKU 换算；关联原领料、可用原状状态及接收凭据。管材、密封圈、填料、润滑剂及包装分别退料。统一采用总领用与退料或净领用约定，同一退料不得扣两次。 计算规则：normalize_exchange. 数量范围证据需求：尚需逐退回 SKU 的实际接收、数量、状态及原领用约定，包括剩余填料与润滑剂平衡；无默认退料比例。

- 采集对象：按实际材料退回的可用原状库存
- 流属性/单位：Mass / kg
- 数量规则：实际归属交换数量分子除以实测 D
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：

#### 采集要求：按材料及接收方分列的干燥不可用残余 (`dry_nonusable_residuals`)

过程／待建立交换的方向／类型：`external_drain_install` / `outputs` / `waste`.

逐收集干物流称重，保留皮重、组成、来源池及接收票据。管材切余、包装和实际填料损失保持不同身份。留置填料及复用包装不是废物。 计算规则：normalize_exchange. 数量范围证据需求：尚需实际切割计划、包装损失、拒收或多余填料去向、收集和质量记录；无通用废物百分比或混合材料交换。

- 采集对象：按材料及接收方分列的干燥不可用残余
- 流属性/单位：Mass / kg
- 数量规则：实际归属交换数量分子除以实测 D
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residuals`
- 来源：

#### 采集要求：拆除的不可用不合格接头部件 (`rejected_joint_components`)

过程／待建立交换的方向／类型：`external_drain_install` / `outputs` / `waste`.

称量实际损坏、密封圈错位或漏水接头拆除件，或应用匹配 SKU 因子；关联原件、拆除及替换 ID、失败测试和接收方。无外部材料流出的重新就位是纠正事件，不是废物。退役管段不得入 D。 计算规则：normalize_exchange. 数量范围证据需求：尚需观察原因、组成及质量、更换关联和去向。已知密封圈错位风险不能确定缺陷率。

- 采集对象：拆除的不可用不合格接头部件
- 流属性/单位：Mass / kg
- 数量规则：实际归属交换数量分子除以实测 D
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residuals`
- 来源：`charlotte-plastics-manual`

#### 采集要求：按实际物流记录的捕集污染消耗品残余 (`contaminated_consumable_residuals`)

过程／待建立交换的方向／类型：`external_drain_install` / `outputs` / `waste`.

计量容器、擦拭物皮重及收集配方残留，保留组成、分类和接收方。核对涂敷、留置、捕集及释放组分池。真实接收条件决定废物分类，不预设危险属性或排放。 计算规则：normalize_exchange. 数量范围证据需求：尚需实际 SDS 及配方、容器及擦拭物滞留、残余质量特征和接收方要求；不支持通用 VOC 或危险比例。

- 采集对象：按实际物流记录的捕集污染消耗品残余
- 流属性/单位：Mass / kg
- 数量规则：实际归属交换数量分子除以实测 D
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residuals`
- 来源：

#### 采集要求：有证据的空气颗粒物材质及粒径组分 (`airborne_particulate`)

过程／待建立交换的方向／类型：`external_drain_install` / `outputs` / `elementary`.

通过监测或匹配实际切割、填料搬运或压实活动与控制的有效因子计量准确材质及粒径排放。明确受纳空气子分区。捕集粉尘为废物；不纳入开挖供应方排放或无法解释的质量差额。 计算规则：release_normalize. 数量范围证据需求：尚需组成及粒径分数、实际任务活动、湿化、封闭、捕集和匹配测量或因子；不得将总尘拆成 PVC/PM 或使用通用区间。

- 采集对象：有证据的空气颗粒物材质及粒径组分
- 流属性/单位：Mass / kg
- 数量规则：实际归属交换数量分子除以实测 D
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residuals`
- 来源：

#### 采集要求：向指定环境介质释放的其他有证据物种 (`other_evidenced_species_release`)

过程／待建立交换的方向／类型：`external_drain_install` / `outputs` / `elementary`.

仅实例化已识别化学物种和实际介质及子分区。实测质量或使用已验证组成、涂敷活动及匹配释放去向因子；核对留置膜、捕集残余和接收方移交。空气、水和土壤为不同交换；接收方废水不是基本流释放。 计算规则：release_normalize. 数量范围证据需求：尚需实际批准润滑剂或清洁剂 SDS、涂敷质量、物种、介质、控制及分配或因子证据。密封圈连接本身不能推定化学身份或排放量。

- 采集对象：向指定环境介质释放的其他有证据物种
- 流属性/单位：Mass / kg
- 数量规则：实际归属交换数量分子除以实测 D
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residuals`
- 来源：

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| external_drain_install | 完整室外排水安装及最终验收 | required | 选定室外密封圈支管范围 | 一个责任主体，仅记录阶段日志 | accepted_external_drain_connection |

### 过程：完整室外排水安装（`external_drain_install`）

条件角色按实际 SKU、物种、状态及接收方展开为零、一个或多个交换，各自计量核实。异质求和是诊断台账，不是一项交换身份。阶段就绪、几何和检查为观察项。所有数量关联同一最终验收作业及 D。

#### 输入

##### 产品流

###### 六英寸 DR35 密封圈连接 PVC 管（`gasketed_dr35_pipe`）

逐 SKU 记录收货和领用管材净质量，并追溯可用退料与最终留置管段。称重或采用已验证的供货长度净质量因子；管身、切割、铺设和插入长度与服务 D 分开。随管供应的内置密封圈归本部件。 计算规则：normalize_exchange. 数量范围证据需求：可比数量区间尚需准确密封圈管 SKU 的净重、承口及密封圈范围、切割计划、管件组合、废品和退料。14 ft 与 20 ft 密封圈管的 249.6 和 247.0 lb/100 ft 是近似运输数据，不是安装净质量因子或范围端点。

- 选定流：六英寸 DR35 密封圈连接 PVC 管
- 流属性/单位：Mass / kg
- 数量规则：实际归属交换数量分子除以实测 D
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`charlotte-dr35`; `charlotte-plastics-manual`

###### 实际批准的密封圈润滑剂配方（`approved_gasket_lubricant`）

按实际六英寸接头涂敷事件计量容器初末质量、皮重、可用退料和残留。识别实际配方；区分留置膜、捕集残余和有证据的排放。机械密封圈连接不增加底涂剂、溶剂胶或固化责任。 计算规则：normalize_exchange. 数量范围证据需求：尚需批准产品及 SDS、组成、涂敷质量、体积换算密度、洒漏及残留和实际去向与控制；未建立通用 kg/接头 或 kg/m 剂量。

- 选定流：实际批准的密封圈润滑剂配方
- 流属性/单位：Mass / kg
- 数量规则：实际归属交换数量分子除以实测 D
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`charlotte-plastics-manual`

###### 实际安装活动的外部供水（`supplied_water`）

计量外部取水，或将实测来源体积乘以可追溯的温度相关密度。分列仅用水介质的测试、清洁和获准调湿，并记录批次复用和留存状态。内部复用不是取水；骨料或配方已有水分不是额外供水。 计算规则：normalize_exchange. 数量范围证据需求：尚需来源及水质、实际取水、内部容积及水头几何、兼容的水头、保持及排气准则、复测、漏水、清洁、复用和填料调湿。无固定水量/路径 m 或注水排水比。

- 选定流：实际安装活动的外部供水
- 流属性/单位：Mass / kg
- 数量规则：实际归属交换数量分子除以实测 D
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：`charlotte-plastics-manual`; `charlotte-dr35`

###### 外部安装用电（`installation_electricity`）

采用实际供电计量区间 kWh，按完整作业活动记录分配。在声明供电边界内将电池补电及充电损失分配一次；电池运行不重复同一电量。手工作业不预设用电；内燃设备需路线审查。 计算规则：normalize_exchange. 数量范围证据需求：尚需实际工具、泵及夯实机电源、计量区间、共享负荷与补电分配及效率边界。额定功率乘未记录时间不能形成区间。准确 Energy 支持仍未核实。

- 选定流：外部安装用电
- 流属性/单位：Energy / kWh
- 数量规则：实际归属交换数量分子除以实测 D
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已验收完全覆土的密封圈连接室外建筑污水排水接管（`accepted_external_drain_connection`）

使用 cp_acceptance 和 reference_path。仅在可视接头水试、隐蔽批准、完整回填与分层压实及约定裸地标高确认后，最终签署埋地支管验收才允许此输出。待覆盖或失败工程保持待验状态。 计算规则：normalize_exchange. 数量范围证据需求：尚需最终测量端点、路径 ID、实际长度及全部验收关口；1 m 是归一化约定，不是经验产率或单位路径材料耗用量区间。

- 选定流：已验收完全覆土的密封圈连接室外建筑污水排水接管
- 流属性/单位：Length / m
- 数量规则：1 m
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_acceptance`
- 来源：`charlotte-dr35`; `charlotte-plastics-manual`; `charlotte-underground`; `seattle-side-sewer-notes-2024`

##### 废物流

###### 移交授权接收方的收集使用水（`used_water_to_recipient`）

计量移交体积及实际密度或称量物流；保留来源、复用、批次和留存 ID、水质及接收凭据。这是技术圈废物，同一物流不同时记为直接环境释放。测试注水及内部复用不是排水。 计算规则：normalize_exchange. 数量范围证据需求：尚需实际收集及移交、许可、水质、密度和留存及复用核对。新鲜供水不自动等于废水。

- 选定流：移交授权接收方的收集使用水
- 流属性/单位：Mass / kg
- 数量规则：实际归属交换数量分子除以实测 D
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：`charlotte-plastics-manual`

##### 基本流

###### 进入实际空气子分区的有证据水蒸气（`water_to_air`）

实测蒸发，或使用经验证且匹配暴露条件的水平衡或因子，同时计量留存及接收方路径。核对骨料和润滑剂中的来源水分。未收集平衡差额是缺口；不得强制采用未指定空气身份。 计算规则：release_normalize. 数量范围证据需求：尚需测试、清洁或调湿的实际暴露面积、时间和条件、有效蒸发方法及来源池分配；无默认蒸发比例。

- 选定流：进入实际空气子分区的有证据水蒸气
- 流属性/单位：Mass / kg
- 数量规则：实际归属交换数量分子除以实测 D
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| single_output | external_drain_install | 仅有一项预期验收支管服务；退料及残余输出不是预期共产品。将实际纠正、更换、追加水试及不合格铺填压实纠正资源留在本验收作业一次。失败及待验工程不是验收输出。 |  |
| return_convention | usable_stock_returns | 声明总保管流及真实退料，或将净资源消耗与这些流核对。不同时采用净领用再扣同一退料。不因废物移交或退料默认获得回收及避免产品信用。 |  |
| owned_asset_shares | owned_equipment_attribution | 按实际同基准作业与寿命活动分配准确资产制造，列全消费方及期间。份额在声明历史及剩余使用基准上合计为 1。维护更换归有证据受益期间或因果作业；须由匹配生命周期数据集负责，否则需审查正确类型独立角色。已终止资产用闭合历史；在役剩余使用需有依据估计及不确定性。未知维护及终止阻止归属最终化。 |  |
| resource_nonoverlap | owned_equipment_attribution; hired_support_service; installation_electricity; incoming_packaging | 供应方服务负责租用资产负荷；操作方自有资产另列。制造、每次维护更换退役事件及期间份额仅核对一次；不再年度化已按寿命分配负荷，不将原资产与替换资产同时整件分配。用电补电仅计一次。保留已含包装实体保管而不重复上游制造。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_materials | external_drain_install | 材料、SKU、阶段及包装 | 实际测量及可追溯事件记录 | 货批；SKU及批号规格；部件或阶段 ID；收货、领用、退回、库存；质量及皮重；净质量因子来源；填料含水率及密度；包装负责人 | 称重或用经验证的同 SKU 净质量因子。核对实际管材、管件、密封圈、润滑剂及消耗品数量。分列填料垫层、腋角、初始覆盖及上部阶段与库存；区分包装实体池和上游负荷负责人。 汇总数量：实际归属外部数量 / D；内部移动仅记台账 | kg | 每次保管或铺填事件 | 收货至最终库存及残余关闭 | 一个作业及全部选定货批和铺填阶段 | 每参考流 | 校准、票据、SKU 净质量证据、阶段铺填及供应方边界 |
| cp_water | external_drain_install | 外部、留存、复用及移交水 | 实际测量及可追溯事件记录 | 来源水质；体积或计量区间；密度及温度；批次复用 ID；测试水头、保持及排气；留存库存；接收方；骨料及配方水分 | 分别计量外部供水和各输出或留存批次。称重或用实际密度换算；保留内部复用及填料、润滑剂组分水。记录实际仅用水介质的测试、复测、清洁及批准调湿；不替平衡差额指定去向。 汇总数量：逐实际外部投入或输出质量 / D；排除内部复用 | kg | 每次取水、测试或移交事件 | 首次用水至最终留存及接收方关闭 | 一个作业及全部测试和铺填用水批次 | 每参考流 | 计量校准、批次日志、水质密度证据及接收凭据 |
| cp_energy | external_drain_install | 外部工具、泵、夯实机及补电能量 | 实际测量及可追溯事件记录 | 资产及阶段；来源供应方；初末区间 kWh；电池补电及活动份额；充电器边界；全部共享用户 | 读取校准供电计量。以匹配的完整活动及补电记录分配共享负荷和电池补电；只在声明供电边界内计入充电损失。不重复电池运行和补电，不推定手工作业能耗。内燃设备需路线审查。 汇总数量：实际归属外部 kWh / D | kWh | 每个供电区间及补电事件 | 安装至纠正及最终压实 | 一个作业及完整共享计量区间 | 每参考流 | 计量校准、补电份额核对、手工及无用电证据 |
| cp_services | external_drain_install | 自有资产份额及真实租用事件 | 实际测量及可追溯事件记录 | 权属；型号序列号及件数；全部消费方作业及期间；实际与寿命同基准活动；制造、维护、更换及终止；供应方单位及事件或小时；上游就绪 ID | 索引制造购入、全部服务期间、实际维护更换和退役。记录匹配生命周期数据集包含项；否则审查正确类型的维护角色。仅计完整验收的供应方事件；小时保留真实数量及支持缺口。关联独立负责的开挖及临时工程就绪而不导入其负荷。 汇总数量：资产件数 × 实际作业活动/寿命活动 / D；实际验收事件数 × 作业份额 / D | item | 每次资产、服务及生命周期事件 | 完整有证据资产服务史及作业日期 | 本作业及资产分母内所有消费作业及期间 | 每参考流 | 资产期间登记、合同验收、生命周期数据集边界、剩余使用不确定性 |
| cp_residuals | external_drain_install | 材料废物及有证据物种排放 | 实际测量及可追溯事件记录 | 物流、材料、物种、粒径及状态；总质量、皮重及组成；来源、阶段及原新 ID；接收方、介质及子分区；实测释放或因子、活动与控制 | 按身份及接收方分别称量真实输出流。追溯拆除接头与更换事件。排放仅用特定测量，或经验证且匹配物种、材质及控制的因子乘实际活动计量；区分捕集废物、留置组分和直接释放。 汇总数量：逐实际废物或物种数量 / D；不自动将差额指定为空气排放 | kg | 每次输出、不合格或释放事件 | 收货至最终纠正及移交 | 一个作业，仅实际安装方负责的释放 | 每参考流 | 皮重及校准、移交票据、组成、因子适用性及不确定性 |
| cp_acceptance | external_drain_install | 最终验收埋地输送路径 | 实际测量及可追溯事件记录 | 已提供端点基准及授权；沟槽就绪负责人；最终路径、管段 ID 及长度；管件检修区分；可视接头水试复测；隐蔽批准；填料、分层、压实及标高证据；签名日期 | 按 reference_path 测量核对最终唯一输送中心线。记录沟槽及端点就绪、密封圈铺管及腋角、可视接头兼容水试和纠正、胜任人员隐蔽批准，随后全覆土、分层压实及约定裸地标高，再签署最终埋地支管验收。失败或仅待覆盖工程不贡献 D。 汇总数量：最终验收路径 D / D = 1 m 参考流 | m | 每次检查纠正及最终测量移交 | 沟槽就绪交接至最终签署验收 | 一个实际室外出水口至接收端路径集合 | 每参考流 | 竣工测量、测试批准时序、全回填压实记录及最终签名 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_exchange | all inventory rows | 实际归属外部数量除以 D，保留其数量分子单位及换算证据。最终验收路径 D / D 得到 1 m 参考流。不重复内部转移或已含供应投入。 | 实际外部数量；D；所关联采集协议 | 每参考流数量 |  |
| owned_asset_normalize | owned_equipment_attribution | q_asset_per_m = asset_count × job_activity / lifetime_activity / D。全部消费方用有证据同活动基准；制造分配一次，维护更换按有证据受益期间或因果作业及明确数据集负责人分配。 | asset_count；job_activity；lifetime_activity；D；cp_services | 每参考流归属 item |  |
| hired_service_normalize | hired_support_service | q_service_per_m = true_contract_quantity × job_share / D。此处 item 仅用于真实完整定义且验收的事件。真实小时合同需审查 Duration 支持；保留小时和缺口。 | true_contract_quantity；job_share；D；cp_services | 每参考流真实服务数量 |  |
| fill_diagnostic | imported_approved_fill | 实测阶段体积分开。优先按阶段归属称重填料；否则质量 = 实际阶段体积 × 已验证场址状态堆积密度，并声明水分约定。适用时扣实际管道外形占据的体积；各铺填阶段、退料、库存和损失仅核对一次。 | 阶段几何；票据质量；密度；含水率；cp_materials；cp_acceptance | normalize_exchange 前的阶段质量诊断 |  |
| release_normalize | airborne_particulate; water_to_air; other_evidenced_species_release | 采用实际实测物种质量 / D，或实际匹配活动 × 已验证物种特定释放因子 / D。识别真实介质、子分区及控制；未知分配或不匹配因子保持缺口。 | 物种质量或活动及因子；D；cp_residuals；cp_water | 每参考流物种 kg |  |
| source_pool_balance | material and constituent ledgers | 期初库存 + 收货 = 期末库存 + 可用退料 + 安装留置 + 捕集或接收方废物 + 有证据环境释放，单位兼容并记录不确定性。分别核对实体材料及组分池，包括包装保管、骨料水分及配方水；不从差额自动推定去向。 | 库存；收货；留置；退料；废物；释放；cp_materials；cp_water；cp_residuals | 诊断实体池平衡 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| dq_traceability | all inventory rows | 保留事件日期、节点权责、实际 SKU 状态接收方、仪器校准、原始数量分子单位和匹配换算来源。未知发生情况为未知，不是零。分别维护实体及组分池并记录不确定性。 | cp_materials；cp_water；cp_energy；cp_services；cp_residuals；cp_acceptance |
| dq_public_evidence | all inventory rows | 厂商运输点不是净消耗或区间。工程垫层压实建议及 Seattle 示例需按实际场址设计调整；不建立默认密度、水比、废品率、润滑剂剂量、寿命或排放拆分。 | charlotte-dr35; charlotte-plastics-manual; seattle-side-sewer-notes-2024 |
| range_gasketed_dr35_pipe | gasketed_dr35_pipe | 可比数量区间尚需准确密封圈管 SKU 的净重、承口及密封圈范围、切割计划、管件组合、废品和退料。14 ft 与 20 ft 密封圈管的 249.6 和 247.0 lb/100 ft 是近似运输数据，不是安装净质量因子或范围端点。 | cp_materials |
| range_gasketed_fittings_and_interfaces | gasketed_fittings_and_interfaces | 形成管件 kg/路径 m 区间前，需端点兼容性及批准、竣工管件与检修 BOM、SKU 净重及密封圈边界和实际更换记录。 | cp_materials |
| range_replacement_gaskets | replacement_gaskets | 尚需实际配套尺寸及材质、净质量、追加领用件数、更换原因与去向。符合 ASTM F477 不能确定弹性体身份或质量。 | cp_materials |
| range_imported_approved_fill | imported_approved_fill | 尚需项目土壤、荷载及覆土设计、阶段几何、材料等级、称重量、含水率及密度基准、损失和铺填验收。一般 4 in 垫层、岩石上 6 in、6 in 分层和 85–95% 压实指导有条件适用，不是清单区间或场址合规证据。 | cp_materials |
| range_approved_gasket_lubricant | approved_gasket_lubricant | 尚需批准产品及 SDS、组成、涂敷质量、体积换算密度、洒漏及残留和实际去向与控制；未建立通用 kg/接头 或 kg/m 剂量。 | cp_materials |
| range_cleaning_and_protection_consumables | cleaning_and_protection_consumables | 尚需实际对象及频次、产品剂量或用品质量与组成、库存和捕集残余；无通用清洁 kg/m 区间。 | cp_materials |
| range_incoming_packaging | incoming_packaging | 尚需逐货批实际包装材质及重量和供应方边界；散装填料无包装也需证据。包装废物不能代替缺失的入场来源池。 | cp_materials |
| range_supplied_water | supplied_water | 尚需来源及水质、实际取水、内部容积及水头几何、兼容的水头、保持及排气准则、复测、漏水、清洁、复用和填料调湿。无固定水量/路径 m 或注水排水比。 | cp_water |
| range_installation_electricity | installation_electricity | 尚需实际工具、泵及夯实机电源、计量区间、共享负荷与补电分配及效率边界。额定功率乘未记录时间不能形成区间。准确 Energy 支持仍未核实。 | cp_energy |
| range_owned_equipment_attribution | owned_equipment_attribution | 尚需资产特定隐含负荷证据、全部消费方及期间活动、维护、更换、终止和有依据的剩余使用不确定性；不得整工具/作业分配、采用标准寿命或通用份额区间。 | cp_services |
| range_hired_support_service | hired_support_service | 尚需真实合同单位、验收事件定义或小时、供应方制造、维护、燃料和用电边界及消费方份额。无通用事件/m；小时 Duration 支持仍未决。 | cp_services |
| range_accepted_external_drain_connection | accepted_external_drain_connection | 尚需最终测量端点、路径 ID、实际长度及全部验收关口；1 m 是归一化约定，不是经验产率或单位路径材料耗用量区间。 | cp_acceptance |
| range_usable_stock_returns | usable_stock_returns | 尚需逐退回 SKU 的实际接收、数量、状态及原领用约定，包括剩余填料与润滑剂平衡；无默认退料比例。 | cp_materials |
| range_dry_nonusable_residuals | dry_nonusable_residuals | 尚需实际切割计划、包装损失、拒收或多余填料去向、收集和质量记录；无通用废物百分比或混合材料交换。 | cp_residuals |
| range_rejected_joint_components | rejected_joint_components | 尚需观察原因、组成及质量、更换关联和去向。已知密封圈错位风险不能确定缺陷率。 | cp_residuals |
| range_contaminated_consumable_residuals | contaminated_consumable_residuals | 尚需实际 SDS 及配方、容器及擦拭物滞留、残余质量特征和接收方要求；不支持通用 VOC 或危险比例。 | cp_residuals |
| range_used_water_to_recipient | used_water_to_recipient | 尚需实际收集及移交、许可、水质、密度和留存及复用核对。新鲜供水不自动等于废水。 | cp_water |
| range_airborne_particulate | airborne_particulate | 尚需组成及粒径分数、实际任务活动、湿化、封闭、捕集和匹配测量或因子；不得将总尘拆成 PVC/PM 或使用通用区间。 | cp_residuals |
| range_water_to_air | water_to_air | 尚需测试、清洁或调湿的实际暴露面积、时间和条件、有效蒸发方法及来源池分配；无默认蒸发比例。 | cp_water |
| range_other_evidenced_species_release | other_evidenced_species_release | 尚需实际批准润滑剂或清洁剂 SDS、涂敷质量、物种、介质、控制及分配或因子证据。密封圈连接本身不能推定化学身份或排放量。 | cp_residuals |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_scope_gate | reference product | 要求声明室外端点、批准六英寸密封圈 DR35 规格及沟槽临时工程负责人。检查可视接头水试和隐蔽批准先于全覆土；全覆土、压实、裸地标高及最终签名先于验收输出。不应用空气气体试验或溶剂路线固化条件。 |  |
| validate_reference | accepted_external_drain_connection | 按 reference_path 和 cp_acceptance 核实 D > 0。管件路径计一次，不含承插重叠或清扫口检修立管；拒绝以总切长替代、重复测试及退役失败管段。全部卡数量分子用同一验收作业 D。 |  |
| validate_rework | rejected_joint_components; external_drain_install | 将损坏、错位、漏水或密封圈移位接头及填料标高失败事件关联原资源领用、纠正、重新就位或更换、测试重批和最终路径阶段 ID。真实可用退料、不可用废物及捕集残余按接收方分类；无输出的内部纠正只是事件。保留纠正负荷并将失败工程排除出 D。 |  |
| validate_quantities | all inventory rows | 要求实际 SKU、状态及接收方实例、兼容单位、所关联节点负责协议、原始数量分子及换算证据。核对填料阶段及内置替换密封圈仅计一次；水批次组分和留存、接收方、环境状态互斥。不将差额变为粉尘、蒸发或化学释放。 |  |
| validate_assets | owned_equipment_attribution; hired_support_service | 审查全部消费方期间、生命周期事件及维护数据集边界、准确归属与不确定性。防止租用自有、制造更换及补电使用重复。未支持的小时服务及未知剩余寿命终止保持为归属最终化的明确阻碍。 |  |
| validate_identity_evidence | all inventory rows | 最终下游交换需核实具体身份和属性单位兼容性。候选名称不是绑定。使用相关交换前解决用电准确 Energy 支持及真实小时服务 Duration 支持。保留各角色范围需求；近似运输点及设计示例不是实测数量区间或项目批准。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 匹配声明起点交接和完整最终关口的室外六英寸 DR35 密封圈污水支管安装；保持本服务边界的下游 process/lifecyclemodel 构建 |
| excluded_use | 室内管道、地方主干及完整土建资产、开挖道路路面范围、其他管材连接路线、未完成待覆盖工程、运营污水运输处理或设计认证 |
| required_metadata | 作业场址地理日期；端点基准及授权；沟槽临时工程负责人；准确管材管件密封圈 BOM；填料阶段设计土壤荷载；测试隐蔽批准；完整压实标高最终签名；D 及唯一路径 ID；供应方包装交付资产期间边界 |
| required_quality_disclosure | 实际计量覆盖及不确定性；遗漏未决发生情况、身份支持和角色特定范围缺口；因子适用性；水及来源池闭合；资源归属及维护剩余使用不确定性；不得将候选身份声明为最终绑定 |
| update_trigger | 管材接头填料或设备路线变更；实际设计场址关口变更；新增实测、供应方或身份依据；维护寿命边界或指导变更 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| cpc3-current | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 现行分类纳入排除：PDF p294 54622 室外排水及 54621 室内排除；p286 54251 地方主干 |
| charlotte-dr35 | handbook | https://www.charlottepipe.com/uploads/documents/technical/FO-SUB-PVC-DR-35.pdf | p1（4-7-26）：DR35 密封圈规格、随件密封圈、仅用水介质的测试及近似运输点 |
| charlotte-plastics-manual | handbook | https://www.charlottepipe.com/uploads/documents/technical/TM-PL.pdf | PDF pp70–73，2026年6月5日：密封圈装配、有条件地下支撑回填及可视接头试验批准；不引用相邻 CPVC 特定规则 |
| charlotte-underground | handbook | https://www.charlottepipe.com/uploads/documents/technical/VE_PVCUnderground2015.pdf | pp1–2：实际垫层腋角回填支撑和压实责任；不采用 Schedule40 示例数量 |
| seattle-side-sewer-notes-2024 | official_guidance | https://www.seattle.gov/documents/Departments/SPU/Engineering/DSG/2024/3GSideSewers.pdf | 2024年2月附录3G示例：D3034 SDR35 密封圈支管选项、覆盖前批准及竣工记录；须由工程师调整 |
