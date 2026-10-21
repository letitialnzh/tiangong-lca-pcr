---
pcr_id: pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-ornamental-fish
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
---

# 养殖观赏鱼

## 1. 范围与适用性

本 PCR 适用于通过人工管理的繁殖、苗种培育或育成而供观赏销售的活鳍鱼，涵盖淡水、半咸水和海水养殖，终点为实际农场发运交付。排除仅暂养或驯化的野生鱼、食用鱼、用于其他用途的饵料或放养苗种、非鱼观赏动物、水生植物和保存标本。购入苗种不能消除上游生产负担。农场可自繁、购入苗种或按可追踪批次组合这些来源；不得把野生暂养鱼混入养殖产出。

示例路线为池塘培育的淡水卵胎生观赏鱼。收获、操作和等级须依据物种与买方验收要求；示例不规定通用饲养周期、死亡率、饲料转化率或药物剂量。质量清单用于环境核算，不代表不同物种或等级提供等效的水族展示服务。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-ornamental-fish |
| classification_refs | CPC 3.0 04112 — 养殖观赏鱼 |
| covered_products | 水产养殖生产并在农场发运交付的、供观赏销售的淡水及其他活鳍鱼 |
| excluded_products | 野生暂养鱼；食用、饵料或非观赏放养产品；水生植物及非鱼观赏生物；保存鱼类 |
| representative_product | 已声明物种和销售等级的池塘培育淡水卵胎生观赏活鱼 |
| production_route | managed_rearing 为生物生产父活动；池塘、流水水槽和 RAS 实现依据真实批次及水路记录选择；farm_harvest、live_conditioning、farm_dispatch 完成路线 |
| market_state | 实际农场发运门处未经加工、验收用于观赏销售的活鱼 |

生物替代生产模块的父活动为 managed_rearing：场内繁殖须增加留养亲鱼、产卵/苗种活动和跨期归属；购入苗种须有供应商繁殖/苗种数据集及入场记录。两者可在独立可追踪批次中并存。替代技术模块的父活动也为 managed_rearing：池塘须记录实际取水、排水、底泥清除及部分/全塘收获；流水水槽须记录真实进出水量及水槽清洗；RAS 须补充回水、生物过滤及固体清除水路，以及泵、曝气、可能的加热和处理启动。须披露天然池塘饵料与外购或场内活饵的区别。同一物理水路的同一时段不得同时按一次通过和完全循环核算；混合或阶段性系统须有独立水路/阶段记录，不得相加默认负担。FA099 支持这些定性区别，实际布局、计量、维护和水质记录证明具体差异。

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| what | 在实际农场发运交付处验收的养殖观赏活鱼净生物质量 |
| how_much | 1 kg |
| how_well | 声明物种、体型/性别/颜色等级、健康/存活验收要求及未经加工的活体状态；不主张跨物种服务等效 |
| how_long_or_cycle | 报告期内的繁殖、苗种和育成阶段日期、收获事件、暂养区间及发运批次；留养鱼与亲鱼连接相邻期间 |
| reference_flow_link | `farmed_ornamental_dispatch` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 养殖观赏鱼 `142f4fa7-d47c-4fe0-8d15-751758c17a9c` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 物种；养殖来源及苗种/亲鱼供应商；淡水/半咸水/海水与盐度；繁殖/苗种/育成阶段；池塘/水槽/RAS 水路；批次或连续生产模式；场址与地理位置；报告日期；收获方式及事件；体型/性别/颜色等级；活鱼尾数与净生物质量；存活率及死亡；暂养区间；实际农场发运门 |

每项限定信息均须载于数据集元数据或可追踪的批次/过程说明。鱼参考质量不含运输介质水、氧气、袋、箱及设备。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 发运时采用经校准、符合活体操作要求的扣除容器皮重/排除游离水批次称重；排除水和包装，cp_stock_managed_rearing; cp_stock_farm_harvest; cp_stock_live_conditioning; cp_stock_farm_dispatch 留存方法与不确定性。 |
| `count_conversion` | seed_stock; broodstock; market_ready_stock; harvest_stock; harvested_live_lot; conditioning_stock; graded_live_stock; conditioning_returns; other_live_sales; packing_stock; farmed_ornamental_dispatch | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 保留尾数和等级辅助记录；尾数转质量须依据同物种/阶段/等级的代表性实测批次，记录抽样、平均净质量及不确定性。不得采用通用单尾重量或以纯尾数替代 kg。 |
| `energy_conversion` | 所有电力行 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | kWh | 保留计量 kWh 及能量支持身份；下游若采用 MJ，仅应用一次 3.6 MJ/kWh。燃料质量转能量前须具备真实热值证据。 |
| `material_basis` | rearing_feed; harvest_bait; conditioning_feed; rearing_treatments; conditioning_treatments; packing_additives | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 饲料分别记录收到态与干物质；药物/添加剂分别记录配方产品与活性成分质量及组成，不能用营养/活性质量代替外购产品质量。 |
| `water_basis` | 所有用水行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按来源计量或称量外部水；体积记录转 kg 须声明密度/温度与盐度。内部循环及复用池水为转移记录，不得重复作为新水供应。 |
| `stock_basis` | 所有鱼类行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按阶段区分期初/期末鱼存量、留养亲鱼、实测生长、收获转出、退回幼鱼、死亡、逃逸与销售。生长不是外购鱼投入；内部转移数量须实测，不得固定成最终参考质量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已记录的外购亲鱼/苗种或场内繁殖/苗种，包含期初存量及其结转生产负担 |
| starting_condition_role | 明确连接供应商或前期的人工管理生物生产初始条件 |
| product_classification_scope | 养殖观赏活鳍鱼，至实际农场发运交付 |
| recursive_input_rule | 同类别购入鱼须按真实阶段和供应商门作为投入，连接上游繁殖/苗种生产一次；缺失供应商负担须作为缺口披露 |
| upstream_dataset_requirement | 苗种/亲鱼、饲料/活饵、能源、供水、实际材料和资本/替换物须有供应商原始活动或兼容上游数据；场内饵料生产须包含自身材料/能源 |
| disclosure | 声明农场拓扑、物种/阶段、鱼来源、报告与结转期间、收获事件、共享水路/资产、处理、产出用途及所有数据/身份缺口 |

### 边界规则

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_managed` | managed_rearing | 纳入场内繁殖/苗种、留养亲鱼、育成、投饵、供水、泵/曝气/生物过滤/加热运行、清洗、隔离、实际处理、死亡及移除固体。区分供水与环境直接取水。 | uf-ifas-ras-fa099 |
| `boundary_harvest` | farm_harvest | 收获从池塘/水槽生产环境移出实测待售鱼；纳入实际笼具/围网/诱饵、降水位、容器及运至暂养处的场内运输，记录运输用水/氧气/能源及损失。该责任独立于生物生长和收获后稳定化。 | uf-ifas-harvest-fa117; uf-ifas-onfarm-transport-fa119 |
| `boundary_conditioning` | live_conditioning | 对收获活鱼实施稳定化，并按真实买方要求分级；记录验收、其他销售等级、活体退回与死亡。记录实际暂养饲料/水/氧气/能源及处理，不从旧指南推定强制治疗。 | uf-ifas-grading-fa118; uf-ifas-shipping-fa120 |
| `boundary_dispatch` | farm_dispatch | 纳入实际场内准备/包装及验收活鱼交付；没有袋/箱时按证据记录散装交付及零包装量。介质水和其他包装投入独立记录；交付门之后的运输、零售/展示及水族使用不在本边界。 | uf-ifas-shipping-fa120 |
| `boundary_water` | 所有节点 | 外部供水与天然直接取水仅在首次进入时记录一次；以水路/期间平衡记录循环、内部转移、蒸发、随鱼运出水、送处理水与直接排放。送处理废水为废物流；直接环境排放为基本流，声明真实接收介质及独立监测物质。 | uf-ifas-ras-fa099 |
| `boundary_emissions` | 所有节点 | 纳入实际现场燃烧及有监测/可靠模型、燃料/发动机/因子证据的具体空气物质排放；购买热服务不得重复现场燃烧。直接排水须有真实物质/形态、浓度/流量及介质；总 N/P 或 COD 本身不足以确定基本物质 UUID。 | |
| `boundary_period_asset` | 所有节点 | 纳入资本品或明确论证截断；按资产/服务期间及全部消费者识别池塘/水槽、建筑、泵、生物过滤器、网具、分级器、车辆及复用运输箱；保留前期鱼及资产负担、启动/清洗、替换及终止事件，避免逐节点重复计费。 | |

## 6. 过程清单结构

### 过程图

| process_id | Process name | Inclusion | Inclusion condition | Role | Quantitative reference |
| --- | --- | --- | --- | --- | --- |
| managed_rearing | 管理繁殖、苗种与育成 | required | 所有养殖批次；按来源记录选择场内繁殖与外购苗种 | 前景生物生产；批次或连续水路/期间索引 | 实测转给收获的待售鱼；留养存量仍在存量账中 |
| farm_harvest | 收获与场内转运 | required | 每个上市批次均从管理生产环境移出 | 前景收获及站内运输 | 实测送入暂养的收获活鱼 |
| live_conditioning | 活体稳定化与嵌入式等级分选 | required | 记录真实干预或有证据的即刻交付及零增量资源 | 前景调理；实际暂养区间 | 实测验收等级活鱼；其他销售/退回/损失分别记录 |
| farm_dispatch | 农场准备与发运 | required | 所有最终交付；包装投入取决于实际袋/箱/罐 | 农场门前景交付；不含分销 | 1 kg 最终验收活体净质量 |

每行须按批次、水路/水槽/池塘、运行或连续期间和事件建立索引，清洗、切换、启动及维护连接真实消费者。重复部分收获不代表清空池塘，也不等于期末存量归零。下列材料/服务卡按说明有条件启用；下游发布前须按具体身份、供应商或去向展开真实交换。内部鱼及水转移跨节点核对，并在汇总外部清单中抵消。

### 过程：管理繁殖、苗种与育成（`managed_rearing`）

#### 输入

##### 产品流

###### 暂养后回养的留养活鱼（`returned_live_stock`）

真实回养时与 conditioning_returns 配对，标识原批次/阶段及结转负担；是内部转移，不是外购苗种或第二份生产信用。

- 选定流：暂养后回养的留养活鱼
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：从 `cp_stock_managed_rearing` 获取分配后的实测 kg；按采集期间归属折算至每 1 kg 参考流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stock_managed_rearing`

- 数量范围：可替换暂定筛查估算；不是经验值或合规限值
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 苗种供应商门外购观赏幼鱼（`seed_stock`）

外购苗种时启用；记录物种/阶段、供应商、接收质量/尾数及上游繁殖/苗种负担。场内后代是内部生产，不另列外购苗种。

- 选定流：苗种供应商门外购观赏幼鱼
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：从 `cp_rearing` 获取分配后的实测 kg；按采集期间归属折算至每 1 kg 参考流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rearing`

- 数量范围：可替换暂定筛查估算；不是经验值或合规限值
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 归属于本期生产的外购亲鱼（`broodstock`）

外部引进/替换亲鱼时启用；记录亲鱼来源、实际繁殖服务期间、留养、替换及终止；购买负担按证据分期，既有亲鱼属于期初存量。

- 选定流：归属于本期生产的外购亲鱼
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：从 `cp_rearing` 获取分配后的实测 kg；按采集期间归属折算至每 1 kg 参考流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rearing`

- 数量范围：可替换暂定筛查估算；不是经验值或合规限值
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 外部供应育成与清洗水（`rearing_water`）

按供应商及真实原水/市政水/处理工艺水分别记录，注明盐度及鱼适用性；不得把未定供水总类绑定到某工业工艺水身份。

- 选定流：外部供应育成与清洗水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：从 `cp_water_managed_rearing` 获取分配后的实测 kg；按采集期间归属折算至每 1 kg 参考流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_managed_rearing`
- 来源：`uf-ifas-ras-fa099`

- 数量范围：可替换暂定筛查估算；不是经验值或合规限值
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 真实供应商与电压的养殖电力（`rearing_electricity`）

计量泵、曝气、过滤、照明、加热及清洗，纳入空载/启动期；按地理、供应商/电压及水路拆分，中国低压身份不能覆盖所有农场。

- 选定流：真实供应商与电压的养殖电力
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：从 `cp_energy_managed_rearing` 获取分配后的实测 kWh；按采集期间归属折算至每 1 kg 参考流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_managed_rearing`
- 来源：`uf-ifas-ras-fa099`

- 数量范围：可替换暂定筛查估算；不是经验值或合规限值
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kWh
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 外购养殖热能服务（`rearing_heat`）

外部供热时启用，在使用者边界计量，披露供应技术与损耗；不得另把供热方燃料计作现场消耗。

- 选定流：外购养殖热能服务
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：从 `cp_energy_managed_rearing` 获取分配后的实测 MJ；按采集期间归属折算至每 1 kg 参考流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_managed_rearing`

- 数量范围：可替换暂定筛查估算；不是经验值或合规限值
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 移交收获的待售观赏活鱼（`market_ready_stock`）

计量真实移交收获的待售鱼；留养亲鱼与未收获鱼仍为存量，此育成接口不能沿用农场发运产品 UUID。

- 选定流：移交收获的待售观赏活鱼
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：从 `cp_stock_managed_rearing` 获取分配后的实测 kg；按采集期间归属折算至每 1 kg 参考流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stock_managed_rearing`

- 数量范围：可替换暂定筛查估算；不是经验值或合规限值
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 送实际处置的养殖死亡鱼（`rearing_mortality`）

记录实测死亡/安乐处置鱼质量、已有诊断/事件及真实处置去向；逃逸或留养活淘汰鱼是存量/事件，不属于本废物交换。

- 选定流：送实际处置的养殖死亡鱼
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：从 `cp_waste_managed_rearing` 获取分配后的实测 kg；按采集期间归属折算至每 1 kg 参考流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_managed_rearing`

- 数量范围：可替换暂定筛查估算；不是经验值或合规限值
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 送处理的养殖废水（`rearing_effluent`）

废水送真实场内/场外处理边界时启用，记录流量/组成及处理连接；场内处理纳入投入与残余，不能把处理后排水重复算未处理排水。

- 选定流：送处理的养殖废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：从 `cp_water_managed_rearing` 获取分配后的实测 kg；按采集期间归属折算至每 1 kg 参考流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_managed_rearing`

- 数量范围：可替换暂定筛查估算；不是经验值或合规限值
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 送处理或处置的移除养殖固体（`rearing_sludge`）

实测过滤反洗/污泥/清塘固体、含水率及去向；没有真实产品品质、买方与独立产出审查不得给肥料替代信用。

- 选定流：送处理或处置的移除养殖固体
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：从 `cp_waste_managed_rearing` 获取分配后的实测 kg；按采集期间归属折算至每 1 kg 参考流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_managed_rearing`

- 数量范围：可替换暂定筛查估算；不是经验值或合规限值
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 向实际接收介质直接排放的养殖水（`rearing_water_release`）

真实直接环境回水时启用，记录来源/接收介质及水量，监测物质独立识别；水载体不是泛有机污染物身份。

- 选定流：向实际接收介质直接排放的养殖水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：从 `cp_water_managed_rearing` 获取分配后的实测 kg；按采集期间归属折算至每 1 kg 参考流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_managed_rearing`

- 数量范围：可替换暂定筛查估算；不是经验值或合规限值
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：收获与场内转运（`farm_harvest`）

#### 输入

##### 产品流

###### 从人工育成移出的活鱼（`harvest_stock`）

实际取出量与 market_ready_stock 及来源水路/批次一致；重复部分收获须保留未收获鱼存量，该内部数量不得固定为 1 kg。

- 选定流：从人工育成移出的活鱼
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：从 `cp_stock_farm_harvest` 获取分配后的实测 kg；按采集期间归属折算至每 1 kg 参考流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stock_farm_harvest`

- 数量范围：可替换暂定筛查估算；不是经验值或合规限值
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 实际收获与场内转运电力（`harvest_electricity`）

仅实际运行时记录降水位泵、曝气与电动场内运输；共享表分配须与养殖/暂养用电核对。

- 选定流：实际收获与场内转运电力
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：从 `cp_energy_farm_harvest` 获取分配后的实测 kWh；按采集期间归属折算至每 1 kg 参考流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_farm_harvest`

- 数量范围：可替换暂定筛查估算；不是经验值或合规限值
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kWh
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 外部供应收获与场内介质水（`harvest_water`）

仅记录新进入本节点的外部供应水；场内运输复用池塘/水槽水作为内部转移，不另算供水。

- 选定流：外部供应收获与场内介质水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：从 `cp_water_farm_harvest` 获取分配后的实测 kg；按采集期间归属折算至每 1 kg 参考流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_farm_harvest`
- 来源：`uf-ifas-onfarm-transport-fa119`

- 数量范围：可替换暂定筛查估算；不是经验值或合规限值
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 场内运输使用的外购气态氧（`harvest_oxygen`）

真实加氧时启用，记录气态供应形式、纯度/供应方及 kg 消耗；电力曝气不是购买氧气，瓶体皮重与充填量分开。

- 选定流：场内运输使用的外购气态氧
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：从 `cp_materials_farm_harvest` 获取分配后的实测 kg；按采集期间归属折算至每 1 kg 参考流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials_farm_harvest`

- 数量范围：可替换暂定筛查估算；不是经验值或合规限值
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 暂养接收处的收获活鱼批次（`harvested_live_lot`）

实测移出并场内运输后到达的存活鱼；直接回养鱼在存量账单独识别。

- 选定流：暂养接收处的收获活鱼批次
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：从 `cp_stock_farm_harvest` 获取分配后的实测 kg；按采集期间归属折算至每 1 kg 参考流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stock_farm_harvest`

- 数量范围：可替换暂定筛查估算；不是经验值或合规限值
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 送处置的收获与场内转运死亡鱼（`harvest_mortality`）

实测操作/转运损失及处置，不能假定未售活鱼死亡或可售；交换身份选择前须记录真实去向。

- 选定流：送处置的收获与场内转运死亡鱼
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：从 `cp_waste_farm_harvest` 获取分配后的实测 kg；按采集期间归属折算至每 1 kg 参考流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_farm_harvest`

- 数量范围：可替换暂定筛查估算；不是经验值或合规限值
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 送处理的收获介质水或排水（`harvest_effluent`）

真实处理路线时启用，区分降水位排水、带入暂养的介质水和送处理水；保留转移水不属于该边界废水。

- 选定流：送处理的收获介质水或排水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：从 `cp_water_farm_harvest` 获取分配后的实测 kg；按采集期间归属折算至每 1 kg 参考流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_farm_harvest`

- 数量范围：可替换暂定筛查估算；不是经验值或合规限值
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 向接收介质直接排出的收获水（`harvest_water_release`）

直接排水/释放时启用，记录来源、体积/质量及接收介质；收获扰动底泥的物质释放须有真实证据，不自动推定排放。

- 选定流：向接收介质直接排出的收获水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：从 `cp_water_farm_harvest` 获取分配后的实测 kg；按采集期间归属折算至每 1 kg 参考流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_farm_harvest`

- 数量范围：可替换暂定筛查估算；不是经验值或合规限值
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：活体稳定化与嵌入式分级（`live_conditioning`）

#### 输入

##### 产品流

###### 外购活鱼暂养热能服务（`conditioning_heat`）

实际暂养使用者边界外部热服务时启用，计量 MJ 并记录供应商/技术；供应方同一燃料不另算现场消耗。

- 选定流：外购活鱼暂养热能服务
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：从 `cp_energy_live_conditioning` 获取分配后的实测 MJ；按采集期间归属折算至每 1 kg 参考流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_live_conditioning`

- 数量范围：可替换暂定筛查估算；不是经验值或合规限值
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 进入暂养的收获活鱼（`conditioning_stock`）

接收质量/尾数、时刻、水质及存活等级与 harvested_live_lot 一致，转移水另有记录。

- 选定流：进入暂养的收获活鱼
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：从 `cp_stock_live_conditioning` 获取分配后的实测 kg；按采集期间归属折算至每 1 kg 参考流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stock_live_conditioning`

- 数量范围：可替换暂定筛查估算；不是经验值或合规限值
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 外部供应暂养与清洗水（`conditioning_water`）

仅记录新增外部供水，按供应方及水质状态识别；内部池水/介质水/RAS 水不得在本节点重复购买。

- 选定流：外部供应暂养与清洗水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：从 `cp_water_live_conditioning` 获取分配后的实测 kg；按采集期间归属折算至每 1 kg 参考流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_live_conditioning`

- 数量范围：可替换暂定筛查估算；不是经验值或合规限值
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 实际暂养与等级操作电力（`conditioning_electricity`）

按真实暂养区间计量泵/曝气、操作、温控及清洗，共享水路不重复上游养殖。

- 选定流：实际暂养与等级操作电力
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：从 `cp_energy_live_conditioning` 获取分配后的实测 kWh；按采集期间归属折算至每 1 kg 参考流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_live_conditioning`

- 数量范围：可替换暂定筛查估算；不是经验值或合规限值
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kWh
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 暂养实际加入的外购气态氧（`conditioning_oxygen`）

实际加氧时启用，记录真实供应形式/供应方与实测 kg；不单凭鱼尾数或假定暂养时间推算氧量。

- 选定流：暂养实际加入的外购气态氧
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：从 `cp_materials_live_conditioning` 获取分配后的实测 kg；按采集期间归属折算至每 1 kg 参考流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials_live_conditioning`

- 数量范围：可替换暂定筛查估算；不是经验值或合规限值
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收稳定化及分级观赏活鱼（`graded_live_stock`）

记录暂养/分级后的真实验收等级及存活净质量，移交发运；本中间状态身份独立待核实，不借用农场门 UUID。

- 选定流：验收稳定化及分级观赏活鱼
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：从 `cp_stock_live_conditioning` 获取分配后的实测 kg；按采集期间归属折算至每 1 kg 参考流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stock_live_conditioning`

- 数量范围：可替换暂定筛查估算；不是经验值或合规限值
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 回到人工养殖存量的留养活鱼（`conditioning_returns`）

真实未达规格/留养亲鱼回原水路/批次；配对转入/存量账结转累计负担，不给销售信用或重复计新苗种负担。

- 选定流：回到人工养殖存量的留养活鱼
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：从 `cp_stock_live_conditioning` 获取分配后的实测 kg；按采集期间归属折算至每 1 kg 参考流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stock_live_conditioning`

- 数量范围：可替换暂定筛查估算；不是经验值或合规限值
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 暂养死亡或实际处置淘汰鱼（`conditioning_mortality`）

实测死亡及真实淘汰处置，保留原因/去向证据；存活回养与其他活鱼销售分开。

- 选定流：暂养死亡或实际处置淘汰鱼
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：从 `cp_waste_live_conditioning` 获取分配后的实测 kg；按采集期间归属折算至每 1 kg 参考流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_live_conditioning`

- 数量范围：可替换暂定筛查估算；不是经验值或合规限值
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 送处理的暂养废水（`conditioning_effluent`）

记录真实处理交付及实测组成/数量；直接释放用环境行替代；场内处理运行及产出仍须纳入数据包。

- 选定流：送处理的暂养废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：从 `cp_water_live_conditioning` 获取分配后的实测 kg；按采集期间归属折算至每 1 kg 参考流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_live_conditioning`

- 数量范围：可替换暂定筛查估算；不是经验值或合规限值
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 向接收介质直接排出的暂养水（`conditioning_water_release`）

直接环境回水时启用，实测水质量和接收介质，真实物质释放与废水处理分开记录。

- 选定流：向接收介质直接排出的暂养水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：从 `cp_water_live_conditioning` 获取分配后的实测 kg；按采集期间归属折算至每 1 kg 参考流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_live_conditioning`

- 数量范围：可替换暂定筛查估算；不是经验值或合规限值
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：农场准备与发运（`farm_dispatch`）

#### 输入

##### 产品流

###### 进入农场发运的验收分级活鱼（`packing_stock`）

与 graded_live_stock 及批次/等级记录相符；发运损失存在时实际转入量可高于最终验收发运量。

- 选定流：进入农场发运的验收分级活鱼
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：从 `cp_stock_farm_dispatch` 获取分配后的实测 kg；按采集期间归属折算至每 1 kg 参考流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stock_farm_dispatch`

- 数量范围：可替换暂定筛查估算；不是经验值或合规限值
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 外部供应活鱼发运介质水（`packing_water`）

真实新增发运介质/清洗水；内部暂养水转移仅作记录，不重复计供水；水随鱼运出但不计入鱼参考质量。

- 选定流：外部供应活鱼发运介质水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：从 `cp_water_farm_dispatch` 获取分配后的实测 kg；按采集期间归属折算至每 1 kg 参考流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_farm_dispatch`

- 数量范围：可替换暂定筛查估算；不是经验值或合规限值
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 农场发运加入的外购气态氧（`packing_oxygen`）

真实计量加氧时启用，核实供应形式/纯度/供应方，气体 kg 不含瓶体；不同氧名称不能视为同一身份。

- 选定流：农场发运加入的外购气态氧
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：从 `cp_materials_farm_dispatch` 获取分配后的实测 kg；按采集期间归属折算至每 1 kg 参考流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials_farm_dispatch`

- 数量范围：可替换暂定筛查估算；不是经验值或合规限值
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 实际农场发运准备电力（`packing_electricity`）

真实设备充填/封口/温控/清洗时启用；分配量排除已计入暂养的上游泵。

- 选定流：实际农场发运准备电力
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：从 `cp_energy_farm_dispatch` 获取分配后的实测 kWh；按采集期间归属折算至每 1 kg 参考流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_farm_dispatch`

- 数量范围：可替换暂定筛查估算；不是经验值或合规限值
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kWh
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 农场发运交付的养殖观赏活鱼（`farmed_ornamental_dispatch`）

实际农场交付门验收的最终观赏活鱼净质量，仅此产出为参考流；水和包装为独立随货材料。

- 选定流：养殖观赏鱼 `142f4fa7-d47c-4fe0-8d15-751758c17a9c`
- 绑定：fixed
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：1 千克
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_stock_farm_dispatch`
- 来源：`reference-definition`

- 数量范围：定义确定的参考数量
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`reference-definition`

##### 废物流

###### 发运交付前死亡或实际处置的拒收鱼（`dispatch_mortality`）

真实交付前死亡/淘汰鱼，记录实测净质量及处置；交付后的目的地存活不属于本参考边界。

- 选定流：发运交付前死亡或实际处置的拒收鱼
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：从 `cp_waste_farm_dispatch` 获取分配后的实测 kg；按采集期间归属折算至每 1 kg 参考流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_farm_dispatch`

- 数量范围：可替换暂定筛查估算；不是经验值或合规限值
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 送处理的发运准备废水（`dispatch_effluent`）

真实清洗/充填溢流水送处理，排除交给买方的介质水；直接环境排水须独立接收介质行。

- 选定流：送处理的发运准备废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：从 `cp_water_farm_dispatch` 获取分配后的实测 kg；按采集期间归属折算至每 1 kg 参考流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_farm_dispatch`

- 数量范围：可替换暂定筛查估算；不是经验值或合规限值
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 发运准备水向接收介质的直接释放（`dispatch_water_release`）

真实直接环境释放时启用，独立记录质量及接收方，不含随产品越农场门的介质水。

- 选定流：发运准备水向接收介质的直接释放
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：从 `cp_water_farm_dispatch` 获取分配后的实测 kg；按采集期间归属折算至每 1 kg 参考流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_farm_dispatch`

- 数量范围：可替换暂定筛查估算；不是经验值或合规限值
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与联产品处理

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_precedence` | 所有节点 | 优先细分可追踪物种/批次/等级过程并直接归属可识别投入。其余共享负担采用有记录的因果驱动量，如计量能源、占用水槽体积时间或服务使用；因果不明时披露基于同期物种/等级销售额的经济分配及敏感性。记录方法、完整产出集合、价格/驱动量及份额核对，不设默认比例或自动替代信用。 | ghg-product-standard |
| `allocation_outputs` | live_conditioning; farm_dispatch | 枚举每个独立销售物种/等级及真实买方用途/交付门，在参考归一化前向完整预期产出集合分配共同上游负担。待售、收获和分级鱼均为内部转移，不是三份最终产品信用；死亡/淘汰/污泥为废物，除非独立产品证据审查确认其他身份，其负担归入成功生产。 | |
| `allocation_stock_period` | managed_rearing; 所有鱼行 | 声明苗种/育成及亲鱼期初期末存量、来源期间和每次部分收获。留养/回养活鱼累计负担结转下期，披露真实生长及阶段转换，不对生长生物量假设封闭质量守恒。亲鱼建立/替换负担按有证据的繁殖服务期间及后代分配，提前终止须修订。不得给期末存量销售信用或重复购买计费。 | |
| `allocation_mode` | 所有节点 | 批次生产将投放、收获、清洗及切换关联批次；连续池塘/水路将资源表关联有界期间及收获事件，保留交叠年龄组和存量。空载/启动/维护及周期末清洗依据披露的实际服务归属向全部受益者/期间分配一次。 | |
| `allocation_assets` | 所有节点 | 维护共享资产/服务账，列明池塘/水槽、建筑、泵/生物过滤器、器具、车辆或复用箱及全部节点/期间。材料、替换、清洗和运行按已记录使用分配，资本材料与计量能源分开。共享表总量仅分一次，不能逐节点复制。寿命/复用次数依据真实维护、替换及终止证据，不设通用摊销期间。 | |
| `allocation_water` | 所有水行 | 外部水及水系统投入仅在来源入口分配一次；内部复用/回流不产生新供应负担。排放、蒸发、保留、处理和随货水按真实去向及期间分区。处理投入与产出按真实交付只计一次，不同时计处理服务与完整重复处理过程。 | |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

所有协议分别保留原始期间/事件总量及产出分配，发布清单归一化至每 1 kg 参考流。零值须有条件未发生的证据。协议规定测量要求，不表示已具备场址记录。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_stock_managed_rearing` | `managed_rearing` | 所有鱼及最终净质量 | 存量与称重记录 | 场址；批次；物种；阶段；来源/供应商；期初/期末；亲鱼；真实出生/生长观测；尾数；抽样质量；转移/回养；等级；死亡；逃逸；收获；发运日期；皮重/净重；原始共享台账唯一编号；本节点实际份额；全部受益者核对 | 经校准且符合活体操作要求的排除游离水/扣除容器皮重批次称重，尾数转质量采用同阶段代表性样本；核对存量、收获及销售，不能假定没有生长；使用同一共享原始台账并独立核对本节点份额，不复制其他节点总量或重复承担同项负荷。 | kg | 每次接收、转移、收获、发运及报告边界 | 繁殖/苗种/育成、暂养与发运日期及相邻留养期 | 声明水路/批次及供应商连接 | 每 1 kg 参考流 | 校准/皮重、抽样及不确定性、配对转移、存量核对 |
| `cp_stock_farm_harvest` | `farm_harvest` | 所有鱼及最终净质量 | 存量与称重记录 | 场址；批次；物种；阶段；来源/供应商；期初/期末；亲鱼；真实出生/生长观测；尾数；抽样质量；转移/回养；等级；死亡；逃逸；收获；发运日期；皮重/净重；原始共享台账唯一编号；本节点实际份额；全部受益者核对 | 经校准且符合活体操作要求的排除游离水/扣除容器皮重批次称重，尾数转质量采用同阶段代表性样本；核对存量、收获及销售，不能假定没有生长；使用同一共享原始台账并独立核对本节点份额，不复制其他节点总量或重复承担同项负荷。 | kg | 每次接收、转移、收获、发运及报告边界 | 繁殖/苗种/育成、暂养与发运日期及相邻留养期 | 声明水路/批次及供应商连接 | 每 1 kg 参考流 | 校准/皮重、抽样及不确定性、配对转移、存量核对 |
| `cp_stock_live_conditioning` | `live_conditioning` | 所有鱼及最终净质量 | 存量与称重记录 | 场址；批次；物种；阶段；来源/供应商；期初/期末；亲鱼；真实出生/生长观测；尾数；抽样质量；转移/回养；等级；死亡；逃逸；收获；发运日期；皮重/净重；原始共享台账唯一编号；本节点实际份额；全部受益者核对 | 经校准且符合活体操作要求的排除游离水/扣除容器皮重批次称重，尾数转质量采用同阶段代表性样本；核对存量、收获及销售，不能假定没有生长；使用同一共享原始台账并独立核对本节点份额，不复制其他节点总量或重复承担同项负荷。 | kg | 每次接收、转移、收获、发运及报告边界 | 繁殖/苗种/育成、暂养与发运日期及相邻留养期 | 声明水路/批次及供应商连接 | 每 1 kg 参考流 | 校准/皮重、抽样及不确定性、配对转移、存量核对 |
| `cp_stock_farm_dispatch` | `farm_dispatch` | 所有鱼及最终净质量 | 存量与称重记录 | 场址；批次；物种；阶段；来源/供应商；期初/期末；亲鱼；真实出生/生长观测；尾数；抽样质量；转移/回养；等级；死亡；逃逸；收获；发运日期；皮重/净重；原始共享台账唯一编号；本节点实际份额；全部受益者核对 | 经校准且符合活体操作要求的排除游离水/扣除容器皮重批次称重，尾数转质量采用同阶段代表性样本；核对存量、收获及销售，不能假定没有生长；使用同一共享原始台账并独立核对本节点份额，不复制其他节点总量或重复承担同项负荷。 | kg | 每次接收、转移、收获、发运及报告边界 | 繁殖/苗种/育成、暂养与发运日期及相邻留养期 | 声明水路/批次及供应商连接 | 每 1 kg 参考流 | 校准/皮重、抽样及不确定性、配对转移、存量核对 |
| cp_rearing | managed_rearing | 苗种/亲鱼和饲料 | 接收与管理记录 | 苗种/亲鱼供应商；繁殖阶段；饲料/活饵产品/供应方；组成；收到态/干物质；购买；期初期末材料存量；投饵；场内饵料投入；批次/期间 | 核对供应商原始生产记录、发票、接收和称量投饵及存量/阶段；采集真实繁殖活动与天然饵料披露 | kg | 每次接收/投饵及期末盘点 | 完整批次或有界连续期，含启动/清洗 | 真实农场及上游供应商 | 每 1 kg 参考流 | 发票/称量、上游门和供应商数据、投饵平衡 |
| cp_harvest | farm_harvest | 诱饵与收获运行 | 收获和场内转运记录 | 池塘/水槽/批次；笼/网方式；收获事件；饵身份/质量；介质来源；设备；持续时间；起终点；活鱼尾数；损失/回养 | 称量实际诱饵，追踪每次收获与场内运输，交叉连接 cp_energy_managed_rearing; cp_energy_farm_harvest; cp_energy_live_conditioning; cp_energy_farm_dispatch、cp_water_managed_rearing; cp_water_farm_harvest; cp_water_live_conditioning; cp_water_farm_dispatch、cp_materials_managed_rearing; cp_materials_farm_harvest; cp_materials_live_conditioning; cp_materials_farm_dispatch 和 cp_stock_managed_rearing; cp_stock_farm_harvest; cp_stock_live_conditioning; cp_stock_farm_dispatch | kg | 每次收获及场内行程 | 移出至暂养接收的收获事件 | 真实场内移动 | 每 1 kg 参考流 | 事件记录与接收配对、诱饵及运输记录 |
| cp_conditioning | live_conditioning | 暂养投饵及等级 | 投饵与暂养记录 | 批次；物种；等级；暂养日期；饲料产品/质量；处理事件；验收/回养/其他销售/死亡 | 称量真实饲料，暂养/分级连接 cp_stock_managed_rearing; cp_stock_farm_harvest; cp_stock_live_conditioning; cp_stock_farm_dispatch 和 cp_sales_live_conditioning; cp_sales_farm_dispatch；立即通过须记录零资源证据 | kg | 每次事件及每日暂养记录 | 发运前真实暂养区间 | 声明暂养设施/水路 | 每 1 kg 参考流 | 等级验收及活体状态、饲料存量 |
| cp_dispatch | farm_dispatch | 包装与热材料 | 组分及发运记录 | 批次；组成；袋/箱/纸箱/标签质量；真实冷却/加热包；复用容器编号/次数；随货/废弃材料；清洗；交付 | 称量组分或用可追踪供应商单件质量与实际数量，证明复用材料分配及真实散装交付状态 | kg | 每次发运及复用盘点期 | 准备至真实农场交付 | 农场门及真实包装供应商 | 每 1 kg 参考流 | 组分供应记录、称重、复用/损失账及交付接收 |
| `cp_energy_managed_rearing` | `managed_rearing` | 电力、燃料、外部热 | 能源表及燃料存量 | 节点；水路；表号；电力供应商；电压；地理；kWh；具体燃料质量；外购热 MJ；设备/发动机；启动/空载/清洗；表区间；共享消费者；原始共享台账唯一编号；本节点实际份额；全部受益者核对 | 分表计量或论证服务分配，核对燃料购买及期初期末和消耗；独立保留热量表/供应方与燃料热值证据；使用同一共享原始台账并独立核对本节点份额，不复制其他节点总量或重复承担同项负荷。 | kWh; kg; MJ | 表区间与每次燃料事件 | 含启动、空载及维护的完整报告期 | 真实水路/设备及供应商 | 每 1 kg 参考流 | 表校准、接收记录、共享表核对、供热/燃烧连接 |
| `cp_energy_farm_harvest` | `farm_harvest` | 电力、燃料、外部热 | 能源表及燃料存量 | 节点；水路；表号；电力供应商；电压；地理；kWh；具体燃料质量；外购热 MJ；设备/发动机；启动/空载/清洗；表区间；共享消费者；原始共享台账唯一编号；本节点实际份额；全部受益者核对 | 分表计量或论证服务分配，核对燃料购买及期初期末和消耗；独立保留热量表/供应方与燃料热值证据；使用同一共享原始台账并独立核对本节点份额，不复制其他节点总量或重复承担同项负荷。 | kWh; kg; MJ | 表区间与每次燃料事件 | 含启动、空载及维护的完整报告期 | 真实水路/设备及供应商 | 每 1 kg 参考流 | 表校准、接收记录、共享表核对、供热/燃烧连接 |
| `cp_energy_live_conditioning` | `live_conditioning` | 电力、燃料、外部热 | 能源表及燃料存量 | 节点；水路；表号；电力供应商；电压；地理；kWh；具体燃料质量；外购热 MJ；设备/发动机；启动/空载/清洗；表区间；共享消费者；原始共享台账唯一编号；本节点实际份额；全部受益者核对 | 分表计量或论证服务分配，核对燃料购买及期初期末和消耗；独立保留热量表/供应方与燃料热值证据；使用同一共享原始台账并独立核对本节点份额，不复制其他节点总量或重复承担同项负荷。 | kWh; kg; MJ | 表区间与每次燃料事件 | 含启动、空载及维护的完整报告期 | 真实水路/设备及供应商 | 每 1 kg 参考流 | 表校准、接收记录、共享表核对、供热/燃烧连接 |
| `cp_energy_farm_dispatch` | `farm_dispatch` | 电力、燃料、外部热 | 能源表及燃料存量 | 节点；水路；表号；电力供应商；电压；地理；kWh；具体燃料质量；外购热 MJ；设备/发动机；启动/空载/清洗；表区间；共享消费者；原始共享台账唯一编号；本节点实际份额；全部受益者核对 | 分表计量或论证服务分配，核对燃料购买及期初期末和消耗；独立保留热量表/供应方与燃料热值证据；使用同一共享原始台账并独立核对本节点份额，不复制其他节点总量或重复承担同项负荷。 | kWh; kg; MJ | 表区间与每次燃料事件 | 含启动、空载及维护的完整报告期 | 真实水路/设备及供应商 | 每 1 kg 参考流 | 表校准、接收记录、共享表核对、供热/燃烧连接 |
| `cp_water_managed_rearing` | `managed_rearing` | 水进入、转移、处理与释放 | 水路账及监测 | 来源/供应商；资源/接收方；盐度/密度/温度；进水；补水；内部回流；随货水；蒸发；期末蓄水；排水/溢流；处理阶段；数量/组成；原始共享台账唯一编号；本节点实际份额；全部受益者核对 | 按来源计量/称量，以真实密度转体积，采样真实出水；核对进入、保留、蒸发、处理、直接返回及随货水；使用同一共享原始台账并独立核对本节点份额，不复制其他节点总量或重复承担同项负荷。 | kg | 表区间、转移/排水事件及期间边界 | 匹配水路及报告期间 | 真实农场水路及接收流域 | 每 1 kg 参考流 | 表/密度证据、水路布局、接收介质、处理接收及水平衡 |
| `cp_water_farm_harvest` | `farm_harvest` | 水进入、转移、处理与释放 | 水路账及监测 | 来源/供应商；资源/接收方；盐度/密度/温度；进水；补水；内部回流；随货水；蒸发；期末蓄水；排水/溢流；处理阶段；数量/组成；原始共享台账唯一编号；本节点实际份额；全部受益者核对 | 按来源计量/称量，以真实密度转体积，采样真实出水；核对进入、保留、蒸发、处理、直接返回及随货水；使用同一共享原始台账并独立核对本节点份额，不复制其他节点总量或重复承担同项负荷。 | kg | 表区间、转移/排水事件及期间边界 | 匹配水路及报告期间 | 真实农场水路及接收流域 | 每 1 kg 参考流 | 表/密度证据、水路布局、接收介质、处理接收及水平衡 |
| `cp_water_live_conditioning` | `live_conditioning` | 水进入、转移、处理与释放 | 水路账及监测 | 来源/供应商；资源/接收方；盐度/密度/温度；进水；补水；内部回流；随货水；蒸发；期末蓄水；排水/溢流；处理阶段；数量/组成；原始共享台账唯一编号；本节点实际份额；全部受益者核对 | 按来源计量/称量，以真实密度转体积，采样真实出水；核对进入、保留、蒸发、处理、直接返回及随货水；使用同一共享原始台账并独立核对本节点份额，不复制其他节点总量或重复承担同项负荷。 | kg | 表区间、转移/排水事件及期间边界 | 匹配水路及报告期间 | 真实农场水路及接收流域 | 每 1 kg 参考流 | 表/密度证据、水路布局、接收介质、处理接收及水平衡 |
| `cp_water_farm_dispatch` | `farm_dispatch` | 水进入、转移、处理与释放 | 水路账及监测 | 来源/供应商；资源/接收方；盐度/密度/温度；进水；补水；内部回流；随货水；蒸发；期末蓄水；排水/溢流；处理阶段；数量/组成；原始共享台账唯一编号；本节点实际份额；全部受益者核对 | 按来源计量/称量，以真实密度转体积，采样真实出水；核对进入、保留、蒸发、处理、直接返回及随货水；使用同一共享原始台账并独立核对本节点份额，不复制其他节点总量或重复承担同项负荷。 | kg | 表区间、转移/排水事件及期间边界 | 匹配水路及报告期间 | 真实农场水路及接收流域 | 每 1 kg 参考流 | 表/密度证据、水路布局、接收介质、处理接收及水平衡 |
| `cp_materials_managed_rearing` | `managed_rearing` | 氧气、处理与清洗品 | 产品存量及加料记录 | 具体产品；供应商/形式；氧纯度/压力形式；气瓶皮重/充填；配方/活性质量；使用事件；相关真实授权；存量变化；残余去向；原始共享台账唯一编号；本节点实际份额；全部受益者核对 | 称量或采用可追踪供应/加料记录，核对购买/存量/使用，保留相关当前当地授权证据但不规定方案；使用同一共享原始台账并独立核对本节点份额，不复制其他节点总量或重复承担同项负荷。 | kg | 每次接收/使用/清洗 | 实际生产/暂养/发运区间 | 具体供应商、节点与水路 | 每 1 kg 参考流 | 供应组成、校准称量/加料、存量平衡及去向 |
| `cp_materials_farm_harvest` | `farm_harvest` | 氧气、处理与清洗品 | 产品存量及加料记录 | 具体产品；供应商/形式；氧纯度/压力形式；气瓶皮重/充填；配方/活性质量；使用事件；相关真实授权；存量变化；残余去向；原始共享台账唯一编号；本节点实际份额；全部受益者核对 | 称量或采用可追踪供应/加料记录，核对购买/存量/使用，保留相关当前当地授权证据但不规定方案；使用同一共享原始台账并独立核对本节点份额，不复制其他节点总量或重复承担同项负荷。 | kg | 每次接收/使用/清洗 | 实际生产/暂养/发运区间 | 具体供应商、节点与水路 | 每 1 kg 参考流 | 供应组成、校准称量/加料、存量平衡及去向 |
| `cp_materials_live_conditioning` | `live_conditioning` | 氧气、处理与清洗品 | 产品存量及加料记录 | 具体产品；供应商/形式；氧纯度/压力形式；气瓶皮重/充填；配方/活性质量；使用事件；相关真实授权；存量变化；残余去向；原始共享台账唯一编号；本节点实际份额；全部受益者核对 | 称量或采用可追踪供应/加料记录，核对购买/存量/使用，保留相关当前当地授权证据但不规定方案；使用同一共享原始台账并独立核对本节点份额，不复制其他节点总量或重复承担同项负荷。 | kg | 每次接收/使用/清洗 | 实际生产/暂养/发运区间 | 具体供应商、节点与水路 | 每 1 kg 参考流 | 供应组成、校准称量/加料、存量平衡及去向 |
| `cp_materials_farm_dispatch` | `farm_dispatch` | 氧气、处理与清洗品 | 产品存量及加料记录 | 具体产品；供应商/形式；氧纯度/压力形式；气瓶皮重/充填；配方/活性质量；使用事件；相关真实授权；存量变化；残余去向；原始共享台账唯一编号；本节点实际份额；全部受益者核对 | 称量或采用可追踪供应/加料记录，核对购买/存量/使用，保留相关当前当地授权证据但不规定方案；使用同一共享原始台账并独立核对本节点份额，不复制其他节点总量或重复承担同项负荷。 | kg | 每次接收/使用/清洗 | 实际生产/暂养/发运区间 | 具体供应商、节点与水路 | 每 1 kg 参考流 | 供应组成、校准称量/加料、存量平衡及去向 |
| `cp_assets_managed_rearing` | `managed_rearing` | 资本/替换及共享器具 | 材料与服务账 | 资产编号；组分/材料；质量；节点；安装；服务期；寿命/复用证据；替换；清洗；退休；占用/使用驱动量；资本截断依据；原始共享台账唯一编号；本节点实际份额；全部受益者核对 | 记录真实建造/替换材料及维护，向全部消费者/期间分配实测服务并核对总量；与能源交叉连接，不能重复运行；使用同一共享原始台账并独立核对本节点份额，不复制其他节点总量或重复承担同项负荷。 | kg | 安装/替换/终止及各报告期 | 资产服务寿命与选定受益期间 | 全部真实消费者，不用无证据多场址均值 | 每 1 kg 参考流 | 资产供应/材料、维护、分配求和及截断审查 |
| `cp_assets_farm_harvest` | `farm_harvest` | 资本/替换及共享器具 | 材料与服务账 | 资产编号；组分/材料；质量；节点；安装；服务期；寿命/复用证据；替换；清洗；退休；占用/使用驱动量；资本截断依据；原始共享台账唯一编号；本节点实际份额；全部受益者核对 | 记录真实建造/替换材料及维护，向全部消费者/期间分配实测服务并核对总量；与能源交叉连接，不能重复运行；使用同一共享原始台账并独立核对本节点份额，不复制其他节点总量或重复承担同项负荷。 | kg | 安装/替换/终止及各报告期 | 资产服务寿命与选定受益期间 | 全部真实消费者，不用无证据多场址均值 | 每 1 kg 参考流 | 资产供应/材料、维护、分配求和及截断审查 |
| `cp_assets_live_conditioning` | `live_conditioning` | 资本/替换及共享器具 | 材料与服务账 | 资产编号；组分/材料；质量；节点；安装；服务期；寿命/复用证据；替换；清洗；退休；占用/使用驱动量；资本截断依据；原始共享台账唯一编号；本节点实际份额；全部受益者核对 | 记录真实建造/替换材料及维护，向全部消费者/期间分配实测服务并核对总量；与能源交叉连接，不能重复运行；使用同一共享原始台账并独立核对本节点份额，不复制其他节点总量或重复承担同项负荷。 | kg | 安装/替换/终止及各报告期 | 资产服务寿命与选定受益期间 | 全部真实消费者，不用无证据多场址均值 | 每 1 kg 参考流 | 资产供应/材料、维护、分配求和及截断审查 |
| `cp_assets_farm_dispatch` | `farm_dispatch` | 资本/替换及共享器具 | 材料与服务账 | 资产编号；组分/材料；质量；节点；安装；服务期；寿命/复用证据；替换；清洗；退休；占用/使用驱动量；资本截断依据；原始共享台账唯一编号；本节点实际份额；全部受益者核对 | 记录真实建造/替换材料及维护，向全部消费者/期间分配实测服务并核对总量；与能源交叉连接，不能重复运行；使用同一共享原始台账并独立核对本节点份额，不复制其他节点总量或重复承担同项负荷。 | kg | 安装/替换/终止及各报告期 | 资产服务寿命与选定受益期间 | 全部真实消费者，不用无证据多场址均值 | 每 1 kg 参考流 | 资产供应/材料、维护、分配求和及截断审查 |
| `cp_waste_managed_rearing` | `managed_rearing` | 死亡、淘汰、污泥、包装废品 | 称量及去向 | 材料；批次/事件；净/脱水/湿质量；含水率；废物组成；真实处理/处置方；用途；接收；日期；原始共享台账唯一编号；本节点实际份额；全部受益者核对 | 称量独立损失/固体/废品，匹配真实处理处置接收，区分活回养和可售品；使用同一共享原始台账并独立核对本节点份额，不复制其他节点总量或重复承担同项负荷。 | kg | 每次移除/损失/收集及期间核对 | 匹配批次/事件/期间 | 每个真实节点与处理方 | 每 1 kg 参考流 | 称重/含水及去向接收，不推定信用 |
| `cp_waste_farm_harvest` | `farm_harvest` | 死亡、淘汰、污泥、包装废品 | 称量及去向 | 材料；批次/事件；净/脱水/湿质量；含水率；废物组成；真实处理/处置方；用途；接收；日期；原始共享台账唯一编号；本节点实际份额；全部受益者核对 | 称量独立损失/固体/废品，匹配真实处理处置接收，区分活回养和可售品；使用同一共享原始台账并独立核对本节点份额，不复制其他节点总量或重复承担同项负荷。 | kg | 每次移除/损失/收集及期间核对 | 匹配批次/事件/期间 | 每个真实节点与处理方 | 每 1 kg 参考流 | 称重/含水及去向接收，不推定信用 |
| `cp_waste_live_conditioning` | `live_conditioning` | 死亡、淘汰、污泥、包装废品 | 称量及去向 | 材料；批次/事件；净/脱水/湿质量；含水率；废物组成；真实处理/处置方；用途；接收；日期；原始共享台账唯一编号；本节点实际份额；全部受益者核对 | 称量独立损失/固体/废品，匹配真实处理处置接收，区分活回养和可售品；使用同一共享原始台账并独立核对本节点份额，不复制其他节点总量或重复承担同项负荷。 | kg | 每次移除/损失/收集及期间核对 | 匹配批次/事件/期间 | 每个真实节点与处理方 | 每 1 kg 参考流 | 称重/含水及去向接收，不推定信用 |
| `cp_waste_farm_dispatch` | `farm_dispatch` | 死亡、淘汰、污泥、包装废品 | 称量及去向 | 材料；批次/事件；净/脱水/湿质量；含水率；废物组成；真实处理/处置方；用途；接收；日期；原始共享台账唯一编号；本节点实际份额；全部受益者核对 | 称量独立损失/固体/废品，匹配真实处理处置接收，区分活回养和可售品；使用同一共享原始台账并独立核对本节点份额，不复制其他节点总量或重复承担同项负荷。 | kg | 每次移除/损失/收集及期间核对 | 匹配批次/事件/期间 | 每个真实节点与处理方 | 每 1 kg 参考流 | 称重/含水及去向接收，不推定信用 |
| `cp_emissions_managed_rearing` | `managed_rearing` | 实际水物质和空气排放 | 监测或有记录的来源模型 | 具体形态/物质；元素/离子基准；浓度；实际排水质量/流量；接收介质；燃料/发动机；烟囱；因子/来源/版本；化石/生物拆分；期间；原始共享台账唯一编号；本节点实际份额；全部受益者核对 | 采样代表性真实出水或源特定空气监测，按匹配流量/浓度单位算负荷；缺测时仅用记录适用性的因子，披露不确定性及覆盖；使用同一共享原始台账并独立核对本节点份额，不复制其他节点总量或重复承担同项负荷。 | kg | 真实排水/燃料事件及代表性监测区间 | 匹配来源及报告日期 | 实际接收水或空气介质 | 每 1 kg 参考流 | 实验室方法/检出限、流量匹配、源特定因子依据、形态缺口 |
| `cp_emissions_farm_harvest` | `farm_harvest` | 实际水物质和空气排放 | 监测或有记录的来源模型 | 具体形态/物质；元素/离子基准；浓度；实际排水质量/流量；接收介质；燃料/发动机；烟囱；因子/来源/版本；化石/生物拆分；期间；原始共享台账唯一编号；本节点实际份额；全部受益者核对 | 采样代表性真实出水或源特定空气监测，按匹配流量/浓度单位算负荷；缺测时仅用记录适用性的因子，披露不确定性及覆盖；使用同一共享原始台账并独立核对本节点份额，不复制其他节点总量或重复承担同项负荷。 | kg | 真实排水/燃料事件及代表性监测区间 | 匹配来源及报告日期 | 实际接收水或空气介质 | 每 1 kg 参考流 | 实验室方法/检出限、流量匹配、源特定因子依据、形态缺口 |
| `cp_emissions_live_conditioning` | `live_conditioning` | 实际水物质和空气排放 | 监测或有记录的来源模型 | 具体形态/物质；元素/离子基准；浓度；实际排水质量/流量；接收介质；燃料/发动机；烟囱；因子/来源/版本；化石/生物拆分；期间；原始共享台账唯一编号；本节点实际份额；全部受益者核对 | 采样代表性真实出水或源特定空气监测，按匹配流量/浓度单位算负荷；缺测时仅用记录适用性的因子，披露不确定性及覆盖；使用同一共享原始台账并独立核对本节点份额，不复制其他节点总量或重复承担同项负荷。 | kg | 真实排水/燃料事件及代表性监测区间 | 匹配来源及报告日期 | 实际接收水或空气介质 | 每 1 kg 参考流 | 实验室方法/检出限、流量匹配、源特定因子依据、形态缺口 |
| `cp_emissions_farm_dispatch` | `farm_dispatch` | 实际水物质和空气排放 | 监测或有记录的来源模型 | 具体形态/物质；元素/离子基准；浓度；实际排水质量/流量；接收介质；燃料/发动机；烟囱；因子/来源/版本；化石/生物拆分；期间；原始共享台账唯一编号；本节点实际份额；全部受益者核对 | 采样代表性真实出水或源特定空气监测，按匹配流量/浓度单位算负荷；缺测时仅用记录适用性的因子，披露不确定性及覆盖；使用同一共享原始台账并独立核对本节点份额，不复制其他节点总量或重复承担同项负荷。 | kg | 真实排水/燃料事件及代表性监测区间 | 匹配来源及报告日期 | 实际接收水或空气介质 | 每 1 kg 参考流 | 实验室方法/检出限、流量匹配、源特定因子依据、形态缺口 |
| `cp_sales_live_conditioning` | `live_conditioning` | 独立其他活鱼销售 | 销售和等级 | 物种；等级；买方/用途；真实交付门；质量/尾数；价格、货币/日期；来源批次；原始共享台账唯一编号；本节点实际份额；全部受益者核对 | 追踪买方接收、实测产出及同期物种/等级价格，区分独立销售和留养鱼；使用同一共享原始台账并独立核对本节点份额，不复制其他节点总量或重复承担同项负荷。 | kg | 每次独立销售 | 匹配产出及报告期间 | 声明农场与真实买方门 | 每 1 kg 参考流 | 销售发票、产出称量、用途/门及分配证据 |
| `cp_sales_farm_dispatch` | `farm_dispatch` | 独立其他活鱼销售 | 销售和等级 | 物种；等级；买方/用途；真实交付门；质量/尾数；价格、货币/日期；来源批次；原始共享台账唯一编号；本节点实际份额；全部受益者核对 | 追踪买方接收、实测产出及同期物种/等级价格，区分独立销售和留养鱼；使用同一共享原始台账并独立核对本节点份额，不复制其他节点总量或重复承担同项负荷。 | kg | 每次独立销售 | 匹配产出及报告期间 | 声明农场与真实买方门 | 每 1 kg 参考流 | 销售发票、产出称量、用途/门及分配证据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `collected_period_attribution` | 所有清单行 | 保留运行/期间实测总量，按第7节直接/共享产出及期间份额归属，再以该产出批次最终验收活鱼净质量 kg 为分母，每个交换报告为每 1 kg 参考流。参考产出按定义为 1 kg；内部鱼保持实测转移及结转负担，不给产出信用。 | cp_stock_managed_rearing; cp_stock_farm_harvest; cp_stock_live_conditioning; cp_stock_farm_dispatch; 对应资源协议; 分配证据 | 每 1 kg 参考流数量及原始总量轨迹 | reference-definition |
| `stock_reconciliation` | 所有鱼行 | 按物种/阶段核对期初存量、外部进入、真实出生/生长及内部回养，与收获/销售、死亡/淘汰、逃逸及期末存量；尾数和质量账须披露生长/转换的不确定性差异，不能解释的不平衡须审查。 | cp_stock_managed_rearing; cp_stock_farm_harvest; cp_stock_live_conditioning; cp_stock_farm_dispatch; cp_sales_live_conditioning; cp_sales_farm_dispatch; cp_waste_managed_rearing; cp_waste_farm_harvest; cp_waste_live_conditioning; cp_waste_farm_dispatch | 已核对批次/期间存量及结转负担账 | |
| `water_reconciliation` | 所有水行 | 外部供水及取水与蒸发、储存变化、直接释放、处理出水及随货水平衡，内部水路流抵消；记录真实密度和去向，物质负荷与介质质量分开。 | cp_water_managed_rearing; cp_water_farm_harvest; cp_water_live_conditioning; cp_water_farm_dispatch; cp_energy_managed_rearing; cp_energy_farm_harvest; cp_energy_live_conditioning; cp_energy_farm_dispatch; cp_emissions_managed_rearing; cp_emissions_farm_harvest; cp_emissions_live_conditioning; cp_emissions_farm_dispatch | 已核对水路期间水及物质记录 | |
| `asset_share` | rearing_assets; harvest_gear; packing_materials | 按证据服务期间、消费者及真实使用/占用分配资产材料、替换/清洗负担，处置/替换只计一次；全部份额与分配总量核对，提前退休后更新。 | cp_assets_managed_rearing; cp_assets_farm_harvest; cp_assets_live_conditioning; cp_assets_farm_dispatch; cp_dispatch; 服务/期间证据 | 每 1 kg 参考流分配资产数量 | |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `identity_quality` | 所有交换 | 独立核实真实材料/服务/物质、属性、单位、状态/门、供应方/地理及去向；总类身份和缺失监测是明确缺口，不是具体 TIDAS 交换。 | 详情核实与真实供应商/接收记录 |
| `temporal_quality` | 所有节点 | 用一致事件编号覆盖繁殖/苗种/育成、连续收获、暂养、发运及留养鱼/资产期间，记录缺失及抽样期间。 | 批次/水路/期间账 |
| `measurement_quality` | 所有数量 | 校准表/秤、扣除容器皮重及活体称量，保留尾数转质量样本、单位/密度/组成基准及检出限。 | 协议证据及不确定性 |
| `completeness_quality` | 全部资源和损失 | 记录主要饲料/活饵、供水/取水、能源/热、实际处理、资产、存量、死亡、污泥、排放及全部预期产出；证明零值、截断及上游缺口。 | 资源/产出平衡及上游连接 |
| `screening_quality` | 所有范围 | 暂定0至宽上限范围是可替换推理筛查估算，不是经验绩效、合规限值或替代值；超出范围须审查证据，不裁剪或遗漏，可得时用审查后场址/来源证据替换。 | 原始值及审查解释；来源或采集证据 |
| `dq_inventory_completion` | 所有逐流清单完善要求 | 为每项实际物理或化学交换建立独立卡片，记录过程、方向、流类型、各自实测数量、原生单位、最终参考归一化、适用性、去向、UUID和独立范围证据。不得把集合总量、原集合筛选范围或一个UUID复制给所有子交换。仅有证据证明未发生时可记不适用；未知不等于零。适用责任未完成时，最终数据包不完整且校验失败。 | 逐流覆盖台账、原始计量、身份、去向和范围证据 |
| `dq_complete_rearing_feed` | `managed_rearing`; 输入; 产品流 | 必须辨认并分别采集“实际育成配合饲料或活饵”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按组成/供应者区分实际配合料、外购活饵和场内活饵生产；记录供应/使用/残余及收到态/干基；天然池塘饵料披露但不虚构为外购料。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：从 `cp_rearing` 获取分配后的实测 kg；按采集期间归属折算至每 1 kg 参考流 数值来源模式：前景记录（`foreground_record`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集记录（`collected_record`） 采集协议：`cp_rearing` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_rearing_fuel` | `managed_rearing`; 输入; 产品流 | 必须辨认并分别采集“实际现场养殖燃料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：实际锅炉/发电机用料时启用，记录具体燃料、消耗质量、设备与热值，并纳入对应空气排放；购买热能须另有供应商能量交换，不虚构燃料。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：从 `cp_energy_managed_rearing` 获取分配后的实测 kg；按采集期间归属折算至每 1 kg 参考流 数值来源模式：前景记录（`foreground_record`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集记录（`collected_record`） 采集协议：`cp_energy_managed_rearing` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_rearing_treatments` | `managed_rearing`; 输入; 产品流 | 必须辨认并分别采集“实际养殖、隔离与水路清洗材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：实际盐、消毒剂、兽药、滤材或水质调节品时启用；按具体产品/组成及用途拆分，必要时记录当前当地授权及排放/残余去向，不规定药物方案。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：从 `cp_materials_managed_rearing` 获取分配后的实测 kg；按采集期间归属折算至每 1 kg 参考流 数值来源模式：前景记录（`foreground_record`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集记录（`collected_record`） 采集协议：`cp_materials_managed_rearing` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_rearing_assets` | `managed_rearing`; 输入; 产品流 | 必须辨认并分别采集“分配的养殖资产与替换材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：记录真实池塘/水槽/建筑/泵/生物过滤器建造与替换清单、服务期及全部节点；按组成展开材料总类，能源/服务负担仍由各自行记录。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：从 `cp_assets_managed_rearing` 获取分配后的实测 kg；按采集期间归属折算至每 1 kg 参考流 数值来源模式：前景记录（`foreground_record`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集记录（`collected_record`） 采集协议：`cp_assets_managed_rearing` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_rearing_withdrawal` | `managed_rearing`; 输入; 基本流 | 必须辨认并分别采集“实际天然水源直接取水”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：直接取水时启用，拆分地下水/地表水/海水资源身份及集水区；取水/处理能源纳入对应实测行，同水路复用不算新增取水。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：从 `cp_water_managed_rearing` 获取分配后的实测 kg；按采集期间归属折算至每 1 kg 参考流 数值来源模式：前景记录（`foreground_record`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集记录（`collected_record`） 采集协议：`cp_water_managed_rearing` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_rearing_water_substances` | `managed_rearing`; 输出; 基本流 | 必须辨认并分别采集“向特定水介质排出的实际监测养殖物质”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：实际物质总类，按氨/铵/硝酸盐/磷酸盐或其他真实监测形态展开独立交换，区分元素/离子基准及淡水/海水介质；缺测是缺口而非零。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：从 `cp_emissions_managed_rearing` 获取分配后的实测 kg；按采集期间归属折算至每 1 kg 参考流 数值来源模式：前景记录（`foreground_record`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集记录（`collected_record`） 采集协议：`cp_emissions_managed_rearing` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_rearing_air_emissions` | `managed_rearing`; 输出; 基本流 | 必须辨认并分别采集“实际养殖燃烧或处理的空气排放”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：实际来源时启用，展开实测/建模具体物质及烟囱/空气介质，包含现场供热/发电；识别燃料/发动机、因子覆盖及生物/化石基准，不设通用因子。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：从 `cp_emissions_managed_rearing` 获取分配后的实测 kg；按采集期间归属折算至每 1 kg 参考流 数值来源模式：前景记录（`foreground_record`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集记录（`collected_record`） 采集协议：`cp_emissions_managed_rearing` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_harvest_bait` | `farm_harvest`; 输入; 产品流 | 必须辨认并分别采集“实际收获笼具诱饵”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅实际带饵笼捕时启用，记录配制/活体诱饵使用、残余去向与上游来源；不得重复计已纳入 rearing_feed 的饵。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：从 `cp_harvest` 获取分配后的实测 kg；按采集期间归属折算至每 1 kg 参考流 数值来源模式：前景记录（`foreground_record`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集记录（`collected_record`） 采集协议：`cp_harvest` 来源：`uf-ifas-harvest-fa117` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_harvest_fuel` | `farm_harvest`; 输入; 产品流 | 必须辨认并分别采集“实际收获与场内转运燃料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：燃料泵/车辆实际运行时启用，记录具体燃料质量、设备与事件，并对应燃烧排放；本卡不含下游送货运输。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：从 `cp_energy_farm_harvest` 获取分配后的实测 kg；按采集期间归属折算至每 1 kg 参考流 数值来源模式：前景记录（`foreground_record`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集记录（`collected_record`） 采集协议：`cp_energy_farm_harvest` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_harvest_gear` | `farm_harvest`; 输入; 产品流 | 必须辨认并分别采集“分配的收获器具与转运容器材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：真实笼/网/分级器或车辆/容器材料分配、替换与复用；共享器具按事件/期间仅分配一次，不按每次收获全额计入。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：从 `cp_assets_farm_harvest` 获取分配后的实测 kg；按采集期间归属折算至每 1 kg 参考流 数值来源模式：前景记录（`foreground_record`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集记录（`collected_record`） 采集协议：`cp_assets_farm_harvest` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_harvest_withdrawal` | `farm_harvest`; 输入; 基本流 | 必须辨认并分别采集“收获转运实际天然取水”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅本节点实际新增天然取水启用，记录资源/集水区及数量；养殖阶段已取介质水为配对内部转移，不再计取水。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：从 `cp_water_farm_harvest` 获取分配后的实测 kg；按采集期间归属折算至每 1 kg 参考流 数值来源模式：前景记录（`foreground_record`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集记录（`collected_record`） 采集协议：`cp_water_farm_harvest` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_harvest_water_substances` | `farm_harvest`; 输出; 基本流 | 必须辨认并分别采集“排至特定水介质的实际收获物质”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按排水或介质水的采样/流量记录展开真实实测形态，不能从定性风险描述虚构氨、硫化氢或悬浮固体。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：从 `cp_emissions_farm_harvest` 获取分配后的实测 kg；按采集期间归属折算至每 1 kg 参考流 数值来源模式：前景记录（`foreground_record`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集记录（`collected_record`） 采集协议：`cp_emissions_farm_harvest` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_harvest_air_emissions` | `farm_harvest`; 输出; 基本流 | 必须辨认并分别采集“实际收获与场内车辆燃烧排放”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：实际燃料燃烧时启用，采用设备特定监测或已记录因子展开物质/空气介质，与 harvest_fuel 及共享设备分配一致。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：从 `cp_emissions_farm_harvest` 获取分配后的实测 kg；按采集期间归属折算至每 1 kg 参考流 数值来源模式：前景记录（`foreground_record`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集记录（`collected_record`） 采集协议：`cp_emissions_farm_harvest` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_conditioning_fuel` | `live_conditioning`; 输入; 产品流 | 必须辨认并分别采集“实际现场暂养或清洗燃料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：真实燃料暂养/清洗供热或设备运行时启用，记录具体燃料质量、设备与相关热值，并匹配真实燃烧空气排放；不重复电加热。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：从 `cp_energy_live_conditioning` 获取分配后的实测 kg；按采集期间归属折算至每 1 kg 参考流 数值来源模式：前景记录（`foreground_record`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集记录（`collected_record`） 采集协议：`cp_energy_live_conditioning` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_conditioning_feed` | `live_conditioning`; 输入; 产品流 | 必须辨认并分别采集“活体暂养的实际饲料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：真实暂养期投饵时启用，记录实际产品/活饵类型、数量及残余；停食依据实际记录，不作强制规定。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：从 `cp_conditioning` 获取分配后的实测 kg；按采集期间归属折算至每 1 kg 参考流 数值来源模式：前景记录（`foreground_record`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集记录（`collected_record`） 采集协议：`cp_conditioning` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_conditioning_treatments` | `live_conditioning`; 输入; 产品流 | 必须辨认并分别采集“实际暂养处理与清洗材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：真实配方处理剂/消毒剂/水质调节品时启用，记录组成、用途、相关当前授权及废弃去向；历史药物剂量不是本 PCR 默认值。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：从 `cp_materials_live_conditioning` 获取分配后的实测 kg；按采集期间归属折算至每 1 kg 参考流 数值来源模式：前景记录（`foreground_record`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集记录（`collected_record`） 采集协议：`cp_materials_live_conditioning` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_conditioning_withdrawal` | `live_conditioning`; 输入; 基本流 | 必须辨认并分别采集“暂养实际天然取水”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：井/地表/海水实际新增进入暂养水路时启用；声明真实资源、来源及数量，纳入泵/处理，内部回水不重复。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：从 `cp_water_live_conditioning` 获取分配后的实测 kg；按采集期间归属折算至每 1 kg 参考流 数值来源模式：前景记录（`foreground_record`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集记录（`collected_record`） 采集协议：`cp_water_live_conditioning` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_other_live_sales` | `live_conditioning`; 输出; 产品流 | 必须辨认并分别采集“在声明交付门实际销售的其他物种或等级”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：真实独立销售时启用，逐项枚举物种/等级/用途、买方、门、数量及价格；非观赏销售为需独立身份的联产品，不是观赏参考产出。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：从 `cp_sales_live_conditioning` 获取分配后的实测 kg；按采集期间归属折算至每 1 kg 参考流 数值来源模式：前景记录（`foreground_record`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集记录（`collected_record`） 采集协议：`cp_sales_live_conditioning` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_conditioning_air_emissions` | `live_conditioning`; 输出; 基本流 | 必须辨认并分别采集“实际活鱼暂养燃烧或处理的空气排放”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：现场真实燃料/处理来源时启用，逐项展开监测或有证据模型物质，记录烟囱/空气介质、化石/生物基准及适用因子，连接 conditioning_fuel 或真实处理记录。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：从 `cp_emissions_live_conditioning` 获取分配后的实测 kg；按采集期间归属折算至每 1 kg 参考流 数值来源模式：前景记录（`foreground_record`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集记录（`collected_record`） 采集协议：`cp_emissions_live_conditioning` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_conditioning_water_substances` | `live_conditioning`; 输出; 基本流 | 必须辨认并分别采集“暂养排至特定水介质的实际物质”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：逐项展开实测物质/形态及真实淡水/海水接收介质；处理残余须有组成与去向，不列未分化药物排放。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：从 `cp_emissions_live_conditioning` 获取分配后的实测 kg；按采集期间归属折算至每 1 kg 参考流 数值来源模式：前景记录（`foreground_record`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集记录（`collected_record`） 采集协议：`cp_emissions_live_conditioning` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_packing_materials` | `farm_dispatch`; 输入; 产品流 | 必须辨认并分别采集“实际袋、箱及复用发运容器材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：实际包装组分时启用，按组成展开聚合物袋、保温箱、外箱、扎带/标签或罐材料，分别记录随货包装、场内废品、复用/损失及清洗。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：从 `cp_dispatch` 获取分配后的实测 kg；按采集期间归属折算至每 1 kg 参考流 数值来源模式：前景记录（`foreground_record`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集记录（`collected_record`） 采集协议：`cp_dispatch` 来源：`uf-ifas-shipping-fa120` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_packing_additives` | `farm_dispatch`; 输入; 产品流 | 必须辨认并分别采集“实际活鱼发运水添加剂”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：真实使用配方材料时启用，记录组成/相关当前授权及最终去向；历史建议不能证明真实使用。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：从 `cp_materials_farm_dispatch` 获取分配后的实测 kg；按采集期间归属折算至每 1 kg 参考流 数值来源模式：前景记录（`foreground_record`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集记录（`collected_record`） 采集协议：`cp_materials_farm_dispatch` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_packing_thermal_materials` | `farm_dispatch`; 输入; 产品流 | 必须辨认并分别采集“实际发运冷却或加热包材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：真实凝胶/加热包等热材料时启用，记录组成、质量、复用及生产负担；不得从其他产品类别推定冰冷却或冻结活鱼。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：从 `cp_dispatch` 获取分配后的实测 kg；按采集期间归属折算至每 1 kg 参考流 数值来源模式：前景记录（`foreground_record`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集记录（`collected_record`） 采集协议：`cp_dispatch` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_dispatch_withdrawal` | `farm_dispatch`; 输入; 基本流 | 必须辨认并分别采集“活鱼发运实际天然取水”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：包装/清洗实际新增天然取水时启用，记录真实来源/资源及实测质量；暂养带入水为内部转移，不再作新取水。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：从 `cp_water_farm_dispatch` 获取分配后的实测 kg；按采集期间归属折算至每 1 kg 参考流 数值来源模式：前景记录（`foreground_record`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集记录（`collected_record`） 采集协议：`cp_water_farm_dispatch` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_packing_rejects` | `farm_dispatch`; 输出; 废物流 | 必须辨认并分别采集“农场内发运包装废品”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：实际破损/废弃包装送已记录回收/处置；随鱼出场包装不是场内废物。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：从 `cp_waste_farm_dispatch` 获取分配后的实测 kg；按采集期间归属折算至每 1 kg 参考流 数值来源模式：前景记录（`foreground_record`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集记录（`collected_record`） 采集协议：`cp_waste_farm_dispatch` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_dispatch_water_substances` | `farm_dispatch`; 输出; 基本流 | 必须辨认并分别采集“发运准备排至特定水介质的真实物质”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按清洗/溢流水真实实测组成展开具体物质和接收介质，组成不明是数据缺口，不可假定为零。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：从 `cp_emissions_farm_dispatch` 获取分配后的实测 kg；按采集期间归属折算至每 1 kg 参考流 数值来源模式：前景记录（`foreground_record`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集记录（`collected_record`） 采集协议：`cp_emissions_farm_dispatch` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |

## 9. 验证规则

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | 参考产品 | 须具人工养殖来源、观赏活鳍鱼用途、物种、等级和实际农场发运门；拒绝以野生暂养、食用/非鱼或保存产品替代。 | un-cpc30-ornamental |
| `validate_reference` | farmed_ornamental_dispatch | 恰有一个最终产出行连接参考，1 kg 为活体净质量且具尾数/等级/健康限定；中间品、亲鱼、水/包装质量不得替代参考。 | reference-definition |
| `validate_route` | managed_rearing | 须有当前场址/水路证明池塘/水槽/RAS、苗种/亲鱼来源及生物/技术差异；拒绝仅改标签、同水路同期不兼容的一次通过/循环主张，或实际加热/处理/固体清除缺证。 | uf-ifas-ras-fa099 |
| `validate_transfer` | 所有鱼行 | 内部转移/回养须匹配批次/时间/阶段及实测数量并在汇总抵消；存量与观测生长、全部收获、损失、回养及亲鱼留养核对。 | |
| `validate_inventory` | 所有节点 | 须具真实苗种/饲料上游负担、水源/水路、电力/燃料/热、资产、处理及损失；燃料行须对应真实燃烧物质及证据；直接排水须有介质及真实监测物质/形态或明确缺口。 | |
| `validate_mode_period` | 所有节点 | 核实批次/连续索引、期初期末/留养、繁殖和资产阶段、清洗/切换、替换/终止及相关期间份额，未解决归属阻止最终数据生产。 | |
| `validate_allocation` | 所有预期产出及共享消费者 | 枚举全部销售物种/等级、真实交付及方法证据，核实直接分配后因果/经济剩余、存量结转与共享资产/表份额；不得重复负担或推定联产品信用。 | |
| `validate_identity` | 所有流卡 | 固定 UUID 须符合独立核实的真实类型、属性/单位、阶段/门、地理/供应方与去向；最终农场门 UUID 不标识幼鱼、亲鱼或收获前存量；中国低压身份不覆盖未定供电，含歧义氧身份保留待核实。 | |
| `validate_evidence` | 全部范围及处理 | 区分暂定估算、采集数量和来源证据，零条件交换须有未发生记录；实际使用相关处理时需当前授权依据，不认可历史剂量/法律陈述。 | |
| `validate_profile` | 下游数据集 | 声明全部必需限定、不确定性、截断、上游/身份/监测缺口及匹配门/时间；技术检查本身不验证具体交换、真实农场平衡或发布准备。 | |
| `validate_inventory_completion` | 所有具体交换及第8节逐流完善责任 | 核查每项适用 dq_complete 责任均已形成独立实测且身份核实的交换卡；逐项确认数量、原生单位、Range证据、归一化、接收介质、去向和不重复归属。任一实际子交换、数量、身份或去向未落实均使最终数据包不完整并校验失败；未知不得填零。静态PCR检查不能替代这些证据。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset; secondary_dataset; background_dataset |
| downstream_use | 供已声明物种、等级、路线、期间及门使用的前景农场生产数据包及其 process/lifecyclemodel 下游投影 |
| allowed_use | 供兼容供应商/地理/状态使用的、至实际农场发运门的养殖观赏活鳍鱼，披露存量/资产归属 |
| excluded_use | 野生暂养鱼、食用/放养/饵料品、非鱼观赏、水族/零售展示、下游分销存活或加工、无证据物种/等级服务等效及法规合规推断 |
| required_metadata | 全部参考限定；节点/水路/批次编号；真实供应商/接收方；日期/门；产出/存量；路线差异；分配与结转期间/资产账；具体交换核实 |
| required_quality_disclosure | 测量/校准/转换不确定性；代表性；截断；上游缺口；身份/监测/形态未决；分配敏感性；范围证据状态 |
| update_trigger | 物种/等级、繁殖/苗种供应商、路线/水路、存量/存活、饲料、水源/处理、电力/热/供应商、共享资产/替换、报告模式或实际交付门变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc30-ornamental | official_guidance | 联合国 CPC 3.0 解释说明，2025-06-30，第40页：https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf；检索日期 2026-10-09 | 养殖观赏活鳍鱼分类及排除语境，不提供过程数量 |
| uf-ifas-harvest-fa117 | extension_guidance | UF/IFAS, Harvesting Ornamental Fish From Ponds, FA117：https://ask.ifas.ufl.edu/publication/FA117；检索日期 2026-10-09 | 定性收获责任及部分/批次收获语境，不移用默认产率 |
| uf-ifas-grading-fa118 | extension_guidance | UF/IFAS, Grading Ornamental Fish, FA118：https://ask.ifas.ufl.edu/publication/FA118；检索日期 2026-10-09 | 定性等级与销售/留养/淘汰区别 |
| uf-ifas-onfarm-transport-fa119 | extension_guidance | UF/IFAS, On-Farm Transport of Ornamental Fish, FA119：https://ask.ifas.ufl.edu/publication/FA119；检索日期 2026-10-09 | 定性场内转运水、容器及氧/运输责任 |
| uf-ifas-shipping-fa120 | extension_guidance | UF/IFAS, Preparation of Ornamental Fish for Shipping, FA120：https://ask.ifas.ufl.edu/publication/FA120；检索日期 2026-10-09 | 仅定性暂养/包装及真实交付责任；不规定剂量、现行法律或热性能因子 |
| uf-ifas-ras-fa099 | extension_guidance | UF/IFAS, Fish Health Management Considerations in Recirculating Aquaculture Systems—Part 1, FA099：https://ask.ifas.ufl.edu/publication/FA099；检索日期 2026-10-09 | 定性繁殖/育成/暂养及水复用/过滤差异；具体拓扑须用真实场址证据 |
| reference-definition | method_factor | 本 PCR 第3、4、8节：声明的 1 kg 农场发运活体净质量参考 | 参考数量 1–1 kg 及归一化定义，不是生物生产绩效范围 |
| ghg-product-standard | standard | GHG Protocol, Product Life Cycle Accounting and Reporting Standard，第9章：https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf；检索日期 2026-10-09 | 细分、因果分配及经济后备的方法政策，不提供绩效因子 |
