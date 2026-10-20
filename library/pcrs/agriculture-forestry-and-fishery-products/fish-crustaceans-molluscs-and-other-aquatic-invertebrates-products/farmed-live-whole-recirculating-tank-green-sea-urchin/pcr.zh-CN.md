---
pcr_id: pcr.farmed-live-whole-recirculating-tank-green-sea-urchin
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 循环海水V形槽养成的整只活体养殖绿海胆

## 1. 范围与适用性

本PCR适用于具有孵化苗种来源证明的Strongylocentrotus droebachiensis：在缅因州陆基循环海水V形槽内使用海胆配合日粮养成，人工收集、分选并以保护性方式呈现，直至首个实体接收方实际接收整只活体动物。保留原生壳与棘；参考产品为生鲜、从未冻结状态。

缅因大学2009—2013年示范研究支持养成路径与设备职责，包括饲料经历差异及先前培育阶段。该研究培育动物用于后续市场／品质研究，不证明实际商业发货、商业盈利或当前销售。NOAA的2023年手册将整只活体终端用户渠道作为潜在渠道讨论。每个数据包必须独立证明实际合格接收。不采用来源中的温度、密度、投喂量、存活率、时长、饲料系数、海胆黄产率、价格、安全、疾病治疗或法律规定作为PCR要求。

排除野生成体增黄、海底放养、海笼养成、混养、观赏动物、死亡／仅鲜或冷藏产品、冻结、去内脏、取黄和后续产品加工。必须计入上游培育经历；实际场内培育单独纳入。不得删除批次之前的实际试验日粮，仅描述配合日粮期间。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.farmed-live-whole-recirculating-tank-green-sea-urchin |
| classification_refs | cpc:3.0:04522；所选物种、来源、技术与整只活体状态为较窄范围 |
| covered_products | 按声明陆基循环海水V形槽配合饲料路径养成的孵化来源S. droebachiensis；实际实体接收的整只活体生鲜未冻结动物 |
| excluded_products | 野生成体；仅增黄动物；放养／海笼／混养产品；观赏、死亡、冻结、干燥、盐渍、去内脏动物与提取海胆黄 |
| representative_product | 实际首个接收方接收的保留原生壳与棘的整只活绿海胆 |
| production_route | 接收孵化来源苗种及完整培育经历；有条件场内培育；循环海水V形槽养成；人工收集；分选；实际有条件暂养；保护性呈现；接收物流 |
| market_state | 整只活体生鲜未冻结动物；实际接收渠道与接收须有证据，不从历史试验推定 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 首个实体接收方接收的整只活体未冻结养殖绿海胆 |
| How much | 1 kg整只动物净湿质量；保留原生壳／棘；排除自由水、包装及偶带物料 |
| How well | 有证明的物种、孵化来源、路径、实际活体状态、从未冻结经历及接收方接收；无通用等级或海胆黄品质保证 |
| How long or cycle | 实际孵化／培育／养成批次经历直至接收；索引全部报告期间、留存批次、失败、更换及服务期间 |
| reference_flow_link | `live_urchins_receipt` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 首个实体接收方接收的整只活体未冻结养殖绿海胆 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | Strongylocentrotus droebachiensis; 缅因州场址; 孵化批次与先前培育经历; V形槽循环海水系统; 实际饲料产品／经历; 整只生鲜、保留壳／棘; 活体且从未冻结; 批号／批次／期间; 净湿质量及沥水／去皮重方法; 实体接收方／时间／地点; 实际暂养状态; 物流与其他去向 |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass | kg | 在实际接收方接收时，用经校准的秤称量同一已接收活体批次；记录皮重及可重复的自由水去除方法，不移除动物身体部分。A为接收整只动物湿质量，不是饲料、海胆黄、包装毛质量或发货质量。 |
| `native_units` | all inventory rows | Recorded property | Native recorded unit | 记录湿／干状态、水密度、饲料原状质量、数量与抽样整只动物质量、服务／能源单位及污染物化学基准。仅用实测可比记录换算；使用时保留kWh、t*km与h。不设通用数量－质量或整只－海胆黄换算系数。 |
| `transfer_mass` | internal animal transfers | Mass | kg | 以一个批次、时间、状态、质量／数量及边界在两侧配对转移编号。内部量保留实测值，不固定为1千克。携带水及物料单独核算。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际培育／养成入口具有证明的孵化来源活苗种，附完整先前生产、培育及运输经历 |
| starting_condition_role | 前景入口门；仍须链接上游负担，不截断 |
| product_classification_scope | cpc:3.0:04522下所选较窄养殖绿海胆整只活体循环水路径 |
| recursive_input_rule | 已完成培育苗种与返回活体库存承接实际上游及前期负担；内部返回不重新开始或重复苗种生产 |
| upstream_dataset_requirement | 可追溯孵化／培育苗种、实际饲料、公用工程、物资／资产、处理及物流数据集，具有可比地理、期间、单位及边界；缺失投入保留披露 |
| disclosure | 场址／批次／阶段、库存边界、暂养与培育的启用／未发生／未知状态、不论付款方的完整接收前路径、实际接收方接收、排除项、计划输出与分配假设 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_route` | nursery; growout | 纳入实际场内培育与完整先前苗种经历，随后V形槽循环水生长、饲料变化、水／固体处理、维护、监测、失败批次与死亡。历史方法确立路径职责，不作为场址具体数量或销售证明。 | umaine-green-urchin-growout-2013 |
| `boundary_handoffs` | all nodes | 用T0或外部E0表示养成苗种，T1／T1m表示养殖移出，T2／T2m表示收集动物／物料，暂养发生时T3与T4，未发生时旁路T3b，T5表示发货，TR表示分选返回。每个实际交付均有配对输出／输入及唯一数量／状态所有者。场内培育或暂养状态未知不得默认未发生。 | |
| `boundary_receipt` | delivery | 不论所有者、付款方或发票，纳入每个实际接收前装载、运输、临时暂存、场站与接收事件。以有证据的首个实体接收方接收为终点；保留被拒发货负担。潜在整只活体渠道不证明发货。 | noaa-green-urchin-manual-2023 |
| `boundary_assets` | all nodes | 将V形槽、管道、生物滤器、固体过滤器、泡沫分离器、供氧／紫外系统、泵、建筑、工具及复用容器记录为实际资产／服务实例。链接消费节点、批次和期间、维修／更换、实际服务寿命与终止去向；不规定寿命。 | umaine-green-urchin-growout-2013 |
| `boundary_fates` | all nodes | 供应商水属于产品供应；直接取水为基本流投入；内部循环不重复作为取水或排水。区分实际送往处理的废物与直接环境排放、返回载体水与各污染物、化石碳与生物碳。将每个条件采集范围展开为实际有证据的零／一／多个交换；适用状态未知为缺口，不是零。 | |

## 6. 过程清单结构

### 过程图

| process_id | Process name | Inclusion | Inclusion condition | Role | Quantitative reference |
| --- | --- | --- | --- | --- | --- |
| `nursery` | 场内幼体培育 | conditional | 仅当前景设施实际开展幼体培育时启用；否则将已完成培育的苗种直接接收入养成节点。 | V形槽养成之前的批次生物生产 | 每 1 kg 参考流；保留实际批次／期间数量 |
| `growout` | 循环海水V形槽生物养成 | required | 所有适用批次 | 孵化苗种来源陆基受控生产 | 每 1 kg 参考流；保留实际批次／期间数量 |
| `collection` | 从V形槽人工实体收集 | required | 所有发出批次 | 独立于生长将动物移出养殖环境 | 每 1 kg 参考流；保留实际批次／期间数量 |
| `sorting` | 等级及去向分选 | required | 所有收集批次 | 声明接收、留存、其他计划和废弃状态 | 每 1 kg 参考流；保留实际批次／期间数量 |
| `holding` | 实际有界活体暂养 | conditional | 仅实际存在可单独界定、附进入／离开时间与服务记录的呈现前干预；状态未知须补证。 | 在呈现前维持实际活体可用状态 | 每 1 kg 参考流；保留实际批次／期间数量 |
| `presentation` | 活体保护性呈现 | required | 每个参考批次 | 保护／呈现整只活体产品而不进行转化 | 每 1 kg 参考流；保留实际批次／期间数量 |
| `delivery` | 直至首个实体接收方接收的全部物流 | required | 每个参考批次，包括有接收记录的零距离场内交付 | 接收前运输、搬运与接收门 | 每 1 kg 参考流；保留实际批次／期间数量 |

### 过程：场内幼体培育（`nursery`）

仅当前景设施实际开展幼体培育时启用；否则将已完成培育的苗种直接接收入养成节点。 V形槽养成之前的批次生物生产。索引实际批次／运行、运行期间与事件；未知条件实例保留为证据缺口。其他计划输出具有独立接收／库存门与分配记录。

#### 输入

##### 产品流

###### 接收用于培育的孵化来源活绿海胆幼体（`nursery_seed`）

记录孵化批次、之前培育经历、数量和整只动物实测湿质量；必须计入上游孵化、早期阶段和入场运输。

- 选定流：接收用于培育的孵化来源活绿海胆幼体
- 流属性/单位：Mass / kg
- 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nursery`
- 数量范围：尚未解决的实例特定范围证据；未提供经验界
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_nursery_seed
  - 单位：kg
  - 基准：每 1 kg 参考流；必须为该实际实例确定U_nursery_seed
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 实际培育设备用电（`nursery_electricity`）

对抽水、曝气、照明、温控及处理按培育期计量或分配，且仅计一次。

- 选定流：实际培育设备用电
- 流属性/单位：Energy / kWh
- 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nursery`
- 数量范围：尚未解决的实例特定范围证据；未提供经验界
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_nursery_electricity
  - 单位：kWh
  - 基准：每 1 kg 参考流；必须为该实际实例确定U_nursery_electricity
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

#### 输出

##### 产品流

###### 转入养成的已完成培育活幼体（`nursery_ready`）

T0：整只活幼体，附数量、湿质量、批次及转移时间；与growout_seed精确配对。内部转移量不固定为1千克。

- 选定流：转入养成的已完成培育活幼体
- 流属性/单位：Mass / kg
- 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nursery`
- 数量范围：尚未解决的实例特定范围证据；未提供经验界
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_nursery_ready
  - 单位：kg
  - 基准：每 1 kg 参考流；必须为该实际实例确定U_nursery_ready
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

### 过程：循环海水V形槽生物养成（`growout`）

所有适用批次 孵化苗种来源陆基受控生产。索引实际批次／运行、运行期间与事件；未知条件实例保留为证据缺口。其他计划输出具有独立接收／库存门与分配记录。

#### 输入

##### 产品流

###### 进入养成的已完成培育活绿海胆苗种（`growout_seed`）

培育启用时为nursery_ready对应T0，否则为外部苗种接收E0；保留孵化证明及全部先前培育／食物／运输负担。不得同时计入两条路径。

- 选定流：进入养成的已完成培育活绿海胆苗种
- 流属性/单位：Mass / kg
- 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_growout`
- 数量范围：尚未解决的实例特定范围证据；未提供经验界
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_growout_seed
  - 单位：kg
  - 基准：每 1 kg 参考流；必须为该实际实例确定U_growout_seed
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 分选返回的活体未达目标等级批次（`growout_returns`）

TR：与sort_return以相同活体状态、质量、数量及批次配对；转移保留已承接负担，不作为新苗种生产。

- 选定流：分选返回的活体未达目标等级批次
- 流属性/单位：Mass / kg
- 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_growout`
- 数量范围：尚未解决的实例特定范围证据；未提供经验界
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_growout_returns
  - 单位：kg
  - 基准：每 1 kg 参考流；必须为该实际实例确定U_growout_returns
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 养成所供应的海胆配合饲料（`growout_feed`）

记录实际饲料产品、供应商、制造与运输、到货、库存、投喂和残饵。保留实际先前Cargill试验或培育海带经历，不改标为所选配合日粮。

- 选定流：养成所供应的海胆配合饲料
- 流属性/单位：Mass / kg
- 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_growout`
- 数量范围：尚未解决的实例特定范围证据；未提供经验界
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_growout_feed
  - 单位：kg
  - 基准：每 1 kg 参考流；必须为该实际实例确定U_growout_feed
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 循环水养成系统运行电力（`growout_electricity`）

分配泵、固体分离、生物滤器、泡沫分离、供氧、紫外、实际温控及其他设备用电；共享系统仅计一次。

- 选定流：循环水养成系统运行电力
- 流属性/单位：Energy / kWh
- 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_growout`
- 数量范围：尚未解决的实例特定范围证据；未提供经验界
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_growout_electricity
  - 单位：kWh
  - 基准：每 1 kg 参考流；必须为该实际实例确定U_growout_electricity
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

#### 输出

##### 产品流

###### 指定待收集的整只活绿海胆（`growout_collectable`）

T1：实测批次收集指令／状态、数量及湿质量，与collection_stock配对；实体移除前仍附着或处于养殖环境。

- 选定流：指定待收集的整只活绿海胆
- 流属性/单位：Mass / kg
- 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_growout`
- 数量范围：尚未解决的实例特定范围证据；未提供经验界
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_growout_collectable
  - 单位：kg
  - 基准：每 1 kg 参考流；必须为该实际实例确定U_growout_collectable
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

###### 直接返回环境的载体水（`growout_returned_water`）

将实际排水与所含污染物、环境净取水及内部循环分别记录；识别海水排口及实际去向变化。

- 选定流：直接返回环境的载体水
- 流属性/单位：Mass / kg
- 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_growout`
- 数量范围：尚未解决的实例特定范围证据；未提供经验界
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_growout_returned_water
  - 单位：kg
  - 基准：每 1 kg 参考流；必须为该实际实例确定U_growout_returned_water
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：从V形槽人工实体收集（`collection`）

所有发出批次 独立于生长将动物移出养殖环境。索引实际批次／运行、运行期间与事件；未知条件实例保留为证据缺口。其他计划输出具有独立接收／库存门与分配记录。

#### 输入

##### 产品流

###### 移除前养殖环境中的整只活体批次（`collection_stock`）

T1与growout_collectable配对；保留实际收集事件和养殖位置。

- 选定流：移除前养殖环境中的整只活体批次
- 流属性/单位：Mass / kg
- 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_collection`
- 数量范围：尚未解决的实例特定范围证据；未提供经验界
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_collection_stock
  - 单位：kg
  - 基准：每 1 kg 参考流；必须为该实际实例确定U_collection_stock
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 该节点实际用电（`collection_electricity`）

计量实际设备能源，并仅向该节点／期间分配一次共享服务；不因产品类别推定设备。

- 选定流：该节点实际用电
- 流属性/单位：Energy / kWh
- 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_collection`
- 数量范围：尚未解决的实例特定范围证据；未提供经验界
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_collection_electricity
  - 单位：kWh
  - 基准：每 1 kg 参考流；必须为该实际实例确定U_collection_electricity
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

#### 输出

##### 产品流

###### 所收集的整只活绿海胆（`collection_collected`）

T2动物进入sort_incoming；整只动物净湿质量／数量与collect_collection_carried_out分别计量。不在此重复生长。

- 选定流：所收集的整只活绿海胆
- 流属性/单位：Mass / kg
- 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_collection`
- 数量范围：尚未解决的实例特定范围证据；未提供经验界
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_collection_collected
  - 单位：kg
  - 基准：每 1 kg 参考流；必须为该实际实例确定U_collection_collected
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

### 过程：等级及去向分选（`sorting`）

所有收集批次 声明接收、留存、其他计划和废弃状态。索引实际批次／运行、运行期间与事件；未知条件实例保留为证据缺口。其他计划输出具有独立接收／库存门与分配记录。

#### 输入

##### 产品流

###### 分选前已收集的整只活绿海胆（`sort_incoming`）

T2来自collection_collected；将批次数量与沥去自由水后的动物质量同偶带物料分别核对。

- 选定流：分选前已收集的整只活绿海胆
- 流属性/单位：Mass / kg
- 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sorting`
- 数量范围：尚未解决的实例特定范围证据；未提供经验界
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_sort_incoming
  - 单位：kg
  - 基准：每 1 kg 参考流；必须为该实际实例确定U_sort_incoming
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 该节点实际用电（`sorting_electricity`）

计量实际设备能源，并仅向该节点／期间分配一次共享服务；不因产品类别推定设备。

- 选定流：该节点实际用电
- 流属性/单位：Energy / kWh
- 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sorting`
- 数量范围：尚未解决的实例特定范围证据；未提供经验界
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_sorting_electricity
  - 单位：kWh
  - 基准：每 1 kg 参考流；必须为该实际实例确定U_sorting_electricity
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 用于交付呈现的已选整只活体未冻结动物（`sort_selected`）

观察到有界暂养时T3进入holding_in，否则旁路T3b直接进入presentation_in；以相同状态／质量／数量记录唯一实际分支。

- 选定流：用于交付呈现的已选整只活体未冻结动物
- 流属性/单位：Mass / kg
- 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sorting`
- 数量范围：尚未解决的实例特定范围证据；未提供经验界
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_sort_selected
  - 单位：kg
  - 基准：每 1 kg 参考流；必须为该实际实例确定U_sort_selected
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 返回养成的留存活体未达目标等级动物（`sort_return`）

TR与growout_returns配对；保留批次及已分配负担，在后续实际接收前不计入接收分母。

- 选定流：返回养成的留存活体未达目标等级动物
- 流属性/单位：Mass / kg
- 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sorting`
- 数量范围：尚未解决的实例特定范围证据；未提供经验界
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_sort_return
  - 单位：kg
  - 基准：每 1 kg 参考流；必须为该实际实例确定U_sort_return
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

### 过程：实际有界活体暂养（`holding`）

仅实际存在可单独界定、附进入／离开时间与服务记录的呈现前干预；状态未知须补证。 在呈现前维持实际活体可用状态。索引实际批次／运行、运行期间与事件；未知条件实例保留为证据缺口。其他计划输出具有独立接收／库存门与分配记录。

#### 输入

##### 产品流

###### 进入实际暂养的已选整只活体动物（`holding_in`）

T3来自sort_selected；记录实际起始活体状态、数量、质量及时间。

- 选定流：进入实际暂养的已选整只活体动物
- 流属性/单位：Mass / kg
- 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_holding`
- 数量范围：尚未解决的实例特定范围证据；未提供经验界
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_holding_in
  - 单位：kg
  - 基准：每 1 kg 参考流；必须为该实际实例确定U_holding_in
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 该节点实际用电（`holding_electricity`）

计量实际设备能源，并仅向该节点／期间分配一次共享服务；不因产品类别推定设备。

- 选定流：该节点实际用电
- 流属性/单位：Energy / kWh
- 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_holding`
- 数量范围：尚未解决的实例特定范围证据；未提供经验界
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_holding_electricity
  - 单位：kWh
  - 基准：每 1 kg 参考流；必须为该实际实例确定U_holding_electricity
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

#### 输出

##### 产品流

###### 离开有界干预的整只活体动物（`holding_live`）

T4与presentation_in配对；核对离开时动物湿质量／数量与活体资格，不声称保质期或海胆黄品质。

- 选定流：离开有界干预的整只活体动物
- 流属性/单位：Mass / kg
- 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_holding`
- 数量范围：尚未解决的实例特定范围证据；未提供经验界
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_holding_live
  - 单位：kg
  - 基准：每 1 kg 参考流；必须为该实际实例确定U_holding_live
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

### 过程：活体保护性呈现（`presentation`）

每个参考批次 保护／呈现整只活体产品而不进行转化。索引实际批次／运行、运行期间与事件；未知条件实例保留为证据缺口。其他计划输出具有独立接收／库存门与分配记录。

#### 输入

##### 产品流

###### 进入呈现的整只活体动物（`presentation_in`）

暂养启用时为holding_live对应T4，否则为sort_selected对应T3b；记录实际分支及相同配对数量。

- 选定流：进入呈现的整只活体动物
- 流属性/单位：Mass / kg
- 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_presentation`
- 数量范围：尚未解决的实例特定范围证据；未提供经验界
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_presentation_in
  - 单位：kg
  - 基准：每 1 kg 参考流；必须为该实际实例确定U_presentation_in
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 该节点实际用电（`presentation_electricity`）

计量实际设备能源，并仅向该节点／期间分配一次共享服务；不因产品类别推定设备。

- 选定流：该节点实际用电
- 流属性/单位：Energy / kWh
- 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_presentation`
- 数量范围：尚未解决的实例特定范围证据；未提供经验界
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_presentation_electricity
  - 单位：kWh
  - 基准：每 1 kg 参考流；必须为该实际实例确定U_presentation_electricity
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 发出的已呈现整只活体未冻结绿海胆（`presentation_dispatch`）

T5与delivery_in配对；动物净质量／数量与保护包装、自由水及载体质量分开。呈现不保证接收方接收。

- 选定流：发出的已呈现整只活体未冻结绿海胆
- 流属性/单位：Mass / kg
- 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_presentation`
- 数量范围：尚未解决的实例特定范围证据；未提供经验界
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_presentation_dispatch
  - 单位：kg
  - 基准：每 1 kg 参考流；必须为该实际实例确定U_presentation_dispatch
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

### 过程：直至首个实体接收方接收的全部物流（`delivery`）

每个参考批次，包括有接收记录的零距离场内交付 接收前运输、搬运与接收门。索引实际批次／运行、运行期间与事件；未知条件实例保留为证据缺口。其他计划输出具有独立接收／库存门与分配记录。

#### 输入

##### 产品流

###### 进入接收物流的已呈现整只活体发货（`delivery_in`）

T5来自presentation_dispatch；保留发货数量、动物质量、包装／载体质量及活体／未冻结状态。

- 选定流：进入接收物流的已呈现整只活体发货
- 流属性/单位：Mass / kg
- 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_delivery`
- 数量范围：尚未解决的实例特定范围证据；未提供经验界
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_delivery_in
  - 单位：kg
  - 基准：每 1 kg 参考流；必须为该实际实例确定U_delivery_in
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 首个实体接收方接收的整只活体未冻结养殖绿海胆（`live_urchins_receipt`）

1 千克。同一参考批次实测接收整只动物净质量A除以该A；保留原生壳／棘，排除自由水／包装／偶带物料。必须证明实际接收／活体资格；发货／发票或历史市场规格研究不足以证明。

- 选定流：首个实体接收方接收的整只活体未冻结养殖绿海胆
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_delivery`
- 来源：`mass-normalization-identity`
- 数量范围：同批次参考恒等式
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：每 1 kg 参考流；同一接收批次A/A
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-normalization-identity`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_cohorts` | nursery; growout; all subsequent nodes | 将孵化、培育、养成及发货批次索引至持续运行的循环水系统期间。先细分独立计量的饲料／设备／事件；再按有记录的生物量－时间及实际服务需求承接剩余共享运行负担，当计量能源替代基准不同时开展敏感性分析。记录全部服务批次，包括失败和期末活体库存。不将负担仅分配给方便期间的幸存者。 | |
| `allocation_outputs` | all intended product outputs | 列出每个计划动物去向、等级、研究／放流转移、留存活体批次及返回，附门与数量。可分离活动直接分配；在最终质量归一化前，使用实测动物生物量－时间／服务需求分配剩余共享动物生产负担，论证物理因果关系；因果关系未明时检验接收质量或有记录相对价值的敏感性。留存活体库存将累积负担承接至后期，不作为当期废物或接收A。不设避免生产信用。 | |
| `allocation_assets` | shared infrastructure; reusable containers | 维护唯一资产／服务账，包含建造材料、服务寿命证据、维修、更换、闲置／失败期、清理与终止。列明全部消费节点及期间；按适用情况使用实测泵／过滤小时、计量服务、占用体积／时间或实际复用周转，说明选择与替代方案。分配份额之和应等于记录服务总量；不设通用寿命或免费复用容器。 | |
| `allocation_service` | complete supplier services | 完整购买的运输、搬运、处理或资产服务仅一次负责所含组件。若以组件建模替代，记录一致覆盖并移除重叠服务负担。内部配对转移移动实体数量与累积负担，不创造新生产或第二份最终动物输出。 | |

## 8. 前景数据采集、计算与质量规则

每张清单卡表示一个已指明的交换。第8节采集义务要求按实际材料／物质、产品状态、去向及原生单位差异补充独立清单卡。用证据记录未发生状态。每行U_row是在该行原生单位、每1千克参考流基准下，针对该场址／期间／实例单独有证据的上限不确定性界。符号区间0..U_row表示尚未解决的范围证据要求，不是观测范围、默认率、通用上限，也不允许将必须发生的启用投入记为零。在最终交换生产前以可追溯记录／不确定性替代；发生的正活动必须填写实际正数量。仅同批次最终参考流具有代数1..1区间。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_nursery` | `nursery` | 本节点每个实际卡实例 | 实测事件、供应商／服务记录与批次／资产账 | 孵化接收／批次；附着／早期培育经历；苗种数量及抽样湿质量；培育进入／离开；食物原状库存／投喂；水源与交换；死亡；T0；其他去向；培育启用／未发生证据；每实例身份／属性／原生单位／数量／U_row；化学／碳／介质基准；服务覆盖／寿命；A | 检查实际苗种接收与培育起止记录；计数并用经校准抽样／全批称重；核对食物、水、死亡及已培育苗种交付T0。 对材料与服务分别保留自身原生计量，不以kg或h统一不同服务。 按第7节将每个实际实例仅分配一次，用可归属原生数量除以同批次接收动物净质量A。 | kg; kWh; t*km; 实际载体／服务原生单位及有证据可比换算 | 每次转移／使用／排放／事件；每报告期库存与共享服务 | 服务批次的全部实际nursery期间，含失败、闲置、清理与期末库存 | 声明场址及nursery实际供应商／接收方 | 每 1 kg 参考流 | 校准／皮重；批次接收／库存记录；发票；计量；去向接收凭证；实验室与因子基准；分配／寿命敏感性 |
| `cp_growout` | `growout` | 本节点每个实际卡实例 | 实测事件、供应商／服务记录与批次／资产账 | 循环水系统／槽／批次；E0／T0与TR接收；饲料产品／经历／原状库存／投喂／残饵；计量；海水补水与排污；循环水量；进／出口物种样本；滤泥；死亡；维修；T1／T1m；期末活体库存；每实例身份／属性／原生单位／数量／U_row；化学／碳／介质基准；服务覆盖／寿命；A | 读取批次／饲料及实际连续运行循环水系统日志；计量能源／补水／排污，配对进／出口物质取样并称滤出固体；核对死亡／库存及收集移出T1／T1m。 对材料与服务分别保留自身原生计量，不以kg或h统一不同服务。 按第7节将每个实际实例仅分配一次，用可归属原生数量除以同批次接收动物净质量A。 | kg; kWh; t*km; 实际载体／服务原生单位及有证据可比换算 | 每次转移／使用／排放／事件；每报告期库存与共享服务 | 服务批次的全部实际growout期间，含失败、闲置、清理与期末库存 | 声明场址及growout实际供应商／接收方 | 每 1 kg 参考流 | 校准／皮重；批次接收／库存记录；发票；计量；去向接收凭证；实验室与因子基准；分配／寿命敏感性 |
| `cp_collection` | `collection` | 本节点每个实际卡实例 | 实测事件、供应商／服务记录与批次／资产账 | 收集事件／槽；移除前活体状态；T1与T1m；动物数量／湿质量T2；独立物料质量T2m；实际环境偶带物料；去除物料／损失；工具与服务时间；每实例身份／属性／原生单位／数量／U_row；化学／碳／介质基准；服务覆盖／寿命；A | 观察实际人工移除，将动物与携带物料分别称重／计数；配对T1／T1m输入及独立T2／T2m输出；记录自身工具、损失与去向，不重复生长。 对材料与服务分别保留自身原生计量，不以kg或h统一不同服务。 按第7节将每个实际实例仅分配一次，用可归属原生数量除以同批次接收动物净质量A。 | kg; kWh; t*km; 实际载体／服务原生单位及有证据可比换算 | 每次转移／使用／排放／事件；每报告期库存与共享服务 | 服务批次的全部实际collection期间，含失败、闲置、清理与期末库存 | 声明场址及collection实际供应商／接收方 | 每 1 kg 参考流 | 校准／皮重；批次接收／库存记录；发票；计量；去向接收凭证；实验室与因子基准；分配／寿命敏感性 |
| `cp_sorting` | `sorting` | 本节点每个实际卡实例 | 实测事件、供应商／服务记录与批次／资产账 | T2动物质量／数量；T2m水／生物膜／碎片；等级标准／结果；T3或T3b分支；TR返回批次；其他接收／库存门；动物剔除物与去除物料去向；每实例身份／属性／原生单位／数量／U_row；化学／碳／介质基准；服务覆盖／寿命；A | 对实际进入批次分级，分别称量各动物去向与携带物料，检查活体状态，将分选返回及所选暂养／旁路分支与接收节点匹配。 对材料与服务分别保留自身原生计量，不以kg或h统一不同服务。 按第7节将每个实际实例仅分配一次，用可归属原生数量除以同批次接收动物净质量A。 | kg; kWh; t*km; 实际载体／服务原生单位及有证据可比换算 | 每次转移／使用／排放／事件；每报告期库存与共享服务 | 服务批次的全部实际sorting期间，含失败、闲置、清理与期末库存 | 声明场址及sorting实际供应商／接收方 | 每 1 kg 参考流 | 校准／皮重；批次接收／库存记录；发票；计量；去向接收凭证；实验室与因子基准；分配／寿命敏感性 |
| `cp_holding` | `holding` | 本节点每个实际卡实例 | 实测事件、供应商／服务记录与批次／资产账 | 暂养启用／未发生／未知证据；T3进入时间／状态／质量／数量；实际有界干预与设备；时长；水／氧气／能源；T4离开时间／活体状态／质量／数量；其他输出／死亡；每实例身份／属性／原生单位／数量／U_row；化学／碳／介质基准；服务覆盖／寿命；A | 读取有界干预的实际进入／离开与设备／服务记录；观察离开活体资格及配对T3／T4，核对时长、资源、废物与损失；否则证明T3b旁路。 对材料与服务分别保留自身原生计量，不以kg或h统一不同服务。 按第7节将每个实际实例仅分配一次，用可归属原生数量除以同批次接收动物净质量A。 | kg; kWh; t*km; 实际载体／服务原生单位及有证据可比换算 | 每次转移／使用／排放／事件；每报告期库存与共享服务 | 服务批次的全部实际holding期间，含失败、闲置、清理与期末库存 | 声明场址及holding实际供应商／接收方 | 每 1 kg 参考流 | 校准／皮重；批次接收／库存记录；发票；计量；去向接收凭证；实验室与因子基准；分配／寿命敏感性 |
| `cp_presentation` | `presentation` | 本节点每个实际卡实例 | 实测事件、供应商／服务记录与批次／资产账 | T4或T3b分支；活体动物质量／数量；T5发货；包装／箱／衬垫／湿润材料；复用／更换／清洗／返回；独立动物／包装／自由水质量；其他去向；每实例身份／属性／原生单位／数量／U_row；化学／碳／介质基准；服务覆盖／寿命；A | 检查呈现进入／发货，将动物净质量同包装与载体分别称量，记录包装／复用账与清洗，配对T5并识别实际非参考去向。 对材料与服务分别保留自身原生计量，不以kg或h统一不同服务。 按第7节将每个实际实例仅分配一次，用可归属原生数量除以同批次接收动物净质量A。 | kg; kWh; t*km; 实际载体／服务原生单位及有证据可比换算 | 每次转移／使用／排放／事件；每报告期库存与共享服务 | 服务批次的全部实际presentation期间，含失败、闲置、清理与期末库存 | 声明场址及presentation实际供应商／接收方 | 每 1 kg 参考流 | 校准／皮重；批次接收／库存记录；发票；计量；去向接收凭证；实验室与因子基准；分配／寿命敏感性 |
| `cp_delivery` | `delivery` | 本节点每个实际卡实例 | 实测事件、供应商／服务记录与批次／资产账 | T5发货；每段实际路径／操作者／付款方；动物／包装／水货载质量；方式／距离／装载／返程；暂存／场站服务；到达时间／地点／活体／未冻结状态；毛重／皮重／沥水与接收净A；剔除物；其他接收方／返回；每实例身份／属性／原生单位／数量／U_row；化学／碳／介质基准；服务覆盖／寿命；A | 追踪实际发货，经每个接收前路径／服务直至实体接收；检查到达活体状态及未冻结链，用经校准毛重／皮重／净重／沥水称量同批次动物，并核对接收A、拒收／退货与载体。 对材料与服务分别保留自身原生计量，不以kg或h统一不同服务。 按第7节将每个实际实例仅分配一次，用可归属原生数量除以同批次接收动物净质量A。 | kg; kWh; t*km; 实际载体／服务原生单位及有证据可比换算 | 每次转移／使用／排放／事件；每报告期库存与共享服务 | 服务批次的全部实际delivery期间，含失败、闲置、清理与期末库存 | 声明场址及delivery实际供应商／接收方 | 每 1 kg 参考流 | 校准／皮重；批次接收／库存记录；发票；计量；去向接收凭证；实验室与因子基准；分配／寿命敏感性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `same_lot_reference` | live_urchins_receipt | 同批次实测接收质量A为正时，A / A = 1 kg参考动物输出；保留原始A，拒绝零／缺失A。 | accepted receipt mass A; cp_delivery | reference amount 1 kg | mass-normalization-identity |
| `period_attribution` | all inventory rows | 按分配规则将记录期间交换分配至批次与计划输出，再将可归属交换除以实际为正的接收动物质量A；保留原生分子单位，将期末库存负担承接后期。 | node records; cohort/asset ledgers; A | attributable native-unit exchange per 1 kg reference flow | |
| `water_pollutant_balance` | direct water releases | 以可比实测排水浓度和排水体积、明确单位换算计算每项实际排口物质质量。可比进水质量、库存变化和生物滞留单独保留。排出减进入的净增量只用于平衡诊断，不自动成为负基本流产出或信用。披露化学形态、碳来源、介质、不确定性及因子；返回载体水质量保持单列。 | inlet/outlet sample and volume; species basis; density | pollutant-specific mass and separate water mass | |
| `stock_transfer_reconciliation` | animal and carried-matter transfers | 按批次核对期初库存、接收苗种／返回、生长、收集离开、其他计划输出、实际死亡与期末库存；分别核对每对T0／T1／T1m／T2／T2m／T3／T3b／T4／T5／TR。生物量生长不等于数量增加；不得包含水来平衡动物。 | cohort counts/masses; transfer ids; loss/matter records | disclosed stock and transfer reconciliation with uncertainty | |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference and actual exchanges | 证明物种／孵化来源、生产状态与所选配合饲料路径；下游交换绑定前核实每项具体流及属性／单位。 | supplier/cohort records; feed history; detail verification |
| `dq_receipt` | live_urchins_receipt | 必须具备实际接收方地点／时间、接收、活体状态及从未冻结经历与净质量方法。市场规格研究或潜在渠道不足。 | physical receipt record; calibrated scale/tare/draining log; lot state |
| `dq_completeness` | all periods/nodes | 纳入失败与被拒批次、死亡、饲料变化、水与污染物去向、偶带物料、留存库存、资产／复用、全部实际物流及未知条件状态。 | cohort/stock balances; event logs; route and service reconciliation |
| `dq_uncertainty` | all variable amounts | 获取实例特定U_row与数据来源；说明抽样、缺失、换算及分配敏感性。符号范围与缺失身份保留为已披露候选缺口。 | measured records; uncertainty bounds; method assumptions; sensitivity report |
| `collect_nursery_feed_materials` | `nursery`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际培育食物及按质量计量的耗材. 按供应材料及原生质量基准拆分实际海带、配合饲料、氧气与化学品。不规定试验日粮配方。资产／容器服务单列。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_nursery` <br> - 数量范围：尚未解决的实例特定范围证据；未提供经验界 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_nursery_feed_materials <br> - 单位：kg <br> - 基准：每 1 kg 参考流；必须为该实际实例确定U_nursery_feed_materials <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_nursery_non_electric_energy` | `nursery`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：场内幼体培育实际非电能源载体. 实际使用时启用：逐一实例化每种燃料或供应热能载体，附原生质量／体积／能源单位及一致U_row单位、供应商与实测量。将燃烧／尾气链接至同一事件与碳来源；不重复完整供应商服务已含燃料。未发生须有证据。 <br> - 流属性/单位：Actual carrier property / actual native carrier unit <br> - 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_nursery` <br> - 数量范围：尚未解决的实例特定范围证据；未提供经验界 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_nursery_non_electric_energy <br> - 单位：actual native carrier unit <br> - 基准：每 1 kg 参考流；必须为该实际实例确定U_nursery_non_electric_energy <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_nursery_asset_services` | `nursery`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：场内幼体培育实际资产与复用容器服务. 对每项实际资产／工具／容器服务声明供应商／实体服务定义及原生属性／单位，例如件次、占用体积－时间或计量小时。范围U_row使用该同一实例单位，绝不将全部服务换成千克。保留建造组成、服务寿命／使用证据、维修／更换、清洗与返回；避免完整服务重叠。 <br> - 流属性/单位：Actual instance property / actual native service unit <br> - 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_nursery` <br> - 数量范围：尚未解决的实例特定范围证据；未提供经验界 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_nursery_asset_services <br> - 单位：actual native service unit <br> - 基准：每 1 kg 参考流；必须为该实际实例确定U_nursery_asset_services <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_nursery_supplied_water` | `nursery`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：培育所接收的供应商水. 保留供应来源及实际密度换算；不得将供应商供水改标为基本流取水。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_nursery` <br> - 数量范围：尚未解决的实例特定范围证据；未提供经验界 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_nursery_supplied_water <br> - 单位：kg <br> - 基准：每 1 kg 参考流；必须为该实际实例确定U_nursery_supplied_water <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_nursery_abstracted_water` | `nursery`; 输入; 基本流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：培育直接从环境抽取的水. 按实际海水或淡水来源及取水地点实例化；排除供应商供水与内部循环水。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_nursery` <br> - 数量范围：尚未解决的实例特定范围证据；未提供经验界 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_nursery_abstracted_water <br> - 单位：kg <br> - 基准：每 1 kg 参考流；必须为该实际实例确定U_nursery_abstracted_water <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_nursery_other_intended` | `nursery`; 输出; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：其他计划培育去向及留存活体库存. 逐一实例化实际销售、研究／放流去向或留存批次，附接收／库存门、质量、数量及承接负担；不作为废物或参考交付。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_nursery` <br> - 数量范围：尚未解决的实例特定范围证据；未提供经验界 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_nursery_other_intended <br> - 单位：kg <br> - 基准：每 1 kg 参考流；必须为该实际实例确定U_nursery_other_intended <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_nursery_wastes` | `nursery`; 输出; 废物流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：送往处理的培育死亡动物、残余物及废弃材料. 按实际处理去向拆分死亡动物、残饵、固体、废水和包装；保留湿／干及液／固基准。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_nursery` <br> - 数量范围：尚未解决的实例特定范围证据；未提供经验界 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_nursery_wastes <br> - 单位：kg <br> - 基准：每 1 kg 参考流；必须为该实际实例确定U_nursery_wastes <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_nursery_direct_releases` | `nursery`; 输出; 基本流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：按物质与介质拆分的培育直接环境排放. 分别实例化返回的载体水及排入海水或空气的实测／建模单项污染物，保留化学与碳基准。送往处理的废物不作为直接排放。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_nursery` <br> - 数量范围：尚未解决的实例特定范围证据；未提供经验界 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_nursery_direct_releases <br> - 单位：kg <br> - 基准：每 1 kg 参考流；必须为该实际实例确定U_nursery_direct_releases <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_growout_non_electric_energy` | `growout`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：循环海水V形槽生物养成实际非电能源载体. 实际使用时启用：逐一实例化每种燃料或供应热能载体，附原生质量／体积／能源单位及一致U_row单位、供应商与实测量。将燃烧／尾气链接至同一事件与碳来源；不重复完整供应商服务已含燃料。未发生须有证据。 <br> - 流属性/单位：Actual carrier property / actual native carrier unit <br> - 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_growout` <br> - 数量范围：尚未解决的实例特定范围证据；未提供经验界 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_growout_non_electric_energy <br> - 单位：actual native carrier unit <br> - 基准：每 1 kg 参考流；必须为该实际实例确定U_growout_non_electric_energy <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_growout_materials` | `growout`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际养成氧气及按质量计量的耗材. 按原生质量基准逐一实例化实际氧气、化学品／添加剂配方、滤材耗品及维修材料产品；资产服务单列。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_growout` <br> - 数量范围：尚未解决的实例特定范围证据；未提供经验界 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_growout_materials <br> - 单位：kg <br> - 基准：每 1 kg 参考流；必须为该实际实例确定U_growout_materials <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_growout_asset_services` | `growout`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：循环海水V形槽生物养成实际资产与复用容器服务. 对每项实际资产／工具／容器服务声明供应商／实体服务定义及原生属性／单位，例如件次、占用体积－时间或计量小时。范围U_row使用该同一实例单位，绝不将全部服务换成千克。保留建造组成、服务寿命／使用证据、维修／更换、清洗与返回；避免完整服务重叠。 <br> - 流属性/单位：Actual instance property / actual native service unit <br> - 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_growout` <br> - 数量范围：尚未解决的实例特定范围证据；未提供经验界 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_growout_asset_services <br> - 单位：actual native service unit <br> - 基准：每 1 kg 参考流；必须为该实际实例确定U_growout_asset_services <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_growout_supplied_water` | `growout`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：供应给养成的海水或淡水. 将每项购买供水与直接取水、循环水量分别记录。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_growout` <br> - 数量范围：尚未解决的实例特定范围证据；未提供经验界 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_growout_supplied_water <br> - 单位：kg <br> - 基准：每 1 kg 参考流；必须为该实际实例确定U_growout_supplied_water <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_growout_abstracted_water` | `growout`; 输入; 基本流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：养成直接环境取水. 记录实际取水来源、体积、密度及抽水责任；循环水属于内部水，不重复作为取水。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_growout` <br> - 数量范围：尚未解决的实例特定范围证据；未提供经验界 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_growout_abstracted_water <br> - 单位：kg <br> - 基准：每 1 kg 参考流；必须为该实际实例确定U_growout_abstracted_water <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_growout_carried_matter` | `growout`; 输出; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：随收集移出的水、生物膜与碎片. T1m：与动物质量分别计量并与collect_collection_carried_matter配对；保留来源及后续T2m分选去向。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_growout` <br> - 数量范围：尚未解决的实例特定范围证据；未提供经验界 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_growout_carried_matter <br> - 单位：kg <br> - 基准：每 1 kg 参考流；必须为该实际实例确定U_growout_carried_matter <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_growout_other_intended` | `growout`; 输出; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：其他计划养成去向及期末活体库存. 对留存小规格批次、实际研究／放流转移及其他计划产品分别建立交付门与承接负担；不隐含销售或参考输出。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_growout` <br> - 数量范围：尚未解决的实例特定范围证据；未提供经验界 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_growout_other_intended <br> - 单位：kg <br> - 基准：每 1 kg 参考流；必须为该实际实例确定U_growout_other_intended <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_growout_wastes` | `growout`; 输出; 废物流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：送往处理的养成固体、死亡动物及废物. 按实际处理路径拆分死亡动物、废饲料、滤泥、废水、去除生物膜及报废资产；包含异常和失败批次。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_growout` <br> - 数量范围：尚未解决的实例特定范围证据；未提供经验界 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_growout_wastes <br> - 单位：kg <br> - 基准：每 1 kg 参考流；必须为该实际实例确定U_growout_wastes <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_growout_aqueous_pollutants` | `growout`; 输出; 基本流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：养成直接排入海水的单项污染物. 仅实例化有证据的物质行，例如实测铵离子与氨氮、硝酸盐与硝态氮、磷酸盐与磷以及声明基准的有机碳；使用可比质量和水量记录扣除进水背景。不将营养盐去除标为避免负担。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_growout` <br> - 数量范围：尚未解决的实例特定范围证据；未提供经验界 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_growout_aqueous_pollutants <br> - 单位：kg <br> - 基准：每 1 kg 参考流；必须为该实际实例确定U_growout_aqueous_pollutants <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_growout_air_releases` | `growout`; 输出; 基本流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：明确碳来源的循环水系统直接单项大气排放. 实例化实际尾气／燃烧物质；保留CO2、CH4或N2O的实测或建模基准，并区分化石碳与生物碳。不假定为零，不合并为通用全部碳流，不设默认硝化因子。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_growout` <br> - 数量范围：尚未解决的实例特定范围证据；未提供经验界 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_growout_air_releases <br> - 单位：kg <br> - 基准：每 1 kg 参考流；必须为该实际实例确定U_growout_air_releases <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_collection_carried_matter` | `collection`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：伴随养殖动物的内部水、生物膜与碎片. T1m来自collect_growout_carried_matter；为携带的生产物料，不是新环境取水；将实际collect_collection_incidental单独加入T2m。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_collection` <br> - 数量范围：尚未解决的实例特定范围证据；未提供经验界 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_collection_carried_matter <br> - 单位：kg <br> - 基准：每 1 kg 参考流；必须为该实际实例确定U_collection_carried_matter <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_collection_non_electric_energy` | `collection`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：从V形槽人工实体收集实际非电能源载体. 实际使用时启用：逐一实例化每种燃料或供应热能载体，附原生质量／体积／能源单位及一致U_row单位、供应商与实测量。将燃烧／尾气链接至同一事件与碳来源；不重复完整供应商服务已含燃料。未发生须有证据。 <br> - 流属性/单位：Actual carrier property / actual native carrier unit <br> - 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_collection` <br> - 数量范围：尚未解决的实例特定范围证据；未提供经验界 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_collection_non_electric_energy <br> - 单位：actual native carrier unit <br> - 基准：每 1 kg 参考流；必须为该实际实例确定U_collection_non_electric_energy <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_collection_materials` | `collection`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：按质量计量的收集耗材. 按项目及原生质量基准记录实际清洗化学品与收集耗材；可复用工具、容器及资产服务单列。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_collection` <br> - 数量范围：尚未解决的实例特定范围证据；未提供经验界 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_collection_materials <br> - 单位：kg <br> - 基准：每 1 kg 参考流；必须为该实际实例确定U_collection_materials <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_collection_asset_services` | `collection`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：从V形槽人工实体收集实际资产与复用容器服务. 对每项实际资产／工具／容器服务声明供应商／实体服务定义及原生属性／单位，例如件次、占用体积－时间或计量小时。范围U_row使用该同一实例单位，绝不将全部服务换成千克。保留建造组成、服务寿命／使用证据、维修／更换、清洗与返回；避免完整服务重叠。 <br> - 流属性/单位：Actual instance property / actual native service unit <br> - 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_collection` <br> - 数量范围：尚未解决的实例特定范围证据；未提供经验界 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_collection_asset_services <br> - 单位：actual native service unit <br> - 基准：每 1 kg 参考流；必须为该实际实例确定U_collection_asset_services <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_collection_incidental` | `collection`; 输入; 基本流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：进入收集的偶带海水及附着环境物质. 仅记录本事件从环境带入的物质；养成系统水、养成来源藻类／固体属于内部承接物料T1m，不作为新基本流取水。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_collection` <br> - 数量范围：尚未解决的实例特定范围证据；未提供经验界 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_collection_incidental <br> - 单位：kg <br> - 基准：每 1 kg 参考流；必须为该实际实例确定U_collection_incidental <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_collection_carried_out` | `collection`; 输出; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：转入分选的携带水、生物膜及碎片. T2m仅与collect_sort_incidental配对，按物料类型分别实测数量；核对带入T1m与collect_collection_incidental、去除及实际损失。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_collection` <br> - 数量范围：尚未解决的实例特定范围证据；未提供经验界 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_collection_carried_out <br> - 单位：kg <br> - 基准：每 1 kg 参考流；必须为该实际实例确定U_collection_carried_out <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_collection_other_intended` | `collection`; 输出; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：收集环节其他计划活体去向. 逐一实例化实际直接研究／库存／其他等级交付；不得将收集批次藏入未说明损失。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_collection` <br> - 数量范围：尚未解决的实例特定范围证据；未提供经验界 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_collection_other_intended <br> - 单位：kg <br> - 基准：每 1 kg 参考流；必须为该实际实例确定U_collection_other_intended <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_collection_wastes` | `collection`; 输出; 废物流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：收集损失与送往处理的废弃材料. 按去向记录实际死亡／受损剔除动物、废耗材和废水；受损本身不使计划低等级产品成为废物。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_collection` <br> - 数量范围：尚未解决的实例特定范围证据；未提供经验界 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_collection_wastes <br> - 单位：kg <br> - 基准：每 1 kg 参考流；必须为该实际实例确定U_collection_wastes <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_collection_direct_releases` | `collection`; 输出; 基本流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：按物质与介质拆分的收集直接排放. 区分返回水与污染物物质行，识别实际排口；不重复计入送往处理的数量。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_collection` <br> - 数量范围：尚未解决的实例特定范围证据；未提供经验界 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_collection_direct_releases <br> - 单位：kg <br> - 基准：每 1 kg 参考流；必须为该实际实例确定U_collection_direct_releases <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_sort_incidental` | `sorting`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：带入分选的水、生物膜与碎片. T2m来自collect_collection_carried_out；追踪养成携带T1m及collect_collection_incidental；绝不悄然计入接收动物质量。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_sorting` <br> - 数量范围：尚未解决的实例特定范围证据；未提供经验界 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_sort_incidental <br> - 单位：kg <br> - 基准：每 1 kg 参考流；必须为该实际实例确定U_sort_incidental <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_sorting_non_electric_energy` | `sorting`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：等级及去向分选实际非电能源载体. 实际使用时启用：逐一实例化每种燃料或供应热能载体，附原生质量／体积／能源单位及一致U_row单位、供应商与实测量。将燃烧／尾气链接至同一事件与碳来源；不重复完整供应商服务已含燃料。未发生须有证据。 <br> - 流属性/单位：Actual carrier property / actual native carrier unit <br> - 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_sorting` <br> - 数量范围：尚未解决的实例特定范围证据；未提供经验界 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_sorting_non_electric_energy <br> - 单位：actual native carrier unit <br> - 基准：每 1 kg 参考流；必须为该实际实例确定U_sorting_non_electric_energy <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_sort_materials` | `sorting`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：按质量计量的分选耗材. 按供应项目／原生质量记录实际清洁化学品与分选耗材辅助；秤、盘与复用服务单列。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_sorting` <br> - 数量范围：尚未解决的实例特定范围证据；未提供经验界 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_sort_materials <br> - 单位：kg <br> - 基准：每 1 kg 参考流；必须为该实际实例确定U_sort_materials <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_sorting_asset_services` | `sorting`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：等级及去向分选实际资产与复用容器服务. 对每项实际资产／工具／容器服务声明供应商／实体服务定义及原生属性／单位，例如件次、占用体积－时间或计量小时。范围U_row使用该同一实例单位，绝不将全部服务换成千克。保留建造组成、服务寿命／使用证据、维修／更换、清洗与返回；避免完整服务重叠。 <br> - 流属性/单位：Actual instance property / actual native service unit <br> - 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_sorting` <br> - 数量范围：尚未解决的实例特定范围证据；未提供经验界 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_sorting_asset_services <br> - 单位：actual native service unit <br> - 基准：每 1 kg 参考流；必须为该实际实例确定U_sorting_asset_services <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_sort_other_intended` | `sorting`; 输出; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：其他计划活体等级及非参考去向. 逐一实例化实际降级销售、研究／苗种／放流去向或期末活体库存，附独立接收门与数量。属于计划产品，不自动作为剔除物或废物。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_sorting` <br> - 数量范围：尚未解决的实例特定范围证据；未提供经验界 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_sort_other_intended <br> - 单位：kg <br> - 基准：每 1 kg 参考流；必须为该实际实例确定U_sort_other_intended <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_sort_wastes` | `sorting`; 输出; 废物流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：送往处理的死亡／剔除动物及去除物料. 按实际处理去向拆分动物废弃物、携带固体／水及耗材；计入去除物料T2m。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_sorting` <br> - 数量范围：尚未解决的实例特定范围证据；未提供经验界 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_sort_wastes <br> - 单位：kg <br> - 基准：每 1 kg 参考流；必须为该实际实例确定U_sort_wastes <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_sort_direct_releases` | `sorting`; 输出; 基本流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：分选直接排放的水与污染物. 按接收介质实例化载体水与每项有证据污染物；不自动假定回海或无污染排水。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_sorting` <br> - 数量范围：尚未解决的实例特定范围证据；未提供经验界 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_sort_direct_releases <br> - 单位：kg <br> - 基准：每 1 kg 参考流；必须为该实际实例确定U_sort_direct_releases <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_holding_materials` | `holding`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际暂养氧气及按质量计量的耗材. 按项目／原生质量展开实际氧气、化学品与耗材；使用实际记录。资产／容器服务单列。不规定冷却、用药、温度或时长。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_holding` <br> - 数量范围：尚未解决的实例特定范围证据；未提供经验界 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_holding_materials <br> - 单位：kg <br> - 基准：每 1 kg 参考流；必须为该实际实例确定U_holding_materials <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_holding_non_electric_energy` | `holding`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际有界活体暂养实际非电能源载体. 实际使用时启用：逐一实例化每种燃料或供应热能载体，附原生质量／体积／能源单位及一致U_row单位、供应商与实测量。将燃烧／尾气链接至同一事件与碳来源；不重复完整供应商服务已含燃料。未发生须有证据。 <br> - 流属性/单位：Actual carrier property / actual native carrier unit <br> - 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_holding` <br> - 数量范围：尚未解决的实例特定范围证据；未提供经验界 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_holding_non_electric_energy <br> - 单位：actual native carrier unit <br> - 基准：每 1 kg 参考流；必须为该实际实例确定U_holding_non_electric_energy <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_holding_asset_services` | `holding`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际有界活体暂养实际资产与复用容器服务. 对每项实际资产／工具／容器服务声明供应商／实体服务定义及原生属性／单位，例如件次、占用体积－时间或计量小时。范围U_row使用该同一实例单位，绝不将全部服务换成千克。保留建造组成、服务寿命／使用证据、维修／更换、清洗与返回；避免完整服务重叠。 <br> - 流属性/单位：Actual instance property / actual native service unit <br> - 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_holding` <br> - 数量范围：尚未解决的实例特定范围证据；未提供经验界 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_holding_asset_services <br> - 单位：actual native service unit <br> - 基准：每 1 kg 参考流；必须为该实际实例确定U_holding_asset_services <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_holding_supplied_water` | `holding`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：暂养供应水. 一次记录实际供应商海水／淡水、体积／密度与用途；区分循环水。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_holding` <br> - 数量范围：尚未解决的实例特定范围证据；未提供经验界 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_holding_supplied_water <br> - 单位：kg <br> - 基准：每 1 kg 参考流；必须为该实际实例确定U_holding_supplied_water <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_holding_abstracted_water` | `holding`; 输入; 基本流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：暂养直接环境取水. 实例化实际来源与取水事件；不重复供应商水或循环水。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_holding` <br> - 数量范围：尚未解决的实例特定范围证据；未提供经验界 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_holding_abstracted_water <br> - 单位：kg <br> - 基准：每 1 kg 参考流；必须为该实际实例确定U_holding_abstracted_water <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_holding_other_intended` | `holding`; 输出; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：暂养出口其他计划去向或留存活体库存. 逐一实例化实际其他活体产品接收方或留存批次，附自身出口／库存记录与负担。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_holding` <br> - 数量范围：尚未解决的实例特定范围证据；未提供经验界 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_holding_other_intended <br> - 单位：kg <br> - 基准：每 1 kg 参考流；必须为该实际实例确定U_holding_other_intended <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_holding_wastes` | `holding`; 输出; 废物流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：送往处理的暂养死亡动物、残余物与废水. 记录失败暂养批次、移除动物、废介质与实际处理去向；保留湿／干基准。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_holding` <br> - 数量范围：尚未解决的实例特定范围证据；未提供经验界 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_holding_wastes <br> - 单位：kg <br> - 基准：每 1 kg 参考流；必须为该实际实例确定U_holding_wastes <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_holding_direct_releases` | `holding`; 输出; 基本流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：按物质与介质拆分的暂养直接排放. 实际排放时分别记录载体水、单项水污染物、制冷剂和燃烧／生物气体；保留碳来源与物质基准。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_holding` <br> - 数量范围：尚未解决的实例特定范围证据；未提供经验界 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_holding_direct_releases <br> - 单位：kg <br> - 基准：每 1 kg 参考流；必须为该实际实例确定U_holding_direct_releases <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_presentation_materials` | `presentation`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：按质量计量的保护性呈现材料. 按供应项目／原生质量实例化实际衬垫、标签、湿润介质及一次性保护材料；复用／容器服务单列。均从动物参考质量排除。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_presentation` <br> - 数量范围：尚未解决的实例特定范围证据；未提供经验界 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_presentation_materials <br> - 单位：kg <br> - 基准：每 1 kg 参考流；必须为该实际实例确定U_presentation_materials <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_presentation_non_electric_energy` | `presentation`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：活体保护性呈现实际非电能源载体. 实际使用时启用：逐一实例化每种燃料或供应热能载体，附原生质量／体积／能源单位及一致U_row单位、供应商与实测量。将燃烧／尾气链接至同一事件与碳来源；不重复完整供应商服务已含燃料。未发生须有证据。 <br> - 流属性/单位：Actual carrier property / actual native carrier unit <br> - 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_presentation` <br> - 数量范围：尚未解决的实例特定范围证据；未提供经验界 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_presentation_non_electric_energy <br> - 单位：actual native carrier unit <br> - 基准：每 1 kg 参考流；必须为该实际实例确定U_presentation_non_electric_energy <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_presentation_asset_services` | `presentation`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：活体保护性呈现实际资产与复用容器服务. 对每项实际资产／工具／容器服务声明供应商／实体服务定义及原生属性／单位，例如件次、占用体积－时间或计量小时。范围U_row使用该同一实例单位，绝不将全部服务换成千克。保留建造组成、服务寿命／使用证据、维修／更换、清洗与返回；避免完整服务重叠。 <br> - 流属性/单位：Actual instance property / actual native service unit <br> - 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_presentation` <br> - 数量范围：尚未解决的实例特定范围证据；未提供经验界 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_presentation_asset_services <br> - 单位：actual native service unit <br> - 基准：每 1 kg 参考流；必须为该实际实例确定U_presentation_asset_services <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_presentation_other_intended` | `presentation`; 输出; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：呈现环节其他计划去向及可复用容器. 分别实例化每项其他活体等级去向及可复用容器返回，附接收方、复用／服务账及数量；容器返回不是第二份动物输出。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_presentation` <br> - 数量范围：尚未解决的实例特定范围证据；未提供经验界 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_presentation_other_intended <br> - 单位：kg <br> - 基准：每 1 kg 参考流；必须为该实际实例确定U_presentation_other_intended <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_presentation_wastes` | `presentation`; 输出; 废物流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：送往处理的呈现剔除物、死亡动物与废包装. 区分实际产品处置、计划低等级产品及包装更换；识别处理与废水去向。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_presentation` <br> - 数量范围：尚未解决的实例特定范围证据；未提供经验界 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_presentation_wastes <br> - 单位：kg <br> - 基准：每 1 kg 参考流；必须为该实际实例确定U_presentation_wastes <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_presentation_direct_releases` | `presentation`; 输出; 基本流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：按物质与介质拆分的呈现直接排放. 分别实例化实际返回水及污染物，以及直接能源／制冷剂排放；上游供应排放保留在上游。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_presentation` <br> - 数量范围：尚未解决的实例特定范围证据；未提供经验界 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_presentation_direct_releases <br> - 单位：kg <br> - 基准：每 1 kg 参考流；必须为该实际实例确定U_presentation_direct_releases <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_delivery_services` | `delivery`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：按路段记录的完整接收前运输服务. 不论付款方，记录每段实际运输、含包装／水货载、距离、车辆／装载／返程及集成温控。完整服务包含能源／资产／排放，不得重复添加。场站搬运单列。 <br> - 流属性/单位：Transport / t*km <br> - 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_delivery` <br> - 数量范围：尚未解决的实例特定范围证据；未提供经验界 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_delivery_services <br> - 单位：t*km <br> - 基准：每 1 kg 参考流；必须为该实际实例确定U_delivery_services <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_delivery_non_electric_energy` | `delivery`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：直至首个实体接收方接收的全部物流实际非电能源载体. 实际使用时启用：逐一实例化每种燃料或供应热能载体，附原生质量／体积／能源单位及一致U_row单位、供应商与实测量。将燃烧／尾气链接至同一事件与碳来源；不重复完整供应商服务已含燃料。未发生须有证据。 <br> - 流属性/单位：Actual carrier property / actual native carrier unit <br> - 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_delivery` <br> - 数量范围：尚未解决的实例特定范围证据；未提供经验界 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_delivery_non_electric_energy <br> - 单位：actual native carrier unit <br> - 基准：每 1 kg 参考流；必须为该实际实例确定U_delivery_non_electric_energy <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_delivery_handling` | `delivery`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：接收前完整搬运、场站或临时暂存服务. 以各自定义原生单位（例如处理批次或占用时间／体积）逐一实例化实际完整搬运／场站／暂存服务；保留自身U_row单位与实测量。不得将不同服务强制换成小时。不论操作者纳入全部接收前事件；排除完整服务已含组件负担。 <br> - 流属性/单位：Actual instance service property / actual native service unit <br> - 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_delivery` <br> - 数量范围：尚未解决的实例特定范围证据；未提供经验界 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_delivery_handling <br> - 单位：actual native service unit <br> - 基准：每 1 kg 参考流；必须为该实际实例确定U_delivery_handling <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_delivery_other_intended` | `delivery`; 输出; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：其他计划活体去向、退货与可复用载具. 在各自门逐一实例化实际低等级接收、改送接收方、活体退货及可复用载具返回；从所选A中排除并承接自身负担。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_delivery` <br> - 数量范围：尚未解决的实例特定范围证据；未提供经验界 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_delivery_other_intended <br> - 单位：kg <br> - 基准：每 1 kg 参考流；必须为该实际实例确定U_delivery_other_intended <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_delivery_wastes` | `delivery`; 输出; 废物流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：送往处理的接收前死亡动物、剔除货物与废物. 即使接收方拒收整批，也须计入全部发货损失及实际处置／清理去向；无接收批次时不得伪造参考数据集。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_delivery` <br> - 数量范围：尚未解决的实例特定范围证据；未提供经验界 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_delivery_wastes <br> - 单位：kg <br> - 基准：每 1 kg 参考流；必须为该实际实例确定U_delivery_wastes <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_delivery_direct_releases` | `delivery`; 输出; 基本流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：完整购买服务之外的接收前直接排放. 记录独立负责的实际排放物质／介质、碳来源及数量；排除collect_delivery_services已含排放并区分废水处理。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：每1千克参考流实测可归属实例量；保留原始节点／期间数量及原生单位。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_delivery` <br> - 数量范围：尚未解决的实例特定范围证据；未提供经验界 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_delivery_direct_releases <br> - 单位：kg <br> - 基准：每 1 kg 参考流；必须为该实际实例确定U_delivery_direct_releases <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `dq_logistics_water_balance` | 运输、服务和水/营养物平衡 | 运输实际载荷包括随行水、冰、包装及其他货物；空返或调位虽无产品载荷仍有活动负荷，须以实际燃料/距离/车辆服务及明确分配计入，不能以零吨公里消去。完整服务与其已覆盖燃料、材料、资产和直接排放不得重复计入。外部取水、供水产品、内部循环和实际返排水分别计量；内部循环不得再从外部取水中重复扣减。净营养物增量/滞留只用于独立平衡诊断，不自动成为负基本流、负排放或避免负荷。 | 实际载荷和车辆活动记录、服务覆盖、同批水/物质平衡与方法证据 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_scope` | reference | 要求S. droebachiensis、孵化来源、缅因州陆基V形槽循环水／配合饲料经历、整只原生壳／棘、活体未冻结状态与实际首个实体接收。不得改标排除路径或缺失接收以通过检查。 | |
| `validation_mass` | all nodes | 检查经校准接收净质量、正A、最终1千克、原生单位、饲料／水／数量换算与精确匹配转移状态／质量／数量，包括携带物料和两个暂养分支。内部数量不必等于1千克。 | mass-normalization-identity |
| `validation_outputs` | all nodes | 将每项计划等级／去向与留存／返回批次同废物分别核算；要求接收／库存门及负担负责方，不重复最终输出，不设环境信用。纳入独立于生长的收集，以及进入分选的偶带物料。 | |
| `validation_periods` | nursery; growout; shared assets | 核对运行／期间／批次边界、清理／转换／维修／更换／终止、失败期间、死亡、未结库存与共享服务份额。要求分配依据、实际服务寿命证据与敏感性；防止重复资产或完整服务组件。 | |
| `validation_fates` | water; wastes; direct releases | 要求实际供应／取水区分、废水处理与直接排放区分、载体水与污染物物种区分、化学／N／P／碳／介质基准及化石／生物来源区分。未知去向或排放为未解决，不是零。 | |
| `validation_states` | nursery; holding; all applicable collection obligations | 选择实际观测启用／未发生状态，填充零／一／多个具体实例，附自身数量、原生单位、接收方与已核实UUID。缺失状态、符号U_row、身份或方法证据须保留披露；检查成功不表示发布就绪。 | |
| `validate_atomic_completion` | 所有适用的逐流采集义务和最终交换 | 只有每项实际发生的交换均有独立原子卡及其自身的数量、属性/原生单位、采集或计算证据、范围/不确定性证据、归一化、实际去向和已验证UUID时，最终数据包才可完成并通过验证。未知身份、活动状态、数量、范围证据或去向会阻断完成；不得视为零、默认为旁路或靠省略义务通过。所有重要具体流须保留自身范围/不确定性证据采集责任；符号上限不是实证范围。 | |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景数据包；经审查后可作为secondary_dataset或background_dataset |
| downstream_use | 对相同声明整只活体动物接收状态的可追溯process与lifecyclemodel投影 |
| allowed_use | 匹配物种、孵化来源、技术、日粮经历、地理、期间以及具有实体证据的接收门，并声明不确定性 |
| excluded_use | 野生成体增黄、放养／海笼／混养、提取海胆黄、死亡／去内脏／冻结产品；假定发货、盈利、法律资格、安全、治疗效力或品质保证 |
| required_metadata | PCR／版本；批次／场址／期间；苗种／培育／饲料经历；参考／状态／接收；原生单位；转移／库存账；资产／服务；物流；分配及实际启用／未发生状态 |
| required_quality_disclosure | 来源与实测覆盖；上游缺口；失败批次；未结库存；未解决身份／范围／状态／去向；分配与寿命敏感性；已执行／跳过校验 |
| update_trigger | 来源、日粮、场址、技术、输出状态、接收门、处理、期间／资产假设变化，新的原始数据或已核实身份 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| umaine-green-urchin-growout-2013 | literature | 缅因大学CCAR，Assessment of grow-out strategies for the green sea urchin，2009—2013最终报告，目标／摘要与陆基培育／循环水方法，PDF第1—3、6—10页；https://umaine.edu/cooperative-aquaculture/wp-content/uploads/sites/75/2016/03/Final-report-NRAC-Sea-urchin-project.pdf | 历史孵化／培育及循环海水V形槽路径、配合饲料试验经历与实际设备职责；不设PCR数值默认值，不声称商业发货 |
| noaa-green-urchin-manual-2023 | handbook | Eddy、Morse、Kogson与Suckling（2023），Green Sea Urchin Aquaculture in the Northeast US: Hatchery, Nursery, and Growout，营销，PDF第12—13页；https://repository.library.noaa.gov/view/noaa/70579/noaa_70579_DS1.pdf | 潜在整只活体接收渠道；实际合格接收须独立证明；不规定安全、疾病、法律、保质期、盈利或海胆黄品质 |
| un-cpc3-04522-2025 | official_guidance | 联合国统计司，CPC3.0解释注释，2025年6月30日，04522；https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅分类背景：有／无壳养殖海胆，活、鲜或冷藏；本PCR较窄 |
| mass-normalization-identity | method_factor | 本PCR第8节定义的同一实测接收批次恒等式A/A | 仅最终参考代数归一化；不是经验产率或内部转移数量 |
