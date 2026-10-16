---
pcr_id: pcr.farmed-live-ornamental-red-cherry-shrimp
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---
# 养殖活体观赏樱花虾

## 1. 范围与适用性
本 PCR 指导人工繁育 Neocaridina davidi 的前景数据生产，选用布宜诺斯艾利斯来源情境中的养殖路线：在使用去氯淡水的塑料水族箱内，开展繁殖、抱卵孵化、直接孵出幼虾和幼虾生长，使用实际曝气、加热、照明、爪哇莫丝及配制热带鱼饲料。边界终点是第一位实际观赏用途接收方收到完整、活体、从未冷冻动物的时点。Sganga（2019）支持实验性人工养殖路线，不能证明商业发运已经完成。每个应用均须以原始记录确认实际活体采集、状态/去向分选、有界暂养或有证据的直接旁路、防护呈装以及收货前全部物流。

所选莫丝路线不纳入第五章塑料躲避物、不同换水安排和三种饲料的试验变体。不得虚构浮游幼体培育阶段。实验性零摄氏度麻醉、处死、冷冻及生化取样不属于本活体产品的生产采收或强制质量控制。排除野生虾、观赏鱼、其他物种、食用产品、作为参考输出的死亡/冷冻动物以及收货后繁育/使用。仍有明确观赏用途去向的较低等级活虾仍是产品。本 PCR 不规定密度、温度、投喂率、年龄、繁殖产率、存活系数或健康阈值，也不作安全、合法、福利或无病保证。

## 2. 产品类别识别
| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.farmed-live-ornamental-red-cherry-shrimp |
| classification_refs | cpc:3.0:04913; narrower |
| covered_products | 所选莫丝淡水塑料水族箱路线人工繁育的完整活体、从未冷冻 Neocaridina davidi，供观赏用途，并在第一位实际接收方处验收 |
| excluded_products | 野生生物; 鱼; 其他物种; 食用或保藏产品; 实验室处死/冷冻样本; 第五章其他实验变体; 收货后使用 |
| representative_product | 活体观赏樱花虾，Neocaridina davidi |
| production_route | 人工繁殖/抱卵孵化/直接孵出幼虾/幼虾生长; 独立活体物理采集; 状态与去向分选; 实际有界暂养或有证据的旁路; 呈装; 收货前全部物流 |
| market_state | 完整活体观赏动物，保留原有身体和附肢，从未冷冻; 声明实际数量、规格/等级/状态及验收状态 |

## 3. 参考流
### 功能单位
| 字段 | 值 |
| --- | --- |
| What | 第一位实际接收方验收的完整活体观赏 Neocaridina davidi |
| How much | 1 kg 验收动物净湿质量 |
| How well | 完整活体、从未冷冻并保留原有附肢; 记录实际状态、规格/等级、只数和观赏用途去向; 排除载运水、莫丝、包装及夹带物 |
| How long or cycle | 声明完整批群和报告期，涵盖亲虾服务、抱卵孵化/直接孵出幼虾、生长、失败批次、期初/期末存量、采集及收货前全部事件; 无固定年龄或周期长度 |
| reference_flow_link | `accepted_live_shrimp` |

### 参考流对象
| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 第一位实际接收方处的完整活体观赏樱花虾 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | Neocaridina davidi; 人工繁育来源及供应方/祖代边界; 布宜诺斯艾利斯来源情境中的莫丝去氯淡水塑料水族箱路线; 实际场址及生产期/批群; 完整活体从未冷冻观赏状态; 保留原有附肢; 实际只数与规格/等级/状态; 动物净湿质量方法及载运水/游离水排除（不扣除动物本体含水）; 实际活体采集方法; 实际暂养激活或有证据的旁路; 收货前全部物流; 第一位实际接收方及收货证据; 死亡/退回/期初期末存量; 亲虾与共享服务归属及敏感性 |

## 4. 计量与单位规则
| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | A 是同一活体收货批次的验收动物净湿质量，单位 kg，采用 cp_delivery; 排除载运水/游离水、植物、容器和夹带物。使用经校准、控制皮重的直接称量，或有代表性的同批次只数与称重样本估计并记录抽样不确定性; 不使用物种平均体重。独立记录收货时活体状态。 |
| `native_units` | all inventory rows | Actual instance property | Native unit | 电力保留能量单位，运输保留服务单位，气体/材料采用已核实属性与单位; 不将服务或电力转成 kg。此处水以 kg 记录; 体积测量须具有同条件密度记录及换算证据。 |
| `animal_count` | all animal rows | Mass and supplemental count | kg; individuals | 各交接独立记录动物质量与只数; 样本估计须体现同批次活体状态及规格/等级代表性、皮重/排水方法、样本量和不确定性。保留商业按只信息; 不提供只数转质量常数。 |
| `water_and_substance_basis` | carrier water, residues and emissions | Actual substance property | Native unit | 分开动物、水、饲料、莫丝和夹带物。内部受管理水不是新增环境取水; 供应水是产品流，环境取水是基本流。排放须明确单一物质、化学或元素基准、化石/生物源碳来源及接收介质; 回流水与污染物分开。 |

## 5. 系统边界
### 边界概化
| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际养殖场收到的亲虾及其供应祖代负担、可归属的期初人工养殖存量、供应淡水及独立记录的实际去氯投入/操作、饲料/爪哇莫丝/材料与共享资产 |
| starting_condition_role | 披露受管理亲虾与投入的前景进入点，不是零负担生物起源 |
| product_classification_scope | cpc:3.0:04913 中人工繁育活体观赏甲壳类的较窄子集 |
| recursive_input_rule | 同类接收/退回/保留动物保留批群、数量和继承负担。披露上游停止边界; 不无限递归或将亲虾/期初存量归零。内部存量转移不是新增购买。 |
| upstream_dataset_requirement | 要求兼容的供应动物、饲料、水处理、电力、材料、基础设施及服务数据集，披露边界/质量; 记录未解决上游缺口，不删去负担 |
| disclosure | 场址、供应方/祖代及期初存量，实际批群/期间，节点激活，动物与水转移，归属驱动，资产/寿命/更换/清洁，收货前服务覆盖，实际接收方门槛，缺口及敏感性 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `sb_managed` | managed_biology | 繁殖/孵化/直接孵出幼虾/生长属于受管理生物生产，按实际批群与水箱期间索引。收到动物、饲料、作为基质/部分食物的莫丝、水调理和能量各有管理角色。不将未经计量的生物膜/莫丝摄食虚构为制造饲料。 | sganga-red-cherry-2019 |
| `sb_collection` | live_collection | 将活体从养殖情境物理移出须有独立操作、时间、设备和 T1 交接，与生长分开。记录进入分选的共同采集水/莫丝/夹带物和全部动物损失/退回。排除实验室处死。 | sganga-red-cherry-2019 |
| `sb_sort` | live_sorting | 分选接收未分选活虾及实际夹带物; 确认每个验收等级、其他活体去向、退回/保留动物及死亡/废物输出，具有准确交接及独立验收证据。不自动将降级或被某买方拒收的动物认作废物。 | |
| `sb_hold` | live_holding | 仅有证据确认分选后有界活体维持干预时激活，记录起止、实际条件/资源及活体 T3 输出。否则记录直接进入呈装的 T2B 旁路。未知暂养状态是证据缺口，不是旁路。不保证存活或时长。 | |
| `sb_presentation` | live_presentation | 使用实际记录的载运淡水及包装/可重复使用容器呈装防护活体; 分开动物与载水/包装身份。T4 是离开呈装的活体状态。分销属于交付节点。 | |
| `sb_delivery` | recipient_delivery | 纳入第一位实际观赏用途接收方取得实物前的每次移动、等待/转运与活体维持事件，不受付款方/运营方/发票边界影响。仅在有证据的实物收货处结束; 包含收货前死亡/退回/拒收和包装/水去向。 | |
| `sb_events` | all_nodes | 纳入实际失败/无输出批群、清洁、换批、更换、终止、可用其他产品、回收材料与废物。跨节点或期间共享水箱/曝气/加热/照明、设施、设备、容器须有唯一归属方及披露服务边界。不假设通用寿命或免费复用容器。 | |
| `sb_environment` | actual_exchanges | 观察后方可将条件卡展开为零、一个或多个独立识别交换。分开处理废物、直接环境回流水和单独污染物; 不提供无依据环境抵扣。完整服务数据集排除重复的组成能量、资产、燃料和排放。 | |

## 6. 过程清单结构
### 过程图
| process_id | Process name | Inclusion | Inclusion condition | Role | Quantitative reference |
| --- | --- | --- | --- | --- | --- |
| managed_biology | 人工繁殖与幼虾生长 | required | 所选莫丝路线且具有实际批群/水箱期间记录 | 受管理生物生产 | 可采集活体 T0、实际期末存量、结转未来批群的剩余生殖服务及其他预期产品 |
| live_collection | 独立活体物理采集 | required | 交付批次必须实际执行移出操作 | 采收边界 | 未分选活虾 T1、实际共同采集物及退回 |
| live_sorting | 状态及去向分选 | required | 实际活体产品路线 | 分级边界 | 全部实际声明等级/去向，包括 T2H 或 T2B |
| live_holding | 有界活体维持 | conditional | 呈装前具有实际记录的分选后干预，不自动激活 | 维持状态边界 | 暂养后活虾 T3 及所有其他/损失状态 |
| live_presentation | 载水与防护呈装 | required | 记录实际容纳/防护 | 呈装边界 | 完整活体呈装虾 T4，水/包装分别交接 |
| recipient_delivery | 实物收货前全部物流 | required | 每个实际运输段，包括场内实物移动，或有证据的接收方到场取货 | 交付边界 | 验收净完整活体参考动物及其他收货去向 |

生产模式为按批群/批次繁育与生长，观察到时记录重叠水箱期间，不假设连续产率。记录分开亲虾维持、抱卵孵化/直接孵出幼虾、生长、采集、实际暂养、呈装、交付、清洁/换批和终止期间。共享水箱/曝气/加热/照明、设施、设备与容器须建立服务/使用方台账。

各卡普通数量均为可归属的实际交换量除以同批次验收质量 A，按每 1 kg 参考流表达。这不将内部动物、水、能量或服务固定为 1 kg。暂养路径为 T0→T1→T2H→T3→T4; 有证据旁路为 T0→T1→T2B→T4。发送/接收双方使用相同转移标识、活体状态、只数和动物质量。CW1/CW2H/CW2B/CW3/CW4 独立记录受管理淡水; IM1 记录共同采集夹带物。R-<node>-<instance> 将活体退回受管理生物节点，接收记录相等。RW-<node>-<instance> 将可复用载水/莫丝/材料退回该节点; 其他去向须有各节点实例的成对记录。转移不新增负担或重复上游取水。

概括卡须为每个实际实例提供独立身份/去向/属性/原生单位及行实例标识。未解决概括卡不绑定固定 UUID。条件缺席须有证据; 未观察不是零。各卡符号 U_<row-instance> 是尚未确定的不确定性上界，最终数据使用前须由独立原始观察及敏感性分析支持。符号 0..U 区间是推理不确定性，不是经验范围或通用上限。实际数量证据仍须采集记录。各节点采集协议负责该节点全部卡实例及成对交接。

### 过程：人工繁殖与幼虾生长（`managed_biology`）

#### 输入

##### 产品流

###### 收到的人工繁殖亲虾（`received_broodstock`）
记录供应方收货、祖代边界、动物只数/状态及可归属湿质量; 保留上游负担、生殖服务和更换动物。

- 选定流：完整活体人工繁育 Neocaridina davidi 亲虾
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录可归属实际 received_broodstock 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_biology`
- 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_received_broodstock_instance
  - 单位：kg
  - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 期初受管理动物存量（`opening_stock`）
从紧邻前期的期末台账继承各批群亲虾/幼虾质量、只数及既有负担; 不是新增购买或免费起源。

- 选定流：期初人工养殖 Neocaridina davidi 存量
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录可归属实际 opening_stock 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_biology`
- 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_opening_stock_instance
  - 单位：kg
  - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 下游节点退回的活体动物（`returned_live_stock`）
逐个建立 R-<node>-<instance>，保留发送方活体状态、动物质量/只数、接收保管及所附负担; 仅实际记录时纳入隔离或管理服务，不规定健康处理。

- 选定流：退回的完整活体 Neocaridina davidi 存量
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录可归属实际 returned_live_stock 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_biology`
- 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_returned_live_stock_instance
  - 单位：kg
  - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 供应养殖与调理淡水（`culture_water`）
分开计量供应淡水、实际去氯投入和内部循环水; 确认供应方及上游处理，不混同环境直接取水。该通用供应淡水在本节点另行建模的调理前进入; 流身份不证明去氯、安全或供应方。

- 选定流：淡水 `f919c997-a3fc-4274-b239-9cbcd07d52ad`
- 绑定：固定（`fixed`）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录可归属实际 culture_water 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_biology`
- 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_culture_water_instance
  - 单位：kg
  - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 供应的配制饲料（`culture_feed`）
按批次和配方计量实际收到/领用饲料; TetraColor 仅为历史路线证据，不是已核实通用上游身份或普遍规定。

- 选定流：供应人工养殖虾的配制热带鱼饲料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录可归属实际 culture_feed 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_biology`
- 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_culture_feed_instance
  - 单位：kg
  - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 供应的活莫丝（`culture_moss`）
记录实际购买/引入的活莫丝湿质量、供应方及角色; 内部生长/生物膜不虚构为供应饲料交换。

- 选定流：供应作养殖基质及部分食物的爪哇莫丝
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录可归属实际 culture_moss 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_biology`
- 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_culture_moss_instance
  - 单位：kg
  - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 养殖曝气加热照明电力（`culture_electricity`）
计量或依据有记录功率/运行时间计算实际曝气/加热/照明的可归属电量，避免重复购买完整服务已覆盖组成。

- 选定流：供应养殖设备的电力
- 流属性/单位：Energy / kWh
- 数量规则：记录可归属实际 culture_electricity 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_biology`
- 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_culture_electricity_instance
  - 单位：kWh
  - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 可交付采集的活虾（`culture_ready_animals`）
T0: 实际从生长交付物理采集的活虾，保留批群/只数/湿质量，不固定为最终 A。生长和移出分开。

- 选定流：待采集的人工养殖活体 Neocaridina davidi
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录可归属实际 culture_ready_animals 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_biology`
- 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_culture_ready_animals_instance
  - 单位：kg
  - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 保留亲虾幼虾及未来生产存量（`closing_stock`）
记录实际期末活体批群/亲虾/幼虾、所携服务负担和下一期链接; 未来未孵出后代是服务分配承诺，不是虚构交付动物。

- 选定流：期末保留的人工养殖 Neocaridina davidi 存量
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录可归属实际 closing_stock 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_biology`
- 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_closing_stock_instance
  - 单位：kg
  - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

### 过程：独立活体物理采集（`live_collection`）

#### 输入

##### 产品流

###### 进入活体采集的动物（`collection_live_input`）
按 culture_ready_animals 同一批群/活体状态/只数/湿质量接收 T0; 记录实际采集方法和操作边界。

- 选定流：待采集的人工养殖活体 Neocaridina davidi
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录可归属实际 collection_live_input 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_collection`
- 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_collection_live_input_instance
  - 单位：kg
  - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 采集的未分选活虾（`collected_unsorted_animals`）
T1: 实际进入分选的活体采集动物，记录批群、只数、动物净湿质量、状态与保管; 采收是物理移出，不是实验处死。

- 选定流：未分选的完整活体采集 Neocaridina davidi
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录可归属实际 collected_unsorted_animals 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_collection`
- 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_collected_unsorted_animals_instance
  - 单位：kg
  - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 共同采集的受管理载运淡水（`collection_carrier_to_sort`）
CW1: 送入分选的实际载运淡水，与动物及夹带物质量分开; 分选输入数量/状态一致。

- 选定流：共同采集并送分选的受管理淡水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录可归属实际 collection_carrier_to_sort 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_collection`
- 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_collection_carrier_to_sort_instance
  - 单位：kg
  - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 采集活体退回（`collection_returned_animals`）
R-live_collection-<instance>: 实际未采收/退回活体交回受管理存量; 准确质量/只数/状态和负担与 returned_live_stock 一致。

- 选定流：采集后退回养殖的完整活体动物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录可归属实际 collection_returned_animals 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_collection`
- 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_collection_returned_animals_instance
  - 单位：kg
  - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

### 过程：状态及去向分选（`live_sorting`）

#### 输入

##### 产品流

###### 分选处未分选动物（`sorting_animals`）
以一致转移质量/只数/活体状态接收 T1，观察实际规格/状态/去向类别，不规定市场阈值。

- 选定流：未分选的完整活体采集 Neocaridina davidi
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录可归属实际 sorting_animals 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sorting`
- 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_sorting_animals_instance
  - 单位：kg
  - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 分选接收的受管理载运淡水（`sorting_carrier`）
按 collection_carrier_to_sort 相同状态/数量接收 CW1; 独立新供应补水记入 collect_sorting_resources。

- 选定流：共同采集并送分选的受管理淡水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录可归属实际 sorting_carrier 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sorting`
- 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_sorting_carrier_instance
  - 单位：kg
  - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 进入实际暂养的活体等级输出（`sorted_to_holding`）
T2H: 逐项建立实际进入激活暂养的等级，暂养输入只数/质量/状态相同。此类动物不再计为 T2B。

- 选定流：送有界暂养的已分选完整活体 Neocaridina davidi
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录可归属实际 sorted_to_holding 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sorting`
- 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_sorted_to_holding_instance
  - 单位：kg
  - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 旁路暂养的活体等级输出（`sorted_bypass`）
T2B: 仅限有证据旁路; 逐项记录实际直接进入呈装的等级。不从缺失暂养记录推断旁路。

- 选定流：送直接呈装的已分选完整活体 Neocaridina davidi
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录可归属实际 sorted_bypass 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sorting`
- 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_sorted_bypass_instance
  - 单位：kg
  - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 分选后继续转移的受管理载水（`sorting_carrier_onward`）
将 CW2H 分至激活暂养，CW2B 分至有证据的直接呈装，具有各自准确数量; CW1 加新增供应须与复用、回收、废物和直接回流水对账。

- 选定流：从分选送暂养或呈装的受管理淡水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录可归属实际 sorting_carrier_onward 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sorting`
- 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_sorting_carrier_onward_instance
  - 单位：kg
  - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

### 过程：有界活体维持（`live_holding`）

#### 输入

##### 产品流

###### 进入实际暂养的分选动物（`holding_animals`）
以准确质量/只数/活体状态接收 T2H 各等级; 记录干预起止、负责运营方和实际条件。不激活须证据支持，不能假设。

- 选定流：送有界暂养的已分选完整活体 Neocaridina davidi
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录可归属实际 holding_animals 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_holding`
- 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_holding_animals_instance
  - 单位：kg
  - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 进入暂养的受管理水（`holding_carrier`）
独立于动物接收 CW2H 数量/状态; 不在此计入 CW2B 或重新抽取受管理淡水。

- 选定流：从分选送暂养或呈装的受管理淡水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录可归属实际 holding_carrier 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_holding`
- 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_holding_carrier_instance
  - 单位：kg
  - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 新增供应暂养水（`holding_supplied_water`）
计量实际新增供应淡水及上游调理; 对账换水/回流数量，不规定盐度、温度或安排。该通用供应淡水在本节点另行建模的调理前进入; 流身份不证明去氯、安全或供应方。

- 选定流：淡水 `f919c997-a3fc-4274-b239-9cbcd07d52ad`
- 绑定：固定（`fixed`）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录可归属实际 holding_supplied_water 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_holding`
- 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_holding_supplied_water_instance
  - 单位：kg
  - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 暂养电力（`holding_electricity`）
记录实际暂养曝气/加热/照明能量、占用/时间，以及计量或功率/运行时间证据; 不假设连续干预。

- 选定流：供应活体暂养的电力
- 流属性/单位：Energy / kWh
- 数量规则：记录可归属实际 holding_electricity 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_holding`
- 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_holding_electricity_instance
  - 单位：kWh
  - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 有界暂养后的活虾（`held_live_animals`）
T3: 呈装交接时各等级实际活体状态/只数/质量，保留期间及状态证据; 不保证存活或强制参考质量。

- 选定流：实际有界暂养后的完整活体 Neocaridina davidi
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录可归属实际 held_live_animals 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_holding`
- 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_held_live_animals_instance
  - 单位：kg
  - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 暂养后载运淡水（`holding_carrier_onward`）
CW3: 实际进入呈装的载运水，与新增供应、循环水、废物及环境回流水分开。

- 选定流：从暂养送呈装的受管理淡水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录可归属实际 holding_carrier_onward 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_holding`
- 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_holding_carrier_onward_instance
  - 单位：kg
  - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

### 过程：载水与防护呈装（`live_presentation`）

#### 输入

##### 产品流

###### 进入呈装的暂养活虾（`presentation_animals_held`）
仅在暂养实际运行时接收 T3，动物质量/只数/状态一致; 同批次不重复计入 T2B。

- 选定流：实际有界暂养后的完整活体 Neocaridina davidi
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录可归属实际 presentation_animals_held 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_presentation`
- 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_presentation_animals_held_instance
  - 单位：kg
  - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 直接进入呈装的分选活虾（`presentation_animals_bypass`）
仅在有证据暂养旁路时接收 T2B，状态/质量/只数一致; 未知实际状态阻碍完整前景数据包。

- 选定流：送直接呈装的已分选完整活体 Neocaridina davidi
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录可归属实际 presentation_animals_bypass 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_presentation`
- 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_presentation_animals_bypass_instance
  - 单位：kg
  - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 进入呈装的既有载运淡水（`presentation_managed_water`）
独立接收 CW3 或 CW2B，保留发送方输出数量/状态; 记录分流/替换水，不新增取水。

- 选定流：进入呈装的受管理载运淡水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录可归属实际 presentation_managed_water 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_presentation`
- 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_presentation_managed_water_instance
  - 单位：kg
  - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 新增呈装淡水（`presentation_supplied_water`）
计量实际新增已调理载运淡水、供应方及任何处理投入; 排除动物/莫丝/包装质量，并分开内部载水。

- 选定流：供应观赏动物呈装的淡水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录可归属实际 presentation_supplied_water 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_presentation`
- 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_presentation_supplied_water_instance
  - 单位：kg
  - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 防护呈装中的完整活体动物（`presented_live_animals`）
T4: 交付物流的活体动物，具有实际等级/只数/动物净湿质量和包装标识; 载水及包装在核算中分别转移。

- 选定流：已呈装的完整活体观赏 Neocaridina davidi
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录可归属实际 presented_live_animals 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_presentation`
- 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_presented_live_animals_instance
  - 单位：kg
  - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 随动物运送的载运淡水（`presentation_carrier_to_delivery`）
CW4: 实际交给物流的载运淡水，独立于 T4 动物质量及包装，与接收输入一致。

- 选定流：随活体动物运送的受管理呈装淡水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录可归属实际 presentation_carrier_to_delivery 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_presentation`
- 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_presentation_carrier_to_delivery_instance
  - 单位：kg
  - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

### 过程：实物收货前全部物流（`recipient_delivery`）

#### 输入

##### 产品流

###### 进入物流的已呈装活虾（`delivery_animals`）
在发运及各次保管转移按准确只数/活体状态/净湿质量接收 T4，不受服务付款方影响; 记录全部运输段及等待期间。

- 选定流：已呈装的完整活体观赏 Neocaridina davidi
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录可归属实际 delivery_animals 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_delivery`
- 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_delivery_animals_instance
  - 单位：kg
  - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 进入物流的载运淡水（`delivery_carrier`）
按 presentation_carrier_to_delivery 相同状态/数量接收 CW4; 记录各段实际水维持/替换。

- 选定流：随活体动物运送的受管理呈装淡水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录可归属实际 delivery_carrier 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_delivery`
- 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_delivery_carrier_instance
  - 单位：kg
  - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 第一位实物接收方处完整活体观赏参考动物（`accepted_live_shrimp`）
按 cp_delivery 确定 A，保留实际活体只数/等级及实物收货证据，排除全部水/莫丝/包装/夹带物。同一验收批次给出 A/A = 1 kg; 这不是生产产率。

- 选定流：第一位实际接收方处的完整活体观赏樱花虾
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_delivery`
- 来源：`mass-balance-identity`
- 数量范围：同批次验收参考恒等式
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 废物流

##### 基本流

## 7. 分配与副产品处理
| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `al_subdivide` | all_nodes | 优先分别计量批群、等级、操作和服务实例。每个动物/物料具有唯一转移身份和负担归属方; 内部交接输出不再重复成为最终独立销售输出。不提供替代或环境抵扣。 | |
| `al_broodstock` | managed_biology | 将收到亲虾、祖代/期初负担与成体维持归属实际生殖服务及预期输出。保留已由当前后代消耗的服务、携至未来批群的剩余服务、更换/死亡/终止及期末存量。使用有证据的亲虾占用/生物量时间与生殖服务记录，并说明因果理由; 无合理因果驱动时披露缺口，测试时间、生物量和输出价值等替代驱动，不声称完成归属。不将全部服务计给当前后代后又把同一负担结转未来。 | |
| `al_cohorts` | managed_biology | 跟踪实际抱卵孵化/直接孵出幼虾/生长批群与重叠水箱/期间。共享运行负担按实测设备使用、占用水箱时间或其他有记录因果服务驱动分配; 先分离直接归属饲料/水。将失败/无输出批群、死亡、更换、清洁与换批纳入负责服务池，不予删除，也不以零输出作分母。结转至有关有效输出或披露未解决分配。 | |
| `al_outputs` | all_intended_outputs | 枚举各参考等级、其他观赏等级、转移亲虾/幼虾产品、可用夹带物及实际退回/期末存量。拆分后尽可能采用经证明的因果生物/服务驱动。联合输出无法因果拆分时，采用可比且非负的生产者门净销售价值进行经济分配，包括已声明的留存存量价值，并记录价格期间/来源与严格正分母。零值、负值或缺失值要求有理由的替代驱动和敏感性分析; 不使用利润比。测试质量及服务驱动替代方案。只数是补充信息，不把不同体型动物不加限定地等同。不得以层级捷径将降级产品变成废物。 | |
| `al_shared` | assets_and_services | 为养殖水箱、曝气/加热/照明设备、设施、采集/分选/暂养设备、容器和每种实际共享服务建立唯一服务台账，枚举使用节点/批群/期间。按有证据的服务寿命和实际使用/容量，通过观察运行/占用或物理合理驱动归属安装/更换/维护资产。纳入闲置/失败/清洁/终止份额，测试利用率与寿命敏感性; 禁止无依据标准寿命或免费基础设施。各份额与结转服务须合计一个服务池。 | |
| `al_packaging` | presentation_and_delivery | 一次性材料承担实际可归属生产及处理负担。可复用容器须记录实际服务次数、清洁/修理/更换、损失、返回运输及使用结束证据，保持一致服务分母与敏感性; 不无限复用或省略返回物流。呈装节点负责包装首次投入，下游移动不重复购买。 | |
| `al_delivery` | recipient_delivery | 按有记录的货运组成、载水/包装总载荷、距离、容量、空载/返回移动及相关服务驱动归属实际收货前各段。参考归一化保留动物净质量。完整运输或暂养服务明确替代其覆盖组成; 未覆盖组成保留。失败发运及其他去向仍承担负担。付款方或发票边界不截断运输。 | |

## 8. 前景数据采集、计算与质量规则
### 数据采集协议
所有协议均在归一化前保留原始/原生数量。每个实际卡实例记录行标识、身份、原生属性/单位、运营方/场址、批群/期间、时间、转移/收货标识、去向、活体状态/只数/动物质量或物料数量、条件激活、完整服务覆盖、归属份额及测量不确定性。零须有实际缺席证据。条件资源/排放概括卡须为每种独立交换及单位保留记录。计量/测量分子属于 collected_record; 功率乘运行时间估计、已分配/归一化电量或计算排放须声明实际实例公式、测量投入组成、适用因子/来源/单位/基准及不确定性，使用 value_mode calculated_value 和 evidence_kind calculated_from_collection。各计算实例须覆盖概括卡的普通数量元数据，不可把计算默认为直接测量。样本须对应同一活体批次/等级，记录经校准皮重、载水排除及抽样不确定性; 测量不要求来源研究的处死操作。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_biology | managed_biology | 全部生物生产卡及实际实例 | 批群存量台账、仪表、购买和资产记录 | 批群; 亲虾供应方/祖代; 期初/期末存量; 只数; 动物湿质量; 投入数量; 孵化/生长事件; 饲料/莫丝/水; 能量; 资产/运行时间; 退回; 死亡; 清洁; 服务驱动; 不确定性 | 记录实际人工养殖批群/期间、经校准存量/样本质量和只数、供应饲料/莫丝/水、能量计量或有记录功率/运行时间、调理水投入、共享资产/服务及废物/排放证据; 对账期初加到货与生长和离开/损失/期末存量，并记录生物质量变化 | kg; individuals; kWh; each service/material native unit | 每次投入/存量/转移/事件及仪表期间 | 完整繁殖/孵化/直接孵出幼虾/生长及关联前期/未来存量期间，含失败批群与终止 | 实际养殖场/水箱及可归属供应方 | 每 1 kg 参考流 | 原始供应及祖代记录; 校准/皮重/抽样记录; 批群平衡; 服务寿命/驱动证据; 敏感性及缺口登记 |
| cp_collection | live_collection | 全部采集卡及实际实例 | 操作及转移记录 | 采集标识; 养殖批群; 起止; 方法; CM0/T0/T1/CW1/IM1; 活体只数/质量/状态; 夹带物身份/质量; 投入; 损失; 退回; 资源; 不确定性 | 观察实际活体物理移出; 将动物称重/计数与载水及夹带物分开，对账发送/接收签署转移及计量资源/服务记录; 分开分类退回活体与回收材料 | kg; individuals; each actual instance native unit | 每次操作及交接 | 为声明收货批次提供动物的全部采集操作，含失败操作 | 实际养殖至采集接口及操作 | 每 1 kg 参考流 | 操作观察; 成对转移台账; 经校准皮重/抽样记录; 损失与夹带物去向证据 |
| cp_sorting | live_sorting | 全部分选卡及实际实例 | 等级及去向台账 | T1/CW1/IM1; 实际使用等级标准; T2H/T2B; CW2H/CW2B; 只数/质量/状态; 夹带物去向; 退回/废物; 资源; 不确定性 | 观察各输入活体/夹带物流和全部实际去向; 经校准净质量/只数，必要时提供同批次样本证据; 从两侧接口确认暂养激活或直接旁路 | kg; individuals; each actual instance native unit | 每个分选批次、去向及资源事件 | 全部声明批次及分选失败 | 实际分选场址/运营方 | 每 1 kg 参考流 | 实际等级/验收记录; 成对转移; 测量; 有证据暂养/旁路; 活体拒收处置 |
| cp_holding | live_holding | 全部暂养卡及实际实例 | 干预、仪表及转移记录 | 激活; 起止; T2H/T3/CW2H/CW3; 实际条件; 动物只数/质量/状态; 水; 电力; 供应/服务; 死亡; 退回; 不确定性 | 通过实际运营方/时间/资源记录确认有界干预; 观察两侧活体状态和全部等级/退回/废物去向，计量实际能量/水或记录经校准估计; 在本节点之外独立证明旁路 | kg; individuals; kWh; each actual instance native unit | 每个实际暂养期间/资源及交接 | 全部激活期间，含失败批次 | 实际暂养水箱/运营方 | 每 1 kg 参考流 | 时间/条件日志; 仪表/运行时间证据; 成对转移; 服务排除; 死亡与去向记录 |
| cp_presentation | live_presentation | 全部呈装卡及实际实例 | 批次包装与载水记录 | T3/T2B; CW3/CW2B; 新水; T4/CW4/PK4; 动物只数/质量/状态; 包装标识/材料/复用; 投入; 拒收/退回; 不确定性 | 对账实际暂养或有证据旁路动物; 活体称重/计数与载运淡水及包装分开; 记录实际材料/服务、复用/服务次数、清洁、更换与全部输出去向 | kg; individuals; each actual instance native unit | 每个实际批次/包装、加水及交接 | 声明批次的完整呈装事件，含失败 | 实际呈装场址/运营方 | 每 1 kg 参考流 | 成对交接; 经校准皮重/抽样记录; 材料购买/领用及复用服务台账; 废水/去向证据 |
| cp_delivery | recipient_delivery | 全部交付卡与最终参考 | 货运/保管、实物收货及净质量记录 | T4/CW4/PK4; 全部段/运营方/时间/距离/载荷; 实际资源; 已覆盖服务组成; 接收方收货; 活体只数/状态/等级; 验收动物净质量 A; 载水/包装/夹带物皮重; 样本只数/质量/不确定性; 拒收/退回/死亡数量; 去向 | 跟踪第一位实际接收方前每次移动/等待/维持; 确认签署实际保管/收货及活体验收。使用经校准、控制皮重且排除水/莫丝/包装/夹带物的称量，或有代表性的同批次只数与称重样本及不确定性记录，确定同批次 A; 保留商业只数。对账所有结果，并记录全部收货前服务/自营活动 | kg; individuals; kWh; tonne-kilometre or actual native service unit; each instance native unit | 每段/保管事件、维持投入和实物收货 | 发运至第一位实物收货，含失败货运及实际退回/服务期间 | 全部实际收货前场址/运营方，包括接收方到养殖场取货 | 每 1 kg 参考流 | 经校准皮重/抽样记录; 活体实物收货/保管证据; 路线/载荷数据; 实际组成覆盖; 废物/退回及失败发运对账 |

### 计算规则
| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_lot | all inventory rows | 可归属实际实例数量除以 A，得到每 1 kg 参考流的原生数量; A 是同批次验收动物净湿质量，单位 kg。保留每次转移实际分子; 不将内部供料归一为 1 kg。 | 实际实例数量; 归属份额; A; cp_delivery | 每 1 kg 参考流的原生单位数量 | mass-balance-identity |
| final_reference | accepted_live_shrimp | 对同一验收活体批次且 A 大于零，验收输出归一为 A/A = 1 kg; 卡片有限表达式是 1 kg。这是收货记录计算，不是固定经验产率。 | A; cp_delivery | 1 kg 验收净活体动物质量 | mass-balance-identity |
| sample_mass | all animal rows | 记录只数乘有代表性的同批次样本平均活体净质量，仅估计该批次质量; 保留抽样设计、称重样本/只数、活体状态/等级代表性、皮重/排水方法及传播不确定性。不提供物种通用换算。 | 批次只数; 样本动物质量; 样本只数; 抽样不确定性; 本节点协议 | 含不确定性的同批次动物质量估计 | |
| stock_service | managed_biology | 对账结转期初负担加新增可归属亲虾服务，与当前后代、其他预期产品、实际损失和结转期末/未来服务。生物生长不是购买; 未来服务是台账承诺而非假设动物输出。 | 批群/期间存量与事件; 服务池; 因果驱动; 敏感性 | 对账后的当前与结转存量/服务份额 | |
| instance_range | all non-reference cards | 以实际原生单位，根据独立复核观察、限值及敏感性确定 U_<row-instance>。未确定前，0..U 仅为符号推理不确定性; 缺失上界或条件状态阻碍最终清单值，而不是默认零。 | 实际实例单位; 观察; 不确定性证据; 敏感性 | 有依据的逐实例不确定性界限 | |

### 数据质量要求
| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_scope | reference lot | 证明物种、人工繁育来源、所选莫丝路线、完整活体从未冷冻观赏验收及第一位实际接收方; 实验来源不能代替应用交付证据 | 供应方/批群及实物收货记录 |
| dq_transfers | all nodes | 动物/水/夹带物/包装和退回的成对转移在标识、归属方、数量、原生单位/状态上相符; 预期输出、废物及期末存量完整 | 发送/接收台账与含不确定性平衡 |
| dq_periods | all cohorts and assets | 纳入失败批次、期初/期末存量、清洁/换批/更换/终止、未来亲虾服务及全部共享使用方; 证明寿命/使用驱动及敏感性 | 期间和服务台账 |
| dq_bounds | all cards | 符号上界和未知条件状态是未解决数据需求，不是测量范围、通用上限或默认零; 保留数量/身份缺口 | 原始记录、有依据不确定性及缺口登记 |
| dq_services | all services | 将完整服务覆盖对应实际能量/资产/材料/排放，仅保留未覆盖组成; 每项功率乘运行时间或排放计算声明实际实例公式/因子、测量组成及 calculated_value/calculated_from_collection 元数据 | 服务边界及组成台账 |
| dq_identity | all actual exchanges | 核实每个最终交换的具体流/属性/单位支持; 在观察实例出现前保留条件概括卡; 参考身份缺口阻止发布 | 兼容身份详情证据与数据集记录 |
| dq_emissions | water/waste/emissions | 区分供应与抽取水、内部/回收载水、处理与直接回流、独立物质/介质及碳来源; 不采用通用污染物或重复服务排放 | 测量或明确复核因子/来源、去向及化学/元素基准 |
| dq_translation | bilingual PCR | 双语保留每个行/协议/规则标识、数量/范围/原生单位、实际条件及来源含义 | 逐卡/人工一致性审查 |
| `collect_biology_resources` | `managed_biology`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际养殖材料或服务实例. 逐项建立实际去氯材料、设备/水箱/设施服务、清洁/换批或维护投入，采用原生单位和角色; 记录共享使用方、服务寿命、更换及完整服务排除。 <br> - 流属性/单位：Actual instance property / native unit <br> - 数量规则：记录可归属实际 collect_biology_resources 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_biology` <br> - 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_biology_resources_instance <br> - 单位：native unit <br> - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_recovered_managed_material` | `managed_biology`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：退回养殖的回收受管理物料. 按发送方数量/状态/属性/单位接收每个 RW-<node>-<instance>; 载运淡水为 kg，其他材料保留原生单位。不新增环境取水或回收抵扣。 <br> - 流属性/单位：Actual instance property / native unit <br> - 数量规则：记录可归属实际 collect_recovered_managed_material 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_biology` <br> - 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_recovered_managed_material_instance <br> - 单位：native unit <br> - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_culture_matter_for_collection` | `managed_biology`; 输出; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：受管理采集载运物和夹带物. CM0: 从养殖交给 collect_collection_managed_matter 的实际受管理水/莫丝/基质/其他物料，实例数量/状态/属性/单位完全一致; 对账水及莫丝期初/新增/期末存量，不重复新供应。 <br> - 流属性/单位：Actual instance property / native unit <br> - 数量规则：记录可归属实际 collect_culture_matter_for_collection 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_biology` <br> - 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_culture_matter_for_collection_instance <br> - 单位：native unit <br> - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_biology_other_products` | `managed_biology`; 输出; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：其他预期活体养殖产品实例. 逐项建立实际交给其他接收方的活亲虾/幼虾/其他养殖产品，保留只数/状态/去向和负担; 不虚构副产品或重分类废物。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则：记录可归属实际 collect_biology_other_products 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_biology` <br> - 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_biology_other_products_instance <br> - 单位：kg <br> - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_biology_waste` | `managed_biology`; 输出; 废物流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：送处理的实际养殖废物实例. 分开死亡动物、未食饲料/莫丝/污泥、废材料和送处理废水; 逐项确认废物/去向与实际质量，保留含水量。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则：记录可归属实际 collect_biology_waste 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_biology` <br> - 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_biology_waste_instance <br> - 单位：kg <br> - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_biology_release` | `managed_biology`; 输出; 基本流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际养殖回流水或污染物实例. 实际直接环境转移时，分开回流水和每种已识别污染物、化学/碳基准及介质; 区分化石/生物源碳，避免重复处理服务。 <br> - 流属性/单位：Actual instance property / native unit <br> - 数量规则：记录可归属实际 collect_biology_release 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_biology` <br> - 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_biology_release_instance <br> - 单位：native unit <br> - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_collection_managed_matter` | `live_collection`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：受管理采集载运物和夹带物. 接收 CM0 的实际受管理水、莫丝及其他采集物，实例数量/状态/属性/单位与发送方一致; 对账源养殖水箱，不新增淡水购买。水/固体为 kg，其他实例保留原生单位。 <br> - 流属性/单位：Actual instance property / native unit <br> - 数量规则：记录可归属实际 collect_collection_managed_matter 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_collection` <br> - 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_collection_managed_matter_instance <br> - 单位：native unit <br> - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_collection_resources` | `live_collection`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际活体采集资源实例. 记录实际网具/容器/设备服务、补水、能量或其他操作投入; 分开实例，避免重复记录养殖资产/服务。 <br> - 流属性/单位：Actual instance property / native unit <br> - 数量规则：记录可归属实际 collect_collection_resources 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_collection` <br> - 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_collection_resources_instance <br> - 单位：native unit <br> - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_collection_incidentals_to_sort` | `live_collection`; 输出; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：共同采集的莫丝基质或其他夹带物. IM1: 实际独立计量进入分选的物料，记录物种/材料及待观察的预期处置; 不假设只采集了虾。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则：记录可归属实际 collect_collection_incidentals_to_sort 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_collection` <br> - 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_collection_incidentals_to_sort_instance <br> - 单位：kg <br> - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_collection_other_live` | `live_collection`; 输出; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：采集其他活体产品实例. 记录实际独立预期活体去向或等级交给其他接收方的每项输出，保留只数/质量/状态及独立转移; 不因不属参考批次而认作废物。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则：记录可归属实际 collect_collection_other_live 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_collection` <br> - 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_collection_other_live_instance <br> - 单位：kg <br> - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_collection_recovered_material` | `live_collection`; 输出; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：退回养殖的采集回收物料. RW-live_collection-<instance>: 实际水/莫丝/可复用材料分别退回 collect_recovered_managed_material，原生单位/状态/数量一致; 不与 CW1/IM1 重叠。 <br> - 流属性/单位：Actual instance property / native unit <br> - 数量规则：记录可归属实际 collect_collection_recovered_material 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_collection` <br> - 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_collection_recovered_material_instance <br> - 单位：native unit <br> - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_collection_waste` | `live_collection`; 输出; 废物流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：送处理的实际采集废物实例. 按独立身份/去向记录死亡动物、碎屑及其他实际丢弃材料或送处理废水; 对账操作损失。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则：记录可归属实际 collect_collection_waste 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_collection` <br> - 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_collection_waste_instance <br> - 单位：kg <br> - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_collection_release` | `live_collection`; 输出; 基本流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际采集回流水或污染物实例. 仅记录实际直接环境转移，分开回流水和独立识别的污染物/介质/碳基准; 不是内部受管理水或处理废物。 <br> - 流属性/单位：Actual instance property / native unit <br> - 数量规则：记录可归属实际 collect_collection_release 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_collection` <br> - 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_collection_release_instance <br> - 单位：native unit <br> - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_sorting_incidentals` | `live_sorting`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：共同采集的莫丝基质或其他夹带物. 按 collect_collection_incidentals_to_sort 同一材料/质量接收 IM1; 分类每个实际夹带物去向，含可用产品/回收/废物/直接环境转移。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则：记录可归属实际 collect_sorting_incidentals 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_sorting` <br> - 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_sorting_incidentals_instance <br> - 单位：kg <br> - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_sorting_resources` | `live_sorting`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际活体分选材料或服务实例. 以原生单位记录分选实际容器、仪器、电力、补水及共享服务，并排除完整服务重复组成。 <br> - 流属性/单位：Actual instance property / native unit <br> - 数量规则：记录可归属实际 collect_sorting_resources 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_sorting` <br> - 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_sorting_resources_instance <br> - 单位：native unit <br> - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_sorting_other_products` | `live_sorting`; 输出; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际预期分选产品或活体退回实例. 逐项建立其他观赏等级/接收方、交回 returned_live_stock 的 R-live_sorting-<instance> 活体以及可用夹带产品，具有独立交接/质量/适用只数; 区分买方拒收、死亡与废物。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则：记录可归属实际 collect_sorting_other_products 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_sorting` <br> - 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_sorting_other_products_instance <br> - 单位：kg <br> - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_sorting_recovered_material` | `live_sorting`; 输出; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：退回养殖的分选回收物料. RW-live_sorting-<instance>: 实际可复用载水/莫丝/材料送回 collect_recovered_managed_material，数量/原生单位/状态一致; 不重复继续转移载水或夹带产品。 <br> - 流属性/单位：Actual instance property / native unit <br> - 数量规则：记录可归属实际 collect_sorting_recovered_material 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_sorting` <br> - 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_sorting_recovered_material_instance <br> - 单位：native unit <br> - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_sorting_waste` | `live_sorting`; 输出; 废物流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：送处理的实际分选废物实例. 记录每种死亡动物/丢弃夹带物/废材料/送处理废水的去向; 较低等级活体不自动视作废物。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则：记录可归属实际 collect_sorting_waste 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_sorting` <br> - 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_sorting_waste_instance <br> - 单位：kg <br> - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_sorting_release` | `live_sorting`; 输出; 基本流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际分选回流水或污染物实例. 分开记录直接回流水、独立识别污染物和接收介质，保留物质/碳基准; 不能代替废物处理输出。 <br> - 流属性/单位：Actual instance property / native unit <br> - 数量规则：记录可归属实际 collect_sorting_release 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_sorting` <br> - 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_sorting_release_instance <br> - 单位：native unit <br> - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_holding_resources` | `live_holding`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际活体暂养材料或服务实例. 逐项记录实际饲料、莫丝、气体、处理材料、设备/容器或维护服务，具有身份/原生单位、角色和唯一负担归属方; 不规定健康剂量或供氧。 <br> - 流属性/单位：Actual instance property / native unit <br> - 数量规则：记录可归属实际 collect_holding_resources 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_holding` <br> - 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_holding_resources_instance <br> - 单位：native unit <br> - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_holding_other_products` | `live_holding`; 输出; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际其他暂养活体产品或退回实例. 记录全部实际其他活体等级/接收方及退回 returned_live_stock 的 R-live_holding-<instance>，含状态/只数/质量/负担; 活体拒收不自动成为死亡废物。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则：记录可归属实际 collect_holding_other_products 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_holding` <br> - 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_holding_other_products_instance <br> - 单位：kg <br> - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_holding_recovered_material` | `live_holding`; 输出; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：退回养殖的暂养回收物料. RW-live_holding-<instance>: 将实际可复用水/莫丝/容器/材料退回 collect_recovered_managed_material; 保持接收方状态/数量/原生单位一致。 <br> - 流属性/单位：Actual instance property / native unit <br> - 数量规则：记录可归属实际 collect_holding_recovered_material 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_holding` <br> - 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_holding_recovered_material_instance <br> - 单位：native unit <br> - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_holding_waste` | `live_holding`; 输出; 废物流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：送处理的实际暂养废物实例. 记录实际死亡动物、饲料/莫丝残余、废材料及送处理废水的准确去向; 包含失败暂养批次。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则：记录可归属实际 collect_holding_waste 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_holding` <br> - 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_holding_waste_instance <br> - 单位：kg <br> - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_holding_release` | `live_holding`; 输出; 基本流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际暂养回流水或污染物实例. 分开记录直接环境水和每种已观察污染物的物质/化学或元素基准、碳来源及接收介质; 无环境抵扣。 <br> - 流属性/单位：Actual instance property / native unit <br> - 数量规则：记录可归属实际 collect_holding_release 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_holding` <br> - 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_holding_release_instance <br> - 单位：native unit <br> - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_presentation_resources` | `live_presentation`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际防护呈装材料或服务实例. 逐项建立实际袋/容器/封口/标签/防护材料、复用服务、能量或气体，保留原生单位、实际复用次数、清洁、更换及使用结束交接; 不预设材料或氧气选择。 <br> - 流属性/单位：Actual instance property / native unit <br> - 数量规则：记录可归属实际 collect_presentation_resources 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_presentation` <br> - 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_presentation_resources_instance <br> - 单位：native unit <br> - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_presentation_package_to_delivery` | `live_presentation`; 输出; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：交给物流的防护呈装包装实例. PK4: 交给物流的每个实际包装/容器实例状态与原生数量; 独立复用/负担/使用结束台账及成对输入，不纳入动物质量。 <br> - 流属性/单位：Actual instance property / native unit <br> - 数量规则：记录可归属实际 collect_presentation_package_to_delivery 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_presentation` <br> - 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_presentation_package_to_delivery_instance <br> - 单位：native unit <br> - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_presentation_other_products` | `live_presentation`; 输出; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际其他呈装活体产品或退回实例. 记录实际其他等级/接收方或退回受管理存量的 R-live_presentation-<instance> 活体，接收只数/质量/状态及携带负担相同。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则：记录可归属实际 collect_presentation_other_products 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_presentation` <br> - 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_presentation_other_products_instance <br> - 单位：kg <br> - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_presentation_recovered_material` | `live_presentation`; 输出; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：退回养殖的呈装回收物料. RW-live_presentation-<instance>: 实际可复用水/莫丝/包装/材料退回 collect_recovered_managed_material，原生单位/状态/数量成对一致; 排除已送出的 CW4/PK4。 <br> - 流属性/单位：Actual instance property / native unit <br> - 数量规则：记录可归属实际 collect_presentation_recovered_material 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_presentation` <br> - 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_presentation_recovered_material_instance <br> - 单位：native unit <br> - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_presentation_waste` | `live_presentation`; 输出; 废物流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：送处理的实际呈装废物实例. 分开记录死亡动物、拒收/废包装、残余和废水处理去向; 可复用包装退回不是废物。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则：记录可归属实际 collect_presentation_waste 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_presentation` <br> - 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_presentation_waste_instance <br> - 单位：kg <br> - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_presentation_release` | `live_presentation`; 输出; 基本流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际呈装回流水或污染物实例. 记录实际直接环境水与独立识别的污染物/介质/基准实例; 不因供应气体而虚构气体排放。 <br> - 流属性/单位：Actual instance property / native unit <br> - 数量规则：记录可归属实际 collect_presentation_release 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_presentation` <br> - 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_presentation_release_instance <br> - 单位：native unit <br> - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_delivery_packages` | `recipient_delivery`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：交给物流的防护呈装包装实例. 以一致包装标识/原生数量/状态接收 PK4; 继承复用所有权和使用结束义务，不重复购买同一包装。 <br> - 流属性/单位：Actual instance property / native unit <br> - 数量规则：记录可归属实际 collect_delivery_packages 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_delivery` <br> - 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_delivery_packages_instance <br> - 单位：native unit <br> - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_delivery_resources` | `recipient_delivery`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际收货前物流或维持实例. 以已核实服务单位建立完整运输服务，或逐段记录自营燃料/能量/资产/排放; 纳入等待/转运的实际水/气体/能量及其他维持投入。不同时计算完整服务及其已覆盖组成。 <br> - 流属性/单位：Actual instance property / native unit <br> - 数量规则：记录可归属实际 collect_delivery_resources 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_delivery` <br> - 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_delivery_resources_instance <br> - 单位：native unit <br> - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_delivery_other_live` | `recipient_delivery`; 输出; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际其他交付活体产品或退回实例. 记录实际较低等级/其他活体收货产品，以及退回 returned_live_stock 的 R-recipient_delivery-<instance>，具有只数/质量/状态/实际接收方与携带负担。买方拒收不能证明废物。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则：记录可归属实际 collect_delivery_other_live 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_delivery` <br> - 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_delivery_other_live_instance <br> - 单位：kg <br> - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_delivery_carrier_disposition` | `recipient_delivery`; 输出; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际受管理载运淡水处置实例. 记录实际交给接收方的各载水交接及收货标识，或退回 collect_recovered_managed_material 的 RW-recipient_delivery-<instance>。不是动物参考质量或环境取水; 废物/直接回流水采用对应行。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则：记录可归属实际 collect_delivery_carrier_disposition 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_delivery` <br> - 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_delivery_carrier_disposition_instance <br> - 单位：kg <br> - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_delivery_package_disposition` | `recipient_delivery`; 输出; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际防护包装交接或退回实例. 记录各实际接收方包装交接/使用结束保管、复用退回，或到 collect_recovered_managed_material 的 RW-recipient_delivery-<instance>，原生单位/数量成对一致。不默认免费复用或重复产品负担。 <br> - 流属性/单位：Actual instance property / native unit <br> - 数量规则：记录可归属实际 collect_delivery_package_disposition 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_delivery` <br> - 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_delivery_package_disposition_instance <br> - 单位：native unit <br> - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_delivery_waste` | `recipient_delivery`; 输出; 废物流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：送处理的实际收货前交付废物实例. 记录收货前死亡动物、实际废包装/材料及送处理废水; 纳入失败发运及其负担分配，验收 A 不含死亡动物。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则：记录可归属实际 collect_delivery_waste 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_delivery` <br> - 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_delivery_waste_instance <br> - 单位：kg <br> - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_delivery_release` | `recipient_delivery`; 输出; 基本流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际交付回流水或污染物实例. 仅独立建模完整服务已覆盖组成之外的自营直接回流水和单独尾气/污染物物质/介质/碳基准; 保留因子/来源，避免混淆化石/生物源碳。 <br> - 流属性/单位：Actual instance property / native unit <br> - 数量规则：记录可归属实际 collect_delivery_release 实例数量除以同批次验收质量 A; 保留各原生分子单位及实际转移数量。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_delivery` <br> - 数量范围：尚未确定的逐实例不确定性界限; 须独立原始证据 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_delivery_release_instance <br> - 单位：native unit <br> - 基准：每 1 kg 参考流; 符号界限不是经验范围或通用上限 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `dq_logistics_water_balance` | 运输、服务和水/营养物平衡 | 运输实际载荷包括随行水、冰、包装及其他货物；空返或调位虽无产品载荷仍有活动负荷，须以实际燃料/距离/车辆服务及明确分配计入，不能以零吨公里消去。完整服务与其已覆盖燃料、材料、资产和直接排放不得重复计入。外部取水、供水产品、内部循环和实际返排水分别计量；内部循环不得再从外部取水中重复扣减。净营养物增量/滞留只用于独立平衡诊断，不自动成为负基本流、负排放或避免负荷。 | 实际载荷和车辆活动记录、服务覆盖、同批水/物质平衡与方法证据 |

## 9. 验证规则
| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `vr_reference` | accepted_live_shrimp | 核实同批次正 A、活体收货及准确动物净湿质量基准、参考名称/链接/支持，分开水/莫丝/包装/夹带物并保留实际只数/等级; 最终 A/A 仅对验收活体输出给出 1 kg。 | mass-balance-identity |
| `vr_route` | all_nodes | 核实完整生物生产/采集/分选/呈装/交付记录及实际暂养激活或有证据旁路; 不以浮游幼体阶段、处死/冷冻或第五章其他试验替代本活体路线。 | sganga-red-cherry-2019 |
| `vr_handoffs` | all_transfers | 适用时要求 CM0/T0/T1/T2H/T2B/T3/T4、CW1/CW2H/CW2B/CW3/CW4、IM1/PK4 及每个 R/RW 实例成对一致，保留准确状态/单位/数量/保管，不重复参考输出或遗漏去向。 | |
| `vr_outputs` | all_intended_outputs | 枚举实际每个活体等级/接收方、亲虾/幼虾其他产品、可用夹带物、退回及保留存量，与死亡/残余/废物分开; 仅被拒收不足以证明废物分类。 | |
| `vr_attribution` | all_periods_and_consumers | 对账亲虾/期初/未来服务、重叠批群、失败/无输出事件、共享资产/服务、清洁/更换/终止及复用容器; 因果/经济选择须有证据与敏感性、唯一负担归属方，不重复当前和结转分配。 | |
| `vr_delivery` | pre_receipt | 证明第一位实物收货，纳入之前全部移动/等待/维持，不受付款方影响且包含失败发运; 服务覆盖排除重复组成，但不排除未覆盖活动。 | |
| `vr_instances` | all_card_instances | 每个实例须有观察的激活/缺席、独立原生属性/单位、本节点协议、身份/去向及可归属数量/不确定性。U_<row-instance> 和未知实际状态仍是证据缺口; 不将服务强制 kg 或绑定检索第一命中。 | |
| `vr_environment` | actual_releases_and_wastes | 要求单独污染物化学/碳/介质基准、回流水区分、处理去向和服务排除; 不使用未经核实的排放、因子或环境抵扣。 | |
| `vr_integrity` | PCR_and_dataset | 要求当前符合 Schema 的确定性投影、双语一致和选定目标检查; 分别声明已执行/跳过检查及未解决身份/范围。检查器通过不证明外部身份核实、商业完整性或发布准备。 | |
| `validate_atomic_completion` | 所有适用的逐流采集义务和最终交换 | 只有每项实际发生的交换均有独立原子卡及其自身的数量、属性/原生单位、采集或计算证据、范围/不确定性证据、归一化、实际去向和已验证UUID时，最终数据包才可完成并通过验证。未知身份、活动状态、数量、范围证据或去向会阻断完成；不得视为零、默认为旁路或靠省略义务通过。所有重要具体流须保留自身范围/不确定性证据采集责任；符号上限不是实证范围。 | |

## 10. 发布数据集画像
| 字段 | 值 |
| --- | --- |
| dataset_role | 前景数据包及 process/lifecyclemodel 投影; 仅在完成证据/身份/质量审查后才可作为 secondary_dataset 或 background_dataset |
| downstream_use | 观赏虾前景数据包及后续 process/lifecyclemodel 投影，边界至声明的第一位实际收货 |
| allowed_use | 匹配人工繁育 Neocaridina davidi 莫丝路线完整活体观赏供应，具有实际场址/期间、兼容上游边界及质量披露 |
| excluded_use | 野生采集; 鱼或其他物种; 食用/冷冻/死亡产品; 第五章其他实验变体; 实验室处死; 收货后使用; 外推商业规模或健康/安全/福利/合法保证 |
| required_metadata | 物种/来源/供应方/祖代; 实际路线/场址/批群/期间; 起始存量; 全部节点激活与转移/状态/数量记录; 接收方收货; 水/包装排除及只数; 上游覆盖; 负担归属及服务/组成边界; 分配选择/敏感性; 身份及不确定性 |
| required_quality_disclosure | 证据覆盖及缺口; 实测/样本估计动物净质量; 未确定范围; 失败/期初期末存量; 繁育/未来服务; 基础设施寿命/利用率/复用; 完整服务排除; 收货前全部物流; 未解决身份/支持及适用时不具发布准备 |
| update_trigger | 物种/来源/路线/市场状态/收货门槛改变; 水/饲料/莫丝/设备或暂养/呈装/物流改变; 原始/身份/范围证据改进; 服务寿命/复用/分配改变; 新确定实际预期输出 |

## 11. 数据源
| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| sganga-red-cherry-2019 | literature | Daniela Eliana Sganga, 2019, Universidad de Buenos Aires, Modeladores de la calidad de progenie en un crustáceo de interés económico, el camarón ornamental red cherry Neocaridina davidi. https://bibliotecadigital.exactas.uba.ar/download/tesis/tesis_n6688_Sganga.pdf ; 通用方法印刷 pp.19–21; 繁育/后代印刷 pp.47–49 | 定性人工繁殖/直接孵出幼虾/幼虾生长路线，以及去氯水/塑料水族箱/曝气/加热器/照明/爪哇莫丝/TetraColor 证据; 仅实验范围，无清单默认量或商业收货证明; 排除第五章变体及实验取样 |
| un-cpc-3-2025 | official_guidance | United Nations, CPC Version 3.0 explanatory notes, 2025, 印刷 pp.53–54. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 04913 养殖活体观赏水生植物/动物范围与排除; 较窄甲壳类映射情境 |
| mass-balance-identity | method_factor | 同批次核算恒等式: 验收动物净质量 A 除以同一验收质量 A 等于 1; 实测交换量除以 A 保留每 kg 参考的原生分子单位 | 精确最终参考归一化及转移/数量核算; 不是经验产率、环境因子或默认换算 |
