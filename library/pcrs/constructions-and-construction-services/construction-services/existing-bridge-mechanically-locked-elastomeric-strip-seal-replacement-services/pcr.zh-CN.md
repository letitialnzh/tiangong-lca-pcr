---
pcr_id: pcr.existing-bridge-mechanically-locked-elastomeric-strip-seal-replacement-services
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 既有桥梁机械锁定式弹性体条带密封胶条更换服务

## 1. 范围与适用性

本 PCR 适用于一次既有桥梁伸缩缝维修：在完好且兼容的单缝机械锁定式伸缩缝中，更换连续工厂制造的弹性体密封胶条，并保留钢制边梁、缝口锚固区、锚固件及桥梁结构。拆除失效胶条，清理并确认槽腔合格，采用规定的润滑粘结剂装入匹配胶条，关闭实际缺陷后移交完整伸缩缝。代表工艺为 SSPA 或 SSCM 伸缩缝边梁型钢配套的 L2 系列胶条。本 PCR 选择单缝子类别，排除同样可使用 L2 胶条的模数式伸缩缝。

排除新建伸缩缝边梁型钢、缝口锚固区、锚固件或桥梁结构工程，模数式多缝重建，现场硫化接头或独立密封条制造，混凝土或弹性体混凝土缝口浇筑，纯压缩式、灌注式及泡沫密封，以及桥梁后续运营。主体存在重大缺陷时，应停止本工艺并明确另行界定扩大工程范围。发现主体不合格之前已消耗的资源仍须计入已声明的维修活动，但不形成验收长度。制造商说明支撑槽腔准备和胶条就位要求；实际工程及业主准则决定施工许可、必需试验及维修移交。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.existing-bridge-mechanically-locked-elastomeric-strip-seal-replacement-services |
| classification_refs | CPC 3.0 54221；比“桥梁和高架公路一般施工服务”范围更窄 |
| covered_products | 在完好保留伸缩缝边梁型钢上的单缝桥梁伸缩缝内，完成匹配连续胶条更换并验收的服务 |
| excluded_products | 新桥或新伸缩缝施工；伸缩缝边梁型钢、缝口锚固区及锚固件更换；多缝重建；现场接头；仅胶条制造；泡沫、压缩式或灌注式密封 |
| representative_product | 在保留 SSPA 或 SSCM 伸缩缝边梁型钢上装入匹配的 L2 系列工厂胶条，并获得授权维修移交 |
| production_route | 失效胶条拆除与槽腔清理/合格确认 -> 匹配胶条及粘结剂装配 -> 整缝检查、实际必需试验及移交 |
| market_state | 已识别既有伸缩缝上的完工维修服务；工厂胶条和液态粘结剂属于投入，不是参考服务 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在已识别且完好的保留伸缩缝边梁型钢上，更换单缝桥梁伸缩缝机械锁定式弹性体胶条 |
| How much | 沿实测竣工缝/密封胶条中心线验收的更换长度 1 m；声明的几何包含实际上翻段及工厂斜接段 |
| How well | 型材、位移要求、实际缝宽及温度相匹配；槽腔洁净合格；两侧锁定头完整就位且无扭曲、拉伸或损伤；端部、斜接及上翻段与清理合格；实际必需检查/试验准则通过 |
| How long or cycle | 一次从受保护进场、拆除至授权维修移交的完整活动，包含重复施工及缺陷关闭；不承诺胶条未来寿命。另行声明施工期间及设备完整寿命阶段。 |
| reference_flow_link | `accepted_gland_replacement` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 已验收机械锁定式桥梁条带密封胶条更换服务 |
| 参考流属性 | 长度 `838aaa23-0117-11db-92e3-0800200c9a66` |
| 参考单位组 | 长度单位组 `838aaa22-0117-11db-92e3-0800200c9a66` |
| 参考单位 | m |
| 必需限定信息 | 桥梁/伸缩缝 ID；里程定位及实测密封中心线几何；胶条/伸缩缝边梁型钢型材及位移要求；主体状况；缝宽 mm 和温度 °C；粘结剂产品/批次及说明修订版；施工期间；实际试验/检查准则及责任；移交状态 |

验收总长度 L 为整条伸缩缝更换完成并验收后一次测量的长度。全部可归属维修数量均除以 L。一米结果是整缝验收后的强度，不能据此移交部分泄漏的伸缩缝。不同型材或位移要求须分别分层并披露可比性。

## 4. 计量与单位规则

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| reference_length | accepted_gland_replacement | 长度 `838aaa23-0117-11db-92e3-0800200c9a66` | m | 实测包含工厂斜接和上翻几何的验收中心线 L；重复就位及左右两侧不增加 L。整缝验收是通过条件，不是部分产出的计量信用。 |
| handoff_length | qualified_rails_transfer; qualified_rails_input | 长度 | m | 通过交接 ID 配对实测槽腔合格覆盖范围。服务长度代表两侧槽腔均合格的一条伸缩缝，不因两条伸缩缝边梁型钢而倍增；不得将不完整内部覆盖强制定为最终参考量。 |
| material_mass | gland_supply; adhesive_supply; material_returns; removed_gland_waste; gland_offcuts | 质量 | kg | 记录扣除皮重后、对外退回抵扣之前的供应总量。仅有同批次/型材证据时，可用实测单位长度质量将胶条长度换算为质量；不得假设通用橡胶密度或伸长率。 |
| transport_basis | prepare_transport; install_transport | 质量*距离 | kg*km | 按已识别服务求和实际净货物 kg 乘实际载货路段 km；保留空驶处理及供应商边界；仅凭已核实因子1000换算 t*km。 |
| condition_units | 伸缩缝合格确认及验收 | 实际测得状态 | mm; °C; h; 实际试验单位 | 记录缝宽、环境/路面温度、时间及必需试验数量的实际单位、容差和当前批准说明/业主来源。L2 说明中2英寸便于安装的最小开口仅适用于该型号，不是通用缝宽、设置或性能因子。 |
| `count_unit_alias` | 存在时的计数交换 | Count | item | 本 PCR 的显示别名 item 表示已核实的物品数量单位组参考单位 Item(s)，系数为 1。具体数据集须保留实际参考单位身份；此书写别名不建立质量、面积或服务之间的等价关系。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 既有完好的单缝桥梁伸缩缝内存在失效可更换胶条；保留伸缩缝边梁型钢、缝口锚固区、锚固件及结构已确认兼容且可继续使用；声明实际进场、防护与施工准则 |
| starting_condition_role | 保留主体存量与施工许可边界；旧资产制造不属于本次增量维修服务 |
| product_classification_scope | CPC 3.0 54221 内范围更窄的维修子类别，不声明覆盖整个分类叶 |
| recursive_input_rule | 购入同类更换分包时，按伸缩缝/长度、供应商交付界面及包含材料、能源、废物和资本设备明确边界。只计一次或拆解至各自拥有的作业，不递归叠加同一维修活动。 |
| upstream_dataset_requirement | 实际兼容工厂胶条、规定的供应态粘结剂/清洁剂、能源及设备/服务数据集，声明供应界面、地理、技术、期间、包装及运输覆盖 |
| disclosure | 主体状况与保留构件；实际清理方法；工厂几何；供应商边界；全部工作期间、失效施工、废物去向及必需试验/移交责任 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| retained_host | 两个过程 | 纳入增量拆除、清理、实际局部尖边/碎屑处理、装配、防护、运输、试验、清理及缺陷处理。不计整座新桥/新伸缩缝负担，也不给避免原生橡胶或更换的信用。主体重大损伤明确退出本范围。 | dsbrown-strip-seal-replacement-2024; dsbrown-l2-installation-2024 |
| qualification_gate | rail_qualification | 输入为保留伸缩缝边梁型钢中的失效胶条。输出为两侧洁净且无障碍的槽腔，在接头和边缘处检查，并确认适合实际兼容型材、缝宽及天气。记录拆除与有条件的磨料清理。污染槽腔在本过程返工；主体损坏时停止装配。 | dsbrown-strip-seal-replacement-2024; dsbrown-l2-installation-2024 |
| integration_gate | gland_integration | 输入为合格保留槽腔、匹配工厂胶条及规定润滑粘结剂。两侧逐步装入且不扭曲，配合实际工厂斜接、上翻段及端部，去除多余粘结剂和胶带。仅完整验收的伸缩缝交付；就位失败返回本过程或合格确认过程。实际业主要求的水密性试验须声明方法、阈值和责任。 | dsbrown-strip-seal-replacement-2024; dsbrown-l2-installation-2024 |
| utility_ownership | 两个过程 | 实际压缩机、牵引/切割/安装及试验/防护资源归属一次。现场压缩环境空气由压缩机能源承担；购入压缩空气产品须声明界面。不得将压缩机服务与已含能源重复计入。 | dsbrown-strip-seal-replacement-2024 |
| chemical_custody | 两个过程 | 区分供应液体、施用/保留材料、实际产品退回、收集化学废物及实际物种排放。SDS 组成不是排放因子，不自动形成 VOC、分解产物或水性胶假设。采用实际清洁剂，制造商溶剂示例不强制选用甲苯。 | dsbrown-1520-sds-2020; dsbrown-strip-seal-replacement-2024 |
| assets_periods | 两个过程 | 纳入共用拆除、安装、压缩空气、喷砂、测量、试验及交通防护资产完整寿命的设备提供份额，涵盖所有使用过程、项目及期间。制造、维护、更换及报废仅覆盖一次，采用已观察历史或有依据的前瞻情景；排除其他行已记录的直接燃料及备件重复。完整寿命覆盖或分母无证据时不得完成数据集。 |  |
| `boundary_atomic_completion` | 所有过程 | 本节的采集要求是必须执行的采集与适用性指令，不是聚合清单交换。完成前景数据集前，必须为每一种实际产品、废物流、物质及环境子区室建立独立原子流卡／交换。保留全部实际事件、上游负荷、退回及原生单位；所链接公式应按每个兼容身份分别执行。环境资源提取记为输入，环境释放记为输出。不得相加不同原生单位、用一个 UUID 代表整个采集池、将缺记录解释为零，或与已有具体卡重复计入。保留宿主的文件性接口仅传递状态，不形成新采购资产。适用成员未明确或未有证据证明不存在时，定量清单仍不完整；非强制筛查提示不能补造数量或化学组成。 |  |

### 条件性清单补全要求

以下标识符表示采集池或文件性状态台账。一个池可能有零个、一个或多个实际成员。须依据真实记录判断适用性，并为每个成员保留原有数量方法和采集协议；只有兼容的数量才能共同核对。下列原有可选筛查区间仅作为暂定复核提示，不得强加于不同材料或混合采集池。

#### 采集要求：实际供应的槽腔清洁剂 (`prepare_cleaner`)

过程／待建立交换的方向／类型：`rail_qualification` / `inputs` / `product`.

仅在实际采用化学清理时纳入。按规定清洁剂配方及供应界面分别展开，不假定安装前必须使用溶剂。

- 采集对象：实际供应的槽腔清洁剂
- 流属性/单位：质量 / kg
- 数量规则：扣除容器皮重后、对外退回抵扣之前的实际供应/领用总质量，除以验收 L。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_prepare_materials`
- 来源：`dsbrown-strip-seal-replacement-2024`; `dsbrown-l2-installation-2024`; `dsbrown-1520-sds-2020`

范围证据需求：需要实际清洁剂身份、称量领用/收货、残留/退回台账及重复清理记录；说明书没有通用 kg/m。

#### 采集要求：按实际燃料类型区分的准备作业燃料 (`prepare_fuel`)

过程／待建立交换的方向／类型：`rail_qualification` / `inputs` / `product`.

有条件纳入自有牵引设备、压缩机或发电机燃料，按实际燃料及状态分别展开。存在对外燃料/废物/排放出口时采用总投入，另行推导已燃烧活动量。

- 采集对象：按实际燃料类型区分的准备作业燃料
- 流属性/单位：质量 / kg
- 数量规则：扣除皮重后、对外退回抵扣之前的实际供应/可归属领用燃料总质量，除以验收 L。依据第8节存量与互斥出口平衡，按互斥的未燃烧废物与未围控液体释放等出口推导已燃烧量；溢漏总量仅作审计。期初存量负担转入、期末存量负担结转，收货与内部领用不得重复计入。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_prepare_energy`
- 来源：`dsbrown-strip-seal-replacement-2024`

范围证据需求：需要实际燃料身份，期初、收货、期末及互斥的可用退回、未燃烧废物、液体释放计量；若换算则记录实际液体体积、温度及密度/来源；保留溢漏审计分项与不确定性，不设默认燃料率。

#### 采集要求：按实际身份区分的准备耗材及更换件 (`prepare_consumables`)

过程／待建立交换的方向／类型：`rail_qualification` / `inputs` / `product`.

将实际刀片/槽腔清理头磨损件、围控材料、刷子及防护耗材分别展开为不同交换。耐用工具纳入完整寿命设备提供份额，同一备件不重复计入。

- 采集对象：按实际身份区分的准备耗材及更换件
- 流属性/单位：质量 / kg
- 数量规则：每种实际新零件/材料扣除皮重后、对外退回之前的领用总量，除以验收 L；保留存量单列。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_prepare_materials`
- 来源：`dsbrown-strip-seal-replacement-2024`

范围证据需求：需要实际材料/零件身份、数量、更换记录和服务包含边界，不设统一工具损耗率。

#### 采集要求：按资产区分的准备设备完整寿命提供份额 (`prepare_assets`)

过程／待建立交换的方向／类型：`rail_qualification` / `inputs` / `product`.

分别记录实际拆除、牵引、压缩机、喷砂、测量和交通防护资产提供份额。以计算得到的件数份额涵盖制造、维护、更换及报废，排除其他行已归属的直接数量。

- 采集对象：按资产区分的准备设备完整寿命提供份额
- 流属性/单位：数量 / item
- 数量规则：对每项资产，以一件乘实测本项目本过程服务量，再除以有证据的完整寿命服务量及验收 L。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_prepare_assets`
- 来源：`dsbrown-strip-seal-replacement-2024`

范围证据需求：需要资产身份、所有使用者/期间、已观察完整寿命或有依据的前瞻剩余服务/报废情景，以及有不确定性/敏感性证据的分子和分母；不设通用寿命。

#### 采集要求：实际准备材料及设备运输服务 (`prepare_transport`)

过程／待建立交换的方向／类型：`rail_qualification` / `inputs` / `product`.

按实际货物、供应商、方式和路段分别展开，包含归属于本服务的进场、废物运送和撤场。不重复计入供应商交货或废物处理方已含运输。

- 采集对象：实际准备材料及设备运输服务
- 流属性/单位：质量*距离 / kg*km
- 数量规则：按服务将实际净货物 kg 乘实际载货距离 km 求和，再除以验收 L；依据实际路段记录声明分配的空驶及供应商范围。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_prepare_assets`

范围证据需求：需要实际货物/皮重票据、路段距离、共载分配及供应商覆盖，不假设 km 或装载率。

#### 采集要求：实际可用准备材料对外退回 (`prepare_returns`)

过程／待建立交换的方向／类型：`rail_qualification` / `outputs` / `product`.

仅记录按实际可用身份区分的材料、燃料或零件对外保管责任转移。保留期末存量不是对外交换，废物不得转成退回产品。

- 采集对象：实际可用准备材料对外退回
- 流属性/单位：质量 / kg
- 数量规则：按实际身份实测扣除皮重后的对外退回质量，再除以验收 L；对应投入保持退回之前的总量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_prepare_materials`

范围证据需求：需要退回票据、可用性和接收保管责任证据；不能根据未使用存量假定退回数量。

#### 采集要求：按实际流区分的准备作业收集残渣废物 (`prepare_waste`)

过程／待建立交换的方向／类型：`rail_qualification` / `outputs` / `waste`.

将废磨料、橡胶/旧胶碎片、化学/清洁残渣、污水和使用过的耗材/包装按实际污染及接收方分别展开。区分干固体、水和化学组分。收集的未燃烧燃料废物仅包含一次已回收溢漏部分，溢漏总量保持为审计量。保留的事故残留计入期末存量或其他互斥未燃烧出口。

- 采集对象：按实际流区分的准备作业收集残渣废物
- 流属性/单位：质量 / kg
- 数量规则：按互斥废物流记录扣除皮重后的收集外运质量，除以验收 L；排除已在 removed_gland_waste 称重的拆除胶条。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_prepare_waste`
- 来源：`dsbrown-strip-seal-replacement-2024`; `dsbrown-1520-sds-2020`

范围证据需求：需要实际分流重量、水/固体表征、联单及废物处理边界；碎屑不自动成为空气粉尘。

#### 采集要求：按物质及粒径区分的实际准备空气排放 (`prepare_air_release`)

过程／待建立交换的方向／类型：`rail_qualification` / `outputs` / `elementary`.

有条件记录清理/拆除或自有燃烧的实际环境空气释放。分别识别具体物质、可用 CAS、粒径及接收空气区室；收集粉尘是废物。

- 采集对象：按物质及粒径区分的实际准备空气排放
- 流属性/单位：质量 / kg
- 数量规则：依据实际物种活动/因子或浓度/体积计算，使用实测物质质量，或实际已燃烧燃料/清洁剂活动量乘适用物种因子，再除以验收 L；不得将 SDS 组分比例视为释放率。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_prepare_waste`
- 来源：`dsbrown-1520-sds-2020`

范围证据需求：需要物种、粒径、空气接收区室、实际活动及实测捕集或经验证适用因子和不确定性；不得直接选用泛称 VOC、NOx 或 PM 的 UUID。

#### 采集要求：按物质区分的实际准备水体或土壤释放 (`prepare_water_release`)

过程／待建立交换的方向／类型：`rail_qualification` / `outputs` / `elementary`.

仅实际环境排放跨越本基本流边界。收集送处理的废水属于废物；分别识别物质和接收水体/土壤区室。未围控的未燃烧燃料液体释放属于独立互斥出口，推导已燃烧量时不得再次扣减事故总量。

- 采集对象：按物质区分的实际准备水体或土壤释放
- 流属性/单位：质量 / kg
- 数量规则：依据实际物种活动/因子或浓度/体积计算，使用实测排放质量，或浓度乘实测排放体积并保持单位兼容，再除以验收 L。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_prepare_waste`
- 来源：`dsbrown-1520-sds-2020`

范围证据需求：需要实际排放路径、浓度/体积、物种及捕集证据；未知平衡残差不是排放。

#### 采集要求：实际供应的安装后清洁剂 (`install_cleaner`)

过程／待建立交换的方向／类型：`gland_integration` / `inputs` / `product`.

按实际批准清洁剂配方分别展开。矿物油精和甲苯是制造商示例，不是强制选择或纯物质证明。

- 采集对象：实际供应的安装后清洁剂
- 流属性/单位：质量 / kg
- 数量规则：扣除皮重后、对外退回抵扣之前的实际清洁剂供应/领用总量，除以验收 L，并关闭捕集与保留存量平衡。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_install_materials`
- 来源：`dsbrown-strip-seal-replacement-2024`; `dsbrown-1520-sds-2020`

范围证据需求：需要实际产品/配方、领用/退回称量、用法及废物/释放划分，不设通用溶剂损失比例。

#### 采集要求：按实际燃料类型区分的装配燃料 (`install_fuel`)

过程／待建立交换的方向／类型：`gland_integration` / `inputs` / `product`.

有条件记录自有发电、安装、防护或试验设备的燃料。按实际燃料身份展开，并保持领用总量及互斥的存量、可用退回、收集未燃烧废物、未围控液体释放和燃烧出口。

- 采集对象：按实际燃料类型区分的装配燃料
- 流属性/单位：质量 / kg
- 数量规则：扣除皮重后、对外退回抵扣之前的实际供应/可归属领用燃料总质量，除以验收 L。依据第8节存量与互斥出口平衡，按互斥的未燃烧废物与未围控液体释放等出口推导已燃烧量；溢漏总量仅作审计。期初存量负担转入、期末存量负担结转，收货与内部领用不得重复计入。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_install_energy`

范围证据需求：需要实际燃料身份，期初、收货、期末及互斥的可用退回、未燃烧废物、液体释放计量；若换算则记录实际液体体积、温度及密度/来源；保留溢漏审计分项与不确定性，不设默认燃料率。

#### 采集要求：按实际身份区分的装配耗材及更换件 (`install_consumables`)

过程／待建立交换的方向／类型：`gland_integration` / `inputs` / `product`.

将实际胶带、刷子、手套、围控材料及更换件分别展开。胶条/粘结剂上游供应已含的包装不再承担第二次生产负担，实际处置仍须记录。

- 采集对象：按实际身份区分的装配耗材及更换件
- 流属性/单位：质量 / kg
- 数量规则：每种实际新材料/零件扣除皮重后、退回之前的领用总量，除以验收 L；区分耐用设备及保留存量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_install_materials`
- 来源：`dsbrown-strip-seal-replacement-2024`; `dsbrown-l2-installation-2024`; `dsbrown-1520-sds-2020`

范围证据需求：需要实际材料/零件身份、重量/领用、磨损更换及上游已含服务范围。

#### 采集要求：按资产区分的装配设备完整寿命提供份额 (`install_assets`)

过程／待建立交换的方向／类型：`gland_integration` / `inputs` / `product`.

分别记录实际安装、测量、试验及交通防护资产提供份额，涵盖全部使用过程、项目和期间。与准备过程核对共用资产归属，不在此再次全额计入。

- 采集对象：按资产区分的装配设备完整寿命提供份额
- 流属性/单位：数量 / item
- 数量规则：对每项资产，以一件乘实测本项目本过程服务量，再除以有证据的完整寿命服务量及验收 L。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_install_assets`
- 来源：`dsbrown-strip-seal-replacement-2024`

范围证据需求：需要实际资产历史、维护/更换/报废覆盖、已观察或有依据的前瞻完整寿命服务量及不确定性/敏感性，不虚构使用寿命。

#### 采集要求：实际装配材料及设备运输服务 (`install_transport`)

过程／待建立交换的方向／类型：`gland_integration` / `inputs` / `product`.

按实际货物、供应商、方式、路段分别展开，包含本服务归属的材料交付、退回、废物及进撤场。明确界面的供应商服务须披露已含路段及能源。

- 采集对象：实际装配材料及设备运输服务
- 流属性/单位：质量*距离 / kg*km
- 数量规则：按实际服务将货物 kg 乘路段 km 求和，再除以验收 L；避免重复计入供应商/废物处理方已含路段。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_install_assets`

范围证据需求：需要实际净货物重量、路段证据、共载及空驶处理，不任意设置交付距离。

#### 采集要求：实际可用装配材料对外退回 (`material_returns`)

过程／待建立交换的方向／类型：`gland_integration` / `outputs` / `product`.

按可用身份及接收方分别展开实际胶条、粘结剂、清洁剂、燃料、零件的对外退回。制造商规定已开封粘结剂容器不能退回，不虚构此类供应商退回。期末存量留在平衡中并结转已声明负担。

- 采集对象：实际可用装配材料对外退回
- 流属性/单位：质量 / kg
- 数量规则：实测扣除皮重后的真实对外退回质量除以验收 L；不得先减少总投入，再再次计入退回输出。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_install_materials`
- 来源：`dsbrown-strip-seal-replacement-2024`

范围证据需求：需要实际可用性、保管责任、退回票据及接收方认可；开封粘结剂和污染材料须有实际去向证据。

#### 采集要求：实际新胶条切余或不合格胶条废物 (`gland_offcuts`)

过程／待建立交换的方向／类型：`gland_integration` / `outputs` / `waste`.

记录实际未用切余或撕裂/不合格胶条作为废物离开，与旧胶条及可用退回分开；重新就位后仍留在缝中的材料不是弃物。

- 采集对象：实际新胶条切余或不合格胶条废物
- 流属性/单位：质量 / kg
- 数量规则：按实际型材/组成及接收方称量扣除皮重后的废物质量，除以验收 L，包含所有安装失败数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_install_waste`
- 来源：`dsbrown-strip-seal-replacement-2024`; `dsbrown-l2-installation-2024`

范围证据需求：需要实际切余/不合格计量、原因及废物去向，不假定废品比例。

#### 采集要求：实际装配收集化学废物或废水 (`chemical_waste`)

过程／待建立交换的方向／类型：`gland_integration` / `outputs` / `waste`.

将未固化粘结剂残留、废清洁剂、污染吸附材料/胶带、收集的试验/清理废水分别展开。区分含水及干固体；捕集溶剂不是空气排放。收集的未燃烧燃料废物只包含一次已回收溢漏部分，溢漏总量仅审计。保留事故残留计入期末存量或其他互斥未燃烧出口。

- 采集对象：实际装配收集化学废物或废水
- 流属性/单位：质量 / kg
- 数量规则：按废物流记录实际扣除皮重后的外运质量，除以验收 L，声明处理及运输覆盖。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_install_waste`
- 来源：`dsbrown-strip-seal-replacement-2024`; `dsbrown-1520-sds-2020`

范围证据需求：需要称重分流/联单证据、污染状况、水/固体及实际接收方分类，不设泛称危险废物质量。

#### 采集要求：实际装配包装及非化学耗材废物 (`packaging_waste`)

过程／待建立交换的方向／类型：`gland_integration` / `outputs` / `waste`.

按身份/接收方分别展开实际包装及非化学耗材废物。化学污染包装归入其分类化学废物流；供应商已含处置不重复计入负担。

- 采集对象：实际装配包装及非化学耗材废物
- 流属性/单位：质量 / kg
- 数量规则：每种实际废物流扣除皮重后的外运质量除以验收 L，并核对供应界面包装覆盖。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_install_waste`

范围证据需求：需要实际包装组成/重量、污染筛查、接收方及处置归属，不设通用包装比例。

#### 采集要求：按物质区分的实际装配空气排放 (`install_air_release`)

过程／待建立交换的方向／类型：`gland_integration` / `outputs` / `elementary`.

按确切接收空气区室分别展开实际粘结剂/清洁剂蒸气、气溶胶或自有燃烧物种。SDS 列出的组分不自动排放；异常反应/分解须有实际证据。

- 采集对象：按物质区分的实际装配空气排放
- 流属性/单位：质量 / kg
- 数量规则：依据实际物种活动/因子或浓度/体积计算，使用实际实测物种质量，或实际活动量乘经验证适用物种释放因子，再除以验收 L；核对保留/收集材料。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_install_waste`
- 来源：`dsbrown-1520-sds-2020`

范围证据需求：需要实际配方、物种、空气接收区室、施用/清理/捕集历史、释放计量或适用因子及不确定性；泛称 VOC 不是确切身份。

#### 采集要求：按物质及接收区室区分的实际装配环境释放 (`install_water_release`)

过程／待建立交换的方向／类型：`gland_integration` / `outputs` / `elementary`.

只有实际证实的未捕集水体/土壤排放属于基本流，收集废水属于废物。分别识别化学物种、试验水路径及事故区室。未围控的未燃烧燃料液体释放属于独立互斥出口，推导已燃烧量时不得再次扣减事故总量。

- 采集对象：按物质及接收区室区分的实际装配环境释放
- 流属性/单位：质量 / kg
- 数量规则：依据实际物种活动/因子或浓度/体积计算，使用实测质量，或浓度乘实测排放体积并保持单位兼容，再除以验收 L；将事故总量分配至互斥的捕集及环境出口。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_install_waste`
- 来源：`dsbrown-1520-sds-2020`

范围证据需求：需要实际排放体积/浓度、物种、接收区室、捕集证据及不确定性；水平衡残差和溢漏总量不自动成为物种排放。

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| rail_qualification | 拆除失效胶条并确认保留伸缩缝边梁型钢槽腔合格 | required | 既有完好兼容主体；实际方法及受保护进场已批准 | 独立拆除/调理责任：失效胶条 -> 洁净合格空槽腔，配对移交装配过程；切割、清理、喷砂与废物出口嵌入本过程 | 实际合格伸缩缝中心线 m；两侧伸缩缝边梁型钢计为同一条缝 |
| gland_integration | 装配匹配胶条并完成整条伸缩缝验收 | required | 槽腔合格；实际型材、缝宽、天气兼容性及业主施工准则满足 | 将工厂胶条和规定粘结剂与保留主体装配；就位失败在此返工或返回合格确认；整缝验收移交 | 实测已验收胶条更换中心线 L m |

交接记录保留主体在真实责任界面上的状态，不是新购钢材或上游制造的伸缩缝。工厂胶条、粘结剂、实际清理材料及服务角色属于投入。未通过状态不得计入验收 L。准备和安装采用分别属于真实过程的采集协议；共用事件须有唯一责任归属及共同事件/交接 ID。

### 过程：拆除失效胶条并确认保留伸缩缝边梁型钢槽腔合格 (`rail_qualification`)

#### 输入

##### 产品流

###### 有条件槽腔清理实际供应的磨料 (`prepare_abrasive`)

仅在剩余碎屑确实需要磨料清理时使用；区分新供应磨料、回收循环介质与补充损耗。

- 选定流：有条件槽腔清理实际供应的磨料
- 流属性/单位：质量 / kg
- 数量规则：扣除皮重后、退回之前，本次维修实际新领用磨料总量除以验收 L；过程内循环不再次作为采购。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_prepare_materials`
- 来源：`dsbrown-strip-seal-replacement-2024`

范围证据需求：需要实际磨料类型、各清理批次净收货/领用与回收/处置计量，没有通用喷砂消耗。

###### 实际供应的准备作业用水 (`prepare_water`)

仅限实际批准准备/清理方法使用的产品供水，记录供应界面。主体既存水分及天气来水是独立平衡项。

- 选定流：实际供应的准备作业用水
- 流属性/单位：质量 / kg
- 数量规则：实测供水质量，或实际体积乘有证据的水密度，除以验收 L；包含重复工作。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_prepare_materials`

范围证据需求：需要实际供水计量及校准，若换算则记录实测体积 m3、温度 °C、密度 kg/m3 及来源，并声明方法和天气水量平衡；无规定清理水剂量。

###### 实际购入的准备作业电力 (`prepare_electricity`)

按实际切割、拆除、清理、压缩空气及照明所用电网电力或明确界面的购电纳入；发电机燃料属于另一个责任选择。

- 选定流：实际购入的准备作业电力
- 流属性/单位：能量 / kWh
- 数量规则：分表实测交付 kWh 按本过程归属后除以验收 L；不重复计入已含于购买服务的能源。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_prepare_energy`
- 来源：`dsbrown-strip-seal-replacement-2024`

范围证据需求：需要实际电表差值及跨作业/期间的共用回路分配；工具铭牌不是 kWh。

###### 实际购入的压缩空气服务 (`prepare_air`)

仅外部供应的压缩空气产品/服务跨越本边界。记录计量和参考压力及绝压/表压基准，换算需要时记录实际大气压，记录计量/参考温度及湿度、适用换算来源及供应商能源覆盖。不设参考状态默认值；现场压缩环境空气由自有能源承担。

- 选定流：实际购入的压缩空气服务
- 流属性/单位：体积 / m3
- 数量规则：声明状态下计量的供应体积除以验收 L；仅凭有依据的计量/参考压力基准、温度、湿度及换算来源换算。排除已由燃料/电力覆盖的现场压缩机空气。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_prepare_energy`
- 来源：`dsbrown-strip-seal-replacement-2024`

范围证据需求：需要实际购入界面、计量/参考状态及绝压/表压基准与适用换算来源；拆除工具的 PSI 设置不是空气用量。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格保留桥梁伸缩缝槽腔交接 (`qualified_rails_transfer`)

保留的两侧槽腔已空置、洁净且无阻碍碎屑/尖边；主体完好性及兼容缝宽、型材、天气已经检查。此配对交接不具有新钢材上游负担。

- 选定流：合格保留桥梁伸缩缝槽腔交接
- 流属性/单位：长度 / m
- 数量规则：将实际实测合格伸缩缝中心线覆盖除以验收 L，通过交接 ID 与 qualified_rails_input 配对；不得将局部覆盖强制定为一。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_prepare_gate`
- 来源：`dsbrown-strip-seal-replacement-2024`; `dsbrown-l2-installation-2024`

范围证据需求：需要实测准备几何及两侧槽腔签署合格记录，包含不合格区段和重复工作。

##### 废物流

###### 拆除的失效胶条废物 (`removed_gland_waste`)

记录实际弹性体及附着残留状态和接收方。失效胶条属于本次维修拆除的既存主体，不是新购橡胶或避免材料信用。若已证明可再用，须采用明确的可用产品出口。

- 选定流：拆除的失效胶条废物
- 流属性/单位：质量 / kg
- 数量规则：实测扣除皮重后的拆除胶条废物质量除以验收 L，并声明去向及处理/运输归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_prepare_waste`
- 来源：`dsbrown-strip-seal-replacement-2024`

范围证据需求：需要失效胶条实际称重、污染和去向证据；旧型材单位长度质量不自动等于新胶条单位长度质量。

##### 基本流

### 过程：装配匹配胶条并完成整条伸缩缝验收 (`gland_integration`)

#### 输入

##### 产品流

###### 合格保留桥梁伸缩缝槽腔交接 (`qualified_rails_input`)

通过交接 ID 接收两侧槽腔实际合格主体状态。关联过程时仅承担一次准备过程负担，不新增制造伸缩缝边梁型钢。

- 选定流：合格保留桥梁伸缩缝槽腔交接
- 流属性/单位：长度 / m
- 数量规则：实际接收的伸缩缝中心线覆盖除以验收 L，与 qualified_rails_transfer 配对；准备及装配通过条件均须关闭。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_install_gate`
- 来源：`dsbrown-strip-seal-replacement-2024`; `dsbrown-l2-installation-2024`

范围证据需求：需要配对交接几何、完好性及保管/验收记录，不设合成的一米内部投入。

###### 实际兼容的工厂制造弹性体条带密封胶条 (`gland_supply`)

记录供应界面的确切匹配胶条型材、弹性体配方/状态、工厂斜接、上翻段及端部几何。通用橡胶/树脂或模数式/新伸缩缝资产不是该供应构件。

- 选定流：实际兼容的工厂制造弹性体条带密封胶条
- 流属性/单位：质量 / kg
- 数量规则：扣除皮重后、对外退回抵扣之前的收货/领用总质量，除以验收 L；若通过长度取得，则使用实际同批次/型材单位长度质量证据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_install_materials`
- 来源：`dsbrown-strip-seal-replacement-2024`; `dsbrown-l2-installation-2024`

范围证据需求：需要实际型材/批次几何、材料证书及称重质量，或供应商/实测单位长度质量，并关闭切余、退回及存量平衡。

###### 实际规定润滑粘结剂供应混合物 (`adhesive_supply`)

记录当前兼容产品/批次及供应液体配方，例如代表工艺规定的 DSB1520。它不是通用油、纯溶剂或水性胶；组成不定义排放。

- 选定流：实际规定润滑粘结剂供应混合物
- 流属性/单位：质量 / kg
- 数量规则：扣除容器皮重后、对外退回抵扣之前的收货/领用总质量，除以验收 L；区分施用/保留、收集残留、实际反应产物及物种释放。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_install_materials`
- 来源：`dsbrown-strip-seal-replacement-2024`; `dsbrown-l2-installation-2024`; `dsbrown-1520-sds-2020`

范围证据需求：需要实际兼容产品/SDS 修订版、领用重量及保留/废物/释放平衡；不设通用涂布率，不按 SDS 换算排放。

###### 实际供应的安装清理或必需试验用水 (`install_water`)

仅实际批准清理或业主要求的水试验需要时纳入。声明具体用途、供应界面、收集废物及实际排放；不虚构制造商水试验。

- 选定流：实际供应的安装清理或必需试验用水
- 流属性/单位：质量 / kg
- 数量规则：实测供水质量，或实测体积乘有依据的密度，除以验收 L；包含所有重复试验。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_install_materials`

范围证据需求：需要实际必需试验/清理方法、表读数、使用时的持续时间/流量，实际体积 m3、温度 °C、密度 kg/m3 及来源，以及捕集/接收路径；不设通用试验水量。

###### 实际购入的装配电力 (`install_electricity`)

有条件记录实际安装、清理、试验和防护设备的交付电力；排除供应商已含能源及已由燃料表示的现场发电。

- 选定流：实际购入的装配电力
- 流属性/单位：能量 / kWh
- 数量规则：可归属装配的分表实测交付 kWh 除以验收 L，包含就位失败及重复试验。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_install_energy`
- 来源：`dsbrown-strip-seal-replacement-2024`

范围证据需求：需要实际回路/设备电表差值、期间及分配，不以额定功率和生产率估算。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已验收机械锁定式桥梁条带密封胶条更换服务 (`accepted_gland_replacement`)

完整兼容连续胶条更换已达到两侧完全就位，工厂斜接、上翻段、端部验收合格，密封条/伸缩缝边梁型钢清洁且缺陷已关闭；获授权的业主检查及实际必需水密性试验已通过。这是保留主体上的服务长度。

- 选定流：已验收机械锁定式桥梁条带密封胶条更换服务
- 流属性/单位：长度 / m
- 数量规则：1 m
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_install_gate`
- 来源：`dsbrown-strip-seal-replacement-2024`; `dsbrown-l2-installation-2024`

范围证据需求：实际 L 测量及几何、型材/位移要求、整缝验收和签署移交构成参考定义证据；不设通用未来寿命或跨型材等效性。

##### 废物流

##### 基本流

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_service | 两个过程 | 不给保留伸缩缝边梁型钢、拆除失效胶条、废料或废物联产品信用。全部实际拆除、准备、返工和试验负担保留在维修活动内，服务分母仅为整缝验收长度 L。主体或伸缩缝不合格时没有已验收产出；披露其负担及最终去向，不得隐藏。 |  |
| material_custody | 两个过程 | 投入为扣除皮重后、对外退回抵扣之前的总量。按身份核对收货/领用与实际安装/使用、可用退回、废物、释放及期末存量。将有证据的期初存量负担转入本次维修，未用期末存量负担结转至后续使用；保留存量不得作为对外产品。采用收货或可归属内部领用，不能将同一材料两者重复计入。若另行计量仅已消耗燃料，则同一交换排除未消耗出口。 |  |
| shared_life | prepare_assets; install_assets | 按实际项目-过程服务量除以完整寿命服务量分配每项资产；列出 rail_qualification、gland_integration、全部其他项目及报告期间和寿命阶段。制造、维护、更换和报废覆盖一次。已完成寿命采用观察历史；在役资产采用有依据的前瞻剩余服务、更换、终止及报废情景，标注观察/预测并更新和开展敏感性分析。不得重复直接燃料、备件、工具或供应商已含资本设备。 |  |
| rework_routing | 两个过程 | 脏槽腔在 rail_qualification 返工；就位失败、撕裂、泄漏或不匹配在 gland_integration 返工，或经配对交接返回 rail_qualification。保留重复能源、材料和试验资源，拆除不合格材料按实际可用退回或分类废物离开，仅计一次最终验收长度。不得依赖无人承担的未来清理/试验关闭验收条件。 |  |
| periods | 两个过程 | 标记施工窗口、存放/待机/防护期间及重复进场；将全部投入、事件、产出和共用资产阶段关联到其期间及唯一责任归属。同次维修跨期间仅求和一次，不将服务产出年化，不虚构未来运营寿命。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_prepare_materials | rail_qualification | 供应总量、实际可用退回及保留存量 | receipt_issue_balance | event_id; job_id; joint_id; period_id; material_id; formulation; profile; batch; supplier_gate; instruction_revision; gross_kg; tare_kg; measured_volume_m3; density_kg_per_m3; temperature_C; density_source; opening_stock_kg; opening_stock_burden_record; closing_stock_burden_carryforward; receipt_kg; issue_kg; outward_return_kg; closing_stock_kg; installed_retained_kg; liquid_water_kg; dry_solids_kg; measured_length_m; mass_per_length_kg_per_m; transfer_id | 分别称量容器/车辆总重及皮重，保留票据、经校准表计和实际配方/型材证书。记录对外退回之前的数量，采用收货或可归属内部领用而不重复。将有证据的期初存量负担转入本次维修，未用期末存量负担结转；实体存量变化不得无说明地消除或新增上游负担。每种实际液体换算使用 measured_volume_m3、实际 temperature_C 及有依据的 density_kg_per_m3/density_source；kg = m3 乘 kg/m3，不设默认值。跨期间核对材料、切余、废物及实际释放；型材胶条单位长度质量须有批次证据。分别追踪供水、主体/天气来水及去向。 | kg; m; m3; kg/m3; °C | 每次事件、运行、收货/退回、试验及交接；各施工期间结账 | 整个维修活动含重复进场及失败；资产涵盖完整寿命 | 已识别伸缩缝/场地及实际供应商/设备群；共用负担含其他使用者 | per reference flow | 身份/单位可追溯，校准、带日期票据/日志及批准来源；完整性与不确定性；采用实际验收 L 分母且不重复责任归属 |
| cp_prepare_energy | rail_qualification | 购入能源、实际燃料及外部压缩空气 | meter_and_fuel_balance | event_id; job_id; period_id; equipment_id; provider_gate; fuel_identity; measured_volume_m3; density_kg_per_m3; temperature_C; density_source; opening_fuel_kg; opening_stock_burden_record; closing_stock_burden_carryforward; receipt_fuel_kg; closing_fuel_kg; returned_fuel_kg; collected_unburned_fuel_waste_kg; uncontained_unburned_fluid_release_kg; incident_total_kg; recovered_incident_waste_kg; recovered_incident_return_kg; retained_incident_stock_kg; other_unburned_outlet_kg; burned_fuel_kg; electricity_start_kWh; electricity_end_kWh; supplied_air_m3; metered_air_pressure_kPa; metered_pressure_basis; reference_air_pressure_kPa; reference_pressure_basis; atmospheric_pressure_kPa; metered_air_temperature_C; reference_air_temperature_C; metered_air_moisture; reference_air_moisture; air_conversion_source; service_time_h; shared_consumers; attribution_evidence | 计量交付电力；称量实际燃料，或用实际 temperature_C 及有依据的 density_kg_per_m3/density_source 换算 measured_volume_m3；kg = m3 乘 kg/m3。平衡互斥出口：全部收集未燃烧燃料废物、实际未围控未燃烧液体释放及其他独立未燃烧出口仅扣减一次。溢漏总量仅作审计分项；已回收废物/退回/保留存量各归其出口一次，不再次扣减。期初存量负担转入、未用期末存量负担结转，采用收货或可归属内部领用且不重复。独立于总投入推导已燃烧活动量。外购空气按声明的压力/温度/湿度状态计量：记录计量及参考压力为绝压或表压，换算需要时记录实际大气压，记录两端温度/湿度及适用换算来源。不允许默认参考状态或压力基准；现场压缩另由燃料/电力承担。记录全部运行、待机/防护、失效工作及试验期间、实际共用分配和供应商已含边界。 | kg; kWh; m3; kg/m3; kPa; °C; h | 每次事件、运行、收货/退回、试验及交接；各施工期间结账 | 整个维修活动含重复进场及失败；资产涵盖完整寿命 | 已识别伸缩缝/场地及实际供应商/设备群；共用负担含其他使用者 | per reference flow | 身份/单位可追溯，校准、带日期票据/日志及批准来源；完整性与不确定性；采用实际验收 L 分母且不重复责任归属 |
| cp_prepare_assets | rail_qualification | 完整寿命设备提供份额及归属运输 | asset_life_and_leg_ledger | asset_id; event_id; period_id; lifecycle_phase; consuming_node; other_job_id; node_service_h; complete_life_service_h; observed_service_h; forecast_remaining_h; manufacture_scope; maintenance_scope; replacement_event; termination_scenario; eol_scope; forecast_source; uncertainty; sensitivity; provider_gate; cargo_id; cargo_gross_kg; cargo_tare_kg; leg_km; empty_leg_treatment; shared_load_share; covered_elsewhere | 识别每项资产及跨项目/期间的全部使用者。保留观察历史；在役资产须论证预测剩余服务、更换、终止和报废，区分观察与预测并记录分母来源、不确定性及敏感性。每个提供份额组成只归属一次，排除其他行已含直接燃料/备件。运输采用实测净货物、有依据路段距离、共载分配及供应商已含服务。缺少寿命证据/分母时不得完成数据集。 | item; h; kg; km; kg*km | 每次事件、运行、收货/退回、试验及交接；各施工期间结账 | 整个维修活动含重复进场及失败；资产涵盖完整寿命 | 已识别伸缩缝/场地及实际供应商/设备群；共用负担含其他使用者 | per reference flow | 身份/单位可追溯，校准、带日期票据/日志及批准来源；完整性与不确定性；采用实际验收 L 分母且不重复责任归属 |
| cp_prepare_gate | rail_qualification | 两侧保留合格槽腔主体交接 | inspection_transfer | joint_id; transfer_id; period_id; rail_profile; gland_profile; movement_duty; measured_length_m; upturn_geometry; miter_geometry; channel_condition; splice_condition; sharp_edge_condition; gap_mm; ambient_temperature_C; pavement_temperature_C; instruction_revision; approval_criteria; tolerance; rejected_length_m; rework_event; responsible_person; handoff_time | 采用可追溯测量实测缝/胶条中心线及几何。拆除及实际清理后检查两侧槽腔接头/边缘，依据当前选定说明/业主准则记录保留主体完好性与实际型材、缝宽和天气适宜性。签署两侧槽腔合格确认并配对交接；脏槽腔重复清理，重大损坏停止该工艺。 | m; mm; °C | 每次事件、运行、收货/退回、试验及交接；各施工期间结账 | 整个维修活动含重复进场及失败；资产涵盖完整寿命 | 已识别伸缩缝/场地及实际供应商/设备群；共用负担含其他使用者 | per reference flow | 身份/单位可追溯，校准、带日期票据/日志及批准来源；完整性与不确定性；采用实际验收 L 分母且不重复责任归属 |
| cp_prepare_waste | rail_qualification | 废物、实际基本流物种及事故分项 | weighing_sampling_factor | event_id; job_id; period_id; stream_id; identity; formulation; contamination; gross_kg; tare_kg; water_kg; dry_solids_kg; receiver; custody_time; treatment_scope; transport_scope; species; cas; particle_fraction; receiving_compartment; release_mass_kg; concentration_kg_per_m3; discharge_m3; activity_unit; activity_quantity; factor_kg_per_activity; factor_source; factor_applicability; capture_fraction; retained_kg; incident_total_kg; collected_unburned_fuel_waste_kg; uncontained_unburned_fluid_release_kg; recovered_incident_waste_kg; recovered_incident_return_kg; retained_incident_stock_kg; other_unburned_outlet_kg; air_incident_kg; water_incident_kg; soil_incident_kg; residual_kg; uncertainty | 各外运废物流扣除皮重称量，并保留实际污染/处理接收联单。识别实际环境物质、粒径及接收区室，采用计量或单位兼容且适用的活动因子。区分收集废物与未捕集释放；事故总量仅作审计分项。已回收未燃烧燃料归入收集废物、可用退回或期末存量一次，实际未围控燃料液体释放归入其独立互斥出口；已燃烧量计算不得再次扣减溢漏总量。分别核对干固体、水、化学品及天气/主体贡献；调查残差而不将其声明为排放。SDS 比例及职业暴露限值不是释放因子。 | kg; m3; kg/m3; 实际活动单位 | 每次事件、运行、收货/退回、试验及交接；各施工期间结账 | 整个维修活动含重复进场及失败；资产涵盖完整寿命 | 已识别伸缩缝/场地及实际供应商/设备群；共用负担含其他使用者 | per reference flow | 身份/单位可追溯，校准、带日期票据/日志及批准来源；完整性与不确定性；采用实际验收 L 分母且不重复责任归属 |
| cp_install_materials | gland_integration | 供应总量、实际可用退回及保留存量 | receipt_issue_balance | event_id; job_id; joint_id; period_id; material_id; formulation; profile; batch; supplier_gate; instruction_revision; gross_kg; tare_kg; measured_volume_m3; density_kg_per_m3; temperature_C; density_source; opening_stock_kg; opening_stock_burden_record; closing_stock_burden_carryforward; receipt_kg; issue_kg; outward_return_kg; closing_stock_kg; installed_retained_kg; liquid_water_kg; dry_solids_kg; measured_length_m; mass_per_length_kg_per_m; transfer_id | 分别称量容器/车辆总重及皮重，保留票据、经校准表计和实际配方/型材证书。记录对外退回之前的数量，采用收货或可归属内部领用而不重复。将有证据的期初存量负担转入本次维修，未用期末存量负担结转；实体存量变化不得无说明地消除或新增上游负担。每种实际液体换算使用 measured_volume_m3、实际 temperature_C 及有依据的 density_kg_per_m3/density_source；kg = m3 乘 kg/m3，不设默认值。跨期间核对材料、切余、废物及实际释放；型材胶条单位长度质量须有批次证据。分别追踪供水、主体/天气来水及去向。 | kg; m; m3; kg/m3; °C | 每次事件、运行、收货/退回、试验及交接；各施工期间结账 | 整个维修活动含重复进场及失败；资产涵盖完整寿命 | 已识别伸缩缝/场地及实际供应商/设备群；共用负担含其他使用者 | per reference flow | 身份/单位可追溯，校准、带日期票据/日志及批准来源；完整性与不确定性；采用实际验收 L 分母且不重复责任归属 |
| cp_install_energy | gland_integration | 购入能源、实际燃料及外部压缩空气 | meter_and_fuel_balance | event_id; job_id; period_id; equipment_id; provider_gate; fuel_identity; measured_volume_m3; density_kg_per_m3; temperature_C; density_source; opening_fuel_kg; opening_stock_burden_record; closing_stock_burden_carryforward; receipt_fuel_kg; closing_fuel_kg; returned_fuel_kg; collected_unburned_fuel_waste_kg; uncontained_unburned_fluid_release_kg; incident_total_kg; recovered_incident_waste_kg; recovered_incident_return_kg; retained_incident_stock_kg; other_unburned_outlet_kg; burned_fuel_kg; electricity_start_kWh; electricity_end_kWh; supplied_air_m3; metered_air_pressure_kPa; metered_pressure_basis; reference_air_pressure_kPa; reference_pressure_basis; atmospheric_pressure_kPa; metered_air_temperature_C; reference_air_temperature_C; metered_air_moisture; reference_air_moisture; air_conversion_source; service_time_h; shared_consumers; attribution_evidence | 计量交付电力；称量实际燃料，或用实际 temperature_C 及有依据的 density_kg_per_m3/density_source 换算 measured_volume_m3；kg = m3 乘 kg/m3。平衡互斥出口：全部收集未燃烧燃料废物、实际未围控未燃烧液体释放及其他独立未燃烧出口仅扣减一次。溢漏总量仅作审计分项；已回收废物/退回/保留存量各归其出口一次，不再次扣减。期初存量负担转入、未用期末存量负担结转，采用收货或可归属内部领用且不重复。独立于总投入推导已燃烧活动量。外购空气按声明的压力/温度/湿度状态计量：记录计量及参考压力为绝压或表压，换算需要时记录实际大气压，记录两端温度/湿度及适用换算来源。不允许默认参考状态或压力基准；现场压缩另由燃料/电力承担。记录全部运行、待机/防护、失效工作及试验期间、实际共用分配和供应商已含边界。 | kg; kWh; m3; kg/m3; kPa; °C; h | 每次事件、运行、收货/退回、试验及交接；各施工期间结账 | 整个维修活动含重复进场及失败；资产涵盖完整寿命 | 已识别伸缩缝/场地及实际供应商/设备群；共用负担含其他使用者 | per reference flow | 身份/单位可追溯，校准、带日期票据/日志及批准来源；完整性与不确定性；采用实际验收 L 分母且不重复责任归属 |
| cp_install_assets | gland_integration | 完整寿命设备提供份额及归属运输 | asset_life_and_leg_ledger | asset_id; event_id; period_id; lifecycle_phase; consuming_node; other_job_id; node_service_h; complete_life_service_h; observed_service_h; forecast_remaining_h; manufacture_scope; maintenance_scope; replacement_event; termination_scenario; eol_scope; forecast_source; uncertainty; sensitivity; provider_gate; cargo_id; cargo_gross_kg; cargo_tare_kg; leg_km; empty_leg_treatment; shared_load_share; covered_elsewhere | 识别每项资产及跨项目/期间的全部使用者。保留观察历史；在役资产须论证预测剩余服务、更换、终止和报废，区分观察与预测并记录分母来源、不确定性及敏感性。每个提供份额组成只归属一次，排除其他行已含直接燃料/备件。运输采用实测净货物、有依据路段距离、共载分配及供应商已含服务。缺少寿命证据/分母时不得完成数据集。 | item; h; kg; km; kg*km | 每次事件、运行、收货/退回、试验及交接；各施工期间结账 | 整个维修活动含重复进场及失败；资产涵盖完整寿命 | 已识别伸缩缝/场地及实际供应商/设备群；共用负担含其他使用者 | per reference flow | 身份/单位可追溯，校准、带日期票据/日志及批准来源；完整性与不确定性；采用实际验收 L 分母且不重复责任归属 |
| cp_install_gate | gland_integration | 整缝验收及接收主体交接 | inspection_test_handback | joint_id; transfer_id; period_id; rail_profile; gland_profile; movement_duty; measured_length_m; upturn_geometry; miter_geometry; gap_mm; ambient_temperature_C; pavement_temperature_C; adhesive_product; adhesive_batch; instruction_revision; setting_time_h; seating_both_sides; damage_twist_stretch; endpoint_condition; excess_adhesive_removed; tape_removed; test_required; test_method; test_quantity; test_unit; test_duration_h; test_threshold; test_tolerance; test_result; defect_id; rework_event; closure_evidence; responsible_person; handback_time | 配对接收的合格槽腔覆盖。测量包含已声明工厂几何的完整验收中心线 L；检查两侧锁定头、连续性、斜接、上翻段、端部及清理。记录实际固化/检查要求和每项业主必需试验的方法、数量/单位、持续时间、阈值/容差、责任及结果。重复处理失败并在签署维修移交前关闭缺陷；不从制造商指导中推断试验要求。 | m; mm; °C; h; 实际试验单位 | 每次事件、运行、收货/退回、试验及交接；各施工期间结账 | 整个维修活动含重复进场及失败；资产涵盖完整寿命 | 已识别伸缩缝/场地及实际供应商/设备群；共用负担含其他使用者 | per reference flow | 身份/单位可追溯，校准、带日期票据/日志及批准来源；完整性与不确定性；采用实际验收 L 分母且不重复责任归属 |
| cp_install_waste | gland_integration | 废物、实际基本流物种及事故分项 | weighing_sampling_factor | event_id; job_id; period_id; stream_id; identity; formulation; contamination; gross_kg; tare_kg; water_kg; dry_solids_kg; receiver; custody_time; treatment_scope; transport_scope; species; cas; particle_fraction; receiving_compartment; release_mass_kg; concentration_kg_per_m3; discharge_m3; activity_unit; activity_quantity; factor_kg_per_activity; factor_source; factor_applicability; capture_fraction; retained_kg; incident_total_kg; collected_unburned_fuel_waste_kg; uncontained_unburned_fluid_release_kg; recovered_incident_waste_kg; recovered_incident_return_kg; retained_incident_stock_kg; other_unburned_outlet_kg; air_incident_kg; water_incident_kg; soil_incident_kg; residual_kg; uncertainty | 各外运废物流扣除皮重称量，并保留实际污染/处理接收联单。识别实际环境物质、粒径及接收区室，采用计量或单位兼容且适用的活动因子。区分收集废物与未捕集释放；事故总量仅作审计分项。已回收未燃烧燃料归入收集废物、可用退回或期末存量一次，实际未围控燃料液体释放归入其独立互斥出口；已燃烧量计算不得再次扣减溢漏总量。分别核对干固体、水、化学品及天气/主体贡献；调查残差而不将其声明为排放。SDS 比例及职业暴露限值不是释放因子。 | kg; m3; kg/m3; 实际活动单位 | 每次事件、运行、收货/退回、试验及交接；各施工期间结账 | 整个维修活动含重复进场及失败；资产涵盖完整寿命 | 已识别伸缩缝/场地及实际供应商/设备群；共用负担含其他使用者 | per reference flow | 身份/单位可追溯，校准、带日期票据/日志及批准来源；完整性与不确定性；采用实际验收 L 分母且不重复责任归属 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_length_intensity | 所有清单行 | 对每个已识别交换，将其本次维修可归属原生单位数量 Q 除以完整伸缩缝验收长度 L，单位 m，保留原生单位/m。参考定义为1 m。重复工作与各期间仅求和一次，不汇总异质身份。内部覆盖为实际配对交接长度除以 L。 | Q; L; 对应过程协议; cp_install_gate | 每1 m 已验收服务的原生单位强度 |  |
| calc_gland_mass | gland_supply | 胶条质量 kg = 实际供应胶条长度 m 乘有证据的同批次/型材单位长度质量 kg/m，或直接校准称重。包含实际工厂几何，不假定弹性拉伸或通用橡胶密度。采用扣除皮重后、退回抵扣之前的供应总量。 | cp_install_materials; measured_length_m; mass_per_length_kg_per_m | 实际供应胶条 kg，再除以 L |  |
| calc_fuel | prepare_fuel; install_fuel; prepare_air_release; install_air_release | 已燃烧燃料 kg = 期初燃料 + 收货总量 - 期末燃料 - 对外可用退回 - 全部收集未燃烧燃料废物 - 实际未围控未燃烧液体释放 - 其他独立未燃烧出口。各出口互斥。溢漏总量仅作审计分项，绝不额外扣减：已回收部分仅一次计入收集未燃烧废物、可用退回或期末存量，未围控部分仅一次计入实际未燃烧液体释放。保留事故残留属于期末存量或另一独立互斥未燃烧出口。期初存量负担转入、期末负担结转；记录收货或可归属内部领用而不重复。排除供应商已含燃料。 | cp_prepare_energy; cp_install_energy; cp_prepare_waste; cp_install_waste | 与投入总质量 kg 分开的已燃烧燃料活动量 kg |  |
| calc_asset_share | prepare_assets; install_assets | 每项实际资产的提供份额 item =1 item 乘本项目本过程服务 h，除以完整寿命服务 h，再除以验收 L。在役资产完整寿命服务包含全部观察历史及有依据的预测剩余服务。完整提供份额涵盖制造、维护、更换及报废一次，排除其他行已归属直接数量。须使用相同服务单位并覆盖全部使用者/阶段。 | cp_prepare_assets; cp_install_assets; node_service_h; complete_life_service_h | 每 m 的资产件数份额 item |  |
| calc_transport | prepare_transport; install_transport | 运输 kg*km = 按相同供应商/方式服务求和实际净货物 kg 乘路段 km，再除以 L。保留实际空驶/共载分配和边界。已核实的 t*km 单位因子为每 t*km 对应1000 kg*km。 | cp_prepare_assets; cp_install_assets; cargo_gross_kg; cargo_tare_kg; leg_km | 按实际服务区分的 kg*km 每 m |  |
| calc_release | prepare_air_release; prepare_water_release; install_air_release; install_water_release | 各物质/接收区室的释放 kg = 实测释放质量，或实际单位兼容活动量乘有依据适用因子 kg/活动单位，或浓度 kg/m3 乘实际排放 m3。选择一条有依据的路径且单位兼容，再除以 L。核对保留/收集/捕集材料及实际反应/天气项。SDS 组成和未表征残差不是释放因子。 | cp_prepare_waste; cp_install_waste; 实际活动; 适用因子; 接收区室 | 每 m 的具体物种释放 kg |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| identity_quality | 所有清单行 | 将变量卡展开为每种实际独立材料、配方、废物流、服务或基本流物种/接收区室。最终交换绑定前核实具体身份、属性及单位；泛称占位符不是最终数据集交换。 | 实际产品/伸缩缝边梁型钢/胶条证书、当前 SDS、供应商界面及身份详情核实 |
| gate_quality | rail_qualification; gland_integration | 保留配对交接、主体完好性/型材适宜性及整缝就位、连续性和清理证据；仅实际业主必需试验须声明方法、阈值、容差和责任。验收 L 排除未解决不合格产出。 | cp_prepare_gate; cp_install_gate; 签署缺陷关闭和授权移交 |
| balance_quality | 两个过程 | 按身份核对扣除皮重后的收货/领用总量、实际使用/安装、对外退回、保留存量、废物及物种释放；不得将存量作为产品、重复抵扣、将捕集废物作为释放或将残差作为排放。 | cp_prepare_materials; cp_install_materials; cp_prepare_waste; cp_install_waste; 质量/长度及水/干固体平衡 |
| life_quality | prepare_assets; install_assets | 缺少完整寿命覆盖/服务分母不得完成数据集；可论证未来阶段，但不可假装已观察。记录预测/观察标识、来源、更新触发及敏感性。 | cp_prepare_assets; cp_install_assets; 阶段/项目/期间台账及供应商范围核对 |
| coverage_quality | 所有清单行 | 逐卡记录实际适用、零、不适用或缺口状态及原因；量化计量、分配、预测及因子不确定性。重要身份、数量、捕集或业主必需验收缺失时，完整数据集不得最终定稿。 | 过程-事件-期间矩阵、校准、来源修订版及由实际记录关闭的范围证据需求 |


## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_host | rail_qualification | 主体完好性、型材/缝宽/天气适宜性无支持，两侧槽腔准备不完整或交接未配对时不通过。伸缩缝边梁型钢、缝口锚固区、锚固件重大损伤须另行界定扩大工程，不得隐藏为清理。 | dsbrown-strip-seal-replacement-2024; dsbrown-l2-installation-2024 |
| validate_acceptance | gland_integration | 须有兼容供应胶条/粘结剂、两侧完整就位且无损伤/扭曲/拉伸、正确工厂几何/端部、多余胶及胶带清理、实际固化/业主检查及必需试验/缺陷关闭、签署移交及正值实测 L。局部泄漏/不合格整缝不产生验收 L。 | dsbrown-strip-seal-replacement-2024; dsbrown-l2-installation-2024 |
| validate_identity | 所有清单行 | 最终数据集交换须具有实际独立身份、核实 UUID/属性/单位及确切供应/接收状态。未知实际身份、通用橡胶/胶或未明确物种污染不是固定匹配。候选语义缺口解决之前须明确保留。 |  |
| validate_custody | 两个过程 | 检查扣除皮重后、对外退回抵扣之前的总投入，实际存量/安装/废物/释放闭合，型材特定单位长度质量和水/干固体平衡。区分燃料领用总量与已燃烧活动量及互斥未燃烧废物/液体释放出口；溢漏总量仅审计，不再扣减。期初存量负担转入、期末负担结转；不得将推断残差作为释放或将 SDS 组成作为排放。 | dsbrown-1520-sds-2020 |
| validate_shared_life | 两个过程 | 检查全部使用过程、项目、期间及完整寿命阶段，含观察/预测标识、有依据服务分母、更换/终止/报废情景及不确定性/敏感性。缺少覆盖不得完成定稿。检查供应商与直接燃料、备件、运输、资本设备不重复。 |  |
| validate_rework_period | 两个过程 | 将每个脏槽腔、不匹配/撕裂胶条、泄漏或试验失败追溯至发生过程、返工回路或实际出口；保留全部负担、关闭缺陷并跨期间仅计一次验收长度。不合格产出或无人承担的未来任务不是已验收移交。 |  |
| validate_range | 所有清单行 | 通过实际场地、型材、技术记录或适用外部定量证据解决每张卡的范围证据需求，明确报告缺失数量和不确定性。确切1 m 定义参考流，不是通用材料/能源数量。 |  |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset; background_dataset; 下游 process 和 lifecyclemodel 投影 |
| allowed_use | 已声明型材/位移要求的维修强度：合格保留单缝伸缩缝边梁型钢上整条胶条更换完整验收后的每1 m |
| excluded_use | 新桥或伸缩缝边梁型钢/缝口施工，全部 CPC54221 服务，模数式重建，仅胶条制造，桥梁未来使用，通用胶条寿命/性能声明或未完整验收泄漏缝 |
| required_metadata | PCR/版本；桥梁/缝/几何及验收 L；实际伸缩缝边梁型钢、胶条、粘结剂、清洁剂规格和修订版；缝宽/温度/施工期间；方法；供应商界面；实际试验/准则/责任及移交；参考流/属性/单位；来源及采集覆盖 |
| required_quality_disclosure | 每种实际身份/数量及范围证据；排除的主体历史；准备/返工/不合格路径；供应总量、退回、存量、废物、释放闭合；共用完整寿命观察/预测分配及不确定性/敏感性；运输/供应商重复检查；剩余缺口 |
| update_trigger | 型材、配方、伸缩缝边梁型钢状况或方法改变；说明/SDS/业主准则修订；供应商/废物去向变化；新增计量/因子；资产预测/终止或覆盖改变；新增缺陷/返工证据 |


## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UN Statistics Division, CPC Version3.0 explanatory notes, 30June2025, printed284–285; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 桥梁施工/修复/恢复分类背景；所选维修子范围更窄，无数量数据 |
| dsbrown-strip-seal-replacement-2024 | handbook | The D.S. Brown Company, Strip Seal Removal/Replacement, REV5/24,3pages; https://dsbrown.com/wp-content/uploads/2023/03/B_EJS_StripSealRemoval_INSTALL_v003.pdf | 实际拆除、清槽/有条件喷砂、伸缩缝边梁型钢准备、型材/天气条件、规定粘结剂、就位/斜接/上翻及清理；设备角色与开封容器退回限制；无通用资源数量 |
| dsbrown-l2-installation-2024 | handbook | The D.S. Brown Company, L2 Series Strip Seal Installation Procedure, REV04/24,1page; https://dsbrown.com/wp-content/uploads/2020/12/B_L2_Series_Strip_Seal_INSTALL_v003.pdf | L2 槽腔/锁定头就位、两侧、SSPA/SSCM 兼容性及型号特定的便于安装开口；也有本 PCR 排除的模数式用途 |
| dsbrown-1520-sds-2020 | handbook | The D.S. Brown Company, DSB1520 Lubricant Adhesive Safety Data Sheet, REV04/20, sections3,6–10,12–13; https://dsbrown.com/wp-content/uploads/2020/12/B_DPPS_Delastic_DSB1520LubricantAdhesive_SDS_v009-3.pdf | 供应混合物身份、溶剂/异氰酸酯组分、保留/收集/环境划分及处置证据需求；组成范围和暴露限值均不是排放因子 |
