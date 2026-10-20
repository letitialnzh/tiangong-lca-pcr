---
pcr_id: pcr.existing-sewage-treatment-plant-calcium-aluminate-wet-spray-concrete-lining-rehabilitation-services
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
---

# 既有污水处理厂混凝土构筑物铝酸钙湿喷衬里修复服务

## 1. 范围与适用性

本类别适用于既有污水处置/处理厂内一座湿井或池室遭酸侵蚀的混凝土内表面，一次有明确边界的低压湿喷衬里修复。经批准的单组分预混干料同时含铝酸钙水泥和铝酸钙骨料，仅与清洁水混合，喷涂于已验收的保留完好混凝土基面，养护后作为合格耐酸衬里移交。证据路线为英国Sika MonoTop-4400 MIC体系，不能用普通硅酸盐水泥砂浆替代。保留基体为母体状态；独立验收的保护衬里为表面处理责任。准备、逐批混合、喷涂、修整和养护属于该一体化责任，不另外建立独立砂浆制造产出。

排除厂外本地污水干管/检查井、新建厂/池、生物反应池和消化池（2025采用方法明确禁用）、深度结构重建/重塑、新增或更换钢筋/钢网、干喷/离心/仅手工路线、仅聚合物涂层及后续污水处理运行。调查若发现必须进行本子集排除的结构重建、渗水注浆或换筋，应停止按此子集建模，先扩大并审查实际范围，不得将必要工作藏于平衡之外。专业施工者及授权业主/工程师确定适用性、环境控制和实际批准规程。[`sika-4400-uk-pds-2021`; `sika-4400-uk-method-2025`]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.existing-sewage-treatment-plant-calcium-aluminate-wet-spray-concrete-lining-rehabilitation-services |
| classification_refs | CPC 3.0 54253；较窄的施工服务子集 |
| covered_products | 既有污水处理厂内保留混凝土池室已验收的铝酸钙湿喷耐酸衬里修复 |
| excluded_products | 新建厂/池；生物反应池/消化池；厂外污水干管/检查井；深度重建；换筋/钢网；干喷/离心/仅手工施工；后续处理运行 |
| representative_product | 既有厂内湿井，保留经酸污染去除并合格的完好混凝土，配置批准且养护合格的铝酸钙湿喷衬里 |
| production_route | 隔离/导流/排水与进入；酸损混凝土去除及基面验收；SSD；清洁设备/润泵料；干料加水逐批混合；低压湿喷和修整；必要养护/硬化剂；检测、缺陷闭环和签字验收 |
| market_state | 厂方移交时已经完成、养护并批准的衬里服务，保留实际授权恢复接触污水条件 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| what | 既有污水处理厂混凝土池室经验收的内部铝酸钙湿喷衬里修复 |
| how_much | 1 m2 唯一净展开验收衬里面积 A |
| how_well | 实际批准材料/体系、实测厚度和分层、基面及pH验收、完整养护/硬化、粘结/表面/几何检测和业主签字验收 |
| how_long_or_cycle | 一次完整修复批次至最终验收移交，包括所有失败尝试及重复清洁/养护/检测；披露结转库存及共用资产制造、维护、更换和寿命终结的所有期间；不假定服务寿命 |
| reference_flow_link | `accepted_lining` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 既有污水处理厂混凝土池室经验收的铝酸钙湿喷衬里修复 |
| 参考流属性 | Area `93a60a56-a3c8-19da-a746-0800200c9a66` |
| 参考单位组 | 面积单位组 `93a60a57-a3c8-18da-a746-0800200c9a66` |
| 参考单位 | m2 |
| 必需限定信息 | 厂和池室ID/功能；非生物反应池/消化池资格；保留混凝土/钢筋状态；酸暴露；批准预混料SKU/本地规程；pH方法/标准/结果；SSD；净展开面积测量/孔洞/侧壁；厚度/体积/分层分布；方向；批/喷涂运行ID；水料比；设备和污染控制；环境/湿度/通风；养护/硬化剂及硬化标准/结果；粘结/几何/表面检测；缺陷闭环；授权恢复接触污水条件；签字验收；报告/资产期间 |

## 4. 计量与单位规则

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| `area_basis` | 参考产品 | Area `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | A为cp_acceptance测得的唯一、正值、最终验收净展开面积。扣除孔洞，实有侧壁只计一次，去除重叠和不合格部分；分层、喷涂遍数、尝试和回弹不得放大A。零面积或缺少验收不得生成合格产出。 |
| `batch_water_ratio` | `premix`; `mix_water` | 实际干粉Mass及混合水Volume | kg; L; m3 | 采用英国20kg预混料规程时，各20kg干粉批加2.8-3.2L清洁水；按现行批准规程核验实际批干粉/水和稠度。实测升数/1000换成m3。这是共同投入的配料约束，不是每验收面积数量范围。 |
| `material_states` | `premix`; `mix_water`; `accepted_lining` | 按状态保留实际Mass、Volume、Area | kg; m3; m2 | 区分干粉、混合加水、全部新拌料及固化后安装材料。测量实际厚度分布/安装几何；密度/产率换算必须对应具体产品、状态、温度和来源。不得用新拌密度推定固化质量，也不得用购入干粉和假定密度反推A。 |
| `native_units` | 所有清单行 | 实际供应或发运原生属性 | 实际兼容单位 | 保留每个SKU的Mass/Count/Length/Area/Volume台账及同单位退回；仅在独立需要时用实际证据换算。电力/时间/服务支持应分别核验，不得以燃料热值或Count替代Energy或Time。 |
| `count_unit_alias` | 存在时的计数交换 | Count | item | 本 PCR 的显示别名 item 表示已核实的物品数量单位组参考单位 Item(s)，系数为 1。具体数据集须保留实际参考单位身份；此书写别名不建立质量、面积或服务之间的等价关系。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已识别的既有厂内酸侵蚀混凝土池室、保留基体/钢筋状态和授权修复范围；隔离/导流/排水/进入属于有明确责任的实际前景工作 |
| starting_condition_role | 既有基体状态接口，不重复购入保留混凝土/钢筋，不虚构避免更换抵扣 |
| product_classification_scope | 污水处理厂施工服务中较窄的湿喷衬里修复子集 |
| recursive_input_rule | 同类别真正有边界的分包投入只有具备完成资源/结果证据及明确上游覆盖时才停止递归；保留服务商承担的资源，避免与直接清单重叠 |
| upstream_dataset_requirement | 实际预混料/耗材/燃料/水/公用工程/运输/服务/资产供应必须匹配上游负担，并在构建最终数据集前核验具体交换标识 |
| disclosure | 基体状态和排除的结构工作；实际承包商；库存与对外退回；全部尝试；物料状态；导流/残余物去向；验收证据；资产寿命和证据缺口 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `qualified_parent` | `lining` | 纳入授权隔离、污水导流、清淤/排水、收集围护、受限空间进入/通风和实际保留钢筋清理。去除酸损/疏松材料至完好粗糙混凝土，检查包括准备作业造成的微裂纹/脱层，并取得必要专业同意。采用英国V7时施工前基面pH必须>=10：保留实测位置、粉尘/蒸馏水/试纸方法及结果；不合格时重复去除/检测。替代体系需书面专业批准及其实际标准；未知不等于零或通过。重大重建/换筋/换钢网阻断本子集。 | `sika-4400-uk-pds-2021`; `sika-4400-uk-method-2025` |
| `wet_spray_system` | `lining` | SSD预湿不得有积水或干燥。预混料和设备不得受普通硅酸盐水泥污染；使用实际兼容铝酸钙浆或批准化学润泵料，纳入其投入及废弃启动排料。仅加入清洁水，逐批检查稠度/适用期，并遵循实际分层/顶面/接缝/厚度控制。采用英国V7时较大湿井/池室至少25mm；该来源特定要求不是通用分母厚度。不得额外加入普通硅酸盐水泥、骨料或修整用水。 | `sika-4400-uk-pds-2021`; `sika-4400-uk-method-2025` |
| `cure_handoff` | `lining` | 纳入必要湿养护、安全通风下环境/失水缓解，以及实际使用的兼容批准表面硬化剂。英国V7在低湿/强气流下规定至少8-12h湿养护；其接触污水前硬化通常约12h、条件性6-9h硬化及硬化剂后约1h且中等缓慢水流的说法，不能作为可互换通用计时。以实际批准养护/硬化状态证据、必要粘结/表面/几何检测及签字授权恢复接触污水控制。小型在役检查井仅关盖的例外不适用本隔离厂内池室。 | `sika-4400-uk-pds-2021`; `sika-4400-uk-method-2025` |
| `all_resources` | 所有清单行 | 纳入实际准备、pH检测、PPE/围护、SSD、润泵料、定期料斗/喷嘴/转子/泵/软管清洁、冷却、养护、检测、返工、燃料/公用工程、运输及服务商承担的资源。常规与事故残余物和实际物种/介质排放须有责任。共用泵/压缩机/搅拌机/进入工具完整制造、维护、更换及寿命终结负担跨所有作业/节点/期间分摊。实际不存在须有证据，未知资源不得省略。 | `sika-4400-uk-pds-2021`; `sika-4400-uk-method-2025` |
| `supply_stock` | 材料和燃料投入; `return_mass`; `return_count`; `return_length`; `return_area`; `return_volume` | 各实际SKU及原生单位的归属供应量=期初归属库存+扣皮重的外部毛收货-期末结转库存。内部领用不算新采购；期末保留/回收库存不是对外退回。毛供应带出口法保留实际可用对外退回一次；净耗用法仅扣除匹配可用退回及其上游负担一次，不再给第二次退回抵扣。不退回的废物和未收集损失仍承担上游供应负担。最终保留/使用、退回、废物及排放出口互斥；湿混料/使用中间活动不可相加。 | |
| `fuel_and_releases` | `fuel`; `species_release` | 上游燃料包括燃烧及所有归属且未退回的废物/损失，不仅是燃烧量。单独闭合期初+收货=期末+燃烧+可用退回+未燃烧废物+未收集损失。总泄漏量仅审计；已回收并计入期末的泄漏不另计损失。整股污水/水/气物理平衡与物种/介质基本流视图不可相加；捕集、废物、库存和退回从排放中排除一次。H2S安全监测/SDS/不存在声明不能虚构排放量。 | |
| `boundary_atomic_completion` | 所有过程 | 本节的采集要求是必须执行的采集与适用性指令，不是聚合清单交换。完成前景数据集前，必须为每一种实际产品、废物流、物质及环境子区室建立独立原子流卡／交换。保留全部实际事件、上游负荷、退回及原生单位；所链接公式应按每个兼容身份分别执行。环境资源提取记为输入，环境释放记为输出。不得相加不同原生单位、用一个 UUID 代表整个采集池、将缺记录解释为零，或与已有具体卡重复计入。保留宿主的文件性接口仅传递状态，不形成新采购资产。适用成员未明确或未有证据证明不存在时，定量清单仍不完整；非强制筛查提示不能补造数量或化学组成。 |  |

### 条件性清单补全要求

以下标识符表示采集池或文件性状态台账。一个池可能有零个、一个或多个实际成员。须依据真实记录判断适用性，并为每个成员保留原有数量方法和采集协议；只有兼容的数量才能共同核对。下列原有可选筛查区间仅作为暂定复核提示，不得强加于不同材料或混合采集池。

#### 采集要求：兼容喷泵润泵料 (`starter`)

过程／待建立交换的方向／类型：`lining` / `inputs` / `product`.

工厂润泵料和现场浆组分择一记录，混水计入process_water；记录至砂浆正确稠度前的废弃启动排料。

- 采集对象：实际批准铝酸钙浆组分或兼容化学润泵剂
- 流属性/单位：Mass / kg
- 数量规则：实际归属原生数量 kg / A
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m2 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_starter`
- 来源：`sika-4400-uk-pds-2021`; `sika-4400-uk-method-2025`

范围证据需求：每次润泵及软管/系统证据支持实际兼容润泵料kg/m2，不得用普通硅酸盐水泥浆。

#### 采集要求：按质量供应的实际耗材 (`consumable_mass`)

过程／待建立交换的方向／类型：`lining` / `inputs` / `product`.

条件性角色按各真实SKU展开，使用匹配原生单位库存/出口台账；工厂产品已包含的组分不重复购入。可重复使用资产仅计入asset_share。

- 采集对象：按质量计量的实际pH试剂、清洁/喷砂材料、PPE、围护、小量兼容密封/保护及包装
- 流属性/单位：Mass / kg
- 数量规则：实际归属原生数量 kg / A
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m2 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_consumable_mass`
- 来源：`sika-4400-uk-pds-2021`; `sika-4400-uk-method-2025`

范围证据需求：实际SKU kg/m2分布需作业和用途性能证据；不存在须有记录。

#### 采集要求：按件数供应的实际耗材 (`consumable_count`)

过程／待建立交换的方向／类型：`lining` / `inputs` / `product`.

条件性角色按各真实SKU展开，使用匹配原生单位库存/出口台账；工厂产品已包含的组分不重复购入。可重复使用资产仅计入asset_share。

- 采集对象：按件供应的实际海绵球、替换喷嘴、检测物品及耗材
- 流属性/单位：Count / item
- 数量规则：实际归属原生数量 item / A
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m2 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_consumable_count`
- 来源：`sika-4400-uk-pds-2021`; `sika-4400-uk-method-2025`

范围证据需求：实际SKU item/m2分布需作业和用途性能证据；不存在须有记录。

#### 采集要求：按长度供应的实际耗材 (`consumable_length`)

过程／待建立交换的方向／类型：`lining` / `inputs` / `product`.

条件性角色按各真实SKU展开，使用匹配原生单位库存/出口台账；工厂产品已包含的组分不重复购入。可重复使用资产仅计入asset_share。

- 采集对象：按长度供应的实际耗用胶带、临时软管或保护材料
- 流属性/单位：Length / m
- 数量规则：实际归属原生数量 m / A
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m2 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_consumable_length`
- 来源：`sika-4400-uk-pds-2021`; `sika-4400-uk-method-2025`

范围证据需求：实际SKU m/m2分布需作业和用途性能证据；不存在须有记录。

#### 采集要求：按面积供应的实际耗材 (`consumable_area`)

过程／待建立交换的方向／类型：`lining` / `inputs` / `product`.

条件性角色按各真实SKU展开，使用匹配原生单位库存/出口台账；工厂产品已包含的组分不重复购入。可重复使用资产仅计入asset_share。

- 采集对象：按面积供应的实际一次性薄膜、遮盖及保护材料
- 流属性/单位：Area / m2
- 数量规则：实际归属原生数量 m2 / A
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m2 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_consumable_area`
- 来源：`sika-4400-uk-pds-2021`; `sika-4400-uk-method-2025`

范围证据需求：实际SKU m2/m2分布需作业和用途性能证据；不存在须有记录。

#### 采集要求：修复设备直接燃料 (`fuel`)

过程／待建立交换的方向／类型：`lining` / `inputs` / `product`.

实际发动机/发电机存在时纳入；供应与燃烧活动不同，未退回泄漏/废弃燃料保留上游负担。独立质量视图需要时保留实测液体体积及实际密度。

- 采集对象：实际组成和供应状态的燃料
- 流属性/单位：Mass / kg
- 数量规则：实际归属原生数量 kg / A
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m2 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel`

范围证据需求：实际燃料kg/m2、密度/状态及库存/燃烧/出口证据；不得假定通用燃烧比例。

#### 采集要求：归属修复运输 (`freight`)

过程／待建立交换的方向／类型：`lining` / `inputs` / `product`.

包括预混料/设备/耗材及声明交付/处置范围内对外可用退回和废物运输；车辆运行与服务商货运不得重叠。

- 采集对象：按实际路线和负载的货运服务
- 流属性/单位：mass*distance / kg*km
- 数量规则：实际归属原生数量 kg*km / A
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m2 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freight`

范围证据需求：每路线实际装载质量、距离、车型/利用率和空驶证据，不设通用运距。

#### 采集要求：有明确边界的分包服务 (`provider`)

过程／待建立交换的方向／类型：`lining` / `inputs` / `product`.

真正有边界且具备资源/结果/上游覆盖的导流/排水/清淤/进入/清洁/检测/废物处理服务；价格或小时不是Count。分别展开实际服务，不省略服务商承担的资源。

- 采集对象：经核验原生单位的实际已完成修复支持服务
- 流属性/单位：实际原生服务属性 / 实际兼容单位
- 数量规则：实际归属原生数量（实际兼容单位）/ A
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m2 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_provider`
- 来源：`sika-4400-uk-pds-2021`; `sika-4400-uk-method-2025`

范围证据需求：实际经核验服务原生单位活动/m2及资源/结果范围；缺少原生属性/单位支持阻断最终交换。

#### 采集要求：完整寿命可重复使用修复资产 (`asset_share`)

过程／待建立交换的方向／类型：`lining` / `inputs` / `product`.

各真实资产纳入制造、维护、更换和寿命终结；消费者覆盖所有作业/节点/期间，不仅本次修复。租金不是制造，租赁覆盖需明确责任。

- 采集对象：实际共用泵、压缩机、搅拌机及进入工具生命周期负担份额
- 流属性/单位：实际原生资产属性 / 实际兼容单位
- 数量规则：实际归属原生数量（实际兼容单位）/ A
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m2 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_asset_share`

范围证据需求：完整已观测寿命或已观测历史加有证据的剩余寿命/更换/终止/寿命终结下，采用实际兼容驱动份额；缺覆盖阻断最终数据集。

#### 采集要求：按原生单位对外退回的可用物料 (`return_mass`)

过程／待建立交换的方向／类型：`lining` / `outputs` / `product`.

仅计该原生单位实际可用对外出口；期末结转/回收保留库存不是退回。匹配上游库存归属及毛供应带出口或净耗用约定，不重复抵扣避免负担。

- 采集对象：按SKU及原生Mass区分的实际可用对外退回
- 流属性/单位：Mass / kg
- 数量规则：实际归属原生数量 kg / A
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m2 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_return_mass`

范围证据需求：实际可用退回kg/m2和SKU状态/去向证据，不假定通用退回比例。

#### 采集要求：按原生单位对外退回的可用物料 (`return_count`)

过程／待建立交换的方向／类型：`lining` / `outputs` / `product`.

仅计该原生单位实际可用对外出口；期末结转/回收保留库存不是退回。匹配上游库存归属及毛供应带出口或净耗用约定，不重复抵扣避免负担。

- 采集对象：按SKU及原生Count区分的实际可用对外退回
- 流属性/单位：Count / item
- 数量规则：实际归属原生数量 item / A
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m2 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_return_count`

范围证据需求：实际可用退回item/m2和SKU状态/去向证据，不假定通用退回比例。

#### 采集要求：按原生单位对外退回的可用物料 (`return_length`)

过程／待建立交换的方向／类型：`lining` / `outputs` / `product`.

仅计该原生单位实际可用对外出口；期末结转/回收保留库存不是退回。匹配上游库存归属及毛供应带出口或净耗用约定，不重复抵扣避免负担。

- 采集对象：按SKU及原生Length区分的实际可用对外退回
- 流属性/单位：Length / m
- 数量规则：实际归属原生数量 m / A
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m2 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_return_length`

范围证据需求：实际可用退回m/m2和SKU状态/去向证据，不假定通用退回比例。

#### 采集要求：按原生单位对外退回的可用物料 (`return_area`)

过程／待建立交换的方向／类型：`lining` / `outputs` / `product`.

仅计该原生单位实际可用对外出口；期末结转/回收保留库存不是退回。匹配上游库存归属及毛供应带出口或净耗用约定，不重复抵扣避免负担。

- 采集对象：按SKU及原生Area区分的实际可用对外退回
- 流属性/单位：Area / m2
- 数量规则：实际归属原生数量 m2 / A
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m2 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_return_area`

范围证据需求：实际可用退回m2/m2和SKU状态/去向证据，不假定通用退回比例。

#### 采集要求：按原生单位对外退回的可用物料 (`return_volume`)

过程／待建立交换的方向／类型：`lining` / `outputs` / `product`.

仅计该原生单位实际可用对外出口；期末结转/回收保留库存不是退回。匹配上游库存归属及毛供应带出口或净耗用约定，不重复抵扣避免负担。

- 采集对象：按SKU及原生Volume区分的实际可用对外退回
- 流属性/单位：Volume / m3
- 数量规则：实际归属原生数量 m3 / A
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m2 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_return_volume`

范围证据需求：实际可用退回m3/m2和SKU状态/去向证据，不假定通用退回比例。

#### 采集要求：收集的固体修复残余物 (`solid_waste`)

过程／待建立交换的方向／类型：`lining` / `outputs` / `waste`.

按组成/状态及接收方分别记录去除基体、污泥固体、干粉废物、新拌/固化回弹、失败衬里去除物、润泵/清洁残余物、包装及耗材；不抵扣参考产出。

- 采集对象：实际分类的去除混凝土、污泥固体、预混料、回弹、飞溅、启动/清洁及包装废物
- 流属性/单位：Mass / kg
- 数量规则：实际归属原生数量 kg / A
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m2 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_solid_waste`
- 来源：`sika-4400-uk-pds-2021`; `sika-4400-uk-method-2025`

范围证据需求：实际湿/干状态kg/m2及组分/去向证据；干喷顶面10-15%案例不适用本湿喷路线。

#### 采集要求：实际修复引起的物种排放 (`species_release`)

过程／待建立交换的方向／类型：`lining` / `outputs` / `elementary`.

对实际粉料处理/喷涂粉尘、燃烧以及污水/燃料/化学品常规和事故排放分别展开物质/介质交换。H2S安全读数不是排放质量；不得用总残差/SDS/NoVOC作排放因子。捕集/库存/退回/废物排除一次。

- 采集对象：实际已识别物质或颗粒类别进入实际受纳介质
- 流属性/单位：Mass / kg
- 数量规则：实际归属原生数量 kg / A
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m2 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_species_release`

范围证据需求：实际物种kg/m2须有实测排放或兼容活动-因子/组成-去向及不确定性证据；未知物种/介质不是零。

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `lining` | 厂内池室衬里一体化修复 | required | 合格既有池室及批准湿喷范围 | 保留酸侵蚀母体转为最终验收养护合格的保护衬里，包括准备、各批/运行、启动排料/清洁/换批、养护、检测及不合格层去除/重喷 | 唯一最终验收A m2；链接每个实际批次/事件及资产期间 |

### 过程：厂内池室衬里一体化修复（`lining`）

#### 输入
##### 产品流

###### 批准的铝酸钙水泥与骨料预混干料（`premix`）

购入干粉已含铝酸钙骨料，不得另外重复购入胶凝料/骨料或湿砂浆。按SKU和状态称量袋装料/残留干粉。

- 选定流：批准的单组分铝酸钙水泥与铝酸钙骨料修复预混干粉
- 流属性/单位：Mass / kg
- 数量规则：实际归属原生数量 kg / A
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m2 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_premix`
- 来源：`sika-4400-uk-pds-2021`; `sika-4400-uk-method-2025`

范围证据需求：实际SKU在实测厚度、粗糙度和损失台账下的干粉kg/m2；PDS约22kg/m2/10mm与2025算例之间存在质量状态歧义，不作为干粉默认量。

###### 预混料的清洁混合水（`mix_water`）

每批计量，与SSD/清洁/养护水分开；新拌总质量为干粉加实际水质量，不重复购入湿砂浆。

- 选定流：供应的清洁饮用混合水
- 流属性/单位：Volume / m3
- 数量规则：实际归属原生数量 m3 / A；m3 = 实测升数 / 1000
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m2 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mix_water`
- 来源：`sika-4400-uk-pds-2021`; `sika-4400-uk-method-2025`

范围证据需求：采用英国20kg产品时为2.8-3.2L/20kg干粉，不是m3/m2默认量；质量平衡需实际水密度。

###### 准备、SSD、润泵、冷却、清洁、养护及检测用水（`process_water`）

分别记录设备预湿/冲洗、料斗/喷嘴/软管清洗、pH试验蒸馏水、SSD、冷却、湿养护和检测；另在物理平衡记录导流/处理水。

- 选定流：按用途区分的实际非混合清洁供水
- 流属性/单位：Volume / m3
- 数量规则：实际归属原生数量 m3 / A
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m2 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_water`
- 来源：`sika-4400-uk-pds-2021`; `sika-4400-uk-method-2025`

范围证据需求：各实际用途m3/m2须有水表、时间/流量和循环证据，不能使用设备能力代替耗水。

###### 实际兼容表面硬化剂（`hardener`）

仅在实际批准养护/恢复运行方案采用时纳入；配方硬化剂不是基本物质，也不免除完整验收。

- 选定流：实际批准供应的表面硬化剂配方产品
- 流属性/单位：Mass / kg
- 数量规则：实际归属原生数量 kg / A
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m2 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hardener`
- 来源：`sika-4400-uk-pds-2021`; `sika-4400-uk-method-2025`

范围证据需求：实际SKU施用kg/m2及硬化状态/恢复运行证据；无依据覆盖率或一小时默认值不可采用。

###### 直接修复电力（`electricity`）

包括实际泵/压缩机/搅拌、去除/排水/导流、照明、通风、冷却、养护和检测负荷；服务商覆盖的电力仅有一个责任。

- 选定流：实际计量电力供应
- 流属性/单位：Energy / kWh
- 数量规则：实际归属原生数量 kWh / A
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m2 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity`

范围证据需求：实际kWh/m2须有分表或有效功率/负荷/时间模型及不确定性，设备最大额定值不是默认量。

##### 废物流

##### 基本流

#### 输出
##### 产品流

###### 最终验收养护合格的厂内池室衬里服务（`accepted_lining`）

这是唯一最终验收参考产出；保留基体是状态接口，不是购入产品。实测和验收门槛共同定义A。

- 选定流：既有污水处理厂混凝土池室经验收的铝酸钙湿喷衬里修复
- 流属性/单位：Area / m2
- 数量规则：1 m2
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m2 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_acceptance`
- 来源：`sika-4400-uk-pds-2021`; `sika-4400-uk-method-2025`

范围证据需求：精确1m2仅为参考归一化，不是经验产率；须有实际正值A、实测厚度及全部验收。

##### 废物流

###### 收集的液体修复残余物（`wastewater`）

纳入实际抽排污水、污染清洗/SSD径流、启动/软管冲洗及收集养护/检测水；物理水台账与物种视图不可相加。收集废水是废物流，不是直接基本排放。

- 选定流：按组成和去向区分的实际收集污水、清洁、冲洗和养护废水
- 流属性/单位：Volume / m3
- 数量规则：实际归属原生数量 m3 / A
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m2 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater`
- 来源：`sika-4400-uk-pds-2021`; `sika-4400-uk-method-2025`

范围证据需求：各实际流m3/m2、悬浮固体/组成及接收证据；不假定稀释或废水比例。

##### 基本流

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `accepted_area_only` | 所有清单行 | 所有尝试、启动排料、准备、清洁/换批、重复养护/检测、不合格层去除及重喷均归属唯一最终正值A。不合格品不产生验收面积。失败层回到lining准备/喷涂/养护；去除时按实际废物/排放退出，记录实际回收/退回/降级去向，不假定避免负担抵扣。 | |
| `batch_event_owner` | `lining` | 生产模式为一次修复批次内逐批混合和湿喷运行。各收货/库存/投料、启动排料、定期清洁、中断/换批、产出、拒收及养护/检测事件关联批/运行/区域和期间；共用运行数量按实测因果使用分配一次并核对全运行。不得用喷涂遍数面积分配。 | |
| `asset_periods` | `asset_share` | 列举制造、各服务/维护/更换期间、终止和寿命终结。作业资产负担=完整寿命资产负担乘实际兼容作业驱动量，再除以全部使用方/作业/节点/期间完整寿命驱动量。采用完整已观测寿命，或已观测历史加有证据的剩余使用/更换/终止/寿命终结，并进行不确定性/敏感性和更新。缺覆盖或分母阻断最终数据集。投入/事件/产出和库存结转关联实际期间，不重复购入整台资产或重复年化。 | |
| `one_owner` | `provider`; `electricity`; `fuel`; `freight`; `asset_share` | 各直接/服务商/租赁/运输/资产/备件负担须有唯一责任。服务原生单位须匹配完成资源/结果及上游覆盖，列出剩余直接需求。全部使用方份额和期间核对至一个完整负担。不得用价格/小时作为Count，不得省略服务商承担的隐含工作。不假定商业联产品或处理/避免新建厂抵扣。 | |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_premix` | `lining` | `premix` | collected_record | plant_id;chamber_id;job_id;campaign_id;batch_id;event_id;phase_id;period_id;sku;opening_kg;receipts_net_kg;closing_kg;outward_return_kg;dosed_kg;waste_kg;loss_kg | 称量实际干粉，核对袋皮重、库存、逐批投料和全部出口。 | kg | 每个实际批/运行/事件/发运/资产阶段及最终测量 | 完整修复批次包括失败；结转库存和所有相关资产期间 | 实际厂/池室及实际服务商/所有资产消费者 | 每 1 m2 参考流 | 经校准仪器、一手收货/日志、状态/去向和责任覆盖；核对重复和缺失记录 |
| `cp_mix_water` | `lining` | `mix_water` | collected_record | plant_id;chamber_id;job_id;campaign_id;batch_id;event_id;phase_id;period_id;powder_kg;mix_water_l;mix_water_m3;water_density;density_unit;water_state;temperature;density_source;consistency;pot_life;temperature_unit | 每批经校准量器测量；mix_water_m3 = mix_water_l / 1000。质量诊断记录实际水密度及单位/状态/温度/来源，关联产品规程和稠度检测。 | m3 | 每个实际批/运行/事件/发运/资产阶段及最终测量 | 完整修复批次包括失败；结转库存和所有相关资产期间 | 实际厂/池室及实际服务商/所有资产消费者 | 每 1 m2 参考流 | 经校准仪器、一手收货/日志、状态/去向和责任覆盖；核对重复和缺失记录 |
| `cp_process_water` | `lining` | `process_water` | collected_record | plant_id;chamber_id;job_id;campaign_id;batch_id;event_id;phase_id;period_id;use_id;meter_start_m3;meter_end_m3;recycled_m3;destination | 按用途计量，核对退回、保留水、收集废水及实际排放。 | m3 | 每个实际批/运行/事件/发运/资产阶段及最终测量 | 完整修复批次包括失败；结转库存和所有相关资产期间 | 实际厂/池室及实际服务商/所有资产消费者 | 每 1 m2 参考流 | 经校准仪器、一手收货/日志、状态/去向和责任覆盖；核对重复和缺失记录 |
| `cp_starter` | `lining` | `starter` | collected_record | plant_id;chamber_id;job_id;campaign_id;batch_id;event_id;phase_id;period_id;sku;opening_kg;receipts_net_kg;closing_kg;return_kg;used_kg;flush_kg | 按事件称量润泵料或浆干料，链接化学相容批准及启动排料去向。 | kg | 每个实际批/运行/事件/发运/资产阶段及最终测量 | 完整修复批次包括失败；结转库存和所有相关资产期间 | 实际厂/池室及实际服务商/所有资产消费者 | 每 1 m2 参考流 | 经校准仪器、一手收货/日志、状态/去向和责任覆盖；核对重复和缺失记录 |
| `cp_hardener` | `lining` | `hardener` | collected_record | plant_id;chamber_id;job_id;campaign_id;batch_id;event_id;phase_id;period_id;sku;opening_kg;receipts_net_kg;closing_kg;return_kg;applied_kg;waste_kg;loss_kg | 称量实际供应/施用/出口，记录批准施用和养护/硬化结果。 | kg | 每个实际批/运行/事件/发运/资产阶段及最终测量 | 完整修复批次包括失败；结转库存和所有相关资产期间 | 实际厂/池室及实际服务商/所有资产消费者 | 每 1 m2 参考流 | 经校准仪器、一手收货/日志、状态/去向和责任覆盖；核对重复和缺失记录 |
| `cp_consumable_mass` | `lining` | `consumable_mass` | collected_record | plant_id;chamber_id;job_id;campaign_id;batch_id;event_id;phase_id;period_id;sku;unit;opening_native;receipts_net_native;closing_native;return_native;used_native;waste_native;loss_native | 在原生单位计数/计量，核对收货、库存、使用及全部出口。 | kg | 每个实际批/运行/事件/发运/资产阶段及最终测量 | 完整修复批次包括失败；结转库存和所有相关资产期间 | 实际厂/池室及实际服务商/所有资产消费者 | 每 1 m2 参考流 | 经校准仪器、一手收货/日志、状态/去向和责任覆盖；核对重复和缺失记录 |
| `cp_consumable_count` | `lining` | `consumable_count` | collected_record | plant_id;chamber_id;job_id;campaign_id;batch_id;event_id;phase_id;period_id;sku;unit;opening_native;receipts_net_native;closing_native;return_native;used_native;waste_native;loss_native | 在原生单位计数/计量，核对收货、库存、使用及全部出口。 | item | 每个实际批/运行/事件/发运/资产阶段及最终测量 | 完整修复批次包括失败；结转库存和所有相关资产期间 | 实际厂/池室及实际服务商/所有资产消费者 | 每 1 m2 参考流 | 经校准仪器、一手收货/日志、状态/去向和责任覆盖；核对重复和缺失记录 |
| `cp_consumable_length` | `lining` | `consumable_length` | collected_record | plant_id;chamber_id;job_id;campaign_id;batch_id;event_id;phase_id;period_id;sku;unit;opening_native;receipts_net_native;closing_native;return_native;used_native;waste_native;loss_native | 在原生单位计数/计量，核对收货、库存、使用及全部出口。 | m | 每个实际批/运行/事件/发运/资产阶段及最终测量 | 完整修复批次包括失败；结转库存和所有相关资产期间 | 实际厂/池室及实际服务商/所有资产消费者 | 每 1 m2 参考流 | 经校准仪器、一手收货/日志、状态/去向和责任覆盖；核对重复和缺失记录 |
| `cp_consumable_area` | `lining` | `consumable_area` | collected_record | plant_id;chamber_id;job_id;campaign_id;batch_id;event_id;phase_id;period_id;sku;unit;opening_native;receipts_net_native;closing_native;return_native;used_native;waste_native;loss_native | 在原生单位计数/计量，核对收货、库存、使用及全部出口。 | m2 | 每个实际批/运行/事件/发运/资产阶段及最终测量 | 完整修复批次包括失败；结转库存和所有相关资产期间 | 实际厂/池室及实际服务商/所有资产消费者 | 每 1 m2 参考流 | 经校准仪器、一手收货/日志、状态/去向和责任覆盖；核对重复和缺失记录 |
| `cp_electricity` | `lining` | `electricity` | collected_record | plant_id;chamber_id;job_id;campaign_id;batch_id;event_id;phase_id;period_id;meter_id;opening_kWh;closing_kWh;load;runtime_h;provider_coverage | 使用可追溯分表；模型须保留实测负荷/运行时间及核对。 | kWh | 每个实际批/运行/事件/发运/资产阶段及最终测量 | 完整修复批次包括失败；结转库存和所有相关资产期间 | 实际厂/池室及实际服务商/所有资产消费者 | 每 1 m2 参考流 | 经校准仪器、一手收货/日志、状态/去向和责任覆盖；核对重复和缺失记录 |
| `cp_fuel` | `lining` | `fuel` | collected_record | plant_id;chamber_id;job_id;campaign_id;batch_id;event_id;phase_id;period_id;fuel_id;opening_kg;receipts_net_kg;closing_kg;burned_kg;usable_return_kg;nonburned_waste_kg;uncontained_loss_kg;spill_total_kg;recovered_spill_kg;actual_volume;volume_unit;density;density_unit;fuel_state;temperature;temperature_unit;conversion_source | 称量或按实际兼容密度计量；闭合互斥库存/燃烧/未燃烧出口台账。 | kg | 每个实际批/运行/事件/发运/资产阶段及最终测量 | 完整修复批次包括失败；结转库存和所有相关资产期间 | 实际厂/池室及实际服务商/所有资产消费者 | 每 1 m2 参考流 | 经校准仪器、一手收货/日志、状态/去向和责任覆盖；核对重复和缺失记录 |
| `cp_freight` | `lining` | `freight` | collected_record | plant_id;chamber_id;job_id;campaign_id;batch_id;event_id;phase_id;period_id;shipment_id;route;load_kg;distance_km;vehicle;allocation;empty_leg;provider_coverage | 测量载荷/距离，采用实际服务分摊并记录路段和服务边界。 | kg*km | 每个实际批/运行/事件/发运/资产阶段及最终测量 | 完整修复批次包括失败；结转库存和所有相关资产期间 | 实际厂/池室及实际服务商/所有资产消费者 | 每 1 m2 参考流 | 经校准仪器、一手收货/日志、状态/去向和责任覆盖；核对重复和缺失记录 |
| `cp_provider` | `lining` | `provider` | collected_record | plant_id;chamber_id;job_id;campaign_id;batch_id;event_id;phase_id;period_id;provider_id;service_id;native_property;native_unit;native_quantity;completed_results;resource_list;upstream_coverage;direct_overlap | 读取服务商一手活动/结果和上游覆盖，核验原生属性/单位，不扣除未经证明的重叠。 | actual compatible unit | 每个实际批/运行/事件/发运/资产阶段及最终测量 | 完整修复批次包括失败；结转库存和所有相关资产期间 | 实际厂/池室及实际服务商/所有资产消费者 | 每 1 m2 参考流 | 经校准仪器、一手收货/日志、状态/去向和责任覆盖；核对重复和缺失记录 |
| `cp_asset_share` | `lining` | `asset_share` | collected_record | plant_id;chamber_id;job_id;campaign_id;batch_id;event_id;phase_id;period_id;asset_id;phase;period;consumer_id;job_driver;life_driver;driver_unit;observed_history;remainder_evidence;remainder_source;manufacture;maintenance;replacement;termination;eol;coverage;uncertainty;sensitivity;update_trigger | 构建完整分阶段资产台账及全部使用方的兼容实测驱动比；记录余寿情景、敏感性和更新触发。 | actual compatible unit | 每个实际批/运行/事件/发运/资产阶段及最终测量 | 完整修复批次包括失败；结转库存和所有相关资产期间 | 实际厂/池室及实际服务商/所有资产消费者 | 每 1 m2 参考流 | 经校准仪器、一手收货/日志、状态/去向和责任覆盖；核对重复和缺失记录 |
| `cp_acceptance` | `lining` | `accepted_lining` | collected_record | plant_id;chamber_id;job_id;campaign_id;batch_id;event_id;phase_id;period_id;patch_id;survey_area_m2;openings_m2;reveals_m2;overlap_m2;accepted_A_m2;thickness_mm;installed_volume_m3;pH_criterion;pH_method;pH_result;SSD;sku;cure;hardness;bond;geometry;surface;rework;return_authorisation;signed_acceptance | 测量前后唯一展开几何，扣除重叠/孔洞及失败部分；核对厚度和完整签字基面/养护/粘结/表面/恢复运行验收。 | m2 | 每个实际批/运行/事件/发运/资产阶段及最终测量 | 完整修复批次包括失败；结转库存和所有相关资产期间 | 实际厂/池室及实际服务商/所有资产消费者 | 每 1 m2 参考流 | 经校准仪器、一手收货/日志、状态/去向和责任覆盖；核对重复和缺失记录 |
| `cp_return_mass` | `lining` | `return_mass` | collected_record | plant_id;chamber_id;job_id;campaign_id;batch_id;event_id;phase_id;period_id;sku;dispatch_id;native_quantity;condition;destination;receipt_match;stock_convention | 按自身兼容单位测量发运，保留实际接收方/状态证据。 | kg | 每个实际批/运行/事件/发运/资产阶段及最终测量 | 完整修复批次包括失败；结转库存和所有相关资产期间 | 实际厂/池室及实际服务商/所有资产消费者 | 每 1 m2 参考流 | 经校准仪器、一手收货/日志、状态/去向和责任覆盖；核对重复和缺失记录 |
| `cp_return_count` | `lining` | `return_count` | collected_record | plant_id;chamber_id;job_id;campaign_id;batch_id;event_id;phase_id;period_id;sku;dispatch_id;native_quantity;condition;destination;receipt_match;stock_convention | 按自身兼容单位测量发运，保留实际接收方/状态证据。 | item | 每个实际批/运行/事件/发运/资产阶段及最终测量 | 完整修复批次包括失败；结转库存和所有相关资产期间 | 实际厂/池室及实际服务商/所有资产消费者 | 每 1 m2 参考流 | 经校准仪器、一手收货/日志、状态/去向和责任覆盖；核对重复和缺失记录 |
| `cp_return_length` | `lining` | `return_length` | collected_record | plant_id;chamber_id;job_id;campaign_id;batch_id;event_id;phase_id;period_id;sku;dispatch_id;native_quantity;condition;destination;receipt_match;stock_convention | 按自身兼容单位测量发运，保留实际接收方/状态证据。 | m | 每个实际批/运行/事件/发运/资产阶段及最终测量 | 完整修复批次包括失败；结转库存和所有相关资产期间 | 实际厂/池室及实际服务商/所有资产消费者 | 每 1 m2 参考流 | 经校准仪器、一手收货/日志、状态/去向和责任覆盖；核对重复和缺失记录 |
| `cp_return_area` | `lining` | `return_area` | collected_record | plant_id;chamber_id;job_id;campaign_id;batch_id;event_id;phase_id;period_id;sku;dispatch_id;native_quantity;condition;destination;receipt_match;stock_convention | 按自身兼容单位测量发运，保留实际接收方/状态证据。 | m2 | 每个实际批/运行/事件/发运/资产阶段及最终测量 | 完整修复批次包括失败；结转库存和所有相关资产期间 | 实际厂/池室及实际服务商/所有资产消费者 | 每 1 m2 参考流 | 经校准仪器、一手收货/日志、状态/去向和责任覆盖；核对重复和缺失记录 |
| `cp_return_volume` | `lining` | `return_volume` | collected_record | plant_id;chamber_id;job_id;campaign_id;batch_id;event_id;phase_id;period_id;sku;dispatch_id;native_quantity;condition;destination;receipt_match;stock_convention | 按自身兼容单位测量发运，保留实际接收方/状态证据。 | m3 | 每个实际批/运行/事件/发运/资产阶段及最终测量 | 完整修复批次包括失败；结转库存和所有相关资产期间 | 实际厂/池室及实际服务商/所有资产消费者 | 每 1 m2 参考流 | 经校准仪器、一手收货/日志、状态/去向和责任覆盖；核对重复和缺失记录 |
| `cp_solid_waste` | `lining` | `solid_waste` | collected_record | plant_id;chamber_id;job_id;campaign_id;batch_id;event_id;phase_id;period_id;waste_id;origin;state;gross_kg;tare_kg;moisture;composition;receiver;recovery;dispatch | 按状态/含水率称量各收集流，保留合法去向记录；不合格品关联lining及重新施工。 | kg | 每个实际批/运行/事件/发运/资产阶段及最终测量 | 完整修复批次包括失败；结转库存和所有相关资产期间 | 实际厂/池室及实际服务商/所有资产消费者 | 每 1 m2 参考流 | 经校准仪器、一手收货/日志、状态/去向和责任覆盖；核对重复和缺失记录 |
| `cp_wastewater` | `lining` | `wastewater` | collected_record | plant_id;chamber_id;job_id;campaign_id;batch_id;event_id;phase_id;period_id;stream_id;volume_m3;solids;composition;capture;reuse;receiver;dispatch | 按来源计量或罐量液流；核对循环、保留水、固体及发运。 | m3 | 每个实际批/运行/事件/发运/资产阶段及最终测量 | 完整修复批次包括失败；结转库存和所有相关资产期间 | 实际厂/池室及实际服务商/所有资产消费者 | 每 1 m2 参考流 | 经校准仪器、一手收货/日志、状态/去向和责任覆盖；核对重复和缺失记录 |
| `cp_species_release` | `lining` | `species_release` | collected_record | plant_id;chamber_id;job_id;campaign_id;batch_id;event_id;phase_id;period_id;species;medium;measured_kg;activity;activity_unit;factor;factor_unit;factor_source;composition;composition_basis;composition_source;fate;fate_basis;fate_source;parent_ledger_id;capture;stock;waste;method;uncertainty | 择一使用可追溯物种/介质实测质量、实际兼容活动乘物种排放因子，或整股流体质量乘有证据组成及释放去向。记录活动/因子单位及来源、组成/去向依据及母流台账，不重复缩放已完整的物种因子；单独闭合母流物理平衡。 | kg | 每个实际批/运行/事件/发运/资产阶段及最终测量 | 完整修复批次包括失败；结转库存和所有相关资产期间 | 实际厂/池室及实际服务商/所有资产消费者 | 每 1 m2 参考流 | 经校准仪器、一手收货/日志、状态/去向和责任覆盖；核对重复和缺失记录 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `unique_area` | `accepted_lining` | A = 互斥验收展开表面之和减孔洞；实际侧壁只加一次，扣除重叠和失败部分；分层和遍数不放大面积。缺少验收或A<=0时不产生验收参考产出。 | cp_acceptance | A m2 | |
| `sku_stock` | `premix`; `starter`; `hardener`; `consumable_mass`; `consumable_count`; `consumable_length`; `consumable_area`; `fuel`; `return_mass`; `return_count`; `return_length`; `return_area`; `return_volume` | 各兼容原生SKU台账：归属供应量=期初归属库存+扣皮重外部毛收货-期末结转库存。毛供应带出口法仅保留实际可用对外退回一次；净耗用法仅扣除匹配退回及其供应负担一次，不重复抵扣。不退回损失/废物保留供应负担。闭合互斥最终出口，保留中间投料/使用作为不可相加记录。 | 实际收货/库存/发运/使用/废物/损失协议 | 归属原生供应量和匹配出口 | |
| `mix_state_check` | `premix`; `mix_water` | 新拌混料质量=实际干粉质量+实际加水质量；混合水m3=实测升数/1000；加水质量=实测水体积乘单位/状态/温度/来源匹配的实际密度。只有具体新拌密度有证据时，无损理论新拌体积=新拌质量/新拌密度；不推断固化密度或验收A。英国 2025 算例 25 mm / 1 m2及 2200 kg/m3得 55 kg全部新拌料，55 / 1.16 ~ 47.4 kg干粉，而非 55 kg干粉另加水。PDS约 22 kg/m2/10 mm不单独采纳为干粉消耗因子。 | cp_premix; cp_mix_water; cp_acceptance; 具体产品/状态/密度 | 仅状态特定诊断，不另生成购入交换 | `sika-4400-uk-method-2025`; `sika-4400-uk-pds-2021` |
| `fuel_close` | `fuel`; `species_release` | 在兼容燃料质量中，期初+收货=期末+燃烧+可用退回+未燃烧废物+未收集损失。已回收保留泄漏计入期末，总泄漏仅审计。上游归属按sku_stock，燃烧活动仅用燃烧量。物种排放择一使用实测物种/介质质量、实际兼容活动*物种排放因子，或整股流体质量*有证据组成*实际释放去向。已直接报告释放物种的因子不得再次乘组成/去向；排除捕集/库存/退回/废物一次；整股流体平衡与物种视图不可相加。 | cp_fuel; cp_species_release | 分别记录燃料归属、燃烧活动和实际物种排放 | |
| `freight_work` | `freight` | 实际归属货运工作量=sum(实际发运load_kg * distance_km)，采用有记录分摊/空驶覆盖；除以A得到参考数量。 | cp_freight; cp_acceptance | kg*km per m2 | |
| `asset_life_share` | `asset_share` | 作业份额=完整制造+维护+更换+寿命终结负担乘全部使用方和期间的兼容实测job_driver/life_driver；除以A。完整寿命或有证据的余寿不可缺，核对阶段/消费者份额，评估不确定性/敏感性，并在更换/终止时更新。 | cp_asset_share; cp_acceptance | 每m2实际原生资产负担份额 | |
| `native_reference_amounts` | 所有清单行 | 各卡片写明实际原生数量除以同一正值A，但accepted_lining=1m2。不得相加不同原生单位，或重复计入中间状态、服务商已覆盖负担及对外抵扣。 | 所有关联采集协议; cp_acceptance | 每 1 m2 参考流的原生交换量 | |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `route_gate_evidence` | `lining`; `accepted_lining` | 核验厂内功能及排除池型/结构资格；实际现行本地批准规程、完好粗糙清洁基面、微裂纹/脱层/钢筋检查、采用英国V7时pH>=10和SSD；逐批水料比/稠度、设备无污染、分层/厚度、实际养护/硬化、检测/返工及签字污水恢复验收。 | 实际工程师/业主记录及一手本地产品/方法证据 |
| `quantity_state_quality` | 所有清单行 | 保留原生单位、皮重、校准、日期、批/运行/区域/事件ID、库存结转、完整失败/换批/养护/检测覆盖、组成/状态/密度和唯一责任审查。量化模板不能代替实际消耗。 | 关联采集协议及闭合记录 |
| `support_and_range` | 所有清单行 | 最终交换前解决具体流/服务商/物种标识及精确支持；各卡片范围证据需求须有实际可比场址/产品观测或有依据不确定性。不虚构宽泛通用范围；披露缺口并阻断无支持最终数量。 | 具体核验标识、单位/属性详情和范围证据 |
| `life_coverage` | `asset_share`; `provider` | 缺完整资产期间/更换/终止/寿命终结分母或服务商资源/结果/上游范围时阻断最终数据集；寿命未结束则记录观测历史、有证据余寿/敏感性/更新。 | 阶段/消费者台账和服务商一手记录 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `reference_gate` | `accepted_lining` | 要求同一唯一正值A、参考链接/名称/属性/单位，以及实际基面pH/SSD、分层/几何、养护/硬化、粘结/表面及授权签字业主恢复运行验收。最快计时、仅关盖例外、未解决拒收或零面积不得生成验收产出。 | `sika-4400-uk-method-2025`; `sika-4400-uk-pds-2021` |
| `supply_and_state_gate` | 所有清单行 | 核对原生SKU期初/收货/期末/可用退回/使用/废物/排放及工厂产品/组分互斥。区分干粉+水、新拌混料和固化保留状态，不得把55kg新拌当55kg干粉另加水、重复购湿混料、丢失损失上游负担或按遍数/分层放大面积。 | |
| `event_and_release_gate` | `lining`; `species_release`; `solid_waste`; `wastewater` | 各批/运行/期间、启动排料、定期清洁/换批、失败、返工重喷及残余物出口须有责任和去向。物理流体/气体闭合与物种/介质证据不可相加；安全浓度/SDS不能单独建立排放，收集流为废物而非直接排放。 | |
| `shared_period_gate` | `asset_share`; `provider`; `electricity`; `fuel`; `freight` | 要求全部使用方/寿命阶段完整分母或有证据余寿及不确定性/敏感性/更新、实际更换/终止/寿命终结、兼容驱动及份额闭合。核验服务原生单位/资源/结果/上游范围，直接/租赁/资产/备件责任只计一次。缺覆盖阻断最终数据集。 | |
| `readiness_gate` | 所有清单行 | 保留实际不存在证据、未解决标识/支持/范围和一手记录缺失；候选方法不能提供未经核验具体最终交换。自动检查不证明外部UUID、完整工程批准或出版就绪。 | |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一次实际完成的厂内池室衬里修复前景数据包 |
| downstream_use | secondary_dataset; background_dataset；具体标识/覆盖完成后投影为process和lifecyclemodel |
| allowed_use | 声明相容的厂内铝酸钙低压湿喷衬里修复，具有实际状态/厚度/养护/验收和完整清单覆盖 |
| excluded_use | 全厂建设或处理运行；生物反应池/消化池；厂外污水管/检查井；新池；重大重建/换筋；干喷/离心/仅手工或仅聚合物修复；虚构寿命/避免更换/处理抵扣 |
| required_metadata | 厂/池室/功能、基体状态、批准SKU/体系/本地规程、pH/SSD、唯一A和厚度/体积/分层方向、批/运行/事件/期间ID、环境/通风、养护/硬化/检测/返工和签字恢复验收；服务商/库存/去向/资产/单位 |
| required_quality_disclosure | 量化质量状态歧义及条件性计时证据；实际状态/几何/消耗、具体标识/支持缺口、范围证据需求、失败尝试、服务责任、资产覆盖/余寿/敏感性、时空代表性和不确定性 |
| update_trigger | 新本地产品/方法或适用性/pH/养护变化；实际配料/设备/验收、厚度/基体状态、服务商、物料去向、库存约定、实测消耗、资产更换/终止或余寿证据变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `sika-4400-uk-pds-2021` | handbook | Sika MonoTop-4400 MIC产品数据表，英国2021年1月07.01版，pp1-4；https://gbr.sika.com/dam/dms/gb01/p/sika_monotop_-4400mic.pdf | 铝酸钙水泥及骨料预混料、英国20kg袋/2.8-3.2L水、新拌密度/产率及状态谨慎说明、基面/设备/SSD/湿喷/养护/清洁路线；仅支持产品特定事实 |
| `sika-4400-uk-method-2025` | handbook | Sika Limited，Sika MonoTop-4400 MIC施工方法，2025年2月V7，sections2,4,6-10 pp3-13；https://gbr.sika.com/dam/dms/gb01/p/Sika%20MonoTop-4400%20MIC.pdf | 排除生物反应池/消化池、酸去除pH>=10、清洁设备/润泵/启动排料、湿喷分层/控制/清洁、湿养护/通风/硬化剂和条件性恢复运行/硬化；干粉-水-新拌质量算例 |
| `un-cpc-3-2025` | official_guidance | 联合国CPC3.0解释性说明，2025年6月30日，54253；https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 施工服务分类背景及较窄范围，不支持清单数值或LCA计算公式 |
