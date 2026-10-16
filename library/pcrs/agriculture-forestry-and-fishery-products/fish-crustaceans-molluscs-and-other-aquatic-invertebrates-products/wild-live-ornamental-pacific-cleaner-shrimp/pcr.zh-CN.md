---
pcr_id: pcr.wild-live-ornamental-pacific-cleaner-shrimp
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 野生观赏用途活体太平洋清洁虾

## 1. 范围与适用性

本 PCR 覆盖斯里兰卡亭可马里礁区环境中，采用实际记录证实的手网、SCUBA 潜水员及船舶分支收集的野生、整只、活体、从未冻结的太平洋清洁虾（Lysmata amboinensis），止于首个本地观赏动物买家取得实物保管权。仅当原始航次记录证实所选批次的物种、野生来源、捕获地点、手网、SCUBA 及实际船舶服务时适用。实地研究记录了群体使用渔具以及该物种的实际商业交易，但未将该物种分配至特定渔具或船舶组合；仅凭该研究不能确认具体应用符合适用条件 [priyashadi-ornamental-trincomalee-2023]。

捕获、活体分选、实际有界暂养或有证据的旁路、载运海水和保护呈装，以及首次买家实物收货前所有移动，分别承担独立建模责任。暂养仅在观察到有界干预时启用，须记录实际起止、投入及干预前后活体状态。未知暂养状态仍为数据缺口。不规定强制适应操作、氧气、盐度、温度、暂养时长、诊断阈值、除寄生虫、去势或无病操作。

排除养殖动物、观赏鱼、作为参考产品的其他物种、食品、死亡参考动物、冷冻或加工产品，以及首次实物收货后的买家或出口商操作。其他目标捕获物和等级作为独立输出记录，不扩大参考范围。不推断野生生长或自然摄食清单、栖息地收益、环境抵扣、动物健康、安全、合法性或福利主张。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.wild-live-ornamental-pacific-cleaner-shrimp |
| classification_refs | cpc:3.0:04912; narrower |
| covered_products | 来自航次证实的亭可马里手网 SCUBA 船舶分支、在首个本地观赏买家实物收货门点的野生整只观赏活体 Lysmata amboinensis |
| excluded_products | 养殖; 观赏鱼; 其他参考物种; 死亡、食品、冷冻或加工参考动物; 收货后出口商或零售商操作 |
| representative_product | 太平洋清洁虾 Lysmata amboinensis，保留原生附肢及实际商业规格和状态 |
| production_route | 野生礁区捕获; 活体等级和去向分选; 观察到的有界暂养或有证据的旁路; 载运海水和保护呈装; 所有收货前移动 |
| market_state | 整只活体、从未冻结的观赏动物; 动物数量、规格和状态独立于载水及包装保留 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 首个本地买家实物收货时的整只观赏活体太平洋清洁虾 |
| How much | 1 kg 验收动物净湿质量 |
| How well | 已确认 Lysmata amboinensis; 野生来源; 保留原生身体和附肢的活体; 实际验收商业规格及状态; 从未冻结; 观赏用途 |
| How long or cycle | 声明航次或批次及收货区间，关联包含失败航次、未结库存、容器复用、资产服务、清洗、更换和关闭的报告期间 |
| reference_flow_link | `buyer_live_shrimp` |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 首个本地买家实物收货时的整只观赏活体太平洋清洁虾 |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 物种; 野生来源; 礁区或捕获地点; 航次和批次; 实际手网 SCUBA 船舶路线; 整只活体原生身体及附肢; 从未冻结; 商业数量; 商业规格和状态; 实测同批动物质量基准; 实际暂养状态及证据; 载水与包装分离; 首个本地观赏买家实物保管权地点和时间; 报告期间及库存关联 |

数据集必须声明所有必要限定条件。商业按只或数量记录须保留；其不能提供物种通用的标准动物质量。收货要求实物保管权证据，独立于合同、发票、支付或付款人。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass | kg | 采用 cp_logistics 测量实际收货批次的验收整只活体动物净湿质量 A，独立排除海水、容器、包装和附带物，并保留实际活体、数量和状态记录。A 必须为正。 |
| `animal_count_mass` | 所有动物行 | Mass | kg | 保留原生商业动物数量及规格和状态。任何数量至质量换算只使用同批有代表性的实测动物，并记录样本数量、净质量、时间及不确定性; 不得使用通用动物质量或其他批次换算。 |
| `water_package_separation` | 所有清单行 | 实际实例属性 | 实际原生单位 | 独立测量动物、受管理载水、附带物及包装; 不得将运输毛质量视为动物质量或依据动物数量推算水量。保留供应服务、能源和物料的原生单位。 |
| `transfer_identity` | 所有清单行 | 实际实例属性 | 实际原生单位 | 每项内部实物交接只有一个标识、责任主体、状态、数量和单位，并在输出及成对输入准确重现。分支选择不能将内部投入固定为 1 kg。 |
| `release_basis` | 直接返还和排放实例 | 实际物质属性 | 实际原生单位 | 绑定前识别各污染物及接收介质。区分直接海水返还与污染物量、生物放回与废物、产品供水与环境取用、处理与排放，以及化石和生物源碳。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际野生礁区捕获环境及有记录的船舶和潜水航次，包含可归属上游投入及共享资产 |
| starting_condition_role | 前景野生来源至收集责任; 自然生长不是受管理生产阶段，也不是获得抵扣的饲料 |
| product_classification_scope | CPC 3.0 04912 中较窄的野生观赏活体甲壳动物子集; 不覆盖整个分类叶节点 |
| recursive_input_rule | 购入或退回的同类别活体动物及保留期初库存必须保留已验证野生来源、继承上游负担、数量和状态; 未解决来源不能重置为零或再次捕获计为新的环境移出 |
| upstream_dataset_requirement | 实际物料、能源、潜水或船舶或物流服务、设备或容器服务及处理须具有已验证具体投入身份及适当上游数据集; 披露排除和替代 |
| disclosure | 航次、物种和路线证据; 独立于所有权的实物收货门点; 暂养启用、旁路或未知证据; 动物、水和包装分离; 所有目标输出、库存、废物和返还; 报告期间及共享负担台账 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_route` | capture | 群体方法和物种交易是路线证据; 具体航次记录必须证实该物种所选手网 SCUBA 船舶路线。捕获从野生环境移出动物，独立于分选和保存; 不存在受管理养成阶段。 | priyashadi-ornamental-trincomalee-2023 |
| `boundary_receipt` | logistics | 包含首个本地观赏买家实物收货前的所有实际移动、搬运和中间保管权，无论付款人或操作者。发票、销售或合同不是实物门点。排除实际收货后的买家操作。 | |
| `boundary_holding` | holding | 仅在观察到有界活体暂养且具备起止、前后可用活体状态及实测投入输出时启用。否则须有旁路证据; 未知状态阻止完成，不能选为旁路。 | |
| `boundary_destinations` | 所有清单行 | 对每种目标物种、等级、转售或保留输出建立独立输出实例和交接，区分死亡或废物与降级商业产品，并观察送入分选的附带物。 | |
| `boundary_periods` | 所有过程 | 包含航次、分选或暂养或呈装批次、路段及报告期间记录; 失败或无输出航次、期初和期末活体库存、死亡、清理、共享服务、基础设施、容器更换及实际终止负担仍须归属。 | |
| `boundary_services` | 所有过程 | 购入完整服务排除重复组成能源、资产和直接排放。前景自行操作服务记录组成投入和直接排放; 仅在实际发生时建模处理，使用完整子清单或一个完整服务，不能同时重复。 | |
| `boundary_water` | 所有水和排放行 | 配对受管理海水交接，将新直接取用与购入供水分开，区分目标复用、送往处理的废物和实际直接返还。节点内各实际处理实例须分别识别物料或服务投入、处理输出及逐物质排放。 | |
| `boundary_shared` | 共享资产或服务 | 识别在节点、输出或期间间实际共享的船舶、潜水或手网或容器设备、暂养及呈装场址、车辆; 记录使用者列表、购置、使用、维护、更换、服务寿命、关闭及唯一责任台账。不设通用寿命。 | |
| `boundary_classification` | 参考产品 | 保留野生来源、观赏用途和活体甲壳动物状态; 排除鱼类及养殖观赏动物。该较窄边界不覆盖所有水生观赏生物。 | un-cpc3-2025 |

## 6. 过程清单结构

### 过程图

| process_id | Process name | Inclusion | Inclusion condition | Role | Quantitative reference |
| --- | --- | --- | --- | --- | --- |
| `capture` | 野生礁区捕获 | required | 航次记录证实野生 Lysmata amboinensis 的手网 SCUBA 船舶捕获 | 捕获责任 | 有记录航次及保留的未分选活体捕获物 |
| `sorting` | 活体等级及去向分选 | required | 所有保留捕获物按实际状态及去向核对 | 分选责任 | 有记录的分选活体动物 |
| `holding` | 有界活体暂养 | conditional | 实际起止及干预记录证实有界暂养; 否则必须有旁路证据 | 保存责任 | 有记录的实际离开暂养的活体动物 |
| `presentation` | 载运海水及保护呈装 | required | 记录实际动物、载水及容器状态 | 呈装责任 | 有记录的呈装活体动物 |
| `logistics` | 至首个本地买家实物收货的全部移动 | required | 包含所有实际收货前路段及中间交接，无论操作者或付款人 | 交付责任 | 首个本地观赏买家实物收货时 1 kg 验收整只活体动物净质量 |

航次作为批次索引; 分选、暂养（启用时）、呈装及交付路段各自保留事件标识及报告期间。实际交接记录关联节点。T-CS-A/W/I 关联捕获与分选。T-SH-A/W 关联分选与启用暂养; T-HP-A/W 关联暂养与呈装。仅在有证据的旁路时，T-SP-A/W 直接关联分选与呈装。T-PL-A/W/P 关联呈装与物流。仍在前景内的各替代输出，须在接收节点增加独立命名的成对输入实例; 外部输出记录实际接收者。交接事件不能产生重复购入、环境取用或上游负担。

### 过程：野生礁区捕获（`capture`）

#### 输入

##### 产品流

##### 基本流

###### 从礁区实际移出的野生太平洋清洁虾（`wild_shrimp_removal`）

测量从野生环境实际移出的全部目标动物的整只湿质量，包括保留捕获物、收集死亡及之后放回的动物，并保留实际数量、物种和地点。与 collect_capture_direct_returns 中的目标活体放回单独核对，不能以净额抵销实际捕获活动。这是野生来源至收集状态的界面，不是养殖饲料或购入活体动物供应。

- 选定流：从礁区实际移出的野生太平洋清洁虾
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测 wild_shrimp_removal 的实际数量; cp_capture; 归属至声明参考基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_capture`
- 数量范围：尚未建立的逐实例不确定性; U_wild_shrimp_removal 需要独立观察，不能视为通用上限或经验默认值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_wild_shrimp_removal
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 实际收集载水所需的直接海水取用（`capture_seawater_intake`）

记录直接从环境新取用海水的地点和净量。购入海水或已在前景内循环的受管理海水不得再次归为环境取用。

- 选定流：海水 `172a3db9-6556-11dd-ad8b-0800200c9a66`
- 绑定：fixed
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测 capture_seawater_intake 的实际数量; cp_capture; 归属至声明参考基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_capture`
- 数量范围：尚未建立的逐实例不确定性; U_capture_seawater_intake 需要独立观察，不能视为通用上限或经验默认值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_capture_seawater_intake
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）


#### 输出

##### 产品流

###### 捕获交付分选界面的未分选活体太平洋清洁虾（`unsorted_live_shrimp`）

测量整只活体动物质量和数量，排除海水及附带物。交接 T-CS-A 记录确切状态、数量、航次、时间和保管权，并与 sorting_live_input 配对。捕获独立于之后的分选、暂养和呈装，不虚构野生生长清单。

- 选定流：捕获交付分选界面的未分选活体太平洋清洁虾
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测 unsorted_live_shrimp 的实际数量; cp_capture; 归属至声明参考基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_capture`
- 数量范围：尚未建立的逐实例不确定性; U_unsorted_live_shrimp 需要独立观察，不能视为通用上限或经验默认值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_unsorted_live_shrimp
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 捕获交付分选界面的受管理载运海水（`capture_carrier_water`）

将载运海水与动物分别测量。交接 T-CS-W 具有唯一数量和状态，与 sorting_water_input 配对；该内部交接中的海水仍为受管理的技术圈物料。

- 选定流：捕获交付分选界面的受管理载运海水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测 capture_carrier_water 的实际数量; cp_capture; 归属至声明参考基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_capture`
- 数量范围：尚未建立的逐实例不确定性; U_capture_carrier_water 需要独立观察，不能视为通用上限或经验默认值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_capture_carrier_water
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

### 过程：活体等级及去向分选（`sorting`）

#### 输入

##### 产品流

###### 分选接收的未分选活体太平洋清洁虾（`sorting_live_input`）

准确接收 unsorted_live_shrimp 的 T-CS-A，保持同一物种、活体状态、航次、动物质量和数量及保管权；排除海水、包装和附带物。

- 选定流：分选接收的未分选活体太平洋清洁虾
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测 sorting_live_input 的实际数量; cp_sorting; 归属至声明参考基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sorting`
- 数量范围：尚未建立的逐实例不确定性; U_sorting_live_input 需要独立观察，不能视为通用上限或经验默认值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_sorting_live_input
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 分选接收的受管理捕获海水（`sorting_water_input`）

准确接收 capture_carrier_water 的 T-CS-W，分别记录受管理载运海水数量；这不是新的环境取用。

- 选定流：分选接收的受管理捕获海水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测 sorting_water_input 的实际数量; cp_sorting; 归属至声明参考基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sorting`
- 数量范围：尚未建立的逐实例不确定性; U_sorting_water_input 需要独立观察，不能视为通用上限或经验默认值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_sorting_water_input
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 送往暂养或呈装的分选活体太平洋清洁虾（`sorted_live_shrimp`）

记录所选主要活体等级及每种商业规格和状态。实际暂养启用时，T-SH-A 与 holding_live_input 配对；有证据的暂养旁路时，T-SP-A 与 presentation_live_input 配对。同一实物批次只能选择一个去向，不固定内部质量或健康阈值。

- 选定流：送往暂养或呈装的分选活体太平洋清洁虾
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测 sorted_live_shrimp 的实际数量; cp_sorting; 归属至声明参考基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sorting`
- 数量范围：尚未建立的逐实例不确定性; U_sorted_live_shrimp 需要独立观察，不能视为通用上限或经验默认值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_sorted_live_shrimp
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 送往暂养或呈装的受管理分选载水（`sorted_carrier_water`）

实际暂养启用时，T-SH-W 与 holding_water_input 配对；有证据的旁路时，T-SP-W 与 presentation_water_input 配对。测量所选分支的实际数量和状态，分离海水另行核算。

- 选定流：送往暂养或呈装的受管理分选载水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测 sorted_carrier_water 的实际数量; cp_sorting; 归属至声明参考基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sorting`
- 数量范围：尚未建立的逐实例不确定性; U_sorted_carrier_water 需要独立观察，不能视为通用上限或经验默认值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_sorted_carrier_water
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

### 过程：有界活体暂养（`holding`）

#### 输入

##### 产品流

###### 进入有界活体暂养的分选太平洋清洁虾（`holding_live_input`）

暂养实际启用时，准确接收 sorted_live_shrimp 的 T-SH-A，保持动物实测质量、数量和分选等级。实际干预未知是未解决状态，不能视为旁路。

- 选定流：进入有界活体暂养的分选太平洋清洁虾
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测 holding_live_input 的实际数量; cp_holding; 归属至声明参考基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_holding`
- 数量范围：尚未建立的逐实例不确定性; U_holding_live_input 需要独立观察，不能视为通用上限或经验默认值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_holding_live_input
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 进入有界暂养的受管理海水（`holding_water_input`）

暂养实际启用时，准确接收 sorted_carrier_water 的 T-SH-W。分别追踪已有水、补充水、变化和外流水；不得再次将该内部交接计为环境取用。

- 选定流：进入有界暂养的受管理海水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测 holding_water_input 的实际数量; cp_holding; 归属至声明参考基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_holding`
- 数量范围：尚未建立的逐实例不确定性; U_holding_water_input 需要独立观察，不能视为通用上限或经验默认值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_holding_water_input
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 实际暂养新发生的直接海水取用（`holding_seawater_intake`）

仅记录启用暂养期间从环境新取用的海水，注明场址、数量和干预时间。既有受管理载水及购入水不得作为环境取用。

- 选定流：海水 `172a3db9-6556-11dd-ad8b-0800200c9a66`
- 绑定：fixed
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测 holding_seawater_intake 的实际数量; cp_holding; 归属至声明参考基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_holding`
- 数量范围：尚未建立的逐实例不确定性; U_holding_seawater_intake 需要独立观察，不能视为通用上限或经验默认值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_holding_seawater_intake
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）


#### 输出

##### 产品流

###### 离开有界暂养的活体太平洋清洁虾（`held_live_shrimp`）

测量实际有界干预后的整只活体动物，保留观察到的状态、规格和数量。T-HP-A 与 presentation_live_input 配对。记录干预前后的可用活体状态；不暗示存活保证或动物健康操作。

- 选定流：离开有界暂养的活体太平洋清洁虾
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测 held_live_shrimp 的实际数量; cp_holding; 归属至声明参考基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_holding`
- 数量范围：尚未建立的逐实例不确定性; U_held_live_shrimp 需要独立观察，不能视为通用上限或经验默认值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_held_live_shrimp
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 离开有界暂养的受管理海水（`held_carrier_water`）

独立于动物质量测量 T-HP-W，并与 presentation_water_input 配对；识别复用水、实际组成或状态以及另外弃置的水量。

- 选定流：离开有界暂养的受管理海水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测 held_carrier_water 的实际数量; cp_holding; 归属至声明参考基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_holding`
- 数量范围：尚未建立的逐实例不确定性; U_held_carrier_water 需要独立观察，不能视为通用上限或经验默认值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_held_carrier_water
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

### 过程：载运海水及保护呈装（`presentation`）

#### 输入

##### 产品流

###### 呈装接收的分选或暂养活体太平洋清洁虾（`presentation_live_input`）

有证据的旁路时，准确接收 sorted_live_shrimp 的 T-SP-A；实际暂养启用时，准确接收 held_live_shrimp 的 T-HP-A。保留所选交接标识、活体等级、动物质量和数量及唯一保管事件；同一动物不得同时接收两条路径。

- 选定流：呈装接收的分选或暂养活体太平洋清洁虾
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测 presentation_live_input 的实际数量; cp_presentation; 归属至声明参考基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_presentation`
- 数量范围：尚未建立的逐实例不确定性; U_presentation_live_input 需要独立观察，不能视为通用上限或经验默认值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_presentation_live_input
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 呈装接收的受管理载运海水（`presentation_water_input`）

按实际暂养分支准确接收 T-SP-W 或 T-HP-W，保持上游成对状态及数量。该受管理海水不是新的环境取用。

- 选定流：呈装接收的受管理载运海水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测 presentation_water_input 的实际数量; cp_presentation; 归属至声明参考基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_presentation`
- 数量范围：尚未建立的逐实例不确定性; U_presentation_water_input 需要独立观察，不能视为通用上限或经验默认值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_presentation_water_input
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 呈装新发生的直接海水取用（`presentation_seawater_intake`）

仅记录实际新的环境海水取用及取水地点；排除受管理内部海水和购入海水。载水量独立于动物参考质量。

- 选定流：海水 `172a3db9-6556-11dd-ad8b-0800200c9a66`
- 绑定：fixed
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测 presentation_seawater_intake 的实际数量; cp_presentation; 归属至声明参考基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_presentation`
- 数量范围：尚未建立的逐实例不确定性; U_presentation_seawater_intake 需要独立观察，不能视为通用上限或经验默认值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_presentation_seawater_intake
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）


#### 输出

##### 产品流

###### 呈装交付收货前物流的活体太平洋清洁虾（`presented_live_shrimp`）

测量呈装后的整只活体动物质量和数量、规格及状态，排除载运海水和包装。T-PL-A 与 logistics_live_input 配对。呈装止于保护状态交接；之后的配送在物流中单独记录。

- 选定流：呈装交付收货前物流的活体太平洋清洁虾
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测 presented_live_shrimp 的实际数量; cp_presentation; 归属至声明参考基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_presentation`
- 数量范围：尚未建立的逐实例不确定性; U_presented_live_shrimp 需要独立观察，不能视为通用上限或经验默认值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_presented_live_shrimp
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 呈装交付物流的载运海水（`presented_carrier_water`）

测量载运海水 T-PL-W，并与 logistics_water_input 配对，组成或状态和数量独立于动物质量。

- 选定流：呈装交付物流的载运海水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测 presented_carrier_water 的实际数量; cp_presentation; 归属至声明参考基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_presentation`
- 数量范围：尚未建立的逐实例不确定性; U_presented_carrier_water 需要独立观察，不能视为通用上限或经验默认值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_presented_carrier_water
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

### 过程：至首个本地买家实物收货的全部移动（`logistics`）

#### 输入

##### 产品流

###### 收货前物流接收的呈装活体太平洋清洁虾（`logistics_live_input`）

准确接收 T-PL-A，保持相同整只活体动物状态、数量、实测质量和保管权；纳入至首个本地买家实物收货前每个实际后续路段。

- 选定流：收货前物流接收的呈装活体太平洋清洁虾
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测 logistics_live_input 的实际数量; cp_logistics; 归属至声明参考基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_logistics`
- 数量范围：尚未建立的逐实例不确定性; U_logistics_live_input 需要独立观察，不能视为通用上限或经验默认值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_logistics_live_input
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 物流接收的呈装载运海水（`logistics_water_input`）

准确接收 T-PL-W，保持受管理海水数量和状态。之后实际补水须具有独立的购入供水或直接取用实例；既有水不得再次计为环境取用。

- 选定流：物流接收的呈装载运海水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测 logistics_water_input 的实际数量; cp_logistics; 归属至声明参考基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_logistics`
- 数量范围：尚未建立的逐实例不确定性; U_logistics_water_input 需要独立观察，不能视为通用上限或经验默认值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_logistics_water_input
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 实际收货前物流新发生的直接海水取用（`logistics_seawater_intake`）

对实际路段中新发生的各环境海水直接取用建立实例，记录地点及实测数量。购入补充海水作为 collect_logistics_operations 的产品输入；受管理交接永远不是新的取用。

- 选定流：海水 `172a3db9-6556-11dd-ad8b-0800200c9a66`
- 绑定：fixed
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测 logistics_seawater_intake 的实际数量; cp_logistics; 归属至声明参考基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_logistics`
- 数量范围：尚未建立的逐实例不确定性; U_logistics_seawater_intake 需要独立观察，不能视为通用上限或经验默认值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_logistics_seawater_intake
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）


#### 输出

##### 产品流

###### 首个本地买家实物收货时的整只观赏活体太平洋清洁虾（`buyer_live_shrimp`）

1 kg；采用 cp_logistics，根据 same_lot_reference 将同批验收动物净湿质量 A / A 计算为 1 kg。A 必须为正，独立于载运海水、包装和附带物测量，保留实际商业数量、规格或状态以及首次实物保管权记录。本卡是唯一最终参考输出；发票或合同本身不构成收货。

- 选定流：首个本地买家实物收货时的整只观赏活体太平洋清洁虾
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_logistics`
- 来源：`same-lot-reference-identity`
- 数量范围：同批参考归一化恒等式
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`same-lot-reference-identity`

###### 随收货实物交付或保留复用的载运海水（`buyer_carrier_water`）

独立于动物测量实际随买家收货的海水，或对每次目标复用交接记录身份和去向。返还水不自动成为销售副产品；须说明是保管随附物还是独立目标输出。废水及直接返还量分别记录。

- 选定流：随收货实物交付或保留复用的载运海水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测 buyer_carrier_water 的实际数量; cp_logistics; 归属至声明参考基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_logistics`
- 数量范围：尚未建立的逐实例不确定性; U_buyer_carrier_water 需要独立观察，不能视为通用上限或经验默认值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_buyer_carrier_water
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | 所有过程 | 首先细分可独立测量的捕获、分选、暂养、呈装和物流事件，并直接归属专用资源。每项交接或共享服务只由一个责任主体记录; 内部实物交接不重复产生负担。 | |
| `allocation_outputs` | 混合捕获及等级输出 | 枚举完整实际目标输出集，包括其他物种、较低商业等级、转售、活体保留或退回库存，以及独立目标容器或海水复用。产品随附物与独立产品分开。细分后，在证据支持时采用实测因果服务需求（船舶或潜水时间、暂养占用时间或路段载荷距离），记录物理依据。 | |
| `allocation_fallback` | 不可分离的共享输出负担 | 因果需求无法获得支持时，采用有记录、非负且可比的生产者门点净销售价值份额，依据实际商业数量、价格及销售记录，所有输出总价值分母必须为正。净销售价值指扣除有记录销售调整后的可比销售收入，不是利润。未售或保留库存须按有证据的可比生产者门点基准明确估值并披露不确定性。零、负数或不可得的输出价值或非正分母，要求另行论证替代分配并进行敏感性分析; 与实测动物质量替代方案比较。物理或价值分配均无证据时，保留未解决负担，不能记零。不采用替代或避免产品抵扣。 | |
| `allocation_periods` | 期间及库存 | 将购置、操作、失败或无输出航次、期初及期末活体库存、死亡或更换、清理、维护和终止关联航次、批次、路段或报告期间。保留或退回库存的继承负担只向下一期传递一次。失败航次负担纳入相关期间实际目标输出池，并说明依据及敏感性; 无验收输出期间保留为未解决结转负担，不得除以零。 | |
| `allocation_assets` | 共享基础设施及复用 | 建立唯一资产或服务台账，列明所有使用节点和期间。船舶、潜水和手网服务按有证据的使用分配，暂养容量按占用服务时间分配，呈装设备和容器服务按记录的使用或周转分配，运输按实际路段需求分配。记录购置、更换、维护、实际或有依据的服务寿命证据、闲置或失败使用和关闭; 寿命证据不足时检验替代方案，不设标准寿命。复用容器不能在每次交接作为完整新购入。 | |
| `allocation_losses` | 死亡、退回及处理 | 实际损失保留此前资源负担; 将其处理归属因果事件及报告池，保留实际替换活动，不得将转售或降级归为废物。废物接收服务与直接排放分别判断，上游废物和前景处理只计一次。 | |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_capture` | `capture` | 捕获资源、野生移出、保留动物、海水、附带物、其他捕获物及损失或排放 | 航次日志、测量、服务和资产记录 | 航次; 物种; 野生地点; SCUBA; 手网; 船舶; 事件; 行或实例; 交接标识; 动物数量及规格或状态; 动物净湿质量; 海水; 附带物; 燃料或服务或原生单位; 物质或介质或碳基准; 接收者; 资产或使用或期间; 失败航次; 不确定性 | 用原始航次记录确认物种及路线; 使用经校准质量设备和可追溯数量记录分别测量动物、海水和附带物; 核对全部去向和成对交接; 采用实际供应商或资产服务记录以及逐物质实测排放证据; 计算得到的实际排放要求自身声明公式、因子或来源、实测组成及不确定性，采用 calculated_value/calculated_from_collection 而非实测排放元数据 | kg; 数量及各实例原生单位分别保留 | 每航次、交接、投入及排放事件 | 完整航次及可归属购置、服务或报告期间，包含失败航次 | 实际礁区、船舶、潜水员及接收分选场址 | 每 1 kg 参考流 | 物种或渔具或船舶证据; 校准和去皮称量; 数量核对; 成对交接; 发票或服务范围; 资产台账; 明确缺口及不确定性 |
| `cp_sorting` | `sorting` | 分选接收动物、海水和附带物、投入、主要及其他去向、废物和返还 | 批次去向台账及测量 | 批次或航次; 输入交接标识或状态或数量; 实例; 数量; 规格或状态; 动物净质量; 海水或附带物; 去向; 暂养启用或旁路证据; 供应或原生单位; 处理接收者; 物质或介质; 库存; 期间 | 匹配 T-CS-A/W/I; 独立测量各动物等级及海水或物料流; 观察附带物进入分选; 记录状态及去向但不作诊断规定; 匹配 T-SH 或 T-SP 分支及每项其他交接 | kg; 数量及各实例原生单位分别保留 | 每接收批次、分选事件及输出 | 完整分选批次、清洗及报告期间库存变化 | 实际分选地点及实际接收者 | 每 1 kg 参考流 | 去向或保管权台账; 动物、水和包装分离; 校准测量; 暂养状态证据; 废物与直接返还区分 |
| `cp_holding` | `holding` | 启用有界暂养的动物和水、干预投入、活体或其他库存及损失 | 干预日志、测量及资产服务记录 | 批次; 启用或旁路或未知; 起止; 前后活体状态; T-SH/T-HP; 动物数量或规格或状态或质量; 水平衡; 实际投入或原生单位; 废物接收者; 污染物或介质或碳; 池槽或容器使用; 期间或库存或失败批次 | 必须观察到有界干预; 匹配 T-SH-A/W 和 T-HP-A/W; 分别测量动物和水变化; 仅记录实际资源、服务及排放; 旁路时保留证据，不虚构暂养投入或效果 | kg; 时长及各实际实例原生单位分别保留 | 每次实际干预及交接 | 实际干预区间及可归属设备或报告期间 | 仅在启用时的实际暂养场址 | 每 1 kg 参考流 | 时间或状态记录; 投入发票或计量; 校准测量; 单独废物或返还记录; 复用或服务台账及不确定性 |
| `cp_presentation` | `presentation` | 动物、海水、保护物料、呈装输出、其他产品、废物及排放 | 呈装批次、包装及保管记录 | 批次; 实际分支; T-SP/T-HP; 动物数量或状态或质量; 受管理或新取或购入海水; 包装物料或原生单位; 一次性或复用; T-PL; 接收者; 投入; 废物或处理; 直接物质或介质; 服务期间 | 匹配实际分支输入; 测量动物质量并排除海水或包装; 分别测量海水及各包装; 记录作用、复用和实际保护状态; 配对 T-PL-A/W/P 及每项其他交接 | kg; 数量及各实例原生单位分别保留 | 每呈装批次、购置或使用及交接 | 批次、清理、容器或服务及报告期间 | 实际呈装地点及物流交接 | 每 1 kg 参考流 | 分支证据; 校准或去皮质量; 包装身份或复用及交接台账; 废物接收者及排放记录 |
| `cp_logistics` | `logistics` | 每次收货前移动、资源、动物参考、海水或包装保管权、其他输出及损失 | 路段、称量、商业及实物保管记录 | 批次或航次; T-PL; 所有路段或操作者或付款人; 距离; 载荷; 时间; 空返; 实际服务或原生单位; 动物物种或数量或规格或状态; 同批抽样数量及净质量; 验收净质量 A; 海水或包装或附带物去皮; 买家或地点或时间或保管权; 损失或库存; 处理; 污染物或介质或碳; 资产或期间 | 匹配 T-PL-A/W/P; 追踪每个实物路段至首个本地观赏买家保管权; 使用经校准称量或可追溯同批动物净质量称量记录，独立排除海水、包装和附带物，保留样本数量、不确定性和商业记录; 实物收货时验证活体状态和正值 A; 记录完整服务范围以及独立废物、返还和其他去向 | kg; 数量及各路段或投入或输出实例原生单位分别保留 | 每路段、交接、收货、失败移动及损失 | 呈装交接至首次实物收货，以及可归属服务或报告期间 | 实际路线、中间地点及首次买家收货场址 | 每 1 kg 参考流 | 经校准或去皮的同批动物质量; 数量或等级核对; 带时间戳的保管权而非仅发票; 完整路段清单; 服务排除; 库存或资产台账及不确定性 |

任一节点的计算直接排放均遵守对应直接排放卡的逐实例公式、因子、来源和实测组成要求，并采用 calculated_value/calculated_from_collection；只有实测排放保留 foreground_record/collected_record。不提供通用固定排放因子。

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `same_lot_reference` | buyer_live_shrimp | 同批验收动物质量 A / A = 1 kg; 要求 A 为正、相同批次以及独立的动物、水和包装分离。 | A; cp_logistics | 1 kg 参考流 | same-lot-reference-identity |

所有非参考数量采用归属至声明批次或期间的实际实测原生数量，除以正值验收动物质量 A，以每 1 kg 参考流表达，且不改变分子属性或单位。数量至质量估算保留同批代表样本数量、质量和不确定性; 不存在通用标准质量。各协议按第 7 节归属其独立事件及共享服务，核对全部输出、库存和损失，内部交接不能强制为 1 kg。符号 U_row 表示尚未建立、需要独立观察的逐行或实例不确定性上界，既不提供数值默认值或经验典型区间，也不能替代缺失的实际记录。

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | 参考及实际实例 | 最终交换绑定前确认物种、野生来源、观赏或活体状态、航次特定手网 SCUBA 船舶路线、确切投入输出身份及原生属性或单位。 | 物种或航次证据及验证身份详情; 明确未解决缺口 |
| `quality_balance` | 实物交接 | 各命名交接的输出和输入数量、状态及单位准确匹配; 核对动物数量及独立实测质量、海水、附带物、包装、其他产品、活体库存、死亡及返还。 | 成对保管记录和节点平衡 |
| `quality_state` | 暂养及收货 | 证明实际有界暂养或有证据的旁路，并具备首个买家实物保管权和验收活体动物; 未知状态或仅有发票证据均不完整。 | 干预或旁路及实物收货记录 |
| `quality_periods` | 所有过程 | 覆盖完整航次、批次、路段或报告期间，包括失败或无输出事件、期初或期末库存、购置、复用、共享资产服务、清洗、维护、更换及关闭; 核对唯一责任台账。 | 期间及资产或服务台账、归属依据及敏感性 |
| `quality_ranges` | 每张流卡 | 从记录建立各实际数量，与符号不确定性分开。主张有界经验不确定性前，必须用独立支持的场址或实例证据替换 U_row; 保留抽样质量及分配的不确定性。 | 测量、样本代表性及证据层级披露 |
| `quality_sources` | 主张 | 文献仅支持定性路线及群体交易; 不能据此推断物种特定渔具分配、健康操作、去势、无病保证或数值操作默认值。 | 来源段落及具体应用证据 |
| `collect_capture_operations` | `capture`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际船舶、潜水、手网及辅助投入或服务. 逐项建立实际船用燃料、购入潜水空气或压缩服务、手网、收集容器、清洗物料、能源或完整服务的交换实例，保留实际物料或服务身份、属性和原生单位。按航次活动及共享服务进行归属；完整服务应排除重复计入其组成燃料、电力、资产和排放。 每项实际期初、接收或退回的受管理活体库存输入须独立建立具体动物实例，记录物种、野生来源证据、活体状态、Mass/kg 和数量、收货或保管权、继承负担，以及与上一期期末库存或退回输出记录配对的交接标识。这不是新的野生环境取用；仅凭购入或退回库存不能证明本 PCR 对该物种的特定捕获路线，也不能省略上游证据。 <br> - 流属性/单位：实际实例属性 / actual native unit <br> - 数量规则：实测 collect_capture_operations 的实际数量; cp_capture; 归属至声明参考基准 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_capture` <br> - 数量范围：尚未建立的逐实例不确定性; U_capture_operations 需要独立观察，不能视为通用上限或经验默认值 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_capture_operations <br> - 单位：instance native unit <br> - 基准：每 1 kg 参考流; 每个实际实例保留原生属性和单位 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_capture_other_resources` | `capture`; 输入; 基本流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际从礁区移出的其他野生生物及基质. 逐项建立实际移出的非参考生物或基质资源实例，记录身份、介质或地点、适用时的数量以及实测原生数量。将附带移出物及其他目标捕获物与 collect_capture_incidentals、collect_capture_other_products、死亡及实际放回核对；不能将它们的资源量并入目标虾质量，也不能假设所有附带物都是目标产品。 <br> - 流属性/单位：实际实例属性 / actual native unit <br> - 数量规则：实测 collect_capture_other_resources 的实际数量; cp_capture; 归属至声明参考基准 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_capture` <br> - 数量范围：尚未建立的逐实例不确定性; U_capture_other_resources 需要独立观察，不能视为通用上限或经验默认值 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_capture_other_resources <br> - 单位：instance native unit <br> - 基准：每 1 kg 参考流; 每个实际实例保留原生属性和单位 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_capture_incidentals` | `capture`; 输出; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：送入分选的附带收集礁区生物或基质. 逐项记录实际收集生物或基质的身份、适用时的数量及湿质量。T-CS-I 与 collect_sorting_incidental_input 配对；该交接不表示附带生物是目标商业产品。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则：实测 collect_capture_incidentals 的实际数量; cp_capture; 归属至声明参考基准 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_capture` <br> - 数量范围：尚未建立的逐实例不确定性; U_capture_incidentals 需要独立观察，不能视为通用上限或经验默认值 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_capture_incidentals <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_capture_other_products` | `capture`; 输出; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：离开捕获节点的其他目标活体捕获物或保留回流库存. 对实际非参考物种、较低状态的商业产品或保留活体库存逐项建立输出实例，记录身份、状态、实测质量和数量、去向及实物交接。送往分选的货物必须具有独立的成对分选输入和输出实例；外部去向止于所记录的实物交接。 <br> - 流属性/单位：实际实例属性 / actual native unit <br> - 数量规则：实测 collect_capture_other_products 的实际数量; cp_capture; 归属至声明参考基准 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_capture` <br> - 数量范围：尚未建立的逐实例不确定性; U_capture_other_products 需要独立观察，不能视为通用上限或经验默认值 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_capture_other_products <br> - 单位：instance native unit <br> - 基准：每 1 kg 参考流; 每个实际实例保留原生属性和单位 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_capture_mortality_waste` | `capture`; 输出; 废物流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：送往实际废物接收者的捕获死亡及弃置物料. 对死亡动物或损坏投入废物分别记录质量、去向、交接和上游活动。捕获损失不是活体产品；放回环境应在 collect_capture_direct_returns 中记录。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则：实测 collect_capture_mortality_waste 的实际数量; cp_capture; 归属至声明参考基准 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_capture` <br> - 数量范围：尚未建立的逐实例不确定性; U_capture_mortality_waste 需要独立观察，不能视为通用上限或经验默认值 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_capture_mortality_waste <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_capture_direct_returns` | `capture`; 输出; 基本流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：捕获阶段实际放回及逐物质环境排放. 对实际放回的目标虾、附带生物、返还载运海水或直接污染物，按身份和环境介质逐项建立实例。将目标放回量与 wild_shrimp_removal、保留捕获物及死亡核对。未改变海水返还量与污染物质量分开；燃烧污染物须逐项确定物质及化石或生物源碳基准。完整服务的排放只由一个责任主体计入。 实测排放实例保留 foreground_record/collected_record；任何计算得到的实际排放实例必须改用 calculated_value/calculated_from_collection，并在本节点协议下声明其自身公式、因子及来源、实测组成投入和不确定性；不提供通用固定因子。 <br> - 流属性/单位：实际实例属性 / actual native unit <br> - 数量规则：实测 collect_capture_direct_returns 的实际数量; cp_capture; 归属至声明参考基准 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_capture` <br> - 数量范围：尚未建立的逐实例不确定性; U_capture_direct_returns 需要独立观察，不能视为通用上限或经验默认值 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_capture_direct_returns <br> - 单位：instance native unit <br> - 基准：每 1 kg 参考流; 每个实际实例保留原生属性和单位 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_sorting_incidental_input` | `sorting`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：分选接收的礁区附带收集物. 接收各 T-CS-I 生物或基质实例，保持与 collect_capture_incidentals 相同的数量和状态，再记录其实际去向。分选平衡前不得静默移除附带物。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则：实测 collect_sorting_incidental_input 的实际数量; cp_sorting; 归属至声明参考基准 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_sorting` <br> - 数量范围：尚未建立的逐实例不确定性; U_sorting_incidental_input 需要独立观察，不能视为通用上限或经验默认值 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_sorting_incidental_input <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_sorting_operations` | `sorting`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际分选物料、能源、资产及服务. 逐项建立实际分选投入的原生单位和身份，包括实测更换及清洗资源、分配后的设备或容器服务。未发生的电力或消耗品不得假设存在。 每项实际期初、接收或退回的受管理活体库存输入须独立建立具体动物实例，记录物种、野生来源证据、活体状态、Mass/kg 和数量、收货或保管权、继承负担，以及与上一期期末库存或退回输出记录配对的交接标识。这不是新的野生环境取用；仅凭购入或退回库存不能证明本 PCR 对该物种的特定捕获路线，也不能省略上游证据。 <br> - 流属性/单位：实际实例属性 / actual native unit <br> - 数量规则：实测 collect_sorting_operations 的实际数量; cp_sorting; 归属至声明参考基准 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_sorting` <br> - 数量范围：尚未建立的逐实例不确定性; U_sorting_operations 需要独立观察，不能视为通用上限或经验默认值 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_sorting_operations <br> - 单位：instance native unit <br> - 基准：每 1 kg 参考流; 每个实际实例保留原生属性和单位 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_sorting_alternate_products` | `sorting`; 输出; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：分选产生的其他物种、较低商业等级及保留活体库存. 对每种目标替代物种或等级、转售产品以及保留或退回活体库存逐项建立实例，记录实际数量、动物实测质量、状态、去向和实物交接。若捕获阶段已送入分选，应与对应其他产品输入实例匹配；降级或转售不是废物。保留库存进入期间台账。 <br> - 流属性/单位：实际实例属性 / actual native unit <br> - 数量规则：实测 collect_sorting_alternate_products 的实际数量; cp_sorting; 归属至声明参考基准 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_sorting` <br> - 数量范围：尚未建立的逐实例不确定性; U_sorting_alternate_products 需要独立观察，不能视为通用上限或经验默认值 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_sorting_alternate_products <br> - 单位：instance native unit <br> - 基准：每 1 kg 参考流; 每个实际实例保留原生属性和单位 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_sorting_waste` | `sorting`; 输出; 废物流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：分选死亡、弃置固体及送往处理的废水. 将死亡动物、确实弃置的基质或物料以及载运废水分别建立实例，记录实测质量和实际接收者。送往处理的废水是废物交换，不是直接排放；不能从动物质量推算废水量。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则：实测 collect_sorting_waste 的实际数量; cp_sorting; 归属至声明参考基准 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_sorting` <br> - 数量范围：尚未建立的逐实例不确定性; U_sorting_waste 需要独立观察，不能视为通用上限或经验默认值 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_sorting_waste <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_sorting_direct_returns` | `sorting`; 输出; 基本流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：分选直接放回生物、返还海水及逐污染物排放. 分别记录实际直接放回生物或基质、返还海水及各污染物，记录接收介质以及组成或物质基准。返还水体积或质量不是污染物质量；组织碳、生物源碳及化石碳须分开。 实测排放实例保留 foreground_record/collected_record；任何计算得到的实际排放实例必须改用 calculated_value/calculated_from_collection，并在本节点协议下声明其自身公式、因子及来源、实测组成投入和不确定性；不提供通用固定因子。 <br> - 流属性/单位：实际实例属性 / actual native unit <br> - 数量规则：实测 collect_sorting_direct_returns 的实际数量; cp_sorting; 归属至声明参考基准 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_sorting` <br> - 数量范围：尚未建立的逐实例不确定性; U_sorting_direct_returns 需要独立观察，不能视为通用上限或经验默认值 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_sorting_direct_returns <br> - 单位：instance native unit <br> - 基准：每 1 kg 参考流; 每个实际实例保留原生属性和单位 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_holding_supplies` | `holding`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际暂养供水、能源、物料、资产或服务. 仅逐项建立观察到的有界干预投入：购入海水、实际能源或曝气或供应气体、物料、清洗及分配后的池槽或容器服务，保留实际身份和原生单位。直接新取海水归入 holding_seawater_intake。不规定剂量、温度、盐度、氧气、饲料或时长。 每项实际期初、接收或退回的受管理活体库存输入须独立建立具体动物实例，记录物种、野生来源证据、活体状态、Mass/kg 和数量、收货或保管权、继承负担，以及与上一期期末库存或退回输出记录配对的交接标识。这不是新的野生环境取用；仅凭购入或退回库存不能证明本 PCR 对该物种的特定捕获路线，也不能省略上游证据。 <br> - 流属性/单位：实际实例属性 / actual native unit <br> - 数量规则：实测 collect_holding_supplies 的实际数量; cp_holding; 归属至声明参考基准 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_holding` <br> - 数量范围：尚未建立的逐实例不确定性; U_holding_supplies 需要独立观察，不能视为通用上限或经验默认值 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_holding_supplies <br> - 单位：instance native unit <br> - 基准：每 1 kg 参考流; 每个实际实例保留原生属性和单位 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_holding_alternate_products` | `holding`; 输出; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：离开暂养的其他商业活体等级及保留库存. 对实际目标较低等级、转售动物、其他产品及保留或退回活体库存逐项建立实例，记录质量和数量、状态、去向与实物交接。保留活体库存关联期末及下一期期初库存。 <br> - 流属性/单位：实际实例属性 / actual native unit <br> - 数量规则：实测 collect_holding_alternate_products 的实际数量; cp_holding; 归属至声明参考基准 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_holding` <br> - 数量范围：尚未建立的逐实例不确定性; U_holding_alternate_products 需要独立观察，不能视为通用上限或经验默认值 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_holding_alternate_products <br> - 单位：instance native unit <br> - 基准：每 1 kg 参考流; 每个实际实例保留原生属性和单位 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_holding_waste` | `holding`; 输出; 废物流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：暂养死亡、废旧物料及送往实际处理的废水. 分别记录各死亡、废旧物料及废水处理交接，保留实测质量和接收者；区分残余物、被拒产品及目标活体输出，失败批次关联报告期间。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则：实测 collect_holding_waste 的实际数量; cp_holding; 归属至声明参考基准 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_holding` <br> - 数量范围：尚未建立的逐实例不确定性; U_holding_waste 需要独立观察，不能视为通用上限或经验默认值 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_holding_waste <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_holding_direct_returns` | `holding`; 输出; 基本流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：暂养直接返还海水及逐项环境排放. 实际载水直接返还须与各污染物或生物放回分别建立实例，记录物质、介质及适用的化石或生物源基准。仅在实际处理位于前景内时记录处理输出，具备独立投入、输出和排放记录，且不得与购入完整处理服务重复。 实测排放实例保留 foreground_record/collected_record；任何计算得到的实际排放实例必须改用 calculated_value/calculated_from_collection，并在本节点协议下声明其自身公式、因子及来源、实测组成投入和不确定性；不提供通用固定因子。 <br> - 流属性/单位：实际实例属性 / actual native unit <br> - 数量规则：实测 collect_holding_direct_returns 的实际数量; cp_holding; 归属至声明参考基准 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_holding` <br> - 数量范围：尚未建立的逐实例不确定性; U_holding_direct_returns 需要独立观察，不能视为通用上限或经验默认值 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_holding_direct_returns <br> - 单位：instance native unit <br> - 基准：每 1 kg 参考流; 每个实际实例保留原生属性和单位 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_presentation_materials` | `presentation`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际保护包装、供水及呈装资源. 对实际袋、封口、箱、复用容器、购入海水、供应气体、清洗资源、能源及设备或服务逐项建立原生单位实例。声明物料作用、一次性或复用、购置、更换和容器去向；不得预设物料、气体或投加做法。 每项实际期初、接收或退回的受管理活体库存输入须独立建立具体动物实例，记录物种、野生来源证据、活体状态、Mass/kg 和数量、收货或保管权、继承负担，以及与上一期期末库存或退回输出记录配对的交接标识。这不是新的野生环境取用；仅凭购入或退回库存不能证明本 PCR 对该物种的特定捕获路线，也不能省略上游证据。 <br> - 流属性/单位：实际实例属性 / actual native unit <br> - 数量规则：实测 collect_presentation_materials 的实际数量; cp_presentation; 归属至声明参考基准 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_presentation` <br> - 数量范围：尚未建立的逐实例不确定性; U_presentation_materials 需要独立观察，不能视为通用上限或经验默认值 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_presentation_materials <br> - 单位：instance native unit <br> - 基准：每 1 kg 参考流; 每个实际实例保留原生属性和单位 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_presented_packages` | `presentation`; 输出; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：交付物流的保护容器及包装. 对每种包装或容器建立 T-PL-P 交接实例，记录实际物料身份、原生单位、复用状态和数量，并与 collect_logistics_package_input 配对。包装质量不属于动物参考质量。 <br> - 流属性/单位：实际实例属性 / actual native unit <br> - 数量规则：实测 collect_presented_packages 的实际数量; cp_presentation; 归属至声明参考基准 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_presentation` <br> - 数量范围：尚未建立的逐实例不确定性; U_presented_packages 需要独立观察，不能视为通用上限或经验默认值 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_presented_packages <br> - 单位：instance native unit <br> - 基准：每 1 kg 参考流; 每个实际实例保留原生属性和单位 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_presentation_alternate_products` | `presentation`; 输出; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：离开呈装的其他活体商业等级及复用或保留库存. 对每种目标替代动物物种或等级、转售输出、保留活体库存以及送往其他实际使用者的复用容器分别建立实例，记录实测数量及实物交接。若仍在前景内，必须记录内部下游输入。 <br> - 流属性/单位：实际实例属性 / actual native unit <br> - 数量规则：实测 collect_presentation_alternate_products 的实际数量; cp_presentation; 归属至声明参考基准 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_presentation` <br> - 数量范围：尚未建立的逐实例不确定性; U_presentation_alternate_products 需要独立观察，不能视为通用上限或经验默认值 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_presentation_alternate_products <br> - 单位：instance native unit <br> - 基准：每 1 kg 参考流; 每个实际实例保留原生属性和单位 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_presentation_waste` | `presentation`; 输出; 废物流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：呈装死亡、废弃包装及送往处理的废水. 对实际死亡动物、废弃包装或物料及废水分别建立实例，记录实测质量、复用或废物判断和接收者。不默认拒收比例、处理或处置路径。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则：实测 collect_presentation_waste 的实际数量; cp_presentation; 归属至声明参考基准 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_presentation` <br> - 数量范围：尚未建立的逐实例不确定性; U_presentation_waste 需要独立观察，不能视为通用上限或经验默认值 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_presentation_waste <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_presentation_direct_returns` | `presentation`; 输出; 基本流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：呈装直接返还海水及逐物质排放. 直接返还海水与实际污染物排放分开记录，各自保留物质、介质、数量和来源；海水返还或包装复用不得获得虚构环境抵扣。 实测排放实例保留 foreground_record/collected_record；任何计算得到的实际排放实例必须改用 calculated_value/calculated_from_collection，并在本节点协议下声明其自身公式、因子及来源、实测组成投入和不确定性；不提供通用固定因子。 <br> - 流属性/单位：实际实例属性 / actual native unit <br> - 数量规则：实测 collect_presentation_direct_returns 的实际数量; cp_presentation; 归属至声明参考基准 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_presentation` <br> - 数量范围：尚未建立的逐实例不确定性; U_presentation_direct_returns 需要独立观察，不能视为通用上限或经验默认值 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_presentation_direct_returns <br> - 单位：instance native unit <br> - 基准：每 1 kg 参考流; 每个实际实例保留原生属性和单位 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_logistics_package_input` | `logistics`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：物流接收的呈装包装. 准确接收各 T-PL-P 包装或容器实例，保持与 collect_presented_packages 相同的原生属性、单位、物料、复用状态和数量。 <br> - 流属性/单位：实际实例属性 / actual native unit <br> - 数量规则：实测 collect_logistics_package_input 的实际数量; cp_logistics; 归属至声明参考基准 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_logistics` <br> - 数量范围：尚未建立的逐实例不确定性; U_logistics_package_input 需要独立观察，不能视为通用上限或经验默认值 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_logistics_package_input <br> - 单位：instance native unit <br> - 基准：每 1 kg 参考流; 每个实际实例保留原生属性和单位 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_logistics_operations` | `logistics`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际运输、搬运、补充、清洗及共享服务. 依据距离、载荷、时间、空返和保管证据，以原生单位逐项建立各实际收货前路段或服务，包括实物收货前由买家操作或付费的运输。实际补充物料、能源、资产和清洗如未包含于完整服务，应单独记录。排除完整运输服务中重复的组成燃料、资产和排放。 每项实际期初、接收或退回的受管理活体库存输入须独立建立具体动物实例，记录物种、野生来源证据、活体状态、Mass/kg 和数量、收货或保管权、继承负担，以及与上一期期末库存或退回输出记录配对的交接标识。这不是新的野生环境取用；仅凭购入或退回库存不能证明本 PCR 对该物种的特定捕获路线，也不能省略上游证据。 <br> - 流属性/单位：实际实例属性 / actual native unit <br> - 数量规则：实测 collect_logistics_operations 的实际数量; cp_logistics; 归属至声明参考基准 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_logistics` <br> - 数量范围：尚未建立的逐实例不确定性; U_logistics_operations 需要独立观察，不能视为通用上限或经验默认值 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_logistics_operations <br> - 单位：instance native unit <br> - 基准：每 1 kg 参考流; 每个实际实例保留原生属性和单位 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_buyer_packages` | `logistics`; 输出; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：买家收货包装及复用容器退回. 对实际各包装保管交接及目标复用容器退回分别建立实例，记录数量、物料、原生单位和接收者。依据使用或服务期间分配，保留损失和更换证据；不假定寿命或该门点之后的终末处置。 <br> - 流属性/单位：实际实例属性 / actual native unit <br> - 数量规则：实测 collect_buyer_packages 的实际数量; cp_logistics; 归属至声明参考基准 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_logistics` <br> - 数量范围：尚未建立的逐实例不确定性; U_buyer_packages 需要独立观察，不能视为通用上限或经验默认值 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_buyer_packages <br> - 单位：instance native unit <br> - 基准：每 1 kg 参考流; 每个实际实例保留原生属性和单位 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_logistics_alternate_products` | `logistics`; 输出; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：收货前其他目标活体等级、转售输出及保留库存. 对各替代活体等级或物种、转售、退回活体批次或保留库存分别建立实例，记录数量、实测质量、状态、实际去向和实物保管事件。同一动物不得同时计入 buyer_live_shrimp 和其他交接；未结库存保留在期间台账。 <br> - 流属性/单位：实际实例属性 / actual native unit <br> - 数量规则：实测 collect_logistics_alternate_products 的实际数量; cp_logistics; 归属至声明参考基准 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_logistics` <br> - 数量范围：尚未建立的逐实例不确定性; U_logistics_alternate_products 需要独立观察，不能视为通用上限或经验默认值 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_logistics_alternate_products <br> - 单位：instance native unit <br> - 基准：每 1 kg 参考流; 每个实际实例保留原生属性和单位 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_logistics_waste` | `logistics`; 输出; 废物流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：收货前死亡、损坏物料及送往实际接收者的废水. 对实际各死亡动物、废弃包装或物料及废水处理交接分别建立实例，记录质量、路段或事件和接收者。失败及无参考输出运输纳入期间负担分配；实际死亡替换活动不能自动视为零负担。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则：实测 collect_logistics_waste 的实际数量; cp_logistics; 归属至声明参考基准 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_logistics` <br> - 数量范围：尚未建立的逐实例不确定性; U_logistics_waste 需要独立观察，不能视为通用上限或经验默认值 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_logistics_waste <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_logistics_direct_returns` | `logistics`; 输出; 基本流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：买家收货前直接返还及逐项排放. 实际生物或海水返还及各直接污染物分别建立实例，记录物质、接收介质、原生单位以及化石或生物源碳基准。完整运输服务已包含的服务提供者燃料排放不得重复计入。 实测排放实例保留 foreground_record/collected_record；任何计算得到的实际排放实例必须改用 calculated_value/calculated_from_collection，并在本节点协议下声明其自身公式、因子及来源、实测组成投入和不确定性；不提供通用固定因子。 <br> - 流属性/单位：实际实例属性 / actual native unit <br> - 数量规则：实测 collect_logistics_direct_returns 的实际数量; cp_logistics; 归属至声明参考基准 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_logistics` <br> - 数量范围：尚未建立的逐实例不确定性; U_logistics_direct_returns 需要独立观察，不能视为通用上限或经验默认值 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_logistics_direct_returns <br> - 单位：instance native unit <br> - 基准：每 1 kg 参考流; 每个实际实例保留原生属性和单位 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `dq_logistics_water_balance` | 运输、服务和水/营养物平衡 | 运输实际载荷包括随行水、冰、包装及其他货物；空返或调位虽无产品载荷仍有活动负荷，须以实际燃料/距离/车辆服务及明确分配计入，不能以零吨公里消去。完整服务与其已覆盖燃料、材料、资产和直接排放不得重复计入。外部取水、供水产品、内部循环和实际返排水分别计量；内部循环不得再从外部取水中重复扣减。净营养物增量/滞留只用于独立平衡诊断，不自动成为负基本流、负排放或避免负荷。 | 实际载荷和车辆活动记录、服务覆盖、同批水/物质平衡与方法证据 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | 参考产品 | 拒绝缺失物种、野生、活体、观赏或从未冻结证据、实际所选航次路线或首个本地买家实物门点的参考动物。商业数量和状态独立于 kg 保留。 | priyashadi-ornamental-trincomalee-2023; un-cpc3-2025 |
| `validate_measurement` | 参考及清单 | 必须有正值同批验收动物净质量 A、最终 A / A = 1 kg、海水或包装或附带物独立排除、经校准或可追溯质量证据，以及各实例原生单位保留。不采用标准虾质量。 | same-lot-reference-identity |
| `validate_transfers` | 过程图 | 要求 T-CS-A/W/I、实际 T-SH 加 T-HP 或有证据的 T-SP 分支，以及 T-PL-A/W/P; 比较成对数量、状态、单位、责任主体及每项其他目标交接、库存和损失。不得重复最终动物或重新取用既有受管理海水。 | |
| `validate_conditional` | holding | 启用要求观察到有界干预及完整本节点记录; 旁路要求证据。未知不等于未启用; 缺失实际状态阻止完成。 | |
| `validate_outputs` | 所有过程 | 分别枚举各目标物种、等级、转售或库存输出，区分降级与废物、附带物与目标捕获物，并核对死亡、处理与直接排放及物质、介质、碳基准。 | |
| `validate_attribution` | 分配 | 检查细分、有支持的因果服务需求，然后是有记录非负可比生产者门点净销售价值后备分配（不是利润）、正分母及明确异常价值或保留库存估值处理，并采用有依据替代及动物质量敏感性; 检查所有失败期间、库存结转及共享基础设施或服务寿命依据。每事件或资产只有一个责任主体，完整服务组成不重复。无支持归属仍为未解决。 | |
| `validate_coverage` | 数据包 | 缺失数量、身份、暂养、收货、范围或期间证据须明确为不完整覆盖。候选指导不表示最终交换已验证或达到发布就绪; 报告执行、跳过检查和缺口。 | |
| `validate_atomic_completion` | 所有适用的逐流采集义务和最终交换 | 只有每项实际发生的交换均有独立原子卡及其自身的数量、属性/原生单位、采集或计算证据、范围/不确定性证据、归一化、实际去向和已验证UUID时，最终数据包才可完成并通过验证。未知身份、活动状态、数量、范围证据或去向会阻断完成；不得视为零、默认为旁路或靠省略义务通过。所有重要具体流须保留自身范围/不确定性证据采集责任；符号上限不是实证范围。 | |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景数据包及 process 和 lifecyclemodel 投影; 仅在证据、身份和质量评审完成后可作为 secondary_dataset 或 background_dataset |
| downstream_use | 野生观赏活体太平洋清洁虾供应，止于确切首个本地买家实物收货门点 |
| allowed_use | 与证据匹配的物种、路线、状态、地理、期间、目标输出和交接; 保留数量、规格和状态并采用动物质量参考 |
| excluded_use | 替代整个 CPC 叶节点; 养殖、食品、死亡、冷冻或其他物种产品; 收货后操作; 健康、安全、福利、法律或避免影响主张 |
| required_metadata | 必要限定条件; 航次或批次或期间; 原生数量和单位; 暂养状态; 实物门点; 实际过程实例; 交接、库存或共享资产台账; 来源及归属范围 |
| required_quality_disclosure | 身份缺口; 实际数量与符号不确定性; 同批质量抽样; 失败期间; 条件状态证据; 服务范围; 资产或服务寿命和分配敏感性; 已执行或跳过验证 |
| update_trigger | 路线、物种或来源或状态或门点、投入身份、实测数量或样本证据、暂养或呈装做法、输出集、共享资产服务或报告期间库存处理变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| priyashadi-ornamental-trincomalee-2023 | literature | Priyashadi、Deepananda 和 Jayasinghe（2023），Davao Research Journal 14(2):103–115，doi:10.59120/drj.v14i2.117; https://davaoresearchjournal.ph/index.php/main/article/download/117/117/419 ; 方法及结果 pp104–107、110–111 | 定性亭可马里野生礁区观赏收集、受访群体渔具和船舶替代、实际 Lysmata amboinensis 商业捕获及本地买家或出口商链; 不支持物种特定渔具分配、数值默认值或健康操作 |
| un-cpc3-2025 | official_guidance | 联合国统计司，CPC Version 3.0 explanatory notes（2025年6月30日），印刷 p53; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 野生观赏水生活体动物范围，以及鱼类和养殖来源排除; 较窄甲壳动物子集 |
| same-lot-reference-identity | method_factor | 同批归一化恒等式：正值验收动物净质量 A 除以自身，且有动物、水和包装分离以及实物收货记录 | 仅用于最终 1 kg 参考恒等式; 不提供经验流量、通用动物质量或操作范围 |
