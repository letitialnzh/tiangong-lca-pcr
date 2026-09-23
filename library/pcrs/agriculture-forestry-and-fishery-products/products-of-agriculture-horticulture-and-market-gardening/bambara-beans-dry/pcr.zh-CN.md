---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.bambara-beans-dry
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 干班巴拉豆

## 1. 范围与适用性

本 PCR 适用于成熟干脱壳班巴拉豆（*Vigna subterranea*）籽粒农场门生产混合的前景生产。覆盖作物管理、地下荚挖掘或起收、去土、摘荚、干燥、脱壳、清理分级和条件终干燥。带壳干豆荚是中间态，不是参考产品。鲜荚、作为种子销售的播种材料、烤制或煮制籽粒、面粉、罐藏品、油和下游加工均排除。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.bambara-beans-dry |
| classification_refs | CPC 3.0：01708 干班巴拉豆 |
| covered_products | 农场门交付的成熟干脱壳 *Vigna subterranea* 籽粒 |
| excluded_products | 鲜荚；作为种子销售的播种材料；烤/煮籽粒；面粉；罐藏品；油；下游产品 |
| representative_product | 食用级成熟干班巴拉豆籽粒 |
| production_route | 管理种植、独立挖掘/起收、初级处理、稳定化、脱壳和分级；单作/间作、人工/机械及自然/机械干燥路线仅在分别声明时可并存 |
| market_state | 农场门生产混合的干脱壳籽粒；声明含水率基准、等级、损伤/拒收标准、生产模式和处理路线 |

替代生产路线继承 `crop_production`；单作和间作会改变土地、投入与归属记录。替代技术继承相应收获、干燥、脱壳或分级父活动；其会改变能源、服务和损失记录。互斥路线不得合并为未区分批次。

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 农场门成熟干脱壳班巴拉豆籽粒 |
| How much | 1,000 kg 收货状态参考产品 |
| How well | 符合声明的含水率、异物、破碎/损伤籽粒、虫害和等级标准 |
| How long or cycle | 一个作物周期及其农场门处理批次 |
| reference_flow_link | `clean_grade_final_dry` 的 `reference_bambara_beans` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 干班巴拉豆 `855d61a4-389d-4db6-bbbd-c4f817ae16b4` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 物种；`dry_shelled_seed`；含水率及基准；等级；异物；破碎/损伤及虫损比例；地理；作物年；单作/间作路线；收获、干燥和脱壳技术；农场门交接 |
| 绑定模式 | `fixed` |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品与物料平衡 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告 1,000 kg 收货状态产品，并在一个一致基准上声明含水率。 |
| `area_to_mass` | 作物记录 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg/ha 与 kg/1,000 kg | 归一化前保留田块面积及总产量/合格产量。 |
| `shell_state_mass` | 豆荚、豆壳与籽粒交接 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 核算带壳投入与籽粒、豆壳、异物、拒收物及水分变化。 |
| `moisture_correction` | 干燥 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用成对质量和含水率测量，并保持干固体守恒。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已披露前茬、土壤状态、保留残余物和结转投入的整备田块 |
| starting_condition_role | 播种前管理生产起点 |
| product_classification_scope | 对应 CPC 3.0 01708 的成熟干 *Vigna subterranea* 籽粒 |
| recursive_input_rule | 作为投入购入的班巴拉豆粮食记录为上游产品投入，不递归表示为本前景系统产出 |
| upstream_dataset_requirement | 产品、能源、水和服务投入链接适用上游数据集；最终过程将集合层养分记录展开为具体产品和 UUID |
| disclosure | 地理、作物年、面积、单作/间作、灌溉、养分产品/组成、植保、起收、干燥、壳态、等级、残余物/拒收物路线及分配 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | 作物生产 | 纳入管理投入、管理土壤直接排放、残余物与损失，直至成熟作物交接。 | `sa-dard-bambara-2020`; `sa-daff-bambara-2016`; `ipcc-2019-managed-soils` |
| `boundary_harvest` | 收获 | 独立建模挖掘/起收，因为该活动移出地下荚并形成已收集豆荚、藤蔓、土壤和田间损失状态。 | `sa-dard-bambara-2020`; `tanzania-naliendele-2001` |
| `boundary_conditioning` | 初加工 | 纳入去土、摘荚、干燥、清理、分级和条件终干燥。 | `fao-pulse-loss-2020`; `fao-grain-handling` |
| `boundary_shell_state` | 脱壳 | CPC 01708 参考产品交接前必须脱壳。干豆荚仅作为中间态；无实测平衡时不得合并豆荚与脱壳籽粒质量。 | `feedipedia-bambara-byproducts-2016` |
| `boundary_exclusions` | 下游 | 排除烹煮、烘烤、磨粉、罐藏、榨油、农场后储运和播种种子认证。 | `fao-forgotten-foods-2023` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `crop_production` | 班巴拉豆管理生物种植 | `required` | 一个声明的作物周期 | 替代生产路线与技术差异；按作物周期索引批量生产；单一期间且不含储存 | 按收获面积和合格产品 |
| `lift_and_recover` | 挖掘或起收并回收豆荚 | `required` | 作物达到声明成熟度 | 豆荚、藤蔓、土壤和田间损失的独立收获交接 | 每个起收豆荚批次 |
| `pod_conditioning` | 豆荚初级处理、保藏与稳定化 | `required` | 起收作物进入农场初加工 | 去土、摘荚和干燥形成清洁稳定豆荚并分离杂物和拒收物 | 每 kg 干豆荚产出 |
| `shell_dry_pods` | 干豆荚脱壳 | `required` | 所有贡献 CPC 01708 的干豆荚批次 | 形成脱壳籽粒并分别处理豆壳和损伤物 | 每 kg 脱壳籽粒产出 |
| `clean_grade_final_dry` | 清理、分级分选与条件终干燥 | `required` | 准备销售干脱壳籽粒 | 形成合格、降级和拒收状态并完成农场门交接 | 每 1,000 kg 合格产品 |

生产按田块/作物周期索引，后续节点按批次/作业批索引。共享投入、产出、清洁和换批事件仅按实测时间、吞吐量或其他披露的因果驱动分配一次。

### 过程：班巴拉豆管理生物种植 (`crop_production`)

#### 输入

##### 产品流

###### 播种材料 (`planting_material`)

记录进入作物周期的可存活班巴拉豆播种材料；该材料是上游投入，不是农场门参考产品。

- 选定流: 班巴拉豆播种材料
- 流属性/单位: Mass / kg
- 数量规则: 收获面积实际播种质量
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1,000 kg 合格参考产品
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_crop_cycle_records`
- 数量范围: 暂定播种材料 QA 筛查范围
  - 范围角色: `qa_guardrail`
  - 下限: 1
  - 上限: 300
  - 单位: kg
  - 基准: 每 1,000 kg 合格参考产品
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

###### 合并养分供应 (`agricultural_nutrient_supply`)

本过程使用的全部矿质肥、有机肥和含养分改良剂仅记录在本卡中；前景记录保留每种具体产品、组成和施用事件。

- 选定流: 农业养分供应
- 流属性/单位: Mass / kg
- 绑定模式: `parameterized`
- 流集: `flow-set.agricultural-nutrient-supply`
- 流集版本: `0.3.0`
- 数量规则: 汇总收获面积所有养分供应产品的实测质量
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1,000 kg 合格参考产品
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_crop_cycle_records`
- 来源: `sa-dard-bambara-2020`; `sa-daff-bambara-2016`
- 数量范围: 暂定合并养分供应 QA 筛查范围
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 2000
  - 单位: kg
  - 基准: 每 1,000 kg 合格参考产品
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

###### 灌溉水 (`irrigation_water`)

按水源、事件和输配系统记录灌溉毛供水量；未启用灌溉时记录为零。

- 选定流: 灌溉水
- 流属性/单位: Volume / m3
- 绑定模式: Parameterized (`parameterized`)
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- 数量规则: 按事件实测或计算灌溉毛供水量
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1,000 kg 合格参考产品
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_crop_cycle_records`
- 来源: `sa-daff-bambara-2016`
- 数量范围: 暂定灌溉水筛查范围
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 10000
  - 单位: m3/1,000 kg accepted product
  - 基准: 作物周期灌溉毛供水量
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

###### 田间作业能源供应 (`field_energy`)

按能源载体和作业记录燃料、电力及符合条件的农机能源服务。

- 选定流: 田间作业能源载体及符合条件的农机能源服务
- 流属性/单位: Energy / MJ
- 绑定模式: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则: 由实测能源载体及符合条件的服务记录换算能量
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1,000 kg 合格参考产品
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_crop_cycle_records`
- 来源: `sa-daff-bambara-2016`
- 数量范围: 暂定田间能源筛查范围
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 10000
  - 单位: MJ/1,000 kg accepted product
  - 基准: 作物周期记录的田间能源
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

###### 植保产品 (`crop_protection_products`)

按制剂产品身份和施用事件分别记录每种植保产品。

- 选定流: 实际施用的植保产品
- 流属性/单位: Mass or volume / kg or L
- 数量规则: 按施用事件实测制剂产品用量
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1,000 kg 合格参考产品
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_crop_cycle_records`
- 来源: `sa-daff-bambara-2016`
- 数量范围: 暂定植保产品筛查范围
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 100
  - 单位: kg formulated product/1,000 kg accepted product
  - 基准: 作物周期记录的植保产品
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 带地下荚的成熟作物 (`mature_crop_handoff`)

记录成熟管理作物向独立挖掘或起收节点的交接。

- 选定流: 带地下荚的成熟班巴拉豆作物
- 流属性/单位: Mass / kg
- 数量规则: 按收获面积核算豆荚、藤蔓、附着土壤和田间损失
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1,000 kg 合格参考产品
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_crop_cycle_records`
- 来源: `sa-dard-bambara-2020`
- 数量范围: 暂定成熟作物质量平衡筛查范围
  - 范围角色: `qa_guardrail`
  - 下限: 1000
  - 上限: 15000
  - 单位: kg
  - 基准: 每 1,000 kg 合格参考产品
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

##### 废物流

###### 田间残余物与生产损失 (`field_residue_and_loss`)

记录留在土壤中的根和其他残余物以及失败或未回收产量；区分还田残余物与移出藤蔓。

- 选定流: 班巴拉豆田间残余物与损失
- 流属性/单位: Mass / kg dry matter
- 数量规则: 田间取样与作物周期核算
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1,000 kg 合格参考产品
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_crop_cycle_records`
- 来源: `ipcc-2019-managed-soils`
- 数量范围: 暂定田间残余物与损失 QA 筛查范围
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 10000
  - 单位: kg dry matter
  - 基准: 每 1,000 kg 合格参考产品
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

##### 基本流

###### 管理土壤直接氧化亚氮 (`direct_soil_n2o`)

依据实际养分和作物残余氮记录，采用所选 IPCC 层级计算直接 N2O。

- 选定流: 排放至空气的氧化亚氮
- 流属性/单位: Mass / kg N2O
- 数量规则: IPCC 管理土壤计算，并将 N2O-N 换算为 N2O
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1,000 kg 合格参考产品
- 基准类型: `reference_flow`
- 证据类型: `method_formula`
- 采集协议: `cp_crop_cycle_records`
- 来源: `ipcc-2019-managed-soils`
- 数量范围: 暂定直接土壤 N2O QA 筛查范围
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 30
  - 单位: kg N2O
  - 基准: 每 1,000 kg 合格参考产品
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

### 过程：挖掘或起收并回收豆荚 (`lift_and_recover`)

#### 输入

##### 产品流

###### 接收成熟作物 (`mature_crop_received`)

接收来自 `crop_production` 的成熟作物并保留田块与作物周期链接。

- 选定流: 带地下荚的成熟班巴拉豆作物
- 流属性/单位: Mass / kg
- 数量规则: 等于关联的 `mature_crop_handoff`
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1,000 kg 合格参考产品
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_harvest_lot_records`
- 数量范围: 暂定接收作物核算筛查范围
  - 范围角色: `qa_guardrail`
  - 下限: 1000
  - 上限: 15000
  - 单位: kg
  - 基准: 每 1,000 kg 合格参考产品
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

###### 挖掘与起收能源 (`harvest_energy`)

记录所选收获技术使用的燃料、电力和符合条件的农机能源服务。

- 选定流: 收获能源载体及符合条件的农机能源服务
- 流属性/单位: Energy / MJ
- 绑定模式: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则: 由采集的能源载体及符合条件的服务记录换算能量
- 数值来源模式: `calculated_value`
- 适用范围: `technology_specific`
- 归一化基准: 每 kg 起收豆荚批次
- 基准类型: `process_output`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_harvest_lot_records`
- 来源:
- 数量范围: 暂定收获能源筛查范围
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 10
  - 单位: MJ/kg lifted pod lot
  - 基准: 一个起收豆荚批次
  - 基准类型: `process_output`
  - 证据类型: `reasoned_estimate`

###### 非能源收获服务 (`harvest_non_energy_service`)

当人工或畜力作为产品服务投入时分别记录。

- 选定流: 人工或畜力收获服务
- 流属性/单位: Service / service-hour
- 数量规则: 按收获批次实测服务量
- 数值来源模式: `foreground_record`
- 适用范围: `technology_specific`
- 归一化基准: 每 kg 起收豆荚批次
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_harvest_lot_records`
- 来源:
- 数量范围: 暂定非能源收获服务筛查范围
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 10
  - 单位: service-hour/kg lifted pod lot
  - 基准: 一个起收豆荚批次
  - 基准类型: `process_output`
  - 证据类型: `reasoned_estimate`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 预期产出：带附着土壤的起收豆荚批次 (`lifted_pod_lot`)

记录去土和摘荚前的已收集豆荚，并交接给 `pod_conditioning`。

- 选定流: 带附着土壤的起收班巴拉豆荚
- 流属性/单位: Mass / kg
- 数量规则: 起收豆荚批次称重
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1,000 kg 合格参考产品
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_harvest_lot_records`
- 来源: `sa-dard-bambara-2020`; `tanzania-naliendele-2001`
- 数量范围: 暂定起收豆荚批次 QA 筛查范围
  - 范围角色: `qa_guardrail`
  - 下限: 1000
  - 上限: 5000
  - 单位: kg
  - 基准: 每 1,000 kg 合格参考产品
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

###### 具有有益去向的移出藤蔓 (`haulm_coproduct`)

仅在具有已记录的饲料、垫料或其他有益交接时将藤蔓记为共产品；否则归为还田残余物或废物。

- 选定流: 班巴拉豆藤蔓
- 流属性/单位: Mass / kg dry matter
- 数量规则: 按去向记录经含水率校正的移出藤蔓
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1,000 kg 合格参考产品
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_harvest_lot_records`
- 来源: `sa-dard-bambara-2020`
- 数量范围: 暂定移出藤蔓 QA 筛查范围
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 10000
  - 单位: kg dry matter
  - 基准: 每 1,000 kg 合格参考产品
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

##### 废物流

###### 未回收豆荚与收获拒收物 (`harvest_loss`)

记录留在土壤中的豆荚、撒漏以及田间拒收的未成熟或破损豆荚；不得计入合格产出。

- 选定流: 班巴拉豆收获损失
- 流属性/单位: Mass / kg
- 数量规则: 田间取样加起收批次核算
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1,000 kg 合格参考产品
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_harvest_lot_records`
- 数量范围: 暂定收获损失 QA 筛查范围
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 1000
  - 单位: kg
  - 基准: 每 1,000 kg 合格参考产品
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

##### 基本流

### 过程：豆荚初级处理、保藏与稳定化 (`pod_conditioning`)

#### 输入

##### 产品流

###### 接收起收豆荚批次 (`lifted_pod_lot_received`)

接收关联起收批次并保留田块、作物周期和收获批次标识。

- 选定流: 带附着土壤的起收班巴拉豆荚
- 流属性/单位: Mass / kg
- 数量规则: 等于关联的 `lifted_pod_lot`
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 kg 干豆荚产出
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_pod_conditioning_records`
- 数量范围: 暂定接收批次 QA 筛查范围
  - 范围角色: `qa_guardrail`
  - 下限: 1
  - 上限: 5
  - 单位: kg
  - 基准: 每 kg 干豆荚产出
  - 基准类型: `process_output`
  - 证据类型: `reasoned_estimate`

###### 豆荚初加工能源 (`conditioning_energy`)

记录去土、摘荚和初次干燥的能源；自然干燥可无购入能源，但保留时间和路线记录。

- 选定流: 豆荚初加工能源载体与服务
- 流属性/单位: Energy / MJ
- 绑定模式: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则: 由实际能源载体和设备记录换算能量
- 数值来源模式: `calculated_value`
- 适用范围: `technology_specific`
- 归一化基准: 每 kg 干豆荚产出
- 基准类型: `process_output`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pod_conditioning_records`
- 来源: `fao-pulse-loss-2020`; `fao-grain-handling`
- 数量范围: 暂定初加工能源 QA 筛查范围
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 15
  - 单位: MJ
  - 基准: 每 kg 干豆荚产出
  - 基准类型: `process_output`
  - 证据类型: `reasoned_estimate`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 稳定化干豆荚 (`dry_pods`)

记录清洁、摘下并干燥的豆荚，作为交给脱壳的中间态；干豆荚不是 CPC 01708 参考产品。

- 选定流: 班巴拉豆干豆荚中间态
- 流属性/单位: Mass / kg
- 数量规则: 在实测含水率下称量产出
- 数值来源模式: `foreground_record`
- 适用范围: `product_specific`
- 归一化基准: 每 kg 干豆荚产出
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_pod_conditioning_records`
- 来源: `tanzania-naliendele-2001`; `fao-pulse-loss-2020`
- 数量范围: 干豆荚产出核算范围
  - 范围角色: `qa_guardrail`
  - 下限: 1
  - 上限: 1
  - 单位: kg
  - 基准: 每 kg 干豆荚产出
  - 基准类型: `process_output`
  - 证据类型: `reasoned_estimate`

##### 废物流

###### 分离土壤、杂物与豆荚拒收物 (`conditioning_debris_rejects`)

按还田、回收、降级或处置去向分别记录土壤、根、植物杂物、撒漏、霉变或破损豆荚。

- 选定流: 豆荚初加工杂物与拒收物
- 流属性/单位: Mass / kg
- 数量规则: 按状态和去向称量各流
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 kg 干豆荚产出
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_pod_conditioning_records`
- 数量范围: 暂定初加工拒收物 QA 筛查范围
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 3
  - 单位: kg
  - 基准: 每 kg 干豆荚产出
  - 基准类型: `process_output`
  - 证据类型: `reasoned_estimate`

##### 基本流

###### 豆荚干燥蒸发水 (`pod_drying_water`)

根据成对的输入/输出质量和含水率计算移除水分；不得将其归为产品损失。

- 选定流: 排放至空气的水
- 流属性/单位: Mass / kg
- 数量规则: 干固体含水率平衡
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 kg 干豆荚产出
- 基准类型: `process_output`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pod_conditioning_records`
- 来源: `fao-grain-handling`
- 数量范围: 暂定豆荚干燥水 QA 筛查范围
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 2
  - 单位: kg water
  - 基准: 每 kg 干豆荚产出
  - 基准类型: `process_output`
  - 证据类型: `reasoned_estimate`

### 过程：干豆荚脱壳 (`shell_dry_pods`)

#### 输入

##### 产品流

###### 脱壳干豆荚投入 (`dry_pods_shelling_inputs`)

按来源初加工批次记录干豆荚。

- 选定流: 班巴拉豆干豆荚
- 流属性/单位: Mass / kg
- 数量规则: 按脱壳批次实测干豆荚投入
- 数值来源模式: `foreground_record`
- 适用范围: `technology_specific`
- 归一化基准: 每 kg 合格脱壳籽粒
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_shelling_records`
- 来源:
- 数量范围: 暂定干豆荚投入筛查范围
  - 范围角色: `qa_guardrail`
  - 下限: 1
  - 上限: 12
  - 单位: kg dry pods/kg accepted shelled seed
  - 基准: 一个脱壳批次
  - 基准类型: `process_output`
  - 证据类型: `reasoned_estimate`

###### 脱壳能源供应 (`shelling_energy`)

记录脱壳使用的燃料、电力及符合条件的机械能源服务。

- 选定流: 脱壳能源载体及符合条件的机械能源服务
- 流属性/单位: Energy / MJ
- 绑定模式: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则: 由实测能源载体及符合条件的服务记录换算能量
- 数值来源模式: `calculated_value`
- 适用范围: `technology_specific`
- 归一化基准: 每 kg 合格脱壳籽粒
- 基准类型: `process_output`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_shelling_records`
- 来源:
- 数量范围: 暂定脱壳能源筛查范围
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 12
  - 单位: MJ/kg accepted shelled seed
  - 基准: 一个脱壳批次
  - 基准类型: `process_output`
  - 证据类型: `reasoned_estimate`

###### 人工脱壳服务 (`manual_shelling_service`)

当人工脱壳表示为产品服务交换时单独记录。

- 选定流: 人工脱壳服务
- 流属性/单位: Service / service-hour
- 数量规则: 按脱壳批次实测人工服务量
- 数值来源模式: `foreground_record`
- 适用范围: `technology_specific`
- 归一化基准: 每 kg 合格脱壳籽粒
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_shelling_records`
- 来源:
- 数量范围: 暂定人工脱壳服务筛查范围
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 12
  - 单位: service-hour/kg accepted shelled seed
  - 基准: 一个脱壳批次
  - 基准类型: `process_output`
  - 证据类型: `reasoned_estimate`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 干脱壳籽粒 (`dry_shelled_seed`)

记录脱壳后向最终清理分级交接的完整干籽粒。

- 选定流: 干脱壳班巴拉豆
- 流属性/单位: Mass / kg
- 数量规则: 完整脱壳籽粒产出称重
- 数值来源模式: `foreground_record`
- 适用范围: `product_specific`
- 归一化基准: 每 kg 合格脱壳籽粒
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_shelling_records`
- 数量范围: 脱壳籽粒产出核算范围
  - 范围角色: `qa_guardrail`
  - 下限: 1
  - 上限: 1
  - 单位: kg
  - 基准: 每 kg 合格脱壳籽粒
  - 基准类型: `process_output`
  - 证据类型: `reasoned_estimate`

###### 具有有益去向的豆壳 (`shell_coproduct`)

仅在具有已记录的有益去向时将豆壳记为共产品；否则作为废物。

- 选定流: 班巴拉豆壳
- 流属性/单位: Mass / kg dry matter
- 数量规则: 按去向称量豆壳
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 kg 合格脱壳籽粒
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_shelling_records`
- 来源: `feedipedia-bambara-byproducts-2016`
- 数量范围: 暂定豆壳共产品 QA 筛查范围
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 2
  - 单位: kg dry matter
  - 基准: 每 kg 合格脱壳籽粒
  - 基准类型: `process_output`
  - 证据类型: `reasoned_estimate`

##### 废物流

###### 破损籽粒、拒收物与废弃豆壳 (`shelling_rejects`)

记录每种拒收状态及其返工、降级、回收或处置去向；返工仅计一次且仅在最终验收后计入合格产出。

- 选定流: 班巴拉豆脱壳拒收物
- 流属性/单位: Mass / kg
- 数量规则: 按状态和去向称量拒收材料
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 kg 合格脱壳籽粒
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_shelling_records`
- 数量范围: 暂定脱壳拒收物 QA 筛查范围
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 0.5
  - 单位: kg
  - 基准: 每 kg 合格脱壳籽粒
  - 基准类型: `process_output`
  - 证据类型: `reasoned_estimate`

##### 基本流

### 过程：清理、分级分选与条件终干燥 (`clean_grade_final_dry`)

#### 输入

##### 产品流

###### 脱壳籽粒批次投入 (`shelled_lot_input`)

按质量关联批次接收脱壳过程形成的干脱壳籽粒。

- 选定流: 班巴拉豆干脱壳籽粒批次
- 流属性/单位: Mass / kg
- 数量规则: 实测关联批次投入
- 数值来源模式: `foreground_record`
- 适用范围: `product_specific`
- 归一化基准: 每 1,000 kg 合格参考产品
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_final_lot_records`
- 来源: `fao-pulse-loss-2020`; `fao-grain-handling`
- 数量范围: 暂定脱壳籽粒批次投入筛查范围
  - 范围角色: `qa_guardrail`
  - 下限: 1000
  - 上限: 1500
  - 单位: kg shelled lot/1,000 kg accepted product
  - 基准: 一个终处理批次
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

###### 终处理能源供应 (`final_conditioning_energy`)

按载体记录清理、分级及条件终干燥能源；未启用终干燥时干燥能源为零。

- 选定流: 终处理能源载体及符合条件的机械能源服务
- 流属性/单位: Energy / MJ
- 绑定模式: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则: 由实际能源载体及符合条件的服务记录换算能量
- 数值来源模式: `calculated_value`
- 适用范围: `technology_specific`
- 归一化基准: 每 1,000 kg 合格参考产品
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_final_lot_records`
- 来源: `fao-pulse-loss-2020`; `fao-grain-handling`
- 数量范围: 暂定终处理能源筛查范围
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 16000
  - 单位: MJ/1,000 kg accepted product
  - 基准: 一个终处理批次
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 农场门合格干脱壳班巴拉豆 (`reference_bambara_beans`)

这是唯一参考产品交接，排除所有豆荚、豆壳、降级、破碎、损伤和拒收状态。

- 选定流: 干班巴拉豆 `855d61a4-389d-4db6-bbbd-c4f817ae16b4`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定模式: `fixed`
- 数量规则: 在实测含水率下的 1,000 kg 合格干脱壳籽粒批次
- 数值来源模式: `fixed_value`
- 适用范围: `product_specific`
- 归一化基准: 参考流
- 基准类型: `reference_flow`
- 证据类型: `identity_reference`
- 数量范围: 参考流恒等范围
  - 范围角色: `allowed_range`
  - 下限: 1000
  - 上限: 1000
  - 单位: kg
  - 基准: 参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

###### 降级干籽粒 (`downgraded_seed`)

单独记录可销售的等外籽粒及其等级和去向；其不是参考产品。

- 选定流: 降级干班巴拉豆籽粒
- 流属性/单位: Mass / kg
- 数量规则: 按等级和去向称量降级产出
- 数值来源模式: `foreground_record`
- 适用范围: `product_specific`
- 归一化基准: 每 1,000 kg 合格参考产品
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_final_lot_records`
- 数量范围: 暂定降级籽粒 QA 筛查范围
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 500
  - 单位: kg
  - 基准: 每 1,000 kg 合格参考产品
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

##### 废物流

###### 异物、损伤籽粒与最终拒收物 (`final_rejects`)

记录未达到合格或降级状态的材料及其回收、饲用或处置去向。

- 选定流: 班巴拉豆清理分级拒收物
- 流属性/单位: Mass / kg
- 数量规则: 按状态和去向称量拒收流
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1,000 kg 合格参考产品
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_final_lot_records`
- 来源: `fao-pulse-loss-2020`
- 数量范围: 暂定最终拒收物 QA 筛查范围
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 500
  - 单位: kg
  - 基准: 每 1,000 kg 合格参考产品
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

##### 基本流

###### 终干燥蒸发水 (`final_drying_water`)

仅在终干燥启用时记录，并由成对质量和含水率测量计算。

- 选定流: 排放至空气的水
- 流属性/单位: Mass / kg
- 数量规则: 干固体含水率平衡；终干燥未启用时为零
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1,000 kg 合格参考产品
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_final_lot_records`
- 来源: `fao-grain-handling`
- 数量范围: 暂定终干燥水 QA 筛查范围
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 500
  - 单位: kg water
  - 基准: 每 1,000 kg 合格参考产品
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`


## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 所有节点 | 首先通过分别计量节点并确保每个作物周期或批次只链接一次来避免分配。 | `iso-14044-2006` |
| `allocation_intercrop` | 间作田块 | 作物专属投入直接归属，共享作业按面积、时间或其他因果驱动分配；份额合计为一。 | `iso-14044-2006` |
| `allocation_residue_status` | 藤蔓与豆壳 | 无有益交接证据的流是残余物/废物且无共产品抵扣；有益交接使其成为预期共产品。 | `iso-14044-2006`; `feedipedia-bambara-byproducts-2016` |
| `allocation_coproduct` | 预期共产品 | 无法通过细分避免分配时，采用同期农场门经济分配并报告质量分配敏感性。 | `iso-14044-2006` |
| `allocation_rework` | 返工/拒收物 | 返工负荷保留在产出批次中，材料只在最终处置时计量，拒收物不得计为合格产出。 | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_crop_cycle_records` | `crop_production` | 全部作物投入/产出 | 田间日志、发票、仪表与产量记录 | 田块；周期；面积；路线；投入产品和组成；水；能源；产量；残余物；损失；排放方法 | 每个事件链接到收获田块 | 原始单位 | 每事件/周期 | 完整周期 | 田块 | 汇总后按合格产品归一化；间作采用因果归属 | 发票、校准、标签、面积和产量记录 |
| `cp_harvest_lot_records` | `lift_and_recover` | 收获投入/产出 | 收获日志、秤和样本 | 田块；批次；方法；能源；豆荚；藤蔓；土壤；损失；去向 | 每批链接一个田块 | kg；MJ | 每批 | 收获作业期 | 田块/技术 | 核算已收集与未收集状态 | 秤检查、取样和收据 |
| `cp_pod_conditioning_records` | `pod_conditioning` | 初加工投入/产出 | 批次表、秤、含水率和设备日志 | 输入/输出质量/含水率；路线；能源；杂物；拒收物；时间 | 测量每种状态 | kg；%；MJ | 每批 | 全部批次 | 场址/路线 | 干固体平衡后归一化 | 校准、路线日志和平衡闭合 |
| `cp_shelling_records` | `shell_dry_pods` | 脱壳投入/产出 | 作业批表与去向记录 | 豆荚质量/含水率；路线；能源；籽粒；豆壳；拒收物；返工 | 测量每个作业批 | kg；%；MJ | 每作业批 | 全部脱壳批次 | 脱壳设备 | 平衡并仅计一次返工 | 校准、日志和平衡闭合 |
| `cp_final_lot_records` | `clean_grade_final_dry` | 最终批次投入/产出 | 分级表、秤、含水率和发运记录 | 壳态；质量/含水率；等级；能源；合格；降级；拒收；返工 | 测量每种状态 | kg；%；MJ | 每批 | 全部销售批次 | 场址/路线 | 平衡后归一化至 1,000 kg | 校准、等级和发运记录 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有流卡 | 数量 / 合格质量 × 1,000 kg | 关联数量；合格质量 | 每参考流数量 |  |
| `calc_moisture_balance` | 干燥 | 干固体 = 湿质量 ×（1 − 含水率）；由成对状态计算水分损失 | 质量、含水率、移出物 | 校正质量与排放至空气的水 | `fao-grain-handling` |
| `calc_shelling_balance` | 脱壳 | 不确定度内：豆荚 = 籽粒 + 豆壳 + 拒收物 + 水分变化 | 作业批状态 | 脱壳得率与残余物流 | `feedipedia-bambara-byproducts-2016` |
| `calc_managed_soil_n2o` | 作物生产 | 按实际合成/有机氮和残余氮采用所选 IPCC 层级；N2O-N 换算为 N2O | 养分组成；残余物；面积；因子 | kg N2O | `ipcc-2019-managed-soils` |
| `calc_intercrop_attribution` | 共享作业 | 共享数量 × 披露的因果份额；份额合计为一 | 共享记录和驱动 | 班巴拉豆份额 | `iso-14044-2006` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 产品 | 核实物种、干燥状态、壳态、等级与交接；隔离播种种子和加工产品。 | 规格、检验与发运记录 |
| `dq_completeness` | 系统 | 覆盖所有贡献田块/批次并核算豆荚、籽粒、藤蔓、豆壳、杂物、返工、拒收物和损失。 | 节点关联平衡 |
| `dq_nutrients` | 养分供应 | 在唯一卡中保留每种具体产品和组成，并将最终交换解析到 UUID。 | 发票、标签与施用记录 |
| `dq_measurement` | 数量 | 保留原始单位、仪器检查、方法和不确定度。 | 校准与计算工作簿 |
| `dq_routes` | 替代路线 | 区分单作/间作、人工/机械、自然/加热脱壳及终干燥启用/未启用路线。 | 路线代码 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | UUID、质量属性/单位组、物种、干燥/壳态、含水率基准或农场门交接缺失时失败。 |  |
| `validate_route_topology` | 过程图 | 干脱壳参考产品必须包含生产、独立收获、豆荚初加工、脱壳和分级。 | `sa-dard-bambara-2020`; `fao-pulse-loss-2020` |
| `validate_nutrient_cardinality` | 作物投入 | 至多一张养分产品投入卡；仅绑定无 group 的 `flow-set.agricultural-nutrient-supply` 版本 `0.3.0`。 |  |
| `validate_mass_balance` | 批次 | 在披露不确定度内，投入等于合格产出、共产品、降级物、拒收物、杂物、损失和水分变化。 |  |
| `validate_grade_handoffs` | 分级 | 要求合格、降级和拒收去向，并从参考产出中排除拒收物。 | `fao-pulse-loss-2020` |
| `validate_rework` | 返工 | 要求产出批次链接、一个最终处置且无重复产出或负荷。 |  |
| `validate_multioutput` | 藤蔓/豆壳 | 共产品抵扣前要求预期产品、残余物或废物状态、去向及归属决定。 | `iso-14044-2006`; `feedipedia-bambara-byproducts-2016` |
| `validate_run_attribution` | 周期/批次 | 要求索引且份额合计为一；共享负荷只计一次。 |  |
| `validate_range_condition` | 条件流卡 | 脱壳范围始终适用；终干燥范围仅在终干燥启用时适用，未启用时为零。暂定范围是 QA 筛查而非限值。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 成熟干班巴拉豆农场生产与处理前景数据集 |
| downstream_use | 地理、脱壳状态和路线匹配时可作 `secondary_dataset` 或 `background_dataset` |
| allowed_use | 限定信息匹配的农场门干脱壳 *Vigna subterranea* 籽粒 |
| excluded_use | 鲜品、播种种子、煮制、烤制、磨粉、罐藏、油及农场后活动 |
| required_metadata | 地理；作物年；面积；路线；产量；灌溉；养分产品/组成；技术；壳态；含水率；等级；去向；分配；覆盖率 |
| required_quality_disclosure | 一手数据比例、估算、校准、平衡闭合、代表性、UUID 缺口、分配敏感性和未决去向 |
| update_trigger | 产品状态、地理、产量、田间实践、技术、等级、残余物市场、分配、排放方法或上游数据发生实质变化 |

## 11. 数据源

| Source id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `fao-forgotten-foods-2023` | official_guidance | FAO，*Compendium of Forgotten Foods*（2023），https://openknowledge.fao.org/3/cc5044en/cc5044en.pdf | 产品身份、干籽粒和排除项 |
| `sa-dard-bambara-2020` | extension_guidance | North West Province DARD，*Bambara Groundnut: A Crop for the Future*（2020），https://dard.nwpg.gov.za/wp-content/uploads/2022/05/Bambara-groundnut-a-crop-for-the-future.pdf | 地下荚、起收、投入和残余物 |
| `sa-daff-bambara-2016` | extension_guidance | South Africa DAFF，*Bambara Groundnuts Production Guideline*（2016），https://nda.gov.za/phocadownloadpap/Brochures_and_Production_Guidelines/Bambara.pdf | 田间管理、养分和水 |
| `tanzania-naliendele-2001` | official_guidance | Tanzania MAFS/Naliendele，*Farmer seed experts...*（2001），https://www.fao.org/fileadmin/templates/esw/esw_new/documents/Links/Publications_Tanzania/38_Farmer_seed_experts_Naliendele.pdf | 挖掘/起收、干燥和储存 |
| `fao-pulse-loss-2020` | official_guidance | FAO，*Improving the Storability and Availability of Pulses by Reducing Post-Harvest Losses*（2020），https://www.fao.org/platform-food-loss-waste/resources/news/news-detail/COVID-19-Series-Improving-the-Storability-and-Availability-of-Pulses-by-Reducing-Post-Harvest-Losses/en | 收获、干燥、清理和损伤控制 |
| `fao-grain-handling` | handbook | FAO，*Farm structures in tropical climates*，Chapter 9，https://www.fao.org/4/s1250e/S1250E0u.htm | 含水率、干燥和储存质量 |
| `ipcc-2019-managed-soils` | method_factor | IPCC 2019 Refinement，Volume 4 Chapter 11，https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | 管理土壤 N2O 与残余氮 |
| `feedipedia-bambara-byproducts-2016` | literature | INRAE/CIRAD/AFZ/FAO Feedipedia（2016），https://feedipedia.review.fao.org/node/529 | 豆壳/副产物状态和饲用去向 |
| `iso-14044-2006` | standard | ISO 14044:2006，2022 年确认有效，https://www.iso.org/standard/38498.html | 分配与清单处理 |
