---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.leeks-and-other-alliaceous-vegetables
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
---

# 韭葱及其他葱属蔬菜

## 1. 范围与适用性

本 PCR 覆盖在露地或保护地生产、并在声明的农场门或包装场门交付的新鲜、可销售韭葱及其他可食用葱属蔬菜。前景系统从接收合格种植材料和生产地块开始，包含种植、收获以及声明纳入的整理或交付操作，并在声明的产品交付门结束。它用于描述一个种植周期和明确物种或产品混合的前景数据包。

本 PCR 适用于韭葱、大蒜、青葱、春葱、细香葱、分葱、红葱头及其他新鲜可食用 *Allium* 蔬菜，但不适用于单独洋葱类别中的洋葱。混合葱属批次只有在披露物种或品种组成、收获状态和质量基准时才可使用。本 PCR 不规定单一栽培技术、灌溉水源、养分产品、植保方案或包装形式。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.leeks-and-other-alliaceous-vegetables |
| classification_refs | CPC 3.0 01254 — Leeks and other alliaceous vegetables |
| covered_products | 新鲜韭葱及其他可食用 *Allium* 蔬菜，可为整株或修整后产品，并以新鲜状态销售 |
| excluded_products | CPC 01253 的洋葱；作为商品出售的种子和种植材料；干燥、冷冻、罐装、腌制、榨汁或其他加工葱属产品；预制餐和下游零售使用 |
| representative_product | 声明农场门或包装场门的新鲜可销售韭葱 |
| production_route | 通过种子、种瓣、鳞茎或移栽苗建立，经过露地或保护地种植、收获、可选整理并交付至声明的门 |
| market_state | 在声明的含水率、修整、分级和包装状态下的新鲜可食用产品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 声明农场门或包装场门的新鲜、可销售韭葱或其他可食用葱属蔬菜 |
| How much | 在声明含水率和整理状态下的 1 kg 销售质量 |
| How well | 声明物种或品种、新鲜状态、修整和等级、含水率基准以及产品交付门条件 |
| How long or cycle | 从种植材料接收到收获及纳入的整理或交付操作的一个种植周期 |
| reference_flow_link | 下表的参考数量和产品流；最终产品身份在前景数据生成时解析 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 新鲜韭葱或其他葱属蔬菜 `<ce835a83-4945-40f9-b6c7-edfe84933a16>` |
| 参考流属性 | 质量 `<93a60a56-a3c8-11da-a746-0800200b9a66>` |
| 参考单位组 | 质量单位组 `<93a60a57-a4c8-11da-a746-0800200c9a66>` |
| 参考单位 | kg |
| 必需限定信息 | 选定物种或品种；新鲜状态；修整和等级；含水率基准；声明农场门或包装场门；适用时的产品混合组成 |

绑定模式：`fixed`

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | 质量 | kg | 参考产品应按声明含水率和整理状态下的销售质量报告。不得以干物质、可食部分或件数替代参考质量。 |
| `nutrient_product_and_basis` | 肥料和土壤改良剂投入 | 质量 | kg 产品；kg N、P、K 或有机养分基准 | 分别记录实际施用产品质量及其声明的养分基准。养分质量是计算限定信息，不替代产品投入量。 |
| `moisture_conversion` | 收获物、拒收物和整理后产品 | 质量 | kg | 记录使用不同含水率基准时，应先利用实测含水率换算为同一基准，再执行质量平衡和参考流归一化。 |

## 5. 系统边界

前景系统从合格种植材料和生产地块开始，在声明的农场门、包装场门或下游交付门结束。它包含直接控制的田间操作，以及跨越边界的养分、水、能源、植保、土地和运输服务。采购投入品的上游生产按研究需要链接为独立数据集。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 合格种植材料和已准备的生产地块 |
| starting_condition_role | 具有来源材料、地块和种植周期披露的前景种植起点 |
| product_classification_scope | CPC 01254 范围内的新鲜韭葱及其他可食用葱属蔬菜 |
| recursive_input_rule | 同类别种植材料作为带有来源和处理披露的明确产品投入记录；不递归纳入其上游生产 |
| upstream_dataset_requirement | 声明种植材料来源、物种或品种、材料类型、处理状态及任何链接的上游数据集 |
| disclosure | 声明地块位置、种植周期、物种或品种、种植路线、灌溉和养分基准、植保路线、交付门及市场质量基准 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_declared_gate` | 前景系统边界 | 纳入种植、收获和直接控制的处理操作，直到声明的农场门或包装场门。只有在声明的交付门和责任方要求时，才纳入整理或交付过程。 | `iso-14044-2006`; `unece-ffv-21-leeks-2023` |
| `boundary_purchased_inputs` | 采购的种植材料和投入品 | 当种植材料、肥料或土壤改良剂、植保产品、水、能源、包装和运输跨越声明边界时，将其作为前景投入表示；其上游生产另行链接。 | `iso-14044-2006` |
| `boundary_nutrient_emissions` | 养分相关基本流输出 | 当直接和间接养分相关排放可由记录的养分施用量和声明的受纳介质计算时纳入。保留报告物质、介质、因子基准和不确定性。 | `ipcc-2019-refinement-vol4-ch11` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| field_preparation_and_establishment | 地块准备与种植建立 | required |  | 前景种植 | 每 1 kg 新鲜可销售葱属产品 |
| crop_growth_and_protection | 作物生长与植保 | required |  | 前景种植 | 每 1 kg 新鲜可销售葱属产品 |
| harvest_and_field_handling | 收获与田间处理 | required |  | 前景收获 | 每 1 kg 新鲜可销售葱属产品 |
| post_harvest_conditioning | 收获后整理 | conditional | 在声明交付门前受控或要求清洗、修整、分选、冷却或包装时纳入。 | 前景整理 | 每 1 kg 整理后葱属产品 |
| delivery_to_declared_gate | 运送至声明交付门 | conditional | 声明交付门位于农场或包装场下游且路线受控或有报告时纳入。 | 前景交付 | 每 1 kg 交付门产品 |

### 过程：地块准备与种植建立（`field_preparation_and_establishment`）

#### 输入

##### 产品流

###### 用于种植建立的种植材料（`planting_material`）

用于建立葱属作物的种子、种瓣、鳞茎或移栽苗作为产品投入记录。最终身份解析需要实际材料类型、物种或品种、批次、处理状态和质量。

- 选定流：葱属种植材料（种子、种瓣、鳞茎或移栽苗；证据缺口）
- 流属性/单位：质量 / kg（供应状态）
- 数量规则：种植周期实际发放的材料量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 声明交付门的新鲜可销售葱属产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_planting_material_records`
- 来源：
- 数量范围：暂定种植材料筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.001
  - 上限：0.25
  - 单位：kg 材料/kg 产品
  - 基准：每单位参考产品质量的种植材料质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 准备和种植用田间机械燃料（`establishment_fuel`）

拖拉机和其他移动设备用于整地、起垄、播种或种植建立的燃料作为移动机械能源投入跨越前景边界。

- 选定流：供应整地和种植操作的移动机械燃料
- 流属性/单位：能源或燃料质量 / MJ 或 kg 燃料
- Binding: parameterized
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- 数量规则：按种植周期记录并分摊的燃料或设备能源使用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 声明交付门的新鲜可销售葱属产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_establishment_fuel_records`
- 来源：
- 数量范围：暂定种植燃料筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.8
  - 单位：MJ/kg 产品
  - 基准：每单位参考产品质量的燃料能量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

###### 占用的种植土地（`cultivation_land_occupation`）

记录作物周期所需的地块面积和占用时长，作为基本资源投入。在位置、土地利用分类和属性确认前，本卡保持功能层级。

- 选定流：葱属种植的土地占用
- 流属性/单位：面积时间 / m2*year
- 数量规则：实测种植面积乘以声明的占用时长
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明交付门的新鲜可销售葱属产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_land_area_records`
- 来源：`mass-balance-identity`
- 数量范围：暂定土地占用筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.02
  - 上限：30
  - 单位：m2*year/kg 产品
  - 基准：每单位参考产品质量的种植面积时间
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：作物生长与植保（`crop_growth_and_protection`）

#### 输入

##### 产品流

###### 供应作物的灌溉水（`irrigation_water`）

当水作为产品投入输送到作物或灌溉系统时记录灌溉水。需要解释灌溉需求时，降雨作为场址条件单独披露。

- 选定流：供应葱属作物的灌溉水
- 流属性/单位：体积或质量 / m3 或 kg 水
- Binding: parameterized
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- 数量规则：作物周期的计量或水量平衡计算灌溉供水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明交付门的新鲜可销售葱属产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_records`
- 来源：
- 数量范围：暂定灌溉水筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1,200
  - 单位：L/kg 产品
  - 基准：每单位参考产品质量的灌溉供水量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 农业养分与肥料投入（`crop_growth_and_protection_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明交付门的新鲜可销售葱属产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_product_records`
- 来源：
- 数量范围：暂定氮投入筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.08
  - 单位：kg N/kg 产品
  - 基准：每单位参考产品质量的施用氮
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

- 数量范围：暂定磷投入筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.04
  - 单位：kg P/kg 产品
  - 基准：每单位参考产品质量的施用磷
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

- 数量范围：暂定钾投入筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.12
  - 单位：kg K/kg 产品
  - 基准：每单位参考产品质量的施用钾
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

- 数量范围：暂定有机养分筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg 有机养分基准/kg 产品
  - 基准：每单位参考产品质量的有机养分基准
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 施用于作物的植保产品（`crop_protection_product`）

在前景种植周期内施用的除草剂、杀菌剂、杀虫剂、生物防治剂或其他植保产品必须记录。实际配方和有效成分保留用于后续身份及排放建模。

- 选定流：施用于葱属作物的植保产品
- 流属性/单位：质量 / kg 施用产品
- 数量规则：由施用记录计量的产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 声明交付门的新鲜可销售葱属产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_protection_records`
- 来源：
- 数量范围：暂定植保产品筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.03
  - 单位：kg 产品/kg 产品
  - 基准：每单位参考产品质量的制剂植保产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 灌溉和田间设施用电（`irrigation_electricity`）

抽取灌溉水或运行田间设施所用的电力，在其作为外购或现场发电能源跨越前景边界时记录。

- 选定流：供应灌溉和田间设施的电力
- 流属性/单位：能源 / kWh
- Binding: parameterized
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- 数量规则：按种植周期分摊的电表或设备用电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 声明交付门的新鲜可销售葱属产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_energy_records`
- 来源：
- 数量范围：暂定灌溉能源筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.8
  - 单位：kWh/kg 产品
  - 基准：每单位参考产品质量的灌溉和田间设施用电
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 养分施用产生的氨排放至空气（`ammonia_to_air`）

当可依据施用氮和声明的挥发方法估算时，记录氨排放至空气。最终身份解析需要保留受纳介质和报告物质。

- 选定流：养分施用产生的氨排放至环境空气
- 流属性/单位：质量 / kg 报告物质
- 数量规则：根据施用氮、挥发因子和报告受纳介质计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明交付门的新鲜可销售葱属产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_nutrient_emission_calculations`
- 来源：`ipcc-2019-refinement-vol4-ch11`
- 数量范围：暂定氨排放筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.01
  - 单位：kg 报告物质/kg 产品
  - 基准：每单位参考产品质量的计算氨释放
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 管理土壤产生的氧化亚氮排放至空气（`nitrous_oxide_to_air`）

根据施用氮路径和选定方法层级计算管理土壤的直接和间接氧化亚氮排放，并披露因子基准、土壤或气候分层及受纳介质。

- 选定流：管理土壤产生的氧化亚氮排放至环境空气
- 流属性/单位：质量 / kg 报告物质
- 数量规则：根据施用氮、直接或间接路径因子和声明的方法层级计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明交付门的新鲜可销售葱属产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_nutrient_emission_calculations`
- 来源：`ipcc-2019-refinement-vol4-ch11`
- 数量范围：暂定氧化亚氮筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.02
  - 单位：kg 报告物质/kg 产品
  - 基准：每单位参考产品质量的计算氧化亚氮释放
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 硝酸盐释放至水体（`nitrate_to_water`）

当声明模型包含径流、排水或淋溶且可由施用氮和场址路径计算时，记录硝酸盐损失至水体。

- 选定流：管理土壤产生的硝酸盐至受纳水体
- 流属性/单位：质量 / kg 报告物质
- 数量规则：根据施用氮、场址损失路径和报告受纳介质计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明交付门的新鲜可销售葱属产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_nutrient_emission_calculations`
- 来源：`ipcc-2019-refinement-vol4-ch11`
- 数量范围：暂定水体硝酸盐筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.05
  - 单位：kg 报告物质/kg 产品
  - 基准：每单位参考产品质量的计算硝酸盐损失
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 硝酸盐释放至土壤（`nitrate_to_soil`）

当选定基本流身份表示土壤受纳介质且场址模型报告保留或损失的氮路径时，记录硝酸盐释放至土壤。

- 选定流：葱属种植管理土壤产生的硝酸盐
- 流属性/单位：质量 / kg 报告物质
- 数量规则：根据施用氮和声明的土壤受纳路径计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明交付门的新鲜可销售葱属产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_nutrient_emission_calculations`
- 来源：`ipcc-2019-refinement-vol4-ch11`
- 数量范围：暂定土壤硝酸盐筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：kg 报告物质/kg 产品
  - 基准：每单位参考产品质量的计算硝酸盐释放
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 磷酸盐释放至水体（`phosphate_to_water`）

当场址养分损失模型或实测径流、排水记录支持报告受纳介质时，记录磷酸盐损失至水体。

- 选定流：管理土壤产生的磷酸盐至受纳水体
- 流属性/单位：质量 / kg 报告物质
- 数量规则：根据施用磷、场址损失路径和报告受纳介质计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明交付门的新鲜可销售葱属产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_nutrient_emission_calculations`
- 来源：`ipcc-2019-refinement-vol4-ch11`
- 数量范围：暂定水体磷酸盐筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.03
  - 单位：kg 报告物质/kg 产品
  - 基准：每单位参考产品质量的计算磷酸盐损失
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 磷酸盐释放至土壤（`phosphate_to_soil`）

当声明的基本流身份和场址模型能够将土壤受纳路径与养分投入区分时，记录磷酸盐释放至土壤。

- 选定流：管理葱属种植土壤产生的磷酸盐
- 流属性/单位：质量 / kg 报告物质
- 数量规则：根据施用磷和声明的土壤受纳路径计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明交付门的新鲜可销售葱属产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_nutrient_emission_calculations`
- 来源：`ipcc-2019-refinement-vol4-ch11`
- 数量范围：暂定土壤磷酸盐筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.05
  - 单位：kg 报告物质/kg 产品
  - 基准：每单位参考产品质量的计算磷酸盐释放
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：收获与田间处理（`harvest_and_field_handling`）

#### 输入

##### 产品流

###### 收获和初步处理用田间机械燃料（`harvest_fuel`）

起挖、切割、去顶、挖掘、田间收集和初步处理使用的燃料作为移动机械能源投入，并按收获作物分摊。

- 选定流：供应收获和田间处理的移动机械燃料
- 流属性/单位：能源或燃料质量 / MJ 或 kg 燃料
- Binding: parameterized
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- 数量规则：按种植周期记录并分摊的燃料或设备能源使用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 声明交付门的新鲜可销售葱属产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_fuel_records`
- 来源：
- 数量范围：暂定收获燃料筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.8
  - 单位：MJ/kg 产品
  - 基准：每单位参考产品质量的收获和田间处理燃料能量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 不可销售的收获拒收物（`harvest_rejects`）

在收获或田间分选过程中移除的破损、尺寸不足、过熟、沾土或其他不可销售葱属材料，离开产品路线时作为废物流记录。

- 选定流：新鲜葱属收获拒收物
- 流属性/单位：质量 / kg 湿物料
- 数量规则：按收获批次和声明含水率基准称量拒收物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 收获葱属作物或每参考产品质量，并披露所选基准
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_reject_records`
- 来源：
- 数量范围：暂定收获拒收物筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.4
  - 单位：kg 拒收物/kg 收获作物
  - 基准：拒收物占收获作物的质量分数
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 收获移除的田间残余物（`removed_field_residue`）

只有在葱叶、根、附土材料或其他作物残余物从田间或收获线物理跨越声明前景边界时，才作为废物流记录。留在田间的残余物作为管理条件披露，不强行归入本行。

- 选定流：收获移除的葱属作物残余物
- 流属性/单位：质量 / kg 湿物料
- 数量规则：按收获批次测量移除残余物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 收获葱属作物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_removed_residue_records`
- 来源：
- 数量范围：暂定移除残余物筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.6
  - 单位：kg 残余物/kg 收获作物
  - 基准：移除残余物占收获作物的质量分数
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

#### 输出

##### 产品流

###### 田间门的新鲜可销售葱属产品（`marketable_field_product`）

收获和田间分选后离开的可销售新鲜产品，按声明含水率、修整和质量基准称量。物种或品种及批次混合保持明确，以供最终产品流身份解析。

- 选定流：田间门的新鲜可销售韭葱或其他葱属蔬菜
- 流属性/单位：质量 / kg（销售状态）
- 数量规则：田间分选后的可销售产品称量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 声明田间门的新鲜可销售葱属产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_marketable_harvest_records`
- 来源：
- 数量范围：暂定可销售得率筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.5
  - 上限：1
  - 单位：kg 可销售产品/kg 收获作物
  - 基准：收获分选后的可销售产品分数
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

### 过程：收获后整理（`post_harvest_conditioning`）

#### 输入

##### 产品流

###### 清洗或去除土壤用水（`conditioning_water`）

当声明交付门包含该操作时，记录清洗、去土或其他受控整理用水。水质、回用和排放路径在数据包中披露。

- 选定流：清洗或去除新鲜葱属产品土壤用的工艺水
- 流属性/单位：体积或质量 / m3 或 kg 水
- Binding: parameterized
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- 数量规则：分配给整理批次的计量用水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 整理后葱属产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_water_records`
- 来源：
- 数量范围：暂定整理用水筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：L/kg 整理后产品
  - 基准：每单位整理后产品质量的清洗和去土用水
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 整理和冷却用电（`conditioning_electricity`）

当操作在声明边界内时，记录清洗设备、分选、强制通风冷却或短期受控存放的用电量。

- 选定流：供应葱属整理和冷却的电力
- 流属性/单位：能源 / kWh
- Binding: parameterized
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- 数量规则：分配给整理批次的计量或设备用电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 整理后葱属产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_energy_records`
- 来源：
- 数量范围：暂定整理能源筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.4
  - 单位：kWh/kg 整理后产品
  - 基准：每单位整理后产品质量的整理和冷却用电
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 声明交付门使用的包装材料（`conditioning_packaging`）

当包装在声明交付门前受控或被要求时，记录包装材料、可重复使用箱、内衬或其他容器。选择具体产品流前必须提供实际形式、材料、使用次数和供应商。

- 选定流：新鲜葱属产品的实际包装或可重复使用容器
- 流属性/单位：质量 / kg 包装材料
- 数量规则：整理批次发放的包装称量质量；可重复使用包装按有记录的使用次数摊销
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 整理后葱属产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_packaging_records`
- 来源：
- 数量范围：暂定包装材料筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.2
  - 单位：kg 包装/kg 整理后产品
  - 基准：每单位整理后产品质量的包装材料质量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 整理后的新鲜葱属产品（`conditioned_product`）

清洗、修整、分选、冷却或包装后离开的新鲜产品按声明产品状态称量。物种、整理状态、等级、含水率和交付门确认后再解析产品流身份。

- 选定流：包装场门的整理后新鲜韭葱或其他葱属蔬菜
- 流属性/单位：质量 / kg（销售状态）
- 数量规则：操作出口发出的整理后产品称量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 声明交付门的整理后葱属产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioned_output_records`
- 来源：
- 数量范围：暂定整理后产出筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.6
  - 上限：1
  - 单位：kg 整理后产品/kg 整理前产品
  - 基准：清洗、修整、分选、冷却和包装后的整理后产品得率
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 修整和分选拒收物（`conditioning_rejects`）

整理时移除的修整物、破损物、土壤和不合格产品在离开产品路线时作为废物流记录。若跨越进一步边界，则单独记录其去向和处理。

- 选定流：新鲜葱属整理产生的修整和分选拒收物
- 流属性/单位：质量 / kg 湿物料
- 数量规则：按整理批次称量产生的拒收物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 进入整理过程的产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_reject_records`
- 来源：
- 数量范围：暂定整理拒收物筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.3
  - 单位：kg 拒收物/kg 进入整理产品
  - 基准：整理拒收物占进入产品质量的分数
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：运送至声明交付门（`delivery_to_declared_gate`）

#### 输入

##### 产品流

###### 至声明交付门的公路货运服务（`delivery_transport`）

当农场或包装场至声明下游交付门的路线和责任属于范围时，记录公路运输。披露距离、载荷、车辆或服务类型、温控和返程处理。

- 选定流：新鲜葱属产品的公路货运服务
- 流属性/单位：运输服务 / t*km
- Binding: parameterized
- Flow Set: `flow-set.transport-service`
- Flow Set version: `0.2.0`
- Flow Set group: `road-freight-transport`
- 数量规则：由发运记录和声明载荷计算路线特定吨公里
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 运至声明交付门的产品
- 基准类型：运输服务（`transport_service`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_delivery_transport_records`
- 来源：
- 数量范围：暂定交付距离筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1,000
  - 单位：t*km/1,000 kg 产品
  - 基准：运至声明交付门的每批次产品公路货运服务
  - 基准类型：运输服务（`transport_service`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 运至声明交付门的新鲜葱属产品（`delivered_product`）

声明下游交付门发出的产品按称量记录与运输批次核对。该输出在物种或混合组成、产品状态和交付门固定前保持未映射。

- 选定流：运至声明交付门的新鲜韭葱或其他葱属蔬菜
- 流属性/单位：质量 / kg（销售状态）
- 数量规则：扣除运输路线记录损失后的发运产品质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 运至声明交付门的产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_delivery_output_records`
- 来源：
- 数量范围：暂定交付产出筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.9
  - 上限：1
  - 单位：kg 交付产品/kg 发运产品
  - 基准：扣除有记录运输损失后的交付产品
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

## 7. 分配与副产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_lots` | 不同物种、品种或产品路线 | 在实施分配前，只要有独立记录，就按物种、品种、产品状态或目的地拆分田间、收获、整理和交付记录。 | `iso-14044-2006` |
| `allocation_shared_operations` | 多种葱属产品共用操作 | 当田间或整理操作服务多个产品且无法拆分时，按声明含水率基准下的收获或发运质量分配共用投入，并披露分配键。 | `iso-14044-2006` |
| `allocation_residue_status` | 拒收物和残余物 | 除非存在有记录的销售或有用副产品路线，否则将不可销售拒收物和移除残余物作为废物流输出。若报告有用副产品，应披露其身份、去向、数量和分配方法。 | `iso-14044-2006`; `mass-balance-identity` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_planting_material_records` | field_preparation_and_establishment | 种植材料 | 种子、种瓣、鳞茎或移栽苗批次记录 | 物种或品种；材料类型；批次号；处理状态；质量；含水率基准；供应商 | 供应商记录和田间发放时校准称量 | kg（供应状态） | 每批次和种植周期 | 种植周期 | 生产地块 | 汇总发放批次并按声明产品输出归一化 | 批次追溯、供应商文件和秤校准 |
| `cp_establishment_fuel_records` | field_preparation_and_establishment | 整地和种植田间机械燃料 | 机械燃料日志或设备记录 | 设备；操作；燃料类型；数量；地块；日期；分配基准 | 燃料日志、电表或核验的设备估算 | L、kg 或 MJ | 每项操作 | 种植周期 | 生产地块 | 将操作分配至种植周期并按产品输出归一化 | 燃料记录核对和设备校准 |
| `cp_land_area_records` | field_preparation_and_establishment | 占用种植土地 | 地块登记和种植计划 | 地块号；面积；土地利用类别；占用日期；种植周期；产品分配 | 地块图、农场登记和种植周期记录 | m2 和 year | 每地块和种植周期 | 种植周期 | 生产地块 | 面积乘占用时长并按产品输出分配 | 地块边界记录和种植计划 |
| `cp_irrigation_records` | crop_growth_and_protection | 灌溉水供应 | 灌溉计量或水量平衡记录 | 水源；表计起止读数；供水日期；灌溉事件；降雨或平衡输入；地块 | 校准水表或有记录的 FAO-56 水量平衡计算 | m3 或 kg 水 | 每次灌溉事件 | 种植周期 | 生产地块 | 汇总供水量并按产品输出归一化 | 表计校准、事件日志和天气或平衡输入 |
| `cp_nutrient_product_records` | crop_growth_and_protection | 肥料或土壤改良剂养分投入 | 施用日志和产品标签或分析报告 | 产品名；供应商；批次；产品质量；N/P/K 或有机分析值；施用日期；地块；方法 | 称量产品并保留标签或实验室分析 | kg 产品和 kg 养分 | 每次施用 | 种植周期 | 生产地块 | 按养分基准汇总产品和养分质量并按产品输出归一化 | 施用日志、标签或分析报告和秤记录 |
| `cp_crop_protection_records` | crop_growth_and_protection | 植保产品 | 喷施或处理日志 | 产品；配方；有效成分；批次；剂量；面积；日期；地块；稀释；方法 | 施用日志和校准设备记录 | kg 产品或有效成分 | 每次施用 | 种植周期 | 生产地块 | 汇总施用产品并保留有效成分基准 | 产品标签、施用日志和设备校准 |
| `cp_irrigation_energy_records` | crop_growth_and_protection | 灌溉和田间设施用电 | 电表或设备日志 | 电表或设备；kWh；操作；日期；地块；分配基准 | 电表记录或核验设备估算 | kWh | 每项操作或计费期 | 种植周期 | 生产地块 | 将抽水和田间设施用电分配至种植周期 | 电表记录和分配核对 |
| `cp_nutrient_emission_calculations` | crop_growth_and_protection | 养分相关基本流输出 | 与施用记录关联的养分排放工作表 | 养分投入；因子或模型层级；路径；受纳介质；报告物质；气候或土壤层；不确定性 | 使用养分记录和选定方法的有记录计算 | kg 报告物质 | 每次施用或种植周期 | 种植周期 | 生产地块和受纳介质 | 计算每条路径、保留因子并按产品输出归一化 | 因子来源、工作表复核和输入核对 |
| `cp_harvest_fuel_records` | harvest_and_field_handling | 收获和初步处理田间机械燃料 | 机械燃料日志或设备记录 | 设备；操作；燃料类型；数量；地块；日期；分配基准 | 燃料日志、电表或核验设备估算 | L、kg 或 MJ | 每次收获操作 | 种植周期 | 生产地块 | 将收获操作分配至收获产品输出 | 燃料记录核对和设备校准 |
| `cp_harvest_reject_records` | harvest_and_field_handling | 收获拒收物 | 收获分选或拒收物记录 | 收获批次；拒收原因；质量；含水率基准；去向；日期 | 收获或田间分选时称量拒收物 | kg 湿物料 | 每收获批次 | 种植周期 | 生产地块 | 汇总拒收物并按声明基准归一化至收获或可销售输出 | 校准秤和批次核对 |
| `cp_removed_residue_records` | harvest_and_field_handling | 收获移除的田间残余物 | 残余物移除或转移记录 | 收获批次；残余物类型；质量；含水率基准；移除路线；日期 | 在边界称量移除残余物 | kg 湿物料 | 每次移除事件 | 种植周期 | 生产地块 | 仅汇总物理跨越边界的残余物 | 秤记录和去向接收单 |
| `cp_marketable_harvest_records` | harvest_and_field_handling | 田间门新鲜可销售葱属产品 | 收获和发运记录 | 物种或品种；批次；质量；含水率基准；修整；等级；日期；交付门 | 田间分选后的校准称量 | kg（销售状态） | 每收获批次 | 种植周期 | 生产地块 | 按声明门和含水率基准汇总可销售批次 | 秤校准、等级记录和批次追溯 |
| `cp_conditioning_water_records` | post_harvest_conditioning | 清洗或去土用水 | 整理水表和批次记录 | 表计；批次；水源；用途；回用；数量；日期；排放路径 | 校准水表和批次分配 | m3 或 kg 水 | 每整理批次 | 产品货架或发运期 | 包装场或整理设施 | 汇总分配用水并按整理后产品输出归一化 | 表计校准和批次核对 |
| `cp_conditioning_energy_records` | post_harvest_conditioning | 整理和冷却用电 | 能源表计或设备记录 | 设备；批次；kWh；操作；温度或存放时间；日期 | 电表记录和设备分配 | kWh | 每整理批次或计费期 | 产品货架或发运期 | 包装场或整理设施 | 将整理能耗分配至整理后产品输出 | 电表记录、设备日志和分配核对 |
| `cp_conditioning_packaging_records` | post_harvest_conditioning | 声明交付门包装材料 | 包装发放和复用记录 | 包装形式；材料；供应商；质量；批次；复用次数；损耗；日期 | 称量包装并记录复用或回收 | kg 包装材料 | 每批次和发运期 | 产品货架或发运期 | 包装场或整理设施 | 按有记录的使用次数摊销可复用包装并按输出归一化 | 包装规格、秤记录和复用日志 |
| `cp_conditioned_output_records` | post_harvest_conditioning | 整理后新鲜葱属产品 | 整理发运记录 | 物种或品种；批次；输入质量；输出质量；含水率；修整；等级；包装；日期 | 整理出口校准称量 | kg（销售状态） | 每整理批次 | 产品货架或发运期 | 包装场或整理设施 | 汇总整理后输出，并与投入、拒收物和包装损失核对 | 秤校准、批次追溯和发运记录 |
| `cp_conditioning_reject_records` | post_harvest_conditioning | 修整和分选拒收物 | 整理拒收物记录 | 批次；拒收类型；质量；含水率；去向；日期 | 在整理边界称量拒收物 | kg 湿物料 | 每整理批次 | 产品货架或发运期 | 包装场或整理设施 | 汇总拒收物并按进入产品或整理后输出归一化 | 校准秤和去向记录 |
| `cp_delivery_transport_records` | delivery_to_declared_gate | 至声明门的公路货运服务 | 发运和承运商记录 | 起点；终点；日期；产品质量；距离；车辆或服务；温控；载荷；返程 | 以发运记录、路线距离和载荷计算 | t*km | 每批发运 | 发运期 | 声明路线 | 计算吨公里并按交付产品归一化 | 承运商记录、路线证据和载荷核对 |
| `cp_delivery_output_records` | delivery_to_declared_gate | 声明门交付的新鲜葱属产品 | 接收或交付记录 | 物种或混合；发运号；发运质量；接收质量；含水率；损失；日期；交付门 | 发运和接收校准称量 | kg（销售状态） | 每批发运 | 发运期 | 声明路线和交付门 | 核对发运、接收和有记录损失质量 | 发运和接收记录、秤校准和损失日志 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass_to_reference_flow` | 所有产品和废物质量行 | 将记录质量换算为声明含水率基准，除以相关过程输出质量，再缩放至 1 kg 参考产品。 | 收获、整理和交付记录 | 每参考产品质量 | `mass-balance-identity` |
| `calculate_nutrient_basis` | 肥料和土壤改良剂投入 | 养分质量 = 施用产品质量 × 声明养分分数；将产品质量和各养分基准作为分开报告值保留。 | `cp_nutrient_product_records` | 每参考产品的 kg N、P、K 或有机养分基准 | `mass-balance-identity` |
| `calculate_irrigation_requirement` | 作物灌溉水供应 | 根据场址天气、土壤、作物阶段、有效降雨和灌溉效率确定作物需水量；有计量时报告计量供水，计算时记录水量平衡。 | `cp_irrigation_records` | 每参考产品的 m3 水 | `fao-56-crop-evapotranspiration` |
| `calculate_nutrient_emissions` | 养分相关基本流输出 | 对记录的养分投入和路径应用选定的 IPCC 或场址因子，保留受纳介质和报告物质，并记录直接和间接路径。 | `cp_nutrient_product_records`; `cp_nutrient_emission_calculations` | 每参考产品的 kg 报告物质 | `ipcc-2019-refinement-vol4-ch11` |
| `allocate_shared_operations` | 共用田间、整理或交付操作 | 在无法进一步拆分后，按声明含水率基准下的实测产品质量分配共用投入。 | 田间、整理和交付操作记录 | 每参考产品的分配投入 | `iso-14044-2006` |
| `amortize_reusable_packaging` | 可重复使用箱和容器 | 可重复使用包装量 = 发放包装质量 × 可归属使用份额；使用有记录的周期次数及损耗或更换记录。 | `cp_conditioning_packaging_records` | 每整理后产品的 kg 包装 | `iso-14044-2006` |
| `reconcile_gate_mass_balance` | 田间、整理和交付输出 | 在每个声明门核对进入质量与可销售输出、拒收物、移除残余物以及有记录的含水率或运输损失。 | 收获、整理和交付记录 | 交付门质量平衡校验 | `mass-balance-identity` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考流和产品输出 | 必须明确物种或品种、产品混合、市场状态、修整、等级、含水率基准和声明交付门。 | 批次和产品规格记录 |
| `dq_input_traceability` | 种植材料、养分、植保、包装、水和能源 | 投入应追溯到地块、批次、施用或使用事件、日期，以及适用时的供应商或来源。 | 采购、施用、计量和批次记录 |
| `dq_mass_reconciliation` | 收获、整理和交付 | 产品、拒收物、残余物和有记录损失在含水率换算后必须平衡；无法解释的差异作为数据质量问题。 | 校准秤和核对工作表 |
| `dq_nutrient_method` | 养分投入和排放 | 必须披露养分分析、因子来源、路径、受纳介质和方法层级，并区分估计因子和实测排放。 | 养分标签或实验室分析及复核的计算工作表 |
| `dq_water_energy` | 灌溉和整理公用工程 | 水和能源记录必须说明表计或计算基准、时间覆盖、分配基准及校准或核对证据。 | 表计日志、公共事业账单和计算记录 |
| `dq_conditional_process_scope` | 收获后整理和交付 | 只有声明交付门和操作责任有记录时，才可纳入条件过程。 | 交付门声明、合同、发运或承运商记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_qualifiers` | 参考流 | 数据包缺少物种或品种、新鲜状态、修整或等级、含水率基准或声明交付门时拒绝。 | `unece-ffv-21-leeks-2023` |
| `validate_mass_balance` | 过程交付门 | 在每个纳入的交付门，含水率换算后核对投入、可销售输出、拒收物、移除残余物和有记录损失。 | `mass-balance-identity` |
| `validate_nutrient_basis_and_pathways` | 养分投入和基本流输出 | 核对肥料或改良剂产品质量与 N/P/K 或有机养分基准分开，且每项计算排放说明路径、因子基准、受纳介质和报告物质。 | `ipcc-2019-refinement-vol4-ch11` |
| `validate_conditional_processes` | 收获后整理和交付 | 核对每个条件过程都有声明交付门和责任方支持；若已知条件过程在范围外发生，也要披露其省略。 | `iso-14044-2006` |
| `validate_allocation_disclosure` | 共用操作和混合葱属批次 | 有独立记录时核对是否已拆分；否则核对质量分配键和含水率基准是否声明。 | `iso-14044-2006` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 具有匹配物种或产品混合、种植路线、地理、种植周期、产品状态、声明交付门和数据质量披露的新鲜韭葱或其他葱属蔬菜生产 |
| excluded_use | CPC 01253 的洋葱；种植材料数据集；加工葱属食品；缺少产品状态或交付门的数据集；直接比较含水率或等级基准不兼容的批次 |
| required_metadata | 参考流；物种或品种；产品混合；地理；种植周期；种植材料类型；灌溉和养分基准；植保路线；收获和整理状态；声明交付门；分配键；DQR |
| required_quality_disclosure | 身份和批次追溯、采集值与计算值、养分因子和路径、含水率换算、质量平衡结果、条件过程纳入情况和证据缺口流身份 |
| update_trigger | 覆盖产品边界、种植路线、养分或灌溉方法、产品状态、包装或交付门、分配规则或经审查的身份和来源证据发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `iso-14044-2006` | standard | https://www.iso.org/standard/38498.html | 前景边界、分配、数据质量和共用操作规则 |
| `iso-14067-2018` | standard | https://www.iso.org/standard/71206.html | 产品碳足迹报告背景和数据集披露 |
| `fao-56-crop-evapotranspiration` | official_guidance | https://www.fao.org/4/X0490E/X0490E00.htm | 场址水量平衡、作物蒸散和灌溉数据采集 |
| `ipcc-2019-refinement-vol4-ch11` | method_factor | https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | 管理土壤直接和间接氧化亚氮路径及养分排放计算披露 |
| `unece-ffv-21-leeks-2023` | official_guidance | https://unece.org/sites/default/files/2024-03/FFV-21_Leeks_2023_e.pdf | 新鲜韭葱的市场质量、等级、状态和产品状态限定信息 |
| `mass-balance-identity` | method_factor | PCR 方法身份：含水率换算后，所有纳入的田间、整理和交付门均应保持质量守恒。 | 归一化、分配和交付门核对 |
