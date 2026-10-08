---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.other-live-animals-n-e-c
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他未另分类活体动物

## 1. 范围与适用性

涵盖未归入更具体类别、且来源合法的活体动物：符合条件的两栖类、非蜂昆虫（包括活蚕）、蜘蛛、蝎、蠕虫和水蛭。每套数据限定一个物种、生活阶段、来源路线、状态及交接点。排除蜜蜂、另行分类的鸟/哺乳类/爬行动物、死食用昆虫、蚕茧、死动物，以及另行分类的水生商品。剩余类目不代表准许捕获或交易。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.other-live-animals-n-e-c |
| classification_refs | CPC 3.0 02199 |
| covered_products | 经逐物种分类核查合格的活体两栖类、非蜂昆虫、蜘蛛、蝎、蠕虫及水蛭。 |
| excluded_products | 蜜蜂；另行分类的活体脊椎动物；死食用昆虫；蚕茧；死动物；另行分类的水生商品；非法来源。 |
| representative_product | 实际来源交接点的一批指定物种和阶段的活体。 |
| production_route | 受控繁育/饲养或可证明合法的野外活体采集，继以活体挑选及适物种暂养/交接；购入种源保留上游负担。 |
| market_state | 在已声明生活阶段及暂养状态、具有活力的动物。 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 一个已声明物种和阶段的活体，不作未区分的动物混合物。 |
| How much | 1 kg 实测活体动物生物量，不含可分离的水、基质及容器。 |
| How well | 物种、分类、生活阶段、数量或种群估计、活力、湿质量方法、暂养介质、来源合法性和交接点。 |
| How long or cycle | 实际批群或采集事件及不重叠的生产、服务和替换期间。 |
| reference_flow_link | `product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 注明物种、阶段与交接点的活体动物 |
| Reference flow property | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 物种；分类决定；生活阶段；数量或种群估计；活力；湿质量方法；暂养介质；合法来源；路线；交接点；期间 |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| m_net | 参考产品 | Mass | kg | 以校准的净活体动物质量为准；排除可分离水、基质和容器。 |
| m_count | 每批 | Count and Mass | count and kg | 报告数量或有说明的种群估计；仅用该批实测质量换算，不使用幼体/成体通用系数。 |
| m_period | 批群与共享设施 | Time | period | 将实际投入、产出、死亡、服务和替换关联唯一不重叠期间。 |

## 5. 系统边界

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | 有记录的活体种源或合法野外来源；购入活体种源携带上游负担进入。 |
| starting_condition_role | 饲养与野外采集为互斥来源节点；不得虚构路线。 |
| product_classification_scope | 排除更具体活体类别及非活体商品后合格的活体动物。 |
| recursive_input_rule | 购入同类活体保留供应商负担，只进入实际执行的后续节点；不得重建其繁育或采集。 |
| upstream_dataset_requirement | 供应商负担与来源证明、按物种确定的投入供应及合法采集证据。 |
| disclosure | 物种、阶段、数量、净质量、暂养介质、合法来源、死亡、副产出、期间、共享服务及实际交接点。 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_scope | 每批 | 核实合格活体物种和合法来源；排除蜜蜂、蚕茧、死食用昆虫及另行分类的水生/脊椎动物商品。 | un-cpc-2025 |
| b_route | 来源 | 饲养与合法野外采集为互斥节点；购入活体保留供应商负担，只进入实际后续作业。 | un-cpc-2025 |
| b_gate | 交接 | 经活体挑选及适物种暂养后止于实际来源交接点；排除后续运输、使用和死动物加工。 | un-cpc-2025 |
| b_period | 设施和期间 | 建群、共用房间/槽池和替换只归于实际消费节点与期间一次。 | mass-balance-identity |

## 6. 过程清单结构

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| rear | 按物种受控饲养 | conditional | 仅受控路线，非野外采集 | 按实际阶段饲养所声明种源，向挑选交付有活力批群。 | 每 kg 节点产出 |
| capture | 独立合法活体采集 | conditional | 仅有许可的野外路线，非饲养 | 从有记录野外来源取得活体，向挑选交付有活力批次。 | 每 kg 节点产出 |
| select | 活体挑选及暂养 | required | 所有路线，限实际操作 | 核对物种、阶段及活力；分开合格动物、独立销售产出与损失。 | 每 kg 节点产出 |
| gate | 来源交接点的容纳和交接 | required | 所有上市活体批次 | 在实际来源交接点保护并交付实测活体产品。 | 每 kg 节点产出 |

这些是责任节点而非通用技术。两栖类水陆阶段、昆虫变态和蠕虫基质仅按实际所声明物种与路线处理。

### 过程： 按物种受控饲养 (`rear`)

#### Inputs

##### Product flows

###### 购入活体种源 (`stock`)

带供应商负担的实际物种和阶段种源。

- 选定流: 购入活体种源 (UUID unresolved)
- 流属性/单位: Mass / kg
- 数量规则: 带供应商负担的实际物种和阶段种源。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 kg 按物种受控饲养产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_rear`
- 数量范围: 宽泛暂定批次完整性筛查，不是经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg/kg
  - 基准: 每 kg 按物种受控饲养产出
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 饲料供应 (`feed`)

记录跨越受控边界的实际按物种饲料。

- 选定流: 饲料供应 (UUID unresolved)
- 流属性/单位: Mass / kg
- 数量规则: 记录跨越受控边界的实际按物种饲料。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 kg 按物种受控饲养产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_rear`
- 数量范围: 宽泛暂定批次完整性筛查，不是经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg/kg
  - 基准: 每 kg 按物种受控饲养产出
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 生物饲养基质 (`substrate`)

将实际按物种使用的生物基质与饲料分列。

- 选定流: 生物饲养基质 (UUID unresolved)
- 流属性/单位: Mass / kg
- 数量规则: 将实际按物种使用的生物基质与饲料分列。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 kg 按物种受控饲养产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_rear`
- 数量范围: 宽泛暂定批次完整性筛查，不是经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg/kg
  - 基准: 每 kg 按物种受控饲养产出
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 供应饲养用水 (`water`)

计量实际供水；区分可分离暂养介质。

- 选定流: 供应饲养用水
- 流属性/单位: Mass / kg
- 数量规则: 计量实际供水；区分可分离暂养介质。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 kg 按物种受控饲养产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_rear`
- 数量范围: 宽泛暂定批次完整性筛查，不是经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg/kg
  - 基准: 每 kg 按物种受控饲养产出
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 饲养能源 (`energy`)

计量实际照明、温控、曝气或泵耗能。

- 选定流: 饲养能源
- 流属性/单位: Energy / kWh
- 数量规则: 计量实际照明、温控、曝气或泵耗能。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 kg 按物种受控饲养产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_rear`
- 数量范围: 宽泛暂定批次完整性筛查，不是经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 10000
  - 单位: kWh/kg
  - 基准: 每 kg 按物种受控饲养产出
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### 送往挑选的活体批群 (`cohort`)

按阶段称量并清点离开饲养的有活力动物一次。

- 选定流: 送往挑选的活体批群 (UUID unresolved)
- 流属性/单位: Mass / kg
- 数量规则: 按阶段称量并清点离开饲养的有活力动物一次。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 kg 按物种受控饲养产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_rear`
- 数量范围: 宽泛暂定批次完整性筛查，不是经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg/kg
  - 基准: 每 kg 按物种受控饲养产出
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Waste flows

###### 饲养死亡动物 (`rear_mortality`)

按阶段将死亡记为动物质量及实际处置，不计作上市活体。

- 选定流: 饲养死亡动物 (UUID unresolved)
- 流属性/单位: Mass / kg
- 数量规则: 按阶段将死亡记为动物质量及实际处置，不计作上市活体。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 kg 按物种受控饲养产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_rear`
- 数量范围: 宽泛暂定批次完整性筛查，不是经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg/kg
  - 基准: 每 kg 按物种受控饲养产出
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 废弃生物基质 (`spent_substrate`)

废基质与死亡动物质量分别计量并记录去向。

- 选定流: 废弃生物基质 (UUID unresolved)
- 流属性/单位: Mass / kg
- 数量规则: 废基质与死亡动物质量分别计量并记录去向。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 kg 按物种受控饲养产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_rear`
- 数量范围: 宽泛暂定批次完整性筛查，不是经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg/kg
  - 基准: 每 kg 按物种受控饲养产出
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Elementary flows

### 过程： 独立合法活体采集 (`capture`)

#### Inputs

##### Product flows

###### 采集设备能源 (`capture_energy`)

计量合法采集事件耗能；不虚构饲养。

- 选定流: 采集设备能源
- 流属性/单位: Energy / kWh
- 数量规则: 计量合法采集事件耗能；不虚构饲养。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 kg 独立合法活体采集产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_capture`
- 数量范围: 宽泛暂定批次完整性筛查，不是经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 10000
  - 单位: kWh/kg
  - 基准: 每 kg 独立合法活体采集产出
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### 合法采集的活体动物 (`captured`)

在采集交接点清点、称量有活力动物，并关联物种与许可。

- 选定流: 合法采集的活体动物 (UUID unresolved)
- 流属性/单位: Mass / kg
- 数量规则: 在采集交接点清点、称量有活力动物，并关联物种与许可。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 kg 独立合法活体采集产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_capture`
- 数量范围: 宽泛暂定批次完整性筛查，不是经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg/kg
  - 基准: 每 kg 独立合法活体采集产出
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Waste flows

###### 采集死亡动物 (`capture_loss`)

死亡或受伤动物与有活力产出分列，并记录处置。

- 选定流: 采集死亡动物 (UUID unresolved)
- 流属性/单位: Mass / kg
- 数量规则: 死亡或受伤动物与有活力产出分列，并记录处置。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 kg 独立合法活体采集产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_capture`
- 数量范围: 宽泛暂定批次完整性筛查，不是经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg/kg
  - 基准: 每 kg 独立合法活体采集产出
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Elementary flows

### 过程： 活体挑选及暂养 (`select`)

#### Inputs

##### Product flows

###### 来源活体动物 (`source_live`)

接收一条路线或上游购入的实测活体批次，不重建来源负担。

- 选定流: 来源活体动物 (UUID unresolved)
- 流属性/单位: Mass / kg
- 数量规则: 接收一条路线或上游购入的实测活体批次，不重建来源负担。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 kg 活体挑选及暂养产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_select`
- 数量范围: 宽泛暂定批次完整性筛查，不是经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg/kg
  - 基准: 每 kg 活体挑选及暂养产出
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 暂养用水 (`holding_water`)

计量该物种实际供应暂养水，不计入动物质量。

- 选定流: 暂养用水
- 流属性/单位: Mass / kg
- 数量规则: 计量该物种实际供应暂养水，不计入动物质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 kg 活体挑选及暂养产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_select`
- 数量范围: 宽泛暂定批次完整性筛查，不是经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg/kg
  - 基准: 每 kg 活体挑选及暂养产出
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 暂养能源 (`holding_energy`)

计量实际温控、照明、曝气或处理能耗。

- 选定流: 暂养能源
- 流属性/单位: Energy / kWh
- 数量规则: 计量实际温控、照明、曝气或处理能耗。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 kg 活体挑选及暂养产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_select`
- 数量范围: 宽泛暂定批次完整性筛查，不是经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 10000
  - 单位: kWh/kg
  - 基准: 每 kg 活体挑选及暂养产出
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### 挑选后的有活力动物 (`accepted`)

称量送往交接点、注明物种和阶段的合格批次。

- 选定流: 挑选后的有活力动物 (UUID unresolved)
- 流属性/单位: Mass / kg
- 数量规则: 称量送往交接点、注明物种和阶段的合格批次。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 kg 活体挑选及暂养产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_select`
- 数量范围: 宽泛暂定批次完整性筛查，不是经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg/kg
  - 基准: 每 kg 活体挑选及暂养产出
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 独立销售的合法产出 (`side_output`)

仅为在自身交接点实际销售的另一活体阶段或合格产品；不得与合格动物重复。

- 选定流: 独立销售的合法产出 (UUID unresolved)
- 流属性/单位: Mass / kg
- 数量规则: 仅为在自身交接点实际销售的另一活体阶段或合格产品；不得与合格动物重复。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 kg 活体挑选及暂养产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_select`
- 数量范围: 宽泛暂定批次完整性筛查，不是经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg/kg
  - 基准: 每 kg 活体挑选及暂养产出
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Waste flows

###### 挑选死亡动物 (`selection_mortality`)

挑选及暂养死亡动物与有活力产出分列。

- 选定流: 挑选死亡动物 (UUID unresolved)
- 流属性/单位: Mass / kg
- 数量规则: 挑选及暂养死亡动物与有活力产出分列。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 kg 活体挑选及暂养产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_select`
- 数量范围: 宽泛暂定批次完整性筛查，不是经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg/kg
  - 基准: 每 kg 活体挑选及暂养产出
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 废弃暂养介质 (`discarded_medium`)

废介质与动物损失分别计量并记录处理。

- 选定流: 废弃暂养介质 (UUID unresolved)
- 流属性/单位: Mass / kg
- 数量规则: 废介质与动物损失分别计量并记录处理。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 kg 活体挑选及暂养产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_select`
- 数量范围: 宽泛暂定批次完整性筛查，不是经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg/kg
  - 基准: 每 kg 活体挑选及暂养产出
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Elementary flows

### 过程： 来源交接点的容纳和交接 (`gate`)

#### Inputs

##### Product flows

###### 已挑选活体动物 (`selected_input`)

从挑选节点一次性接收合格有活力批次。

- 选定流: 已挑选活体动物 (UUID unresolved)
- 流属性/单位: Mass / kg
- 数量规则: 从挑选节点一次性接收合格有活力批次。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 kg 来源交接点的容纳和交接产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_gate`
- 数量范围: 宽泛暂定批次完整性筛查，不是经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg/kg
  - 基准: 每 kg 来源交接点的容纳和交接产出
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 适合物种的容纳材料 (`container`)

保护性容器和可分离介质与动物质量分开计量。

- 选定流: 适合物种的容纳材料
- 流属性/单位: Mass / kg
- 数量规则: 保护性容器和可分离介质与动物质量分开计量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 kg 来源交接点的容纳和交接产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_gate`
- 数量范围: 宽泛暂定批次完整性筛查，不是经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg/kg
  - 基准: 每 kg 来源交接点的容纳和交接产出
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### 来源交接点的有活力活体产品 (`product`)

在实际来源交接点称量净活体动物生物量；核实数量与合法交接。

- 选定流: 注明物种、阶段与交接点的活体动物
- 流属性/单位: Mass / kg
- 数量规则: 在实际来源交接点称量净活体动物生物量；核实数量与合法交接。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 kg 来源交接点的容纳和交接产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_gate`
- 数量范围: 宽泛暂定批次完整性筛查，不是经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg/kg
  - 基准: 每 kg 来源交接点的容纳和交接产出
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Waste flows

###### 交接前死亡动物 (`gate_loss`)

暂养死亡动物与销售活体分开并记录处理。

- 选定流: 交接前死亡动物 (UUID unresolved)
- 流属性/单位: Mass / kg
- 数量规则: 暂养死亡动物与销售活体分开并记录处理。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 kg 来源交接点的容纳和交接产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_gate`
- 数量范围: 宽泛暂定批次完整性筛查，不是经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg/kg
  - 基准: 每 kg 来源交接点的容纳和交接产出
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Elementary flows

## 7. 分配与联产品处理

### 分配规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| a_output | 联产品及残余 | 列明每项独立销售产出及其交接点；不得将死亡、废基质或未出售虫卵当作副产品。共享投入优先按有证据的物理因果分摊；否则按节点和期间的实测净经济价值分摊，披露价格基础及敏感性。共用房间、槽池、照明和设备尽量按表计，否则按动物日或面积时间分配，每项服务仅一次归于消费节点和不重叠期间。 | mass-balance-identity |
| a_period | 期间 | 记录各批群阶段及设施服务期间；建群、死亡和替换各归属一次，不跨期重复存量或负担。 | mass-balance-identity |

## 8. 前景数据采集、计算及质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_rear | rear | 全部所列流 | 批次/计量/来源账本 | 物种、阶段、时间、来源、校准质量、数量、投入、死亡、产出、去向 | 逐批称量和清点；核对许可、发票和表计。 | kg;count;kWh | 每批及每期间 | 完整批群或采集及服务期间 | 实际场址 | 按物种、阶段、节点和不重叠期间求和 | 校准、来源、许可、账本及去向证据 |
| cp_capture | capture | 全部所列流 | 批次/计量/来源账本 | 物种、阶段、时间、来源、校准质量、数量、投入、死亡、产出、去向 | 逐批称量和清点；核对许可、发票和表计。 | kg;count;kWh | 每批及每期间 | 完整批群或采集及服务期间 | 实际场址 | 按物种、阶段、节点和不重叠期间求和 | 校准、来源、许可、账本及去向证据 |
| cp_select | select | 全部所列流 | 批次/计量/来源账本 | 物种、阶段、时间、来源、校准质量、数量、投入、死亡、产出、去向 | 逐批称量和清点；核对许可、发票和表计。 | kg;count;kWh | 每批及每期间 | 完整批群或采集及服务期间 | 实际场址 | 按物种、阶段、节点和不重叠期间求和 | 校准、来源、许可、账本及去向证据 |
| cp_gate | gate | 全部所列流 | 批次/计量/来源账本 | 物种、阶段、时间、来源、校准质量、数量、投入、死亡、产出、去向 | 逐批称量和清点；核对许可、发票和表计。 | kg;count;kWh | 每批及每期间 | 完整批群或采集及服务期间 | 实际场址 | 按物种、阶段、节点和不重叠期间求和 | 校准、来源、许可、账本及去向证据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_net | 参考批次 | 净活体质量=实称总质量−可分离介质和容器皮重。 | 校准总质量、皮重、活力 | kg | mass-balance-identity |
| c_stock | 批群 | 期初+新增−死亡−销售−期末=已解释的逐阶段差额。 | 存量、死亡和销售账本 | kg;count | mass-balance-identity |
| c_shared | 共享服务 | 节点负担=共用服务表计总量×有据节点份额；份额之和为 1。 | 表计、动物日或面积时间、期间 | kg;kWh | mass-balance-identity |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_core | 每批 | 要求物种/阶段身份、合法来源、校准净生物量、数量、期初/期末存量、死亡、投入、独立销售、共享服务账本及期间关联。缺少合法来源或有效活体质量测量则不能形成数据集。 | 分类、许可、校准称量及存量账本 |
| q_range | 所有流卡 | 暂定 QA 筛查仅触发复核，不覆盖测量或定义发布允许区间。 | 原始记录及例外说明 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_identity | 参考产品 | 核实物种、阶段、合法性、活体状态、数量、净质量及交接点；无详情及支持行核实不得声称固定 UUID。 | un-cpc-2025 |
| v_balance | 节点及期间 | 逐阶段核对投入、销售、死亡、废弃及期末存量；同一动物或损失不得在两个交接点重复。 | mass-balance-identity |
| v_alloc | 产出及共享服务 | 核对每项预期产品及独立交接点、分配基础、期间以及份额总和为 1 的共享服务。 | mass-balance-identity |
| v_route | 条件路线 | 无许可野外采集不是合法来源；野外路线不虚构繁育，购入种源不免除上游负担。 | un-cpc-2025 |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 物种及路线特定活体动物前景包 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 仅适用已声明活体来源交接点的物种及路线特定二级/背景数据集；无新增数据不得泛化至两栖、昆虫、蛛形类之间或转为死动物商品。 |
| excluded_use | 无新增数据时的其他物种、阶段、来源、死动物商品及交接后运输和使用。 |
| required_metadata | 物种；分类决定；生活阶段；数量或种群估计；活力；湿质量方法；暂养介质；合法来源；路线；交接点；期间; 方法、期间及分配说明 |
| required_quality_disclosure | 来源、称量/清点、QA 例外、死亡、共享服务及未解析身份 |
| update_trigger | 物种、阶段、法域、路线、饲养、交接点或 UUID 证据改变。 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-2025 | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 类别范围与排除 |
| woah-transport-7-3 | official_guidance | https://www.woah.org/fileadmin/Home/eng/Health_standards/tahc/current/en_chapitre_aw_land_transpt.htm | 适物种处理的审慎依据；对野生或无脊椎动物并非通用规范 |
| mass-balance-identity | method_factor | Mass conservation and non-overlapping inventory accounting identity | 质量、期间及共享服务核对 |
