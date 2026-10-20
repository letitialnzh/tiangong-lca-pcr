---
pcr_id: pcr.wild-live-whole-caribbean-spiny-lobsters
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 首次生产者交接的野生整只带原生壳活体加勒比龙虾 Panulirus argus

## 1. 范围与适用性

仅适用于首次生产者交接、用于食品、整只带原生壳且声明实际肢体和壳状态的野生 Panulirus argus 活体。生产者短时活体维持属于条件性操作，不是有意生长。依实际记录声明捕捞技术，不能视为可持续性排名。此边界窄于CPC04321。

排除其他刺龙虾或岩龙虾、Homarus、Nephrops及淡水螯虾；排除养殖、有意养成育肥、观赏供应、仅尾或肉、死亡的鲜或冷藏产品参考、冷冻、解冻、烹煮或其他加工，以及买方配送和买方暂养。非参考原料仅在有真实状态和接收者验收时可转出供外部加工；该加工不纳入。不提供普遍法规、福利、温度、时长、死亡率、产率、寿命或食品安全保证。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.wild-live-whole-caribbean-spiny-lobsters |
| classification_refs | CPC3.0:04321 (narrower) |
| covered_products | 首次生产者交接的野生整只带原生壳活体加勒比龙虾 Panulirus argus |
| excluded_products | 其他类群；养殖养成育肥；观赏；死亡参考；尾或肉；加工或买方门供应。 |
| representative_product | 首次生产者交接的野生整只带原生壳活体加勒比龙虾 Panulirus argus |
| production_route | 捕捞父活动下实际笼捕、潜水或bullynet（浅水定点抄捕）；按实际事件顺序进行条件性分级、活体维持及保护；首次生产者活体验收。 |
| market_state | 整只带原生壳食品活体；披露实际损伤、等级及门，不保证出口运输存活。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 首次生产者交接的野生整只带原生壳活体加勒比龙虾 Panulirus argus |
| How much | 1 千克验收动物净质量 |
| How well | 实际物种、来源、存活、壳及肢体状态、已声明食品用途及实际适用验收准则；目测等级或存活模型均非认证。 |
| How long or cycle | 声明批次航次及完整可归属季节、报告和资产服务期间；不规定暂养时长或寿命。 |
| reference_flow_link | `live_argus_handover` |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 首次生产者交接的野生整只带原生壳活体加勒比龙虾 Panulirus argus |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Panulirus argus核验; 野生来源区域及捕捞日期; 批次航次事件期间; 实际笼捕潜水bullynet（浅水定点抄捕）及服务边界; 活体整只原生壳及肢体壳状态; 等级用途验收; 岸上海上首次实物门及所有权; 实际交接前暂养保护和跳过项; 经校准动物净质量、可分离水及包装皮重; 真实副产废物放归库存去向; 完整共享服务期间及仅一次分配。 |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | Mass | kg | 采用经校准且可追溯的称重，对同一验收批次在首次生产者实物门测定净质量，扣除可分离水、容器和保护物皮重，保留原生壳、肢体及体内水。声明沥水、扣皮程序及不确定性；不得将通用只数转为1千克。 |
| native_numerator | all inventory rows | 真实分子属性 | 记录单位 | 每项具体材料质量、燃料质量或另有依据的燃料能量、电能及服务数量保持其自身属性单位；换算时保留供应者浓度、密度、热值或电表证据。需要时电量换算1 kWh=3.6 MJ，不能算热量或重复燃料。只数等级努力量和时间属辅助项，除非另有需要且有证据的换算；不提供通用只数转质量因子。 |
| unallocated_basis | all inventory rows | 实际属性 | 每1千克参考的分子单位 | 所有卡在完整未分配实物核对及唯一节点服务归属后，按每1千克参考流表达。仅最终验收输出按归一定义为1千克；内部转移、水、损失及其他输出保留实际数量除以正的最终分母之比，不是固定产率。单独标注的LCA分配视图不能替代实物数量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已观察野生海洋Panulirus argus捕获、实际捕捞环境及初始去向；无受控生长。 |
| starting_condition_role | 具有采集记录的野生捕捞边界，不是同类别上游豁免。 |
| product_classification_scope | CPC3.0:04321; narrower live whole Panulirus argus |
| recursive_input_rule | 任何外购或转入同类别动物或活体诱集物保留实际上游或结转负荷、来源、状态及转移身份；不得重启为零负荷新野生捕获；同节点库存循环不新增交换。 |
| upstream_dataset_requirement | 相容具体外购材料服务及共享资产供应数据集，具有真实地区状态、范围和单位；仅有证据时分拆全包服务，不得全包与组件并计。 |
| disclosure | 物种、野生来源、实际事件拓扑和替代方案、门、排除项、完整服务期间、库存去向、分配选择、证据包络限制及实际质量不确定性。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `wild_start` | capture | 以实际野生海洋捕获开始，而非外购或养殖种苗，也不虚构同类别零负荷供应。记录捕捞区、时间、物种及渔具；自然种群生长不是前景养成活动。 | `noaa-caribbean-spiny-lobster` |
| `gate_complete` | all nodes | 每条动物链在有证据的首次生产者实物验收终止，并声明岸上或海上门。即使动物已在海上交接，仍按完整可归属航次、资产及服务期间纳入必要的生产者去返程、闲置、清洁、维护及替换。排除买方配送及其后续暂养或加工。任何截断须定量声明，不能抹去返程负荷。 |  |
| `events_states` | all nodes | 过程表是责任索引，不是强制时序。按实际事件编号、节点和回次、时间、状态、存活、所有者及成对转移记录。条件节点可跳过或回访；分级可在暂养或呈现前后，但每一实物事件仅一归属。仅活体节点不接受死亡状态。验收前未接受动物保留于真实事件归属方的库存或有证据的其他已接受输出、放归或废物账；不得假定上游返工回路。任何上游返工或退回路线须另行审查范围及module。验收后买方退货在范围外。内部动物投入不得固定为1千克，同一动物不得同时计为参考和其他去向。 |  |
| `technology_delta` | capture | 捕捞为父活动。笼捕事件须有实际笼、绳、浮标投放、起收、诱饵及遗失或退役渔具记录；潜水事件须有实际潜水装备、气体、压缩机或外包潜水服务证据；bullynet（浅水定点抄捕）事件须有实际浅水抄网和照明事件证据。这些仅为定性需求类别，不是强制资源数量。逐事件选择实际技术；混合航次仅在事件与努力量分开、共享船舶负荷唯一归属时共存。不得将所有方案同时默认为负荷。 | `noaa-caribbean-spiny-lobster` |
| `bait_lifecycle` | capture | 按物种、状态及批次维护单独活体诱集账：期初活体库存、实际外购、从野生捕获指定及跨节点或期间接收，与期末活体库存、真实活体转出、放归、死亡材料去向及有证据损失核对。同节点复用是事件，不是新增外购或生物量。区分活体诱集物、消耗性材料饵、原生及载体水和食品参考动物。目标动物被指定为诱集物时不能同时作为食品输出；后来若交为食品，须有实际状态、用途验收、完整结转负荷和唯一去向。地方诱饵做法不构成普遍合法性或固定死亡率。 | `noaa-caribbean-spiny-lobster` |
| `water_materials` | all nodes | 区分供应材料、环境取水、内部循环、携带水及真实接收去向。体内水属于动物净质量；可分离水和包装不属于。按证据记录吸水、渗出、碎片、蜕壳或其他实际库存和损失项；短暂维持不构成假定湿质量恒定或受控养成的理由。不推导强制清洗或调质节点；独立改变材料的操作须先复核范围。 |  |
| `service_period` | all nodes | 按实际使用识别共享船舶、箱池、泵、潜水装备、照明、秤及容器及消费节点事件和完整期间。保留购置、使用、清洁、维护、替换及退役证据；不提供默认寿命。动物、诱饵、包装及负荷的期初期末结转衔接期间。零参考产出期间保留真实产品、废物及服务账，并有依据处理结转或其他产品归属；不得除以零或丢弃负荷。 |  |
| `two_views` | all inventory rows | 先保留未分配实物接收、事件、产品、损失、废物及库存和不确定性；成对转移仅配对一次，并按正的最终验收净千克归一实测核对后的节点归属数量。此实物视图不是共产品分配；之后才附加第7节单独的仅一次 LCA 分配视图。不得用经济份额闭合生物量，也不得裁剪未知数量。 |  |

## 6. 过程清单结构

### 过程图

| process_id | Process name | Inclusion | Inclusion condition | Role | Quantitative reference |
| --- | --- | --- | --- | --- | --- |
| `capture` | 野生捕捞及生产者完整航次责任 | required | 实际商业捕捞；声明笼捕、潜水或bullynet（浅水定点抄捕）事件 | 按真实事件回次索引的前景责任 | 每1 kg参考流，内部量实测 |
| `grading` | 商业分级及去向分选 | conditional | 存在独立的交接前等级或去向判定 | 按真实事件回次索引的前景责任 | 每1 kg参考流，内部量实测 |
| `holding` | 交接前短时活体维持 | conditional | 生产者在首次交接前实施有边界的活体维持操作 | 按真实事件回次索引的前景责任 | 每1 kg参考流，内部量实测 |
| `presentation` | 交接前保护及呈现 | conditional | 生产者在交接前独立装容、保护、标识或呈现动物 | 按真实事件回次索引的前景责任 | 每1 kg参考流，内部量实测 |
| `handover` | 首次生产者实物交接及验收 | required | 每个最终参考批次具有一项有证据的首次生产者验收事件 | 按真实事件回次索引的前景责任 | 每1 kg参考流，内部量实测 |

所有卡先保留未分配实物视图及成对转移、独立库存账；之后才在单独仅一次LCA视图分配真实共同负荷。每个条件性伞形卡展开为零、一或多项真实身份，不是单项通用交换；未激活须有未实施证据，不是将未知量强制为零。即使跳过呈现，每个节点仍拥有其真实资源和损失。

生产模式为离散捕捞事件及可追溯航次批次，不假定连续加工线。声明实际混批、航次边界、暂养运行、清洁及切换事件和唯一归属；不得仅因等级标签改变就推导产率。只在声明的报告及共享服务期间汇总相容状态和门的分层，保留每个批次账及真实零产出期间。

### 过程：野生捕捞及生产者完整航次责任（`capture`）

从野生海洋环境独立捕获，含初次选择及真实捕获状态交接；不是受控生物生产。不同渔具是此父活动的实现方案，不是额外串联的捕捞节点。

#### 输入

##### 产品流

###### 实际供应或自产电力（`capture_electricity`）

声明实际地区、电压、供应者及外购或自产边界。计量节点用电或唯一归属共享用电；不得在自产电力燃料及发电负荷之外再重复添加上游外购电力。

- 选定流：实际供应或自产电力
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_capture_energy。不得以分配份额替代实物数量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_capture_energy`
- 来源：`noaa-caribbean-spiny-lobster`
- 数量范围：未决独立证据包络；不是默认值、经验阈值或裁剪界限
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：U_capture_electricity
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

##### 废物流

##### 基本流

###### 从环境捕获的野生 Panulirus argus（`capture_wild_animals`）

按物种、状态、努力量、地点、时间及去向记录已观察捕获和初始移出。此未分配生物移出账不是上游养殖产品，也不是通用 LCIA 表征。未观察死亡保留为披露的证据缺口。

- 选定流：从环境捕获的野生 Panulirus argus
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_capture_mass。不得以分配份额替代实物数量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_capture_mass`
- 来源：`noaa-caribbean-spiny-lobster`
- 数量范围：未决独立证据包络；不是默认值、经验阈值或裁剪界限
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：U_capture_wild_animals
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 实际直接取水（`capture_water_abstraction`）

仅记录从环境跨入的实际取水，声明海水或淡水来源，必要时保留体积转质量依据。循环水属内部环路，不得重复记取水。外购水单列，不能与此处为同一数量。

- 选定流：实际直接取水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_capture_mass。不得以分配份额替代实物数量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_capture_mass`
- 来源：`noaa-caribbean-spiny-lobster`
- 数量范围：未决独立证据包络；不是默认值、经验阈值或裁剪界限
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：U_capture_water_abstraction
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

#### 输出

##### 产品流

###### 转入活体食品准备的已捕获整只动物（`capture_food_transfer`）

每次真实转移与下一节点接收按转移编号、批次、事件、实际状态和实测净质量配对。不得按定义固定为 1 千克；已捕获活体不等于最终验收参考。死亡动物不能进入仅活体暂养或呈现投入。

- 选定流：转入活体食品准备的已捕获整只动物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_capture_mass。不得以分配份额替代实物数量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_capture_mass`
- 来源：`noaa-caribbean-spiny-lobster`
- 数量范围：未决独立证据包络；不是默认值、经验阈值或裁剪界限
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：U_capture_food_transfer
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

##### 废物流

###### 实际转交处理的废水（`capture_effluent_treatment`）

记录水及携带物质、实际外部处理接收，或仅一次细分已声明前景处理。不得将同一未经处理水流再算直接排放；水质量不等于溶解污染物质量。

- 选定流：实际转交处理的废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_capture_mass。不得以分配份额替代实物数量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_capture_mass`
- 来源：`noaa-caribbean-spiny-lobster`
- 数量范围：未决独立证据包络；不是默认值、经验阈值或裁剪界限
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：U_capture_effluent_treatment
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

##### 基本流

###### 向未细分空气排放的前景化石二氧化碳（`capture_fossil_co2`）

仅代表有来源、碳或燃料活动及相容未细分空气介质依据的实际前景化石 CO2。不是动物呼吸、生物源 CO2、全部尾气或排放因子；须区分供应者全包服务排放，避免重复。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 绑定模式：fixed
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_capture_mass。不得以分配份额替代实物数量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_capture_mass`
- 来源：`noaa-caribbean-spiny-lobster`
- 数量范围：未决独立证据包络；不是默认值、经验阈值或裁剪界限
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：U_capture_fossil_co2
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

### 过程：商业分级及去向分选（`grading`）

接收实测整只动物及记录的存活、壳和肢体状态；激活时独立分成两种或以上已声明等级或去向状态，记录每项实际合格、替代用途、拒收、放归、废弃或留存状态及其交接。检查结果不是死亡预测或产品许可。

#### 输入

##### 产品流

###### 实际接收的整只动物（`grading_animals_receipt`）

仅接收前一真实事件的状态，用转移编号及实测净质量配对；暂养及呈现只接收活体。不得假定打印的过程顺序，也不得将所有内部交接量固定为最终参考质量。

- 选定流：实际接收的整只动物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_grading_mass。不得以分配份额替代实物数量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_grading_mass`
- 来源：`ross-live-argus-grading-2024`
- 数量范围：未决独立证据包络；不是默认值、经验阈值或裁剪界限
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：U_grading_animals_receipt
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 实际供应或自产电力（`grading_electricity`）

声明实际地区、电压、供应者及外购或自产边界。计量节点用电或唯一归属共享用电；不得在自产电力燃料及发电负荷之外再重复添加上游外购电力。

- 选定流：实际供应或自产电力
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_grading_energy。不得以分配份额替代实物数量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_grading_energy`
- 来源：`ross-live-argus-grading-2024`
- 数量范围：未决独立证据包络；不是默认值、经验阈值或裁剪界限
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：U_grading_electricity
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

##### 废物流

##### 基本流

###### 实际直接取水（`grading_water_abstraction`）

仅记录从环境跨入的实际取水，声明海水或淡水来源，必要时保留体积转质量依据。循环水属内部环路，不得重复记取水。外购水单列，不能与此处为同一数量。

- 选定流：实际直接取水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_grading_mass。不得以分配份额替代实物数量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_grading_mass`
- 来源：`ross-live-argus-grading-2024`
- 数量范围：未决独立证据包络；不是默认值、经验阈值或裁剪界限
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：U_grading_water_abstraction
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

#### 输出

##### 产品流

###### 转给下一真实事件的实测整只活体（`grading_live_transfer`）

以成对转移记录状态、等级、壳及肢体状况和下一真实接收者；回访须有独立编号。包装质量及体外暂养水单列。期末留存不是额外交换，也不是最终参考。

- 选定流：转给下一真实事件的实测整只活体
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_grading_mass。不得以分配份额替代实物数量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_grading_mass`
- 来源：`ross-live-argus-grading-2024`
- 数量范围：未决独立证据包络；不是默认值、经验阈值或裁剪界限
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：U_grading_live_transfer
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

##### 废物流

###### 实际转交处理的废水（`grading_effluent_treatment`）

记录水及携带物质、实际外部处理接收，或仅一次细分已声明前景处理。不得将同一未经处理水流再算直接排放；水质量不等于溶解污染物质量。

- 选定流：实际转交处理的废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_grading_mass。不得以分配份额替代实物数量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_grading_mass`
- 来源：`ross-live-argus-grading-2024`
- 数量范围：未决独立证据包络；不是默认值、经验阈值或裁剪界限
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：U_grading_effluent_treatment
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

##### 基本流

###### 向未细分空气排放的前景化石二氧化碳（`grading_fossil_co2`）

仅代表有来源、碳或燃料活动及相容未细分空气介质依据的实际前景化石 CO2。不是动物呼吸、生物源 CO2、全部尾气或排放因子；须区分供应者全包服务排放，避免重复。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 绑定模式：fixed
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_grading_mass。不得以分配份额替代实物数量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_grading_mass`
- 来源：`ross-live-argus-grading-2024`
- 数量范围：未决独立证据包络；不是默认值、经验阈值或裁剪界限
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：U_grading_fossil_co2
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

### 过程：交接前短时活体维持（`holding`）

接收可用活体；记录时长、实际水体或湿空气条件及适宜该物种的控制措施，交出实测操作后动物或实际损失。不含有意养成或育肥；不强制浸水、加冰、供氧、禁食、时长或温度。

#### 输入

##### 产品流

###### 实际接收的整只动物（`holding_animals_receipt`）

仅接收前一真实事件的状态，用转移编号及实测净质量配对；暂养及呈现只接收活体。不得假定打印的过程顺序，也不得将所有内部交接量固定为最终参考质量。

- 选定流：实际接收的整只动物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_holding_mass。不得以分配份额替代实物数量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_holding_mass`
- 来源：`noaa-caribbean-spiny-lobster`
- 数量范围：未决独立证据包络；不是默认值、经验阈值或裁剪界限
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：U_holding_animals_receipt
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 实际供应或自产电力（`holding_electricity`）

声明实际地区、电压、供应者及外购或自产边界。计量节点用电或唯一归属共享用电；不得在自产电力燃料及发电负荷之外再重复添加上游外购电力。

- 选定流：实际供应或自产电力
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_holding_energy。不得以分配份额替代实物数量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_holding_energy`
- 来源：`noaa-caribbean-spiny-lobster`
- 数量范围：未决独立证据包络；不是默认值、经验阈值或裁剪界限
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：U_holding_electricity
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

##### 废物流

##### 基本流

###### 实际直接取水（`holding_water_abstraction`）

仅记录从环境跨入的实际取水，声明海水或淡水来源，必要时保留体积转质量依据。循环水属内部环路，不得重复记取水。外购水单列，不能与此处为同一数量。

- 选定流：实际直接取水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_holding_mass。不得以分配份额替代实物数量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_holding_mass`
- 来源：`noaa-caribbean-spiny-lobster`
- 数量范围：未决独立证据包络；不是默认值、经验阈值或裁剪界限
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：U_holding_water_abstraction
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

#### 输出

##### 产品流

###### 转给下一真实事件的实测整只活体（`holding_live_transfer`）

以成对转移记录状态、等级、壳及肢体状况和下一真实接收者；回访须有独立编号。包装质量及体外暂养水单列。期末留存不是额外交换，也不是最终参考。

- 选定流：转给下一真实事件的实测整只活体
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_holding_mass。不得以分配份额替代实物数量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_holding_mass`
- 来源：`noaa-caribbean-spiny-lobster`
- 数量范围：未决独立证据包络；不是默认值、经验阈值或裁剪界限
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：U_holding_live_transfer
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

##### 废物流

###### 实际转交处理的废水（`holding_effluent_treatment`）

记录水及携带物质、实际外部处理接收，或仅一次细分已声明前景处理。不得将同一未经处理水流再算直接排放；水质量不等于溶解污染物质量。

- 选定流：实际转交处理的废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_holding_mass。不得以分配份额替代实物数量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_holding_mass`
- 来源：`noaa-caribbean-spiny-lobster`
- 数量范围：未决独立证据包络；不是默认值、经验阈值或裁剪界限
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：U_holding_effluent_treatment
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

##### 基本流

###### 向未细分空气排放的前景化石二氧化碳（`holding_fossil_co2`）

仅代表有来源、碳或燃料活动及相容未细分空气介质依据的实际前景化石 CO2。不是动物呼吸、生物源 CO2、全部尾气或排放因子；须区分供应者全包服务排放，避免重复。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 绑定模式：fixed
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_holding_mass。不得以分配份额替代实物数量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_holding_mass`
- 来源：`noaa-caribbean-spiny-lobster`
- 数量范围：未决独立证据包络；不是默认值、经验阈值或裁剪界限
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：U_holding_fossil_co2
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

### 过程：交接前保护及呈现（`presentation`）

接收实际整只活体，将受保护动物及单独声明的包装角色交给下一事件。仅记录实际容器、缓冲物、标签或约束材料；不强制螯足绑带，此活动不含买方配送。

#### 输入

##### 产品流

###### 实际接收的整只动物（`presentation_animals_receipt`）

仅接收前一真实事件的状态，用转移编号及实测净质量配对；暂养及呈现只接收活体。不得假定打印的过程顺序，也不得将所有内部交接量固定为最终参考质量。

- 选定流：实际接收的整只动物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_presentation_mass。不得以分配份额替代实物数量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_presentation_mass`
- 来源：`noaa-caribbean-spiny-lobster`
- 数量范围：未决独立证据包络；不是默认值、经验阈值或裁剪界限
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：U_presentation_animals_receipt
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 实际供应或自产电力（`presentation_electricity`）

声明实际地区、电压、供应者及外购或自产边界。计量节点用电或唯一归属共享用电；不得在自产电力燃料及发电负荷之外再重复添加上游外购电力。

- 选定流：实际供应或自产电力
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_presentation_energy。不得以分配份额替代实物数量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_presentation_energy`
- 来源：`noaa-caribbean-spiny-lobster`
- 数量范围：未决独立证据包络；不是默认值、经验阈值或裁剪界限
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：U_presentation_electricity
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

##### 废物流

##### 基本流

###### 实际直接取水（`presentation_water_abstraction`）

仅记录从环境跨入的实际取水，声明海水或淡水来源，必要时保留体积转质量依据。循环水属内部环路，不得重复记取水。外购水单列，不能与此处为同一数量。

- 选定流：实际直接取水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_presentation_mass。不得以分配份额替代实物数量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_presentation_mass`
- 来源：`noaa-caribbean-spiny-lobster`
- 数量范围：未决独立证据包络；不是默认值、经验阈值或裁剪界限
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：U_presentation_water_abstraction
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

#### 输出

##### 产品流

###### 转给下一真实事件的实测整只活体（`presentation_live_transfer`）

以成对转移记录状态、等级、壳及肢体状况和下一真实接收者；回访须有独立编号。包装质量及体外暂养水单列。期末留存不是额外交换，也不是最终参考。

- 选定流：转给下一真实事件的实测整只活体
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_presentation_mass。不得以分配份额替代实物数量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_presentation_mass`
- 来源：`noaa-caribbean-spiny-lobster`
- 数量范围：未决独立证据包络；不是默认值、经验阈值或裁剪界限
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：U_presentation_live_transfer
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

##### 废物流

###### 实际转交处理的废水（`presentation_effluent_treatment`）

记录水及携带物质、实际外部处理接收，或仅一次细分已声明前景处理。不得将同一未经处理水流再算直接排放；水质量不等于溶解污染物质量。

- 选定流：实际转交处理的废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_presentation_mass。不得以分配份额替代实物数量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_presentation_mass`
- 来源：`noaa-caribbean-spiny-lobster`
- 数量范围：未决独立证据包络；不是默认值、经验阈值或裁剪界限
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：U_presentation_effluent_treatment
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

##### 基本流

###### 向未细分空气排放的前景化石二氧化碳（`presentation_fossil_co2`）

仅代表有来源、碳或燃料活动及相容未细分空气介质依据的实际前景化石 CO2。不是动物呼吸、生物源 CO2、全部尾气或排放因子；须区分供应者全包服务排放，避免重复。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 绑定模式：fixed
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_presentation_mass。不得以分配份额替代实物数量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_presentation_mass`
- 来源：`noaa-caribbean-spiny-lobster`
- 数量范围：未决独立证据包络；不是默认值、经验阈值或裁剪界限
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：U_presentation_fossil_co2
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

### 过程：首次生产者实物交接及验收（`handover`）

据实物转移及验收声明岸上或海上门，不仅依据发票日期。即使跳过独立分级、暂养或包装，也在此核对存活状态和动物净质量。验收前拒收仍属生产者事件；首次验收终止该动物前景链。

#### 输入

##### 产品流

###### 实际接收的整只动物（`handover_animals_receipt`）

仅接收前一真实事件的状态，用转移编号及实测净质量配对；暂养及呈现只接收活体。不得假定打印的过程顺序，也不得将所有内部交接量固定为最终参考质量。

- 选定流：实际接收的整只动物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_handover_mass。不得以分配份额替代实物数量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_handover_mass`
- 来源：`noaa-caribbean-spiny-lobster`
- 数量范围：未决独立证据包络；不是默认值、经验阈值或裁剪界限
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：U_handover_animals_receipt
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 实际供应或自产电力（`handover_electricity`）

声明实际地区、电压、供应者及外购或自产边界。计量节点用电或唯一归属共享用电；不得在自产电力燃料及发电负荷之外再重复添加上游外购电力。

- 选定流：实际供应或自产电力
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_handover_energy。不得以分配份额替代实物数量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_handover_energy`
- 来源：`noaa-caribbean-spiny-lobster`
- 数量范围：未决独立证据包络；不是默认值、经验阈值或裁剪界限
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：U_handover_electricity
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

##### 废物流

##### 基本流

###### 实际直接取水（`handover_water_abstraction`）

仅记录从环境跨入的实际取水，声明海水或淡水来源，必要时保留体积转质量依据。循环水属内部环路，不得重复记取水。外购水单列，不能与此处为同一数量。

- 选定流：实际直接取水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_handover_mass。不得以分配份额替代实物数量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_handover_mass`
- 来源：`noaa-caribbean-spiny-lobster`
- 数量范围：未决独立证据包络；不是默认值、经验阈值或裁剪界限
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：U_handover_water_abstraction
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

#### 输出

##### 产品流

###### 首次生产者交接的野生整只带原生壳活体加勒比龙虾 Panulirus argus（`live_argus_handover`）

仅代表有证据的首次生产者实物交接中验收的整只带原生壳活体 Panulirus argus 食品参考。净质量排除可分离水、容器及保护材料，不排除原生壳、肢体及体内水。按实记录肢体和壳状态，不虚构完整程度或安全认证。

- 选定流：首次生产者交接的野生整只带原生壳活体加勒比龙虾 Panulirus argus
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：fixed_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：method_formula
- 采集协议：`cp_handover_mass`
- 来源：`net-mass-normalization-identity`
- 数量范围：仅最终净质量归一恒等式
  - 范围角色：qa_guardrail
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：method_formula
  - 来源：`net-mass-normalization-identity`

##### 废物流

###### 实际转交处理的废水（`handover_effluent_treatment`）

记录水及携带物质、实际外部处理接收，或仅一次细分已声明前景处理。不得将同一未经处理水流再算直接排放；水质量不等于溶解污染物质量。

- 选定流：实际转交处理的废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_handover_mass。不得以分配份额替代实物数量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_handover_mass`
- 来源：`noaa-caribbean-spiny-lobster`
- 数量范围：未决独立证据包络；不是默认值、经验阈值或裁剪界限
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：U_handover_effluent_treatment
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

##### 基本流

###### 向未细分空气排放的前景化石二氧化碳（`handover_fossil_co2`）

仅代表有来源、碳或燃料活动及相容未细分空气介质依据的实际前景化石 CO2。不是动物呼吸、生物源 CO2、全部尾气或排放因子；须区分供应者全包服务排放，避免重复。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 绑定模式：fixed
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_handover_mass。不得以分配份额替代实物数量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_handover_mass`
- 来源：`noaa-caribbean-spiny-lobster`
- 数量范围：未决独立证据包络；不是默认值、经验阈值或裁剪界限
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：U_handover_fossil_co2
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `physical_first` | all nodes | 逐实际节点和回次保留全部未分配实物输出及去向，包括各目标等级、附带物种、活体诱集物、已接受非参考动物或材料产品、放归、废物及留存。损失、死亡或拒收数量不得消失，也不自动成为共产品。内部转移和库存不是销售；较晚分离产品须保留随其真实物料流携带的共同上游负担中有据应分份额；不虚构并未发生的产品专属活动。 |  |
| `shared_node_event` | all nodes | 优先直接计量事件；按有记录且适宜该资产的因果活动（如发动机时间、实测泵负荷或占用）分解完整共同服务或资产负荷，列明消费节点和期间且份额合计为一。均分须有依据；不提供通用代理或寿命。此节点及时间归属先于、且不同于跨产品 LCA 分配。同一边界的供应者全包服务与其组件资源互斥。 |  |
| `coproduct_once` | capture; grading; holding; presentation; handover | 对每项在真实交接处被接受的外部有意输出，先细分单独计量的产品专属活动。对剩余不可分共同负荷，证据支持时采用有因果关系的物理关系；否则按同一代表性服务期间、产品集合和货币的可比实际门收入声明经济分配，披露价格基准、不确定性及物理分配敏感性。因果或可比价格证据均缺失时保留分配未决，不虚构因子。已在有证据外部交接点离开的产品份额保持不变，不重新开启。剩余内部物流后来真实分出新验收预期产品及继续参考流时，仅将其仍携带的上游负担池及随后真正共享负担，按既定分配优先级在这个新分离点拆分一次。较晚认定为产品不意味着共同捕捞负担为零。后续专属负担归实际接收产品；不得仅因交接门或等级变化再次应用同一拆分。不默认避免负荷信用。 |  |
| `period_bridge` | all nodes | 关联批次或航次、季节或报告期间及实际资产服务阶段。记录期初期末数量及可归属负荷，使跨期间留存动物、诱集物及包装不丢失也不重复负荷。制造、修理及退役仅归属一次，披露剩余服务及终止处理。零产出期间使用有依据的库存及其他输出账，不虚造正分母。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_capture_mass | capture | 实际mass交换及状态库存事件归属 | foreground_record | 批次；航次；事件；节点回次；成对转移；物种材料服务身份；实际状态等级；来源去向；所有者；期初期末库存及结转负荷；实物接收输出废物放归损失；原生数量单位；最终验收净千克；计量皮重不确定性；共享消费期间；U独立证据范围  适用时辅助条件：温度数值及声明温标（如 °C），其他数值条件及各自声明单位；事件开始/结束时间戳及时区；经过时间数值及 min/h 单位；活/死、鲜/冷藏、未经冻结等状态类别及其证据； | 校准可追溯称重及接收；区分动物包装载体水体内水、实际去向和库存；handover采用门净重，并核对真实成对转移。  适用温度由经校准传感器并附位置时间记录采集，时长依据事件时间戳，类别依据可追溯状态/历史记录。辅助描述不属于 kg 清单量，不提供通用温度或时长限值。 | kg | 逐真实事件及库存期间边界 | 完整批次航次及可归属报告服务期间，含返程闲置及零产出期间 | 实际生产者船舶场址节点及成对真实门 | 每 1 kg 参考流 | 校准接收及真实用途验收；闭合不确定性、库存去向完整性、来源限制、原生支持核验及独立U溯源。未知不是零。 |
| cp_capture_energy | capture | 实际energy交换及状态库存事件归属 | foreground_record | 批次；航次；事件；节点回次；成对转移；物种材料服务身份；实际状态等级；来源去向；所有者；期初期末库存及结转负荷；实物接收输出废物放归损失；原生数量单位；最终验收净千克；计量皮重不确定性；共享消费期间；U独立证据范围 | 电表发票发动机油箱核对，记录实际燃料电力身份、单位及有据换算；共享用量互斥且航次期间完整。 | MJ | 逐真实事件及库存期间边界 | 完整批次航次及可归属报告服务期间，含返程闲置及零产出期间 | 实际生产者船舶场址节点及成对真实门 | 每 1 kg 参考流 | 校准接收及真实用途验收；闭合不确定性、库存去向完整性、来源限制、原生支持核验及独立U溯源。未知不是零。 |
| cp_capture_service | capture | 实际service交换及状态库存事件归属 | foreground_record | 批次；航次；事件；节点回次；成对转移；物种材料服务身份；实际状态等级；来源去向；所有者；期初期末库存及结转负荷；实物接收输出废物放归损失；原生数量单位；最终验收净千克；计量皮重不确定性；共享消费期间；U独立证据范围 | 实际原生服务数量及全包边界；资产日志、使用消费期间、购置修理退役、实测因果服务份额及不重复证据。 | recorded-native-unit | 逐真实事件及库存期间边界 | 完整批次航次及可归属报告服务期间，含返程闲置及零产出期间 | 实际生产者船舶场址节点及成对真实门 | 每 1 kg 参考流 | 校准接收及真实用途验收；闭合不确定性、库存去向完整性、来源限制、原生支持核验及独立U溯源。未知不是零。 |
| cp_grading_mass | grading | 实际mass交换及状态库存事件归属 | foreground_record | 批次；航次；事件；节点回次；成对转移；物种材料服务身份；实际状态等级；来源去向；所有者；期初期末库存及结转负荷；实物接收输出废物放归损失；原生数量单位；最终验收净千克；计量皮重不确定性；共享消费期间；U独立证据范围  适用时辅助条件：温度数值及声明温标（如 °C），其他数值条件及各自声明单位；事件开始/结束时间戳及时区；经过时间数值及 min/h 单位；活/死、鲜/冷藏、未经冻结等状态类别及其证据； | 校准可追溯称重及接收；区分动物包装载体水体内水、实际去向和库存；handover采用门净重，并核对真实成对转移。  适用温度由经校准传感器并附位置时间记录采集，时长依据事件时间戳，类别依据可追溯状态/历史记录。辅助描述不属于 kg 清单量，不提供通用温度或时长限值。 | kg | 逐真实事件及库存期间边界 | 完整批次航次及可归属报告服务期间，含返程闲置及零产出期间 | 实际生产者船舶场址节点及成对真实门 | 每 1 kg 参考流 | 校准接收及真实用途验收；闭合不确定性、库存去向完整性、来源限制、原生支持核验及独立U溯源。未知不是零。 |
| cp_grading_energy | grading | 实际energy交换及状态库存事件归属 | foreground_record | 批次；航次；事件；节点回次；成对转移；物种材料服务身份；实际状态等级；来源去向；所有者；期初期末库存及结转负荷；实物接收输出废物放归损失；原生数量单位；最终验收净千克；计量皮重不确定性；共享消费期间；U独立证据范围 | 电表发票发动机油箱核对，记录实际燃料电力身份、单位及有据换算；共享用量互斥且航次期间完整。 | MJ | 逐真实事件及库存期间边界 | 完整批次航次及可归属报告服务期间，含返程闲置及零产出期间 | 实际生产者船舶场址节点及成对真实门 | 每 1 kg 参考流 | 校准接收及真实用途验收；闭合不确定性、库存去向完整性、来源限制、原生支持核验及独立U溯源。未知不是零。 |
| cp_grading_service | grading | 实际service交换及状态库存事件归属 | foreground_record | 批次；航次；事件；节点回次；成对转移；物种材料服务身份；实际状态等级；来源去向；所有者；期初期末库存及结转负荷；实物接收输出废物放归损失；原生数量单位；最终验收净千克；计量皮重不确定性；共享消费期间；U独立证据范围 | 实际原生服务数量及全包边界；资产日志、使用消费期间、购置修理退役、实测因果服务份额及不重复证据。 | recorded-native-unit | 逐真实事件及库存期间边界 | 完整批次航次及可归属报告服务期间，含返程闲置及零产出期间 | 实际生产者船舶场址节点及成对真实门 | 每 1 kg 参考流 | 校准接收及真实用途验收；闭合不确定性、库存去向完整性、来源限制、原生支持核验及独立U溯源。未知不是零。 |
| cp_holding_mass | holding | 实际mass交换及状态库存事件归属 | foreground_record | 批次；航次；事件；节点回次；成对转移；物种材料服务身份；实际状态等级；来源去向；所有者；期初期末库存及结转负荷；实物接收输出废物放归损失；原生数量单位；最终验收净千克；计量皮重不确定性；共享消费期间；U独立证据范围  适用时辅助条件：温度数值及声明温标（如 °C），其他数值条件及各自声明单位；事件开始/结束时间戳及时区；经过时间数值及 min/h 单位；活/死、鲜/冷藏、未经冻结等状态类别及其证据； | 校准可追溯称重及接收；区分动物包装载体水体内水、实际去向和库存；handover采用门净重，并核对真实成对转移。  适用温度由经校准传感器并附位置时间记录采集，时长依据事件时间戳，类别依据可追溯状态/历史记录。辅助描述不属于 kg 清单量，不提供通用温度或时长限值。 | kg | 逐真实事件及库存期间边界 | 完整批次航次及可归属报告服务期间，含返程闲置及零产出期间 | 实际生产者船舶场址节点及成对真实门 | 每 1 kg 参考流 | 校准接收及真实用途验收；闭合不确定性、库存去向完整性、来源限制、原生支持核验及独立U溯源。未知不是零。 |
| cp_holding_energy | holding | 实际energy交换及状态库存事件归属 | foreground_record | 批次；航次；事件；节点回次；成对转移；物种材料服务身份；实际状态等级；来源去向；所有者；期初期末库存及结转负荷；实物接收输出废物放归损失；原生数量单位；最终验收净千克；计量皮重不确定性；共享消费期间；U独立证据范围 | 电表发票发动机油箱核对，记录实际燃料电力身份、单位及有据换算；共享用量互斥且航次期间完整。 | MJ | 逐真实事件及库存期间边界 | 完整批次航次及可归属报告服务期间，含返程闲置及零产出期间 | 实际生产者船舶场址节点及成对真实门 | 每 1 kg 参考流 | 校准接收及真实用途验收；闭合不确定性、库存去向完整性、来源限制、原生支持核验及独立U溯源。未知不是零。 |
| cp_holding_service | holding | 实际service交换及状态库存事件归属 | foreground_record | 批次；航次；事件；节点回次；成对转移；物种材料服务身份；实际状态等级；来源去向；所有者；期初期末库存及结转负荷；实物接收输出废物放归损失；原生数量单位；最终验收净千克；计量皮重不确定性；共享消费期间；U独立证据范围 | 实际原生服务数量及全包边界；资产日志、使用消费期间、购置修理退役、实测因果服务份额及不重复证据。 | recorded-native-unit | 逐真实事件及库存期间边界 | 完整批次航次及可归属报告服务期间，含返程闲置及零产出期间 | 实际生产者船舶场址节点及成对真实门 | 每 1 kg 参考流 | 校准接收及真实用途验收；闭合不确定性、库存去向完整性、来源限制、原生支持核验及独立U溯源。未知不是零。 |
| cp_presentation_mass | presentation | 实际mass交换及状态库存事件归属 | foreground_record | 批次；航次；事件；节点回次；成对转移；物种材料服务身份；实际状态等级；来源去向；所有者；期初期末库存及结转负荷；实物接收输出废物放归损失；原生数量单位；最终验收净千克；计量皮重不确定性；共享消费期间；U独立证据范围  适用时辅助条件：温度数值及声明温标（如 °C），其他数值条件及各自声明单位；事件开始/结束时间戳及时区；经过时间数值及 min/h 单位；活/死、鲜/冷藏、未经冻结等状态类别及其证据； | 校准可追溯称重及接收；区分动物包装载体水体内水、实际去向和库存；handover采用门净重，并核对真实成对转移。  适用温度由经校准传感器并附位置时间记录采集，时长依据事件时间戳，类别依据可追溯状态/历史记录。辅助描述不属于 kg 清单量，不提供通用温度或时长限值。 | kg | 逐真实事件及库存期间边界 | 完整批次航次及可归属报告服务期间，含返程闲置及零产出期间 | 实际生产者船舶场址节点及成对真实门 | 每 1 kg 参考流 | 校准接收及真实用途验收；闭合不确定性、库存去向完整性、来源限制、原生支持核验及独立U溯源。未知不是零。 |
| cp_presentation_energy | presentation | 实际energy交换及状态库存事件归属 | foreground_record | 批次；航次；事件；节点回次；成对转移；物种材料服务身份；实际状态等级；来源去向；所有者；期初期末库存及结转负荷；实物接收输出废物放归损失；原生数量单位；最终验收净千克；计量皮重不确定性；共享消费期间；U独立证据范围 | 电表发票发动机油箱核对，记录实际燃料电力身份、单位及有据换算；共享用量互斥且航次期间完整。 | MJ | 逐真实事件及库存期间边界 | 完整批次航次及可归属报告服务期间，含返程闲置及零产出期间 | 实际生产者船舶场址节点及成对真实门 | 每 1 kg 参考流 | 校准接收及真实用途验收；闭合不确定性、库存去向完整性、来源限制、原生支持核验及独立U溯源。未知不是零。 |
| cp_presentation_service | presentation | 实际service交换及状态库存事件归属 | foreground_record | 批次；航次；事件；节点回次；成对转移；物种材料服务身份；实际状态等级；来源去向；所有者；期初期末库存及结转负荷；实物接收输出废物放归损失；原生数量单位；最终验收净千克；计量皮重不确定性；共享消费期间；U独立证据范围 | 实际原生服务数量及全包边界；资产日志、使用消费期间、购置修理退役、实测因果服务份额及不重复证据。 | recorded-native-unit | 逐真实事件及库存期间边界 | 完整批次航次及可归属报告服务期间，含返程闲置及零产出期间 | 实际生产者船舶场址节点及成对真实门 | 每 1 kg 参考流 | 校准接收及真实用途验收；闭合不确定性、库存去向完整性、来源限制、原生支持核验及独立U溯源。未知不是零。 |
| cp_handover_mass | handover | 实际mass交换及状态库存事件归属 | foreground_record | 批次；航次；事件；节点回次；成对转移；物种材料服务身份；实际状态等级；来源去向；所有者；期初期末库存及结转负荷；实物接收输出废物放归损失；原生数量单位；最终验收净千克；计量皮重不确定性；共享消费期间；U独立证据范围  适用时辅助条件：温度数值及声明温标（如 °C），其他数值条件及各自声明单位；事件开始/结束时间戳及时区；经过时间数值及 min/h 单位；活/死、鲜/冷藏、未经冻结等状态类别及其证据； | 校准可追溯称重及接收；区分动物包装载体水体内水、实际去向和库存；handover采用门净重，并核对真实成对转移。  适用温度由经校准传感器并附位置时间记录采集，时长依据事件时间戳，类别依据可追溯状态/历史记录。辅助描述不属于 kg 清单量，不提供通用温度或时长限值。 | kg | 逐真实事件及库存期间边界 | 完整批次航次及可归属报告服务期间，含返程闲置及零产出期间 | 实际生产者船舶场址节点及成对真实门 | 每 1 kg 参考流 | 校准接收及真实用途验收；闭合不确定性、库存去向完整性、来源限制、原生支持核验及独立U溯源。未知不是零。 |
| cp_handover_energy | handover | 实际energy交换及状态库存事件归属 | foreground_record | 批次；航次；事件；节点回次；成对转移；物种材料服务身份；实际状态等级；来源去向；所有者；期初期末库存及结转负荷；实物接收输出废物放归损失；原生数量单位；最终验收净千克；计量皮重不确定性；共享消费期间；U独立证据范围 | 电表发票发动机油箱核对，记录实际燃料电力身份、单位及有据换算；共享用量互斥且航次期间完整。 | MJ | 逐真实事件及库存期间边界 | 完整批次航次及可归属报告服务期间，含返程闲置及零产出期间 | 实际生产者船舶场址节点及成对真实门 | 每 1 kg 参考流 | 校准接收及真实用途验收；闭合不确定性、库存去向完整性、来源限制、原生支持核验及独立U溯源。未知不是零。 |
| cp_handover_service | handover | 实际service交换及状态库存事件归属 | foreground_record | 批次；航次；事件；节点回次；成对转移；物种材料服务身份；实际状态等级；来源去向；所有者；期初期末库存及结转负荷；实物接收输出废物放归损失；原生数量单位；最终验收净千克；计量皮重不确定性；共享消费期间；U独立证据范围 | 实际原生服务数量及全包边界；资产日志、使用消费期间、购置修理退役、实测因果服务份额及不重复证据。 | recorded-native-unit | 逐真实事件及库存期间边界 | 完整批次航次及可归属报告服务期间，含返程闲置及零产出期间 | 实际生产者船舶场址节点及成对真实门 | 每 1 kg 参考流 | 校准接收及真实用途验收；闭合不确定性、库存去向完整性、来源限制、原生支持核验及独立U溯源。未知不是零。 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| physical_normalization | all inventory rows | 先核对未分配真实事件及库存数量；共享服务数量仅一次归给节点期间；每项核对后分子除以同一可归属批次期间的正的最终验收动物净千克。最终输出除以自身为1。单独标注LCA分配结果，不得用其闭合实物质量。 | actual node protocols; final handover net weighing | 每1 kg参考的未分配原生单位数量；单独标注LCA分配 | net-mass-normalization-identity |
| stock_fate_reconcile | all nodes | 按物种材料湿基及不确定性，将期初库存、实际接收及有据吸收与实际转出产品放归废物损失及期末库存核对。内部循环不是新供应；保留体内水变化及观察到碎片。诱饵单独保留活体与消耗材料库存账，不假定消耗比例。 | actual node protocols; paired transfers; stock/fate evidence | 实物核对及显式缺口，不强制精确闭合 |  |
| shared_then_product | all nodes | 先按有支持的因果驱动将完整共享资产服务用量归给已记录消费期间；再细分产品专属负荷，按第7节优先级仅分一次剩余共同负荷。保留库存结转负荷并披露价格或物理关系不确定性。先前已离开外部产品的份额保持不变；第7节允许对剩余携带负担池发生真实新分离时拆分，但不能重复先前拆分。 | consumer/service/period ledger; accepted external product evidence | 关联未分配实物账的单独仅一次LCA视图 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_representative | all nodes | 采用当前场址渔具季节特定原始记录及完整航次服务期间；披露抽样、缺失事件、来源地区时间限制和不确定性，不作通用性能声明。 | 带日期日志、接收、校准及有范围供应者数据 |
| dq_facts | all nodes | 分类说明仅约束分类；NOAA定性例子不能将地方规则数字全球移用；活体分级研究摘要仅支持接口，不支持普遍死亡预测、存活率或食品安全认证。 | 明确来源用途限制及真实验收用途记录 |
| dq_range_identity | all inventory rows | 保留独立行身份状态回次U证据及原生单位支持；符号U是未决定量覆盖，不是观测指引或默认数量。不得以近似UUID扩大真实范围。 | 独立有范围活动期设计供应者包络；逐具体身份详情和支持确认 |
| `dq_inventory_completion` | 所有逐流清单完善要求 | 为每项实际物理或化学交换建立独立卡片，记录过程、方向、流类型、各自实测数量、原生单位、最终参考归一化、适用性、去向、UUID和独立范围证据。不得把集合总量、原集合筛选范围或一个UUID复制给所有子交换。仅有证据证明未发生时可记不适用；未知不等于零。适用责任未完成时，最终数据包不完整且校验失败。 | 逐流覆盖台账、原始计量、身份、去向和范围证据 |
| `dq_complete_capture_bait_attractants` | `capture`; 输入; 产品流 | 必须辨认并分别采集“实际外购或转入的饵料及诱集物”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：展开每项实际材料及活体身份，区分外购与成对内部接收；小规格加勒比龙虾活体不自动视为消耗性鱼饵。活体期初期末库存、存活、再利用、放归、死亡及转移须有诱饵账；同节点循环不能重复算外购。不提供普遍许可或死亡因子。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_capture_mass。不得以分配份额替代实物数量。 数值来源模式：foreground_record 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：collected_record 采集协议：`cp_capture_mass` 来源：`noaa-caribbean-spiny-lobster` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_fuel` | `capture`; 输入; 产品流 | 必须辨认并分别采集“本责任实际使用的燃料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：依交付、油箱、发动机及操作记录展开实际燃料身份和数量。仅记录分给本节点的共享设备或服务期间份额；排除已包含于外购全包服务的燃料。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_capture_mass。不得以分配份额替代实物数量。 数值来源模式：foreground_record 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：collected_record 采集协议：`cp_capture_mass` 来源：`noaa-caribbean-spiny-lobster` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_materials_water` | `capture`; 输入; 产品流 | 必须辨认并分别采集“实际供应水及作业材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按实际身份及组成，展开独立需要的供应水、气体、清洁剂、润滑剂、渔具组件或其他材料，以供应产品千克表达。计数或体积记录须有同材料实际质量、密度或浓度依据；不得累加不相容原生单位或提供默认换算。不强制用水、供氧或活体加冰。区分海水、处理后产品水及载体水；下方服务不得掩盖或重复计入此处已单列材料。此伞形卡排除已有独立地址的包装接收及presentation_package_materials。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_capture_mass。不得以分配份额替代实物数量。 数值来源模式：foreground_record 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：collected_record 采集协议：`cp_capture_mass` 来源：`noaa-caribbean-spiny-lobster` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_services` | `capture`; 输入; 产品流 | 必须辨认并分别采集“实际作业及共享资产服务”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅按实际使用展开搬运、称重、泵送、曝气、温控、船舶、潜水装备、照明、存储、清洁、维护或处理服务。采用每项具体服务原生数量，并独立核实属性及单位支持；recorded-native-unit 是声明槽位，不是通用换算或材料千克。共享资产及服务账对完整期间、替换及退役仅归属一次；不得重复计入供应者全包服务投入和排放。 流属性/单位：实际服务属性 / recorded-native-unit 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_capture_service。不得以分配份额替代实物数量。 数值来源模式：foreground_record 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：collected_record 采集协议：`cp_capture_service` 来源：`noaa-caribbean-spiny-lobster` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_package_receipt` | `capture`; 输入; 产品流 | 必须辨认并分别采集“实际接收的辅助包装及可复用单元”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅在本真实事件收到实际包装时逐具体身份记录质量、所有者和去向，内部转移须与上一个实际节点的包装输出编号配对。区分外购与既有或内部接收，不重复其他材料卡或全包服务制造负荷。仅跨期间留存不增加交换；动物净质量始终不含包装。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：按本节点实际回次计量并成对核对，完成未分配实物及库存账后按每 1 kg 参考流表达；采用cp_capture_mass。仅一次LCA分配另列，不能替代实物数量。 数值来源模式：foreground_record 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：collected_record 采集协议：`cp_capture_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_incidental_removed` | `capture`; 输入; 基本流 | 必须辨认并分别采集“捕捞中观察到的附带捕获生物”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按实际物种、数量、实测或有依据质量、存活状态及去向单列，不能并入目标动物。非质量的生境接触观察保留为辅助记录，不能伪造千克交换。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_capture_mass。不得以分配份额替代实物数量。 数值来源模式：foreground_record 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：collected_record 采集协议：`cp_capture_mass` 来源：`noaa-caribbean-spiny-lobster` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_bait_transfer` | `capture`; 输出; 产品流 | 必须辨认并分别采集“转出此节点的活体诱集动物”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅记录实际物理转移至另一已记录捕捞或操作实例，并与capture_bait_attractants接收配对，须有去向及存活状态；仅跨期间结转库存不是交换。同节点留存和复用只入库存或循环账，不增加输出交换。实际已接受的对外活体诱集物销售仅归入capture_other_accepted_products，不计入此内部卡。指定为诱饵的动物不计入活体食品参考质量。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_capture_mass。不得以分配份额替代实物数量。 数值来源模式：foreground_record 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：collected_record 采集协议：`cp_capture_mass` 来源：`noaa-caribbean-spiny-lobster` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_other_accepted_products` | `capture`; 输出; 产品流 | 必须辨认并分别采集“其他实际对外接受的产品”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：展开每项真实物种、等级、状态及接收者和用途验收，包括售往其他市场的活体或交给外部后续加工的原料。仅拒收、死亡或拟售并不能认定为有意产品。此处不建模冷冻、烹煮或去尾；动物各去向互斥。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_capture_mass。不得以分配份额替代实物数量。 数值来源模式：foreground_record 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：collected_record 采集协议：`cp_capture_mass` 来源：`noaa-caribbean-spiny-lobster` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_package_transfer` | `capture`; 输出; 产品流 | 必须辨认并分别采集“实际转出的辅助包装及可复用单元”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅在本真实事件实际转出包装时记录，内部转移须与下一节点的包装接收编号配对，外部转移须有实际接收者及所有权或服务门。退还复用包装不自动成为独立共产品，制造维修退役仅按完整服务期间归属一次；留存库存不是输出。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：按本节点实际回次计量并成对核对，完成未分配实物及库存账后按每 1 kg 参考流表达；采用cp_capture_mass。仅一次LCA分配另列，不能替代实物数量。 数值来源模式：foreground_record 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：collected_record 采集协议：`cp_capture_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_animal_waste` | `capture`; 输出; 废物流 | 必须辨认并分别采集“实际作为废物交出的死亡动物及动物材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：在本节点及回次记录实际存活状态、材料组成、实测质量、废物接收及处理去向。不得默认为共产品；同一动物不能重复计入放归、留存或已接受替代产品。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_capture_mass。不得以分配份额替代实物数量。 数值来源模式：foreground_record 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：collected_record 采集协议：`cp_capture_mass` 来源：`noaa-caribbean-spiny-lobster` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_operating_waste` | `capture`; 输出; 废物流 | 必须辨认并分别采集“实际作业、渔具及呈现废物”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：展开废弃材料、退役渔具或包装及实际处理接收；同一资产退役不得在全包服务外重复计负荷。动物材料另卡记录；包装复用或退还不能自动算处置。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_capture_mass。不得以分配份额替代实物数量。 数值来源模式：foreground_record 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：collected_record 采集协议：`cp_capture_mass` 来源：`noaa-caribbean-spiny-lobster` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_live_release` | `capture`; 输出; 基本流 | 必须辨认并分别采集“实际放回环境的活体生物”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：须有本节点及回次的实际物种、时间、位置、存活状态和放归记录。区分目标动物、活体诱集物及附带生物；不假定存活率或普遍法律许可。操作后的放归不能改称捕前未捕获。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_capture_mass。不得以分配份额替代实物数量。 数值来源模式：foreground_record 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：collected_record 采集协议：`cp_capture_mass` 来源：`noaa-caribbean-spiny-lobster` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_water_discharge` | `capture`; 输出; 基本流 | 必须辨认并分别采集“实际直接排水、蒸发或其他水去向”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按真实接收介质及身份展开，区分水载体和组分污染物，不重复整个水流。按测量不确定性核对取水、循环、动物水分交换、携带水、处理转移、排水及期初期末库存。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_capture_mass。不得以分配份额替代实物数量。 数值来源模式：foreground_record 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：collected_record 采集协议：`cp_capture_mass` 来源：`noaa-caribbean-spiny-lobster` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_other_environmental_releases` | `capture`; 输出; 基本流 | 必须辨认并分别采集“其他实际物质或材料释放”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：展开逐项有依据的污染物种类、接收介质及基准，适用时含实际制冷剂、燃料或材料泄漏、遗失渔具或生物材料。不得为此伞形卡指定单一 UUID；排除已单列化石 CO2、活体放归及水载体。非质量生态相互作用仍为辅助观察。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_capture_mass。不得以分配份额替代实物数量。 数值来源模式：foreground_record 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：collected_record 采集协议：`cp_capture_mass` 来源：`noaa-caribbean-spiny-lobster` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_grading_fuel` | `grading`; 输入; 产品流 | 必须辨认并分别采集“本责任实际使用的燃料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：依交付、油箱、发动机及操作记录展开实际燃料身份和数量。仅记录分给本节点的共享设备或服务期间份额；排除已包含于外购全包服务的燃料。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_grading_mass。不得以分配份额替代实物数量。 数值来源模式：foreground_record 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：collected_record 采集协议：`cp_grading_mass` 来源：`ross-live-argus-grading-2024` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_grading_materials_water` | `grading`; 输入; 产品流 | 必须辨认并分别采集“实际供应水及作业材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按实际身份及组成，展开独立需要的供应水、气体、清洁剂、润滑剂、渔具组件或其他材料，以供应产品千克表达。计数或体积记录须有同材料实际质量、密度或浓度依据；不得累加不相容原生单位或提供默认换算。不强制用水、供氧或活体加冰。区分海水、处理后产品水及载体水；下方服务不得掩盖或重复计入此处已单列材料。此伞形卡排除已有独立地址的包装接收及presentation_package_materials。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_grading_mass。不得以分配份额替代实物数量。 数值来源模式：foreground_record 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：collected_record 采集协议：`cp_grading_mass` 来源：`ross-live-argus-grading-2024` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_grading_services` | `grading`; 输入; 产品流 | 必须辨认并分别采集“实际作业及共享资产服务”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅按实际使用展开搬运、称重、泵送、曝气、温控、船舶、潜水装备、照明、存储、清洁、维护或处理服务。采用每项具体服务原生数量，并独立核实属性及单位支持；recorded-native-unit 是声明槽位，不是通用换算或材料千克。共享资产及服务账对完整期间、替换及退役仅归属一次；不得重复计入供应者全包服务投入和排放。 流属性/单位：实际服务属性 / recorded-native-unit 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_grading_service。不得以分配份额替代实物数量。 数值来源模式：foreground_record 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：collected_record 采集协议：`cp_grading_service` 来源：`ross-live-argus-grading-2024` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_grading_package_receipt` | `grading`; 输入; 产品流 | 必须辨认并分别采集“实际接收的辅助包装及可复用单元”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅在本真实事件收到实际包装时逐具体身份记录质量、所有者和去向，内部转移须与上一个实际节点的包装输出编号配对。区分外购与既有或内部接收，不重复其他材料卡或全包服务制造负荷。仅跨期间留存不增加交换；动物净质量始终不含包装。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：按本节点实际回次计量并成对核对，完成未分配实物及库存账后按每 1 kg 参考流表达；采用cp_grading_mass。仅一次LCA分配另列，不能替代实物数量。 数值来源模式：foreground_record 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：collected_record 采集协议：`cp_grading_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_grading_other_accepted_products` | `grading`; 输出; 产品流 | 必须辨认并分别采集“其他实际对外接受的产品”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：展开每项真实物种、等级、状态及接收者和用途验收，包括售往其他市场的活体或交给外部后续加工的原料。仅拒收、死亡或拟售并不能认定为有意产品。此处不建模冷冻、烹煮或去尾；动物各去向互斥。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_grading_mass。不得以分配份额替代实物数量。 数值来源模式：foreground_record 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：collected_record 采集协议：`cp_grading_mass` 来源：`ross-live-argus-grading-2024` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_grading_package_transfer` | `grading`; 输出; 产品流 | 必须辨认并分别采集“实际转出的辅助包装及可复用单元”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅在本真实事件实际转出包装时记录，内部转移须与下一节点的包装接收编号配对，外部转移须有实际接收者及所有权或服务门。退还复用包装不自动成为独立共产品，制造维修退役仅按完整服务期间归属一次；留存库存不是输出。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：按本节点实际回次计量并成对核对，完成未分配实物及库存账后按每 1 kg 参考流表达；采用cp_grading_mass。仅一次LCA分配另列，不能替代实物数量。 数值来源模式：foreground_record 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：collected_record 采集协议：`cp_grading_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_grading_animal_waste` | `grading`; 输出; 废物流 | 必须辨认并分别采集“实际作为废物交出的死亡动物及动物材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：在本节点及回次记录实际存活状态、材料组成、实测质量、废物接收及处理去向。不得默认为共产品；同一动物不能重复计入放归、留存或已接受替代产品。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_grading_mass。不得以分配份额替代实物数量。 数值来源模式：foreground_record 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：collected_record 采集协议：`cp_grading_mass` 来源：`ross-live-argus-grading-2024` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_grading_operating_waste` | `grading`; 输出; 废物流 | 必须辨认并分别采集“实际作业、渔具及呈现废物”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：展开废弃材料、退役渔具或包装及实际处理接收；同一资产退役不得在全包服务外重复计负荷。动物材料另卡记录；包装复用或退还不能自动算处置。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_grading_mass。不得以分配份额替代实物数量。 数值来源模式：foreground_record 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：collected_record 采集协议：`cp_grading_mass` 来源：`ross-live-argus-grading-2024` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_grading_live_release` | `grading`; 输出; 基本流 | 必须辨认并分别采集“实际放回环境的活体生物”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：须有本节点及回次的实际物种、时间、位置、存活状态和放归记录。区分目标动物、活体诱集物及附带生物；不假定存活率或普遍法律许可。操作后的放归不能改称捕前未捕获。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_grading_mass。不得以分配份额替代实物数量。 数值来源模式：foreground_record 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：collected_record 采集协议：`cp_grading_mass` 来源：`ross-live-argus-grading-2024` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_grading_water_discharge` | `grading`; 输出; 基本流 | 必须辨认并分别采集“实际直接排水、蒸发或其他水去向”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按真实接收介质及身份展开，区分水载体和组分污染物，不重复整个水流。按测量不确定性核对取水、循环、动物水分交换、携带水、处理转移、排水及期初期末库存。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_grading_mass。不得以分配份额替代实物数量。 数值来源模式：foreground_record 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：collected_record 采集协议：`cp_grading_mass` 来源：`ross-live-argus-grading-2024` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_grading_other_environmental_releases` | `grading`; 输出; 基本流 | 必须辨认并分别采集“其他实际物质或材料释放”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：展开逐项有依据的污染物种类、接收介质及基准，适用时含实际制冷剂、燃料或材料泄漏、遗失渔具或生物材料。不得为此伞形卡指定单一 UUID；排除已单列化石 CO2、活体放归及水载体。非质量生态相互作用仍为辅助观察。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_grading_mass。不得以分配份额替代实物数量。 数值来源模式：foreground_record 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：collected_record 采集协议：`cp_grading_mass` 来源：`ross-live-argus-grading-2024` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_holding_fuel` | `holding`; 输入; 产品流 | 必须辨认并分别采集“本责任实际使用的燃料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：依交付、油箱、发动机及操作记录展开实际燃料身份和数量。仅记录分给本节点的共享设备或服务期间份额；排除已包含于外购全包服务的燃料。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_holding_mass。不得以分配份额替代实物数量。 数值来源模式：foreground_record 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：collected_record 采集协议：`cp_holding_mass` 来源：`noaa-caribbean-spiny-lobster` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_holding_materials_water` | `holding`; 输入; 产品流 | 必须辨认并分别采集“实际供应水及作业材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按实际身份及组成，展开独立需要的供应水、气体、清洁剂、润滑剂、渔具组件或其他材料，以供应产品千克表达。计数或体积记录须有同材料实际质量、密度或浓度依据；不得累加不相容原生单位或提供默认换算。不强制用水、供氧或活体加冰。区分海水、处理后产品水及载体水；下方服务不得掩盖或重复计入此处已单列材料。此伞形卡排除已有独立地址的包装接收及presentation_package_materials。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_holding_mass。不得以分配份额替代实物数量。 数值来源模式：foreground_record 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：collected_record 采集协议：`cp_holding_mass` 来源：`noaa-caribbean-spiny-lobster` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_holding_services` | `holding`; 输入; 产品流 | 必须辨认并分别采集“实际作业及共享资产服务”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅按实际使用展开搬运、称重、泵送、曝气、温控、船舶、潜水装备、照明、存储、清洁、维护或处理服务。采用每项具体服务原生数量，并独立核实属性及单位支持；recorded-native-unit 是声明槽位，不是通用换算或材料千克。共享资产及服务账对完整期间、替换及退役仅归属一次；不得重复计入供应者全包服务投入和排放。 流属性/单位：实际服务属性 / recorded-native-unit 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_holding_service。不得以分配份额替代实物数量。 数值来源模式：foreground_record 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：collected_record 采集协议：`cp_holding_service` 来源：`noaa-caribbean-spiny-lobster` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_holding_package_receipt` | `holding`; 输入; 产品流 | 必须辨认并分别采集“实际接收的辅助包装及可复用单元”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅在本真实事件收到实际包装时逐具体身份记录质量、所有者和去向，内部转移须与上一个实际节点的包装输出编号配对。区分外购与既有或内部接收，不重复其他材料卡或全包服务制造负荷。仅跨期间留存不增加交换；动物净质量始终不含包装。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：按本节点实际回次计量并成对核对，完成未分配实物及库存账后按每 1 kg 参考流表达；采用cp_holding_mass。仅一次LCA分配另列，不能替代实物数量。 数值来源模式：foreground_record 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：collected_record 采集协议：`cp_holding_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_holding_other_accepted_products` | `holding`; 输出; 产品流 | 必须辨认并分别采集“其他实际对外接受的产品”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：展开每项真实物种、等级、状态及接收者和用途验收，包括售往其他市场的活体或交给外部后续加工的原料。仅拒收、死亡或拟售并不能认定为有意产品。此处不建模冷冻、烹煮或去尾；动物各去向互斥。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_holding_mass。不得以分配份额替代实物数量。 数值来源模式：foreground_record 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：collected_record 采集协议：`cp_holding_mass` 来源：`noaa-caribbean-spiny-lobster` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_holding_package_transfer` | `holding`; 输出; 产品流 | 必须辨认并分别采集“实际转出的辅助包装及可复用单元”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅在本真实事件实际转出包装时记录，内部转移须与下一节点的包装接收编号配对，外部转移须有实际接收者及所有权或服务门。退还复用包装不自动成为独立共产品，制造维修退役仅按完整服务期间归属一次；留存库存不是输出。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：按本节点实际回次计量并成对核对，完成未分配实物及库存账后按每 1 kg 参考流表达；采用cp_holding_mass。仅一次LCA分配另列，不能替代实物数量。 数值来源模式：foreground_record 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：collected_record 采集协议：`cp_holding_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_holding_animal_waste` | `holding`; 输出; 废物流 | 必须辨认并分别采集“实际作为废物交出的死亡动物及动物材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：在本节点及回次记录实际存活状态、材料组成、实测质量、废物接收及处理去向。不得默认为共产品；同一动物不能重复计入放归、留存或已接受替代产品。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_holding_mass。不得以分配份额替代实物数量。 数值来源模式：foreground_record 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：collected_record 采集协议：`cp_holding_mass` 来源：`noaa-caribbean-spiny-lobster` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_holding_operating_waste` | `holding`; 输出; 废物流 | 必须辨认并分别采集“实际作业、渔具及呈现废物”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：展开废弃材料、退役渔具或包装及实际处理接收；同一资产退役不得在全包服务外重复计负荷。动物材料另卡记录；包装复用或退还不能自动算处置。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_holding_mass。不得以分配份额替代实物数量。 数值来源模式：foreground_record 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：collected_record 采集协议：`cp_holding_mass` 来源：`noaa-caribbean-spiny-lobster` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_holding_live_release` | `holding`; 输出; 基本流 | 必须辨认并分别采集“实际放回环境的活体生物”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：须有本节点及回次的实际物种、时间、位置、存活状态和放归记录。区分目标动物、活体诱集物及附带生物；不假定存活率或普遍法律许可。操作后的放归不能改称捕前未捕获。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_holding_mass。不得以分配份额替代实物数量。 数值来源模式：foreground_record 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：collected_record 采集协议：`cp_holding_mass` 来源：`noaa-caribbean-spiny-lobster` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_holding_water_discharge` | `holding`; 输出; 基本流 | 必须辨认并分别采集“实际直接排水、蒸发或其他水去向”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按真实接收介质及身份展开，区分水载体和组分污染物，不重复整个水流。按测量不确定性核对取水、循环、动物水分交换、携带水、处理转移、排水及期初期末库存。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_holding_mass。不得以分配份额替代实物数量。 数值来源模式：foreground_record 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：collected_record 采集协议：`cp_holding_mass` 来源：`noaa-caribbean-spiny-lobster` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_holding_other_environmental_releases` | `holding`; 输出; 基本流 | 必须辨认并分别采集“其他实际物质或材料释放”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：展开逐项有依据的污染物种类、接收介质及基准，适用时含实际制冷剂、燃料或材料泄漏、遗失渔具或生物材料。不得为此伞形卡指定单一 UUID；排除已单列化石 CO2、活体放归及水载体。非质量生态相互作用仍为辅助观察。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_holding_mass。不得以分配份额替代实物数量。 数值来源模式：foreground_record 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：collected_record 采集协议：`cp_holding_mass` 来源：`noaa-caribbean-spiny-lobster` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_presentation_fuel` | `presentation`; 输入; 产品流 | 必须辨认并分别采集“本责任实际使用的燃料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：依交付、油箱、发动机及操作记录展开实际燃料身份和数量。仅记录分给本节点的共享设备或服务期间份额；排除已包含于外购全包服务的燃料。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_presentation_mass。不得以分配份额替代实物数量。 数值来源模式：foreground_record 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：collected_record 采集协议：`cp_presentation_mass` 来源：`noaa-caribbean-spiny-lobster` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_presentation_materials_water` | `presentation`; 输入; 产品流 | 必须辨认并分别采集“实际供应水及作业材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按实际身份及组成，展开独立需要的供应水、气体、清洁剂、润滑剂、渔具组件或其他材料，以供应产品千克表达。计数或体积记录须有同材料实际质量、密度或浓度依据；不得累加不相容原生单位或提供默认换算。不强制用水、供氧或活体加冰。区分海水、处理后产品水及载体水；下方服务不得掩盖或重复计入此处已单列材料。此伞形卡排除已有独立地址的包装接收及presentation_package_materials。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_presentation_mass。不得以分配份额替代实物数量。 数值来源模式：foreground_record 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：collected_record 采集协议：`cp_presentation_mass` 来源：`noaa-caribbean-spiny-lobster` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_presentation_services` | `presentation`; 输入; 产品流 | 必须辨认并分别采集“实际作业及共享资产服务”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅按实际使用展开搬运、称重、泵送、曝气、温控、船舶、潜水装备、照明、存储、清洁、维护或处理服务。采用每项具体服务原生数量，并独立核实属性及单位支持；recorded-native-unit 是声明槽位，不是通用换算或材料千克。共享资产及服务账对完整期间、替换及退役仅归属一次；不得重复计入供应者全包服务投入和排放。 流属性/单位：实际服务属性 / recorded-native-unit 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_presentation_service。不得以分配份额替代实物数量。 数值来源模式：foreground_record 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：collected_record 采集协议：`cp_presentation_service` 来源：`noaa-caribbean-spiny-lobster` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_presentation_package_materials` | `presentation`; 输入; 产品流 | 必须辨认并分别采集“实际保护包装材料及可复用单元”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：展开实际一次性及复用组件、皮重、清洁和服务循环；保留退还或押金证据及剩余状态。本输入同时负责实际内部包装接收，并与上一包装输出转移编号配对；须区别外购及期初库存。仅库存结转不是交换，同一接收不得重复计入其他材料卡。不得每批计完整复用制造负荷，也不能遗漏有证据服务期间的制造、修理和退役。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_presentation_mass。不得以分配份额替代实物数量。 数值来源模式：foreground_record 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：collected_record 采集协议：`cp_presentation_mass` 来源：`noaa-caribbean-spiny-lobster` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_presentation_other_accepted_products` | `presentation`; 输出; 产品流 | 必须辨认并分别采集“其他实际对外接受的产品”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：展开每项真实物种、等级、状态及接收者和用途验收，包括售往其他市场的活体或交给外部后续加工的原料。仅拒收、死亡或拟售并不能认定为有意产品。此处不建模冷冻、烹煮或去尾；动物各去向互斥。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_presentation_mass。不得以分配份额替代实物数量。 数值来源模式：foreground_record 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：collected_record 采集协议：`cp_presentation_mass` 来源：`noaa-caribbean-spiny-lobster` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_presentation_package_transfer` | `presentation`; 输出; 产品流 | 必须辨认并分别采集“随动物转出或实际退回复用的包装”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：每项真实包装去向与动物净质量分开。生产者仍拥有时配对内部接收，仅在真实所有权或服务门转出；期末包装存量不是销售。复用负荷唯一归于服务账。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_presentation_mass。不得以分配份额替代实物数量。 数值来源模式：foreground_record 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：collected_record 采集协议：`cp_presentation_mass` 来源：`noaa-caribbean-spiny-lobster` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_presentation_animal_waste` | `presentation`; 输出; 废物流 | 必须辨认并分别采集“实际作为废物交出的死亡动物及动物材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：在本节点及回次记录实际存活状态、材料组成、实测质量、废物接收及处理去向。不得默认为共产品；同一动物不能重复计入放归、留存或已接受替代产品。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_presentation_mass。不得以分配份额替代实物数量。 数值来源模式：foreground_record 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：collected_record 采集协议：`cp_presentation_mass` 来源：`noaa-caribbean-spiny-lobster` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_presentation_operating_waste` | `presentation`; 输出; 废物流 | 必须辨认并分别采集“实际作业、渔具及呈现废物”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：展开废弃材料、退役渔具或包装及实际处理接收；同一资产退役不得在全包服务外重复计负荷。动物材料另卡记录；包装复用或退还不能自动算处置。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_presentation_mass。不得以分配份额替代实物数量。 数值来源模式：foreground_record 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：collected_record 采集协议：`cp_presentation_mass` 来源：`noaa-caribbean-spiny-lobster` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_presentation_live_release` | `presentation`; 输出; 基本流 | 必须辨认并分别采集“实际放回环境的活体生物”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：须有本节点及回次的实际物种、时间、位置、存活状态和放归记录。区分目标动物、活体诱集物及附带生物；不假定存活率或普遍法律许可。操作后的放归不能改称捕前未捕获。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_presentation_mass。不得以分配份额替代实物数量。 数值来源模式：foreground_record 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：collected_record 采集协议：`cp_presentation_mass` 来源：`noaa-caribbean-spiny-lobster` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_presentation_water_discharge` | `presentation`; 输出; 基本流 | 必须辨认并分别采集“实际直接排水、蒸发或其他水去向”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按真实接收介质及身份展开，区分水载体和组分污染物，不重复整个水流。按测量不确定性核对取水、循环、动物水分交换、携带水、处理转移、排水及期初期末库存。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_presentation_mass。不得以分配份额替代实物数量。 数值来源模式：foreground_record 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：collected_record 采集协议：`cp_presentation_mass` 来源：`noaa-caribbean-spiny-lobster` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_presentation_other_environmental_releases` | `presentation`; 输出; 基本流 | 必须辨认并分别采集“其他实际物质或材料释放”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：展开逐项有依据的污染物种类、接收介质及基准，适用时含实际制冷剂、燃料或材料泄漏、遗失渔具或生物材料。不得为此伞形卡指定单一 UUID；排除已单列化石 CO2、活体放归及水载体。非质量生态相互作用仍为辅助观察。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_presentation_mass。不得以分配份额替代实物数量。 数值来源模式：foreground_record 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：collected_record 采集协议：`cp_presentation_mass` 来源：`noaa-caribbean-spiny-lobster` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_handover_fuel` | `handover`; 输入; 产品流 | 必须辨认并分别采集“本责任实际使用的燃料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：依交付、油箱、发动机及操作记录展开实际燃料身份和数量。仅记录分给本节点的共享设备或服务期间份额；排除已包含于外购全包服务的燃料。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_handover_mass。不得以分配份额替代实物数量。 数值来源模式：foreground_record 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：collected_record 采集协议：`cp_handover_mass` 来源：`noaa-caribbean-spiny-lobster` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_handover_materials_water` | `handover`; 输入; 产品流 | 必须辨认并分别采集“实际供应水及作业材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按实际身份及组成，展开独立需要的供应水、气体、清洁剂、润滑剂、渔具组件或其他材料，以供应产品千克表达。计数或体积记录须有同材料实际质量、密度或浓度依据；不得累加不相容原生单位或提供默认换算。不强制用水、供氧或活体加冰。区分海水、处理后产品水及载体水；下方服务不得掩盖或重复计入此处已单列材料。此伞形卡排除已有独立地址的包装接收及presentation_package_materials。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_handover_mass。不得以分配份额替代实物数量。 数值来源模式：foreground_record 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：collected_record 采集协议：`cp_handover_mass` 来源：`noaa-caribbean-spiny-lobster` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_handover_services` | `handover`; 输入; 产品流 | 必须辨认并分别采集“实际作业及共享资产服务”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅按实际使用展开搬运、称重、泵送、曝气、温控、船舶、潜水装备、照明、存储、清洁、维护或处理服务。采用每项具体服务原生数量，并独立核实属性及单位支持；recorded-native-unit 是声明槽位，不是通用换算或材料千克。共享资产及服务账对完整期间、替换及退役仅归属一次；不得重复计入供应者全包服务投入和排放。 流属性/单位：实际服务属性 / recorded-native-unit 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_handover_service。不得以分配份额替代实物数量。 数值来源模式：foreground_record 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：collected_record 采集协议：`cp_handover_service` 来源：`noaa-caribbean-spiny-lobster` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_handover_package_receipt` | `handover`; 输入; 产品流 | 必须辨认并分别采集“实际接收的辅助包装及可复用单元”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅在本真实事件收到实际包装时逐具体身份记录质量、所有者和去向，内部转移须与上一个实际节点的包装输出编号配对。区分外购与既有或内部接收，不重复其他材料卡或全包服务制造负荷。仅跨期间留存不增加交换；动物净质量始终不含包装。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：按本节点实际回次计量并成对核对，完成未分配实物及库存账后按每 1 kg 参考流表达；采用cp_handover_mass。仅一次LCA分配另列，不能替代实物数量。 数值来源模式：foreground_record 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：collected_record 采集协议：`cp_handover_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_handover_other_accepted_products` | `handover`; 输出; 产品流 | 必须辨认并分别采集“其他实际对外接受的产品”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：展开每项真实物种、等级、状态及接收者和用途验收，包括售往其他市场的活体或交给外部后续加工的原料。仅拒收、死亡或拟售并不能认定为有意产品。此处不建模冷冻、烹煮或去尾；动物各去向互斥。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_handover_mass。不得以分配份额替代实物数量。 数值来源模式：foreground_record 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：collected_record 采集协议：`cp_handover_mass` 来源：`noaa-caribbean-spiny-lobster` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_handover_package_transfer` | `handover`; 输出; 产品流 | 必须辨认并分别采集“实际转出的辅助包装及可复用单元”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅在本真实事件实际转出包装时记录，内部转移须与下一节点的包装接收编号配对，外部转移须有实际接收者及所有权或服务门。退还复用包装不自动成为独立共产品，制造维修退役仅按完整服务期间归属一次；留存库存不是输出。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：按本节点实际回次计量并成对核对，完成未分配实物及库存账后按每 1 kg 参考流表达；采用cp_handover_mass。仅一次LCA分配另列，不能替代实物数量。 数值来源模式：foreground_record 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：collected_record 采集协议：`cp_handover_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_handover_animal_waste` | `handover`; 输出; 废物流 | 必须辨认并分别采集“实际作为废物交出的死亡动物及动物材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：在本节点及回次记录实际存活状态、材料组成、实测质量、废物接收及处理去向。不得默认为共产品；同一动物不能重复计入放归、留存或已接受替代产品。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_handover_mass。不得以分配份额替代实物数量。 数值来源模式：foreground_record 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：collected_record 采集协议：`cp_handover_mass` 来源：`noaa-caribbean-spiny-lobster` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_handover_operating_waste` | `handover`; 输出; 废物流 | 必须辨认并分别采集“实际作业、渔具及呈现废物”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：展开废弃材料、退役渔具或包装及实际处理接收；同一资产退役不得在全包服务外重复计负荷。动物材料另卡记录；包装复用或退还不能自动算处置。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_handover_mass。不得以分配份额替代实物数量。 数值来源模式：foreground_record 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：collected_record 采集协议：`cp_handover_mass` 来源：`noaa-caribbean-spiny-lobster` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_handover_live_release` | `handover`; 输出; 基本流 | 必须辨认并分别采集“实际放回环境的活体生物”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：须有本节点及回次的实际物种、时间、位置、存活状态和放归记录。区分目标动物、活体诱集物及附带生物；不假定存活率或普遍法律许可。操作后的放归不能改称捕前未捕获。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_handover_mass。不得以分配份额替代实物数量。 数值来源模式：foreground_record 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：collected_record 采集协议：`cp_handover_mass` 来源：`noaa-caribbean-spiny-lobster` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_handover_water_discharge` | `handover`; 输出; 基本流 | 必须辨认并分别采集“实际直接排水、蒸发或其他水去向”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按真实接收介质及身份展开，区分水载体和组分污染物，不重复整个水流。按测量不确定性核对取水、循环、动物水分交换、携带水、处理转移、排水及期初期末库存。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_handover_mass。不得以分配份额替代实物数量。 数值来源模式：foreground_record 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：collected_record 采集协议：`cp_handover_mass` 来源：`noaa-caribbean-spiny-lobster` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_handover_other_environmental_releases` | `handover`; 输出; 基本流 | 必须辨认并分别采集“其他实际物质或材料释放”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：展开逐项有依据的污染物种类、接收介质及基准，适用时含实际制冷剂、燃料或材料泄漏、遗失渔具或生物材料。不得为此伞形卡指定单一 UUID；排除已单列化石 CO2、活体放归及水载体。非质量生态相互作用仍为辅助观察。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：记录由本节点回次唯一拥有的实际具体交换，完成实物核对并以每1 kg参考流表达；采用cp_handover_mass。不得以分配份额替代实物数量。 数值来源模式：foreground_record 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：collected_record 采集协议：`cp_handover_mass` 来源：`noaa-caribbean-spiny-lobster` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `identity_gate` | live_argus_handover | 须有 Panulirus argus、野生来源、活体整只原生壳状态、食品去向、首次生产者验收及正的净千克证据。排除其他类群、养成或育肥、观赏、尾或肉、死亡参考、冷冻烹煮解冻及后续买方门。所有必需限定信息均须声明。 | `un-cpc3-aquatic-2025` |
| `event_reconciliation` | all nodes | 按物种材料及湿基或其他基准和不确定性检查真实时序及逐节点回次接收、输出、损失、库存平衡。成对转移仅核对一次，检查仅活体接收条件、唯一外部去向及实测参考。等级改变不创造质量；缺失吸水或损失项为缺口，不能强行精确闭合。 |  |
| `technology_events` | capture | 核对实际笼捕、潜水或bullynet（浅水定点抄捕）父活动实现及相应当前投放、装备服务、努力量、诱饵、照明和去向证据。混合事件须互斥归属。不得堆叠全部渔具默认投入，也不得借用普遍合法性、种群、死亡率或性能声明。 | `noaa-caribbean-spiny-lobster` |
| `attractant_balance` | capture | 核对独立活诱饵库存、实际外购及指定、内部转移、复用、放归及死亡材料去向。同节点循环不是交换；食品参考与诱集物不能重复拥有同一动物。范围排除不能抹去可归属诱集物负荷。 | `noaa-caribbean-spiny-lobster` |
| `two_view_attribution` | all nodes | 须有未分配实物账及单独标注的仅一次 LCA 视图；核对每项有意输出交接、分配优先级、共享消费份额、完整服务、库存结转及零产出期间。不得用分配修复实物平衡或在下游重复共同负荷。 |  |
| `range_independence` | all inventory rows | 每项非参考0..U仅是所声明分子单位每1千克参考的未决证据包络槽位。QA使用前须按行、具体身份、状态和回次，以独立经审查其他活动期、设计能力或供应者证据和范围不确定性实例化U。不得用目标批次最大值自证，不得声称通用物理极限、以零替未知或裁剪异常。参考1..1是归一恒等式，不是产率或实测存活率。 |  |
| `identity_projection` | all inventory rows | 数据集交付前须依据证据确认每项实际具体交换身份、地区或供应者、属性单位及介质；展开伞形卡，不能伪造固定UUID。保持双语卡、规则、协议及投影一致。方法检查不等于实际数据、法律符合、UUID或安全核实。 |  |
| `validate_inventory_completion` | 所有具体交换及第8节逐流完善责任 | 核查每项适用 dq_complete 责任均已形成独立实测且身份核实的交换卡；逐项确认数量、原生单位、Range证据、归一化、接收介质、去向和不重复归属。任一实际子交换、数量、身份或去向未落实均使最终数据包不完整并校验失败；未知不得填零。静态PCR检查不能替代这些证据。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground data package |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 证据完整且声明捕捞技术、事件拓扑、完整服务期间和仅一次分配的野生整只Panulirus argus活体首次生产者门建模。 |
| excluded_use | 声明范围外物种路线、养殖育肥、观赏、死亡加工参考、后续买方门、法律福利安全认证或通用产率存活因子。 |
| required_metadata | 全部参考限定信息、真实位置时间节点回次状态、采集协议、完整边界服务期间、库存去向、上游关联、原生数量、实物与LCA视图及来源身份依据。 |
| required_quality_disclosure | 不确定性缺失证据、暂定包络状态、实际范围限制、完整性及不重复检查；检查通过不意味着经验数据或发布就绪。 |
| update_trigger | 物种状态门、独立操作捕捞差异、供应者原生属性、库存服务分配边界、证据或接收者用途变化。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc3-aquatic-2025` | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | UN CPC3 原始说明，印刷页46–48；仅用于分类边界，活体 Panulirus argus 为较窄范围；访问于2026-10-10。 |
| `noaa-caribbean-spiny-lobster` | official_guidance | https://www.fisheries.noaa.gov/species/caribbean-spiny-lobster | NOAA 物种及笼捕、潜水和bullynet（浅水定点抄捕）定性接口、附带生物及渔具去向；不将地方监管、种群数字或诱饵死亡率移作默认值；访问于2026-10-10。 |
| `ross-live-argus-grading-2024` | literature | https://doi.org/10.1016/j.fishres.2024.107117 | Ross等，Fisheries Research278 (2024)107117，出版社摘要：仅用于实际活体市场定性分级及替代市场接口；不移用预测器、定量性能或阈值；未使用全文；访问于2026-10-10。 |
| `net-mass-normalization-identity` | method_factor | Declared arithmetic identity: section8 physical_normalization | 除以正的最终验收动物净千克；仅1千克/1千克恒等式，不是产率、分配因子或经验范围。 |
