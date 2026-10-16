---
pcr_id: pcr.wild-live-eviscerated-scuba-harvested-red-sea-cucumber
status: candidate
language: zh-CN
sync_with: pcr.en-US.md
---

# 野生水肺采捕活体去内脏红海参

## 1. 范围及适用性

本类别覆盖阿拉斯加野生 Apostichopus californicus（历史名称 Parastichopus californicus），由船舶支持水肺潜水员手工网袋采集，船上实际刺孔去内脏并沥水，首个岸上加工者实物接收时仍为生鲜活体。ADFG 描述该路线；具体批次合格性及数量须由实际记录证明。历史报告仅支持过程顺序，不作为现行效率、法规、活体保证或暂存限值。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.wild-live-eviscerated-scuba-harvested-red-sea-cucumber |
| classification_refs | cpc:3.0:04511 (narrower) |
| covered_products | 首个岸上加工者实物接收的阿拉斯加野生 A. californicus 活体去内脏沥水生鲜未冻结参 |
| excluded_products | 整参最终参考；其他物种；养殖；水面供气或非水肺采捕；观赏用途；死亡冻结盐渍熟制干制产品；分离皮肌肉产品 |
| representative_product | 船上去内脏沥水后活体交付的野生红海参 |
| production_route | 水肺手采 → 船上初级整理 → 实际分选 → 有证据保存或旁路 → 周转箱呈交 → 全部物流 → 岸上首次实物接收 |
| market_state | 活体去内脏沥水生鲜未冻结；原有皮肌肉仍未分离 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 首个岸上加工者实物接收合格参体 |
| How much | 1 千克 |
| How well | 实测活体去内脏生鲜沥水未冻结，排除内脏游离水箱及拒收品 |
| How long or cycle | 明确行程季及共享资产服务期内一批可追溯验收批次，包括关联失败行程及期初期末存货 |
| reference_flow_link | `received_live_eviscerated` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 首个岸上加工者实物接收的生鲜活体去内脏沥水红海参 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 物种; 野生来源; 阿拉斯加地点; 船舶支持水肺; 批次行程季; 实际船上去内脏; 沥水称量皮重方法; 实物接收时实测活体; 生鲜未冻结; 皮肌肉未分离; 接收者时间地点; 保存干预或有证据旁路; 报告及资产期间 |

必需限定符须出现在前景数据包元数据或等效可追溯记录中。A 定义为归属批次输出池在实际参考节点验收的正值净沥水去内脏参体质量。仅同批参考满足 A/A=1；内部整参及整理参转移分别实测。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | A 在岸上实物接收时用校准秤称量，记录皮重及可复现实际沥水方法，排除去除内脏游离水箱及拒收非参考输出；另评估活体状态。不得按默认得率换算整参投入。 |
| native_units | all inventory rows | Actual instance property | native unit | 保留各源单位（kg、kWh、h、tkm 或件次）；记录实际密度或数量质量换算及不确定性。不得以参体质量取代能源服务分子。每行数量范围均为每 1 kg 参考流并使用所属节点协议。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在已记录阿拉斯加采捕地点、水肺移出前的野生海洋 A. californicus；包括行程准备及归属上游供应 |
| starting_condition_role | 非管理自然生物资源，而非购入苗种或养殖生长投入 |
| product_classification_scope | cpc:3.0:04511 内更窄的野生活体海参状态，不声称覆盖整个叶类 |
| recursive_input_rule | 实际购入同类参投入按物种来源状态及已核实上游数据另记；不递归构建野生生长或隐藏重复 |
| upstream_dataset_requirement | 实际燃料空气供应水能源材料资产及完整服务须具声明边界的已核实清单；排除重复组件 |
| disclosure | 地点物种野生来源；实测路线；批次行程季及资产期间；实际接收节点；条件状态；全部存货损失去向分配及缺口 |

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| scope_gate | product_system | 纳入阿拉斯加野生 A. californicus 船舶支持水肺手采、船上去内脏沥水、实际分选、有实际干预的保存、周转箱呈交及至首个岸上加工者实物接收的全部物流。采捕移出整参；整理形成参考状态。发票或船舶所有权不终止边界。 | adfg-dive-sea-cucumber; adfg-walker-dive-fisheries-2006 |
| physical_transfer | all_nodes | T_CC 整参及 T_CM 附带物质配对采捕与整理；T_CS 整理参及 T_SM 剩余附带物配对整理与分选；T_SH 配对分选与实际保存，再以 T_HP 交呈交；有未实施证据的 T_SP 直接配对分选与呈交；T_PD 配对呈交与交付。每个编号仅有一个实物量、状态和时间及配对输出输入。保留批次期初期末存货与损耗核对；未知分支为缺口而非旁路。 |  |
| period_assets | all_nodes | 在明确报告季内按行程及批次组织；列明正常、失败及无验收产出行程、维护清理、期初期末参体存货、周转箱循环、船舶潜水压缩机保存设备，以及更换和报废期间。每项事件及资产关联所有消费节点和服务期；声称未干预须有记录。不规定资产寿命。 |  |
| fate_boundary | all_nodes | 各节点分别追踪实际预期参体等级及有用副产品。弃置内脏体液、死亡、附带物及清理需实际去向：交处理废物或已识别直接环境返回或释放。载体水与污染物分开，购入水与取水分开。不产生替代负荷、恢复或天然摄食信用。 |  |
| outside_gate | downstream | 排除首次实物接收后的岸厂暂存、肌肉皮分离、烹煮、干燥、冻结及后续分销使用。野生资源生长不虚构养殖饲料苗种负荷；实际购入同类参投入须另有经核实上游数据集，不得伪装为本野采参考。 | adfg-dive-sea-cucumber |

## 6. 过程清单结构

### 过程图

| process_id | Process name | Inclusion | Inclusion condition | Role | Quantitative reference |
| --- | --- | --- | --- | --- | --- |
| capture | 船舶支持的水肺手工采捕 | required | 每批纳入批次 | 野生海床至采集整参；独立于后续整理 | 每 1 kg 参考流 |
| condition | 船上初级去内脏及沥水 | required | 每批均有实际刺孔去内脏及沥水记录 | 采集整参至生鲜活体去内脏沥水参 | 每 1 kg 参考流 |
| sort | 按实际去向分选 | required | 每批纳入批次 | 整理批次至合格品、其他去向及弃物 | 每 1 kg 参考流 |
| hold | 有界保活保存干预 | conditional | 仅在实物接收前实际发生并记录冷却、曝气或管理暂存时纳入；有未实施证据才登记旁路 | 分选可用品至干预后可用品 | 每 1 kg 参考流 |
| present | 可复用周转箱呈交 | required | 每批均为选定接收者完成呈交 | 合格散装参至标识周转箱批次；运输另列节点 | 每 1 kg 参考流 |
| deliver | 接收前全部物流及岸上实物接收 | required | 至首个岸上加工者实物接收的所有实际移动 | 已呈交批次至实物接收合格批次 | 每 1 kg 参考流 |

生产模式为行程批次采捕，并设报告季及资产服务池。日志将每次转移清理换批失败及存货事件关联节点期间。仅运输经过时间不强插暂存。以下条件集合按实际展开为零、一或多个交换，每个具有自身身份单位数量去向及 U 边界；实际活动未知不得置零。

### 过程： 船舶支持的水肺手工采捕 (`capture`)

#### 输入

##### 产品流

###### 供应的水肺压缩呼吸空气 (`scuba_air`)

购入瓶装空气为产品供应；自充气登记实测电力或燃料，不重复购入空气生产负荷。不预设水面供气或加氧。

- 选定流: 供应的水肺压缩呼吸空气
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 实际供应呼吸空气质量 / A；实际充气用电归入 collect_capture_supplies
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_capture`
- 数量范围：证据缺口区间；U_scuba_air 须逐实例实测确定，非经验范围、非通用上限、不可代替采集
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：U_scuba_air
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 基本流

###### 从海洋野生资源移出的红海参 (`wild_removal`)

按整只活体质量一次登记自然资源移出；不作为购入养殖参，也不产生生态信用。

- 选定流: 从海洋野生资源移出的红海参
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 实际从海洋资源移出的整参质量 / A
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_capture`
- 来源: `adfg-dive-sea-cucumber`
- 数量范围：证据缺口区间；U_wild_removal 须逐实例实测确定，非经验范围、非通用上限、不可代替采集
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：U_wild_removal
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

#### 输出

##### 产品流

###### 船上整理交接的生鲜活体整只红海参 (`whole_catch`)

转移 T_CC：去内脏前整参；保留实测活体状态、时间、批次及表面水沥除称重方法。与 condition_whole 配对同量。

- 选定流: 船上整理交接的生鲜活体整只红海参
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: T_CC 实测整参质量 / A
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_capture`
- 来源: `adfg-walker-dive-fisheries-2006`
- 数量范围：证据缺口区间；U_whole_catch 须逐实例实测确定，非经验范围、非通用上限、不可代替采集
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：U_whole_catch
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

##### 基本流

### 过程： 船上初级去内脏及沥水 (`condition`)

#### 输入

##### 产品流

###### 去内脏节点接收的生鲜活体整只红海参 (`condition_whole`)

按 whole_catch 同一整参质量、状态及时间台账接收 T_CC。不得将整参投入等同最终去内脏沥水参质量。

- 选定流: 去内脏节点接收的生鲜活体整只红海参
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: T_CC 实测整参质量 / A
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_condition`
- 来源: `adfg-walker-dive-fisheries-2006`
- 数量范围：证据缺口区间；U_condition_whole 须逐实例实测确定，非经验范围、非通用上限、不可代替采集
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：U_condition_whole
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

##### 基本流

###### 实际船上整理及清理直接海水取用 (`condition_seawater_abstraction`)

仅实际直接从海洋环境取用时，记录来源地点、取水体积时间、仪表或经验证流量时间法，以及任何质量换算所需密度温度盐度和去向平衡。区别于供应产品水及附带夹带水。核对返回载体水、存留蒸发水、收集交处理废液及另识别污染物，避免水或污染物质量重复。取水未知为缺口；未取水须有证据，不作假设。

- 选定流: 实际船上整理及清理直接海水取用
- 流属性/单位: Volume / m3
- 数量规则: 实际直接取用海水实测体积 / A
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_condition`
- 数量范围：证据缺口区间；U_condition_seawater_abstraction 须逐实例实测确定，非经验范围、非通用上限、不可代替采集
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：U_condition_seawater_abstraction
  - 单位：m3
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

#### 输出

##### 产品流

###### 交分选的生鲜活体去内脏沥水红海参 (`conditioned_catch`)

转移 T_CS 位于实际刺孔去内脏及沥水后、肌肉和皮分离前。与 sort_intake 按同一参体质量及实测状态配对。

- 选定流: 交分选的生鲜活体去内脏沥水红海参
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: T_CS 实测去内脏沥水参体质量 / A
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_condition`
- 来源: `adfg-walker-dive-fisheries-2006`
- 数量范围：证据缺口区间；U_conditioned_catch 须逐实例实测确定，非经验范围、非通用上限、不可代替采集
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：U_conditioned_catch
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

##### 基本流

###### 直接返回的载体海水 (`condition_water_return`)

另记实际返回载体海水质量及海洋受纳地点，排除内脏、参体和污染物质。不虚构未收集或添加的水输入。

- 选定流: 直接返回的载体海水
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 实际直接返回载体水质量 / A
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_condition`
- 数量范围：证据缺口区间；U_condition_water_return 须逐实例实测确定，非经验范围、非通用上限、不可代替采集
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：U_condition_water_return
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

### 过程： 按实际去向分选 (`sort`)

#### 输入

##### 产品流

###### 分选接收的生鲜活体去内脏沥水红海参 (`sort_intake`)

按同一整理参体状态与质量接收 T_CS；继续沥水及活体状态变化在此记录。

- 选定流: 分选接收的生鲜活体去内脏沥水红海参
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: T_CS 实测去内脏沥水参体质量 / A
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_sort`
- 数量范围：证据缺口区间；U_sort_intake 须逐实例实测确定，非经验范围、非通用上限、不可代替采集
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：U_sort_intake
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

##### 基本流

###### 实际分选及清理直接海水取用 (`sort_seawater_abstraction`)

仅实际直接从海洋环境取用时，记录来源地点、取水体积时间、仪表或经验证流量时间法，以及任何质量换算所需密度温度盐度和去向平衡。区别于供应产品水及附带夹带水。核对返回载体水、存留蒸发水、收集交处理废液及另识别污染物，避免水或污染物质量重复。取水未知为缺口；未取水须有证据，不作假设。

- 选定流: 实际分选及清理直接海水取用
- 流属性/单位: Volume / m3
- 数量规则: 实际直接取用海水实测体积 / A
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_sort`
- 数量范围：证据缺口区间；U_sort_seawater_abstraction 须逐实例实测确定，非经验范围、非通用上限、不可代替采集
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：U_sort_seawater_abstraction
  - 单位：m3
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

#### 输出

##### 产品流

###### 交保存的合格活体去内脏沥水参 (`sorted_to_hold`)

仅在 hold 实际实施时转移 T_SH，与 hold_intake 配对；报告实际质量判据及活体评估。

- 选定流: 交保存的合格活体去内脏沥水参
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: T_SH 实测合格参体质量 / A
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_sort`
- 数量范围：证据缺口区间；U_sorted_to_hold 须逐实例实测确定，非经验范围、非通用上限、不可代替采集
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：U_sorted_to_hold
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 旁路保存的合格活体去内脏沥水参 (`sorted_bypass`)

仅有未发生有界保存的证据才用 T_SP，与 present_bypass 配对；保存状态未知不得选此输出。

- 选定流: 旁路保存的合格活体去内脏沥水参
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: T_SP 实测旁路参体质量 / A
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_sort`
- 数量范围：证据缺口区间；U_sorted_bypass 须逐实例实测确定，非经验范围、非通用上限、不可代替采集
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：U_sorted_bypass
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

##### 基本流

### 过程： 有界保活保存干预 (`hold`)

#### 输入

##### 产品流

###### 进入保存的合格活体去内脏沥水参 (`hold_intake`)

仅有实际干预记录才接收 T_SH；保留来源批次、干预前活体状态及时间。

- 选定流: 进入保存的合格活体去内脏沥水参
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: T_SH 实测合格参体质量 / A
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_hold`
- 数量范围：证据缺口区间；U_hold_intake 须逐实例实测确定，非经验范围、非通用上限、不可代替采集
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：U_hold_intake
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 基本流

###### 实际有界保存直接海水取用 (`hold_seawater_abstraction`)

仅实际直接从海洋环境取用时，记录来源地点、取水体积时间、仪表或经验证流量时间法，以及任何质量换算所需密度温度盐度和去向平衡。区别于供应产品水及附带夹带水。核对返回载体水、存留蒸发水、收集交处理废液及另识别污染物，避免水或污染物质量重复。取水未知为缺口；未取水须有证据，不作假设。

- 选定流: 实际有界保存直接海水取用
- 流属性/单位: Volume / m3
- 数量规则: 实际直接取用海水实测体积 / A
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_hold`
- 数量范围：证据缺口区间；U_hold_seawater_abstraction 须逐实例实测确定，非经验范围、非通用上限、不可代替采集
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：U_hold_seawater_abstraction
  - 单位：m3
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

#### 输出

##### 产品流

###### 干预后交呈交的活体去内脏沥水参 (`held_to_present`)

转移 T_HP，与 present_held 按干预后相同实测活体去内脏状态及净沥水参体质量配对。

- 选定流: 干预后交呈交的活体去内脏沥水参
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: T_HP 实测干预后参体质量 / A
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_hold`
- 数量范围：证据缺口区间；U_held_to_present 须逐实例实测确定，非经验范围、非通用上限、不可代替采集
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：U_held_to_present
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

##### 基本流

### 过程： 可复用周转箱呈交 (`present`)

#### 输入

##### 产品流

###### 呈交接收的干预后活体去内脏沥水参 (`present_held`)

按 held_to_present 接收配对 T_HP；同批不得又接收 T_SP。

- 选定流: 呈交接收的干预后活体去内脏沥水参
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: T_HP 实测干预后参体质量 / A
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_present`
- 数量范围：证据缺口区间；U_present_held 须逐实例实测确定，非经验范围、非通用上限、不可代替采集
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：U_present_held
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 呈交接收的未暂存活体去内脏沥水参 (`present_bypass`)

仅有未发生有界保存的证据时按 sorted_bypass 接收配对 T_SP。

- 选定流: 呈交接收的未暂存活体去内脏沥水参
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: T_SP 实测旁路参体质量 / A
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_present`
- 数量范围：证据缺口区间；U_present_bypass 须逐实例实测确定，非经验范围、非通用上限、不可代替采集
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：U_present_bypass
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 基本流

###### 实际周转箱准备及清洗直接海水取用 (`present_seawater_abstraction`)

仅实际直接从海洋环境取用时，记录来源地点、取水体积时间、仪表或经验证流量时间法，以及任何质量换算所需密度温度盐度和去向平衡。区别于供应产品水及附带夹带水。核对返回载体水、存留蒸发水、收集交处理废液及另识别污染物，避免水或污染物质量重复。取水未知为缺口；未取水须有证据，不作假设。

- 选定流: 实际周转箱准备及清洗直接海水取用
- 流属性/单位: Volume / m3
- 数量规则: 实际直接取用海水实测体积 / A
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_present`
- 数量范围：证据缺口区间；U_present_seawater_abstraction 须逐实例实测确定，非经验范围、非通用上限、不可代替采集
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：U_present_seawater_abstraction
  - 单位：m3
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

#### 输出

##### 产品流

###### 周转箱呈交的活体去内脏沥水红海参批次 (`presented_lot`)

转移 T_PD 至 deliver_intake，净参体质量、箱号、活体去内脏生鲜未冻结状态及时间保持一致；箱质量另列。

- 选定流: 周转箱呈交的活体去内脏沥水红海参批次
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: T_PD 实测净沥水参体质量 / A
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_present`
- 来源: `adfg-walker-dive-fisheries-2006`
- 数量范围：证据缺口区间；U_presented_lot 须逐实例实测确定，非经验范围、非通用上限、不可代替采集
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：U_presented_lot
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

##### 基本流

### 过程： 接收前全部物流及岸上实物接收 (`deliver`)

#### 输入

##### 产品流

###### 交付投入的周转箱呈交活体去内脏沥水红海参 (`deliver_intake`)

按同一净参体质量及状态接收 T_PD；产权或发票变化不代表首次实物接收已发生。

- 选定流: 交付投入的周转箱呈交活体去内脏沥水红海参
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: T_PD 实测净沥水参体质量 / A
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_deliver`
- 数量范围：证据缺口区间；U_deliver_intake 须逐实例实测确定，非经验范围、非通用上限、不可代替采集
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：U_deliver_intake
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

#### 输出

##### 产品流

###### 首个岸上加工者实物接收的生鲜活体去内脏沥水红海参 (`received_live_eviscerated`)

实际参考输出：实物接收时验收净沥水参体质量 A，实测为活体、去内脏、生鲜且未冻结，位于皮及肌肉分离前。排除内脏、游离水、周转箱和全部拒收或其他去向参体。

以同一实测验收质量计算：采用 `cp_deliver`，每 1 kg 参考流的 A/A = 1 千克；归一数量并非原始称重记录。

- 选定流: 首个岸上加工者实物接收的生鲜活体去内脏沥水红海参
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 1 千克
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_deliver`
- 来源: `adfg-dive-sea-cucumber`; `mass-balance-identity`
- 数量范围：同批参考恒等式 A/A=1
  - 范围角色：`qa_guardrail`
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`method_formula`
  - 来源：`mass-balance-identity`

##### 废物流

##### 基本流

## 7. 分配及副产品处理

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| subdivision | intended_outputs | 优先细分直接测得的节点、运输段及批次负荷。无法细分的采捕整理共享负荷在参体等级间按实测同状态参体质量分配；没有实测物料平衡不得直接比较整参投入与去内脏产出。有用内脏或其他异质产品须有明确且论证的因果规则；无因果依据时按实际交接同期净收入份额分配，并在有物理意义时对质量分配作敏感性分析。不预设输出有价值。 |  |
| period_attribution | reporting_season | 实际失败行程批次、死亡、交付失败、闲置、存货及清理均保留在报告季或服务池。直接事件归属各批；不可避免的共同行程季负荷分配给有证据预期输出，期末存货结转负荷。不得以零产出期间作零除或删去；关联支持的服务期并作敏感性分析。按状态核对期初加新增减输出损失等于期末。 |  |
| shared_service | assets_and_services | 列出船舶甲板网袋水肺气瓶压缩机保存设备秤及周转箱的全部消费节点和期间。运行负荷按实测使用、载荷或因果服务分配；隐含、更换及报废负荷按有证据总服务通量分配，明确剩余寿命假设及敏感性。资产或事件唯一责任方核对份额总计 100%；完整购入服务排除已含燃料电力资产及排放。周转箱返回不重复制造负荷。 |  |
| no_credit | waste_and_returns | 废物处理及实际排放归属产生批次服务；复用返回为服务循环。本 PCR 不对活体返回、回收内脏、弃置有机物或海水赋替代信用。分开报告分配方法、分母及反事实敏感性与实测交换量。 |  |

## 8. 前景数据采集、计算及质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_capture | capture | 船舶支持的水肺手工采捕 | 节点批次期间原始台账 | 水肺气瓶充气编号；购入充气空气或自压缩边界；压缩机仪表燃料及充气区间；潜次及失败潜次；T_CC 整只活参称重；T_CM 附带物；船舶行程段; 行实例；批次行程季；资产服务期；期初期末存货；归属份额；U 观测 | 对照购入呼吸空气票据气瓶充气与自营压缩机能源，排除重复空气生产负荷；在整理前分别称量 T_CC 整参与 T_CM；记录全部成功失败水肺潜次及船舶活动。 采用校准节点测量及原生单位仪表供应商记录；保留各化学物质身份碳来源受纳介质因子出处及不确定性；核对配对转移，不重复数量负荷。 | kg; m3; kWh; h; tkm; item; item-use | 每批事件转移；每运行区间读取仪表 | 完整报告行程季及相关资产寿命；期初至期末含失败期间 | 船舶支持的水肺手工采捕 | 每 1 kg 参考流 | 校准皮重沥水日志；交接签认；实际接收活体检查；票据仪表；存货资产台账；因子出处不确定性；差异闭合 |
| cp_condition | condition | 船上初级去内脏及沥水 | 节点批次期间原始台账 | T_CC 整参投入；实际去内脏起止方法；沥水前后质量；T_CS 整理参；去除内脏体液游离水测量；T_SM 附带物剩余；直接取水体积密度；各交处理及直接释放去向; 行实例；批次行程季；资产服务期；期初期末存货；归属份额；U 观测 | 观察实际去内脏并同事件测整参投入、去内脏产出、内脏体液及游离水；保留沥水步骤时间，不用默认得率；按去向闭合水参体附带物平衡。 采用校准节点测量及原生单位仪表供应商记录；保留各化学物质身份碳来源受纳介质因子出处及不确定性；核对配对转移，不重复数量负荷。 | kg; m3; kWh; h; tkm; item; item-use | 每批事件转移；每运行区间读取仪表 | 完整报告行程季及相关资产寿命；期初至期末含失败期间 | 船上初级去内脏及沥水 | 每 1 kg 参考流 | 校准皮重沥水日志；交接签认；实际接收活体检查；票据仪表；存货资产台账；因子出处不确定性；差异闭合 |
| cp_sort | sort | 按实际去向分选 | 节点批次期间原始台账 | T_CS 及 T_SM 接收；实际等级活体判据；各等级其他输出量及接收者；保存实际实施证据及 T_SH，或未实施证据及 T_SP；剩余附带物去向；实际取水体积密度; 行实例；批次行程季；资产服务期；期初期末存货；归属份额；U 观测 | 观察称量各声明等级及去向，关联实际接收者存货；在分配 T_SH/T_SP 前记录实际保存或未干预证据；将附带生物底质水与参体等级分开。 采用校准节点测量及原生单位仪表供应商记录；保留各化学物质身份碳来源受纳介质因子出处及不确定性；核对配对转移，不重复数量负荷。 | kg; m3; kWh; h; tkm; item; item-use | 每批事件转移；每运行区间读取仪表 | 完整报告行程季及相关资产寿命；期初至期末含失败期间 | 按实际去向分选 | 每 1 kg 参考流 | 校准皮重沥水日志；交接签认；实际接收活体检查；票据仪表；存货资产台账；因子出处不确定性；差异闭合 |
| cp_hold | hold | 有界保活保存干预 | 节点批次期间原始台账 | 实际干预目的类型地点；T_SH 接收时间活体状态；干预起止及仪表区间；实际冷却曝气水材料投入；T_HP 退出活体状态沥水质量；死亡其他去向期末存货；实际取水体积密度; 行实例；批次行程季；资产服务期；期初期末存货；归属份额；U 观测 | 记录干预目的及确切起止、实际服务及前后活体状态；将 T_SH 与 T_HP、其他存货输出死亡及水核对，含失败批次。仅运输经过时间不作暂存事件。 采用校准节点测量及原生单位仪表供应商记录；保留各化学物质身份碳来源受纳介质因子出处及不确定性；核对配对转移，不重复数量负荷。 | kg; m3; kWh; h; tkm; item; item-use | 每批事件转移；每运行区间读取仪表 | 完整报告行程季及相关资产寿命；期初至期末含失败期间 | 有界保活保存干预 | 每 1 kg 参考流 | 校准皮重沥水日志；交接签认；实际接收活体检查；票据仪表；存货资产台账；因子出处不确定性；差异闭合 |
| cp_present | present | 可复用周转箱呈交 | 节点批次期间原始台账 | T_HP 或 T_SP 接收及分支证据；箱号材料皮重；寿命使用通量及返回破损更换日志；实际清洗水化学品能源及处理去向；T_PD 参体净质量；实际取水体积密度; 行实例；批次行程季；资产服务期；期初期末存货；归属份额；U 观测 | 按独立箱号使用返回清洗记录分配有证据寿命服务；参体称量排除皮重游离水；核对 T_PD 及其他批次箱去向。 采用校准节点测量及原生单位仪表供应商记录；保留各化学物质身份碳来源受纳介质因子出处及不确定性；核对配对转移，不重复数量负荷。 | kg; m3; kWh; h; tkm; item; item-use | 每批事件转移；每运行区间读取仪表 | 完整报告行程季及相关资产寿命；期初至期末含失败期间 | 可复用周转箱呈交 | 每 1 kg 参考流 | 校准皮重沥水日志；交接签认；实际接收活体检查；票据仪表；存货资产台账；因子出处不确定性；差异闭合 |
| cp_deliver | deliver | 接收前全部物流及岸上实物接收 | 节点批次期间原始台账 | T_PD 接收；首次岸上实物接收前每段海路陆路收集船中转卸载、载荷距离空载段及服务边界；接收者时间地点签认；接收时校准秤箱皮重及可复现实际沥水；实测活体去内脏生鲜未冻结状态；正值验收净参体质量 A；拒收其他去向期末存货；箱返回; 行实例；批次行程季；资产服务期；期初期末存货；归属份额；U 观测 | 采集实际首个岸上加工者实物接收签认、路线及活体观测；按已记录实际沥水方法扣箱皮重称正值 A，分开拒收其他去向批次。纳入所有此前实物物流，不论票据付款者，并核实完整服务组件排除。 采用校准节点测量及原生单位仪表供应商记录；保留各化学物质身份碳来源受纳介质因子出处及不确定性；核对配对转移，不重复数量负荷。 | kg; m3; kWh; h; tkm; item; item-use | 每批事件转移；每运行区间读取仪表 | 完整报告行程季及相关资产寿命；期初至期末含失败期间 | 接收前全部物流及岸上实物接收 | 每 1 kg 参考流 | 校准皮重沥水日志；交接签认；实际接收活体检查；票据仪表；存货资产台账；因子出处不确定性；差异闭合 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalise_lot | all inventory rows | 每行实例的归属实测原生单位量除以 cp_deliver 的正值 A；最终验收参体质量除以自身为 1。保留原生分子单位及独立内部转移量。 | attributable quantity; A; cp_deliver | 每 1 kg 参考流的数量 | mass-balance-identity |
| balance_and_attribution | all inventory rows | 核对参体整参去内脏状态，并另核对全部水附带物及去除内脏；期初存货加接收等于预期输出加废物直接返回释放加期末存货，仅允许已记录测量不确定性。在除以 A 前按已声明因果服务或有证据输出份额分配期间及资产。 | node ledgers; stock; transfers; service shares | 闭合平衡及归属数量 | mass-balance-identity |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| traceable_state | all_nodes | 区分整参去内脏、生鲜冻结、活体死亡及实际交接状态；披露全部来源方法限制。 | 各节点批次台账及观测 |
| complete_period | all_nodes | 纳入失败批次存货返回及全部服务资产期间；重要性排除须量化论证及敏感性。 | 闭合报告池及资产事件归属 |
| uncertainty | all_rows | 以逐实例观测边界及不确定性替换符号 U；不提供通用得率暂存时间及释放因子。实际数量活动去向未知仍为不完整。 | 重复原始测量、因子出处及声明缺口 |
| `collect_capture_fuels` | `capture`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际船舶及压缩机燃料. 条件集合：按实测燃料品种、等级及供应边界实例化；不预设燃料。包括归属本节点的搜寻、失败潜次、航行及充气，排除完整服务已含燃料。 <br> - 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则: 每种燃料归属消耗质量 / A <br> - 数值来源模式: `foreground_record` <br> - 适用范围: `site_specific` <br> - 归一化基准: 每 1 kg 参考流 <br> - 基准类型: `reference_flow` <br> - 证据类型: `collected_record` <br> - 采集协议: `cp_capture` <br> - 数量范围：证据缺口区间；U_capture_fuels 须逐实例实测确定，非经验范围、非通用上限、不可代替采集 <br> - 范围角色：`qa_guardrail` <br> - 下限：0 <br> - 上限：U_capture_fuels <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：`reference_flow` <br> - 证据类型：`reasoned_estimate` | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_capture_supplies` | `capture`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：采捕电力、耗材及共享资产服务. 分别实例化实际电力（kWh）、油及材料（kg）、网袋、潜水设备、船舶或压缩机更换（kg），或实测资产服务份额。资产服务以原生服务小时计，记录寿命通量和所有使用者，不强设寿命。 <br> - 流属性/单位: Actual instance property / kg; kWh; h <br> - 数量规则: 各原生单位归属交换量 / A；排除完整供应服务中已计组件 <br> - 数值来源模式: `foreground_record` <br> - 适用范围: `site_specific` <br> - 归一化基准: 每 1 kg 参考流 <br> - 基准类型: `reference_flow` <br> - 证据类型: `collected_record` <br> - 采集协议: `cp_capture` <br> - 数量范围：证据缺口区间；U_capture_supplies 须逐实例实测确定，非经验范围、非通用上限、不可代替采集 <br> - 范围角色：`qa_guardrail` <br> - 下限：0 <br> - 上限：U_capture_supplies <br> - 单位：kg; kWh; h <br> - 基准：每 1 kg 参考流 <br> - 基准类型：`reference_flow` <br> - 证据类型：`reasoned_estimate` | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_incidental_removal` | `capture`; 输入; 基本流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：采捕携带的附带海洋物质. 按实际物质分别记录附带底质、附着生物及夹带海水的移出与返回量。 <br> - 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则: 每种附带物质实际移出质量 / A <br> - 数值来源模式: `foreground_record` <br> - 适用范围: `site_specific` <br> - 归一化基准: 每 1 kg 参考流 <br> - 基准类型: `reference_flow` <br> - 证据类型: `collected_record` <br> - 采集协议: `cp_capture` <br> - 数量范围：证据缺口区间；U_incidental_removal 须逐实例实测确定，非经验范围、非通用上限、不可代替采集 <br> - 范围角色：`qa_guardrail` <br> - 下限：0 <br> - 上限：U_incidental_removal <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：`reference_flow` <br> - 证据类型：`reasoned_estimate` | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_capture_other_products` | `capture`; 输出; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：采捕其他预期产品去向. 对转往其他去向的整参批次或保留有用捕获物分别实例化，记录身份、状态、具名接收者或期末存货；预期转售不列废物。 <br> - 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则: 每种其他预期输出实测质量 / A <br> - 数值来源模式: `foreground_record` <br> - 适用范围: `site_specific` <br> - 归一化基准: 每 1 kg 参考流 <br> - 基准类型: `reference_flow` <br> - 证据类型: `collected_record` <br> - 采集协议: `cp_capture` <br> - 数量范围：证据缺口区间；U_capture_other_products 须逐实例实测确定，非经验范围、非通用上限、不可代替采集 <br> - 范围角色：`qa_guardrail` <br> - 下限：0 <br> - 上限：U_capture_other_products <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：`reference_flow` <br> - 证据类型：`reasoned_estimate` | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_capture_incidental_transfer` | `capture`; 输出; 废物流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：随整参交接的附带物质. 转移 T_CM：随 T_CC 向 collect_condition_incidental 交接的实际附带物质及游离水逐项另测；不计入参体质量。 <br> - 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则: T_CM 各组分实测质量 / A <br> - 数值来源模式: `foreground_record` <br> - 适用范围: `site_specific` <br> - 归一化基准: 每 1 kg 参考流 <br> - 基准类型: `reference_flow` <br> - 证据类型: `collected_record` <br> - 采集协议: `cp_capture` <br> - 数量范围：证据缺口区间；U_capture_incidental_transfer 须逐实例实测确定，非经验范围、非通用上限、不可代替采集 <br> - 范围角色：`qa_guardrail` <br> - 下限：0 <br> - 上限：U_capture_incidental_transfer <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：`reference_flow` <br> - 证据类型：`reasoned_estimate` | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_capture_discard` | `capture`; 输出; 废物流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：采捕弃参及操作废物. 仅对实际弃置或死亡参体、设备及清理废物按处理接收者实例化；复用、出售或活体返回另记实际去向。区分整参及去内脏状态。 <br> - 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则: 按废物及去向实测弃置质量 / A <br> - 数值来源模式: `foreground_record` <br> - 适用范围: `site_specific` <br> - 归一化基准: 每 1 kg 参考流 <br> - 基准类型: `reference_flow` <br> - 证据类型: `collected_record` <br> - 采集协议: `cp_capture` <br> - 数量范围：证据缺口区间；U_capture_discard 须逐实例实测确定，非经验范围、非通用上限、不可代替采集 <br> - 范围角色：`qa_guardrail` <br> - 下限：0 <br> - 上限：U_capture_discard <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：`reference_flow` <br> - 证据类型：`reasoned_estimate` | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_capture_air_releases` | `capture`; 输出; 基本流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：采捕燃料及其他直接大气排放. 对每种实测或按因子计算的物质及大气介质分别实例化。化石与生物源 CO2 分别建碳清单；NOx 形态和计量基础、颗粒粒径及制冷剂化学物质均区分。因子须具名方法、版本、燃料量及不确定性，不设默认因子。 <br> - 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则: 各释放物质实际质量 / A <br> - 数值来源模式: `foreground_record` <br> - 适用范围: `site_specific` <br> - 归一化基准: 每 1 kg 参考流 <br> - 基准类型: `reference_flow` <br> - 证据类型: `collected_record` <br> - 采集协议: `cp_capture` <br> - 数量范围：证据缺口区间；U_capture_air_releases 须逐实例实测确定，非经验范围、非通用上限、不可代替采集 <br> - 范围角色：`qa_guardrail` <br> - 下限：0 <br> - 上限：U_capture_air_releases <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：`reference_flow` <br> - 证据类型：`reasoned_estimate` | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_condition_supplies` | `condition`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际去内脏及清洁投入. 实际刀具及更换、清洁剂和供应水按 kg、电力按 kWh 实例化。供应水区别于直接环境取水，后者需独立环境介质实例。不推断必需清洗。 <br> - 流属性/单位: Actual instance property / kg; kWh <br> - 数量规则: 各实际供应原生单位归属量 / A <br> - 数值来源模式: `foreground_record` <br> - 适用范围: `site_specific` <br> - 归一化基准: 每 1 kg 参考流 <br> - 基准类型: `reference_flow` <br> - 证据类型: `collected_record` <br> - 采集协议: `cp_condition` <br> - 数量范围：证据缺口区间；U_condition_supplies 须逐实例实测确定，非经验范围、非通用上限、不可代替采集 <br> - 范围角色：`qa_guardrail` <br> - 下限：0 <br> - 上限：U_condition_supplies <br> - 单位：kg; kWh <br> - 基准：每 1 kg 参考流 <br> - 基准类型：`reference_flow` <br> - 证据类型：`reasoned_estimate` | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_condition_incidental` | `condition`; 输入; 废物流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：随整参接收的附带物质. 按记录质量接收 T_CM 各组分；采捕与整理记录应一致。 <br> - 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则: T_CM 各组分实测质量 / A <br> - 数值来源模式: `foreground_record` <br> - 适用范围: `site_specific` <br> - 归一化基准: 每 1 kg 参考流 <br> - 基准类型: `reference_flow` <br> - 证据类型: `collected_record` <br> - 采集协议: `cp_condition` <br> - 数量范围：证据缺口区间；U_condition_incidental 须逐实例实测确定，非经验范围、非通用上限、不可代替采集 <br> - 范围角色：`qa_guardrail` <br> - 下限：0 <br> - 上限：U_condition_incidental <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：`reference_flow` <br> - 证据类型：`reasoned_estimate` | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_condition_other_products` | `condition`; 输出; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：整理其他预期产品. 分别实例化实际用于出售或利用的其他参体、保留内脏或副产品，区别于弃置内脏；须记录状态、数量及接收者。不预设该输出存在。 <br> - 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则: 各其他预期输出实际质量 / A <br> - 数值来源模式: `foreground_record` <br> - 适用范围: `site_specific` <br> - 归一化基准: 每 1 kg 参考流 <br> - 基准类型: `reference_flow` <br> - 证据类型: `collected_record` <br> - 采集协议: `cp_condition` <br> - 数量范围：证据缺口区间；U_condition_other_products 须逐实例实测确定，非经验范围、非通用上限、不可代替采集 <br> - 范围角色：`qa_guardrail` <br> - 下限：0 <br> - 上限：U_condition_other_products <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：`reference_flow` <br> - 证据类型：`reasoned_estimate` | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_condition_incidental_transfer` | `condition`; 输出; 废物流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：交分选的附带物质. 转移 T_SM 仅含记录的 T_CM 剩余组分；按同一物质、状态及数量与 collect_sort_incidental 配对，并扣除已在此返回或处理的组分。 <br> - 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则: T_SM 实测剩余附带物质质量 / A <br> - 数值来源模式: `foreground_record` <br> - 适用范围: `site_specific` <br> - 归一化基准: 每 1 kg 参考流 <br> - 基准类型: `reference_flow` <br> - 证据类型: `collected_record` <br> - 采集协议: `cp_condition` <br> - 数量范围：证据缺口区间；U_condition_incidental_transfer 须逐实例实测确定，非经验范围、非通用上限、不可代替采集 <br> - 范围角色：`qa_guardrail` <br> - 下限：0 <br> - 上限：U_condition_incidental_transfer <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：`reference_flow` <br> - 证据类型：`reasoned_estimate` | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_condition_treatment_waste` | `condition`; 输出; 废物流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：交处理的去除内脏、弃参及收集废液. 逐项实例化实际固液废物及处理接收者，记录干湿组成、参体状态及所含游离水。同一交处理量不得又列直接海洋释放。 <br> - 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则: 按物质及去向实际收集废物质量 / A <br> - 数值来源模式: `foreground_record` <br> - 适用范围: `site_specific` <br> - 归一化基准: 每 1 kg 参考流 <br> - 基准类型: `reference_flow` <br> - 证据类型: `collected_record` <br> - 采集协议: `cp_condition` <br> - 数量范围：证据缺口区间；U_condition_treatment_waste 须逐实例实测确定，非经验范围、非通用上限、不可代替采集 <br> - 范围角色：`qa_guardrail` <br> - 下限：0 <br> - 上限：U_condition_treatment_waste <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：`reference_flow` <br> - 证据类型：`reasoned_estimate` | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_condition_marine_releases` | `condition`; 输出; 基本流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：去内脏时直接释放的实际物质. 仅在实际直接释放时，逐项实例化内脏、体液或其他排放进入海水的已识别物质，记录化学身份、干湿基准、实测浓度与体积及受纳介质。有机物不自动成为生物源 CO2；组成未知保留数据缺口，不强绑定通用污染物流。 <br> - 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则: 各海水受纳物质实测或有记录计算质量 / A <br> - 数值来源模式: `foreground_record` <br> - 适用范围: `site_specific` <br> - 归一化基准: 每 1 kg 参考流 <br> - 基准类型: `reference_flow` <br> - 证据类型: `collected_record` <br> - 采集协议: `cp_condition` <br> - 数量范围：证据缺口区间；U_condition_marine_releases 须逐实例实测确定，非经验范围、非通用上限、不可代替采集 <br> - 范围角色：`qa_guardrail` <br> - 下限：0 <br> - 上限：U_condition_marine_releases <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：`reference_flow` <br> - 证据类型：`reasoned_estimate` | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_sort_supplies` | `sort`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际分选电力、水及耗材. 实际电力以 kWh、供应水及材料以 kg 实例化；共享船舶及甲板服务依资产台账归属。 <br> - 流属性/单位: Actual instance property / kg; kWh <br> - 数量规则: 各实测原生单位供应归属量 / A <br> - 数值来源模式: `foreground_record` <br> - 适用范围: `site_specific` <br> - 归一化基准: 每 1 kg 参考流 <br> - 基准类型: `reference_flow` <br> - 证据类型: `collected_record` <br> - 采集协议: `cp_sort` <br> - 数量范围：证据缺口区间；U_sort_supplies 须逐实例实测确定，非经验范围、非通用上限、不可代替采集 <br> - 范围角色：`qa_guardrail` <br> - 下限：0 <br> - 上限：U_sort_supplies <br> - 单位：kg; kWh <br> - 基准：每 1 kg 参考流 <br> - 基准类型：`reference_flow` <br> - 证据类型：`reasoned_estimate` | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_sort_incidental` | `sort`; 输入; 废物流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：接收分离的附带物质. 按 T_SM 接收并保留组分及转移证据，与参体质量分开。 <br> - 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则: T_SM 实测剩余附带物质质量 / A <br> - 数值来源模式: `foreground_record` <br> - 适用范围: `site_specific` <br> - 归一化基准: 每 1 kg 参考流 <br> - 基准类型: `reference_flow` <br> - 证据类型: `collected_record` <br> - 采集协议: `cp_sort` <br> - 数量范围：证据缺口区间；U_sort_incidental 须逐实例实测确定，非经验范围、非通用上限、不可代替采集 <br> - 范围角色：`qa_guardrail` <br> - 下限：0 <br> - 上限：U_sort_incidental <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：`reference_flow` <br> - 证据类型：`reasoned_estimate` | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_sort_other_products` | `sort`; 输出; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：分选其他预期等级及去向. 逐项实例化降级但预期出售或利用等级、返回有用批次或期末存货，独立记录数量、状态及接收者；区别于弃置或死亡废物。 <br> - 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则: 各预期等级及去向实测质量 / A <br> - 数值来源模式: `foreground_record` <br> - 适用范围: `site_specific` <br> - 归一化基准: 每 1 kg 参考流 <br> - 基准类型: `reference_flow` <br> - 证据类型: `collected_record` <br> - 采集协议: `cp_sort` <br> - 数量范围：证据缺口区间；U_sort_other_products 须逐实例实测确定，非经验范围、非通用上限、不可代替采集 <br> - 范围角色：`qa_guardrail` <br> - 下限：0 <br> - 上限：U_sort_other_products <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：`reference_flow` <br> - 证据类型：`reasoned_estimate` | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_sort_discard` | `sort`; 输出; 废物流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：分选弃参、分离物及清洁废物. 按物质及处理去向实例化实际废物，保留整参或去内脏状态、附带底质及清理量。 <br> - 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则: 按物质及去向实际废物质量 / A <br> - 数值来源模式: `foreground_record` <br> - 适用范围: `site_specific` <br> - 归一化基准: 每 1 kg 参考流 <br> - 基准类型: `reference_flow` <br> - 证据类型: `collected_record` <br> - 采集协议: `cp_sort` <br> - 数量范围：证据缺口区间；U_sort_discard 须逐实例实测确定，非经验范围、非通用上限、不可代替采集 <br> - 范围角色：`qa_guardrail` <br> - 下限：0 <br> - 上限：U_sort_discard <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：`reference_flow` <br> - 证据类型：`reasoned_estimate` | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_sort_returns` | `sort`; 输出; 基本流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：分选直接环境返回. 实际附带活体生物、底质、载体海水及化学污染物分别按具名海洋地点实例化；排除交处理废物，不对返回生物赋予收益。 <br> - 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则: 各实际返回物质或释放物质质量 / A <br> - 数值来源模式: `foreground_record` <br> - 适用范围: `site_specific` <br> - 归一化基准: 每 1 kg 参考流 <br> - 基准类型: `reference_flow` <br> - 证据类型: `collected_record` <br> - 采集协议: `cp_sort` <br> - 数量范围：证据缺口区间；U_sort_returns 须逐实例实测确定，非经验范围、非通用上限、不可代替采集 <br> - 范围角色：`qa_guardrail` <br> - 下限：0 <br> - 上限：U_sort_returns <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：`reference_flow` <br> - 证据类型：`reasoned_estimate` | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_hold_supplies` | `hold`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际保存能源、水及材料. 仅在实际观察到时实例化冷却或曝气电力 kWh，以及供应水、冰或材料 kg。识别共享设备服务小时及具体制冷剂补充，不规定暂存时长或加冰配方。 <br> - 流属性/单位: Actual instance property / kg; kWh; h <br> - 数量规则: 各实测干预供应归属量 / A <br> - 数值来源模式: `foreground_record` <br> - 适用范围: `site_specific` <br> - 归一化基准: 每 1 kg 参考流 <br> - 基准类型: `reference_flow` <br> - 证据类型: `collected_record` <br> - 采集协议: `cp_hold` <br> - 数量范围：证据缺口区间；U_hold_supplies 须逐实例实测确定，非经验范围、非通用上限、不可代替采集 <br> - 范围角色：`qa_guardrail` <br> - 下限：0 <br> - 上限：U_hold_supplies <br> - 单位：kg; kWh; h <br> - 基准：每 1 kg 参考流 <br> - 基准类型：`reference_flow` <br> - 证据类型：`reasoned_estimate` | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_hold_other_products` | `hold`; 输出; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：保存其他预期输出及期末存货. 按实际状态、日期、接收者或存货记录实例化其他预期出售或利用批次及存留活体；失去参考合格性本身不代表废物。 <br> - 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则: 各其他预期批次或存货实际质量 / A <br> - 数值来源模式: `foreground_record` <br> - 适用范围: `site_specific` <br> - 归一化基准: 每 1 kg 参考流 <br> - 基准类型: `reference_flow` <br> - 证据类型: `collected_record` <br> - 采集协议: `cp_hold` <br> - 数量范围：证据缺口区间；U_hold_other_products 须逐实例实测确定，非经验范围、非通用上限、不可代替采集 <br> - 范围角色：`qa_guardrail` <br> - 下限：0 <br> - 上限：U_hold_other_products <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：`reference_flow` <br> - 证据类型：`reasoned_estimate` | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_hold_waste` | `hold`; 输出; 废物流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：保存弃参及收集废水. 对交处理的实际死亡或弃置参体、废材料及收集废液按接收者实例化；披露失败暂存批次。 <br> - 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则: 按物质及处理实际废物质量 / A <br> - 数值来源模式: `foreground_record` <br> - 适用范围: `site_specific` <br> - 归一化基准: 每 1 kg 参考流 <br> - 基准类型: `reference_flow` <br> - 证据类型: `collected_record` <br> - 采集协议: `cp_hold` <br> - 数量范围：证据缺口区间；U_hold_waste 须逐实例实测确定，非经验范围、非通用上限、不可代替采集 <br> - 范围角色：`qa_guardrail` <br> - 下限：0 <br> - 上限：U_hold_waste <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：`reference_flow` <br> - 证据类型：`reasoned_estimate` | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_hold_releases` | `hold`; 输出; 基本流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：保存直接环境释放. 各实际制冷剂按化学物质及大气介质、污染物按海水介质分别实例化；返回载体水与化学物质质量分开。排除交处理量。 <br> - 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则: 各释放组分实际质量 / A <br> - 数值来源模式: `foreground_record` <br> - 适用范围: `site_specific` <br> - 归一化基准: 每 1 kg 参考流 <br> - 基准类型: `reference_flow` <br> - 证据类型: `collected_record` <br> - 采集协议: `cp_hold` <br> - 数量范围：证据缺口区间；U_hold_releases 须逐实例实测确定，非经验范围、非通用上限、不可代替采集 <br> - 范围角色：`qa_guardrail` <br> - 下限：0 <br> - 上限：U_hold_releases <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：`reference_flow` <br> - 证据类型：`reasoned_estimate` | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_tote_service` | `present`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：可复用周转箱服务及呈交耗材. 周转箱服务以实际件次、更换及材料供应以 kg、标签及封闭材料以 kg 实例化。以有证据的寿命使用次数或通量分配制造及更换负荷，记录返回、破损及未结束资产；不得每次行程都计新箱。 <br> - 流属性/单位: Actual instance property / item-use; kg <br> - 数量规则: 各归属周转箱使用或呈交材料消耗量 / A <br> - 数值来源模式: `foreground_record` <br> - 适用范围: `site_specific` <br> - 归一化基准: 每 1 kg 参考流 <br> - 基准类型: `reference_flow` <br> - 证据类型: `collected_record` <br> - 采集协议: `cp_present` <br> - 数量范围：证据缺口区间；U_tote_service 须逐实例实测确定，非经验范围、非通用上限、不可代替采集 <br> - 范围角色：`qa_guardrail` <br> - 下限：0 <br> - 上限：U_tote_service <br> - 单位：item-use; kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：`reference_flow` <br> - 证据类型：`reasoned_estimate` | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_present_cleanup` | `present`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际周转箱准备及清洗投入. 实际供应水及清洗化学品按 kg、能源按 kWh 实例化；返程清洗在服务期台账中仅计一次。 <br> - 流属性/单位: Actual instance property / kg; kWh <br> - 数量规则: 各原生单位清洗投入归属量 / A <br> - 数值来源模式: `foreground_record` <br> - 适用范围: `site_specific` <br> - 归一化基准: 每 1 kg 参考流 <br> - 基准类型: `reference_flow` <br> - 证据类型: `collected_record` <br> - 采集协议: `cp_present` <br> - 数量范围：证据缺口区间；U_present_cleanup 须逐实例实测确定，非经验范围、非通用上限、不可代替采集 <br> - 范围角色：`qa_guardrail` <br> - 下限：0 <br> - 上限：U_present_cleanup <br> - 单位：kg; kWh <br> - 基准：每 1 kg 参考流 <br> - 基准类型：`reference_flow` <br> - 证据类型：`reasoned_estimate` | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_present_other_products` | `present`; 输出; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：呈交其他预期输出及复用返回. 分别实例化其他出售或利用批次、保留参体存货及返回复用箱，记录身份、原生单位及接收者。箱返回为服务循环移动，不是额外海参产出。 <br> - 流属性/单位: Actual instance property / kg; item <br> - 数量规则: 各实际预期参体质量或复用件移动量 / A <br> - 数值来源模式: `foreground_record` <br> - 适用范围: `site_specific` <br> - 归一化基准: 每 1 kg 参考流 <br> - 基准类型: `reference_flow` <br> - 证据类型: `collected_record` <br> - 采集协议: `cp_present` <br> - 数量范围：证据缺口区间；U_present_other_products 须逐实例实测确定，非经验范围、非通用上限、不可代替采集 <br> - 范围角色：`qa_guardrail` <br> - 下限：0 <br> - 上限：U_present_other_products <br> - 单位：kg; item <br> - 基准：每 1 kg 参考流 <br> - 基准类型：`reference_flow` <br> - 证据类型：`reasoned_estimate` | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_present_waste` | `present`; 输出; 废物流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：呈交弃参、包装及清洗废液. 仅对实际弃参、破损箱、包装及收集清洗废液按处理去向分别实例化；排除复用返回。 <br> - 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则: 按物质及去向实际弃置质量 / A <br> - 数值来源模式: `foreground_record` <br> - 适用范围: `site_specific` <br> - 归一化基准: 每 1 kg 参考流 <br> - 基准类型: `reference_flow` <br> - 证据类型: `collected_record` <br> - 采集协议: `cp_present` <br> - 数量范围：证据缺口区间；U_present_waste 须逐实例实测确定，非经验范围、非通用上限、不可代替采集 <br> - 范围角色：`qa_guardrail` <br> - 下限：0 <br> - 上限：U_present_waste <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：`reference_flow` <br> - 证据类型：`reasoned_estimate` | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_present_releases` | `present`; 输出; 基本流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际呈交直接水及化学物质释放. 按受纳介质分别实例化直接返回载体海水及各已识别污染物；不默认直接排放。 <br> - 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则: 各实际直接释放组分质量 / A <br> - 数值来源模式: `foreground_record` <br> - 适用范围: `site_specific` <br> - 归一化基准: 每 1 kg 参考流 <br> - 基准类型: `reference_flow` <br> - 证据类型: `collected_record` <br> - 采集协议: `cp_present` <br> - 数量范围：证据缺口区间；U_present_releases 须逐实例实测确定，非经验范围、非通用上限、不可代替采集 <br> - 范围角色：`qa_guardrail` <br> - 下限：0 <br> - 上限：U_present_releases <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：`reference_flow` <br> - 证据类型：`reasoned_estimate` | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_delivery_service` | `deliver`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：接收前完整运输及装卸服务. 购入完整服务按每段实际海运、陆运或装卸、距离、载荷及原生计费单位（tkm 或 h）实例化。实际存在的收集船、中转、卸载及空载返程均归属；服务所含组件不另计。 <br> - 流属性/单位: Actual instance property / tkm; h <br> - 数量规则: 每段实际服务归属量 / A <br> - 数值来源模式: `foreground_record` <br> - 适用范围: `site_specific` <br> - 归一化基准: 每 1 kg 参考流 <br> - 基准类型: `reference_flow` <br> - 证据类型: `collected_record` <br> - 采集协议: `cp_deliver` <br> - 数量范围：证据缺口区间；U_delivery_service 须逐实例实测确定，非经验范围、非通用上限、不可代替采集 <br> - 范围角色：`qa_guardrail` <br> - 下限：0 <br> - 上限：U_delivery_service <br> - 单位：tkm; h <br> - 基准：每 1 kg 参考流 <br> - 基准类型：`reference_flow` <br> - 证据类型：`reasoned_estimate` | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_delivery_components` | `deliver`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：自营交付燃料、能源及资产服务. 仅对自营或明确不在完整服务内的组件实例化实际燃料 kg、电力 kWh 及资产服务 h，包括空载及失败交付。共享船舶燃料与 capture 分摊，不重复。 <br> - 流属性/单位: Actual instance property / kg; kWh; h <br> - 数量规则: 各实际组件原生单位归属量 / A <br> - 数值来源模式: `foreground_record` <br> - 适用范围: `site_specific` <br> - 归一化基准: 每 1 kg 参考流 <br> - 基准类型: `reference_flow` <br> - 证据类型: `collected_record` <br> - 采集协议: `cp_deliver` <br> - 数量范围：证据缺口区间；U_delivery_components 须逐实例实测确定，非经验范围、非通用上限、不可代替采集 <br> - 范围角色：`qa_guardrail` <br> - 下限：0 <br> - 上限：U_delivery_components <br> - 单位：kg; kWh; h <br> - 基准：每 1 kg 参考流 <br> - 基准类型：`reference_flow` <br> - 证据类型：`reasoned_estimate` | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_delivery_other_products` | `deliver`; 输出; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：其他预期交付或保留批次及周转箱返回. 逐项实例化实际非参考出售或利用批次、仍有预期用途的拒收改送批次、期末参体存货及复用箱返回，独立记录状态、数量、接收者及日期。失去参考合格性本身不等于弃置。 <br> - 流属性/单位: Actual instance property / kg; item <br> - 数量规则: 各实际预期参体质量或复用件返回量 / A <br> - 数值来源模式: `foreground_record` <br> - 适用范围: `site_specific` <br> - 归一化基准: 每 1 kg 参考流 <br> - 基准类型: `reference_flow` <br> - 证据类型: `collected_record` <br> - 采集协议: `cp_deliver` <br> - 数量范围：证据缺口区间；U_delivery_other_products 须逐实例实测确定，非经验范围、非通用上限、不可代替采集 <br> - 范围角色：`qa_guardrail` <br> - 下限：0 <br> - 上限：U_delivery_other_products <br> - 单位：kg; item <br> - 基准：每 1 kg 参考流 <br> - 基准类型：`reference_flow` <br> - 证据类型：`reasoned_estimate` | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_delivery_waste` | `deliver`; 输出; 废物流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：交付弃参及物流废物. 按接收者实例化实际死亡或弃置参体、损坏包装及清理废物，区分交处理废液。失败交付负荷留在报告池中。 <br> - 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则: 按物质及去向实际弃置质量 / A <br> - 数值来源模式: `foreground_record` <br> - 适用范围: `site_specific` <br> - 归一化基准: 每 1 kg 参考流 <br> - 基准类型: `reference_flow` <br> - 证据类型: `collected_record` <br> - 采集协议: `cp_deliver` <br> - 数量范围：证据缺口区间；U_delivery_waste 须逐实例实测确定，非经验范围、非通用上限、不可代替采集 <br> - 范围角色：`qa_guardrail` <br> - 下限：0 <br> - 上限：U_delivery_waste <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：`reference_flow` <br> - 证据类型：`reasoned_estimate` | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_delivery_releases` | `deliver`; 输出; 基本流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：自营交付直接环境释放. 按受纳介质逐项实例化自营化学物质或颗粒排放，区分化石及生物源碳、载体水及污染物；排除完整服务背景清单已含排放。 <br> - 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - 数量规则: 各释放物质实际质量 / A <br> - 数值来源模式: `foreground_record` <br> - 适用范围: `site_specific` <br> - 归一化基准: 每 1 kg 参考流 <br> - 基准类型: `reference_flow` <br> - 证据类型: `collected_record` <br> - 采集协议: `cp_deliver` <br> - 数量范围：证据缺口区间；U_delivery_releases 须逐实例实测确定，非经验范围、非通用上限、不可代替采集 <br> - 范围角色：`qa_guardrail` <br> - 下限：0 <br> - 上限：U_delivery_releases <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：`reference_flow` <br> - 证据类型：`reasoned_estimate` | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `dq_logistics_water_balance` | 运输、服务和水/营养物平衡 | 运输实际载荷包括随行水、冰、包装及其他货物；空返或调位虽无产品载荷仍有活动负荷，须以实际燃料/距离/车辆服务及明确分配计入，不能以零吨公里消去。完整服务与其已覆盖燃料、材料、资产和直接排放不得重复计入。外部取水、供水产品、内部循环和实际返排水分别计量；内部循环不得再从外部取水中重复扣减。净营养物增量/滞留只用于独立平衡诊断，不自动成为负基本流、负排放或避免负荷。 | 实际载荷和车辆活动记录、服务覆盖、同批水/物质平衡与方法证据 |

## 9. 验证规则

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| eligible_reference | reference_output | 核实 A>0、物种、阿拉斯加野生水肺来源、首个岸上加工者实物接收时实测活体状态、去内脏生鲜未冻结状态、秤皮重沥水方法及分离前节点。死亡、整参、冻结或仅皮肌肉产物均不计 A，其负荷及去向仍保留。 | adfg-dive-sea-cucumber |
| reconcile_transfers | all_nodes | 按批次状态时间及数量核对全部配对转移；证明保存实施或旁路状态，核算附带物与游离水，列明全部预期去向并区分处理与直接释放。拒绝无说明质量损失及最终内部交换重复。实际条件未知为不完整，不置零。 |  |
| complete_reporting_pool | season_and_assets | 核对全部行程季投入、失败批次、死亡、存货、共享资产、箱循环、更换报废及清理与输出分配和敏感性。每项完整服务有组件排除图；份额闭合且弃物无信用。 |  |
| identities_and_ranges | all_rows | 按实际身份及作用核实每个最终交换的具体流属性单位。集合行须展开为实际实例；不得推断搜索首项身份或通用污染物匹配。符号 0..U 明示缺少经验边界；最终数据生产前须采集逐行逐实例观测及不确定性。检查通过不代表身份已核实或可发布。 |  |
| `validate_atomic_completion` | 所有适用的逐流采集义务和最终交换 | 只有每项实际发生的交换均有独立原子卡及其自身的数量、属性/原生单位、采集或计算证据、范围/不确定性证据、归一化、实际去向和已验证UUID时，最终数据包才可完成并通过验证。未知身份、活动状态、数量、范围证据或去向会阻断完成；不得视为零、默认为旁路或靠省略义务通过。所有重要具体流须保留自身范围/不确定性证据采集责任；符号上限不是实证范围。 | |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 同一野生水肺活体去内脏路线节点的前景包、process 及 lifecyclemodel 投影 |
| allowed_use | 有证据匹配的阿拉斯加野生 A. californicus 首次岸上实物接收活体去内脏沥水生鲜未冻结供应 |
| excluded_use | 整参最终质量、养殖、水面供气路线、皮肌肉加工品、接收后操作或无依据现行法规环境声称 |
| required_metadata | 全部参考限定符；报告资产期间；实物接收记录；上游边界；输出存货去向台账；分配及服务排除图 |
| required_quality_disclosure | 实测合格性；确切上游身份；范围证据缺口；代表性；失败期间；平衡；不确定性及分配寿命敏感性 |
| update_trigger | 物种来源水肺技术、去内脏方法、实际接收节点状态、保存物流路线、服务边界、资产利用或证据变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| adfg-dive-sea-cucumber | official_guidance | Alaska Department of Fish and Game, Commercial Sea Cucumber Dive Fisheries. https://www.adfg.alaska.gov/index.cfm?adfg=CommercialByFisheryDive.seacucumber | 物种、手采水肺网袋路线及去内脏活体岸上交付；无数量默认值或法律建议 |
| adfg-walker-dive-fisheries-2006 | literature | Walker S., Hoyt Z., Pritchett M. 2006. Report to the Board of Fisheries, miscellaneous dive fisheries. Fishery Management Report 06-01, pp. 8–9. https://www.adfg.alaska.gov/FedAidpdfs/Fmr06-01.pdf | 历史网袋船舶刺孔沥水、沥水重量及周转箱顺序，以及后续分离排除；不采历史限额效率或暂存时长 |
| unsd-cpc3-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025, p. 52. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅较窄分类背景及排除项；无产品清单效率 |
| mass-balance-identity | method_factor | 本 PCR 明定的守恒核算及同批归一恒等式；无外部经验因子 | 仅物理核对及最终 A/A=1 恒等式 |
