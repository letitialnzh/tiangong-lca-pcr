---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.other-raw-milk-n-e-c
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他特定动物的全脂生乳

## 1. 适用范围

本规则适用于一个明确物种在实际农场或第一收集交接点销售的全脂生乳，前提是该物种在 CPC 3.0 中不属牛、水牛、绵羊、山羊和骆驼。马乳或驴乳仅当具体批次实测达到脂肪门槛时才可能适用；其通常低脂的乳不能作为 02299 代表产品。牦牛属牛，牦牛乳不适用。脱脂、部分脱脂、脂肪低于 CPC 排除阈值 3.5% 的乳，以及巴氏杀菌、发酵或制造乳制品均不适用。阈值是分类门槛，不是调整乳脂的指令。不得合并物种创造平均乳。

边界包含物种特定的泌乳畜群、独立挤乳、初次过滤验收、实际进行的冷却以及交接包装。幼畜吸食、拒收和可售乳分开。仅当第一收集站是声明交接点且中间运输和冷却均有记录时将其纳入；否则止于产乳农场。购入生乳保留独立上游数据集，不可冒充本场产乳。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.other-raw-milk-n-e-c` |
| classification_refs | CPC 3.0 `02299`，须先核对物种及全脂生乳状态 |
| covered_products | 一个未被排除物种的温态或冷却全脂生乳 |
| excluded_products | 牛（含牦牛）、水牛、绵羊、山羊、骆驼乳；低于 3.5% 脂肪或脱脂/部分脱脂乳；加工乳 |
| representative_product | 仅当批次实测脂肪至少 3.5% 且分类经核实时的全脂驯鹿生乳；并非跨物种默认值 |
| production_route | 物种特定饲养泌乳 → 物理挤乳 → 初次验收 → 可选冷却 → 卫生交接 |
| market_state | 实际初始交接点净重验收的液态全脂生乳 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 一个明确合格物种的验收全脂生乳 |
| How much | 扣除容器皮重后的净乳 1 kg |
| How well | 记录物种、检测脂肪和固形物、生乳状态、温度、批次、验收及来源 |
| How long or cycle | 明确泌乳/报告期，替换、干乳和淘汰阶段仅归属一次 |
| reference_flow_link | 唯一最终 `gate_milk` 输出；先前乳状态是内部转移，不重复出售 |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 已声明物种在实际初始交接点的全脂生乳 |
| Reference flow property | Mass |
| Reference unit group | Mass |
| Reference unit | kg |
| Required qualifiers | 准确物种；分类决定；全脂生乳状态；实测脂肪/固形物；交接点；温度；期间；幼畜吸食量；验收/拒收净重；皮重 |

尚无与物种、状态、交接点完全相符的已核实参考 UUID；候选稿不能凭此生成具体交换。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `net_mass` | 参考乳 | Mass | kg | 按扣除皮重和拒收的称量净乳归一化，不用通用密度由升数推算质量。 |
| `composition` | 各批次 | 实测脂肪和固形物 | 报告质量分数 | 保留采样依据及温度；按实际批次判断 CPC 排除条件，不进行标准化。 |
| `phase_link` | 畜群 | 质量和时间 | kg、animal-days | 将繁殖、替换、泌乳、干乳、淘汰关联至报告期；吸食与挤出乳分开。 |
| `volume_to_mass` | 体积记录 | 批次适用的实测密度 | kg/L | 按实测温度换算或直接称重，并披露不确定性。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 已识别合格物种畜群、购入替换动物及饲料来源进入有记录的阶段 |
| starting_condition_role | 购入动物和饲料的上游负担仅进入一次；前景始于有记录的畜群管理 |
| product_classification_scope | 物种限定全脂生乳；转出的活畜、纤维和出售粪肥为不同产品身份 |
| recursive_input_rule | 同类购入生乳需要独立上游数据集及质量台账，不可重命名为本群产乳。 |
| upstream_dataset_requirement | 购入替换动物、饲料、公用服务及包装的相容数据集，不重复计入自产饲料。 |
| disclosure | 物种与 CPC 门槛、饲养方式、阶段、实际冷却、乳平衡、交接点、联产品分配及共用服务 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `species_gate` | 全部 | 核实来源不属牛（含牦牛）、水牛、绵羊、山羊和骆驼，且为全脂生乳，否则本 PCR 不适用。 | `un-cpc-3-2025` |
| `capture_once` | 畜群/挤乳 | 畜群泌乳与物理挤乳分开；总挤出乳只在挤乳节点出现，吸食乳只在畜群台账。 | `fao-other-dairy-animals` |
| `first_acceptance` | 初次调理 | 只记录实际过滤、采样与拒收；不虚构标准化或巴氏杀菌。 | `fao-dairy-hygiene` |
| `cooling_gate` | 冷却 | 冷却后仍为生乳，且只在实际发生时纳入；不含后续冷链。 | `fao-milk-preservation` |
| `handover_gate` | 交接 | 计入交接前实际容器及复用，不含交接后配送和消费者包装。 | `fao-dairy-hygiene` |
| `shared_services` | 全部 | 共用挤乳室、冷却罐、清洗及计量负担按使用节点和期间仅分配一次。 | `fao-dairy-hygiene` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `herd` | 合格物种畜群 | required | 泌乳与替换动物 | 生物生产及联产品/期间台账，不是物理挤乳 | animal-days |
| `milking` | 物理挤乳 | required | 每次挤乳 | 独立计量总乳和损失 | kg 总乳 |
| `conditioning` | 生乳初次验收 | required | 实际过滤、采样和拒收 | 挤出乳转为验收生乳 | kg 验收乳 |
| `cooling` | 生乳冷却 | conditional | 交接前实际发生 | 不经热处理稳定生乳 | kg 冷却乳 |
| `presentation` | 卫生交接 | required | 实际容器与净销售 | 转出唯一参考输出 | kg 可售净乳 |

温态乳绕过 `cooling`，不虚构冷却能源；中间乳为节点间转移，不是第二次最终销售。

### 过程：合格物种畜群（`herd`）

#### 输入

##### 产品流

###### 物种适宜饲料和牧草（`feed`）

区分外购、自种和放牧生物质，使用实测干物质，不套用牛日粮。

- 选定流：声明物种的饲料与牧草
- 流属性/单位：Mass / kg dry matter
- 数量规则：按动物日记录饲料台账和有依据的放牧摄入。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 验收乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_herd`
- 数量范围：暂定饲料 QA 筛查，非默认日粮
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg dry matter
  - 基准：每 kg 验收乳，以台账替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 畜群供水（`herd_water`）

只计饮水和管理用水，不含降雨或饲料水。实际用水功能和具体交换由畜群记录决定，因此此总括卡推迟选择组。

- 选定流：畜群供水
- 流属性/单位：Mass / kg
- 数量规则：只归于畜群的水表或交付记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 验收乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_herd`
- 数量范围：暂定供水 QA 筛查，非默认用水量
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg
  - 基准：每 kg 验收乳，以水表替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 购入替换动物（`replacements`）

只计有上游数据集的外购动物，自留幼畜仍属内部。

- 选定流：声明物种的购入替换动物
- 流属性/单位：Number / head
- 数量规则：按年龄和期间记录进入事件。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 验收乳，同时保留畜群报告期追溯事件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_herd`
- 数量范围：暂定替换事件 QA 筛查，非替换率
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：head
  - 基准：每 kg 验收乳，来自畜群期间真实事件
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 出售幼畜或淘汰动物（`animals_sold`）

只包括实际独立转出，不包括自留替换。

- 选定流：声明物种的出售活畜
- 流属性/单位：Number / head
- 数量规则：按阶段记录销售台账和交付去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 验收乳，同时保留畜群报告期追溯事件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_herd`
- 数量范围：暂定销售事件 QA 筛查，非产率
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：head
  - 基准：每 kg 验收乳，来自畜群期间真实事件
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 独立出售的粪肥（`manure_sold`）

仅当粪肥作为独立材料在有记录交接点实际出售时才用产品身份；否则保持内部材料或废物。同一质量不得又计入 `manure_waste`。

- 选定流：声明物种畜群出售的粪肥
- 流属性/单位：Mass / kg wet
- 数量规则：单独称量并保留买方/用途证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 验收乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_herd`
- 数量范围：暂定出售粪肥 QA 筛查，非产率
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg wet
  - 基准：每 kg 验收乳，以实际出售质量为准
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 收集未出售粪肥（`manure_waste`）

记录废物去向；放牧沉积和单独销售的粪肥不在此卡。

- 选定流：需废物处理的收集粪肥
- 流属性/单位：Mass / kg wet
- 数量规则：按去向称量离场废粪肥。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 验收乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_herd`
- 数量范围：暂定粪肥 QA 筛查，非产率
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg wet
  - 基准：每 kg 验收乳，以实测替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 排入空气的肠道甲烷（`enteric_ch4`）

使用实测或有物种和日粮依据的因子，不自动借用牛因子。

- 选定流：声明物种肠道发酵排入空气的甲烷
- 流属性/单位：Mass / kg CH4
- 数量规则：核实因子乘动物日或直接测量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 验收乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_herd`
- 数量范围：暂定排放 QA 筛查，非通用因子
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg CH4
  - 基准：每 kg 验收乳，以有据估计替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：物理挤乳（`milking`）

#### 输入

##### 产品流

###### 挤乳设备能源（`milking_energy`）

只计物理挤乳能源，与冷却及共用房间服务分开。

- 选定流：挤乳用能源载体
- 流属性/单位：Energy / kWh 或实际载体单位
- 数量规则：按实际挤乳时段分配表计。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 挤出总乳
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milking`
- 数量范围：暂定挤乳能源 QA 筛查，非默认能耗
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kWh
  - 基准：每 kg 挤出总乳，以表计为准
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 挤出总生乳（`gross_milk`）

验收前从动物挤出的实测乳，不包括幼畜吸食乳。

- 选定流：声明物种的挤出全脂生乳
- 流属性/单位：Mass / kg
- 数量规则：每批仅称重一次。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 挤出总乳
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milking`
- 数量范围：挤乳批次恒等式
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：每 kg 挤出总乳
  - 基准类型：过程输出（`process_output`）
  - 证据类型：采集记录（`collected_record`）

### 过程：生乳初次验收（`conditioning`）

#### 输入

##### 产品流

###### 进入初次调理的挤出乳（`condition_input`）

同一挤出批次只转入一次；洒漏在批次平衡中核算。

- 选定流：验收前收集的全脂生乳
- 流属性/单位：Mass / kg
- 数量规则：称量扣除挤乳洒漏后的输入批次。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 验收乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning`
- 数量范围：暂定验收输入 QA 筛查，非损失率
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：100
  - 单位：kg
  - 基准：每 kg 验收乳，按实际拒收确定
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 初次调理用水（`condition_water`）

计入实际过滤设备或卫生用水，不作乳配料。

- 选定流：生乳调理过程用水
- 流属性/单位：Mass / kg
- 数量规则：不含挤乳用水的调理表计。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 验收乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning`
- 数量范围：暂定调理用水 QA 筛查，非默认水量
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 kg 验收乳，以表计为准
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 验收温态生乳（`accepted_warm`）

作为内部状态进入冷却或直接交接，不作第二次销售。

- 选定流：声明物种的验收温态全脂生乳
- 流属性/单位：Mass / kg
- 数量规则：输入减去记录的拒收和采样损失。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 验收温态乳
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning`
- 数量范围：验收温态乳恒等式
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：每 kg 验收温态乳
  - 基准类型：过程输出（`process_output`）
  - 证据类型：采集记录（`collected_record`）

##### 废物流

###### 初检拒收乳（`condition_reject`）

失败批次和去向只记录一次，不混入验收全脂乳。

- 选定流：初次调理拒收生乳
- 流属性/单位：Mass / kg
- 数量规则：按原因和去向称量拒收。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 验收乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning`
- 数量范围：暂定拒收 QA 筛查，非默认损失因子
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 kg 验收乳，按真实拒收测量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：生乳冷却（`cooling`）

#### 输入

##### 产品流

###### 送冷却的温态验收乳（`cool_input`）

仅实际冷却份额进入；温态直交乳绕过本节点。

- 选定流：声明物种的验收温态全脂生乳
- 流属性/单位：Mass / kg
- 数量规则：按批称量冷却罐输入。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 冷却乳
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cooling`
- 数量范围：暂定冷却平衡 QA 筛查，非损失率
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：100
  - 单位：kg
  - 基准：每 kg 冷却输出，损失实测
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 冷却能源（`cool_energy`）

只计实际冷却期间的制冷表计，不含交接后配送。

- 选定流：全脂生乳冷却能源载体
- 流属性/单位：Energy / kWh 或实际载体单位
- 数量规则：按真实批次和时间计量或分配能源。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 冷却乳
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cooling`
- 数量范围：暂定冷却能源 QA 筛查，非默认能耗
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kWh
  - 基准：每 kg 冷却乳，以表计为准
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 冷却全脂生乳（`cooled_milk`）

冷却后仍为生乳，只内部转交接，不重复出售。

- 选定流：声明物种的冷却全脂生乳
- 流属性/单位：Mass / kg
- 数量规则：称量罐输出并计量损失。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 冷却乳
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cooling`
- 数量范围：冷却输出恒等式
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：每 kg 冷却输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：采集记录（`collected_record`）

### 过程：卫生交接（`presentation`）

#### 输入

##### 产品流

###### 交接前温态或冷却验收乳（`gate_input`）

按批合计互斥的温态直交和冷却路线，不混物种或重复记内部状态。

- 选定流：交接前声明物种的验收全脂生乳
- 流属性/单位：Mass / kg
- 数量规则：合计互斥的温态直交及冷却转移质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 可售净乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gate`
- 数量范围：暂定交接平衡 QA 筛查，非损失率
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：100
  - 单位：kg
  - 基准：每 kg 可售净乳，按实测拒收确定
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 交接容器或内衬（`container`）

记录交接前容器、内衬、封口及复用次数。

- 选定流：生乳卫生交接容器或内衬
- 流属性/单位：Mass / kg material 或有据服务量
- 数量规则：称重一次性材料，或按有据次数分配复用服务。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 可售净乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gate`
- 数量范围：暂定包装 QA 筛查，非默认包装量
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg material
  - 基准：每 kg 可售净乳，复用服务单独换算
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 实际交接点验收净乳（`gate_milk`）

唯一参考销售为声明物种的全脂生乳净重，不含包装皮重。

- 选定流：声明物种在实际初始交接点的全脂生乳
- 流属性/单位：Mass / kg
- 数量规则：连同物种、脂肪、温度及交接证据称量可售净乳。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 参考乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gate`
- 数量范围：参考恒等式
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：每 kg 净参考乳
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：采集记录（`collected_record`）

## 7. 分配与联产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `actual_outputs` | 畜群与乳 | 按真实交接列明乳和实际出售的活畜、纤维、粪肥或其他物种特定联产品；区分残余与废物，不因生物可能性虚构联产品。 | `fao-other-dairy-animals` |
| `joint_herd` | 不可分饲养活动 | 首先按因果使用拆分表计服务；不可分畜群负担有依据时用本地物理因果分配，否则披露期间一致的经济分配和敏感性。不默认全归乳或将淘汰动物设零。 | `fao-other-dairy-animals` |
| `offspring_milk` | 吸食 | 幼畜吸食乳留在畜群/幼畜台账，不是可售挤出乳或额外产品。 | `fao-other-dairy-animals` |
| `phase_once` | 替换/干乳/泌乳/淘汰 | 输入、输出和资产关联阶段期间，替换负担仅分配一次。 | `fao-other-dairy-animals` |
| `asset_once` | 房间/罐/表计/清洗 | 依表计、使用时间或披露的处理量份额将共用服务仅一次分配给实际节点与期间。 | `fao-dairy-hygiene` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_herd` | `herd` | 饲料、水、动物、粪肥、甲烷 | 畜群与供应台账 | 物种、动物编号、阶段日期、动物日、饲料干重、水、购入替换、吸食乳、出售动物、粪肥、有据 CH4 因子 | 对账畜群登记、发票和表计 | head、days、kg | 事件及每月 | 全泌乳/替换 | 产乳畜群 | 按物种/阶段求和且只归属一次 | 发票、校准和因子来源 |
| `cp_milking` | `milking` | 挤出乳和能源 | 挤乳批次 | 批号、总重、洒漏、吸食依据、挤乳能源 | 批次称重和表计 | kg、kWh | 每批 | 所有挤乳 | 挤乳站 | 对账总乳和转移 | 秤校准及批次记录 |
| `cp_conditioning` | `conditioning` | 生乳输入、验收、拒收、用水 | 批次验收 | 输入、采样损失、拒收、验收、脂肪/固形物、生乳状态、水 | 称重和采样 | kg、质量分数 | 每批 | 所有批次 | 初次调理站 | 按批平衡 | 实验室、秤和拒收记录 |
| `cp_cooling` | `cooling` | 温态输入、冷却输出、能源 | 罐体表计 | 批次、前后质量、时间、温度、能源 | 称重及表计 | kg、°C、kWh | 冷却批 | 实际冷却 | 声明罐体 | 输入减损失等于输出 | 表计/温度计校准 |
| `cp_gate` | `presentation` | 净乳与容器 | 交接记录 | 批次、物种、净乳、皮重、脂肪、温度、交接点、包装质量/复用、损失 | 净重称量与容器检查 | kg、°C | 每次销售 | 所有参考销售 | 农场/第一收集交接点 | 只计验收净重 | 签字交接和实验室记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `lot_balance` | 乳路线 | 挤出 = 洒漏 + 调理输入；调理输入 = 验收 + 拒收 + 采样损失；温态直转 + 冷却转出 = 交接输入；交接输入 = 净销售 + 有记录的损失。 | 校准批次质量 | 平衡净 kg | `fao-dairy-hygiene` |
| `feed_dry` | 饲料 | 湿饲料只按实测干物质比例换算；不套用通用日粮或产量。 | 饲料质量和样品 | 每 kg 净乳干重 kg | `fao-other-dairy-animals` |
| `shared_split` | 设施 | 一项资产/表计负担按节点及期间的真实使用份额分配，份额和为一。 | 表计/服务台账 | 不重复节点负担 | `fao-dairy-hygiene` |
| `volume_mass` | 升数记录 | 乳 kg = L × 批次及温度适用的实测密度；否则直接称重。 | L、密度、温度 | 乳 kg | `fao-dairy-hygiene` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `species_identity` | 参考 | 必须有准确物种、全脂生乳状态和脂肪门槛检查。 | 分类/批次和实验室记录 |
| `milk_reconciliation` | 所有节点 | 批次转移、拒收、幼畜吸食及皮重各自独立。 | 秤、批次及交接记录 |
| `period_completeness` | 畜群 | 动物日及替换/干乳/泌乳/淘汰覆盖声明期间。 | 完整畜群登记 |
| `shared_trace` | 基础设施 | 列明使用者、期间及份额，每项共同负担仅入账一次。 | 表计/服务记录 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `verify_species` | 参考 | 拒绝牛（含牦牛）、水牛、绵羊、山羊、骆驼及未识别物种乳。 | `un-cpc-3-2025` |
| `verify_state` | 参考 | 拒绝低于 3.5% 脂肪、脱脂/部分脱脂、巴氏杀菌、发酵或制造乳；仅冷却可保留。 | `un-cpc-3-2025` |
| `verify_mass` | 所有乳节点 | 一个物理挤乳、内部转移及一个最终净销售平衡；不纳入吸食、拒收和皮重。 | `fao-dairy-hygiene` |
| `verify_attribution` | 畜群/设施 | 每项真实联产品交接、替换期间和共用表计仅归属一次。 | `fao-other-dairy-animals` |
| `verify_binding` | 交换生成 | 未核实 UUID 不得成为最终 TIDAS 交换；核对类型、物种/状态/交接点、属性/单位和支持行。 |  |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 物种特定全脂生乳前景包，原始记录和身份未核实前保持候选 |
| downstream_use | `secondary_dataset`；仅在来源及代表性审查后可作 `background_dataset` |
| allowed_use | 一个合格物种在声明初始交接点的全脂生乳 |
| excluded_use | 跨物种平均、被排除物种、加工/低脂乳、无记录的收集链 |
| required_metadata | 物种/CPC 核查、地点/期间、脂肪/采样/温度、实际交接点、净重/拒收/吸食、必要密度、联产品、分配及供应来源 |
| required_quality_disclosure | 实测与估算字段、采样/校准覆盖、未解析 UUID 和共用服务不确定性 |
| update_trigger | 物种分类、产品状态、交接点、路线、已核实 UUID 或重要原始数据改变 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | official_guidance | [UN CPC 3.0 解释性说明](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf)及[02299 详情](https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/02299) | 物种、生乳身份和排除 |
| `fao-other-dairy-animals` | official_guidance | [FAO 其他乳用动物](https://www.fao.org/dairy-production-products/dairy/other-animals/en) | 物种依赖的饲养泌乳背景，不替代 CPC 分类 |
| `fao-milk-preservation` | official_guidance | [FAO 乳保藏](https://www.fao.org/dairy-production-products/processing/milk-preservation/en) | 冷却和生乳路线区分 |
| `fao-dairy-hygiene` | official_guidance | [FAO/Codex 乳卫生](https://www.fao.org/4/j2308e/j2308e02.htm) | 收集、处理和批次追踪 |
| `fao-milk-composition-2013` | official_guidance | [FAO《人类营养中的乳及乳制品》(2013)，第 3 章](https://www.fao.org/4/i3396e/i3396e.pdf) | 驯鹿乳高脂示例、马/驴乳低脂警示；实际批次仍需实测 |
