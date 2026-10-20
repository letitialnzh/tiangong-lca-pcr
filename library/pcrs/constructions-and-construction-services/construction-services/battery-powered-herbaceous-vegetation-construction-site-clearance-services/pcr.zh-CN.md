---
pcr_id: pcr.battery-powered-herbaceous-vegetation-construction-site-clearance-services
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 电池供电手持工具施工场地草本植被清理服务

## 1. 范围与适用性

本 PCR 适用于施工前首次使用电池供电的手持割草刀片或打草头，对与实际获准设备附件相容的草及非木质草本植被进行地表以上切割，并完成收集和向所声明残余物接收方的移交。实际场地合同、保护范围、公用设施与通行接口及水土流失控制责任必须允许该路线。引用道路工程规范用于区分边界，其较广的清理与掘根范围及树桩数值要求不构成割草要求。

排除日常景观割草、农作物收获、木质灌丛与树木清除、树桩和根系掘除、表土剥离/开挖/平整/排水/爆破、现场切片/焚烧/除草剂、植被培育、接收方处理运行以及可销售生物质联产声明。提出有用生物质产品声明时，应先完成额外的联产品和边界审查，再将本方法用于该声明。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.battery-powered-herbaceous-vegetation-construction-site-clearance-services |
| classification_refs | CPC 3.0 54320；拟定 narrower 关系 |
| covered_products | 首次电池供电地表以上低矮植被施工场地清理及收集和残余物交接的验收服务 |
| excluded_products | 日常割草；作物收获；木质植被清除/掘根；土方；生物生产；生物质联产品生产 |
| representative_product | 验收合格的电池供电施工场地草本植被清理服务 |
| production_route | 获准边界和保护接口 → 相容电池工具切割 → 收集/暂存 → 所声明残余物接收方移交 → 缺陷关闭与清理阶段签署验收 |
| market_state | 仅验收清理服务；保留根系和土体；后续施工及接收方处理另行声明 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 验收合格的施工场地草/草本植被地表以上清理服务 |
| How much | 实际验收水平清理多边形的 1 m2，仅计量一次 |
| How well | 达到实际规定的留茬高度及收集状态；受保护植被完好或已修复；接收方交接与缺陷均关闭；不声明场地已可开挖 |
| How long or cycle | 一个首次清理周期，包括返工、收集、保护措施终止及接收方交接；设备负担另跨所有使用作业的制造、使用/维护/更换及终止处理期间 |
| reference_flow_link | `accepted_clearance` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 验收合格的电池供电施工场地草本植被清理服务 |
| 参考流属性 | 面积 `93a60a56-a3c8-19da-a746-0800200c9a66` |
| 参考单位组 | 面积单位组 `93a60a57-a3c8-18da-a746-0800200c9a66` |
| 参考单位 | m2 |
| 必需限定信息 | 获准和验收多边形标识；测量基准；排除区/保留植被岛；植被/物种/密度/含水状态；坡度/通行；相容切割机/附件/电池/充电器；实际规定留茬高度；收集完整性；接收方与交接状态；保护/水土流失控制接口；日期和验收权限 |


## 4. 计量与单位规则

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| reference_area | 参考产品 | 面积 `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | 采用 cp_acceptance 确定实际验收水平多边形面积。参考输出为 1 m2；批次总负担归属于同一面积。保留测量不确定性，不将返工重复作业面积纳入分母。 |
| wet_residual_mass | biomass_residual | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在实际交接时测量湿态净质量，另记含水率方法/日期。不得替换为干质量或推定通用面积质量换算。 |
| charging_boundary | charging_electricity | 能量 | kWh | 保留充电器供电侧电量，包括可归属损失/待机；电池铭牌容量并非实测电量。构建具体交换前必须确认精确 能量 支持身份。 |
| freight_boundary | freight_services | 货物运输 | t*km | 分别保存实际载荷质量和距离及供应商/空返覆盖范围。所选具体交换的精确运输支持必须核实。 |
| `count_unit_alias` | 存在时的计数交换 | Count | item | 本 PCR 的显示别名 item 表示已核实的物品数量单位组参考单位 Item(s)，系数为 1。具体数据集须保留实际参考单位身份；此书写别名不建立质量、面积或服务之间的等价关系。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 现有获准施工场地低矮植被；不移除根系/土体；通行、公用设施及保留植被接口已建立 |
| starting_condition_role | 环境初始存量及场地状态；不是购入作物投入，不虚构培育负担 |
| product_classification_scope | CPC 54320 内仅此较窄清理服务；不由分类本身扩展方法范围 |
| recursive_input_rule | 外包同类清理投入须带上游服务数据集及明确面积/作业标识；从自有前景记录中移除相应活动，验收多边形仅计一次。不追溯场地所有权或植被存量而产生递归。 |
| upstream_dataset_requirement | 实际电力、资产、材料和货运供应商数据集，应包含技术、地域、期间和已含负担范围；残余物下游处理覆盖另行声明 |
| disclosure | 实际切割/收集合同、源植被及残余物状态；作业标识及未验收面积；资产/使用方/期间；供应商覆盖；保护维护/终止责任；缺口和不确定性 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| limits_gate | clearance | 仅在获准清理边界内开展作业，记录实际植被保护及水土流失控制/通行/公用设施责任；清理造成的损害修复须计入实际负担。清理交付节点不证明全部水土保持措施已完成。 | fhwa-fp24-201 |
| cut_collect_gate | clearance | 切割和收集属于同一独立来源移除责任，终点为验收多边形和残余物交接。后续掘根、土方及接收方处理边界独立。 | fhwa-fp24-201; husqvarna-520irx-2024 |
| complete_assets | clearance | 完整清理周期须纳入实际充电、切割机/电池/充电器/工具、物流、材料、未合格工作及可归属保护维护/拆除。记录每个资产使用方和服务期间，包括其他作业；供应商已含范围防止重复负担。列明制造/供给、各使用/维护/更换报告期间及终止处理阶段。将每个资产投入/事件关联实际期间，将批次输出关联清理验收期间；更换/终止责任缺失阻止最终负担定案。 |  |
| no_crop_credit | clearance | 现有植被不得虚构培育投入、避免生产收益、碳固存声明或可售联产品假设。记录实际湿态残余物状态；有用产品声明须另行审查。 |  |
| `boundary_atomic_completion` | 所有过程 | 本节的采集要求是必须执行的采集与适用性指令，不是聚合清单交换。完成前景数据集前，必须为每一种实际产品、废物流、物质及环境子区室建立独立原子流卡／交换。保留全部实际事件、上游负荷、退回及原生单位；所链接公式应按每个兼容身份分别执行。环境资源提取记为输入，环境释放记为输出。不得相加不同原生单位、用一个 UUID 代表整个采集池、将缺记录解释为零，或与已有具体卡重复计入。保留宿主的文件性接口仅传递状态，不形成新采购资产。适用成员未明确或未有证据证明不存在时，定量清单仍不完整；非强制筛查提示不能补造数量或化学组成。 |  |

### 条件性清单补全要求

以下标识符表示采集池或文件性状态台账。一个池可能有零个、一个或多个实际成员。须依据真实记录判断适用性，并为每个成员保留原有数量方法和采集协议；只有兼容的数量才能共同核对。下列原有可选筛查区间仅作为暂定复核提示，不得强加于不同材料或混合采集池。

#### 采集要求：可归属可复用切割机电池充电器及收集工具供给 (`reusable_asset_provision`)

过程／待建立交换的方向／类型：`clearance` / `inputs` / `product`.

每项资产分别形成具体交换，依据有证据的完整服务寿命建模制造、维护及终止处理。概括卡片不得把不同设备合成一个物品。

数量范围证据需求：须有各资产寿命服务、更换/维修记录和分配不确定性；不设默认寿命或电池循环次数。

- 采集对象：可归属可复用切割机电池充电器及收集工具供给
- 流属性/单位：物品数量 / item
- 数量规则：按本批次有记录的寿命服务消耗归属每项实际资产供给；全部清理、收集、返工及其他作业使用方只计一次。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：`husqvarna-520irx-2024`

#### 采集要求：实际切割附件及清洁耗材 (`cutting_consumables`)

过程／待建立交换的方向／类型：`clearance` / `inputs` / `product`.

分别实例化有记录的切割线、刀片更换或磨刀耗材及干式清洁材料。完整可复用刀片属于资产供给；刀片路线不得虚构切割线用量。

数量范围证据需求：须有实际材料身份、收货量/使用/磨损测量及不确定性；不设通用刀片磨损或切割线损失比例。

- 采集对象：实际切割附件及清洁耗材
- 流属性/单位：质量 / kg
- 数量规则：记录实际可归属批次材料的总边界收货量和期初库存领用，不净扣真实对外退回。未用对外退回另记总输出及匹配负担；留存期末库存是带结转负担的单独余额，不是输出。核对实际消耗及处置。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：`husqvarna-520irx-2024`

#### 采集要求：实际可归属清理的保护及收集材料 (`protection_consumables`)

过程／待建立交换的方向／类型：`clearance` / `inputs` / `product`.

纳入清理可归属的实际临时保护、收集袋、防护/清洁耗材及维护和移除责任。直接计量的清理损害修复材料在此记录；供应商已含材料由 damage_remedy_service 覆盖，不得重复。长寿命保护属于资产；供应商已含材料不再次产生上游负担。

数量范围证据需求：须有项目特定保护边界计划、材料量、复用/终止证据及不确定性；不设标准 kg/m2。

- 采集对象：实际可归属清理的保护及收集材料
- 流属性/单位：质量 / kg
- 数量规则：逐材料记录实际可归属批次总收货量和期初库存领用，不净扣真实对外退回；披露供应商已含范围。跟踪保护与损害修复材料、维护及终止。留存期末库存为余额，结转未来负担，不是输出。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：`fhwa-fp24-201`

#### 采集要求：实际设备材料及残余物货运 (`freight_services`)

过程／待建立交换的方向／类型：`clearance` / `inputs` / `product`.

记录设备、送货及残余物接收转运的供应商、车辆、实际载荷和路线；明确空返责任及供应商覆盖。供应商燃料与车辆负担只计一次；自有车队单独实测时，须以明确边界替换相应供应商份额。

数量范围证据需求：须有实际载荷/路线/供应商及不确定性和精确货运属性/单位支持；不虚构距离、装载率或燃料率。

- 采集对象：实际设备材料及残余物货运
- 流属性/单位：货物运输 / t*km
- 数量规则：逐具体货运交换采用实际区段载荷质量和距离；依据供应商特定证据分配共享载荷及返程，将可归属批次货运除以验收面积。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_logistics`
- 来源：`fhwa-fp24-201`

#### 采集要求：实际清理损害修复供应商服务 (`damage_remedy_service`)

过程／待建立交换的方向／类型：`clearance` / `inputs` / `product`.

纳入清理造成保留植被/场地接口损害的实际已验收修复作业，保留事件标识、供应商、修复范围、材料、设备、运输和最终验收。单独记录前景材料/电力/货运时，移除重叠供应商覆盖；不得假定修复负担不存在。

数量范围证据需求：须有实际事件特定修复作业数、供应商清单/覆盖及不确定性；不设通用损害率或修复强度。

- 采集对象：实际清理损害修复供应商服务
- 流属性/单位：物品数量 / item
- 数量规则：按事件和供应商范围记录实际完整已验收修复作业；各具体计件作业单独限定，已含负担归属致损清理批次。只有有记录的无损害检查才能证明零作业。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_remedy`
- 来源：`fhwa-fp24-201`

#### 采集要求：实际退出前景交接边界的未用材料退回 (`unused_material_returns`)

过程／待建立交换的方向／类型：`clearance` / `outputs` / `product`.

仅实例化真实退回供应商或所有方的未用耗材移交，并匹配入界身份和负担。场内留存库存保持余额，不是对外产品交换。

数量范围证据需求：须有可追溯总领用/收货量及签署对外退回重量；不假定退回比例。

- 采集对象：实际退出前景交接边界的未用材料退回
- 流属性/单位：质量 / kg
- 数量规则：逐材料记录实际总对外退回质量；不得从投入中净扣后又将相同退回负担导出。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`

#### 采集要求：接收方交付节点的切割草及相容非木质草本残余物 (`biomass_residual`)

过程／待建立交换的方向／类型：`clearance` / `outputs` / `waste`.

以实际废物/残余物移交记录湿态收集植被，保留接收设施、交接凭证、含水状态和污染物说明。现有植被属于环境初始存量，不是上游培育作物。接收方处理作为责任明确的下游数据集，不属于本清理服务。

数量范围证据需求：须有实际湿质量、代表性含水率测量、污染情况及不确定性；不设通用产量/密度/含水率或碳收益。

- 采集对象：接收方交付节点的切割草及相容非木质草本残余物
- 流属性/单位：质量 / kg
- 数量规则：移交时称量实际收集湿态残余物，扣除容器皮重；核对暂存期初/期末库存及每笔发运。无场地采样证据时，不从清理面积推算质量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residual`
- 来源：`fhwa-fp24-201`; `husqvarna-520irx-2024`

#### 采集要求：实际磨损耗材包装及清洁废物 (`other_residuals`)

过程／待建立交换的方向／类型：`clearance` / `outputs` / `waste`.

按材料、危险属性和接收路线区分各实际废物，废弃附件与包装须与植被分开。已在资产供给内计入的终止处置不得在此重复。

数量范围证据需求：须有逐材料废物称量和接收方证据；不设统一包装或报废率。

- 采集对象：实际磨损耗材包装及清洁废物
- 流属性/单位：质量 / kg
- 数量规则：测量实际废物移交净质量，并核对供应商已含包装责任、实际退回及留存可复用库存。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：`husqvarna-520irx-2024`

#### 采集要求：向所声明环境的实际已表征物质释放 (`characterized_releases`)

过程／待建立交换的方向／类型：`clearance` / `outputs` / `elementary`.

仅对实测或有依据的已表征物质、相关粒径和实际接收介质构建具体交换。不得由电池路线推定切割机燃烧、甲烷、总 VOC 或泛化粉尘；未测材料磨损保持量化数据缺口，不自动视为空气排放。

数量范围证据需求：须明确实际物质/组分、介质、监测或经审查因子及不确定性；尚无来源支持的通用排放范围。

- 采集对象：向所声明环境的实际已表征物质释放
- 流属性/单位：质量 / kg
- 数量规则：采用实际监测物质质量或有记录的适用物质特定方法，并保留不确定性和去向；零值须有检出/覆盖范围内不存在的证据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_releases`

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| clearance | 获准切割收集及残余物交接 | required | 在所声明首次施工清理路线内 | 独立前景移除与验收；不合格切割/收集返回同一节点并保留全部重复负担；残余物/耗材退出须保持交接记录 | 1 m2 验收水平多边形；重复作业不增加面积 |


### 过程：获准切割收集及残余物交接 (`clearance`)

#### 输入

##### 产品流

###### 实际交付充电器的充电电力 (`charging_electricity`)

计量充电器供电侧本批次电量，包含充电损失与可归属待机；保留地域、日期、供应商及电表边界。不得从电池额定容量推断电网电量。

数量范围证据需求：须有批次充电电表不确定性及按植被/含水状态/附件分组的每验收平方米实测 kWh；来源未提供可直接移用的强度。

- 选定流：实际交付充电器的充电电力
- 流属性/单位：能量 / kWh
- 数量规则：按验收多边形面积归一化实际可归属电表电量，包括返工。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：`husqvarna-520irx-2024`



##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收合格的电池供电施工场地草本植被清理服务 (`accepted_clearance`)

验收服务为获准施工多边形内首次地表以上切割及收集，并已关闭残余物接收交接。根系及土体保留；此输出不证明裸地或可开挖状态。

数量范围决定：1 m2 是精确参考定义，不是现场生产率范围。须按 cp_acceptance 保留多边形测量不确定性、重叠/排除区核对和实际签署验收。

- 选定流：验收合格的电池供电施工场地草本植被清理服务
- 流属性/单位：面积 / m2
- 数量规则：1 m2
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`un-cpc3-2025`; `fhwa-fp24-201`



##### 废物流

##### 基本流

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| service_burden | clearance | 首次周期全部实际负担归属于验收服务，包括不合格留茬高度、收集不足、损害修复和重复切割。未验收面积作为在制/未合格工作记录，不得纳入验收分母；缺陷未关闭阻止相应输出。 |  |
| residual_status | biomass_residual | 切割植被是残余物，记录实测交接与实际去向。不得假定联产品收益或替代燃料/饲料/肥料。有用产品声明须另行明确审查。 |  |
| asset_sharing | reusable_asset_provision | 对每台切割机、电池、充电器、收集工具和可复用保护资产，记录制造、维护、更换、终止处理边界及有证据的完整寿命服务。由同一台账责任方分配切割、收集、返工及其他作业/期间的实际使用，保留未消耗未来负担并量化不确定性。每项资产在一个阶段/期间台账中保留制造/供给、使用/维护/更换期间、终止处理及全部使用作业关联。按有证据的寿命服务份额，将各期间负担归属于本次清理输出；未消耗未来负担结转，披露更换/终止假设和不确定性，责任未知时阻止定案。不设任意固定寿命或均分作业。供应商租赁供给与单独资产制造不得重复覆盖同一负担。 |  |
| stock_returns | cutting_consumables; protection_consumables; unused_material_returns; other_residuals | 按材料和交接边界核对期初库存加总收货量，与消耗、真实对外退回、废物及留存期末库存。留存库存带声明的未来负担，不是输出。采用实际可归属批次的总边界投入，真实未用产品对外退回另列总输出，仅携带可追溯匹配投入负担。不得从投入中净扣退回。留存期末库存是非交换余额，其负担结转至本次已完成服务之外；核对总投入、本次使用/废物、退回和期末库存，不创造库存输出。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_acceptance | clearance | 验收服务 | 测量及签署交接 | lot_id; polygon_id; approved_boundary; exclusions; retained_islands; accepted_area_m2; survey_uncertainty; vegetation_species; density; moisture; slope; attachment; cut_height_spec; collection_state; defect_id; receiver_ticket; acceptance_time | 采用可追溯坐标方法测量实际水平清理多边形；叠加获准边界、计划排除区和保留植被岛。保留实际质量要求、前后证据、返工作业标识及签署验收分区。所有负担采用同一验收面积，未验收面积单列。 | m2 | 每个验收多边形及更正 | 完整首次清理至交接关闭 | 实际获准场地多边形 | per reference flow | 测量校准/坐标参照；多边形无重叠并集；验收权限及缺陷关闭记录 |
| cp_energy | clearance | charging_electricity | 电表及充电台账 | lot_id; charger_id; meter_id; start_kwh; end_kwh; charge_time; standby_kwh; battery_id; consumer_job; accepted_area_m2 | 按事件测量充电器供电侧电量；以实际能量证据将共享充电分配至明确电池/批次。包括可归属充电损失、待机及返工，跨作业核对电表总量，再以 cp_acceptance 验收面积归一化批次电量。 | kWh | 每次充电及批次关闭 | 首次周期所需全部实际充电 | 与批次关联的场内或场外充电器 | per reference flow | 电表准确度、供应商/地域/日期及核对；不得仅由容量推断 |
| cp_assets | clearance | reusable_asset_provision | 资产寿命服务台账 | asset_id; manufacturer; model; production_boundary; provision_count; manufacture_period; use_period; maintenance_period; replacement_period; terminal_period; maintenance; replacement; terminal_treatment; service_life_basis; usage_lot; consumer_job; period; accepted_area_m2 | 分别记录各具体资产。明确完整寿命供给和维护/终止处理责任、切割/收集/返工及所有其他作业/期间的实际使用。按有证据的已消耗服务份额归属各资产负担，并以验收面积归一化批次份额；保留未消耗未来余额和不确定性。 | item | 每次使用及维护/退役更新 | 制造/供给；各使用/维护/更换报告期间；终止处理；实际清理验收周期 | 每项资产的全部使用方 | per reference flow | 资产标识及电表/工时/循环证据作为分配驱动，不虚构 Duration UUID；租赁已含范围及份额/负担总和核对 |
| cp_material | clearance | 材料退回及其他废物 | 交接库存及称量 | lot_id; material_id; supplier_coverage; opening_stock; gross_receipts; gross_issues; consumed_mass; outward_return; closing_stock; waste_mass; tare; receiver; uncertainty; accepted_area_m2 | 逐材料称量并核对总收货量/领用、消耗、退回、期末库存及废物。耗材、保护、袋和包装分开记录；关联真实对外交接凭证和唯一负担责任方。记录实际可归属批次总边界材料投入，不净扣对外退回；每笔真实总退回输出匹配投入身份与可追溯负担。留存期末库存为非交换余额，负担结转未来作业。归属本次服务消耗及废物责任且不重复抵扣，再按验收面积归一化各当前批次交换。 | kg | 每次交接/领用及批次关闭 | 完整周期，包括保护维护/终止 | 批次及真实供应商/接收方接口 | per reference flow | 经校准秤/皮重；有记录的库存调整；签署退回/废物凭证及供应商覆盖不重复 |
| cp_logistics | clearance | freight_services | 实际行程及供应商记录 | trip_id; lot_id; provider; vehicle; payload_kg; route_km; origin; destination; empty_return; shared_load; included_fuel; accepted_area_m2 | 逐运输区段采集实际载荷与距离；实际有载移动采用吨公里，保留 kg 至吨的可追溯换算。根据供应商运行记录说明空返与共享载荷分配，设唯一责任方，避免重复供应商燃料/资本负担；将批次可归属服务除以验收面积。 | t*km | 每段行程 | 周期内全部设备/材料/残余物运输 | 实际起点—场地—接收方路线 | per reference flow | 载荷/路线凭证、空返覆盖、分配证据及后续精确运输支持核实 |
| cp_residual | clearance | biomass_residual | 称量含水率及交接 | lot_id; transfer_id; wet_gross_kg; container_tare_kg; wet_net_kg; moisture_method; moisture_date; contaminant; staging_opening; staging_closing; receiver; product_or_waste_status; accepted_area_m2 | 称量向所声明实际接收方发运的湿态生物质净质量，并采集有代表性的含水率证据。核对全部收集、暂存余额与交接凭证，包括重复切割物和不符合规定的场内残留；接收方拒收返回清理责任直至解决。按验收面积归一化可归属净移交量。 | kg | 每车及批次关闭 | 切割至接收方验收交接 | 场地暂存及实际接收方交付节点 | per reference flow | 秤/皮重、含水率采样覆盖、签署状态/交接、质量平衡不确定性及拒收关闭 |
| cp_releases | clearance | characterized_releases | 物质监测或适用方法 | lot_id; substance; particle_size; medium; measured_mass; detection_limit; method; applicability; uncertainty; accepted_area_m2 | 选择交换前明确实际物质及接收介质；保存监测覆盖、检出限或经审查适用因子的活动量及不确定性。废物与环境释放分开，纳入所有重复工作，并按验收面积归一化可归属物质质量；不得虚构燃烧排放。 | kg | 每次监测事件或经审查评估 | 完整首次周期 | 实际释放位置及介质 | per reference flow | 可追溯物质/组分表征、因子适用性及未测覆盖缺口 |
| cp_remedy | clearance | damage_remedy_service | 事故修复供应商及验收 | lot_id; incident_id; provider; remedy_scope; job_count; included_materials; included_energy; included_assets; included_transport; acceptance_date; accepted_area_m2 | 记录每起清理造成的损害事件和已验收修复作业，保留供应商一手清单及已含服务/材料。无论实际修复日期是否较晚，均归属致损批次；关联期间与修复验收证据。与直接记录的保护材料、充电、资产和货运核对，移除重叠；将实际作业负担除以验收清理面积。 | item | 每起事件及签署修复关闭 | 致损清理期间至实际修复完成 | 实际受影响植被/场地接口及供应商 | per reference flow | 无损害检查或完整事件/修复台账；供应商覆盖及关闭验收，不重复直接投入 |

### 计算规则

| rule_id | applies_to | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| area_attribution | 所有清单行 | 将实测完整批次各交换归属于其清理批次，以 cp_acceptance 同一验收水平多边形面积归一化，并保留原分子单位。验收输出保持 1 m2。返工增加负担，不增加分母面积。 | cp_acceptance; 节点特定采集协议 | 每 1 m2 验收服务清单 |  |
| stock_reconcile | cutting_consumables; protection_consumables; unused_material_returns; other_residuals | 对每项材料及交接范围，核对期初库存加总收货量与消耗、真实对外退回、期末库存及废物；应用平衡前说明所测消耗与下游废物是否重叠。总领用是内部台账，不是第二次边界投入。以总边界收货量/期初库存领用为投入，真实总对外退回为产品输出，不净扣投入；期末库存保持非交换余额，负担结转。 | cp_material | 已核对数量及结转库存负担 |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| identity_gate | 所有行 | 最终 TIDAS 交换绑定前，从实际记录核实具体身份、状态、供应商、流类型、属性/单位和去向。概括卡片实例化为零至多个具体交换；未知身份和支持保持明确缺口。 | 供应商资料、身份详情及属性/单位组证据 |
| same_lot_basis | 所有行 | 分子与分母采用相同多边形、日期、实际植被及作业标识；未验收面积与后续维护另记。披露测量/电表/称量及分配不确定性和缺失覆盖。 | cp_acceptance 及完整节点台账 |
| custody_quality | biomass_residual; other_residuals | 记录实际接收方状态及下游处理责任。不得采用估算湿干/面积质量因子或未经核实的产品废物属性声明。验收前关闭接收方拒收及场内残留。 | cp_residual; cp_material |
| source_limits | clearance | 确认实际项目合同及当前适用设备说明。FHWA 道路工程范围及制造商实例均不提供通用留茬高度、生产率、排放或磨损因子。 | fhwa-fp24-201; fhwa-fp24-errata-20260915; husqvarna-520irx-2024 |


## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| accepted_gate_check | accepted_clearance | 须有获准相容路线、规定切割/收集状态、损害/返工缺陷关闭、所声明残余物交接及签署验收多边形；拒绝范围外木质植被/掘根/土方或有用生物质声明。 | fhwa-fp24-201; husqvarna-520irx-2024 |
| area_check | 所有行 | 确认 1 m2 参考输出及同一验收水平多边形分母；不得重复重叠、用保留植被岛替代或计入返工作业面积。验收面积/质量缺失时该批次不完整。 |  |
| material_custody_check | 所有行 | 在不确定性范围内核对库存、真实退回、废物和生物质接收凭证；留存库存不得是对外产品，总投入/净投入退回约定不得重复抵扣同一数量。 |  |
| asset_coverage_check | reusable_asset_provision; charging_electricity; freight_services | 须明确资产使用方/期间及完整制造/维护/终止处理责任、充电供电电表及实际货运/供应商边界。检查份额和已含负担只计一次，不虚构寿命、不由容量推算充电、不设默认运输因子。检查制造/使用/维护/更换/终止期间关联及期间份额；更换或终止责任未明时阻止最终负担定案。 |  |
| identity_release_check | 所有行 | 构建交换前核实各实际 UUID 及支持、解决实际产品废物/物质介质状态，并报告剩余 Range/身份/支持证据缺口。不得采用近似参考服务、作物收获或地域未明电力身份。 |  |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景清理服务数据包 |
| downstream_use | secondary_dataset; background_dataset; process 和 lifecyclemodel 投影 |
| allowed_use | 具有匹配植被/场地/验收和残余物交接边界的同类首次地表以上电池供电清理路线 |
| excluded_use | 日常割草、作物收获、木质/根系清除、土方、完整施工准备就绪或可售生物质收益 |
| required_metadata | 实际多边形/验收面积、植被/场地/坡度/含水状态、日期、切割机/附件/电池/充电器、质量规定、保护接口、残余物状态/接收方、供应商及资产范围 |
| required_quality_disclosure | 实测覆盖、不确定性、返工/库存/交接平衡、资产寿命分配、实际支持/身份/Range 缺口及另行负责的下游处理 |
| update_trigger | 路线/物种/附件/供应商/场地规定或残余物状态变化；新适用说明或实测范围/资产寿命证据 |


## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UN Statistics Division, CPC Version 3.0 explanatory notes, 30 June 2025, printed pp.288–289; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 施工场地清理分类及较窄边界 |
| fhwa-fp24-201 | standard | FHWA FP-24 (2024), Section 201, printed pp.95–96; https://highways.fhwa.dot.gov/federal-lands/specs/fp-24.pdf | 获准边界、保留植被、清理与掘根区分、验收及残余物处置；须声明项目适用性 |
| fhwa-fp24-errata-20260915 | official_guidance | FHWA FP-24 Errata, 15 September 2026; https://highways.dot.gov/federal-lands/specs/Errata-FP-24.pdf | 当前适用修订版本背景；实际合同修订具有约束力 |
| husqvarna-520irx-2024 | handbook | Husqvarna 520iRX operator manual 757-009-31.05.2024, printed pp.2,18–20,24; https://content.tdr.dss.husqvarnagroup.net/pub000093932/doc000239287 | 电池供电割草及收集路线、获准设备和实际维护；不提供通用生产率或留茬高度因子 |
