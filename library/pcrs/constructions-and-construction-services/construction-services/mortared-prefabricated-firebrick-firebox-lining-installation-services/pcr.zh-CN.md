---
pcr_id: pcr.mortared-prefabricated-firebrick-firebox-lining-installation-services
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 砂浆铺贴预制耐火砖炉膛衬板安装服务

## 1. 范围与适用性

本 PCR 适用于已验收、相容、未衬里的单面开口装饰性砌体壁炉炉膛中，工厂预制耐火砖衬板组的首次砂浆安装。服务包括宿主界面准备、润湿、安装、支撑下的冷态养护、经授权拆除临时支撑、缺陷闭合及衬里阶段签字交接。本类别窄于 CPC 3.0 54590；分类代码不定义 PCR 身份。

排除双面通透壁炉、可选拱部及开槽、助燃空气孔钻孔及空气组件安装、现场定制切砖、新建壁炉壳体/基础/烟囱、工业炉整体衬里、首次点火或运行调试、后续换衬及拆除。本验收输出不声称整座壁炉已可点火，也不提供整座壁炉、供热效率或耐火等级结论。必须采用实际现行且相容的型号、宿主及砂浆说明；所研究 Mason-Lite 文献印刷修订号为 REV 20090301a，不能由 URL 文件名2015及上传路径2022推定出版时间。该文献证明一种可观察施工路线，不能普遍证明当前设计适用性。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.mortared-prefabricated-firebrick-firebox-lining-installation-services |
| classification_refs | CPC 3.0 54590；拟议 narrower 关系 |
| covered_products | 单面开口壁炉工厂四片式耐火砖衬板的首次安装，以衬里冷态养护验收阶段为界 |
| excluded_products | 双面通透/拱部/空气组件/切板路线；壳体与烟囱制造；工业炉整体衬里；后续换衬；首次点火 |
| representative_product | 一组相容的炉床、后壁、左右侧壁衬板，以砂浆安装于已验收未衬里的宿主 |
| production_route | 接收相容衬板及砂浆；核验宿主；准备与润湿；衬板铺设连接；按实际规定养护并支撑；拆除支撑及纠正缺陷；验收衬里阶段 |
| market_state | 已安装并完成冷态养护的衬里阶段，签字移交后续壁炉调试责任 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 完整首次安装的四片式单面开口炉膛衬板服务 |
| How much | 1 item，即一套完整且已声明的衬里安装 |
| How well | 型号相容、衬板完整无损、接缝正确；保留设计后壁空隙；实际砂浆养护及稳定性已验收；经授权拆除临时支撑；缺陷已闭合 |
| How long or cycle | 一次从接收到冷态养护验收的首次衬里周期，包括支撑与拆除。可重复使用的供给资产另设生产、服务使用/维护及终止阶段索引；不假定壁炉运行寿命 |
| reference_flow_link | `accepted_lining` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 已验收冷态养护单面开口炉膛衬板安装服务 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 物品数量单位 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | item |
| 必需限定信息 | 制造商；壁炉/衬板型号及修订适用性；宿主验收；开口几何；衬板零件编号/尺寸；砂浆身份/供给状态及相容性；规定铺设/接缝/空隙布局；养护与稳定性证据；支撑所有者/拆除门槛；项目与辖区；缺陷；后续调试责任人 |


## 4. 计量与单位规则

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| reference_count | 参考产品 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | item | 一个参考流是一套完整已验收且已声明的衬里安装，不是一片衬板或一块砖。不同型号、宿主几何及砂浆配置分层保留证据。采用 cp_acceptance；不得推定质量与套数等价。 |
| material_state | panels; mortar; water; material_returns; solid_residuals; washwater | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 保留实物总质量及实际供给/湿/干状态。供水以 kg 称量，或保留经实测且与水源相容的体积转质量关系；不假定密度或砂浆干湿换算。 |
| `count_unit_alias` | 存在时的计数交换 | Count | item | 本 PCR 的显示别名 item 表示已核实的物品数量单位组参考单位 Item(s)，系数为 1。具体数据集须保留实际参考单位身份；此书写别名不建立质量、面积或服务之间的等价关系。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 既有相容未衬里的宿主壳体已验收，成品衬板及砂浆已交付；记录宿主几何、干湿/清洁状态、通行条件及责任 |
| starting_condition_role | 宿主是已验收安装界面；本服务新增衬里及其准备与养护负担 |
| product_classification_scope | CPC 3.0 54590 中范围较窄的装饰性壁炉衬里施工服务 |
| recursive_input_rule | 购入同类别安装服务时，按实际供给门槛及所含责任记录；不得递归复制或同时模拟同一供应商施工 |
| upstream_dataset_requirement | 成品衬板、实际砂浆生产、单独承担负担的耗材、实际水/能源/物流及有边界的资产供给需有相容上游覆盖；供应商已含施工/包装仅计一次 |
| disclosure | 区分宿主原有壳体生产与安装归属的准备；披露养护/拆除责任、留存库存负担、全部不合格路线、资产供给覆盖及后续调试排除项 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| installation_gate | install_lining | 仅从已验收相容未衬里宿主开始；包括清洁润湿、铺设接缝、支撑养护、经授权拆支撑、纠正及衬里阶段验收。本路线之外的宿主修复需另有已声明数据集；不得隐藏安装归属的准备。 | `mason-lite-firebrick-rev20090301a` |
| void_and_support | install_lining | 对炉床、后壁、侧壁及接缝采用实际匹配说明。保留设计后壁无支承空隙；不得假定后壁满铺砂浆或填满空隙。养护支撑责任持续至经授权拆除并验收稳定。 | `mason-lite-firebrick-rev20090301a` |
| provision_boundary | install_lining | 纳入实际支撑/工具/通行设施的生产、维护、使用、运入拆除及终止供给责任，边界为已声明服务寿命或供应服务覆盖。列明目标及其他消费项目/期间，设一个所有者和实物使用分摊驱动。一次性供给承担全部适用负担。 |  |
| no_operating_stage | accepted_lining | 止于冷态衬里阶段交接；首次点火、燃料消耗、运行、未来换衬及整座壁炉性能不在此输出之内。 | `mason-lite-firebrick-rev20090301a`; `un-cpc3-54590` |
| asset_period_linkage | holders_tools; logistics | 对每项可重复使用供给资产，建立生产/采购、部署与服务使用期间、维护/替换事件、拆除/终止阶段索引；将每项投入、事件及供给服务份额关联至这些期间及一个资产所有者。实际首次衬里养护/拆支撑仍属于本项目周期；后续资产期间仅属于已声明供给分摊，不是壁炉运行。替换或终止责任未决时，数据包不得定稿。 |  |
| `boundary_atomic_completion` | 所有过程 | 本节的采集要求是必须执行的采集与适用性指令，不是聚合清单交换。完成前景数据集前，必须为每一种实际产品、废物流、物质及环境子区室建立独立原子流卡／交换。保留全部实际事件、上游负荷、退回及原生单位；所链接公式应按每个兼容身份分别执行。环境资源提取记为输入，环境释放记为输出。不得相加不同原生单位、用一个 UUID 代表整个采集池、将缺记录解释为零，或与已有具体卡重复计入。保留宿主的文件性接口仅传递状态，不形成新采购资产。适用成员未明确或未有证据证明不存在时，定量清单仍不完整；非强制筛查提示不能补造数量或化学组成。 |  |

### 条件性清单补全要求

以下标识符表示采集池或文件性状态台账。一个池可能有零个、一个或多个实际成员。须依据真实记录判断适用性，并为每个成员保留原有数量方法和采集协议；只有兼容的数量才能共同核对。下列原有可选筛查区间仅作为暂定复核提示，不得强加于不同材料或混合采集池。

#### 采集要求：实际供给状态下的相容耐火铺设与接缝砂浆 (`mortar`)

过程／待建立交换的方向／类型：`install_lining` / `inputs` / `product`.

识别实际砂浆及相容性授权。分别记录炉床/后壁/侧壁/接缝施用；拌制是嵌入安装工作。不得套用后壁全表面铺设或通用加水比。 数量范围证据需求：需实际相容砂浆产品资料、状态、发出/未用/退回/废弃质量及本项目施用记录；无每套 kg 用量或接缝消耗区间证据。

- 采集对象：实际供给状态下的相容耐火铺设与接缝砂浆
- 流属性/单位：质量 / kg
- 数量规则：称量归属本项目的砂浆供给总质量；区分购入干料/预拌状态与现场加水
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`mason-lite-firebrick-rev20090301a`

#### 采集要求：归属的临时支撑、工具及通行设施供给 (`holders_tools`)

过程／待建立交换的方向／类型：`install_lining` / `inputs` / `product`.

包括实际养护支撑、抹刀、海绵/橡胶锤及通行设备。识别所有者、部署、养护留置、授权拆除、重复使用及终止供给责任。其他项目/期间仅在完整已声明分母下共享可重复资产。 数量范围证据需求：需实际资产编号、购买/租用状态、寿命/使用能力证据、使用份额及替换/拆除记录；来源证明支撑义务，但不提供物品寿命或分配因子。

- 采集对象：归属的临时支撑、工具及通行设施供给
- 流属性/单位：物品数量 / item
- 数量规则：按有记录的实物服务使用份额分配实际物品供给；分别记录每类不同资产交换及所含生命周期覆盖
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：`mason-lite-firebrick-rev20090301a`

#### 采集要求：实际单独供给的安装能源 (`energy`)

过程／待建立交换的方向／类型：`install_lining` / `inputs` / `product`.

适用于实际动力拌制/照明/清洁或其他实际设备的条件式汇总卡；人工操作不意味着虚构用电。供应服务已含能源不得再次承担上游负担。每项最终具体交换需核实 能量 支持身份。 数量范围证据需求：需实际电表/工具运行及现场供给记录、地域/供应商与不确定性；无默认每套 kWh 或燃料因子。

- 采集对象：实际单独供给的安装能源
- 流属性/单位：能量 / kWh
- 数量规则：计量实际归属电能；若有其他实际能源载体，按各自相容单位及身份逐一列明
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

#### 采集要求：实际单独承担负担的运送与收集运输服务 (`logistics`)

过程／待建立交换的方向／类型：`install_lining` / `inputs` / `product`.

纳入归属的交付、替换、资产移运、退回及废物收集至已声明接收门槛。购入供应服务可能已含车辆和燃料；记录单一所有者。运输 支持仍需前景核实。 数量范围证据需求：需实际路线距离、送达/退回载荷质量、装载份额及供应商覆盖；不假定距离、装载率或运输区间。

- 采集对象：实际单独承担负担的运送与收集运输服务
- 流属性/单位：运输 / t*km
- 数量规则：按质量、距离、车辆/供应商及装载份额记录实际货运活动；供应商具体单位不同时保留其真实单位
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_logistics`

#### 采集要求：单独采购的保护及清洁耗材 (`consumables`)

过程／待建立交换的方向／类型：`install_lining` / `inputs` / `product`.

适用于实际防护薄膜、擦拭材料或清洁材料的条件式汇总卡。随衬板/砂浆交付的包装在接收和残余物中保留实物记录，但不得虚构第二次采购而重复其已含上游负担。 数量范围证据需求：需实际材料身份、发票/发出、库存及清洁记录；无通用耗材或包装质量区间。

- 采集对象：单独采购的保护及清洁耗材
- 流属性/单位：质量 / kg
- 数量规则：按实际身份及归属份额记录单独采购耗材总质量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`

#### 采集要求：实际离开保管边界的可用衬板、砂浆或耗材退回 (`material_returns`)

过程／待建立交换的方向／类型：`install_lining` / `outputs` / `product`.

仅实际向外产品保管交接才构成此交换。退回供应商的不合格组件保留实际产品/废物法律状态及已声明上游负担处理。留存期末库存是内部平衡并携带后续负担，不是此交换。 数量范围证据需求：需实际退回称重单、零件/状态身份、目的地、供应商接收及负担归属；无退回比例或通用再用信用。

- 采集对象：实际离开保管边界的可用衬板、砂浆或耗材退回
- 流属性/单位：质量 / kg
- 数量规则：按实际身份/状态计量向外可用退回总量；在材料平衡中只计一次
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`

#### 采集要求：实际安装固体不合格物及供应商包装废物 (`solid_residuals`)

过程／待建立交换的方向／类型：`install_lining` / `outputs` / `waste`.

实际发生时记录不可恢复受损衬板、废弃已硬化/未用砂浆、包装及污染耗材。纠正关联 install_lining；内部返工不是向外废物。不假定有用联产品或避免生产。 数量范围证据需求：需实际分类/称量、危害分类、接收者及替换记录；无默认破损、砂浆损耗或包装区间。

- 采集对象：实际安装固体不合格物及供应商包装废物
- 流属性/单位：质量 / kg
- 数量规则：按材料、危害状态及已声明接收者计量分类向外废物质量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residuals`

#### 采集要求：实际收集的清洁废水与浆液 (`washwater`)

过程／待建立交换的方向／类型：`install_lining` / `outputs` / `waste`.

收集的清洗水/浆液按废物流向实际接收者记录。区分留存/蒸发水及捕集固体；不得将同一捕集污染物同时记为环境排放。未收集排放需实际授权/介质/物质记录。 数量范围证据需求：需实际收集质量、组成、接收路线及水/固体核对；无废水产率或污染物浓度区间证据。

- 采集对象：实际收集的清洁废水与浆液
- 流属性/单位：质量 / kg
- 数量规则：按接收者计量收集并向外转移的水性废物质量及实际组成/状态
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residuals`

#### 采集要求：向已声明环境介质的实际表征安装释放 (`releases`)

过程／待建立交换的方向／类型：`install_lining` / `outputs` / `elementary`.

适用于已证明逸散物或直接废水排放的条件式汇总卡；未切割冷态路线不预设钻切粉尘、燃烧排放或泛化 VOC。每项实际基本流交换需核实物质身份及介质。 数量范围证据需求：需实际材料安全/组成、实测释放表征、物种/粒径基准、介质及不确定性；无排放因子或泛化粉尘量证据。

- 采集对象：向已声明环境介质的实际表征安装释放
- 流属性/单位：质量 / kg
- 数量规则：按物种及接收介质分别记录实际测量或经授权表征的物质质量
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
| install_lining | 四片式炉膛衬板安装、冷态养护与交付 | required | 在已验收相容单面开口未衬里宿主中的实际首次安装 | 整合衬板及砂浆投入；包括嵌入式拌制、养护/支撑/拆除、纠正回路及最终衬里阶段交接 | 1 item accepted_lining |

一个独立节点拥有全部安装及不合格/纠正事件。独立衬板生产和砂浆制造属于上游供给责任；此处现场拌砂浆没有独立混合料交接。仅在实际发生时记录能源、附加耗材及释放。不推定独立成形、化学生产或整座壁炉施工节点。

### 过程：四片式炉膛衬板安装、冷态养护与交付 (`install_lining`)

#### 输入

##### 产品流

###### 工厂预制相容耐火砖衬板 (`panels`)

记录实际炉床、后壁、左右侧壁零件身份、完整供给组及替换衬板。用零件编号核对完整性，但按实际供给质量建模；上游衬板生产只计一次。 数量范围证据需求：需供应商型号专属零件质量或经校准接收/发出称量、替换件数量与不确定性；说明未提供衬板质量或普遍材料区间。

- 选定流：工厂预制相容耐火砖衬板
- 流属性/单位：质量 / kg
- 数量规则：称量归属于本项目的衬板总接收/发出质量，包括替换件；不得先净扣外返后再重复计数
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`mason-lite-firebrick-rev20090301a`



###### 供给的润湿、砂浆拌制及清洁水 (`water`)

按实际供应商状态记录单独供给水。润湿需求及实际清洁/拌制方法决定用量；收集的排水不自动成为基本流排放。 数量范围证据需求：需分任务称量或计量记录及实测换算、实际拌制说明和清洁证据；无通用水量或水料比。

- 选定流：供给的润湿、砂浆拌制及清洁水
- 流属性/单位：质量 / kg
- 数量规则：按润湿/拌制/清洁用途计量归属水质量，不重复计算预拌砂浆所含水
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：`mason-lite-firebrick-rev20090301a`



##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已验收冷态养护单面开口炉膛衬板安装服务 (`accepted_lining`)

实际完整四片式衬里服务在相容性、布局/空隙、实际养护/稳定性、授权拆支撑及缺陷闭合签字后离开本节点。这是唯一最终参考输出；未完成/不合格组不得计入。 数量范围证据需求：参考定义固定为 1 item，不是实测产率范围。需采集实际验收套数、配置及不合格尝试；无成功率或服务寿命区间证据。

- 选定流：已验收冷态养护单面开口炉膛衬板安装服务
- 流属性/单位：物品数量 / item
- 数量规则：1 item
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`mason-lite-firebrick-rev20090301a`



##### 废物流

##### 基本流

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| single_service | install_lining | 将全部归属接收、准备、安装、养护/支撑/拆除及纠正负担分配给完整验收衬里服务。未决不合格物不是验收输出；失败尝试保留于实际项目分摊。不预设有用联产品。 |  |
| gross_stock | panels; mortar; consumables; material_returns | 按材料/状态核对期初库存加总接收量与安装消耗、实际向外可用退回、废物及期末库存。留存期末库存按披露将上游负担结转，不是向外交换。不得先在投入净扣退回又再扣/计退回。 |  |
| rework_owner | install_lining | 将每个衬板、粘结、接缝或空隙不合格事件关联纠正回路或实际产品退回/废物出口及产生节点事件。保留替换、清洁、支撑延期和重复物流负担；无自动回收或避免产品信用。 |  |
| shared_provision | holders_tools; energy; logistics | 对每项重复使用资产/供应服务，声明全部消费项目/期间、有边界的供给服务寿命、实测实物使用驱动及证据。按目标实物使用量占总相容服务能力的份额，只分配一次生产/维护/拆除/终止供给负担。说明不确定性及未来终止责任人；供应商已含供给/能源/物流不得重复计数。 |  |
| period_allocation | holders_tools; logistics | 记录生产、服务使用、维护/替换及终止事件各期间供给份额及实物使用/能力证据。核对目标项目及其他消费者份额覆盖全部有边界供给生命周期；每项事件跨期间只计一次。不规定通用资产寿命或年化，首次养护/拆支撑义务不得移出衬里验收门槛。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_materials | install_lining | 组件/耗材投入及可用退回 | receipt_issue_return_stock | job_id; material_id; part_id; supply_state; lot_id; opening_stock_kg; gross_receipt_kg; issue_kg; installed_kg; outward_return_kg; waste_kg; closing_stock_kg; burden_owner | 称量或采用可追溯供应商批次质量；识别炉床/后壁/侧壁及砂浆确切供给状态。按材料核对项目总量台账；区分退回目的地与留存库存。归属全部实际纠正投入，并保留期末库存负担。 | kg | 每次接收、发出、退回、纠正及期末盘点 | 从初始周期至拆支撑和验收全过程 | 一个已声明壁炉项目及其供应商 | per reference flow | 平衡及保管交接单；秤校准；缺失质量/状态换算及不确定性；包装负担不重复 |
| cp_water | install_lining | 供给水 | task_meter_record | job_id; purpose; provider; supply_state; water_mass_kg; measured_volume; measured_density; conversion_method; wastewater_kg; retained_water_kg | 称量水，或计量实际任务体积并保留实测相容换算。区分润湿/拌制/清洁及供应商预拌含水；核对废水/留存量，不虚构蒸发排放。 | kg | 每项任务或分任务计量区间 | 首次周期全部润湿、拌制与清洁 | 已声明现场供水及 install_lining | per reference flow | 计量校准；换算/状态基准；废水边界；缺失数据及不确定性 |
| cp_assets | install_lining | 支撑/工具/通行设施供给 | asset_service_log | job_id; asset_id; owner; provision_scope; other_consumer_jobs; service_periods; production_period; use_period; upkeep_replacement_period; terminal_period; event_period_id; period_share; service_life_capacity; actual_use_driver; target_use; total_use; maintenance; removal_authorization; removal_date; terminal_owner | 识别每项支撑/工具/通行资产及已声明供给寿命内目标和其他消费项目。采用实测相容实物使用次数或设备时间份额；一次性资产承担全额。生产、维护、运输、部署、养护留置支撑、拆除及终止责任只覆盖一次。将实际投入/服务/事件编号关联生产、服务使用、维护/替换及终止期间编号；记录各期间实物使用份额并核对所有消费者，避免重复分摊。首次衬里养护/拆支撑保留在项目门槛内。 | item | 部署、养护解除、拆除及供给更新 | 初始周期及已声明资产供给服务寿命分母 | 目标节点及明确的其他项目/服务期间 | per reference flow | 资产登记；实物使用证据；生命周期供应商覆盖矩阵；能力不确定性；全部份额核对 |
| cp_energy | install_lining | 实际供给能源 | meter_equipment_record | job_id; equipment_id; carrier; provider; geography; meter_start; meter_end; attributable_energy; unit; included_provider_scope | 按项目计量实际设备能源，仅扣除有证据的非项目活动。保留每种实际载体及单位；不得从人工劳动推定能源，也不得另加供应商已含燃料。最终交换前核实实际支持链。 | kWh | 每项动力任务或计量区间 | 初始准备至清洁/拆除 | 实际前景设备及供给 | per reference flow | 电表/供应商证据；分配覆盖；确切 能量 支持缺口；不确定性及缺失任务 |
| cp_logistics | install_lining | 归属货运供给 | trip_load_record | job_id; trip_id; provider; origin; receiver; distance_km; load_mass_t; load_share; vehicle; included_fuel; asset_provision_scope | 用实际发运/接收及路线记录覆盖交付、替换、退回、资产及废物收集。按实物载荷及距离推导实际供应商单位服务；记录车辆/燃料覆盖及唯一事件所有者。 | t*km | 每个归属运输路段 | 接收至最终拆除/收集 | 已声明现场及实际供给/接收路线 | per reference flow | 可追溯运输/载荷证据；共享分母；供应商覆盖；支持单位核实及不确定性 |
| cp_acceptance | install_lining | 参考服务 | signed_lining_acceptance | job_id; host_model; instruction_revision; compatibility; panel_part_ids; mortar_id; seam_void_layout; cure_evidence; support_owner; removal_authorization; holder_removed; defects_closed; accepted_count; handover_owner | 依照匹配的现行说明检查实际完整炉床/后壁/两侧配置及相容砂浆。保留设计后壁空隙证据、养护/稳定性授权和拆支撑记录；仅在缺陷闭合后计入完整验收套数。签字交接后续调试保管责任。 | item | 每套安装及最终缺陷闭合 | 完整首次冷态安装周期 | 一个已声明相容单面开口炉膛 | per reference flow | 签字检查/养护/拆支撑证据；无通用数字养护时长；不合格尝试排除于验收套数 |
| cp_residuals | install_lining | 向外固体废物及废水 | segregated_waste_custody | job_id; event_id; defect_id; material_id; wet_dry_state; mass_kg; hazard_class; composition; receiver; transfer_id | 称量分类固体与收集水性废物；记录实际产品/废物状态、组成及接收者。将缺陷/返工移动关联 install_lining 并与总材料/水量核对；捕集污染物不得计入基本流释放总量。 | kg | 每次分类及向外交接 | 初始周期纠正至清洁/拆除 | 前景项目及实际首个接收门槛 | per reference flow | 经校准交接单；接收/危害记录；固体/水基准；缺失组成及不确定性 |
| cp_releases | install_lining | 实际环境释放 | substance_medium_record | job_id; event_id; substance; species_size_basis; receiving_medium; measured_mass_kg; method; captured_fraction; uncertainty | 按物质/粒径及接收介质，用可追溯测量或有根据的组成模型表征实际直接释放。区分捕集废物及供应商排放；不预设钻切/燃烧或泛化污染物 UUID。 | kg | 每项实际排放/排水事件 | 仅首次冷态周期 | 已声明直接环境边界 | per reference flow | 方法/物种/介质证据；检出限；捕集核对；建交换前实际核实身份 |

### 计算规则

| rule_id | applies_to | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| job_attribution | 全部清单行 | 采集完整已声明初始项目周期，包括纠正及留置支撑/拆除负担。每个实物事件只归属于其实际完整验收衬里输出一次；保留不合格尝试负担，单独报告库存结转。每项交换以每参考流表示，不假定衬板数量或质量等价。 | 实际节点专属协议；验收台账；事件归属 | 每参考流交换数量 |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| current_compatibility | install_lining | 检查实际宿主/衬板/砂浆说明适用性；历史来源修订号本身不足。保留型号分层，不作通用养护/时间/耐火等级换算。 | 制造商相容性及项目授权；cp_acceptance |
| closure_quality | 全部清单行 | 保留全周期接收/发出/退回/库存、缺陷、养护延期、拆支撑及全部接收者覆盖。缺失数量、范围证据或实际身份是明确数据缺口，不得假定为零。 | 节点专属协议及保管平衡 |
| support_quality | energy; logistics; holders_tools | 确认实际交换属性/单位及供应商边界；物品数量 支持不核实 能量、持续时间 或 运输。保留供给寿命不确定性及共享驱动敏感性。 | 支持记录、资产登记、供应商覆盖矩阵及电表/运输记录 |


## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| accepted_gate | accepted_lining | 要求实际相容宿主/型号及衬板/砂浆编号、完整无损组、已验收铺设/接缝/设计空隙、实际养护/稳定性、授权拆支撑及缺陷闭合；仅在衬里阶段签字门槛计 1 item。 | `mason-lite-firebrick-rev20090301a` |
| inventory_closure | 全部清单行 | 核对材料与水的安装量、向外可用退回、废物、已表征释放及留存期末库存；不得将库存记作产品输出或重复扣退回。披露缺失数据，不虚构零值。 |  |
| ownership_check | holders_tools; logistics; energy | 核实共享消费者/服务寿命驱动、完整供给/拆除/终止义务及每项实物负担唯一所有者。养护支撑不得在接收后消失；供应商包装/能源/运输不得重复。 |  |
| identity_range | 全部清单行 | 最终交换构建前要求实际具体 UUID/属性/单位支持；依据实际记录将语义汇总卡分解。每卡保留有来源范围或具体实际证据需求；不采用近似身份或虚构数字范围。 |  |
| stage_limit | accepted_lining | 数据集元数据区分冷态衬里安装与整座壁炉施工及首次点火/运行；后续调试保管责任明确。 | `un-cpc3-54590` |
| period_closure | holders_tools; logistics | 要求资产及期间编号将生产、服务使用、维护/替换及终止/拆除事件与各期间分摊关联。核查全部消费者/期间份额闭合及单一事件归属。服务寿命、替换或终止责任未决时，不得定稿供给交换；资产核算不形成壁炉寿命结论。 |  |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 已验收首次冷态养护炉膛衬板安装的前景数据包 |
| downstream_use | secondary_dataset; background_dataset; 下游 process 与 lifecyclemodel 投影 |
| allowed_use | 实际已声明相容单面开口四片式安装项目，以衬里阶段为界 |
| excluded_use | 整座壁炉或工业炉生产/性能；可点火调试；双面通透/空气组件/切板路线；未来换衬；通用材料/养护因子 |
| required_metadata | 型号/零件/修订/砂浆相容性；宿主验收；地点/时间；布局/空隙；实际养护/稳定性/拆除；验收套数；供应商及残余物保管 |
| required_quality_disclosure | 总库存与不合格/纠正覆盖；未核实具体流/支持身份；数字范围缺口；资产寿命分摊；上游供应商覆盖；后续调试责任 |
| update_trigger | 相容型号/材料/说明、空隙/支撑/养护或验收门槛改变；新增实测范围/UUID证据；供应商或残余物/供给责任改变 |


## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| mason-lite-firebrick-rev20090301a | handbook | Masonry Fireplace Industries / Mason-Lite, Refractory Firebrick Installation Instructions, printed REV 20090301a, pp1-3. https://www.mason-lite.com/wp-content/uploads/2022/05/Firebrick-Panel-Installation-2015.pdf | 已观察单面开口组件/铺设/空隙/支撑路线及替代方案排除；须提供匹配当前项目/型号/砂浆的适用性 |
| un-cpc3-54590 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025, printed p292, code54590. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 官方类别标签及装饰性壁炉/耐火衬里纳入；较窄范围的部分覆盖 |
