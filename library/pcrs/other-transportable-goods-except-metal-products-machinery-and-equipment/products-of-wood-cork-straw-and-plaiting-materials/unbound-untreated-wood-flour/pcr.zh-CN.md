---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.unbound-untreated-wood-flour
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 由干燥锯屑废物生产无黏结未化学处理木粉

## 1. 范围与适用性

本方法适用于以已干燥、洁净、未化学处理的锯屑废物为原料，通过专用、无加热电力粉磨及筛分路线生产供明确填充用途使用的松散木粉。不同树种、粒度分布和含水率的木粉等级应分别建模。木丝由长条状木料组成，其搬运方式、几何形态和功能不同；不可作为木粉的替代参考产品或混合组分。同一分类名称不证明实物可互换（`hmrc-wood-classification`、`clemons-wood-flour-2005`）。

排除木丝、纸浆或精制长纤维、木片、刨花板铺装料、黏结板材、聚合物复合料、化学处理木粉和燃料颗粒。场内热干燥、湿洗、化学处理或燃烧需要另行评估扩展路线；上游锯屑干燥仍纳入供应方数据集。不声称与保温板、包装缓冲材料或成品复合材料具有寿命等效性。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.unbound-untreated-wood-flour |
| classification_refs | CPC 3.0 31220; narrower; 范围及已接受决定见 `classifications/mappings/cpc-3.0-to-pcr.yaml` 和其引用的 ADR |
| covered_products | 由干燥锯屑废物生产的未处理无黏结木粉，一个明确填料等级 |
| excluded_products | 木丝；长纤维；黏结或化学处理产品；场内热干燥路线 |
| representative_product | 散装交付的机械粉磨松散木粉 |
| production_route | 收料；电力粉磨；筛分；干式除尘；散装搬运 |
| market_state | 无黏结粉体，声明含水率和粒度等级；无黏结剂或化学处理 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应明确等级、作为材料填料使用的木粉 |
| How much | 交付含水率下验收的 1 千克净木粉 |
| How well | 符合已声明的树种、筛分分布和污染限值，无黏结或化学处理 |
| How long or cycle | 一个生产及散装交付周期；不声明使用寿命 |
| reference_flow_link | `flour_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 木质材料 `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 粒度分布及筛孔尺寸/标准；长度/宽度/长径比描述；交付含水率及湿基/干基和试验方法；树种/树种混合；未处理及无黏结剂确认；填料等级/用途；原料来源/废物状态；粉尘去向；粉磨/筛分路线；散装交付；场址、生产期间及产品供方；供电电压及地区 |

在数据集元数据或参考流备注中声明全部必需限定信息。净参考质量不含容器和运输包装；市场状态为散装交付。仅筛网目数或“木材”一词不能确定产品等级。选定木质材料记录是前景物料定位符，树种、产品形态、尺寸、处理方式、含水状态、生产路线和供应方均未特指；本方法将其物理适用性限定为散装交付门口一种实际洁净、未化学处理、无黏结木粉填料等级。必需限定信息和实测批次质量共同确定该具体参考；此 UUID 不核实木粉供应方后台数据、环境负荷、合规、强度或已采集数量。不能因使用同一宽泛物料 UUID 就把其他木料形态、等级或厂门状态视为可互换。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用实测交付含水率下的 1 千克净木粉；采用 cp_material 采集净产量和含水率。所有清单行以每 1 kg 参考流为基准。 |
| `moisture_basis` | sawdust_input; flour_output; oversize_return; oversize_reinput; captured_dust_return; captured_dust_reinput; dust_waste; screen_reject | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 同时保留湿质量与绝干木质质量。MC_db = 水质量 / 绝干木质质量；m_dry = m_wet / (1 + MC_db)，MC_db 为小数。湿基分数 w 对应 m_dry = m_wet * (1 - w)。不得代入假定的含水率目标（`usda-wood-handbook-2021`）。 |
| `electricity_unit` | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留数据库电力能量属性；用 3.6 MJ/kWh 将计量千瓦时换为兆焦。这是电能，不是燃料热量或蒸汽焓。 |
| `particle_bins` | pm25; pmcoarse; pmover10 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 仅对同一采样边界、时段和控制条件的累积测量换算互不重叠区间。PM2.5-10 = PM10 - PM2.5；PM>10 = 总颗粒物 - PM10。保留原始总量为证据，不额外设交换。负差值必须调查。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 木粉厂接收干燥、洁净、未处理锯屑废物；核实含水率适合无加热粉磨 |
| starting_condition_role | 前景采集门；不抹除上游来源和干燥 |
| product_classification_scope | 仅 CPC 31220 木粉子范围及已声明路线 |
| recursive_input_rule | 同等级外购木粉须记录其供应方数据集；在供应方门处停止前景递归，不把其负荷当成零 |
| upstream_dataset_requirement | 可追溯锯屑废物来源、供应方干燥/运输、分配及电力背景；有依据的废物截断或联产品负荷 |
| disclosure | 场址、日期、树种、含水率、废物状态、除尘控制/去向、前景门及上游负荷选择 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `b_route` | all inventory rows | 纳入收料、粉磨、筛分、除尘、搬运及可归属维护电耗。本路线无场内燃料使用、热干燥或黏结；遇路线不符应拒绝其适用性，不可隐去交换。 | `clemons-wood-flour-2005` |
| `b_returns` | oversize_return; oversize_reinput; captured_dust_return; captured_dust_reinput | 内部交换两端数量相等，在汇总前景边界抵消。它们不是外部原料或可售输出；重复加工仍消耗实测电量。 |  |
| `b_carbon` | sawdust_input; flour_output; dust_waste; screen_reject; pm25; pmcoarse; pmover10 | 保留实物绝干木质和生物碳账。若上游已记录光合吸收，不得再次添加；不得因气候指标排除生物 CO2 而删除真实排放。本路线不允许场内燃烧。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `flour_mill` | 收料、粉磨、筛分、干式除尘及散装交付 | required | 专用无加热电力木粉路线 | 汇总前景；保留分阶段计量 | 1 千克净验收木粉 |

阶段：收料 → 粉磨 → 筛分 → 验收散装木粉。筛分超粒径物返回粉磨。捕集粉尘仅在批准后回料，其余具有明确处置去向。空气排尘在捕集之后计量，与捕集粉尘的两种去向分开。下方内部阶段账的四条记录是此汇总单元内的诊断交接，不是外部产品输入或输出。各限定物料状态使用同一已核实木质材料定位符，不据此成为验收木粉、外购料或可售产品。重复粉磨耗用实测电量；内部数量只在汇总物料边界内抵消。

### 内部阶段采集账

四个稳定记录 ID 分别保留单一 flour_mill 前景内的超粒径物及捕集粉尘路线。每次交接只有一种均质未处理木质材料；宽泛定位符不固定粒度等级、形态、含水率或供方。每条记录须限定实际树种、粒度分布/颗粒形态、污染验收、含水率及阶段；不能由相同 UUID 推定等级相同或存在外部供方链接。分配前保留原始湿质量、绝干质量、水质量、存量及双端实测；这些记录不是外部过程清单行。

| record_id | pair_id | stage_role | material_identity | property_unit | raw_fields_and_scope | quantity_reconciliation | collection_protocol |
| --- | --- | --- | --- | --- | --- | --- | --- |
| oversize_return | oversize_pair | 筛分出口至粉磨回料 | 木质材料 `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98` | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg | 实际未处理超粒径木粉；树种、筛分分布/颗粒形态、含水率、存量及匹配路线 | 诊断报告用实测批次合计/B；湿/绝干木质和水质量等于 oversize_reinput；不是验收木粉或外部输出 | cp_returns |
| oversize_reinput | oversize_pair | 粉磨入口接收回料 | 木质材料 `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98` | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg | 同一超粒径物料，在同阶段/批次的接收端实测；保留中间存量变化 | 与 oversize_return 匹配的湿/绝干木质和水数量相同；内部交接抵消，不增加外购原料 | cp_returns |
| captured_dust_return | captured_dust_pair | 除尘出口至经批准粉磨回料 | 木质材料 `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98` | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg | 实际未处理捕集木粉；树种、粒度分布/颗粒形态、含水率、污染及同等级回用批准；每份只有一个去向 | 诊断报告用实测批次合计/B；湿/绝干木质和水质量等于 captured_dust_reinput；与处置粉尘及排放 PM 分开 | cp_returns |
| captured_dust_reinput | captured_dust_pair | 粉磨入口接收经批准捕集木粉 | 木质材料 `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98` | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg | 同一经批准物料，在接收端和阶段实测；匹配存量及路线 | 与 captured_dust_return 匹配的湿/绝干木质和水数量相同；内部抵消，不增加外购或验收木粉 | cp_returns |

### 过程：收料至散装交付 (`flour_mill`)

#### 输入

##### 产品流

###### 交流电 (`electricity`)

仅适用于小于 1 千伏的电网平均消费供电；分别计量接收电量和场内变压损耗。原始供电地区为 CN；实际供应方、地区、生产期间、电网组合及交付损耗的兼容性仍须核实，不设中国或全球后台默认值。其他电压、地区或供电路线须分别审查身份及后台兼容性。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：采用 cp_energy 采集可归属数量，以生产批次合计除以净验收木粉产量 B（千克）；上述条件交换仅实际发生时纳入。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

###### 润滑油 (`lubricating_oil`)

有石油衍生机械润滑油补充时纳入；记录质量，不使用其发热量。不同化学组成的润滑剂须另设原子行。

- 选定流：润滑油 `66628f20-9d33-4997-bd6c-6357453fa268`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_oil 采集可归属数量，以生产批次合计除以净验收木粉产量 B（千克）；上述条件交换仅实际发生时纳入。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_oil`

##### 废物流

###### 木屑废物 (`sawdust_input`)

回收用于材料生产的干燥、洁净、未处理锯屑废物，不是木燃料；保留供应方来源、含水率、树种和上游负荷证据。选定未处理焚烧/回收记录限定用于实际材料回收分支，须核实投入废物状态及供应方回收边界；不预设燃烧或锅炉负荷。

- 选定流：木屑废物 `e1a44d20-d968-4d64-bd7c-253a1441ab35`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_material 采集可归属数量，以生产批次合计除以净验收木粉产量 B（千克）；上述条件交换仅实际发生时纳入。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`

#### 输出

##### 产品流

###### 无黏结未化学处理木粉 (`flour_output`)

厂内交付门处验收的洁净、未化学处理、无黏结散装木粉，一个填料等级；唯一验收参考输出。记录实际树种或配比、粒度分布及筛分标准、颗粒形态、交付含水率和净验收批次质量，无黏结剂、聚合物基体或化学处理。宽泛前景木质材料身份仅适用于该实测产品状态；供应方生产路线及后台兼容性须独立核查后才能确定。不提供默认质量、木粉等级、得率、负荷或功能性能。内部回料保留独立产品状态，不是额外验收木粉输出。

- 选定流：木质材料 `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`product_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`

##### 废物流

###### 送场外处置的未处理木粉捕集粉尘 (`dust_waste`)

仅记录送处理的捕集粉尘，与回用粉尘和空气排放分别计量；须提供去向和处理数据集。

- 选定流：送场外处置的未处理木粉捕集粉尘
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_waste 采集可归属数量，以生产批次合计除以净验收木粉产量 B（千克）；上述条件交换仅实际发生时纳入。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`

###### 送处置的未处理粗木质筛除物 (`screen_reject`)

不可回用的粗木质筛除物，不含非木质污染物；收料时发现污染物须另设具体行。

- 选定流：送处置的未处理粗木质筛除物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_waste 采集可归属数量，以生产批次合计除以净验收木粉产量 B（千克）；上述条件交换仅实际发生时纳入。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`

###### 废润滑油 (`spent_oil`)

有废油移交时纳入；其质量不自动等于补充量。记录期初期末油存量、留存油和承包方去向。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_oil 采集可归属数量，以生产批次合计除以净验收木粉产量 B（千克）；上述条件交换仅实际发生时纳入。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_oil`

##### 基本流

###### 颗粒物 (PM2.5) (`pm25`)

除尘控制后的室外空气排放，空气动力学直径不大于 2.5 微米；不含室内暴露和捕集固体。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_air 采集可归属数量，以生产批次合计除以净验收木粉产量 B（千克）；上述条件交换仅实际发生时纳入。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`

###### 颗粒物 (PM2.5 - PM10) (`pmcoarse`)

空气动力学直径大于 2.5 且不大于 10 微米的室外空气排放；不得同时再次计入累积 PM10。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_air 采集可归属数量，以生产批次合计除以净验收木粉产量 B（千克）；上述条件交换仅实际发生时纳入。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`

###### 颗粒物（> PM10） (`pmover10`)

空气动力学直径大于 10 微米的室外空气排放；不得用总颗粒物或 PM10 替代。

- 选定流：颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_air 采集可归属数量，以生产批次合计除以净验收木粉产量 B（千克）；上述条件交换仅实际发生时纳入。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`

###### 水蒸气 (`water_vapour`)

无加热粉磨与搬运期间向室外空气净蒸发的水，须为正且有依据；不预设干燥机或外购蒸汽。若净吸收大气水分，须在完整数据交付前另建经核实的原子输入并审查；不得强行计为负水蒸气排放，也不能把未解释过程损失当作水。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_water 采集可归属数量，以生产批次合计除以净验收木粉产量 B（千克）；上述条件交换仅实际发生时纳入。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `a_dedicated` | flour_mill | 专用单等级批次的环境负荷归属于验收木粉。废弃物和内部回料保留在实物平衡中；不作为可售联产品分配。 |  |
| `a_multigrade` | flour_mill | 优先采用等级独立计量或批次。可售等级共用工序时，报告未分配实物输出，另以实测因果驱动量记录负荷分摊关系；如无依据，保留分配审查缺口。不得导入锯木厂分配百分比。 |  |
| `a_ledgers` | all inventory rows | 实物过程/木质-水-碳平衡与分配后的负荷账分别保留。不得用负荷份额机械乘实际联产品产量或内部链接量。未经明确审查的系统扩展情景，不给替代产品抵扣。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material` | `flour_mill` | 收料/参考产品 | 前景记录 | 原料接收；期初期末存量；净交付 B；树种；筛孔及筛余比例；样品湿/干质量；废物状态 | 经校准称重、核对供应方记录、代表性密封含水样及绝干质量检验；筛分分析标明筛孔和方法 | kg; moisture fraction; micrometres | 每批收料及交付 | 含存量变化的完整生产批次 | 同一场址及验收等级 | 每 1 kg 参考流 | 秤校准；采样计划；实验室记录；上游负荷声明 |
| `cp_energy` | `flour_mill` | 电力 | 前景记录 | 分表读数；分阶段运行时数；供电电压；变压器边界；B | 读取收料、粉磨、筛分、除尘及散装搬运的经校准电表，核对账单 | kWh; MJ | 每生产批次；分阶段合计 | 同一批次 | 同一计量生产线 | 每 1 kg 参考流 | 电表校准；账单；3.6 MJ/kWh 换算 |
| `cp_returns` | `flour_mill` | 内部木质交换 | 前景记录 | 成对编号；回料质量；含水率；筛分等级；去向；B | 两端称量或核实经校准输送平衡；分别保留捕集回料及超粒径回料记录 | kg | 每回料批 | 同一生产批次 | 同一闭环生产线 | 每 1 kg 参考流 | 成对日志；流量计校准；污染检验 |
| `cp_waste` | `flour_mill` | 木质处置组分 | 前景记录 | 粉尘移交质量；粗筛除物移交质量；含水率；存量变化；承包方；处理；B | 分别使用经校准收集仓，称量移交量，按各废物组分核对联单 | kg | 每次移交 | 含仓储的同一批次 | 同一场址 | 每 1 kg 参考流 | 地磅票据；移交联单；处理数据集 |
| `cp_oil` | `flour_mill` | 润滑油投入及废油输出 | 前景记录 | 加油量；废油移交量；油类型；期初期末存量；留存油；B | 逐项称量加油及移交，核对维护及油存量记录，不假定投入输出相等 | kg | 每次维护 | 生产批次及有依据的期间分摊 | 同一生产线设备 | 每 1 kg 参考流 | 油品规格；秤及承包方记录 |
| `cp_air` | `flour_mill` | 室外颗粒物区间 | 前景记录 | 采样时长；排气体积；控制状态；累积总颗粒物/PM10/PM2.5；无组织源；B | 采用源特定的受控出口及无组织排放测量，或经验证的当地质量释放模型；保留检出限和空气动力学切割定义；不使用锯木厂 PTE 默认值 | kg | 代表性运行及生产批次 | 同一运行/控制时段 | 室外空气排放，受纳子介质未特指；记录实际释放几何 | 每 1 kg 参考流 | 采样报告；控制日志；区间核对；不确定性 |
| `cp_water` | `flour_mill` | 蒸发水 | 前景记录 | 投入/输出湿/干质量；期初期末木料水存量；凝结水；蒸汽释放；B | 核对木料携水和存量变化；调查平衡残差后，结合独立含水或排气证据量化正的净蒸汽量 | kg | 每生产批次 | 同一批次 | 同一汇总单元；无加热或湿洗 | 每 1 kg 参考流 | 含水记录；不确定性；水平衡 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `campaign_basis` | all inventory rows | 各交换按相关期初期末存量修正可归属批次接收/释放合计，再除以 B，即交付含水率下的净验收木粉质量（千克）。负荷分配前保留实物交换；参考行为 1 千克。 | campaign records; B | 每 1 kg 参考流的交换数量 |  |
| `wood_balance` | sawdust_input; flour_output; dust_waste; screen_reject; pm25; pmcoarse; pmover10 | 绝干木质投入加期初绝干木质存量，等于交付绝干木粉、处置绝干木料、排放绝干木质颗粒和期末绝干木质存量之和，允许已声明的实测不确定性。内部回料抵消；不明残差保留为质量缺口。 | wet/dry masses; stocks; particle composition | 未分配实物平衡 | `usda-wood-handbook-2021` |
| complete_period_normalization | 所有清单行 | 每项既有工期、批次或批量数量规则及关联采集协议均采用同声明产品、等级、路线、配置、场址和参考状态的单一有记录完整统计期汇总组。验收批次措辞仅限定分母；原生单位原始分子记录保留全部可归属启动、停机、整批失败或零产出批次、废品、在制品和返工。返工参考产品仅在最终验收时计一次。各可归属交换在匹配汇总组内求和，仅除一次同组严格正值、采用声明分母单位的验收参考产品数量，再按声明参考数量缩放。不得平均批次比率、丢弃失败批次、混合无关产品/时期或改变分子原生单位。整个匹配汇总组无验收产出时保留未归一化绝对清单并要求审查，不生成归一化结果或虚构产量。库存/退回及实物交接账与负荷分配独立保留；分配不得删去已经发生的失败/返工活动。 | 全部关联原始采集协议；验收参考产品汇总组；库存及返工链接 | 各原生交换单位每声明参考数量；零产出汇总组保持未归一化 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | all inventory rows | 各交换保持物理或化学具体性。参考流仅在明确木粉限定信息下采用已核实前景木质材料定位符；未决回料或废物 UUID 保持具体身份缺口，在声称对应前景数据集完整前须解决。产品流定位符不能替代废物流或基本流；身份核实不能确定供应方后台兼容性或实测数量。 | 直接身份及属性/单位核实 |
| `dq_grade` | flour_output | 保留粒度分布、含水基准和试验记录；不得把国外关税筛分限值当成通用 CPC 木粉规格。 | 批次规格及采样记录 |
| `dq_coverage` | all inventory rows | 声明未测源、检出限和路线排除项。实际检出的各物种须单列原子交换；未知不等于零。条件项未发生须有实际评估记录，包括适用时的油雾、泄漏及其他排放。 | 完整性及不确定性审查 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `v_reference` | flour_output | 仅一个验收参考输出，数量为交付净木粉 1 千克；两种语言的所有行及采集分母一致。已核实前景参考 UUID 和必需具体木粉限定信息必须完整；宽泛物理身份不能确定实际供方/后台兼容性或已采集量。 |  |
| `v_route` | flour_mill | 拒绝木丝、黏结、化学处理、场内干燥/加热或燃烧适用本路线。不可仅凭 CPC 推断适用性。 | `hmrc-wood-classification`; `clemons-wood-flour-2005` |
| `v_returns` | oversize_return; oversize_reinput; captured_dust_return; captured_dust_reinput | 每对回料两端实物质量和含水率相等；每份粉尘只有一个去向，不重复计入废物和空气排放。 |  |
| `v_air` | pm25; pmcoarse; pmover10; water_vapour | 核对室外空气介质、互不重叠的空气动力学区间及排放控制；累积颗粒物不得与组成区间相加。向水体排放的水或室内空气暴露记录不得替代室外空气流。 |  |
| `v_balance` | flour_mill | 分配前核对木质-水-碳存量、交换和损失，再独立核对负荷账。未决测量或无依据分配须明确保留。 | `usda-wood-handbook-2021` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 向材料制造提供明确的无黏结木粉等级及边界、身份证据 |
| allowed_use | 仅匹配的木粉等级、含水率及干料电力路线 |
| excluded_use | 木丝；保温性能；成品复合料；场内热干燥或燃料燃烧；任意全木材均值 |
| required_metadata | 场址/时间；等级；树种；粒度；含水基准；废物投入状态；上游负荷；供电；粉尘去向和控制 |
| required_quality_disclosure | 测量完整性；未决身份；未分配平衡；负荷分配；采样及模型不确定性 |
| update_trigger | 等级/树种、投入来源、含水率、能源路线、除尘或分配改变 |

## 11. 数据源

| 来源编号 | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| `hmrc-wood-classification` | official_guidance | [HMRC, Classifying wood for import and export (updated 10 March 2023), Wood-wool and wood-flour](https://www.gov.uk/guidance/classifying-wood#wood-wool-and-wood-flour) | 物理形态及粉磨/筛分区别；仅英国关税背景，不采用通用 CPC 数值限值 |
| `clemons-wood-flour-2005` | literature | [Clemons and Caufield (2005), Wood Flour, Functional Fillers for Plastics, pp. 249–270, §15.2 pp.251–253](https://research.fs.usda.gov/download/treesearch/23122.pdf) | 木粉粒度减小/分级路线和等级描述；不采用当前能耗、得率或行业范围 |
| `usda-wood-handbook-2021` | handbook | [USDA FPL-GTR-282 (2021), Wood handbook—wood as an engineering material, p.4–1 equations (4–1)/(4–2)](https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf) | 水/绝干木质质量基准；不采用树种调查参数或干燥目标 |
