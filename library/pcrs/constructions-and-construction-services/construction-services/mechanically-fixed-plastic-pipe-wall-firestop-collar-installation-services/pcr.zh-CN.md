---
pcr_id: pcr.mechanically-fixed-plastic-pipe-wall-firestop-collar-installation-services
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 机械固定式塑料管穿墙防火圈安装服务

## 1. 范围与适用性

本 PCR 适用于在一个既有塑料管穿墙部位首次机械安装工厂预制的钢壳膨胀型防火圈。墙体、管道以及任何必需的环形间隙封堵层均已安装并验收；其与所选防火系统的兼容性文件是进入本阶段的条件。安装方核查该接口，清洁防火圈接触区域，标记并钻制固定孔，闭合锁紧防火圈，安装挂钩和获准机械紧固件，检查、标识并移交完整阶段。服务包含实际系统要求的全部墙面。

不包括墙体、管道或穿孔施工，环形间隙密封材料的施用或修补，楼板穿透部位、金属管、火药驱动紧固和后续建筑使用。既有封堵不合格或配置不兼容时停止本路线，并采用边界单独界定的纠正服务。Hilti CP 643N 是路线示例，不限定独家供应商。W-L-2078（图纸修订日期 2018 年 4 月 17 日）展示了带有封堵和紧固条件的特定石膏板墙塑料管系统，不能证明所有墙体系统或预先封堵层可以互换。保存与实际配置匹配的批准文件，以及适用于所供防火圈和紧固件的现行说明。每项作业均需核查文件的最新适用性；能够获取历史图纸不代表当前项目已获批准。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.mechanically-fixed-plastic-pipe-wall-firestop-collar-installation-services |
| classification_refs | CPC 3.0 54659 — 其他未另分类的保温绝缘服务；拟议关系为其中较窄的防火施工服务范围 |
| covered_products | 在已声明且预先封堵的塑料管穿墙部位完成并验收的机械防火圈安装阶段 |
| excluded_products | 环形间隙湿式封堵；墙体或管道施工；楼板防火圈；金属管；现场耐火试验；其他无关保温绝缘服务 |
| representative_product | 在一个获准既有穿墙部位的两个必需墙面完成 CP 643N 型防火圈安装 |
| production_route | 接口核实 → 清洁 → 钻孔机械连接防火圈、挂钩和紧固件 → 检查与标识 → 验收 |
| market_state | 已签署阶段移交的安装服务；所供组件成为既有建筑接口的一部分 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 一个已声明既有塑料管穿墙部位的完整机械防火圈安装验收阶段 |
| How much | 1 item；一个计数单位表示整个穿墙安装阶段，不表示单个防火圈或单侧墙面 |
| How well | 实际系统配置、必需墙面、防火圈尺寸、挂钩、获准紧固件和既有封堵状态符合有记录的检查与签署验收要求 |
| How long or cycle | 从一份安装工单开始至纠正作业闭环并签署移交；不承诺建筑使用寿命或通用耐火时长 |
| reference_flow_link | `accepted_collar_installation` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 已验收的完整塑料管穿墙防火圈安装服务 |
| 参考流属性 | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | item |
| 必需限定信息 | 场址与穿墙部位 ID；墙体结构、厚度和批准文件；管道聚合物、等级、直径、管壁规格和封闭或通气配置；环形间隙几何以及既有封堵产品、深度、状态和验收；匹配的批准编号、修订版和现行安装说明；防火圈制造商、型号、尺寸和必需墙面；挂钩、锚栓、垫圈规格与布置；检查完工日期与移交门槛；资源、运输和废物服务边界 |

不同管径、墙体配置或批准系统的计数单位不自动等价。按同质声明批次组织数据，或分别报告各配置；披露任何汇总权重及其物理依据。

## 4. 计量与单位规则

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| reference_count | 参考产品 | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | 全部必需墙面通过检查后，一个完整穿墙验收阶段仅计数一次；失败或未完成阶段不计入验收数量。 |
| component_measure | collars; additional_fixings; 物料出口 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 对按件组件采用质量核对时，保存实际型号的单位净质量或可追溯称重记录，排除包装；不得采用假设钢材密度或通用防火圈质量。 |
| energy_record | installation_electricity | Energy | kWh | 保留钻孔、抽尘和可归属充电的计量用电及原始单位。若供应商服务已包含该电量，披露覆盖范围并排除重复交换；不得假定手工安装无需用电。 |
| resource_time | tool_access_service; logistics_service | Duration | h | 采用实际、边界明确的供应商服务小时数，并完整记录提供方和所含负担；不得把时间转换成件数或虚构设备寿命。 |
| `count_unit_alias` | 存在时的计数交换 | Count | item | 本 PCR 的显示别名 item 表示已核实的物品数量单位组参考单位 Item(s)，系数为 1。具体数据集须保留实际参考单位身份；此书写别名不建立质量、面积或服务之间的等价关系。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已验收的既有墙体和已安装塑料管；当所选系统要求或允许所声明封堵时，环形间隙封堵已验收；通道可用且作业条件获准。记录实际配置和封堵保管责任。 |
| starting_condition_role | 客户拥有的建筑接口交由安装方进行防火圈安装，不是新购买的墙体、管道或封堵投入。其早期施工负担位于本安装阶段数据集之外，由更广模型的责任方仅加入一次。 |
| product_classification_scope | CPC 3.0 54659 中较窄的防火安装服务；分类本身不构成对任何物理系统的批准。 |
| recursive_input_rule | 不得用另一项完整防火圈安装服务递归替代本阶段。分包作业须有明确且互不重叠的服务边界与责任台账。 |
| upstream_dataset_requirement | 将实际防火圈套装、单独紧固件或耗材、电力及边界明确的提供方服务连接至兼容上游数据集；披露包装、挂钩、运输和电力覆盖范围及全部未解决身份。 |
| disclosure | 声明安装阶段起止、既有接口验收证据、实际批准文件和说明版本、保管责任、所含交付、退回与废物服务门槛，以及供应商服务覆盖范围。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| b_interface | collar_install | 安装前，将实际墙体、管道、环形间隙几何和预先封堵层与所选经测试或批准系统及所供产品的现行说明逐项匹配。记录封堵验收并检查损伤；兼容性证据缺失时不得形成输出。 | hilti-wl2078-2018 |
| b_route | collar_install | 纳入清洁、钻孔与控尘、防火圈锁紧、挂钩和紧固件、标识、检查、纠正性机械重装及移交前清理。湿式封堵与受损接口修补位于本阶段之外，仅在另行记录验收后恢复本路线。 | hilti-firestop-guide-2016 |
| b_components | collar_install | 组件角色包括工厂钢壳膨胀型防火圈、挂钩和锚栓垫圈组，以及实际使用的标识材料。供货记录明确套装覆盖范围；仅在套装未供给时记录额外组件。不得以原钢材或原始膨胀材料代替成品防火圈。 | hilti-wl2078-2018 |
| b_services | collar_install | 纳入实际电力、清洁用品以及边界明确的供应商自有钻孔、抽尘和登高设备服务。同一钻机、吸尘器、充电器和登高服务可供 collar_install 的首次与纠正回访及其他作业共用；在 cp_resources 中列出服务期间与全部使用者。设备生产和维护分配由提供方在披露的服务范围内承担。仅在覆盖范围外另计所购电力或交付服务。 |  |
| b_exits | collar_install | 在实际接收门槛记录每项包装、粉尘、损坏零件和清洁残余物出口，注明后续运输和处理责任方。仅在可重复使用状态及接收方或库存保管已确认时才属于可用退回；否则按实际废物路线分类。 |  |
| `boundary_atomic_completion` | 所有过程 | 本节的采集要求是必须执行的采集与适用性指令，不是聚合清单交换。完成前景数据集前，必须为每一种实际产品、废物流、物质及环境子区室建立独立原子流卡／交换。保留全部实际事件、上游负荷、退回及原生单位；所链接公式应按每个兼容身份分别执行。环境资源提取记为输入，环境释放记为输出。不得相加不同原生单位、用一个 UUID 代表整个采集池、将缺记录解释为零，或与已有具体卡重复计入。保留宿主的文件性接口仅传递状态，不形成新采购资产。适用成员未明确或未有证据证明不存在时，定量清单仍不完整；非强制筛查提示不能补造数量或化学组成。 |  |

### 条件性清单补全要求

以下标识符表示采集池或文件性状态台账。一个池可能有零个、一个或多个实际成员。须依据真实记录判断适用性，并为每个成员保留原有数量方法和采集协议；只有兼容的数量才能共同核对。下列原有可选筛查区间仅作为暂定复核提示，不得强加于不同材料或混合采集池。

#### 采集要求：额外获准防火圈挂钩与机械紧固组 (`additional_fixings`)

过程／待建立交换的方向／类型：`collar_install` / `inputs` / `product`.

仅记录防火圈套装未包含的挂钩、获准机械锚栓或螺钉、垫圈及实际替换件。需要时拆分每个实际组件身份与净质量；适用性由所选系统决定。

- 采集对象：额外获准防火圈挂钩与机械紧固组
- 流属性/单位：Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：记录各额外组件或组合的实际总领用量、组合组成及型号，并归属于验收阶段。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`hilti-wl2078-2018`

范围证据需求：获取实际套装物料清单、必需挂钩紧固布置及额外或替换领用记录。不同管径和基材需不同兼容数量；W-L-2078 示例不能提供通用数量或损耗范围。

#### 采集要求：实际防火圈接触区清洁与标识用品 (`cleaning_supplies`)

过程／待建立交换的方向／类型：`collar_install` / `inputs` / `product`.

仅在实际使用时记录：分别按确切产品和质量记录每项清洁剂、擦布、供水和标识材料。清洁管道接触区与标识阶段不授权新增环形间隙湿式封堵。

- 采集对象：实际防火圈接触区清洁与标识用品
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量各供给清洁或标识产品的总使用量，包括纠正使用量，并按验收阶段表达；适用时以记录说明未使用。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`hilti-firestop-guide-2016`

范围证据需求：从作业记录采集实际清洁方法、用品身份、质量和变异；不规定通用溶剂、水或标签消耗。既有接口需密封材料修补时，离开本路线进行单独纠正。

#### 采集要求：边界明确的供应商自有钻孔、抽尘与登高设备服务 (`tool_access_service`)

过程／待建立交换的方向／类型：`collar_install` / `inputs` / `product`.

按提供方和边界明确的租赁或服务期间记录实际供应商自有钻机、吸尘器、充电器和登高设备服务。它们可跨本节点首次与纠正回访以及其他工单使用；提供方的生产维护负担保持在披露的服务范围内。

- 采集对象：边界明确的供应商自有钻孔、抽尘与登高设备服务
- 流属性/单位：Duration / h
- 数量规则：各边界明确服务为验收阶段工作的实际可归属小时数，按任务时间或直接使用量在全部使用者间分配；排除另行记录且提供方已包含的电力或运输。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_resources`

范围证据需求：获取计费范围、实际服务小时数、使用作业回访台账和观测变异。不得推定工具寿命、更换频率或独立 Duration 支持身份；采用其他自有资本路线时需追加跨期归属审查。

#### 采集要求：实际边界明确的组件交付与退回运输服务 (`logistics_service`)

过程／待建立交换的方向／类型：`collar_install` / `inputs` / `product`.

仅适用于不在其他所供服务范围内的实际可归属运输：记录所交付防火圈、零件及可用退回的路线、载荷、距离和接收门槛。分别记录各实际提供方服务；安装节点内现场搬运不是虚构货运交换。

- 采集对象：实际边界明确的组件交付与退回运输服务
- 流属性/单位：Duration / h
- 数量规则：每个验收阶段实际边界明确交付或退回服务的记录可归属小时数，并包含路线、载荷、距离元数据及完整共享分母。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_resources`

范围证据需求：采集实际提供方记录和行程载荷变异。不规定默认行程长度、车辆类型、运输排放因子或行程计数等价；最终服务身份、属性和单位须匹配实际运输数据集。

#### 采集要求：实际可用余量组件与可重复使用包装退回 (`usable_returns`)

过程／待建立交换的方向／类型：`collar_install` / `outputs` / `product`.

条件适用：仅在可用状态及接收供应商或仓库保管已记录时，未用防火圈、紧固件或可重复使用包装才各自具有产品身份。本卡片描述出口角色，不是通用混合材料产品。提供方自有工具按服务合同归还，不是本阶段材料联产品。

- 采集对象：实际可用余量组件与可重复使用包装退回
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按接收门槛实测各可用退回身份的净质量，并按验收阶段表达；总投入保持不扣减，单独记录库存保管。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_exits`

范围证据需求：获取实物状态、实际组件或包装身份、接收验收、质量及变异。不得假定全部包装可重复使用，也不得仅因离开场址就给出避免生产抵扣。

#### 采集要求：实际废弃的损坏防火圈或紧固组件 (`component_waste`)

过程／待建立交换的方向／类型：`collar_install` / `outputs` / `waste`.

条件适用：安装期间损坏或拒收且未作为可用退回验收的组件，由 collar_install 进入有记录的废物接收路线。分类或去向不同时分别记录钢壳膨胀复合物及其他材料；不得将拒收的整个安装重新标为已验收服务。

- 采集对象：实际废弃的损坏防火圈或紧固组件
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：在声明接收门槛计量各废弃组件流质量，包括纠正替换，并按验收阶段表达。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_exits`

范围证据需求：获取拒收零件记录、材料分类、实际接收方和实测变异。不规定标准废料率、自动再生金属身份或回收比例。

#### 采集要求：实际废弃的防火圈与紧固件包装 (`packaging_waste`)

过程／待建立交换的方向／类型：`collar_install` / `outputs` / `waste`.

条件适用：按材料和去向记录实际丢弃纸箱、塑料袋、衬垫或其他包装。声明防火圈供货套装包含包装供应负担时按其范围纳入；输出质量不另产生一项包装投入。经确认的可重复使用包装单独归于 usable_returns。

- 采集对象：实际废弃的防火圈与紧固件包装
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：对实际材料流称量丢弃包装质量，与供货、可用退回和库存变化核对，并按验收阶段表达。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_exits`

范围证据需求：获取包装组成、质量、回收资格和实际接收记录。防火圈产品规格不支持默认包装比例或再生抵扣。

#### 采集要求：已捕集的固定孔钻制残渣与粉尘 (`captured_debris`)

过程／待建立交换的方向／类型：`collar_install` / `outputs` / `waste`.

按实际墙体组成和废物接收门槛记录所收集钻孔固体及吸尘器内容物。这是物理捕集废物，不是已排入空气的颗粒；避免重复计入废弃集尘袋或清洁残余物持有的粉尘。

- 采集对象：已捕集的固定孔钻制残渣与粉尘
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：对全部钻孔或纠正工作可归属的捕集残渣计量质量，记录皮重与废物分类，并按验收阶段表达。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_exits`

范围证据需求：获取实际孔数、几何、基材组成、收集质量、捕集记录和变异。不得由公称孔几何虚构墙体密度或产尘、捕集因子。

#### 采集要求：实际废清洁材料与清理残余物 (`cleaning_waste`)

过程／待建立交换的方向／类型：`collar_install` / `outputs` / `waste`.

条件适用：用后擦布、清洁残余物或已收集废水进入实际废物或处理接收门槛。分别记录固液身份及污染情况；干式清洁任务不假定产生废水。

- 采集对象：实际废清洁材料与清理残余物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量每种实际清洁残余物流的质量，注明接收门槛和运输处理责任，并按验收阶段表达。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_exits`

范围证据需求：采集清洁方法、实际残余物组成、受污染材料分类、质量与接收方。不得推定通用用水量、废水体积或危险属性。

#### 采集要求：实际已表征的安装环境释放 (`air_releases`)

过程／待建立交换的方向／类型：`collar_install` / `outputs` / `elementary`.

仅在实际释放时适用：按确切组成、颗粒分级和环境介质，将每种未捕集钻孔颗粒或清洁相关物质实例化。若发生其他环境释放，分别识别其实际接收介质。已捕集粉尘和废物不计为排放质量。

- 采集对象：实际已表征的安装环境释放
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：对各已表征释放采用实测排放质量，或用经审查的任务特定因子乘实测活动量，归属于验收阶段；表征缺失保持为数据缺口。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_releases`

范围证据需求：获取实际颗粒或物质识别、实测释放或适用排放因子、控制捕集证据及不确定性。产品 VOC 含量、低排放宣传或没有湿式密封材料均不能换算为安装排放质量。

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| collar_install | 机械防火圈安装、检查与移交 | required | 已确定兼容且验收的预先封堵接口，以及实际匹配的墙体、管道、防火圈和紧固系统 | 将工厂防火圈组件与既有客户墙体接口进行装配集成；承担返工拒收与共享基础设施责任 | 1 item 完整穿墙安装验收阶段 |

一个边界明确的节点负责全部机械安装与检查。锁扣松动、挂钩或锚栓布置错误、目视检查失败均返回 collar_install 纠正并复检，保留全部资源负担。损坏组件通过实际退回或废物卡片离开；不兼容或损坏的既有封堵阻止本路线，并转入单独的接口纠正。失败阶段不额外计为验收单位。条件卡片仅用于实际记录的资源或出口；缺项必须有未使用记录，不能假定数量为零。

### 过程：机械防火圈安装、检查与移交 (`collar_install`)

#### 输入

##### 产品流

###### 工厂钢壳膨胀型塑料管防火圈 (`collars`)

接收每个必需墙面实际使用的成品防火圈型号和尺寸，包括失败尝试的领用量。明确随套装供给的挂钩与包装覆盖范围；钢材和膨胀材料是组成成分，不是成品防火圈的替代身份。

- 选定流：工厂钢壳膨胀型塑料管防火圈
- 流属性/单位：Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：按确切型号记录声明工单批次的防火圈总领用件数，归属于完整验收阶段；未用退回和库存变化分别记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`hilti-firestop-guide-2016`

范围证据需求：获取各必需墙面和配置的实际防火圈数量及其变异，包括纠正领用。指南对其墙体路线描述两个防火圈，但这是系统完整性规则，不是通用损耗或质量区间。不得由公称管径或膨胀比推导数值清单范围。

###### 实际钻孔、抽尘与可归属充电电力 (`installation_electricity`)

记录固定孔钻制、抽尘和清理的市电或可归属电池充电量。实际供应商、场址、地区和服务覆盖确定最终身份；服务已含电力不构成第二项购电交换。

- 选定流：实际钻孔、抽尘与可归属充电电力
- 流属性/单位：Energy / kWh
- 数量规则：每个验收阶段的提供方覆盖范围外计量或可追溯分摊电量，包括全部纠正回访。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_resources`

范围证据需求：获取实际电表或充电记录、作业时长、共享分母及不确定性。工具额定功率不等于耗电量，不假定存在已确认的精确 Energy 属性链或供应商电力 UUID。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已验收的完整塑料管穿墙防火圈安装服务 (`accepted_collar_installation`)

全部必需墙面机械安装完成、兼容的既有封堵未受损、检查和标识记录齐全、纠正作业闭环后形成实际阶段移交。不表示现场耐火试验或通用耐火等级。

- 选定流：已验收的完整塑料管穿墙防火圈安装服务
- 流属性/单位：Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：1 item
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`hilti-firestop-guide-2016`

范围证据需求：精确的一件参考是定义，不是产率范围。采集实际验收或拒收阶段数量和配置特定变异；无来源支持通用产率、耐火时长或资源区间。

##### 废物流

##### 基本流

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| a_rework | collar_install | 将失败尝试、额外回访、替换零件和清理计入责任工单负担。仅以完整验收阶段为分母；未解决拒收保持待定，报告其已发生资源，不得通过增加输出数量隐藏负担。 |  |
| a_shared | tool_access_service; installation_electricity; logistics_service | 按提供方、服务期间和全部使用作业或回访对共用钻机、吸尘器、充电器、登高及运输服务建立索引，包括 collar_install 的首次和纠正回访。优先直接归属计量使用量，否则采用同一完整服务期间内有记录的任务时间。核对各份额与全部计费或计量资源并披露其他作业。各服务或电力成分仅计一次。 |  |
| a_returns | usable_returns; packaging_waste; component_waste | 采用总领用和单独出口台账：组件或包装领用量 = 已安装或已消耗量 + 可用退回量 + 废物量 + 库存变化。分别记录实际退回产品身份和去向；不得既从总投入中扣除，又赋予避免生产抵扣。回收或再生抵扣需单独声明研究方法和接收路线，不能仅由材料名称推定。 |  |
| a_products | accepted_collar_installation | 已验收安装服务是唯一预期产品。可用余料或包装退回属于保管转移，不是第二项安装输出；不自动实施联产品分配或未来耐火性能抵扣。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | 流角色 | 记录类型 | 原始字段 | 采集方法 | 单位 | 频率 | 时间覆盖 | 场址范围 | 汇总规则 | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_acceptance | collar_install | 已验收阶段 | 工单与检查 | penetration_id; wall_config; pipe_config; annular_geometry; prior_seal_product; prior_seal_depth; prior_seal_acceptance; approval_id; approval_revision; current_instruction_version; required_faces; collar_model; hooks_anchors; initial_visit; correction_visits; accepted_stage_count; handover_date | 检查并拍照记录每个必需墙面，将所供组件规格与实际批准文件和现行说明核对，保存既有封堵验收和完整阶段移交签字。分别报告同质配置的验收阶段与待定或拒收作业。 | item | 每个穿墙部位及每次纠正 | 首次回访至签署移交 | 已声明场址与工单批次 | per reference flow | 批准与配置对照、现行文件适用性、全部墙面检查表、封堵状态记录、日期明确的验收和拒收登记 |
| cp_materials | collar_install | 防火圈、紧固件和清洁用品 | 领用与库存记录 | part_id; package_coverage; gross_issued_count; net_unit_mass; weighed_mass; supplied_hooks; extra_fixings; cleaning_product; cleaning_mass; label_mass; stock_change; returned_id | 对实际领用防火圈型号和单独额外组件计数；对耗材称重或采用可追溯净质量记录。保存套装内容，按实际身份拆分清洁和标识投入。总领用与退回、库存变化分别记录。核对后，将可归属批次数量除以同配置完整验收阶段数。 | item; kg | 每次领用或退回及工单关闭 | 全部首次安装与纠正回访 | 工单仓库与使用点 | per reference flow | 发票、批次型号标签、校准秤或可追溯净质量、实物计数和保管责任核对 |
| cp_resources | collar_install | 电力、共用工具登高及物流服务 | 计量与提供方服务台账 | resource_id; provider; service_start; service_end; consumer_job_ids; visit_ids; billed_hours; task_hours; meter_kWh; charge_sessions; included_energy; included_transport; route; load; distance; receiving_gate | 读取实际钻孔、抽尘、充电电量以及边界明确的供应商服务小时数。明确全部使用者和期间，以实测消耗或有记录的任务时间份额分配共享量，并核对总量。记录实际交付或退回运输及提供方覆盖范围。为后续服务匹配保存实际载荷和距离，不采用通用行程因子。 | kWh; h | 每个计量或服务期间及回访 | 供应开始至最后纠正与清理 | 各声明服务期间的全部使用者 | per reference flow | 计量校准和读数、提供方范围、工时表、完整分母、份额合计为一以及所含电力运输不重复 |
| cp_exits | collar_install | 退回和废物出口 | 称重与接收记录 | exit_id; originating_visit; material_identity; condition; mass; destination; recipient; stock_receipt; waste_classification; transport_owner; treatment_owner; transfer_date | 按实际材料和接收门槛称重并分离可用余料或包装退回、损坏组件、丢弃包装、捕集钻孔残渣和清洁残余物。核对领用库存、已安装材料与出口，通过接收保管证据确认可用退回。仅将声明工单份额归属于验收阶段；保留待定或拒收负担。 | kg | 每次出口及工单关闭 | 全部安装、纠正与清理回访 | 声明的安装和接收门槛 | per reference flow | 校准称重、转移单据、接收方验收、材料或废物分类及质量核对 |
| cp_releases | collar_install | 实际基本流空气或其他环境释放 | 测量或经审查排放计算 | substance_or_particle; composition; size_fraction; compartment; measured_mass; sampling_period; activity_record; factor_reference; capture_efficiency; uncertainty; controls | 分别按物质或颗粒身份和接收环境介质表征实际未捕集钻孔颗粒及清洁相关释放，采用实测质量或经审查、任务特定的排放计算。保存控制与捕集证据。捕集残渣属于废物，不是排放质量；VOC 含量不是排放因子。缺少测量或因子属于数据缺口，不等于零。 | kg | 每项相关作业或有代表性的测量期间 | 全部钻孔、清洁与纠正 | 实际前景作业与环境边界 | per reference flow | 采样分析、已审查因子的适用性、颗粒或化学身份、实测活动量、不确定性及与捕集废物不重复 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| lot_attribution | 所有清单行 | 对每个同质验收阶段批次，核对包含纠正作业的可归属资源总量或出口量，再除以完整验收阶段数。分别报告未解决作业及其负担；无声明等价关系时不得混合不同配置。 | cp_acceptance; cp_materials; cp_resources; cp_exits; cp_releases | 每参考流清单 |  |
| stock_balance | collars; additional_fixings; usable_returns; component_waste; packaging_waste | 按每种材料和兼容单位，将总领用量与已安装或已消耗量、可用退回、废物和库存变化核对。件数和千克核对采用实测单位净质量；包装与组件净质量分开。 | cp_materials; cp_exits | 各材料核对结果 |  |
| shared_share | tool_access_service; installation_electricity; logistics_service | 优先采用实测任务资源；否则以有记录的任务时间占同服务期间全部使用者任务时间的比例分配边界明确的共享服务。将各份额核对至实际计费或计量总量及提供方覆盖范围。 | cp_resources | 可归属服务或资源量 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| q_configuration | 参考产品 | 保持实际批准、现行选用说明、材料配置和已安装墙面可追溯。产品家族宣传和历史最高耐火等级不足以支持作业验收。 | cp_acceptance 及来源适用性审查 |
| q_completeness | 所有清单行 | 记录钻孔、抽尘和充电、清洁、共享登高、物流、包装与纠正作业；区分有记录的未使用、提供方已含覆盖和数据缺失。 | cp_materials; cp_resources; cp_exits |
| q_ranges | 所有清单行 | 采集实际配置的观测变异与不确定性。制造商膨胀比、温度限值、耐火时长或 VOC 含量均不能提供安装清单数量范围。 | 各卡片范围证据需求及实际批次记录 |
| q_identities | 所有清单行 | 最终输出 TIDAS 数据集前，解决每项实际产品、废物、基本流交换及其属性单位支持链；将条件汇总角色拆分成具体身份。 | 核实详情与支持证据；显式未解决 manifest 条目 |
| q_releases | air_releases | 区分释放的颗粒或物质与捕集粉尘、废弃擦布；不得因未进行湿式封堵而宣称通用零排放。 | cp_releases 与 cp_exits |


## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| v_entry | collar_install | 当实际墙体、管道、封堵、防火圈与紧固件配置缺少匹配批准及现行适用说明，或既有封堵兼容性、状态未确认时，拒绝认定参考阶段完成。 | hilti-wl2078-2018 |
| v_handover | accepted_collar_installation | 核实必需墙面、锁紧防火圈、挂钩紧固件布置、未受损既有封堵、标识与签署检查。一个完整穿墙阶段仅计数一次；通用耐火小时承诺不是验收试验。 | hilti-firestop-guide-2016 |
| v_rework | collar_install | 将每次失败追溯至机械纠正与复检、已确认产品退回、已分类废物出口，或边界单独界定的接口修补；不得把未解决失败计为验收输出。 |  |
| v_shared | tool_access_service; installation_electricity; logistics_service | 核对全部使用作业、期间及资源份额总量；拒绝重复计入供应商服务已含的设备、电力或运输负担。不得推定设备寿命。 |  |
| v_materials | collars; additional_fixings; usable_returns; component_waste; packaging_waste; captured_debris; cleaning_waste | 用实测单位与保管记录核对组件、包装覆盖及物料出口；拆分各材料出口并保留接收门槛的负担责任。 |  |
| v_emissions | air_releases | 要求实际释放身份和测量或经审查的任务特定因子；产品 VOC 含量、未指定粉尘或未说明的零值不能构成基本流清单。 |  |
| v_bindings | 所有清单行 | 数据集发布前核查具体流身份、类型、角色、门槛、属性和单位。候选 PCR 的支持缺口不允许使用近似 UUID 或未经核实的最终交换。 |  |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景安装数据包；完成且满足限定条件的数据集可作为同服务边界的 secondary_dataset 或 background_dataset |
| downstream_use | 投影为完整防火圈安装阶段的 process，并集成进声明建筑系统的 lifecyclemodel |
| allowed_use | 同一声明墙体、管道、防火圈和批准配置及验收阶段门槛，上游资源与下游废物责任透明 |
| excluded_use | 独立代表全建筑耐火性能；密封材料施用；楼板系统；跨管径、批准或套装覆盖范围自动等价 |
| required_metadata | 全部参考限定信息、批次数量、验收日期、实际批准及现行说明修订版、供应商服务范围、资源期间和使用者、退回与废物门槛 |
| required_quality_disclosure | 观测变异、测量不确定性、实际释放、待定或拒收负担、未解决身份及支持链、排除项与提供方已含负担 |
| update_trigger | 批准系统、防火圈或紧固件型号、墙体管道封堵配置、说明、安装路线、供应商服务覆盖、实测资源或接收废物退回门槛变化 |


## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc3-construction | official_guidance | 联合国统计司，CPC 第 3.0 版解释性说明，2025 年 6 月 30 日，第 295 页；https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 分类背景：其他未另分类保温绝缘服务包含防火施工；不是系统批准 |
| hilti-firestop-guide-2016 | handbook | Hilti，《Firestop Guide 2016》，PDF 第 46–47 页（印刷页 44–45），CP 643N；https://files-ask.hilti.com/original/om/omkpt2kobb.pdf | 工厂防火圈路线、两个墙面、清洁锁紧挂钩机械固定和系统特定说明；不提供通用定量清单 |
| hilti-wl2078-2018 | handbook | Hilti UL 系统 W-L-2078，图纸 WL2078q.04172018，2018 年 4 月 17 日，第 1–2 张；https://files-ask.hilti.com/original/wv/wv1qztcvuh.pdf | 特定石膏板墙塑料管示例，展示封堵和紧固兼容条件；仍须实际作业批准与现行说明适用性证据 |
| hilti-cp643n-product | handbook | Hilti 美国，CP 643 N 防火圈产品页面；https://www.hilti.com/c/CLS_FIRESTOP_PROTECTION_7131/CLS_FIRESTOP_COLLARS_WRAPS_BANDAGES_7131/r373 | 现行产品家族身份和既有穿透部位安装背景；产品宣传不能确定安装排放或性能 |
