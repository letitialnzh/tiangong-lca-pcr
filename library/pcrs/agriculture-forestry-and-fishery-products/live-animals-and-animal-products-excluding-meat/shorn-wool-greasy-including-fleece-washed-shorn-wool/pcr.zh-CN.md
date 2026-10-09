---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.shorn-wool-greasy-including-fleece-washed-shorn-wool
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 生产农场门口的剪取原毛

## 1. 范围与适用性

本规则覆盖从活羊/羔羊身上剪取并在生产农场门口移交的油脂未脱除原毛。可选的“羊体洗毛”必须在剪毛前、羊毛仍长在活羊身上时进行。剪后洗毛、脱脂、制条、屠宰毛皮拔毛，以及山羊或骆驼科动物毛均不属于本范围。CPC 02941 名称结合 WCO 第 51 章对 sheep/lamb wool 与其他细动物毛的区分解释（`un-cpc-2025`；`wco-hs-2017`）。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.shorn-wool-greasy-including-fleece-washed-shorn-wool |
| classification_refs | CPC 3.0 02941；exact 关系已接受，决策记录见 `docs/adr/cpc-02941.md`；分类接受不代表方法学已具备发布条件 |
| covered_products | 活羊/羔羊剪取油脂原毛，包括剪前在羊体上洗过的羊毛 |
| excluded_products | 拔取毛、山羊/骆驼科动物毛、剪后洗净毛、毛条与纱线 |
| representative_product | 生产农场内分拣、打包的未洗剪取原毛 |
| production_route | 管理羊群 → 可选羊体洗毛 → 剪毛 → 晾置和剔边 → 分级 → 打包与农场交付；每批羊毛洗/未洗路线互斥，洗毛路线单独记录水、废水和晾干 |
| market_state | 未脱脂原毛；记录水分、植物杂质、等级和包装状态 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 生产农场门口交付的剪取油脂羊毛 |
| How much | 扣除包装皮重后的 1 kg |
| How well | 声明羊品种、未洗或羊体洗毛状态、水分与等级；非剪后洗净毛 |
| How long or cycle | 声明羊群年度和剪毛事件，并归属此前饲养年度 |
| reference_flow_link | `farm_wool` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 生产农场门口剪取油脂羊毛 |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 羊/羔羊品种与群组；农场；羊群年度；剪毛日期；未洗或羊体洗毛；水分；植物杂质；等级；净包重；农场交付 |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `net_greasy_mass` | 羊毛输出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 以扣包皮重的原毛现状质量计量，不能代用净毛得率（`iwto-wool-lca-2016`）。 |
| `moisture_state` | 羊毛 | 质量分数 | % | 记录水分测试方法、日期和干湿基；羊体洗毛并非工业洗净毛。 |
| `flock_period` | 羊群活动 | 原活动属性 | 原单位 | 先按羊群/群组与年度归属事件，再按 kg 归一。 |
| `inventory_reference_normalization` | 所有清单行 | 实际流属性 | 每参考流的交换单位 | 下方清单和采集汇总字段表示每个声明参考流的最终数量。保留全部原始采集记录、原分母限定信息、路线及期间分层、单位换算和分配要求。对每项流，先依原有规则取得以其自身分子单位表示的可归属数量，再除以同一范围的实测合格参考产出数量，并乘以声明参考数量。不得混合物种、状态、交付门或不相容路线；内部移交及共享负担只计一次。合格产出分母缺失、为零或不可追溯时，属于阻断性数据质量问题。暂定 QA 范围仍使用其明确声明的基准，不能视为换算因子或生产默认值。 这些数量是最终前景数据包的贡献量，不替代阶段定量参考或阶段原生单位过程数据集；阶段记录单独保留。归一化数量 = 可归属原始数量 × 声明参考数量 / 实测合格最终参考产出数量。归一化恰执行一次。 |
| `stage_throughput_linkage` | 阶段记录及最终数据包贡献 | 实际流属性及其原始基准 | 保留原生分子及阶段分母单位 | 保留原始批次、事件、群组、期间及阶段分母与单位。使用实测阶段数量 Q_stage 和有依据的归属关系重建可归属分子 A，再作最终归一化。若报告数量 a_B 对应明确阶段基准 B_stage（例如 1000 kg），则 A = a_B × Q_stage / B_stage。若 r_stage 已是交换单位／阶段单位的单位强度，则改用 A = r_stage × Q_stage，不再次除以 B_stage。可归属原始总量直接使用。最终贡献 = A × 声明参考数量 / 实测合格最终产出。明确换算相容单位，每项归属／分配份额恰应用一次；不得将基准数量下的报告用量或单位强度当成原始总量。阶段移交、损失、拒收、库存、共享服务及分配必须关联同一实际路线、期间和最终产出分层。1000 kg 基准仍明确保留 1000 kg。不得假设单位产率、鲜干质量相同、个体质量相同、剂量质量等价或交付门可互换。关联缺失、单位换算无依据、分母为零或分配不可追溯时，阻断数据包生产。阶段原生数据集保留自身阶段参考；数据包贡献为单独投影。 |

## 5. 系统边界

纳入管理羊群、饲草和牧地、粪污、可选剪前羊体洗毛、剪毛、农场晾置/剔边、分级、打包与生产农场交付。外购羊、饲料、能源、水、肥料和包装的上游数据集只计一次。跨年度追踪繁育、更新、淘汰和共享设施。边界止于农场交付，不包括拍卖、农场后运输、剪后工业洗毛、提取羊毛脂及纺织制造（`iwto-wool-lca-2016`）。

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 已知年龄、来源、期初存栏和继承负担的管理羊/羔羊群 |
| starting_condition_role | 羊群期初存量，不是零负担动物 |
| product_classification_scope | 仅剪取油脂羊毛 |
| recursive_input_rule | 外购原毛若进入打包，应另列同类别投入并链接上游，不得当作本农场新长出的羊毛 |
| upstream_dataset_requirement | 穿过边界时的外购羊、饲料、养分、能源、水和包装数据集 |
| disclosure | 品种、农场、年度、洗毛路线、剪取与等级质量平衡、活羊/粪污联产品和归属方法 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `farm_gate_limit` | 全部节点 | 止于油脂原毛合格毛包交付；不含剪后洗毛与后续物流。 | `un-cpc-2025`; `iwto-wool-lca-2016` |
| `wash_gate` | 可选洗毛 | 在活羊身上且剪毛前清洗；记录水、废水及晾干，输出仍为原毛。 | `wco-hs-2017` |
| `route_delta` | 洗/未洗路线 | 两路线共享羊群饲养；一批毛只能走一路。洗毛增加独立节点及清单，不重复归属。 | `iwto-wool-lca-2016` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `flock` | 管理羊群 | required | 全部路线 | 生物性毛发生长与粪污 | 羊群年度和群组记录 |
| `fleece_wash` | 羊体洗毛 | conditional | 活羊剪前洗毛 | 替代路线增量 | 洗毛事件 |
| `shearing` | 活羊剪毛 | required | 全部路线 | 独立采毛 | 剪毛事件 |
| `conditioning` | 农场晾置与剔边 | required | 剪毛之后 | 非工业洗毛的初级整理 | 质量平衡 |
| `grading` | 等级与去向分拣 | required | 合格和拒收状态 | 分级交接 | 等级质量 |
| `baling` | 农场打包与交付 | required | 合格原毛 | 呈现与交付门口 | 净包重 |

### 过程：管理羊群（`flock`）

#### 输入

##### 产品流

###### 饲料及牧草摄取（`feed`）

按群组、饲料种类、干物质和年度量化外购饲料与放牧；自有牧地饲料生产仅链接一次。

分母与范围要求：按羊群年度归属后每 kg 原毛

原始数量及计算要求：由购买、牧草和存货记录计算摄入 原始采集分母类型：reference_flow。

- 选定流：按实际身份确定的羊饲料与放牧生物质
- 流属性/单位：Mass / kg 干物质
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_flock_feed`
- 来源：`iwto-wool-lca-2016`
- 数量范围：暂定饲料筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg 干物质/kg 原毛
  - 基准：宽泛初筛，以羊群记录替代
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 饮水及饲养用水（`flock_water`）

按用途和来源区分饮水与清洁用水，具体流由记录展开。

分母与范围要求：归属后每 kg 原毛

原始数量及计算要求：按用途及年度抄表或记载取水量 原始采集分母类型：reference_flow。

- 选定流：羊群运营供水
- 流属性/单位：Volume / m3
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_water_energy`
- 数量范围：暂定羊群用水筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：m3/kg 原毛
  - 基准：宽泛用水初筛
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 牧地养分投入（`nutrient_input`）

自有牧地生产纳入边界时，以一张整合卡涵盖矿物与有机肥，并按实际产品及氮磷组成展开。

分母与范围要求：地块归属后每 kg 原毛

原始数量及计算要求：按产品、养分、地块年度记录施用 原始采集分母类型：reference_flow。

- 选定流：农业养分供应
- 流属性/单位：Mass / kg 产品及 kg N/P
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_flock_feed`
- 数量范围：暂定养分产品筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg 产品/kg 原毛
  - 基准：允许零投入的宽泛初筛
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 羊群能源载体（`flock_energy`）

按用途和服务年度从电表/燃料记录展开载体，含共用羊舍和粪污设备。

分母与范围要求：归属后每 kg 原毛

原始数量及计算要求：按载体及年度记录电表和燃料 原始采集分母类型：reference_flow。

- 选定流：羊群运营能源供应
- 流属性/单位：Energy 或载体量 / kWh、MJ、L 或 kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_water_energy`
- 数量范围：暂定能源筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：kWh 当量/kg 原毛
  - 基准：宽泛跨载体初筛，保留原单位
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 羊群移交的活羊（`live_sheep`）

记录出售或淘汰羊的头数、活重、去向；不能与另一个活羊数据集重复承担全部负担。

分母与范围要求：归属后每 kg 原毛

原始数量及计算要求：按群组和日期计净移交量 原始采集分母类型：reference_flow。

- 选定流：按实际群组与门口确定的活羊
- 流属性/单位：Mass 与数量 / kg 与头
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_flock_outputs`
- 来源：`iwto-wool-lca-2016`
- 数量范围：暂定活羊输出筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg 活羊/kg 原毛
  - 基准：宽泛联产品完整性筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 出口粪肥（`manure_export`）

仅独立转移且有生产用途的粪肥作为联产品；否则仍归于废物管理。

分母与范围要求：归属后每 kg 原毛

原始数量及计算要求：扣除场内使用及库存变动后的净转移量 原始采集分母类型：reference_flow。

- 选定流：按真实干湿状态确定的羊粪肥
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure`
- 来源：`ipcc-livestock-2019`
- 数量范围：暂定出口粪肥筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：kg 湿粪/kg 原毛
  - 基准：宽泛产品状态筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 肠道生物源甲烷入空气（`enteric_ch4`）

按羊群、日粮和年度核算肠道甲烷；不合并粪污甲烷。

分母与范围要求：归属后每 kg 原毛

原始数量及计算要求：按声明的 IPCC 层级处理群组年度活动 原始采集分母类型：reference_flow。

- 选定流：生物源甲烷入空气 `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 流属性/单位：Mass / kg CH4
- 绑定：固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure`
- 来源：`ipcc-livestock-2019`
- 数量范围：暂定肠道甲烷筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg CH4/kg 原毛
  - 基准：宽泛路径筛查，不是排放因子
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 粪污氧化亚氮入空气（`manure_n2o`）

报告直接粪污管理 N2O；适用时将田间土壤和间接路径另列。

分母与范围要求：归属后每 kg 原毛

原始数量及计算要求：排泄 N × 管理份额 × 声明因子及 N 到 N2O 换算 原始采集分母类型：reference_flow。

- 选定流：氧化亚氮入空气 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：Mass / kg N2O
- 绑定：固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure`
- 来源：`ipcc-livestock-2019`
- 数量范围：暂定粪污 N2O 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg N2O/kg 原毛
  - 基准：宽泛路径筛查，不是因子
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 粪污氨入空气（`manure_nh3`）

按有记录的储存或施用路径计 NH3，并核对氮平衡。

分母与范围要求：归属后每 kg 原毛

原始数量及计算要求：粪污 N × 记录的挥发计算方法 原始采集分母类型：reference_flow。

- 选定流：氨入空气 `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位：Mass / kg NH3
- 绑定：固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure`
- 来源：`ipcc-livestock-2019`
- 数量范围：暂定氨筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg NH3/kg 原毛
  - 基准：宽泛路径筛查，不是因子
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：羊体洗毛（`fleece_wash`）

#### 输入

##### 产品流

###### 剪前羊体洗毛用水（`wash_water`）

仅在活羊身上用水，记录水源、收集或排放去向及洗毛事件。

分母与范围要求：每 kg 羊体洗毛原毛

原始数量及计算要求：按事件计量或估算 原始采集分母类型：process_output。

- 选定流：羊体洗毛供水
- 流属性/单位：Volume / m3
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_wash_shear`
- 数量范围：暂定羊体洗毛用水筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：m3/kg 羊体洗毛原毛
  - 基准：仅洗毛路线的筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 废物流

###### 收集的洗毛废水（`wash_effluent`）

收集时记录体积和接收方；直接环境排放须按介质建具体基本流，不能猜测废物流 UUID。

分母与范围要求：每 kg 羊体洗毛原毛

原始数量及计算要求：按事件测得的收集出水 原始采集分母类型：process_output。

- 选定流：收集的羊体洗毛废水
- 流属性/单位：Volume / m3
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_wash_shear`
- 数量范围：暂定废水筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：m3/kg 羊体洗毛原毛
  - 基准：未收集废水时可为零
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：活羊剪毛（`shearing`）

剪毛是独立采集：从活羊身上取下羊毛进入农场整理，而羊仍属于羊群。

#### 输入

##### 产品流

###### 剪毛设备能源（`shear_energy`）

按载体和事件记录电动或燃油剪毛机及相关设备。

分母与范围要求：每 kg 剪取羊毛

原始数量及计算要求：每事件电表或设备日志 原始采集分母类型：process_output。

- 选定流：剪毛能源
- 流属性/单位：Energy 或载体 / kWh、MJ 或 L
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_wash_shear`
- 数量范围：暂定剪毛能源筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kWh 当量/kg 剪取羊毛
  - 基准：宽泛剪毛机能源筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 剪取油脂羊毛（`captured_fleece`）

分动物/群组和剪毛事件称重，保留羊体洗毛状态。

分母与范围要求：每 kg 最终原毛

原始数量及计算要求：扣收集容器皮重的剪取质量 原始采集分母类型：reference_flow。

- 选定流：剪后即刻的油脂羊毛
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_wash_shear`
- 来源：`iwto-wool-lca-2016`
- 数量范围：剪取到交付质量筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：5
  - 单位：kg 剪取毛/kg 最终原毛
  - 基准：宽泛损失筛查，非得率主张
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：农场晾置与剔边（`conditioning`）

剪后首道整理仅晾置并手工去除可见污染，不在剪后清洗、提取羊毛脂或生产净毛。仍为原毛的剔边后羊毛交分级；拒收物称重。

#### 输出

##### 产品流

###### 剔边后油脂羊毛（`skirted_fleece`）

在分级前记录未脱脂羊毛质量与水分。

分母与范围要求：每 kg 最终原毛

原始数量及计算要求：实测整理后羊毛 原始采集分母类型：reference_flow。

- 选定流：剔边后未洗净原毛
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_grade_bale`
- 数量范围：剔边后质量筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kg 剔边毛/kg 最终原毛
  - 基准：宽泛质量平衡筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 剔边和污染拒收物（`skirting_reject`）

区分不可销售的土壤、植物残留和羊毛，与独立出售的低级羊毛不同；记录处置或回收目的地。

分母与范围要求：每 kg 剪取羊毛

原始数量及计算要求：实测拒收质量 原始采集分母类型：process_output。

- 选定流：按物料与去向确定的农场剔边拒收物
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_grade_bale`
- 数量范围：拒收比例筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg 拒收物/kg 剪取羊毛
  - 基准：物理质量平衡约束
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：等级与去向分拣（`grading`）

投入为剔边后原毛。声明合格商业等级以及降级/拒收去向与交接。可销售等级送打包；不可销售物为废物，非低级联产品。

#### 输出

##### 产品流

###### 合格油脂原毛等级（`accepted_grades`）

计量转往农场打包的各合格等级净质量。

分母与范围要求：每 kg 最终原毛

原始数量及计算要求：实测各等级质量 原始采集分母类型：reference_flow。

- 选定流：分等级合格油脂羊毛
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_grade_bale`
- 数量范围：合格等级份额筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg 合格等级/kg 最终原毛
  - 基准：等级份额合计为合格质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 可销售降级油脂羊毛（`downgraded_wool`）

单独销售时保留等级、买方门口和质量；不可销售者为拒收物。

分母与范围要求：每 kg 最终原毛

原始数量及计算要求：按去向记录降级净质量 原始采集分母类型：reference_flow。

- 选定流：降级但可销售的油脂羊毛
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_grade_bale`
- 数量范围：降级份额筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg 降级毛/kg 最终原毛
  - 基准：全达标准等级时可为零
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：农场打包与交付（`baling`）

在农场包装或呈现合格原毛用于保护；记录包装的复用、所有权与返还。交付后的配送不在此节点。

#### 输入

##### 产品流

###### 毛包和包裹材料（`bale_material`）

记录实际纺织袋、薄膜、扎带和标签；从农场记录确定复用次数。

分母与范围要求：农场门口每 kg 净原毛

原始数量及计算要求：按毛包净材料消耗扣除经证实的复用 原始采集分母类型：reference_flow。

- 选定流：打包和呈现材料
- 流属性/单位：Mass 或数量 / kg 或件
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_grade_bale`
- 数量范围：包装材料筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg 材料/kg 原毛
  - 基准：无包装交付时可为零
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 农场门口净油脂原毛（`farm_wool`）

按等级、毛包和洗毛状态的最终净质量是参考输出。平台工厂门口 Raw Wool 候选不能绑定此卡。

参考产出的原始记录：合格和可销售降级原毛的交付量，扣毛包皮重 保留实测合格批次数量及全部必需限定项。下方数量是归一化参考交换，并不表示实际批次只有一个单位。

分母与范围要求：每参考流

- 选定流： 生产农场门口剪取油脂羊毛
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_grade_bale`
- 来源：`un-cpc-2025`; `iwto-wool-lca-2016`
- 数量范围：参考输出身份
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：kg 净原毛
  - 基准：一个声明参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集数据计算（`calculated_from_collection`）

## 7. 分配与联产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `flock_outputs` | 羊毛、活羊/羔羊、外售粪肥及其他独立产品 | 可分割负担优先物理细分；共用羊群负担应披露并一致使用有依据的方法，例如分年度经济价值分配，附价格与敏感性。不可令淘汰羊零负担，也不可将粪污同时列产品与废物。 | `iwto-wool-lca-2016` |
| `period_link` | 繁育、更新、生长、剪毛、淘汰年度 | 跨年度链接投入、动物存量、事件与产出；仅凭可观察服务年限证据摊销。动物年度负担仅分配一次。 | `iwto-wool-lca-2016` |
| `shared_assets` | 牧地、羊舍、供水、剪毛棚和设备 | 指明羊群/剪毛/打包使用者及服务年度；先按有记录工时、面积或羊时分配共用负担，再分配产品；节点间不重复。 | `iwto-wool-lca-2016` |
| `grade_accounting` | 合格、降级、拒收羊毛 | 分列等级输出和去向；可售降级是产品，不可售剔边是废物，同一纤维不可兼为二者。 | `iwto-wool-lca-2016` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_flock_feed` | `flock` | 饲料、养分 | 羊群/地块/发票 | 群组、牧地面积、日粮、干物质、养分、日期、库存 | 农场记录与有文件的摄入模型；原始汇总要求：核对购入、种植和消耗。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg、ha | 月/事件 | 羊群与饲养年度 | 农场 | 每参考流 | 票据、饲料测试；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_water_energy` | `flock` | 水、能源 | 电表/发票 | 来源、载体、用途、期间、共用者 | 仪表及发票；原始汇总要求：按使用者分配。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | m3、kWh、L | 月 | 羊群年度 | 农场 | 每参考流 | 仪表照片、票据；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_flock_outputs` | `flock` | 活羊 | 销售/存栏簿 | 群组、头数、活重、日期、门口 | 地磅与点数；原始汇总要求：期初+新增-移出=期末。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg、头 | 事件 | 羊群年度 | 农场 | 每参考流 | 销售单、登记簿；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_manure` | `flock` | 粪污与排放 | 活动簿 | 群组、N 摄入/排泄、管理、储存、转移、因子 | 采集活动并声明 IPCC 层级；原始汇总要求：分立 CH4、N2O、NH3 路径。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg N、kg 粪 | 月/事件 | 羊群年度 | 农场 | 每参考流 | 活动和因子表；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_wash_shear` | `fleece_wash`, `shearing` | 清洗与剪毛 | 事件簿 | 羊、洗毛日期/水/废水/晾干、剪毛日期、原毛质量、能源 | 事件表、秤、仪表；原始汇总要求：一份羊毛对应一路线。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg、m3、kWh | 事件 | 剪毛季 | 农场 | 每参考流 | 事件和校准表；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_grade_bale` | `conditioning`, `grading`, `baling` | 质量/呈现 | 等级/毛包簿 | 剪取、剔边、等级、水分、皮重、包装复用、交付 | 秤及买方单据；原始汇总要求：剪取=等级+拒收+变化/损失。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg、件 | 每包 | 剪毛季 | 农场 | 每参考流 | 称重单、分级记录；可追溯分子、合格参考产出分母及归一化计算表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `wool_balance` | 剪取到交付 | 剪取=合格等级+降级等级+剔边+实测水分/其他损失；披露剩余差值 | 事件和毛包记录 | 净参考质量及平衡 | `iwto-wool-lca-2016` |
| `enteric_method` | 肠道 CH4 | 按年龄/日粮/生产力活动应用声明的 IPCC 层级、因子与单位换算 | 群组、日粮、时长 | 与粪污分立的 kg CH4 | `ipcc-livestock-2019` |
| `manure_n_method` | 粪污 N2O/NH3 | 排泄 N × 管理份额 × 分立因子和换算；核对 N | 排泄、管理、因子 | kg N2O 与 NH3 | `ipcc-livestock-2019` |
| `allocated_reference` | 共用活动 | 活动 × 有记录的服务年度和联产品份额 ÷ 净原毛 | 使用簿、年度、产出和价值 | 每 kg 参考流活动 | `iwto-wool-lca-2016` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `identity` | 羊毛 | 证明羊/羔羊来源、原毛状态、羊体洗毛、等级与农场门口；拒绝剪后洗毛不明状态。 | 剪毛与销售记录 |
| `completeness` | 羊群/羊毛 | 核对动物、饲料、粪污、剪取、等级、联产品与拒收。 | 质量和存栏平衡 |
| `temporal` | 多年度羊群 | 将年龄、事件和共用资产链接服务年度；披露缺口。 | 群组和资产簿 |
| `measurement` | 质量/水分/能源 | 保存校准与原单位；披露估算。 | 秤及仪表记录 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | 参考/等级 | 排除山羊/骆驼科、拔毛、剪后洗净毛、非农场门口或物种不明；检查原毛净 kg。 | `un-cpc-2025`; `wco-hs-2017` |
| `validate_route` | 洗/未洗 | 确认洗毛在活羊身上且剪前进行，有水/废水/晾干证据；一份羊毛只走一路线。 | `wco-hs-2017`; `iwto-wool-lca-2016` |
| `validate_balance` | 羊毛/联产品 | 核对剪取、等级、拒收、包装皮重、活羊和粪肥；产品/废物不可双重分类。 | `iwto-wool-lca-2016` |
| `validate_period` | 羊群/共用资产 | 检查年度、更新、服务和联产品份额只合计一次；不漏继承负担。 | `iwto-wool-lca-2016` |
| `validate_binding` | 具体交换 | 从实测记录展开待确认投入；数据集发表前为具体输出验证精确 UUID。 | |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 剪取油脂羊毛的前景产品类别数据包 |
| downstream_use | 经审查和具体身份验证后作为 `secondary_dataset` 或 `background_dataset` |
| allowed_use | 用于声明品种、农场、年度、等级及农场门口的过程/生命周期模型 |
| excluded_use | 洗净/拔取羊毛、山羊毛、普通工厂 Raw Wool 或未验证 UUID 发表 |
| required_metadata | 农场、年度、群组、洗毛路线、剪/打包日期、等级、水分、质量平衡、分配、UUID 证据 |
| required_quality_disclosure | 实测/计算值、因子层级、缺口、暂定范围、联产品敏感性 |
| update_trigger | 路线、物种、门口、等级、分配、因子或身份依据变化 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-2025` | `official_guidance` | [UNSD CPC 3.0 解释](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) | 剪取与拔取的身份 |
| `wco-hs-2017` | `official_guidance` | [WCO HS 第 51 章](https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2017/2017/1151_2017e.pdf?la=en) | 羊毛与其他动物毛区别 |
| `iwto-wool-lca-2016` | `official_guidance` | [IWTO 羊毛 LCA 指南](https://iwto.org/wp-content/uploads/2020/04/IWTO-Guidelines-for-Wool-LCA.pdf) | 农场门口、洗毛分界、清单、分配 |
| `ipcc-livestock-2019` | `method_factor` | [IPCC 2019 修订卷 4 章 10](https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf) | 肠道与粪污路径 |
