---
pcr_id: "pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.chillies-and-peppers-dry-capsicum-spp-pimenta-spp-raw"
language: "zh-CN"
status: candidate
sync_with: "pcr.en-US.md"
content_maturity: authored_methodology
translation_status: aligned
---
# 初级干燥门的未加工干辣椒及多香果（辣椒属或多香果属）
## 1. 范围与适用性
本 PCR 指导 CPC 3.0 `01652` 辣椒属或多香果属未加工干果的前景数据包。声明产品是经采收、干燥、首次清理或分级后的整粒干果，交付点为初级干燥门。数据包须识别属、种或栽培品种；*Pimenta dioica* 多香果与辣椒属辣椒或红椒应分别记录生产路线。混合属产品须分开清单和产出，不得推定共同的作物系数或含水率目标。
边界从受管理栽培或明确来源的鲜果投入开始，到净合格未加工干果为止。包含采收、初次处理、自然/太阳能或机械干燥，以及交付点之前实施的首次清理和分选。外购上游投入连接背景数据集。鲜青辣椒和甜椒（`01231`）、胡椒属胡椒（`01651`）、压碎、研磨或其他加工干辣椒（`23922`）、混合制品、提取、灭菌、零售包装和下游配送均不属于本参考产出。只对外购鲜果进行干燥的前景数据包须声明其上游鲜果数据集，不得声称涵盖未采集的种植阶段。| `un-cpc-3-exp-2025`; `codex-cxs-353-2022`; `codex-cxs-358-2024`

## 2. 产品类别身份
| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.chillies-and-peppers-dry-capsicum-spp-pimenta-spp-raw` |
| classification_refs | CPC 3.0 `01652`，辣椒属或多香果属未加工干果 |
| covered_products | 整粒未加工干辣椒、干红椒果实或多香果，须声明属、种、形态和干燥路线 |
| excluded_products | 鲜青辣椒或甜椒；胡椒属胡椒；压碎、粉碎、混合、提取或其他加工香辛料 |
| representative_product | 声明的初级干燥门处 1 kg 净合格整粒未加工干果 |
| production_route | 一年生或季节性管理的辣椒属作物，或多年生管理的多香果果实生产，之后采收并按路线干燥 |
| market_state | 整粒未加工干果，散装或首次运输容器；按适用规格声明目标含水率和等级 |
辣椒属与多香果属是不同的生物生产路线，不得互换植物投入。自然/太阳能与机械干燥是同一干燥活动的替代技术；预干燥和最终干燥若并用，须分别记录。| `codex-cxs-353-2022`; `codex-cxs-358-2024`; `unece-ddp-24-2013`

## 3. 参考流
| Field | Value |
| --- | --- |
| What | 初级干燥门处整粒未加工辣椒属或多香果属干果 |
| How much | 1 kg 净合格干果 |
| How well | 声明属/种、整粒形态、进出含水率、等级、干燥路线、地域和交付点 |
| How long or cycle | 一个声明的采收季及其对应干燥批次 |
| reference_flow_link | 下表的参考量和产品流 |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | 未加工干辣椒属或多香果属果实（UUID 待确认） |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 属和种；品种或商品类型；整粒未加工状态；含水率；等级；自然/太阳能或机械干燥；采收季；地域；声明交付点；散装或容器状态 |
| Binding | `unmapped` |
参考量不包含皮重、去除的自由水、拒收物、交付点前分离的果柄和低等级果实。Tiangong 身份查询成功前不得声称已有 CPC 专用产品流 UUID。

## 4. 测量与单位规则
| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | 合格干果产出 | Mass | kg | 在声明交付点称量净合格整粒干果；排除皮重和拒收物。 |
| `moisture_basis` | 采收果实和干果 | Mass and moisture fraction | kg and % wet basis | 测量或记录各批次进出含水率；以干物质守恒换算，并单列实测移除物。 |
| `drying_water` | 干燥产出 | Mass | kg | 去除水量等于进料水分减去合格及拒收固体所含水分；如有加水须调整。 |
| `crop_area_time` | 管理种植 | Area-time | ha·season or ha·year | 一年生辣椒属使用作物季；多年生多香果使用声明的果园年度/结果期；若包括建园，记录分摊。 |
| `energy_carrier` | 干燥及田间能源 | Energy, Mass or Volume | kWh, MJ, kg or L | 保留能源载体、燃料含水率、换算基础、实测工序和批次关联。 |
| `nutrient_basis` | 肥料及排放 | Mass | kg product and kg nutrient | 分别记录制剂质量和养分组成；排放计算使用声明的养分投入。 |

## 5. 系统边界
受管理生产节点记录作物或结果树对象、地域、种植或果园面积、种苗或树苗、灌溉、养分和植保投入、田间能源、土地利用及相关直接排放。辣椒属和多香果属可能有不同种植周期、多年生设施和建园分摊；应分别采集，而非套用一个作物系数。采收作为独立节点，因为它形成有计量和采集损失的鲜果交接。干燥把含水易变质的鲜果稳定为实测整粒干果；首次清理分级分别交接合格、降级、拒收和废物流。| `codex-cxs-353-2022`; `codex-cxs-358-2024`; `ipcc-2019-managed-soils`
### 边界规则
| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_raw_dried` | 参考产品 | 纳入形成整粒未加工干果所需的干燥和首次清理；排除压碎、研磨、提取、混合和后续处理。 | `un-cpc-3-exp-2025`; `codex-cxs-353-2022`; `codex-cxs-358-2024` |
| `boundary_route_identity` | 生产 | 分别记录辣椒属一年生/季节性路线和多香果属多年生路线；声明种植是前景采集还是以外购鲜果上游数据集提供。 | `codex-cxs-353-2022`; `codex-cxs-358-2024` |
| `boundary_drying_delta` | 干燥 | 声明自然/太阳能及机械步骤、批次或连续模式、能源和服务投入、含水变化和天气暴露；纳入交付点前所有步骤。 | `unece-ddp-24-2013`; `mass-balance-identity` |
| `boundary_output_states` | 采收、干燥、分选 | 按去向分别记录合格干果、降级果、拒收果、果柄/杂质、其他可回收残留物、蒸发水和未解释损失。 | `mass-balance-identity` |
### 边界抽象
| Field | Value |
| --- | --- |
| declared_starting_condition | 已识别的受管理作物/果树及种植面积，或干燥入口处有来源记录的外购鲜果批次 |
| starting_condition_role | 生物生产投入或外购上游产品；绝非第二参考产出 |
| product_classification_scope | CPC 01652 整粒未加工辣椒属/多香果属干果；排除鲜品 01231、胡椒属 01651 和加工品 23922 |
| recursive_input_rule | 同类别干果若用于重新干燥或混配，须单独记录来源和质量；不得递归算作本次采收的新产出。 |
| upstream_dataset_requirement | 种植材料、肥料、水供应、燃料、电力、设备、外购鲜果和处理服务须有代表性背景数据集或记录排除理由。 |
| disclosure | 属/种、路线、季节/场址、鲜果来源、干燥前后含水率和等级、干燥技术、批次得率、拒收去向、交付点及分摊决策 |

## 6. 过程清单结构
### 过程图
| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `managed_fruit_production` | 受管理果实生产 | conditional | 前景包含种植时 | foreground | 作物季或果园年度 |
| `fruit_harvest` | 果实采收与收集 | conditional | 前景包含种植时 | foreground | 收集鲜果 |
| `primary_drying` | 果实初级干燥 | required | 所有纳入的自然/太阳能及机械干燥步骤 | foreground | 实测含水率的干果 |
| `first_cleaning_grading` | 首次清理分级 | conditional | 交付点前实施清理或分级时 | foreground | 合格整粒干果 |

### 过程：受管理果实生产（`managed_fruit_production`）
#### 输入
##### 产品流

###### 种植材料（`planting_stock`）
声明辣椒属种子或种植材料，以及多香果属树苗或树木维护。
- 选定流：种植材料
- 流属性/单位：Mass / kg
- 数量规则：按具体工序和批次测量，再归一化至 1 kg 净合格未加工干果
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格未加工干果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_records`
- 来源：`codex-cxs-353-2022`
- 数量范围：暂定非负筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg
  - 基准：每 1 kg 合格干果的宽泛首轮筛选；以路线实测值替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 农业养分与肥料投入（`managed_fruit_production_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格未加工干果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_records`
- 来源：`ipcc-2019-managed-soils`
- 数量范围：暂定肥料产品筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：3
  - 单位：kg/kg
  - 基准：每 1 kg 合格干果的肥料和含养分改良剂产品质量；以路线实测值替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 植保产品（`field_crop_protection_products`）

按产品分别记录配方、有效成分含量、施用工序和施用批次。

- 选定流：具名植保产品
- 流属性/单位：产品质量 / 视情况采用 kg 产品和 kg 有效成分
- 数量规则：按工序和批次计量每种具名产品，保留有效成分组成，并归一化至 1 kg 净合格未加工干果。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格未加工干果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_records`
- 来源：`ipcc-2019-managed-soils`
- 数量范围：暂定植保产品筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：3
  - 单位：kg/kg
  - 基准：每 1 kg 合格干果的植保产品质量；以路线实测值替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 灌溉水、田间燃料和电力（`field_water_energy`）
按工序记录水源、灌溉供水、燃料和电力；有依据时可为零。
- 选定流：灌溉水、田间燃料和电力
- 流属性/单位：Volume or Energy / m3 or kWh
- 数量规则：按具体工序和批次测量，再归一化至 1 kg 净合格未加工干果
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格未加工干果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_records`
- 来源：`ipcc-2019-managed-soils`
- 数量范围：暂定非负筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：2
  - 单位：m3/kg
  - 基准：每 1 kg 合格干果的宽泛首轮筛选；以路线实测值替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流
不预设废物投入；回用堆肥须记录来源及负担处理。

##### 基本流
依据采集的作物投入记录土地占用、按水源区分的取水和管理土壤排放；不得把记录缺失推定为零排放。| `ipcc-2019-managed-soils`

#### 输出
##### 产品流

###### 待采辣椒属或多香果属果实（`standing_fruit`）
按属和季节记录生产至采收交接处的受管理果实状态。
- 选定流：待采辣椒属或多香果属果实
- 流属性/单位：Mass / kg
- 数量规则：按具体工序和批次测量，再归一化至 1 kg 净合格未加工干果
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格未加工干果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_records`
- 来源：`mass-balance-identity`
- 数量范围：暂定非负筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：30
  - 单位：kg/kg
  - 基准：每 1 kg 合格干果的宽泛首轮筛选；以路线实测值替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流
分别记录田间残留物及拒收果实，并说明留田、移出、回收或处置去向。
##### 基本流
直接作物排放仅依据有记录的投入和方法计算。

### 过程：果实采收与收集（`fruit_harvest`）
#### 输入
##### 产品流

###### 采收燃料、电力和服务（`harvest_services`）
将实测燃料、电力和服务活动分配至采收批次。
- 选定流：采收燃料、电力和服务
- 流属性/单位：Energy / kWh or MJ
- 数量规则：按具体工序和批次测量，再归一化至 1 kg 净合格未加工干果
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格未加工干果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_records`
- 来源：`mass-balance-identity`
- 数量范围：暂定非负筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kWh/kg
  - 基准：每 1 kg 合格干果的宽泛首轮筛选；以路线实测值替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流
不预设通用废物投入。
##### 基本流
直接尾气若有测量则记录；燃料上游负担保留在背景数据集中。
#### 输出
##### 产品流

###### 辣椒属或多香果属鲜果（`fresh_fruit_handoff`）
称量整粒鲜果并记录含水率、植物身份、采收日期和批次。
- 选定流：辣椒属或多香果属鲜果
- 流属性/单位：Mass / kg
- 数量规则：按具体工序和批次测量，再归一化至 1 kg 净合格未加工干果
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格未加工干果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_records`
- 来源：`mass-balance-identity`
- 数量范围：暂定非负筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：30
  - 单位：kg/kg
  - 基准：每 1 kg 合格干果的宽泛首轮筛选；以路线实测值替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流
分别记录未收集果实、田间拒收物和附带物料及其去向。
##### 基本流
不预设新的基本流产出。

### 过程：果实初级干燥（`primary_drying`）
#### 输入
##### 产品流

###### 整粒辣椒属或多香果属鲜果（`drying_fruit_input`）
记录鲜果交接或外购批次、入料质量和含水率。
- 选定流：整粒辣椒属或多香果属鲜果
- 流属性/单位：Mass / kg
- 数量规则：按具体工序和批次测量，再归一化至 1 kg 净合格未加工干果
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格未加工干果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_lot`
- 来源：`mass-balance-identity`
- 数量范围：暂定非负筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：30
  - 单位：kg/kg
  - 基准：每 1 kg 合格干果的宽泛首轮筛选；以路线实测值替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 电力、燃料及干燥服务（`drying_energy`）
区分日晒/太阳能暴露、风机电力、加热燃料、外包干燥及批次清理或切换投入。
- 选定流：电力、燃料及干燥服务
- 流属性/单位：Energy / kWh or MJ
- 数量规则：按具体工序和批次测量，再归一化至 1 kg 净合格未加工干果
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格未加工干果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_lot`
- 来源：`unece-ddp-24-2013`
- 数量范围：暂定非负筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：20
  - 单位：kWh/kg
  - 基准：每 1 kg 合格干果的宽泛首轮筛选；以路线实测值替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流
若回收热或废物衍生燃料进入干燥，须记录来源及负担处理；不作默认推定。
##### 基本流
燃料若在前景内燃烧，应记录直接燃烧排放。

#### 输出
##### 产品流

###### 整粒未加工辣椒属或多香果属干果（`dried_fruit_handoff`）
称量首次分级前、在实测含水率下稳定的整粒干果。
- 选定流：整粒未加工辣椒属或多香果属干果
- 流属性/单位：Mass / kg
- 数量规则：按具体工序和批次测量，再归一化至 1 kg 净合格未加工干果
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格未加工干果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_lot`
- 来源：`mass-balance-identity`
- 数量范围：暂定非负筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：2
  - 单位：kg/kg
  - 基准：每 1 kg 合格干果的宽泛首轮筛选；以路线实测值替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流
记录损坏、霉变或其他拒收果实及其回收、处理或处置路线；重新干燥果实须保持与原批次的关联。
##### 基本流
蒸发水由实测水分平衡计算，并按清单约定报告为去除水分。

### 过程：首次清理分级（`first_cleaning_grading`）
#### 输入
##### 产品流

###### 分选前整粒干果（`sorting_input`）
记录整粒干果交接，不得算作新采收产品。
- 选定流：分选前整粒干果
- 流属性/单位：Mass / kg
- 数量规则：按具体工序和批次测量，再归一化至 1 kg 净合格未加工干果
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格未加工干果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grade_records`
- 来源：`mass-balance-identity`
- 数量范围：暂定非负筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：2
  - 单位：kg/kg
  - 基准：每 1 kg 合格干果的宽泛首轮筛选；以路线实测值替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 分选能源及首次运输容器（`sorting_inputs`）
记录交付点内的电力、清理空气、麻袋或首次运输容器。
- 选定流：分选能源及首次运输容器
- 流属性/单位：Energy or Mass / kWh or kg
- 数量规则：按具体工序和批次测量，再归一化至 1 kg 净合格未加工干果
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格未加工干果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grade_records`
- 来源：`mass-balance-identity`
- 数量范围：暂定非负筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：5
  - 单位：kWh/kg
  - 基准：每 1 kg 合格干果的宽泛首轮筛选；以路线实测值替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流
不预设废物投入。
##### 基本流
若有测量，记录粉尘排放；分离的土壤或果柄不属于合格产品。
#### 输出
##### 产品流

###### 整粒未加工辣椒属或多香果属干果；UUID 待确认（`accepted_dried_fruit`）
按声明含水率称量各合格等级，仅汇总符合参考规格的等级。
- 选定流：整粒未加工辣椒属或多香果属干果；UUID 待确认
- 流属性/单位：Mass / kg
- 数量规则：按具体工序和批次测量，再归一化至 1 kg 净合格未加工干果
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格未加工干果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grade_records`
- 来源：`codex-cxs-353-2022`
- 数量范围：暂定非负筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1.1
  - 单位：kg/kg
  - 基准：每 1 kg 合格干果的宽泛首轮筛选；以路线实测值替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流
分别记录降级但可用果实、拒收物、分离的果柄/杂质和粉尘。声明每项是否返工、销售、回收或弃置；仅有依据的联产品参与分配。
##### 基本流
不预设通用基本流。

## 7. 分配与联产品处理
| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_primary` | 作物和干燥批次 | 先将实测工序归属至植物路线、场址、季节和批次；再按净合格整粒干果归一化全部负担。 | `mass-balance-identity` |
| `allocation_offgrade` | 降级果实 | 区分降级但可销售果实。优先按等级细分；真正无法细分的联产品须记录所选物理或经济分配及价格/数量。 | `mass-balance-identity` |
| `allocation_rework` | 重新干燥或分选果实 | 将返工能源和损失关联原批次；仅在最终出口计算合格质量，防止重复计算共享运行或切换负担。 | `mass-balance-identity` |
| `allocation_residue` | 果柄、拒收物、残留物 | 明确记录去向和回收抵扣；不得默认分配产品负担或避免负担。 | `mass-balance-identity` |
一年生辣椒属与多年生多香果属产出年份不能共用未声明的分母。多香果须记录结果年份以及建园或共享果园负担的归属。批次干燥机须记录运行级投入、产出、清理和切换；连续干燥须记录期间质量平衡和稳定运行窗口。

## 8. 前景数据采集、计算和质量规则
### 数据采集协议
| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_crop_records` | `managed_fruit_production` | 种植投入 | 农场记录 | 属；种；地块；面积；季节；种植材料；肥料；养分；农药；水；能源 | 票据、田间日志及仪表 | kg; ha; m3; kWh | 每次作业 | 声明的完整作物季或多香果果园年度 | 各场址 | 按植物路线和季节汇总 | 带日期记录及仪表校准 |
| `cp_harvest_records` | `fruit_harvest` | 鲜果交接 | 采收票据 | 批次；日期；鲜果质量；含水率；地块；损失；机械燃料 | 地磅及采收日志 | kg; %; L | 每批 | 完整采收期 | 各来源地块 | 汇总实测批次并保留损失 | 皮重及秤校验 |
| `cp_drying_lot` | `primary_drying` | 干燥质量及能源 | 干燥运行日志 | 批次；起止；进出质量及含水率；路线；燃料；电力；拒收物；返工 | 校准秤、含水率检测和仪表 | kg; %; kWh; MJ | 每运行批次或连续期间 | 声明的所有干燥 | 各干燥设备 | 按批次进行干物质和水分平衡 | 校准、含水率方法及运行关联 |
| `cp_grade_records` | `first_cleaning_grading` | 合格及降级产出 | 等级日志 | 批次；合格等级质量；含水率；降级；拒收；果柄；去向；能源 | 校准秤及等级记录 | kg; %; kWh | 每批 | 所有交付点产出 | 各分选设备 | 仅汇总合格等级 | 等级规格及核对表 |
### 计算规则
| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_dry_matter` | 干燥批次 | 进料干物质＝进料质量 ×（1－进料湿基含水率）；与所有干燥固体和损失核对 | 质量及含水率检测 | 干物质平衡 | `mass-balance-identity` |
| `calc_water_removed` | 干燥批次 | 进料水分－所有干燥产出保留水分－单独实测液态出口，并调整任何加水 | 质量及含水率检测 | 去除水分，kg | `mass-balance-identity` |
| `calc_normalize` | 完整数据包 | 归属后的投入/排放除以声明交付点处净合格干果 kg | 已归属总量及合格质量 | 每 kg 清单 | `mass-balance-identity` |
### 数据质量要求
| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 所有批次 | 每个合格产出均须追溯植物身份、整粒未加工形态和路线。 | 来源批次及等级记录 |
| `dq_moisture` | 干燥 | 须测量或记录进出含水率、方法和抽样方案；不得假定跨属的统一目标。 | 含水率检测及规格 |
| `dq_balance` | 采收至交付点 | 按批次核对合格、降级、拒收及损失质量，并解释差异。 | 签署的质量平衡表 |

## 9. 验证规则
| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_scope` | 产品身份 | 本参考产品不得包含鲜青果、胡椒属胡椒，以及压碎、研磨或其他加工干香辛料。 | `un-cpc-3-exp-2025` |
| `validation_route` | 过程图 | 根据当前记录核实辣椒属/多香果属路线、种植边界、日晒/太阳能或机械干燥阶段，以及批次或连续期间归属。 | `codex-cxs-353-2022`; `codex-cxs-358-2024` |
| `validation_moisture` | 干燥 | 按物种和市场分别检查实测进出含水率及适用产品规格；不得套用统一阈值。 | `codex-cxs-353-2022`; `codex-cxs-358-2024` |
| `validation_balance` | 干燥及分选 | 核对干物质和水分；最终出口前，合格产出须排除拒收、降级及仍在返工中的质量。 | `mass-balance-identity` |
| `validation_identity_gap` | 参考流 | UUID 未确定时，数据集不得声称拥有固定的 Tiangong 参考产品流。 | `un-cpc-3-exp-2025` |


## 10. 发布数据集概况
| Field | Value |
| --- | --- |
| dataset_role | 未加工干果生产前景数据包 |
| downstream_use | `secondary_dataset`；路线和身份审查后可作 `background_dataset` |
| allowed_use | 整粒未加工辣椒属或多香果属干果作为已声明下游加工或销售投入 |
| excluded_use | 将鲜青果、胡椒属胡椒、粉状香辛料、混合制品或提取物作为相同产出 |
| required_metadata | 物种；种植来源；场址；季节；干燥路线；批次模式；含水率；等级；交付点；确认后的参考流 UUID |
| required_quality_disclosure | 测量覆盖；含水率方法；缺失流；暂定范围；干物质平衡；分配及拒收处理 |
| update_trigger | 植物路线、干燥技术、目标含水率/等级、交付点、分配或代表性记录变化 |
## 11. 数据来源
| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-exp-2025` | official_guidance | 联合国统计司，CPC 3.0 解释性说明，2025 年 6 月 30 日，<https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf> | 01652 未加工干果的边界与排除项 |
| `codex-cxs-353-2022` | standard | 食品法典 CXS 353-2022，干制或脱水辣椒和红椒标准，<https://www.fao.org/fao-who-codexalimentarius/codex-texts/standards/en/> | 辣椒属干品形态及相应质量规格 |
| `codex-cxs-358-2024` | standard | 食品法典 CXS 358-2024，干制或脱水果实和浆果来源香辛料标准，<https://www.fao.org/fao-who-codexalimentarius/codex-texts/standards/en/> | 多香果身份及干品规格 |
| `unece-ddp-24-2013` | standard | 联合国欧洲经济委员会 DDP-24，整粒干辣椒，<https://unece.org/trade/documents/2013/02/standards/chilli-peppers-whole-dried> | 整粒辣椒形态及干燥路线 |
| `ipcc-2019-managed-soils` | official_guidance | IPCC，2019 Refinement，第 4 卷第 11 章，<https://www.ipcc-nggip.iges.or.jp/public/2019rf/vol4.html> | 管理土壤排放核算输入 |
| `mass-balance-identity` | method_factor | 对实测采收、干燥与分选阶段应用干物质和水的守恒关系 | 干燥质量平衡与核对 |
