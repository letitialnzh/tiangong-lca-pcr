---
pcr_id: pcr.construction-services.existing-commercial-office-space-category-a-base-building-services-and-finishes-integrated-refurbishment-services
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 既有商业办公空间Cat A基础建筑服务与基本装修一体化翻新服务

## 1. 范围与适用性

本PCR适用于实测既有商业办公空间内完成的业主Cat A一体化翻新。产品是实际合同规定的基础建筑服务及基本装修交付状态，为后续租户装修做准备。业主验收门槛协调保留条件、实体安装及规定测试，不表示每种典型Cat A组件均存在，也不表示租户可直接进入已运营Cat B工作场所。[wdi-cat-a-b-fitout]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.construction-services.existing-commercial-office-space-category-a-base-building-services-and-finishes-integrated-refurbishment-services |
| classification_refs | cpc:3.0:54122 (narrower) |
| covered_products | 实际合同范围内既有办公Cat A业主一体化翻新。 |
| excluded_products | 新建建筑；扩建新增面积；结构重建；用途变更；租户Cat B；未来运行。 |
| representative_product | 业主交接时已验收既有办公空间基础服务及基本装修。 |
| production_route | 勘测隔离→选择性拆除及基层释放→协调Cat A安装→测试复测及缺陷关闭业主交付。 |
| market_state | 已完成施工翻新服务，不是出厂材料包或已入驻租户办公室。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 声明既有范围内获业主验收的一体化Cat A办公翻新。 |
| How much | 1 m2 |
| How well | 业主接受实际合同接口系统表及规定测试记录和缺陷关闭。 |
| How long or cycle | 一次实际干预，从施工前勘测至分段最终验收，带阶段时期ID；不假设寿命。 |
| reference_flow_link | `accepted_cat_a_office` |

| 字段 | 值 |
| --- | --- |
| reference_amount | 1 |
| product_flow | 已获业主验收的Cat A办公翻新服务 |
| flow_property | Area `93a60a56-a3c8-19da-a746-0800200c9a66` |
| unit_group | Units of area `93a60a57-a3c8-18da-a746-0800200c9a66` |
| reference_unit | m2 |
| required_qualifiers | building_id; footprint_polygons; survey_convention; retained_replaced_schedule; occupancy_phasing; contract_cat_a_scope; base_services_interface_points; common_core_attribution; test_criteria; defect_closed_landlord_acceptance |

A为唯一已验收净内部办公楼面面积。关联共用核心及外部共享系统负担按因果归属一次；仅在同一声明测绘口径明确纳入且仅纳入一次时，其面积可进入A。不得相加工种地板吊顶面积。多个区或建筑不自动可比。

## 4. 计量与单位规则

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| `reference_area` | accepted_cat_a_office | Area `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | A>0为声明测绘口径下唯一已验收净内部办公面积；协调门槛关闭后每个验收边界仅计一次。关联共用核心及外部系统进入因果归属负担，不能免费排除或额外放大分母。 |
| `native_units` | all inventory rows | 实际原生属性 | 实际原生单位 | 保留供应面积数量长度体积质量及服务单位。独立所需质量视图必须有实际SKU密度状态含水率温度及单位来源，且与原生台账不可叠加。能量时间及提供方原生单位支持需单独核实。 |
| `count_unit_alias` | 存在时的计数交换 | Count | item | 本 PCR 的显示别名 item 表示已核实的物品数量单位组参考单位 Item(s)，系数为 1。具体数据集须保留实际参考单位身份；此书写别名不建立质量、面积或服务之间的等价关系。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实测既有办公范围及实际基层、服务容量、占用及批准范围。 |
| starting_condition_role | 既有条件及干预起始状态，不是购入新建筑。 |
| product_classification_scope | CPC54122商业办公修理改造子集。 |
| recursive_input_rule | 同类已完成分包仅在实体范围原生结果及完整负担覆盖独立时作上游；排除重复自有资源及内部办公状态转移。 |
| upstream_dataset_requirement | 实际SKU提供方地域技术原生单位数据，明确供应货运资产废物覆盖；定稿前展开缺口。 |
| disclosure | 保留更换条件、共用核心因果范围、占用阶段、合同接口测试门槛、上游覆盖及排除项。 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `retained_start` | all nodes | 从实测既有建筑、划定范围、在用占用分期、保留容量消防通行调查及保留更换服务表开始；承担实际选择性拆除、危害控制及基层释放。历史资产既不是新购也不作负收货。 | `wdi-cat-a-b-fitout`; `wdi-riverside-refurbishment` |
| `contract_cat_a` | integration; test_handover | 实际批准的业主合同规定Cat A构件接口点及测试标准。实际要求时包含地板吊顶基本装修及协调基础电气照明暖通给排水消防服务。名称不构成通用规范或租户入驻证明。 | `wdi-cat-a-b-fitout`; `wdi-riverside-refurbishment` |
| `support_ownership` | site_support | 对全部节点的自有租赁提供方测试备件运输及临时公用资源负责且仅计一次。按因果将实际必要共用核心及既有整系统升级归属本范围及其他受益方；覆盖不明阻止最终数据。 |  |
| `exclusions` | all nodes | 排除新建整栋建筑、扩建新增面积、结构重建、用途转换、Cat B定制隔墙家具IT设备及未来办公运行。Riverside仅支持分期接口实践；其扩建新增面积Cat B、网页零统计、BREEAM等级及案例尺寸均不得作为默认值。 | `wdi-cat-a-b-fitout`; `wdi-riverside-refurbishment` |
| `boundary_atomic_completion` | 所有过程 | 本节的采集要求是必须执行的采集与适用性指令，不是聚合清单交换。完成前景数据集前，必须为每一种实际产品、废物流、物质及环境子区室建立独立原子流卡／交换。保留全部实际事件、上游负荷、退回及原生单位；所链接公式应按每个兼容身份分别执行。环境资源提取记为输入，环境释放记为输出。不得相加不同原生单位、用一个 UUID 代表整个采集池、将缺记录解释为零，或与已有具体卡重复计入。保留宿主的文件性接口仅传递状态，不形成新采购资产。适用成员未明确或未有证据证明不存在时，定量清单仍不完整；非强制筛查提示不能补造数量或化学组成。 |  |

### 条件性清单补全要求

以下标识符表示采集池或文件性状态台账。一个池可能有零个、一个或多个实际成员。须依据真实记录判断适用性，并为每个成员保留原有数量方法和采集协议；只有兼容的数量才能共同核对。下列原有可选筛查区间仅作为暂定复核提示，不得强加于不同材料或混合采集池。

#### 采集要求：选择性拆除与防护耗材 (`stripout_consumables`)

过程／待建立交换的方向／类型：`stripout` / `inputs` / `product`.

记录为释放既有基层使用的袋、隔离防护、切割及清洁耗材；按实际产品及危害角色展开。历史构件属于既有条件，不是新购入材料。拆下的实际合格可用历史设备或配件必须另按实际Count/Area/Length/Volume/Mass实例化历史Product出口，记录来源可用状态原生数量单位接收方转移ID及唯一归属；不能默认废物、计入新耗材退料或冲减新收货。

- 采集对象：选择性拆除与防护耗材
- 流属性/单位：Mass / kg
- 数量规则：S = opening + gross_receipts - tare - closing，使用本SKU的原生单位。声明唯一口径：含出口总投入为 S / A，或净消耗投入为 (S - usable_outward_return) / A。保留全部未退损失废物及失败施工耗用；匹配的实际外退证据不得再次扣减或抵扣。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stripout_material`

范围证据需求：记录每种防护切割清洁SKU库存及实际危险使用状态、期初收货期末可用退料和未退损失；按既有基层通行及占用阶段调查变动。无通用kg/m2范围证据。

#### 采集要求：拆除耗材可用对外退料 (`stripout_usable_return`)

过程／待建立交换的方向／类型：`stripout` / `outputs` / `product`.

仅记录有相同入库SKU及批次凭证、跨出前景边界的本项目可用物料。期末库存不是对外退料；历史回收构件不能抵消新采购。

- 采集对象：拆除耗材可用对外退料
- 流属性/单位：Mass / kg
- 数量规则：匹配称量的可用退料除以A；选择含出口总投入或净消耗口径仅处理一次，不另给抵扣。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stripout_material`

范围证据需求：保留每项本项目可用SKU批次、实测原生质量、状态、出界及匹配收货；区分期末库存与历史回收构件。无可用退料比例证据。

#### 采集要求：封闭收集的拆除构件与残余物 (`stripout_waste`)

过程／待建立交换的方向／类型：`stripout` / `outputs` / `waste`.

按实际组成及接收处理分别记录危险或非危险的拆除吊顶、地板、旧服务设施、粉尘及污染耗材。凭证覆盖处理和运输，不假设回收抵扣。

- 采集对象：封闭收集的拆除构件与残余物
- 流属性/单位：Mass / kg
- 数量规则：扣皮重实测交运量除以A；核对来源及去向；留存历史质量不记作新制造购入。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stripout_material`

范围证据需求：采集实际拆除构件材料组成原状态危害调查扣皮重数量及接收处理证据。实际以体积计液态废物必须独立展开原生体积Waste交换及接收记录；不假设废物组成回收率。

#### 采集要求：按面积供应的实际地板吊顶与基本装修构件 (`area_components`)

过程／待建立交换的方向／类型：`integration` / `inputs` / `product`.

仅展开实际使用的架空地板板块、吊顶板及按面积供应的基本覆盖材料。每种材料角色和层次分别记录一次；供应或安装面积不等于最终办公面积。

- 采集对象：按面积供应的实际地板吊顶与基本装修构件
- 流属性/单位：Area / m2
- 数量规则：S = opening + gross_receipts - tare - closing，使用本SKU的原生单位。声明唯一口径：含出口总投入为 S / A，或净消耗投入为 (S - usable_outward_return) / A。保留全部未退损失废物及失败施工耗用；匹配的实际外退证据不得再次扣减或抵扣。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_integration_material`
- 来源：`wdi-cat-a-b-fitout`; `wdi-riverside-refurbishment`

范围证据需求：采集实际地板吊顶覆盖物SKU层次供应面积安装面积边角期初期末状态及匹配原生面积退料。跨层工种面积不是最终办公面积；无默认损耗因子。

#### 采集要求：按长度供应的实际电缆管材与线性接口 (`length_components`)

过程／待建立交换的方向／类型：`integration` / `inputs` / `product`.

当供应商数据及记录采用长度时，展开实际电缆、管材、风管或线槽，保留材料、截面、等级及交付状态。按件供应的管件归count_components。

- 采集对象：按长度供应的实际电缆管材与线性接口
- 流属性/单位：Length / m
- 数量规则：S = opening + gross_receipts - tare - closing，使用本SKU的原生单位。声明唯一口径：含出口总投入为 S / A，或净消耗投入为 (S - usable_outward_return) / A。保留全部未退损失废物及失败施工耗用；匹配的实际外退证据不得再次扣减或抵扣。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_integration_material`
- 来源：`wdi-cat-a-b-fitout`; `wdi-riverside-refurbishment`

范围证据需求：采集实际电缆管材线槽SKU截面等级实测交付长度切割边角库存及匹配可用米数退料，保留实际换算。无默认走线长度或长度质量因子。

#### 采集要求：按质量供应的实际紧固装修与连接耗材 (`mass_consumables`)

过程／待建立交换的方向／类型：`integration` / `inputs` / `product`.

记录实际胶粘剂、基本涂料、密封剂、紧固件及清洁材料，保留产品组成及施用状态。不虚构涂料配方，不把完整套件再拆成重复采购。

- 采集对象：按质量供应的实际紧固装修与连接耗材
- 流属性/单位：Mass / kg
- 数量规则：S = opening + gross_receipts - tare - closing，使用本SKU的原生单位。声明唯一口径：含出口总投入为 S / A，或净消耗投入为 (S - usable_outward_return) / A。保留全部未退损失废物及失败施工耗用；匹配的实际外退证据不得再次扣减或抵扣。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_integration_material`
- 来源：`wdi-cat-a-b-fitout`; `wdi-riverside-refurbishment`

范围证据需求：采集实际紧固装修密封清洁SKU及湿干封闭状态、实测质量库存收货退料残余。所需换算须实际密度状态含水率温度证据，无配方或覆盖默认量。

#### 采集要求：按体积供应的实际安装服务与试验流体 (`volume_fluids`)

过程／待建立交换的方向／类型：`integration` / `inputs` / `product`.

按文件原生体积单位展开实际购入的水系统或试验流体及供水。按质量供应的制冷剂或化学品必须另设质量输入并核实支持身份；不虚构流体或为套用此卡而换单位。

- 采集对象：按体积供应的实际安装服务与试验流体
- 流属性/单位：Volume / m3
- 数量规则：S = opening + gross_receipts - tare - closing，使用本SKU的原生单位。声明唯一口径：含出口总投入为 S / A，或净消耗投入为 (S - usable_outward_return) / A。保留全部未退损失废物及失败施工耗用；匹配的实际外退证据不得再次扣减或抵扣。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_integration_material`

范围证据需求：保留实际流体SKU供应原生体积温度状态、充注测试去向、期初期末回收库存。按质量供应流体须独立质量输入；无默认充注冲洗体积或泄漏比例。

#### 采集要求：集成物料按原生单位的实际可用对外退料 (`integration_usable_returns`)

过程／待建立交换的方向／类型：`integration` / `outputs` / `product`.

每笔退料按实际面积、数量、长度、质量或体积展开，与入库SKU、状态、数量及核实的支持身份匹配。不混加异质单位，不将期末库存当作对外退料。

- 采集对象：集成物料按原生单位的实际可用对外退料
- 流属性/单位：实际原生属性 / 实际原生单位
- 数量规则：原生单位匹配可用对外退料除以A，作为声明总投入或净消耗口径下的一个非叠加出口视图。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_integration_material`

范围证据需求：每次实际退料采集SKU批次可用状态、原生面积数量长度质量体积、匹配收货及实体接收方。不混合单位或由期末库存推退料，无默认退料比。

#### 采集要求：封闭收集的安装边角失败零件与残余物 (`integration_waste`)

过程／待建立交换的方向／类型：`integration` / `outputs` / `waste`.

记录实际分类包装、边角、拆下的失败零件、固化残余及封闭废液。按危险状态及凭证去向细分；收集粉尘是废物，逸散粉尘是基本流释放。

- 采集对象：封闭收集的安装边角失败零件与残余物
- 流属性/单位：Mass / kg
- 数量规则：实际称量废物净质量除以A；仅在需单独非叠加质量视图时使用有证据的SKU状态密度。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_integration_material`

范围证据需求：采集实际边角失败件包装残余组成及接收处理实测数量。实际按体积记录液态废物必须独立展开原生体积Waste交换，保留体积单位状态接收方；密度质量视图不可叠加。

#### 采集要求：实际调试与最终清洁耗材 (`test_consumables`)

过程／待建立交换的方向／类型：`test_handover` / `inputs` / `product`.

仅在实际使用时记录示踪、清洁、试验耗材及更换试件。耐用测试仪器和提供方实体服务归site_support。

- 采集对象：实际调试与最终清洁耗材
- 流属性/单位：Mass / kg
- 数量规则：S = opening + gross_receipts - tare - closing，使用本SKU的原生单位。声明唯一口径：含出口总投入为 S / A，或净消耗投入为 (S - usable_outward_return) / A。保留全部未退损失废物及失败施工耗用；匹配的实际外退证据不得再次扣减或抵扣。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_material`

范围证据需求：采集实际测试清洁SKU尝试ID实测收货库存退料废物及实际重复周期消耗。无默认测试次数清洁配方或kg/m2强度。

#### 采集要求：封闭收集的调试与最终清洁废物 (`test_waste`)

过程／待建立交换的方向／类型：`test_handover` / `outputs` / `waste`.

实际废试件、收集清洁残余及封闭排出的试验流体按状态去向分类。直接排向环境者必须另按介质设实测基本流交换。

- 采集对象：封闭收集的调试与最终清洁废物
- 流属性/单位：Mass / kg
- 数量规则：扣皮重实际废物交运量除以A；记录接收处理覆盖。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_material`

范围证据需求：计量首次重复周期实际废测试清洁材料状态数量及接收方。原生体积封闭废水必须独立Volume Waste交换并有接收方；直接环境水有独立实测环境交换，不能以物种质量替代。

#### 采集要求：临时设备及提供方活动实际供应液体燃料 (`supplied_fuel`)

过程／待建立交换的方向／类型：`site_support` / `inputs` / `product`.

仅展开实际供应燃料牌号状态。上游燃料供应与实际燃烧分开；供应量本身不是空气排放，也不等于假定燃烧。

保留真实票据原生单位及换算操作数；平台体积组子单位为l，1 L = 1 l = 0.001 m3。大写L不是另一个已核实的平台单位标识；不得丢弃票据单位或重复转换。

- 采集对象：临时设备及提供方活动实际供应液体燃料
- 流属性/单位：Volume / l
- 数量规则：S = opening + gross_receipts - tare - closing，使用本SKU的原生单位。声明唯一口径：含出口总投入为 S / A，或净消耗投入为 (S - usable_outward_return) / A。保留全部未退损失废物及失败施工耗用；匹配的实际外退证据不得再次扣减或抵扣。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_support_fuel`

范围证据需求：采集实际牌号状态及票据原生单位、校准库存和实测燃烧，或含退料未燃废物失控损失结转的完整互斥去向。调查未知损失不确定性；无残差燃烧或燃料强度默认值。

#### 采集要求：外部实际完成的勘测通行安装支持及测试服务 (`provider_services`)

过程／待建立交换的方向／类型：`site_support` / `inputs` / `product`.

按实际有凭证原生单位及完整上游覆盖展开勘测、危害专家、租用通行设施、专业接口施工、平衡及规定的独立测试等实体完成结果。价格或工时不得换成件数；已有生命周期完整服务数据包含的资源不重复录入。

- 采集对象：外部实际完成的勘测通行安装支持及测试服务
- 流属性/单位：实际原生属性 / 实际原生单位
- 数量规则：实测提供方实体结果以原生单位除以A；定稿前必须取得实际单位属性支持及供应方范围。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_support_provider`

范围证据需求：取得每个实际提供方实体完成结果原生数量服务单位及完整材料能量资产货运废物范围。缺少原生成果或覆盖阻止最终数据；费用工时均不能代理件数。

#### 采集要求：临时通行工具及测试资产完整寿命归属份额 (`shared_assets`)

过程／待建立交换的方向／类型：`site_support` / `inputs` / `product`.

对三个节点跨阶段共用的实际脚手平台、抽排设备、仪器、配电设施及耐用工具采用资产等效份额视图。覆盖全部使用方项目时期的制造、维护、更换及寿命终结。

- 采集对象：临时通行工具及测试资产完整寿命归属份额
- 流属性/单位：Number of items / item
- 数量规则：资产等效量=(job_driver / full_life_driver) / A；驱动单位兼容且完整寿命有证据；不得再叠加按驱动量服务负担视图。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_support_assets`

范围证据需求：记录各资产完整寿命制造维护更换寿命终结范围、全部使用方项目节点时期及兼容实际驱动；采用已观察寿命或历史加有证据剩余期终止。保留来源不确定性敏感性更新；不假设寿命利用率。

#### 采集要求：实际进出场及提供方货运服务 (`freight_services`)

过程／待建立交换的方向／类型：`site_support` / `inputs` / `product`.

归集供应或提供方数据尚未覆盖的实际物料、废物、退料及设备物流。记录载荷路线车辆及空返；如有人员或提供方出行，另按原生实体服务展开。

- 采集对象：实际进出场及提供方货运服务
- 流属性/单位：Mass*distance / kg*km
- 数量规则：各覆盖路段实际load_kg * distance_km求和后除以A，并披露实际空返服务负担及覆盖。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_support_freight`

范围证据需求：取得实际交运载荷及单位、路线运距及单位、车辆覆盖及空返凭证。保留真实kg*km换算及单独覆盖空返负担；无默认运距载荷或空返因子。

#### 采集要求：实际可用液体燃料对外退料 (`fuel_usable_return`)

过程／待建立交换的方向／类型：`site_support` / `outputs` / `product`.

仅记录有文件证明跨出前景边界且牌号状态批次及入库匹配的可用燃料。泄漏回收后留存在期末的量是期末库存。

保留真实票据原生单位及换算操作数；平台体积组子单位为l，1 L = 1 l = 0.001 m3。大写L不是另一个已核实的平台单位标识；不得丢弃票据单位或重复转换。

- 采集对象：实际可用液体燃料对外退料
- 流属性/单位：Volume / l
- 数量规则：实际匹配的原生体积外退量 / A。含出口总投入口径保留该实测出口；净消耗口径仅作不可叠加的物理审计记录，已在 supplied_fuel 扣除一次，不另抵扣。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_support_fuel`

范围证据需求：记录实际可用牌号批次状态、以票据原生单位实测退量及与入库燃料匹配的实体接收方；回收结转仍属期末。无默认退比或额外避免供应抵扣。

#### 采集要求：实际封闭后勤废物及未燃烧燃料废物 (`support_waste`)

过程／待建立交换的方向／类型：`site_support` / `outputs` / `waste`.

收集滤材、临时防护、封闭燃料废物及水处理残余进入实际接收处理。回收结转燃料与直接失控释放分别属于互斥去向。

- 采集对象：实际封闭后勤废物及未燃烧燃料废物
- 流属性/单位：Mass / kg
- 数量规则：实际净称量交运量除以A；体积转质量视图需实际燃料或SKU密度及状态且不可叠加。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_support_waste`

范围证据需求：计量实际封闭废物组成危害状态及接收处理。原生体积液态废物必须独立Volume Waste交换并有实测体积单位接收方；燃料回收结转与直接释放保持互斥。

#### 采集要求：实际物种特定释放及直接环境取水 (`actual_environmental_exchanges`)

过程／待建立交换的方向／类型：`site_support` / `inputs`（资源提取） / `outputs`（环境释放） / `elementary`.

必须将每个实际直接释放按物种及接收空气水土介质展开为实测质量，并将实际直接环境取水排水按有支持的实测单位和来源接收区室展开。凭连接事件ID归集拆除粉尘、装修清洁排放、安装流体泄漏、燃料燃烧失控泄漏及试验排放；实际不存在时不得虚构物种水或气交换。供应产品、封闭废物及基本流释放是不同状态。

- 采集对象：实际物种特定释放及直接环境取水
- 流属性/单位：实际原生属性 / 实际原生单位
- 数量规则：使用实测物种质量，或匹配活动量乘有证据物种因子，或实际整股流体释放量乘有证据组成及去向；完整物种因子不再乘组成去向。最终数据前水气角色必须有独立实测交换及协议原始操作数；实际归属量除以A一次。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_support_environment`

范围证据需求：按实测质量或有效匹配活动因子整流体组成去向证据确定实际物种及接收介质；独立计量实际环境水Volume及气体原生数量，并保留区室及换算条件。水体积不得套污染物种公式；不虚构物种、不用SDS作排放量、不将缺失当零。

#### 采集要求：按件计量的实际基础服务组件 (`count_components`)

过程／待建立交换的方向／类型：`integration` / `inputs` / `product`.

按每个真实 SKU、组成/状态及保管关系建立独立原子交换。本要求不是通用集合流。真实完整的采购总成可采用其经核实的整包边界，已含部件不再额外采购。

按既有保留和更换范围记录实际规定的灯具、配电控制设备、暖通末端或机组、给排水消防器件及安装组件。工厂完整包及其BOM只允许一种采购视图。

- 采集对象：按件计量的实际基础服务组件
- 流属性/单位：Number of items / item
- 数量规则：S = opening + gross_receipts - tare - closing，使用本SKU的原生单位。声明唯一口径：含出口总投入为 S / A，或净消耗投入为 (S - usable_outward_return) / A。保留全部未退损失废物及失败施工耗用；匹配的实际外退证据不得再次扣减或抵扣。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_integration_material`
- 来源：`wdi-cat-a-b-fitout`; `wdi-riverside-refurbishment`

范围证据需求：采集实际组件SKU型号配置及计件收货库存安装更换可用退料，说明套件是否包含BOM。无每办公平方米灯具末端数量假设。

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `stripout` | 勘测隔离与选择性拆除 | required | 实际声明合同及范围 | 来源为既有办公构件；独立拆除责任向集成释放基层，并将拆除废物交接接收处理。 | 每参考流 |
| `integration` | 集成实际Cat A基础服务与基本装修 | required | 实际声明合同及范围 | 将实际表面构件服务角色集成为待测试办公安装状态；内含装修及冲洗不声称独立交接。 | 每参考流 |
| `test_handover` | 协调测试与业主验收 | required | 实际声明合同及范围 | 负责实际协调测试及资料缺陷关闭；失败回到集成；仅关闭验收边界进入A。 | 每参考流 |
| `site_support` | 归集全部阶段项目支持资源 | required | 实际声明合同及范围 | 对全部节点时期的共享通行电力提供方测试货运资产排放台账负责一次；事件owning_node连接保留实体责任。 | 每参考流 |

### 过程：勘测隔离与选择性拆除 (`stripout`)

#### 输入

##### 产品流

#### 输出

##### 产品流

###### 已释放用于Cat A集成的既有办公范围 (`released_office_state`)

实际服务隔离、选择性拆除及基层和危害清理后内部交接；测绘边界和释放ID连接安装节点。该状态尚未达到最终Cat A验收。

- 选定流：已释放用于Cat A集成的既有办公范围
- 流属性/单位：Area / m2
- 数量规则：实测已释放范围面积除以A；仅内部活动，不作为新采购或最终产出抵扣。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stripout_release`
- 来源：`wdi-cat-a-b-fitout`; `wdi-riverside-refurbishment`

范围证据需求：测绘实际已释放边界及服务隔离基层危害清理凭证；单列未释放及部分清理面积。调查与安装交接差异，无固定释放面积产率证据。

##### 废物流

### 过程：集成实际Cat A基础服务与基本装修 (`integration`)

#### 输入

##### 产品流

###### 已释放用于Cat A集成的既有办公范围 (`released_office_feed`)

凭相同转移ID及边界ID接受拆除节点的内部交接，不购买既有建筑，也不按工种倍增数量。

- 选定流：已释放用于Cat A集成的既有办公范围
- 流属性/单位：Area / m2
- 数量规则：实际接收已释放面积除以A；与released_office_state匹配并披露未释放或排除区域。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_integration_state`
- 来源：`wdi-cat-a-b-fitout`; `wdi-riverside-refurbishment`

范围证据需求：将实际接收已释放边界转移ID、未释放接口及排除项与拆除记录匹配；调查差异，不强迫接收面积等于验收A。

#### 输出

##### 产品流

###### 已安装待协调测试的Cat A基础办公状态 (`installed_office_state`)

以组件表、测试点及未解决缺陷向test_handover内部交接。协调集成包含合同实际要求的地板、吊顶基本装修及电气暖通给排水消防接口；文件说明缺省典型项目，不虚构其存在。

- 选定流：已安装待协调测试的Cat A基础办公状态
- 流属性/单位：Area / m2
- 数量规则：实际唯一安装范围面积除以A；未关闭故障不得作为验收或销售产出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_integration_state`
- 来源：`wdi-cat-a-b-fitout`; `wdi-riverside-refurbishment`

范围证据需求：测绘实际安装边界服务接口测试点表，未完成未释放失败部分留在验收A外。连接test_handover，不假设安装面积就是验收产出。

##### 废物流

### 过程：协调测试与业主验收 (`test_handover`)

#### 输入

##### 产品流

###### 已安装待协调测试的Cat A基础办公状态 (`installed_office_feed`)

接收integration相同安装边界及接口ID；检查和试验次数是活动记录，不新增办公面积。

- 选定流：已安装待协调测试的Cat A基础办公状态
- 流属性/单位：Area / m2
- 数量规则：实测接收安装范围面积除以A，与installed_office_state匹配且不形成二次采购。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_handover`
- 来源：`wdi-cat-a-b-fitout`; `wdi-riverside-refurbishment`

范围证据需求：将实际安装边界接口状态缺陷ID与集成匹配；保留未完成排除失败区段及重复测试次数，不形成新购面积。

#### 输出

##### 产品流

###### 已获业主验收的Cat A办公翻新服务 (`accepted_cat_a_office`)

在缺陷关闭且业主签收、具备竣工图运维资料及合同实际要求的电气、暖通平衡控制、给排水和消防生命安全证据时形成最终服务。该状态为后续租户装修基础，不证明租户可直接入驻。

- 选定流：已获业主验收的Cat A办公翻新服务
- 流属性/单位：Area / m2
- 数量规则：1 m2
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_handover`
- 来源：`wdi-cat-a-b-fitout`; `wdi-riverside-refurbishment`

范围证据需求：1 m2仅定义归一化。按声明测绘口径计量实际不重叠验收净内部边界并核实完整实际合同门槛；单列未完成失败面积。不主张经验产率或寿命区间。

##### 废物流

### 过程：归集全部阶段项目支持资源 (`site_support`)

#### 输入

##### 产品流

###### 实际供应的施工与调试电力 (`supplied_electricity`)

归集三个生产节点的临时照明、通行工具、暖通试运、在用场所连续性及复测用电。保留供应电压组合地域及提供方覆盖；不含未来办公室日常运行。

- 选定流：实际供应的施工与调试电力
- 流属性/单位：Energy / kWh
- 数量规则：分别保留总输入、总输出及现场发电读数，按实际现场消耗、测试复测损失及驱动单位归属供电范围后除以A；实际外送独立输出不净抵输入，不给额外抵扣。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_support_energy`

范围证据需求：保留实际总表供应、来源组合电压地域、期初期末读数阶段归属及全部实际工具暖通测试复测周期；核对提供方覆盖与非项目负荷。无默认kWh/m2或试运时长。

###### 临时设施及测试实际购入水 (`support_water`)

计量本节点负责的临时福利防护、清洁及测试供水，排除volume_fluids已归集水量。环境取水是不同角色，须另行展开。

- 选定流：临时设施及测试实际购入水
- 流属性/单位：Volume / m3
- 数量规则：归属于本项目的实际供水表读数或有凭证交付体积除以A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_support_water`

范围证据需求：读取实际供水表交付来源测试清洁周期留存充注及封闭环境去向，核对集成已归属水量。无通用冲洗或调试水量。

#### 输出

##### 产品流

##### 废物流

##### 基本流

## 7. 分配与联产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `single_output` | final output | 唯一预期产出是验收Cat A服务面积。内部状态转移及各工种测试面积不是联产品；未决或失败区域在缺陷关闭前不得纳入A。历史回收材料不产生避免负担抵扣。 |  |
| `stocks_returns` | materials and fuel | S=归属期初库存+外部扣皮重净收货-结转期末库存。内部领用安装活动不是新购。选择含出口总投入或净消耗匹配可用对外退料一次扣减，不另抵扣。全部未退回损失废物保留上游供应负担。 |  |
| `shared_complete_life` | site_support | 逐项识别共用通行公用工具测试资产，列出三个使用节点及完整寿命全部外部项目节点时期。使用单位兼容的实际job_driver/full_life_driver，依据已观察寿命或历史加有证据剩余期更换终止及寿命终结；保留来源不确定性敏感性及更新。资产等效量=(job_driver/full_life_driver)/A并承担完整制造维护更换寿命终结；也可采用生命周期完整按驱动量服务数量=job_driver/A及匹配单位，两者不得并用。 |  |
| `phases_rework` | all nodes | 按实际阶段时期索引勘测隔离拆除安装测试复测及签署分段最终竣工。失败测试凭缺陷ID将相应安装状态返回integration；丢弃更换物归所属废物流。全部失败尝试及更换负担仅随验收A计一次，不形成第二销售年份或面积分母。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_stripout_material` | `stripout` | 连接实际实体角色 | 可追溯实际计量及事件记录 | site_id; job_id; building_id; footprint_id; process_id; phase_id; period_id; event_id; transfer_id; reference_gate_id; accepted_area_A; reference_area_unit; sku; lot_id; hazard_state; historic_origin; reusable_state; reusable_quantity; reusable_native_unit; reusable_receiver; reusable_transfer_id; unique_owner; opening; gross_receipts; tare; closing; usable_outward_return; contained_waste_mass; contained_waste_volume; waste_volume_unit; waste_state; waste_receiver; treatment_destination; quantity_unit; density; density_unit; density_source; moisture; moisture_basis; temperature; temperature_unit; conversion_factor; conversion_unit; conversion_source | 称量核对每个实际物料废物批次及匹配可用对外退料，核对封闭收集和接收凭证。 | 实际原生单位 | 每次收货转移事件及阶段关闭 | 本次实际干预，从施工前勘测至缺陷关闭业主验收，逐阶段时期及所有尝试 | 指定建筑范围及因果归属共享提供方范围 | 每参考流 | 校准发票退料见证记录及供应范围；披露不确定性缺失 |
| `cp_stripout_release` | `stripout` | 连接实际实体角色 | 可追溯实际计量及事件记录 | site_id; job_id; building_id; footprint_id; process_id; phase_id; period_id; event_id; transfer_id; reference_gate_id; accepted_area_A; reference_area_unit; polygon_id; survey_convention; area; area_unit; retained_services; isolation_record; hazard_clearance; substrate_release; recipient_id | 测绘不重叠释放边界，安装前见证隔离危害清理及基层接收。 | 实际原生单位 | 每次收货转移事件及阶段关闭 | 本次实际干预，从施工前勘测至缺陷关闭业主验收，逐阶段时期及所有尝试 | 指定建筑范围及因果归属共享提供方范围 | 每参考流 | 校准发票退料见证记录及供应范围；披露不确定性缺失 |
| `cp_integration_material` | `integration` | 连接实际实体角色 | 可追溯实际计量及事件记录 | site_id; job_id; building_id; footprint_id; process_id; phase_id; period_id; event_id; transfer_id; reference_gate_id; accepted_area_A; reference_area_unit; sku; component_role; layer; retained_replaced_state; lot_id; package_bom_view; opening; gross_receipts; tare; closing; installed_quantity; usable_outward_return; offcut; failed_part; contained_waste; contained_waste_volume; waste_volume_unit; waste_state; waste_receiver; destination; quantity_unit; density; density_unit; density_source; moisture; moisture_basis; temperature; temperature_unit; conversion_factor; conversion_unit; conversion_source | 按每个实际SKU原生单位核对采购交付库存安装范围退料废物及套件BOM归属。 | 实际原生单位 | 每次收货转移事件及阶段关闭 | 本次实际干预，从施工前勘测至缺陷关闭业主验收，逐阶段时期及所有尝试 | 指定建筑范围及因果归属共享提供方范围 | 每参考流 | 校准发票退料见证记录及供应范围；披露不确定性缺失 |
| `cp_integration_state` | `integration` | 连接实际实体角色 | 可追溯实际计量及事件记录 | site_id; job_id; building_id; footprint_id; process_id; phase_id; period_id; event_id; transfer_id; reference_gate_id; accepted_area_A; reference_area_unit; polygon_id; survey_convention; area; area_unit; component_schedule; interface_id; installation_release; defect_id; recipient_id | 凭相同边界组件表及未决缺陷见证释放与安装状态转移。 | 实际原生单位 | 每次收货转移事件及阶段关闭 | 本次实际干预，从施工前勘测至缺陷关闭业主验收，逐阶段时期及所有尝试 | 指定建筑范围及因果归属共享提供方范围 | 每参考流 | 校准发票退料见证记录及供应范围；披露不确定性缺失 |
| `cp_handover` | `test_handover` | 连接实际实体角色 | 可追溯实际计量及事件记录 | site_id; job_id; building_id; footprint_id; process_id; phase_id; period_id; event_id; transfer_id; reference_gate_id; accepted_area_A; reference_area_unit; polygon_id; survey_convention; accepted_area; area_unit; contract_scope; system_test_id; test_criterion; criterion_source; test_result; retest_id; defect_id; closure_record; record_drawing; om_record; landlord_signature; acceptance_date | 以测绘记录实测accepted_area即A，单位m2，关联唯一reference_gate_id；全部其他协议从同一最终门槛取accepted_area_A和单位，不按工种或试验重测增加A。附实际合同标准见证测试复测缺陷关闭及业主签字；不得凭Cat A名称推断测试成功。 | 实际原生单位 | 每次收货转移事件及阶段关闭 | 本次实际干预，从施工前勘测至缺陷关闭业主验收，逐阶段时期及所有尝试 | 指定建筑范围及因果归属共享提供方范围 | 每参考流 | 校准发票退料见证记录及供应范围；披露不确定性缺失 |
| `cp_test_material` | `test_handover` | 连接实际实体角色 | 可追溯实际计量及事件记录 | site_id; job_id; building_id; footprint_id; process_id; phase_id; period_id; event_id; transfer_id; reference_gate_id; accepted_area_A; reference_area_unit; sku; lot_id; opening; gross_receipts; tare; closing; usable_outward_return; test_attempt; contained_waste_mass; contained_waste_volume; waste_volume_unit; waste_state; waste_receiver; destination; quantity_unit; density; density_unit; density_source; moisture; moisture_basis; temperature; temperature_unit; conversion_factor; conversion_unit; conversion_source | 以接收凭证核对首次及重复测试各实际耗材清洁批次与废物。 | 实际原生单位 | 每次收货转移事件及阶段关闭 | 本次实际干预，从施工前勘测至缺陷关闭业主验收，逐阶段时期及所有尝试 | 指定建筑范围及因果归属共享提供方范围 | 每参考流 | 校准发票退料见证记录及供应范围；披露不确定性缺失 |
| `cp_support_energy` | `site_support` | 连接实际实体角色 | 可追溯实际计量及事件记录 | site_id; job_id; building_id; footprint_id; process_id; phase_id; period_id; event_id; transfer_id; reference_gate_id; accepted_area_A; reference_area_unit; supplier_id; supply_source; retained_onsite_generation_source; meter_id; gross_import_start; gross_import_end; gross_export_start; gross_export_end; onsite_generation_quantity; onsite_generation_consumed; onsite_generation_resource_scope; test_cycle_id; retest_cycle_id; cycle_energy; distribution_loss; quantity_unit; nonproject_use; consuming_node; attribution_driver; attribution_driver_unit; coverage; provider_overlap | 读取校准阶段分表总输入及总输出独立寄存器、实际供应来源及既有现场发电；逐测试复测周期和损失计量，保留实体归属驱动及单位。现场发电归属燃料资产维护排放范围必须完整，提供方范围只计一次；实际外送须独立Product出口展开，不净抵输入或给避免供应信用。 | 实际原生单位 | 每次收货转移事件及阶段关闭 | 本次实际干预，从施工前勘测至缺陷关闭业主验收，逐阶段时期及所有尝试 | 指定建筑范围及因果归属共享提供方范围 | 每参考流 | 校准发票退料见证记录及供应范围；披露不确定性缺失 |
| `cp_support_fuel` | `site_support` | 连接实际实体角色 | 可追溯实际计量及事件记录 | site_id; job_id; building_id; footprint_id; process_id; phase_id; period_id; event_id; transfer_id; reference_gate_id; accepted_area_A; reference_area_unit; fuel_grade; lot_id; ticket_native_unit; ticket_quantity; volume_conversion_factor; volume_conversion_source; opening; gross_receipts; tare; closing; usable_outward_return; measured_burn; nonburned_waste; uncontained_loss; recovered_closing; total_spill_audit; fate_method; unknown_loss; uncertainty; quantity_unit; density; density_unit; density_source; temperature; temperature_unit; conversion_factor; conversion_unit; conversion_source | 读取实际燃料库存计量记录。采用实测燃烧或审计完整互斥原生去向及不确定性，调查未知损失；不得以残差推燃烧。 | 实际原生单位 | 每次收货转移事件及阶段关闭 | 本次实际干预，从施工前勘测至缺陷关闭业主验收，逐阶段时期及所有尝试 | 指定建筑范围及因果归属共享提供方范围 | 每参考流 | 校准发票退料见证记录及供应范围；披露不确定性缺失 |
| `cp_support_water` | `site_support` | 连接实际实体角色 | 可追溯实际计量及事件记录 | site_id; job_id; building_id; footprint_id; process_id; phase_id; period_id; event_id; transfer_id; reference_gate_id; accepted_area_A; reference_area_unit; supply_id; source_compartment; meter_id; start_reading; end_reading; delivered_volume; retained_volume; contained_wastewater; direct_discharge; receiving_compartment; quantity_unit; coverage; provider_overlap | 读取实际交付供水表，按实体去向区分产品供应直接取水留存充注封闭废物及环境排放。 | 实际原生单位 | 每次收货转移事件及阶段关闭 | 本次实际干预，从施工前勘测至缺陷关闭业主验收，逐阶段时期及所有尝试 | 指定建筑范围及因果归属共享提供方范围 | 每参考流 | 校准发票退料见证记录及供应范围；披露不确定性缺失 |
| `cp_support_provider` | `site_support` | 连接实际实体角色 | 可追溯实际计量及事件记录 | site_id; job_id; building_id; footprint_id; process_id; phase_id; period_id; event_id; transfer_id; reference_gate_id; accepted_area_A; reference_area_unit; provider_id; completed_result; service_unit; service_quantity; native_unit; unit_property_id; unit_group_id; support_reference_unit; native_to_support_factor; support_source; physical_scope; included_materials; included_energy; included_freight; included_assets; included_waste; excluded_scope; uncovered_resources; acceptance_record | 取得实体完成结果及供应方完整上游范围；每个未覆盖资源按其原生单位展开。 | 实际原生单位 | 每次收货转移事件及阶段关闭 | 本次实际干预，从施工前勘测至缺陷关闭业主验收，逐阶段时期及所有尝试 | 指定建筑范围及因果归属共享提供方范围 | 每参考流 | 校准发票退料见证记录及供应范围；披露不确定性缺失 |
| `cp_support_assets` | `site_support` | 连接实际实体角色 | 可追溯实际计量及事件记录 | site_id; job_id; building_id; footprint_id; process_id; phase_id; period_id; event_id; transfer_id; reference_gate_id; accepted_area_A; reference_area_unit; asset_id; consumer_id; all_consumers_jobs_nodes_periods; job_driver; full_life_driver; driver_unit; observed_history; evidenced_remainder; manufacture_burden; maintenance_burden; replacement_events; termination_event; eol_burden; attribution_view; service_burden_unit; life_source; uncertainty; sensitivity; observed_full_life_record; remainder_source; termination_source; eol_source; update_trigger; update_date | 建立覆盖全部使用方及完整生命周期的资产表，采用已观察寿命或历史加有证据剩余期维护更换终止寿命终结；检验不确定性敏感性并在重用前更新。 | 实际原生单位 | 每次收货转移事件及阶段关闭 | 覆盖全部使用方项目节点时期的完整寿命，含已观察历史、有证据剩余期、更换、终止及寿命终结；寿命驱动范围证据变化时更新 | 指定建筑范围及因果归属共享提供方范围 | 每参考流 | 校准发票退料见证记录及供应范围；披露不确定性缺失 |
| `cp_support_freight` | `site_support` | 连接实际实体角色 | 可追溯实际计量及事件记录 | site_id; job_id; building_id; footprint_id; process_id; phase_id; period_id; event_id; transfer_id; reference_gate_id; accepted_area_A; reference_area_unit; leg_id; provider_id; cargo_id; load; load_unit; distance; distance_unit; vehicle; empty_return; transport_factor; factor_unit; factor_source; dataset_coverage; provider_overlap | 取得实际称量载荷路线距离空返记录及提供方供应范围，保留千克及千米转换操作数。 | 实际原生单位 | 每次收货转移事件及阶段关闭 | 本次实际干预，从施工前勘测至缺陷关闭业主验收，逐阶段时期及所有尝试 | 指定建筑范围及因果归属共享提供方范围 | 每参考流 | 校准发票退料见证记录及供应范围；披露不确定性缺失 |
| `cp_support_waste` | `site_support` | 连接实际实体角色 | 可追溯实际计量及事件记录 | site_id; job_id; building_id; footprint_id; process_id; phase_id; period_id; event_id; transfer_id; reference_gate_id; accepted_area_A; reference_area_unit; waste_id; composition; hazard_state; gross; tare; net_mass; contained_waste_volume; waste_volume_unit; waste_state; waste_receiver; mass_unit; container_id; receiving_treatment; transport_coverage; density; density_unit; density_source; temperature; temperature_unit; conversion_factor; conversion_unit; conversion_source | 按实际组成危害去向称量封闭废物并核对接收处理运输链。 | 实际原生单位 | 每次收货转移事件及阶段关闭 | 本次实际干预，从施工前勘测至缺陷关闭业主验收，逐阶段时期及所有尝试 | 指定建筑范围及因果归属共享提供方范围 | 每参考流 | 校准发票退料见证记录及供应范围；披露不确定性缺失 |
| `cp_support_environment` | `site_support` | 连接实际实体角色 | 可追溯实际计量及事件记录 | site_id; job_id; building_id; footprint_id; process_id; phase_id; period_id; event_id; transfer_id; reference_gate_id; accepted_area_A; reference_area_unit; owning_node; source_activity; species; flow_role; source_compartment; receiving_compartment; measurement_method; measured_mass; mass_unit; measured_water_volume; measured_gas_quantity; gas_quantity_unit; pressure; pressure_unit; temperature; temperature_unit; actual_burn; activity; activity_unit; whole_fluid_release; whole_fluid_unit; density; density_unit; density_source; composition; composition_basis; composition_source; fate_fraction; fate_basis; fate_source; species_factor; factor_unit; factor_basis; factor_source; uncertainty; release_event_id; provider_coverage | 按连接实际事件及所属节点计量每个实际物种介质，或采用匹配活动因子或实测整流体组成去向；独立计量实际直接水气环境角色。零量需覆盖证据，不用通用VOC、SDS或安全限值替代。 | 实际原生单位 | 每次收货转移事件及阶段关闭 | 本次实际干预，从施工前勘测至缺陷关闭业主验收，逐阶段时期及所有尝试 | 指定建筑范围及因果归属共享提供方范围 | 每参考流 | 校准发票退料见证记录及供应范围；披露不确定性缺失 |

### 计算规则

下列代数规则为本数据包声明的前景核算协议，依据实际原始记录及单位定义；WDI仅支持Cat A实践边界及分期交接，不提供库存燃烧物种或完整寿命数学因子。

| rule_id | applies_to | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `area_normalization` | all inventory rows | Q_norm = Q_attributed / A; A为唯一验收净内部办公面积且A>0; 每个归属实体台账仅归一化一次。 | Q_attributed; A; cp_handover | 每参考流的实体原生单位数量 |  |
| `stock_throughput` | stripout_consumables; area_components; count_components; length_components; mass_consumables; volume_fluids; test_consumables; supplied_fuel | S = opening + gross_receipts - tare - closing; 选择含出口总投入或净消耗S - usable_outward_return仅一次; 未退回废物损失保留上游负担。 | opening; gross_receipts; tare; closing; usable_outward_return | 声明的原生单位供应周转量 |  |
| `asset_share` | shared_assets | Asset_equivalent = (job_driver / full_life_driver) / A; 使用兼容驱动及完整寿命负担，或生命周期完整按驱动量服务数量=job_driver / A，两者不得并用。 | job_driver; full_life_driver; A; cp_support_assets | 不可叠加的完整寿命资产等效量或匹配服务数量 |  |
| `freight_activity` | freight_services | Freight = sum(load_kg * distance_km) / A; 以有证据服务负担纳入实际空返覆盖，不虚构载货质量。 | load; load_unit; distance; distance_unit; empty_return; A; cp_support_freight | 每参考流实际kg*km及披露空返覆盖 |  |
| `release_activity` | actual_environmental_exchanges | Release_mass = measured_mass OR activity * species_factor OR whole_fluid_release * composition * fate_fraction; 仅用于实际物种质量，以一个完整兼容基准计算。直接环境水Water_volume = measured_water_volume，气体采用独立measured_gas_quantity及实测单位状态区室；水体积不得套用物种质量公式。 | measured_mass; measured_water_volume; measured_gas_quantity; activity; species_factor; whole_fluid_release; composition; fate_fraction; cp_support_environment | 实际物种介质释放或直接水气数量，再除以A一次 |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| `scope_trace` | all nodes | 保留实际建筑项目范围过程阶段时期事件转移ID，核对保留更换及提供方范围。 | 测绘合同库存转移记录 |
| `actual_factors` | all calculations | 保留原始操作数兼容单位含temperature_unit、因子组成去向基准及来源。不猜寿命尺寸燃烧排放因子或数值范围。 | 实际计量校准及因子记录 |
| `complete_resources` | all nodes | 所有实际资源共享核心范围测试复测及失败均计一次。提供方资产基本流覆盖缺失阻止定稿，不当作零。 | 覆盖矩阵及不确定性敏感性证据 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `gate_area` | reference and handover | 要求测绘口径边界及A>0，无重叠或提前纳入部分面积，具备实际合同系统表及所有适用电气暖通平衡控制给排水消防测试复测、竣工运维资料、缺陷关闭及业主签收。实际批准要求取决项目；Cat A名称不能替代。 | `wdi-cat-a-b-fitout`; `wdi-riverside-refurbishment` |
| `balance_native` | all inventory rows | 按事件SKU核对原生供应、匹配退料、受控废物、安装存量及直接释放。核对期初、外部收货及期末余额；在边界保留的回收燃料已包含于期末，不另列一次去向。对外退料、未燃废物、未收容损失及期末是互斥去向。历史资产不得抵消新供物；不得重复套件BOM、提供方与自有资源或货运覆盖。 |  |
| `fuel_species` | site_support | 实际燃烧依据实测燃烧量，或经审计完整互斥原生去向及不确定性和未知损失调查。退料未燃废物失控损失结转互斥，不用残差推断燃烧。总泄漏只审计且回收结转已属期末。要求实际物种介质及实测质量、匹配活动因子或实测整流体组成去向基准；整流体与物种视图不可叠加，SDS及无VOC声明不是数量。 |  |
| `shared_rework` | all nodes | 检查完整寿命使用方时期兼容驱动更换终止寿命终结及单一负担视图；完整寿命覆盖未知阻止定稿。核对转移缺陷ID及废物去向；拒收状态不进验收A。最终数据前必须将实际直接水气角色展开为独立实测交换并具备协议操作数。 |  |
| `identity_coverage` | all inventory rows | 将每个实际SKU提供方废物物种伞卡展开为核实具体交换及原生属性单位支持。未决身份或遗漏实体提供方临时测试备件运输资源阻止最终数据；候选检查不证明发布或UUID核实。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一个声明既有办公Cat A干预的前景数据包及其process/lifecyclemodel投影。 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 保留条件实际Cat A合同范围面积口径共享核心归属及验收门槛匹配时比较。 |
| excluded_use | 新建筑扩建Cat B声明；租户运营准备未来办公能耗通用法律合规或案例性能默认值。 |
| required_metadata | PCR身份实际建筑范围时期测绘口径A保留更换系统合同接口测试门槛共用归属及上游覆盖。 |
| required_quality_disclosure | 实测计算状态具体身份缺口提供方原生支持缺口覆盖不确定性敏感性来源适用性及相邻排除工程。 |
| update_trigger | 范围系统面积既有条件变化；新增测试缺陷证据；提供方覆盖或完整寿命资产归属变化；身份核实及更强计量。 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| wdi-cat-a-b-fitout | literature | https://www.willmottdixoninteriors.co.uk/difference-between-cat-a-and-cat-b-fit-outs/ | 承包商实践说明：Cat A基础服务基本装修目的与租户Cat B区别。典型项目表，不是通用法律标准固定BOM或数值因子。 |
| wdi-riverside-refurbishment | literature | https://www.willmottdixoninteriors.co.uk/case-studies/riverside-house/ | 既有办公分期在用场所及共用服务接口实践。案例含排除的扩建新增面积Cat B；网页零统计尺寸评级不提供默认量。 |
