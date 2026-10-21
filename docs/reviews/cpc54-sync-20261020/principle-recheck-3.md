---
title: CPC54 第三次原则复核：数量依赖与状态适用条件
docType: review
scope: repo
status: draft
authoritative: false
owner: tiangong-lca-pcr
language: zh-CN
whenToUse:
  - when inspecting the third CPC54 dependency and state-compatibility recheck
whenToUpdate:
  - when selected PCR content or supporting review evidence changes
checkPaths:
  - docs/reviews/cpc54-sync-20261020/**
  - library/pcrs/constructions-and-construction-services/construction-services/**
lastReviewedAt: 2026-10-21
lastReviewedCommit: a18de4eb16833391cc44779a71548df5c8c5e89f
lastReviewedNote: Two material applicability gaps repaired; bounded review, not exhaustive correctness or publication approval.
---

# CPC54 第三次原则复核

从 `a18de4eb1` 再复核全部 63 份，新增发现并修复 **2 处可能造成实质偏差的适用条件缺口**。它们不是格式问题，也不能靠检查器发现；目前没有现场数据证明某个实际结果已经算错。不能保证所有原则性错误都已找尽。

本轮沿参考量、原始采集字段、状态换算、内部移交及去向展开反例检查，并回查前两轮修复。[逐份定位、原始/最终指纹及收据](principle-recheck-3.json)记录具体结果。前两轮报告继续作为历史证据；本轮没有把旧的 756 项审查视角再计成新的实测通过数，也没有重新通读全部外部原件。

## 新增问题与修复

| 编号 | CPC | 原规则允许的风险 | 修复 |
| --- | --- | --- | --- |
| C54-R3-001 | 54710 | 废物卡允许收集破损复合玻璃，面积桥接却未明确要求整套系数代表的所有组成、数量和状态均进入同一流；部分碎片可能被按完整单元质量计量。 | 整单元面积换质量只在完整性及状态证据成立时可用。部分、分选或状态已变的废物采用实际流扣皮称量，或独立有据的相容组成数量；其他组成去向各计一次，不重复累加整体与组成、不推断缺失释放、不减掉原供应负担。同步修复了验证规则对整单元桥的无条件要求。 |
| C54-R3-002 | 54652 | 安装几何体积可以乘“同牌号密度”，但同牌号不能保证密度与测量体积处于相同压缩、含水和物理状态。 | 采用几何与密度同状态证据，或独立同件质量及实际移除量；保留裁片与验收对象对应。禁止由质量余额倒算留存量，不提供默认压缩系数。缺状态桥阻止该质量/闭合结论，不抹去独立实测验收面积。 |

以下仅为**合成反例，不是现场数据、推荐系数或通用范围**：完整玻璃单元假设 40 kg，实际收集碎片 36 kg，另有独立去向 4 kg；若对碎片套完整系数，再计其他去向，会误计 44 kg。独立称量 1 kg 岩棉裁片若松弛体积 0.01 m³、同状态密度 100 kg/m³，压缩后体积假设 0.008 m³，再乘原密度只得 0.8 kg；同一块材料质量没有因此消失。125 kg/m³ 只是此反例中的相容状态值，不能移用到实际项目。

岩棉已有安装指南本轮通过网页抽取重读了第 1 页步骤 1–4（裁片与嵌装）和第 3 页版本信息：Version 2.00，2025-10-23。它只支持定性的实际路线区别；状态相容要求来自质量恒等关系的审查推理，指南没有提供可直接移用的密度或压缩因子。未采用产品特定的裁切余量作通用要求。原 PDF 本地获取因 TLS 握手失败；共享材料库仅注册来源元数据，未声称新增原件指纹、抽取文件或页面视觉核实。玻璃修复同样是对已有质量桥的适用条件收紧，没有新增经验因子。

## 逐份数量路径复核

表中只记录本轮选定的数量/状态挑战点，并非每条公式均有机器可证明的完整依赖图。JSON 给出当前中英文精确行号、公式内容、声明输入和四文件指纹。未修改的 61 份四文件与输入提交字节一致。

| CPC | 主要定位 | 本轮复核要点 |
| --- | --- | --- |
| 54111 | stock_balance; fuel_fates; asset_share | 同一栋住宅、同一抬升批次的原始投入只除一次实际验收栋数；燃料先按互斥去向分池，资产小时与完整寿命当量不能叠加。 |
| 54112 | c_normalize; c_stock; c_asset_views | 整栋改造分母独立于节能估算；整包设备与组件投入互斥，整寿命小时服务与资产当量是替代视图。 |
| 54121 | calc_stock; calc_mass_view; calc_fuel_fates | 保留结构接口不作为新购，新增连接件的件数转质量需要实际同规格证据；燃烧量不能从材料总余额倒推。 |
| 54122 | area_normalization; stock_throughput; release_activity | 净内部面积与各节点实际交接量分别测定；水的体积与物种质量不套同一因子，Cat A 交付不能充当 Cat B 成品。 |
| 54129 | normalize_native; species_release; shared_asset | 套间计数、原生投入单位和服务小时分开；PPVL 与源负压状态不能互换，环境释放物种和介质必须实际确认。 |
| 54211 | aggregate_reconcile; water_balance; fuel_supply_fate; actual_host_handoff | 回归检查完整燃料去向；宿主水分和集料含水不可重复为新水，未知水分去向不自动成为蒸发。 |
| 54212 | burn_balance; service_quantity; complete_life_fraction | 服务实际量绑定 service_quantity，实际活动由相应排放协议提供；捣固遍数不增加唯一验收长度，资产分母为完整相容寿命。 |
| 54213 | burned_fuel_balance; cargo_leg_service; wet_residual_closure | 锯切净平面面积独立于刀缝壁面；浆水、捕集物、空气释放采用各自实际状态，不能以湿泥总量当干粉尘。 |
| 54221 | calc_gland_mass; calc_fuel; calc_release | 胶条长度换质量仅用实际同规格 kg/m；实际燃气状态、燃烧活动和释放物种相容，不把缝长当全部投入长度。 |
| 54222 | net_and_volume; material_custody; species_release | 回归检查控制前因子只允许一次有据校正，已释放因子不再扣捕集；裂缝净路径、配制量及弃置量分别有原始字段。 |
| 54231 | calc_mortar_state; calc_fuel_balance; calc_freight_work | 回归检查空驶不能伪造货运吨公里；新拌、固化及最终实测修补体积不互换，按原生单位采集后只归一化一次。 |
| 54232 | calc_replacement_cone; calc_removed_rubber; calc_removed_metal | 锥体按完整替换件计数，旧橡胶和金属按实际净弃置量分流；整件及其组成不能双计，实际状态决定质量桥接。 |
| 54233 | c_supply; c_assets; c_release | 工厂复合膜与组成采购互斥；原生面积、实际作业负担和完整寿命服务分开，不能再把小时服务乘第二个资产当量。 |
| 54234 | actual_density_conversion; stock_material_bridge; atmospheric_reaction_intake | 未固化配方与固化材料状态不混，反应吸水与外加水有不同责任；失踪水或配方差额不能直接变成排放。 |
| 54241 | component_reconciliation; medium_reconciliation; species_release | 预浸材料整包与树脂不重复购入；管内介质留存、回注、捕集、排放是互斥去向，残差不构成排放证据。 |
| 54242 | accepted_normalisation; gas_ledger; asset_service_share | 每个最终验收单纤只计一次；共用接头盒及设备寿命负担需实际份额，测试双向平均不替代参考量或真实气体去向。 |
| 54251 | calc_mass; calc_assets; calc_stock_bridge | 整包夹具与自带组件互斥；件质量和完整寿命服务需要相容证据，历史管段与新采购材料分开。 |
| 54252 | material_intake; release_attribution; waste_attribution | 回归检查已归属活动 share=1，不能再乘分配比例；电缆芯数不增加接头 N，计件退回与实际混合废物 kg 分开。 |
| 54253 | mix_state_check; fuel_close; native_reference_amounts | 参考衬层面积不是新拌质量；55 kg 只保留其原始新拌总量条件，实际粉水比例不能从覆盖面积反向假定。 |
| 54261 | native_supply; native_outlets; species_release | 唯一路线长度、爆破实际活动和原生物料单位分开；安全浓度不代表总环境释放，非矿石开发不自动产生商品矿共产品。 |
| 54262 | calc_electricity; calc_asset; calc_exit | 进口电、试发电与外送各自计量，不能用净电掩盖流向；保留 MVT 接口不重购，资产服务与当量互斥。 |
| 54269 | heat_ledger; utility_meter; physical_outlet | 热试金属、炉底、氧化物和渣采用实际可比质量池，元素质量不等于混合渣总量；试验材料去向不能按商业产品默认抵扣。 |
| 54270 | lot_reconciliation; volume_mass; species_release | 一个 item 的实际场地配置独立于涂层量；湿配方质量与干膜质量有状态桥，已含控制的因子不二次扣捕集。 |
| 54290 | native_state; fuel_fates; freight_work | 复查湿基、干基换算方向及实测含水率；松散/压实体积不能无证据相等，施工服务不自动计未来填埋运行收益。 |
| 54310 | area_normalization; shared_attribution; custody_closure | 拆除面积只算一面一次，旧砖不是新购；原始去向可追溯至真实接收方，暴露样品不能直接作为全场释放。 |
| 54320 | area_attribution; stock_reconcile | 首次清理的唯一水平面积与后续维护分开；湿生物残余不等同干质量，电池额定容量不能代替实测充电电量。 |
| 54330 | soil_reconcile; transport_activity; fuel_supply_fate | 原状验收空腔与松散土体积分别测量，干土/水分基准相容；禁用 actual_consumed 的语句是防错规则，不是待填计算字段。 |
| 54341 | physical_balance; fuel_supply_fate | 洗井/试验/消毒水分别采集去向，失败孔仍承担实际负担；无永久泵的土建交接不等于持续饮水产出。 |
| 54342 | stock_reconciliation; asset_share; fuel_supply_fate | 化粪罐容量、测试水和交付件数不能互换；实际开挖支承回填有责任，保留无泵重力安装的产品限定。 |
| 54400 | stock_custody; shared_ledger; freight_activity | 整椅与自带固定件不重复购入，既有板是接口；仅按实际四腿机械锚固及验收作业计数，不推定新板或胶锚路线。 |
| 54511 | c_length; c_pools; c_carbon | 桩长沿实际轴线，头切和失败试桩保留负担；44/12 只转换实际已燃化石碳，不成为通用柴油排放因子。 |
| 54512 | event_normalization; component_balance; asset_service_share | 完整桩组只计一个验收事件，反力和复测有实际活动；钢帽与桩材分池，作业小时与完整寿命服务分母相容。 |
| 54521 | accepted_net_area; lot_normalization; stock_reconciliation | 裸框架净面积扣开口一次，备料实际 kg 不由最终面积反推；开口周边木材仍需实际采集，双面不重复产出。 |
| 54522 | component_closure; shared_cycle_closure; release_calculation | 整套屋架就位参考量不等于屋面竣工；临时支撑全过程负担有归属，保留现场不得任意切改的路线限定。 |
| 54530 | calc_issue_field_shingles; calc_underlay_edges_material_closure; calc_issue_materials_shingle_details | 四节点收发、包装和在制品按同事件对账；材料汇总变量由各节点协议明确组成，面积状态不能加入 kg 平衡，脊帽裁片不重复采购。 |
| 54540 | receipt_reconcile; fossil_carbon_emission; washout_release_mass | 新拌收料、最终原位体积与洗出残余分别采集；pH 不是物种质量，投放服务与整个混凝土构件边界分开。 |
| 54550 | derive_accepted_steel; normalize_concrete_exchange; compatible_pool_check | 净永久钢量有独立构件明细，涂层/灌浆不加入钢分母；工厂已含负担不重购，材料池必须同单位同状态。 |
| 54560 | calc_lay_joint_mass_closure; calc_mix_mortar_water_closure; calc_cure_accept_water_pools | 四节点湿砂浆和水分按实际移交并避免整体与组成双计；源水、材料带水、在制品及最终留存相互区分，差额不能自动成为水蒸气。 |
| 54570 | cycle_numerators; exclusive_attribution; water_only_closure | 整周期面积不因层板和天数增加，安装、拆卸、回收和实际修复均有负担；共享套件不会每轮重新购入。 |
| 54590 | job_attribution | 四片单开口内衬一次冷固化交接不等于整壁炉或点火许可；实际湿润、砂浆、授权移除及废物不可因局部工序省略。 |
| 54611 | actual_normalization; custody_closure; asset_attribution | 单馈线侧插座安装中原有箱和导线作接口，原包螺钉不重购；测试电量不扩成未来使用电耗。 |
| 54612 | normalize_exchange; owned_asset_normalize; solvent_partition | 整套有线消防系统只归一化一次，永久备用电池不当临时资产；溶剂留存、捕集与释放依实际证据分流。 |
| 54613 | c_actual; c_custody; c_resource | 回归检查数据缺失只阻止 LCA 定稿，不把实际已验收 D 置零；NC 入侵报警不扩成消防或监控通信服务。 |
| 54614 | sku_mass; custody_closure; asset_attribution | 同 SKU 件质量桥接需要实际证据；资料不齐不能抹去物理验收 N，无源单引下线天线不能套到放大器/新接地路线。 |
| 54619 | normalize_job; owned_resource_share; material_closure | 整项实际通信安装按交付门槛计数，资源按归属量只分一次；实际永久材料与临时工具分开，不默认商品设备生命周期完整覆盖。 |
| 54621 | nominal_pipe_factor; fill_geometry_diagnostic; formulation_normalize | PEX-B 管、倒钩接头和铜压环保留原生单位，测试充水和几何诊断不代替实测；名义尺寸质量桥接受实际规格约束，不能据此强定内部输送量或损失。 |
| 54622 | fill_diagnostic; release_normalize; source_pool_balance | 已有填充体积与密度状态相容条件继续有效；充注、回收和实际释放分池，未知残差不直接称为制冷剂排放。 |
| 54631 | job_normalization; receipt_exit_reconcile | 实际供货与可用退出按完整设备/组件边界核对；一次交付不等于每个零件一个产出，上游已装组件不能再重复购入。 |
| 54632 | cohort_attribution; electrical_consumption; component_reconciliation | 实际验收队列、测试耗电和组件去向分开；测试时间与功率仅在实测适用时换算，不能推长期运营或任意系数。 |
| 54640 | material_reconciliation; test_medium_balance | 实际测试介质充入、回收、留存和释放互斥；压力/容积不能无状态证据变质量，接口材料不能从参考服务量硬推。 |
| 54651 | stock_closure; resource_share | 干铺氯丁橡胶隔振垫的毛投入、库存与可用退出相互排他；局部起吊资源份额只作用一次，加载后几何或设备自重不能代替实际垫片投料。 |
| 54652 | mass_conversion_calc; fit_balance_calc; release_calc | 新增 R3-002：安装压缩体积不能仅凭同牌号乘松弛密度；要求几何/密度同状态或同件独立质量证据。回归检查采样质量不能代表总空气释放。 |
| 54659 | lot_attribution; stock_balance; shared_share | 批次验收量独立于材料净耗，库存与可用退出互斥；共享资源实际份额不能用于已归属数量再次折减。 |
| 54691 | job_normalization; asset_share; fuel_supply_fate | 参考服务按实际完工事件计数，完整燃料去向与同寿命资产份额保留；实耗和总出库不混，遗漏去向保留缺口。 |
| 54699 | job_reconciliation; resource_attribution; acceptance_count | 验收事件按唯一对象计数，返工与重复测试不增加产出；原始资源及失败工作仍归同批，不用参考量硬定所有内部投入。 |
| 54710 | complete_igu_mass_bridge; forward_transfer_areas; substance_release_normalization | 新增 R3-001：整单元 kg/m2 系数只适用于全组成全数量进入同一相容状态流；部分碎片采用实际流称量或独立组成数据。回归检查矩形面积与完整源释放覆盖。 |
| 54720 | calc_powder_stock; calc_evaporation; calc_finish_evaporation | 粉料、拌水及各节点移交有实际基准；两个节点水蒸气来自独立有据去向，湿料差额或失踪水不能自动分配为蒸发。 |
| 54730 | stock_reconciliation; wet_mass_conversion; species_emissions | 湿涂料体积换质量需实际配方状态密度，干膜与湿料不直接相等；溶剂物种、控制与实际释放不从总质量残差编造。 |
| 54740 | mortar_card_bridge; mix_state_balance; transfer_reconcile | 内部砂浆移交按同事件的实量匹配并单列实际损失归属；湿混合物、洗涤残余和环境释放分开，真实损失不能变第二次新进料。 |
| 54750 | water_constituent_inputs; paste_water_balance; period_rollforward | 湿壁纸与干纸克重已分开；浆糊/材料带水、内部移交和期初期末水分有独立池，不从最终面积倒算用水或干质量。 |
| 54760 | receive_condition_bridge; position_fix_bridge; complete_water_fate | 同 ID 同状态的件质量与长度质量桥接继续有效；整套和组成视图互斥，三节点移交及水分去向不靠最终 N 强定。 |
| 54770 | calc_issue_materials_rail_brace; calc_issue_materials_fabric_tension; calc_finish_accept_material_mass_closure | 四节点实际领料明细可追至收发及包装事件，汇总变量不构成额外交换；围栏面板面积不能加入 kg 平衡，返工不增加净验收量。 |
| 54790 | event_normalization; component_reconciliation; shared_resources | 唯一验收事件与组件数量独立，整包及组成采购不重复；共享资源份额有实际驱动，不以缺数据为零或默认完整商品系统。 |

词形扫描还标记了 15 份 PCR 的 `actual_...` 候选字段，已逐类人工处置：其中多处是禁止使用预净耗的语句；另外是由协议明确绑定的实际服务量、节点领料汇总或面积/水退出别名。它们不自动构成缺失字段，也不能反向证明整张依赖图无环。663 条计算规则中 649 条变量词形集合完全相同，另外 14 处沿用已审查的中英文词形/别名差异，本轮没有新增；568 项协议原始字段词形集合相同。词形相同仍不代表语义正确。

## 校验与限制

- 官方 `pcr:check --workspace current --format json`：63/63 通过，测量检查 2674 项 performed、0 项 skipped；保留 267 个非阻断范围提示。它们不是本轮新增原则问题，也不代表范围已有现场证据。
- 两份修改记录保持 candidate / authored_methodology / zh-CN aligned；采用官方 lifecycle 和 sync，最终投影各双次同步字节相同。497 张卡、1021 项条件采集义务、Range、UUID、参考流、路线节点、分配、旧来源和条件采集章节保持不变；仅收紧相关计算/采集/验证条件及 review metadata。
- 中英文卡片/条件元数据、参考量、公式数字序列、协议所属节点与规范投影核对 0 新问题。前两轮燃料、空驶、一次归属、物理验收、矩形面积、总释放与控制因子修复均保留。
- 映射仍保留同步基线 1250 边加本批 63 个分别接受的 narrower 边；coverage 回读为 2877 总叶、1313 mapped、1564 unmapped、0 unknown。未改变分类关系。
- 按仓库要求启动 `npm run validate`：runtime、migration、420 文件 strict types、词表/别名/catalog/产品链检查已通过；全库 lint 在 240 秒界限仍未完成，仅中断本次调用的进程组。全库 lint、整个测试链和新文档站构建均未宣称通过。
- 没有新增平台 UUID 绑定，也没有重新读取全部平台详情；63 个参考产品 UUID 仍未解析。core Markdown 模块义务沿用同步基线，没有声称执行不存在的 candidate YAML checklist。
- 没有现场数据，不能替代实际项目的产品/状态、供应商、测量代表性、上游边界、资产范围和去向证据。全部 183 个来源没有在本轮逐一重新获取。先前 v5 压缩和全站构建结果仅属于各自记录的提交。
- 输入提交的 GitHub workflow #43 读取时仍在运行；本轮交付提交需要自己的 CI。没有合并、发布或改动上游。

本轮结论限于新增缺口已修复、所选目标检查通过，以及在上述审查范围内未发现其他新增实质问题。仍不能作出“全部原则性问题已被找尽”的承诺。
