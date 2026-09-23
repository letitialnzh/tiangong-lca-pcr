---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.avocados
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 鳄梨

## 1. 范围与适用性

本 PCR 覆盖在管理型多年生果园中生产并在农场交付的新鲜、未加工鳄梨。范围包括果园建立、未结果期、结果期果园管理、收获，以及交付前进行的有条件农场内调制。适用于雨养和灌溉果园，也适用于鲜食或进一步食品加工用途的水果，但农场交付时的产品身份不得因此发生转化。排除苗圃作业、鳄梨油、果肉、果泥、冷冻或干燥鳄梨、预制食品、场外运输、储存、零售、消费者使用和包装终端处置。果园建立影响应分摊到声明的生产年份并予以披露，不得省略。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.avocados |
| classification_refs | CPC 3.0: 01311 Avocados |
| covered_products | 在农场交付的新鲜、未加工鳄梨果实，包括鲜食市场或加工去向的果实 |
| excluded_products | 苗圃种植材料生产；鳄梨油、果肉、果泥、冷冻或干燥产品；预制食品；场外物流和下游使用 |
| representative_product | 农场交付的收获鳄梨果实，未加工 |
| production_route | 多年生果园建立、果园管理、收获和有条件的农场内调制 |
| market_state | 按声明交付状态交付的新鲜果实，并披露品种、成熟度、质量等级、水分或干物质约定以及是否包含调制 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 农场交付的新鲜、未加工鳄梨果实 |
| How much | 1,000 kg 按接收状态计的可销售鳄梨果实 |
| How well | 符合声明品种、成熟度、质量等级、缺陷和交付状态的收获果实；不得转化为油、果肉、果泥、冷冻或干燥产品 |
| How long or cycle | 声明生产年中的一个生产周期，并将建立期影响分摊到声明的果园生产寿命 |
| reference_flow_link | 不包含调制时来自 `avocado_harvest_and_farm_gate_handling` 的终端合格鳄梨输出；包含调制时来自 `farm_gate_avocado_conditioning` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | Fresh avocado fruit, production mix, at farm gate, unprocessed `30de963a-f2a7-42d4-9a56-7993627510b4` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 品种或品种组; 生产国家、区域和气候; 果园年龄和结果状态; 作物年份; 果园面积; 灌溉状态和水源; 成熟度或干物质约定; 合格与拒收果实基准; 是否包含调制 |
| 绑定模式 | fixed |


构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass_as_received` | 参考鳄梨输出 | Mass | kg | 按声明的农场交付接收状态报告合格果实质量。如使用干物质、成熟度或缺陷调整，保留实测基准和归一化前的换算。 |
| `orchard_life_allocation_basis` | 建立期和未结果果园投入 | 面积、时间或质量活动属性 | ha、果园年或 kg fruit | 使用声明的果园生产寿命，将建立期和未结果期投入按同一果园面积、生产年数和合格果实输出基准分摊；披露异常补植或弃园。 |
| `area_to_reference_conversion` | 按面积计的果园流 | 活动特定属性 | activity-specific unit | 使用同一果园年度或声明的多年平均合格果实质量，将果园年总量除以果实质量后缩放到 1,000 kg。 |
| `nutrient_product_and_basis` | 肥料或土壤改良剂投入 | nutrient mass and product mass | kg product; kg N, kg P2O5, or kg K2O | 同时记录实际使用的产品和施用量，以及声明的养分基准。该单个养分/改良剂卡片可以包含多个产品和养分，不要求为每种肥料类别单独列行。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 建立前或建立时的果园场地，种植材料和外购管理投入从此跨越前景边界；既有土地历史和前茬状态需披露 |
| starting_condition_role | 管理型多年生鳄梨生产和果园资产核算的起点 |
| product_classification_scope | 对应 CPC 3.0 code 01311 的新鲜鳄梨果实 |
| recursive_input_rule | 鳄梨种植材料和留存果实仅在跨越边界时作为上游投入；不得将其递归表示为同一农场交付果实输出 |
| upstream_dataset_requirement | 与种植材料、养分或土壤改良剂、植保、能源、灌溉供应、机械服务、交付前使用的包装以及适用的废物处理相兼容的上游数据集 |
| disclosure | 品种、果园年龄、建立年份、结果寿命、补植树、果园面积、前期土地利用、土壤和气候条件、灌溉、养分基准、植保、产量、收获损失、调制、共产品以及残余物或废物去向 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_orchard_establishment_to_farm_gate` | all conforming datasets | 纳入场地准备、种植、果园建立、未结果年份、结果期果园管理、收获，以及声明农场交付前进行的调制。 | `fao-crop-production-methodology`; `fao-avocado-production-guide` |
| `boundary_perennial_orchard_disclosure` | establishment and replacement trees | 只有在按声明的果园寿命或合格果实输出基准分配后，才将建立期和补植树投入纳入；披露分摊年限和未结果年份。 | `fao-avocado-production-guide`; `iso-14067` |
| `boundary_direct_field_emissions` | managed soil and crop residues | 使用适用于地理位置的方法和养分、灌溉及残余物核算所用的相同采集活动数据，纳入直接和间接养分及残余物相关排放。 | `ipcc-2019-refinement`; `emep-eea-2023-guidebook` |
| `boundary_farm_gate_conditioning` | optional conditioning | 仅在农场交付前进行且未被收获记录包含时，纳入清洗、分选、分级、修整或短期农场处理；识别拒收果实和去向。 | `fao-crop-production-methodology` |
| `boundary_post_farm_gate_exclusion` | downstream activities | 排除场外运输、储存、配送、零售、消费者使用、食品加工、油或果泥制造及包装终端处置，除非研究明确扩展本 PCR 边界。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `avocado_orchard_establishment_and_management` | 鳄梨果园建立与管理 | required | always；纳入建立期和结果期管理，并按声明果园寿命分摊 | 管理型多年生生物生产与果园资产形成 | 果园面积、果园年、建立期和年度合格果实输出 |
| `avocado_harvest_and_farm_gate_handling` | 鳄梨收获与农场交付处理 | required | always | 收获、田间处理和农场交付 | 一个生产年的收获、合格、降级和损失果实质量 |
| `farm_gate_avocado_conditioning` | 农场内鳄梨调制 | conditional | 农场交付前发生清洗、分选、分级、修整或其他调制，且未被收获记录包含 | 将果实处理为声明交付状态 | 进入果实质量和调制后合格果实质量 |

### 过程：鳄梨果园建立与管理（`avocado_orchard_establishment_and_management`）

#### 输入

##### 产品流

###### 鳄梨种植材料（`avocado_planting_material_input`）

记录进入果园建立环节的苗木、嫁接苗或其他种植材料。留种或自繁材料应说明来源和分摊处理。

- 选定流：Avocado planting material for orchard establishment
- 流属性/单位：Mass or item count / kg or item
- 数量规则：按果园地块和建立年份记录实测种植材料数量；使用数量到质量换算时保留换算关系
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每果园年，并换算为 1,000 kg 合格果实
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_establishment_records`
- 来源：
- 数量范围：暂定建立期种植密度筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：100
  - 上限：400
  - 单位：trees/ha
  - 基准：已建立果园地块；以苗圃和种植记录替换
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 农业养分与肥料投入（`avocado_orchard_establishment_and_management_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每果园年，并换算为 1,000 kg 合格果实
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_management_records`
- 来源：
- 数量范围：暂定养分和改良剂筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：kg product/ha/year
  - 基准：所有养分和土壤改良剂产品合计；以产品记录和养分分析替换
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 供应的灌溉水（`irrigation_water_input`）

仅在果园实际施用灌溉水时记录。雨养生产应有水量平衡或农场管理依据支持，并记录施用灌溉为零。

- 选定流：Irrigation water supply
- 流属性/单位：Volume / m3
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`irrigation-water`
- 数量规则：按果园地块和生产年计量或计算灌溉水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每果园年，并换算为 1,000 kg 合格果实
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_management_records`
- 来源：
- 数量范围：暂定果园灌溉筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：12,000
  - 单位：m3/ha/year
  - 基准：一个生产年；以计量记录或当地水量平衡替换
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 供应的能源和农机燃料（`orchard_energy_input`）

记录抽水、果园作业和外包机械使用的电力、柴油、汽油或其他购入能源，前提是该服务未由上游过程表示。

- 选定流：Electricity supply and mobile agricultural machinery fuel
- 流属性/单位：Energy or carrier mass / kWh, L, or kg
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- 数量规则：根据电表、发票、燃料日志或承包商活动记录换算到声明的载体基准，避免与已嵌入服务重复计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每果园年，并换算为 1,000 kg 合格果实
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_orchard_management_records`
- 来源：

###### 供应的植保产品（`crop_protection_input`）

按产品、有效成分、施用事件和处理面积记录每种农药或其他植保配方。不同配方必须保持可识别。

- 选定流：Crop-protection formulation for avocado orchard management
- 流属性/单位：Mass of formulation / kg
- 数量规则：按产品和施用事件汇总实测配方质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每果园年，并换算为 1,000 kg 合格果实
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_management_records`
- 来源：

##### 废物流

###### 处置或替换的果园树木（`orchard_tree_replacement_waste`）

当移除的树木不成为声明共产品时，将建立期或结果期替换移除的树木记录为废物。作为覆盖物或生物质转移的树木应说明去向和分摊处理。

- 选定流：Removed avocado orchard trees to waste treatment or unmanaged residue
- 流属性/单位：Mass / kg dry or as-received biomass
- 数量规则：按果园地块和年份实测或计算移除树木生物质
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每果园年，并换算为 1,000 kg 合格果实
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_orchard_establishment_records`
- 来源：

##### 基本流

###### 鳄梨果园的土地占用（`orchard_land_occupation`）

记录管理型多年生生产系统的果园面积和占用时间；当其属于声明的果园寿命时，应包括建立期未结果年份。

- 选定流：Land occupation, orchard area
- 流属性/单位：Area-time / m2*a or ha*year
- 数量规则：果园面积乘以声明占用时间，并分摊到合格果实输出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每果园年，并换算为 1,000 kg 合格果实
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_orchard_establishment_records`
- 来源：`fao-crop-production-methodology`

#### 输出

##### 产品流

###### 供收获过程使用的果园管理输出（`orchard_managed_production_output`）

将果园年度管理生产基准传递给收获过程，作为内部过程链接。该项不得计为额外的可销售鳄梨流。

- 选定流：Managed avocado orchard production output
- 流属性/单位：Area or mass / ha or kg accepted fruit basis
- 数量规则：声明的果园年度面积及其对应合格果实输出基准
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格果实
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_orchard_management_records`
- 来源：

##### 废物流

##### 基本流

###### 养分和残余物相关的空气、水和土壤排放（`orchard_emissions`）

使用采集的养分、植保、残余物和灌溉活动数据，按照选定的适用地理区域方法计算相关排放。最终流绑定审查前不得假定具体基本流身份。

- 选定流：Managed-soil and crop-production emissions to air, water, or soil
- 流属性/单位：Mass of emitted substance / kg substance
- 数量规则：使用采集活动数据和声明方法计算排放；在证据支持时保持各物质和受纳环境介质区分
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每果园年，并换算为 1,000 kg 合格果实
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_orchard_management_records`
- 来源：`ipcc-2019-refinement`; `emep-eea-2023-guidebook`

### 过程：鳄梨收获与农场交付处理（`avocado_harvest_and_farm_gate_handling`）

#### 输入

##### 产品流

###### 进入收获过程的果园管理输出（`managed_orchard_output_input`）

接收果园管理过程传递的果园年度生产背景。该行用于过程链接，不得重复上游果园清单。

- 选定流：Managed avocado orchard production output
- 流属性/单位：Area or mass / ha or kg accepted fruit basis
- 数量规则：分级或调制前按果园年度关联的收获量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格果实
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_harvest_output_records`
- 来源：

###### 收获能源和外包收获服务（`harvest_energy_input`）

当采摘、收集、田间周转箱和农场交付处理所用燃料、电力或承包商活动未包含在果园管理记录中时记录。

- 选定流：Harvest energy supply or contracted harvest service
- 流属性/单位：Energy, carrier mass, or service / kWh, L, kg, or activity unit
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- 数量规则：按实测载体使用量或有证据的承包商活动计量，并分配到合格收获输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每次收获活动，并换算为 1,000 kg 合格果实
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_output_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 农场交付的收获鳄梨果实（`harvested_avocado_output`）

记录按声明农场交付状态转移的果实。不包含调制时，该项是终端参考输出。

- 选定流：Fresh avocado fruit, production mix, at farm gate, unprocessed
- 流属性/单位：Mass / kg
- 数量规则：按声明交付状态实测合格果实质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：将终端输出缩放到 1,000 kg 参考果实
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_output_records`
- 来源：
- 数量范围：暂定合格鳄梨产量筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：2,000
  - 上限：25,000
  - 单位：kg accepted fruit/ha/year
  - 基准：结果期果园年度；以果园记录和区域证据替换
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 交付前拒收或损失的收获果实（`harvest_reject_and_loss_waste`）

记录留在田间、采摘损伤、未声明共产品用途的降级果实或交付前其他拒收果实。发送到明确去向的果实，若有依据，应作为共产品单独记录。

- 选定流：Avocado harvest reject or loss to waste
- 流属性/单位：Mass / kg
- 数量规则：按收获、合格和声明去向质量之间的差额实测或核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格果实
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_harvest_output_records`
- 来源：

##### 基本流

### 过程：农场内鳄梨调制（`farm_gate_avocado_conditioning`）

#### 输入

##### 产品流

###### 进入调制的收获果实（`conditioning_avocado_input`）

当农场交付前发生单独的清洗、分选、分级或处理环节时，记录进入该环节的收获果实。

- 选定流：Fresh avocado fruit entering farm-gate conditioning
- 流属性/单位：Mass / kg
- 数量规则：调制前实测进入果实质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 调制后合格果实
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：

###### 调制用水、电力和包装辅材（`conditioning_inputs`）

记录交付前使用的水、电力、清洗剂和包装辅材。随产品交付的包装应披露材料和质量；仅用于内部处理的包装在跨越边界时也应记录。

- 选定流：Conditioning water, electricity, cleaning agent, or packaging aid
- 流属性/单位：Volume, energy, or mass / m3, kWh, or kg
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`process-water`
- 数量规则：按水表、电表、发票、批次记录或实测包装质量分配到调制后合格果实
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 调制后合格果实
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 农场交付的调制鳄梨果实（`conditioned_avocado_output`）

当声明边界包含调制时，记录调制后、场外运输前的合格果实作为终端参考输出。

- 选定流：Fresh avocado fruit, conditioned at farm gate, unprocessed
- 流属性/单位：Mass / kg
- 数量规则：调制后、场外运输前实测合格果实质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：将终端输出缩放到 1,000 kg 参考果实
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：

##### 废物流

###### 调制拒收物和移除材料（`conditioning_reject_waste`）

当清洗、分选、分级或修整移除的果实和材料没有转移到声明的共产品去向时，记录为废物。

- 选定流：Conditioning rejects and removed material to waste
- 流属性/单位：Mass / kg
- 数量规则：进入质量减去合格输出和有名称的去向，并根据实测或核对得到
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 调制后合格果实
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_records`
- 来源：

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_orchard_establishment_over_productive_life` | orchard establishment, immature years, and replacement trees | 按声明的结果果园寿命，使用果园面积和合格果实输出，将建立期和未结果期投入分摊到声明生产年。报告果园寿命、建立年份、补植事件和分摊基准。 | `fao-avocado-production-guide`; `iso-14067` |
| `allocation_accepted_and_named_destinations` | accepted fruit, downgraded fruit, and residues | 仅当共产品去向有证据且在经济或物理上可区分时，才将质量分配给合格鳄梨和有名称的共产品去向。没有声明用途的不可销售损失不得作为共产品。 | `iso-14044` |
| `allocation_no_double_counting_internal_links` | process links between orchard, harvest, and conditioning | 内部过程链接只用于质量平衡；不得将同一果园输出或果实质量再次计为市场产品。 | `iso-14044` |
| `allocation_mass_default_for_shared_fruit_output` | multiple avocado grades or destinations | 当没有更强的因果分配证据时，对共享生产采用质量分配，并披露等级定义、水分或干物质基准以及拒收果实处理。 | `iso-14044` |

如果研究报告同一果园或调制作业产生的鳄梨果实和有证据的共产品，数据包应说明分区规则、共同过程清单和去向证据。经济分配不是缺少质量或因果数据时的默认替代方案。

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_orchard_establishment_records` | `avocado_orchard_establishment_and_management` | planting material; replacement trees; land occupation | orchard register, nursery invoice, planting map, removal log | block_id; cultivar; tree count; planting year; replacement count; area; previous land use; removed biomass; destination | reconcile orchard register, maps, invoices, and field records | trees, ha, kg, orchard-year | establishment and each replacement event; annual update | full establishment period and declared productive life | each orchard block | aggregate by block, establishment year, and declared allocation horizon | signed farm register, planting map, supplier record, or auditable field log |
| `cp_orchard_management_records` | `avocado_orchard_establishment_and_management` | nutrients; irrigation; energy; crop protection; emissions | input ledger, water meter, energy meter, spray record, contractor invoice | block_id; product; formulation; nutrient analysis; amount; date; area; water volume; energy carrier; fuel; treatment; soil or residue event | collect primary records and reconcile invoices, meters, and application logs | kg product, kg nutrient, m3, kWh, L, ha | each application or operation; annual aggregation | one production year plus establishment records where applicable | each orchard block and shared facility | sum by block and year, then allocate shared inputs by documented area or activity | invoices, meter readings, product labels, application logs, method calculation record |
| `cp_harvest_output_records` | `avocado_harvest_and_farm_gate_handling` | orchard output; harvest energy; accepted fruit; rejects and losses | harvest tickets, weighbridge record, bin log, contractor record, grading log | block_id; harvest date; cultivar; harvested mass; accepted mass; rejected mass; destination; carrier use; contractor activity; maturity or grade | reconcile field, bin, scale, grading, and destination records | kg, L, kWh, activity unit | each harvest lot; annual closure | one production year | each orchard block and harvest facility | aggregate by block, lot, and destination; retain mass balance | weighbridge or scale record, lot traceability, grading report, contractor invoice |
| `cp_conditioning_records` | `farm_gate_avocado_conditioning` | incoming fruit; water; energy; packaging; accepted output; rejects | batch sheet, meter record, packaging ledger, waste log | batch_id; incoming mass; accepted mass; reject mass; water; electricity; cleaning agent; packaging material and mass; destination | batch reconciliation with meter and material records | kg, m3, kWh, kg packaging | each conditioning batch | declared production year | farm conditioning site | reconcile inputs, accepted output, rejects, and named destinations by batch | batch sheet, scale record, meter reading, packaging invoice, waste receipt |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_area_to_reference_mass` | all orchard-year flows | normalized amount = orchard-year activity total / accepted farm-gate fruit mass × 1,000 kg | activity total; accepted fruit mass; reference amount | amount per 1,000 kg accepted fruit |  |
| `calc_orchard_life_allocation` | establishment and replacement inputs | allocate establishment or replacement total to each declared production year using the documented productive-life horizon and accepted fruit output basis; retain non-bearing years in the denominator when specified | establishment total; replacement events; orchard life; annual accepted output | allocated orchard input per production year and reference flow | `fao-avocado-production-guide`; `iso-14067` |
| `calc_nutrient_basis` | nutrient and amendment input | nutrient mass = product mass × declared nutrient fraction; report product mass and nutrient mass separately | product quantity; label or supplier nutrient analysis | kg product and kg N, kg P2O5, or kg K2O | `fao-crop-production-methodology` |
| `calc_mass_balance_harvest` | harvest output and rejects | harvested mass = accepted fruit + named co-products + rejects/losses, with documented stock change and measurement basis | harvest tickets; accepted mass; co-product destinations; reject and loss mass; stock change | reconciled harvest balance |  |
| `calc_conditioning_balance` | conditioning output and waste | incoming fruit + conditioning inputs crossing as product or material = accepted conditioned fruit + named destinations + waste, after documenting moisture or handling adjustments | batch inputs; accepted output; destinations; waste; adjustment basis | reconciled batch balance |  |
| `calc_direct_field_emissions` | soil, residue, and crop-protection emissions | apply the selected geographically applicable method to collected nutrient, residue, and activity data; do not apply a generic factor without recording tier, geography, and activity basis | nutrient inputs; residue fate; soil or climate context; method parameters | substance-specific elementary flows by compartment | `ipcc-2019-refinement`; `emep-eea-2023-guidebook` |

### 数据质量要求

| requirement_id | 适用对象 | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_orchard_identity` | all processes | Identify orchard block, cultivar or cultivar group, country and region, crop year, orchard age, productive status, and conditioning boundary. | orchard register; farm map; dataset metadata |
| `dq_perennial_time_basis` | establishment and management | State establishment year, non-bearing period, productive-life horizon, replacement events, and allocation basis used for orchard assets. | orchard history; allocation worksheet |
| `dq_input_traceability` | nutrients, irrigation, energy, crop protection, and planting material | Trace each material or energy input to an invoice, meter, product label, contractor record, or justified field record; retain product and nutrient identities separately. | primary farm records; supplier records |
| `dq_mass_balance` | harvest and conditioning | Reconcile harvested, accepted, rejected, co-product, stock-change, and waste masses within a documented tolerance and explain moisture or grading adjustments. | weighbridge, lot, grading, batch, and destination records |
| `dq_temporal_coverage` | all processes | Cover the full declared production year and include establishment or replacement records needed by orchard-life allocation. | annual production ledger; orchard history |
| `dq_emission_method` | elementary flows | Record method name, tier, geography, activity data, and assumptions for each calculated emission; keep 证据缺口 flow identity separate from amount evidence. | calculation worksheet; method reference |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_output` | 参考流和终端过程 | 应有且仅有一个终端合格鳄梨输出链接到声明参考流；在身份核实前不得假定固定身份，本候选仍使用参数化绑定。 |  |
| `validation_orchard_life_disclosure` | 果园建立与管理 | 对包含多年生果园生产但缺少果园年龄、建立期、结果寿命、补植事件或分摊基准的数据集拒收或标记。 | `fao-avocado-production-guide`; `iso-14067` |
| `validation_irrigation_and_nutrients` | 灌溉和养分投入 | 检查零灌溉或零养分投入是否有农场记录或生产理由支持，并检查产品质量不得与养分质量混淆。 | `fao-crop-production-methodology` |
| `validation_mass_balance` | 收获和调制 | 检查每个收获或调制边界的质量平衡，并要求解释未解决差额、拒收去向、库存变化或水分换算。 |  |
| `validation_boundary_exclusions` | 下游活动 | 除非研究明确声明扩展边界，否则拒收未披露的场外运输、储存、加工为油或果泥、零售、消费者使用或包装终端处置。 |  |
| `validation_bilingual_alignment` | 英文和中文呈现 | 要求两个语言文件中的机器标识符、控制词、process id、row id、rule id、protocol id、requirement id 和 source id 完全一致。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 经审查的农场交付鳄梨生产数据集可作为 secondary_dataset；只有在明确发布兼容的上游投入和基本流时，才可作为 background_dataset |
| downstream_use | 前景数据包构建、过程投影、生命周期模型聚合以及新鲜鳄梨供应情景比较 |
| allowed_use | 声明农场交付状态和调制状态的新鲜、未加工鳄梨果实，并保留果园寿命分摊和质量元数据 |
| excluded_use | 不得直接替代鳄梨油、果肉、果泥、冷冻或干燥产品；未经区域、果园年龄、灌溉、品种或市场状态审查不得直接使用；不得用于声明边界之外的下游物流或消费者研究 |
| required_metadata | canonical PCR id; CPC reference; orchard block or aggregation scope; cultivar; geography; crop year; orchard age; productive-life and allocation basis; irrigation; nutrient and crop-protection product basis; yield; accepted and rejected fruit; conditioning status; flow binding status |
| required_quality_disclosure | primary-record coverage, temporal coverage, mass-balance result, identity 证据缺口s, parameterized Flow Set use, emission method and tier, assumptions, and regional representativeness |
| update_trigger | 果园寿命或分摊方法、产品身份分类、Flow Set 分类、排放方法、生产路线、调制边界或实质改变类别指导的证据发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-crop-production-methodology` | official_guidance | FAO crop production and farm-data methodology guidance | 作物周期分解、田间记录、农场交付边界和投入数据采集 |
| `fao-avocado-production-guide` | extension_guidance | FAO or national agricultural extension guidance for avocado orchard establishment and management | 多年生果园建立、结果寿命、果园管理和收获背景 |
| `ipcc-2019-refinement` | method_factor | 2019 IPCC Refinement to the 2006 IPCC Guidelines for National Greenhouse Gas Inventories | 管理土壤和残余物排放计算方法 |
| `emep-eea-2023-guidebook` | method_factor | EMEP/EEA air pollutant emission inventory guidebook, current agricultural chapters | 农业排放方法选择和受纳环境介质处理 |
| `iso-14044` | standard | ISO 14044, Environmental management — Life cycle assessment — Requirements and guidelines | 分配层级、共产品处理和校验要求 |
| `iso-14067` | standard | ISO 14067, Greenhouse gases — Carbon footprint of products | 产品级边界披露和多年生生产分摊背景 |
