---
pcr_id: pcr.construction-services.existing-concrete-dam-dry-installed-drained-pvc-geocomposite-upstream-face-waterproofing-rehabilitation-services
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 既有混凝土坝上游坝面干作业排水式PVC土工复合膜防渗修复服务


## 1. 范围与适用性

本PCR适用于结构合格的既有混凝土坝的一次完整修复服务：在干燥可达条件下安装外露工厂复合PVC与非织造土工布防渗层，采用机械锚固和张紧，形成水密周边及连续排水界面。保留坝体是既定母体状态。本服务通过集成膜、锚固、周边及排水组件，独立恢复上游表面防渗功能；这些构成一个完整责任，不得重复计为表面处理和组装两套清单。必要时必须有业主批准的实际降水位、停运及排水。排除新建坝、整体结构重建、堤坝铺盖、仅裂缝修复以及水下或流动水中垫层或拉链安装。不得推导避免坝体制造、损失发电抵扣或保证零渗漏。[carpi-dam-rehab; carpi-dry-execution; cazzuffi-geosynthetic-barriers]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.construction-services.existing-concrete-dam-dry-installed-drained-pvc-geocomposite-upstream-face-waterproofing-rehabilitation-services |
| classification_refs | CPC 3.0 54233; narrower |
| covered_products | 既有混凝土坝上游坝面干作业外露排水式PVC土工复合膜修复 |
| excluded_products | 新坝；水下或流动水方法；堤坝铺盖；仅裂缝处理；水库运营服务 |
| representative_product | 明确保留混凝土坝面上通过实际压力要求验收的膜、锚固、周边及排水系统 |
| production_route | 批准的干作业通行；基底鉴定及实际局部准备；排水及锚固；膜安装及现场焊缝；张紧与周边完成；试验、缺陷闭环及签署移交 |
| market_state | 已完成验收的修复服务，非单独膜供应或新建坝资产 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 声明保留混凝土坝上游坝面已验收防渗修复 |
| How much | 1 m2 |
| How well | 实际批准且兼容保留坝体、基底和水头的设计；符合项目判据的焊缝、锚固与张紧、周边及排水QA；缺陷与复验闭环并由业主签署验收。 |
| How long or cycle | 一次明确修复作业，自批准准备至签署验收，跨全部实际阶段与报告期；不承诺使用寿命 |
| reference_flow_link | `accepted_waterproofing` |

| 字段 | 值 |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | 已验收的混凝土坝上游坝面干作业排水式PVC土工复合膜防渗修复 |
| reference_flow_property | Area `93a60a56-a3c8-19da-a746-0800200c9a66` |
| reference_unit_group | Units of area `93a60a57-a3c8-18da-a746-0800200c9a66` |
| reference_unit | m2 |
| required_qualifiers | 坝体、场址及工作包ID; 保留结构状态; 实际水头与水位包络; 干作业通行与停运安排; 净展开覆盖及排除面积; 表面几何、穿透、焊缝与搭接; 工厂膜规格; 锚固设计与张紧; 周边压力设计; 排水布局与去向; 批准的QA判据、试验、缺陷、复验及签署验收日期 |

## 4. 计量与单位规则

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| net_area | accepted_waterproofing | Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2 | m2 | A > 0为竣工测量中独一净展开已验收防渗表面。排除搭接、层数、试片、购卷面积、未验收坝面及重复尝试；同一验收区域仅计一次。 |
| native_supply | liner_supply; anchor_profiles; anchor_fasteners; perimeter_seals; drain_components; additional_geonet; repair_auxiliaries; clean_test_supplies; fuel_supply | Actual supplied physical property | Actual native unit | 保留实际SKU数量与单位，区分最终安装材料、湿态使用或拌合、干态组分、固化状态、退回、废物及释放。不得推断面积、长度或件数至质量的换算；独立需要的换算保留实际数量与单位、密度或单件质量、状态、温度及来源。最终安装保留材料排除废物、释放与可用退回；湿态使用或拌合活动不可加总。工厂复合产品或套件与组分采购互斥。 |
| energy_preservation | electricity; fuel_supply; bounded_services; shared_assets | Actual compatible physical property | Actual compatible unit | 分别保留kWh、燃料实际供给单位、服务商原生单位和实测资产驱动量；不能以热值或Count替代缺失的能量、时间或服务支持。匹配实际数据集边界，独立核实全部交换支持身份。 |
| `count_unit_alias` | 存在时的计数交换 | Count | item | 本 PCR 的显示别名 item 表示已核实的物品数量单位组参考单位 Item(s)，系数为 1。具体数据集须保留实际参考单位身份；此书写别名不建立质量、面积或服务之间的等价关系。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 结构已鉴定适合批准修复的既有保留混凝土坝及水位状态，非新材料投入 |
| starting_condition_role | existing_asset_state |
| product_classification_scope | 坝体建设服务中的较窄修复子集，排除新整体资产及水下路线 |
| recursive_input_rule | 单独供给的同类服务需实际验收范围及上游数据集；不得递归采购本次相同整体作业，亦不得虚构既有坝体生产交换 |
| upstream_dataset_requirement | 为实际产品、公用工程、燃料、货运、服务商和资产分摊匹配兼容上游数据集，并核对边界及排除项 |
| disclosure | 坝体、场址及工作包ID；保留结构状态；实际水头与水位包络；干作业通行与停运安排；净展开覆盖及排除面积；表面几何、穿透、焊缝与搭接；工厂膜规格；锚固设计与张紧；周边压力设计；排水布局与去向；批准的QA判据、试验、缺陷、复验及签署验收日期 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| b_route | rehabilitate | 保留实际合格混凝土基底及承压与锚固设计。纳入实际准备、局部修补、经工程要求的独立缓冲或排水层、现场焊缝、张紧、周边及排水连续性。附加土工网仅在实际需要时纳入；工厂复合土工布已计入复合膜。 | carpi-dam-rehab; cazzuffi-geosynthetic-barriers |
| b_gate | accepted_waterproofing | 实际合格设计核实基底、锚固拔出或连接及适应压力的周边。项目实际要求的焊缝、连接、锚固、周边和排水试验须满足批准判据；签署业主移交前修复缺陷并复验。仅按实际批准移交要求纳入蓄水及渗漏观测；不能采用宣传保证或统一试验清单。 | carpi-dam-rehab; cazzuffi-geosynthetic-barriers |
| b_resources | rehabilitate | 负责截至验收的全部增量停运、降水位、排水、通行、围控、准备、清洗、焊接、固化、试验、返工、清场和实际水去向。服务商须披露付款范围内的实际资源和覆盖；未知不等于零。移交后运营不属于本服务；不得给予未来能源或节水抵扣。 | carpi-dry-execution |
| b_period | rehabilitate | 跨全部报告期索引准备、安装、实际固化、试验、返工、清场及验收。核对期初期末库存和未关闭缺陷。共享资产覆盖所有消费方及期间的制造、维护、更换和寿命终结，非仅本作业。 |  |
| `boundary_atomic_completion` | 所有过程 | 本节的采集要求是必须执行的采集与适用性指令，不是聚合清单交换。完成前景数据集前，必须为每一种实际产品、废物流、物质及环境子区室建立独立原子流卡／交换。保留全部实际事件、上游负荷、退回及原生单位；所链接公式应按每个兼容身份分别执行。环境资源提取记为输入，环境释放记为输出。不得相加不同原生单位、用一个 UUID 代表整个采集池、将缺记录解释为零，或与已有具体卡重复计入。保留宿主的文件性接口仅传递状态，不形成新采购资产。适用成员未明确或未有证据证明不存在时，定量清单仍不完整；非强制筛查提示不能补造数量或化学组成。 |  |

### 条件性清单补全要求

以下标识符表示采集池或文件性状态台账。一个池可能有零个、一个或多个实际成员。须依据真实记录判断适用性，并为每个成员保留原有数量方法和采集协议；只有兼容的数量才能共同核对。下列原有可选筛查区间仅作为暂定复核提示，不得强加于不同材料或混合采集池。

#### 采集要求：机械锚固与张紧型材 (`anchor_profiles`)

过程／待建立交换的方向／类型：`rehabilitate` / `inputs` / `product`.

机械锚固与张紧型材。记录实际材料状态及归属的实物量。

- 采集对象：机械锚固与张紧型材
- 流属性/单位：Length `838aaa23-0117-11db-92e3-0800200c9a66` / m
- 数量规则：归属的型材供给毛长度 / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`cazzuffi-geosynthetic-barriers`

范围证据需求：需实际型材截面、钢材规格、设计间距、安装线长和切割损耗，并对应实际水头与荷载。

#### 采集要求：按件计量的锚固件、排水管件及实际辅助供给物 (`anchor_fasteners`)

过程／待建立交换的方向／类型：`rehabilitate` / `inputs` / `product`.

记录实际计件供给物，仅在原生Count供给时包括锚固组件、排水管件、修补套件或清洗试验用品。匹配return_count，套件组分不得再次采购。长度、面积、体积及质量计量供给物分别归属。

- 采集对象：按件计量的锚固件、排水管件及实际辅助供给物
- 流属性/单位：Count `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：归属的实际供给毛件数 / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`cazzuffi-geosynthetic-barriers`

范围证据需求：需实际SKU与原生Count、适用的锚固与基底批准、已安装与失败更换件数、服务商覆盖及匹配向外退回。

#### 采集要求：符合实际压力要求的周边压条与垫片 (`perimeter_seals`)

过程／待建立交换的方向／类型：`rehabilitate` / `inputs` / `product`.

符合实际压力要求的周边压条与垫片。记录实际材料状态及归属的实物量。

- 采集对象：符合实际压力要求的周边压条与垫片
- 流属性/单位：Length `838aaa23-0117-11db-92e3-0800200c9a66` / m
- 数量规则：归属的周边组件供给毛长度 / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`cazzuffi-geosynthetic-barriers`

范围证据需求：需分别识别压条和垫片SKU、拼接细节、坝顶及淹没边界长度和当地压力；不能假定统一承压等级。

#### 采集要求：排水集水器、导管与排放组件 (`drain_components`)

过程／待建立交换的方向／类型：`rehabilitate` / `inputs` / `product`.

仅记录实际按长度计量的集水器、导管和排放组件。独立按件供给的管件归属anchor_fasteners；不得虚构长度换算。

- 采集对象：排水集水器、导管与排放组件
- 流属性/单位：Length `838aaa23-0117-11db-92e3-0800200c9a66` / m
- 数量规则：归属的排水组件供给毛长度 / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`cazzuffi-geosynthetic-barriers`

范围证据需求：需批准的排水分区、管径、去向、检修点及实测长度；独立供给的管件保留实际原生计量台账。

#### 采集要求：实际需要的附加排水或防刺穿片材 (`additional_geonet`)

过程／待建立交换的方向／类型：`rehabilitate` / `inputs` / `product`.

实际需要的附加排水或防刺穿片材。记录实际材料状态及归属的实物量。

- 采集对象：实际需要的附加排水或防刺穿片材
- 流属性/单位：Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- 数量规则：归属的附加片材供给毛面积 / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`cazzuffi-geosynthetic-barriers`

范围证据需求：需实际工程要求及独立附加片材覆盖面积；工厂复合土工布已包含于复合膜供给，不得重复采购。

#### 采集要求：实际局部基底修补、锚固灌浆及焊缝辅助材料 (`repair_auxiliaries`)

过程／待建立交换的方向／类型：`rehabilitate` / `inputs` / `product`.

此处仅归属实际原生质量计量修补、灌浆或焊缝产品；实际计件套件或计体积液体供给归属匹配原生单位卡。工厂套件和单独组分采购互斥。

- 采集对象：实际局部基底修补、锚固灌浆及焊缝辅助材料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的产品供给毛质量 / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`

范围证据需求：需实际SKU、配方与状态、修补体积、表面状态、批准加料量、拌合及固化产出与废物；不设通用粉水比。

#### 采集要求：准备、清洗、围控、试验及包装耗材 (`clean_test_supplies`)

过程／待建立交换的方向／类型：`rehabilitate` / `inputs` / `product`.

仅记录原生质量计量的准备、清洗、围控、试验及包装耗材。实际Count、Area、Length或Volume供给物使用分别匹配的原生单位供给卡并匹配退回；这些采购互斥。

- 采集对象：准备、清洗、围控、试验及包装耗材
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的耗材供给毛质量 / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`

范围证据需求：需实际按质量计量的SKU消耗及供给出口状态，包括失败焊缝及复验；不得强制Count、Area、Length或Volume换算至质量。

#### 采集要求：作业设备实际燃料供给 (`fuel_supply`)

过程／待建立交换的方向／类型：`rehabilitate` / `inputs` / `product`.

记录实际质量计量燃料毛供给及互斥库存出口状态。原生Volume燃料归属fuel_volume_supply。无独立需要的计量角色及实际密度、状态、温度与来源，不得强制质量换算。

- 采集对象：作业设备实际燃料供给
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的燃料供给毛质量 / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_fuel`

范围证据需求：需实际燃料等级、期初库存、收货、期末库存、退回、燃烧、未燃废物和损失；体积换算需实测密度、状态及温度。

#### 采集要求：实际有界的工程、通行、安装或试验服务 (`bounded_services`)

过程／待建立交换的方向／类型：`rehabilitate` / `inputs` / `product`.

实际有界的工程、通行、安装或试验服务。记录实际材料状态及归属的实物量。

- 采集对象：实际有界的工程、通行、安装或试验服务
- 流属性/单位：Actual verified service property / actual native service unit
- 数量规则：归属的已完成原生服务量 / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_provider`

范围证据需求：需具体服务单位、已核实且兼容的支持身份、已完成范围、实际资源、上游覆盖及排除项；价格或人工小时不能证明计件服务。

#### 采集要求：归属的通行、泵送、焊接及试验资产 (`shared_assets`)

过程／待建立交换的方向／类型：`rehabilitate` / `inputs` / `product`.

本小时制服务卡仅适用于实际兼容实测运行小时驱动量，以及每h覆盖全寿命制造、维护、更换及寿命终结的服务商或上游服务。租期或价格不是实测运行驱动量。若实际驱动量或单位不同，保留实际原生清单并在最终定稿前独立核实兼容支持身份。

- 采集对象：归属的通行、泵送、焊接及试验资产
- 流属性/单位：Time / h
- 数量规则：仅按声明的全寿命每h覆盖，采用实际归属兼容实测服务小时 / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_assets`

范围证据需求：需覆盖所有消费作业、节点及期间的完整制造、维护、更换和寿命终结，以及完整寿命分母与有依据的剩余寿命；不设统一寿命。

#### 采集要求：其他实际按面积计量的辅助供给物 (`native_area_supplies`)

过程／待建立交换的方向／类型：`rehabilitate` / `inputs` / `product`.

仅包括尚未由liner_supply或additional_geonet归属的实际原生Area供给；每SKU及范围仅有一个归属方。

- 采集对象：其他实际按面积计量的辅助供给物
- 流属性/单位：Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- 数量规则：归属的辅助供给毛面积 / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`

范围证据需求：需实际独立围控、防护或试验片材SKU及原生Area，区分工厂复合膜和附加排水片材；核对return_area与废物。

#### 采集要求：其他实际按长度计量的辅助供给物 (`native_length_supplies`)

过程／待建立交换的方向／类型：`rehabilitate` / `inputs` / `product`.

仅记录实际独立供给的线性辅助物；不得将计件管件改记长度。

- 采集对象：其他实际按长度计量的辅助供给物
- 流属性/单位：Length `838aaa23-0117-11db-92e3-0800200c9a66` / m
- 数量规则：归属的辅助供给毛长度 / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`

范围证据需求：需实际线性焊缝、试验或准备供给SKU与原生Length，区分锚固型材、周边和排水，并匹配return_length。

#### 采集要求：实际按体积计量的修补或清洗产品 (`native_volume_supplies`)

过程／待建立交换的方向／类型：`rehabilitate` / `inputs` / `product`.

仅包括实际原生Volume液体产品；job_water与fuel_volume_supply分别归属。匹配return_volume；供给产品与围控废水为不同状态。

- 采集对象：实际按体积计量的修补或清洗产品
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：归属的产品供给毛体积 / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`

范围证据需求：需实际非燃料非水液体SKU、原生Volume、库存及使用、捕集、废物、释放状态；仅为独立需要角色且具实测密度、状态、温度及来源时换算质量。

#### 采集要求：实际原生体积计量燃料供给 (`fuel_volume_supply`)

过程／待建立交换的方向／类型：`rehabilitate` / `inputs` / `product`.

实际Volume燃料供给保留原生上游清单；同一SKU及范围与质量供给互斥。匹配return_volume及cp_fuel最终去向。

- 采集对象：实际原生体积计量燃料供给
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：归属的原生燃料供给毛体积 / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_fuel`

范围证据需求：需实际燃料SKU、原生Volume期初、收货和期末、向外可用退回、实测或审计燃烧、未燃废物和未围控损失及不确定性；仅独立需要且有依据时换算质量。

#### 采集要求：可用片材向作业外退回 (`return_area`)

过程／待建立交换的方向／类型：`rehabilitate` / `outputs` / `product`.

可用片材向作业外退回。记录实际材料状态及归属的实物量。

- 采集对象：可用片材向作业外退回
- 流属性/单位：Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- 数量规则：实际向外退回的可用数量 / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`

范围证据需求：需匹配实际供给SKU与原生单位、外部接收证明、状态及所选保留毛供给与出口或仅消耗约定；期末库存不是向外退回。

#### 采集要求：可用型材、密封或排水组件向作业外退回 (`return_length`)

过程／待建立交换的方向／类型：`rehabilitate` / `outputs` / `product`.

可用型材、密封或排水组件向作业外退回。记录实际材料状态及归属的实物量。

- 采集对象：可用型材、密封或排水组件向作业外退回
- 流属性/单位：Length `838aaa23-0117-11db-92e3-0800200c9a66` / m
- 数量规则：实际向外退回的可用数量 / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`

范围证据需求：需匹配实际供给SKU与原生单位、外部接收证明、状态及所选保留毛供给与出口或仅消耗约定；期末库存不是向外退回。

#### 采集要求：可用计件供给物向作业外退回 (`return_count`)

过程／待建立交换的方向／类型：`rehabilitate` / `outputs` / `product`.

可用计件供给物向作业外退回。记录实际材料状态及归属的实物量。

- 采集对象：可用计件供给物向作业外退回
- 流属性/单位：Count `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：实际向外退回的可用数量 / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`

范围证据需求：需匹配实际供给SKU与原生单位、外部接收证明、状态及所选保留毛供给与出口或仅消耗约定；期末库存不是向外退回。

#### 采集要求：可用计质量供给物或燃料向作业外退回 (`return_mass`)

过程／待建立交换的方向／类型：`rehabilitate` / `outputs` / `product`.

可用计质量供给物或燃料向作业外退回。记录实际材料状态及归属的实物量。

- 采集对象：可用计质量供给物或燃料向作业外退回
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实际向外退回的可用数量 / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_outlets`

范围证据需求：需匹配实际供给SKU与原生单位、外部接收证明、状态及所选保留毛供给与出口或仅消耗约定；期末库存不是向外退回。

#### 采集要求：可用计体积产品或燃料向作业外退回 (`return_volume`)

过程／待建立交换的方向／类型：`rehabilitate` / `outputs` / `product`.

可用计体积产品或燃料向作业外退回。记录实际材料状态及归属的实物量。

- 采集对象：可用计体积产品或燃料向作业外退回
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：实际向外可用原生体积 / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_outlets`

范围证据需求：需实际匹配供给SKU、单位、状态和温度、外部接收凭证及所选上游约定；期末保留回收液体不是向外退回。

#### 采集要求：实际分流废弃膜、修补残余物及作业废物 (`solid_waste`)

过程／待建立交换的方向／类型：`rehabilitate` / `outputs` / `waste`.

实际分流废弃膜、修补残余物及作业废物。记录实际材料状态及归属的实物量。

- 采集对象：实际分流废弃膜、修补残余物及作业废物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按类别及去向的实际外运废物质量 / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_outlets`

范围证据需求：需称量各废物类别，包括移除旧基底、边角料、失败焊缝拆除物、固化残余、包装及未燃燃料废物，并记录去向；不设通用回收抵扣。

#### 采集要求：实际围控的排水、清洗及试验废水 (`contained_water`)

过程／待建立交换的方向／类型：`rehabilitate` / `outputs` / `waste`.

实际围控的排水、清洗及试验废水。记录实际材料状态及归属的实物量。

- 采集对象：实际围控的排水、清洗及试验废水
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：按水质及去向的实际向外围控水体积 / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_water`

范围证据需求：需事件及阶段计量体积、污染、循环、保留库存及处理或排放证据；收集不是基本流释放。

#### 采集要求：向明确受纳介质的实际物质特定释放 (`direct_releases`)

过程／待建立交换的方向／类型：`rehabilitate` / `outputs` / `elementary`.

向明确受纳介质的实际物质特定释放。记录实际材料状态及归属的实物量。

- 采集对象：向明确受纳介质的实际物质特定释放
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按事件及介质的实际排放物质质量 / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_emissions`

范围证据需求：需实测物质或粒径身份与介质，或实际燃烧、粉尘、烟气、清洗剂和事故的有效活动因子或组成去向数据；安全读数或SDS不是排放量。

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| rehabilitate | 干作业表面防渗修复 | required | 合格保留混凝土坝面上的实际干作业通行 | 恢复既定上游表面；负责准备、连接、排水、试验及缺陷闭环 | accepted_waterproofing |

### 过程：干作业防渗修复 (`rehabilitate`)

既定母体为已鉴定合格的既有混凝土坝面。本节点将独立组件角色连接为已完成外露排水式防渗系统，涵盖实际连接或焊接服务及成品表面验收。负责局部准备与修补、干作业通行、共享设备、试验取样损耗、缺陷组件及全部返工。不创建新坝母体产品采购或额外内部成品表面输出。失败焊缝、锚固、周边或排水仍为拒收状态；修复和复验循环携带相同缺陷及作业ID，实际废弃物和可用退回经下述卡退出。

#### 输入
##### 产品流

###### 工厂PVC与非织造土工布复合膜供给 (`liner_supply`)

工厂PVC与非织造土工布复合膜供给。记录实际材料状态及归属的实物量。

- 选定流：工厂PVC与非织造土工布复合膜供给
- 流属性/单位：Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- 数量规则：归属的复合膜供给毛面积 / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`cazzuffi-geosynthetic-barriers`

范围证据需求：需同一坝面几何条件下的卷宽、卷长、复合结构、厚度、裁切图、搭接及损耗；历史典型厚度不能用作采购系数。

###### 准备、清洗、修补和试验供水 (`job_water`)

准备、清洗、修补和试验供水。记录实际材料状态及归属的实物量。

- 选定流：准备、清洗、修补和试验供水
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：归属的供水体积 / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_water`

范围证据需求：需按阶段计量并包含服务商用水，区分循环水及最终去向；水库水状态不是采购投入。

###### 包括服务商的实际作业用电 (`electricity`)

包括服务商的实际作业用电。记录实际材料状态及归属的实物量。

- 选定流：包括服务商的实际作业用电
- 流属性/单位：Energy / kWh
- 数量规则：归属的计量电量 / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy`

范围证据需求：需实际焊接、泵送、通行、照明和试验计量，或有依据的设备负荷记录、电源结构及失败尝试用电。

###### 实际作业货运服务 (`freight`)

实际作业货运服务。记录实际材料状态及归属的实物量。

- 选定流：实际作业货运服务
- 流属性/单位：mass*distance `118f2a40-50ec-457c-aa60-9bc6b6af9931` / kg*km
- 数量规则：归属的实际质量距离运输周转量 / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_freight`

范围证据需求：需实际净货物质量、各运输段、距离、载荷分摊、空驶及退货，并对应运输数据集覆盖范围。

#### 输出
##### 产品流

###### 已验收的混凝土坝上游坝面干作业排水式PVC土工复合膜防渗修复 (`accepted_waterproofing`)

已验收的混凝土坝上游坝面干作业排水式PVC土工复合膜防渗修复。记录实际材料状态及归属的实物量。

- 选定流：已验收的混凝土坝上游坝面干作业排水式PVC土工复合膜防渗修复
- 流属性/单位：Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- 数量规则：1 m2
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_acceptance`
- 来源：`carpi-dam-rehab`; `carpi-dry-execution`; `cazzuffi-geosynthetic-barriers`

范围证据需求：精确的1仅为参考归一化；实际正值A与项目焊缝、锚固、周边、排水及要求的蓄水观测必须证明验收。

##### 废物流

##### 基本流

## 7. 分配与副产品处理

| rule_id | 适用对象 | 规则 |
| --- | --- | --- |
| a_single | rehabilitate | 一个验收修复输出承担失败尝试、边角料、返工、更换及复验。废弃膜、失败焊缝、松动锚固、渗漏周边或堵塞排水在闭环前不得计入A。返工在rehabilitate内保留缺陷与事件链接；废弃物由产生事件经废物流退出，可用退回经匹配原生单位输出退出。不设通用副产品、再生材料或避免坝体抵扣。 |
| a_stock | rehabilitate | 对每一实际SKU、单位及期间，S = opening_stock + gross_receipts - tare - closing_stock，采用实际外部收货及结转归属库存。采用保留毛供给与出口约定：S保留实际向外可用退回、未退回废物和损失的上游负担，各出口仅记录一次。若选择兼容的仅消耗上游约定，仅扣减匹配向外可用退回一次，并消除其重复产品输出负担或抵扣，披露核对。内部领用不是采购；期末回收库存不是向外出口。 |
| a_shared | shared_assets; bounded_services | 每一共享通行、泵、焊机和试验资产保留完整的全部作业、节点及期间消费方名册。采用实际兼容作业驱动量 / 全寿命兼容驱动量，分摊完整制造 + 维护 + 更换 + 寿命终结负担，纳入所有消费方。提供完整已观测寿命，或已观测历史加有证据的余期、更换、终止与寿命终结，并提供不确定性、敏感性和更新。寿命覆盖或分母缺失阻止最终数据集。服务商已含资产、公用工程、货运、备件及直接资源仅有一个归属方，不得重复。 |
| a_period | rehabilitate | 每一收货、库存、投入、资产使用、输出及例行或事故事件归属实际作业、阶段和期间，使用稳定ID衔接余额。前期工作结转至最终独一验收表面，不创建中间验收面积。使用有文件依据的物理驱动量及期间边界排除无关水库运营。 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_acceptance | rehabilitate | accepted_waterproofing | primary_record | job_id; site_id; asset_id; campaign_id; batch_id; event_id; phase_id; period_id; surface_id; survey_geometry; gross_area; excluded_area; A; area_unit; head_envelope; substrate_approval; seam_ids; anchor_ids; perimeter_ids; drain_ids; approved_criteria; results; defect_ids; retest_links; signed_handover; acceptance_date | 测量展开坝面，核对独一表面ID和签署的项目验收；保留全部所需试验与观测。按验收净展开A相除汇总实际归属原生数量，区分状态及去向。 | m2 | 每一实际事件及核对阶段与期间 | 截至验收的完整作业及适用时的全消费方资产寿命 | 明确坝体作业、实际服务商及关联资产 | 每参考流 | 竣工测量、批准设计、校准试验及业主签署 |
| cp_material | rehabilitate | liner_supply; anchor_profiles; anchor_fasteners; perimeter_seals; drain_components; additional_geonet; repair_auxiliaries; clean_test_supplies; return_area; return_length; return_count; native_area_supplies; native_length_supplies; native_volume_supplies | primary_record | job_id; site_id; asset_id; campaign_id; batch_id; event_id; phase_id; period_id; sku_id; product_state; native_quantity; native_unit; opening_stock; gross_receipts; tare; closing_stock; outward_usable_return; installed_retained; intermediate_use; discarded; released; density; density_unit; temperature; conversion_source; supplier; package_component_scope; recipe_approval; defect_link; temperature_unit | 按SKU核对供应商收货、可追溯原生单位库存及实测安装与出口台账；包含每一项服务商付费材料。按验收净展开A相除汇总实际归属原生数量，区分状态及去向。 | Actual native units | 每一实际事件及核对阶段与期间 | 截至验收的完整作业及适用时的全消费方资产寿命 | 明确坝体作业、实际服务商及关联资产 | 每参考流 | 交货与退回凭证、卷材和BOM尺寸、校准及批准配方与状态证据 |
| cp_water | rehabilitate | job_water; contained_water | primary_record | job_id; site_id; asset_id; campaign_id; batch_id; event_id; phase_id; period_id; water_source; supplied_volume; unit; retained_stock; recirculated_volume; dewatering_volume; outward_contained_volume; direct_discharge_volume; receiving_medium; quality; treatment_destination; provider_scope; meter_id | 按来源及阶段计量水；分别核对作业引发的水库降水位与排水、采购水、循环水、围控废水及直接排放。按验收净展开A相除汇总实际归属原生数量，区分状态及去向。 | m3 | 每一实际事件及核对阶段与期间 | 截至验收的完整作业及适用时的全消费方资产寿命 | 明确坝体作业、实际服务商及关联资产 | 每参考流 | 计量、许可、服务商记录、分析和去向凭证 |
| cp_fuel | rehabilitate | fuel_supply; fuel_volume_supply | primary_record | job_id; site_id; asset_id; campaign_id; batch_id; event_id; phase_id; period_id; fuel_sku; opening_stock; gross_receipts; tare; closing_stock; outward_usable_return; measured_burned_quantity; burned_native_unit; burn_method; burn_uncertainty; audited_fate_balance; unknown_loss_investigation; nonburned_waste; uncontained_loss; total_spill_audit; recovered_to_closing; native_quantity; native_unit; volume; volume_unit; density; density_unit; state; temperature; conversion_source; engine_id; temperature_unit | 记录实测燃烧量，或仅从完整审计且互斥的原生单位库存去向推导；保留不确定性并调查未知损失。独立需要换算时保留实际体积、单位、密度、密度单位、状态、温度及来源。总泄漏仅审计；回收保留泄漏归属期末。按验收净展开A相除汇总实际归属原生数量，区分状态及去向。 | Actual native fuel unit; kg or m3 only when actually measured | 每一实际事件及核对阶段与期间 | 截至验收的完整作业及适用时的全消费方资产寿命 | 明确坝体作业、实际服务商及关联资产 | 每参考流 | 库存、加注、退回日志、校准计量及损失事故报告 |
| cp_energy | rehabilitate | electricity | primary_record | job_id; site_id; asset_id; campaign_id; batch_id; event_id; phase_id; period_id; supply_id; meter_id; start_reading; end_reading; electricity_kwh; equipment_id; load; duty; operating_duration; duration_unit; allocation_driver; provider_scope | 对各归属电源包括服务商计量；设备估计需实际负荷、负载率及持续时间支持，避免电表与发电机重复。按验收净展开A相除汇总实际归属原生数量，区分状态及去向。 | kWh | 每一实际事件及核对阶段与期间 | 截至验收的完整作业及适用时的全消费方资产寿命 | 明确坝体作业、实际服务商及关联资产 | 每参考流 | 校准电表及带时间记录的设备台账 |
| cp_freight | rehabilitate | freight | primary_record | job_id; site_id; asset_id; campaign_id; batch_id; event_id; phase_id; period_id; shipment_id; leg_id; cargo_id; mass; mass_unit; distance; distance_unit; mode; load_share; empty_return; route; provider_scope | 采集实际交货、退回及废物运输段；核对净货物质量与服务商数据集覆盖。按验收净展开A相除汇总实际归属原生数量，区分状态及去向。 | kg*km | 每一实际事件及核对阶段与期间 | 截至验收的完整作业及适用时的全消费方资产寿命 | 明确坝体作业、实际服务商及关联资产 | 每参考流 | 运单、路线、载荷及数据集边界 |
| cp_provider | rehabilitate | bounded_services | primary_record | job_id; site_id; asset_id; campaign_id; batch_id; event_id; phase_id; period_id; provider_id; contract_scope; completed_result; native_quantity; native_unit; support_verification; upstream_coverage; excluded_resources; electricity; fuel; water; transport; assets; spares; owner_register | 要求有界已完成实物服务及匹配原生单位的上游清单；消除直接行前取得实际主要资源及明确覆盖和排除项。按验收净展开A相除汇总实际归属原生数量，区分状态及去向。 | Actual verified native service unit | 每一实际事件及核对阶段与期间 | 截至验收的完整作业及适用时的全消费方资产寿命 | 明确坝体作业、实际服务商及关联资产 | 每参考流 | 完成证明及可审计的服务商资源与覆盖记录 |
| cp_assets | rehabilitate | shared_assets | primary_record | job_id; site_id; asset_id; campaign_id; batch_id; event_id; phase_id; period_id; consumer_register; service_start; service_end; observed_history; evidenced_remainder; remainder_source; replacements; termination; end_of_life; manufacture_burden; maintenance_burden; replacement_burden; end_of_life_burden; job_driver; whole_life_driver; driver_unit; upstream_coverage; uncertainty; sensitivity; update_trigger | 记录每一实际资产完整全消费方寿命及兼容驱动分摊；核对服务商、租赁和备件覆盖。小时服务要求实际兼容实测运行小时及全寿命每h负担；租金或租期不能自动视为该驱动量。按验收净展开A相除汇总实际归属原生数量，区分状态及去向。 | h or actual compatible measured driver | 每一实际事件及核对阶段与期间 | 截至验收的完整作业及适用时的全消费方资产寿命 | 明确坝体作业、实际服务商及关联资产 | 每参考流 | 资产历史、维护、更换、寿命终结证据及有依据的未来覆盖 |
| cp_outlets | rehabilitate | return_mass; solid_waste; return_volume | primary_record | job_id; site_id; asset_id; campaign_id; batch_id; event_id; phase_id; period_id; material_id; supply_sku; native_quantity; native_unit; outlet_class; waste_mass; mass_unit; quality; destination; outward_receipt; return_match; upstream_convention; defect_link | 称量并分类实际废弃和移除物；保留原生单位可用退回凭证，区分期末库存与向外出口。按验收净展开A相除汇总实际归属原生数量，区分状态及去向。 | kg; actual native return unit | 每一实际事件及核对阶段与期间 | 截至验收的完整作业及适用时的全消费方资产寿命 | 明确坝体作业、实际服务商及关联资产 | 每参考流 | 过磅单、退回凭证、分类及接收设施证据 |
| cp_emissions | rehabilitate | direct_releases | primary_record | job_id; site_id; asset_id; campaign_id; batch_id; event_id; phase_id; period_id; substance_id; particle_size; medium; routine_incident; activity; activity_unit; measured_amount; amount_unit; factor; factor_unit; factor_source; composition; fate; captured; stock; returned; waste; released; detection_limit; uncertainty; composition_basis; fate_basis; composition_source; fate_source | 实测物质及介质释放，或采用有效且限定范围的活动因子或组成去向；一次排除捕集、库存、退回和废物。整体流体平衡与物质视图不可加总。按验收净展开A相除汇总实际归属原生数量，区分状态及去向。 | kg substance | 每一实际事件及核对阶段与期间 | 截至验收的完整作业及适用时的全消费方资产寿命 | 明确坝体作业、实际服务商及关联资产 | 每参考流 | 采样校准、实际因子适用性及事件核对 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_area | accepted_waterproofing | A = 独一验收净展开表面积之和；output = 1 m2。重复几何、焊缝搭接和重复作业不得增加A。 | survey_geometry; excluded_area; signed_handover; cp_acceptance | A; 1 m2 |  |
| c_supply | liner_supply; anchor_profiles; anchor_fasteners; perimeter_seals; drain_components; additional_geonet; repair_auxiliaries; clean_test_supplies; fuel_supply; native_area_supplies; native_length_supplies; native_volume_supplies; fuel_volume_supply | S = opening_stock + gross_receipts - tare - closing_stock；S保留实际兼容单位；inventory amount = attributable S / A。每一实物最终出口匹配一次；可用退回处理遵循a_stock。 | opening_stock; gross_receipts; tare; closing_stock; outward_usable_return; cp_material; cp_fuel; A | 每参考流归属供给数量 |  |
| c_burn | fuel_supply; fuel_volume_supply; direct_releases | 采用实际实测burned_quantity，或仅由完整审计的原生单位去向平衡推导burned_quantity = opening_stock + gross_receipts - tare - closing_stock - outward_usable_return - nonburned_waste - uncontained_loss。保留不确定性并调查未知损失；不明差额不是燃烧。对每一实际燃料SKU及状态，使用同一原生单位独立闭合各平衡；m3不是kg。仅独立需要的质量基排放因子或活动视图使用实测密度、单位、状态、温度及来源，且与原生供给或退回不可加总。上游燃料清单采用S，不采用burned_quantity。回收保留泄漏计入closing_stock；total_spill_audit不可加总。 | cp_fuel; fuel_sku; disjoint final fates | 实测或经审计的原生单位燃烧活动 |  |
| c_direct | job_water; electricity; bounded_services; return_area; return_length; return_count; return_mass; solid_waste; contained_water; return_volume | inventory amount = attributable actual physical quantity / A；保留各实测原生属性与单位，区分来源、状态、事件和去向。不得跨不兼容单位或范围对水流、退回库存或服务商资源抵销。 | cp_water; cp_energy; cp_provider; cp_material; cp_outlets; A | 每参考流原生清单数量 |  |
| c_transport | freight | transport work = 归属货物质量kg与实际运输段距离km的乘积之和；inventory amount = transport work / A。空驶与承运人范围仅匹配一次。 | cp_freight; mass; distance; A | 每参考流 kg*km |  |
| c_assets | shared_assets | life burden = manufacture_burden + maintenance_burden + replacement_burden + end_of_life_burden；job share = job_driver / whole_life_driver。仅对实际兼容小时驱动量，complete-life burden per h = life burden / whole_life_driver；inventory service hours = job_driver / A；inventory service hours times complete-life burden per h = life burden times job_driver / whole_life_driver / A。仅一次使用该全寿命服务；不得在相同小时服务外叠加资产份额采购。其他实际原生驱动量使用已核实兼容单位及等价全寿命关系。 | cp_assets; job_driver; whole_life_driver; A | 每参考流兼容服务驱动量及负担 |  |
| c_release | direct_releases | emitted mass = 实测释放或有效实际活动乘适用物质与介质因子或有证据的组成去向质量；inventory amount = emitted mass / A。捕集、库存、退回及废物不计入释放，整体流体与物质视图不得加总。 完整活动至物种排放因子已包含其声明的组成与去向；除非该因子定义明确要求，不得再次乘组成或去向。 | cp_emissions; cp_fuel; actual applicable factor; A | 每参考流物种质量 kg |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | 最终数据集前核实实际具体交换与支持单位。伞形卡需落实实际SKU、服务商、废物或物质，不能任意采用近似匹配。 | 供应商规格及具体身份明细确认 |
| dq_coverage | rehabilitate | 采集完整作业阶段，包括失败尝试、服务商资源、适用时的实际缺席证据及全消费方资产寿命。覆盖缺失为明确缺口并阻止最终定稿。 | 事件、归属方、期间和寿命名册 |
| dq_metrology | all inventory rows | 保留原生数量与单位、库存出口核对、校准、所需换算的密度、状态、温度及来源与明确不确定性；分别核实水和燃料。 | 主要凭证、计量仪、秤及换算证据 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 |
| --- | --- | --- |
| v_gate | accepted_waterproofing | A必须为正、独一且按b_gate验收；缺失结构、锚固、周边、排水或焊缝验收、要求的观测，或存在未关闭缺陷，均不得产生验收输出。 |
| v_ledgers | rehabilitate | 核对全部供给、出口与原生单位状态，区分燃料供给与燃烧、实际水去向、整体流体与物质不可加总，以及服务商资源唯一归属。缺失实际数据不等于零。 |
| v_assets | shared_assets | 拒绝不完整消费方名单、缺失全寿命分母、无依据余期、更换、终止或寿命终结，以及重复归属范围。最终数据集前评估期间特定不确定性及敏感性。 |
| v_route | rehabilitate | 确认实际干燥可达安装及保留混凝土坝子集；拒绝水下、流动水、新坝或无依据的通用案例参数。返工缺陷始终链接同一作业及仅一次的验收表面。 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 已验收修复服务的前景数据包 |
| downstream_use | secondary_dataset; background_dataset; process; lifecyclemodel |
| allowed_use | 几何、水头和验收已披露的同一合格干作业排水式混凝土坝PVC土工复合膜修复路线 |
| excluded_use | 整体坝体建设、水下修复、水库运营、未来发电或避免水与资产抵扣；单独膜供给 |
| required_metadata | 坝体、场址及工作包ID；保留结构状态；实际水头与水位包络；干作业通行与停运安排；净展开覆盖及排除面积；表面几何、穿透、焊缝与搭接；工厂膜规格；锚固设计与张紧；周边压力设计；排水布局与去向；批准的QA判据、试验、缺陷、复验及签署验收日期 |
| required_quality_disclosure | 实际参考与交换身份及支持；缺口及实际缺席；来源期间；试验闭环；库存、去向及服务商归属；全消费方寿命覆盖；不确定性及敏感性；不得泛化宣传保证 |
| update_trigger | 基底、水头、设计、膜、锚固、周边或排水系统、干作业方法、验收判据、服务商覆盖、测量或资产寿命证据变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| carpi-dam-rehab | handbook | Carpi Tech, Dam repair & rehabilitation with waterproofing geomembranes solutions, https://www.carpitech.com/solution/repair/dams/ | 混凝土坝修复范围与实际工程责任；不提供LCA定量默认值 |
| carpi-dry-execution | handbook | Carpi Tech, Execution conditions, https://www.carpitech.com/solution/repair/execution-conditions/ | 干作业通行与水下或流动水路线区别，以及业主批准运营界面 |
| cazzuffi-geosynthetic-barriers | literature | Cazzuffi, Giroud, Scuero and Vaschetti, Geosynthetic barriers systems for dams, section 4.4, PDF pp.30–32, printed pp.142–144; https://library.geosyntheticssociety.org/wp-content/uploads/resources/proceedings/Geosynthetic%20barriers%20systems%20for%20dams.pdf | 工厂复合PVC与土工布、机械锚固张紧型材、适应压力的周边及排水界面；历史尺寸不是通用清单系数 |
