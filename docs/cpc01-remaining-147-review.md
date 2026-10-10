---
title: CPC 01 remaining 147 PCR migration review
docType: review
scope: repo
status: draft
authoritative: false
owner: tiangong-lca-pcr
language: zh-CN
whenToUse:
  - when reviewing the CPC 01 remaining 147 migration
whenToUpdate:
  - when verification or identified review debt changes
checkPaths:
  - docs/cpc01-remaining-147-review.md
  - library/pcrs/agriculture-forestry-and-fishery-products/products-of-agriculture-horticulture-and-market-gardening/**
lastReviewedAt: 2026-10-10
lastReviewedCommit: null
lastReviewedNote: "Content consistency and focused primary-source audit; candidate status and unresolved review debt are explicit."
---

# CPC 01 剩余 147 个 PCR 整理与检查记录

目标分支为 `letitialnzh/tiangong-lca-pcr:upstream-update`，基线提交 `9bef19ccf927c9ebaa6e69c2230bb504b4c46737`。CPC 01 共 158 个唯一叶代码；本次排除目标分支已有的 11 个方法学，仅整理其余 147 个。01962 的额外长目录兼容空壳也保留原样。

排除的代码：01111、01112、01121、01122、01131、01132、01141、01142、01151、01961、01962。下表是本次完整目标清单。

## 变更及验证范围

- 删除目标中的 Flow Set 与 module 绑定，包括 manifest 模块列表、绑定元数据和 Markdown 绑定字段；不删除实际清单要求或以 UUID 作为默认数量。
- 将双语标题、方向、字段和表格规范到目标分支可解析格式；结构化投影由目标分支生成器生成。连续两次生成的字节一致。
- 保留原始活动数量、批次或阶段分母说明，再明确完成库存、含水率、损失与共产品归属核对后的参考流归一化。参考输出用明确行号定位，多个可选终端状态要求实际路线、门、状态及唯一输出选择。
- 修复逐项确认的生产残余物方向，保留香蕉、柠檬和大蕉废物处理过程的真正输入。另修复蘑菇的产品、土地、运输和排放方向/类型，以及橙子的产品输出。
- 分类映射逐代码记录在 `docs/adr/cpc-<code>.md`；109 个 exact、37 个 narrower、1 个 broader。接受分类关联不表示通过发布审阅。

145 份为 candidate/authored_methodology。另两份浆果源稿（01353、01355）原带 active/reviewed_methodology 及中文 reviewed 状态，本次沿用其历史标记；这不表示本次完成了新的发布级审阅。目标分支的生命周期命令禁止 active 退回 candidate，因此未强行改写状态。

逐份 `pcr:check`：147/147 通过，计量检查覆盖均完整。检查共报告 900 条非阻断警告，其中原子流迁移警告涉及 221 个聚合清单标签；它们仍需后续按实际产品/物质拆成原子交换。这次没有声明 `atomic_flows: v1` 或官方中文流名已核验。

完整 `npm run validate`：待本次最终验证记录更新。

## 已确认并修正的问题

| 问题 | 处理和证据 |
| --- | --- |
| 巴西坚果把未开启的木质果荚与单粒带硬壳种子混作参考产品 | 参考产品明确为开荚后仍保留单粒硬壳的种子；未开荚中间投入不继承该产品 UUID。[FAO Brazil nuts](https://www.fao.org/forestry/nwfp/statistics/brazil-nuts) 区分果荚与其中的种子。 |
| 七类坚果引用套用了作物题名，多个 CXC 4-1971 被改写成别的坚果标准 | 改用可核实的作物资料及正确的 CXC 6-1972（树坚果）、CXC 22-1979（花生）。CXC 4-1971 仅保留为脱水椰子下游范围背景。[Codex 标准目录](https://www.fao.org/fao-who-codexalimentarius/committees/committee/related-standards/en/?committee=CCPFV)；不能验证的套用指南退出规范引用。 |
| 中文坚果文本遗留腰果“苹果”、错误文献和荚果开启排除项 | 改为对应的荚果、苞或外果皮术语，来源表与英文同步；中文整体仍标记为 draft_translation。 |
| 其他油籽把蓖麻籽当作 01449 的例子 | 明确排除，归属单独的 01447。[UNSD 01447](https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/01447)。 |
| 其他青豆类蔬菜把青蚕豆作为 01249 的例子 | 排除属于 01243 的青蚕豆/青马蚕豆；使用鲜鹰嘴豆、鲜扁豆和瓜尔豆等范围例子。[UNSD 01249](https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/01249)、[01243](https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/01243)。 |
| Finnigan 2019 的菌蛋白文献期刊/DOI 错配 | 改为 Current Developments in Nutrition 3(6), nzz021，[DOI 10.1093/cdn/nzz021](https://doi.org/10.1093/cdn/nzz021)。 |
| 播种用花生、大豆的采后文献链接实际指向玉米 | 退出错误作物题名，使用经核实的相应作物 FAO 采后资料；不作为种子认证阈值。原页面实际为 [Maize harvesting and post-harvesting handling](https://www.fao.org/family-farming/detail/en/c/1619514/)。 |
| 花菜/西兰花、南瓜的 FAO 通用采后手册被写成作物生产指南 | 题名改回 [Manual for the preparation and sale of fruits and vegetables](https://www.fao.org/4/y4893e/y4893e00.htm)，限定为通用采收、整理与储存背景。 |

甜菜种子 01940 的英文歧义已消除：排除的是糖用甜菜种子，牧草植物种子仍在范围内。没有把它误报为“应排除牧草种子”。没有充分证据把散装干茶 01620 判成分类错误，也没有把它列为已确认错误。

## 尚未完成的发布级审阅

这是候选方法学整理和重点来源核查，没有对每篇外部文献、每项区间和全部 Tiangong 数据记录做独立实证验证。

- 34 份参考产品身份仍明确未解决；没有伪造 UUID。已有 UUID 沿用原内容的身份证据，本次没有完成全量最新平台直读核验。
- 9 份中文保留 draft_translation：洋蓟、其他青豆类蔬菜，以及巴西坚果、栗子、椰子、花生、榛子、开心果和核桃。检查覆盖行号、方向和计量关系，不证明所有说明文字已完成翻译。
- 一些旧卡片仍是能源载体、肥料、包装或残余物的聚合采集标签；数据生产时应按实际物质拆分，不能作为已解析的单一交换直接发布。
- 一些重要流尚无数量区间，checker 将其报告为警告。本次没有为消除警告而填入未经核实的数字。
- 暂定 reasoned_estimate 区间是可替换的作者筛选估计，不是文献实测范围、合规限值或默认工厂清单。作物资料只支持其声明范围内的定性背景。
- 燕麦、黑麦及部分残余谷物仍带有“调质谷物”显示名，不能据此推定实收谷物已经调质。后续需直读身份并核对具体物理状态；早期交接状态不得继承另一个终端状态的 UUID。
- 部分 PCR 只定义了一个终端参考，尽管叙述允许更早的门点。生产者只能使用已明确的参考状态；更早门点需要补充其独立输出与身份，不能将毛收获量直接固定为净参考量。
- 巴西坚果方法同时描述林地采集。CPC 0137 的标题排除野生食用坚果，因此 01377 到该 PCR 记为 broader；分类关联不将野生采集自动归入 01377。

## 147 个目标

| CPC 3.0 | PCR 目录 | 映射关系 | 中文状态 | check |
| --- | --- | --- | --- | --- |
| 01912 | alfalfa-for-forage-and-silage | narrower | aligned | pass |
| 01371 | almonds-in-shell | exact | aligned | pass |
| 01654 | anise-badian-coriander-cumin-caraway-fennel-and-juniper-berries-raw | exact | aligned | pass |
| 01341 | apples | exact | aligned | pass |
| 01343 | apricots | exact | aligned | pass |
| 01216 | artichokes | exact | draft_translation | pass |
| 01211 | asparagus | exact | aligned | pass |
| 01311 | avocados | exact | aligned | pass |
| 01708 | bambara-beans-dry | exact | aligned | pass |
| 01312 | bananas | exact | aligned | pass |
| 01152 | barley-other | exact | aligned | pass |
| 01701 | beans-dry | exact | aligned | pass |
| 01241 | beans-green | exact | aligned | pass |
| 01940 | beet-seeds-excluding-sugar-beet-seeds-and-seeds-of-forage-plants | exact | aligned | pass |
| 01377 | brazil-nuts-in-shell | broader | draft_translation | pass |
| 01702 | broad-beans-and-horse-beans-dry | exact | aligned | pass |
| 01243 | broad-beans-and-horse-beans-green | exact | aligned | pass |
| 01192 | buckwheat | narrower | aligned | pass |
| 01212 | cabbages | exact | aligned | pass |
| 01195 | canary-seed | narrower | aligned | pass |
| 01229 | cantaloupes-and-other-melons | exact | aligned | pass |
| 01251 | carrots-and-turnips | exact | aligned | pass |
| 01372 | cashew-nuts-in-shell | exact | aligned | pass |
| 01520 | cassava | narrower | aligned | pass |
| 01447 | castor-oil-seeds | narrower | aligned | pass |
| 01213 | cauliflowers-and-broccoli | exact | aligned | pass |
| 01913 | cereal-straw-husks-unprepared-ground-pressed-or-in-the-form-of-pellets | exact | aligned | pass |
| 01344 | cherries | exact | aligned | pass |
| 01373 | chestnuts-in-shell | exact | draft_translation | pass |
| 01703 | chick-peas-dry | exact | aligned | pass |
| 01691 | chicory-roots | exact | aligned | pass |
| 01652 | chillies-and-peppers-dry-capsicum-spp-pimenta-spp-raw | exact | aligned | pass |
| 01231 | chillies-and-peppers-green-capsicum-spp-and-pimenta-spp | exact | aligned | pass |
| 01655 | cinnamon-and-cinnamon-tree-flowers-raw | exact | aligned | pass |
| 01656 | cloves-whole-stems-raw | exact | aligned | pass |
| 01640 | cocoa-beans | narrower | aligned | pass |
| 01460 | coconuts-in-shell | exact | draft_translation | pass |
| 01610 | coffee-green | exact | aligned | pass |
| 01492 | copra | exact | aligned | pass |
| 01921 | cotton-whether-or-not-ginned | exact | aligned | pass |
| 01432 | cottonseed-other | narrower | aligned | pass |
| 01431 | cottonseed-seed-for-planting | exact | aligned | pass |
| 01706 | cow-peas-dry | exact | aligned | pass |
| 01232 | cucumbers-and-gherkins | exact | aligned | pass |
| 01351 | currants-and-gooseberries | exact | aligned | pass |
| 01314 | dates | narrower | aligned | pass |
| 01233 | eggplants-aubergines | exact | aligned | pass |
| 01315 | figs | exact | aligned | pass |
| 01963 | flower-seeds | exact | aligned | pass |
| 01193 | fonio | narrower | aligned | pass |
| 01919 | forage-products-n-e-c | narrower | aligned | pass |
| 01360 | fruit-seeds | exact | aligned | pass |
| 01657 | ginger-raw | narrower | aligned | pass |
| 01330 | grapes | exact | aligned | pass |
| 01252 | green-garlic | exact | aligned | pass |
| 01422 | groundnuts-in-shell | exact | draft_translation | pass |
| 01421 | groundnuts-seed-for-planting | exact | aligned | pass |
| 01374 | hazelnuts-in-shell | exact | draft_translation | pass |
| 01659 | hop-cones | exact | aligned | pass |
| 01922 | jute-kenaf-and-other-textile-bast-fibres-raw-or-retted-except-flax-true-hemp-and-ramie | exact | aligned | pass |
| 01352 | kiwi-fruit | exact | aligned | pass |
| 01254 | leeks-and-other-alliaceous-vegetables | exact | aligned | pass |
| 01322 | lemons-and-limes | exact | aligned | pass |
| 01704 | lentils-dry | exact | aligned | pass |
| 01214 | lettuce-and-chicory | exact | aligned | pass |
| 01441 | linseed | narrower | aligned | pass |
| 01356 | locust-beans-carobs | exact | aligned | pass |
| 01911 | maize-for-forage-and-silage | narrower | aligned | pass |
| 01316 | mangoes-guavas-and-mangosteens | exact | aligned | pass |
| 01630 | mate-leaves | narrower | aligned | pass |
| 01182 | millet-other | exact | aligned | pass |
| 01181 | millet-seed | exact | aligned | pass |
| 01271 | mushrooms-farmed | exact | aligned | pass |
| 01442 | mustard-seed | narrower | aligned | pass |
| 01950 | natural-rubber-in-primary-forms-or-in-plates-sheets-or-strip | exact | aligned | pass |
| 01653 | nutmeg-mace-cardamoms-raw | exact | aligned | pass |
| 01172 | oats-other | exact | aligned | pass |
| 01171 | oats-seed | exact | aligned | pass |
| 01450 | olives | exact | aligned | pass |
| 01253 | onions | exact | aligned | pass |
| 01323 | oranges | exact | aligned | pass |
| 01355 | other-berries-fruits-of-the-genus-vaccinium | narrower | reviewed（沿用） | pass |
| 01199 | other-cereals-n-e-c | narrower | aligned | pass |
| 01329 | other-citrus-fruit-n-e-c | exact | aligned | pass |
| 01599 | other-edible-roots-and-tubers-with-high-starch-or-inulin-content-n-e-c | narrower | aligned | pass |
| 01929 | other-fibre-crops-raw-n-e-c | exact | aligned | pass |
| 01239 | other-fruit-bearing-vegetables | exact | aligned | pass |
| 01359 | other-fruits-n-e-c | exact | aligned | pass |
| 01249 | other-green-leguminous-vegetables | exact | draft_translation | pass |
| 01219 | other-leafy-or-stem-vegetables | exact | aligned | pass |
| 01379 | other-nuts-excluding-wild-edible-nuts-and-groundnuts-in-shell | exact | aligned | pass |
| 01449 | other-oilseeds-n-e-c | narrower | aligned | pass |
| 01499 | other-oleaginous-fruits-n-e-c | exact | aligned | pass |
| 01349 | other-pome-fruits-and-stone-fruits | exact | aligned | pass |
| 01990 | other-raw-vegetable-materials-n-e-c | narrower | aligned | pass |
| 01259 | other-root-bulb-and-tuberous-vegetables-n-e-c | exact | aligned | pass |
| 01699 | other-stimulant-spice-and-aromatic-crops-n-e-c | narrower | aligned | pass |
| 01809 | other-sugar-crops-n-e-c | exact | aligned | pass |
| 01319 | other-tropical-and-subtropical-fruits-n-e-c | exact | aligned | pass |
| 01491 | palm-nuts-and-kernels | narrower | aligned | pass |
| 01317 | papayas | exact | aligned | pass |
| 01345 | peaches-and-nectarines | exact | aligned | pass |
| 01342 | pears-and-quinces | exact | aligned | pass |
| 01705 | peas-dry | exact | aligned | pass |
| 01242 | peas-green | exact | aligned | pass |
| 01651 | pepper-piper-spp-raw | exact | aligned | pass |
| 01707 | pigeon-peas-dry | exact | aligned | pass |
| 01318 | pineapples | exact | aligned | pass |
| 01375 | pistachios-in-shell | exact | draft_translation | pass |
| 01313 | plantains-and-cooking-bananas | exact | aligned | pass |
| 01930 | plants-and-parts-of-plants-used-primarily-in-perfumery-in-pharmacy-or-for-insecticidal-e225248a | exact | aligned | pass |
| 01346 | plums-and-sloes | exact | aligned | pass |
| 01321 | pomelos-and-grapefruits | exact | aligned | pass |
| 01448 | poppy-seed | narrower | aligned | pass |
| 01510 | potatoes | narrower | aligned | pass |
| 01709 | pulses-n-e-c | exact | aligned | pass |
| 01235 | pumpkins-squash-and-gourds | exact | aligned | pass |
| 01194 | quinoa | narrower | aligned | pass |
| 01443 | rape-or-colza-seed | narrower | aligned | pass |
| 01353 | raspberries-blackberries-mulberries-and-loganberries | exact | reviewed（沿用） | pass |
| 01162 | rye-other | exact | aligned | pass |
| 01161 | rye-seed | exact | aligned | pass |
| 01446 | safflower-seed | narrower | aligned | pass |
| 01444 | sesame-seed | narrower | aligned | pass |
| 01412 | soya-beans-other | exact | aligned | pass |
| 01411 | soya-beans-seed-for-planting | exact | aligned | pass |
| 01215 | spinach | exact | aligned | pass |
| 01354 | strawberries | exact | aligned | pass |
| 01803 | sugar-beet-seeds | narrower | aligned | pass |
| 01801 | sugar-beet | exact | aligned | pass |
| 01802 | sugar-cane | exact | aligned | pass |
| 01445 | sunflower-seed | narrower | aligned | pass |
| 01530 | sweet-potatoes | narrower | aligned | pass |
| 01324 | tangerines-mandarins-clementines | exact | aligned | pass |
| 01550 | taro | narrower | aligned | pass |
| 01620 | tea-leaves | narrower | aligned | pass |
| 01234 | tomatoes | exact | aligned | pass |
| 01191 | triticale | narrower | aligned | pass |
| 01272 | truffles-farmed | exact | aligned | pass |
| 01970 | unmanufactured-tobacco | exact | aligned | pass |
| 01658 | vanilla-raw | narrower | aligned | pass |
| 01260 | vegetable-seeds-except-beet-seeds | exact | aligned | pass |
| 01290 | vegetables-fresh-n-e-c | exact | aligned | pass |
| 01376 | walnuts-in-shell | exact | draft_translation | pass |
| 01221 | watermelons | exact | aligned | pass |
| 01540 | yams | narrower | aligned | pass |
| 01591 | yautia | narrower | aligned | pass |
