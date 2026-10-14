---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.natural-honey
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 生产者交付点天然蜂蜜

## 1. 范围与适用性

本 PCR 覆盖蜜蜂天然酿成、由管理蜂群或有记录的野生来源采获、在蜂场/农场或生产者控制的提取室交付的天然蜂蜜。提取、压榨、滴滤、简单过滤和巢蜜呈现均纳入。管理饲喂和蜂箱维护仅适用于定点或转场管理蜂群；野生采集是独立路线。人工或掺假蜜、甜味剂混合物、工业精制及交付后配送均排除。Codex CXS 12-1981 定义天然蜂蜜与巢蜜呈现；FAO 指南区分蜂群管理、采收及初次提取。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.natural-honey |
| classification_refs | CPC 3.0: 02910 Natural honey |
| covered_products | 天然花蜜蜜或蜜露蜜；提取、压榨、滴滤、简单过滤或巢蜜呈现；管理或有记录的野采。 |
| excluded_products | 人工或掺假蜜、甜味剂混合物、工业精制和零售配送。 |
| representative_product | 生产者控制的交付点可售天然蜂蜜成分。 |
| production_route | 管理生物生产母路线区分定点和转场：实际蜂箱运输、饲喂、服务期及空间记录不同。有记录的野采互斥，且不含管理蜂群投入。采收独立；初次提取有条件；生产者分级/交付明确。 |
| market_state | 原蜜或简单初备蜜，可为液态、结晶或巢蜜，声明来源、含水量、等级与交付点。 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 可售天然蜂蜜成分，不含留存巢脾蜡及包装。 |
| How much | 1 kg 蜂蜜成分；巢蜜按实测销售毛重与批次代表性蜡/其他非蜂蜜分量推导。 |
| How well | 天然蜂蜜，声明花蜜/蜜露来源、含水量、真实性、呈现、等级及生产者交付点。 |
| How long or cycle | 声明采收季，并关联蜂群、结转储蜜及共享资产服务期。 |
| reference_flow_link | `saleable_honey` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 生产者交付点天然蜂蜜 |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 管理定点/转场或野采路线；蜂群/来源；蜂场及花蜜/蜜露来源；采收季；含水量；提取/压榨/滴滤/巢蜜状态；巢蜜毛重及蜡质量；等级；生产者交付点 |

平台农场原蜜流 `fec12529-d2e9-429f-8adb-aaa39b2e88b1` 仅固定于完全匹配的输出卡。宽口径参考 UUID 留空。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `honey_constituent_mass` | 参考输出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 称量销售批次。巢蜜以代表性分离或经验证抽样确定蜂蜜、留存蜡及其他非蜂蜜分量；不得把销售毛重等同蜂蜜参考质量。 |
| `comb_fraction_balance` | 巢蜜批次 | Mass | kg | 蜂蜜成分 = 巢蜜销售毛重 - 留存蜡 - 实测其他非蜂蜜质量；保留抽样方法及不确定度。 |
| `moisture_basis` | 蜂蜜批次 | 质量分数 | kg 水/kg 蜂蜜 | 按批次和状态测含水量；按销售状态的蜂蜜成分而非干固体归一。 |
| `carrier_and_freight` | 能源与转场 | 能量或质量距离 | MJ、kWh、kg*km | 保留载体/运输方式；用记录的系数换算，排除交付后配送。 |
| `inventory_reference_normalization` | 所有清单行 | 实际流属性 | 每参考流的交换单位 | 下方清单和采集汇总字段表示每个声明参考流的最终数量。保留全部原始采集记录、原分母限定信息、路线及期间分层、单位换算和分配要求。对每项流，先依原有规则取得以其自身分子单位表示的可归属数量，再除以同一范围的实测合格参考产出数量，并乘以声明参考数量。不得混合物种、状态、交付门或不相容路线；内部移交及共享负担只计一次。合格产出分母缺失、为零或不可追溯时，属于阻断性数据质量问题。暂定 QA 范围仍使用其明确声明的基准，不能视为换算因子或生产默认值。 归一化数量 = 可归属数量 × 声明参考数量 / 实测合格参考产出数量。归一化只执行一次，不得再次除以已使用的分母。 |
| `stage_throughput_linkage` | 阶段记录及最终数据包贡献 | 实际流属性及其原始基准 | 保留原生分子及阶段分母单位 | 保留原始批次、事件、群组、期间及阶段分母与单位。使用实测阶段数量 Q_stage 和有依据的归属关系重建可归属分子 A，再作最终归一化。若报告数量 a_B 对应明确阶段基准 B_stage（例如 1000 kg），则 A = a_B × Q_stage / B_stage。若 r_stage 已是交换单位／阶段单位的单位强度，则改用 A = r_stage × Q_stage，不再次除以 B_stage。可归属原始总量直接使用。最终贡献 = A × 声明参考数量 / 实测合格最终产出。明确换算相容单位，每项归属／分配份额恰应用一次；不得将基准数量下的报告用量或单位强度当成原始总量。阶段移交、损失、拒收、库存、共享服务及分配必须关联同一实际路线、期间和最终产出分层。1000 kg 基准仍明确保留 1000 kg。不得假设单位产率、鲜干质量相同、个体质量相同、剂量质量等价或交付门可互换。关联缺失、单位换算无依据、分母为零或分配不可追溯时，阻断数据包生产。阶段原生数据集保留自身阶段参考；数据包贡献为单独投影。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 管理路线：蜂场接纳蜂群、蜂箱及饲料/材料。野采路线：有身份的自然蜂群/地点及进入、采收服务，不推定管理投入。 |
| starting_condition_role | 管理生产将成熟巢脾移交独立采收；野采从有记录的自然来源开始。采获巢脾进入条件提取或直接巢蜜销售，然后生产者分级/交付。 |
| product_classification_scope | CPC 3.0 02910 天然蜂蜜；蜡、蜂胶或蜂王仅在独立转出时为其他产品。 |
| recursive_input_rule | 购入蜂蜜保留供应商数据集，不计作本地新产蜂蜜；披露来源和质量。 |
| upstream_dataset_requirement | 饲料、蜂箱材料、供水、能源及实际入场货运的数据集与状态、供应商和地域匹配。 |
| disclosure | 路线、来源/蜂群、季节、花蜜/蜜露源、采收/提取、呈现、含水量、生产者交付点、巢蜜蜂蜜/蜡抽样、等级、共产品及共享资产归属。 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `natural_boundary` | 全路线 | 纳入天然蜂蜜至生产者控制交付点；排除添加甜味剂、工业加工与交付后配送。 | `codex-honey-2022`; `fao-bee-products` |
| `route_delta` | 管理与野采 | 定点与转场管理蜂群共用生物生产母路线；转场增加实际蜂箱货运并改变服务/蜜源记录。野采互斥，且无管理蜂群饲料、蜂箱或更换负担。 | `fao-bee-products`; `fao-beekeeping-2021` |
| `capture_handover` | 采收 | 区分蜂群中的巢脾与物理采获巢脾、附带物和损失，单独记录采收交接。 | `fao-bee-products` |
| `first_conditioning` | 提取呈现 | 压榨、滴滤、离心及简单过滤有条件使用；记录投入巢脾、初备蜂蜜、分离蜡与废弃物；巢蜜销售绕过此节点。 | `fao-bee-products`; `codex-honey-2022` |
| `grade_handover` | 生产者交付 | 分级产生多个质量/去向状态时，分别记录可售、降级及废弃物交接。 | `codex-honey-2022` |
| `period_and_assets` | 跨季服务 | 蜂群建立、越冬、采收、更换、蜂箱/车辆/提取器服务均链接使用者及期间；各负担只计一次。 | `fao-beekeeping-2021` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `managed` | 管理蜂群生产 | conditional | 仅管理定点或转场批次，不含野采。 | 产生成熟巢脾，含饲料、水及跨季资产负担。 | 每蜂群季蜂蜜及巢脾毛重 |
| `harvest` | 蜂蜜采收或野生采集 | required | 每批仅一个有记录的管理或野生来源。 | 独立取巢并分类采获、附带物和损失。 | 每批巢脾毛重及蜂蜜/蜡分量 |
| `extraction` | 初级提取与处理 | conditional | 仅非巢蜜销售之压榨、滴滤、离心或简单过滤。 | 将巢脾分为原蜜/初备蜜、分离蜡及废弃物。 | 每提取批蜂蜜和蜡 kg |
| `grading` | 生产者分级与交付 | required | 始终交付；仅在实际去向不同时分级。 | 声明可售、降级及废弃状态，交付参考蜂蜜。 | 1 kg 可售蜂蜜成分 |

### 过程：管理蜂群生产 (`managed`)

#### 输入

##### 产品流

###### 管理蜂群补充饲料 (`feed`)

仅计管理蜂群补充饲料净领用；自然花蜜不算购入饲料。

分母与范围要求：每 1 kg 可售蜂蜜成分

- 选定流: 蜂群补充饲料（UUID 未解析）
- 流属性/单位: Mass / kg
- 数量规则：采用保留边界内损失及其生产负担的已核对饲料投入记录，依 inventory_reference_normalization 和 stage_throughput_linkage 计算可归属最终数据包交换量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_colony`
- 数量范围: 暂定可替换筛选范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 10
  - 单位: kg/kg honey constituent
  - 基准: 每 kg 蜂蜜成分的宽泛初筛，须以实测替换
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 管理蜂群供水 (`water`)

记录实际供水；野采不推定蜂群管理用水。

分母与范围要求：每 1 kg 可售蜂蜜成分

- 选定流: 蜂场供水
- 流属性/单位: Mass / kg
- 数量规则: 按批次采集并与实际交接和库存变动核对。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_colony`
- 数量范围: 暂定可替换筛选范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100
  - 单位: kg/kg honey constituent
  - 基准: 每 kg 蜂蜜成分的宽泛初筛，须以实测替换
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 蜂箱和巢框更换 (`hive_material`)

蜂箱和巢框更换按实测服务期归属。

分母与范围要求：每 1 kg 可售蜂蜜成分

- 选定流: 蜂箱更换材料（UUID 未解析）
- 流属性/单位: Mass / kg
- 数量规则: 按批次采集并与实际交接和库存变动核对。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_assets`
- 数量范围: 暂定可替换筛选范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 10
  - 单位: kg/kg honey constituent
  - 基准: 每 kg 蜂蜜成分的宽泛初筛，须以实测替换
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

无预设流；如有实际交换须记录。

##### 基本流

无预设流；如有实际交换须记录。

#### 输出

##### 产品流

###### 蜂群交出的成熟含蜜巢脾 (`mature_comb`)

成熟巢脾移交独立采收；记录蜂蜜与蜡分量。

分母与范围要求：每 1 kg 可售蜂蜜成分

- 选定流: 成熟含蜜巢脾（UUID 未解析）
- 流属性/单位: Mass / kg gross comb
- 数量规则: 按批次采集并与实际交接和库存变动核对。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_harvest`
- 数量范围: 暂定可替换筛选范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1
  - 上限: 6
  - 单位: kg gross comb/kg honey constituent
  - 基准: 每 kg 蜂蜜成分的宽泛初筛，须以实测替换
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

无预设流；如有实际交换须记录。

##### 基本流

无预设流；如有实际交换须记录。

### 过程：蜂蜜采收或野生采集 (`harvest`)

#### 输入

##### 产品流

###### 进入采收的管理巢脾 (`managed_comb_input`)

仅管理路线的条件内部移交；野采另声明自然来源。

分母与范围要求：每 1 kg 可售蜂蜜成分

- 选定流: 成熟含蜜巢脾（UUID 未解析）
- 流属性/单位: Mass / kg gross comb
- 数量规则: 按批次采集并与实际交接和库存变动核对。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_harvest`
- 数量范围: 暂定可替换筛选范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 6
  - 单位: kg gross comb/kg honey constituent
  - 基准: 每 kg 蜂蜜成分的宽泛初筛，须以实测替换
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 实际蜂箱转场货运 (`migration_freight`)

仅实际管理蜂群转场货运；排除交付后配送。

分母与范围要求：每 1 kg 可售蜂蜜成分

- 选定流: 公路货运服务
- 流属性/单位: Mass / kg*km
- 数量规则: 按批次采集并与实际交接和库存变动核对。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_migration`
- 数量范围: 暂定可替换筛选范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg*km/kg honey constituent
  - 基准: 每 kg 蜂蜜成分的宽泛初筛，须以实测替换
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

无预设流；如有实际交换须记录。

##### 基本流

无预设流；如有实际交换须记录。

#### 输出

##### 产品流

###### 采获含蜜巢脾 (`harvested_comb`)

称量单独采获巢脾及抽样蜂蜜/蜡分量；移交巢蜜销售或提取。

分母与范围要求：每 1 kg 可售蜂蜜成分

- 选定流: 采获含蜜巢脾（UUID 未解析）
- 流属性/单位: Mass / kg gross comb
- 数量规则: 按批次采集并与实际交接和库存变动核对。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_harvest`
- 数量范围: 暂定可替换筛选范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1
  - 上限: 6
  - 单位: kg gross comb/kg honey constituent
  - 基准: 每 kg 蜂蜜成分的宽泛初筛，须以实测替换
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

###### 采收废弃物与附带物 (`harvest_reject`)

记录育虫污染或变质巢脾与实际废弃去向。

分母与范围要求：每 1 kg 可售蜂蜜成分

- 选定流: 废弃巢脾（UUID 未解析）
- 流属性/单位: Mass / kg
- 数量规则: 按批次采集并与实际交接和库存变动核对。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_harvest`
- 数量范围: 暂定可替换筛选范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 2
  - 单位: kg/kg honey constituent
  - 基准: 每 kg 蜂蜜成分的宽泛初筛，须以实测替换
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 基本流

无预设流；如有实际交换须记录。

### 过程：初级提取与处理 (`extraction`)

#### 输入

##### 产品流

###### 进入初次提取的巢脾 (`comb_extraction_input`)

仅非巢蜜销售启用压榨、滴滤或离心。

分母与范围要求：每 1 kg 可售蜂蜜成分

- 选定流: 采获含蜜巢脾（UUID 未解析）
- 流属性/单位: Mass / kg gross comb
- 数量规则: 按批次采集并与实际交接和库存变动核对。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_extraction`
- 数量范围: 暂定可替换筛选范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1
  - 上限: 6
  - 单位: kg gross comb/kg honey constituent
  - 基准: 每 kg 蜂蜜成分的宽泛初筛，须以实测替换
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 设备供电点的电力（`extraction_energy_electricity`）

**extraction_energy 的采集范围与适用性。** 下列具体身份分别列卡，仅在原有过程范围内有实际使用或产生记录时启用；不是必用材料清单或默认配方。未发生须有依据，缺少记录不得记为零。其他实际材料必须另建具体身份卡，不能套用以下名称或 UUID。保留原有归属和边界，避免与包含这些投入的外包服务双计。

计量提取与初滤用电或燃料。
分母与范围要求：每 1 kg 可售蜂蜜成分
能量核算基准：按载体分别保留原生单位数量。电力 kWh 乘 3.6 换算为 MJ；燃料质量或体积仅凭有证据的载体专属热值及必要密度换算。本卡记录 MJ 能量核算量，不是质量交换或多载体合并交换。最终交换保留实际载体的流属性和单位；不得直接相加 kg、L、kWh 与 MJ，也不得把多载体总量绑定给单一载体 UUID。

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 电力记录供应点；燃料保留品种、密度和热值口径；外购热量与本地燃料产热互斥核算，禁止把供热燃料再计一次。

- 选定流：设备供电点的电力
- 流属性 / 单位：能源 / kWh
- 数量规则：依 `cp_extraction` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_extraction`
- 来源：`fao-agricultural-energy`

###### 供应设备的柴油（`extraction_energy_diesel`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 电力记录供应点；燃料保留品种、密度和热值口径；外购热量与本地燃料产热互斥核算，禁止把供热燃料再计一次。

- 选定流：供应设备的柴油
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_extraction` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_extraction`
- 来源：`fao-agricultural-energy`

###### 提取室清洁用水 (`cleaning_water`)

记录食品接触面实际清洁用水。

分母与范围要求：每 1 kg 可售蜂蜜成分

- 选定流: 工艺清洁用水
- 流属性/单位: Mass / kg
- 数量规则: 按批次采集并与实际交接和库存变动核对。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_extraction`
- 数量范围: 暂定可替换筛选范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100
  - 单位: kg/kg honey constituent
  - 基准: 每 kg 蜂蜜成分的宽泛初筛，须以实测替换
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

无预设流；如有实际交换须记录。

##### 基本流

无预设流；如有实际交换须记录。

#### 输出

##### 产品流

###### 农场门口提取原蜜 (`raw_farm_honey`)

固定身份仅用于生产农场门口转交的原蜜，不代表所有呈现。

分母与范围要求：每 1 kg 可售蜂蜜成分

- 选定流: 农场门口天然原蜜 `fec12529-d2e9-429f-8adb-aaa39b2e88b1`
- 流属性/单位: Mass / kg honey
- 数量规则: 按批次采集并与实际交接和库存变动核对。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_extraction`
- 数量范围: 暂定可替换筛选范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 2
  - 单位: kg honey/kg honey constituent
  - 基准: 每 kg 蜂蜜成分的宽泛初筛，须以实测替换
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 生产者提取室交接的初备蜂蜜 (`room_prepared_honey`)

当实际交付点或状态不符合已核实的农场原蜜状态时使用此替代卡；不得复用原蜜 UUID。

分母与范围要求：每 1 kg 可售蜂蜜成分

- 选定流：生产者提取室初备天然蜂蜜（UUID 未解析）
- 流属性/单位：Mass / kg honey
- 数量规则：称量初备输出并考虑库存变化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_extraction`
- 数量范围：暂定可替换筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kg honey/kg honey constituent
  - 基准：宽泛初筛；以实测批次替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 单独转出的回收蜂蜡 (`recovered_wax`)

仅分离并独立转出的蜡为共产品；留在售出巢蜜中的蜡排除。

分母与范围要求：每 1 kg 可售蜂蜜成分

- 选定流: 回收蜂蜡（UUID 未解析）
- 流属性/单位: Mass / kg wax
- 数量规则: 按批次采集并与实际交接和库存变动核对。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_extraction`
- 数量范围: 暂定可替换筛选范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 2
  - 单位: kg wax/kg honey constituent
  - 基准: 每 kg 蜂蜜成分的宽泛初筛，须以实测替换
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

###### 提取废弃物与残渣 (`extraction_reject`)

变质蜜、脏蜡和去除的杂物按废物记录，除非有独立验收的产品去向。

分母与范围要求：每 1 kg 可售蜂蜜成分

- 选定流：蜂蜜提取废弃物（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：称量废弃物并记录去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_extraction`
- 数量范围：暂定可替换筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kg/kg honey constituent
  - 基准：宽泛初筛；以实测批次替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

无预设流；如有实际交换须记录。

### 过程：生产者分级与交付 (`grading`)

#### 输入

##### 产品流

###### 进入分级的蜂蜜或巢脾 (`grade_input`)

声明提取蜜或巢蜜呈现并核对投入蜂蜜与蜡。

分母与范围要求：每 1 kg 可售蜂蜜成分

- 选定流: 分级前天然蜂蜜（UUID 未解析）
- 流属性/单位: Mass / kg honey-equivalent
- 数量规则: 按批次采集并与实际交接和库存变动核对。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_grading`
- 数量范围: 暂定可替换筛选范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1
  - 上限: 3
  - 单位: kg honey-equivalent/kg honey constituent
  - 基准: 每 kg 蜂蜜成分的宽泛初筛，须以实测替换
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

无预设流；如有实际交换须记录。

##### 基本流

无预设流；如有实际交换须记录。

#### 输出

##### 产品流

###### 生产者交付点可售天然蜂蜜 (`saleable_honey`)

参考输出是蜂蜜成分；巢蜜销售毛重包括蜡，须单独抽样并从分母排除。

分母与范围要求：每 1 kg 可售蜂蜜成分

参考产出的原始记录：按批次采集并与实际交接和库存变动核对。 保留实测合格批次数量及全部必需限定项。下方数量是归一化参考交换，并不表示实际批次只有一个单位。

- 选定流: 生产者交付点天然蜂蜜
- 流属性/单位: Mass / kg
- 数量规则：1 千克
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_grading`
- 数量范围: 参考归一化恒等式
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1
  - 上限: 1
  - 单位: kg honey/kg honey constituent
  - 基准: 按定义每 1 kg 参考恰好含 1 kg 蜂蜜成分
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 方法公式 (`method_formula`)
  - 来源: `codex-honey-2022`

###### 单独转出的降级蜂蜜 (`downgraded_honey`)

记录等级、质量及独立去向；否则不适用物归为废弃物。

分母与范围要求：每 1 kg 可售蜂蜜成分

- 选定流: 降级蜂蜜（UUID 未解析）
- 流属性/单位: Mass / kg honey
- 数量规则: 按批次采集并与实际交接和库存变动核对。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_grading`
- 数量范围: 暂定可替换筛选范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 2
  - 单位: kg honey/kg honey constituent
  - 基准: 每 kg 蜂蜜成分的宽泛初筛，须以实测替换
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

###### 废弃蜂蜜及巢脾材料 (`grading_reject`)

称量变质或不可回收材料并记录去向。

分母与范围要求：每 1 kg 可售蜂蜜成分

- 选定流: 废弃蜂蜜或巢脾（UUID 未解析）
- 流属性/单位: Mass / kg
- 数量规则: 按批次采集并与实际交接和库存变动核对。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_grading`
- 数量范围: 暂定可替换筛选范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 2
  - 单位: kg/kg honey constituent
  - 基准: 每 kg 蜂蜜成分的宽泛初筛，须以实测替换
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 基本流

无预设流；如有实际交换须记录。

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `output_set` | 蜂群、采收、提取 | 在实际交接点列全独立转出的蜂蜜、蜡、蜂胶、蜂王或蜂群产品。留在售出巢蜜中的蜡是销售呈现的一部分，不是独立转出蜡。无证据不能把附带物/废弃物当产品。 | `fao-bee-products`; `codex-honey-2022` |
| `allocation_precedence` | 真正联合负担 | 先分开可直接计量的过程。无法分离的联合负担按同交付点、同期间独立产品的实测经济价值分配；保留价格、质量和敏感性。不得再对同负担替代或第二次质量分配。 | `fao-bee-products` |
| `period_attribution` | 管理蜂群 | 越冬、建群、结转储蜜、更换及终止归至具体服务/采收期间，依据观察到的服务与产出分配；不得跨季重复入账。 | `fao-beekeeping-2021` |
| `shared_asset` | 蜂箱、运输、提取器 | 标识各使用节点和服务期；按实测小时、行程或吞吐量将共享负担只分配一次。 | `fao-beekeeping-2021` |

具体身份卡不继承原集合卡的数量范围。实际数量由原始记录、库存/计量对账及声明参考流计算；在取得对应身份、单位、期间和边界一致的证据前，不提供默认量或数值筛查范围。缺少范围是质量披露项，并非零投入或完整性证明。

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_colony` | `managed` | 管理饲料、水、巢脾 | 蜂箱日志 | 蜂群 id；路线；饲料领退；水；季节；成熟巢脾 | 有日期的日志及票据；原始汇总要求： 按 calc_feed_supply_and_intake 区分承担生产负担的饲料投入、实际采食量及损失；保留原生库存及期间记录，可归属量对合格最终产出归一化一次。 | kg | 每事件 | 完整采收季 | 蜂场 | 每参考流 | 蜂箱日志及库存核对；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_assets` | `managed` | 蜂箱及共享资产 | 资产登记 | 资产 id；质量；服务寿命；使用节点；小时 | 票据及服务日志；原始汇总要求：按使用一次归属。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg、h | 购入及年度 | 完整服务寿命 | 所有使用者 | 每参考流 | 资产台账；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_migration` | `harvest` | 蜂箱货运 | 行程日志 | 蜂箱载荷；起讫地；距离；方式 | 调度及里程计；原始汇总要求：载荷乘距离。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg、km | 每行程 | 所代表季节 | 转场蜂场 | 每参考流 | 行程证据；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_harvest` | `harvest` | 巢脾及废弃物 | 批次采收日志 | 管理或野生来源；日期；巢脾毛重；抽样蜂蜜；蜡；损失；去向 | 校准秤及样品；原始汇总要求：核对采获和损失。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg | 每批 | 完整季节 | 生产者/来源 | 每参考流 | 秤单及抽样日志；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_extraction` | `extraction` | 蜂蜜、蜡、公用工程 | 批次日志 | 巢脾投入；蜂蜜；蜡；废弃物；水；能源；含水量 | 秤、表计及检测；原始汇总要求：物料及公用工程核对。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg、MJ | 每批 | 完整季节 | 生产者提取室 | 每参考流 | 批次单/校准；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_grading` | `grading` | 参考及等级输出 | 销售批次 | 呈现；销售毛重；抽样蜂蜜/蜡/其他分量；可售；降级；废弃；交付点；价格 | 称量及代表性破坏性巢蜜样品；原始汇总要求：毛重减蜡/其他 = 蜂蜜成分。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg、分数 | 每批和样品 | 完整季节 | 生产者交付点 | 每参考流 | 销售票据及抽样方法；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_feed_supply_and_intake` | `managed` | 饲料投入、采食及损失 | 库存、收货、发料及损失台账 | 饲料身份/来源；群体/阶段；期间；期初/期末库存；收货；自产供给；未用退回/转出；未食用/变质质量及去向；原物/干物质；实际采食量；负担归属；合格最终产出 | 按 calc_feed_supply_and_intake 核对匹配的库存、称重、日粮/采草估算及处置记录。保留原始总量及阶段分母，生产与处理负担各归属一次，再对合格最终产出归一化。 | kg as-fed; kg DM | 每次发料及期间结算 | 完整所代表群体/期间 | 实际运行饲喂节点 | 每参考流 | 库存及供应商记录；水分证据；损失及无重复核算核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `comb_honey_conversion` | 巢蜜批次 | 蜂蜜 kg = 巢蜜销售毛重 kg - 留存巢脾蜡 kg - 实测其他非蜂蜜 kg。使用批次代表性分离或经验证抽样并报告不确定度；不得假定巢蜜毛重等于蜂蜜。 | 毛重；蜂蜜/蜡/其他抽样分数 | 参考蜂蜜 kg | `codex-honey-2022` |
| `honey_wax_balance` | 每批 | 蜂蜜按可售、降级、损失及库存变动核对；蜡按留存、回收与丢弃分别核对。 | 采收、提取、分级记录 | 质量残差 | `fao-bee-products` |
| `season_asset_assignment` | 共享服务 | 各资产负担按实际节点期间服务份额归属；所有使用者期间份额和为一。 | 资产与生产日志 | 已归属负担 | `fao-beekeeping-2021` |
| `normalization` | 全交换 | 可归属清单除以可售蜂蜜成分 kg，不除以巢蜜销售毛重。 | 已归属清单；蜂蜜 kg | 每参考 kg 交换 | `codex-honey-2022` |
| `calc_feed_supply_and_intake` | `feed` | 所代表作业使用的饲料投入 = 期初饲料库存 + 收货 + 进入本作业的自产饲料 - 期末饲料库存 - 有记录的未用退回或转出。该投入保留边界内变质、拒食及被丢弃的剩余料。实际采食量 = 该投入 - 实测未食用/丢弃损失，并匹配水分/干物质与期间；采食量仅用于营养及代谢计算。期初库存承接原有负担，不是再次采购。追溯未用退回或转出的物料及负担去向，不自动给予替代抵扣。同一饲料的生产负担由采购饲料数据集或已建模自产作物/采集节点承担一次，不得两者并计。实际废料处理及粪污贡献计一次，不再次添加饲料生产负担。 | `cp_feed_supply_and_intake` | 同一原物/干物质基准下分开的饲料投入、采食及损失数量 | `fao-feed-loss-accounting-2018` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `route_identity` | 每批 | 识别定点、转场或野生来源，野采不推定管理投入。 | 来源/路线日志 |
| `comb_fraction` | 巢蜜销售 | 记录样本量、分离法、蜂蜜/蜡分数及不确定度；缺少有据换算则不能建立定量巢蜜数据集。 | 抽样记录 |
| `lot_balance` | 全批 | 解释蜂蜜和蜡残差、等级/废弃去向及库存。 | 核对后的批次单 |
| `shared_periods` | 资产/蜂群 | 记录期间服务以及蜂群、蜂箱、货运和提取器的单次归属。 | 资产/季节台账 |

## 9. 校验规则

| rule_id | Applies to | Rule | severity |
| --- | --- | --- | --- |
| `natural_identity` | 参考 | 拒绝人工/掺假或添加甜味剂的产品；要求来源、含水量、呈现和交付点。 | error |
| `comb_reference_mass` | 巢蜜销售 | 要求抽样蜂蜜成分和留存蜡；不得默用巢蜜毛重作参考量。 | error |
| `wax_no_double_count` | 巢蜜及蜡 | 拒绝同一蜡既留在售出巢蜜，又独立转出为回收蜡。 | error |
| `terminal_output_once` | 农场原蜜及可售蜂蜜 | 若农场原蜜输出就是可售参考批次，最终交付卡仅作报告汇总，不作为第二个物理产品交换；否则不得激活农场原蜜卡。 | error |
| `route_exclusivity` | 全批 | 每批只能选定点管理、转场管理或野采；野采不得承担管理饲料/蜂箱/转场。 | error |
| `states_and_destinations` | 全输出 | 核对采获、初备、降级、废弃及可售状态、交付点与去向。 | error |
| `period_once` | 跨季/共享 | 拒绝蜂群或共享资产负担在期间和节点重复入账。 | error |
| `concrete_binding` | 全交换 | 按实测记录展开待确认流身份并确认每个最终交换 UUID；未解析身份保持空白。 | error |
| `v_foreground_emission_responsibility` | 实际运行节点及链接服务 | 适用时记录现场燃料燃烧及制冷剂泄漏的核算责任：须为量化前景排放，或明确覆盖它们的具名链接过程，不能仅凭燃料供应或电力生产投入视为已包含。特殊类群生物及残余物排放须依物种/路线证据评估，不套通用畜牧因子。标明尚未落实的路径，不宣称清单完整；记录有依据的不存在结论并防止上/下游重复核算。 | |
| `v_feed_supply_intake_separation` | 全部饲料投入 | 拒绝扣除边界内拒食、变质或丢弃剩余料且未保留其生产负担的上游饲料清单。按 calc_feed_supply_and_intake 核对投入、采食、库存、转移及损失去向。不得把采食量当作饲料投入，不得假设自产饲料零负担或自动给予替代产品抵扣。 | `fao-feed-loss-accounting-2018` |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 生产者交付点天然蜂蜜前景生产数据集。 |
| downstream_use | 经路线和状态匹配审查后作二级或背景数据。 |
| allowed_use | 交付点、呈现、成分质量及分配已知的天然蜂蜜。 |
| excluded_use | 人工蜜、混合物、工业精制、未测巢蜜换算及交付后零售。 |
| required_metadata | 路线、蜂群/来源、季节、花蜜/蜜露源、含水量、提取、呈现、交付点、巢蜜毛重/蜂蜜/蜡质量、等级及共产品转移。 |
| required_quality_disclosure | 抽样不确定度、质量残差、估算公用工程、UUID 缺口与共享负担分配。 |
| update_trigger | 新路线、提取技术、来源组合、呈现、共产品交接或身份依据。 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-honey-2022` | standard | Codex CXS 12-1981 Standard for Honey, amended 2022; https://www.fao.org/fao-who-codexalimentarius/codex-texts/standards/en | 天然蜂蜜身份、呈现、质量与质量基准。 |
| `fao-bee-products` | official_guidance | FAO, Value-added products from beekeeping, Ch. 2; https://www.fao.org/4/w0076e/w0076e05.htm | 蜂群、采收、提取、蜂蜜/蜡输出。 |
| `fao-beekeeping-2021` | official_guidance | FAO, Good beekeeping practices for sustainable apiculture (2021); https://www.fao.org/family-farming/detail/en/c/1442505/ | 管理生产、季节记录及服务归属。 |
| `fao-feed-loss-accounting-2018` | official_guidance | [FAO 2018, Environmental performance of pig supply chains, section 11.2.2](https://www.fao.org/4/i8686en/I8686EN.pdf) | 饲料投入、采食及废料负担的区分，不提供动物参数。将该核算原则用于声明类群是本 PCR 的方法学选择；不移植猪的日粮或排放因子。 |
| `fao-agricultural-energy` | official_guidance | FAO Energy demand and consumption in African agriculture, Annex C case-study results, https://www.fao.org/4/v9766e/v9766e08.htm | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
