---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.snails-fresh-chilled-frozen-dried-salted-or-in-brine-except-sea-snails
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 非海产蜗牛商品

## 1. 范围与适用性

本 PCR 覆盖人工养殖或合法野外采集的非海产蜗牛商品，在农场或初级加工交付门以鲜、冷藏、冷冻、干制、盐渍或盐水浸制状态交付。须记录物种、来源路线、预期用途、整只或去壳形态、实际销售状态、适用等级或质量准则、水分或盐水含量和交付门。六种销售状态是按批次择一的产品状态，不是同一批次的必经工序，也不能直接比较相同质量；一批次可经历多步操作，但最终销售状态及中间质量平衡必须记录。海螺、其他动物、超出上述状态的进一步加工商品、交付后的配送和消费使用不在范围内。食品安全要求仅适用于声明为人类食品的批次，而非全部蜗牛商品。野采路线不虚构人工养殖上游。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.snails-fresh-chilled-frozen-dried-salted-or-in-brine-except-sea-snails |
| classification_refs | CPC 3.0 02920 |
| covered_products | 一种明确的鲜、冷藏、冷冻、干制、盐渍或盐水浸制销售状态的非海产蜗牛，披露预期用途及适用质量准则。 |
| excluded_products | 海螺、其他动物产品、超出所列状态的进一步加工商品及交付后配送。 |
| representative_product | 在农场或初级加工交付门按实际销售状态称重的合格陆生蜗牛商品批次。 |
| production_route | 人工养殖并独立采收，或合法野外采集；初级处理及适用时的清洗/分级；可选的状态特定保藏；使用时的保护性包装。 |
| market_state | 明确状态的整只或去壳非海产蜗牛批次；包装与游离盐水单独报告。 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 在实际交付门以一种声明销售状态和预期用途交付的合格非海产蜗牛商品。 |
| How much | 1 kg 销售净蜗牛产品，不含包装和单独报告的游离盐水。 |
| How well | 声明物种、合法来源、整只/去壳、预期用途、适用等级/质量准则、状态/剔除、水分/盐水；用于人类食品时还须声明食品安全状态。 |
| How long or cycle | 从可辨识养殖批次或采集事件至交付；跨期种群及共享设施按实际服务期间归属。 |
| reference_flow_link | `pack_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 按销售状态和交付门限定的非海产蜗牛商品 |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 物种；人工养殖或合法野采；预期用途；整只/去壳；鲜/冷藏/冷冻/干制/盐渍/盐水浸制；毛重和净重；水分及游离盐水核算；适用等级/质量准则；实际交付门；批次/事件；包装皮重 |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| m_net | 参考及中间批次 | Mass | kg | 扣除皮重后称蜗牛净质量；分离的壳、剔除物和游离盐水另记。 |
| m_state | 保藏与鲜品批次 | Mass 和含水质量分数 | kg;kg/kg | 记录保藏前后质量、实测水分和另加的盐/盐水。仅通过实测固形物及配方质量平衡比较状态，不套用固定出率。 |
| m_grade | 合格及剔除批次 | Mass | kg | 同批口径核对投入、合格、降级、剔除和实测损失。 |
| m_period | 养殖、共享设施与野采 | 时间及服务量 | period;service unit | 投入、采收、设施服务和产出按相应批次、采集事件及报告期归属一次。 |
| `inventory_reference_normalization` | 所有清单行 | 实际流属性 | 每参考流的交换单位 | 下方清单和采集汇总字段表示每个声明参考流的最终数量。保留全部原始采集记录、原分母限定信息、路线及期间分层、单位换算和分配要求。对每项流，先依原有规则取得以其自身分子单位表示的可归属数量，再除以同一范围的实测合格参考产出数量，并乘以声明参考数量。不得混合物种、状态、交付门或不相容路线；内部移交及共享负担只计一次。合格产出分母缺失、为零或不可追溯时，属于阻断性数据质量问题。暂定 QA 范围仍使用其明确声明的基准，不能视为换算因子或生产默认值。 这些数量是最终前景数据包的贡献量，不替代阶段定量参考或阶段原生单位过程数据集；阶段记录单独保留。归一化数量 = 可归属原始数量 × 声明参考数量 / 实测合格最终参考产出数量。归一化恰执行一次。 |
| `stage_throughput_linkage` | 阶段记录及最终数据包贡献 | 实际流属性及其原始基准 | 保留原生分子及阶段分母单位 | 保留原始批次、事件、群组、期间及阶段分母与单位。使用实测阶段数量 Q_stage 和有依据的归属关系重建可归属分子 A，再作最终归一化。若报告数量 a_B 对应明确阶段基准 B_stage（例如 1000 kg），则 A = a_B × Q_stage / B_stage。若 r_stage 已是交换单位／阶段单位的单位强度，则改用 A = r_stage × Q_stage，不再次除以 B_stage。可归属原始总量直接使用。最终贡献 = A × 声明参考数量 / 实测合格最终产出。明确换算相容单位，每项归属／分配份额恰应用一次；不得将基准数量下的报告用量或单位强度当成原始总量。阶段移交、损失、拒收、库存、共享服务及分配必须关联同一实际路线、期间和最终产出分层。1000 kg 基准仍明确保留 1000 kg。不得假设单位产率、鲜干质量相同、个体质量相同、剂量质量等价或交付门可互换。关联缺失、单位换算无依据、分母为零或分配不可追溯时，阻断数据包生产。阶段原生数据集保留自身阶段参考；数据包贡献为单独投影。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 养殖：确定的繁殖/幼体存量和饲料来源；野采：有记录的合法采集区域及事件，不包含人工繁殖投入。 |
| starting_condition_role | 购买种群、饲料、盐、包装和能源作为有上游负担的 Product 投入；土地及可重复资产按期间/服务量归属。 |
| product_classification_scope | 仅含声明的鲜、冷藏、冷冻、干制、盐渍或盐水浸制销售状态的非海产蜗牛商品；不统一限定食品用途。 |
| recursive_input_rule | 购入同类别蜗牛进入分级或保藏时保留其上游负担，不再算作本系统新养殖或采集产出。 |
| upstream_dataset_requirement | 对购入幼体/饲料、盐、公用工程、包装和纳入的设备取得可追溯上游数据；购入蜗牛不能零负担。 |
| disclosure | 报告物种、路线合法性、状态、交付门、批次与期间、剔除去向、资产归属及所选保藏工序。 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_route | 养殖或野采来源 | 仅养殖批次计入种群、饲料及养殖设施管理。野采始于合法采集情境，不能将野外生境建成农场；采收/采集与生产情境分为独立移除与交接节点。 | fao-improved-snail-farming;fao-snail-farming-gathering |
| b_condition | 采集物到合格品 | 纳入初级处理；仅在实际路线或预期用途要求时纳入吐沙/清洗及分级。按声明质量准则区分合格商品、可独立销售的降级商品及剔除/废物去向；蜗牛壳及废物不能默认可售。 | fao-improved-snail-farming |
| b_preserve | 可选保藏批次 | 只有在交付前实际实施时才纳入冷藏、冷冻、干制、盐渍或盐水浸制。记录能源、盐/盐水、水、残渣、水分损失及剔除；不能要求同批执行所有处理。 | fao-improved-snail-farming |
| b_gate | 所有批次 | 纳入至实际农场/初级加工交付门的保护包装与场内处理；排除后续配送、零售及烹饪。可周转包装回收和共享设施服务分别记录。 | fao-improved-snail-farming |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| rear | 陆生蜗牛人工养殖 | conditional | 仅人工养殖路线 | 生产待采收蜗牛的生物生产父节点；不得套给野采 | 每养殖批次的待采收 kg |
| gather | 采收或合法采集 | required | 每个合格批次 | 自养殖场或有记录野外地点独立移除蜗牛；辨识夹带物和损失 | 原料蜗牛采集 kg |
| prepare | 初级处理及适用的分级 | required | 每个商品批次；吐沙/清洗仅实际实施时纳入 | 按预期用途准则将采集物转为合格状态，其他去向明确 | 原料蜗牛投入 kg |
| preserve | 按状态保藏 | conditional | 交付前冷藏、冷冻、干制、盐渍或盐水浸制 | 可用备妥蜗牛变成一种有记录稳定状态；残渣及损失分开 | 该步骤投入的可用蜗牛 kg |
| pack | 保护性包装及交付 | required | 每个销售批次；包装材料仅使用时纳入 | 将合格鲜品或保藏品于声明交付门呈现及交接 | 净非海产蜗牛商品 kg |

采收独立于人工养殖，因为待采收动物形成后才发生实体移除；野采使用同一移除节点但无养殖父节点。初级处理记录入厂状态、实际采用时的吐沙/清洗投入，以及按预期用途准则确定的合格、可单独销售降级和剔除去向。保藏只接收可用产品，交付节点接收鲜品或一个实测最终保藏状态。跨批次、节点或期间共享的养殖箱、洗涤站、冷库和包装服务均需服务量及唯一归属记录。

### Process: 陆生蜗牛人工养殖 (`rear`)

#### Inputs

##### Product flows

###### 购入幼体或繁殖种群（`rear_stock`）

仅养殖路线，记录身份、数量/质量、批次及期初期末存量。

分母与范围要求：每 kg 养殖批次待采收蜗牛

原始数量及计算要求：供应商收货及批次库存变化。 原始采集分母类型：process_output。

- 选定流：陆生蜗牛繁殖或幼体种群（UUID 未解析）
- 流属性/单位：Count 或 Mass / item 或 kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_rearing`
- 数量范围：购入种群完整性筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg/kg
  - 基准：每 kg 待采收产出购入种群 kg；暂定而非默认繁殖率
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 适于物种的饲料（`rear_feed`）

称量购入或场内饲料消耗；场内种植负担在上游或前景只归属一次。

分母与范围要求：每 kg 养殖待采收蜗牛

原始数量及计算要求：发放减剩余及库存变化。 原始采集分母类型：process_output。

- 选定流：陆生蜗牛饲料或作物残余，按供应商限定（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_rearing`
- 数量范围：暂定饲料完整性筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg/kg
  - 基准：每 kg 待采收产出的消耗饲料；异常值需调查
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 养殖及清洁供水（`rear_water`）

计量养殖箱维护及卫生供水，不把边界外降水计为购入水。

分母与范围要求：每 kg 养殖待采收蜗牛

原始数量及计算要求：按批次和期间归属的计量消耗。 原始采集分母类型：process_output。

- 选定流：供应工艺水（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_utilities`
- 数量范围：暂定水量完整性筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg
  - 基准：每 kg 待采收产出供应水；异常值需调查
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### 待采收养殖蜗牛（`rear_ready`）

称量待独立采收的生物产出；这是中间状态而非最终销量。

分母与范围要求：每养殖批次

原始数量及计算要求：按批次实测待采收质量。 原始采集分母类型：process_output。

- 选定流：待采收陆生蜗牛（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_rearing`
- 数量范围：暂定数量完整性筛查，不作为默认投入或合格阈值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000
  - 单位：kg/cohort
  - 基准：每养殖批次；超范围需核对原始记录
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### Waste flows

###### 养殖残余及死亡物（`rear_residue`）

饲料残余、剔除动物及垫料按废物去向分开记录；另售物不是废物。

分母与范围要求：每 kg 养殖待采收蜗牛

原始数量及计算要求：称量或依有记录处置量估算。 原始采集分母类型：process_output。

- 选定流：养殖有机残余及死亡物，按成分限定（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_residues`
- 数量范围：暂定数量完整性筛查，不作为默认投入或合格阈值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg/kg
  - 基准：每 kg 养殖待采收蜗牛；超范围需核对原始记录
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### Elementary flows

### Process: 采收或合法采集 (`gather`)

#### Inputs

##### Product flows

###### 养殖待采收蜗牛（`gather_managed_input`）

仅养殖路线；继承养殖批次负担一次。

分母与范围要求：每 kg 原料采集蜗牛

原始数量及计算要求：从 rear 节点移交的质量。 原始采集分母类型：process_output。

- 选定流：待采收陆生蜗牛（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_harvest`
- 数量范围：暂定数量完整性筛查，不作为默认投入或合格阈值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg/kg
  - 基准：每 kg 原料采集蜗牛；超范围需核对原始记录
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 采收或采集能源（`gather_energy`）

若用动力采集设备则计量能耗；人工采集不虚构用电。

分母与范围要求：每 kg 原料采集蜗牛

原始数量及计算要求：按事件计量电力或记录燃料。 原始采集分母类型：process_output。

- 选定流：实际采集能源载体（UUID 未解析）
- 流属性/单位：Energy 或 Mass / kWh、MJ 或 kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_utilities`
- 数量范围：暂定数量完整性筛查，不作为默认投入或合格阈值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kWh/kg
  - 基准：每 kg 原料采集蜗牛；超范围需核对原始记录
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### 采集原料蜗牛（`gather_raw`）

从农场或合法野外地点将实测整只原料非海产蜗牛交给初级准备；夹带物及损失另记。

分母与范围要求：每采集事件

原始数量及计算要求：称量采集批次并记录采集情境。 原始采集分母类型：process_output。

- 选定流：采集原料陆生蜗牛（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_harvest`
- 数量范围：暂定数量完整性筛查，不作为默认投入或合格阈值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000
  - 单位：kg/event
  - 基准：每采集事件；超范围需核对原始记录
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### Waste flows

###### 夹带或不合格采集物（`gather_incidental`）

按实际去向分开杂物、不合格动物及实测现场损失。

分母与范围要求：每 kg 原料采集蜗牛

原始数量及计算要求：称量杂物与不合格量；未采集估计损失另记。 原始采集分母类型：process_output。

- 选定流：成分明确的采集夹带残余（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_residues`
- 数量范围：暂定数量完整性筛查，不作为默认投入或合格阈值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg/kg
  - 基准：每 kg 原料采集蜗牛；超范围需核对原始记录
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### Elementary flows

### Process: 初级处理及适用的分级 (`prepare`)

#### Inputs

##### Product flows

###### 进入准备的原料蜗牛（`prepare_raw`）

记录采集批次及单独购入蜗牛，两者上游负担都须保留。

分母与范围要求：每 kg 准备投入

原始数量及计算要求：称量全部入厂批次并保留来源份额。 原始采集分母类型：process_output。

- 选定流：原料陆生蜗牛（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_preparation`
- 数量范围：暂定数量完整性筛查，不作为默认投入或合格阈值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg/kg
  - 基准：每 kg 准备投入；超范围需核对原始记录
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 吐沙及清洗水（`prepare_water`）

只有实际吐沙或清洗时才记录供应水及污水去向；未清洗路线不能虚构用水。

分母与范围要求：每 kg 准备的原料蜗牛

原始数量及计算要求：计量用水扣除有记录的回收量。 原始采集分母类型：process_output。

- 选定流：供应工艺水（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_utilities`
- 数量范围：暂定用水量筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg
  - 基准：每 kg 准备的原料蜗牛供应水
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### 备妥的合格蜗牛（`prepare_accepted`）

初级处理按声明预期用途及质量准则确定合格商品状态；条件性清洗和分级在鲜品交付或按状态保藏前记录。

分母与范围要求：每 kg 入厂原料蜗牛

原始数量及计算要求：称量合格等级并记录整只或去壳。 原始采集分母类型：process_output。

- 选定流：按预期用途限定的备妥非海产蜗牛商品（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_preparation`
- 数量范围：暂定数量完整性筛查，不作为默认投入或合格阈值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg/kg
  - 基准：每 kg 入厂原料蜗牛；超范围需核对原始记录
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 单独可售的降级等级（`prepare_downgraded`）

仅在声明用途下确有独立销售的降级等级时记录；否则不合格物归废物。

分母与范围要求：每 kg 入厂原料蜗牛

原始数量及计算要求：称量等级并记录独立去向。 原始采集分母类型：process_output。

- 选定流：按预期用途限定的降级非海产蜗牛商品批次（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_preparation`
- 数量范围：暂定数量完整性筛查，不作为默认投入或合格阈值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg/kg
  - 基准：每 kg 入厂原料蜗牛；超范围需核对原始记录
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### Waste flows

###### 不合格蜗牛、蜗牛壳和洗涤残渣（`prepare_reject`）

称量剔除动物、分离的壳、土及其他残渣并记录去向；可售壳另行披露。

分母与范围要求：每 kg 入厂原料蜗牛

原始数量及计算要求：称量并与投入和合格质量核对。 原始采集分母类型：process_output。

- 选定流：按成分及去向限定的准备剔除物（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_residues`
- 数量范围：暂定数量完整性筛查，不作为默认投入或合格阈值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg/kg
  - 基准：每 kg 入厂原料蜗牛；超范围需核对原始记录
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### Elementary flows

### Process: 按状态保藏 (`preserve`)

#### Inputs

##### Product flows

###### 备妥的可用蜗牛（`preserve_input`）

一个实测合格批次进入一种实际冷藏、冷冻、干制、盐渍或盐水浸制路线。

分母与范围要求：每 kg 备妥投入

原始数量及计算要求：处理前称量投入状态。 原始采集分母类型：process_output。

- 选定流：按预期用途限定的备妥非海产蜗牛商品（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_preservation`
- 数量范围：暂定数量完整性筛查，不作为默认投入或合格阈值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg/kg
  - 基准：每 kg 备妥投入；超范围需核对原始记录
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 保藏能源（`preserve_energy`）

仅对实际实施的冷藏、冷冻或干制计量能源；记录载体及共享服务期间。

分母与范围要求：每 kg 稳定状态产出

原始数量及计算要求：计量能源按实测服务量及产出归属一次。 原始采集分母类型：process_output。

- 选定流：实际保藏能源载体（UUID 未解析）
- 流属性/单位：Energy 或 Mass / kWh、MJ 或 kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_utilities`
- 数量范围：暂定保藏能源筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kWh/kg
  - 基准：每 kg 稳定产出；成为基准前须取得路线特定证据
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 盐、盐水和工艺水（`preserve_medium`）

仅盐渍或盐水批次计量实际盐和盐水/工艺水配方；不存在覆盖所有成分的统一 UUID。

分母与范围要求：每 kg 稳定产出

原始数量及计算要求：分别记录各配方成分并测量留存量与排出量。 原始采集分母类型：process_output。

- 选定流：按配方限定的盐和水投入（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_preservation`
- 数量范围：暂定数量完整性筛查，不作为默认投入或合格阈值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg/kg
  - 基准：每 kg 稳定产出；超范围需核对原始记录
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### 保藏非海产蜗牛商品（`preserve_output`）

记录唯一实际形成的冷藏、冷冻、干制、盐渍或盐水浸制可用状态，将实测蜗牛质量交给包装。

分母与范围要求：每 kg 备妥投入

原始数量及计算要求：处理后称量，不含另行排出的游离盐水及包装。 原始采集分母类型：process_output。

- 选定流：按状态限定的保藏非海产蜗牛商品（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_preservation`
- 数量范围：暂定数量完整性筛查，不作为默认投入或合格阈值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg/kg
  - 基准：每 kg 备妥投入；超范围需核对原始记录
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### Waste flows

###### 保藏损失或剔除物（`preserve_reject`）

记录腐败蜗牛、排出盐水及其他残渣；蒸发是质量平衡损失而非废物流。

分母与范围要求：每 kg 备妥投入

原始数量及计算要求：称量分流残余并记录污水去向。 原始采集分母类型：process_output。

- 选定流：按路线限定的保藏残余（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_residues`
- 数量范围：暂定数量完整性筛查，不作为默认投入或合格阈值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg/kg
  - 基准：每 kg 备妥投入；超范围需核对原始记录
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### Elementary flows

### Process: 保护性包装及交付 (`pack`)

#### Inputs

##### Product flows

###### 合格鲜品或保藏批次（`pack_input`）

接收来自准备或保藏的一种实测合格状态；不同状态的批次分开。

分母与范围要求：每 kg 最终净蜗牛产品

原始数量及计算要求：包装前称量合格批次。 原始采集分母类型：process_output。

- 选定流：按状态限定的非海产蜗牛商品（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_handover`
- 数量范围：暂定数量完整性筛查，不作为默认投入或合格阈值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg/kg
  - 基准：每 kg 最终净蜗牛产品；超范围需核对原始记录
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 保护性包装材料（`pack_material`）

使用包装时，按材质及重复使用周期记录实际产品容器及保护性外包，不指定通用固定 UUID；散装交付且无包装时记录零包装材料。

分母与范围要求：每 kg 最终净蜗牛产品

原始数量及计算要求：每次交付的新包装质量加分摊的可周转包装损耗。 原始采集分母类型：process_output。

- 选定流：实际材料的产品容器及运输包装（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_handover`
- 数量范围：暂定包装完整性筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg
  - 基准：每 kg 净产品包装质量；异常值需调查
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### 实际交付门的非海产蜗牛商品（`pack_product`）

包装后扣皮称量单一状态销售批次，报告物种、等级、路线及确切农场/初级加工交付门。

参考产出的原始记录：合格销售蜗牛净质量；游离盐水和包装质量另报。 保留实测合格批次数量及全部必需限定项。下方数量是归一化参考交换，并不表示实际批次只有一个单位。

分母与范围要求：每参考流

- 选定流： 按销售状态和交付门限定的非海产蜗牛商品
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_handover`
- 数量范围：参考产出归一化等式
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg
  - 基准：每 1 kg 声明参考产品；超范围需核对原始记录
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：采集记录（`collected_record`）

##### Waste flows

###### 损坏包装及最终产品剔除（`pack_reject`）

分开损坏包装和产品剔除质量，指定实际回收或处置去向。

分母与范围要求：每 kg 最终净蜗牛产品

原始数量及计算要求：按材料和剔除原因称量。 原始采集分母类型：process_output。

- 选定流：明确材料的包装和产品剔除物（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_residues`
- 数量范围：暂定数量完整性筛查，不作为默认投入或合格阈值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg/kg
  - 基准：每 kg 最终净蜗牛产品；超范围需核对原始记录
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### Elementary flows

## 7. 分配与联产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| a_mass | 所有路线节点 | 按实测质量核对批次投入、合格、降级、剔除、水分变化、分离壳和游离盐水。真正单独销售的降级品或壳需记录收入及实物数量；披露分配依据，不使用统一比例。 | fao-improved-snail-farming |
| a_period | 养殖批次和可周转资产 | 将幼体、饲料、设施维护及种群更换链接到实际批次和报告期；记录期初/期末生物存量及终止，不在其他期间重复归属。 | fao-improved-snail-farming |
| a_shared | 养殖设施、准备、冷库及可周转包装 | 记录资产/服务、消费节点及服务期间；按实测占用、吞吐、计量用量或其他有证据的因果驱动量归属，每项服务只计一次。野采不纳入未使用的农场资产。 | fao-improved-snail-farming |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_rearing | rear | 批次存量、饲料及产出 | 养殖日志 | species,cohort,stock,feed,mortality,ready_mass,dates | 日志及校准称；原始汇总要求：按批次净投入产出求和。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | item;kg | 每事件 | 完整养殖批次与期间 | 实际养殖设施 | 每参考流 | 供应商凭据、库存簿、校准记录；可追溯分子、合格参考产出分母及归一化计算表 |
| cp_harvest | gather | 来源及原料批次 | 采集日志 | route,permit,site,cohort,event,raw_mass,incidental,dates | 批次称及采集记录；原始汇总要求：原料批次不重复求和。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg | 每事件 | 完整采集事件 | 实际农场或野外地点 | 每参考流 | 采集单、许可、称量；可追溯分子、合格参考产出分母及归一化计算表 |
| cp_preparation | prepare | 吐沙、清洗与等级 | 批次日志 | incoming,water,accepted,downgraded,reject,shell,destination | 表计、称量、等级日志；原始汇总要求：每批质量平衡。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg | 每批 | 全部准备批次 | 初级加工地点 | 每参考流 | 等级规范、称及水表记录；可追溯分子、合格参考产出分母及归一化计算表 |
| cp_preservation | preserve | 路线及状态转换 | 配方与批次日志 | initial,final,temperature,time,moisture,salt,brine,reject,energy | 称量、表计、配方、检测；原始汇总要求：按状态批次平衡。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg;kWh | 每实际处理 | 全部保藏批次 | 实际工厂 | 每参考流 | 配方、水分检测、能源账单；可追溯分子、合格参考产出分母及归一化计算表 |
| cp_utilities | rear;gather;prepare;preserve | 水及能源 | 表计或燃料记录 | meter,carrier,node,period,shared_driver | 表计与发票核对；原始汇总要求：按实测驱动量归属一次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg;kWh;MJ | 每计量期 | 完整批次或服务期 | 消费节点 | 每参考流 | 校准、账单、分配表；可追溯分子、合格参考产出分母及归一化计算表 |
| cp_handover | pack | 包装及最终批次 | 发运记录 | state,net_mass,tare,reuse,gate,handover | 校准称及交付单；原始汇总要求：按状态求和合格净销售质量。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg | 每批 | 全部合格销售批次 | 实际交付地点 | 每参考流 | 称量单及追溯；可追溯分子、合格参考产出分母及归一化计算表 |
| cp_residues | rear;gather;prepare;preserve;pack | 废物及损失 | 处置和平衡日志 | composition,mass,destination,reason,period | 称量及处置凭证；原始汇总要求：每个分流去向仅求和一次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg | 每事件 | 全部前景期间 | 实际节点 | 每参考流 | 凭证及平衡记录；可追溯分子、合格参考产出分母及归一化计算表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_net | 最终批次 | 净蜗牛质量＝交付毛质量－包装皮重－单独报告的游离盐水；保留进入产品的盐和水分于实售质量。 | cp_handover;cp_preservation | kg 净产品 | fao-improved-snail-farming |
| c_balance | 准备及保藏 | 实测投入质量加进入产品的水/盐＝合格＋降级＋剔除＋实测损失＋库存变化；报告未解释残差。 | cp_preparation;cp_preservation;cp_residues | kg 平衡残差 | fao-improved-snail-farming |
| c_dry | 状态比较 | 蜗牛干固形物＝实测蜗牛质量乘以（1－实测水分分数），另辨识盐固形物；不使用统一鲜/干换算。 | cp_preservation | kg 蜗牛干固形物 | fao-improved-snail-farming |
| c_unit | 所有投入 | 归一化投入＝同状态和同批次可归属的实测投入除合格净质量；分母为零则失败。 | cp_rearing;cp_harvest;cp_utilities;cp_handover | 每 kg 参考产品投入 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_identity | 所有批次 | 可追溯物种、非海产身份、养殖/野采来源、合法性、预期用途、适用质量准则、整只/去壳及实际销售状态。作为人类食品销售时须有食品安全证据。 | 供应商、采集及批次记录 |
| q_mass | 所有节点 | 校准称毛重/皮重，报告平衡残差；区分壳、包装及游离盐水。 | 校准及批次平衡 |
| q_time | 养殖/共享节点 | 批次、资产/服务期间和更换事件关联，不重复共享负担。 | 期间台账及分配表 |
| q_gap | 未解析身份 | 生成最终交换前核实具体流 UUID 和实际能源载体、包装、废物身份。 | 身份解析记录 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_scope | 参考批次 | 若为海螺、路线或预期用途未记录、缺所列销售状态或实际交付门则失败。食品安全检查只用于人类食品批次。 | un-cpc-3-notes |
| v_route | 过程图 | 养殖批次需养殖及采收；合法野采需采集但不能虚构养殖节点。核对投入来源、准备等级及实施时唯一的状态保藏分支。 | fao-improved-snail-farming;fao-snail-farming-gathering |
| v_balance | 每批 | 要求非负实测净产品、明确剔除及水分/盐水平衡；超场址测量容差的残差需调查，不强制统一出率。 | fao-improved-snail-farming |
| v_attribution | 期间与共享资产 | 不得重复计入批次投入或共享养殖设施、洗涤、冷库及包装负担；记录驱动量、期间及消费节点。 | fao-improved-snail-farming |
| v_uuid | 全部交换 | 不得从未解析语义卡直接发布具体流交换；最终使用前核实产品状态、交付门、属性及单位。 |  |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 按销售状态、预期用途和路线限定的非海产蜗牛商品前景产品数据集。 |
| downstream_use | 具体交换身份核实、审查及发布后可作为 secondary_dataset 或 background_dataset 候选。 |
| allowed_use | 比较同物种/形态/状态/交付门批次，或在明确假设下按实测干固形物归一化。 |
| excluded_use | 海螺、超出所列销售状态的商品、通用鲜干替代、交付后零售和烹饪、无证据 UUID 绑定。 |
| required_metadata | 物种、来源合法性、预期用途及适用质量准则、批次/事件、整只/去壳、销售状态、净质量、水分/游离盐水、交付门、场址与期间。 |
| required_quality_disclosure | 质量平衡、等级/剔除、前景测量覆盖、保藏配方、共享资产分配及未解析身份。 |
| update_trigger | 新增经确认的精确蜗牛流、来源路线、保藏工艺、交付门或实测证据发生变化。 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-notes` | official_guidance | [联合国 CPC 3.0 解释性说明](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) | 类别定义及海螺排除。 |
| `fao-improved-snail-farming` | official_guidance | [FAO，改进蜗牛养殖](https://www.fao.org/4/aq106e/aq106e00.pdf) | 人工养殖、采收、处理和产品路线分解。 |
| `fao-snail-farming-gathering` | official_guidance | [FAO，蜗牛养殖与采集](https://www.fao.org/4/v6200t/v6200T0c.htm) | 区分人工养殖与野外采集。 |
