---
pcr_id: pcr.constructions-and-construction-services.construction-services.hardwired-normally-closed-zone-burglar-alarm-installation-services
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 常闭防区有线入侵报警系统安装服务

## 1. 范围与适用性

本类别涵盖施工现场首次安装与调试的单主机有线入侵报警系统：常闭探测防区、独立全局防拆回路、有线键盘、兼容门磁/探测器、外部声响器及永久可充电备用电池。不提供通信监控接口。采购产出为完整验收安装，须披露实际布局与接口。

排除无线、混合、联网或可寻址系统；火灾/烟雾及其他生命安全报警；摄像与门禁；远程信号传输、监控及电信服务；定期维护；新建上游配电；交付后运行。CPC 54613 覆盖更广的入侵报警安装，排除监控/维护，因此拟议分类关系仅代表其较窄子集（`unsd-cpc3-explanatory-notes`）。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.hardwired-normally-closed-zone-burglar-alarm-installation-services |
| classification_refs | CPC 3.0 54613；拟议较窄范围 |
| covered_products | 披露配置的常闭防区/全局防拆有线入侵报警系统首次完整验收安装 |
| excluded_products | 第 1 节排除的技术及服务；未完成系统及单独制造的部件 |
| representative_product | Texecom Veritas8/R8 展示该结构；以实际兼容型号说明与设计为准，不强制品牌 |
| production_route | 收货并识别供应物；确认隔离后的既有接口；安装布线；安装永久电池；配置；测试入侵响应与用户控制；纠正复测；恢复正常状态；交付 |
| market_state | 安装方/用户交接时已现场集成、配置并验收的安装服务 |

制造商安装手册支持所选路线与接口角色。其市电/电池上电描述存在差异，不据此规定通用操作顺序：合格安装人员应采用适用的经批准型号说明。型号电缆/电流/容量规格属于设计限定信息，并非每次安装清单数量（`texecom-veritas-installation`）。

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 已验收的完整常闭防区有线入侵报警系统安装与调试服务 |
| How much | 一个完整验收安装；D 在归一化前独立计数实际同配置验收安装 |
| How well | 披露设计与物料清单；启用防区、声响、防拆及设防撤防检查成功；纠正闭环并恢复正常状态；签署用户交付 |
| How long or cycle | 从收货至验收的一个安装周期，包含失败与复测；不代表运行年或寿命收益 |
| reference_flow_link | `accepted_installation` |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 已验收的完整常闭防区有线入侵报警系统安装与调试服务 |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | 主机型号; 常闭防区及启用/停用防区表; 独立全局防拆回路; 键盘/门磁/PIR/声响器准确物料清单; 永久备用电池的化学体系/型号/容量及供货包含关系; 既有市电接口与安装方馈线责任; 电缆/线管线槽; 编程与用户控制; 步行/声响/防拆/设防撤防/正常状态测试结果; 安装日期与签署验收记录 |

前景数据包须声明这些限定信息。合并 D 前须论证配置等价；存在实质设计差异时分别建包。参考服务须独立计数，不存在质量等价方程。共用资源生命周期期间独立于安装周期。

## 4. 计量与单位规则

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| `m_count` | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | 通过 cp_acceptance 计数同配置完整验收工单；实际分子除以 D 前要求 D > 0。 |
| `m_mass` | all mass inventory rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 输入通过 cp_materials、退货/废物/释放输出通过 cp_releases，使用经校准的秤测量净数量，或使用可追溯且匹配 SKU 的数量/长度转质量因子。不得将异质总量等同于单一交换。 |
| `m_energy` | installation_electricity | Energy | kWh | 通过 cp_energy 保留外部实测电量 kWh。电池 Ah、功率额定值、测试时长及 NCV 均不得代替实际能量。 |
| `m_service` | owned_equipment_attribution; hired_support_service | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | 通过 cp_services 仅计量准确资产的生命周期份额或真实完整合同事件。按小时租用须有实际 Duration 支持并复核单位。 |
| `count_unit_alias` | 存在时的计数交换 | Count | item | 本 PCR 的显示别名 item 表示已核实的物品数量单位组参考单位 Item(s)，系数为 1。具体数据集须保留实际参考单位身份；此书写别名不建立质量、面积或服务之间的等价关系。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 物料已收货识别；既有安装场所与隔离后的市电/接地接口已实际确认并记录 |
| starting_condition_role | 披露的既有就绪条件；不计为新产品输入或避免负荷 |
| product_classification_scope | 仅为披露的常闭防区有线入侵报警安装子集 |
| recursive_input_rule | 同类采购前序安装须记录实际交付状态与有界上游责任。范围重叠未解决时，须先核对上游与前景资源归属，才能定稿 LCA 数据包。实体安装/测试验收证据须单独保留；数据归属缺口既不能证明实体拒收，也不能把验收数量 D 设为零 |
| upstream_dataset_requirement | 匹配制造/到场供货数据包，明确入场运输、包装与附件包含关系；保留实物可追溯性 |
| disclosure | 实际场址/日期/设计/接口责任、供货、测试纠正记录、交接、上游范围、资产/期间及剩余证据缺口 |

### 边界规则

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| b_scope | install_accept | 承担收货、安装固定、布线接线、永久电池安装、编程、入侵报警测试、纠正、复测与用户交付。主机、现场设备、电池、线路及永久附件分别保留输入角色。不包含消防或生命安全方法及远程监控。 | `texecom-veritas-installation` |
| b_upstream | all material inputs | 制造及实际入场运输须有匹配的供应方数据包。已包含的包装和附件只计一次。即使包装制造负荷已在上游包含，也须保留入场包装实物账；仅对上游未包含的贡献另加包装负荷。 |  |
| b_readiness | starting interface | 记录已确认的既有安装表面及隔离后的市电/接地接口。就绪条件须披露，不虚构为采购输入，也不给予抵扣。采购的同类前序安装须明确实际交付状态及上游范围；资源重叠未解决时不得定稿 LCA 数据包。D 依据实际实体调试及签署交付记录独立确定，不以数据齐备性决定；同一实体安装不得重复计数。 |  |
| b_rework | install_accept | 防区响应失败、防拆回路开路、声响器故障或设防撤防失败均使安装处于未验收状态。纠正与复测关联至 install_accept 和原工单。拆除物须按实际记录分为可用退货、回收/废物外送或留在过程内修复；未完成或失败系统不得计入 accepted_installation。 | `texecom-veritas-installation` |
| b_assets | owned_equipment_attribution; hired_support_service | 按型号/序列号识别安装方自有工具、测试仪、外部充电器及登高设备，列明全部使用工单/节点与期间。资源生命周期包从购置/制造覆盖服役、维护/更换至退役/终止。租用服务提供方承担其设备生命周期；核对前景用电的包含关系，防止重复归属。 |  |
| b_gate | accepted_installation | 完成纠正、复测并恢复约定正常状态后，以签署完整安装验收及用户控制交接为终点。排除后续运行用电、维护、监控及新建上游配电。 | `texecom-veritas-installation` |
| `boundary_atomic_completion` | 所有过程 | 本节的采集要求是必须执行的采集与适用性指令，不是聚合清单交换。完成前景数据集前，必须为每一种实际产品、废物流、物质及环境子区室建立独立原子流卡／交换。保留全部实际事件、上游负荷、退回及原生单位；所链接公式应按每个兼容身份分别执行。环境资源提取记为输入，环境释放记为输出。不得相加不同原生单位、用一个 UUID 代表整个采集池、将缺记录解释为零，或与已有具体卡重复计入。保留宿主的文件性接口仅传递状态，不形成新采购资产。适用成员未明确或未有证据证明不存在时，定量清单仍不完整；非强制筛查提示不能补造数量或化学组成。 |  |

### 条件性清单补全要求

以下标识符表示采集池或文件性状态台账。一个池可能有零个、一个或多个实际成员。须依据真实记录判断适用性，并为每个成员保留原有数量方法和采集协议；只有兼容的数量才能共同核对。下列原有可选筛查区间仅作为暂定复核提示，不得强加于不同材料或混合采集池。

#### 采集要求：兼容现场设备 (`field_alarm_devices`)

过程／待建立交换的方向／类型：`install_accept` / `inputs` / `product`.

将实际键盘、门磁、PIR、外部声响器/闪灯或内部扬声器按各 SKU 展开交换，记录所供附件；排除下列单独记录的电池。 须有准确物料清单和匹配质量记录；混合设备总量不能提供共同身份或范围。

- 采集对象：兼容现场设备
- 流属性/单位：Mass / kg
- 数量规则：各设备 SKU 实际归属供应净质量 / D
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_materials`
- 来源：`texecom-veritas-installation`

#### 采集要求：报警线路与供应馈线 (`alarm_cable`)

过程／待建立交换的方向／类型：`install_accept` / `inputs` / `product`.

按线段、导体与绝缘分别记录实际防区、防拆、键盘、声响器电缆 SKU 及安装方供应的市电馈线。既有上游线路属于就绪条件。 须有实际测量长度及匹配线密度因子或称重；设计电缆限值不构成清单范围。

- 采集对象：报警线路与供应馈线
- 流属性/单位：Mass / kg
- 数量规则：按 SKU 实际归属供应电缆净质量 / D
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_materials`
- 来源：`texecom-veritas-installation`

#### 采集要求：永久固定与线管线槽 (`fixings_and_containment`)

过程／待建立交换的方向／类型：`install_accept` / `inputs` / `product`.

展开实际固定件、线管线槽、密封接头、标签及附件，排除主机/设备数据包已含部分；保留材料和 SKU 区别。 须有实际领用、安装数量、匹配质量及上游包含记录。

- 采集对象：永久固定与线管线槽
- 流属性/单位：Mass / kg
- 数量规则：按 SKU 实际归属供应附件净质量 / D
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_materials`
- 来源：`texecom-veritas-installation`

#### 采集要求：接收包装实物账 (`incoming_packaging`)

过程／待建立交换的方向／类型：`install_accept` / `inputs` / `product`.

按批次、材料及实际包装 SKU 分别记录入场包装。即使其制造已由上游供货承担，也须保留实物输入及废物/退回路径。 须有批次称重及供应方包装包含信息；不得重复制造负荷。

- 采集对象：接收包装实物账
- 流属性/单位：Mass / kg
- 数量规则：按材料实际归属接收包装净质量 / D
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_materials`

#### 采集要求：安装方自有可重复使用资源 (`owned_equipment_attribution`)

过程／待建立交换的方向／类型：`install_accept` / `inputs` / `product`.

每项实际手动/电动工具、外部充电器、电气测试仪与登高资产须有制造商/型号/序列号身份。纳入同一资源生命周期包的全部使用工单/节点和期间。 须有资源生命周期活动、其他使用者及剩余使用证据；不得虚构寿命范围。

- 采集对象：安装方自有可重复使用资源
- 流属性/单位：Number of items / item
- 数量规则：实际有证据资产份额 a_rj / D item
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_services`

#### 采集要求：采购的完整支持事件 (`hired_support_service`)

过程／待建立交换的方向／类型：`install_accept` / `inputs` / `product`.

按提供方与配置展开每笔真实完整运输、登高、测试或支持合同事件。提供方设备生命周期留在服务数据包内，核实能源包含关系。按小时租用须复核 Duration 支持。 任何数量范围须先有实际合同参考单位、事件数量、活动及包含证据。

- 采集对象：采购的完整支持事件
- 流属性/单位：Number of items / item
- 数量规则：真实完整合同事件实际归属数量 / D
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_services`

#### 采集要求：移出保管边界的可用产品退货 (`unused_product_return`)

过程／待建立交换的方向／类型：`install_accept` / `outputs` / `product`.

移出安装方保管边界的每项实际未改变可用部件/材料须保留原 SKU、供货身份、收货/退回事件与接收方；不产生避免生产抵扣。 须有事件关联的退货称重与接收确认；退货记录缺失不证明没有退货。

- 采集对象：移出保管边界的可用产品退货
- 流属性/单位：Mass / kg
- 数量规则：按 SKU 实际归属可用退货净质量 / D
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_releases`

#### 采集要求：安装废物物流 (`installation_waste`)

过程／待建立交换的方向／类型：`install_accept` / `outputs` / `waste`.

按材料、物态、危险性及获授权接收方展开实际包装、边角料及拆除故障部件，有发生时包括电子/电池废弃物。将领用与返工事件关联 install_accept；混合废物不是具体身份。 须有废物票据、状态/危险性及去向证据；不设通用废物比例。

- 采集对象：安装废物物流
- 流属性/单位：Mass / kg
- 数量规则：各已识别物流实际归属废物净质量 / D
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_releases`

#### 采集要求：安装钻孔释放颗粒物 (`airborne_particulate`)

过程／待建立交换的方向／类型：`install_accept` / `outputs` / `elementary`.

仅记录实际释放至指定空气环境介质的已识别物种及粒径组分；区分送入废物路径的捕集粉尘与原位保留基材。 须有实际钻孔/捕集活动、物种/粒径/介质及实测或有依据的释放证据；不得将全部不明质量计为粉尘。

- 采集对象：安装钻孔释放颗粒物
- 流属性/单位：Mass / kg
- 数量规则：实际归属已识别空气颗粒物质量 / D
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_releases`

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `install_accept` | 入侵报警系统集成、调试与验收 | required | 本类别声明范围内所有安装 | 承担部件集成、测试、纠正与最终交付；修复/复测仍在本节点内；退货与废物保留原始事件关联 | `accepted_installation`；独立测得 D |

一个节点承担完整安装方责任，不虚构阶段转移交换。条件卡只有在活动/实物证据确定存在或不存在后，才展开为零、一个或多个实际交换；记录缺失不得补零。下列数量采用同一实际工单/配置、时间范围与正的 D。

### 过程：入侵报警系统集成、调试与验收（`install_accept`）

#### 输入

##### 产品流

###### 供应的报警主机组件（`control_panel`）

现场集成前接收的实际出厂控制器、外壳及变压器，用于常闭防区及独立全局防拆。保留准确型号及包含部件。 数量范围须先有匹配 SKU 净质量及供货包含关系证据。

- 选定流：供应的报警主机组件
- 流属性/单位：Mass / kg
- 数量规则：实际归属供应主机净质量 / D
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_materials`
- 来源：`texecom-veritas-installation`

###### 永久备用电池（`permanent_batteries`）

逐项记录主机及任何自激式声响器中的实际可充电备用电池，包括化学体系、型号、容量及供货包含关系。安装电池属于永久产品部件。 须有具体化学体系 SKU 质量及包含关系证据；容量不能单独证明质量或寿命。

- 选定流：永久备用电池
- 流属性/单位：Mass / kg
- 数量规则：实际归属供应电池净质量 / D
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_materials`
- 来源：`texecom-veritas-installation`

###### 外部安装用电（`installation_electricity`）

计量交付前外部供应的工具、充电器、测试及调试用电，记录提供方、电压、场址与表计边界；保留 Energy / kWh。 须有实际表计/活动记录及匹配供电证据。准确 Energy 支持仍未决；功率、电池容量与 NCV 均不能代替。

- 选定流：外部安装用电
- 流属性/单位：Energy / kWh
- 数量规则：实际归属外部表计电量 kWh / D
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy`

##### 废物流

本路线未规定此类交换；若实际存在，须经范围复核后记录。

##### 基本流

本路线未规定此类交换；若实际存在，须经范围复核后记录。

#### 输出

##### 产品流

###### 已验收的完整常闭防区有线入侵报警系统安装与调试服务（`accepted_installation`）

在签署安装方交付时计数实际同配置完整验收入侵报警安装。测试/部件/进度不能代替完整产出。验收前须完成全部纠正与所需复测。 实际验收与配置等价证据确定计数产出；不推定通用运行寿命范围。

- 选定流：已验收的完整常闭防区有线入侵报警系统安装与调试服务
- 流属性/单位：Number of items / item
- 数量规则：1 item
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_acceptance`
- 来源：`texecom-veritas-installation`

##### 废物流

##### 基本流

## 7. 分配与联产品处理

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| a_jobs | install_accept | 不预设有意联产品。原工单失败、追加部件、劳动活动、测试与复测均由原工单承担。每笔实际退货或废物/回收外送须关联原始事件与接收方；不给予避免生产抵扣，也不得抹去失败作业。 |  |
| a_shared | owned_equipment_attribution; hired_support_service | 资源 r 对工单 j 的份额为 a_rj = A_rj / sum(A_rk)，k 覆盖同一完整资源生命周期包内所有受益工单/节点。使用有证据的统一因果物理活动基准；总量须为正且 sum(a_rj) = 1。记录设备身份、使用节点、服役期间、活动方法与所有权。不得预设产出数量等价或通用工具寿命。 |  |
| a_quantity | owned_equipment_attribution | 归属资产数量 = a_rj / D item；归属生命周期负荷 = B_r * a_rj / D。D 为实际验收的同配置完整安装数量。B_r、物理活动与安装数量须独立观测。剩余寿命不确定或使用者缺失时，不得声称分配完整。 |  |
| a_periods | all inventory rows | 分别索引采购/制造、每个服役/报告期间、维护、更换及退役/终止。将输入、资产、输出以及纠正/退货事件关联至带日期的工单与期间。记录各期间的分配决定及证据。更换按实际事件建立数据包，不得自动按每工单一整件新资产计入。全部使用者范围内每个资源和期间总量仅核对一次，保留未来使用/终止的未决证据。 |  |
| a_hire | hired_support_service; installation_electricity | 使用实际提供方服务引用及包含关系台账。不得另加提供方资本设备制造，也不得重复服务已含的燃料/电力。只有真实完整合同事件可按次计量；按小时合同须获得实际 Duration 支持并复核。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_acceptance` | `install_accept` | accepted_installation | 验收记录 | 工单；场址；主机型号；防区/防拆表；物料清单；市电接口；电池；编程；测试结果；纠正/复测；恢复正常状态；日期；用户签字；验收数量 D |逐次核查安装设计与合格签署测试/交付记录；独立计数同配置完整验收安装；汇总：每参考流；归一化前保留实际正的 D 与原始验收事件 | item | 每工单及验收/复测事件 | 实际收货至交接日期，包含纠正作业 | 实际场所及声明配置 | 每参考流 | 签署验收；合格测试；排除失败/未完成；配置等价证据 |
| `cp_materials` | `install_accept` | control_panel; field_alarm_devices; permanent_batteries; alarm_cable; fixings_and_containment; incoming_packaging | 物料保管记录 | 工单；批次；SKU；材料/状态；供货边界；已含附件/包装/运输；净质量；数量/长度；换算因子；库存；安装/退货/废物数量；原始事件；接收方 |使用经校准净称重或可追溯匹配 SKU 数量/长度转质量；检查供应方包含关系及事件关联实物记录；汇总：每参考流；按匹配 SKU 汇总归属实测分子后除以 D | kg | 每批次、领用及保管变动 | 全部安装日期及相关期初/期末库存日期 | 实际工单、供应方数据包与材料池 | 每参考流 | 校准；匹配因子出处；供货包含台账；平衡残差与容差 |
| `cp_energy` | `install_accept` | installation_electricity | 表计与活动记录 | 工单；提供方；电压；表计边界/编号；起止 kWh；工具/充电器/测试/调试活动；时间；全部共用者；包含台账 |读取交付前实际外部供应表计；按记录的因果活动分配共用实测电量，并核查采购服务包含关系；汇总：每参考流；实际归属 kWh 除以 D | kWh | 每计量区间及活动 | 全部贡献日期中的实际交付前区间 | 实际场所及使用的外部充电场址 | 每参考流 | 表计精度；区间完整性；共用活动核对；不以 Ah/功率/时长代替 |
| `cp_services` | `install_accept` | owned_equipment_attribution; hired_support_service | 资源与合同记录 | 资产制造商/型号/序列号；所有者；提供方；合同参考/单位；真实完整事件数量；全部使用工单/节点；物理活动；报告期间；制造/服役/维护/更换/退役数据包；B_r；剩余使用；能源包含关系 |检查特定序列号生命周期记录、完整使用者活动及实际提供方发票；区分自有资产与提供方拥有的服务，记录期间决定；汇总：每参考流；实际资产份额 a_rj 或真实归属完整事件数量除以 D | item | 每资产使用、合同事件、更换及分配期间闭合 | 完整资源生命周期包及每个实际服役/报告期间；披露剩余使用未决 | 全部受益工单/节点和期间，包括其他场所 | 每参考流 | 完整正活动总量；sum(a_rj) = 1；所有权/包含台账；实际更换/终止证据 |
| `cp_releases` | `install_accept` | unused_product_return; installation_waste; airborne_particulate | 退货废物及释放记录 | 原工单/事件；SKU/材料/物种；状态；危险性；粒径；空气环境介质；接收方；票据；净质量；钻孔/捕集活动；留存/捕集/释放数量；方法；不确定性；残差 |称量退货及分类废物并取得接收票据；对实际作业采用实测或有依据的物种/粒径/介质释放证据；核对实物保管，不从残差推定排放；汇总：每参考流；每项准确退货/废物/释放归属量除以 D | kg | 每次退货、废物转移及相关释放事件 | 直至交付的实际安装与纠正/复测日期 | 实际工单及具名接收场址/空气环境介质 | 每参考流 | 接收确认；校准质量；释放方法与不确定性；捕集区分；闭合缺口 |

### 计算规则

| rule_id | applies_to | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `c_actual` | all inventory rows | q_i = N_i / D；N_i 为逐项交换独立保留的实际归属分子；D 为独立计数的同配置验收安装。不得从预期参考输出反推 N_i。 | N_i; D; cp_acceptance; cp_materials; cp_energy; cp_services; cp_releases | q_i |  |
| `c_custody` | material custody pools | 期初库存 + 收货 = 安装留存材料 + 期末库存 + 可用退货 + 实际废物 + 已识别释放 + 残差。按准确来源池核对并报告残差/容差；混合质量诊断不等于单一流或服务质量。 | cp_materials; cp_releases; source pool; measured quantities | 实物核对 |  |
| `c_resource` | owned_equipment_attribution | a_rj = A_rj / sum(A_rk)；归属资产数量 = a_rj / D；归属负荷 = B_r * a_rj / D。纳入同一生命周期包全部使用者，活动总量为正且 sum(a_rj) = 1。 | A_rj; A_rk; B_r; D; cp_services | 资产份额与生命周期负荷 |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| `dq_identity` | all inventory rows | 保留准确型号/SKU/状态/提供方/接收方或物种/粒径/介质；最终绑定前核验具体流与兼容支持链。 | 供应方及接收方记录；核验身份支持 |
| `dq_measurement` | all measured quantities | 保留校准、因子匹配、原始实际分子、单位、覆盖范围及不确定性。不设通用部件重量、废物因子、工具寿命或服务能耗范围。 | 表计/秤记录；换算出处；匹配数据包 |
| `dq_complete` | all collection protocols | 覆盖全部贡献日期、场址、库存变动、失败、纠正、退货与使用者。报告未知剩余使用与缺失记录；不得对缺失记录补零。 | 事件台账；期间/使用者核对；验收关联 |
| `dq_range` | all inventory rows | 数量指导须有实际匹配部件/包装、电量/活动/合同、退货/失败物接收及物种释放证据；供应方点值规格仅适用于匹配型号。 | 一手计量记录与适用性评估 |

## 9. 验证规则

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| v_scope | reference product | 要求全部配置及接口限定信息、兼容物料清单、常闭防区表及独立全局防拆设计。手册中的消防/紧急报警功能或后续服务不扩展本范围。 | `texecom-veritas-installation` |
| v_intrusion | install_accept | 对实际启用防区保留探测器/门磁步行响应、所供声响器/闪灯动作、全局防拆响应、设防撤防与用户控制检查。记录停用防区、设置、故障、纠正措施、复测及恢复正常状态，并附合格测试与签署交付证据；所需测试缺失或失败时不得计为验收产出。 | `texecom-veritas-installation` |
| v_reference | accepted_installation | D 须为独立计数的同一经论证配置之完整验收安装数量且为正。参考关联、语义名称、Number of items 支持、item 单位及明确的 1 item 输出必须一致。部件数、测试数、进度及未完成作业均不得代替 D。 |  |
| v_custody | all material inputs and outputs | 按匹配来源池核对收货、安装留存、库存、可用退货、废物及已识别释放。区分永久电池与工具资产；失败物外送须关联 install_accept 及实际接收方。报告残差与计量容差；记录缺失不得推定为零。 |  |
| v_resource | owned_equipment_attribution; hired_support_service | 核实全部使用者和期间、正的物理活动分母、份额闭合、实际更换/终止处理及生命周期负荷唯一归属。检查运输、包装、租用资本设备与能源的包含关系，避免重复。剩余寿命或使用者证据不完整时，不得完成最终分配。 |  |
| v_identity | all inventory rows | 条件卡须展开为各实际 SKU/状态/提供方/接收方或物种-环境介质交换。不得使用异质混合固定 UUID 或泛化粉尘身份。最终绑定前核验具体流和支持链，并关联实际协议及计算；Energy 或按小时 Duration 支持未决时保留缺口。 |  |
| v_quality | all inventory rows | 分别报告已执行与跳过检查、发现及完整性，以及固定/未决身份数量和数量范围缺口。计量结论不确定、支持未核验或前景证据缺失时，不得声称最终绑定或发布检查完整通过。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景安装数据包；仅在范围、配置及验收门槛兼容时用作 secondary_dataset 或 background_dataset |
| downstream_use | 同一前景数据包的 process 与 lifecyclemodel 投影 |
| allowed_use | 声明的单主机常闭防区/全局防拆入侵报警安装，直至签署交付 |
| excluded_use | 运行/监控/维护；消防报警等价；其他技术；整栋建筑等价；无依据的长期性能或寿命主张 |
| required_metadata | 场址/时间；实际型号/配置及数量；接口/设计/物料清单；测试/纠正/验收；供应来源；清单/协议；资源所有者/期间/决定 |
| required_quality_disclosure | 实际计量覆盖、不确定性与实物残差；具体身份/支持缺口；数量范围证据缺口；资源剩余寿命及跳过检查 |
| update_trigger | 型号、路线、接口、物料清单或验收设计变化；更强实测数量、分配或身份依据 |

候选编制检查不证明具备发布准备度或最终交换已核验。数据包作为最终方法使用前，须解决实际前景证据与身份/支持证据。

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc3-explanatory-notes` | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | CPC 54613 包含施工现场入侵报警安装，排除监控/维护；较窄子集范围 |
| `texecom-veritas-installation` | handbook | https://texecom-live.s3.eu-west-2.amazonaws.com/wp-content/uploads/2022/02/01102935/INS034-14-Veritas-Compact_8_R8-Install_low.pdf | INS034-14，PDF 第 5–15、19–20 页：代表性主机/键盘、常闭防区/全局防拆、声响器、电池、固定/布线、编程/测试/纠正及正常状态完成；不提供通用每服务数量 |
