---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.edible-insects-not-live
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 非活体食用昆虫

## 1. 范围与适用性

适用于供人食用的非活体整虫或部位，可为鲜、冷藏、冷冻、干燥、烟熏、盐渍或盐水保存状态，也包括适合人类食用的昆虫粉或粗粉。每个数据集固定一种物种、虫态、形态、食品资格、含水状态、合法来源和交付点。受控养殖、合法野采和外购死虫是不同路线。排除活虫、仅饲料用昆虫、进一步加工或保藏的成品食品、纯化提取物以及不安全或不可追溯原料。湿整虫的一公斤不等于干粉的一公斤。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.edible-insects-not-live |
| classification_refs | CPC 3.0 02931 |
| covered_products | 符合条件的非活体整虫、部位、粉和粗粉，处于鲜品或初步保藏状态。 |
| excluded_products | 活虫或仅供饲料的昆虫、成品食品、提取物、不合格或污染原料。 |
| representative_product | 在实际首次交付点的一种物种、虫态和形态限定的食用昆虫。 |
| production_route | 受控养殖或合法野采、独立收集和致死、首次卫生整理、分级、条件性保藏或粉碎、防护交付；外购死虫承接上游负担。 |
| market_state | 指定的整虫、部位、粉或粗粉状态，披露含水率和保藏方式。 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 一种指定且符合食品资格的非活体昆虫产品，而非混合物种或混合状态平均品。 |
| How much | 1 kg 按出售状态计量的可售净产品，扣除包装和可单独移除的游离盐水。 |
| How well | 物种、虫态、整虫/部位/粉/粗粉形态、含水率、食品状态、合法来源和交付点。 |
| How long or cycle | 将实际批次或野采季、加工批次、共用资产和替换关联至不重叠期间。 |
| reference_flow_link | `accepted_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 按物种、虫态、形态和交付点限定的非活体食用昆虫 |
| Reference flow property | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 物种；虫态；食品资格；整虫/部位/粉/粗粉；保藏；含水率；合法来源；净质量；交付点；期间 |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| m_net | 所有批次 | Mass | kg | 称量毛重和皮重；报告同质批次按出售状态的净质量，扣除包装和可单独移除的游离盐水。 |
| m_moisture | 干燥或盐水保存 | Mass and moisture fraction | kg and kg/kg | 测量前后状态；只算批次特定换算，不用通用湿干或整虫到粉的系数。 |
| m_fraction | 部位和粉 | Mass | kg | 分别称量可食原料、合格产物和拒收物；协调同一实物批次，不把连续状态计为额外生产。 |
| m_period | 批次和共用服务 | Time | reporting period | 将实际投入、产出和服务关联至唯一期间。 |
| `inventory_reference_normalization` | 所有清单行 | 实际流属性 | 每参考流的交换单位 | 下方清单和采集汇总字段表示每个声明参考流的最终数量。保留全部原始采集记录、原分母限定信息、路线及期间分层、单位换算和分配要求。对每项流，先依原有规则取得以其自身分子单位表示的可归属数量，再除以同一范围的实测合格参考产出数量，并乘以声明参考数量。不得混合物种、状态、交付门或不相容路线；内部移交及共享负担只计一次。合格产出分母缺失、为零或不可追溯时，属于阻断性数据质量问题。暂定 QA 范围仍使用其明确声明的基准，不能视为换算因子或生产默认值。 这些数量是最终前景数据包的贡献量，不替代阶段定量参考或阶段原生单位过程数据集；阶段记录单独保留。归一化数量 = 可归属原始数量 × 声明参考数量 / 实测合格最终参考产出数量。归一化恰执行一次。 |
| `stage_throughput_linkage` | 阶段记录及最终数据包贡献 | 实际流属性及其原始基准 | 保留原生分子及阶段分母单位 | 保留原始批次、事件、群组、期间及阶段分母与单位。使用实测阶段数量 Q_stage 和有依据的归属关系重建可归属分子 A，再作最终归一化。若报告数量 a_B 对应明确阶段基准 B_stage（例如 1000 kg），则 A = a_B × Q_stage / B_stage。若 r_stage 已是交换单位／阶段单位的单位强度，则改用 A = r_stage × Q_stage，不再次除以 B_stage。可归属原始总量直接使用。最终贡献 = A × 声明参考数量 / 实测合格最终产出。明确换算相容单位，每项归属／分配份额恰应用一次；不得将基准数量下的报告用量或单位强度当成原始总量。阶段移交、损失、拒收、库存、共享服务及分配必须关联同一实际路线、期间和最终产出分层。1000 kg 基准仍明确保留 1000 kg。不得假设单位产率、鲜干质量相同、个体质量相同、剂量质量等价或交付门可互换。关联缺失、单位换算无依据、分母为零或分配不可追溯时，阻断数据包生产。阶段原生数据集保留自身阶段参考；数据包贡献为单独投影。 |

## 5. 系统边界

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | 有记录的养殖批次、合法野采来源，或附上游数据集的外购已死亡昆虫。 |
| starting_condition_role | 养殖与野采来源职责互斥；外购死虫跳过养殖和致死，但不跳过上游负担。 |
| product_classification_scope | 食品级死虫整虫或部位，以及符合条件的粉或粗粉，处于一种指定状态。 |
| recursive_input_rule | 同类别外购昆虫保留供应商负担，从实际首个操作节点进入，不重复创建采收。 |
| upstream_dataset_requirement | 按物种的来源/饲料及合法采集证据，或外购原料负担；不得用零负担捷径。 |
| disclosure | 物种；虫态；食品与合法性证据；来源路线；形态；含水率；干预；副产品；共用服务；期间；交付点。 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_source | 来源 | 分离受控养殖、合法野采及外购死虫；不得虚构养殖或重复上游采收。 | un-cpc-02931;fao-edible-insects-2013 |
| b_collect | 收集 | 独立移出和致死需明确活体来源、死虫收集物交接、杂质和损失；外购死虫跳过。 | fao-edible-insects-2013 |
| b_condition | 初整 | 原始死虫仅经实际卫生分拣、清洁或修整后成为初整物；记录拒收去向。 | fao-edible-insects-2013 |
| b_grade | 分级 | 区分合格食品、确实出售的次级食品与非食品拒收物，并分别交接。 | fao-edible-insects-2013 |
| b_preserve | 保藏 | 鲜品跳过；实际冷藏、冷冻、干燥、烟熏、盐渍或盐水处理记录投入、产出、含水率和残余物。 | un-cpc-02931;fao-edible-insects-2013 |
| b_mill | 制粉 | 食品级粉或粗粉的粉碎为条件性工序；配方食品及提取物排除。 | un-cpc-02931 |
| b_pack | 交付 | 将一种合格形态防护至实际首次交付点，不纳入后续配送。 | fao-edible-insects-2013 |

## 6. 过程清单结构

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| rear | 受控昆虫养殖 | conditional | 仅养殖路线；野采或购入死虫批次跳过 | 按物种、虫态记录饲料基质、用水和批次，交付可收获活体生物量。 | 每 kg 节点产出 |
| collect | 独立收集与致死 | conditional | 养殖或合法野采来源；购入死虫跳过 | 从养殖批次或合法野采地移出昆虫，记录致死事件并交付非活体收集物。 | 每 kg 节点产出 |
| condition | 首次卫生整理 | required | 每批；未实施干预时仅作转移台账 | 识别包括外购在内的死虫原料，去除污染并交付初步整理的可食用物。 | 每 kg 节点产出 |
| grade | 食用等级分选 | required | 每批 | 分离合格食品等级、确有出售的降级食品等级以及非食品拒收物，并分别记录交接。 | 每 kg 节点产出 |
| preserve | 可选保藏处理 | conditional | 仅实际冷藏、冷冻、干燥、烟熏、盐渍或盐水处理路线 | 记录所采用保藏干预及处理前后含水率和产品状态；鲜品跳过。 | 每 kg 节点产出 |
| mill | 条件性粉碎成粉或粗粉 | conditional | 仅实际制成粉或粗粉时 | 将符合资格的死虫粉碎为食用粉或粗粉；不纳入配方食品和提取物。 | 每 kg 节点产出 |
| pack | 防护包装与交付 | required | 每个出售批次 | 将一种指定合格形态包装至实际农场、收集或初加工交付点，不纳入后续配送。 | 每 kg 节点产出 |

实际批次/野采季、养殖设施、采集工具、冷库、粉碎或包装设施只向使用节点和期间归属一次。节点代表建模职责，并非断言每个场址都执行所有节点。

### 过程： 受控昆虫养殖 (`rear`)

#### Inputs

##### Product flows

###### 养殖基质 (`feed`)

记录适配物种的实际饲料或基质及供应负担，并核验食用来源资格。

分母与范围要求：每 kg 受控昆虫养殖 节点产出

原始数量及计算要求：记录适配物种的实际饲料或基质及供应负担，并核验食用来源资格。 原始采集分母类型：process_output。

- 选定流: 实际养殖饲料或基质 (UUID unresolved)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_rear`
- 数量范围: 宽泛暂定批次完整性筛查，并非经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: kg/kg
  - 基准: 每 kg 受控昆虫养殖 节点产出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 养殖用水 (`water`)

计量实际供应水；野采路线不得虚构养殖用水。

分母与范围要求：每 kg 受控昆虫养殖 节点产出

原始数量及计算要求：计量实际供应水；野采路线不得虚构养殖用水。 原始采集分母类型：process_output。

- 选定流: 供水
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_rear`
- 数量范围: 宽泛暂定批次完整性筛查，并非经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: kg/kg
  - 基准: 每 kg 受控昆虫养殖 节点产出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### 可收获活体批次 (`living_biomass`)

仅作为交给收集环节的中间批次，不是 02931 上市产品。

分母与范围要求：每 kg 受控昆虫养殖 节点产出

原始数量及计算要求：仅作为交给收集环节的中间批次，不是 02931 上市产品。 原始采集分母类型：process_output。

- 选定流: 物种限定活体昆虫生物量 (UUID unresolved)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_rear`
- 数量范围: 宽泛暂定批次完整性筛查，并非经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: kg/kg
  - 基准: 每 kg 受控昆虫养殖 节点产出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 独立出售的虫粪衍生物 (`sold_fertilizer`)

仅在独立符合条件并出售时记录其交付，不能把同一虫粪再列为废物。

分母与范围要求：每 kg 受控昆虫养殖 节点产出

原始数量及计算要求：仅在独立符合条件并出售时记录其交付，不能把同一虫粪再列为废物。 原始采集分母类型：process_output。

- 选定流: 实际可售虫粪衍生副产品 (UUID unresolved)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_rear`
- 数量范围: 宽泛暂定批次完整性筛查，并非经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: kg/kg
  - 基准: 每 kg 受控昆虫养殖 节点产出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Waste flows

###### 未出售虫粪或废基质 (`rearing_residue`)

核实实际残余物去向；独立出售的肥料属于另一产品而非废物流。

分母与范围要求：每 kg 受控昆虫养殖 节点产出

原始数量及计算要求：核实实际残余物去向；独立出售的肥料属于另一产品而非废物流。 原始采集分母类型：process_output。

- 选定流: 实际养殖残余物至处理 (UUID unresolved)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_rear`
- 数量范围: 宽泛暂定批次完整性筛查，并非经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: kg/kg
  - 基准: 每 kg 受控昆虫养殖 节点产出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Elementary flows

### 过程： 独立收集与致死 (`collect`)

#### Inputs

##### Product flows

###### 进入收集的活体昆虫 (`collect_living`)

仅记录养殖产出；野采作基本资源投入，外购死虫跳过收集节点。

分母与范围要求：每 kg 独立收集与致死 节点产出

原始数量及计算要求：仅记录养殖产出；野采作基本资源投入，外购死虫跳过收集节点。 原始采集分母类型：process_output。

- 选定流: 物种限定养殖活体昆虫 (UUID unresolved)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_collect`
- 数量范围: 宽泛暂定批次完整性筛查，并非经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: kg/kg
  - 基准: 每 kg 独立收集与致死 节点产出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### 从栖息地移出的活体野生食用昆虫 (`wild_resource`)

仅野采路线：记录合法物种、地点和移出量；同一生物量不得再作养殖产品投入。

分母与范围要求：每 kg 独立收集与致死 节点产出

原始数量及计算要求：仅野采路线：记录合法物种、地点和移出量；同一生物量不得再作养殖产品投入。 原始采集分母类型：process_output。

- 选定流: 物种限定的野生昆虫生物资源 (UUID unresolved)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_collect`
- 数量范围: 宽泛暂定批次完整性筛查，并非经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: kg/kg
  - 基准: 每 kg 独立收集与致死 节点产出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

#### Outputs

##### Product flows

###### 已收集非活体昆虫 (`collected_dead`)

在收集交接点计量死虫整虫或部位，并记录物种与虫态。

分母与范围要求：每 kg 独立收集与致死 节点产出

原始数量及计算要求：在收集交接点计量死虫整虫或部位，并记录物种与虫态。 原始采集分母类型：process_output。

- 选定流: 物种限定已致死昆虫 (UUID unresolved)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_collect`
- 数量范围: 宽泛暂定批次完整性筛查，并非经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: kg/kg
  - 基准: 每 kg 独立收集与致死 节点产出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Waste flows

###### 收集杂质及拒收物 (`collection_loss`)

计量杂质、不宜食用物种及未获食品接收的损失。

分母与范围要求：每 kg 独立收集与致死 节点产出

原始数量及计算要求：计量杂质、不宜食用物种及未获食品接收的损失。 原始采集分母类型：process_output。

- 选定流: 收集残余物至实际处理 (UUID unresolved)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_collect`
- 数量范围: 宽泛暂定批次完整性筛查，并非经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: kg/kg
  - 基准: 每 kg 独立收集与致死 节点产出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Elementary flows

### 过程： 首次卫生整理 (`condition`)

#### Inputs

##### Product flows

###### 首次整理的死虫原料 (`condition_raw`)

外购死虫承接上游负担；自产收集物仅转移一次。

分母与范围要求：每 kg 首次卫生整理 节点产出

原始数量及计算要求：外购死虫承接上游负担；自产收集物仅转移一次。 原始采集分母类型：process_output。

- 选定流: 物种限定原始非活体昆虫 (UUID unresolved)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_condition`
- 数量范围: 宽泛暂定批次完整性筛查，并非经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: kg/kg
  - 基准: 每 kg 首次卫生整理 节点产出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 使用时的卫生用水 (`wash_water`)

按批次计量实际清洗或消毒用水；不得预设必有清洗。

分母与范围要求：每 kg 首次卫生整理 节点产出

原始数量及计算要求：按批次计量实际清洗或消毒用水；不得预设必有清洗。 原始采集分母类型：process_output。

- 选定流: 供水
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_condition`
- 数量范围: 宽泛暂定批次完整性筛查，并非经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: kg/kg
  - 基准: 每 kg 首次卫生整理 节点产出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### 初整可食用昆虫原料 (`prepared`)

记录实际清洁、除杂或修整后的接收质量并交给独立分级环节。

分母与范围要求：每 kg 首次卫生整理 节点产出

原始数量及计算要求：记录实际清洁、除杂或修整后的接收质量并交给独立分级环节。 原始采集分母类型：process_output。

- 选定流: 物种限定初整可食用昆虫 (UUID unresolved)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_condition`
- 数量范围: 宽泛暂定批次完整性筛查，并非经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: kg/kg
  - 基准: 每 kg 首次卫生整理 节点产出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Waste flows

###### 卫生拒收物或去除杂质 (`conditioning_reject`)

记录不可食部位和受污染拒收物的处置；不得作为食品副产品。

分母与范围要求：每 kg 首次卫生整理 节点产出

原始数量及计算要求：记录不可食部位和受污染拒收物的处置；不得作为食品副产品。 原始采集分母类型：process_output。

- 选定流: 实际整理拒收物至处理 (UUID unresolved)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_condition`
- 数量范围: 宽泛暂定批次完整性筛查，并非经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: kg/kg
  - 基准: 每 kg 首次卫生整理 节点产出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Elementary flows

### 过程： 食用等级分选 (`grade`)

#### Inputs

##### Product flows

###### 进入分级的初整昆虫 (`grade_input`)

保持来源、物种、虫态与形态追溯。

分母与范围要求：每 kg 食用等级分选 节点产出

原始数量及计算要求：保持来源、物种、虫态与形态追溯。 原始采集分母类型：process_output。

- 选定流: 初整可食用昆虫 (UUID unresolved)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_grade`
- 数量范围: 宽泛暂定批次完整性筛查，并非经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: kg/kg
  - 基准: 每 kg 食用等级分选 节点产出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### 合格食用等级 (`grade_accepted`)

按真实路线仅转移一次至保藏、粉碎或包装。

分母与范围要求：每 kg 食用等级分选 节点产出

原始数量及计算要求：按真实路线仅转移一次至保藏、粉碎或包装。 原始采集分母类型：process_output。

- 选定流: 物种限定合格食用昆虫 (UUID unresolved)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_grade`
- 数量范围: 宽泛暂定批次完整性筛查，并非经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: kg/kg
  - 基准: 每 kg 食用等级分选 节点产出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 独立出售的次级食用等级 (`grade_downgrade`)

仅纳入仍符合食品资格且独立销售、拥有单独去向的次级品。

分母与范围要求：每 kg 食用等级分选 节点产出

原始数量及计算要求：仅纳入仍符合食品资格且独立销售、拥有单独去向的次级品。 原始采集分母类型：process_output。

- 选定流: 确实上市的次级食用昆虫 (UUID unresolved)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_grade`
- 数量范围: 宽泛暂定批次完整性筛查，并非经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: kg/kg
  - 基准: 每 kg 食用等级分选 节点产出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Waste flows

###### 非食品等级拒收物 (`grade_reject`)

记录去向；饲料级或污染拒收物不得混入参考产品。

分母与范围要求：每 kg 食用等级分选 节点产出

原始数量及计算要求：记录去向；饲料级或污染拒收物不得混入参考产品。 原始采集分母类型：process_output。

- 选定流: 非食品等级拒收物至处理 (UUID unresolved)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_grade`
- 数量范围: 宽泛暂定批次完整性筛查，并非经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: kg/kg
  - 基准: 每 kg 食用等级分选 节点产出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Elementary flows

### 过程： 可选保藏处理 (`preserve`)

#### Inputs

##### Product flows

###### 实际消耗的盐或烟熏介质 (`preservation_medium`)

仅盐渍、盐水或烟熏路线：称量实际保藏介质并承接供应负担；冷藏及干燥路线不得虚构投入。

分母与范围要求：每 kg 可选保藏处理 节点产出

原始数量及计算要求：仅盐渍、盐水或烟熏路线：称量实际保藏介质并承接供应负担；冷藏及干燥路线不得虚构投入。 原始采集分母类型：process_output。

- 选定流: 实际食品级盐或烟熏介质 (UUID unresolved)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_preserve`
- 数量范围: 宽泛暂定批次完整性筛查，并非经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: kg/kg
  - 基准: 每 kg 可选保藏处理 节点产出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 保藏前合格昆虫 (`preserve_input`)

合格等级仅转移一次，标明整虫或部位状态。

分母与范围要求：每 kg 可选保藏处理 节点产出

原始数量及计算要求：合格等级仅转移一次，标明整虫或部位状态。 原始采集分母类型：process_output。

- 选定流: 保藏前合格食用昆虫 (UUID unresolved)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_preserve`
- 数量范围: 宽泛暂定批次完整性筛查，并非经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: kg/kg
  - 基准: 每 kg 可选保藏处理 节点产出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 实际保藏用能 (`preserve_energy`)

按冷藏、冷冻、干燥或烟熏实际记录选载能体，不套通用工艺。

分母与范围要求：每 kg 可选保藏处理 节点产出

原始数量及计算要求：按冷藏、冷冻、干燥或烟熏实际记录选载能体，不套通用工艺。 原始采集分母类型：process_output。

- 选定流: 保藏能源载体
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_preserve`
- 数量范围: 宽泛暂定批次完整性筛查，并非经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: kg/kg
  - 基准: 每 kg 可选保藏处理 节点产出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### 指定状态的保藏昆虫 (`preserved`)

记录实际符合分类的冷藏、冷冻、干燥、烟熏、盐渍或盐水状态及净质量。

分母与范围要求：每 kg 可选保藏处理 节点产出

原始数量及计算要求：记录实际符合分类的冷藏、冷冻、干燥、烟熏、盐渍或盐水状态及净质量。 原始采集分母类型：process_output。

- 选定流: 状态限定保藏食用昆虫 (UUID unresolved)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_preserve`
- 数量范围: 宽泛暂定批次完整性筛查，并非经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: kg/kg
  - 基准: 每 kg 可选保藏处理 节点产出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Waste flows

###### 保藏拒收及残余物 (`preserve_loss`)

将水分损失与固体拒收物、废水分别核算。

分母与范围要求：每 kg 可选保藏处理 节点产出

原始数量及计算要求：将水分损失与固体拒收物、废水分别核算。 原始采集分母类型：process_output。

- 选定流: 实际保藏拒收物至处理 (UUID unresolved)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_preserve`
- 数量范围: 宽泛暂定批次完整性筛查，并非经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: kg/kg
  - 基准: 每 kg 可选保藏处理 节点产出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Elementary flows

### 过程： 条件性粉碎成粉或粗粉 (`mill`)

#### Inputs

##### Product flows

###### 进入粉碎的合格原料 (`mill_input`)

仅转移一个分级或保藏批次，记录原料形态与含水率。

分母与范围要求：每 kg 条件性粉碎成粉或粗粉 节点产出

原始数量及计算要求：仅转移一个分级或保藏批次，记录原料形态与含水率。 原始采集分母类型：process_output。

- 选定流: 粉碎前合格食用昆虫 (UUID unresolved)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_mill`
- 数量范围: 宽泛暂定批次完整性筛查，并非经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: kg/kg
  - 基准: 每 kg 条件性粉碎成粉或粗粉 节点产出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### 食用昆虫粉或粗粉 (`flour_meal`)

称量实际粉碎产物，记录细度及人类食品适宜性。

分母与范围要求：每 kg 条件性粉碎成粉或粗粉 节点产出

原始数量及计算要求：称量实际粉碎产物，记录细度及人类食品适宜性。 原始采集分母类型：process_output。

- 选定流: 物种限定食用昆虫粉或粗粉 (UUID unresolved)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_mill`
- 数量范围: 宽泛暂定批次完整性筛查，并非经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: kg/kg
  - 基准: 每 kg 条件性粉碎成粉或粗粉 节点产出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Waste flows

###### 粉碎损失或非食品筛上物 (`mill_reject`)

记录实际拒收处置；回磨料为内部返工，不是另一产品。

分母与范围要求：每 kg 条件性粉碎成粉或粗粉 节点产出

原始数量及计算要求：记录实际拒收处置；回磨料为内部返工，不是另一产品。 原始采集分母类型：process_output。

- 选定流: 实际粉碎拒收物至处理 (UUID unresolved)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_mill`
- 数量范围: 宽泛暂定批次完整性筛查，并非经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: kg/kg
  - 基准: 每 kg 条件性粉碎成粉或粗粉 节点产出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Elementary flows

### 过程： 防护包装与交付 (`pack`)

#### Inputs

##### Product flows

###### 进入包装的一种合格形态 (`pack_input`)

在鲜品、保藏品或粉/粗粉中选一种批次；不得累加同一实物批次的连续状态。

分母与范围要求：每 kg 防护包装与交付 节点产出

原始数量及计算要求：在鲜品、保藏品或粉/粗粉中选一种批次；不得累加同一实物批次的连续状态。 原始采集分母类型：process_output。

- 选定流: 包装前指定食用昆虫形态 (UUID unresolved)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_pack`
- 数量范围: 宽泛暂定批次完整性筛查，并非经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: kg/kg
  - 基准: 每 kg 防护包装与交付 节点产出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 食品接触防护包装 (`pack_material`)

记录一次性包装质量或可重复使用周转次数及食品接触适宜性。

分母与范围要求：每 kg 防护包装与交付 节点产出

原始数量及计算要求：记录一次性包装质量或可重复使用周转次数及食品接触适宜性。 原始采集分母类型：process_output。

- 选定流: 食品接触包装功能
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_pack`
- 数量范围: 宽泛暂定批次完整性筛查，并非经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: kg/kg
  - 基准: 每 kg 防护包装与交付 节点产出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### 交付点指定食用昆虫产品 (`accepted_product`)

在实际交付点记录单一物种、虫态、形态及含水率的 1 kg 净产品；扣除包装皮重。

参考产出的原始记录：在实际交付点记录单一物种、虫态、形态及含水率的 1 kg 净产品；扣除包装皮重。 保留实测合格批次数量及全部必需限定项。下方数量是归一化参考交换，并不表示实际批次只有一个单位。

分母与范围要求：每参考流

- 选定流: 按物种、虫态、形态和交付点限定的非活体食用昆虫
- 流属性/单位: Mass / kg
- 数量规则：1 千克
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_pack`
- 数量范围: 宽泛暂定批次完整性筛查，并非经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1
  - 上限: 1
  - 单位: kg/kg
  - 基准: 每 kg 防护包装与交付 节点产出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Waste flows

###### 拒收产品或包装 (`pack_reject`)

记录变质、拒收物及包装处置，不重复计入已出售的次级品。

分母与范围要求：每 kg 防护包装与交付 节点产出

原始数量及计算要求：记录变质、拒收物及包装处置，不重复计入已出售的次级品。 原始采集分母类型：process_output。

- 选定流: 实际拒收物至处理 (UUID unresolved)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_pack`
- 数量范围: 宽泛暂定批次完整性筛查，并非经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: kg/kg
  - 基准: 每 kg 防护包装与交付 节点产出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Elementary flows

## 7. 分配与副产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| a_outputs | 养殖、分级和可售路线 | 分别列出活体中间产物、合格食品等级、独立出售的次级食品等级及确实销售的虫粪衍生品及交付点。连续状态是转移，不是额外可售产品。先细分可计量操作；不可分联合负担按可辩护的物理因果关系，否则按同期净经济价值并做敏感性分析。不得把可售物列为废物。 | fao-edible-insects-2013 |
| a_period | 批次及野采来源 | 将饲料、批次、收集、保藏、资产替换及上市产出关联实际不重叠期间；不设通用周期或饲料转化率。 | fao-edible-insects-2013 |
| a_shared | 共用养殖室、采集器、冷库、粉碎及包装设施 | 确认各使用节点和服务期间，优先用计量服务量，否则按记录时数或吞吐量仅分配一次，不重复供应负担。 | fao-edible-insects-2013 |
| a_form | 湿品、保藏品及粉 | 保藏和粉碎仅归实际经历工序的批次；同一实物批次在同一时点只有一种上市形态。 | un-cpc-02931 |

## 8. 前景数据采集、计算与质量规则

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_rear | rear | 批次和管理 | 批次台账 | 物种；虫态；饲料；水；活体质量；虫粪；副产品；损失；服务；期间 | 饲料票、仪表和秤；原始汇总要求：产品和残余物各关联一次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg; m3; period | 每批 | 实际阶段 | 养殖场 | 每参考流 | 采购、计量和批次记录；可追溯分子、合格参考产出分母及归一化计算表 |
| cp_collect | collect | 致死和收集 | 事件台账 | 来源；合法证明；虫态；活体质量；死虫质量；损失；方法；期间 | 许可和秤；原始汇总要求：核对采集物和死虫。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg | 每事件 | 收集季 | 养殖场或野采地 | 每参考流 | 许可、秤和事件记录；可追溯分子、合格参考产出分母及归一化计算表 |
| cp_condition | condition | 首次整理 | 卫生批次 | 来源；原料质量；水；初整质量；拒收；方法 | 批次秤和清洁记录；原始汇总要求：仅实际干预。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg; m3 | 每批 | 批次期间 | 整理场址 | 每参考流 | 卫生和称量记录；可追溯分子、合格参考产出分母及归一化计算表 |
| cp_grade | grade | 食品等级 | 分级台账 | 初整质量；合格；次级；拒收；食品资格；去向 | 分级和销售票；原始汇总要求：核对去向。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg | 每批 | 批次期间 | 分级场址 | 每参考流 | 等级、销售和拒收记录；可追溯分子、合格参考产出分母及归一化计算表 |
| cp_preserve | preserve | 前后状态 | 处理台账 | 投入；产出；前含水率；后含水率；状态；能源；保藏介质；残余物 | 秤、含水检测和仪表；原始汇总要求：仅处理批次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg; kg/kg; kWh | 处理批次 | 处理期间 | 处理场址 | 每参考流 | 检测和计量记录；可追溯分子、合格参考产出分母及归一化计算表 |
| cp_mill | mill | 粉或粗粉 | 粉碎台账 | 投入；产品；细度；含水率；拒收；返工 | 秤和质量记录；原始汇总要求：一次产出和返工环。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg; kg/kg | 粉碎批次 | 粉碎期间 | 粉碎场址 | 每参考流 | 秤和食品放行；可追溯分子、合格参考产出分母及归一化计算表 |
| cp_pack | pack | 净出售产品 | 交付台账 | 物种；虫态；形态；状态；毛重；皮重；游离盐水；包装；周转；交付点 | 秤和交付票据；原始汇总要求：一个上市批次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg; turn | 每次销售 | 销售期间 | 交付点 | 每参考流 | 资格和票据；可追溯分子、合格参考产出分母及归一化计算表 |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_net | 参考产品 | 净出售质量 = 实测毛重减包装皮重与可分离游离盐水。 | 毛重；皮重；游离盐水 | 按出售状态的 kg 净质量 | fao-edible-insects-2013 |
| c_state | 干燥或粉碎 | 匹配批次的实际投入/产出质量和含水率，不用默认鲜干或整虫到粉的系数。 | 前后质量；含水率 | 批次特定平衡 | fao-edible-insects-2013 |
| c_balance | 每节点 | 核对投入、产品、出售次级品、拒收物及实测状态变化，调查差额。 | 投入；产出；残余物；水分 | kg 台账 | fao-edible-insects-2013 |
| c_shared | 共用资产 | 按实测服务量或有记录时数/吞吐量归至唯一节点及期间。 | 负担；使用；期间 | 已分配负担 | fao-edible-insects-2013 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | 每批 | 核验物种、虫态、人类食品资格、合法来源、形态、含水率和上市状态。 | 许可、食品放行、批次和销售记录 |
| dq_safety | 来源与产出 | 检查来源/基质污染、卫生及适用辖区食品要求；不虚构通用数值限值。 | 供应商、检查和检测记录 |
| dq_mass | 物料 | 校准净质量、状态特定含水率和去向平衡；不用默认换算。 | 秤、检测和平衡 |
| dq_period | 批次和资产 | 记录实际期间、替换和使用节点，不重复归属。 | 批次和资产台账 |
| dq_uuid | 最终交换 | 确认兼容具体身份及属性/单位支持；未解析候选不是交换许可。 | 详情和支持行审查 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_scope | 上市批次 | 拒绝活体、饲料用、配方、提取物或不安全产品；核验允许的物种、虫态、形态和食品资格。 | un-cpc-02931;fao-edible-insects-2013 |
| v_route | 来源批次 | 同一批次的养殖、合法野采和外购死虫路线互斥；外购承接供应负担并跳过虚构来源节点。 | fao-edible-insects-2013 |
| v_balance | 每节点 | 核对投入、合格产出、出售次级品、废物、水分变化及销售，不重复计连续状态。 | fao-edible-insects-2013 |
| v_safety | 食用产出 | 食品级放行前要求来源合法性和适用卫生/污染证据。 | fao-edible-insects-2013 |
| v_period | 共用服务 | 各事件和资产服务只有一个期间及一个归属份额；替换不重复既有负担。 | fao-edible-insects-2013 |
| v_binding | 所有卡 | 待确认流身份 投入须实际选择具体产品；其他身份在交换发布前须有匹配的详情/属性/单位组证据。 |  |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 按物种、虫态、来源、形态和状态限定的食用昆虫前景数据包。 |
| downstream_use | 仅经方法与身份审查后作为 `secondary_dataset` 或 `background_dataset`。 |
| allowed_use | 在实际交付点有记录且符合条件的一种非活体食用昆虫产品。 |
| excluded_use | 活虫、动物饲料、加工零食、混合湿干平均品或未验证 UUID 交换。 |
| required_metadata | 物种；虫态；路线；合法及食品状态；形态；含水率；干预；包装；交付点；期间；副产品；归属。 |
| required_quality_disclosure | 来源和安全缺口、实测得率/含水率、平衡、共用服务、不确定性及未解析 UUID。 |
| update_trigger | 物种/合法性、加工边界、路线、交付点、来源规则或平台身份变化。 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-02931 | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/02931 | 类别状态和排除项。 |
| fao-edible-insects-2013 | official_guidance | https://www.fao.org/docrep/018/i3253e/i3253e.pdf | 养殖/野采路线、食品安全和初加工问题。 |
