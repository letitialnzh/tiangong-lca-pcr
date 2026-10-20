---
pcr_id: pcr.inside-mount-cordless-fabric-roller-shade-installation-services
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 内嵌式无绳织物卷帘安装服务

## 1. 范围与适用性

本 PCR 适用于在已确认适用的既有窗洞内，首次安装一套带安装横杆的工厂成品手动无绳织物卷帘。安装系统包括型号匹配的支架、固定件、升降把手和端盖。工作从现场及配套件检查开始，经过钻孔、装配、说明书允许的张力调节、清理，直到功能检查通过并签署交接。`levolor-cordless-25-0040-024` 支持这一特定安装路线，并非通用安装规范。

不包括窗框外装、链条或外露操作绳、电动卷帘、可选织物帘幔和下端固定附件、卷帘裁切或制造、窗体改造、旧帘拆除、日常使用及后续更换。窗洞不适合时须停止，不得强行装入。记录实际说明书与型号；安装结构改变时须重新审查边界。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.inside-mount-cordless-fabric-roller-shade-installation-services |
| classification_refs | CPC 3.0 54699 — 其他未另列明的安装服务；建议 narrower 关系 |
| covered_products | 不含可选帘幔和下端固定附件的带安装横杆内嵌式手动无绳工厂成品织物卷帘安装完成服务 |
| excluded_products | 窗框外装；电机；链条或绳索操作；工厂制造；窗体改造；拆除和维护 |
| representative_product | 带安装横杆和匹配安装配套件的工厂成品开放卷轴无绳织物卷帘，安装于既有窗洞内 |
| production_route | 检查窗洞和配套件；定位并钻孔；固定水平支架；装把手；卡入安装横杆；装端盖；需要时按许可调节张力；检查操作并清理 |
| market_state | 现场签署交接的已验收安装服务；采购的成品卷帘配套件为上游产品，不是服务输出 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 完成的内嵌式无绳织物卷帘安装 |
| How much | 1 item |
| How well | 实际基材与净空适合；所有必需支架已锁定、水平且方向正确；把手和端盖安装完整；确认全程升降顺畅、运动和静止时水平、可保持位置，且整改已关闭 |
| How long or cycle | 一次首次安装及交接周期；不假定卷帘或工具寿命 |
| reference_flow_link | `shade_install_accepted` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 已验收的内嵌式无绳织物卷帘安装服务 |
| 参考流属性 | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | item |
| 必需限定信息 | 制造商及型号；宽度和垂长；织物和卷绕方向；安装横杆及配套件覆盖；窗洞尺寸和障碍物；基材和认可固定件；支架数量及位置；把手数量；说明书版本；地点和日期；验收及资源边界 |

## 4. 计量与单位规则

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| `count_reference` | 参考产品 | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | 每项完整且验收通过的安装仅计一次；支架数、把手数、窗户面积和工时均不等于服务数量。保留宽度、垂长、织物和交接状态限定；不同配置不得自动视为等价。 |
| `inventory_basis` | 所有清单行 | 各行声明的属性 | 各行声明的单位 | 使用每参考流记录。额外材料、退回物和废物分别计量；不得根据卷帘面积、支架数或名义几何量推算 kg。电力保留实际仪表单位，最终交换绑定前披露未解决的支持身份。 |
| `count_unit_alias` | 存在时的计数交换 | Count | item | 本 PCR 的显示别名 item 表示已核实的物品数量单位组参考单位 Item(s)，系数为 1。具体数据集须保留实际参考单位身份；此书写别名不建立质量、面积或服务之间的等价关系。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 既有可接近窗洞已检查尺寸、状态及基材；准确匹配的工厂卷帘和配套件已收货；作业区域获准且具备施工条件 |
| starting_condition_role | 客户所有的既有窗洞为安装接口；其建设不属于本次首次安装服务 |
| product_classification_scope | 仅安装服务；采购卷帘、额外固定件、物流及工具保留各自上游产品或服务边界 |
| recursive_input_rule | 不得把同一已完成安装作为投入采购。外包的有界工序服务应替代该工序清单，或拆解后确保每项负担仅有一个归属。 |
| upstream_dataset_requirement | 成品卷帘供给包括声明的工厂配套件和包装覆盖；额外零件及有界工具、物流服务须有兼容的上游数据集。披露遗漏的上游负担。 |
| disclosure | 声明供给交接点、入场及退回运输、废物接收点；供应商服务所含内容；既有窗洞排除；实际共用资产的时段、使用方及未解决身份。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `inside_fit` | shade_install | 对于本说明书且无帘幔的系统，核对窗洞最小深度为 1-5/8 in、最小高度为 1-5/8 in；完全嵌入所需深度为 2-1/8 至 4 in，取决于实际卷轴直径。钻孔前检查窗摇柄、把手障碍及实际型号限值。可选帘幔深度表不属于本范围。 | `levolor-cordless-25-0040-024` |
| `brackets` | shade_install | 本说明书规定：宽度不超过 36 in 用 2 个支架；36-1/8–48 用 3 个；48-1/8–60 用 4 个；60-1/8–72 用 5 个；72-1/8–90 用 6 个；90-1/8–108 用 7 个。不得为未覆盖宽度插值，也不得套用于其他型号。两端支架距卷帘边缘 1-1/2–2-1/2 in，其他支架均匀分布。内嵌支架的透明卡舌朝向室内。仅当认可基材及固定件适用时，使用配套系统指定的 3/32 in 导孔；实际锚固件钻孔要求按其说明确定。随附螺钉不代表适用于所有基材。石膏板须使用适用锚固件，其不随产品提供。 | `levolor-cordless-25-0040-024` |
| `assembly_gate` | shade_install | 完全安装完成前保留保护纸包。支架须水平且相互对齐，必要时加垫片。宽度不超过 42 in 的卷帘在下轨中央安装一个把手；更宽的产品每轨配两个把手。内嵌安装时，把安装横杆的后槽挂到支架后部钩上，再向前部透明卡舌方向旋转并推入，直到每个支架发出咔嗒声并锁定；不得使用窗框外装的上槽挂入、向下旋转步骤。安装端盖。利用把手在下轨中央区域操作，使升降保持水平；检查净空、织物及静止水平，并按实际说明书记录位置保持检查。允许的张力校正须按说明拆卸、识别弹簧侧和卷绕方向，使用 5 mm 内六角扳手调节，然后重装复查。不得编造验收载荷或保持时长。 | `levolor-cordless-25-0040-024` |
| `resources_and_exits` | shade_install | 包括实际钻孔、充电、抽尘电力，耗材、清理、可归属的有界可重复使用工具和登高服务及声明物流。手动操作不等于安装用电为零。可用零件和包装须记录退还给指定接收方或保留库存，废物退出另行记录。不假定材料回收收益或通用直接排放因子。 | `levolor-cordless-25-0040-024` |
| `boundary_atomic_completion` | 所有过程 | 本节的采集要求是必须执行的采集与适用性指令，不是聚合清单交换。完成前景数据集前，必须为每一种实际产品、废物流、物质及环境子区室建立独立原子流卡／交换。保留全部实际事件、上游负荷、退回及原生单位；所链接公式应按每个兼容身份分别执行。环境资源提取记为输入，环境释放记为输出。不得相加不同原生单位、用一个 UUID 代表整个采集池、将缺记录解释为零，或与已有具体卡重复计入。保留宿主的文件性接口仅传递状态，不形成新采购资产。适用成员未明确或未有证据证明不存在时，定量清单仍不完整；非强制筛查提示不能补造数量或化学组成。 |  |

### 条件性清单补全要求

以下标识符表示采集池或文件性状态台账。一个池可能有零个、一个或多个实际成员。须依据真实记录判断适用性，并为每个成员保留原有数量方法和采集协议；只有兼容的数量才能共同核对。下列原有可选筛查区间仅作为暂定复核提示，不得强加于不同材料或混合采集池。

#### 采集要求：额外适配基材的固定及调平组件 (`extra_fixings`)

过程／待建立交换的方向／类型：`shade_install` / `inputs` / `product`.

仅实际需要时记录额外认可锚固件、螺钉或垫片的具体材料及采购状态，排除随附套件覆盖。每种具体组件在最终数据中各建交换。 数量范围证据需求：须提供实际基材、兼容固定规格、数量及组件质量；支架数量不能导出通用 kg 区间。

- 采集对象：额外适配基材的固定及调平组件
- 流属性/单位：Mass / kg
- 数量规则：按实际称重或可追溯记录计入为本作业领用的额外组件，毛退回量单独记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`levolor-cordless-25-0040-024`

#### 采集要求：实际清理和控尘用品 (`cleanup_supplies`)

过程／待建立交换的方向／类型：`shade_install` / `inputs` / `product`.

仅使用时识别每种采购产品，例如清洁水或一次性擦拭物，记录实际质量。不假定湿式清理、危险化学品或统一混合物身份。 数量范围证据需求：方法及用量取决于基材和碎屑；提出用量区间前须收集现场及产品证据。

- 采集对象：实际清理和控尘用品
- 流属性/单位：Mass / kg
- 数量规则：分别按产品记录安装及整改清理实际领用或消耗的用品。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`levolor-cordless-25-0040-024`

#### 采集要求：有界的可重复使用工具和登高设备供应服务 (`tool_access_service`)

过程／待建立交换的方向／类型：`shade_install` / `inputs` / `product`.

仅使用时，按供应商定义记录电钻、手工具或登高设备的有界供应服务及所含负担。只有供应商合同定义了服务计数单位时才能使用计数；保留实际时长及活动记录用于分配。 数量范围证据需求：须提供供应商边界、实物服务量及所有使用方活动分母；不得编造工具寿命、利用率或次数与小时换算。

- 采集对象：有界的可重复使用工具和登高设备供应服务
- 流属性/单位：Number of items / item
- 数量规则：按合同定义单位记录可归属的实际供应服务数量；最终绑定前拆分不兼容服务单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_resources`
- 来源：`levolor-cordless-25-0040-024`

#### 采集要求：有界的安装交付和退回物流服务 (`job_logistics`)

过程／待建立交换的方向／类型：`shade_install` / `inputs` / `product`.

按声明交接点，仅实际发生时记录本作业交付和退回服务、供应商车辆、路线及货载分配。服务计数单位须有实际合同支持；实际距离和载荷另行记录。 数量范围证据需求：须提供实际行程、退回路线、货载及供应商单位；无通用行程数或运输因子证据。

- 采集对象：有界的安装交付和退回物流服务
- 流属性/单位：Number of items / item
- 数量规则：实际合同中可归属的交付和退回服务单位；排除其他地方已计入的套件运费或工具供应商运输。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_resources`
- 来源：`levolor-cordless-25-0040-024`

#### 采集要求：在已记录退回或库存交接点的可用卷帘零件及包装 (`usable_returns`)

过程／待建立交换的方向／类型：`shade_install` / `outputs` / `product`.

实际存在可重复使用物品时，按物品及材料、接收方、保管责任和转移编号区分退回供应商的未用卷帘或零件、可重复使用包装及保留库存。期初和期末库存是库存余额，不是采购投入或额外实物退出。同一保管方保留的期末库存不得同时计为可用输出转移。本输出仅记录实际保管责任转移，须有唯一接收保管方并且只作一次余额处理；同一保管方保留货物仅留在期末库存。明确上游负担归属和供应商退款。 数量范围证据需求：须提供实际可重复使用状态、接收证据及计量质量；不得假定所有包装可重复使用或重复扣减退回物。

- 采集对象：在已记录退回或库存交接点的可用卷帘零件及包装
- 流属性/单位：Mass / kg
- 数量规则：按接收保管方及唯一转移编号记录实际称重的可用实物退出或可追溯组件质量；整帘退回也须计数以核对套件。相同保管方的期末保留库存是余额，不是本输出。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_exits`
- 来源：`levolor-cordless-25-0040-024`

#### 采集要求：声明废物收集交接点的废弃包装 (`packaging_waste`)

过程／待建立交换的方向／类型：`shade_install` / `outputs` / `waste`.

仅实际废弃时，按材料和接收路线区分实际纸、纸板、塑料或混合包装。已含于套件供给的包装不得成为第二项采购投入。 数量范围证据需求：须提供实际包装清单、分离和称量记录；不得使用通用包装比例或回收收益。

- 采集对象：声明废物收集交接点的废弃包装
- 流属性/单位：Mass / kg
- 数量规则：分流计量实际发送给指定收集或处理交接点的包装废物质量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_exits`
- 来源：`levolor-cordless-25-0040-024`

#### 采集要求：捕集的固定孔碎屑和损坏安装材料 (`installation_debris`)

过程／待建立交换的方向／类型：`shade_install` / `outputs` / `waste`.

按已表征材料及接收路线分开记录实际基材钻孔碎屑、用过的清理用品、损坏额外组件及不可修复卷帘零件。捕集粉尘属于废物，不自动成为向空气的基本流。湿式清理产生废水时须另列实际废物流。 数量范围证据需求：须提供基材、孔加工及清理方法、材料身份和称量处置记录；单靠几何量不能导出粉尘或拒收质量区间。

- 采集对象：捕集的固定孔碎屑和损坏安装材料
- 流属性/单位：Mass / kg
- 数量规则：按已表征物流记录实际计量收集碎屑和废弃材料数量，包括整改产生量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_exits`
- 来源：`levolor-cordless-25-0040-024`

#### 采集要求：实际已表征的物质向空气排放 (`air_releases`)

过程／待建立交换的方向／类型：`shade_install` / `outputs` / `elementary`.

仅有排放证据时按已识别物质或颗粒类别和接收空气区室拆分。采用适用于实际基材及控制措施的监测或有依据的方法。不得根据织物或产品含量推定 VOC 排放，亦不得因未测量而宣称为零。 数量范围证据需求：须有物质身份、控制效率及适用监测或因子不确定性；无通用总粉尘或 VOC 质量区间。

- 采集对象：实际已表征的物质向空气排放
- 流属性/单位：Mass / kg
- 数量规则：实际特定物质的实测或有文件方法推导排放质量；未知排放保留为披露的数据缺口。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`levolor-cordless-25-0040-024`

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `shade_install` | 窗洞内固定、装配与验收 | required | 所有范围内作业 | 在既有窗洞处装配工厂卷帘及安装横杆、支架及固定件、把手及端盖和另需锚固件、垫片；验收前返工保留在本节点 | 1 item 已验收安装 |

一个装配节点负责固定及交接前全部校正。支架不水平或未锁定、升降受阻、无法保持位置、织物损坏或固定件不兼容均为不合格状态。`shade_install` 内返工包括安全拆卸、调平或加垫、允许的张力调节、重装及复查；所有重复投入保留在同一作业记录。未解决的拒收卷帘不得进入已验收输出。可用退回货物交给供应商或明确库存；不可修复品按实际已表征废物退出。共用电钻、充电、登高和配送服务也可能服务其他作业或报告时段：资源台账须列出这些实际使用方，不得虚构寿命。

### 过程：窗洞内固定、装配与验收 (`shade_install`)

#### 输入

##### 产品流

###### 工厂成品无绳织物卷帘及声明的随附配套件 (`shade_kit`)

记录准确成品卷帘和供给交接点，包括实际交付的安装横杆、工厂支架及螺钉、把手、端盖和包装覆盖。逐项列明组件职责以检查完整性；已含组件不得再建独立采购交换。 数量范围证据需求：须提供供应商配套件清单及实际收货、退回、替换台账；支架和净空表不提供套件质量、损耗或替换区间。

- 选定流：工厂成品无绳织物卷帘及声明的随附配套件
- 流属性/单位：Number of items / item
- 数量规则：归属于已验收安装的实际毛收货套数，包括消耗的替换套件；未用整套退回仅核对一次。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_kit`
- 来源：`levolor-cordless-25-0040-024`



###### 实际钻孔、充电及抽尘用电 (`installation_power`)

记录实际电力供应及可归属的充电、电钻、抽尘负载计量。具体绑定前，Energy 属性和供应身份须独立确认。不得重复计算已含于供应商服务中的电力。 数量范围证据需求：须提供实际设备、仪表时段、任务份额和供电地区；手动升降不是零用电证据。

- 选定流：实际钻孔、充电及抽尘用电
- 流属性/单位：Energy / kWh
- 数量规则：实际计量的可归属电量，包括声明供给边界内的充电损耗和整改循环。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_resources`
- 来源：`levolor-cordless-25-0040-024`



##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已验收的内嵌式无绳织物卷帘安装服务 (`shade_install_accepted`)

完成服务通过声明的窗洞、支架锁定、把手及端盖、全程操作和位置保持检查。拒收或待完成安装不得进入验收数量。 数量范围证据需求：这是准确参考定义，不是产出率证据；描述验收产出率须有实际通过或拒收作业台账。

- 选定流：已验收的内嵌式无绳织物卷帘安装服务
- 流属性/单位：Number of items / item
- 数量规则：1 item
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_accept`
- 来源：`levolor-cordless-25-0040-024`



##### 废物流

##### 基本流

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `rework_burdens` | shade_install | 验收前所有返工、替换材料、拆卸重装和复查均归属原作业。失败作业和未解决拒收不得增加已验收产出；披露如何把其统计期负担分配给已验收作业。不自动给出避免生产或回收收益。 | `levolor-cordless-25-0040-024` |
| `shared_resources` | tool_access_service; installation_power; job_logistics | 识别共用电钻、登高设备、充电器或配送服务，实际 shade_install 及其他全部使用作业或节点，以及有界服务或报告时段。优先直接计量可归属用量；否则依据有证据的因果活动份额分配声明时段总量，并核对全部使用方份额。电力或运输须单列或仅计于供应商数据集内一次。使用供应商有界服务，不推测自有资产寿命。缺少分母或边界为数据缺口。 | `levolor-cordless-25-0040-024` |
| `returns_and_stock` | shade_kit; extra_fixings; usable_returns | 台账保留毛收货、安装消耗、供应商退回、期末库存及废物；实际保管责任移动使用唯一转移编号。期初和期末库存为库存余额；保留的期末库存不是额外实物可用输出。实际转移须有明确接收保管方且仅作一次余额处理。退回可用物品不能抹去实际运费和搬运；可以保留毛收货及明确携带负担的产品退出，或按文件净采购一次，不能同时净扣减和再给第二项收益。可用退出不属于预期联产品销售。 | `levolor-cordless-25-0040-024` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | 流角色 | 记录类型 | 原始字段 | 采集方法 | 单位 | 频率 | 时间覆盖 | 场址范围 | 汇总规则 | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_kit` | `shade_install` | 套件收货和覆盖 | 交付领用台账 | job_id; model; width; drop; fabric; roll_direction; kit_bom; supplied_part_counts; package_coverage; receipts; replacement_issues; return_ids | 对照实际卷帘检查订单、包装及制造商说明书；核对支架、螺钉、把手、端盖和毛收货、退回及消耗替换件。 | item | 每次收货、领用及退回 | 含整改的完整首次安装作业 | 实际地点及关联供应商 | per reference flow | 配套件覆盖清单及签署的领退记录 |
| `cp_materials` | `shade_install` | 额外固定件及清理用品 | 材料领用台账 | job_id; substrate; fixing_spec; material; supplier; scale_id; issued_mass; consumed_mass; return_mass; water_or_wipe_identity | 记录套件以外每种额外组件或产品；用适当的校准秤称量，或使用可追溯供应商组件质量；分开未用退回。识别实际清理方法。 | kg | 每次领用及整改 | 完整作业 | 现场、仓库及关联供应商 | per reference flow | 称量证据、固定方案认可及产品收据 |
| `cp_resources` | `shade_install` | 电力、共用工具或登高及物流 | 仪表及供应服务台账 | job_id; asset_id; provider; service_unit; service_boundary; period; all_consumers; activity_share; meter_start; meter_end; charging_loss_boundary; route; load; included_burdens | 读取实际供电计量、充电日志和供应商合同。列明全部实际使用方及时段；保留任务时长、行程和货载证据用于因果分配。有界计数服务须有供应商定义单位；否则保留实际单位及未解决换算。区分服务内含电力及运费。 | kWh; 供应商定义的服务单位 | 每次资源事件及有界时段 | 作业及完整共用服务分母时段 | 现场、供应商及台账中所有其他使用方 | per reference flow | 仪表校准、供应商边界和核对后的因果份额 |
| `cp_accept` | `shade_install` | 已验收服务及返工 | 检查和交接 | job_id; opening_dimensions; substrate; obstruction_check; instruction_edition; bracket_count; bracket_positions; tab_orientation; fixing_spec; level; clicks; handles; end_caps; roll_direction; raise_lower; hold_position; rework; reject_state; signoff | 测量窗洞和实际卷帘，核对匹配说明书及基材固定件。记录每个支架的水平和锁定、把手及端盖完整、全程顺畅且水平升降，并按说明检查位置保持。整改关闭后签署交接；未解决拒收单独记录。 | item | 每次作业及复查 | 收货至最终交接 | 实际安装窗洞 | per reference flow | 照片、尺寸记录、整改关闭及签署验收 |
| `cp_exits` | `shade_install` | 可用退出及废物 | 称量和转移台账 | job_id; transfer_id; material; condition; mass; scale_id; recipient; stock_location; receiving_gate; kit_coverage; transport_owner; waste_route | 分别称量每种已表征退回、库存责任转移及废物流；关联供应商接收或库存入账以及废物收集单。核对毛领用与保留安装物、退回货物、废物及记录损失；实际产生废水时须包括。 | kg | 每次退回、库存责任移动及废物发送 | 含整改清理的完整作业 | 现场、接收库存或供应商及声明收集方 | per reference flow | 校准称量、接收确认及保管责任核对 |
| `cp_air` | `shade_install` | 实际物质特定空气排放 | 监测或有文件因子计算 | job_id; substrate; substance; particle_class; compartment; activity; control; sampling_method; released_mass; factor_source; uncertainty | 识别实际钻孔或清理排放机制及物质、颗粒类别。测量或利用适用的有文件方法及实际控制、活动数据。分开捕集碎屑、保留材料与排放质量；没有证据不等于零。 | kg | 每次排放任务或经验证有代表性统计期 | 完整安装及返工 | 实际工作区域和空气接收区室 | per reference flow | 监测或因子适用性、检出限及不确定性 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `job_reconciliation` | shade_kit; extra_fixings; cleanup_supplies; usable_returns; packaging_waste; installation_debris | 按每个实际作业及材料核对毛收货加期初库存与安装或消耗数量、供应商退回、期末库存、废物及记录损失。期初和期末库存为库存余额，不是额外采购或实物退出。保留期末余额不得同时进入 usable_returns；实际保管责任转移须有唯一接收责任且恰好一次余额处理。保留产品退回与废物交接点，不使用通用损耗系数。 | cp_kit; cp_materials; cp_exits | 已核对的每参考流交换 | `levolor-cordless-25-0040-024` |
| `resource_attribution` | installation_power; tool_access_service; job_logistics | 每个有界时段资源总量按直接证据用量或全部使用方的文件化因果份额分配，然后将本作业份额附于已验收服务记录。明确分子单位和所有使用方分母；没有供应商定义服务单位时，不得把小时或 km 换成 item。 | cp_resources; cp_accept | 可归属的每参考流资源记录 | `levolor-cordless-25-0040-024` |
| `acceptance_count` | shade_install_accepted | 全部整改后每项签署验收作业只计一次；实际失败或待完成作业数以及统计期负担决策另行保留。 | cp_accept | 1 item 已验收参考输出 | `levolor-cordless-25-0040-024` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `route_identity` | 所有行 | 保留实际卷帘、套件、型号、内嵌系统、基材、宽度、垂长、织物、卷绕方向及制造商说明书版本。不得混用窗框外装或可选附件步骤。 | cp_kit; cp_accept; `levolor-cordless-25-0040-024` |
| `measurement_completeness` | 所有清单行 | 每项启用卡须有数量、单位、日期、保管责任交接点及测量不确定性。不启用的条件性项目须有实际证据；未知使用或排放保留为缺失。本 PCR 不建立供应商定义计数单位、Energy 或任何 Duration 支持。 | cp_materials; cp_resources; cp_exits; cp_air |
| `range_limits` | 所有清单行 | 将各行数量范围证据需求替换为经审查兼容观察或因子后，方可把区间用作 QA 限值；不得把制造商支架、净空或把手尺寸转为通用 kg、电力、废物或排放范围。 | 供应商及作业计量和适用源不确定性 |
| `shared_and_reject` | shade_install | 同一声明时段和实际使用方中每项共用资源仅核对一次；所有返工负担及拒收状态保留至关闭。 | cp_resources; cp_accept; cp_exits |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `completed_gate` | shade_install_accepted | 要求窗洞、基材和固定件兼容，内嵌方向、数量及间距正确，支架水平对齐且全部卡舌锁定，把手和端盖完整，安全顺畅全程升降且已记录位置保持检查。有待整改或拒收不得通过。 | `levolor-cordless-25-0040-024` |
| `coverage_and_units` | 所有清单行 | 核对工厂套件与额外组件覆盖、零件及包装毛额与退回、电力与服务内含负担、实物属性及单位和每参考流基准。须披露未解决 UUID 或支持身份、启用项目数量缺失；这些缺口阻止最终交换绑定。 | `levolor-cordless-25-0040-024` |
| `shared_rework_exits` | shade_install | 检查实际所有使用方时段及因果份额；每次返工均附属于本作业，每项可用退出须有指定接收方或库存保管责任，每项废物流须有接收交接点。不得重复扣减或假定回收收益。 | `levolor-cordless-25-0040-024` |
| `release_evidence` | air_releases; installation_debris | 验证物质特定空气方法及不确定性，区分捕集碎屑与排放质量，并披露缺少因子或测量。不得把产品 VOC 含量或未知排放报告为零。 | `levolor-cordless-25-0040-024` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 首次安装服务前景数据包及下游 process、lifecyclemodel 投影 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 匹配的内嵌式手动无绳工厂成品织物卷帘安装，带声明的配套件和验收交接点 |
| excluded_use | 卷帘制造；窗框外装；电机或链条类型；可选帘幔及下端固定路线；旧帘拆除；日常操作或寿命性能声明 |
| required_metadata | 型号、宽度、垂长、织物和卷绕方向、基材及窗洞、说明书版本、套件覆盖、支架及把手布置、地点和时间、数量及验收交接点、物流工具废物边界 |
| required_quality_disclosure | 实测覆盖及不确定性；数量范围缺口；固定或未解决身份及支持状态；返工及拒收；供应商数据集内含；共用时段分配及退回保管责任 |
| update_trigger | 安装系统、型号或说明书、组件覆盖、基材兼容性、安装方法、实测资源废物排放证据或上游供应商边界改变 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| levolor-cordless-25-0040-024 | handbook | LEVOLOR，卷帘安装方法：PerfectPlacement 无绳升降、带安装横杆开放卷轴，说明书 25-0040-024，PDF 第 1–8 页。https://www.levolor.com/media/pagebuilder_uploads/25-0040-024_BRND_LVC_Roll-Sol_NTL_OpenRoll-Cordless-Install-Guide_vF110325_1_.pdf | 供应组件；内嵌深度、间距、方向及随宽度变化的支架数量；把手位置；卡入和端盖；操作、许可张力调节及故障处理。不提供清单质量或因子。 |
| un-cpc3-2025 | official_guidance | 联合国统计司，CPC 3.0 解释性说明，2025 年 6 月 30 日，第 296 页，子类 54699。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 包括百叶帘及遮阳篷安装的官方分类边界；更窄的安装服务范围。 |
