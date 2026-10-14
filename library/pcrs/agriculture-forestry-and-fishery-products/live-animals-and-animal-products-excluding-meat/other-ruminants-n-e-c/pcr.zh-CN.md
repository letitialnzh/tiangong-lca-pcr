---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.other-ruminants-n-e-c
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他未另分类反刍动物活体

## 1. 范围与适用性

本 PCR 适用于在实际养殖场或有合法证明的活体捕获交接点，按物种确定身份的其他反刍动物活体。联合国举例包括鹿、羚羊、鬣羚、斑羚、鼷鹿和麝，但 CPC 举例绝不构成捕获、饲养或交易受保护物种的法律许可。排除牛、水牛、其他单列分类的牛科动物、骆驼科、绵羊和山羊。羚羊与牛科的分类重叠须依据实际物种裁定，不得双重归类。死亡动物、肉、皮、鹿茸等产品及交接后的买方运输不属于活体参考产品。不得使用不区分物种的平均清单或通用每头质量。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.other-ruminants-n-e-c` |
| classification_refs | CPC 3.0 `02129` |
| covered_products | 有物种及合法来源证明的鹿、羚羊、鬣羚、斑羚、鼷鹿、麝或其他符合残余类别的反刍动物活体 |
| excluded_products | 单列分类的牛科动物、骆驼科、绵羊、山羊；死亡动物、肉、皮、脱离动物的角及后续运输 |
| representative_product | 在实际交接点称重的单一合格物种活体 1 kg |
| production_route | 每批次互斥选择有管理的繁育/饲养或有文件证明的合法活体捕获 |
| market_state | 活体、未经加工，物种与来源有合法证明 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 实际交接点的单一物种、符合残余分类的反刍动物活体 |
| How much | 实测活重 1 kg，同时报告头数和逐头质量 |
| How well | 活体；声明物种、性别/年龄组、健康及验收状况和合法来源 |
| How long or cycle | 声明养殖群体/繁殖季或捕获行动及共用服务期间 |
| reference_flow_link | `live_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 按物种确定的其他反刍动物活体 |
| Reference flow property | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 物种/分类群；残余分类裁定；合法来源及司法辖区；路线；性别/年龄组；头数；活重；健康；交接点；群体/行动 |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `m_live` | 活体参考及转移 | 质量 | kg | 在每个实际交接点称重，并按物种及组别核对头数；不得使用通用 kg/头换算。 |
| `m_period` | 畜群、行动及共用设施 | 时间 | 日或声明期间 | 将投入、产出、死亡及共用服务关联至实际群体、捕获行动和服务期间。 |
| `inventory_reference_normalization` | 所有清单行 | 实际流属性 | 每参考流的交换单位 | 下方清单和采集汇总字段表示每个声明参考流的最终数量。保留全部原始采集记录、原分母限定信息、路线及期间分层、单位换算和分配要求。对每项流，先依原有规则取得以其自身分子单位表示的可归属数量，再除以同一范围的实测合格参考产出数量，并乘以声明参考数量。不得混合物种、状态、交付门或不相容路线；内部移交及共享负担只计一次。合格产出分母缺失、为零或不可追溯时，属于阻断性数据质量问题。暂定 QA 范围仍使用其明确声明的基准，不能视为换算因子或生产默认值。 归一化数量 = 可归属数量 × 声明参考数量 / 实测合格参考产出数量。归一化只执行一次，不得再次除以已使用的分母。 |
| `stage_throughput_linkage` | 阶段记录及最终数据包贡献 | 实际流属性及其原始基准 | 保留原生分子及阶段分母单位 | 保留原始批次、事件、群组、期间及阶段分母与单位。使用实测阶段数量 Q_stage 和有依据的归属关系重建可归属分子 A，再作最终归一化。若报告数量 a_B 对应明确阶段基准 B_stage（例如 1000 kg），则 A = a_B × Q_stage / B_stage。若 r_stage 已是交换单位／阶段单位的单位强度，则改用 A = r_stage × Q_stage，不再次除以 B_stage。可归属原始总量直接使用。最终贡献 = A × 声明参考数量 / 实测合格最终产出。明确换算相容单位，每项归属／分配份额恰应用一次；不得将基准数量下的报告用量或单位强度当成原始总量。阶段移交、损失、拒收、库存、共享服务及分配必须关联同一实际路线、期间和最终产出分层。1000 kg 基准仍明确保留 1000 kg。不得假设单位产率、鲜干质量相同、个体质量相同、剂量质量等价或交付门可互换。关联缺失、单位换算无依据、分母为零或分配不可追溯时，阻断数据包生产。阶段原生数据集保留自身阶段参考；数据包贡献为单独投影。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 养殖：按物种、组别、头数、质量和先前负担声明期初畜群或购入活体。捕获：有文件证明的合法捕获行动及来源权利，不虚构繁育。 |
| starting_condition_role | 养殖生物存栏或上游产品投入；捕获来源背景；购入动物不能作为零负担投入 |
| product_classification_scope | 经物种层面排除后的 CPC 3.0 `02129` 其他反刍动物活体 |
| recursive_input_rule | 将购入的同类活体只连接一次上游生产者数据集；内部转移不是第二个最终产出。 |
| upstream_dataset_requirement | 按真实供应商、身份、状态、地区和交接点匹配购入动物、饲料、水、能源和服务；保留捕获授权。 |
| disclosure | 物种、残余分类裁定、合法来源、路线、群体/行动、头数/质量、死亡、产品、交接点及共用服务期间。 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `b_species` | 每批次 | 物种身份与合法来源是先决条件；CPC 收录不等于交易许可。明确解决与牛科的重叠。 | `un-cpc-2025`; `woah-wildlife-2021` |
| `b_routes` | 养殖或捕获 | 养殖计入真实繁育/饲养及购入存栏负担；捕获只计入授权行动、短期留置和损失，不虚构整个养殖期。边界止于实际活体交接。 | `fao-deer-farming`; `woah-wildlife-2021` |
| `b_shared` | 共用设施 | 将围栏、供水及处理服务按真实使用节点和期间分摊一次；排除屠宰和交接后的买方行程。 | `fao-deer-farming`; `woah-transport` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `herd` | 繁育及饲养合格反刍动物活体 | conditional | 有证据的管理式养殖来源 | 管理式生物生产 | 每 kg 最终活体产出 |
| `capture` | 捕获并短暂留置合格反刍动物活体 | conditional | 有文件证明的合法来源；与养殖互斥 | 独立捕获 | 每 kg 最终活体产出 |
| `handover` | 活体筛选、称重及交接 | required | 实际生产者或捕获交接点 | 最终活体验收 | 每 kg 最终活体产出 |

养殖节点从期初或购入动物开始，追踪饲料、照护、群体存栏变化和死亡。捕获从真实合法权利及行动开始，不继承虚构的繁育。交接节点独立核查来源节点后的状况、头数、质量及验收。鹿茸、乳、繁殖服务、可用粪肥等只有在真实单独交接时才成为独立产品；活体交接不生产肉。共用设施按实际节点及期间分摊。

### 过程：繁育及饲养合格反刍动物活体（`herd`）

#### 输入

##### 产品流

###### 购入或期初活体存栏（`herd_stock`）

购入动物承担上游负担；期初动物须披露群体及既有负担。

分母与范围要求：每 kg 最终活体产出

- 选定流：按物种确定的繁殖或幼年活体
- 流属性/单位：质量 / kg
- 数量规则：按物种、组别和购入/期初事件称重
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_live`
- 数量范围：暂定非负存栏筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg/kg 活体产出
  - 基准：每 kg 最终活体产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 畜群饲料与粗饲料（`herd_feed`）

按群体记录与物种相符的日粮、放牧及购入份额。

分母与范围要求：每 kg 最终活体产出

- 选定流：实际物种特定饲料与粗饲料
- 流属性/单位：质量 / kg
- 数量规则：采用保留边界内损失及其生产负担的已核对饲料投入记录，依 inventory_reference_normalization 和 stage_throughput_linkage 计算可归属最终数据包交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_inputs`
- 数量范围：暂定非负饲料筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg 活体产出
  - 基准：每 kg 最终活体产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 畜群供水（`herd_water`）

记录实际供应的饮水和清洁水，不将降水算作供应水。

分母与范围要求：每 kg 最终活体产出

- 选定流：供应水
- 流属性/单位：质量 / kg
- 数量规则：计量或核对供应水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_inputs`
- 数量范围：暂定非负用水筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg 活体产出
  - 基准：每 kg 最终活体产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 设备供电点的电力（`herd_energy_electricity`）

**herd_energy 的采集范围与适用性。** 下列具体身份分别列卡，仅在原有过程范围内有实际使用或产生记录时启用；不是必用材料清单或默认配方。未发生须有依据，缺少记录不得记为零。其他实际材料必须另建具体身份卡，不能套用以下名称或 UUID。保留原有归属和边界，避免与包含这些投入的外包服务双计。

记录畜牧、供水和处理设施的实际燃料或电力。
分母与范围要求：每 kg 最终活体产出

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 电力记录供应点；燃料保留品种、密度和热值口径；外购热量与本地燃料产热互斥核算，禁止把供热燃料再计一次。

- 选定流：设备供电点的电力
- 流属性 / 单位：能源 / kWh
- 数量规则：依 `cp_inputs` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_inputs`
- 来源：`fao-agricultural-energy`

###### 供应设备的柴油（`herd_energy_diesel`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 电力记录供应点；燃料保留品种、密度和热值口径；外购热量与本地燃料产热互斥核算，禁止把供热燃料再计一次。

- 选定流：供应设备的柴油
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_inputs` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_inputs`
- 来源：`fao-agricultural-energy`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转至筛选的畜群活体（`herd_live`）

这是内部活体转移，不是第二次最终销售。

分母与范围要求：每 kg 最终活体产出

- 选定流：按物种确定的反刍动物活体
- 流属性/单位：质量 / kg
- 数量规则：按物种及头数称重活体转移
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_live`
- 数量范围：暂定转移筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg/kg 活体产出
  - 基准：每 kg 最终活体产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 独立销售的养殖产品（`herd_coproduct`）

仅对实际单独交接的鹿茸、乳、繁殖服务或其他合法产品使用条件性集合采集要求；前景记录须展开具体身份和单位。不能仅凭物种推断产出。

分母与范围要求：每 kg 最终活体产出

- 选定流：实际单独销售的养殖产品或服务
- 流属性/单位：产品特定质量、数量或服务单位
- 数量规则：在独立交接点计量各销售产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_outputs`
- 数量范围：暂定独立产出筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：声明产品单位/kg 活体产出
  - 基准：每 kg 最终活体产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 畜群死亡尸体（`herd_mortality`）

按死因、群体和实际处置目的地记录死亡动物；它们不是活体存栏或肉类产品。

分母与范围要求：每 kg 最终活体产出

- 选定流：实际处置点的畜群死亡尸体
- 流属性/单位：质量 / kg
- 数量规则：按群体和目的地计量尸体处置质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_outputs`
- 数量范围：暂定非负损失筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg 活体产出
  - 基准：每 kg 最终活体产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 弃置畜群粪肥（`herd_manure`）

只在真实处置点将实际弃置的粪肥列为废物；单独销售的可用粪肥是另有身份和数量的产品。

分母与范围要求：每 kg 最终活体产出

- 选定流：实际处置点的弃置粪肥
- 流属性/单位：质量 / kg
- 数量规则：按群体及目的地计量弃置粪肥
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_outputs`
- 数量范围：暂定非负粪肥筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg 活体产出
  - 基准：每 kg 最终活体产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 肠道生物源甲烷排放至空气（`review_herd_enteric_ch4`）

仅适用于实际受管理物种及类别存在的消化路径；用有记录的动物活动/采食量及有依据的方法计算。不得将牛类因子套用于尚未表征的物种。 仅适用于实际运行的 `herd` 节点；保留其既有路线及期间条件。数据集须落实该路径的真实活动、方法适用性及有证据的范围或物理界限，才能认为清单完整。证据缺失不等于零或 not_applicable。最终绑定交换仍须核实物质/来源/介质专属 UUID。

- 选定流：生物源甲烷排放至空气（UUID 未解析）
- 流属性/单位：Mass / kg CH4
- 数量规则：计算本节点及期间的路径总量，执行既有分配与 stage_throughput_linkage，再依 inventory_reference_normalization 对实测最终合格参考产出恰归一化一次。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pathway_emissions`
- 来源：`review-ipcc-livestock-2019`

###### 粪污生物源甲烷排放至空气（`review_herd_manure_ch4`）

按粪污系统、气候、停留时间及挥发性固体活动量计算实际大气排放。核对回收、销毁或氧化甲烷；产生量不自动等于排放量。 仅适用于实际运行的 `herd` 节点；保留其既有路线及期间条件。数据集须落实该路径的真实活动、方法适用性及有证据的范围或物理界限，才能认为清单完整。证据缺失不等于零或 not_applicable。最终绑定交换仍须核实物质/来源/介质专属 UUID。

- 选定流：生物源甲烷排放至空气（UUID 未解析）
- 流属性/单位：Mass / kg CH4
- 数量规则：计算本节点及期间的路径总量，执行既有分配与 stage_throughput_linkage，再依 inventory_reference_normalization 对实测最终合格参考产出恰归一化一次。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pathway_emissions`
- 来源：`review-ipcc-livestock-2019`

###### 粪污直接氧化亚氮排放至空气（`review_herd_direct_n2o`）

使用实际粪污管理氮路径。贮存/处理须与田间施用和放牧沉积分开；后两者须使用管理土壤方法并明确清单核算责任。 仅适用于实际运行的 `herd` 节点；保留其既有路线及期间条件。数据集须落实该路径的真实活动、方法适用性及有证据的范围或物理界限，才能认为清单完整。证据缺失不等于零或 not_applicable。最终绑定交换仍须核实物质/来源/介质专属 UUID。

- 选定流：氧化亚氮排放至空气（UUID 未解析）
- 流属性/单位：Mass / kg N2O
- 数量规则：计算本节点及期间的路径总量，执行既有分配与 stage_throughput_linkage，再依 inventory_reference_normalization 对实测最终合格参考产出恰归一化一次。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pathway_emissions`
- 来源：`review-ipcc-livestock-2019`

###### 粪污氮引致的间接氧化亚氮排放至空气（`review_herd_indirect_n2o`）

适用时，由有记录的粪污氮挥发/沉降及淋溶/径流路径计算可归属间接 N2O。与直接 N2O 分开，并核对下游或所用背景/影响模型中已包含的氮去向计算。 仅适用于实际运行的 `herd` 节点；保留其既有路线及期间条件。数据集须落实该路径的真实活动、方法适用性及有证据的范围或物理界限，才能认为清单完整。证据缺失不等于零或 not_applicable。最终绑定交换仍须核实物质/来源/介质专属 UUID。

- 选定流：氧化亚氮排放至空气（UUID 未解析）
- 流属性/单位：Mass / kg N2O
- 数量规则：计算本节点及期间的路径总量，执行既有分配与 stage_throughput_linkage，再依 inventory_reference_normalization 对实测最终合格参考产出恰归一化一次。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pathway_emissions`
- 来源：`review-ipcc-livestock-2019`

###### 粪污氨排放至空气（`review_herd_nh3`）

采用真实物种、圈舍/贮存条件及有依据的氮流方法。逐阶段跟踪总氮和铵态氮；通用挥发氮估计可能包含其他氮物种，不能自动视为 NH3。 仅适用于实际运行的 `herd` 节点；保留其既有路线及期间条件。数据集须落实该路径的真实活动、方法适用性及有证据的范围或物理界限，才能认为清单完整。证据缺失不等于零或 not_applicable。最终绑定交换仍须核实物质/来源/介质专属 UUID。

- 选定流：氨排放至空气（UUID 未解析）
- 流属性/单位：Mass / kg NH3
- 数量规则：计算本节点及期间的路径总量，执行既有分配与 stage_throughput_linkage，再依 inventory_reference_normalization 对实测最终合格参考产出恰归一化一次。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pathway_emissions`
- 来源：`review-eea-manure-2023`

### 过程：捕获并短暂留置合格反刍动物活体（`capture`）

#### 输入

##### 产品流

###### 设备供电点的电力（`capture_energy_electricity`）

**capture_energy 的采集范围与适用性。** 下列具体身份分别列卡，仅在原有过程范围内有实际使用或产生记录时启用；不是必用材料清单或默认配方。未发生须有依据，缺少记录不得记为零。其他实际材料必须另建具体身份卡，不能套用以下名称或 UUID。保留原有归属和边界，避免与包含这些投入的外包服务双计。

只计实际捕获及短期留置能源，不虚构多年养殖饲喂。
分母与范围要求：每 kg 最终活体产出

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 电力记录供应点；燃料保留品种、密度和热值口径；外购热量与本地燃料产热互斥核算，禁止把供热燃料再计一次。

- 选定流：设备供电点的电力
- 流属性 / 单位：能源 / kWh
- 数量规则：依 `cp_capture` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_capture`
- 来源：`fao-agricultural-energy`

###### 合法短期留置的供应水（`capture_water`）

只计量实际短期留置期间供应的水；只有在行动无此类留置或供水且有文件证明时才记零。

分母与范围要求：每 kg 最终活体产出

- 选定流：实际活体留置的供应水
- 流属性/单位：质量 / kg
- 数量规则：按捕获行动计量或记录供应水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_capture`
- 数量范围：暂定非负留置用水筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg 活体产出
  - 基准：每 kg 最终活体产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 捕获及留置耗材（`capture_supplies`）

只在实际使用时记录购买的约束或短期留置耗材；有证据的未使用情况记零。耐用共用设备由服务台账分摊，不在此重复计入。

分母与范围要求：每 kg 最终活体产出

- 选定流：按材料身份确定的实际捕获或留置耗材
- 流属性/单位：质量 / kg
- 数量规则：按行动和材料记录购入耗材的使用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_capture`
- 数量范围：暂定非负耗材筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg 活体产出
  - 基准：每 kg 最终活体产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转至筛选的捕获活体（`captured_live`）

转移时须记录物种、许可、捕获行动和活体状况。

分母与范围要求：每 kg 最终活体产出

- 选定流：按物种确定的合法捕获反刍动物活体
- 流属性/单位：质量 / kg
- 数量规则：称重捕获活体并核对头数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_live`
- 数量范围：暂定捕获转移筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg/kg 活体产出
  - 基准：每 kg 最终活体产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 捕获及留置死亡（`capture_loss`）

死亡动物须有合法处置记录，不是活体参考产出。

分母与范围要求：每 kg 最终活体产出

- 选定流：实际处置点的捕获死亡尸体
- 流属性/单位：质量 / kg
- 数量规则：按行动及目的地记录死亡质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_outputs`
- 数量范围：暂定非负捕获损失筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg/kg 活体产出
  - 基准：每 kg 最终活体产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：活体筛选、称重及交接（`handover`）

#### 输入

##### 产品流

###### 从单一路线收到的活体（`handover_input`）

每批次只连接一次畜群或合法捕获，不能同时连接两条来源路线。

分母与范围要求：每 kg 最终活体产出

- 选定流：按物种确定的其他反刍动物活体
- 流属性/单位：质量 / kg
- 数量规则：称重来源转移并核对验收和拒收头数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_live`
- 数量范围：暂定转移核对筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg/kg 活体产出
  - 基准：每 kg 最终活体产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 在实际交接点验收的反刍动物活体（`live_output`）

这是唯一最终参考交接点；保留物种、组别、头数、质量、状况及合法来源记录。

分母与范围要求：每 kg 最终活体产出

参考产出的原始记录：实测验收活重归一化为 1 kg 保留实测合格批次数量及全部必需限定项。下方数量是归一化参考交换，并不表示实际批次只有一个单位。

- 选定流： 按物种确定的其他反刍动物活体
- 流属性/单位：质量 / kg
- 数量规则：1 千克
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_live`
- 数量范围：暂定非负最终产出筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg/kg 活体产出
  - 基准：每 kg 最终活体产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

## 7. 分配与共同产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `a_outputs` | 养殖及捕获 | 按身份、数量及交接点列出每项独立销售的活体、鹿茸、乳、繁殖服务、可用粪肥等真实产品。内部转移、假定产出、残余物及弃置废物不获得产品抵扣；不得默认为替代法。 | `fao-deer-farming` |
| `a_joint` | 联合生产 | 尽量按实测过程细分；否则披露与实际产出和群体相连的合理物理因果分配。若无合理物理依据，报告同期价格的经济敏感性，不暗选系数。 | `fao-deer-farming` |
| `a_period` | 畜群或捕获行动 | 将繁育、饲养、更替、死亡、销售与行动事件连到实际期间；期初/期末存栏只归属一次，不虚构捕获路线的饲养期。 | `fao-deer-farming` |
| `a_shared` | 围栏、供水、处理设施 | 记录服务量、使用节点及期间；按实测使用或声明的物理代理分摊一次，不对畜群/捕获/交接重复收费。 | `fao-deer-farming` |

具体身份卡不继承原集合卡的数量范围。实际数量由原始记录、库存/计量对账及声明参考流计算；在取得对应身份、单位、期间和边界一致的证据前，不提供默认量或数值筛查范围。缺少范围是质量披露项，并非零投入或完整性证明。

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_live` | `herd`; `capture`; `handover` | 活体存栏及转移 | 个体台账及称重单 | 物种；性别；年龄；许可；头数；质量；健康；来源；目的地；交接点；日期 | 个体识别及校准秤；原始汇总要求：在单一交接点汇总实测验收质量。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | 头；kg | 每次转移 | 全群体/行动 | 所有纳入场址 | 每参考流 | 签字称重单；校准；许可关联；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_inputs` | `herd` | 饲料、水及能源 | 发票、仪表、库存台账 | 类型；数量；库存变化；供应商；节点；期间 | 仪表和采购核对；原始汇总要求： 按 calc_feed_supply_and_intake 区分承担生产负担的饲料投入、实际采食量及损失；保留原生库存及期间记录，可归属量对合格最终产出归一化一次。 | kg；kWh；m3 | 交付/计量周期 | 所有运行期间 | 所有养殖场址 | 每参考流 | 发票；仪表；分配台账；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_capture` | `capture` | 合法捕获投入 | 授权及行动记录 | 许可；物种；辖区；日期；方法；燃料；头数；存活 | 检查许可及行动记录；原始汇总要求：实际行动负担只汇总一次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kWh；kg；头 | 每次行动 | 授权至交接 | 授权捕获/留置场址 | 每参考流 | 许可；行动日志；称重单；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_outputs` | `herd`; `capture` | 销售产出及损失 | 销售和处置台账 | 身份；数量；目的地；日期；死亡；粪肥；群体 | 发票、称重及处置记录；原始汇总要求：区分产品、内部存栏和废物。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | 声明单位 | 每次事件 | 全群体/行动 | 每个节点 | 每参考流 | 发票；处置联单；台账；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_pathway_emissions` | `herd` | 路径专属气体及粪污氮/碳 | 动物、饲料、粪污、田间及方法台账 | 物种/类别；动物日；采食/干物质/消化率；挥发性固体；粪污氮/铵态氮；系统份额；气候；贮存时间；肥料氮；放牧；挥发/淋溶；甲烷回收；因子来源/单位；最终合格产出 ；收集粪污湿质量；干物质；去向| 按节点及期间采集一手活动数据，证明参数适用性，保留各路径计算表及链接的处理/牧地数据集  保留原始总量，可归属数量仅对实测最终合格参考产出归一化一次。| animal-day；kg DM；kg VS；kg N；kg CH4；kg N2O；kg NH3 | 各运行期间及管理变化时 | 完整所代表群体与服务期间 | 仅实际运行节点 | 每参考流 | 计量/分析记录、氮级联、方法与因子证据、防重复台账 |
| `cp_feed_supply_and_intake` | `herd` | 饲料投入、采食及损失 | 库存、收货、发料及损失台账 | 饲料身份/来源；群体/阶段；期间；期初/期末库存；收货；自产供给；未用退回/转出；未食用/变质质量及去向；原物/干物质；实际采食量；负担归属；合格最终产出 | 按 calc_feed_supply_and_intake 核对匹配的库存、称重、日粮/采草估算及处置记录。保留原始总量及阶段分母，生产与处理负担各归属一次，再对合格最终产出归一化。 | kg as-fed; kg DM | 每次发料及期间结算 | 完整所代表群体/期间 | 实际运行饲喂节点 | 每参考流 | 库存及供应商记录；水分证据；损失及无重复核算核对 |
| `cp_manure_n2o_coverage` | `herd` | 粪污/土壤直接及间接 N2O 覆盖 | 分路径氮台账及方法计算表 | 物种/类别；期间；排泄氮；阶段库存/转移；系统份额；挥发 NH3-N/NOx-N；淋溶/径流氮；施用/放牧氮；因子来源、单位及适用性；直接/间接分项；接受介质；已链接过程及归属卡；合格最终产出 | 按 calc_manure_n2o_coverage 保留原始阶段氮及分项计算，并匹配实际作业与现有粪污协议。记录缺证据或不适用路径及覆盖边界，可归属 N2O 归一化一次。 | kg N; kg N2O | 每个报告期间及管理变化 | 完整所代表管理期间 | 实际运行及明确链接节点 | 每参考流 | 氮平衡、因子单位/适用性、分项到卡片及无重复核算表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `c_live` | 最终参考 | 汇总单一交接点实测验收活重；以该总和除各边界内数量。核对期初/购入/捕获、出生、死亡、转移及期末存栏。 | `cp_live`; `cp_outputs` | 每 kg 验收活体产出的数量 | `fao-deer-farming` |
| `c_period` | 共用畜群及设施 | 将实测服务只分到实际使用节点和期间一次；归一化前保留共同产出和存栏台账。 | `cp_inputs`; `cp_live`; `cp_outputs` | 每 kg 活体产出的应归属服务 | `fao-deer-farming` |
| `calc_pathway_emissions` | `herd` | 采用物种和管理方式相容的方法，保留分路径总量。N2O-N 乘 44/28 转为 N2O，NH3-N 乘 17/14 转为 NH3，且恰换算一次；已为分子质量者不得重算。依据有记录的可用碳/甲烷潜力平衡检查甲烷，并按各阶段可用氮核对氮损失。已挥发氮引致的间接形成是下游转化，不是源阶段第二次氮损失。归属及归一化只做一次，不重复计入链接处理或去向模型中的排放。  物理筛查采用分配前、同一原始期间的数量：CH4 质量 × 12/16 不得超过所代表路径的可用碳；源阶段 NH3 质量 × 14/17、直接 N2O 质量 × 28/44 与其他源阶段氮损失之和，在核对库存及转移后不得超过该阶段可用氮。各项间接 N2O-N 计算以有记录的挥发氮或淋溶氮前体为上限，不再从源台账扣除该下游转化。这些是守恒检查，不是排放因子或经验单位产品区间。| `cp_pathway_emissions` | 每最终参考流的指定化合物 kg | `review-ipcc-livestock-2019`; `review-eea-manure-2023`; `review-ipcc-soils-2019` |
| `calc_feed_supply_and_intake` | `herd_feed` | 所代表作业使用的饲料投入 = 期初饲料库存 + 收货 + 进入本作业的自产饲料 - 期末饲料库存 - 有记录的未用退回或转出。该投入保留边界内变质、拒食及被丢弃的剩余料。实际采食量 = 该投入 - 实测未食用/丢弃损失，并匹配水分/干物质与期间；采食量仅用于营养及代谢计算。期初库存承接原有负担，不是再次采购。追溯未用退回或转出的物料及负担去向，不自动给予替代抵扣。同一饲料的生产负担由采购饲料数据集或已建模自产作物/采集节点承担一次，不得两者并计。实际废料处理及粪污贡献计一次，不再次添加饲料生产负担。 | `cp_feed_supply_and_intake` | 同一原物/干物质基准下分开的饲料投入、采食及损失数量 | `fao-feed-loss-accounting-2018` |
| `calc_manure_n2o_coverage` | `review_herd_direct_n2o`; `review_herd_indirect_n2o` | 按真实粪污阶段，采用有记录的物种/系统活动量及因子基准，分别计算直接 N2O、挥发/沉降引致间接 N2O，以及适用的淋溶/径流引致间接 N2O。N2O-N 乘 44/28 恰换算一次为分子态 N2O；已为分子质量的不得再次换算。保留分项计算表。现有 N2O 卡同时覆盖直接与间接排放时，填报其不重叠总和；已有直接/间接独立卡时，每个分项只归入对应卡，不再另报总和。放牧沉积及田间施用采用管理土壤方法，不套用粪污贮存因子。明确前景与已链接处理/牧地数据的核算责任；粪污转出不消除此前排放，已覆盖的下游排放不得重复。氮级联核对库存、转移及此前氮损失；间接 N2O 是前体的下游转化，不再次视为源阶段氮损失。可归属分子质量对合格参考产出归一化一次。记录不适用依据；路径数据缺失不等于零。 | `cp_manure_n2o_coverage` | 按路径及现有归属卡分开的 kg 分子态 N2O | `review-ipcc-livestock-2019`; `review-ipcc-soils-2019` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 每批次 | 证明物种、残余类别、合法来源/交易及活体状况；无授权的受保护物种交易阻断数据集。 | 分类记录；许可；交接记录 |
| `dq_mass` | 参考 | 在实际交接点测量质量及头数；核对死亡和存栏变化，不用通用 kg/头。 | 称重单；台账 |
| `dq_period` | 畜群、捕获及设施 | 完整覆盖群体/行动和共用服务期间，只分摊一次。 | 期间台账；发票；行动日志 |
| `dq_binding` | 最终交换 | 创建下游 TIDAS 过程交换前解析具体 UUID、属性及单位组。 | 明细读取及支持行证据 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `v_scope` | 每个数据集 | 拒绝物种不明、与牛科重叠未解决、合法来源无证明或死亡/屠宰后参考；CPC 举例不许可交易。 | `un-cpc-2025`; `woah-wildlife-2021` |
| `v_route` | 养殖或捕获 | 每批次只许一条来源路线，要求真实畜群或行动记录及最终活体交接；捕获不得带入虚构的养殖投入。 | `fao-deer-farming`; `woah-wildlife-2021` |
| `v_balance` | 存栏及产出 | 核对头数/质量、出生或捕获、转移、死亡、销售和期末存栏；内部转移不重复作为最终产出。 | `fao-deer-farming` |
| `v_attribution` | 共同产出、期间和设施 | 要求实际交接产出集合、明确分配、期间以及一次性共用服务归属。 | `fao-deer-farming` |
| `v_identity` | 所有未解析卡 | 未确认 UUID 留空；最终交换须有兼容的具体身份、属性和单位证据。待确认流身份 范围本身不是 UUID。 | |
| `v_pathway_emission_coverage` | `herd` | 要求路径覆盖台账，包含生物学适用时的肠道 CH4、粪污 CH4、直接/间接 N2O、NH3 及相关田间排放。每条路径须有实测/计算量、覆盖匹配的明确链接过程，或有依据的不适用结论；缺数据不得记零。捕获前的野生生活不纳入受管理饲养，实际受管理留置须另行评估，并保留物种专属证据。 | `review-ipcc-livestock-2019`; `review-ipcc-soils-2019`; `review-eea-manure-2023` |
| `v_foreground_emission_responsibility` | 实际运行节点及链接服务 | 适用时记录现场燃料燃烧及制冷剂泄漏的核算责任：须为量化前景排放，或明确覆盖它们的具名链接过程，不能仅凭燃料供应或电力生产投入视为已包含。特殊类群生物及残余物排放须依物种/路线证据评估，不套通用畜牧因子。标明尚未落实的路径，不宣称清单完整；记录有依据的不存在结论并防止上/下游重复核算。 | |
| `v_feed_supply_intake_separation` | 全部饲料投入 | 拒绝扣除边界内拒食、变质或丢弃剩余料且未保留其生产负担的上游饲料清单。按 calc_feed_supply_and_intake 核对投入、采食、库存、转移及损失去向。不得把采食量当作饲料投入，不得假设自产饲料零负担或自动给予替代产品抵扣。 | `fao-feed-loss-accounting-2018` |
| `v_manure_n2o_coverage` | 适用粪污及管理土壤氮路径 | 须明确直接及间接路径覆盖、阶段氮平衡及分子质量换算。按 calc_manure_n2o_coverage，将各分项归入现有 N2O 卡或明确覆盖的已链接过程一次。间接路径证据缺失时不得宣称完整；不得默认零值或把汇总值与分项重复并计。 | `review-ipcc-livestock-2019`; `review-ipcc-soils-2019` |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 按物种确定的反刍动物活体养殖或合法捕获前景数据集 |
| downstream_use | 经交接点审查后作为 `secondary_dataset`；`background_dataset` |
| allowed_use | 单一声明的合格物种、路线、辖区、活体状况及实际交接 |
| excluded_use | 不分物种平均、非法/无证明交易、死亡动物或肉、后续买方运输 |
| required_metadata | 物种、残余裁定、许可、头数/质量、组别、路线、群体/行动、交接点、期间、共同产品、死亡、分配及身份依据 |
| required_quality_disclosure | 来源合法性、实测质量、完整性、未验证身份、分配及期间假设 |
| update_trigger | 物种范围、合法性、活体交接点、路线、实测基准、来源依据或流身份改变 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-2025` | official_guidance | [联合国 CPC 3.0 解释性说明](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) | 残余身份及排除 |
| `fao-deer-farming` | extension_guidance | [FAO 鹿类养殖与畜群管理](https://www.fao.org/4/x6529e/x6529e04.htm) | 群体、饲养、处理及实际产出问题 |
| `woah-wildlife-2021` | official_guidance | [WOAH 2021 年野生动物贸易审查](https://www.woah.org/app/uploads/2022/08/a-oie-review-wildlife-trade-march2021.pdf) | 合法来源风险问题，并非许可证 |
| `woah-transport` | official_guidance | [WOAH 陆生法典第 7.3 章](https://www.woah.org/fileadmin/Home/eng/Health_standards/tahc/current/en_chapitre_aw_land_transpt.htm) | 活体交接与后续运输区分 |
| `review-ipcc-livestock-2019` | official_guidance | [IPCC 2019 Refinement, Volume 4, Chapter 10: Emissions from Livestock and Manure Management](https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf) | 物种与路径适用性；CH4 和 N2O 方法选择，不作为通用排放因子 |
| `review-eea-manure-2023` | official_guidance | [EMEP/EEA Air Pollutant Emission Inventory Guidebook 2023, 3.B Manure Management](https://www.eea.europa.eu/en/analysis/publications/emep-eea-guidebook-2023/part-b-sectoral-guidance-chapters/3-agriculture/3-b-manure-management-2023) | NH3 氮流方法；采用参数前核实实际物种、管理方式及地域适用性 |
| `review-ipcc-soils-2019` | official_guidance | [IPCC 2019 Refinement, Volume 4, Chapter 11: N2O Emissions from Managed Soils](https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf) | 管理土壤直接及间接氮路径与边界核对 |
| `fao-feed-loss-accounting-2018` | official_guidance | [FAO 2018, Environmental performance of pig supply chains, section 11.2.2](https://www.fao.org/4/i8686en/I8686EN.pdf) | 饲料投入、采食及废料负担的区分，不提供动物参数。将该核算原则用于声明类群是本 PCR 的方法学选择；不移植猪的日粮或排放因子。 |
| `fao-agricultural-energy` | official_guidance | FAO Energy demand and consumption in African agriculture, Annex C case-study results, https://www.fao.org/4/v9766e/v9766e08.htm | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
