---
pcr_id: pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-abalone-live-fresh-or-chilled
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 养殖鲍鱼，活、鲜或冷藏

## 1. 范围与适用性

本方法仅覆盖整只带壳动物作为活、鲜或冷藏参考产品。鲜/冷藏去壳或纯组织参考产品不在当前过程方法范围内，不能仅靠第8节补采义务纳入；分类关系为 narrower。这是方法覆盖限制，不意味着生鲜去壳必然属于其他预制或保藏加工产品。

本 PCR 用于指导构建养殖鲍鱼（Haliotis spp.）活、鲜或冷藏产品的前景数据包。范围覆盖声明的苗种或幼鲍来源、可选的场内育苗和中间培育、陆基水槽或流水槽、悬挂或网箱系统、声明的海区增养殖系统中的养成、采收、分级、活体暂养、冷藏、包装以及至声明边界的交付。

排除产品包括野生鲍鱼、冷冻、烟熏、干制、盐腌、盐水浸泡、熟制、罐装、其他加工或保藏鲍鱼、作为独立水产苗种投入销售的鲍鱼苗、缺少鲍鱼身份的通用贝类产品，以及具有独立非食品参考流的贝壳或肉类副产品。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-abalone-live-fresh-or-chilled` |
| classification_refs | CPC 3.0 `04412`, `Farmed abalone, live, fresh or chilled`；mapping_type: narrower；整只带壳方法子集 |
| covered_products | 仅整只带壳参考产品：由水产养殖系统生产、以活、鲜或冷藏状态销售的 Haliotis spp.，包括整只带壳形态 |
| excluded_products | 鲜/冷藏去壳或纯组织参考产品；野生鲍鱼；冷冻、烟熏、干制、盐腌、盐水浸泡、熟制、罐装、加工或保藏鲍鱼；作为苗种销售的水产苗种；贝壳废物或贝壳产品；非鲍鱼贝类 |
| representative_product | 整只带壳动物：达到声明市场规格和声明产品形态的活体或冷藏养殖鲍鱼 |
| production_route | 育苗或外购幼鲍投入、相关中间培育、养成管理、采收、分级、活体暂养或冷藏、包装和声明边界放行 |
| market_state | 声明物种、产品形态、养殖系统、规格等级、整只带壳状态和交付边界的活、鲜或冷藏鲍鱼 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 整只带壳的作为活、鲜或冷藏市场产品的养殖鲍鱼 |
| How much | 1 kg |
| How well | 声明物种或杂交类型、产品形态、活/鲜/冷藏状态、整只带壳基准、规格等级、采收和暂养条件以及养殖系统 |
| How long or cycle | 归一化到市场化产品输出的一个生产批次、采收批次或报告期 |
| reference_flow_link | `declared_gate_reference` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 养殖鲍鱼在声明最终物理交接门的验收产品 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 物种或杂交类型；养殖系统；苗种或幼鲍来源；产品状态；整只带壳基准；规格等级；含水或沥水基准；地理范围和声明边界；暂养或冷藏时长；饲料制度；许可或认证状态 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

质量是主要参考基准。采用计数记录时，必须保留平均个体质量和产品形态，使前景数据包能够将计数换算为 kg 产品。

每份数据包声明一个实际最终物理交接门gate_release、一个实际物种/形态/状态和验收条件。包装及参考门前实际交付是中间实测交接；只选一条真实到门路径，未知交付状态不能默认旁路。Q是同批/匹配报告群体在该门经校准称量的正验收净动物质量，排除包装皮重、游离水/冰及拒收，保留声明动物形态中的原生壳/组织/水分。只有declared_gate_reference最终输出归一化为1kg，所有此前数量独立实测。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考流必须以声明活、鲜或冷藏产品形态下的 kg 养殖鲍鱼表示。 |
| `product_form_mass_basis` | 整只带壳活、鲜、冷藏或沥水产品记录 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 独立实测整只动物净质量，保留其自身外骨骼/贝壳和组织，排除游离水/冰和包装皮重。保留沥水/温度及同批实际状态，只有实测同批沥水证据才可换算；去壳或纯组织质量均不是允许的参考基准。 |
| `count_to_mass_conversion` | 投苗、死亡、分级和销售计数记录 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 计数记录必须包含平均个体质量、规格等级和抽样方法，之后才可归一化为 kg 参考产品。 |
| `water_volume_or_mass` | 海水取水、工艺用水、活体暂养水和废水 | Mass or volume | kg or m3 | 保留原始计量单位和换算基准。对于流水式或开放水域系统，应区分泵送水与通过养殖场地的环境水体。 |
| `feed_mass_basis` | 大型藻类、海藻、配合饲料和混合饲料 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 饲料投入必须声明湿重、干重或原样质量。只有在有实测含水率或供应商数据时才可进行湿/干基换算。 |
| `energy_inventory` | 泵送、曝气、过滤、照明、冷藏、活体暂养和交付能源 | Energy or fuel quantity | kWh, MJ, L, or kg | 在归一化到参考流之前记录原始电力、燃料或能源载体单位。 |
| `feed_marine_fraction` | 含鱼粉、鱼油或其他海洋原料的配合饲料 | Mass fraction | kg/kg feed | 当使用海洋原料依赖或 ASC 饲料效率指标时，必须声明饲料组成或供应商配方。 |

关键产品属性作为质量参考流的前景限定信息记录：

| 属性 | 常用单位 | 必需处理 |
| --- | --- | --- |
| 物种或杂交类型 | 学名和通用名 | 所有数据集必填 |
| 养殖系统 | 陆基流水槽、RAS、悬挂网箱、海区增养殖或其他声明系统 | 用于系统边界和水排放解释，必填 |
| 产品形态 | 仅整只带壳活体、鲜品或冷藏产品 | 用于质量基准解释，必填 |
| 规格等级 | 壳长、每 kg 个数或市场等级 | 使用计数或等级记录时必填 |
| 饲料制度 | 大型藻类、配合饲料、混合饲料或海区天然饵料 | 用于饲料清单和来源披露，必填 |

## 5. 系统边界

默认边界覆盖前景可控的养殖鲍鱼生产至声明养殖场、采收、包装场或交付边界：

1. 苗种或幼鲍来源；当报告主体控制育苗和中间培育时纳入场内育苗和中间培育活动；外购幼鲍时披露供应来源。
2. 养成管理，包括养殖单元、投苗、饲料、水体流动、曝气、过滤、防污清理、死亡管理、捕食者或逃逸控制以及直接控制的维护。
3. 采收、分级、必要时净化或暂养、活体暂养、冷藏、包装和声明边界放行。
4. 当参考产品为送达产品而非养殖场门或包装场门产品时，纳入至声明边界的交付。

资本品、基础设施建设和长期栖息地改变仅在声明的数据包范围要求时纳入。饲料和苗种上游数据集作为上游输入链接，除非同一运营者控制并在前景包中报告其生产。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | declared_seed_or_juvenile_stocking_event |
| starting_condition_role | aquaculture_stock_identity_and_biological_starting_condition |
| product_classification_scope | 当前 CPC 3.0 产品类别 `04412`, `Farmed abalone, live, fresh or chilled` |
| recursive_input_rule | 用于生产商品鲍鱼的养殖鲍鱼苗种或幼鲍记录为带供应商或育苗披露的声明苗种/幼鲍起点，不递归作为成品参考产品输出追溯 |
| upstream_dataset_requirement | 苗种或幼鲍供应商数据集、场内育苗记录，或记录来源、物种、批次、质量或数量、规格、健康状态、认证或许可证据的文件 |
| disclosure | 披露物种或杂交类型、养殖系统、投苗批次、饲料制度、水源和排放路径、养成时长、死亡量、采收和暂养条件、产品形态、包装状态以及未解析的 Tiangong UUID 替代项 |

## 6. 过程清单结构

### 过程图

| process_id | Process name | Inclusion | Inclusion condition | Role | Quantitative reference |
| --- | --- | --- | --- | --- | --- |
| seed_supply_hatchery_and_nursery | 苗种供应、育苗与中间培育 | required | 必须声明外购苗种或场内育苗路径 | 最终门前的实际过程职责 | 每 1 kg 参考流 |
| growout_husbandry | 养成管理 | required |  | 最终门前的实际过程职责 | 每 1 kg 参考流 |
| harvest_grading_and_live_holding | 采收、分级与活体暂养 | required |  | 最终门前的实际过程职责 | 每 1 kg 参考流 |
| delivery_to_declared_gate | 至声明边界交付 | conditional | 当参考流为超出养殖场门或包装场门的送达产品时纳入 | 最终门前的实际过程职责 | 每 1 kg 参考流 |
| gate_release | 声明最终物理交接和验收 | required | 每份数据包一个实际最终门及真实路线 | 唯一最终参考 | 每 1 kg 参考流 |

### 过程：苗种供应、育苗与中间培育（`seed_supply_hatchery_and_nursery`）

#### 输入

##### 产品流

###### 独立交换：鲍鱼 `7b973a02-b45b-4f5a-a640-a9b5ae65584b` (`seed_or_juvenile_abalone_input`)

仅限实际购入的水产育苗用幼鲍/苗种，实测净活体质量kg并保留辅助只数和同批代表性个体质量/抽样误差。绑定仅在实际苗种、生产供应门和用途与该育苗用身份相符时成立；不得覆盖亲鲍、卵、幼虫或成体。保留孵化供应、接收、运输和前期损失的上游负担，投放幸存量另记。

- 选定流：鲍鱼 `7b973a02-b45b-4f5a-a640-a9b5ae65584b`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：保留本节点独立计量/有证据计算的原生数量q、同批转移、损失与库存；按第7节归属后除以同一最终门正验收净质量Q。保留原始批次/每1000kg及阶段分母，阶段记录用实测产出S恢复原数量；不得把内部量固定为1kg或等同最终Q。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_seed_stocking_records`
- 来源：`fao-abalone-breeding-1990`, `ca-dfg-culture-of-abalone`
- 数量范围：未确立的独立数量不确定性；不是默认值或截断限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_seed_or_juvenile_abalone_input
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 独立交换：本节点实际购入电力 (`hatchery_nursery_electricity`)

本行覆盖场内育苗或中间培育中泵、曝气、过滤、照明、藻类饵料培养、温控和水处理用电。

- 选定流：本节点实际购入电力
- 流属性/单位：Energy / kWh
- 数量规则：保留本节点独立计量/有证据计算的原生数量q、同批转移、损失与库存；按第7节归属后除以同一最终门正验收净质量Q。保留原始批次/每1000kg及阶段分母，阶段记录用实测产出S恢复原数量；不得把内部量固定为1kg或等同最终Q。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records_seed_supply_hatchery_and_nursery`
- 来源：`asc-farm-standard-2025`
- 数量范围：未确立的独立数量不确定性；不是默认值或截断限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_hatchery_nursery_electricity
  - 单位：kWh
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 独立交换：本节点实际活体幼鲍苗种 (`stocked_juvenile_abalone`)

本输出将声明的苗种或幼鲍带入养成阶段。 净活体质量kg是本卡原生量；只数、壳长/等级和同批代表性个体质量作为辅助证据。分别声明实际物种、苗种来源/阶段、供应技术和门；不将全类苗种绑定为悬挂延绳养殖场端身份，内部转移不自动继承外部供应UUID。苗期生长下的质量比不等于只数存活率。

- 选定流：本节点实际活体幼鲍苗种
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：保留本节点独立计量/有证据计算的原生数量q、同批转移、损失与库存；按第7节归属后除以同一最终门正验收净质量Q。保留原始批次/每1000kg及阶段分母，阶段记录用实测产出S恢复原数量；不得把内部量固定为1kg或等同最终Q。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_seed_stocking_records`
- 数量范围：未确立的独立数量不确定性；不是默认值或截断限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_stocked_juvenile_abalone
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

### 过程：养成管理（`growout_husbandry`）

#### 输入

##### 产品流

###### 独立交换：本节点实际活体幼鲍苗种 (`stocked_juvenile_transfer_to_growout`)

本行将投放幼鲍转入声明的养成系统。 净活体质量kg是本卡原生量；只数、壳长/等级和同批代表性个体质量作为辅助证据。分别声明实际物种、苗种来源/阶段、供应技术和门；不将全类苗种绑定为悬挂延绳养殖场端身份，内部转移不自动继承外部供应UUID。苗期生长下的质量比不等于只数存活率。

- 选定流：本节点实际活体幼鲍苗种
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：保留本节点独立计量/有证据计算的原生数量q、同批转移、损失与库存；按第7节归属后除以同一最终门正验收净质量Q。保留原始批次/每1000kg及阶段分母，阶段记录用实测产出S恢复原数量；不得把内部量固定为1kg或等同最终Q。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_seed_stocking_records_growout_husbandry`
- 数量范围：未确立的独立数量不确定性；不是默认值或截断限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_stocked_juvenile_transfer_to_growout
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 独立交换：本节点实际购入电力 (`growout_electricity`)

本行覆盖泵送、曝气、过滤、照明、传感器、自动投喂和养殖单元运行用电。

- 选定流：本节点实际购入电力
- 流属性/单位：Energy / kWh
- 数量规则：保留本节点独立计量/有证据计算的原生数量q、同批转移、损失与库存；按第7节归属后除以同一最终门正验收净质量Q。保留原始批次/每1000kg及阶段分母，阶段记录用实测产出S恢复原数量；不得把内部量固定为1kg或等同最终Q。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records_growout_husbandry`
- 来源：`asc-abalone-standard-2012`, `asc-farm-standard-2025`
- 数量范围：未确立的独立数量不确定性；不是默认值或截断限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_growout_electricity
  - 单位：kWh
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 独立交换：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816` (`growout_fuel_and_workboat_energy`)

本行覆盖作业船、叉车、发电机、场内车辆或直接控制维护活动使用的柴油或其他燃料。 仅记录实际柴油物料及其未由完整服务覆盖的使用；不同燃料/电力另立卡，原MJ、L或吨公里记录不能改标签当成kg。L转kg需同批燃料实测/供应密度及温度证据；MJ换算还需热值、基准和因子证据。完整运输服务和其已含燃料、资产、直接排放不得重计。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：保留本节点独立计量/有证据计算的原生数量q、同批转移、损失与库存；按第7节归属后除以同一最终门正验收净质量Q。保留原始批次/每1000kg及阶段分母，阶段记录用实测产出S恢复原数量；不得把内部量固定为1kg或等同最终Q。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_and_transport_records_growout_husbandry`
- 数量范围：未确立的独立数量不确定性；不是默认值或截断限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_growout_fuel_and_workboat_energy
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 独立交换：鲍鱼养成用复合颗粒饲料 (`compound_pelleted_growout_feed`)

仅为实际复合颗粒饲料的条件具体卡，不推定发生，也不把鱼苗饲料身份用于幼鲍或成鲍饲料。其他实际配方/形态和每种宏藻仍分别补充独立卡及数量/范围/UUID。

- 选定流：鲍鱼养成用复合颗粒饲料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅在实际使用此颗粒饲料时，独立记录其配方/批次和as-fed数量、实测水分、期初/购买/期末库存、实际投喂、残饵和损失；按归属量除以Q。不得复制全部饲料总量、宏藻量或其范围。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feed_records`
- 数量范围：未确立的独立数量不确定性；不是默认值或截断限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_compound_pelleted_growout_feed
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 独立交换：养殖鲍鱼活体采收规格生物量 (`harvest_size_farmed_abalone`)

本行记录最终分级、活体暂养、冷藏或包装损失之前的养成输出。 分别记录真实物种、形态、活/鲜/冷藏状态、等级、接收方和交接点；该节点是实际中间产出，不是最终参考输出。允许拒收、损失、持留、分级或配送前后数量不同，不推定其收率为1或以参考子集质量约束全部可销售降级产出。

- 选定流：养殖鲍鱼活体采收规格生物量
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：保留本节点独立计量/有证据计算的原生数量q、同批转移、损失与库存；按第7节归属后除以同一最终门正验收净质量Q。保留原始批次/每1000kg及阶段分母，阶段记录用实测产出S恢复原数量；不得把内部量固定为1kg或等同最终Q。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_and_product_records_growout_husbandry`
- 数量范围：未确立的独立数量不确定性；不是默认值或截断限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_harvest_size_farmed_abalone
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

###### 独立交换：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048` (`direct_carbon_dioxide_from_fuel_combustion`)

仅当前景养殖场直接燃烧燃料且过程数据集未已承载燃烧排放时纳入本行。 本卡是向空气的实际化石源CO2产出，不能作为资源输入。只量化实际自有燃烧的化石碳份额；生物源CO2和其他气体/颗粒/泄漏各自独立，须保留实际燃料、相容因子及来源/单位/氧化率和不确定性。完整服务已覆盖排放时不另计。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：保留本节点独立计量/有证据计算的原生数量q、同批转移、损失与库存；按第7节归属后除以同一最终门正验收净质量Q。保留原始批次/每1000kg及阶段分母，阶段记录用实测产出S恢复原数量；不得把内部量固定为1kg或等同最终Q。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_fuel_and_transport_records_growout_husbandry`
- 数量范围：未确立的独立数量不确定性；不是默认值或截断限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_direct_carbon_dioxide_from_fuel_combustion
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：采收、分级与活体暂养（`harvest_grading_and_live_holding`）

#### 输入

##### 产品流

###### 独立交换：养殖鲍鱼实际物种、形态及状态的动物批次 (`harvested_abalone_input_to_packout`)

本行将采收规格鲍鱼转入分级、净化、活体暂养、冷藏和包装。 分别记录真实物种、形态、活/鲜/冷藏状态、等级、接收方和交接点；该节点是实际中间产出，不是最终参考输出。允许拒收、损失、持留、分级或配送前后数量不同，不推定其收率为1或以参考子集质量约束全部可销售降级产出。

- 选定流：养殖鲍鱼实际物种、形态及状态的动物批次
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：保留本节点独立计量/有证据计算的原生数量q、同批转移、损失与库存；按第7节归属后除以同一最终门正验收净质量Q。保留原始批次/每1000kg及阶段分母，阶段记录用实测产出S恢复原数量；不得把内部量固定为1kg或等同最终Q。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_and_product_records_harvest_grading_and_live_holding`
- 数量范围：未确立的独立数量不确定性；不是默认值或截断限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_harvested_abalone_input_to_packout
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 独立交换：本节点实际购入电力 (`packout_electricity`)

本行覆盖活体暂养、冷藏、泵、曝气、分级设备、称重和包装用电。

- 选定流：本节点实际购入电力
- 流属性/单位：Energy / kWh
- 数量规则：保留本节点独立计量/有证据计算的原生数量q、同批转移、损失与库存；按第7节归属后除以同一最终门正验收净质量Q。保留原始批次/每1000kg及阶段分母，阶段记录用实测产出S恢复原数量；不得把内部量固定为1kg或等同最终Q。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records_harvest_grading_and_live_holding`
- 数量范围：未确立的独立数量不确定性；不是默认值或截断限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_packout_electricity
  - 单位：kWh
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 独立交换：养殖鲍鱼实际物种、形态及状态的动物批次 (`marketable_farmed_abalone_reference_product`)

本行是实际中间动物产品交接，不是最终参考输出。只有 gate_release 的 declared_gate_reference 才是最终验收参考产品。分别记录真实物种、形态、活/鲜/冷藏状态、等级、接收方和交接点。允许拒收、损失、持留、分级或配送前后数量不同，不推定其收率为1或以参考子集质量约束全部可销售降级产出。

- 选定流：养殖鲍鱼实际物种、形态及状态的动物批次
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：保留本节点独立计量/有证据计算的原生数量q、同批转移、损失与库存；按第7节归属后除以同一最终门正验收净质量Q。保留原始批次/每1000kg及阶段分母，阶段记录用实测产出S恢复原数量；不得把内部量固定为1kg或等同最终Q。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_and_product_records_harvest_grading_and_live_holding`
- 数量范围：未确立的独立数量不确定性；不是默认值或截断限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_marketable_farmed_abalone_reference_product
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 独立交换：养殖鲍鱼实际独立可销售降级产品 (`saleable_offgrade_abalone_coproduct`)

仅当低等级活、鲜或冷藏鲍鱼仍作为同一产品族内的独立等级销售时使用本行。 分别记录真实物种、形态、活/鲜/冷藏状态、等级、接收方和交接点；该节点是实际中间产出，不是最终参考输出。允许拒收、损失、持留、分级或配送前后数量不同，不推定其收率为1或以参考子集质量约束全部可销售降级产出。

- 选定流：养殖鲍鱼实际独立可销售降级产品
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：保留本节点独立计量/有证据计算的原生数量q、同批转移、损失与库存；按第7节归属后除以同一最终门正验收净质量Q。保留原始批次/每1000kg及阶段分母，阶段记录用实测产出S恢复原数量；不得把内部量固定为1kg或等同最终Q。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_and_product_records_harvest_grading_and_live_holding`
- 数量范围：未确立的独立数量不确定性；不是默认值或截断限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_saleable_offgrade_abalone_coproduct
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 独立交换：鲍鱼采后收集并送至实际处理方的废水 (`packout_wastewater`)

本节点实际生成并转交处理的单一废水流；保留水质/组成、实际接收方和处理责任。不得以二/三级处理身份代替未处理养殖或清洗废水。直接排水另记实际载体水及各具体物质/介质，不能同时计处理废物。实际质量/体积换算需密度和温度/盐度证据。

- 选定流：鲍鱼采后收集并送至实际处理方的废水
- 流属性/单位：Volume / m3
- 数量规则：保留本节点独立计量/有证据计算的原生数量q、同批转移、损失与库存；按第7节归属后除以同一最终门正验收净质量Q。保留原始批次/每1000kg及阶段分母，阶段记录用实测产出S恢复原数量；不得把内部量固定为1kg或等同最终Q。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_water_intake_and_discharge_records_harvest_grading_and_live_holding`
- 数量范围：未确立的独立数量不确定性；不是默认值或截断限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_packout_wastewater
  - 单位：m3
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：实际参考门前交付（`delivery_to_declared_gate`）

#### 输入

##### 产品流

###### 独立交换：养殖鲍鱼实际包装后交付输入 (`product_transferred_to_controlled_delivery`)

参考门前实际交付的独立交换；支付方或发票不决定门。证实旁路时不虚构交付，未知路线不能当旁路。完整服务与组成燃料/排放不能重复。

- 选定流：养殖鲍鱼实际包装后交付输入
- 流属性/单位：Mass / kg
- 数量规则：仅在实际参考门前交付启用时，独立记录本项原生数量、实际损失、状态、源/接收转移和完整服务覆盖；按归属量除以Q，不固定为1kg；L燃料须用实测/供应密度换算kg。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_actual_delivery`
- 数量范围：未确立的独立数量不确定性；不是默认值或截断限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_product_transferred_to_controlled_delivery
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 独立交换：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816` (`delivery_diesel`)

参考门前实际交付的独立交换；支付方或发票不决定门。证实旁路时不虚构交付，未知路线不能当旁路。完整服务与组成燃料/排放不能重复。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass / kg
- 数量规则：仅在实际参考门前交付启用时，独立记录本项原生数量、实际损失、状态、源/接收转移和完整服务覆盖；按归属量除以Q，不固定为1kg；L燃料须用实测/供应密度换算kg。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_actual_delivery`
- 数量范围：未确立的独立数量不确定性；不是默认值或截断限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_delivery_diesel
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 独立交换：养殖鲍鱼实际交付后批次 (`delivered_farmed_abalone`)

参考门前实际交付的独立交换；支付方或发票不决定门。证实旁路时不虚构交付，未知路线不能当旁路。完整服务与组成燃料/排放不能重复。

- 选定流：养殖鲍鱼实际交付后批次
- 流属性/单位：Mass / kg
- 数量规则：仅在实际参考门前交付启用时，独立记录本项原生数量、实际损失、状态、源/接收转移和完整服务覆盖；按归属量除以Q，不固定为1kg；L燃料须用实测/供应密度换算kg。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_actual_delivery`
- 数量范围：未确立的独立数量不确定性；不是默认值或截断限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_delivered_farmed_abalone
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

### 过程：声明最终物理交接（`gate_release`）

#### 输入

##### 产品流

###### 独立交换：养殖鲍鱼最终门实际到货批次 (`gate_arriving_product`)

每份数据包声明一个实际最终物理交接门gate_release、一个实际物种/形态/状态和验收条件。包装及参考门前实际交付是中间实测交接；只选一条真实到门路径，未知交付状态不能默认旁路。Q是同批/匹配报告群体在该门经校准称量的正验收净动物质量，排除包装皮重、游离水/冰及拒收，保留声明动物形态中的原生壳/组织/水分。只有declared_gate_reference最终输出归一化为1kg，所有此前数量独立实测。

- 选定流：养殖鲍鱼最终门实际到货批次
- 流属性/单位：Mass / kg
- 数量规则：独立记录验收前实际到货净动物质量q并与真实包装或交付输出配对；按归属量除以Q，保留拒收、损失和库存，不固定为1kg。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gate_release`
- 数量范围：未确立的独立数量不确定性；不是默认值或截断限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_gate_arriving_product
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 独立交换：养殖鲍鱼在声明最终物理交接门的验收产品 (`declared_gate_reference`)

每份数据包声明一个实际最终物理交接门gate_release、一个实际物种/形态/状态和验收条件。包装及参考门前实际交付是中间实测交接；只选一条真实到门路径，未知交付状态不能默认旁路。Q是同批/匹配报告群体在该门经校准称量的正验收净动物质量，排除包装皮重、游离水/冰及拒收，保留声明动物形态中的原生壳/组织/水分。只有declared_gate_reference最终输出归一化为1kg，所有此前数量独立实测。

- 选定流：养殖鲍鱼在声明最终物理交接门的验收产品
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_gate_release`
- 数量范围：同批正验收净质量Q/Q恒等式；非收率
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`pcr-gate-accounting-method`

##### 废物流

##### 基本流


## 7. 分配与共产品处理

当批次记录可按养殖单元、采收批次、等级、产品形态或去向分割负荷时，应避免分配。整只带壳的活、鲜、冷藏、规格等级和低等级产品应先按实测质量分开，再应用分配。

当一个前景批次产生多个 CPC 04412 范围内的可销售鲍鱼等级时，除非有经审查的市场价值规则，否则共享的养成、采收、暂养和包装负荷按声明产品质量分配。贝壳、死亡物、废水、污泥、生物污损残留以及破损或死亡产品属于废物或处理输出，除非它们以独立产品数据集和参考流出售。

若同一场地在同一系统中养殖其他物种或共产品，共享能源、水、饲料准备和维护记录按计量养殖单元服务量、生物量-时间或产品质量的优先顺序分配。必须披露所选分配基准。

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_seed_stocking_records` | `seed_supply_hatchery_and_nursery` | seed or juvenile abalone input and stocked juvenile output | hatchery transfer, supplier invoice, stocking log, health certificate | species; batch id; supplier or hatchery; count; mean mass; total mass; size grade; health status; transfer date；真实节点、原始批次/每1000kg/阶段基准、各自原生数量q及单位、阶段产出S、最终门同批正验收净质量Q、库存/损失/去向、独立范围证据 | supplier records, hatchery logs, stocking count, sampling and weighing；仅采集本节点实际事件；保留原始分母，阶段基准须以独立实测S恢复原数量后按Q归一化；不得默认阶段产出等于Q。 | item and kg | each stocking event | complete production batch or reporting year | supplier, hatchery, nursery, and grow-out unit | 每 1 kg 参考流 | signed transfer records, sampling sheet, weighing record, health or permit evidence |
| `cp_feed_records` | `growout_husbandry` | macroalgae, seaweed, and formulated feed | feed issue log, supplier invoice, feed formulation, leftover record | feed product; wet/dry/as-fed basis; moisture; quantity issued; leftovers; feed source; marine ingredient fraction when relevant；真实节点、原始批次/每1000kg/阶段基准、各自原生数量q及单位、阶段产出S、最终门同批正验收净质量Q、库存/损失/去向、独立范围证据 | feed inventory, supplier declarations, farm feeding logs；仅采集本节点实际事件；保留原始分母，阶段基准须以独立实测S恢复原数量后按Q归一化；不得默认阶段产出等于Q。 | kg | each feed issue or batch summary | full grow-out period | grow-out unit or farm | 每 1 kg 参考流 | feed purchase records, supplier formulation, stock movement logs |
| `cp_water_intake_and_discharge_records_seed_supply_hatchery_and_nursery` | `seed_supply_hatchery_and_nursery` | water intake, pumped seawater, live holding water, wastewater, and discharge | meter readings, pump logs, discharge permits, water-quality records | intake volume; make-up water; recirculated volume; discharge volume; water source; discharge route; treatment; salinity where relevant；真实节点、原始批次/每1000kg/阶段基准、各自原生数量q及单位、阶段产出S、最终门同批正验收净质量Q、库存/损失/去向、独立范围证据 | meter, pump runtime calculation, permit report, or water management log；仅采集本节点实际事件；保留原始分母，阶段基准须以独立实测S恢复原数量后按Q归一化；不得默认阶段产出等于Q。 | m3 or kg | daily, batch, or reporting period | process-specific operation period | hatchery, grow-out, live holding, packhouse, and discharge point | 每 1 kg 参考流 | meter calibration, permit report, water-quality monitoring record |
| `cp_water_intake_and_discharge_records_growout_husbandry` | `growout_husbandry` | water intake, pumped seawater, live holding water, wastewater, and discharge | meter readings, pump logs, discharge permits, water-quality records | intake volume; make-up water; recirculated volume; discharge volume; water source; discharge route; treatment; salinity where relevant；真实节点、原始批次/每1000kg/阶段基准、各自原生数量q及单位、阶段产出S、最终门同批正验收净质量Q、库存/损失/去向、独立范围证据 | meter, pump runtime calculation, permit report, or water management log；仅采集本节点实际事件；保留原始分母，阶段基准须以独立实测S恢复原数量后按Q归一化；不得默认阶段产出等于Q。 | m3 or kg | daily, batch, or reporting period | process-specific operation period | hatchery, grow-out, live holding, packhouse, and discharge point | 每 1 kg 参考流 | meter calibration, permit report, water-quality monitoring record |
| `cp_water_intake_and_discharge_records_harvest_grading_and_live_holding` | `harvest_grading_and_live_holding` | water intake, pumped seawater, live holding water, wastewater, and discharge | meter readings, pump logs, discharge permits, water-quality records | intake volume; make-up water; recirculated volume; discharge volume; water source; discharge route; treatment; salinity where relevant；真实节点、原始批次/每1000kg/阶段基准、各自原生数量q及单位、阶段产出S、最终门同批正验收净质量Q、库存/损失/去向、独立范围证据 | meter, pump runtime calculation, permit report, or water management log；仅采集本节点实际事件；保留原始分母，阶段基准须以独立实测S恢复原数量后按Q归一化；不得默认阶段产出等于Q。 | m3 or kg | daily, batch, or reporting period | process-specific operation period | hatchery, grow-out, live holding, packhouse, and discharge point | 每 1 kg 参考流 | meter calibration, permit report, water-quality monitoring record |
| `cp_energy_records_seed_supply_hatchery_and_nursery` | `seed_supply_hatchery_and_nursery` | electricity and non-fuel energy | meter reading, utility bill, submeter, equipment log | electricity use; meter id; process allocation; operating hours; chilling or pumping service；真实节点、原始批次/每1000kg/阶段基准、各自原生数量q及单位、阶段产出S、最终门同批正验收净质量Q、库存/损失/去向、独立范围证据 | utility bill, submeter, runtime allocation；仅采集本节点实际事件；保留原始分母，阶段基准须以独立实测S恢复原数量后按Q归一化；不得默认阶段产出等于Q。 | kWh or MJ | monthly or batch | reporting period and production batch overlap | farm, hatchery, grow-out unit, or packhouse | 每 1 kg 参考流 | utility bill, submeter records, allocation worksheet |
| `cp_energy_records_growout_husbandry` | `growout_husbandry` | electricity and non-fuel energy | meter reading, utility bill, submeter, equipment log | electricity use; meter id; process allocation; operating hours; chilling or pumping service；真实节点、原始批次/每1000kg/阶段基准、各自原生数量q及单位、阶段产出S、最终门同批正验收净质量Q、库存/损失/去向、独立范围证据 | utility bill, submeter, runtime allocation；仅采集本节点实际事件；保留原始分母，阶段基准须以独立实测S恢复原数量后按Q归一化；不得默认阶段产出等于Q。 | kWh or MJ | monthly or batch | reporting period and production batch overlap | farm, hatchery, grow-out unit, or packhouse | 每 1 kg 参考流 | utility bill, submeter records, allocation worksheet |
| `cp_energy_records_harvest_grading_and_live_holding` | `harvest_grading_and_live_holding` | electricity and non-fuel energy | meter reading, utility bill, submeter, equipment log | electricity use; meter id; process allocation; operating hours; chilling or pumping service；真实节点、原始批次/每1000kg/阶段基准、各自原生数量q及单位、阶段产出S、最终门同批正验收净质量Q、库存/损失/去向、独立范围证据 | utility bill, submeter, runtime allocation；仅采集本节点实际事件；保留原始分母，阶段基准须以独立实测S恢复原数量后按Q归一化；不得默认阶段产出等于Q。 | kWh or MJ | monthly or batch | reporting period and production batch overlap | farm, hatchery, grow-out unit, or packhouse | 每 1 kg 参考流 | utility bill, submeter records, allocation worksheet |
| `cp_fuel_and_transport_records_growout_husbandry` | `growout_husbandry` | diesel, vessel fuel, vehicle fuel, and delivery energy | fuel purchase, tank drawdown, vessel log, delivery log | fuel type; quantity; route; vehicle or vessel; distance; load; process purpose；真实节点、原始批次/每1000kg/阶段基准、各自原生数量q及单位、阶段产出S、最终门同批正验收净质量Q、库存/损失/去向、独立范围证据 | fuel invoice, tank gauge, vehicle or vessel log；仅采集本节点实际事件；保留原始分母，阶段基准须以独立实测S恢复原数量后按Q归一化；不得默认阶段产出等于Q。 | L, kg, MJ, or tonne-km | each trip or reporting period | grow-out, harvest, or delivery period | directly controlled routes and equipment | 每 1 kg 参考流 | fuel invoice, odometer or vessel log, delivery manifest |
| `cp_fuel_and_transport_records_delivery_to_declared_gate` | `delivery_to_declared_gate` | diesel, vessel fuel, vehicle fuel, and delivery energy | fuel purchase, tank drawdown, vessel log, delivery log | fuel type; quantity; route; vehicle or vessel; distance; load; process purpose；真实节点、原始批次/每1000kg/阶段基准、各自原生数量q及单位、阶段产出S、最终门同批正验收净质量Q、库存/损失/去向、独立范围证据 | fuel invoice, tank gauge, vehicle or vessel log；仅采集本节点实际事件；保留原始分母，阶段基准须以独立实测S恢复原数量后按Q归一化；不得默认阶段产出等于Q。 | L, kg, MJ, or tonne-km | each trip or reporting period | grow-out, harvest, or delivery period | directly controlled routes and equipment | 每 1 kg 参考流 | fuel invoice, odometer or vessel log, delivery manifest |
| `cp_mortality_and_residue_records_seed_supply_hatchery_and_nursery` | `seed_supply_hatchery_and_nursery` | mortalities, shells, residues, rejects, and biofouling | mortality log, reject sheet, waste manifest, recovery record | count; mass; reason; fate; date; culture unit; shell or organic residue category；真实节点、原始批次/每1000kg/阶段基准、各自原生数量q及单位、阶段产出S、最终门同批正验收净质量Q、库存/损失/去向、独立范围证据 | farm log, weighing, waste contractor record；仅采集本节点实际事件；保留原始分母，阶段基准须以独立实测S恢复原数量后按Q归一化；不得默认阶段产出等于Q。 | item and kg | event, batch, or reporting period | full production batch or pack-out period | hatchery, grow-out unit, packhouse, waste handling route | 每 1 kg 参考流 | signed waste record, farm mortality log, mass balance |
| `cp_mortality_and_residue_records_growout_husbandry` | `growout_husbandry` | mortalities, shells, residues, rejects, and biofouling | mortality log, reject sheet, waste manifest, recovery record | count; mass; reason; fate; date; culture unit; shell or organic residue category；真实节点、原始批次/每1000kg/阶段基准、各自原生数量q及单位、阶段产出S、最终门同批正验收净质量Q、库存/损失/去向、独立范围证据 | farm log, weighing, waste contractor record；仅采集本节点实际事件；保留原始分母，阶段基准须以独立实测S恢复原数量后按Q归一化；不得默认阶段产出等于Q。 | item and kg | event, batch, or reporting period | full production batch or pack-out period | hatchery, grow-out unit, packhouse, waste handling route | 每 1 kg 参考流 | signed waste record, farm mortality log, mass balance |
| `cp_mortality_and_residue_records_harvest_grading_and_live_holding` | `harvest_grading_and_live_holding` | mortalities, shells, residues, rejects, and biofouling | mortality log, reject sheet, waste manifest, recovery record | count; mass; reason; fate; date; culture unit; shell or organic residue category；真实节点、原始批次/每1000kg/阶段基准、各自原生数量q及单位、阶段产出S、最终门同批正验收净质量Q、库存/损失/去向、独立范围证据 | farm log, weighing, waste contractor record；仅采集本节点实际事件；保留原始分母，阶段基准须以独立实测S恢复原数量后按Q归一化；不得默认阶段产出等于Q。 | item and kg | event, batch, or reporting period | full production batch or pack-out period | hatchery, grow-out unit, packhouse, waste handling route | 每 1 kg 参考流 | signed waste record, farm mortality log, mass balance |
| `cp_harvest_and_product_records_growout_husbandry` | `growout_husbandry` | harvest-size product, marketable reference product, and off-grade product | harvest log, grading sheet, sales invoice, pack-out record | harvest date; culture unit; product form; live/fresh/chilled state; whole shell-on basis; grade; count; mass; destination；真实节点、原始批次/每1000kg/阶段基准、各自原生数量q及单位、阶段产出S、最终门同批正验收净质量Q、库存/损失/去向、独立范围证据 | harvest weighing, grader records, packhouse records, invoice；仅采集本节点实际事件；保留原始分母，阶段基准须以独立实测S恢复原数量后按Q归一化；不得默认阶段产出等于Q。 | kg and item | each harvest or pack-out batch | declared production batch or reporting period | harvest area, packhouse, and declared gate | 每 1 kg 参考流 | calibrated scale record, sales invoice, batch reconciliation |
| `cp_harvest_and_product_records_harvest_grading_and_live_holding` | `harvest_grading_and_live_holding` | harvest-size product, marketable reference product, and off-grade product | harvest log, grading sheet, sales invoice, pack-out record | harvest date; culture unit; product form; live/fresh/chilled state; whole shell-on basis; grade; count; mass; destination；真实节点、原始批次/每1000kg/阶段基准、各自原生数量q及单位、阶段产出S、最终门同批正验收净质量Q、库存/损失/去向、独立范围证据 ；实测包装/暂养期初期末库存；有日期的收获接收与向后转移记录；分开的可销售降级品、拒收和其他动物损失质量；有独立证据的有符号动物净质量变化；物种、批次、产品状态、完整动物净称量基准及库存负担结转 | harvest weighing, grader records, packhouse records, invoice；仅采集本节点实际事件；保留原始分母，阶段基准须以独立实测S恢复原数量后按Q归一化；不得默认阶段产出等于Q。 ；按同一期间及可追溯批次，以完整带壳动物净质量核对，独立称量库存及各去向；跨期结转库存及其累计负担，不作新增收获。实际有符号的生物/动物体内水分质量变化，必须有独立测量或有记录的物料平衡方法及不确定性，不得以差额倒填。 | kg and item | each harvest or pack-out batch | declared production batch or reporting period | harvest area, packhouse, and declared gate | 每 1 kg 参考流 | calibrated scale record, sales invoice, batch reconciliation |
| `cp_packaging_records` | `harvest_grading_and_live_holding` | boxes, liners, bags, labels, ice packs, and pallets | packaging issue log, purchase invoice, bill of materials | packaging item; material; item count; tare mass; capacity; reuse rate; destination；真实节点、原始批次/每1000kg/阶段基准、各自原生数量q及单位、阶段产出S、最终门同批正验收净质量Q、库存/损失/去向、独立范围证据 | warehouse issue record, bill of materials, supplier invoice；仅采集本节点实际事件；保留原始分母，阶段基准须以独立实测S恢复原数量后按Q归一化；不得默认阶段产出等于Q。 | kg and item | each pack-out batch or reporting period | pack-out period | packhouse and delivery preparation | 每 1 kg 参考流 | supplier specification, packaging issue sheet, scale record |
| `cp_seed_stocking_records_growout_husbandry` | `growout_husbandry` | seed or juvenile abalone input and stocked juvenile output | hatchery transfer, supplier invoice, stocking log, health certificate | species; batch id; supplier or hatchery; count; mean mass; total mass; size grade; health status; transfer date | supplier records, hatchery logs, stocking count, sampling and weighing；采集本节点独立接收或转移记录，与发送方配对，不重复计入生产负担。 | item and kg | each stocking event | complete production batch or reporting year | supplier, hatchery, nursery, and grow-out unit | 每 1 kg 参考流 | signed transfer records, sampling sheet, weighing record, health or permit evidence |
| `cp_actual_delivery` | `delivery_to_declared_gate` | 实际参考门前交付及损失 | 原始计量、称重、库存和物理交接记录 | 节点/批次/实际物种/状态/形态；每项原生数量q/单位；原始批次/每1000kg/阶段S；同批正Q；真实路线/接收者/时间；毛重/皮重/水冰/拒收；损失/库存/去向；实际载荷/距离/空返；服务范围；独立范围/换算证据 | 仅计量本节点各项实际交换；产品独立经校准称重并与发送方配对，验收Q在同一实际最终门独立测量；保留原始分母及所有去向，不重复扣除拒收 | kg; kWh; m3; actual native units | 每次事件及仪表期间 | 完整实际批次/期间，含失败、清理、库存及资产服务 | `delivery_to_declared_gate` | 每 1 kg 参考流 | 校准、原始记录、实际来源/去向、服务范围、独立范围/换算证据 |
| `cp_gate_release` | `gate_release` | 唯一最终验收、拒收及损失 | 原始计量、称重、库存和物理交接记录 | 节点/批次/实际物种/状态/形态；每项原生数量q/单位；原始批次/每1000kg/阶段S；同批正Q；真实路线/接收者/时间；毛重/皮重/水冰/拒收；损失/库存/去向；实际载荷/距离/空返；服务范围；独立范围/换算证据 | 仅计量本节点各项实际交换；产品独立经校准称重并与发送方配对，验收Q在同一实际最终门独立测量；保留原始分母及所有去向，不重复扣除拒收 | kg; kWh; m3; actual native units | 每次事件及仪表期间 | 完整实际批次/期间，含失败、清理、库存及资产服务 | `gate_release` | 每 1 kg 参考流 | 校准、原始记录、实际来源/去向、服务范围、独立范围/换算证据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_flow` | all foreground rows | 实际可归属原生数量q除以同批实际最终门正验收净质量Q。保留原始批次、每1000kg及阶段S基准，并应用same_gate_normalization的显式换算；Q不等于默认包装或配送产出。 | q; Q; cp_gate_release; own-node records | native unit per 1 kg reference flow | `pcr-gate-accounting-method` |
| `calculate_stocking_survival` | seed_supply_hatchery_and_nursery and growout_husbandry | survival_to_harvest = harvested_count / stocked_count, with count-to-mass conversion retained separately. | stocked_count; harvested_count; mortality_count | survival indicator and QA check | `mass-balance-identity` |
| `calculate_feed_conversion_indicator` | growout_husbandry | feed_conversion_indicator = net_feed_mass / harvest_size_abalone_mass on the declared feed mass basis. Do not compare wet and dry feed without conversion evidence. | feed_mass; moisture basis; harvest_size_abalone_mass | feed mass per kg harvest-size abalone | `asc-farm-standard-2025` |
| `reconcile_packout_mass` | harvest_grading_and_live_holding | opening_packout_stock + harvested_input_mass + evidenced_net_animal_mass_change = measured_packout_onward_mass + offgrade_saleable_mass + reject_mass + measured_local_animal_loss + closing_packout_stock. | opening_packout_stock; harvested_input_mass; evidenced_net_animal_mass_change; measured_packout_onward_mass; offgrade_saleable_mass; reject_mass; measured_local_animal_loss; closing_packout_stock | pack-out mass balance | `mass-balance-identity` |
| `calculate_controlled_discharge` | water intake and discharge rows | 优先使用外排边界的实测排水量。缺少计量时，只有在全部重要项有证据的同一时段完整水量平衡下，才可按外部进水和进入受控系统的降水，扣除蒸发、随产品/废物外带水、其他外部移出水及储水变化来估算外排量。内部循环回用不跨越系统外边界，在两侧抵消，不能再次从进水扣除。质量/体积换算须有实际温度、盐度及密度依据；缺项或负的闭合残差不得直接当作排放、吸收或零值。受控排水与不受控环境海水交换分开。 | intake; discharge; recirculated volume; retained water | discharge volume by process | `mass-balance-identity` |
| `calculate_delivery_transport_service` | delivery_to_declared_gate | 按每段实际路线，将实际承运本货批的货载质量（吨）乘该段距离（km），再按匹配最终参考产品的实际产量归一化。货载包含实际随行的载体水、冰和包装，不等于参考产品净质量。共载时使用有因果依据的质量、占用体积或其他已说明分配键。记录空返、冷却、增氧和暂养服务的覆盖；不得把空返的零货载视为零运输负荷。若以实测燃料和直接排放建模，不得重复叠加已覆盖同一负荷的运输服务。 | delivered mass; controlled distance | tonne-kilometres | `mass-balance-identity` |
| `same_gate_normalization` | all inventory rows | 实测可归属原生数量q除以同批最终门正验收净动物质量Q，得到每1kg交换。每1000kg=1000×q/Q；仅同一Q/形态/群体的原每1000kg量才可准确/1000。若原单位为每阶段输出S，先乘以独立实测S恢复分子，再除Q；原生数量、阶段收率、损失/库存和计量换算均保留。只有最终Q/Q=1，内部输出不固定为1。 | q; stage S; Q; cp_gate_release; own-node records | native unit per 1 kg reference flow | `pcr-gate-accounting-method` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `identity_and_scope` | all datasets | Declare CPC code, species or hybrid, culture system, seed source, product form, geography, and declared gate. | dataset metadata, stocking records, product description, permit or certification evidence |
| `mass_basis_consistency` | reference product, seed, harvest, pack-out, and rejects | Keep whole shell-on live, fresh, chilled, drained, wet, and dry bases separate unless measured conversion evidence exists. | scale records, product specifications, moisture or drainage evidence |
| `feed_and_water_disclosure` | grow-out and hatchery rows | Retain feed type, feed basis, water source, water discharge route, and water quality monitoring where applicable. | feed logs, supplier data, water meter, discharge permit, monitoring report |
| `mortality_and_residue_completeness` | seed, grow-out, and pack-out rows | Record mortalities, rejects, shell residue, biofouling residue, and fate by batch or reporting period. | mortality log, reject sheet, waste manifest, recovery record |
| `allocation_transparency` | multi-grade or multi-species systems | State the partitioning or allocation basis before publishing a secondary or background dataset. | allocation worksheet, grade mass records, culture-unit records |
| `temporal_representativeness` | all foreground rows | Cover a complete production batch, harvest lot, or representative reporting period; disclose partial-cycle datasets. | production calendar, stocking and harvest dates, reporting-period records |
| `dq_atomic_completion` | 全部过程和补充清单义务 | 以下是必填的逐实际身份采集义务，而非交换、默认投入或排放。每个实际物质、产品、废物流、排放物及受纳介质须分别建卡、独立计量，并保留实际单位、原始批次/阶段产量、最终交接点参考产量、归属/分配及范围/不确定性证据。由原始总量按同批最终产量归一化；仅有阶段归一化数据时，须保留阶段实测产量以恢复原始量，不能假定阶段产量等于最终量。不把集合总量、混合单位范围、默认估计或一个 UUID 复制给子流；未知不等于零。购入物料是产品输入，直接取用自然资源才是基本输入；死亡/处理废物、直接释放及可用共产品按实际去向分别确定方向和类型。 | 逐流覆盖台账、计量/采样、分配、原始/最终产量、身份和去向记录 |
| `dq_complete_hatchery_nursery_water` | `seed_supply_hatchery_and_nursery`; 育苗和中间培育用水 | 为每个实际组成流分别履行以下采集责任；类别筛查界限不作为子流默认或自动截断：本行覆盖场内育苗和中间培育使用的计量工艺水、海水或循环系统补充水。 ; 流属性/单位：Mass or volume / kg or m3 ; 数量规则：实测取水量、补充水量或循环更换水量 ; 数值来源模式：前景记录（`foreground_record`） ; 适用范围：场址特定（`site_specific`） ; 归一化基准：每 1,000 kg 市场化鲍鱼输出，或归一化前按投苗批次记录 ; 基准类型：过程输出（`process_output`） ; 证据类型：采集记录（`collected_record`） ; 采集协议：`cp_water_intake_and_discharge_records_seed_supply_hatchery_and_nursery` ; 来源：`fao-abalone-breeding-1990` ; 数量范围：暂定育苗和中间培育用水筛选估算 ; 范围角色：默认估算（`default_estimate`） ; 下限：0 ; 上限：1000 ; 单位：m3/1,000 kg marketable abalone ; 基准：相对市场化输出的苗种生产泵送或供应用水宽泛首轮估计 ; 基准类型：过程输出（`process_output`） ; 证据类型：推理估算（`reasoned_estimate`） | 实际记录、独立身份与数量及范围/不确定性依据 |
| `dq_complete_hatchery_mortalities_and_biofouling_residue` | `seed_supply_hatchery_and_nursery`; 育苗死亡物和生物污损残留 | 为每个实际组成流分别履行以下采集责任；类别筛查界限不作为子流默认或自动截断：本行记录从场内育苗和中间培育系统移除的卵、幼体、幼鲍、生物污损、藻类残余、贝壳碎片或其他有机残留。 ; 流属性/单位：Mass / kg ; 数量规则：实测或估计残留和死亡物质量，并声明去向 ; 数值来源模式：前景记录（`foreground_record`） ; 适用范围：场址特定（`site_specific`） ; 归一化基准：按投放幼鲍批次记录，并在归一化后换算为每 1,000 kg 市场化输出 ; 基准类型：过程输出（`process_output`） ; 证据类型：采集记录（`collected_record`） ; 采集协议：`cp_mortality_and_residue_records_seed_supply_hatchery_and_nursery` ; 数量范围：暂定育苗残留筛选估算 ; 范围角色：默认估算（`default_estimate`） ; 下限：0 ; 上限：1 ; 单位：kg residue/kg stocked juvenile live mass ; 基准：残留或死亡物质量相对投放幼鲍活质量的宽泛首轮估计 ; 基准类型：过程输出（`process_output`） ; 证据类型：推理估算（`reasoned_estimate`） | 实际记录、独立身份与数量及范围/不确定性依据 |
| `dq_complete_macroalgae_or_seaweed_feed` | `growout_husbandry`; 大型藻类或海藻饲料 | 为每个实际组成流分别履行以下采集责任；类别筛查界限不作为子流默认或自动截断：本行记录供给鲍鱼养殖单元的海带、Laminaria、Gracilaria 或其他大型藻类饲料。 ; 流属性/单位：Mass / kg wet or dry basis declared ; 数量规则：投入养殖单元的实测饲料量，声明湿基或干基，并在重要时记录剩料 ; 数值来源模式：前景记录（`foreground_record`） ; 适用范围：场址特定（`site_specific`） ; 归一化基准：每 1,000 kg 采收规格鲍鱼输出 ; 基准类型：过程输出（`process_output`） ; 证据类型：采集记录（`collected_record`） ; 采集协议：`cp_feed_records` ; 来源：`seafood-watch-abalone-worldwide-2022`, `fao-abalone-breeding-1990` ; 数量范围：暂定大型藻类饲料筛选估算 ; 范围角色：默认估算（`default_estimate`） ; 下限：0 ; 上限：30000 ; 单位：kg wet macroalgae/1,000 kg marketable abalone ; 基准：每市场化输出的大型藻类湿料投喂量宽泛首轮估计 ; 基准类型：过程输出（`process_output`） ; 证据类型：推理估算（`reasoned_estimate`） | 实际记录、独立身份与数量及范围/不确定性依据 |
| `dq_complete_formulated_aquaculture_feed` | `growout_husbandry`; 配合水产饲料 | 为每个实际组成流分别履行以下采集责任；类别筛查界限不作为子流默认或自动截断：当配合颗粒或混合饲料补充或替代大型藻类饲料时使用本行。 ; 流属性/单位：Mass / kg as-fed or dry basis declared ; 数量规则：按产品和批次记录的实测饲料投入，并保留供应商配方或饲料类别 ; 数值来源模式：前景记录（`foreground_record`） ; 适用范围：产品特定（`product_specific`） ; 归一化基准：每 1,000 kg 采收规格鲍鱼输出 ; 基准类型：过程输出（`process_output`） ; 证据类型：采集记录（`collected_record`） ; 采集协议：`cp_feed_records` ; 来源：`asc-farm-standard-2025`, `seafood-watch-abalone-worldwide-2022` ; 数量范围：暂定配合饲料筛选估算 ; 范围角色：默认估算（`default_estimate`） ; 下限：0 ; 上限：5000 ; 单位：kg formulated feed/1,000 kg marketable abalone ; 基准：每市场化输出的配合饲料投入宽泛首轮估计 ; 基准类型：过程输出（`process_output`） ; 证据类型：推理估算（`reasoned_estimate`） | 实际记录、独立身份与数量及范围/不确定性依据 |
| `dq_complete_growout_water_movement_or_makeup` | `growout_husbandry`; 养成水体流动或补充水 | 为每个实际组成流分别履行以下采集责任；类别筛查界限不作为子流默认或自动截断：本行记录陆基或循环养成系统的泵送海水、补充水或供应水。对于开放海区增养殖或网箱系统，仅记录前景可控的泵送、冲洗或供应水。 ; 流属性/单位：Mass or volume / kg or m3 ; 数量规则：计量取水、泵送量或补充水量，并声明系统类型 ; 数值来源模式：前景记录（`foreground_record`） ; 适用范围：技术特定（`technology_specific`） ; 归一化基准：每 1,000 kg 采收规格鲍鱼输出 ; 基准类型：过程输出（`process_output`） ; 证据类型：采集记录（`collected_record`） ; 采集协议：`cp_water_intake_and_discharge_records_growout_husbandry` ; 来源：`asc-farm-standard-2025` ; 数量范围：暂定养成用水筛选估算 ; 范围角色：默认估算（`default_estimate`） ; 下限：0 ; 上限：100000 ; 单位：m3/1,000 kg marketable abalone ; 基准：跨 RAS、流水槽和流水式系统的泵送或供应用水宽泛首轮估计 ; 基准类型：过程输出（`process_output`） ; 证据类型：推理估算（`reasoned_estimate`） | 实际记录、独立身份与数量及范围/不确定性依据 |
| `dq_complete_growout_mortalities_and_shell_residue` | `growout_husbandry`; 养成死亡物和贝壳残留 | 为每个实际组成流分别履行以下采集责任；类别筛查界限不作为子流默认或自动截断：本行记录养成期间移除的死亡物、贝壳、破损产品、捕食者损伤个体和有机残留。 ; 流属性/单位：Mass / kg ; 数量规则：实测死亡数量、死亡质量、贝壳残留和处置或回收路径 ; 数值来源模式：前景记录（`foreground_record`） ; 适用范围：场址特定（`site_specific`） ; 归一化基准：按养成批次记录，并在归一化后换算为每 1,000 kg 市场化输出 ; 基准类型：过程输出（`process_output`） ; 证据类型：采集记录（`collected_record`） ; 采集协议：`cp_mortality_and_residue_records_growout_husbandry` ; 来源：`asc-farm-standard-2025` ; 数量范围：暂定死亡物和残留筛选估算 ; 范围角色：默认估算（`default_estimate`） ; 下限：0 ; 上限：2 ; 单位：kg mortality or residue/kg marketable abalone ; 基准：死亡物和残留质量相对市场化输出的宽泛首轮估计 ; 基准类型：过程输出（`process_output`） ; 证据类型：推理估算（`reasoned_estimate`） | 实际记录、独立身份与数量及范围/不确定性依据 |
| `dq_complete_growout_wastewater_or_discharge` | `growout_husbandry`; 养成废水或排放养殖水 | 为每个实际组成流分别履行以下采集责任；类别筛查界限不作为子流默认或自动截断：当养殖场存在点源排放或可控水处理过程时，本行记录排放水、污泥、沉降固体或废水处理输出。 ; 流属性/单位：Volume or mass / m3 or kg ; 数量规则：实测排放体积，或由取水量扣除循环量和留存水量计算 ; 数值来源模式：计算值（`calculated_value`） ; 适用范围：技术特定（`technology_specific`） ; 归一化基准：每 1,000 kg 采收规格鲍鱼输出 ; 基准类型：过程输出（`process_output`） ; 证据类型：基于采集记录计算（`calculated_from_collection`） ; 采集协议：`cp_water_intake_and_discharge_records_growout_husbandry` ; 来源：`asc-farm-standard-2025` ; 数量范围：暂定养成排放筛选估算 ; 范围角色：默认估算（`default_estimate`） ; 下限：0 ; 上限：100000 ; 单位：m3/1,000 kg marketable abalone ; 基准：跨 RAS、流水槽和流水式系统的可控排放宽泛首轮估计 ; 基准类型：过程输出（`process_output`） ; 证据类型：推理估算（`reasoned_estimate`） | 实际记录、独立身份与数量及范围/不确定性依据 |
| `dq_complete_live_holding_and_chilling_water` | `harvest_grading_and_live_holding`; 活体暂养和冷藏用水 | 为每个实际组成流分别履行以下采集责任；类别筛查界限不作为子流默认或自动截断：本行记录采收后的净化、暂养、冰融水或活体暂养系统用水。 ; 流属性/单位：Mass or volume / kg or m3 ; 数量规则：净化、暂养、活体保持、冷藏和清洗用水或冰的实测使用量 ; 数值来源模式：前景记录（`foreground_record`） ; 适用范围：场址特定（`site_specific`） ; 归一化基准：每 1,000 kg 参考产品 ; 基准类型：参考流（`reference_flow`） ; 证据类型：采集记录（`collected_record`） ; 采集协议：`cp_water_intake_and_discharge_records_harvest_grading_and_live_holding` ; 数量范围：暂定暂养和冷藏用水筛选估算 ; 范围角色：默认估算（`default_estimate`） ; 下限：0 ; 上限：2000 ; 单位：m3/1,000 kg reference product ; 基准：每参考产品的活体暂养、净化和冷藏用水宽泛首轮估计 ; 基准类型：参考流（`reference_flow`） ; 证据类型：推理估算（`reasoned_estimate`） | 实际记录、独立身份与数量及范围/不确定性依据 |
| `dq_complete_packaging_materials` | `harvest_grading_and_live_holding`; 包装材料 | 为每个实际组成流分别履行以下采集责任；类别筛查界限不作为子流默认或自动截断：本行记录随产品跨越前景边界的袋、箱、内衬、保温容器、冰袋、标签和托盘。 ; 流属性/单位：Mass or item count / kg or item ; 数量规则：实测包装件数和材料质量；计数记录必须包含容量或皮重 ; 数值来源模式：前景记录（`foreground_record`） ; 适用范围：产品特定（`product_specific`） ; 归一化基准：每 1,000 kg 参考产品 ; 基准类型：参考流（`reference_flow`） ; 证据类型：采集记录（`collected_record`） ; 采集协议：`cp_packaging_records` ; 数量范围：暂定包装筛选估算 ; 范围角色：默认估算（`default_estimate`） ; 下限：0 ; 上限：500 ; 单位：kg packaging/1,000 kg reference product ; 基准：每参考产品的包装材料质量宽泛首轮估计 ; 基准类型：参考流（`reference_flow`） ; 证据类型：推理估算（`reasoned_estimate`） | 实际记录、独立身份与数量及范围/不确定性依据 |
| `dq_complete_offgrade_damaged_or_dead_product_packout` | `harvest_grading_and_live_holding`; 包装阶段不合格、损伤或死亡产品 | 为每个实际组成流分别履行以下采集责任；类别筛查界限不作为子流默认或自动截断：本行记录非市场化产品、包装阶段死亡物、破碎贝壳、整只动物处理残余和拒收个体。 ; 流属性/单位：Mass / kg ; 数量规则：按去向和原因实测拒收质量 ; 数值来源模式：前景记录（`foreground_record`） ; 适用范围：场址特定（`site_specific`） ; 归一化基准：每 1,000 kg 参考产品 ; 基准类型：参考流（`reference_flow`） ; 证据类型：采集记录（`collected_record`） ; 采集协议：`cp_mortality_and_residue_records_harvest_grading_and_live_holding` ; 同阶段动物材料拒收比例诊断：仅对相同物理状态且不含新增水、包装、沉积物或异物的实际进料动物质量，才有 0 <= r <= 1。该关系不限制混合残留或每最终 Q 的数量；须独立采集各实际流的范围证据。 | 实际记录、独立身份与数量及范围/不确定性依据 |
| `dq_range_seed_or_juvenile_abalone_input` | `seed_supply_hatchery_and_nursery`; `seed_or_juvenile_abalone_input` | 独立采集本流自身范围/不确定性证据。下列按声明基准表达的推理筛选背景不是最终Q归一化范围或强制截断： ; - 数量范围：暂定苗种投入筛选估算 ;   - 范围角色：默认估算（`default_estimate`） ;   - 下限：0.01 ;   - 上限：2 ;   - 单位：kg seed or juvenile live mass/kg marketable abalone ;   - 基准：苗种或幼鲍质量相对市场化输出的宽泛首轮估计 ;   - 基准类型：过程输出（`process_output`） ;   - 证据类型：推理估算（`reasoned_estimate`） ;  ;  保留原始分母S及单位；仅在原每1000kg确属同一最终Q/形态/群体时才准确除以1000。否则以原始数量或实测S恢复分子后按Q换算。体积/燃料能量转换另需密度/温压/热值证据，不能换标签。原始比例若为同状态实测生物量子集/可用总量，0..1仅适用于该原始诊断比例，不是每Q交换上限。 | 同批原始记录、阶段产出和独立范围/换算证据 |
| `dq_range_hatchery_nursery_electricity` | `seed_supply_hatchery_and_nursery`; `hatchery_nursery_electricity` | 独立采集本流自身范围/不确定性证据。下列按声明基准表达的推理筛选背景不是最终Q归一化范围或强制截断： ; - 数量范围：暂定育苗用电筛选估算 ;   - 范围角色：默认估算（`default_estimate`） ;   - 下限：0 ;   - 上限：5000 ;   - 单位：kWh/1,000 kg marketable abalone ;   - 基准：相对市场化输出的场内育苗和中间培育用电宽泛首轮估计 ;   - 基准类型：过程输出（`process_output`） ;   - 证据类型：推理估算（`reasoned_estimate`） ;  ;  保留原始分母S及单位；仅在原每1000kg确属同一最终Q/形态/群体时才准确除以1000。否则以原始数量或实测S恢复分子后按Q换算。体积/燃料能量转换另需密度/温压/热值证据，不能换标签。原始比例若为同状态实测生物量子集/可用总量，0..1仅适用于该原始诊断比例，不是每Q交换上限。 | 同批原始记录、阶段产出和独立范围/换算证据 |
| `dq_range_stocked_juvenile_abalone` | `seed_supply_hatchery_and_nursery`; `stocked_juvenile_abalone` | 独立采集本流自身范围/不确定性证据。下列按声明基准表达的推理筛选背景不是最终Q归一化范围或强制截断：不设跨苗期生长的质量存活率上限、包装输入/最终输出的统一上限或内部量1..1恒等式。分别实测阶段S、实际损失/库存和最终Q；只有真正最终门Q/Q才是1。 | 同批原始记录、阶段产出和独立范围/换算证据 |
| `dq_range_stocked_juvenile_transfer_to_growout` | `growout_husbandry`; `stocked_juvenile_transfer_to_growout` | 独立采集本流自身范围/不确定性证据。下列按声明基准表达的推理筛选背景不是最终Q归一化范围或强制截断： ; - 数量范围：暂定投放幼鲍转入估算 ;   - 范围角色：默认估算（`default_estimate`） ;   - 下限：0.01 ;   - 上限：2 ;   - 单位：kg stocked juveniles/kg marketable abalone ;   - 基准：每 kg 市场化输出的投放幼鲍质量宽泛首轮估计 ;   - 基准类型：过程输出（`process_output`） ;   - 证据类型：推理估算（`reasoned_estimate`） ;  ;  保留原始分母S及单位；仅在原每1000kg确属同一最终Q/形态/群体时才准确除以1000。否则以原始数量或实测S恢复分子后按Q换算。体积/燃料能量转换另需密度/温压/热值证据，不能换标签。原始比例若为同状态实测生物量子集/可用总量，0..1仅适用于该原始诊断比例，不是每Q交换上限。 | 同批原始记录、阶段产出和独立范围/换算证据 |
| `dq_range_growout_electricity` | `growout_husbandry`; `growout_electricity` | 独立采集本流自身范围/不确定性证据。下列按声明基准表达的推理筛选背景不是最终Q归一化范围或强制截断： ; - 数量范围：暂定养成用电筛选估算 ;   - 范围角色：默认估算（`default_estimate`） ;   - 下限：0 ;   - 上限：50000 ;   - 单位：kWh/1,000 kg marketable abalone ;   - 基准：低能耗海区增养殖和高能耗陆基系统的每市场化输出用电宽泛首轮估计 ;   - 基准类型：过程输出（`process_output`） ;   - 证据类型：推理估算（`reasoned_estimate`） ;  ;  保留原始分母S及单位；仅在原每1000kg确属同一最终Q/形态/群体时才准确除以1000。否则以原始数量或实测S恢复分子后按Q换算。体积/燃料能量转换另需密度/温压/热值证据，不能换标签。原始比例若为同状态实测生物量子集/可用总量，0..1仅适用于该原始诊断比例，不是每Q交换上限。 | 同批原始记录、阶段产出和独立范围/换算证据 |
| `dq_range_growout_fuel_and_workboat_energy` | `growout_husbandry`; `growout_fuel_and_workboat_energy` | 独立采集本流自身范围/不确定性证据。下列按声明基准表达的推理筛选背景不是最终Q归一化范围或强制截断： ; - 数量范围：暂定养成燃料筛选估算 ;   - 范围角色：默认估算（`default_estimate`） ;   - 下限：0 ;   - 上限：1000 ;   - 单位：L diesel-equivalent/1,000 kg marketable abalone ;   - 基准：每市场化输出的直接控制燃料使用宽泛首轮估计 ;   - 基准类型：燃料清单（`fuel_inventory`） ;   - 证据类型：推理估算（`reasoned_estimate`） ;  ;  保留原始分母S及单位；仅在原每1000kg确属同一最终Q/形态/群体时才准确除以1000。否则以原始数量或实测S恢复分子后按Q换算。体积/燃料能量转换另需密度/温压/热值证据，不能换标签。原始比例若为同状态实测生物量子集/可用总量，0..1仅适用于该原始诊断比例，不是每Q交换上限。 | 同批原始记录、阶段产出和独立范围/换算证据 |
| `dq_range_direct_carbon_dioxide_from_fuel_combustion` | `growout_husbandry`; `direct_carbon_dioxide_from_fuel_combustion` | 独立采集本流自身范围/不确定性证据。下列按声明基准表达的推理筛选背景不是最终Q归一化范围或强制截断： ; - 数量范围：暂定直接 CO2 筛选估算 ;   - 范围角色：默认估算（`default_estimate`） ;   - 下限：0 ;   - 上限：3000 ;   - 单位：kg CO2/1,000 kg marketable abalone ;   - 基准：每市场化输出的直接燃料燃烧 CO2 宽泛首轮估计 ;   - 基准类型：燃料清单（`fuel_inventory`） ;   - 证据类型：推理估算（`reasoned_estimate`） ;  ;  保留原始分母S及单位；仅在原每1000kg确属同一最终Q/形态/群体时才准确除以1000。否则以原始数量或实测S恢复分子后按Q换算。体积/燃料能量转换另需密度/温压/热值证据，不能换标签。原始比例若为同状态实测生物量子集/可用总量，0..1仅适用于该原始诊断比例，不是每Q交换上限。 | 同批原始记录、阶段产出和独立范围/换算证据 |
| `dq_range_harvest_size_farmed_abalone` | `growout_husbandry`; `harvest_size_farmed_abalone` | 独立采集本流自身范围/不确定性证据。下列按声明基准表达的推理筛选背景不是最终Q归一化范围或强制截断： ; - 数量范围：养成采收质量平衡 QA 校验 ;   - 范围角色：QA 校验（`qa_guardrail`） ;   - 下限：0 ;   - 上限：1 ;   - 单位：kg/kg total live abalone biomass before harvest adjustment ;   - 基准：声明批次中可采生物量的市场规格采收比例 ;   - 基准类型：过程输出（`process_output`） ;   - 证据类型：方法公式（`method_formula`） ;   - 来源：`mass-balance-identity` ;  ;  保留原始分母S及单位；仅在原每1000kg确属同一最终Q/形态/群体时才准确除以1000。否则以原始数量或实测S恢复分子后按Q换算。体积/燃料能量转换另需密度/温压/热值证据，不能换标签。原始比例若为同状态实测生物量子集/可用总量，0..1仅适用于该原始诊断比例，不是每Q交换上限。 | 同批原始记录、阶段产出和独立范围/换算证据 |
| `dq_range_harvested_abalone_input_to_packout` | `harvest_grading_and_live_holding`; `harvested_abalone_input_to_packout` | 独立采集本流自身范围/不确定性证据。下列按声明基准表达的推理筛选背景不是最终Q归一化范围或强制截断：不设跨苗期生长的质量存活率上限、包装输入/最终输出的统一上限或内部量1..1恒等式。分别实测阶段S、实际损失/库存和最终Q；只有真正最终门Q/Q才是1。 | 同批原始记录、阶段产出和独立范围/换算证据 |
| `dq_range_packout_electricity` | `harvest_grading_and_live_holding`; `packout_electricity` | 独立采集本流自身范围/不确定性证据。下列按声明基准表达的推理筛选背景不是最终Q归一化范围或强制截断： ; - 数量范围：暂定包装出货用电筛选估算 ;   - 范围角色：默认估算（`default_estimate`） ;   - 下限：0 ;   - 上限：5000 ;   - 单位：kWh/1,000 kg reference product ;   - 基准：每参考产品的采收、暂养、冷藏和包装用电宽泛首轮估计 ;   - 基准类型：参考流（`reference_flow`） ;   - 证据类型：推理估算（`reasoned_estimate`） ;  ;  保留原始分母S及单位；仅在原每1000kg确属同一最终Q/形态/群体时才准确除以1000。否则以原始数量或实测S恢复分子后按Q换算。体积/燃料能量转换另需密度/温压/热值证据，不能换标签。原始比例若为同状态实测生物量子集/可用总量，0..1仅适用于该原始诊断比例，不是每Q交换上限。 | 同批原始记录、阶段产出和独立范围/换算证据 |
| `dq_range_packout_wastewater` | `harvest_grading_and_live_holding`; `packout_wastewater` | 独立采集本流自身范围/不确定性证据。下列按声明基准表达的推理筛选背景不是最终Q归一化范围或强制截断： ; - 数量范围：暂定包装废水筛选估算 ;   - 范围角色：默认估算（`default_estimate`） ;   - 下限：0 ;   - 上限：2000 ;   - 单位：m3/1,000 kg reference product ;   - 基准：每参考产品的活体暂养、净化、清洗和冷藏废水宽泛首轮估计 ;   - 基准类型：参考流（`reference_flow`） ;   - 证据类型：推理估算（`reasoned_estimate`） ;  ;  保留原始分母S及单位；仅在原每1000kg确属同一最终Q/形态/群体时才准确除以1000。否则以原始数量或实测S恢复分子后按Q换算。体积/燃料能量转换另需密度/温压/热值证据，不能换标签。原始比例若为同状态实测生物量子集/可用总量，0..1仅适用于该原始诊断比例，不是每Q交换上限。 | 同批原始记录、阶段产出和独立范围/换算证据 |
| `dq_range_marketable_farmed_abalone_reference_product` | `harvest_grading_and_live_holding`; `marketable_farmed_abalone_reference_product` | 独立采集本流自身范围/不确定性证据。下列按声明基准表达的推理筛选背景不是最终Q归一化范围或强制截断：不设跨苗期生长的质量存活率上限、包装输入/最终输出的统一上限或内部量1..1恒等式。分别实测阶段S、实际损失/库存和最终Q；只有真正最终门Q/Q才是1。 | 同批原始记录、阶段产出和独立范围/换算证据 |
| `dq_range_saleable_offgrade_abalone_coproduct` | `harvest_grading_and_live_holding`; `saleable_offgrade_abalone_coproduct` | 独立采集本流自身范围/不确定性证据。下列按声明基准表达的推理筛选背景不是最终Q归一化范围或强制截断： ; - 数量范围：暂定低等级产品筛选估算 ;   - 范围角色：默认估算（`default_estimate`） ;   - 下限：0 ;   - 上限：1 ;   - 单位：kg off-grade saleable product/kg reference product ;   - 基准：低等级可销售鲍鱼质量相对参考产品的宽泛首轮估计 ;   - 基准类型：参考流（`reference_flow`） ;   - 证据类型：推理估算（`reasoned_estimate`） ;  ;  保留原始分母S及单位；仅在原每1000kg确属同一最终Q/形态/群体时才准确除以1000。否则以原始数量或实测S恢复分子后按Q换算。体积/燃料能量转换另需密度/温压/热值证据，不能换标签。原始比例若为同状态实测生物量子集/可用总量，0..1仅适用于该原始诊断比例，不是每Q交换上限。 | 同批原始记录、阶段产出和独立范围/换算证据 |
| `dq_stage_coverage` | `seed_supply_hatchery_and_nursery` | 实际自有孵化/育苗中的亲本、卵、幼虫、定居/附着苗及各生长阶段，以及每种实际微藻/饲料/培养基/材料/水/药剂/资产/废物/排放都要独立采集并补卡。幼体/苗种卡不能覆盖亲本或所有生命阶段；保留供应/祖代、实际受控生产、期初/期末/失败批次及下一代/转移负担，不能因养成滤食或无有意投饲漏掉自有孵化/育苗食物和亲本资源。 | 本节点阶段台账、独立数量/单位/范围、原始来源和去向 |
| `dq_actual_delivery_completion` | `delivery_to_declared_gate`; `gate_release` | 实际参考门前每条物流、完整服务或自有燃料/电力/资产/冷却/补水冰/气体、各物质排放、损失/拒收及水/包装/货物去向分别建立独立卡。运输载荷含实际随行水、冰和包装；空返虽无货载仍计实际燃料/车辆服务及明确分配。完整服务与其已含组成不重计。实际最终门验收正Q、状态、接收者/时间及唯一到门路径必须独立证明；未知不默认旁路。 | 路线/服务范围、实际载荷、仪表和校准称量、物理接收/验收及去向 |
| `dq_actual_water_and_emissions` | all nodes | 外部自然取水、供应水产品、内部循环及实际返排水分别计量，内部循环不再从外部取水重复扣减。生成废水/固体废物为实际输出；直接释放按各物质/化学基准和真实介质分别输出，不能作资源输入。净营养物差额/滞留仅用于独立平衡诊断，不自动成为负基本流或避免负荷。原废水来源和处理状态须相容，不能套用任意处理阶段UUID。 | 实际水/物质平衡、来源/去向、处理范围和物质因子/采样证据 |
| `dq_actual_amount_modes_and_form` | 全部实际卡及产品形态 | 根据实际方法填写数量证据模式：直接计量用foreground_record/collected_record，计算量用calculated_value/calculated_from_collection并保留实测输入、公式、因子/单位/来源和不确定性；候选模板不替代实际记录。所有参考产品须保持整只带壳，活体参考还须存活。去壳肉或纯组织参考产品均不在本方法范围内，即使已测收率也不能纳入；不得用其质量替代整只动物Q，或通过补采义务扩大范围。 | 原始计量或计算证据、同批实际状态/形态、测量及物理去向 |
| `dq_packout_mass_closure` | `harvest_grading_and_live_holding` | 按同一报告期、可追溯批次/物种及声明的完整动物产品形态执行 reconcile_packout_mass。期初期末库存必须实测，不得采用默认值；跨期结转其累计负担。向后转移产品、可销售降级品、拒收品和其他动物损失必须互斥：已计入拒收品的死亡或损失不得再次扣除。evidenced_net_animal_mass_change 是有独立证据的有符号动物物理质量变化，不是无法解释的差额，也不是重复计入的接收或损失。游离承载水、冰和包装另立台账，排除于动物净称量之外，不得又把其排水作为动物损失扣除。仅有证据证明期初期末库存均为零且无额外动物质量变化时，才可使用简化的零库存公式；未知不得当零。 | 有日期的动物净称量、期初期末库存台账、互斥去向、独立物理变化证据及负担结转记录 |

## 9. 校验规则

前景数据包只有在满足以下条件时才符合本 PCR：

- 参考产品归一化为 1 kg 声明活、鲜或冷藏产品形态的养殖鲍鱼；
- 声明物种或杂交类型、养殖系统、苗种或幼鲍来源、产品状态、产品形态、规格等级、地理范围、声明边界、暂养时长和饲料制度；
- 苗种或幼鲍投入、饲料、水、能源、燃料、死亡物或残留、采收、包装出货和包装记录存在，或以原因说明标记为不适用；
- 计数记录包含平均个体质量或其他透明的 kg 换算；
- 饲料记录区分大型藻类、配合饲料和混合饲料，并保持湿基、干基和原样基准分开；
- 水流行区分泵送或供应水与开放水体的环境交换；
- 包装出货质量平衡能够核对采收输入、参考产品、可销售低等级产品、拒收物和暂养损失；
- 同场多物种或多等级分配在数据集作为背景或二级数据集使用前已记录。

最终数据包验证须逐项回读 `dq_atomic_completion` 和每一 `dq_complete_` 要求：所有适用义务均已落实为具有独立数量、单位、来源、归一化、范围/不确定性、去向和核实 UUID 的具体交换。仅在有证据不存在时才可标记 not_applicable；未知身份、缺失数量、未识别去向或未落实的义务均阻断最终数据包完成。PCR 的静态检查通过不等于这项验证通过。

最终数据包只有一个真实gate_release及一个declared_gate_reference。每项实际交换及每项适用dq_complete_/dq_stage_/dq_actual_/dq_range_义务均须落实为独立原子卡、自身数量/原生单位、实际采集/计算及范围/不确定性证据、同一最终Q归一化、去向和已验证UUID。未知身份、活动/路线/门、数量、范围证据或去向阻断完成及验证，不能置零、默认旁路或仅披露后忽略。PCR静态检查通过不证明真实数据包完整。

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_form_scope` | 市场规格产品交接及最终参考 | 市场规格动物交接及最终参考产品须保留实际整只带壳形态。生鲜去壳或纯组织最终参考不在本方法范围内。实测收率或第8节补采完成声明均不能扩大该边界。 | |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 可在审查后发布为 `secondary_dataset` 或 `background_dataset` 的前景生产包 |
| downstream_use | 作为养殖鲍鱼输入，用于海产品加工、餐饮、零售、冷链或区域食品产品生命周期模型 |
| allowed_use | 仅整只带壳方法：具有声明物种、养殖系统、产品形态、边界、饲料制度和质量披露的养殖鲍鱼活、鲜或冷藏数据集 |
| excluded_use | 本方法范围外的生鲜去壳/纯组织参考产品；野生鲍鱼、冷冻/烟熏/干制/盐腌/盐水浸泡/加工鲍鱼、通用贝类数据集，以及缺少产品形态或养殖系统披露的数据集 |
| required_metadata | canonical PCR id；CPC code；物种或杂交类型；养殖系统；苗种来源；产品形态；整只带壳基准；规格等级；地理范围；声明边界；暂养或冷藏时长；饲料制度；数据期；分配基准 |
| required_quality_disclosure | 缺失 UUID；未解析海水或栖息地流身份；饲料湿/干换算；水排放路径；死亡记录完整性；包装出货质量平衡；部分周期或代理数据使用 |
| update_trigger | CPC 映射变化、Tiangong 鲍鱼/海水/饲料/排放/栖息地流身份更新、ASC 或等效水产养殖标准变化，或经审查的鲍鱼前景数据集提供更好范围时修订 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-abalone-breeding-1990` | handbook | <https://www.fao.org/4/ab731e/ab731e00.htm> | 鲍鱼生物学、育苗、中间培育、养成阶段、摄食、水质和生产周期背景 |
| `ca-dfg-culture-of-abalone` | official_guidance | <https://nrm.dfg.ca.gov/FileHandler.ashx?DocumentID=34422> | 育苗、中间培育、养成系统选项、转移时间和市场规格过程分解 |
| `asc-abalone-standard-2012` | standard | <https://asc-aqua.org/wp-content/uploads/2023/07/ASC-Abalone-Standard_v1.0.pdf> | 鲍鱼养殖议题范围、能源、饲料、生物安全、生态系统影响、废物管理和范围背景 |
| `asc-farm-standard-2025` | standard | <https://programme-centre.asc-aqua.org/app/uploads/2025/08/ASC-STD-001-ASC-Farm-Standard-V1.0.1-Aug-2025.pdf> | 当前 ASC 养成范围、符合条件的 Haliotis 物种、水质、饲料效率、可追溯性、动物健康和数据要求 |
| `seafood-watch-abalone-worldwide-2022` | official_guidance | <https://www.seafoodwatch.org/globalassets/sfw-data-blocks/reports/a/seafood-watch-abalone-worldwide-27815.pdf> | 鲍鱼生产阶段、养殖系统、饲料模式、化学品使用背景、苗种来源、疾病和数据质量缺口 |
| `mass-balance-identity` | method_factor | Conservation of mass applied as a PCR calculation identity for stocking, grow-out, pack-out, discharge, transport-service, and reference-flow normalization. | QA 校验、生存率、得率、包装质量平衡和归一化规则 |
| `pcr-gate-accounting-method` | method_factor | 本PCR第3—9节声明的前瞻最终门、独立阶段计量和归一化方法；不是外部经验范围 | 唯一最终Q/Q、原生q/Q、原始批次/每1000kg/阶段S换算及逐流完成要求 |
