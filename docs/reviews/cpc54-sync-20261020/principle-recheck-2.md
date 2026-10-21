---
title: CPC54 第二次十二原则反例复核
docType: review
scope: repo
status: draft
authoritative: false
owner: tiangong-lca-pcr
language: zh-CN
whenToUse:
  - when inspecting the second CPC54 principle review and its remaining evidence limits
whenToUpdate:
  - when the selected PCR content or review evidence changes
checkPaths:
  - docs/reviews/cpc54-sync-20261020/**
  - library/pcrs/constructions-and-construction-services/construction-services/**
lastReviewedAt: 2026-10-21
lastReviewedCommit: 768391b8a9f36ebbc2b763583651fe54be454f61
lastReviewedNote: Second bounded adversarial recheck; one calculation error and two material ambiguities repaired without claiming exhaustive correctness.
---

# CPC54 第二次原则复核

不能确定所有原则性错误已经被找尽。本轮从 `768391b8a` 再检查全部 63 份候选 PCR，发现上一轮漏掉的 **1 处计算错误和 2 处实质歧义**，已修复中英文并通过官方生成器更新投影。其余记录未发现新增实质问题，仍保留原有适用、现场数据和身份限制。

[逐个反例、12 项审查视角、依据定位及输入/最终指纹](principle-recheck-2.json)记录本轮结果。此前的[第一轮十二原则报告](twelve-principle-review.md)是历史审查证据，不能当作当前文件指纹收据。审查视角共 756 项，不能解释为 756 个现场实测通过证书。

## 新发现及修复

| 编号 | CPC | 问题及后果 | 修复 |
| --- | --- | --- | --- |
| C54-R2-001 | 54652 | 旧公式将浓度乘采样器抽气体积作为整个作业直接空气排放质量；所得只是样品质量，缺少总源气流及事件覆盖。 | 采用有代表性完整源气流、匹配时长和气体基准的通量积分，或经验证的总释放方法/场址模型；补充原始源/背景浓度及校正、流量证据。职业或室内暴露样品不能直接成为总排放。 |
| C54-R2-002 | 54710 | 直接采样质量及“浓度与采样体积”字段未明确限定完整事件和环境源覆盖，可能把局部样品质量误作释放总量；此处没有像54652那样显式强制错误乘式。 | 将质量操作数限定为有完整源覆盖证据的事件释放总质量；区分样品审计与源流量/时长，补充可追溯原始字段、背景校正及源通量方法，限制未知覆盖。 |
| C54-R2-003 | 54222 | 旧式要求物种因子乘“适用未捕集比例”，但没有声明因子是在控制前还是已经表示实际释放；已控制因子可能被重复扣减。 | 明确已释放因子和直接释放实测不再乘捕集比例，仅明示未控制产生量的因子允许一次有据相容校正；新增因子阶段、控制范围/证据和比例基准字段，未知不默认比例1。 |

岩棉旧式的量纲虽然能得到 kg，物理覆盖却错误：10 mg/m³ 乘 1 m³ 采样体积只得到 0.00001 kg 样品；若假设完整代表性源流量 1000 m³/h、持续 2 h，源事件质量为 0.02 kg。两者不同。这个数字例子仅用于检验规则，不是实际安装数据或建议因子。新规则要求实际源/背景观测、流量与时长、气体基准、代表性和完整覆盖；开放场地或职业暴露样品须有独立验证的总通量方法。未知覆盖保持缺口，不能用室内容积、采样泵体积或物料余额凑出排放。

因子例子同样只用于逻辑检验：100 单位活动乘已释放物种因子 0.02 得 2；再乘 0.1 会错降为 0.2。只有明确未控制产生量的因子才允许一次有据相容校正；已释放质量或已控制因子不能再扣一次捕集效果。

新读的 EPA 同一项目两章只支持上述计量与因子基准区别，不是两个独立现场观测。已核对源文件及渲染页面：Chapter 2 印刷页 2.4-13（页面日期 2001-01-08、式 2.4-12，PDF 第 53 页）；Chapter 1 印刷页 1.4-7 至 1.4-9（2001-05-31、PDF 第 83–85 页）。不移用锅炉烟道方法、例值、效率或监管要求到安装路线。原件、抽取和核实片段已存共享材料库，精确指纹/注册 ID 见 JSON。

## 逐份反例与路径

每份均按同一 12 项原则复核。下表列本轮用于挑战该方法的具体情形；完整证据锚点和限制在 JSON。未修改的 60 份四文件字节保持不变。

| CPC | 身份/分母反例 | 数据路径 | 边界/去向核对 |
| --- | --- | --- | --- |
| 54111 | 两户住宅必须仍是一栋实体住宅，未完成抬升不能进入 N | stock_balance；fuel_fates；asset_share；cp_acceptance | 历史房屋不重购；永久基础、通行和水电重接不能从综合验收门槛删掉 |
| 54112 | 至少三户的整栋综合改造，不能用户数、模块数或年度节能替代 N | c_normalize；c_stock；c_species；c_asset_views | 整包围护、热泵、HRV、PV 的 BOM/预充和现场投入只承担一次；毛进口和出口分列 |
| 54121 | 屋面及围护连接协调改造不能退化为单个连接件或整体抗震性能承诺 | calc_normalize；calc_stock；calc_fuel_fates；calc_species | 保留构件和新连接分开；额外真实加固不能因原来范围较窄而消失 |
| 54122 | Cat A 净内部面积不能代表可运营 Cat B，也不能将内部面积交接强设为最终 1 | area_normalization；stock_throughput；release_activity | 保留办公楼、共用核心和实际新增设施各有边界；水体积不能套物种质量公式 |
| 54129 | 卧室、门厅和卫浴合为一套，不能按床位、房间或患者日重复出参考量 | normalize_native；stock_balance；species_release；shared_asset | 源负压与 PPVL/保护正压分开；隐蔽前和最终验证门槛均保留；NHS 数值不移成通用值 |
| 54211 | 声明几何的实际合同路段才是 item；准备交接和返工不能增加 N | actual_host_handoff；aggregate_reconcile；water_balance；fuel_supply_fate | 复查上轮燃料去向修复仍生效；天气、宿主水分、集料含水及实际废物不可由余额猜为蒸发 |
| 54212 | 唯一验收轨道中心线 L，不能按捣固遍数重复计产出 | divide_campaign；burn_balance；complete_life_fraction | 初末油箱和对外收发有界；捣固稳定和限速交回责任不等于整条线路运营许可 |
| 54213 | 唯一湿锯槽平面面积 A，不能使用沟槽壁面积或重复试验段面积 | campaign_normalization；burned_fuel_balance；wet_residual_closure | 湿泥浆、捕集固体和真正空气逃逸分开；控制条带、空驶和失败工作不能丢负担 |
| 54221 | 单缝胶条中心线包含真实上翻/斜接，不能将多缝系统自动并入 | calc_length_intensity；calc_gland_mass；calc_release | 保留钢边梁不重购；胶条同批 kg/m、真实气体状态及互斥燃料出口分别核对 |
| 54222 | 静止裂缝路径 L 不等于注嘴数或注浆遍数 | accepted_union；net_and_volume；material_custody；species_release | 新增发现 R2-003：因子已含捕集效果时，旧式仍可再次乘未捕集比例；已明确条件和字段 |
| 54231 | 最终实测修补几何 V 不能由新拌密度或粉体用量反推 | calc_mortar_state；calc_supply；calc_fuel_balance；calc_freight_work | 复查上轮空驶修复；供水渡槽与灌溉渠分开，完整湿拌/固化/水接触验收条件保留 |
| 54232 | 一个标准安装 SCN 锥体位置更换，不是完整防舷系统或螺栓数 | calc_replacement_cone；calc_accepted_element_replacement | 保留框架锚固不重购；不得移用反向安装时序；旧胶体和金属按真实分类与接收方分流 |
| 54233 | 净展开面积不加搭接和反复铺设；工厂复合膜不能再按组成重购 | c_area；c_supply；c_burn；c_assets | 每小时全寿命服务不能再乘第二个资产当量；干式可达及实际排水接口属于适用条件 |
| 54234 | 接缝 L 和背衬 m 不等于聚氨酯 kg；表干不等于可恢复浸水 | length_intensity；stock_material_bridge；atmospheric_reaction_intake | 反应水、旧基体水和供水独立；总泄漏与回收去向不重复扣；不从湿固化残差推排放 |
| 54241 | 合格非贯穿、非泄漏缺陷的一次工程修复，不是任意包覆长度 | normalize_actual；component_reconciliation；medium_reconciliation | 预浸玻纤含树脂一次采购；介质回注、留存、捕集和释放为不同非加总视图 |
| 54242 | 每个最终验收单纤对只计一次，共用盒体不能每根全算 | accepted_normalisation；electricity_total；gas_ledger；otdr_bidirectional | OTDR 双向平均不替代机械标准；实际开盒用气、清洁剂和细纤废物分别量化 |
| 54251 | 泄压暴露铸铁本地干管单缺陷修补，不是带压接管或整管更换 | calc_stock_bridge；calc_fuel；calc_releases；calc_freight | 夹具整包 BOM 不重复；消毒、压力/卫生门槛和接收方资源不能无人承担 |
| 54252 | 完整固化验收的本地低压无屏蔽多芯直通接头，不按芯数增加 N | material_intake；release_attribution；attribution_once | 复查上轮一次归属规则：已归属台账 share=1；套件及组分采购互斥，计件与混废 kg 不互换 |
| 54253 | 独立验收衬层面积不能从喷射遍数或新拌质量直接取得 | unique_area；mix_state_check；sku_stock；fuel_close | 保留来源 55 kg 为新拌总量的限制；不把粉体/水、强度例值或整个污水处理工艺混入修复产出 |
| 54261 | 支持、排水、通风接口齐全的唯一中心线 L，不是散岩或多次爆破长度 | native_supply；native_outlets；species_release | 非矿石开发不能偷带商品矿共产品；爆破与燃烧活动分开，安全浓度不能充当释放总量 |
| 54262 | 保留合格 MVT 的站点改造，不能套到更换 MVT 或整座新电站 | calc_supply；calc_electricity；calc_asset；calc_species | 试发电、进口、外送和循环分开；支持资产小时服务与资产当量只能选一个 |
| 54269 | 实际土建和热试门槛的既有感应熔炼设施综合重建，不是普通商品金属生产 | heat_ledger；utility_meter；fuel_fates；species_mass | 金属元素量与氧化物渣总量不直接平衡；炉底、回炉、衬体和试验金属去向透明且不默认抵扣 |
| 54270 | 实际合格合同面积和场地配置限定一个 item，不能自动等同任意网球场 | lot_reconciliation；volume_mass；fuel_consumption；species_release | 湿涂料不等于干膜；复查因子已含控制不再扣捕集，结构病害不隐藏为局部清理 |
| 54290 | 唯一认证最终展开覆盖面积不加搭接；最终覆盖不等于新填埋场 | normalize_area；native_state；fuel_fates；species_release | 湿基/干基换算方向明确；松散/压实体积不强等，后期填埋气/渗滤液收益不默认进入施工 |
| 54310 | 一次单面净拆除面积且全厚度移除，不按两面或清运批次重复出产出 | area_normalization；shared_attribution；custody_closure | 旧砖不成为新采购；废物处理边界、回收物和扬尘明确；职业暴露浓度不能直接当排放总量 |
| 54320 | 首次草本场地清理的唯一水平面积，不是后续割草或生物质产品 | area_attribution；stock_reconcile | 湿残余与干质量不混；电池容量不代替充电电量；首轮返工和实际接收转移有归属 |
| 54330 | 原状验收空腔体积与松散土体积不同，过挖不能充当验收量 | normalize_lot；soil_reconcile；transport_activity；fuel_supply_fate | 土壤原位背景不是购土；降水/支护另有量化责任，独立干土/含水桥接而非通用松胀率 |
| 54341 | 非自流基岩井的无永久泵土建交接不等于持续饮水供应 | job_normalization；physical_balance；fuel_supply_fate | 成井、洗井、试验和消毒水去向分开；FRTR 不替代饮用井设计；失败孔处置保留负担 |
| 54342 | 干燥非浮力非交通位置的重力 PE 化粪罐安装，不能声称完整处理系统 | job_normalization；stock_reconciliation；asset_share | 短管端点有界，开挖/支承/回填/收尾有责任；容量、测试水和型号不能任意等同 |
| 54400 | 既有合格混凝土板上的四腿工厂座椅机械锚固，不包含新板或胶锚 | normalize_job；stock_custody；shared_ledger；freight_activity | 整椅和自带组件不重复采购；锚固边界及当前型号/底板适用性须现场确认 |
| 54511 | toe 到实际 cutoff 的唯一验收轴向 L，斜桩不能用垂直投影替代 | c_length；c_exchange；c_pools；c_carbon | 失败/试验桩和头切废物负担保留；44/12 只约束已燃化石碳，不是 kg CO2/kg 柴油默认值 |
| 54512 | 实际合格完整合同桩组的一个 item，不是单根桩或假设承载力 | event_normalization；component_balance；asset_service_share | 原位旋转无灌浆路线限定；旋入和钢帽节点资源互斥，反力桩和复测不能丢失 |
| 54521 | 裸非承重木框架的单平面净面积扣开口一次，两面不能相加 | accepted_net_area；lot_normalization；stock_reconciliation | 开口四周木材仍计负担；实测备料转移 kg 不由最终面积反推，裸框架不声称完整墙性能 |
| 54522 | 整套金属齿板木屋架的支撑就位阶段，不是屋面完成或单榀数量 | normalize_complete_set；component_closure；shared_cycle_closure | 临时稳定支撑延续与拆除负担归属明确；现场不许可切改屋架；公开 BCSI 页面不冒充全文 |
| 54530 | 净验收斜屋面面积不加搭接，裁切场片作脊帽不能重复采购 | calc_issue_field_shingles；calc_finish_water_vapour；calc_underlay_edges_material_closure | receipt/issue 对应，物理屋面状态面积不进入 kg 和式；包装、原料含水及在制品去向互斥 |
| 54540 | 验收原位 V 与新拌体积不同；放置服务不能被误当全混凝土构件 | receipt_reconcile；fossil_carbon_emission；washout_release_mass | 配筋/模板有上游责任；洗出废液与真实环境释放分开，pH 不是污染物质量 |
| 54550 | 净永久钢 S 包含实际永久连接/垫片，不加涂层、灌浆和临时件 | derive_accepted_steel；normalize_concrete_exchange；compatible_pool_check | 工厂钢及涂层不重购；44/12 只用独立化石碳；实际支承释放和底部收尾不能漏 |
| 54560 | 唯一单面净砖墙面积不加双面、重复砌筑和开口 | calc_accepted_area；calc_lay_joint_mass_closure；calc_cure_accept_water_pools | 湿砂浆与水分采用实际节点移交；整墙与组分质量视图互斥，面积不能在质量平衡中当 kg |
| 54570 | 稳定配置整周期的立面面积而非层板、天数或地面投影 | accepted_area；cycle_numerators；water_only_closure | 安装、可用/不可用、拆卸回收和实际修复需闭合；共享套件不能当每轮全新采购 |
| 54590 | 四片单开口火箱冷固化内衬阶段，不是整壁炉或允许点火 | job_attribution | 支撑和授权移除、实际砂浆/湿润/废物均有责任；历史手册年份与网页上传年不同 |
| 54611 | 单馈线侧螺钉端接有地双联插座初装，不套到 GFCI/智能或新支路 | actual_normalization；custody_closure；asset_attribution | 已有箱/导线是接口，面板和原包固定件不能重购；测试能耗不推长期运营 |
| 54612 | 单控制器常规有线消防系统整套验收，不按区、探头或电池数增加 D | normalize_exchange；owned_asset_normalize；solvent_partition | 永久备用电池与临时工具分开；上游预装和现场线路计一次，充电损耗不重复 |
| 54613 | 无监控通信的 NC 探测区整套入侵报警，不混消防、混合或无线 | c_actual；c_custody；c_resource | 复查上轮 acceptance 澄清：资料不齐阻止 LCA 定稿，不能把已物理验收 D 变成零 |
| 54614 | 固定无源地面电视单引下线天线，不混放大器/旋转器/新接地极 | normalize_actual；sku_mass；custody_closure | 复查上轮物理 D 与证据完备性的分离；天线、桅杆、同轴和搭接范围实际披露 |
| 54619 | 现有载体间的单个室内 Cat6 UTP 永久链路，不加跳线/有源网络 | normalize_job；owned_resource_share；material_closure | 长度和端接不自动代表同配置服务；已有路径有交接，测试失败重端接留负担 |
| 54621 | 实际验收 PEX-B 物理管材中心线 D，不按管件或双向试水累计 | reference_output；nominal_pipe_factor；fill_geometry_diagnostic | lb/ft 仅匹配 RWC SKU；未确认 gallon 不能变供水量；消毒配方与有效氯量分开 |
| 54622 | 6英寸 PVC DR35 私有卫生侧管全回填交接，不是盖前试验完即最终产出 | normalize_exchange；fill_diagnostic；source_pool_balance | 原开挖由接口责任承担，进口分层回填/管体排水体积有证据；运营污水不计为施工流 |
| 54631 | Class I 壁挂电阻面板加热器初装，不能当整栋供热 | job_normalization；receipt_exit_reconcile | 支架/工厂包组件仅一次；准备电源和墙体须合格，有限测试不外推年运行 |
| 54632 | Class II 间歇轴流风扇，现有套管/外格栅，不扩展热回收系统 | cohort_attribution；electrical_consumption；component_reconciliation | 交付抽风实测及实际要求决定验收；铭牌功率不直接作能耗，钻孔粉尘按实际活动 |
| 54640 | 未通燃气的孤立封帽压测分支，不是后续吹扫/燃烧投运 | reference_attribution；test_medium_balance；material_reconciliation | 外购气与现场压缩空气 intake 区分；绝压/温度状态和全部泄放/回收去向明确 |
| 54651 | 单层干放未锚固氯丁橡胶垫，一台设备的安装符合性交接 | normalization；stock_closure；resource_share | 已有设备不重购，不虚构运行减振结果；单垫与设备整体数不能混成 D |
| 54652 | 净验收空腔 A 不等于毛墙或购板面积 | release_calc；cut_balance_calc；fit_balance_calc | 新增发现 R2-001：采样器抽气体积错误替代源气流总量；修复源流量/时长/完整覆盖路径 |
| 54659 | 一个已有塑料管墙穿孔的全部所需墙面完成阶段，不是单只卡箍 | lot_attribution；stock_balance；shared_share | 已验收环缝封堵不能重购，也不能遗漏实际缺陷；历史批准图不能证明当前项目适用 |
| 54691 | 指定宽度自支撑、两层站螺杆平台升降机初装，不是任意电梯 | job_normalization；asset_share；fuel_supply_fate | 新增混凝土板和专用供电必须有量化上游，不得声称免费旧接口；有限测试与乘客运行分离 |
| 54699 | 现有窗洞内置无绳成品卷帘初装，不含裁切/电机/旧帘拆除 | job_reconciliation；resource_attribution；acceptance_count | 成套支架、端盖和把手 BOM 不重购；余料、退回和关闭库存一次归属 |
| 54710 | 矩形工厂中空玻璃的单元面积，非玻璃可见面积或异形外接框 | accepted_unit_area；substance_release_normalization；cleaning_water_pool | 新增发现 R2-002：直接采样质量和采样体积描述未限定总源覆盖；已修复，同时保留上轮矩形限制 |
| 54720 | 最终装饰就绪净抹灰面积，原始板/底灰不重复施工 | calc_finish_evaporation；calc_evaporation；calc_node_energy | 过程新增水与原粉晶体水分开，湿面交接扣前节点损失，化学结合水不强设蒸发 |
| 54730 | 一轮室内水性刷辊涂饰净面积，不按涂层道数重复出服务 | area_normalization；stock_reconciliation；species_emissions | 湿涂料供应质量不等于干膜；未必每条路线有底漆；收集清洗液不直接作为环境流 |
| 54740 | 唯一验收室内地砖面积，开口/未完成/拒收区域互斥 | event_area；mortar_card_bridge；mix_state_balance；wash_state_balance | 砂浆混拌与洗涤水池分开；外送实际湿糊和捕集洗残不重复；排放用源排气体积而非样品体积 |
| 54750 | 糊纸面壁纸到干燥验收，不套到糊墙/乙烯基/自粘 | gross_draw；paste_water_balance；hang_water_balance；dry_water_balance | 每节点实际接收水分和返工去向互斥；关闭完整原料不再次从用水余额扣；残差不自动蒸发 |
| 54760 | 工厂饰面预挂单扇木门，现场只许可局部切口/修补 | receive_condition_bridge；position_fix_length_mass；complete_water_fate | kg/item 是系数不是质量；整门/组分互斥，正库存与在制品分开，最终门不重计为内部移交 |
| 54770 | 已有立柱基础上的网片和横杆净中心线，不是含立柱完整围栏 | calc_issue_materials_rail_brace；calc_finish_water_vapour；calc_finish_accept_material_mass_closure | 实际 SKU 分拆，umbrella 总计不再加到组分；长度不直接进 kg，镀锌和端部修补状态保留 |
| 54790 | 四线水平工厂玻璃棉吸声岛初装，不是房间声学性能 | event_normalization；component_reconciliation；shared_resources | 已有结构锚点不重建；整板及吊挂件要精确件重，额定板质量不冒充整套质量 |

## 验证和未证明的事项

- 63/63 目标 `pcr:check` 通过：2674 项 measurement 检查、0 跳过、267 条非阻断范围提示。3 份修订保留 candidate/authored/aligned，官方投影双次同步一致。
- 497 张原子流卡、1021 项条件采集义务、全部既有 Range、UUID、参考量、路线节点和分配规则保持不变。仅修改相关计算/采集语义并增加 2 项来源，旧来源条目未改。投影及卡片元数据核对 0 问题，663 条公式中英文数字序列相同；14 处已存在的词形/翻译别名差异未变，沿用前轮人工处置而非伪称机械语义证明。
- 映射回读仍为 1250 个基线边加本批 63 个 individually accepted narrower 边；coverage 为 2877 总叶、1313 mapped、1564 unmapped、0 unknown。没有新增 PCR 或修改分类关系。
- 按仓库要求再次启动 `npm run validate`。runtime、migration、420 文件 strict types 和词表/别名/catalog/产品链检查通过；全库 lint 在 240 秒界限仍未完成，本次仅中断该调用的进程组。不能声称本轮全库 lint、整个测试链或文档站构建通过。以前的 Goal 安全遍历失败属于历史结果，本次没有运行到该测试。
- 未新增平台 UUID 绑定，也未声称本轮重新读取所有平台详情；全部 63 个参考产品 UUID 仍未解析。旧平台证据及支持链限制继续有效。
- 未获得现场数据，也没有重新通读全部外部原件。实际产品/路线适用性、当前项目要求、测量代表性、物料/水分去向、上游和资产范围必须逐项目补证。模块继续采用同步基线已有 core Markdown 义务，未声称执行不存在的 candidate YAML checklist。

本轮只能说明已发现问题已修复、所选检查通过和未发现其他新增实质矛盾；不证明已经穷尽所有原则性错误，不构成出版批准。
