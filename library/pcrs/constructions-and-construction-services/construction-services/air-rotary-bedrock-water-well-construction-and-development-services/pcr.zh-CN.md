---
pcr_id: pcr.air-rotary-bedrock-water-well-construction-and-development-services
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 空气回转基岩水井施工与洗井服务

## 1. 范围与适用性

本 PCR 适用于采用空气回转钻进首次建造非自流型固结基岩私人水井，包括覆盖层套管、封隔和井口施工，实际洗井、临时出水量试验以及施工阶段消毒、冲洗和取样。交付物是通过验收且未安装永久水泵的水井土建工程。实际管辖要求、合格钻井人员及经授权的场地专项设计和试验文件决定本阶段验收。

排除松散地层筛管井、自流井、勘探/地热/油气井、主动水力压裂、后期修复、永久水泵/配水/处理设施以及常规供水。FRTR 仅支持空气回转机理及相关材料和残余物问题，不作为饮用水井设计规范。实际偶发地层影响仍须披露。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.air-rotary-bedrock-water-well-construction-and-development-services |
| classification_refs | cpc:3.0:54341 |
| covered_products | 实际场址和验收门槛下，合格的首次空气回转基岩水井土建施工与洗井服务，不含永久水泵。 |
| excluded_products | 松散地层筛管井、自流井、地热/勘探/油气井；压裂；修复；永久泵送供水系统及运行取水。 |
| representative_product | 一口实际非自流私人基岩井，套管/封隔/井口、洗井及施工阶段试验记录通过验收。 |
| production_route | 实际场址/设计 → 空气回转地层移除及捕集残余物 → 独立套管/封隔/井口集成 → 洗井/临时试验/初次消毒/冲洗/取样 → 签署无永久水泵的土建交接；实际失败返回责任过程或依法封闭。 |
| market_state | 首次施工、场址特定且已验收的土建服务；不销售地下水，不保证已获饮用水使用批准。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 一口合格非自流固结基岩私人水井的空气回转施工与洗井，交付至无永久水泵的土建门槛。 |
| How much | 1 item 实际验收的土建水井；实际深度和直径是限定条件，不是等价井数。 |
| How well | 满足实际授权设计、场址和施工阶段出水量/洗井/消毒/冲洗/取样验收，覆盖层套管封隔、井口保护完成；土建验收不等于饮用水供水批准。 |
| How long or cycle | 一次首次施工任务，从进场至最终土建门槛及可归属的失败井孔封闭/修复/复验。把资产生产/投用、任务使用/维护/更换及退役关联至实际报告期和其他任务；排除后期供水运行寿命。 |
| reference_flow_link | `accepted_civil_well` |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 已验收空气回转基岩水井土建施工与洗井服务 |
| Reference flow property | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | 物品数量单位组 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | 场址及管辖要求; 非自流固结基岩地质/水文地质; 实际钻头/潜孔锤路线; 水井/井孔标识; 钻深/直径和覆盖层剖面; 套管牌号/长度/直径/接头; 授权灌浆材料及置入; 井帽/密封/井口; 实际洗井方法/终点; 临时泵及试验方法/流量/时长/降深/恢复; 施工消毒/稀释/接触/冲洗/取样方案和结果; 失败井孔处置; 签署无永久泵土建门槛; 后续永久泵及供水使用批准责任人 |

## 4. 计量与单位规则

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| count_reference | accepted_civil_well | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | item | 按明确限定的门槛计数一口实际已验收土建水井。深度、直径、出水量和容量不得把不兼容任务转换成等价井数。 |
| mass_basis | 所有质量清单行 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 保留实际湿/干/溶液/物质基准；由体积换算质量须有实际温度/状态和有据密度；产品溶液质量不等于活性物质质量。 |
| physical_units | support_electricity; support_assets; support_transport; support_services | 实际兼容属性，在核实前保持未解析 | kWh; h; tkm; 实际供应服务单位 | 保留实际能量/时间/运输/供应服务物理测量，并在形成最终交换前独立核实支持链；工具小时、样品、空气体积和能量不得换成 Count。 |
| `count_unit_alias` | 存在时的计数交换 | Count | item | 本 PCR 的显示别名 item 表示已核实的物品数量单位组参考单位 Item(s)，系数为 1。具体数据集须保留实际参考单位身份；此书写别名不建立质量、面积或服务之间的等价关系。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 首次施工前的实际授权非自流基岩场址、天然地层/含水层及明确的通行/准备工程接口。 |
| starting_condition_role | 环境地层/资源存量及明确的授权场址/设计接口；不是已有完整水井，不得把新增准备工程虚构为零负担。 |
| product_classification_scope | 无永久水泵的空气回转土建井服务，比含可能泵/管安装的 CPC 水井钻探类别更窄。 |
| recursive_input_rule | 外供同类别水井施工部分须是有实际门槛、责任人、数量和覆盖范围的上游服务；不得重建其已覆盖前景清单，亦不得以未核实服务名称作为递归终点。 |
| upstream_dataset_requirement | 实际供应状态套管/灌浆/组件、能源/燃料及有界服务/资产数据集，明确供应方覆盖和缺失阶段。 |
| disclosure | 实际几何/地质/设计/管辖要求、接口、水源/岩屑交接、试验/门槛、失败、供应方及资产时期/阶段/分配；后续水泵/系统/供水使用责任。 |

### 边界规则

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| well_route | 所有过程 | 排除自流、松散筛管、地热/勘探/油气、主动压裂、后期修复及常规取水。实际项目不符合本路线须采用其他方法。 |  |
| start_interface | bore_removal | 声明实际通行/场址/水文地质/管辖/地下设施核查及授权设计和钻井人员。新增任务专属准备工程须纳入或明确计量的上游有界服务及责任方，不得无主遗漏。原位地层/含水层是环境起始存量，不虚构上游生产。 |  |
| removal_handoff | bore_removal | 移除源是实际覆盖层和固结基岩。责任终点为有记录的已钻井孔/地层状态及捕集岩屑/水的交接；残余物管理仍负责。地质移除和源捕集有独立日志/交接，因此与下游供应套管/封隔/井口集成责任独立。 | frtr-air-rotary |
| completion_gate | well_completion | 独立套管/封隔/井口集成接收套管/接头、相容灌浆材料及井帽/密封；连接/置入形成供洗井使用的实际授权卫生土建完井状态。按实际设计保留置入/养护证据，不采用通用剂量。嵌入式拌浆纳入本责任，不另造产品交接。 | massdep-private-well-guidelines |
| test_handover | develop_accept | 独立 develop_accept 接收 well_completion 已完成但未洗井、未初次消毒的土建井。去除细屑/洗井和初次消毒，并进行实际临时试验、冲洗、取样，交付合格验收的无永久泵土建井；捕集沉积物、受管理液体及真实表征排放保持独立去向。先完成洗井和细屑冲洗，再作临时泵送/出水量试验。保留实际水位、流量/时间、验收、初次消毒/冲洗/取样及全部重复作业记录。明确后续永久泵安装者/全系统消毒和供水使用批准责任人；本参考不交付永久泵、配水或处理设施。 | massdep-private-well-guidelines |
| shared_cycle | bore_removal | bore_removal 牵头操作者仅一次拥有全任务共享采购、供应服务、物流和资产台账，包括 well_completion/develop_accept 的消耗。按实际 node_id/event 因果任务使用分配，不存在独立支持过程输出。将钻机/空压机/钻具/临时试验泵/工具关联全部三项责任、其他任务和报告期。利用真实有界供应服务覆盖或全生命周期分配，计入资产生产、投用/进场、使用/闲置、维护/更换及移除/退役；补足供应方未覆盖阶段。 |  |
| reject_paths | 所有过程 | 失败/污染/出水不足井孔返回 bore_removal/well_completion 实际补救或依法封闭；缺陷封隔/组件返回 well_completion；洗井/出水量或消毒/样品不合格返回 develop_accept 及责任上游过程。保留可归属任务的全部负担和废物，未关闭拒收不得进入验收井数，交接前完成处置。 |  |
| real_exchanges | 所有过程 | 将条件性总括卡展开为实际各材料/供应服务/废物/物质交换，具有兼容物理单位和经核实身份。不得合并异质流或建立重复收货/文件镜像节点。按实际外部交接及环境去向确定产品/废物/基本流类型。 |  |
| `boundary_atomic_completion` | 所有过程 | 本节的采集要求是必须执行的采集与适用性指令，不是聚合清单交换。完成前景数据集前，必须为每一种实际产品、废物流、物质及环境子区室建立独立原子流卡／交换。保留全部实际事件、上游负荷、退回及原生单位；所链接公式应按每个兼容身份分别执行。环境资源提取记为输入，环境释放记为输出。不得相加不同原生单位、用一个 UUID 代表整个采集池、将缺记录解释为零，或与已有具体卡重复计入。保留宿主的文件性接口仅传递状态，不形成新采购资产。适用成员未明确或未有证据证明不存在时，定量清单仍不完整；非强制筛查提示不能补造数量或化学组成。 |  |

### 条件性清单补全要求

以下标识符表示采集池或文件性状态台账。一个池可能有零个、一个或多个实际成员。须依据真实记录判断适用性，并为每个成员保留原有数量方法和采集协议；只有兼容的数量才能共同核对。下列原有可选筛查区间仅作为暂定复核提示，不得强加于不同材料或混合采集池。

#### 采集要求：实际单独供应钻进润滑剂或携屑添加剂 (`drill_additives`)

过程／待建立交换的方向／类型：`bore_removal` / `inputs` / `product`.

条件性语义要求：每种实际潜孔锤润滑剂、泡沫或其他批准添加剂须按真实配方和用途独立实例化。使用潜孔锤时纳入实际润滑，包括空压机携带润滑剂；不得虚构泡沫投入。供应服务已覆盖材料不重复添加。

- 采集对象：实际单独供应钻进润滑剂或携屑添加剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按配方记录可归属任务收货/领用总量，将实际使用、向外可用退料、废物/排放和留存库存分别核对，保留失败井孔用量；不得先净除退料再报告总投入和真实向外退料。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_drill_chem`
- 来源：`frtr-air-rotary`

数量范围证据需求：须有实际钻头/锤、润滑剂/添加剂规格、活性含量和领用记录；不设通用剂量或零油排放。

#### 采集要求：实际单独供应钻机空压机车辆及试验设备燃料 (`support_fuels`)

过程／待建立交换的方向／类型：`bore_removal` / `inputs` / `product`.

按实际供应门槛分别实例化燃料；以资产/事件标记计量钻机、空压机、钻进、完井、试验及运输用途。供应服务已覆盖燃料不重复加；燃油不是空气基本排放。

- 采集对象：实际单独供应钻机空压机车辆及试验设备燃料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：核对收货总量/期初库存、期末库存/向外退料及实测归属消耗；由 L 转 kg 保留实际密度和温度。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

数量范围证据需求：须有实际燃料类型、罐/计量记录、任务使用及校准密度；无每米燃料、空压机负荷或车耗通用因子。

#### 采集要求：可复用钻机空压机钻具临时泵及试验资产的实际有界供应 (`support_assets`)

过程／待建立交换的方向／类型：`bore_removal` / `inputs` / `product`.

分别实例化实际可复用资产/供应服务，保留物理服务单位及源边界。列出 bore_removal、well_completion、develop_accept 消费者及其他任务/时期。有界供应数据集须确实覆盖资本生产/维护/移除；否则用全寿命证据补缺，已覆盖使用不重复。

- 采集对象：可复用钻机空压机钻具临时泵及试验资产的实际有界供应
- 流属性/单位：时长 / h
- 数量规则：采集各资产实际任务小时和含其他任务/时期的全寿命使用分母；生产/更换/维护/移除资本负担仅分配一次。仅供应范围排除时，才在供应外另计燃料/电力/耗材。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`

数量范围证据需求：须有实际资产生产/投用、使用/闲置、更换/退役阶段及寿命服务分母，或完整供应覆盖；无通用寿命、小时占比或零资本负担。

#### 采集要求：实际独立货运进退场及废物运输服务 (`support_transport`)

过程／待建立交换的方向／类型：`bore_removal` / `inputs` / `product`.

仅材料/资产/废物处理供货未包含时，按供应方/方式/路线/载荷实例化真实运输。跟踪钻机进退场和可归属空返；自营车辆按真实燃料/资产清单计，不叠加完整货运数据集。

- 采集对象：实际独立货运进退场及废物运输服务
- 流属性/单位：运输服务 / tkm
- 数量规则：采用称重载荷 t 和实际分段距离，说明供应方空返/拼载处理；若真实服务基准是趟次/vehicle-km，核实兼容数据集前保持原单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_transport`

数量范围证据需求：须有实际路线、载荷、段方向、空载/共享载荷及供应单位/覆盖；无默认运距或任意数量转换。

#### 采集要求：实际独立有界且按时间计量的专业供应服务 (`support_services`)

过程／待建立交换的方向／类型：`bore_removal` / `inputs` / `product`.

条件性要求仅适用于真实独立且按时间计量的钻进/完井或其他范围内专业服务。逐一实例化供应方和责任门槛，仅以有据覆盖替代自营节点活动并补缺一次。实验室分析和外供压缩空气有独立真实计量卡；文件本身不产生服务交换。

- 采集对象：实际独立有界且按时间计量的专业供应服务
- 流属性/单位：时长 / h
- 数量规则：记录明确按时间供应服务的真实交付小时，并将包含材料/能源/资产/运输/废物与自营作业核对；不得把分析数或空气体积换为 h。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_services`

数量范围证据需求：须有实际按时间合同、交付小时、独立门槛及覆盖/排除清单阶段；无通用小时或隐去资本负担。

#### 采集要求：实际单独供应设备磨损件维护耗材及防护用品 (`support_materials`)

过程／待建立交换的方向／类型：`bore_removal` / `inputs` / `product`.

按材料/配方实例化真实磨损钻头、更换钻具、单独消耗油/清洁剂及防护用品。support_assets 已含永久资产更换不重复加；锤润滑归 drill_additives，维护耗材仅一次归此。

- 采集对象：实际单独供应设备磨损件维护耗材及防护用品
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按任务记录领用及更换事件；可复用零件采用全寿命分配，核对领用总量、可用退料及库存。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_support_materials`
- 来源：`frtr-air-rotary`

数量范围证据需求：须有实际磨损/更换安排、数量、质量及供应覆盖；无通用钻头寿命或润滑消耗。

#### 采集要求：钻进期间从实际含水层取出的地下水 (`drill_groundwater`)

过程／待建立交换的方向／类型：`bore_removal` / `inputs` / `elementary`.

进入井孔且被取出的地下水是环境资源输入，以实测体积及披露的水平衡与外供注水分开。识别含水层/位置和取用基准；混合水源分离不确定是数据缺口，不虚构含水层培育清单。

- 采集对象：钻进期间从实际含水层取出的地下水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：以钻进事件实测或平衡计算源特定取水质量；保留测量/估算不确定性及未回收部分。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_drill_resource`
- 来源：`frtr-air-rotary`

数量范围证据需求：须有实际入流/取水记录和混合水源平衡；不得把最终试验出水量或井孔容积当成取水量。

#### 采集要求：钻井空压机环境空气吸入 (`ambient_air_intake`)

过程／待建立交换的方向／类型：`bore_removal` / `inputs` / `elementary`.

仅在采用清单方法要求时记录实际环境吸入。空压机供应、燃料和电力归牵头 bore_removal 操作者。实际购入压缩空气单列 supplied_compressed_air，不得同时作为环境吸入。

- 采集对象：钻井空压机环境空气吸入
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用实际入口流量、运行时间及状态特定密度，计及泄漏和测量基准；方法要求而未量化的吸入须披露缺口。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`frtr-air-rotary`

数量范围证据需求：须有实际入口状态、校准流量/时间覆盖及方法纳入决定；铭牌额定流量不是连续实测吸入。

#### 采集要求：向外真实交接的未用可用支持产品及周转包装 (`support_returns`)

过程／待建立交换的方向／类型：`bore_removal` / `outputs` / `product`.

按已识别产品及接收方拆分真实退回未用燃料/材料和周转包装。随商品已含包装上游负担在商品中；向外退还只是交接记录，不再加一次包装采购或假设避免生产抵扣。

- 采集对象：向外真实交接的未用可用支持产品及周转包装
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：凭运出/接收标识记录向外退还称重总量；留存库存/可复用包装留场为库存平衡，并携带明确原有负担。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_support_balance`

数量范围证据需求：须有实际向外交接、单件/材料质量及接收证据；无默认包装/退还因子。

#### 采集要求：交至明确接收方的捕集钻屑及夹带固体 (`wet_cuttings`)

过程／待建立交换的方向／类型：`bore_removal` / `outputs` / `waste`.

移除责任承担挖出的覆盖层/基岩并把捕集钻屑交给实际收集和处置/回收方。记录湿质量及固体/水基准、污染状态和各接收方；湿混合物不是具名化学排放或可售地下水产品。

- 采集对象：交至明确接收方的捕集钻屑及夹带固体
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按实际废物身份采用称重向外载荷；核对留存、逸散细屑和夹带水，避免重复计液体。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_cuttings`
- 来源：`frtr-air-rotary`

数量范围证据需求：须有实际载荷称重、含水/固体表征、库存及接收记录；不设每米钻屑质量或默认密度。

#### 采集要求：交付受管理处理/处置的钻井水或浆液 (`drill_managed_liquid`)

过程／待建立交换的方向／类型：`bore_removal` / `outputs` / `waste`.

按组成、交接和接收设施实例化各真实液体/浆液废物流。排除 wet_cuttings 已含液体；现场向环境排水归 drill_releases。

- 采集对象：交付受管理处理/处置的钻井水或浆液
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量单独交接液体质量或按核实密度换算体积；容器/装载标识关联接收记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_drill_liquid`

数量范围证据需求：须有实际水源拆分、固体基准、转移计量和去向；无通用液体废物比例。

#### 采集要求：实际不可退包装废油磨损件及其他支持废物 (`support_waste`)

过程／待建立交换的方向／类型：`bore_removal` / `outputs` / `waste`.

按身份/危险性/接收方实例化真实包装、废油、磨损组件及其他废物。避免与供应方已含移除及 support_assets 资本退役重复；独立项目废物仍纳入。

- 采集对象：实际不可退包装废油磨损件及其他支持废物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量向外废物流或采用同型号单件质量，与供应包装/耗材及资产记录核对并保留处理链。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_support_balance`

数量范围证据需求：须有实际包装质量、磨损/废油和接收分类；无通用废物比例或回收抵扣。

#### 采集要求：实际表征且受纳介质明确的钻进排放 (`drill_releases`)

过程／待建立交换的方向／类型：`bore_removal` / `outputs` / `elementary`.

条件性要求：按实测或可辩护计算实例化每种物质/组分及受纳介质，包括相关空气细颗粒、空压机烃和实际排水。保留粒径/物质基准并在质量披露中说明偶发地层影响。不得把全部湿钻屑或水合并成一种污染物。

- 采集对象：实际表征且受纳介质明确的钻进排放
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：用实际采样/流量记录或有据适用因子确定物质特定排放质量；区分资源水返回和受控收集的废物，避免与 support_emissions 发动机排放重复。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_drill_releases`
- 来源：`frtr-air-rotary`

数量范围证据需求：须有实际物质、介质、流量/浓度或核实因子适用性及捕集效率；未测排放不等于零。

#### 采集要求：实际物质特定发动机发电运输及支持排放 (`support_emissions`)

过程／待建立交换的方向／类型：`bore_removal` / `outputs` / `elementary`.

依据校准测量或适用有据方法，逐一实例化污染物/形态/粒径和空气/水/土壤介质。关联燃料/资产/任务及边界，不重复上游燃烧或供应方已覆盖运输排放。

- 采集对象：实际物质特定发动机发电运输及支持排放
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用实际活动及适用发动机/燃料/控制/工况因子或监测；披露不确定性，相关未测物质为缺口而非零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_support_emissions`

数量范围证据需求：须有实际发动机规格、负荷/运行、因子范围/形态或实测浓度/流量；无证据不得套用通用 CO2/NOx/PM 因子。

#### 采集要求：交付状态实际井套管及不可分割随供接头 (`well_casing`)

过程／待建立交换的方向／类型：`well_completion` / `inputs` / `product`.

明确实际钢或热塑性材料牌号、尺寸、饮用水井适用性及供应门槛。套管保护覆盖层段并与封隔/井口集成；供货清单识别随供接头，单购接头归 completion_components。

- 采集对象：交付状态实际井套管及不可分割随供接头
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录可归属任务套管领用质量总量；按材料/批次保留安装长度、实际管段质量、边角料、未用退料和库存。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_completion_materials`
- 来源：`massdep-private-well-guidelines`

数量范围证据需求：须有实际授权套管表、长度及可追溯质量数据；不设通用深度/直径/长度转质量因子。

#### 采集要求：供应或独立制备交接状态的实际封隔灌浆材料 (`sealing_grout`)

过程／待建立交换的方向／类型：`well_completion` / `inputs` / `product`.

明确与地质/水文地质相容的实际批准材料、干料/已拌供应状态和环空封隔用途。真实独立制备交付时，只计一次实际制备门槛和上游清单。嵌入式拌浆归 well_completion，须分别实例化水泥/膨润土/其他配料及水，不得同时计配料和成品浆。

- 采集对象：供应或独立制备交接状态的实际封隔灌浆材料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录每种实际供应状态材料或配料领用总量；用批次实测记录核对置入、拌浆残余、退回产品和期末库存。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_grout`
- 来源：`massdep-private-well-guidelines`

数量范围证据需求：须有实际授权配方、状态、水比、批次产出及环空几何/置入记录；不设通用配方、养护时间、剂量或损失率。

#### 采集要求：实际单独供应套管接头井帽密封及完井组件 (`completion_components`)

过程／待建立交换的方向／类型：`well_completion` / `inputs` / `product`.

按真实材料/供应身份分别实例化独立供应的相容接头、卫生井帽、密封及其他批准组件。连接/注浆/井口人工属于本责任，不得再叠加覆盖同一自营工作的通用安装服务。

- 采集对象：实际单独供应套管接头井帽密封及完井组件
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由称重或供应方同型号证据及领用数量记录每种组件质量；保留身份，排除 well_casing 或灌浆供货内已含组件。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_completion_materials`
- 来源：`massdep-private-well-guidelines`

数量范围证据需求：须有实际供货清单、相容设计和同型号质量；异质组件不得求和成为一个交换。

#### 采集要求：真实向外交接的未用可用完井材料 (`completion_returns`)

过程／待建立交换的方向／类型：`well_completion` / `outputs` / `product`.

仅真实向外退回且仍可用的已识别套管/组件/灌浆产品符合。匹配运单和接收交接；期末留存库存是向后续任务结转的平衡，不是输出交换。

- 采集对象：真实向外交接的未用可用完井材料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：在总收货核算下按材料/批次记录向外退料总量；不得先从上游交换净除再重复计输出。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_completion_balance`

数量范围证据需求：须有实际向外交接、数量及供应方贷项/接收证据；无默认退料比例。

#### 采集要求：进入实际废物路线的完井边角料拒收组件及浆渣 (`completion_waste`)

过程／待建立交换的方向／类型：`well_completion` / `outputs` / `waste`.

按组成和接收方分别实例化废金属、拒收组件及硬化/液态浆渣。封隔/井口缺陷返回 well_completion，保留额外材料及废物；非法或未决处置阻止定稿。

- 采集对象：进入实际废物路线的完井边角料拒收组件及浆渣
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量每种向外废物流并与领用、置入材料、退料和留存核对；内部返工材料不得重复成为向外废物。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_completion_balance`

数量范围证据需求：须有实际组件拒收、批次残余、称重及去向；无通用安装损失或废料抵扣。

#### 采集要求：实际表征的灌浆连接及完井清洗排放 (`completion_releases`)

过程／待建立交换的方向／类型：`well_completion` / `outputs` / `elementary`.

条件性要求：按灌浆置入、真实连接和清洗实例化实际表征物质/组分及空气/水/土壤介质。受控收集的浆渣/清洗废水归 completion_waste，依法向环境排放属于基本流；不得仅因存在浆料就虚构化学反应或排放。

- 采集对象：实际表征的灌浆连接及完井清洗排放
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用实际监测或有据适用方法及实际批次/活动、物质基准和介质；区分浆/溶液混合物质量与污染物质量，相关未测排放保留为缺口。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_completion_releases`

数量范围证据需求：须有实际连接/灌浆/清洗材料、排放是否发生、浓度/流量或有效因子、介质及不确定性；不设通用浆料排放或零排放假设。

#### 采集要求：实际供应状态施工井消毒溶液或化学品 (`disinfection_product`)

过程／待建立交换的方向／类型：`develop_accept` / `inputs` / `product`.

明确实际批准配方、收货浓度、稀释水和使用批次。本阶段为钻井者初次井消毒；后续永久泵/系统消毒须有明确责任人并在本土建范围外。

- 采集对象：实际供应状态施工井消毒溶液或化学品
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按批次记录配方领用总量及实际浓度；仅凭有据配方计算活性化学品，不增加第二次配方上游负担。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_disinfect`
- 来源：`massdep-private-well-guidelines`

数量范围证据需求：须有实际授权浓度、接触时长、水质及冲洗终点；不设通用氯剂量或一次必合格假设。

#### 采集要求：实际单独供应取样及施工试验耗材 (`sampling_consumables`)

过程／待建立交换的方向／类型：`develop_accept` / `inputs` / `product`.

分别实例化未被外部实验室服务覆盖的真实样品容器、防腐剂和一次性试验耗材。记录样品事件和批准方法、运输包装及接收方；不得假设实验室包装同时由钻井方购入。

- 采集对象：实际单独供应取样及施工试验耗材
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按不同材料记录实际取样/复验可归属任务收货/领用总量；分别核对使用、真实向外可用退料、废物和留存，不得净除退料后再计一次。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_test_materials`

数量范围证据需求：须有实际取样方案、样品数、组成/质量及供应服务范围；不固定每井瓶数或试验次数。

#### 采集要求：洗井临时出水量试验冲洗和取样取用地下水 (`test_groundwater`)

过程／待建立交换的方向／类型：`develop_accept` / `inputs` / `elementary`.

分别记录洗井、临时泵送/出水量试验、消毒冲洗及取样的实际含水层取水，与外供水区分。临时泵供应/能耗归牵头 bore_removal 操作者。此取水是施工活动，不是全寿命饮用水生产或地下水联产品。

- 采集对象：洗井临时出水量试验冲洗和取样取用地下水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用事件特定实测流量和时间/水位记录及水源归属；计算 kg 时核实密度；核对循环回用而非每次循环都当新取水。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_dev_resource`
- 来源：`massdep-private-well-guidelines`

数量范围证据需求：须有实际试验流量/速率/时长、洗井体积和循环/水源平衡；不得用名义出水量乘虚构时长。

#### 采集要求：交付受管理处理处置的洗井试验及消毒冲洗液 (`development_managed_liquid`)

过程／待建立交换的方向／类型：`develop_accept` / `outputs` / `waste`.

按水质及接收方实例化实际取出水/浆液/消毒冲洗废液。依据实际检测确定合法交接；不得把污染/含氯水列为可售产品，亦不得把全部取水当排放。

- 采集对象：交付受管理处理处置的洗井试验及消毒冲洗液
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按事件和接收方计量/称量交付液体；核对取用加外供水、留存/循环水、样品及实际排放。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_dev_disposition`
- 来源：`massdep-private-well-guidelines`

数量范围证据需求：须有实际水质/氯/固体表征、质量及处置接收记录；无通用脱氯或废液比例。

#### 采集要求：进入实际废物路线的捕集洗井沉积物及废取样耗材 (`development_waste`)

过程／待建立交换的方向／类型：`develop_accept` / `outputs` / `waste`.

捕集洗井细屑与已计液体分开；按材料/污染状态和接收方拆分真实一次性试验废物。复验废物仍归验收任务。

- 采集对象：进入实际废物路线的捕集洗井沉积物及废取样耗材
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每种不同废物身份称重或采用可追溯单件质量；湿沉积物水与 development_managed_liquid 分开。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_dev_disposition`

数量范围证据需求：须有实际捕集沉积物、耗材质量/污染和去向；无默认沉积物或试验废物产生率。

#### 采集要求：实际表征的洗井试验及消毒排放 (`development_releases`)

过程／待建立交换的方向／类型：`develop_accept` / `outputs` / `elementary`.

依法排放记录须实例化实际物质/组分及受纳介质，包括真实排出的残留消毒剂及返回环境的水。水资源平衡与污染物质量不同；溶液质量不得等同氯质量。

- 采集对象：实际表征的洗井试验及消毒排放
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按实际体积和有代表性浓度/形态或有据适用方法计算物质特定排放；避免重复计废物转移。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_dev_disposition`
- 来源：`massdep-private-well-guidelines`

数量范围证据需求：须有实际排放许可/方法、介质、浓度/时间及不确定性；冲洗完毕或缺乏测量均不能证明零排放。

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| bore_removal | 地层钻进与资源移除责任 | required | 始终；实际覆盖层/固结基岩移除及全部可归属尝试 | 独立来源/移除责任：已钻井孔及捕集岩屑/水交至完井/接收方，与组件集成分开；牵头操作者仅一次拥有全任务共享采购/资产/物流，按实际事件在三项责任分配，不设支持伪过程 | 每参考流可归属实际钻进区间/几何及残余数量 |
| well_completion | 套管封隔及井口集成 | required | 始终；实际设计可能将套管/封隔与钻进穿插 | 独立装配/集成供应套管/接头/浆料/井帽/密封至洗井前验收完井门槛；缺陷返回此责任 | 每参考流实际安装套管/封隔/井口数量 |
| develop_accept | 洗井临时试验消毒及土建验收 | required | 始终；实际洗井/试验/消毒/取样方案；失败重复或封闭 | 独立处理责任：已完工但未洗井/未消毒土建井 → 实际细屑移除/洗井/初次消毒及试验 → 合格验收无永久泵土建井交接；捕集残余与真实排放分开，并明确后续责任人 | 每参考流 1 item 已验收土建井 |

### 过程：地层钻进与资源移除责任 (`bore_removal`)

#### 输入

##### 产品流

###### 空气钻进时外供注入水 (`drill_injected_water`)

跨越任务边界供抑尘/携屑或钻进使用的水是购入产品。记录实际来源和质量；随钻进入井孔的地下水另列资源取用。不得假设泥浆回转钻井液清单。

- 选定流：空气钻进时外供注入水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按来源分别计量实际注入水质量；实际体积转换为 kg 须有温度和有据密度。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_drill_water`
- 来源：`frtr-air-rotary`

数量范围证据需求：须有实际注水设置、时长、计量收货/使用和水质；不支持通用用水/钻深或燃料比。

###### 实际单独供应施工及临时试验电力 (`support_electricity`)

记录实际供应方/电压/电网或发电边界及事件计量工具、空压机/试验泵电量。后续永久泵/住宅用电排除；充电只计一次，现场发电燃料不得再列购入电网输入。

- 选定流：实际单独供应施工及临时试验电力
- 流属性/单位：能量 / kWh
- 数量规则：采用实际范围内任务的表读数差，并披露共享表归属；保留真实 kWh 及未解析 Energy 支持，不换成数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

数量范围证据需求：须有实际计量、供应组合/时期及工具/试验归属；无每井 kWh 或额定功率乘时长默认。

###### 实际单独供应施工阶段实验室分析服务 (`laboratory_analysis`)

条件性纳入归属施工验收/复验的真实独立实验室分析。1 item 表示声明方法/参数的一份实际分析包/样品服务；不兼容分析包是不同交换。供应方已含容器/防腐剂/运输仅计一次；不虚构阶段合同外的实验室活动。

- 选定流：实际单独供应施工阶段实验室分析服务
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：按供应方/方法/样品及责任试验事件记录真实交付分析包数，包括失败/复验；保留确切覆盖，不把分析换成小时。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_laboratory`

数量范围证据需求：须有实际实验室范围/方法/分析包、样品标识/数量及供应覆盖；每井不固定试验数，也不默认不同试验等价。

###### 实际交付状态外供压缩空气 (`supplied_compressed_air`)

仅压缩空气作为外供产品真实跨越任务边界时条件性纳入；声明供应方、组成/质量及压力/温度/交付状态。自有空压机环境吸入及燃料/资产归自营供应路线，不得再产生同一外供空气负担。

- 选定流：实际交付状态外供压缩空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录交付质量，或以实际计量状态限定体积及有据状态/组成特定密度换算；保留原体积/压力/温度及供应范围。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplied_air`

数量范围证据需求：须有实际外供存在、交付计量/状态/密度及上游压缩覆盖；不得仅因空气回转就假设购入空气。

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：套管封隔及井口集成 (`well_completion`)

#### 输入

##### 产品流

###### 单独供应拌浆及完井清洗水 (`grout_water`)

按用途/事件/来源记录实际单独外供的嵌入式拌浆水及条件性完井清洗水。成品浆内含水由 sealing_grout 覆盖；现场取地下水须另立实际环境资源交换。清洗水仅实际使用时纳入，无通用数量。

- 选定流：单独供应拌浆及完井清洗水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按用途/来源分别计量或称量实际批次拌浆和条件性清洗水；保留实际体积、温度及有据密度用于 kg 转换，并核对浆渣/清洗液。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_grout`

数量范围证据需求：须有实际灌浆供应状态、发生拌浆时的配方、清洗是否发生、用途特定计量及体积密度证据；不设通用水比或清洗体积。

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：洗井临时试验消毒及土建验收 (`develop_accept`)

#### 输入

##### 产品流

###### 外供洗井冲洗消毒补水及取样水 (`development_water`)

按真实用途/来源分别记录购入/注入水。基岩空气钻进细屑须通过实际冲洗和洗井处理后再作出水量试验；路线证据支持纳入，实际授权文件决定方法/终点。不得用外供饮用水生产替代井内取水。

- 选定流：外供洗井冲洗消毒补水及取样水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按事件/用途计量外供水；分开嵌入式消毒稀释水与配方产品内含水，同一批次不重复计。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_dev_water`
- 来源：`massdep-private-well-guidelines`

数量范围证据需求：须有实际洗井/冲洗/稀释方案、流量/时间及计量；不设通用体积、小时或沉积物阈值。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已验收空气回转基岩水井土建施工与洗井服务 (`accepted_civil_well`)

唯一参考输出为一口实际完工并验收的无永久水泵土建井，符合明确场址/几何及施工阶段洗井/试验/消毒门槛。纳入可归属任务失败尝试、依法封闭/补救及全部修复/复验循环。失败井孔或未关闭的不合格样品/试验不是验收输出。

- 选定流：已验收空气回转基岩水井土建施工与洗井服务
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：1 item
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_accept`
- 来源：`massdep-private-well-guidelines`

数量范围证据需求：参考数量按定义恰为一，不是产率先验。须有实际验收井身份和签署门槛证据；无通用出水量、饮用适用性或成井深度。

##### 废物流

##### 基本流

## 7. 分配与联产品处理

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| single_service | 所有过程 | 预期服务为一口验收的无永久泵土建井。不假定销售地下水/钻屑联产品或避免生产抵扣。真实回收产品出口如存在，须证明产品状态/去向并披露分配，废物处理仍负责。 |  |
| failed_attempts | 所有过程 | 将井孔尝试/补救/试验/样品事件关联任务及产生过程；将可归属任务失败、合法封闭、修复/复验分配给验收任务。独立合同且无关的勘探须另有明确责任/门槛，不隐去失败负担，不增加验收井数。 |  |
| asset_share | support_assets | 逐一资产采用完整寿命生产/投用/维护/更换/移除负担及本任务实际服务份额。记录覆盖其他任务/报告期的寿命服务分母及有据使用/闲置分配。供应方覆盖阶段和自有使用输入仅计一次；缺分母/退役证据为缺口而非零。 |  |
| period_link | bore_removal | 按资产/任务/日期/报告期索引每个资产阶段/事件/输入，包括跨期更换和退役。对同一完整寿命核对份额，不重复逐年全额计资产，也不把后期永久泵运行归施工。 |  |
| material_custody | 所有材料行 | 按真实身份采用归属收货/期初库存及领用总量，分别核对置入/使用、实际向外可用退料、废物/排放和期末库存。总投入核算下，向外退料不得先净除再计一次。留存库存按明确移交基准结转负担，不是向外产品。 |  |
| service_overlap | support_services | bore_removal 牵头所有权记录采购一次，并按实际 node_id/event 任务份额归属 bore_removal、well_completion、develop_accept。查明供应方燃料、水、材料、资产、运输和处置范围；角色或由有界供应清单覆盖，或采用实际前景输入。补缺生产/移除时不重复已覆盖阶段，不叠加通用服务及其全部自营清单。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_drill_water | bore_removal | 外供注水 | 原始记录 | job_id; bore_id; event_id; water_source; receipt_kg; opening_kg; closing_kg; outward_return_kg; meter_start; meter_end; volume_m3; temperature_C; density_kg_m3 | 按水源核对收货/库存及注水表记录；实测体积采用有据状态特定密度，仅分配本任务并保留实际用途。 | kg; m3; degC | 每个实际事件 | 全任务，包括失败/复验；适用时关联实际资产时期 | 实际场址/任务及明确供应方和接收方 | per reference flow | 校准/可追溯原始记录、真实身份/供应方及不确定性；定稿前关闭覆盖缺口。 |
| cp_drill_chem | bore_removal | 钻进配方材料 | 原始记录 | job_id; bore_id; event_id; bit_hammer; formulation_id; supplier; active_fraction; gross_issued_kg; returned_kg; closing_stock_kg; provider_coverage | 查明实际钻头/锤要求及产品批次/SDS；按配方称量领用并记录真实使用和向外退料，纳入失败井孔和空压机携带材料证据。 | kg | 每个实际事件 | 全任务，包括失败/复验；适用时关联实际资产时期 | 实际场址/任务及明确供应方和接收方 | per reference flow | 校准/可追溯原始记录、真实身份/供应方及不确定性；定稿前关闭覆盖缺口。 |
| cp_drill_resource | bore_removal | 地下水资源取用 | 原始记录 | job_id; bore_id; event_id; aquifer; location; total_removed_m3; injected_m3; recirculated_m3; retained_m3; groundwater_m3; temperature_C; density_kg_m3; balance_uncertainty | 采用明确混合水源平衡及实际计量/流量时间证据测量或估算地下水部分；保留方法局限，将新取水与循环分开。 | kg; m3; degC | 每个实际事件 | 全任务，包括失败/复验；适用时关联实际资产时期 | 实际场址/任务及明确供应方和接收方 | per reference flow | 校准/可追溯原始记录、真实身份/供应方及不确定性；定稿前关闭覆盖缺口。 |
| cp_air | bore_removal | 空压机环境吸入 | 原始记录 | asset_id; event_id; inlet_flow_m3_h; inlet_pressure_kPa; inlet_temperature_C; humidity; operating_h; density_kg_m3; supply_type; inclusion_method | 采用校准实际入口流量/状态/时间或有据经核实工程平衡；声明清单方法是否要求环境吸入。单独购入空气按实际供应身份记录，同一空气不得同时环境和购入计量。 | kg; m3/h; kPa; degC; h | 每个实际事件 | 全任务，包括失败/复验；适用时关联实际资产时期 | 实际场址/任务及明确供应方和接收方 | per reference flow | 校准/可追溯原始记录、真实身份/供应方及不确定性；定稿前关闭覆盖缺口。 |
| cp_cuttings | bore_removal | 地层/钻屑移除 | 原始记录 | job_id; bore_id; formation_log; interval_depth_m; bore_diameter_mm; load_id; wet_mass_kg; dry_solids_kg; entrained_water_kg; contamination; stock_kg; receiver; custody_id | 记录地质/深度/直径及容器/载荷称重；按需采样含水/污染，核对固体/水、留存及接收单，不把几何体积当实测质量。 | kg; m; mm | 每个实际事件 | 全任务，包括失败/复验；适用时关联实际资产时期 | 实际场址/任务及明确供应方和接收方 | per reference flow | 校准/可追溯原始记录、真实身份/供应方及不确定性；定稿前关闭覆盖缺口。 |
| cp_drill_liquid | bore_removal | 受管理钻井液体 | 原始记录 | event_id; container_id; waste_identity; volume_m3; density_kg_m3; suspended_solids; receiver; custody_id; included_cuttings_water_kg | 逐一计量/称量独立交付流，表征实际组成并核对岩屑内含液体，避免重复转移。 | kg; m3 | 每个实际事件 | 全任务，包括失败/复验；适用时关联实际资产时期 | 实际场址/任务及明确供应方和接收方 | per reference flow | 校准/可追溯原始记录、真实身份/供应方及不确定性；定稿前关闭覆盖缺口。 |
| cp_drill_releases | bore_removal | 钻进排放 | 原始记录 | event_id; substance; species_basis; particle_size; medium; release_flow_m3; concentration_mg_L; release_mass_kg; capture_fraction; method_id; uncertainty | 监测实际排放或以实际活动、物质/介质及不确定性采用有据适用测量/因子方法。偶发地层影响另作记录，区分排水量与污染物质量。 | kg; m3; mg/L | 每个实际事件 | 全任务，包括失败/复验；适用时关联实际资产时期 | 实际场址/任务及明确供应方和接收方 | per reference flow | 校准/可追溯原始记录、真实身份/供应方及不确定性；定稿前关闭覆盖缺口。 |
| cp_completion_materials | well_completion | 套管/组件 | 原始记录 | job_id; bore_id; material_id; model; grade; dimensions_mm; installed_length_m; issued_count; item_mass_kg; gross_receipt_kg; opening_stock_kg; placed_kg; return_kg; waste_kg; closing_stock_kg; bill_of_supply | 核对实际授权套管/井口图和供应批次；称量组件或用同型号质量乘实测数量，分开成套包含和单供组件，并记录置入/缺陷修正。 | kg; m; mm; item | 每个实际事件 | 全任务，包括失败/复验；适用时关联实际资产时期 | 实际场址/任务及明确供应方和接收方 | per reference flow | 校准/可追溯原始记录、真实身份/供应方及不确定性；定稿前关闭覆盖缺口。 |
| cp_grout | well_completion | 灌浆及嵌入用水 | 原始记录 | job_id; bore_id; batch_id; event_id; water_purpose; water_source; supplied_state; approved_recipe; ingredient_id; ingredient_kg; water_kg; cleanup_water_kg; water_volume_m3; temperature_C; density_kg_m3; grout_yield_kg; placed_kg; residue_kg; return_kg; closing_stock_kg; annulus_geometry; placement_record; cure_record | 核实实际地质相容的授权灌浆规格及供应/制备门槛。配方/配料/批次字段仅适用真实嵌入拌浆；否则成品浆仅计一次。按用途/事件/来源分别计量条件性完井清洗水，保留体积/温度/密度以换算质量并记录清洗液去向。保留实际置入/养护及质量平衡。 | kg; m3; degC; 批准记录中实际几何和养护单位 | 每个实际事件 | 全任务，包括失败/复验；适用时关联实际资产时期 | 实际场址/任务及明确供应方和接收方 | per reference flow | 校准/可追溯原始记录、真实身份/供应方及不确定性；定稿前关闭覆盖缺口。 |
| cp_completion_balance | well_completion | 材料退料/废物 | 原始记录 | job_id; batch_id; material_identity; gross_in_kg; installed_kg; usable_return_kg; outward_custody_id; waste_kg; receiver; retained_stock_kg; carried_burden_basis; defect_id; disposition | 按身份称量并核对实际安装损失、拒收组件和浆渣；向外退料须有接收凭证，期末库存结转负担，未关闭缺陷不得验收。 | kg | 每个实际事件 | 全任务，包括失败/复验；适用时关联实际资产时期 | 实际场址/任务及明确供应方和接收方 | per reference flow | 校准/可追溯原始记录、真实身份/供应方及不确定性；定稿前关闭覆盖缺口。 |
| cp_dev_water | develop_accept | 外供洗井水 | 原始记录 | job_id; bore_id; event_id; purpose; source; supplied_water_kg; volume_m3; density_kg_m3; formulation_water_included; endpoint; protocol_ref | 按水源/用途计量外供注入/冲洗/稀释水，保留实际授权洗井终点；核对配方内含水及循环/复验事件。 | kg; m3 | 每个实际事件 | 全任务，包括失败/复验；适用时关联实际资产时期 | 实际场址/任务及明确供应方和接收方 | per reference flow | 校准/可追溯原始记录、真实身份/供应方及不确定性；定稿前关闭覆盖缺口。 |
| cp_disinfect | develop_accept | 钻井者初次消毒 | 原始记录 | job_id; bore_id; event_id; formulation; gross_issued_kg; active_fraction; dilution_water_kg; prescribed_concentration_unit; actual_concentration; prescribed_contact_unit; actual_contact; water_quality; flush_endpoint; protocol_ref; repeat_reason | 查明实际授权场址消毒方案、产品标签及批次记录；浓度/时长保留原单位、稀释、条件和冲洗终点。关联样品结果/重复原因及后续泵/系统责任人。 | kg; 实际方案声明的浓度及接触时长单位 | 每个实际事件 | 全任务，包括失败/复验；适用时关联实际资产时期 | 实际场址/任务及明确供应方和接收方 | per reference flow | 校准/可追溯原始记录、真实身份/供应方及不确定性；定稿前关闭覆盖缺口。 |
| cp_dev_resource | develop_accept | 施工地下水取用 | 原始记录 | job_id; bore_id; event_id; aquifer; purpose; pump_id; rate_m3_h; duration_h; meter_start_m3; meter_end_m3; static_level_m; drawdown_m; recovery_m; recirculated_m3; external_water_m3; density_kg_m3; protocol_ref | 采集实际洗井/出水量试验/冲洗/样品水计量及时间/水位记录；分开含水层取水、外加水和循环回用，不用名义流量/时长替代。 | kg; m3; m3/h; h; m | 每个实际事件 | 全任务，包括失败/复验；适用时关联实际资产时期 | 实际场址/任务及明确供应方和接收方 | per reference flow | 校准/可追溯原始记录、真实身份/供应方及不确定性；定稿前关闭覆盖缺口。 |
| cp_test_materials | develop_accept | 样品/试验材料 | 原始记录 | job_id; sample_id; event_id; method_ref; material_id; gross_issued_kg; item_count; item_mass_kg; returned_kg; closing_stock_kg; laboratory_coverage | 采用实际样品方案及实验室/供应范围，称量或按样品数核对耗材，纳入真实重复试验，不重复已含瓶/防腐剂。 | kg; item | 每个实际事件 | 全任务，包括失败/复验；适用时关联实际资产时期 | 实际场址/任务及明确供应方和接收方 | per reference flow | 校准/可追溯原始记录、真实身份/供应方及不确定性；定稿前关闭覆盖缺口。 |
| cp_accept | develop_accept | 验收土建服务 | 原始记录 | job_id; well_id; site; jurisdiction; geology; non_flowing_evidence; approved_design; driller_qualification; bore_attempt_ids; casing_seal_wellhead_acceptance; development_endpoint; test_protocol; test_flow_unit; test_duration_unit; drawdown_recovery_units; actual_test_results; disinfection_flush_records; sample_method_results; defect_dispositions; closure_records; accepted_count; signed_gate; later_pump_disinfection_owner; water_service_approval_owner | 独立核对施工/竣工记录及实际批准试验/取样标准和已签署无永久泵土建交接。全部可归属不足井孔/缺陷/复验关闭后才计一口；明确移交后续永久泵/系统和饮用水批准责任。 | item; 保留实际几何/试验/质量单位 | 每次验收及每个失败/修复/试验事件 | 全任务，包括失败/复验；适用时关联实际资产时期 | 实际场址/任务及明确供应方和接收方 | per reference flow | 有签署的阶段特定门槛、合格主管方/设计标准和可追溯实际结果；土建验收本身不证明可饮用或完整供水系统批准。 |
| cp_dev_disposition | develop_accept | 水/沉积物/试验残余及排放 | 原始记录 | job_id; event_id; stream_id; substance; species_basis; medium; volume_m3; wet_mass_kg; solids_kg; entrained_water_kg; concentration_mg_L; active_chlorine_basis; sample_mass_kg; recirculation_m3; stock_kg; receiver; custody_id; release_authorization; uncertainty | 核对含水层/外供输入与受管理液体、沉积物水、循环、样品、库存及合法真实排放。称量捕集废物；按有代表性浓度/流量、单位/形态基准确定各污染物质量，不把溶液质量当活性消毒剂。 | kg; m3; mg/L | 每个实际事件 | 全任务，包括失败/复验；适用时关联实际资产时期 | 实际场址/任务及明确供应方和接收方 | per reference flow | 校准/可追溯原始记录、真实身份/供应方及不确定性；定稿前关闭覆盖缺口。 |
| cp_energy | bore_removal | 燃料及电力 | 原始记录 | job_id; asset_id; node_id; event_id; fuel_identity; receipt_kg; opening_stock_kg; closing_stock_kg; returned_kg; consumed_kg; volume_L; density_kg_L; temperature_C; meter_start_kWh; meter_end_kWh; provider_scope; reporting_period | 按资产/任务计量或库存平衡各实际燃料/电源；保留实际体积密度转换、充电/发电机/供应覆盖。按原始任务记录分配共享使用，包括失败/复验，分开运输消耗。 | kg; L; kWh; degC | 每个实际事件 | 全任务，包括失败/复验；适用时关联实际资产时期 | 实际场址/任务及明确供应方和接收方 | per reference flow | 校准/可追溯原始记录、真实身份/供应方及不确定性；定稿前关闭覆盖缺口。 |
| cp_assets | bore_removal | 全寿命共享资产供应 | 原始记录 | asset_id; provider; coverage_phases; consuming_node; job_id; reporting_period; task_h; idle_h; lifetime_service_h; production_record; commissioning_date; maintenance_events; replacement_events; retirement_date; removal_route; allocation_method; uncertainty | 建立跨实际任务/时期及所有责任消费者的完整资产/事件台账。核实供应覆盖，用实测任务使用及有据全寿命分母分配未覆盖资本/维护/移除，说明闲置处理。保留更换/退役证据并核对全部份额，否则披露资产覆盖不完整。 | h; 保留实际阶段数量/单位 | 每次任务及更换/移除事件；逐期核对 | 全任务，包括失败/复验；适用时关联实际资产时期 | 实际场址/任务及明确供应方和接收方 | per reference flow | 供应范围和生产/维护/移除及实际寿命服务证据；无默认寿命或零资本负担。 |
| cp_transport | bore_removal | 实际物流 | 原始记录 | job_id; consignment_id; asset_material_id; provider; mode; leg_id; origin; destination; distance_km; payload_t; empty_leg; shared_load_fraction; trip_count; vehicle_km; supplied_service_unit; supplier_coverage | 利用运单/路线、实测载荷及服务单位核对真实送货/进退场/废物运输分段。纳入有责任的空返/共享段，避免自有车辆燃料/资产与完整购入运输重复。 | tkm; t; km; vehicle-km; 实际测量趟次 | 每个实际事件 | 全任务，包括失败/复验；适用时关联实际资产时期 | 实际场址/任务及明确供应方和接收方 | per reference flow | 校准/可追溯原始记录、真实身份/供应方及不确定性；定稿前关闭覆盖缺口。 |
| cp_services | bore_removal | 独立按时间供应服务 | 原始记录 | job_id; node_id; event_id; provider; time_based_service_identity; delivered_h; delivery_gate; source_boundary; materials_coverage; energy_coverage; asset_phases_coverage; transport_coverage; waste_coverage; record_id | 查明真实按时间合同/交付范围、实测小时及独立责任门槛，将覆盖/排除工作关联全部三项责任。不得把实验室样品或空气量转换成小时，缺失清单阶段补一次。 | h | 每个实际事件 | 全任务，包括失败/复验；适用时关联实际资产时期 | 实际场址/任务及明确供应方和接收方 | per reference flow | 校准/可追溯原始记录、真实身份/供应方及不确定性；定稿前关闭覆盖缺口。 |
| cp_support_materials | bore_removal | 磨损/维护用品 | 原始记录 | job_id; asset_id; node_id; event_id; material_formulation_id; gross_issued_kg; return_kg; stock_kg; replacement_event; life_share; provider_coverage | 称量实际单独消耗维护/磨损用品或采用同型号质量并记录更换；识别资本已含零件及锤润滑，避免重复。 | kg | 每个实际事件 | 全任务，包括失败/复验；适用时关联实际资产时期 | 实际场址/任务及明确供应方和接收方 | per reference flow | 校准/可追溯原始记录、真实身份/供应方及不确定性；定稿前关闭覆盖缺口。 |
| cp_support_balance | bore_removal | 包装/支持残余交接 | 原始记录 | job_id; product_or_waste_identity; material_kg; packaging_included; gross_receipts_kg; opening_stock_kg; issues_kg; outward_returns_kg; receiver; custody_id; waste_kg; closing_stock_kg; carried_burden_basis | 按身份核对支持材料/包装收货总量及真实向外可用退料/废物；保留期末库存及负担基准。匹配供应已含包装/移除和全寿命资产退役，避免重复输入/出口。 | kg | 每个实际事件 | 全任务，包括失败/复验；适用时关联实际资产时期 | 实际场址/任务及明确供应方和接收方 | per reference flow | 校准/可追溯原始记录、真实身份/供应方及不确定性；定稿前关闭覆盖缺口。 |
| cp_support_emissions | bore_removal | 发动机及支持排放 | 原始记录 | job_id; asset_id; node_id; event_id; fuel_activity; engine_model; operating_state; pollutant; species_basis; particle_size; medium; measurement; factor_ref; factor_unit; control_state; release_mass_kg; provider_coverage; uncertainty | 采用实测排放或以真实活动使用有据适用发动机/燃料/控制因子；保留因子版本/单位/形态及上游/供应边界。相关未测排放披露为缺口，排除另计钻进/消毒排放。 | kg; 实际因子/活动单位 | 每个实际事件 | 全任务，包括失败/复验；适用时关联实际资产时期 | 实际场址/任务及明确供应方和接收方 | per reference flow | 校准/可追溯原始记录、真实身份/供应方及不确定性；定稿前关闭覆盖缺口。 |
| cp_laboratory | bore_removal | 条件性独立实验室分析 | 原始记录 | job_id; node_id; event_id; sample_id; provider; method; parameters; analysis_package; delivered_count; included_containers; included_preservatives; transport_coverage; retest_reason; record_id | 以样品/事件标识及供应方法/覆盖计数真实交付的兼容分析包；不同包分开并关联施工验收/复验。本阶段合同外分析不得悄然引入。 | item | 每个实际事件 | 全任务，包括失败/复验；适用时关联实际资产时期 | 实际场址/任务及明确供应方和接收方 | per reference flow | 实际分析包/方法/计数记录及可追溯供应范围，避免重复样品材料和运输。 |
| cp_supplied_air | bore_removal | 条件性外供压缩空气 | 原始记录 | job_id; node_id; event_id; provider; supply_record; composition; quality; delivered_mass_kg; volume_m3; pressure_kPa; temperature_C; density_kg_m3; compression_coverage; owned_air_excluded | 确认外供产品确实存在；计量交付质量或实际状态限定体积，采用有据状态/组成特定密度。关联供应方压缩边界，排除同量自有空压机空气/能耗/资产重复。 | kg; m3; kPa; degC | 每个实际事件 | 全任务，包括失败/复验；适用时关联实际资产时期 | 实际场址/任务及明确供应方和接收方 | per reference flow | 实际计量/状态/密度及供应覆盖；无通用空气质量/压力或默认外供空气。 |
| cp_completion_releases | well_completion | 条件性完井排放 | 原始记录 | job_id; bore_id; event_id; grout_or_joining_material; cleanup_activity; substance; species_basis; medium; release_flow_m3; concentration_mg_L; release_mass_kg; method_id; waste_coverage; uncertainty | 监测真实灌浆/连接/清洗排放或用适用有据方法；保留物质/介质及溶液与活性质量区分。受控收集的残渣/液体归 completion_waste；相关未测排放为缺口，绝非零。 | kg; m3; mg/L | 每个实际事件 | 全任务，包括失败/复验；适用时关联实际资产时期 | 实际场址/任务及明确供应方和接收方 | per reference flow | 实际活动/材料、排放证据/方法、环境介质及不确定性；不虚构通用浆料排放。 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| job_normalization | 所有清单行 | 采集全部可归属任务事件、失败和供应/资产份额，再将每种同质交换量除以同一路线/门槛实际已验收土建井数。没有已完成水井时，不得形成归一化验收服务数据集。 | 实际事件/数量记录; accepted_count; job_id | 每参考流数量 |  |
| physical_balance | 所有材料及水行 | 按身份将实际期初加收货总量与置入/使用、有据向外退料、废物/排放和期末留存核对；记录转换/测量不确定性及各物理去向。本平衡不为库存虚构产品输出或为废物抵扣。 | 实际总量/交接/计量/库存记录 | 已核对实际交换量及数据缺口 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| route_gate | accepted_civil_well | 场址/地质/非自流/空气回转路线及无永久泵门槛须符合实际许可/设计；施工出水量/取样验收是阶段特定，不是供水使用批准。 | cp_accept; 实际批准记录 |
| identities | 所有清单行 | 条件性总括须展开为实际具体交换；最终 TIDAS 过程发布前独立核实身份、属性和单位。未核实的 Energy/Duration/Transport 支持保留未解析。 | 实际供应/接收/物质记录及核实平台链 |
| balances | 所有材料及水行 | 按身份核对收货/期初库存总量、置入/使用、真实向外退料、废物/排放及期末库存。水源和湿固体基准须连同量化不确定性闭合，不得净除再重复退料。 | 称重/计量/交接平衡 |
| period_assets | support_assets | 以可追溯分母及供应阶段边界覆盖完整资产生产/使用/维护/更换/移除、其他任务和报告期；未解决退役/更换阻止定稿。 | cp_assets 寿命台账及供应范围 |
| uncertainty | 所有行 | 报告实际日期、校准/检出限、覆盖、样品代表性及计算因子适用性。缺失/估算数量或排放须明确，不用零占位。 | 协议记录及不确定性台账 |
| tests | develop_accept | 保留实际出水量试验方法、时长/流量/水位及设计验收来源，施工消毒浓度/接触/冲洗终点及规定单位/容差，实际认证实验室/主管方标准和全部失败/复验关闭。 | cp_accept; cp_disinfect; 实际授权方案 |
| coverage | 所有过程 | 纳入运输、磨损、包装、化学品、能源、共享资产、失败井孔及废物接收方。识别实际新增准备工程责任方/门槛及供应已含各角色。 | 范围/覆盖矩阵及事件/交接记录 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| scope_fit | accepted_civil_well | 地质/自流/技术/系统范围排除项须判路线不符，不得删除必需工程以强行符合边界。 |  |
| gate_count | accepted_civil_well | 每参考只计一口实际完工土建井；核对 accepted_count、签署门槛、确切阶段标准、真实试验/样品结果及后续责任人。拒收/未完井孔不得为参考输出。 | massdep-private-well-guidelines |
| water_source_balance | 所有水及残余物行 | 核实购入/注入水与地下水取用、循环/库存及岩屑含水/管理液体/排放；不重复混合物流、不销售假定地下水、不虚构含水层生产。 |  |
| identity_units | 所有清单行 | 实际身份及 Energy/Duration/Transport 支持未解析时不得形成最终具体交换。核实属性/单位组/单位链及明确物理转换；不得用近似钻井/监测/泵水 UUID 或把 h/kWh/tkm 转 Count。 |  |
| asset_periods | support_assets | 要求全部消费责任及其他任务/时期、阶段覆盖、寿命服务分配和更换/退役证据；核实生产/使用/移除只计一次，声明缺失覆盖。 |  |
| reject_closure | 所有过程 | 将失败井孔/缺陷完井/不合格洗井/出水量/样品匹配责任循环或合法封闭及残余接收方；保留全部归属负担，未关闭拒收不计验收数。 |  |
| custody | 所有材料行 | 核对实际总收货/领用/向外退料/废物/库存平衡及供应边界；留存不是向外产品，不得先净除退料后再计一次。 |  |
| range_quality | 所有清单行 | 满足每卡提出的实际范围证据需求，并保留实际规格/测量不确定性；来源示例不成为通用剂量/几何/出水量/时长/寿命/排放默认。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 已验收无永久泵水井土建施工/洗井服务前景数据包。 |
| downstream_use | secondary_dataset; background_dataset; process; lifecyclemodel |
| allowed_use | 在明确场址/几何/试验/资产边界及独立下游泵/系统责任下，比较或集成真实路线匹配的土建水井施工。 |
| excluded_use | 运行饮用水供应、保证可饮用、完整泵送系统、不相关钻井路线或等价体积供水生产。 |
| required_metadata | 全部参考限定信息；实际起止/门槛/供应方；事件/交接平衡；失败井孔/复验关联；资产阶段/时期/分母；来源/身份/支持状态。 |
| required_quality_disclosure | 实际完整性/不确定性、水/物质基准、来源适用性及未解决身份/数量范围/支持缺口；实际管辖设计/试验验收；无永久泵范围。 |
| update_trigger | 路线/地质/自流状态、实际设计/组件/灌浆/钻头/添加剂、来源/供应边界、试验/门槛方案或资产寿命/分配变化。 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf — CPC Version 3.0，2025年6月30日，印刷页289 | CPC 水井钻探含泵/管工作；本无永久泵语义范围更窄。 |
| frtr-air-rotary | official_guidance | https://www.frtr.gov/site/3_2_1.html — FRTR 现场取样与分析技术参考指南，3.2.1 直接空气回转 | 仅支持空气回转物理机理、地层/钻屑/水、实际钻头/锤/润滑/添加剂及排放问题，不作为私人水井规格或数值默认。 |
| massdep-private-well-guidelines | official_guidance | https://www.mass.gov/info-details/private-well-guidelines ; https://www.mass.gov/doc/private-well-guidelines/download — MassDEP 私人水井指南，2024年5月更新；限定章节印刷页42、52、68 | 基岩细屑冲洗/试验前洗井；实际地质相容环空封隔；钻井者初次与后续泵/系统消毒以及取样/复验责任。数值示例不是通用默认，实际授权项目标准控制门槛。 |
