---
pcr_id: pcr.farmed-whole-chilled-sea-cage-gilthead-seabream
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 海笼养殖完整冷却金头鲷

## 1. 范围与适用性

本 PCR 覆盖希腊地中海海水网笼中购入苗场金头鲷（Sparus aurata）幼鱼的养成、围集和抄网移出、实际冰水致死/冷却、等级与去向分选及实际呈现，终点为养殖方产品的第一实物接收方对完整冷却鱼的验收。保留头、内脏和天然身体；产品为生鲜且从未冷冻。海笼养成、围集抄网起捕各有独立责任：生长产生在笼活生物量，物理移出产生收集活鱼，致死/冷却产生冷却状态。FAO 记录了可适用路线；生产者来源佐证希腊完整生鲜鱼市场，不能证明具体养殖场的操作条件。

排除池塘、泻湖、陆基水槽、野捕、真空泵起捕、其他物种、最终活鱼交付、去内脏/鳞/鳃状态、鱼片、熟制、冷冻/解冻产品及接收方之后的配送/零售。实际其他技术须重新审查边界，不能默认等效。这是清单方法，不是动物福利、食品安全或现行法规符合性建议。不采用规定的 CO2 添加、温度、停料时长、保质期、养殖密度、生长周期、饲料系数或存活率。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.farmed-whole-chilled-sea-cage-gilthead-seabream |
| classification_refs | cpc:3.0:04292；窄于 Other farmed fish, live, fresh or chilled |
| covered_products | 希腊海水网笼养殖 Sparus aurata，在养殖方产品的第一实物接收方验收时带头、未去内脏、生鲜、从未冷冻的完整冷却鱼 |
| excluded_products | 其他分类群；排除的养殖/起捕路线；最终活鱼；去内脏、鱼片、冷冻、解冻、熟制鱼；交接后零售 |
| representative_product | 一批扣除冰、水和皮重后的完整海笼养殖冷却金头鲷 |
| production_route | 购入苗场幼鱼；接收/入笼；海笼；围集/抄网起捕；实际冰水致死/冷却；等级/去向分选；实际可选包装；交付首次实物接收方 |
| market_state | 完整生鲜/冷却，保留天然头和内脏；从未冷冻 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 养殖方产品的第一实物接收方验收、处于声明冷却状态的完整养殖 Sparus aurata |
| How much | 1 kg 验收鱼净质量 |
| How well | 完整、带头、未去内脏、生鲜、从未冷冻；实际状态和验收证据，扣除冰、游离水、包装和皮重 |
| How long or cycle | 实际幼鱼接收、网笼鱼群养成、分批起捕、冷却/分选运行和交付期间；纳入可归属该鱼群的准备、失败作业、闲置支持、更换和终止事件 |
| reference_flow_link | `accepted_chilled_seabream` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 养殖方产品的第一实物接收方验收的带头未去内脏生鲜从未冷冻冷却养殖金头鲷 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | Sparus aurata; 苗场幼鱼来源和接收状态; 希腊/场址; 海笼和鱼群; 围集/抄网事件; 实际冰水操作和温度历史; 保留完整头/内脏; 从未冷冻证据; 等级; 实际包装或旁路; 首次实物接收方/地点/时间; 净质量扣除项目; 报告期间; 上游/前景责任归属 |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_net_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在同批次和交接点使用校准称重并扣除实测冰、游离水和皮重，得到验收鱼净质量 A；所有行均以每 1 kg 参考流为基准，实际可归属数量除以 A。A 必须为正。 |
| juvenile_count_mass | received_juveniles; stocked_juveniles; growout_seed | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分别保留实测尾数和质量。仅按同批有代表性抽样个体质量及不确定性换算尾数；入笼前死亡者属于实收量，不属于存活入笼量。 |
| native_carriers | all inventory rows | 实际行属性 | kg; kWh; t*km | 保留各材料/物质原生质量、计量电力与载重距离运输量。进行物理换算前记录能量因子、密度、有效含量和服务范围；不得混淆配方产品、元素营养物或有效物质基准。 |
| internal_handoffs | all inventory rows | 实际行属性 | 实际原生单位 | 按转移标识及实际数量配对；不得将内部鱼转移强制为 1 kg。所有归一化分母均指同一最终验收批次 A。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 希腊海笼场实际接收购入苗场培育活 Sparus aurata 幼鱼，声明供应商苗种培育及运输范围 |
| starting_condition_role | 上游完整的生物投入；接收/放养损失属于前景；养成从存活入笼鱼开始 |
| product_classification_scope | 以上物种/状态/路线/交接点语义边界；CPC 映射仅为背景，非生产事实 |
| recursive_input_rule | 购入或转入同类别产品时保留实际状态/交接点及独立上游完整数据集；在声明供应商边界停止递归前景展开，不赋予零负担 |
| upstream_dataset_requirement | 幼鱼苗场/苗种培育、饲料、供应材料/冰/能源、基础设施及购入服务均须有兼容上游数据集；披露缺口与运输范围 |
| disclosure | 声明网笼/鱼群/地点、接收交接点、全部期间/阶段、转移、支持消费方、实际可选操作、投入责任、输出去向、排除项及未解析环境/身份依据 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_route | all processes | 分开受管理海笼养成、围集抄网起捕和冰水状态改变。不得推定真空起捕、通用清洗、强制加气或网笼支持零能耗。 | fao-seabream-2009 |
| boundary_gate | first_receipt | 终点为首次实物接收验收，可在养殖场或养殖方供货的接收场址；发票或远程所有权转移本身不能构成交接点。不论养殖方或买方负责，均纳入该实物交接点之前实际运输/暂存；核对服务范围和责任归属，防止遗漏或重复。 | |
| boundary_periods | cage_growout; shared_support | 将接收、入笼鱼群、生长、分批起捕、准备/清洁/换批、闲置/失败作业、更换和退役关联实际期间。期末活鱼存量携可归属负担结转；不得舍弃失败鱼群负担或重复归属。 | |
| boundary_pack | sort_destination; pack_present; first_receipt | 记录实际包装启用状态。分选直接交付旁路与包装交付保持相同完整冷却最终参考；实际转移计量一次。包装负责保护/呈现，配送归 first_receipt。 | |
| boundary_support | shared_support | 单一账拥有船舶、网笼、系泊、网、桶、喂料器、泵、冷藏设施及实际公用工程/服务。列出消费节点/鱼群/期间；购入完整服务时排除其已含燃料/资产/排放。 | |
| boundary_fates | all processes | 分开预期销售输出、留存活鱼、送实际处理的收集废物、直接资源取用及物质明确的环境释放。记录实际去向/介质及处理责任；载体水不自动成为废物或污染物。 | fao-seabream-2009 |

## 6. 过程清单结构

### 过程图

| process_id | Process name | Inclusion | Inclusion condition | Role | Quantitative reference |
| --- | --- | --- | --- | --- | --- |
| receive_stock | 幼鱼接收与入笼 | required |  | 前景幼鱼接收和放养 | 实收与入笼幼鱼质量 |
| cage_growout | 海水网笼养成 | required |  | 受管理生物生产 | 各鱼群待起捕活生物量 |
| crowd_harvest | 围集与抄网起捕 | required |  | 从网笼实物移出 | 收集完整活鱼 |
| kill_chill | 冰水致死与冷却 | required |  | 保藏与状态改变 | 完整从未冷冻冷却鱼 |
| sort_destination | 等级与去向分选 | required |  | 等级/去向分类 | 各声明验收和其他预期等级输出 |
| pack_present | 实际包装与呈现 | conditional | 首次实物接收前实际包装或使用复用容器呈现，不论操作者；记录负担责任并排除重复服务负担 | 产品保护/呈现，不含配送 | 实际呈现状态完整冷却鱼 |
| first_receipt | 接收前交付与第一实物接收方验收 | required |  | 交接前物流和最终交付 | 验收完整冷却鱼净质量 A |
| shared_support | 共用船舶、公用工程与基础设施 | required |  | 共用作业的单一负担归属方 | 实际节点/鱼群/期间作业份额 |

各节点清单采用相同验收批次基准。生产为网笼鱼群批次生产，关联实际分批起捕和操作运行；并行鱼群及共用报告期间仍分别可追溯。支持负担通过账分配一次，不在每个消费节点重复相同投入。以下每个条件式概括卡均须按实际材料、服务、去向或污染物逐实例展开。符号上限 U_row_instance 为该实例原生单位下尚缺依据的数量，既不是单位，也不是经验默认值/限值。零须有不存在的证据，不能由缺记录推定。

### 过程：幼鱼接收与入笼（`receive_stock`）

#### 输入

##### 产品流

###### 场址实收购入活金头鲷幼鱼（`received_juveniles`）

接收时苗场来源活幼鱼，含其后入笼前死亡者；保留尾数、实测质量及上游苗场/苗种培育和运输边界。

- 选定流：场址实收购入活金头鲷幼鱼
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实际可归属 received_juveniles 实例数量除以验收鱼净质量 A；保留原生原始数量与实例身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receive_stock`
- 数量范围：每个 received_juveniles 实例的暂定未解决依据范围；用经审查前景依据替换 U_received_juveniles_instance
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_received_juveniles_instance
  - 单位：kg
  - 基准：每 1 kg 参考流；独立实例范围，非跨实例共用上限
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

无默认交换；仅在声明路线与责任下确有实例跨越本节点边界时记录。

##### 基本流

无默认交换；仅在声明路线与责任下确有实例跨越本节点边界时记录。

#### 输出

##### 产品流

###### 入海笼的活金头鲷幼鱼（`stocked_juveniles`）

交给海笼养成的存活入笼鱼；与养成输入配对转移标识及实际净质量，不以最终参考量替代。

- 选定流：入海笼的活金头鲷幼鱼
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实际可归属 stocked_juveniles 实例数量除以验收鱼净质量 A；保留原生原始数量与实例身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receive_stock`
- 数量范围：每个 stocked_juveniles 实例的暂定未解决依据范围；用经审查前景依据替换 U_stocked_juveniles_instance
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_stocked_juveniles_instance
  - 单位：kg
  - 基准：每 1 kg 参考流；独立实例范围，非跨实例共用上限
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

无默认交换；仅在声明路线与责任下确有实例跨越本节点边界时记录。

### 过程：海水网笼养成（`cage_growout`）

#### 输入

##### 产品流

###### 入海笼的活金头鲷幼鱼（`growout_seed`）

与 stocked_juveniles 同鱼群输入配对，保留尾数/质量不确定性。

- 选定流：入海笼的活金头鲷幼鱼
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实际可归属 growout_seed 实例数量除以验收鱼净质量 A；保留原生原始数量与实例身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cage_growout`
- 数量范围：每个 growout_seed 实例的暂定未解决依据范围；用经审查前景依据替换 U_growout_seed_instance
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_growout_seed_instance
  - 单位：kg
  - 基准：每 1 kg 参考流；独立实例范围，非跨实例共用上限
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 实际供笼养成配合饲料（`formulated_feed`）

每种配方/供应商实例为独立具体交换，以原样质量和成分计；核对投喂、存量变化与退回饲料，不设默认饲料系数。

- 选定流：实际供笼养成配合饲料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实际可归属 formulated_feed 实例数量除以验收鱼净质量 A；保留原生原始数量与实例身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cage_growout`
- 数量范围：每个 formulated_feed 实例的暂定未解决依据范围；用经审查前景依据替换 U_formulated_feed_instance
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_formulated_feed_instance
  - 单位：kg
  - 基准：每 1 kg 参考流；独立实例范围，非跨实例共用上限
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

无默认交换；仅在声明路线与责任下确有实例跨越本节点边界时记录。

##### 基本流

无默认交换；仅在声明路线与责任下确有实例跨越本节点边界时记录。

#### 输出

##### 产品流

###### 待起捕活完整金头鲷生物量（`harvest_ready`）

每次起捕事件交给 crowd_harvest 的同鱼群活生物量实测值；分别记录分批起捕与期末活鱼存量。

- 选定流：待起捕活完整金头鲷生物量
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实际可归属 harvest_ready 实例数量除以验收鱼净质量 A；保留原生原始数量与实例身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cage_growout`
- 数量范围：每个 harvest_ready 实例的暂定未解决依据范围；用经审查前景依据替换 U_harvest_ready_instance
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_harvest_ready_instance
  - 单位：kg
  - 基准：每 1 kg 参考流；独立实例范围，非跨实例共用上限
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

###### 养成实际鱼逃逸入海洋环境（`growout_escapes`）

记录养成实际逃逸事件、质量、尾数及不确定性；区别于收集死鱼及起捕逃逸；披露未表征生态影响。

- 选定流：养成实际鱼逃逸入海洋环境
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实际可归属 growout_escapes 实例数量除以验收鱼净质量 A；保留原生原始数量与实例身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cage_growout`
- 数量范围：每个 growout_escapes 实例的暂定未解决依据范围；用经审查前景依据替换 U_growout_escapes_instance
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_growout_escapes_instance
  - 单位：kg
  - 基准：每 1 kg 参考流；独立实例范围，非跨实例共用上限
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：围集与抄网起捕（`crowd_harvest`）

#### 输入

##### 产品流

###### 待起捕活完整金头鲷生物量（`harvest_biomass`）

与 harvest_ready 同事件同质量，存量更正须有记录；本节点开始围集和抄网移出。

- 选定流：待起捕活完整金头鲷生物量
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实际可归属 harvest_biomass 实例数量除以验收鱼净质量 A；保留原生原始数量与实例身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crowd_harvest`
- 数量范围：每个 harvest_biomass 实例的暂定未解决依据范围；用经审查前景依据替换 U_harvest_biomass_instance
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_harvest_biomass_instance
  - 单位：kg
  - 基准：每 1 kg 参考流；独立实例范围，非跨实例共用上限
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

无默认交换；仅在声明路线与责任下确有实例跨越本节点边界时记录。

##### 基本流

无默认交换；仅在声明路线与责任下确有实例跨越本节点边界时记录。

#### 输出

##### 产品流

###### 抄网收集的活完整金头鲷（`collected_live_fish`）

实际交入冰水致死/冷却的鱼净质量，扣除伴随水、工具及死鱼。

- 选定流：抄网收集的活完整金头鲷
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实际可归属 collected_live_fish 实例数量除以验收鱼净质量 A；保留原生原始数量与实例身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crowd_harvest`
- 数量范围：每个 collected_live_fish 实例的暂定未解决依据范围；用经审查前景依据替换 U_collected_live_fish_instance
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_collected_live_fish_instance
  - 单位：kg
  - 基准：每 1 kg 参考流；独立实例范围，非跨实例共用上限
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

###### 实际养殖鱼逃逸入海洋环境（`fish_escape`）

记录实际未控制逃逸质量、尾数、不确定性与事件；无可靠表征时定性披露生态影响，不给替代产品抵扣。

- 选定流：实际养殖鱼逃逸入海洋环境
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实际可归属 fish_escape 实例数量除以验收鱼净质量 A；保留原生原始数量与实例身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crowd_harvest`
- 数量范围：每个 fish_escape 实例的暂定未解决依据范围；用经审查前景依据替换 U_fish_escape_instance
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_fish_escape_instance
  - 单位：kg
  - 基准：每 1 kg 参考流；独立实例范围，非跨实例共用上限
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：冰水致死与冷却（`kill_chill`）

#### 输入

##### 产品流

###### 抄网收集的活完整金头鲷（`chill_live_fish`）

与 collected_live_fish 配对转入实际冰水操作。

- 选定流：抄网收集的活完整金头鲷
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实际可归属 chill_live_fish 实例数量除以验收鱼净质量 A；保留原生原始数量与实例身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_kill_chill`
- 数量范围：每个 chill_live_fish 实例的暂定未解决依据范围；用经审查前景依据替换 U_chill_live_fish_instance
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_chill_live_fish_instance
  - 单位：kg
  - 基准：每 1 kg 参考流；独立实例范围，非跨实例共用上限
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 用于养殖鱼致死和冷却的供冰（`chilling_ice`）

记录实际交付冰及水来源/制冰边界；不得代用捕捞渔业冰身份或重复计入购冰已含电力。

- 选定流：用于养殖鱼致死和冷却的供冰
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实际可归属 chilling_ice 实例数量除以验收鱼净质量 A；保留原生原始数量与实例身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_kill_chill`
- 数量范围：每个 chilling_ice 实例的暂定未解决依据范围；用经审查前景依据替换 U_chilling_ice_instance
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_chilling_ice_instance
  - 单位：kg
  - 基准：每 1 kg 参考流；独立实例范围，非跨实例共用上限
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 实际冰水浴供水（`chilling_water`）

按来源分开供水实例；体积转质量须测量体积及密度；直接取海水时以基本输入实例记录。

- 选定流：实际冰水浴供水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实际可归属 chilling_water 实例数量除以验收鱼净质量 A；保留原生原始数量与实例身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_kill_chill`
- 数量范围：每个 chilling_water 实例的暂定未解决依据范围；用经审查前景依据替换 U_chilling_water_instance
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_chilling_water_instance
  - 单位：kg
  - 基准：每 1 kg 参考流；独立实例范围，非跨实例共用上限
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

无默认交换；仅在声明路线与责任下确有实例跨越本节点边界时记录。

##### 基本流

###### 冷却直接抽取海水（`direct_chill_water`）

有条件记录非购入产品的海水直接取用；同一物理水不得同时计入 chilling_water。

- 选定流：海水 `172a3db9-6556-11dd-ad8b-0800200c9a66`
- 绑定模式：`fixed`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实际可归属 direct_chill_water 实例数量除以验收鱼净质量 A；保留原生原始数量与实例身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_kill_chill`
- 数量范围：每个 direct_chill_water 实例的暂定未解决依据范围；用经审查前景依据替换 U_direct_chill_water_instance
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_direct_chill_water_instance
  - 单位：kg
  - 基准：每 1 kg 参考流；独立实例范围，非跨实例共用上限
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 冷却后带头未去内脏生鲜从未冷冻冷却金头鲷（`chilled_fish`）

操作后实际鱼净质量交给分选；保留实测状态、天然身体部分与转移标识。

- 选定流：冷却后带头未去内脏生鲜从未冷冻冷却金头鲷
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实际可归属 chilled_fish 实例数量除以验收鱼净质量 A；保留原生原始数量与实例身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_kill_chill`
- 数量范围：每个 chilled_fish 实例的暂定未解决依据范围；用经审查前景依据替换 U_chilled_fish_instance
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_chilled_fish_instance
  - 单位：kg
  - 基准：每 1 kg 参考流；独立实例范围，非跨实例共用上限
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

### 过程：等级与去向分选（`sort_destination`）

#### 输入

##### 产品流

###### 冷却后带头未去内脏生鲜从未冷冻冷却金头鲷（`sorting_fish`）

与 chilled_fish 配对输入；保留批次、状态及实际来料净质量。

- 选定流：冷却后带头未去内脏生鲜从未冷冻冷却金头鲷
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实际可归属 sorting_fish 实例数量除以验收鱼净质量 A；保留原生原始数量与实例身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sort_destination`
- 数量范围：每个 sorting_fish 实例的暂定未解决依据范围；用经审查前景依据替换 U_sorting_fish_instance
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_sorting_fish_instance
  - 单位：kg
  - 基准：每 1 kg 参考流；独立实例范围，非跨实例共用上限
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

无默认交换；仅在声明路线与责任下确有实例跨越本节点边界时记录。

##### 基本流

#### 输出

##### 产品流

###### 分选后送声明参考渠道的完整冷却金头鲷（`selected_chilled_fish`）

实际选定等级在包装启用时送包装，否则直接送交付；最终接收验收前不得定为 1 kg。

- 选定流：分选后送声明参考渠道的完整冷却金头鲷
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实际可归属 selected_chilled_fish 实例数量除以验收鱼净质量 A；保留原生原始数量与实例身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sort_destination`
- 数量范围：每个 selected_chilled_fish 实例的暂定未解决依据范围；用经审查前景依据替换 U_selected_chilled_fish_instance
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_selected_chilled_fish_instance
  - 单位：kg
  - 基准：每 1 kg 参考流；独立实例范围，非跨实例共用上限
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

### 过程：实际包装与呈现（`pack_present`）

#### 输入

##### 产品流

###### 分选后送声明参考渠道的完整冷却金头鲷（`packing_fish`）

仅包装启用时接收同 selected_chilled_fish 批次，保留实际转移质量。

- 选定流：分选后送声明参考渠道的完整冷却金头鲷
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实际可归属 packing_fish 实例数量除以验收鱼净质量 A；保留原生原始数量与实例身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_present`
- 数量范围：每个 packing_fish 实例的暂定未解决依据范围；用经审查前景依据替换 U_packing_fish_instance
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_packing_fish_instance
  - 单位：kg
  - 基准：每 1 kg 参考流；独立实例范围，非跨实例共用上限
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

无默认交换；仅在声明路线与责任下确有实例跨越本节点边界时记录。

##### 基本流

无默认交换；仅在声明路线与责任下确有实例跨越本节点边界时记录。

#### 输出

##### 产品流

###### 按实际呈现方式待发运的完整冷却金头鲷（`presented_chilled_fish`）

每个实际预期完整冷却鱼等级/去向单独实例，含实际作为其他等级销售的受损鱼，保留实际接收方和净质量；声明渠道鱼交 first_receipt。包装材料账与鱼质量分开并保留未加工完整状态。

- 选定流：按实际呈现方式待发运的完整冷却金头鲷
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实际可归属 presented_chilled_fish 实例数量除以验收鱼净质量 A；保留原生原始数量与实例身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_present`
- 数量范围：每个 presented_chilled_fish 实例的暂定未解决依据范围；用经审查前景依据替换 U_presented_chilled_fish_instance
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_presented_chilled_fish_instance
  - 单位：kg
  - 基准：每 1 kg 参考流；独立实例范围，非跨实例共用上限
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

### 过程：接收前交付与第一实物接收方验收（`first_receipt`）

#### 输入

##### 产品流

###### 按实际呈现路径发运的完整冷却金头鲷（`delivery_fish`）

包装启用时接收 presented_chilled_fish，否则接收 selected_chilled_fish；同批不得两者并收；测实际净输入并追踪转移。

- 选定流：按实际呈现路径发运的完整冷却金头鲷
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实际可归属 delivery_fish 实例数量除以验收鱼净质量 A；保留原生原始数量与实例身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_first_receipt`
- 数量范围：每个 delivery_fish 实例的暂定未解决依据范围；用经审查前景依据替换 U_delivery_fish_instance
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_delivery_fish_instance
  - 单位：kg
  - 基准：每 1 kg 参考流；独立实例范围，非跨实例共用上限
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 接收前暂存与交付实际供冰（`delivery_topup_ice`）

有条件按来源/路段记录实际新补冰，区别于剩余包装冰；保留购入货运/冷藏服务范围，避免重复冰或制冰能耗。

- 选定流：接收前暂存与交付实际供冰
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实际可归属 delivery_topup_ice 实例数量除以验收鱼净质量 A；保留原生原始数量与实例身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_first_receipt`
- 数量范围：每个 delivery_topup_ice 实例的暂定未解决依据范围；用经审查前景依据替换 U_delivery_topup_ice_instance
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_delivery_topup_ice_instance
  - 单位：kg
  - 基准：每 1 kg 参考流；独立实例范围，非跨实例共用上限
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

无默认交换；仅在声明路线与责任下确有实例跨越本节点边界时记录。

##### 基本流

无默认交换；仅在声明路线与责任下确有实例跨越本节点边界时记录。

#### 输出

##### 产品流

###### 养殖方产品的第一实物接收方验收的带头未去内脏生鲜从未冷冻冷却养殖金头鲷（`accepted_chilled_seabream`）

实际参考输出：同批验收鱼净质量 A，扣除冰、游离水、包装和皮重，识别首次实物接收方；最终数量 A/A = 1 kg。

- 选定流：养殖方产品的第一实物接收方验收的带头未去内脏生鲜从未冷冻冷却养殖金头鲷
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：1 千克
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_first_receipt`
- 数量范围：同批验收鱼净质量恒等关系 A/A
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：由采集数据计算（`calculated_from_collection`）

##### 废物流

##### 基本流

### 过程：共用船舶、公用工程与基础设施（`shared_support`）

#### 输入

##### 产品流

###### 养殖及冷藏作业实际购电（`support_electricity`）

计量各电压/供应方供电与节点/鱼群/期间份额，包括泵、喂料、冷却、冷库及实际清洁；不笼统假设零能耗。

- 选定流：养殖及冷藏作业实际购电
- 流属性/单位：Electrical energy / kWh
- 数量规则：实际可归属 support_electricity 实例数量除以验收鱼净质量 A；保留原生原始数量与实例身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_shared_support`
- 数量范围：每个 support_electricity 实例的暂定未解决依据范围；用经审查前景依据替换 U_support_electricity_instance
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_support_electricity_instance
  - 单位：kWh
  - 基准：每 1 kg 参考流；独立实例范围，非跨实例共用上限
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

无默认交换；仅在声明路线与责任下确有实例跨越本节点边界时记录。

##### 基本流

无默认交换；仅在声明路线与责任下确有实例跨越本节点边界时记录。

#### 输出

##### 产品流

无默认交换；仅在声明路线与责任下确有实例跨越本节点边界时记录。

##### 废物流

##### 基本流

###### 实际自营燃烧向空气排放化石二氧化碳（`support_fossil_co2`）

仅化石碳部分适用；按实际燃料成分或实测排放推得，不含购入完整服务内部排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 绑定模式：`fixed`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实际可归属 support_fossil_co2 实例数量除以验收鱼净质量 A；保留原生原始数量与实例身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_shared_support`
- 数量范围：每个 support_fossil_co2 实例的暂定未解决依据范围；用经审查前景依据替换 U_support_fossil_co2_instance
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_support_fossil_co2_instance
  - 单位：kg
  - 基准：每 1 kg 参考流；独立实例范围，非跨实例共用上限
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 实际自营燃烧向空气排放生物源二氧化碳（`support_biogenic_co2`）

有条件单列生物碳部分；不得将未知碳源假作化石或将生物二氧化碳实物量视为零。

- 选定流：二氧化碳（生物源） `08a91e70-3ddc-11dd-9c15-0050c2490048`
- 绑定模式：`fixed`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实际可归属 support_biogenic_co2 实例数量除以验收鱼净质量 A；保留原生原始数量与实例身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_shared_support`
- 数量范围：每个 support_biogenic_co2 实例的暂定未解决依据范围；用经审查前景依据替换 U_support_biogenic_co2_instance
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_support_biogenic_co2_instance
  - 单位：kg
  - 基准：每 1 kg 参考流；独立实例范围，非跨实例共用上限
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| attribution_output_set | all processes | 列举每个验收参考等级、其他销售等级/活鱼销售、期末活鱼存量及实际预期回收输出，保留净数量和实物交接。死亡、未售拒收与收集残余为废物，除非有证据的产品功能及实际接收方支持其他分类；无自动替代抵扣。 | |
| attribution_precedence | cage_growout; sort_destination | 优先细分实测鱼群/事件/等级专属作业。无法细分的同物种完整鱼联合养成或分选负担，按共同分离交接点全部预期输出的实际鱼净质量分配；分离后等级专属作业直接归属。解释质量对物理生产的代表性；价值差异实质影响结论时测试经济分配，披露数据和敏感性，不事后选择有利结果。 | |
| attribution_period | cage_growout; shared_support | 关联阶段、期间、期初/期末活鱼存量和分批起捕。实测使用量归属鱼群；在制存量负担仅一次结转后续起捕。资产更换按有据寿命和实际作业记录归属，含停工、失败周期和终止；无通用寿命、存活率或周期产率。 | |
| attribution_shared | shared_support | 为每项船舶、网笼/网/系泊、桶、冷库或承包服务列出全部消费节点、鱼群和期间。优先计量和直接作业，否则用有据因果作业小时、容量时间或材料使用份额。份额核对到单一负担，披露闲置/失败作业分配及合理替代的敏感性。 | |
| attribution_no_duplicate | all processes | 配对实物转移不重复上游负担。购入完整服务代替其已含燃料/公用工程/资产/直接排放；购冰包含自身制冰能耗。最终批次通过包装或旁路一次，同一交接不得算作多次销售。 | |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_receive_stock | receive_stock | 实际幼鱼接收与入笼交换及逐实例去向 | 实测日志、供应商/转移记录和有据计算输入 | 苗场；物种；批次；接收与入笼日期；收到尾数/质量；抽样个体质量；存活入笼尾数/质量；运输；入笼前死亡；去向；行/实例标识；原生数量；可归属份额；验收批次 A | 核对苗场送货和实收计数，独立称重或抽样换算质量；记录入笼前损失、笼间转移标识和上游运输。 按保留依据建立独立 U_row_instance 及不确定性。 | kg; count; kWh; t*km，按实际适用 | 每次投入/输出事件及支持计量区间 | 全部可归属鱼群/运行及准备至交接点，含失败/闲置作业 | 实际幼鱼接收与入笼地点及其消费鱼群 | 每 1 kg 参考流 | 校准设备；带日期批次关联日志；供应商范围；去向接收凭证；方法与不确定性审查 |
| cp_cage_growout | cage_growout | 实际海水网笼养成交换及逐实例去向 | 实测日志、供应商/转移记录和有据计算输入 | 网笼/鱼群；放养；生物量；每种饲料配方与批次；投喂/退回量；管理物质及有效含量；死亡；逃逸；排泄模型；网笼清洁；起捕；期末存量；行/实例标识；原生数量；可归属份额；验收批次 A | 保留网笼鱼群每日投饵和健康记录、生物量抽样及死亡/逃逸记录；核对期初期末存量与每次分批起捕；按实测成分及有记录的留存和去向估算每种营养物质。 按保留依据建立独立 U_row_instance 及不确定性。 | kg; count; kWh; t*km，按实际适用 | 每次投入/输出事件及支持计量区间 | 全部可归属鱼群/运行及准备至交接点，含失败/闲置作业 | 实际海水网笼养成地点及其消费鱼群 | 每 1 kg 参考流 | 校准设备；带日期批次关联日志；供应商范围；去向接收凭证；方法与不确定性审查 |
| cp_crowd_harvest | crowd_harvest | 实际围集与抄网起捕交换及逐实例去向 | 实测日志、供应商/转移记录和有据计算输入 | 网笼/鱼群；起捕事件；捕前停料；围集与抄网作业；来料生物量；收集鱼质量；伴随物；死亡；逃逸；转移标识；行/实例标识；原生数量；可归属份额；验收批次 A | 称量收集鱼并扣除携带水和工具；将围集抄网事件与网笼移出量、死亡、伴随物及冷却交接相连。 按保留依据建立独立 U_row_instance 及不确定性。 | kg; count; kWh; t*km，按实际适用 | 每次投入/输出事件及支持计量区间 | 全部可归属鱼群/运行及准备至交接点，含失败/闲置作业 | 实际围集与抄网起捕地点及其消费鱼群 | 每 1 kg 参考流 | 校准设备；带日期批次关联日志；供应商范围；去向接收凭证；方法与不确定性审查 |
| cp_kill_chill | kill_chill | 实际冰水致死与冷却交换及逐实例去向 | 实测日志、供应商/转移记录和有据计算输入 | 起捕批次；活鱼净质量；冰来源与质量；水来源与体积；实际添加气体/物质；容器；时间；实测温度；冷却鱼质量；排水；拒收；气体去向；行/实例标识；原生数量；可归属份额；验收批次 A | 记录实际冰水操作、投入、前后温度和批次质量；分开鱼、冰、游离水与容器；确定水处理/排放去向及实际气体添加和释放，不规定福利方法。 按保留依据建立独立 U_row_instance 及不确定性。 | kg; count; kWh; t*km，按实际适用 | 每次投入/输出事件及支持计量区间 | 全部可归属鱼群/运行及准备至交接点，含失败/闲置作业 | 实际冰水致死与冷却地点及其消费鱼群 | 每 1 kg 参考流 | 校准设备；带日期批次关联日志；供应商范围；去向接收凭证；方法与不确定性审查 |
| cp_sort_destination | sort_destination | 实际等级与去向分选交换及逐实例去向 | 实测日志、供应商/转移记录和有据计算输入 | 输入冷却批次；净质量；实际等级标准；验收等级；其他每个销售等级/去向；拒收；买方/转移；实际清洗；行/实例标识；原生数量；可归属份额；验收批次 A | 独立称量实际各等级和拒收部分，保留标准与去向并核对来料；仅在实际发生时记录清洗及其投入和去向。 按保留依据建立独立 U_row_instance 及不确定性。 | kg; count; kWh; t*km，按实际适用 | 每次投入/输出事件及支持计量区间 | 全部可归属鱼群/运行及准备至交接点，含失败/闲置作业 | 实际等级与去向分选地点及其消费鱼群 | 每 1 kg 参考流 | 校准设备；带日期批次关联日志；供应商范围；去向接收凭证；方法与不确定性审查 |
| cp_pack_present | pack_present | 实际包装与呈现交换及逐实例去向 | 实测日志、供应商/转移记录和有据计算输入 | 鱼批次；输入/输出净质量；包装材质与皮重；新用/复用状态；周转次数；损失；包装冰；实际包装废料；各预期销售等级/去向及接收方；融水/载体水量；处理接收方或释放介质；下一交接；行/实例标识；原生数量；可归属份额；验收批次 A | 观察实际容器/衬垫/标签使用并称量皮重；分别核对鱼净质量和包装；按有证据的周转次数归属复用物，并记录损失及报废责任。 按保留依据建立独立 U_row_instance 及不确定性。 | kg; count; kWh; t*km，按实际适用 | 每次投入/输出事件及支持计量区间 | 全部可归属鱼群/运行及准备至交接点，含失败/闲置作业 | 实际包装与呈现地点及其消费鱼群 | 每 1 kg 参考流 | 校准设备；带日期批次关联日志；供应商范围；去向接收凭证；方法与不确定性审查 |
| cp_first_receipt | first_receipt | 实际接收前交付与第一实物接收方验收交换及逐实例去向 | 实测日志、供应商/转移记录和有据计算输入 | 批次；直接分选或包装路径；启运/接收时间地点；承运者/距离/载重；实际温度记录；毛质量；冰/游离水/皮重；验收净质量 A；拒收/退回鱼及去向；实际转售等级/去向/接收方/净质量；补冰与剩余包装冰；融水/载体水量及处理/释放去向；接收方签认；行/实例标识；原生数量；可归属份额；验收批次 A | 按批次核对发运与实物接收；用校准设备称量扣除游离水、冰和皮重的完整鱼；确认接收方及拒收退回物；不论养殖方或买方负责，按实际服务范围一次纳入全部接收前运输和冷藏。 按保留依据建立独立 U_row_instance 及不确定性。 | kg; count; kWh; t*km，按实际适用 | 每次投入/输出事件及支持计量区间 | 全部可归属鱼群/运行及准备至交接点，含失败/闲置作业 | 实际接收前交付与第一实物接收方验收地点及其消费鱼群 | 每 1 kg 参考流 | 校准设备；带日期批次关联日志；供应商范围；去向接收凭证；方法与不确定性审查 |
| cp_shared_support | shared_support | 实际共用船舶、公用工程与基础设施交换及逐实例去向 | 实测日志、供应商/转移记录和有据计算输入 | 资产/服务标识；船舶/网笼/系泊/网/桶/冷库；消费节点与鱼群；期间；计量/燃料；燃料碳源；材料更换；服务完整性；作业小时；废物；直接污染物物质/介质；退役；行/实例标识；原生数量；可归属份额；验收批次 A | 按每种能源和资产计量或核对购入存量使用；记录节点/鱼群/期间作业及闲置失败作业；由单一支持账分配给消费方；保留完整服务范围和实测或有据的排放方法。 按保留依据建立独立 U_row_instance 及不确定性。 | kg; count; kWh; t*km; 实际原生服务单位，按实际适用 | 每次投入/输出事件及支持计量区间 | 全部可归属鱼群/运行及准备至交接点，含失败/闲置作业 | 实际共用船舶、公用工程与基础设施地点及其消费鱼群 | 每 1 kg 参考流 | 校准设备；带日期批次关联日志；供应商范围；去向接收凭证；方法与不确定性审查 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| lot_normalization | all inventory rows | 每个实际行实例的可归属原生数量除以同一正验收鱼净质量 A；保留原始数量和分配账。最终同批验收鱼数量为 A/A = 1 kg。 | 原生数量；份额账；验收鱼净质量 A；cp_first_receipt | 每 1 kg 参考流的原生行单位数量 | |
| transfer_balance | all inventory rows | 按事件、批次、实际状态和净数量核对配对转移。在不确定性内，期初存量与收到/生产数量等于预期输出、余存、记录损失和分别有据的去向项；生物生长及营养流须成分依据，不能仅用鱼质量简式方程。 | 存量/转移日志；成分；去向记录；不确定性 | 核对结果与未解释残差 | |
| conversion_evidence | all inventory rows | 尾数乘同批有代表性平均个体质量得到鱼质量；体积乘实测且适用水源密度得到水质量；营养/有效物数量采用实测成分。保留原始量、换算因子、温度/基准与不确定性；无通用物种大小或饲料因子。 | 尾数；抽样；实测体积/密度；配方与成分 | 可追溯物理单位换算 | |
| release_accounting | collect_marine_nutrient_release; collect_chill_direct_releases; collect_actual_sort_water_release; support_fossil_co2; support_biogenic_co2; collect_support_other_releases | 按测量或有据成分/去向模型推得各物质及介质。分开化石和生物源碳、溶解和气态去向、收集处理转移和直接释放；不得由汇总名称推定基本流 UUID 或因子。 | 逐物质记录；燃料/碳源；留存和处理数据；模型边界 | 逐物质/介质释放及不确定性 | |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity_gate | reference and all transfers | 确立物种、来源、实际路线、状态、完整身体、从未冷冻历史及首次实物接收；现有市场表述不足以证明。 | 苗场/场址日志；起捕/冷却记录；签认实物接收 |
| dq_quantity | all inventory rows | 保留逐行实例原生单位、独立范围依据、正验收净质量 A、换算抽样覆盖及不确定性。暂定 U 数量是依据缺口，不认证经验合理性。 | 原始称重/计量记录；校准；可审查上限推导 |
| dq_complete_fates | all processes | 列举预期销售等级、死亡、逃逸、剩料、水取用/回流、清洁、实际添加物、制冷剂、处理及未表征生态途径。不存在须有核查记录。 | 输出/去向账；物质分析；缺失数据登记 |
| dq_attribution | shared_support; cage_growout | 追踪各共用消费方/期间、失败作业、存量结转、资产替换和服务范围；核对总量且不重复负担。 | 作业账；存量结转；供应商范围与敏感性 |
| dq_binding | all inventory rows | 核实实际交换的具体身份/流属性/单位支持；可变概括卡须逐实际实例核实。未解析身份阻止具体数据发布。 | 保留明细依据和实际实例语义审查 |
| `collect_seed_transport` | `receive_stock`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：幼鱼交付运输服务. 仅记录购入幼鱼数据未涵盖的实际苗种运输；关联载重、距离和交付条件。 <br> - 流属性/单位：Transport work / t*km <br> - 数量规则：实际可归属 collect_seed_transport 实例数量除以验收鱼净质量 A；保留原生原始数量与实例身份。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_receive_stock` <br> - 数量范围：每个 collect_seed_transport 实例的暂定未解决依据范围；用经审查前景依据替换 U_seed_transport_instance <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_seed_transport_instance <br> - 单位：t*km <br> - 基准：每 1 kg 参考流；独立实例范围，非跨实例共用上限 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_stocking_losses` | `receive_stock`; 输出; 废物流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：入笼前死亡与接收残余物送实际处理. 分开每种死鱼、包装或残余实例及实际处理去向；记录损失，不默认视为销售联产品。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg <br> - 数量规则：实际可归属 collect_stocking_losses 实例数量除以验收鱼净质量 A；保留原生原始数量与实例身份。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_receive_stock` <br> - 数量范围：每个 collect_stocking_losses 实例的暂定未解决依据范围；用经审查前景依据替换 U_stocking_losses_instance <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_stocking_losses_instance <br> - 单位：kg <br> - 基准：每 1 kg 参考流；独立实例范围，非跨实例共用上限 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_management_inputs` | `cage_growout`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际养殖管理物质. 有条件记录每种实际消毒剂、药物、氧气或清洁物质及配方和有效成分基准；不假定处理或剂量。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg <br> - 数量规则：实际可归属 collect_management_inputs 实例数量除以验收鱼净质量 A；保留原生原始数量与实例身份。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_cage_growout` <br> - 数量范围：每个 collect_management_inputs 实例的暂定未解决依据范围；用经审查前景依据替换 U_management_inputs_instance <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_management_inputs_instance <br> - 单位：kg <br> - 基准：每 1 kg 参考流；独立实例范围，非跨实例共用上限 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_growout_other_outputs` | `cage_growout`; 输出; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：网笼生产的其他预期销售输出. 有条件记录独立识别的活鱼销售或其他有意营销输出；保留物种/状态、接收方、净质量和分配，不为损失虚构销路。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg <br> - 数量规则：实际可归属 collect_growout_other_outputs 实例数量除以验收鱼净质量 A；保留原生原始数量与实例身份。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_cage_growout` <br> - 数量范围：每个 collect_growout_other_outputs 实例的暂定未解决依据范围；用经审查前景依据替换 U_growout_other_outputs_instance <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_growout_other_outputs_instance <br> - 单位：kg <br> - 基准：每 1 kg 参考流；独立实例范围，非跨实例共用上限 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_growout_collected_waste` | `cage_growout`; 输出; 废物流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：养成收集死鱼、残饵及清网残余物送处理. 每种实际收集物和处理去向分别记录；未收集的海洋释放不是处理转移。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg <br> - 数量规则：实际可归属 collect_growout_collected_waste 实例数量除以验收鱼净质量 A；保留原生原始数量与实例身份。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_cage_growout` <br> - 数量范围：每个 collect_growout_collected_waste 实例的暂定未解决依据范围；用经审查前景依据替换 U_growout_collected_waste_instance <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_growout_collected_waste_instance <br> - 单位：kg <br> - 基准：每 1 kg 参考流；独立实例范围，非跨实例共用上限 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_marine_nutrient_release` | `cage_growout`; 输出; 基本流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际营养及有机物质向海水释放. 按已确定物质/形态和海洋接收介质逐项记录；给出氮/磷/有机物基准、饲料成分、留存和释放途径；不将总水或未指明有机物绑定为固定污染物。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg <br> - 数量规则：实际可归属 collect_marine_nutrient_release 实例数量除以验收鱼净质量 A；保留原生原始数量与实例身份。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_cage_growout` <br> - 数量范围：每个 collect_marine_nutrient_release 实例的暂定未解决依据范围；用经审查前景依据替换 U_marine_nutrient_release_instance <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_marine_nutrient_release_instance <br> - 单位：kg <br> - 基准：每 1 kg 参考流；独立实例范围，非跨实例共用上限 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_harvest_collected_loss` | `crowd_harvest`; 输出; 废物流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：起捕收集死鱼与伴随残余物送处理. 记录每种目标损失/非目标残余物及实际处理；即使产品收集量为零也保留失败起捕作业。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg <br> - 数量规则：实际可归属 collect_harvest_collected_loss 实例数量除以验收鱼净质量 A；保留原生原始数量与实例身份。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_crowd_harvest` <br> - 数量范围：每个 collect_harvest_collected_loss 实例的暂定未解决依据范围；用经审查前景依据替换 U_harvest_collected_loss_instance <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_harvest_collected_loss_instance <br> - 单位：kg <br> - 基准：每 1 kg 参考流；独立实例范围，非跨实例共用上限 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_chill_added_substances` | `kill_chill`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：冷却浴实际添加气体或其他物质. 仅实际使用时记录物质/配方，包括实际观察到的二氧化碳；不强制添加二氧化碳，不作福利声明；保留碳源及溶解/释放部分。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg <br> - 数量规则：实际可归属 collect_chill_added_substances 实例数量除以验收鱼净质量 A；保留原生原始数量与实例身份。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_kill_chill` <br> - 数量范围：每个 collect_chill_added_substances 实例的暂定未解决依据范围；用经审查前景依据替换 U_chill_added_substances_instance <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_chill_added_substances_instance <br> - 单位：kg <br> - 基准：每 1 kg 参考流；独立实例范围，非跨实例共用上限 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_chill_treatment_transfers` | `kill_chill`; 输出; 废物流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：冷却拒收物及使用后浴液转送处理. 按去向分开拒收鱼和各浴液处理转移；处理负担只计一次；不得与直接排放重复计量。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg <br> - 数量规则：实际可归属 collect_chill_treatment_transfers 实例数量除以验收鱼净质量 A；保留原生原始数量与实例身份。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_kill_chill` <br> - 数量范围：每个 collect_chill_treatment_transfers 实例的暂定未解决依据范围；用经审查前景依据替换 U_chill_treatment_transfers_instance <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_chill_treatment_transfers_instance <br> - 单位：kg <br> - 基准：每 1 kg 参考流；独立实例范围，非跨实例共用上限 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_chill_direct_releases` | `kill_chill`; 输出; 基本流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：浴液载体水及物质实际排入已知环境. 分别记录实际载体水或确定污染物/气体实例及接收介质；水量平衡不自动构成废物或污染物。二氧化碳碳源已知时分开化石/生物源，未知则保留未解析。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg <br> - 数量规则：实际可归属 collect_chill_direct_releases 实例数量除以验收鱼净质量 A；保留原生原始数量与实例身份。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_kill_chill` <br> - 数量范围：每个 collect_chill_direct_releases 实例的暂定未解决依据范围；用经审查前景依据替换 U_chill_direct_releases_instance <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_chill_direct_releases_instance <br> - 单位：kg <br> - 基准：每 1 kg 参考流；独立实例范围，非跨实例共用上限 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_actual_sort_wash_inputs` | `sort_destination`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：分选实际供应清洗水和清洁剂. 仅实际清洗时记录每种供水或药剂实例；须给水源及有效/配方物质基准；直接取水另记。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg <br> - 数量规则：实际可归属 collect_actual_sort_wash_inputs 实例数量除以验收鱼净质量 A；保留原生原始数量与实例身份。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_sort_destination` <br> - 数量范围：每个 collect_actual_sort_wash_inputs 实例的暂定未解决依据范围；用经审查前景依据替换 U_actual_sort_wash_inputs_instance <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_actual_sort_wash_inputs_instance <br> - 单位：kg <br> - 基准：每 1 kg 参考流；独立实例范围，非跨实例共用上限 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_actual_sort_water_intake` | `sort_destination`; 输入; 基本流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：分选清洗实际直接取水. 有条件按水源记录实际水资源取用；同一水不得同时计入供应产品。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg <br> - 数量规则：实际可归属 collect_actual_sort_water_intake 实例数量除以验收鱼净质量 A；保留原生原始数量与实例身份。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_sort_destination` <br> - 数量范围：每个 collect_actual_sort_water_intake 实例的暂定未解决依据范围；用经审查前景依据替换 U_actual_sort_water_intake_instance <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_actual_sort_water_intake_instance <br> - 单位：kg <br> - 基准：每 1 kg 参考流；独立实例范围，非跨实例共用上限 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_other_sale_grades` | `sort_destination`; 输出; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：其他完整鱼预期销售等级与去向. 每个实际等级/去向独立记录状态、接收方及交接；降级销售鱼仍是预期输出，不是废物。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg <br> - 数量规则：实际可归属 collect_other_sale_grades 实例数量除以验收鱼净质量 A；保留原生原始数量与实例身份。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_sort_destination` <br> - 数量范围：每个 collect_other_sale_grades 实例的暂定未解决依据范围；用经审查前景依据替换 U_other_sale_grades_instance <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_other_sale_grades_instance <br> - 单位：kg <br> - 基准：每 1 kg 参考流；独立实例范围，非跨实例共用上限 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_sort_rejects` | `sort_destination`; 输出; 废物流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：未售分选拒收物与实际清洗残余物送处理. 拒收材料和去向独立于销售等级；实际清洗水/药剂在本节点按各自输入及物质/去向实例记录。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg <br> - 数量规则：实际可归属 collect_sort_rejects 实例数量除以验收鱼净质量 A；保留原生原始数量与实例身份。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_sort_destination` <br> - 数量范围：每个 collect_sort_rejects 实例的暂定未解决依据范围；用经审查前景依据替换 U_sort_rejects_instance <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_sort_rejects_instance <br> - 单位：kg <br> - 基准：每 1 kg 参考流；独立实例范围，非跨实例共用上限 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_actual_sort_water_release` | `sort_destination`; 输出; 基本流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：分选实际载体水和物质释放. 有条件分别记录实际载体水或独立确定的污染物实例及介质；送处理液体属于 collect_sort_rejects 废物；水量平衡不自动具有污染身份。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg <br> - 数量规则：实际可归属 collect_actual_sort_water_release 实例数量除以验收鱼净质量 A；保留原生原始数量与实例身份。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_sort_destination` <br> - 数量范围：每个 collect_actual_sort_water_release 实例的暂定未解决依据范围；用经审查前景依据替换 U_actual_sort_water_release_instance <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_actual_sort_water_release_instance <br> - 单位：kg <br> - 基准：每 1 kg 参考流；独立实例范围，非跨实例共用上限 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_packing_materials` | `pack_present`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际保护容器、衬垫、标签与包装冰. 每种实际材料/冰分别记录；保留皮重、复用次数与来源；称鱼时扣除全部呈现材料与水。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg <br> - 数量规则：实际可归属 collect_packing_materials 实例数量除以验收鱼净质量 A；保留原生原始数量与实例身份。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_pack_present` <br> - 数量范围：每个 collect_packing_materials 实例的暂定未解决依据范围；用经审查前景依据替换 U_packing_materials_instance <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_packing_materials_instance <br> - 单位：kg <br> - 基准：每 1 kg 参考流；独立实例范围，非跨实例共用上限 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_packing_rejects` | `pack_present`; 输出; 废物流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：包装废料、未售拒收鱼及实际使用后载体水送处理. 分开各包装/未售拒收鱼或实际送处理融水实例及去向；实际销售鱼等级归 presented_chilled_fish。复用退回物仍属服务存量，不按每次周转报废。送处理载体水不得同时计为直接环境释放。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg <br> - 数量规则：实际可归属 collect_packing_rejects 实例数量除以验收鱼净质量 A；保留原生原始数量与实例身份。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_pack_present` <br> - 数量范围：每个 collect_packing_rejects 实例的暂定未解决依据范围；用经审查前景依据替换 U_packing_rejects_instance <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_packing_rejects_instance <br> - 单位：kg <br> - 基准：每 1 kg 参考流；独立实例范围，非跨实例共用上限 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_packing_carrier_release` | `pack_present`; 输出; 基本流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：包装冰融化载体水及物质实际释放. 有条件逐项记录包装实际向观察接收介质释放的融水/载体水或明确污染物；不规定排放，不将普通水称为污染，不重复 collect_packing_rejects 中送处理液体。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg <br> - 数量规则：实际可归属 collect_packing_carrier_release 实例数量除以验收鱼净质量 A；保留原生原始数量与实例身份。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_pack_present` <br> - 数量范围：每个 collect_packing_carrier_release 实例的暂定未解决依据范围；用经审查前景依据替换 U_packing_carrier_release_instance <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_packing_carrier_release_instance <br> - 单位：kg <br> - 基准：每 1 kg 参考流；独立实例范围，非跨实例共用上限 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_delivery_freight` | `first_receipt`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：首次接收前实际冷藏鱼交付服务. 逐实际承运者/载重/路段记录，说明冷藏作业范围；仅计未以 shared_support 自营燃料/资产/排放表示的服务。 <br> - 流属性/单位：Transport work / t*km <br> - 数量规则：实际可归属 collect_delivery_freight 实例数量除以验收鱼净质量 A；保留原生原始数量与实例身份。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_first_receipt` <br> - 数量范围：每个 collect_delivery_freight 实例的暂定未解决依据范围；用经审查前景依据替换 U_delivery_freight_instance <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_delivery_freight_instance <br> - 单位：t*km <br> - 基准：每 1 kg 参考流；独立实例范围，非跨实例共用上限 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_delivery_resale` | `first_receipt`; 输出; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：交接前其他预期完整鱼再销售输出. 有条件记录实际改道或拒收后再销售批次，给出实际物种/状态、接收方、净质量及交接；从 accepted_chilled_seabream 和废物中排除，归属其负担并识别范围外状态。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg <br> - 数量规则：实际可归属 collect_delivery_resale 实例数量除以验收鱼净质量 A；保留原生原始数量与实例身份。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_first_receipt` <br> - 数量范围：每个 collect_delivery_resale 实例的暂定未解决依据范围；用经审查前景依据替换 U_delivery_resale_instance <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_delivery_resale_instance <br> - 单位：kg <br> - 基准：每 1 kg 参考流；独立实例范围，非跨实例共用上限 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_delivery_rejects` | `first_receipt`; 输出; 废物流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：交接前损失/拒收鱼、呈现残余物及使用后载体水送实际处理. 按实例保留拒收、退回、改道及实际处理去向，包括实际送处理融水。成功再销售归 collect_delivery_resale，不进入本废物卡或验收参考输出。送处理液体不同时记直接释放。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg <br> - 数量规则：实际可归属 collect_delivery_rejects 实例数量除以验收鱼净质量 A；保留原生原始数量与实例身份。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_first_receipt` <br> - 数量范围：每个 collect_delivery_rejects 实例的暂定未解决依据范围；用经审查前景依据替换 U_delivery_rejects_instance <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_delivery_rejects_instance <br> - 单位：kg <br> - 基准：每 1 kg 参考流；独立实例范围，非跨实例共用上限 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_delivery_carrier_release` | `first_receipt`; 输出; 基本流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：交付冰融化载体水及物质实际释放. 有条件逐项记录实物接收前载体水或明确污染物的实际释放、路段/暂存事件及接收介质；不强制排放或假定污染物。送处理液体归 collect_delivery_rejects。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg <br> - 数量规则：实际可归属 collect_delivery_carrier_release 实例数量除以验收鱼净质量 A；保留原生原始数量与实例身份。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_first_receipt` <br> - 数量范围：每个 collect_delivery_carrier_release 实例的暂定未解决依据范围；用经审查前景依据替换 U_delivery_carrier_release_instance <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_delivery_carrier_release_instance <br> - 单位：kg <br> - 基准：每 1 kg 参考流；独立实例范围，非跨实例共用上限 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_support_fuels` | `shared_support`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际船舶、车辆及固定设备各燃料. 每种实际燃料/载体与化石/生物混配实例单独交换，保留质量、热值和供应商上游范围；限自营作业。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg <br> - 数量规则：实际可归属 collect_support_fuels 实例数量除以验收鱼净质量 A；保留原生原始数量与实例身份。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_shared_support` <br> - 数量范围：每个 collect_support_fuels 实例的暂定未解决依据范围；用经审查前景依据替换 U_support_fuels_instance <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_support_fuels_instance <br> - 单位：kg <br> - 基准：每 1 kg 参考流；独立实例范围，非跨实例共用上限 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_support_assets` | `shared_support`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际归属网笼、网、系泊、船舶与设备材料供应. 按实际资产材料供应/替换实例用原生质量记录，给出有证据寿命、消费节点、闲置/失败作业、维护和最终去向；无通用寿命。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg <br> - 数量规则：实际可归属 collect_support_assets 实例数量除以验收鱼净质量 A；保留原生原始数量与实例身份。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_shared_support` <br> - 数量范围：每个 collect_support_assets 实例的暂定未解决依据范围；用经审查前景依据替换 U_support_assets_instance <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_support_assets_instance <br> - 单位：kg <br> - 基准：每 1 kg 参考流；独立实例范围，非跨实例共用上限 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_complete_support_services` | `shared_support`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际完整承包养殖支持服务. 每项实际完整购入服务按有据的原生服务属性与单位，如作业小时、功或实际受服务数量逐实例展开，不得强制全部为质量。确定所含燃料、公用工程、资产、维护与排放，从自营行中排除相同负担。 <br> - 流属性/单位：实际服务属性 / actual native service unit <br> - 数量规则：实际可归属 collect_complete_support_services 实例数量除以验收鱼净质量 A；保留原生原始数量与实例身份。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_shared_support` <br> - 数量范围：每个 collect_complete_support_services 实例的暂定未解决依据范围；用经审查前景依据替换 U_complete_support_services_instance <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_complete_support_services_instance <br> - 单位：actual native service unit <br> - 基准：每 1 kg 参考流；独立实例范围，非跨实例共用上限 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_support_waste` | `shared_support`; 输出; 废物流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际维护和退役废物送处理. 分别记录油、网、设备、清洁液等各废物及去向；说明回收责任，不给无依据替代抵扣。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg <br> - 数量规则：实际可归属 collect_support_waste 实例数量除以验收鱼净质量 A；保留原生原始数量与实例身份。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_shared_support` <br> - 数量范围：每个 collect_support_waste 实例的暂定未解决依据范围；用经审查前景依据替换 U_support_waste_instance <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_support_waste_instance <br> - 单位：kg <br> - 基准：每 1 kg 参考流；独立实例范围，非跨实例共用上限 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_support_other_releases` | `shared_support`; 输出; 基本流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际其他污染物与制冷剂向已知介质释放. 按实际明确物质/形态/粒径/制冷剂及接收介质逐项记录；采用实测或有据模型并说明因子边界与不确定性，不绑定未指明空气排放 UUID。 <br> - 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg <br> - 数量规则：实际可归属 collect_support_other_releases 实例数量除以验收鱼净质量 A；保留原生原始数量与实例身份。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_shared_support` <br> - 数量范围：每个 collect_support_other_releases 实例的暂定未解决依据范围；用经审查前景依据替换 U_support_other_releases_instance <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_support_other_releases_instance <br> - 单位：kg <br> - 基准：每 1 kg 参考流；独立实例范围，非跨实例共用上限 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `dq_logistics_water_balance` | 运输、服务和水/营养物平衡 | 运输实际载荷包括随行水、冰、包装及其他货物；空返或调位虽无产品载荷仍有活动负荷，须以实际燃料/距离/车辆服务及明确分配计入，不能以零吨公里消去。完整服务与其已覆盖燃料、材料、资产和直接排放不得重复计入。外部取水、供水产品、内部循环和实际返排水分别计量；内部循环不得再从外部取水中重复扣减。净营养物增量/滞留只用于独立平衡诊断，不自动成为负基本流、负排放或避免负荷。 | 实际载荷和车辆活动记录、服务覆盖、同批水/物质平衡与方法证据 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_reference | accepted_chilled_seabream | 要求正验收净质量 A、正确同批参考链接/名称、1 kg 最终量、全部限定信息及冰/水/皮重扣除；核实实际实物接收方和从未冷冻状态。 | |
| validate_route | all processes | 核查全部必需节点、网笼鱼群生产模式、独立起捕/冷却、实际包装启用/旁路及完整顺序交接。不得推定清洗、通用 CO2、零支持能耗或其他起捕方法。 | fao-seabream-2009 |
| validate_instances | all inventory rows | 实际实例均须匹配原生单位、独立 U 依据、节点所属协议及实际材料/物质/去向/介质；无解释缺数据或虚构数值上限使数据完整性不通过。 | |
| validate_outputs | all processes | 核对各预期等级/活鱼销售及交接、未售拒收/处理去向与直接释放；期末存量或同产品不得在不同交接点重复计算。 | |
| validate_period_support | shared_support; cage_growout | 核对鱼群/运行/期间分配、期初/期末存量、清洁/换批、更换/终止及闲置/失败作业。份额合计等于所拥有负担，完整购入服务范围排除重复投入/释放。 | |
| validate_environment | all elementary flows | 要求准确污染物或资源身份、基准和接收介质；碳源已知时分开化石和生物二氧化碳，未知则未解析。载体水不自动为污染，处理转移不是直接释放，未表征逃逸/栖息地影响仍须披露。 | |
| validate_projection | all processes | 对齐双语行/规则/协议标识、实际状态/属性/单位/范围、核实固定身份及标准投影。报告已执行/跳过核查、身份缺口、无据因子及不确定性；结构通过不证明外部身份或发布准备就绪。 | |
| `validate_atomic_completion` | 所有适用的逐流采集义务和最终交换 | 只有每项实际发生的交换均有独立原子卡及其自身的数量、属性/原生单位、采集或计算证据、范围/不确定性证据、归一化、实际去向和已验证UUID时，最终数据包才可完成并通过验证。未知身份、活动状态、数量、范围证据或去向会阻断完成；不得视为零、默认为旁路或靠省略义务通过。所有重要具体流须保留自身范围/不确定性证据采集责任；符号上限不是实证范围。 | |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 具体前景依据和身份审查之后的 secondary_dataset; background_dataset |
| downstream_use | 声明完整冷却鱼供应的前景数据包、process 与 lifecyclemodel 投影 |
| allowed_use | 匹配物种/路线/状态/交接点及报告期间，并披露代表性 |
| excluded_use | 其他分类群/路线；最终活鱼；去内脏/鱼片/熟制/冷冻/解冻鱼；可食肉换算；零售供应；福利/安全/合规认证 |
| required_metadata | 必需限定信息；鱼群/运行/期间；场址；首次实物接收方；实际净质量方法；全部上游边界；输出/去向；支持/期间分配；实际可选操作 |
| required_quality_disclosure | 来源适用性、历史路线局限、前景覆盖、暂定 U 依据、身份缺口、不确定性、分配敏感性及未表征生态影响 |
| update_trigger | 物种/路线/交接点/状态、饲料配方、冷却方法、实际包装、支持/服务责任、代表性期间、来源或身份依据发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| fao-seabream-2009 | official_guidance | Colloca F.; Cerasi S. FAO 2009. Sparus aurata cultured-species fact sheet. https://www.fao.org/fishery/docs/DOCUMENT/aquaculture/CulturedSpecies/file/en/en_giltheadseabr.htm | 购入幼鱼海笼路线、围集抄网起捕、冰水操作及环境途径的定性依据。不采用历史养殖数值及 CO2 福利论断。 |
| avramar-whole-fish | extension_guidance | AVRAMAR Products. https://avramar.eu/products/ | 生产者对希腊 Sparus aurata 完整生鲜鱼的表述；非具体养殖场前景证明或通用操作实践。 |
| un-cpc3-2025 | official_guidance | UN Statistics Division, CPC Version 3.0 explanatory notes, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅分类范围；语义 PCR 窄于 04292。 |
