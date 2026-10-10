---
pcr_id: pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.lac-resins-balsams-natural-gums-and-other-resins-n-e-c
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: reviewed
sync_with: pcr.en-US.md
---

# 初级天然树木分泌胶、树脂、香脂及粗紫胶

## 1. 范围与适用性

本PCR覆盖具名树木或木本植物分泌的初级天然胶、树脂、香脂、胶树脂、油树脂，以及昆虫分泌的粗紫胶，从声明的寄主生产背景或现有天然寄主林分到实际生产者发运门。纳入门前实际有据的初级采集、清理、分级或干燥；未经调理的批次可旁路整理。识别每种实际产品、生物来源、状态和质量。类别锚点不是一种纯物质，也不表明这些商品可互换。植物天然分泌或割胶与紫胶天然采集或人工寄主接种是不同的条件来源操作。[fao-plant-exudate-production; fao-lac-primary-states]

排除CPC 03211橡胶类初级天然胶、天然橡胶、合成或化学改性树脂、从种子海藻或微生物提取的胶、配方涂料、工业蒸馏或分馏松香松节油、提取或精制虫胶，以及超出本初级范围的溶解纯化或喷雾干燥功能性配方。这些是本PCR的范围排除，不代表整个CPC 03219分类叶都排除精制紫胶或树脂。该CPC标题没有详细解释注释；经审查的初级范围是较窄的部分方法学，不是已证实的完全等同覆盖。[unsd-cpc-natural-resins]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.lac-resins-balsams-natural-gums-and-other-resins-n-e-c |
| classification_refs | cpc:3.0:03219；narrower初级限定范围 |
| covered_products | 已识别的初级木本植物天然分泌胶、树脂、香脂、胶树脂、油树脂；声明枝胶或机械清理未提取状态的粗紫胶 |
| excluded_products | 橡胶类胶；天然橡胶；合成或改性树脂；种子海藻微生物提取胶；工业提取或精制虫胶；蒸馏松香松节油；成品配方 |
| representative_product | 实际生产者发运门的一个具名且限定的初级天然胶树脂香脂或粗紫胶批次，不使用泛称纯树脂代理 |
| production_route | 实际管理或天然寄主背景；植物割胶或天然分泌物采集，或有据接种的紫胶虫来源采集；实际可选简单整理；生产者发运 |
| market_state | 实际按收到状态的初级产品，记录形态、等级、水分、挥发组分和附带杂质；包装不计入产品质量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 生产者发运门实际具名合格初级天然胶树脂香脂或粗紫胶 |
| How much | 1千克按收到状态产品净质量，不含包装 |
| How well | 实际生物身份、寄主、来源、形态、等级、水分挥发及杂质基准，以及声明的初级发运门 |
| How long or cycle | 声明割胶采集季或紫胶接种至收获周期及发运核算期；分别关联寄主建植、维护、恢复与更换期间 |
| reference_flow_link | `primary_product_dispatch` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 生产者发运门的具名初级天然胶树脂香脂或粗紫胶 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 具名产品身份；生物生产者及寄主物种；适用时紫胶品系；来源和场址；管理或天然背景；割胶天然采集接种路线；实际初级形态及等级；水分基准和方法；挥发杂质基准；采集周期及发运期；净重皮重基准；准确生产者门；实际整理；分配及库存变动 |

每个前景包将本类别锚点落实为一个实际限定产品，不将不同身份混为一类。参考流是唯一的`primary_product_dispatch`输出。所有上游初级材料转移保持实测数量，含附着物的原始枝胶不能视为1千克纯树脂。最终单位是按收到状态质量，不是干聚合物质量或假定水分标准。身份、门或状态未知时，不得暗选默认产品或路线。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用经校准称重或可追溯且匹配的毛重减皮重记录获取验收发运净质量，不含包装；采用cp_producer_dispatch。清单均按每1千克参考流报告。 |
| `material_state_bridge` | collected_exudate; collected_lac; raw_primary_material; prepared_primary_material; dispatch_product_received | Mass | kg | 保留原始湿重净重毛重测量及匹配水分检测和杂质记录；仅使用同一已识别批次推导干物质或其他状态桥并保留不确定性。不使用统一鲜干系数、枝胶树脂系数或物种系数。 |
| `volatile_water_separation` | evaporated_water; natural_volatile_emissions | Mass | kg | 区分专项水损失、天然挥发损失、移除杂质、验收产品及剩余库存；仅凭干燥失重不能确定水分或某一种排放物。 |
| `carrier_units` | 能源载体行及变化材料角色 | 实际载体属性 | 实际记录单位 | 保留每种具体载体材料身份及原始单位；仅经明确可追溯换算后汇总等价数量。记录外供能源与燃料及燃烧负荷，避免重叠。 |

| rule_id | 适用于 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `provisional_range_evidence_policy` | 所有 Range 及实际交换 | 各实际交换的相容属性 | 各实际交换的原生单位 | 所有 reasoned_estimate Range 仅为候选方法的暂定复核提示，不是实测分布、允许损失率、默认用量或排放因子。不得截断、回填或强制拟合实际数据；超界须核对状态、单位、边界、库存和证据。完成数据包前，须用可追溯实测记录或适用且已审查的定量来源逐项确定实际量和不确定性。缺失量、因子或流身份必须保留为缺口并阻止完整性声明，不能用通过范围筛查代替证据。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际现有天然寄主林分、可归属人工寄主建植维护背景，或带供应商边界的外购已识别初级材料 |
| starting_condition_role | 声明的上游寄主生产或供应初级材料背景，不是零负荷假定 |
| product_classification_scope | 经审查的初级限定CPC03219部分方法学；排除的精制及其他胶类须使用其自身方法 |
| recursive_input_rule | 按实际供应商或前一周期及交接记录外购或留用同类别初级材料和种胶；在声明接口停止递归并附上游数据集或披露未解决缺口 |
| upstream_dataset_requirement | 供应材料、载体、水、处理及外购初级投入的具体已核实背景数据集；重要时附可归属寄主生产历史 |
| disclosure | 来源寄主及权利；管理历史和土地用途；路线激活；起止时间和门；库存内部转移边界；实际调理；排除精制；分配基础设施及上游缺口 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `source_selection` | plant_collection; lac_collection | 每个材料批次仅选择有据来源；混合数据集保留分别可追溯来源贡献，不假设每千克都经过两条来源路线。采集从生物背景移走材料，与寄主管理及后续整理分别记录。 | fao-plant-exudate-production; fao-lac-primary-states |
| `primary_gate` | 所有过程 | 仅纳入实际生产者发运前可归属操作。简单原料至整理状态变化不代表提取或精制。原始紫胶、机械清理但未提取紫胶及提取虫胶不可互换。 | fao-lac-primary-states; fao-gum-primary-handling |
| `host_period_boundary` | host_management | 声明寄主建植、生产季、维护、更换终止及实际土地占用转变。按地块寄主周期将寄主状态关联到采集，不虚构可销售寄主材料交换。 | fao-gum-primary-handling |
| `inventory_interface` | 所有内部转移 | 按状态质量期间匹配每个材料交接的来源和接收记录；仅在包汇总时合并内部转移。购入供水不同时作为环境直接取水，转交处理不作为直接环境排放。 | |
| `operational_emissions` | 能源及寄主材料角色 | 实际场内燃烧或药剂施用时，按具体物质、介质和方法列出可归属直接排放；不得遗漏、虚构泛称气体系数，或重复计入能源服务数据集已有燃烧。 | |
| `shared_asset_boundary` | host_management; primary_preparation; producer_dispatch | 按消费节点及服务期记录共享道路、工具、泵、分级设备及储库；纳入可归属建造维护，或披露排除及重要性，避免重复共享总量。 | |
| `biological_source_handoff` | `host_management`; `plant_collection`; `lac_collection`; `primary_preparation`; `producer_dispatch` | 以 cp_biological_source_plant_collection; cp_biological_source_lac_collection 将每批实测采集物关联到寄主/来源、采集产出卡和首个接收节点。生物分泌形成的材料不是由工具、燃料或接种用种胶简单转化而来，不能用这些辅助投入强行闭合原胶产出。自有来源的形成/移出记录是有来源说明的物理台账；不是虚构外购产品、未经核实的通用基本流或自动碳吸收。外购初级材料使用一次供应商接收记录，不再次计本场来源移出。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `host_management` | 管理寄主生产与维护 | `conditional` | 实际为植物分泌物或紫胶生产建植或管理寄主；否则声明现有天然寄主背景，不虚构栽培。 | 管理生物生产 | 每 1 kg 参考流；采集记录保留原始地块周期批次基准 |
| `plant_collection` | 植物分泌物割胶或天然采集 | `conditional` | 植物来源分泌物批次；声明割胶或天然分泌，对同一材料排除紫胶虫来源。 | 收获采集 | 每 1 kg 参考流；采集记录保留原始地块周期批次基准 |
| `lac_collection` | 紫胶寄主接种与粗紫胶收获 | `conditional` | 紫胶虫分泌物批次；仅有记录时人工接种，天然紫胶采集旁路接种。 | 收获采集 | 每 1 kg 参考流；采集记录保留原始地块周期批次基准 |
| `primary_preparation` | 初级清理分级与整理 | `conditional` | 实际发运前简单清理、分选或干燥；没有操作时材料原状旁路；工业精制不纳入。 | 初级调理与分级 | 每 1 kg 参考流；采集记录保留原始地块周期批次基准 |
| `producer_dispatch` | 生产者储存保护与发运 | `required` | 每个验收参考批次；仅纳入实际实施的包装和储存。 | 生产者交接 | 每 1 kg 参考流；采集记录保留原始地块周期批次基准 |

生产使用实际季节周期及批次记录，不使用统一连续过程。对一个产品批次，植物采集与紫胶采集是替代来源责任。寄主管理及整理仅按记录条件启用；旁路记录将身份和质量直接交给生产者发运。返工带原负荷返回原整理节点；验收与不合格等级、废物、库存和排放具有不同去向。能源和变化投入卡为记录驱动的统类角色：展开实际交换，不使用猜测固定身份或强制配方。

### 过程：管理寄主生产与维护（`host_management`）

#### 输入

##### 产品流

###### 寄主维护材料（`host_inputs`）

记录实际寄主地块使用的苗木、肥料、防护药剂和耗材；按记录展开具体材料交换，保留各自单位、配方及养分或有效成分基准。天然非人工管理采集不自动承担栽培负荷。

- 选定流：寄主维护材料
- 流属性/单位：Mass / kg
- 数量规则：由cp_host_management取得并归属的实测数量；仅按匹配验收发运净质量归一化一次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_host_management`
- 数量范围：可替换的暂定宽泛QA筛查；非默认值或强制限制
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 寄主管理能源载体（`host_energy`）

仅记录建植和维护实际使用的燃料、购电和外供热；换算前保留载体、原始单位及计量期间，不在采集环节重复记共享泵或设备能源。

- 选定流：寄主管理能源载体
- 流属性/单位：Energy / MJ
- 数量规则：由cp_host_management取得并归属的实测数量；仅按匹配验收发运净质量归一化一次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_host_management`
- 数量范围：可替换的暂定宽泛QA筛查；非默认值或强制限制
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 寄主灌溉供水（`host_water`）

仅在实际使用时记录购入或供应的灌溉水，声明来源，不将同一供应水再次记为基本流取水。

- 选定流：寄主灌溉供水
- 流属性/单位：Mass / kg
- 数量规则：由cp_host_management取得并归属的实测数量；仅按匹配验收发运净质量归一化一次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_host_management`
- 数量范围：可替换的暂定宽泛QA筛查；非默认值或强制限制
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

未观察到该类交换时无需虚构；实际发生则按有据身份、去向和计量记录。

##### 基本流

###### 寄主灌溉直接取水（`host_direct_water`）

仅记录实际直接取用的环境水，声明资源来源隔室地点、允许数量及取水消耗回排基准。产品供应水使用host_water行，本行排除重复供应水量。不推定统一地下水或地表水身份。

- 选定流：寄主灌溉直接取水
- 流属性/单位：Mass / kg
- 数量规则：由cp_host_management取得并归属的实测数量；仅按匹配验收发运净质量归一化一次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_host_management`
- 数量范围：可替换的暂定宽泛QA筛查；非默认值或强制限制
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）


###### 寄主生产土地占用（`host_land_occupation`）

记录管理寄主面积乘可归属占用时间及份额；声明土地类别、先前用途，实际土地转变另行记录，不假设野生采集生态负荷为零。

- 选定流：寄主生产土地占用
- 流属性/单位：Area-time / m2*a
- 数量规则：由cp_host_management取得并归属的实测数量；仅按匹配验收发运净质量归一化一次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_host_management`
- 数量范围：可替换的暂定宽泛QA筛查；非默认值或强制限制
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：m2*a
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 实际可销售寄主管理商品（`host_other_goods`）

管理实际产生独立转移寄主木材或其他有据商品时，本行展开实际具名产品状态接收方。未收获寄主仍为生产背景，留存残物不虚构为可销售输出。实施寄主期间和多输出归属。

- 选定流：实际可销售寄主管理商品
- 流属性/单位：Mass / kg
- 数量规则：由cp_host_management取得并归属的实测数量；仅按匹配验收发运净质量归一化一次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_host_management`
- 数量范围：可替换的暂定宽泛QA筛查；非默认值或强制限制
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）


未观察到该类交换时无需虚构；实际发生则按有据身份、去向和计量记录。

##### 废物流

###### 寄主维护废物（`host_management_waste`）

记录转交已知处理方的药剂废容器及不可销售维护残物；留在地块的材料不是外运废物。

- 选定流：寄主维护废物
- 流属性/单位：Mass / kg
- 数量规则：由cp_host_management取得并归属的实测数量；仅按匹配验收发运净质量归一化一次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_host_management`
- 数量范围：可替换的暂定宽泛QA筛查；非默认值或强制限制
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 实际场内燃烧物质排入空气（`host_management_combustion_air`）

本节点实际燃烧记录燃料时，按实测或有据方法支持的具体物质及碳来源分别产生空气交换，采用同一燃料核算。本统类角色不是单一化合物身份；购电外供热不得虚构当地尾气。

- 选定流：实际场内燃烧物质排入空气
- 流属性/单位：Mass / kg
- 数量规则：由cp_host_management取得并归属的实测数量；仅按匹配验收发运净质量归一化一次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_host_management`
- 数量范围：可替换的暂定宽泛QA筛查；非默认值或强制限制
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：植物分泌物割胶或天然采集（`plant_collection`）

本植物采集节点通过 `cp_biological_source_plant_collection` 记录实测采集量及生物来源，并与实际产出卡及下游接收批次一一关联。随附树皮/枝条、水分和其他附带杂质按实测状态分列辅助台账，不能统称为新形成的分泌物；未知组分保留缺口。种胶及紫胶虫接种仅属于独立的 lac_collection 路线。

#### 输入

##### 产品流

###### 植物割胶与采集材料（`tapping_materials`）

记录实际收集容器、工具更换份额及割胶时实际使用的允许刺激剂；天然分泌物采集不自动使用刺激剂。在本材料角色卡下分别记录配方和用量。

- 选定流：植物割胶与采集材料
- 流属性/单位：Mass / kg
- 数量规则：由cp_plant_collection取得并归属的实测数量；仅按匹配验收发运净质量归一化一次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_plant_collection`
- 数量范围：可替换的暂定宽泛QA筛查；非默认值或强制限制
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
- 来源：`fao-tapping-route`; `fao-plant-exudate-production`

###### 植物采集能源载体（`plant_collection_energy`）

计量可归属采集及边界内场内移动能源；人工采集可有经核实的购入能源零值，不能假设普遍为零。

- 选定流：植物采集能源载体
- 流属性/单位：Energy / MJ
- 数量规则：由cp_plant_collection取得并归属的实测数量；仅按匹配验收发运净质量归一化一次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_plant_collection`
- 数量范围：可替换的暂定宽泛QA筛查；非默认值或强制限制
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

未观察到该类交换时无需虚构；实际发生则按有据身份、去向和计量记录。

##### 基本流

未观察到该类交换时无需虚构；实际发生则按有据身份、去向和计量记录。

#### 输出

##### 产品流

###### 调理前采集的具名植物分泌物（`collected_exudate`）

在采集交接时称量实际胶、树脂、香脂、胶树脂或油树脂，保留实测含水、挥发组分及附带杂质状态。本行是内部转移，不是另一个最终参考产品。

- 选定流：调理前采集的具名植物分泌物
- 流属性/单位：Mass / kg
- 数量规则：由cp_plant_collection取得并归属的实测数量；仅按匹配验收发运净质量归一化一次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_plant_collection`
- 数量范围：可替换的暂定宽泛QA筛查；非默认值或强制限制
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
- 来源：`fao-tapping-route`; `fao-plant-exudate-production`

##### 废物流

###### 割胶与采集弃置残物（`plant_collection_waste`）

按实际废物类型及接收方记录废弃容器或污染采集固体；区分树上未采分泌物与已采集废物。

- 选定流：割胶与采集弃置残物
- 流属性/单位：Mass / kg
- 数量规则：由cp_plant_collection取得并归属的实测数量；仅按匹配验收发运净质量归一化一次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_plant_collection`
- 数量范围：可替换的暂定宽泛QA筛查；非默认值或强制限制
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 实际场内燃烧物质排入空气（`plant_collection_combustion_air`）

本节点实际燃烧记录燃料时，按实测或有据方法支持的具体物质及碳来源分别产生空气交换，采用同一燃料核算。本统类角色不是单一化合物身份；购电外供热不得虚构当地尾气。

- 选定流：实际场内燃烧物质排入空气
- 流属性/单位：Mass / kg
- 数量规则：由cp_plant_collection取得并归属的实测数量；仅按匹配验收发运净质量归一化一次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_plant_collection`
- 数量范围：可替换的暂定宽泛QA筛查；非默认值或强制限制
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：紫胶寄主接种与粗紫胶收获（`lac_collection`）

本采集节点通过 `cp_biological_source_lac_collection` 记录实测采集量及生物来源，并与实际产出卡及下游接收批次一一关联。种胶、随附枝条/虫体、水分和其他杂质按实测状态分列辅助台账，不能统称为新增树脂；未知组分保留缺口。

#### 输入

##### 产品流

###### 人工寄主接种用种胶（`broodlac`）

仅对人工接种记录实际转移种胶的活虫品系、寄主材料及湿重净重基准；天然紫胶采集不虚构种胶投入。留用或购入种胶是可追溯生物投入，不是免费树脂生产。

- 选定流：人工寄主接种用种胶
- 流属性/单位：Mass / kg
- 数量规则：由cp_lac_collection取得并归属的实测数量；仅按匹配验收发运净质量归一化一次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_lac_collection`
- 数量范围：可替换的暂定宽泛QA筛查；非默认值或强制限制
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
- 来源：`fao-lac-primary-states`

###### 紫胶寄主接种与收获材料（`lac_collection_materials`）

记录实际捆扎、采集和收获耗材，排除已记录种胶；将使用量关联到同一寄主和周期的接种及收获阶段。

- 选定流：紫胶寄主接种与收获材料
- 流属性/单位：Mass / kg
- 数量规则：由cp_lac_collection取得并归属的实测数量；仅按匹配验收发运净质量归一化一次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_lac_collection`
- 数量范围：可替换的暂定宽泛QA筛查；非默认值或强制限制
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 紫胶接种与收获能源载体（`lac_collection_energy`）

记录寄主接近、接种、剪割或刮取及内部移动实际能源，归属于观察到的紫胶周期，不重复计算寄主维护能源。

- 选定流：紫胶接种与收获能源载体
- 流属性/单位：Energy / MJ
- 数量规则：由cp_lac_collection取得并归属的实测数量；仅按匹配验收发运净质量归一化一次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_lac_collection`
- 数量范围：可替换的暂定宽泛QA筛查；非默认值或强制限制
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

未观察到该类交换时无需虚构；实际发生则按有据身份、去向和计量记录。

##### 基本流

未观察到该类交换时无需虚构；实际发生则按有据身份、去向和计量记录。

#### 输出

##### 产品流

###### 实际留用种胶与收获共产品商品（`lac_other_goods`）

分别列出留存或转移至下一周期的活种胶、可销售收获寄主木材或其他有据商品的实际状态和交接。记录库存、销售及内部下周期使用区别，不给泛称树脂UUID或自动共产品抵扣。弃置枝条仍属lac_harvest_waste。

- 选定流：实际留用种胶与收获共产品商品
- 流属性/单位：Mass / kg
- 数量规则：由cp_lac_collection取得并归属的实测数量；仅按匹配验收发运净质量归一化一次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_lac_collection`
- 数量范围：可替换的暂定宽泛QA筛查；非默认值或强制限制
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）


###### 调理前采集的粗紫胶（`collected_lac`）

计量实际枝胶或有明确记录的其他粗紫胶状态，包含附着细枝、树皮和虫体等杂质；不得将该量改称提取虫胶或纯树脂。

- 选定流：调理前采集的粗紫胶
- 流属性/单位：Mass / kg
- 数量规则：由cp_lac_collection取得并归属的实测数量；仅按匹配验收发运净质量归一化一次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_lac_collection`
- 数量范围：可替换的暂定宽泛QA筛查；非默认值或强制限制
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
- 来源：`fao-lac-primary-states`

##### 废物流

###### 紫胶收获弃置寄主残物（`lac_harvest_waste`）

记录作为废物外运的不合格收获材料或枝残物；作为燃料或其他商品出售的枝条改为另行识别的共产品，不使用本废物卡。

- 选定流：紫胶收获弃置寄主残物
- 流属性/单位：Mass / kg
- 数量规则：由cp_lac_collection取得并归属的实测数量；仅按匹配验收发运净质量归一化一次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_lac_collection`
- 数量范围：可替换的暂定宽泛QA筛查；非默认值或强制限制
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 实际场内燃烧物质排入空气（`lac_collection_combustion_air`）

本节点实际燃烧记录燃料时，按实测或有据方法支持的具体物质及碳来源分别产生空气交换，采用同一燃料核算。本统类角色不是单一化合物身份；购电外供热不得虚构当地尾气。

- 选定流：实际场内燃烧物质排入空气
- 流属性/单位：Mass / kg
- 数量规则：由cp_lac_collection取得并归属的实测数量；仅按匹配验收发运净质量归一化一次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_lac_collection`
- 数量范围：可替换的暂定宽泛QA筛查；非默认值或强制限制
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：初级清理分级与整理（`primary_preparation`）

#### 输入

##### 产品流

###### 接收的采集初级天然胶树脂或紫胶（`raw_primary_material`）

按批次和状态匹配启用来源输出；外购初级材料须带上游负荷。追踪期初期末库存及返料，不将原料投入固定为1千克。

- 选定流：接收的采集初级天然胶树脂或紫胶
- 流属性/单位：Mass / kg
- 数量规则：由cp_primary_preparation取得并归属的实测数量；仅按匹配验收发运净质量归一化一次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_primary_preparation`
- 数量范围：可替换的暂定宽泛QA筛查；非默认值或强制限制
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 初级整理能源载体（`preparation_energy`）

记录发运前有据的简单清理、筛分、分选、干燥和储存实际能源；不强制加热干燥、提取或统一配方。

- 选定流：初级整理能源载体
- 流属性/单位：Energy / MJ
- 数量规则：由cp_primary_preparation取得并归属的实测数量；仅按匹配验收发运净质量归一化一次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_primary_preparation`
- 数量范围：可替换的暂定宽泛QA筛查；非默认值或强制限制
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 初级整理供水（`preparation_water`）

仅记录有据初级清理实际用水及其来源和接触用途。涉及树脂提取或精制的紫胶转化超出本初级交接范围。

- 选定流：初级整理供水
- 流属性/单位：Mass / kg
- 数量规则：由cp_primary_preparation取得并归属的实测数量；仅按匹配验收发运净质量归一化一次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_primary_preparation`
- 数量范围：可替换的暂定宽泛QA筛查；非默认值或强制限制
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 初级整理耗材（`preparation_materials`）

仅记录实际清理和维护耗材，保留具体身份，不包含提取溶剂、反应改性或混配成品配方。

- 选定流：初级整理耗材
- 流属性/单位：Mass / kg
- 数量规则：由cp_primary_preparation取得并归属的实测数量；仅按匹配验收发运净质量归一化一次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_primary_preparation`
- 数量范围：可替换的暂定宽泛QA筛查；非默认值或强制限制
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

未观察到该类交换时无需虚构；实际发生则按有据身份、去向和计量记录。

##### 基本流

###### 初级整理直接取水（`preparation_direct_water`）

初级清理实际直接取用环境水时，本行识别实际资源隔室地点及实测取水；供应水则使用preparation_water行。保留来源特定消耗回排记录，同一量不得记入两行。

- 选定流：初级整理直接取水
- 流属性/单位：Mass / kg
- 数量规则：由cp_primary_preparation取得并归属的实测数量；仅按匹配验收发运净质量归一化一次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_primary_preparation`
- 数量范围：可替换的暂定宽泛QA筛查；非默认值或强制限制
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）


未观察到该类交换时无需虚构；实际发生则按有据身份、去向和计量记录。

#### 输出

##### 产品流

###### 待发运整理后的具名初级天然胶树脂或紫胶（`prepared_primary_material`）

按实际清理或干燥后的声明形态记录验收初级产品；旁路时保持原状。区分枝胶与机械清理但未提取的紫胶。交给发运环节，不作为第二次销售。

- 选定流：待发运整理后的具名初级天然胶树脂或紫胶
- 流属性/单位：Mass / kg
- 数量规则：由cp_primary_preparation取得并归属的实测数量；仅按匹配验收发运净质量归一化一次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_primary_preparation`
- 数量范围：可替换的暂定宽泛QA筛查；非默认值或强制限制
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 其他验收等级或共产品商品（`other_grade_products`）

按实际名称质量数量接收方列出整理环节独立销售的非参考等级或可回收初级材料；寄主管理及紫胶收获商品记在各自来源输出卡，不移到本行。不将所有类别强制归入一个固定树脂身份。

- 选定流：其他验收等级或共产品商品
- 流属性/单位：Mass / kg
- 数量规则：由cp_primary_preparation取得并归属的实测数量；仅按匹配验收发运净质量归一化一次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_primary_preparation`
- 数量范围：可替换的暂定宽泛QA筛查；非默认值或强制限制
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 移除杂质与拒收初级固体（`preparation_solid_waste`）

称量移除树皮、泥土、细枝及污染胶树脂或紫胶，并在处理交接时分类为废物。留用返工须在内部关联并保留原负荷。

- 选定流：移除杂质与拒收初级固体
- 流属性/单位：Mass / kg
- 数量规则：由cp_primary_preparation取得并归属的实测数量；仅按匹配验收发运净质量归一化一次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_primary_preparation`
- 数量范围：可替换的暂定宽泛QA筛查；非默认值或强制限制
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 转交处理的初级整理废水（`preparation_wastewater`）

计量实际转交处理废水及有检测时的悬浮固体、有机负荷；处理后排入自然环境的出水是另一基本流排放，不是本废物转移。

- 选定流：转交处理的初级整理废水
- 流属性/单位：Mass / kg
- 数量规则：由cp_primary_preparation取得并归属的实测数量；仅按匹配验收发运净质量归一化一次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_primary_preparation`
- 数量范围：可替换的暂定宽泛QA筛查；非默认值或强制限制
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 排入空气的蒸发水分（`evaporated_water`）

由对应水分专项测量或带不确定性的平衡闭合获取失水量。干燥失重可能含天然挥发油，不能自动全部称为水。下述固定水蒸气身份仅适用于声明接收隔室为空气且未细分的情况；已知更具体隔室时须另行核实兼容身份，不得暗用此默认。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 绑定模式：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：由cp_primary_preparation取得并归属的实测数量；仅按匹配验收发运净质量归一化一次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_primary_preparation`
- 数量范围：可替换的暂定宽泛QA筛查；非默认值或强制限制
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 排入空气的实测天然挥发组分（`natural_volatile_emissions`）

发生挥发损失时，在本条件角色下分别列出实际实测组分身份及空气隔室。总质量损失或泛称VOC不能提供一个固定化合物UUID。

- 选定流：排入空气的实测天然挥发组分
- 流属性/单位：Mass / kg
- 数量规则：由cp_primary_preparation取得并归属的实测数量；仅按匹配验收发运净质量归一化一次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_primary_preparation`
- 数量范围：可替换的暂定宽泛QA筛查；非默认值或强制限制
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 实际场内燃烧物质排入空气（`primary_preparation_combustion_air`）

本节点实际燃烧记录燃料时，按实测或有据方法支持的具体物质及碳来源分别产生空气交换，采用同一燃料核算。本统类角色不是单一化合物身份；购电外供热不得虚构当地尾气。

- 选定流：实际场内燃烧物质排入空气
- 流属性/单位：Mass / kg
- 数量规则：由cp_primary_preparation取得并归属的实测数量；仅按匹配验收发运净质量归一化一次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_primary_preparation`
- 数量范围：可替换的暂定宽泛QA筛查；非默认值或强制限制
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：生产者储存保护与发运（`producer_dispatch`）

#### 输入

##### 产品流

###### 生产者发运接收的验收初级产品（`dispatch_product_received`）

追踪整理环节或无调理旁路来源的实际验收产品，保留状态和库存变动；接收实测量不固定为最终参考量。

- 选定流：生产者发运接收的验收初级产品
- 流属性/单位：Mass / kg
- 数量规则：由cp_producer_dispatch取得并归属的实测数量；仅按匹配验收发运净质量归一化一次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_producer_dispatch`
- 数量范围：可替换的暂定宽泛QA筛查；非默认值或强制限制
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 生产者发运保护及包装材料（`dispatch_packaging`）

记录保护具名初级产品的实际袋、衬里或容器；识别材料、皮重、新用或复用状态、实际使用次数及最终去向。包装不计入产品净质量。

- 选定流：生产者发运保护及包装材料
- 流属性/单位：Mass / kg
- 数量规则：由cp_producer_dispatch取得并归属的实测数量；仅按匹配验收发运净质量归一化一次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_producer_dispatch`
- 数量范围：可替换的暂定宽泛QA筛查；非默认值或强制限制
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 生产者储存与发运能源载体（`dispatch_energy`）

记录边界内储存、称重和装卸实际能源。客户运输、分销及产品使用在声明的生产者发运门后开始，不在本边界内。

- 选定流：生产者储存与发运能源载体
- 流属性/单位：Energy / MJ
- 数量规则：由cp_producer_dispatch取得并归属的实测数量；仅按匹配验收发运净质量归一化一次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_producer_dispatch`
- 数量范围：可替换的暂定宽泛QA筛查；非默认值或强制限制
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

未观察到该类交换时无需虚构；实际发生则按有据身份、去向和计量记录。

##### 基本流

未观察到该类交换时无需虚构；实际发生则按有据身份、去向和计量记录。

#### 输出

##### 产品流

###### 生产者发运门的具名初级天然胶树脂香脂或粗紫胶（`primary_product_dispatch`）

唯一最终参考输出是实际合格初级产品，声明批次特定形态及实测含水、挥发和杂质状态。不同物种、等级或形态不能混合为可互换纯化学品。

- 选定流：生产者发运门的具名初级天然胶树脂香脂或粗紫胶
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_producer_dispatch`
- 数量范围：精确归一化参考量，不是经验产率区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：由采集计算（`calculated_from_collection`）

##### 废物流

###### 生产者发运破损包装与拒收固体（`dispatch_waste`）

在本变化角色卡下按废物身份及处理接收方分别列出实际破损包装和最终拒收产品；退回返工仍在内部，拒收质量不计入验收参考输出。

- 选定流：生产者发运破损包装与拒收固体
- 流属性/单位：Mass / kg
- 数量规则：由cp_producer_dispatch取得并归属的实测数量；仅按匹配验收发运净质量归一化一次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_producer_dispatch`
- 数量范围：可替换的暂定宽泛QA筛查；非默认值或强制限制
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 实际场内燃烧物质排入空气（`producer_dispatch_combustion_air`）

本节点实际燃烧记录燃料时，按实测或有据方法支持的具体物质及碳来源分别产生空气交换，采用同一燃料核算。本统类角色不是单一化合物身份；购电外供热不得虚构当地尾气。

- 选定流：实际场内燃烧物质排入空气
- 流属性/单位：Mass / kg
- 数量规则：由cp_producer_dispatch取得并归属的实测数量；仅按匹配验收发运净质量归一化一次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_producer_dispatch`
- 数量范围：可替换的暂定宽泛QA筛查；非默认值或强制限制
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `subdivision_first` | 所有有意产品等级及寄主共产品 | 优先使用实测过程或批次细分。按数量质量边界及接收方列出实际初级产品等级、可销售寄主木材及留用或销售种胶。独立离开的等级输出是产品；弃置材料是废物，不自动获得共产品抵扣。 | |
| `common_host_burdens` | 共享寄主生产及季节输出 | 在合理时，使用记录支持的因果服务、面积时间或使用记录归属剩余共同寄主资产负荷。不可分离产品无合理物理关系时，使用同期场址门价格数量支持的经济份额并做敏感性分析；不为全部天然胶树脂紫胶规定统一质量分配或价格。 | |
| `period_attribution` | 建植；生产季；更换及共享资产 | 将建植维护关联到实际生产和非生产期、寄主更换终止及未来产出预期并做敏感性分析。一次收获不得同时承担全部建植费用及另一份年化副本。不规定统一寄主寿命、天然胶产量或紫胶周期。 | |
| `rework_retention` | primary_preparation; producer_dispatch | 内部返工退回保留原负荷并记录重复能源材料；最终验收净输出排除拒收及留待下一期库存。明确废物处理责任，不假设替代抵扣。 | |
| `common_service_once` | 共享道路泵工具储库及换线 | 登记全部消费节点及期间，优先计量细分，按有据服务分配唯一共同总量。季节批次清理换线仅归属实际批次一次；参考归一化前，兼容输出总量与分母核对。 | |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | 流角色 | 记录类型 | 原始字段 | 采集方法 | 单位 | 频率 | 时间覆盖 | 场址范围 | 汇总规则 | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_host_management` | host_management | 管理投入土地及共享资产 | 寄主地块及期间台账 | 寄主物种；地块；管理状态；面积；土地类别；建植更换日期；投入身份配方；原始数量单位；水源；生产期；全部输出；共享使用；排放方法；归属证据；关联发运净质量 | 追踪实际地块周期活动记录、校准、发票及土地用途历史；保留原始面积周期服务基准，仅将其归属总量换算到验收发运净质量分母一次。适用时另记实际直接取水或土地转变。 | 实际原始单位；归一化卡片单位 | 每事件及报告期 | 完整建植及可归属生产期 | 声明寄主地块和服务 | 每 1 kg 参考流 | 可追溯性；分配台账；独立总量核对 |
| `cp_plant_collection` | plant_collection | 植物分泌物采集及直接排放 | 采集批次记录 | 植物身份；天然或割胶方法；日期；采集毛重皮重净重；水分杂质状态；刺激剂配方；原始投入能源单位；损失；去向；排放物质介质方法；关联发运质量；来源交接键；对应产出/接收卡；自有或外购；组分基准 | 称量识别每个采集批次，核对工具材料燃料及留存库存；保留原始采集单位及季节数据，有据分配后仅用匹配验收发运净质量归一化一次。 按 cp_biological_source_plant_collection 保留未分配来源及采集物实物流账；负荷归属不能缩减该物理数量。 | 实际原始单位；归一化卡片单位 | 每次割胶采集事件及批次 | 完整声明采集季及发运批次 | 声明来源场址 | 每 1 kg 参考流 | 秤；来源批次日志；原料最终产品核对 |
| `cp_lac_collection` | lac_collection | 接种收获种胶及残物 | 寄主周期及收获记录 | 紫胶虫品系；寄主物种地块；天然或接种状态；种胶身份质量；接种收获日期；细枝杂质基准；湿重净重；存活留用种胶；能源材料；去向；排放；发运关联；来源交接键；对应产出/接收卡；自有或外购；组分基准 | 识别实际寄主周期并分别称量粗收获物及种胶；天然采集仅有证据时记录无接种。保留原始寄主周期基准，数量归属后仅按关联验收发运净质量归一化一次。 按 cp_biological_source_lac_collection 保留未分配来源及采集物实物流账；负荷归属不能缩减该物理数量。 | 实际原始单位；归一化卡片单位 | 每次接种及收获批次 | 完整记录接种至收获周期或天然采集期 | 声明寄主场址 | 每 1 kg 参考流 | 种胶收获核对；秤；周期关联 |
| `cp_primary_preparation` | primary_preparation | 原料整理产品等级废物水及挥发损失 | 整理批次台账 | 进入状态质量；过程旁路标记；进出水分杂质检测；留存挥发组分；期初期末库存；验收等级；返工；固体；废水；能源材料原始单位；排放物质空气；实际处理接收方；发运质量 | 称量投入输出库存，计量实际供应并区分水分专项与其他挥发测试。保留原始整理批次平衡和不确定性；分配共同操作后仅将总量按匹配验收发运净质量归一化一次。不能解释的损失保留为缺口。 | 实际原始单位；归一化卡片单位 | 每次整理运行及换线 | 完整声明整理储存期 | 声明生产者整理场址 | 每 1 kg 参考流 | 质量水分挥发杂质闭合；检测；计量；废物单据 |
| `cp_producer_dispatch` | producer_dispatch | 验收参考输出包装接收及拒收 | 批次发运验收台账 | 具名身份形态等级；来源批次；整理旁路；毛重；皮重；验收净质量；水分挥发杂质方法结果；接收；期初期末库存；其他输出；拒收去向；包装新用复用记录；原始能源单位；门日期；归属；排放 | 经校准称重或可追溯匹配毛重减皮重验收记录；排除包装和拒收质量。保留原始批次总量及载体单位，核对接收加期初库存与全部发运损失及期末库存，将归属总量仅按验收参考产品净质量归一化一次。 | 实际原始单位；千克验收产品；归一化卡片单位 | 每次发运及核算期 | 与来源周期匹配的完整声明发运期 | 实际生产者发运门 | 每 1 kg 参考流 | 校准秤；匹配皮重门等级记录；库存闭合；包装复用证据 |
| `cp_biological_source_plant_collection` | `plant_collection` | 生物来源至采集物及首个接收的物理交接 | 来源、收获及接收联单 | handoff_key; host/source_id; own_or_purchased; managed_or_natural; lot/cycle/date; output_row_id; receiving_process/row; gross/tare/net_mass; water/volatile/impurity_basis; attached_bark/twigs; opening/closing_collected_stock; source_formation/removal_evidence; losses; uncertainty | 使用来源/寄主调查、采集称量和配对接收单，记录实际移出的初级材料；只有具有独立观测或适用模型时才报告总生物形成量，不能用产品平衡差倒算形成量。区分采集植物分泌物、随附树皮/枝条、水分及其他杂质，保留不确定性；种胶和接种记录仅适用于 lac_collection。未采集寄主及分泌物保留在来源背景或独立存量台账，不作为额外对外产品。 | 匹配湿重/干重/组分基准的 kg | 每批及每个采集周期 | 匹配来源周期、整理及交付期 | 实际寄主/来源与接收节点 | 每 1 kg 参考流 | 校准称量；来源与接收匹配；组分检测；缺口清单 |
| `cp_biological_source_lac_collection` | `lac_collection` | 生物来源至采集物及首个接收的物理交接 | 来源、收获及接收联单 | handoff_key; host/source_id; own_or_purchased; managed_or_natural; lot/cycle/date; output_row_id; receiving_process/row; gross/tare/net_mass; water/volatile/impurity_basis; broodlac_in/out; attached_twigs/insect_matter; opening/closing_collected_stock; source_formation/removal_evidence; losses; uncertainty | 使用来源/寄主调查、采集称量和配对接收单，记录实际移出的初级材料；只有具有独立观测或适用模型时才报告总生物形成量，不能用产品平衡差倒算形成量。区分收获批次中原有种胶和新形成材料及随附物，保留不确定性。未采集寄主及分泌物保留在来源背景或独立存量台账，不作为额外对外产品。 | 匹配湿重/干重/组分基准的 kg | 每批及每个采集周期 | 匹配来源周期、整理及交付期 | 实际寄主/来源与接收节点 | 每 1 kg 参考流 | 校准称量；来源与接收匹配；组分检测；缺口清单 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_recorded_totals` | 所有清单行 | 保留原始数量单位及地块周期批次服务基准。建立可归属总量，以记录系数换算兼容分子单位，再仅除以匹配验收发运净质量千克数一次。已经按每1千克参考流的数量不得再次相除。保留全部实际中间物及非参考产品，仅验收最终输出成为1千克。 | 关联采集协议；分配证据；匹配发运分母 | 每1千克参考流实际交换数量 | |
| `reconcile_material_states` | 采集后整理、转移与发运 | 以来源交接台账中的实测采集物或外购初级材料作为首次材料接收，核对接收物、加水及期初库存，相对于验收产品、其他产品、固体废物、转交废水、实测水分/挥发排放和期末库存；采用匹配湿重/干重/组分基准。来源生物形成另有边界，不能以辅助投入代替采集原料或在汇总时重复计移出。保留不确定性和残差，不虚构纯聚合物闭合、零差异或碳吸收；内部转移在整包中抵消一次。 | cp_biological_source_plant_collection; cp_biological_source_lac_collection；匹配整理/发运测量和组分检测 | 带缺口的质量组分平衡 |  |
| `carbon_and_emission_evidence` | 寄主碳及直接空气排放 | 记录实际碳来源及实际活动有据的物质特定排放。计算留存外运碳时，使用实测组成或适用的独立引用方法；不得采用统一碳分数、自动用寄主吸收抵销产品碳，或抵扣无限期储存。使用时在具体数据集附系数及来源。 | 实际活动；组分分析；引用适用系数 | 披露的物质介质排放及碳基准 | |

### 数据质量要求

非参考卡片的暂定数值QA筛查是主观量级提示，不是FAO实测区间：零仅允许有据未启用或无交换情况；质量上限5或10千克提示相对1千克产品异常大的辅助材料或废物，20千克提示含附着寄主物、湿态损失及库存影响的粗原料比例。100千克整理水及10,000千克寄主水提示逐步增加的高用水记录；100MJ能源及30千克燃烧排放提示能源系数或单位问题。10,000 m2*a土地提示极低产量或长期寄主归属。这些所选量级故意宽泛，不是已证明的普适包络。实际值超界时复核证据边界分配及单位并保留有效观测；不得截断数值、拒收合格产品或强行闭合以满足筛查。最终输出[1,1]区间是由验收发运净重记录支持的精确归一化恒等关系，不是实测产率估计。

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `identity_quality` | 全部具体交换 | 数据集发布前解析实际生物材料身份、流类型状态去向及属性单位；宽泛类别或载体角色不是固定UUID。 | 具体流详情及支持核实；批次记录 |
| `measurement_quality` | 初级产品及转移 | 保留校准净计量、水分挥发杂质方法及不确定性，不用统一等级水分产率系数。 | 匹配原始记录及检测方法 |
| `coverage_quality` | 全部节点 | 零或不适用须有实际证据；未知数量路线是缺口不是零。下述暂定范围是可替换QA筛查，不能作为观测值或强制限值。 | 核对；完整性台账；实际过程激活 |
| `period_asset_quality` | 寄主及共享服务 | 覆盖相关寄主阶段周期库存变动、资产消费者和更换终止假设，并做敏感性分析。 | 期间资产归属及独立总量 |
| `scope_quality` | 下游消费者 | 披露初级限定部分分类覆盖、实际门形态等级及上游排除；不适用于精制虫胶或化学代理数据集。 | 范围及门元数据 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_final_reference` | primary_product_dispatch | 要求唯一合格最终输出为1千克按收到状态参考产品净质量，不含包装；名称链接质量属性单位及限定信息与第3节一致。中间物和原料接收保持实测，不固定。 | |
| `validate_source_route` | 来源及寄主节点 | 核实每批实际植物或紫胶来源、管理接种激活及初级整理旁路操作记录，不实施全部替代路线或未知状态默认。 | fao-plant-exudate-production; fao-lac-primary-states |
| `validate_balance` | 全部材料交接 | 核对湿重净重干重组分、水分天然挥发损失杂质其他等级废物留存种胶返工及库存，披露残差和测量不确定性。不得将全部损失记水或废物记销售产品。 | |
| `validate_attribution` | 期间等级基础设施及季节批次 | 要求完整有意产品及服务消费者、期间阶段边界、更换终止、因果细分或有据剩余分配；不得重复寄主共享资产清理库存或退回材料负荷。 | |
| `validate_normalization` | 全部数量及采集协议 | 要求匹配验收发运分母、记录原始基准及换算，以及仅一次归属归一化。全部数量及协议报告按每1千克参考流。范围筛查不是默认值或质量平衡已满足的证据。 | |
| `validate_identity_emissions` | 具体交换及直接排放 | 最终数据集发布前核实实际固定身份及支持单位；将变化角色展开为具体材料物质及去向。明确空气物质排放和燃料服务燃烧范围，避免虚构或重复尾气。 | |
| `validate_scope_state` | 参考产品及下游用途 | 拒绝初级天然胶树脂紫胶与橡胶工业松香松节油提取虫胶或成品配方互换；初级限定方法不代表全分类叶完全覆盖。不自动抵扣固碳或储存。 | unsd-cpc-natural-resins; fao-lac-primary-states |
| `validate_biological_source_handoff` | `host_management`; `plant_collection`; `lac_collection`; `primary_preparation`; `producer_dispatch` | 每批采集产出必须有明确来源及配对下游接收；外购批次不重复作为本场采集。核对原始采集量与实物交接，不能用辅助投入量解释全部生物产出，也不能从未解释差额虚构形成量、环境资源流或 CO2 吸收。对未知来源或交接阻断完整数据包；总生物形成量或未采集存量无证据时不得声称其平衡已闭合。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 实际具名限定初级分泌物或粗紫胶生产者发运产品的前景数据包 |
| downstream_use | secondary_dataset；background_dataset用于声明匹配初级产品供应 |
| allowed_use | 实际生物来源初级状态门等级及计量兼容的产品供应；带份额披露的可追溯批次汇总 |
| excluded_use | 整个CPC分类叶自动替代；泛称纯树脂；提取精制虫胶；橡胶；制造配方；交付终端使用；未限定物种状态混合 |
| required_metadata | 身份寄主品系；来源；路线管理；初级形态等级；水分挥发杂质及净重基准；期间门；库存；有意产品；分配；共享资产；单位换算；上游数据集 |
| required_quality_disclosure | 覆盖缺口未解析身份校准检测组分平衡残差期间代表性分配假设可替换推理范围及范围排除 |
| update_trigger | 生物来源生产初级整理路线产品形态质量门管理期供应商数据组分计量或分配证据变化 |

## 11. 数据源

| 来源编号 | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-natural-resins` | `official_guidance` | 联合国统计司CPC3.0子类03219，https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/03219 ；访问2026-10-08 | 分类标题背景，无详细注释，不声称统一初级限定包含 |
| `fao-plant-exudate-production` | `official_guidance` | FAO第VIII章非木材林产品，https://www.fao.org/4/t0122e/t0122e0d.htm ；访问2026-10-08 | 植物天然分泌割胶及不同天然胶树脂身份 |
| `fao-tapping-route` | `official_guidance` | FAO部分物种改进割胶技术持续利用天然胶树脂，https://www.fao.org/4/y4496e/Y4496E29.htm ；访问2026-10-08 | 条件割胶刺激实践，不是统一药剂配方或用量 |
| `fao-lac-primary-states` | `official_guidance` | FAO非木材林产品国际贸易第IX章昆虫产品，https://www.fao.org/4/x5326e/x5326e0c.htm ；访问2026-10-08 | 天然及接种紫胶来源；粗枝胶、除去颗粒杂质的粒胶（seedlac）与提取虫胶的区别；粒胶不是接种用种胶（broodlac） |
| `fao-gum-primary-handling` | `official_guidance` | FAO小额信贷与森林小企业：阿拉伯胶，https://www.fao.org/4/a0226e/a0226e10.htm ；访问2026-10-08 | 天然胶寄主照料清理等级包装示例，不向其他产品推定季节等级阈值或产出系数 |
