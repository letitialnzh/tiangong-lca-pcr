/** Presentation labels only; canonical PCR identities and source text remain unchanged. */
const zh: Readonly<Record<string,string>> = {
  "agriculture-forestry-and-fishery-products": "农业、林业和渔业产品",
  "basic-chemicals": "基础化学品",
  "basic-metals": "基本金属",
  beverages: "饮料",
  "brand-assets": "品牌资产",
  "business-and-production-services": "商务和生产服务",
  "coal-and-peat": "煤和泥炭",
  "community-social-and-personal-services": "社区、社会和个人服务",
  constructions: "建筑物和工程结构",
  "constructions-and-construction-services": "建筑工程和施工服务",
  "creative-original-assets": "创作原作资产",
  "crude-petroleum-and-natural-gas": "原油和天然气",
  "data-products": "数据产品",
  "design-assets": "设计资产",
  "digital-content": "数字内容",
  "digital-original-assets": "数字原作资产",
  "geological-information-assets": "地质信息资产",
  "metal-ores": "金属矿石",
  "natural-water": "天然水",
  "other-minerals": "其他矿物",
  "stone-sand-and-clay": "石料、砂和黏土",
  "transport-equipment": "运输设备",
  "uranium-and-thorium-ores-and-concentrates": "铀、钍矿石及其精矿",
  "coke-oven-products-refined-petroleum-products-nuclear-fuel":
    "焦炉产品、精炼石油产品和核燃料",
  "dairy-products-and-egg-products": "乳制品和蛋制品",
  "electrical-machinery-and-apparatus": "电气机械和设备",
  "electricity-town-gas-steam-and-hot-water": "电力、城市燃气、蒸汽和热水",
  "fabricated-metal-products-except-machinery-and-equipment":
    "金属制品（机械设备除外）",
  "fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products":
    "鱼、甲壳类、软体动物及其他水生无脊椎动物产品",
  "food-products-beverages-and-tobacco-textiles-apparel-and-leather-products":
    "食品、饮料、烟草、纺织、服装和皮革产品",
  "forestry-and-logging-products": "林业和采伐产品",
  "general-purpose-machinery": "通用机械",
  "glass-and-glass-products-and-other-non-metallic-products-n-e-c":
    "玻璃及玻璃制品和其他未分类非金属产品",
  "grain-mill-products-starches-and-starch-products-other-food-products":
    "谷物加工品、淀粉及淀粉制品和其他食品",
  "knitted-or-crocheted-fabrics-wearing-apparel": "针织或钩编织物及服装",
  "leather-and-leather-products-footwear": "皮革、皮革制品及鞋类",
  "live-animals-and-animal-products-excluding-meat":
    "活体动物及动物产品（肉类除外）",
  "meat-fish-fruits-vegetables-oils-and-fats": "肉类、鱼类、果蔬和油脂",
  "medical-appliances-precision-and-optical-instruments-watches-and-clocks":
    "医疗器械、精密及光学仪器和钟表",
  "metal-products-machinery-and-equipment": "金属产品、机械和设备",
  "office-accounting-and-computing-machinery": "办公、会计和计算设备",
  "ores-and-minerals-electricity-gas-and-water": "矿石、矿物、电力、燃气和水",
  "other-chemical-products-man-made-fibres": "其他化学品和人造纤维",
  "other-transportable-goods-except-metal-products-machinery-and-equipment":
    "其他可运输货物（金属产品和机械设备除外）",
  "products-of-agriculture-horticulture-and-market-gardening":
    "农业、园艺和商品蔬菜种植产品",
  "pulp-paper-and-paper-products-printed-matter-and-related-articles":
    "纸浆、纸及纸制品、印刷品和相关产品",
  "radio-television-and-communication-equipment-and-apparatus":
    "广播、电视和通信设备",
  "research-and-development-services": "研发服务",
  "special-purpose-machinery": "专用机械",
  "telecommunications-broadcasting-and-information-supply-services":
    "电信、广播和信息提供服务",
  "textile-articles-other-than-apparel": "服装以外的纺织制品",
  "tobacco-products": "烟草制品",
  "wastes-or-scraps": "废物或废料",
  "yarn-and-thread-woven-and-tufted-textile-fabrics": "纱线、机织和簇绒织物",
};
export function categoryTitle(slug: string, language: string) {
  if (language === "zh-CN" && zh[slug]) return zh[slug]!;
  return slug
    .split("-")
    .map((word) => word[0]?.toUpperCase() + word.slice(1))
    .join(" ");
}
