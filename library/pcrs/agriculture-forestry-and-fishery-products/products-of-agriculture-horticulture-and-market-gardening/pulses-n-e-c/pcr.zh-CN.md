---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.pulses-n-e-c
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 其他豆类（干豆科蔬菜）

## 1. 范围与适用性

本 PCR 适用于归入 CPC 3.0 类别 01709、且未在更具体豆类子类中单独分类的一种已声明豆科干脉籽粒。数据包边界从一个已识别地块在作物季开始整地和播种前起，覆盖生产、收获、脱粒或脱荚、必要时干燥、清理、分级，以及首次达到商品状态的农场或初级调理交接。农场储存为条件性过程：仅当声明的产品交接点位于该储存期之后时纳入。

每个数据集仅代表一种已声明作物种类或作物类型、品种或种子批次、地块作物季、生产地理范围及商品等级。输出为成熟、干燥、已脱粒或脱荚、已清理的豆类籽粒；应声明实测含水率及其基准、等级、预期市场和交接点。应按实际生产记录声明雨养或灌溉、人工或机械操作，以及日晒、太阳能辅助或动力干燥等路线选择。除非分别保留其投入和产出，否则不得将不同路线平均成一个路线。

不包括：作为蔬菜用途、未成熟时采收的新鲜青豆；已由更具体 CPC 类别覆盖的豆类；作为播种用种子销售的产品；加工、碾磨、烹煮、罐藏或零售包装食品；农场外运输和加工；以及土地转换，除非另行声明的土地使用方法要求纳入。不得从 CPC 子类推定肥料率、植保剂量、产量、损失或排放因子。此类数量由前景记录和明确指定的区域方法确定。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.pulses-n-e-c |
| classification_refs | CPC 3.0:01709，exact；CPC 2.1 对应项：01709；HS 2012/2017 对应项：071390 |
| covered_products | 归入 CPC 01709 且未由更具体豆类子类覆盖的一年生豆科作物干籽粒；每个数据集声明一种作物种类或作物类型 |
| excluded_products | 已具体分类的豆类；新鲜青色或未成熟豆科蔬菜；作为播种种子销售的产品；豆粉、分瓣或其他加工豆类、熟食及零售包装产品 |
| representative_product | 一批按物种识别、成熟、干燥、已脱粒或脱荚、已清理并分级的豆类籽粒，位于其声明的农场或初级调理交接点 |
| production_route | 一个作物季的田间管理生产，随后进行收获、按物种适用的脱粒或脱荚、必要时干燥、清理和分级；声明实际田间及采后技术选择 |
| market_state | 在声明等级和含水率下的干豆类籽粒，达到首次农场或初级调理交接状态；说明其为销售、留种或储存 |

## 3. 参考流

功能单位为 1,000 kg 某一已声明豆类物种或作物类型产品，位于首次达到商品状态的农场或初级调理交接点。数据集应声明品种或种子批次、作物年度、地点、产品等级、含水率及湿基或干基约定，以及交接点位于农场储存前还是储存后。该基准使田间投入和损失能够归一化，同时避免将不同豆类物种或等级视为同一种物理产品。

| 字段 | 值 |
| --- | --- |
| What | 一种已声明物种或作物类型、等级的干燥、脱粒或脱荚、清理并分级的豆类籽粒 |
| How much | 声明交接点处净参考产品 1,000 kg |
| How well | 成熟豆类籽粒，符合数据集声明的等级和含水率规格；报告含水率及其基准 |
| How long or cycle | 一个作物季及相关收获和采后调理；如包括储存，声明储存期 |
| reference_flow_link | reference_pulse_seed |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 其他豆类；位于声明交接点的干燥、清理后豆类籽粒 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 未解析；尚无已验证支持行 |
| 参考单位 | kg |
| 必需限定信息 | 物种或作物类型；品种或种子批次；作物年度；生产地理范围；产品等级；含水率数值及基准；农场或初级调理交接点；是否包括储存及其持续时间 |

## 4. 计量与单位规则

| rule_id | Applies to | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品和质量类清单 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录声明交接点处豆类籽粒的净质量。扣除容器及单独测量的杂质；声明产品含水率数值和基准。 |
| `moisture_basis` | 干燥或储存前后的豆类籽粒 | 含水率 | % 湿基；除非来源方法明确要求干基 | 记录测量方法、取样日期及湿基或干基约定。比较前先换算；不得将 FAO 的区域性储存指导视为普遍产品规格。 |
| `field_area` | 种植及产量记录 | Area | ha | 使用分配给已报告地块作物季的实测作物面积。明确保留间作面积及其任何分配基准。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 一个已识别农场地块，在一个已声明作物季整地和播种前的状态 |
| starting_condition_role | 前景地块作物季边界；报告地点、面积、前茬或土地使用、土壤背景、作物物种、品种或种子批次及生产制度 |
| product_classification_scope | 一种 CPC 3.0:01709 产品类型；归入更具体 CPC 豆类类别的物种不在本 PCR 范围内 |
| recursive_input_rule | 播种种子作为产品投入记录。若其与当前豆类产出属于相同物理类别，则使用上游种子生产数据集或单独建模该种子批次；不得递归地将当前作物产出再次作为其种子投入。 |
| upstream_dataset_requirement | 在可用时，将购入种子、实际养分产品、植保产品、供应的灌溉水及能源载体关联至适当上游数据集。识别缺失的背景数据。 |
| disclosure | 声明地块作物季、前茬或土地状态、物种和品种、水分管理制度、投入、收获与调理路线、产出等级、含水率及基准、交接点，以及任何纳入的储存期。 |

### 边界规则

| rule_id | Applies to | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | 从种植至首次产品交接 | 纳入已声明作物季的田间作业和作物管理，随后纳入达到声明干豆类产品所需的收获及调理步骤。若整地属于该作物生产活动，则纳入整地。 | `fao-pulse-postharvest-2020` |
| `boundary_first_handoff` | 农场或初级调理交接点 | 默认边界终止于干燥、脱粒或脱荚、清理和分级后豆类籽粒的首次农场或初级调理交接点。不包括后续配送和食品加工。 | `unsd-cpc21-01709` |
| `boundary_optional_storage` | 农场储存 | 仅当声明的交接点位于储存期之后时纳入储存。记录储存期、设施和容器、能源及处理剂使用、状态监测和实测损失。 | `fao-pulse-postharvest-2020`; `fao-onfarm-grain-manual-2009` |
| `boundary_same_category_seed` | 播种种子投入 | 将种子批次作为产品投入记录，并在可用时链接其上游生产。不得将其计为当季产出，也不得递归地将当前产品数据集用于该种子投入。 |  |
| `boundary_land_history` | 土地和地块历史 | 披露前期土地用途及任何土地转换。仅在已识别的适用土地使用方法和声明时间段内纳入转换负荷；不得虚构分摊周期。 |  |

### 路线变体

豆类田间管理生产是父路线。实际地块作物季可以为雨养或灌溉，整地或田间作业可以为人工、机械或混合。仅当变体会改变过程拓扑、清单类别、计算、采集需求或校验时，才单独声明为路线案例。对同一水分事件，雨养和灌溉为互斥描述，但以雨养为主的季节仍可能补充灌溉；保留实测灌溉事件，不强行转化为二元标签。同一生产组织内不同地块可以采用并存变体，但前提是保留各自地块作物季身份。

收获与调理父路线包括收获、脱粒或脱荚、必要时干燥以及清理/分级。人工与机械脱粒会改变服务和能源投入记录。日晒、太阳能辅助干燥和动力干燥会改变干燥设备、批次记录和能源投入；这些方法可能在同一批次中依次发生，因此应记录实际发生的每个阶段。FAO 说明脉类可采用日晒和可再生能源、化石燃料或电力驱动的干燥方式；不得据此推定每批均采用所有方式。

### 补充边界规则

| rule_id | Applies to | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_route_parent` | 替代性田间生产 | 将已声明生产变体关联至豆类田间管理生产父过程，并报告拓扑、清单、计算、采集或校验要求发生的变化。使用实际地块作物季记录；路线标签本身不足以证明路线变体。 | `fao-pulse-postharvest-2020` |
| `boundary_technology_parent` | 替代性收获与调理技术 | 将人工、机械、日晒、太阳能辅助或动力作业关联至相应父过程，报告投入和过程数据的每项实际变化。声明同一批次上技术是依次使用还是互斥。 | `fao-pulse-postharvest-2020`; `fao-postharvest-system-1994` |

## 6. 过程清单结构

清单行表示跨越所列单元过程边界的交换。产品和废物数量按实际批次采集，并归一化至功能单位。只有基于实测前景数据或已命名且适用于作物和区域的方法，才量化基本流排放；不得根据通用作物名称推测排放 UUID 或排放因子。

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `pulse_cultivation` | 豆类作物田间管理生产 | required | 一个已识别地块作物季，直至作物成熟 | managed biological production | 每 1,000 kg 合格参考产品所需地块面积和作物季投入 |
| `pulse_harvest` | 豆类作物收获与收集 | required | 将成熟作物从田间分离收集 | harvest and capture | 每个作物季的收获作物质量和收获损失 |
| `pulse_threshing` | 脱粒或脱荚 | required | 从豆荚或植株材料中单独分离籽粒 | material treatment | 来料质量、回收豆粒、残余物和拒收物 |
| `pulse_conditioning` | 初级干燥与清理 | required | 需要时纳入干燥，并纳入首次清理/准备交接 | primary conditioning | 调理前后的籽粒质量及含水率 |
| `pulse_grading` | 分级与筛选 | conditional | 当来料被筛选为两个或更多已声明等级或去向时纳入 | grading and sorting | 各合格等级、降级产出、拒收产出和交接的质量 |
| `pulse_storage` | 农场储存 | conditional | 仅当声明参考交接点位于农场储存后时纳入 | preservation and stabilization | 储存期、进出质量与品质、能源、处理剂和损失 |

### 过程：豆类作物田间管理生产（`pulse_cultivation`）

#### 输入

##### 产品流

###### 已声明豆类作物的播种种子（`planting_seed`）

记录用于建植本作物季的种子，包括物种、品种或地方品种、种子批次来源、处理方式和播种方法。具体种子流随已声明作物而异，应从前景种子批次记录解析。

- 选定流：用于播种的豆类种子，作物类型特定
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：测量用于已声明地块作物季的播种种子；分别识别前茬留种和购入种子
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 声明交接点处的合格豆类籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_establishment`
- 来源：
- 数量范围：宽泛的临时筛查估计；应以作物特定播种和产量记录替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.002
  - 上限：0.50
  - 单位：kg 种子/kg 参考产品
  - 基准：每 kg 交接点处干燥清洁豆类籽粒
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 合并肥料和养分投入（`consolidated_crop_nutrients`）

这是本过程唯一的养分卡。通过此卡记录所有施用的矿质肥料、有机肥、含养分接种剂及其他养分供应，并保留各实际产品、用量、配方、养分含量、施用事件和地块。复合产品按产品质量仅计一次，养分组成另行记录。

- 选定流：豆类种植所用合并肥料和养分供应
- 流属性/单位：由各前景供应记录确定的产品特定属性和单位
- 绑定：`parameterized`
- 流集：`flow-set.agricultural-nutrient-supply`
- 流集版本：`0.3.0`
- 数量规则：逐项记录实际产品，同时报告产品数量及养分含量；仅当作物季记录确认未施用此类投入时才记为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 声明交接点处的合格豆类籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_establishment`
- 来源：


- 数量范围：与英文规范一致的临时 QA 筛查范围；须以作物、场址和路线特定记录替换，不得作为允许限值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg as-applied fertilizer and nutrient products/kg reference product
  - 基准：per kg dry cleaned pulse seed; convert volume records only with documented product density
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`)

###### 供应的灌溉水（`supplied_irrigation_water`）

本卡仅用于以产品流形式供应的水，例如购入或外部输送的灌溉水。不得用于农场直接从地表水或地下水源取水；此类取水应作为基本资源投入单独报告，并注明来源位置和有方法支持的流身份。

- 选定流：供应至豆类作物的灌溉水
- 流属性/单位：体积或质量 / 按所选流集交换支持 m3 或 kg
- 绑定：`parameterized`
- 流集：`flow-set.water-use`
- 流集版本：`0.2.0`
- 流集分组：`irrigation-water`
- 数量规则：计量或供应商记录的作物季供水量；对未使用任何供应灌溉水的雨养地块记录为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 声明交接点处的合格豆类籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_establishment`
- 来源：
- 数量范围：供应灌溉水的宽泛临时筛查区间；不适用于雨养生产，也不是水资源分配限值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30
  - 单位：m3/kg 参考产品
  - 基准：每 kg 交接点处干燥清洁豆类籽粒
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 作物生产能源载体（`cultivation_energy`）

记录田间准备、播种、作物养护、抽水及其他纳入的种植作业实际使用的燃料和电力。保留每种载体作为独立的具体前景交换，并保留仪表、燃料、设备和过程归属。由于实际能源载体由农场记录确定，本条件性卡在流集层级参数化。

- 选定流：豆类种植作业使用的能源载体
- 流属性/单位：由前景记录支持的载体特定属性和单位
- 绑定：`parameterized`
- 流集：`flow-set.energy-supply`
- 流集版本：`0.2.0`
- 数量规则：以各载体兼容的计量或供应商单位分别记录；生成交换前不得合并不同载体
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 声明交接点处的合格豆类籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_establishment`
- 来源：


- 数量范围：与英文规范一致的临时 QA 筛查范围；须以作物、场址和路线特定记录替换，不得作为允许限值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：MJ/kg reference product
  - 基准：per kg dry cleaned pulse seed; convert every carrier separately before summing energy
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`)

###### 作物保护和种子处理产品（`crop_protection_products`）

本条件性卡用于实际施用的种子处理剂、接种剂、农药或其他作物保护产品。生成数据时，应对每种有记录的产品建立独立具体交换，并声明有效成分、剂型、用量、目标、施用事件和用途。不得将无记录或未使用的产品作为投入。

- 选定流：作物保护或种子处理产品，实际身份须依据使用记录解析
- 流属性/单位：产品特定属性 / 按具体产品身份使用 kg 或 L
- 数量规则：测量并按产品和有效成分逐项列出地块作物季的施用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 声明交接点处的合格豆类籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_establishment`
- 来源：


- 数量范围：与英文规范一致的临时 QA 筛查范围；须以作物、场址和路线特定记录替换，不得作为允许限值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：kg product/kg reference product
  - 基准：per kg dry cleaned pulse seed; retain each formulation and active ingredient
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`)

##### 废物流

##### 基本流

###### 直接灌溉水资源取用（`direct_water_withdrawal`）

本条件卡仅用于农场直接从地表水或地下水源取用的水。记录水源、位置、许可或计量记录、使用事件和流域；不得包括降水或已作为供应水产品流报告的同一用水。

- 选定流：用于豆类种植的地表水或地下水资源取用；按来源解析具体基本流身份
- 流属性/单位：体积 / m3
- 数量规则：按来源计量作物季直接取水量；无直接取水时记录为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 声明交接点处的合格豆类籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_establishment`
- 来源：
- 数量范围：直接灌溉取水的宽泛临时筛查区间；使用水源和地块作物季记录替换，且不得与同一物理水源的供应水重复相加
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30
  - 单位：m3/kg reference product
  - 基准：每 kg 交接点处干燥清洁豆类籽粒
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 土壤直接排放至空气的氧化亚氮（`field_n2o_to_air`）

仅当适用的作物或国家清单方法量化了田间直接 N2O 时才报告。保留所选方法要求的氮投入、残余物项、边界和报告基准；不得替换为通用豆类因子。

- 选定流：豆类种植的田间氧化亚氮直接排放至空气
- 流属性/单位：Mass / kg
- 数量规则：根据声明的排放方法及其作物季投入记录计算；若所选方法不报告该交换则省略
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 声明交接点处的合格豆类籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集值计算（`calculated_from_collection`）
- 采集协议：`cp_soil_emissions`
- 来源：`fao-pulse-postharvest-2020`


- 数量范围：与英文规范一致的临时 QA 筛查范围；须以作物、场址和路线特定记录替换，不得作为允许限值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.02
  - 单位：kg N2O/kg reference product
  - 基准：per kg dry cleaned pulse seed; use only the declared applicable inventory method
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`)

###### 流失至水体的硝酸盐氮（`nitrate_n_to_water`）

仅当已声明的田间监测或养分流失方法支持时，才报告流失至受纳水体的硝酸盐氮。不得混淆硝酸盐质量与硝酸盐氮质量，并应识别受纳介质、流域和计算方法。

- 选定流：豆类种植流失至水体的硝酸盐氮
- 流属性/单位：Mass / kg
- 数量规则：按指定的田间养分流失方法测量或计算；不得仅从肥料投入量推导
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 声明交接点处的合格豆类籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集值计算（`calculated_from_collection`）
- 采集协议：`cp_soil_emissions`
- 来源：


- 数量范围：与英文规范一致的临时 QA 筛查范围；须以作物、场址和路线特定记录替换，不得作为允许限值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.05
  - 单位：kg N/kg reference product
  - 基准：per kg dry cleaned pulse seed; use only the declared applicable inventory method
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`)

#### 输出

##### 产品流
###### 待收获的成熟豆类作物（`mature_field_crop`）

此交接将作物生产与独立的收获责任相连接。识别成熟作物状态和收集/站立面积；如作物形态需要，区分豆类籽粒、茎秆、豆荚或附带生物质。

- 选定流：待收获的成熟豆类作物，声明物种和作物形态
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：测量可收获作物质量，或按记录方法在收集前进行田间抽样估算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 声明交接点处的合格豆类籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_balance`
- 来源：
- 数量范围：宽泛临时区间；作物形态、成熟时含水率和物种不同，应以实测批次质量替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1.0
  - 上限：8.0
  - 单位：kg 成熟田间作物/kg 参考产品
  - 基准：每 kg 交接点处干燥清洁豆类籽粒
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

### 过程：豆类作物收获与收集（`pulse_harvest`）

#### 输入

##### 产品流

###### 接收待收获的成熟作物（`harvested_crop_input`）

收获过程从田间交接的成熟作物开始。记录与前一田间输出相同的作物身份和物理基准；不得将仍留在田间、未收集的生物质计作合格豆类产品。

- 选定流：待收获的成熟豆类作物，声明物种和作物形态
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：与 `pulse_cultivation` 处实测或有记录的适收作物交接数量一致
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 声明交接点处的合格豆类籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_balance`
- 来源：
- 数量范围：参见对应田间输出的作物形态和质量平衡区间；归一化时不得重复计量
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1.0
  - 上限：8.0
  - 单位：kg 成熟田间作物/kg 参考产品
  - 基准：每 kg 交接点处干燥清洁豆类籽粒
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 收获与收集能源（`harvest_energy`）

记录实际人工辅助或机械收获、田间收集作业使用的燃料或电力。未使用外供载体时记录为零；保留设备及共享服务分配记录。

- 选定流：豆类收获与收集使用的能源载体
- 流属性/单位：由前景记录支持的载体特定属性和单位
- 绑定：`parameterized`
- 流集：`flow-set.energy-supply`
- 流集版本：`0.2.0`
- 数量规则：按兼容的原生单位分别记录各载体，并且仅分配一次共享设备用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 声明交接点处的合格豆类籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_balance`
- 来源：


- 数量范围：与英文规范一致的临时 QA 筛查范围；须以作物、场址和路线特定记录替换，不得作为允许限值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：MJ/kg reference product
  - 基准：per kg harvested crop delivered to the next included node
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`)

#### 输出

##### 产品流
###### 交付脱粒或脱荚过程的收获豆类作物（`harvested_crop_output`）

此输出为从田间收集并交给脱粒或脱荚过程的作物材料。声明其为整株、豆荚或其他作物特定状态，并识别后续节点。

- 选定流：已收获的豆类作物，声明物种和物理形态
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量交付的收获批次；仅在此节点实物去除附带物质时才单独扣除
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 声明交接点处的合格豆类籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_balance`
- 来源：
- 数量范围：宽泛临时作物质量区间；应以物种、收获形态、成熟度和批次记录加以确定
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1.0
  - 上限：8.0
  - 单位：kg 收获豆类作物/kg 参考产品
  - 基准：每 kg 交接点处干燥清洁豆类籽粒
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 其他有意收获产出（`other_intended_harvest_products`）

对每种有意收获或保留并用于已识别用途的附加作物产品，记录其具体产品身份、等级或状态、数量、接收方、去向和交接点。示例并不假定适用于每种物种或路线。应将留在地块的田间残余物与上市产出区分开。

- 选定流：其他有意豆类作物产出；在前景数据集中分别识别每种实际产品
- 流属性/单位：由各已声明产出身份确定的产品特定属性和单位
- 数量规则：根据批次及销售/使用记录记录零个、一个或多个有意产出；最终过程交换不得合并不同产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 声明交接点处的合格豆类籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_balance`
- 来源：


- 数量范围：与英文规范一致的临时 QA 筛查范围；须以作物、场址和路线特定记录替换，不得作为允许限值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg reference product
  - 基准：per kg reference-grade pulse seed; conditional on an actual marketable co-product handoff
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`)

##### 废物流
###### 作为废物弃置的收获材料（`harvest_discarded_material`）

仅用于收获时收集后送至废物去向的材料。报告未收集的田间损失及其实际去向；除非未收集材料被单独移除或作为废物处理，否则不得将其列为废物流交换。

- 选定流：收获后弃置的豆类作物材料；数据生成时识别实际废物身份及去向
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分别称量弃置材料，并记录其是返工、回收、降级还是处置
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 声明交接点处的合格豆类籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_balance`
- 来源：


- 数量范围：与英文规范一致的临时 QA 筛查范围；须以作物、场址和路线特定记录替换，不得作为允许限值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg reference product
  - 基准：per kg reference-grade pulse seed; include only material actually discarded
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`)

##### 基本流

### 过程：脱粒或脱荚（`pulse_threshing`）

#### 输入

##### 产品流
###### 待脱粒或脱荚的收获豆类作物（`threshing_crop_input`）

接收来自 `pulse_harvest` 的已记录收获作物状态。记录豆荚/植株形态和来料质量，以便核对回收豆粒、有意副产品及拒收物。

- 选定流：已收获的豆类作物，声明物种和物理形态
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：测量被脱粒或脱荚作业接收的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 声明交接点处的合格豆类籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_threshing_conditioning`
- 来源：
- 数量范围：在物种特定批次记录取代该区间前，使用对应收获产出上的临时作物质量区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1.0
  - 上限：8.0
  - 单位：kg 收获豆类作物/kg 参考产品
  - 基准：每 kg 交接点处干燥清洁豆类籽粒
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 脱粒和脱荚能源（`threshing_energy`）

按实际情况记录人工、畜力或机械分离使用的载体量。清理或干燥过程不得重复计算相同机器的能耗；按实测运行时间或处理量分配共享设备。

- 选定流：豆类脱粒或脱荚所用能源载体
- 流属性/单位：由前景记录支持的载体特定属性和单位
- 绑定：`parameterized`
- 流集：`flow-set.energy-supply`
- 流集版本：`0.2.0`
- 数量规则：按作业分别记录每种外供载体；未有载体跨越前景边界时记录为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 声明交接点处的合格豆类籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_threshing_conditioning`
- 来源：


- 数量范围：与英文规范一致的临时 QA 筛查范围；须以作物、场址和路线特定记录替换，不得作为允许限值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：MJ/kg reference product
  - 基准：per kg threshed pulse seed output
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`)

#### 输出

##### 产品流
###### 供初级调理使用的脱粒豆类籽粒及已分离豆荚/豆壳材料（`threshed_pulse_seed`）

此输出为供初级干燥/清理使用的分离豆类籽粒。声明籽粒状态及残余杂质。如脱粒另外产生有意产品，在下方单独记录。

- 选定流：初级调理前脱粒或脱荚的豆类籽粒
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：在初级干燥、清理或分级前称量籽粒产出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 声明交接点处的合格豆类籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_threshing_conditioning`
- 来源：
- 数量范围：脱粒前处理阶段的宽泛临时质量区间；以作物和过程特定的质量平衡数据替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1.0
  - 上限：3.0
  - 单位：kg 脱粒豆类籽粒/kg 参考产品
  - 基准：每 kg 交接点处干燥清洁豆类籽粒
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 其他有意脱粒产出（`other_intended_threshing_products`）

为每种有明确接收方或用途的分离产品记录身份、质量、数量和交接点。只有实际去向为产品用途时，豆荚、豆壳或其他生物质才计作有意产品；否则依据其记录去向分类为残余物或废物。

- 选定流：豆类脱粒或脱荚产生的其他有意产品；逐项识别实际产品
- 流属性/单位：由各已声明产出身份确定的产品特定属性和单位
- 数量规则：分别列出每种有意产出，并将其与籽粒及残余产出的质量进行核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 声明交接点处的合格豆类籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_threshing_conditioning`
- 来源：


- 数量范围：与英文规范一致的临时 QA 筛查范围；须以作物、场址和路线特定记录替换，不得作为允许限值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg reference product
  - 基准：per kg reference-grade pulse seed; conditional on an actual marketable handoff
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`)

##### 废物流
###### 脱粒或脱荚时送至废物去向的拒收物（`threshing_rejects`）

仅当破碎、受损、受污染或其他不合格材料被弃置或送往废物处理时才记录。已销售、饲用、回收或返工的材料按其实际产出路线报告，不得列为废物。

- 选定流：脱粒或脱荚拒收物，实际废物身份及去向待解析
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：在节点处称量废物并记录其路线；不得将其计入合格豆类籽粒
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 声明交接点处的合格豆类籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_threshing_conditioning`
- 来源：
- 数量范围：弃置材料的宽泛临时 QA 区间；不是产量、损失目标或允许废物限值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg 弃置脱粒材料/kg 收获作物投入
  - 基准：每 kg 脱粒或脱荚接收作物材料
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 基本流

### 过程：初级干燥与清理（`pulse_conditioning`）

#### 输入

##### 产品流

###### 初级调理前的脱粒豆类籽粒（`conditioning_seed_input`）

接收脱粒或脱荚过程的籽粒产出。记录调理前质量和含水率，并识别会影响干燥和清理的独立污染或先前处理状态。

- 选定流：初级调理前脱粒或脱荚的豆类籽粒
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：测量进入调理批次的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 声明交接点处的合格豆类籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_threshing_conditioning`
- 来源：
- 数量范围：在取得批次调理质量平衡前，使用对应脱粒产出的区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1.0
  - 上限：3.0
  - 单位：kg 脱粒豆类籽粒/kg 参考产品
  - 基准：每 kg 交接点处干燥清洁豆类籽粒
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 干燥和清理能源（`conditioning_energy`）

记录主动干燥、输送、抽风和机械清理使用的载体，包括设备运行时间和批次处理量。若仅采用日晒且未使用外供载体，则记录载体投入为零，并在批次协议中保留干燥时长和天气数据。

- 选定流：豆类干燥和清理使用的能源载体
- 流属性/单位：由前景记录支持的载体特定属性和单位
- 绑定：`parameterized`
- 流集：`flow-set.energy-supply`
- 流集版本：`0.2.0`
- 数量规则：按主动作业和批次分别记录每种载体；不得将同一干燥机能耗分配给两个作物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 声明交接点处的合格豆类籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_threshing_conditioning`
- 来源：


- 数量范围：与英文规范一致的临时 QA 筛查范围；须以作物、场址和路线特定记录替换，不得作为允许限值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：MJ/kg reference product
  - 基准：per kg dried and cleaned pulse seed output
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`)

#### 输出

##### 产品流
###### 分级前的干燥清理豆类籽粒（`conditioned_pulse_seed`）

记录必要干燥和清理后的预备豆类籽粒，位于任何独立等级分离之前。按声明基准测量含水率，并在批次协议中记录准确交接点；若无分级节点，则记录其与农场交接点的关系。

- 选定流：干燥清理后的豆类籽粒，分级前
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量调理后的籽粒，并记录含水率、等级状态及下一交接点
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 声明交接点处的合格豆类籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_threshing_conditioning`
- 来源：`fao-pulse-postharvest-2020`; `fao-onfarm-grain-manual-2009`
- 数量范围：分拣前的临时质量平衡区间；最终数量依据实测批次质量平衡
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1.0
  - 上限：2.0
  - 单位：kg 干燥清理后的籽粒/kg 参考产品
  - 基准：每 kg 交接点处干燥清洁豆类籽粒
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 废物流

###### 送至废物去向的清理拒收物和脱落物（`conditioning_rejects`）

仅用于从该作业中移除并送至废物去向的杂质、受损籽粒、粉尘或其他材料。将实际销售、饲用、返还土壤或返工的材料分别识别。

- 选定流：送至废物去向的豆类清理拒收物和脱落物；数据生成时识别实际废物交换
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分别称量各废物组分并记录组成和去向；不得将可销售材料分类为废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 声明交接点处的合格豆类籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_threshing_conditioning`
- 来源：`fao-pulse-postharvest-2020`; `fao-onfarm-grain-manual-2009`
- 数量范围：实际移除并弃置材料的宽泛临时 QA 区间；不是强制限值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg 弃置清理材料/kg 脱粒籽粒投入
  - 基准：每 kg 进入初级调理的豆类籽粒
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 基本流

### 过程：分级与筛选（`pulse_grading`）

#### 输入

##### 产品流

###### 用于分级的调理后豆类籽粒（`grading_seed_input`）

接收已准备好的豆类籽粒，并记录其来料等级状态、质量、含水率和来源批次。仅当筛选出两个或更多已声明等级或去向时纳入此过程。

- 选定流：干燥清理后的豆类籽粒，分级前
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：与分拣作业接收的调理后籽粒批次一致
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 声明交接点处的合格豆类籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading_balance`
- 来源：
- 数量范围：在取得该等级批次平衡记录前，使用对应调理产出的区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1.0
  - 上限：2.0
  - 单位：kg 调理后籽粒/kg 参考产品
  - 基准：每 kg 交接点处干燥清洁豆类籽粒
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 分级和筛选能源（`grading_energy`）

记录用于等级分离的筛分、分选机、输送和抽风作业的载体用量。若分级与初级调理合并且无独立节点，则将能耗计入初级调理，并且不得在此重复列示。

- 选定流：豆类分级和筛选使用的能源载体
- 流属性/单位：由前景记录支持的载体特定属性和单位
- 绑定：`parameterized`
- 流集：`flow-set.energy-supply`
- 流集版本：`0.2.0`
- 数量规则：将实测载体用量分配给分级批次；未使用外供载体时记录为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 声明交接点处的合格豆类籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading_balance`
- 来源：


- 数量范围：与英文规范一致的临时 QA 筛查范围；须以作物、场址和路线特定记录替换，不得作为允许限值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：MJ/kg reference product
  - 基准：per kg declared reference-grade pulse seed
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`)

#### 输出

##### 产品流
###### 已声明的参考等级豆类籽粒（`reference_pulse_seed_output`）

记录被选作本数据集参考产品的等级。声明其质量阈值或买方规格、交接点和净质量。其他有意等级作为独立产品产出，分别记录其去向和数量。

- 选定流：其他豆类；声明物种和参考等级的干燥清洁籽粒
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：将声明的参考等级净产出归一化为恰好 1,000 kg；在来源数据集中保留未缩放批次实测量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：声明交接点处恰好 1,000 kg
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集值计算（`calculated_from_collection`）
- 采集协议：`cp_grading_balance`
- 来源：


- 数量范围：与英文规范一致的临时 QA 筛查范围；须以作物、场址和路线特定记录替换，不得作为允许限值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg reference product
  - 基准：exact normalized reference output; retain the unscaled measured batch mass
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`)

###### 其他有意豆类等级或产品（`other_intended_grade_outputs`）

列出每种额外的可销售等级或有意生产的豆类相关产品，并记录其品质、数量、接收方、去向和独立交接点。指定参考等级，并在分配决策中报告所有其他有意产品；不得将其合并进参考流。

- 选定流：其他有意豆类产出；分别识别各具体等级或产品
- 流属性/单位：由各已声明产出身份确定的产品特定属性和单位
- 数量规则：按分拣批次测量各产品和等级质量；无其他有意产品时记录为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考等级豆类籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading_balance`
- 来源：


- 数量范围：与英文规范一致的临时 QA 筛查范围；须以作物、场址和路线特定记录替换，不得作为允许限值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kg/kg reference product
  - 基准：per kg reference-grade pulse seed; conditional on actual other grades or products
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`)

##### 废物流
###### 从批次中弃置的分级拒收物（`grading_rejects`）

将每项不合等级的产出分类为降级/销售、返工、回收或弃置。仅将实际送至废物去向的部分计入本废物流，并将任何返工连接到其产生的分级节点。

- 选定流：送至废物去向的分级拒收物；根据批次记录解析废物身份和去向
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：测量弃置部分并记录废物去向；不得将其计入合格参考产出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考等级豆类籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading_balance`
- 来源：
- 数量范围：实际拒收并弃置材料的宽泛临时 QA 区间；不是产品合格限值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg 弃置等级拒收物/kg 调理后籽粒投入
  - 基准：每 kg 接收分级的调理后豆类籽粒
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 基本流

### 过程：农场储存（`pulse_storage`）

仅当参考交接点位于储存期之后时纳入本过程。来料已经干燥、清理和分级。记录储存进入和退出状态、设施和容器、持续时间、能源、处理剂、监测及损失。安全储存条件取决于作物和实际条件；应以适用的当地标准和实际豆类规格为准。

#### 输入

##### 产品流

###### 进入储存的干燥分级豆类籽粒（`stored_pulse_seed_input`）

记录储存开始时的批次质量、等级、含水率及其基准。该产品身份与参考流相同，但处于储存进入交接点。

- 选定流：其他豆类；声明物种和等级的干燥清洁籽粒
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量进入储存的批次，并链接至分级产出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 声明储存后交接点处的合格豆类籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_balance`
- 来源：


- 数量范围：与英文规范一致的临时 QA 筛查范围；须以作物、场址和路线特定记录替换，不得作为允许限值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.5
  - 上限：2
  - 单位：kg/kg reference product
  - 基准：per kg accepted post-storage reference output on a consistent moisture basis
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`)

###### 储存和搬运能源（`storage_energy`）

记录通风、干燥、输送或其他受控储存作业使用的外供能源。被动储存未使用外供能源时，不添加产品流卡；采集协议仍需记录储存期和状态监测。

- 选定流：豆类储存和储存搬运使用的能源载体
- 流属性/单位：由前景记录支持的载体特定属性和单位
- 绑定：`parameterized`
- 流集：`flow-set.energy-supply`
- 流集版本：`0.2.0`
- 数量规则：按储存期测量各实际载体，并仅分配一次共享设施能耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 声明储存后交接点处的合格豆类籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_balance`
- 来源：


- 数量范围：与英文规范一致的临时 QA 筛查范围；须以作物、场址和路线特定记录替换，不得作为允许限值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：MJ/kg reference product
  - 基准：per kg accepted post-storage reference output for the included storage period
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`)

###### 储存保护产品（`storage_protection_products`）

记录实际用于豆类批次或储存设施的农药、杀虫剂、熏蒸剂或其他保护产品。报告产品、有效成分、使用位置、剂量和安全或残留状态。不得假定一定会进行化学处理；未使用时记录为零。

- 选定流：储存保护产品，实际身份须依据使用记录解析
- 流属性/单位：产品特定属性 / 按具体产品身份使用 kg 或 L
- 数量规则：测量纳入储存期内使用的产品，并依据服务记录分配共享设施处理剂用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 声明储存后交接点处的合格豆类籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_balance`
- 来源：`fao-pulse-postharvest-2020`; `fao-onfarm-grain-manual-2009`


- 数量范围：与英文规范一致的临时 QA 筛查范围；须以作物、场址和路线特定记录替换，不得作为允许限值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.05
  - 单位：kg product/kg reference product
  - 基准：per kg accepted post-storage reference output; conditional on actual treatment
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`)

#### 输出

##### 产品流
###### 储存后的干燥分级豆类籽粒（`stored_pulse_seed_output`）

仅当纳入储存时，本项为声明的参考交接产品。记录出口净质量、等级和含水率，并将合格产品归一化为 1,000 kg；不得将储存损失缩放进合格产出。

- 选定流：其他豆类；声明物种和等级的干燥清洁籽粒
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：将储存后合格产出归一化为 1,000 kg，并分别保留实测进出质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：声明储存后交接点处恰好 1,000 kg
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集值计算（`calculated_from_collection`）
- 采集协议：`cp_storage_balance`
- 来源：`fao-pulse-postharvest-2020`; `fao-onfarm-grain-manual-2009`


- 数量范围：与英文规范一致的临时 QA 筛查范围；须以作物、场址和路线特定记录替换，不得作为允许限值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg reference product
  - 基准：exact normalized post-storage reference output; retain measured entry and exit masses
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`)

##### 废物流
###### 储存期间损失或弃置的豆类籽粒（`storage_losses`）

报告纳入储存期间因变质、虫害、污染或拒收而实测损失的质量。区分回收、降级、饲用或弃置材料，并识别其实际去向。

- 选定流：储存期间弃置的豆类籽粒；根据记录解析实际废物身份和去向
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：在含水率基准一致时核对储存进出质量；分别测量回收和降级材料
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 声明储存后交接点处的合格豆类籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集值计算（`calculated_from_collection`）
- 采集协议：`cp_storage_balance`
- 来源：`fao-pulse-postharvest-2020`; `fao-onfarm-grain-manual-2009`
- 数量范围：弃置储存损失的宽泛临时筛查估计，不是储存绩效限值；应另行核对含水率变化和回收路线
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.3
  - 单位：kg 弃置豆类籽粒/kg 储存进入质量
  - 基准：每 kg 进入纳入储存期的干豆类籽粒
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 基本流

## 7. 分配与共产品处理

| rule_id | Applies to | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_separate_processes` | 种植、收获、脱粒、调理、分级和储存 | 先拆分可独立测量的过程并将作业专属投入直接归属，然后再分配任何剩余共享负荷。 |  |
| `allocation_all_outputs` | 存在多个有意产出的节点 | 列出每个有意产品及其独立交接点、等级、状态、数量、去向和用途。区分可销售产品、残余物、附带材料和废物。 | `fao-pulse-postharvest-2020`; `fao-onfarm-grain-manual-2009` |
| `allocation_method_choice` | 有意共产品的共享负荷 | 当两个或更多有意产品共用且无法拆分过程负荷时，声明并论证一种兼容 PCR 的物理、经济或其他适用分配方法，并注明选用的标准或研究方法。记录分配因子、参考周期、投入测量和来源。本 PCR 不强加普适默认因子。 |  |
| `allocation_rejects` | 拒收、降级材料和残余物 | 将弃置废物排除在合格产品数量之外。返工或回收材料按链接过程路线处理；仅当实际去向和交接已记录时，降级或饲用材料才算有意产出。 | `fao-pulse-postharvest-2020` |
| `allocation_shared_assets` | 多地块、批次或周期共用设备或储存设施 | 识别共用资产/服务、所有使用节点和周期，以及分配其能源与服务负荷所用的实测驱动量。报告边界内每项共享载体或服务仅计一次。 |  |

同一分级批次销售多个等级时，报告所有等级为有意产出并指定参考等级。不得将清理拒收物、变质籽粒、豆荚或其他弃置材料视为共产品。若残余物实际出售或有意用作饲料，则将其身份、品质、数量和去向作为单独有意产出，并明确解决归属方法。若只有一种有意产品且无其他产品交接，则不进行共产品分配。

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_crop_establishment` | `pulse_cultivation` | 播种种子、养分、灌溉、种植能源和作物保护 | 田间及投入记录 | 作物物种、品种、种子批次、地块编号和面积、播种日期、种子来源/处理/数量、每种养分产品/配方/组成/施用、供水来源和计量、载体/产品用量、作业日期 | 收集田间日志、种子标签、发票、肥料分析、水表和燃料/电力记录；按作业识别各项投入 | kg、kg 养分、m3、L、kWh、ha | 每个作物季；每项施用或作业 | 完整代表性作物季、批次或纳入的储存期 | 一个已识别地块作物季及其共用设备 | 按地块作物季汇总各项实际投入；保留产品和养分身份；分配后除以合格参考产出 | 有日期的田间日志、经校准的仪表或发票、产品标签/组成、面积记录和来源数据集引用 |
| `cp_soil_emissions` | `pulse_cultivation` | 量化时的直接 N2O 和流失至水体的硝酸盐氮 | 监测或模型计算的环境产出 | 排放方法/版本、作物和地块、土壤/气候输入、养分形态/施用率/时机、残余物项、需要时的灌溉/降水项、受纳介质、不确定性 | 使用一种已声明且适用于作物和区域的清单或监测方法；保留源数据和计算记录；不得从本 PCR 推断因子 | kg 物质或 N、kg 产品 | 每个作物季和每个受纳介质 | 完整代表性作物季、批次或纳入的储存期 | 一个地块作物季；披露空间代表性 | 按选定方法计算，并在关联同一地块作物季的所有方法输入后再归一化 | 方法来源和版本、田间投入记录、计算表或监测报告、受纳介质/来源记录 |
| `cp_harvest_balance` | `pulse_harvest` | 成熟田间作物、收获作物、其他有意产出和弃置材料 | 收获与田间损失记录 | 地块面积、作物阶段/日期、收获形态、称量或估算作物质量、收集面积、未收集损失估算、损坏、共产品、去向和接收方 | 称量代表性批次或采用有记录的校准田间样本；保留抽样方法、衡器和含水状态 | kg、ha、% 含水率 | 每批收获及地块作物季 | 完整代表性作物季、批次或纳入的储存期 | 一种物种/品种、地块和收获期 | 将田间产出链接至收获投入；单独识别未收集田间损失；最终调理后再归一化 | 衡器检查、抽样记录、批次单、田间记录、去向凭证或销售记录 |
| `cp_threshing_conditioning` | `pulse_threshing`, `pulse_conditioning` | 来料和调理后籽粒、能源、有意产出、拒收物及含水率 | 过程批次记录 | 批次编号、作物形态、投入/产出质量、干燥前后含水率及基准、设备、作业时间、各载体、干燥方法和天气、清理/拒收比例、去向 | 记录称重单或经校准的批次秤、含水率仪读数、设备日志及拒收物处置；保留过程阶段区分 | kg、% 湿基或干基、h、各载体的 kg/L/kWh/m3 | 每次脱粒及调理批次 | 完整代表性作物季、批次或纳入的储存期 | 已识别批次、地块/活动及共用设备 | 核对投入干物质、合格籽粒、共产品、拒收物和实测损失；避免在不同阶段重复计算能源 | 衡器及含水率仪校准、批次单、设备仪表/发票、代表性样本和去向记录 |
| `cp_grading_balance` | `pulse_grading` | 分级投入、参考等级、其他有意等级和拒收物 | 分级与销售/使用记录 | 来料批次、声明等级标准/买方条件、各等级产出质量、含水率、降级/返工/拒收状态、去向、接收方 | 称量每个等级组分；按声明的商品条件采样和测试各等级；将每项产出连接至一个交接点 | kg、% 含水率 | 每个分拣批次和销售批次 | 完整代表性作物季、批次或纳入的储存期 | 一个作物批次和分拣活动 | 用各等级产出和拒收物核对调理后投入；指定哪一等级为参考产品 | 校准衡器、等级检测记录、买方规格、销售/转移收据、质量平衡表 |
| `cp_storage_balance` | `pulse_storage` | 储存产品、储存能源和保护产品、损失及出口品质 | 储存进出及设施记录 | 批次编号、储存设施/容器、进出日期、质量、含水率及基准、有条件时的温度/湿度、处理剂、载体、共享设施使用者、降级/回收/弃置数量 | 进出时称重并取样；保留设施日志、处理记录、发票、监测和损失去向 | kg、% 含水率、天、载体特定单位 | 每个纳入的储存批次及监测周期 | 完整代表性作物季、批次或纳入的储存期 | 声明的设施、容器和储存期 | 在一致含水率基准下比较进出干物质；共享设施能源和处理剂仅分配一次 | 校准衡器和仪表、含水率读数、处理剂标签/日志、检查记录、处置或接收方凭证 |

### 计算规则

| rule_id | Applies to | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_flow` | 作物季及所有纳入过程 | 必要时先分配共享负荷；将每项归属批次数量乘以 `1,000 kg / 声明交接点处合格参考等级产出质量`。保留未缩放批次记录和分配因子。 | 地块作物季投入或产出记录；合格参考等级质量；分配因子 | 每 1,000 kg 参考流的数量 | `mass-balance-identity` |
| `moisture_adjusted_mass_balance` | 干燥、分级和纳入的储存 | 对湿基含水率分数 `m`，按 `净质量 × (1 − m)` 计算干物质。在一致干物质基准下比较进出量；仅依据实测含水率和明确计算换算为声明交接点含水率。 | 净质量、实测含水率分数、进出节点 | 干物质平衡及参考状态下质量 | `mass-balance-identity` |
| `crop_emission_method` | 直接和间接田间排放 | 对所需的地块作物季投入应用已声明的认可作物/区域排放方法及版本。报告排放物质、受纳介质、计算投入、因子和不确定性。不得应用未选定的通用因子。 | 方法要求的肥料、残余物、水、气候、土壤和管理记录 | 有方法支持的基本流 |  |
| `shared_asset_attribution` | 多地块/批次共用的机械、泵、干燥机、分级机或储存 | 使用有记录的作业时间、处理量或其他声明的物理驱动量，将计量载体或服务分配给过程；各分配量之和应回归共享仪表总量。 | 共享仪表/服务总量；所有使用节点；时间或处理量记录 | 单次计量并分配到过程的数量 | `mass-balance-identity` |

### 数据质量要求

| requirement_id | Applies to | 要求 | 证据 |
| --- | --- | --- | --- |
| `identity_one_crop` | 产品及地块作物季身份 | 每个数据集报告一种豆类物种/作物类型、品种或种子批次、地块、面积、作物年度、地理范围、收获形态、等级和交接点。 | 种子批次记录、地块登记、等级及批次记录 |
| `identity_reference_gate` | 参考产品品质 | 记录实测净质量、含水率数值及基准、取样方法、等级或买方规格，以及是否纳入储存。 | 校准衡器、含水率测量、等级测试和交接收据 |
| `input_records` | 种子和管理投入 | 识别实际播种种子、具有养分组成的肥料及改良产品、作物保护产品/有效成分、灌溉来源和供应载体。有记录支持时方可记零。 | 投入日志、产品标签、发票、计量记录和田间作业日志 |
| `emission_method_quality` | 量化的作物排放 | 标明方法、版本、地理及作物适用性、所需投入记录、受纳介质和不确定性；区分实测与模型估算值。 | 认可方法、保留的投入记录和可复现的计算表 |
| `postharvest_balance` | 收获、脱粒、调理、分级和储存 | 将每批投入关联至主产品、所有有意产出、降级/返工材料、拒收物、废物、含水率变化和实测损失，并避免重复计量。 | 批次重量、抽样、含水率记录和去向证据 |
| `shared_equipment_quality` | 共用田间、收获或采后资产 | 识别所有使用过程及周期，证明分配的共享能源或服务与仪表或服务商总量核对一致。 | 资产表、时间/处理量日志及仪表/发票核对 |
| `technology_evidence` | 路线和技术选择 | 依据拓扑、投入类别、计算、数据要求或校验的变化描述每项路线变体。若不同方法在同一批次依次发生，不得创建互斥标签。 | 有日期的作业记录和设备/过程说明 |

## 9. 校验规则

| rule_id | Applies to | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_single_product_identity` | 数据集参考产品 | 确认一种物种/作物类型、品种或种子批次、等级、作物年度和生产地理范围；未经单独记录，不得合并不同 CPC 子类豆类或不同产出身份。 | `unsd-cpc21-01709` |
| `validate_gate_qualifiers` | 参考流 | 必须声明农场或初级调理交接点、净质量、含水率数值及基准、等级，以及纳入时的储存状态/持续时间。 | `fao-pulse-postharvest-2020`; `fao-onfarm-grain-manual-2009` |
| `validate_nutrient_cardinality` | `pulse_cultivation` 产品投入 | 每个过程最多允许一张合并的 `flow-set.agricultural-nutrient-supply` v0.3.0 卡。该流集仅允许 set 级绑定：不得带 group。此卡覆盖全部肥料和含养分改良产品记录。 |  |
| `validate_water_source` | 作物用水投入 | 仅当灌溉水以供应产品形式输入时使用 `water-use` 的 `irrigation-water` group。农场直接地表或地下取水应作为单独识别的基本资源流记录，不得列为供应水产品。 |  |
| `validate_emission_basis` | 作物基本流排放 | 仅当物质、受纳介质、方法/版本和所需田间记录均明确时接受排放值。硝酸盐氮与硝酸盐质量应区分；UUID 未解析时不得替换成另一物种或介质。 |  |
| `validate_route_and_handoff` | 过程图和过程清单 | 确认生产、收获、脱粒、调理、分选和纳入储存的交接按顺序连接。按要求变化描述实际替代路线，并识别所报告批次的并存或互斥关系。 | `fao-pulse-postharvest-2020`; `fao-postharvest-system-1994` |
| `validate_outputs_and_rejects` | 多产出或拒收节点 | 列出有意产品及其独立交接点；将各项不合格材料分类为降级、返工、回收或弃置；合格参考产出不得含拒收物和损失。 | `fao-pulse-postharvest-2020` |
| `validate_storage_condition` | 纳入的农场储存 | 检查实测进出质量和一致基准下的含水率、声明储存期及保护路线。引用的热带/亚热带含水率指导仅为情境性 QA 参考，不是普遍允许区间。 | `fao-pulse-postharvest-2020`; `fao-onfarm-grain-manual-2009` |
| `validate_shared_burden` | 共用机械、泵、干燥机、分级机和储存 | 识别各使用节点及周期，将所分配服务/能源与共享仪表或服务商总量核对，并禁止重复负荷。 |  |
| `validate_provisional_ranges` | 所有临时数量范围 | 将推理估计范围视为可替代的 QA 筛查值，绝不可作为作物特定生产要求或允许限值。在声称方法已审查前，须由有来源支撑或经审阅的前景证据替代。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一种已声明干豆类产品身份及等级的作物季一级前景数据集 |
| downstream_use | `secondary_dataset`; 如提供经过验证且完整的过程数据集，也可用作 `background_dataset` |
| allowed_use | 对声明农场或初级调理交接点和产品状态的干豆类籽粒进行 LCI 建模 |
| excluded_use | 新鲜青豆类；其他已具体分类豆类产品；播种用种子产品；加工食品；未区分物种或等级的混合产品；配送及下游加工 |
| required_metadata | 物种/作物类型；品种或种子批次；地块位置和面积；作物年度；用水制度；参考交接点；等级；净质量；含水率数值及基准；路线和技术选择；纳入的储存期；分配方法；来源数据集及排放方法/版本 |
| required_quality_disclosure | 时间和地理代表性；田间及收获覆盖率；投入记录完整性；实测与模型化排放的区分；质量平衡完整性；未解析流身份；临时范围；共享资产分配和任何缺失背景数据 |
| update_trigger | CPC 范围变化；新作物或产品边界证据；适用作物或储存标准变化；生产、收获、调理或储存路线实质变化；已验证的流身份或单位组解析；有来源支持的范围或排放方法更新 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `unsd-cpc21-01709` | `official_guidance` | https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1074/01709 | CPC 2.1 层级、干豆科蔬菜组，以及 01709 类别的 CPC/HS 对应关系 |
| `fao-pulse-postharvest-2020` | `official_guidance` | https://www.fao.org/platform-food-loss-waste/resources/news/news-detail/COVID-19-Series-Improving-the-Storability-and-Availability-of-Pulses-by-Reducing-Post-Harvest-Losses/en | 豆类成熟期收获、田间暴露、干燥和搬运、安全储存含水率及替代干燥/储存实践 |
| `fao-onfarm-grain-manual-2009` | `handbook` | https://www.fao.org/4/i0959e/i0959e00.pdf | 包含豆类的谷物采后作业；热带/亚热带储存含水率指导；清理、干燥和储存监测实践 |
| `fao-postharvest-system-1994` | `official_guidance` | https://www.fao.org/4/ac301e/AC301e03.htm | 采后过程阶段、干燥和脱粒顺序，以及时机和含水率对损失的影响 |
