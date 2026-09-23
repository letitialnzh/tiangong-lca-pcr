---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.sunflower-seed
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 向日葵籽

## 1. 范围与适用性

本 PCR 适用于田间生产、在已声明农场内位置交接的整粒向日葵籽前景数据包，涵盖油用、食用/非油用及鸟食市场类别。平台参考流原文是“Production mix, in the farm”和“Production of sunflower seeds”，并未证明农场门交付、初清、干燥或等级。每个数据包须记录实际交接点以及此前发生的农场内作业。[ndsu-sunflower-guide-2020]

葵油、葵粕、脱壳仁、炒制籽、场外运输和加工不适用。专门生产的播种用种需要单独核实的产出身份；农场投入端的种用种子供应流不能充当收获产出。如 CPC 01445 还包括播种用种，拟议对应关系为 `narrower`。[unsd-cpc-3-2025]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.sunflower-seed |
| classification_refs | CPC 3.0 01445 Sunflower seed；整粒商品籽 `narrower` 路线 |
| covered_products | 在已记录农场内交接点的油用、食用/非油用及鸟食整粒籽 |
| excluded_products | 未核实产出身份的播种用种；葵油、葵粕、葵仁、炒制籽 |
| representative_product | 已收获的整粒向日葵籽，按实际合格品质量 |
| production_route | 田间作物管理；花盘/籽粒收获脱粒；按实际情况进行初清、分级、干燥与贮藏 |
| market_state | 市场类别、等级、杂质、含水率及交接点随批次声明，平台流不预设这些状态 |

田间种植为母过程。灌溉田比雨养田多水、抽水能耗和计量记录；同一田块/时段只归于实际路线，不同田块可各自记录后汇总。初级调理为自然通风或加热干燥的母过程；两种方式在有记录时可顺序使用。加热方式改变能耗和脱水记录。油用与食用类别不能未经证据合并等级。[ndsu-sunflower-guide-2020; ndsu-sunflower-drying-2022]

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在真实农场内产出交接点的整粒向日葵籽 |
| How much | 实际合格整粒籽 1 kg |
| How well | 声明油用、食用/非油用或鸟食类别、等级/验收规则、实测水分及杂质；不推定已初清或达到贮藏等级 |
| How long or cycle | 可追溯田块、批次及作物年度，纳入的调理运行均可追溯 |
| reference_flow_link | 按实际路线取 `sunflower_grading`、`sunflower_drying`、`sunflower_cleaning` 或 `sunflower_harvest` 的最终合格籽 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 实际质量 1 kg；干物质或标准水分换算另行声明 |
| 参考产品流 | Sunflower seed `a62436d6-249c-4ac3-b5f4-653d0f277519`；平台限定 “Production mix, in the farm” |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 农场与田块；作物年度和批次；油用/食用/鸟食类别；已知品种；收获与交接时实测水分；等级、杂质及真实交接点；收获、清洁、分级、干燥、贮藏范围；灌溉或雨养 |
| 绑定模式 | `fixed` |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 所有籽粒状态转移 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用实称质量并测定每次转移的含水率；干物质换算单列。 |
| `wet_dry_balance` | 干燥 | Mass | kg | 干固体＝湿质量×（1－实测湿基含水率）；连同剔除物核对进出干固体。 |
| `input_units` | 养分、能源和用水 | 对应实测属性 | kg、L、kWh 或 m3 | 保留原始单位并记录商品肥转养分、燃料转能量及水体积换算。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 处于明确轮作与初始土壤状况的播种前田块；从整地到收获记录采购投入和田间作业 |
| starting_condition_role | 作物建植为前景起点；种用种子、肥料、植保品、燃料和电力使用上游数据集 |
| product_classification_scope | CPC 01445 中较窄的整粒商品籽路线，区分油用与非油用类别 |
| recursive_input_rule | 采购的向日葵播种用种是上游投入，不得递归使用本产出数据集 |
| upstream_dataset_requirement | 标识种用种子、养分、植保品、燃料、电力和服务的上游数据集，披露缺口 |
| disclosure | 田块和作物年度、市场类别、真实农场内交接、调理/贮藏范围、用水路线及残体去向 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `b_field` | `sunflower_cultivation` | 纳入整地、播种、养分/植保管理；发生灌溉时纳入供水与抽水；纳入成熟花盘待收获前的机械作业。 | ndsu-sunflower-guide-2020 |
| `b_harvest` | `sunflower_harvest` | 花盘/籽粒采收脱粒独立于田间生长；分别记录散籽、未收集损失和茎秆/花盘材料。 | ndsu-sunflower-guide-2020 |
| `b_treatment` | `sunflower_cleaning`、`sunflower_grading`、`sunflower_drying` | 仅纳入交接前真实发生的初清、分选和稳定化；区分合格、降级、剔除、脱水及贮藏状态。 | ndsu-sunflower-guide-2020; ndsu-sunflower-drying-2022 |
| `b_exit` | 最终产出 | 已声明的农场内整粒籽交接即终点；排除场外运输和加工，不把 “in the farm” 改写成 “at farm gate”。 | ndsu-sunflower-guide-2020 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `sunflower_cultivation` | 田间作物管理 | required | 每田块和作物年度 | 生物生产；雨养或灌溉 | 每 kg 合格籽的田间记录 |
| `sunflower_harvest` | 花盘与籽粒收获 | required | 每一收获批次 | 独立收获脱粒 | 收集籽和田间损失 |
| `sunflower_cleaning` | 初次清洁 | conditional | 交接前确有清洁 | 散籽转准备态籽 | 进出 kg |
| `sunflower_grading` | 市场类别分选 | conditional | 分为两个以上质量/去向状态 | 合格、降级、剔除交接 | 各等级/去向 kg |
| `sunflower_drying` | 农场内稳定化 | conditional | 交接前干燥或主动贮藏 | 可用湿籽转实测水分稳定态 | 各运行水分、质量和能耗 |

收获从生长作物中分离花盘/籽粒，故与种植独立；不预设初清。油用、食用、鸟食去向须有批次记录。连续清洁/干燥按运行时段记录，田间收获与分选按批次/运行编号记录。切换、返清、顺序干燥各自关联运行，投入产出各计算一次。[ndsu-sunflower-guide-2020; ndsu-sunflower-drying-2022]

### 过程：田间作物管理（`sunflower_cultivation`）

#### 输入

##### 产品流

###### 播种用种投入（`sowing_seed_input`）

建植田块所用种子作为采购或留用投入进入种植。

- 选定流：经核实的实际种用种子身份，绝不使用商品产出 UUID。
- 流属性/单位：质量 kg
- 数量规则：按田块和事件记录实播种量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每田块和每 kg 合格籽。
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field`
- 来源：`ndsu-sunflower-guide-2020`
- 数量范围：暂定宽幅 QA 筛查；以现场记录替代
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：50
  - 单位：kg seed/ha
  - 基准：一个作物周期每公顷；覆盖种粒大小和植株密度差异的暂定宽幅质量筛查，以实测批次为准
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 农业养分与肥料投入（`sunflower_cultivation_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每田块和每 kg 合格籽。
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field`
- 来源：`ndsu-sunflower-guide-2020`
- 数量范围：暂定宽幅 QA 筛查；以现场记录替代
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2000
  - 单位：kg product/ha
  - 基准：一个作物周期每公顷、每种肥料产品单列；仅暂定筛查，以田间施用记录替代
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 植保产品（`crop_protection`）

只有真实施用时，病虫草防治产品才进入。

- 选定流：实际植保商品身份。
- 流属性/单位：商品质量 kg
- 数量规则：按田块和商品汇总施用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每田块和每 kg 合格籽。
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field`
- 来源：`ndsu-sunflower-guide-2020`
- 数量范围：暂定宽幅 QA 筛查；以现场记录替代
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：200
  - 单位：kg product/ha
  - 基准：一个作物周期每公顷、每种植保或助收产品单列；仅暂定筛查
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 灌溉水（`irrigation_water`）

灌溉水只进入实际灌溉路线的田块。

- 选定流：实际灌溉水供应身份。
- 流属性/单位：体积 m3
- 绑定模式：`parameterized`
- 流集合：`flow-set.water-use`
- 流集合版本：`0.2.0`
- 流集合分组：`irrigation-water`
- 数量规则：按田块计量用水；雨养田只记路线，不产生水交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每田块和每 kg 合格籽。
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field`
- 来源：`ndsu-sunflower-guide-2020`
- 数量范围：暂定宽幅 QA 筛查；以现场记录替代
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20000
  - 单位：m3/ha
  - 基准：一个作物周期每公顷；雨养路线为零，灌溉路线以实测取水或送水为准；仅暂定筛查
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 田间机械燃料（`field_fuel`）

建植和田间管理的机械燃料进入田间作业。

- 选定流：实际燃料商品身份。
- 流属性/单位：体积 L
- 绑定模式：`parameterized`
- 流集合：`flow-set.energy-supply`
- 流集合版本：`0.2.0`
- 流集合分组：`mobile-machinery-fuel`
- 数量规则：由计量或机械日志按田块记录，并保留换算因子。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每田块和每 kg 合格籽。
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field`
- 来源：`ndsu-sunflower-guide-2020`
- 数量范围：暂定宽幅 QA 筛查；以现场记录替代
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：L/ha
  - 基准：一个作物周期每公顷；归属的田间作业及分燃料实测升数；仅暂定筛查
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 田间及灌溉电力（`field_electricity`）

只有设备和灌溉水泵真实用电时才纳入。

- 选定流：实际电力供应身份。
- 流属性/单位：能量 kWh
- 绑定模式：`parameterized`
- 流集合：`flow-set.energy-supply`
- 流集合版本：`0.2.0`
- 流集合分组：`electricity-supply`
- 数量规则：按田块和水泵运行计量或记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每田块和每 kg 合格籽。
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field`
- 来源：`ndsu-sunflower-guide-2020`
- 数量范围：暂定宽幅 QA 筛查；以现场记录替代
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20000
  - 单位：kWh/ha
  - 基准：一个作物周期每公顷；条件性电动机械或灌溉泵送的实测电量；仅暂定筛查
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

通常无废物投入；再生改良物单列身份。

##### 基本流

不预设固定基本流投入。

#### 输出

##### 产品流

###### 田间成熟花盘（`mature_heads`）

田间成熟作物是移交独立收获过程的生物状态。

- 选定流：内部生物状态，非出售种子 UUID。
- 流属性/单位：估计籽粒质量 kg。
- 数量规则：关联田块、年度和收获批次，不把潜在籽粒当作上市产出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每作物年度。
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest`
- 来源：`ndsu-sunflower-guide-2020`
- 数量范围：暂定宽幅 QA 筛查；以现场记录替代
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg potential seed/ha
  - 基准：一个作物周期每公顷；采收损失前的暂定潜在籽粒筛查，不是已售籽粒
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

留田茎秆和花盘为田间残体；移出者须测量出界量及去向。

##### 基本流

尚未确定具体排放物种及有依据的方法/因子前，不固定基本流交换。田间记录保留每种候选排放物、方法来源与计算输入；仅核实后增加逐物种交换。

### 过程：花盘与籽粒收获（`sunflower_harvest`）

#### 输入

##### 产品流

###### 田间成熟作物（`standing_crop_input`）

成熟花盘从种植过程转入独立采收作业。

- 选定流：内部成熟花盘状态，非出售商品。
- 流属性/单位：潜在籽粒质量 kg
- 数量规则：关联产出田块、作物年度及收获批次。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每收获批次。
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest`
- 来源：`ndsu-sunflower-guide-2020`
- 数量范围：暂定宽幅 QA 筛查；以现场记录替代
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg potential seed/ha
  - 基准：一个作物周期每公顷；采收损失前的暂定潜在籽粒筛查，不是已售籽粒
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 收获机械燃料（`harvest_fuel`）

联合收割及脱粒设备所用燃料进入收获运行。

- 选定流：实际燃料商品身份。
- 流属性/单位：体积 L
- 绑定模式：`parameterized`
- 流集合：`flow-set.energy-supply`
- 流集合版本：`0.2.0`
- 流集合分组：`mobile-machinery-fuel`
- 数量规则：按田块和批次计量收获燃料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 散籽。
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest`
- 来源：`ndsu-sunflower-guide-2020`
- 数量范围：暂定宽幅 QA 筛查；以现场记录替代
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：L/ha
  - 基准：每一收获公顷，按实际路线和机械燃料计量；仅暂定筛查
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 收获设备外购电力（`harvest_electricity`）

只有使用电驱设备时才纳入收获用电。

- 选定流：实际电力供应身份。
- 流属性/单位：能量 kWh
- 绑定模式：`parameterized`
- 流集合：`flow-set.energy-supply`
- 流集合版本：`0.2.0`
- 流集合分组：`electricity-supply`
- 数量规则：按田块和批次计量收获用电。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 散籽。
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest`
- 来源：`ndsu-sunflower-guide-2020`
- 数量范围：暂定宽幅 QA 筛查；以现场记录替代
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5000
  - 单位：kWh/ha
  - 基准：每一收获公顷，仅实际使用电动收获设备时计入；仅暂定筛查
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

通常无废物投入。

##### 基本流

不预设固定基本流投入。

#### 输出

##### 产品流

###### 脱粒后的散装整粒籽（`bulk_seed`）

收集的散籽离开收获过程，此时不声称已清洁或分级。

- 选定流：尚未宣称初清或分级的内部收获状态。
- 流属性/单位：质量 kg。
- 数量规则：按田块、批次称重，测定含水率及杂质。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每收获批次。
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest`
- 来源：`ndsu-sunflower-guide-2020`
- 数量范围：暂定宽幅 QA 筛查；以现场记录替代
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg raw seed/ha
  - 基准：每一收获公顷；首次调理前原籽粒的暂定宽幅筛查，以称重记录替代
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

未收集落粒及留田茎秆/花盘在 `cp_harvest` 中记录为田间观察和残体去向，不假定存在废物交换。残体若实际移出，应测量出界量并按实际产品或废物去向分类。

##### 基本流

不预设固定基本流产出。

### 过程：初次清洁（`sunflower_cleaning`）

#### 输入

##### 产品流

###### 进入初清机的散籽（`bulk_seed_cleaner_input`）

收集的散籽进入初级调理作业。

- 选定流：内部散装整粒籽状态。
- 流属性/单位：质量 kg
- 数量规则：按运行称量进料并测试水分、杂质。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 准备态籽。
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_clean`
- 来源：`ndsu-sunflower-guide-2020`
- 数量范围：物料守恒 QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg linked incoming seed
  - 基准：每 kg 进入相关物料转移节点的实测籽粒；应用守恒前核对实际水分和混料
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 清洁机电力（`cleaner_electricity`）

动力初清按真实运行计量电力。

- 选定流：实际电力供应身份。
- 流属性/单位：能量 kWh
- 绑定模式：`parameterized`
- 流集合：`flow-set.energy-supply`
- 流集合版本：`0.2.0`
- 流集合分组：`electricity-supply`
- 数量规则：按清洁运行计量用电。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 准备态籽。
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_clean`
- 来源：`ndsu-sunflower-guide-2020`
- 数量范围：暂定宽幅 QA 筛查；以现场记录替代
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kWh/kg processed seed
  - 基准：每 kg 进入实际清选、分选、干燥或贮存作业的籽粒；仅暂定筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 清洁机燃料（`cleaner_fuel`）

只有清洁设备真实耗用燃料时才纳入。

- 选定流：实际燃料商品身份。
- 流属性/单位：体积 L
- 绑定模式：`parameterized`
- 流集合：`flow-set.energy-supply`
- 流集合版本：`0.2.0`
- 数量规则：按清洁运行计量燃料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 准备态籽。
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_clean`
- 来源：`ndsu-sunflower-guide-2020`
- 数量范围：暂定宽幅 QA 筛查；以现场记录替代
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：L liquid fuel/kg processed seed
  - 基准：每 kg 进入实际调理或干燥作业的籽粒；仅液体燃料筛查，其他载体另行换算
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

通常无废物投入。

##### 基本流

不预设固定基本流投入。

#### 输出

##### 产品流

###### 准备态整粒籽（`clean_seed`）

准备态整粒籽从初清机转往已记录的下一用途。

- 选定流：内部初清状态，转往分级、干燥或最终交接。
- 流属性/单位：质量 kg。
- 数量规则：称量初清质量，记录水分和杂质。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每清洁运行。
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_clean`
- 来源：`ndsu-sunflower-guide-2020`
- 数量范围：物料守恒 QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg linked incoming seed
  - 基准：每 kg 进入相关物料转移节点的实测籽粒；应用守恒前核对实际水分和混料
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 筛下物与粉尘（`clean_reject`）

筛下物按记录的返工、降级或处置路线离开清洁机。

- 选定流：非规格籽/杂物按返清、降级销售或处置的实际去向分类。
- 流属性/单位：质量 kg。
- 数量规则：称量/估计剔除量，返清关联新运行。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每清洁运行。
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_clean`
- 来源：`ndsu-sunflower-guide-2020`
- 数量范围：物料守恒 QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg linked incoming seed
  - 基准：每 kg 进入相关分选或干燥节点的实测籽粒；降级、废弃或失水分别非负，合计须平衡
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

需要时单列实测排尘，不把筛下物全算作空气排放。

### 过程：市场类别分选（`sunflower_grading`）

#### 输入

##### 产品流

###### 进入分选机的整粒籽（`grade_seed_input`）

有批次身份的散籽或准备态籽进入市场类别分级。

- 选定流：内部整粒籽状态，附已知批次。
- 流属性/单位：质量 kg
- 数量规则：称量进料并保留类别及水分。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每分级运行。
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grade`
- 来源：`ndsu-sunflower-guide-2020`
- 数量范围：物料守恒 QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg linked incoming seed
  - 基准：每 kg 进入相关物料转移节点的实测籽粒；应用守恒前核对实际水分和混料
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 分选电力（`sorter_electricity`）

只在使用动力设备时纳入分选能耗。

- 选定流：实际电力供应身份。
- 流属性/单位：能量 kWh
- 绑定模式：`parameterized`
- 流集合：`flow-set.energy-supply`
- 流集合版本：`0.2.0`
- 流集合分组：`electricity-supply`
- 数量规则：按运行计量分选机用电。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 分级籽。
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grade`
- 来源：`ndsu-sunflower-guide-2020`
- 数量范围：暂定宽幅 QA 筛查；以现场记录替代
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kWh/kg processed seed
  - 基准：每 kg 进入实际清选、分选、干燥或贮存作业的籽粒；仅暂定筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

通常无废物投入。

##### 基本流

不预设固定基本流投入。

#### 输出

##### 产品流

###### 合格整粒籽（`accepted_seed`）

合格整粒籽等级在真实声明的农场内商品交接点离开。

- 选定流：在已声明农场内商品交接点的 Sunflower seed `a62436d6-249c-4ac3-b5f4-653d0f277519`。
- 流属性/单位：质量 kg。
- 绑定模式：`fixed`
- 数量规则：按油用、食用或鸟食实际等级、批次和水分称重。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格产出。
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grade`
- 来源：`ndsu-sunflower-guide-2020`
- 数量范围：物料守恒 QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg linked incoming seed
  - 基准：每 kg 进入相关物料转移节点的实测籽粒；应用守恒前核对实际水分和混料
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 降级但可销售的籽（`downgraded_seed`）

可单独销售的较低等级流向已记录去向。

- 选定流：单独整粒籽销售去向，不计入合格参考质量。
- 流属性/单位：质量 kg。
- 数量规则：分别称量各降级销售等级，记录买家/用途。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每分级运行。
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grade`
- 来源：`ndsu-sunflower-guide-2020`
- 数量范围：物料守恒 QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg linked incoming seed
  - 基准：每 kg 进入相关分选或干燥节点的实测籽粒；降级、废弃或失水分别非负，合计须平衡
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 不合格籽（`grade_reject`）

非规格籽等待有记录的返工、回收或最终废弃出界。

- 选定流：非规格批次，记录返分、降级、回收或处置路径。
- 流属性/单位：质量 kg。
- 数量规则：称量剔除物并标注去向及后续运行；只有最终处置量作为废物出界。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每分级运行。
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grade`
- 来源：`ndsu-sunflower-guide-2020`
- 数量范围：物料守恒 QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg linked incoming seed
  - 基准：每 kg 进入相关分选或干燥节点的实测籽粒；降级、废弃或失水分别非负，合计须平衡
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

不预设固定基本流产出。

### 过程：农场内稳定化（`sunflower_drying`）

#### 输入

##### 产品流

###### 干燥前可用整粒籽（`wet_seed_input`）

实测湿籽进入有边界的稳定化运行。

- 选定流：内部整粒籽，附等级和批次身份。
- 流属性/单位：质量 kg
- 数量规则：称量进料并测试湿基含水率。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 稳定化籽。
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dry`
- 来源：`ndsu-sunflower-drying-2022`
- 数量范围：物料守恒 QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg linked incoming seed
  - 基准：每 kg 进入相关物料转移节点的实测籽粒；应用守恒前核对实际水分和混料
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 干燥风机电力（`drying_fan_electricity`）

风机真实运行时，电力进入自然风或加热干燥阶段。

- 选定流：实际电力供应身份。
- 流属性/单位：能量 kWh
- 绑定模式：`parameterized`
- 流集合：`flow-set.energy-supply`
- 流集合版本：`0.2.0`
- 流集合分组：`electricity-supply`
- 数量规则：按仓或干燥机运行计量风机用电。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 稳定化籽。
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dry`
- 来源：`ndsu-sunflower-drying-2022`
- 数量范围：暂定宽幅 QA 筛查；以现场记录替代
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kWh/kg processed seed
  - 基准：每 kg 进入实际清选、分选、干燥或贮存作业的籽粒；仅暂定筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 补充加热燃料（`drying_heat_fuel`）

只在补热或高温干燥发生时纳入燃料。

- 选定流：补充干燥热用实际固定燃烧燃料产品。
- 流属性/单位：按燃料计体积 L 或质量 kg
- 绑定模式：`parameterized`
- 流集合：`flow-set.energy-supply`
- 流集合版本：`0.2.0`
- 流集合分组：`stationary-combustion-fuel`
- 数量规则：按加热运行计量燃料；零值须有未加热作业记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 稳定化籽。
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dry`
- 来源：`ndsu-sunflower-drying-2022`
- 数量范围：暂定宽幅 QA 筛查；以现场记录替代
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：L liquid fuel/kg processed seed
  - 基准：每 kg 进入实际调理或干燥作业的籽粒；仅液体燃料筛查，其他载体另行换算
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

通常无废物投入。

##### 基本流

环境空气为过程介质，此处不设固定数量。

#### 输出

##### 产品流

###### 稳定化整粒籽（`dry_seed`）

稳定化整粒籽携实测水分及已声明交接信息离开。

- 选定流：已实测出口水分、在实际农场内交接的整粒籽。
- 流属性/单位：质量 kg。
- 数量规则：称量出料、测试水分并保留类别/等级；不预设统一目标水分。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每干燥批次。
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dry`
- 来源：`ndsu-sunflower-drying-2022`
- 数量范围：物料守恒 QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg linked incoming seed
  - 基准：每 kg 进入相关物料转移节点的实测籽粒；应用守恒前核对实际水分和混料
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 损坏或剔除材料（`dry_reject`）

损坏或剔除籽沿已标识回收或处置路径离开。

- 选定流：按回收或处置实际去向分类的非规格籽，与蒸发水分分开。
- 流属性/单位：质量 kg。
- 数量规则：称量剔除籽，记录返工或处置。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每干燥批次。
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dry`
- 来源：`ndsu-sunflower-drying-2022`
- 数量范围：物料守恒 QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg linked incoming seed
  - 基准：每 kg 进入相关分选或干燥节点的实测籽粒；降级、废弃或失水分别非负，合计须平衡
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 脱除水分（`drying_water`）

干燥脱水与剔除籽分开核算。

- 选定流：仅在适用清单体系要求时记作排向空气的水蒸气。
- 流属性/单位：质量 kg。
- 数量规则：结合进出湿质量、水分及剔除物干固体计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每干燥批次。
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_dry`
- 来源：`ndsu-sunflower-drying-2022`
- 数量范围：物料守恒 QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg linked incoming seed
  - 基准：每 kg 进入相关分选或干燥节点的实测籽粒；降级、废弃或失水分别非负，合计须平衡
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `a_field` | 田间与收获 | 残体留田时，共同田间/收获负担归于收集籽。茎秆/花盘若移出并出售，须测量质量并披露分配依据，不能自动给零负担。 | ndsu-sunflower-guide-2020 |
| `a_grade` | 清洁和分级 | 核对合格、降级、返工及废弃质量；可单独计量的作业直接归入对应运行；多种销售产出共享负担时披露一致的实测驱动因子。 | ndsu-sunflower-guide-2020 |
| `a_rework` | 剔除物回流 | 返清/返分关联原运行和后续运行，新增作业只计一次，成功恢复后才列合格。 | ndsu-sunflower-guide-2020 |
| `a_mode` | 田块、批次与连续运行 | 按实录时间、通量或其他因果驱动因子分摊共享机械、清洁和切换；顺序运行不重复计负担。 | ndsu-sunflower-guide-2020 |

## 8. 前景数据采集、计算与质量规则

流卡中的数量范围是归一化前的复核触发条件，不是清单默认值或通用合格限值。数量必须采用实际田块、批次和作业记录；超出暂定筛查范围时，应核查路线、地区、单位及计量质量。地区播种量仅为示例。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field` | `sunflower_cultivation` | 投入和灌溉 | 田间、发票、施用及仪表日志 | field_id, area, year, seed_kg, product_kg, nutrient_kg, water_m3, fuel_L, kWh, emission_species, emission_method, factor_source, date | 核对施用、发票及仪表 | ha, kg, m3, L, kWh | 每事件 | 完整作物年度 | 每田块 | 按田块汇总并关联收获批次 | 凭证、仪表与换算因子 |
| `cp_harvest` | `sunflower_harvest` | 收集与损失 | 收割机、地磅和田间笔记 | field_id, lot_id, date, bulk_kg, moisture_pct, foreign_matter_pct, loss, residue_fate, fuel_L | 称重并测定状态 | kg, %, L | 每批 | 收获期 | 田块/机器运行 | 汇总不同批次并关联下游 | 地磅票、水分测试、观察 |
| `cp_clean` | `sunflower_cleaning` | 清洁籽和筛下物 | 清洁机日志 | lot_id, run_id, inlet_kg, outlet_kg, reject_kg, moisture_pct, kWh, reject_fate | 称重进出、计量能源 | kg, %, kWh | 每运行 | 边界内所有运行 | 农场清洁机 | 核对质量及返工 | 称重、仪表日志 |
| `cp_grade` | `sunflower_grading` | 等级/去向 | 分选和销售记录 | lot_id, run_id, class, grade, accepted_kg, downgraded_kg, reject_kg, destination, return_link | 各状态和去向称重 | kg | 每运行 | 边界内所有运行 | 农场分选线 | 平衡各状态，不重复计返工 | 等级单、销售和剔除票 |
| `cp_dry` | `sunflower_drying` | 稳定化及脱水 | 仓/干燥机和仪表日志 | lot_id, run_id, method, inlet_kg, inlet_moisture, outlet_kg, outlet_moisture, reject_kg, fan_kWh, fuel_L, days | 前后称重测水，计量能源 | kg, %, kWh, L, day | 每运行 | 交接前农场内处理 | 农场仓/干燥机 | 核对干固体，顺序阶段各计一次 | 称重、水分和仪表日志 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `c_norm` | 所有清单 | 按真实交接时合格籽 kg 将各田块/批次/运行唯一数量归一化。 | 原始数量、合格 kg、追溯关系 | 每 kg 参考籽的数量 | ndsu-sunflower-guide-2020 |
| `c_dry` | 干燥 | 干固体＝湿质量×（1－湿基水分）；估算脱水前比较进料、出料及剔除物干固体。 | 进出/剔除物质量和水分 | 干固体偏差及脱水量 | ndsu-sunflower-drying-2022 |
| `c_field_emissions` | 田间排放 | 仅在排放物种、方法和因子来源经田间记录核实时建立逐物种计算交换；否则将该交换标为未解决。 | 田间记录、物种、方法、因子来源 | 逐物种计算交换或未解决项 | ndsu-sunflower-guide-2020 |
| `c_sort` | 清洁与分级 | 进料质量＝合格＋降级＋剔除＋实测损失；水分变化单列。 | 称重和水分记录 | 运行质量偏差 | ndsu-sunflower-guide-2020 |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `q_identity` | 参考产出 | 核实整粒商品籽、类别、等级、农场内交接及水分；播种用种不得使用固定 UUID。 | 批次及交接记录 |
| `q_time` | 数据包 | 覆盖完整作物周期及相关田块和处理运行，披露缺口。 | 日期明确的田间/设备日志 |
| `q_mass` | 籽粒各状态 | 连同水分和剔除物核对收获、清洁、分级、干燥质量，标出未解释偏差。 | 称重校准和核对表 |
| `q_route` | 灌溉和干燥 | 保留真实用水/干燥路线、能源计量、顺序运行关联及剔除去向。 | 仪表和设备日志 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `v_identity` | 参考产出 | 缺失类别、水分、等级或真实交接点即不通过；播种用种不能绑定 `a62436d6-249c-4ac3-b5f4-653d0f277519`。 | ndsu-sunflower-guide-2020 |
| `v_boundary` | 清单 | 核查种植、收获和真实发生的农场内清洁、分级、干燥及贮藏；不能从平台标签推定农场门等级。 | ndsu-sunflower-guide-2020; ndsu-sunflower-drying-2022 |
| `v_route` | 替代路线 | 灌溉田须有水/抽水记录；干燥须有风机/燃料计量；顺序技术须关联。 | ndsu-sunflower-guide-2020; ndsu-sunflower-drying-2022 |
| `v_balance` | 批次和剔除物 | 连同水分核对合格、降级、剔除、回流及损失；剔除物仅经有记录的恢复运行后才成为合格品。 | ndsu-sunflower-guide-2020 |
| `v_emissions` | 田间基本流 | 不接受匿名田间排放行或未经核实的通用因子；每项计算交换须写明物种、方法及因子来源。 | ndsu-sunflower-guide-2020 |
| `v_once` | 共享运行 | 核查田块/时段分摊、清洁切换及返工关联，防止重复计算。 | ndsu-sunflower-guide-2020 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 在已标识农场内交接点的整粒向日葵籽前景生产数据集 |
| downstream_use | 农业整粒籽投入的 `secondary_dataset` 或 `background_dataset` |
| allowed_use | 类别、等级、水分匹配时用于榨油、食用或鸟食籽投入 |
| excluded_use | 播种用种生产、葵油、葵仁、葵粕、炒制食品或未记录的农场门等级 |
| required_metadata | 农场/地区、作物年度、类别、田块/批次、已知品种、交接、水分、等级、调理/干燥范围及灌溉路线 |
| required_quality_disclosure | 记录覆盖、称重/水分证据、上游数据集、缺失排放估计、质量偏差和分配选择 |
| update_trigger | 市场类别、交接点、用水/干燥技术、投入组合、等级标准或区域重大变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | official_guidance | 联合国统计司，CPC 3.0 说明 (2025)，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 分类范围 |
| `ndsu-sunflower-guide-2020` | extension_guidance | 北达科他州立大学推广部，Sunflower Production Guide A1995，https://www.ndsu.edu/agriculture/sites/default/files/2023-12/a1995.pdf | 市场类别、田间、收获、分级和调理 |
| `ndsu-sunflower-drying-2022` | extension_guidance | 北达科他州立大学推广部，NDSU offers advice on harvesting and drying sunflower in North Dakota (2022)，https://www.ag.ndsu.edu/news/newsreleases/2022/september/ndsu-offers-advice-on-harvesting-and-drying-sunflower-in-north-dakota/ | 条件性干燥及水分依据 |
