const modules = [
  {
    id: 1,
    section: "表一",
    title: "Waldorf Astoria / 审美来源",
    en: "Founder Credibility",
    image: "data/pdf_images/image_4.jpg",
    focus: "把 Waldorf Astoria 与高端私宅、住宅、酒店、公区或 FF&E 经验，转化成 BW 的设计判断来源。",
    requirements: "公开表达、项目清单、判断提炼、市场连接。需要 2-4 个最能代表设计判断的项目。",
    reason: "客户最终信任的不是大项目名称，而是这些项目里形成的审美判断、比例、材料、工艺和空间气质。",
    output: "Founder story、About Page、homepage credibility、产品页 designer note。",
    tags: ["可信度", "创始人", "审美判断"],
  },
  {
    id: 2,
    section: "表一",
    title: "从设计师到 BW 创始人",
    en: "Designer to Founder",
    image: "data/pdf_images/image_4.jpg",
    focus: "解释高端空间设计经验如何自然转化成 BW 的选品、供应链、品控和客户理解能力。",
    requirements: "用“过去经验 -> 形成能力 -> 对 BW 的价值”回答，并选出最重要的 3-5 条转化路径。",
    reason: "BW 的核心不能只是卖货，而是把审美判断、材料判断、项目经验和供应链经验转化成客户选择。",
    output: "品牌因果链、长期定位、创始人叙事。",
    tags: ["转化路径", "能力差异", "定位"],
  },
  {
    id: 3,
    section: "表一",
    title: "市场空缺 / 2-3 年后的更新",
    en: "Market Gap",
    image: "data/pdf_images/image_6.jpg",
    focus: "复盘 BW 做了 2-3 年后，美国市场真正缺什么，以及早期判断哪些被验证、哪些需要更新。",
    requirements: "四段回答：最初判断、被验证判断、需要更新判断、现在最确定的机会。",
    reason: "如果市场空缺只是理论判断，品牌会空；真实订单、客户行为和失败案例能让定位有力量。",
    output: "首页文案、FAQ、产品页卖点、社媒教育内容。",
    tags: ["市场缺口", "客户痛点", "机会收窄"],
  },
  {
    id: 4,
    section: "表一",
    title: "BW 市场位置 / 多角度排序",
    en: "Positioning Map",
    image: "data/pdf_images/image_6.jpg",
    focus: "从价格、审美、价值、信任、交付和商业模式多维度判断 BW 到底站在哪里。",
    requirements: "每组排序前 3，标出最接近 BW 的 1 个和最不适合 BW 的 1 个。",
    reason: "BW 的位置不能只用价格定义，否则会在家具电商、设计品牌、供应链平台和工坊故事之间摇摆。",
    output: "品牌坐标、价格解释、业务边界。",
    tags: ["定位", "价格带", "商业模式"],
  },
  {
    id: 5,
    section: "表一",
    title: "竞品生态位",
    en: "Competitor Map",
    image: "data/pdf_images/image_7.jpg",
    focus: "比较 Nathan James、Crate & Barrel、Castlery、The Citizenry、Arhaus、Homary 等品牌，判断客户为何比较、为何购买或放弃。",
    requirements: "逐个品牌回答为什么看、为什么买、为什么不买、BW 怎么赢、BW 怎么输、BW 学什么。",
    reason: "这能看清 BW 和谁抢客户、抢信任、抢审美位置，以及哪些竞品只能学不能像。",
    output: "竞品定位、产品页 FAQ、价格解释、退换政策、社媒内容。",
    tags: ["竞品", "差异化", "客户比较"],
  },
  {
    id: 6,
    section: "表一",
    title: "选品标准 + 淘汰标准",
    en: "Trust Narrative",
    image: "data/pdf_images/image_7.jpg",
    focus: "判断一件家具是否值得进入 BW，而不是只看起来不错。",
    requirements: "每个维度同时写入选标准和淘汰标准，给真实例子，排出最重要的 5 个标准。",
    reason: "BW 真正的壁垒不是找到产品，而是形成可持续筛选、拒绝和解释产品的判断系统。",
    output: "团队选品标准、产品页逻辑、供应链筛选。",
    tags: ["选品", "淘汰", "标准化"],
  },
  {
    id: 7,
    section: "表一",
    title: "品控团队",
    en: "Trust Narrative",
    image: "data/pdf_images/image_7.jpg",
    focus: "把客户看不见的供应链能力，变成客户可以感知的信任。",
    requirements: "拆解下单、生产、中检、出厂、包装、发货、到货流程；列关键检查点和风险排序。",
    reason: "客户不只担心 dropshipping，更担心图物不符、运输损坏、售后没人负责和海外质量不可控。",
    output: "Trust section、FAQ、product page、email update、交付说明。",
    tags: ["品控", "信任", "流程"],
  },
  {
    id: 8,
    section: "表一",
    title: "工坊 / Maker / 材料工艺",
    en: "Maker & Material",
    image: "data/pdf_images/image_8.jpg",
    focus: "判断哪些工坊、maker 或材料工艺最能代表 BW 的长期价值，而不只是供应商。",
    requirements: "筛出 2-3 个值得长期讲的工坊或 maker，拆解品类、材料、工艺、稀缺性、稳定性和故事点。",
    reason: "工坊叙事不能停留在匠人精神，需要解释产品为什么更好、为什么值得更高价格。",
    output: "Makers 页面、产品详情、社媒内容、工艺短视频、trade client 沟通。",
    tags: ["工坊", "材料", "故事资产"],
  },
  {
    id: 9,
    section: "表二",
    title: "产品差异化",
    en: "Product Difference",
    image: "data/pdf_images/image_8.jpg",
    focus: "从客户感受角度说明 BW 产品和 Wayfair、Amazon、淘宝货、普通工厂货的差异。",
    requirements: "按看图、近距离、使用中、空间里、购买后、表达上六层回答，并排序最重要的 3 个差异点。",
    reason: "产品差异不能停在内部判断，要变成客户能看见、摸到、用到和相信的价值。",
    output: "产品页、detail shot、FAQ、社媒内容、广告表达。",
    tags: ["产品力", "材料", "客户感知"],
  },
  {
    id: 10,
    section: "表二",
    title: "30-40 天交付周期",
    en: "Delivery Narrative",
    image: "data/pdf_images/image_8.jpg",
    focus: "把 30-40 天交付从风险解释成 BW 在快家具和高端定制之间的合理位置。",
    requirements: "说明制作、质检、包装、运输、到货流程；分别对 homeowner 和 designer/trade client 写客户文案。",
    reason: "客户不是不能等，而是不能接受不知道为什么等。透明流程会增加信任。",
    output: "交付页、邮件状态更新、产品页交付说明。",
    tags: ["交付", "等待价值", "风险解释"],
  },
  {
    id: 11,
    section: "表二",
    title: "品牌红黑榜",
    en: "Brand Language Boundary",
    image: "data/pdf_images/image_9.jpg",
    focus: "确认 BW 品牌语言应该靠近什么、避免什么，并建立长期表达边界。",
    requirements: "红榜选最重要前 5 并排序，黑榜选最需要避免前 5 并排序，再定义 3 个主气质。",
    reason: "品牌语言决定客户把 BW 理解成 design brand，还是普通家具电商。",
    output: "网站、Instagram、Pinterest、产品页和邮件的统一语气。",
    tags: ["语言边界", "品牌气质", "表达系统"],
  },
  {
    id: 12,
    section: "表二",
    title: "用户画像",
    en: "Customer Segments",
    image: "data/pdf_images/image_9.jpg",
    focus: "按购买动机而不是年龄收入，判断 BW 最应该先服务哪几类客户。",
    requirements: "选出最值得优先服务的 3 类客户，回答是谁、为什么买、担心什么、被什么打动、适合推什么产品。",
    reason: "真正有用的用户画像来自动机、焦虑、预算边界和信任障碍，而不是泛泛人口属性。",
    output: "用户画像、首页分层文案、产品推荐逻辑。",
    tags: ["客户", "购买动机", "画像"],
  },
  {
    id: 13,
    section: "表二",
    title: "客户买 BW 到底买什么",
    en: "Customer Value",
    image: "data/pdf_images/image_10.jpg",
    focus: "客户买 BW 本质上是在买哪一种价值：产品、空间、审美、信任、效率、身份、稀缺、价格确定或故事。",
    requirements: "选前 5 个最重要价值，确定核心 1 个，并说明最强价值组合是哪 2-3 层。",
    reason: "这决定 BW 是卖产品、卖空间、卖审美、卖信任，还是卖 access。",
    output: "首页 hero、产品页卖点、广告角度、社媒内容。",
    tags: ["客户价值", "购买理由", "卖点"],
  },
  {
    id: 14,
    section: "表二",
    title: "一句话品牌定义",
    en: "Brand Definition",
    image: "data/pdf_images/image_10.jpg",
    focus: "用消费者版、Trade 版、合作伙伴版三种方式定义 Blue & White。",
    requirements: "每版回答 BW 是什么、服务谁、解决什么、凭什么可信、和普通家具平台有什么不同；每版 1-2 句话。",
    reason: "品牌定义会变成 homepage hero、About 开头、Instagram bio 和 pitch summary 的基础。",
    output: "品牌一句话、不同受众版本、对外 pitch。",
    tags: ["品牌定义", "一句话", "对外表达"],
  },
];

const fullText = {
  1: {
    question: [
      "请聚焦 Waldorf Astoria，以及你其他高端私宅 / FF&E 项目，说明这些经历如何塑造了你后来做 BW 的设计判断。",
      "角色边界：你在 Waldorf Astoria 项目中最准确、可公开的角色与参与范围是什么？",
      "项目类型：除了 Waldorf，你过去做过哪些高端私宅、住宅、酒店、公区或 FF&E 项目，真正影响了你对家具和空间的判断？",
      "审美训练：这些项目如何训练了你对比例、尺度、材料、光感、色彩、收口、舒适度和 luxury standard 的判断？",
      "FFE 经验：你在私宅或高端项目里的 FF&E 经验，是否让你更早看到美国家具市场的空位？具体是什么？",
      "市场观察：你对 BW 生态位的判断，更多来自 Waldorf 这类 luxury project，还是来自私宅客户真实购买家具时遇到的问题？",
      "转化路径：从这些项目经验里，哪些判断最后变成了 BW 的选品标准、品控标准和品牌气质？",
    ],
    requirements: [
      "公开表达：请写清楚 Waldorf 相关经历可以如何公开表达，哪些地方需要谨慎。",
      "项目清单：请列 2-4 个最能代表你设计判断的项目，包括 Waldorf 和其他私宅 / FF&E 项目。",
      "判断提炼：每个项目请提炼 1-2 个具体设计判断，例如比例、材料、工艺、舒适度、空间气质。",
      "市场连接：请说明这些经验如何让你看到 BW 可以服务的市场空位。",
    ],
    reason: [
      "核心背书：Waldorf Astoria 设计总监经历是 BW 最高级的 founder credibility，但它不能只作为头衔出现，需要转化成具体的审美标准和产品判断。",
      "真实来源：BW 的市场洞察可能不只来自 Waldorf，也来自你多年做私宅、FF&E、客户选品和供应链协调看到的真实问题。",
      "品牌资产：客户最终信任的不是某个大项目名字，而是你从这些项目里形成的判断能力：什么是高级比例、什么材料经得起看、什么家具放进真实住宅里成立。",
      "叙事深度：这一模块会决定 BW 的 Founder Story、About Page、homepage credibility、产品页 designer note 的底层质量。",
    ],
  },
  2: {
    question: [
      "你从高端空间设计转向 Blue & White，真正的因果链是什么？",
      "设计经验：哪些高端项目经验，可以直接转化成 BW 的品牌能力？",
      "选品能力：你如何把空间设计里的判断，转化成家具筛选标准？",
      "供应链判断：你过去和供应商、工坊、材料方合作的经验，如何帮助你判断家具品质？",
      "客户理解：你是否在设计服务中看到客户买家具时的痛点？",
      "创业动因：BW 对你来说，是一个家具电商、一个设计策展平台，还是一个把高端设计经验产品化的入口？",
    ],
    requirements: [
      "因果结构：请按“过去经验 -> 形成能力 -> 对 BW 的价值”回答。",
      "优先排序：请选出最重要的 3-5 条转化路径。",
      "能力差异：请说明哪些能力是普通 seller、buyer、dropshipper 不具备的。",
      "一句判断：最后用一句话说明：为什么 BW 适合由你这样背景的人来做。",
    ],
    reason: [
      "因果清晰：这题不是问“为什么创业”，而是要讲清楚设计师身份如何自然长出 BW。",
      "能力迁移：BW 的核心不是卖货，而是把你的审美判断、材料判断、项目经验和供应链经验转化成客户可购买的选择。",
      "品牌区分：如果这条因果链讲不清，BW 容易被看成普通海外家具网站，而不是 designer-led curated brand。",
      "长期定位：这个答案会影响 BW 未来是走“家具零售”“设计师策展”“供应链平台”还是“高端审美 access”的路线。",
    ],
  },
  3: {
    question: [
      "BW 做了 2-3 年后，你现在认为美国市场真正缺什么？哪些早期判断被验证，哪些需要更新？",
      "最初机会：你最早认为美国市场缺的是价格、设计、材料、工艺、供应链，还是可信选择？",
      "真实验证：过去订单、客户咨询、成交失败、售后问题里，哪些反馈证明这个机会真实存在？",
      "认知变化：这 2-3 年里，你对美国消费者、家具价格带、审美偏好、交付期待有没有新的理解？",
      "客户痛点：客户真正卡住的是“不知道去哪买”，还是“不相信质量”，还是“觉得好看的都太贵”？",
      "机会收窄：现在看来，BW 最应该抓住的是哪个细分机会，而不是泛泛做“高端家具”？",
      "错误判断：过去有没有哪个判断你现在觉得不够准确？",
    ],
    requirements: [
      "四段回答：请分成：最初判断 / 被验证的判断 / 需要更新的判断 / 现在最确定的机会。",
      "真实证据：请尽量给 2 个真实订单、客户对话、失败案例或市场观察。",
      "优先排序：请排序：价格、设计、材料、品控、交付、独特性、信任、选择效率。",
      "一句结论：请用一句话说明：今天的 BW 最应该解决美国市场里的哪个具体问题。",
    ],
    reason: [
      "实战更新：早期的 affordable luxury / designer look at mid price 是一个起点，但 2-3 年实操后的真实反馈更重要。",
      "市场校准：如果市场空缺只是理论判断，品牌会空；如果能用真实订单和客户行为验证，定位才有力量。",
      "战略取舍：BW 不能同时解决所有家具市场问题，需要知道哪个痛点最值得先抓。",
      "内容转化：客户真实痛点会直接转化成首页文案、FAQ、产品页卖点和社媒教育内容。",
    ],
  },
  4: {
    question: [
      "请从多个维度判断 BW 到底站在哪个位置。",
      "价格带：核心价位：$500-$2,000 中高端家具。高于平台货：高于 Wayfair / Amazon / Homary。接近中高端：接近或略低于 Crate & Barrel / Castlery。低于奢华零售：明显低于 RH / Perigold / Arhaus。",
      "审美带：安静奢华 Quiet luxury。温暖极简 Warm minimalism。亚洲当代 Contemporary Asian design。自然材料 Natural material driven。全球工艺 Global artisan。杂志空间 Editorial interior。",
      "价值带：设计师筛选：减少客户筛选成本。材料可信：比普通平台货更有质感。品控确定：降低海外家具不确定性。款式独特：避免 mass-market 同质化。合理奢华：用更合理价格接近 designer look。",
      "信任带：Founder 信任：来自 Nico 的高端设计背景。品控信任：来自团队的检查流程。工坊信任：来自真实 maker / workshop。内容信任：来自透明材料、工艺、交付说明。",
      "交付带：比快家具慢：不是即时平台货。比高端定制快：30-40 天是优势。适合等待型产品：客户愿意为独特性、材料和品控等待。",
      "商业模式：策展品牌 Curated furniture brand。设计师平台 Designer-selected platform。按需制作 Made-to-order / small-batch brand。Trade 友好 Trade-friendly sourcing platform。",
    ],
    requirements: [
      "分组排序：每组请排序前 3。",
      "核心定位：每组标出最接近 BW 的 1 个。",
      "排除选项：每组标出最不适合 BW 的 1 个。",
      "补充判断：如果你觉得有更准确的维度或词，请补充。",
    ],
    reason: [
      "全局坐标：BW 的位置不能只用价格定义，还要同时看审美、信任、交付、价值和商业模式。",
      "避免摇摆：如果这些维度没有排序，BW 会在“家具电商”“设计品牌”“供应链平台”“工坊故事”之间来回摇摆。",
      "价格解释：$500-$2,000 不是自动成立，需要说明客户为什么不买更便宜的，也为什么不必买更贵的。",
      "未来弹性：这些维度未来可以随市场变化调整，但现在需要先建立一个可迭代坐标系。",
    ],
  },
  5: {
    question: [
      "客户买 BW 时，也可能会看 Nathan James、Crate & Barrel、Castlery、The Citizenry、Arhaus、Homary。请判断：他们为什么会被一起比较？BW 靠什么赢，又可能输在哪里？",
      "为什么看它：价格、风格、品类、广告、品牌信任，哪一点让客户把它和 BW 放在一起看？",
      "为什么买它：它满足了客户什么需求？便宜、快、方便、可靠、好看、高端、选择多？",
      "为什么不买：它最大的短板是什么？太普通、太贵、太慢、太平台、太装饰、质量不够、缺少故事？",
      "客户印象：客户第一眼觉得它是什么类型？方便型、价格型、审美型、高端型、工艺型、平台型？",
      "BW 怎么赢：BW 靠什么超过它？设计、材料、品控、独特性、价格、服务、故事、空间效果？",
      "BW 怎么输：BW 最可能输在哪里？现货、退换、知名度、页面信任、产品数量、客户教育？",
      "学什么：BW 可以学它的网站、产品展示、信任机制、分类、内容、退换、价格表达里的哪一点？",
      "避开什么：BW 不适合像它的什么？平台感、促销感、淘宝感、dropshipping 感、太大众、太贵、太快消？",
    ],
    requirements: [
      "逐个品牌：每个品牌回答：为什么看 / 为什么买 / 为什么不买 / BW 怎么赢 / BW 怎么输 / BW 学什么。",
      "类型归类：每个品牌可归入：价格、审美、信任、交付、工艺、品类、网站体验。",
      "最后排序：选出 2 个最值得学的品牌、2 个最需要区分的品牌、1 个最接近 BW 未来方向的品牌。",
    ],
    reason: [
      "客户视角：客户只会比较谁更好看、更可信、更方便、更值得买。",
      "定位判断：这题能看清 BW 和谁抢客户、抢信任、抢审美位置。",
      "优劣清楚：BW 要知道面对每个品牌，哪里赢，哪里输。",
      "学习边界：可以学习对手，但不能学到失去 BW 的气质。",
      "落地价值：答案会影响网站、产品页、FAQ、价格解释、退换政策、社媒内容。",
    ],
  },
  6: {
    question: [
      "当你看一件家具时，你如何判断它是否“值得进入 BW”，而不是只是“看起来不错”？",
      "空间成立：这件家具放进美国住宅、私宅、公寓或 hospitality 空间里，是否真的成立？",
      "比例高级：它的尺寸、线条、体量、留白和视觉重心是否经得起看？",
      "材料真实：材料是否有触感、重量、耐用性和可被客户感知的价值？",
      "工艺近看：细节、边角、收口、结构、软包、漆面是否经得起近距离观察？",
      "风格克制：它是否有记忆点，但不会过度造型、网红化或很快过时？",
      "品牌一致：它是否符合 BW 的 calm luxury / curated / material-driven 气质？",
      "交付可控：生产稳定性、包装难度、运输风险、售后成本是否可控？",
      "淘汰触发：什么情况会让你即使利润不错也不选？",
    ],
    requirements: [
      "双向回答：每个维度请同时写入选标准和淘汰标准。",
      "真实例子：每个维度最少配 1 个具体产品，或过去看过但没选的例子。",
      "优先排序：请选择最重要的 5 个标准，并说明为什么。",
      "底线判断：请列出 3 个最不适合妥协的选品底线。",
    ],
    reason: [
      "判断系统：BW 真正的壁垒不是找到产品，而是形成一套能持续筛选、拒绝和解释产品的判断系统。",
      "品牌边界：选品标准决定 BW 像不像一个 designer-led brand；淘汰标准决定 BW 会不会滑向 Amazon 感、淘宝感或批发感。",
      "客户价值：客户买 BW，本质上是把复杂判断交给 Nico 和 BW 团队，所以标准需要清楚。",
      "长期复用：如果这套标准能沉淀下来，未来团队、网站、产品页、AI 内容和供应链筛选都可以复用。",
    ],
  },
  7: {
    question: [
      "BW 的品控系统如何把“看不见的供应链能力”变成客户可以感知的信任？",
      "风险地图：从下单到交付，哪些环节最容易出问题？",
      "高端损伤：哪些问题最容易破坏高级感：色差、尺寸、漆面、结构、软包、石材纹理、木纹、五金、包装、运输损伤？",
      "检查机制：品控团队在哪些节点介入，如何判断产品可以继续推进或需要返工？",
      "真实教训：过去最典型的质量问题是什么？现在系统如何避免重演？",
      "客户感知：哪些品控动作可以在网站、产品页、邮件或售后流程中被客户感知？",
      "信任表达：如果客户问“我怎么相信这件家具到手不会翻车”，BW 应该怎么回答？",
    ],
    requirements: [
      "流程拆解：请按下单 -> 生产 -> 中检 -> 出厂 -> 包装 -> 发货 -> 到货，写出关键检查点。",
      "风险排序：请列 5 个最重要、最容易影响客户体验的质量风险。",
      "案例复盘：请给 1-2 个真实质量问题，以及现在如何预防。",
      "客户语言：请给一句普通客户能听懂的品控信任表达。",
    ],
    reason: [
      "信任核心：客户不只担心 dropshipping，更担心图片和实物不符、运输损坏、售后没人负责、海外质量不可控。",
      "高客单风险：家具是低容错产品，一次质量事故就会伤害品牌；品控能力需要成为 BW 的可见资产。",
      "品牌溢价：$500-$2,000 的价格需要信任支撑，品控团队是 BW 与普通海外平台货的重要区别。",
      "叙事转化：这部分未来会进入 trust section、FAQ、product page、email update 和交付说明，而不是只停留在内部流程。",
    ],
  },
  8: {
    question: [
      "哪些工坊、maker 或材料工艺最能代表 BW 的长期价值，而不仅仅是“供应商”？",
      "代表性：哪些工坊最能代表 BW 想呈现的审美、材料和工艺方向？",
      "品类能力：他们最强的是木作、藤编、石材、金属、软包、户外，还是定制？",
      "材料语言：他们的材料有什么可被客户理解和感知的价值？",
      "工艺壁垒：有什么工艺不是普通工厂轻易能做出来的？",
      "稳定交付：他们是否能稳定生产、控制质量、配合包装和交付？",
      "故事价值：他们有没有城市、师傅、工艺历史、制作过程、材料来源可以被讲述？",
      "客户理解：这个故事讲出来后，客户会更愿意买，还是只觉得“听起来不错”？",
      "内容资产：哪些工坊适合放进 About / Makers / Journal / Product Page 长期讲？",
    ],
    requirements: [
      "工坊筛选：请列 2-3 个最值得长期讲的工坊或 maker。",
      "完整拆解：每个工坊请回答：品类、材料、工艺、稀缺性、稳定性、故事点、代表产品。",
      "素材补充：请补充城市、照片、视频、制作过程、材料细节等线索。",
      "商业判断：请说明这些工坊故事是否能帮助客户下单，而不只是增加品牌氛围。",
    ],
    reason: [
      "不只是故事：工坊叙事不能停留在“匠人精神”，它要解释产品为什么更好、为什么值得付更高价格。",
      "供应链资产：真正有价值的 maker 不是一次性供应商，而是可以反复支撑 BW 审美、品控和内容的长期资产。",
      "客户可理解：如果客户听不懂工艺价值，故事就不能转化；如果能听懂，它就会提升信任和购买理由。",
      "品牌延展：这一模块会支撑 Makers 页面、产品详情、社媒内容、工艺短视频和未来 trade client 沟通。",
    ],
  },
  9: {
    question: [
      "从客户感受角度出发：BW 的产品和 Wayfair、Amazon、淘宝货、普通工厂货有什么差异？",
      "第一眼：客户看图时，是否能感到比例、气质、风格完整度不同？",
      "近距离：材料、收口、边角、漆面、软包、木纹、石材纹理，哪些细节经得起看？",
      "使用中：舒适度、稳定性、耐用性、尺寸合理性，和普通平台货有什么区别？",
      "空间里：它是否能让房间更像 designer interior，而不只是“摆了一件家具”？",
      "购买后：包装、运输、售后、沟通，是否能让客户觉得更放心？",
      "表达上：这些差异能不能通过图片、detail shot、视频、文字被客户理解？",
    ],
    requirements: [
      "逐层回答：请按上面 6 层分别回答：BW 好在哪里 / 普通平台货常见问题是什么 / 客户如何感受到。",
      "对象对比：请至少对比 2-3 类对象：Wayfair、Amazon、淘宝货、普通工厂货。不要只笼统说“平台货”。",
      "具体例子：每个层面尽量配一个产品、材料、细节或真实客户反馈。",
      "核心差异排序：请先从上面 6 层提炼具体差异点，再选出最重要的 3 个，按重要性排序。这里排序的是“差异点”，不是“层面”。例如：不是排序“第一眼 / 近距离 / 使用中”，而是排序“比例更高级 / 材料更真实 / 品控更可靠”。",
      "产品页表达：把这 3 个差异点各写成一句客户能听懂的产品页卖点。",
    ],
    reason: [
      "感知价值：产品差异不能停留在内部判断，要变成客户能看见、摸到、用到、相信的价值。",
      "价格理由：$500-$2,000 的客户一定会问：为什么不买更便宜的？这题要给出答案。",
      "页面转化：这些答案会进入产品页、detail shot、FAQ、社媒内容和广告表达。",
      "品牌区分：如果差异讲不清，BW 会被误解成普通 overseas furniture reseller。",
    ],
  },
  10: {
    question: [
      "BW 的 30-40 天交付周期，应该如何定位？它比快家具慢，但比传统高端定制快，这个位置怎么讲清楚？",
      "时间结构：这 30-40 天里，制作、整理、质检、包装、运输分别发生什么？",
      "价值解释：客户等到的是什么？是 made-to-order、small batch、品控、材料处理、定制感，还是更稳定的交付？",
      "相比快家具：和 Wayfair / Amazon 这类快速平台比，BW 为什么不是“慢”，而是“更认真、更可控”？",
      "相比高端定制：和 RH / 高端定制家具比，BW 快在哪里？这个效率来自哪里？",
      "产品边界：哪些产品值得客户等 30-40 天？哪些产品不值得？",
      "客户心理：客户最可能担心什么？等太久、货不对、运输损坏、没人负责，还是过程不透明？",
      "沟通机制：下单后，BW 应该如何用邮件、页面、状态更新，让客户觉得过程可控？",
    ],
    requirements: [
      "流程说明：请按制作 / 质检 / 包装 / 运输 / 到货，写出真实流程。可以粗略，不需要精确到每天。",
      "双向定位：请分别回答：相比快家具，BW 的等待价值是什么；相比高端定制，BW 的效率优势是什么。",
      "适合产品：请列 2-3 类适合 30-40 天交付的产品，以及 1-2 类不适合让客户等待的产品。",
      "风险回应：请列出客户最可能担心的 3 个问题，并写出 BW 应该如何提前解释。",
      "客户文案：请写两句话：一句给普通 homeowner，看完知道为什么值得等；一句给 designer / trade client，看完知道这个周期为什么可控、可安排。",
    ],
    reason: [
      "定位关键：30-40 天不能被简单解释成 shipping time，它是 BW 在“快家具”和“高端定制”之间的位置。",
      "心理解释：客户不是不能等，而是不能接受“不知道为什么等”。",
      "信任建设：如果过程透明，等待会增加信任；如果过程不透明，等待会变成风险。",
      "选品边界：不是所有产品都值得客户等，这题也会反向影响未来选品。",
    ],
  },
  11: {
    question: [
      "BW 的品牌语言应该靠近什么，避开什么？请确认下面红榜和黑榜是否准确，并做优先级排序。",
      "红榜：希望靠近 Quiet luxury、Warm minimalism、Contemporary Asian design、Designer-selected、Curated、Natural materials、Hand-finished、Editorial interior、Timeless、Small batch / Workshop-made。",
      "黑榜：需要避开 Amazon 感、淘宝感、Dropshipping 感、Factory direct 感、Wholesale 感、Discount store 感、促销广告感、Cheap / Budget、Generic catalog look、无品控转卖感。",
    ],
    requirements: [
      "红榜排序：请从红榜 10 个词里选出最重要的前 5 个，并排序。其余词可以保留为辅助气质。",
      "黑榜排序：请从黑榜 10 个词里选出最重要要避免的前 5 个，并排序。其余词可以作为禁区补充。",
      "主气质：请用 3 个词定义 BW 最核心的品牌气质。可以从红榜里选，也可以自己补充。",
      "最大误解：请写一句：BW 最不希望被客户误解成什么。",
      "补充空间：如果红榜或黑榜有不准确的词，请直接删、改、补。",
    ],
    reason: [
      "语言边界：品牌语言决定客户把 BW 理解成 design brand，还是普通家具电商。",
      "价格预期：一旦语言像促销、批发或 dropshipping，客户会自动压低价格预期。",
      "视觉一致：网站、Instagram、Pinterest、产品页、邮件都需要统一语气。",
      "长期识别：红黑榜不是文案装饰，而是未来所有内容和销售表达的边界。",
    ],
  },
  12: {
    question: [
      "BW 最应该先服务哪几类客户？请按购买动机，而不是年龄收入来判断。",
      "请从以下用户动机里判断：空间升级型：想把家做得更高级，但不想请全案设计师。RH 替代型：喜欢高端感，但觉得 RH 太贵、太重、太常见。审美认同型：喜欢自然材料、安静空间、亚洲当代审美。设计师采购型：需要可靠但不普通的产品来源。民宿酒店型：想用家具提升空间溢价和入住体验。新房装修型：刚买房，预算有限，但审美要求高。反同质化型：厌倦 Wayfair、Amazon、Crate & Barrel 常见款。省心决策型：有预算，但没时间筛选家具、工坊、供应商。信任焦虑型：想买特别家具，但怕质量、运输、售后不可控。设计参与型：不一定请设计师，但希望自己参与打造一个有品味的家。小型商业型：餐厅、工作室、会所、精品空间，需要有记忆点的家具。",
    ],
    requirements: [
      "优先选择：请选出最值得优先服务的前 3 类客户。",
      "客户拆解：每类回答：他们是谁 / 为什么买 / 最担心什么 / 被什么打动 / 适合推什么产品。",
      "真实对应：请补充过去真实客户里最接近的人或案例。",
      "排除对象：请说明哪类客户现在不适合 BW 优先服务。",
      "未来潜力：请标出哪类客户现在未必最大，但未来值得培养。",
    ],
    reason: [
      "用户基石：这会成为 BW 未来用户画像的基础，不只是这次网站文案使用。",
      "动机优先：真正有用的用户画像不是年龄收入，而是动机、焦虑、预算边界和信任障碍。",
      "早期聚焦：BW 早期不能服务所有人，需要先找到最容易被打动、最可能下单的人。",
      "内容分层：homeowner、designer、hospitality owner、小型商业客户关心的东西不同，页面语言也应该不同。",
    ],
  },
  13: {
    question: [
      "客户买 BW，本质上是在买哪一种价值？请排序。",
      "产品层：不是只买“好看的家具”，而是买更有比例、材料和细节完成度的产品。",
      "空间层：不是单件家具，而是让家更接近 designer interior 的整体空间效果。",
      "审美层：不是自己盲选，而是获得 Nico 筛选后的 taste 和判断。",
      "信任层：不用自己判断工厂、材料、质量、运输和售后风险。",
      "效率层：省掉找货、比价、筛供应商、踩坑和反复退换的时间。",
      "身份层：表达自己不想买普通 mass-market furniture，而是有审美选择的人。",
      "稀缺层：拥有美国市场不常见、但又能进入真实生活空间的产品。",
      "价值层：用更合理价格接近 luxury / designer look，而不是为大品牌溢价买单。",
      "确定层：获得更稳定的品控、交付、沟通和售后确定性。",
      "故事层：买到的不只是物件，也包括工坊、材料、设计来源和背后的选择逻辑。",
    ],
    requirements: [
      "价值排序：请选出前 5 个最重要价值。",
      "核心价值：请选出最核心的 1 个，并说明为什么。",
      "客户语言：每一层写一句客户心里可能会说的话。",
      "成交区分：请标出哪一层最能促成下单，哪一层更适合做品牌叙事。",
      "组合判断：请说明 BW 最强的价值组合是哪 2-3 层。",
    ],
    reason: [
      "价值核心：这题决定 BW 是卖产品、卖空间、卖审美、卖信任，还是卖 access。",
      "成交判断：不是所有价值都能促成下单，有些适合品牌包装，有些才是真正购买理由。",
      "高毛利基础：能支撑溢价的通常不是“便宜”，而是信任、审美、稀缺、省心和空间效果。",
      "表达系统：这个答案会影响首页 hero、产品页卖点、广告角度和社媒内容。",
    ],
  },
  14: {
    question: [
      "请用 3 种方式定义 Blue & White。",
      "消费者版：给普通消费者看的版本。",
      "Trade 版：给 interior designer / trade client 看的版本。",
      "合作版：给合作伙伴 / 投资人看的版本。",
    ],
    requirements: [
      "三版回答：请分别写消费者版、Trade 版、合作版。",
      "内容结构：每版尽量回答：BW 是什么 / 服务谁 / 解决什么 / 凭什么可信 / 和普通家具平台有什么不同。",
      "长度控制：每版 1-2 句话。",
      "避免泛词：尽量不用“致力于”“赋能”“高品质生活”这类空泛词。",
      "具体差异：每版至少包含一个具体差异点：Waldorf 审美、curation、工坊、品控、材料、交付。",
    ],
    reason: [
      "防空话：如果只问 slogan，很容易得到漂亮但无效的 GPT 文案。",
      "定义清楚：真正有用的品牌定义必须包含对象、价值、信任来源和差异点。",
      "场景分开：消费者、设计师、合作伙伴听到的重点不一样，不能只用同一句话。",
      "落地直接：这个答案会变成 homepage hero、About 开头、Instagram bio、pitch summary 的基础。",
    ],
  },
};

const supportPhrases = {
  1: {
    requirements: [
      ["Waldorf 公开说法", "需要谨慎的边界"],
      ["2-4 个代表项目", "Waldorf / 私宅 / FF&E"],
      ["每项目 1-2 个判断", "比例 / 材料 / 工艺 / 舒适度 / 空间气质"],
      ["BW 可服务的市场空位"],
    ],
    reason: [
      ["Waldorf 设计总监经历", "Founder credibility", "转化为审美标准 / 产品判断"],
      ["私宅与 FF&E 经验", "客户选品问题", "供应链协调问题"],
      ["客户信任的不是项目名", "信任判断能力", "高级比例 / 材料耐看 / 住宅成立"],
      ["Founder Story", "About Page", "Homepage credibility", "产品页 designer note"],
    ],
  },
  2: {
    requirements: [
      ["过去经验", "形成能力", "对 BW 的价值"],
      ["3-5 条核心转化路径"],
      ["普通 seller 不具备的能力", "普通 buyer 不具备的能力", "普通 dropshipper 不具备的能力"],
      ["为什么 BW 适合由你来做"],
    ],
    reason: [
      ["不是泛泛创业故事", "设计师身份如何长出 BW"],
      ["审美判断", "材料判断", "项目经验", "供应链经验"],
      ["避免普通海外家具网站感", "建立 designer-led curated brand"],
      ["家具零售", "设计师策展", "供应链平台", "高端审美 access"],
    ],
  },
  3: {
    requirements: [
      ["最初判断", "被验证判断", "需要更新判断", "现在最确定机会"],
      ["真实订单", "客户对话", "失败案例", "市场观察"],
      ["价格 / 设计 / 材料", "品控 / 交付 / 独特性", "信任 / 选择效率"],
      ["今天 BW 最该解决的问题"],
    ],
    reason: [
      ["实操 2-3 年后的反馈", "比早期判断更重要"],
      ["真实订单验证", "客户行为验证", "定位更有力量"],
      ["不能解决所有问题", "先抓最值得的痛点"],
      ["首页文案", "FAQ", "产品页卖点", "社媒教育内容"],
    ],
  },
  4: {
    requirements: [
      ["每组前 3 排序"],
      ["每组最接近 BW 的 1 个"],
      ["每组最不适合 BW 的 1 个"],
      ["补充更准确维度或词"],
    ],
    reason: [
      ["不只用价格定义", "同时看审美 / 信任 / 交付 / 价值 / 商业模式"],
      ["避免定位摇摆", "家具电商 / 设计品牌 / 供应链平台 / 工坊故事"],
      ["解释 $500-$2,000", "为什么不买更便宜", "为什么不必买更贵"],
      ["先建立坐标系", "未来持续迭代"],
    ],
  },
  5: {
    requirements: [
      ["为什么看", "为什么买", "为什么不买", "BW 怎么赢 / 怎么输 / 学什么"],
      ["价格 / 审美 / 信任", "交付 / 工艺 / 品类 / 网站体验"],
      ["2 个最值得学", "2 个最需要区分", "1 个最接近未来方向"],
    ],
    reason: [
      ["客户只比较结果", "更好看 / 更可信 / 更方便 / 更值得买"],
      ["抢客户", "抢信任", "抢审美位置"],
      ["哪里赢", "哪里输"],
      ["可以学对手", "不能失去 BW 气质"],
      ["网站 / 产品页 / FAQ", "价格解释 / 退换政策 / 社媒内容"],
    ],
  },
  6: {
    requirements: [
      ["选入标准", "淘汰标准"],
      ["每维度一个产品例子", "或一个未选例子"],
      ["最重要 5 个标准", "原因排序"],
      ["3 个不可妥协底线"],
    ],
    reason: [
      ["持续筛选", "持续拒绝", "持续解释产品"],
      ["designer-led brand 边界", "避免 Amazon / 淘宝 / 批发感"],
      ["客户把复杂判断交给 BW", "标准必须清楚"],
      ["团队复用", "网站复用", "产品页 / AI 内容 / 供应链筛选复用"],
    ],
  },
  7: {
    requirements: [
      ["下单", "生产", "中检", "出厂", "包装", "发货", "到货"],
      ["5 个关键质量风险"],
      ["1-2 个真实质量问题", "现在如何预防"],
      ["一句客户能听懂的信任表达"],
    ],
    reason: [
      ["图物不符", "运输损坏", "售后没人负责", "海外质量不可控"],
      ["家具低容错", "一次事故伤品牌", "品控变可见资产"],
      ["$500-$2,000 的信任支撑", "区别普通海外平台货"],
      ["trust section", "FAQ", "product page", "email update", "交付说明"],
    ],
  },
  8: {
    requirements: [
      ["2-3 个长期工坊 / maker"],
      ["品类 / 材料 / 工艺", "稀缺性 / 稳定性 / 故事点 / 代表产品"],
      ["城市", "照片 / 视频", "制作过程", "材料细节"],
      ["是否帮助客户下单", "不只是品牌氛围"],
    ],
    reason: [
      ["不止匠人精神", "解释产品为什么更好", "解释为什么更值得"],
      ["长期供应链资产", "支撑审美 / 品控 / 内容"],
      ["客户听得懂工艺价值", "提升信任与购买理由"],
      ["Makers 页面", "产品详情", "社媒内容", "工艺短视频", "trade client 沟通"],
    ],
  },
  9: {
    requirements: [
      ["6 层逐层回答", "BW 好在哪里", "平台货常见问题", "客户如何感受"],
      ["Wayfair", "Amazon", "淘宝货", "普通工厂货"],
      ["产品 / 材料 / 细节", "真实客户反馈"],
      ["3 个核心差异点", "按重要性排序"],
      ["3 句产品页卖点"],
    ],
    reason: [
      ["客户看得见", "摸得到", "用得上", "相信得了"],
      ["为什么不买更便宜", "$500-$2,000 的理由"],
      ["产品页", "detail shot", "FAQ", "社媒 / 广告表达"],
      ["避免 ordinary overseas reseller"],
    ],
  },
  10: {
    requirements: [
      ["制作", "质检", "包装", "运输", "到货"],
      ["相比快家具的等待价值", "相比高端定制的效率优势"],
      ["适合等待的 2-3 类产品", "不适合等待的 1-2 类产品"],
      ["3 个客户担心", "提前解释方式"],
      ["homeowner 文案", "designer / trade client 文案"],
    ],
    reason: [
      ["不是单纯 shipping time", "快家具与高端定制之间的位置"],
      ["客户不是不能等", "客户怕不知道为什么等"],
      ["透明过程增加信任", "不透明等待变风险"],
      ["反向影响选品边界"],
    ],
  },
  11: {
    requirements: [
      ["红榜前 5", "按重要性排序"],
      ["黑榜前 5", "按禁区优先级排序"],
      ["3 个核心品牌气质"],
      ["最不希望被误解成什么"],
      ["删 / 改 / 补不准确词"],
    ],
    reason: [
      ["design brand", "避免普通家具电商感"],
      ["避免促销 / 批发 / dropshipping 语气", "保护价格预期"],
      ["网站", "Instagram", "Pinterest", "产品页", "邮件"],
      ["未来内容与销售表达边界"],
    ],
  },
  12: {
    requirements: [
      ["前 3 类优先客户"],
      ["他们是谁", "为什么买", "担心什么", "被什么打动", "适合什么产品"],
      ["真实客户对应案例"],
      ["现在不优先服务的客户"],
      ["未来值得培养的客户"],
    ],
    reason: [
      ["未来用户画像基础"],
      ["动机", "焦虑", "预算边界", "信任障碍"],
      ["早期聚焦", "最容易被打动", "最可能下单"],
      ["homeowner", "designer", "hospitality owner", "小型商业客户"],
    ],
  },
  13: {
    requirements: [
      ["前 5 个重要价值"],
      ["最核心 1 个", "为什么"],
      ["每层一句客户心里话"],
      ["促成下单的价值", "适合品牌叙事的价值"],
      ["最强 2-3 层价值组合"],
    ],
    reason: [
      ["卖产品 / 空间 / 审美", "卖信任 / access"],
      ["区分下单理由", "区分品牌包装"],
      ["信任", "审美", "稀缺", "省心", "空间效果"],
      ["首页 hero", "产品页卖点", "广告角度", "社媒内容"],
    ],
  },
  14: {
    requirements: [
      ["消费者版", "Trade 版", "合作版"],
      ["BW 是什么", "服务谁", "解决什么", "凭什么可信", "有什么不同"],
      ["每版 1-2 句话"],
      ["避免空泛词"],
      ["Waldorf 审美", "curation", "工坊", "品控", "材料", "交付"],
    ],
    reason: [
      ["避免漂亮但无效的 slogan"],
      ["对象", "价值", "信任来源", "差异点"],
      ["消费者重点", "设计师重点", "合作伙伴重点"],
      ["homepage hero", "About 开头", "Instagram bio", "pitch summary"],
    ],
  },
};

const state = {
  query: "",
  phase: "all",
  view: "structure",
  selectedId: 1,
  selectedPrompt: { kind: "question", index: 1 },
  sourceImage: "data/pdf_images/image_4.jpg",
};

const els = {
  search: document.querySelector("#search"),
  phase: document.querySelector("#phase"),
  view: document.querySelector("#view"),
  cards: document.querySelector("#cards"),
  resultCount: document.querySelector("#result-count"),
  overviewHero: document.querySelector("#overview-hero"),
  structure: document.querySelector("#structure-view"),
  table: document.querySelector("#table-view"),
  diagram: document.querySelector("#diagram-view"),
  source: document.querySelector("#source-view"),
  detailKicker: document.querySelector("#detail-kicker"),
  detailTitle: document.querySelector("#detail-title"),
  detailMeta: document.querySelector("#detail-meta"),
  selectedQuestion: document.querySelector("#selected-question"),
  notes: document.querySelector("#notes"),
  imageUpload: document.querySelector("#image-upload"),
  fontSize: document.querySelector("#font-size"),
  fontColor: document.querySelector("#font-color"),
  prompt: document.querySelector("#prompt"),
  clear: document.querySelector("#clear"),
  export: document.querySelector("#export"),
  answerExport: document.querySelector("#answer-export"),
  answerImport: document.querySelector("#answer-import"),
  syncStatus: document.querySelector("#sync-status"),
};

const syncState = {
  online: false,
  mode: "local",
};

function normalize(value) {
  return String(value || "").trim().toLowerCase();
}

function filteredModules() {
  const query = normalize(state.query);
  return modules.filter((item) => {
    const phaseMatch = state.phase === "all" || item.section === state.phase;
    const text = [
      item.id,
      item.section,
      item.title,
      item.en,
      item.focus,
      item.requirements,
      item.reason,
      item.output,
      item.tags.join(" "),
    ]
      .join(" ")
      .toLowerCase();
    return phaseMatch && (!query || text.includes(query));
  });
}

function selectedModule() {
  return modules.find((item) => item.id === state.selectedId) || modules[0];
}

function noteKey(id = state.selectedId, prompt = state.selectedPrompt) {
  return `bw-whitepaper-note-${id}-${prompt.kind}-${prompt.index}`;
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function saveCurrentNote() {
  try {
    localStorage.setItem(noteKey(), els.notes.innerHTML);
  } catch (error) {
    console.warn("Unable to save this note locally.", error);
  }
}

function setNoteHtml(html) {
  els.notes.innerHTML = html || "";
}

function noteText() {
  return els.notes.innerText.replace(/\u00a0/g, " ").trim();
}

function noteHtmlFor(id, prompt) {
  return localStorage.getItem(noteKey(id, prompt)) || "";
}

function supabaseConfig() {
  return window.BW_SUPABASE || {};
}

function supabaseProjectId() {
  return supabaseConfig().projectId || "nico-bw-whitepaper";
}

function canUseSupabase() {
  const config = supabaseConfig();
  return Boolean(config.url && config.anonKey);
}

function supabaseUrl(path) {
  return `${supabaseConfig().url.replace(/\/$/, "")}${path}`;
}

async function supabaseFetch(path, options = {}) {
  const response = await fetch(supabaseUrl(path), {
    ...options,
    headers: {
      apikey: supabaseConfig().anonKey,
      authorization: `Bearer ${supabaseConfig().anonKey}`,
      "content-type": "application/json",
      ...(options.headers || {}),
    },
  });
  if (!response.ok) {
    const detail = await response.text();
    throw new Error(detail || `Supabase request failed: ${response.status}`);
  }
  if (response.status === 204) return null;
  return response.json();
}

function toSupabaseAnswer(answer) {
  return {
    id: answer.key,
    project_id: supabaseProjectId(),
    module_id: answer.moduleId,
    module_title: answer.moduleTitle,
    question_index: answer.questionIndex,
    question: answer.question,
    html: answer.html,
    updated_at: new Date().toISOString(),
  };
}

function fromSupabaseRows(rows) {
  return {
    type: "bw-whitepaper-answers",
    version: 1,
    exportedAt: new Date().toISOString(),
    answers: (rows || []).map((row) => ({
      key: row.id,
      moduleId: row.module_id,
      moduleTitle: row.module_title,
      questionIndex: row.question_index,
      question: row.question,
      html: row.html,
    })),
  };
}

function canUseSharedApi() {
  return window.location.protocol === "http:" || window.location.protocol === "https:";
}

function setSyncStatus(text, mode = "") {
  if (!els.syncStatus) return;
  els.syncStatus.textContent = text;
  els.syncStatus.className = `sync-status ${mode}`.trim();
}

function isMissingSupabaseTable(error) {
  const message = String(error?.message || "");
  return message.includes("PGRST205") || message.includes("Could not find the table");
}

async function apiJson(path, options = {}) {
  const response = await fetch(path, {
    ...options,
    headers: {
      "content-type": "application/json",
      ...(options.headers || {}),
    },
  });
  if (!response.ok) {
    const detail = await response.text();
    throw new Error(detail || `Request failed: ${response.status}`);
  }
  return response.json();
}

function answerStorageKeys() {
  const keys = [];
  modules.forEach((item) => {
    fullText[item.id].question.forEach((_, index) => {
      keys.push(noteKey(item.id, { kind: "question", index }));
    });
  });
  return keys;
}

function currentAnswersPayload() {
  const answers = [];
  modules.forEach((item) => {
    fullText[item.id].question.forEach((question, index) => {
      const key = noteKey(item.id, { kind: "question", index });
      const html = localStorage.getItem(key) || "";
      if (!html) return;
      answers.push({
        key,
        moduleId: item.id,
        moduleTitle: item.title,
        questionIndex: index,
        question,
        html,
      });
    });
  });
  return {
    type: "bw-whitepaper-answers",
    version: 1,
    exportedAt: new Date().toISOString(),
    answers,
  };
}

function applyAnswersPayload(payload) {
  if (payload.type !== "bw-whitepaper-answers" || !Array.isArray(payload.answers)) {
    throw new Error("Invalid answer package.");
  }
  const allowed = new Set(answerStorageKeys());
  payload.answers.forEach((answer) => {
    if (!allowed.has(answer.key)) return;
    localStorage.setItem(answer.key, String(answer.html || ""));
  });
}

async function loadSharedAnswers() {
  if (canUseSupabase()) {
    try {
      const project = encodeURIComponent(supabaseProjectId());
      const rows = await supabaseFetch(
        `/rest/v1/bw_whitepaper_answers?project_id=eq.${project}&select=id,module_id,module_title,question_index,question,html,updated_at`,
      );
      applyAnswersPayload(fromSupabaseRows(rows));
      syncState.online = true;
      syncState.mode = "supabase";
      setSyncStatus("Supabase同步", "online");
      return;
    } catch (error) {
      console.warn("Supabase answer sync is unavailable.", error);
      syncState.online = false;
      syncState.mode = "local";
      setSyncStatus(isMissingSupabaseTable(error) ? "Supabase需建表" : "Supabase错误", "error");
      return;
    }
  }

  if (!canUseSharedApi()) {
    setSyncStatus("本地模式");
    return;
  }
  try {
    const payload = await apiJson("/api/whitepaper/answers");
    applyAnswersPayload(payload);
    syncState.online = true;
    syncState.mode = "server";
    setSyncStatus("在线同步", "online");
  } catch (error) {
    console.warn("Shared answer API is unavailable.", error);
    syncState.online = false;
    syncState.mode = "local";
    setSyncStatus("离线草稿", "error");
  }
}

function htmlToText(html) {
  const box = document.createElement("div");
  box.innerHTML = html || "";
  return box.innerText.replace(/\u00a0/g, " ").trim();
}

function imagesFromHtml(html) {
  const box = document.createElement("div");
  box.innerHTML = html || "";
  return Array.from(box.querySelectorAll("img"))
    .map((image) => image.src)
    .filter(Boolean);
}

function lineParts(line) {
  const match = String(line).match(/^([^：:]{2,28})[：:](.+)$/);
  return {
    title: match ? match[1] : "",
    body: match ? match[2].trim() : String(line),
    full: String(line),
  };
}

function isMobileViewport() {
  return window.matchMedia("(max-width: 720px)").matches;
}

function scrollToPanel(element) {
  if (!element || !isMobileViewport()) return;
  window.requestAnimationFrame(() => {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function selectModule(id) {
  state.selectedId = id;
  state.selectedPrompt = { kind: "question", index: 1 };
  state.sourceImage = selectedModule().image;
  render();
  scrollToPanel(els.structure);
}

function selectPrompt(kind, index) {
  state.selectedPrompt = { kind, index };
  render();
  scrollToPanel(document.querySelector(".detail-panel"));
}

function promptLinesFor(item, kind) {
  if (kind === "requirements") return [item.requirements, ...fullText[item.id].requirements];
  if (kind === "reason") return [item.reason, ...fullText[item.id].reason];
  return fullText[item.id].question;
}

function selectedPromptDetail() {
  const item = selectedModule();
  const groupLabels = {
    question: "问 Nico 的问题",
    requirements: "回答要求",
    reason: "提问原因",
  };
  const lines = promptLinesFor(item, state.selectedPrompt.kind);
  const index = Math.min(state.selectedPrompt.index, lines.length - 1);
  const line = lines[index] || "";
  const match = String(line).match(/^([^：:]{2,28})[：:](.+)$/);
  return {
    item,
    kind: state.selectedPrompt.kind,
    index,
    group: groupLabels[state.selectedPrompt.kind],
    title: match ? match[1] : groupLabels[state.selectedPrompt.kind],
    text: line,
    body: match ? match[2].trim() : line,
  };
}

function renderCards(items) {
  const selected = selectedModule();
  const visibleIds = new Set(items.map((item) => item.id));
  const sectionMeta = {
    "表一": {
      title: "品牌根基与商业位置",
      subtitle: "Why BW Exists",
    },
    "表二": {
      title: "用户价值与外部表达",
      subtitle: "Why People Buy",
    },
  };

  els.cards.innerHTML = `
    <section class="toc-overview">
      <p class="side-label">总领</p>
      <h3>品牌叙事与商业定位白皮书</h3>
      <p>从总领开始，向右逐层进入表一/表二、模块、最后的问题和回答。</p>
    </section>
    ${["表一", "表二"]
      .map((section) => {
        const sectionModules = modules.filter((item) => item.section === section);
        return `
          <section class="toc-block ${selected.section === section ? "active" : ""}">
            <button class="toc-section" data-section="${section}" type="button">
              <span>${section}</span>
              <strong>${sectionMeta[section].title}</strong>
              <small>${sectionMeta[section].subtitle}</small>
            </button>
            <div class="toc-module-list">
              ${sectionModules
                .map(
                  (item) => `
                    <button class="${visibleIds.has(item.id) ? "" : "is-dim"} ${item.id === selected.id ? "active" : ""}" data-id="${item.id}" type="button">
                      <span>${item.id}</span>
                      <strong>${item.title}</strong>
                    </button>
                  `,
                )
                .join("")}
            </div>
          </section>
        `;
      })
      .join("")}
  `;

  els.cards.querySelectorAll("button[data-id]").forEach((button) => {
    button.addEventListener("click", () => selectModule(Number(button.dataset.id)));
  });

  els.cards.querySelectorAll("button[data-section]").forEach((button) => {
    button.addEventListener("click", () => {
      state.phase = button.dataset.section;
      els.phase.value = state.phase;
      selectModule(modules.find((item) => item.section === state.phase).id);
    });
  });
}

function appendIdea(text) {
  const prefix = noteText() ? "<p><br></p>" : "";
  els.notes.insertAdjacentHTML("beforeend", `${prefix}<p>- ${escapeHtml(text)}</p>`);
  saveCurrentNote();
  renderCards(filteredModules());
}

function inspirationFor(item) {
  const common = {
    evidence: [
      "真实项目 / 真实订单：用一个具体案例支撑判断。",
      "客户原话：找一句客户真实说过的担心或期待。",
      "失败经验：写出过去哪里踩过坑，以及现在如何避免。",
      "对比对象：明确 BW 和普通平台货或高端品牌的差别。",
    ],
    outputs: [
      "首页一句话：把这个判断压缩成 hero 或 subhead。",
      "产品页卖点：写成客户能看懂的一句 benefit。",
      "FAQ 回答：把客户疑虑变成问答。",
      "社媒教育：拆成一条 Instagram / Pinterest 内容。",
    ],
  };

  const byId = {
    1: {
      angles: ["从头衔转成审美判断", "从项目经验转成客户信任", "从 Waldorf 转成 BW 的选择标准"],
      next: ["哪些经历可以公开？", "哪个项目最能证明 taste？", "能不能给出一个材料或比例判断？"],
    },
    2: {
      angles: ["过去经验 -> 能力 -> BW 价值", "设计师身份不是包装，而是筛选系统", "把高端项目经验产品化"],
      next: ["哪些能力是普通 seller 没有的？", "BW 到底更像策展还是供应链？", "一句话因果链是什么？"],
    },
    3: {
      angles: ["最初判断 vs 现在判断", "市场空缺从理论变成订单证据", "从泛高端家具收窄成具体机会"],
      next: ["哪个客户痛点最常出现？", "过去哪个判断需要修正？", "现在最确定的机会是什么？"],
    },
    4: {
      angles: ["价格不是定位，信任和审美才是坐标", "在快家具和高端定制之间找位置", "先排除 BW 不是什么"],
      next: ["最接近 BW 的 3 个坐标是什么？", "最不适合 BW 的标签是什么？", "价格带怎么解释才不显得贵？"],
    },
    5: {
      angles: ["客户为什么把这些品牌放一起比", "BW 赢在哪里，输在哪里", "哪些竞品只学方法不学气质"],
      next: ["最值得学的品牌是哪两个？", "最需要区分的品牌是哪两个？", "BW 最容易输给谁？"],
    },
    6: {
      angles: ["选品标准和淘汰标准成对出现", "审美、材料、工艺、交付一起判断", "把 Nico 的 taste 变成团队可执行标准"],
      next: ["哪 3 条底线不能妥协？", "哪些产品即使利润好也不选？", "一个典型入选产品是什么？"],
    },
    7: {
      angles: ["把看不见的品控变成看得见的信任", "从风险地图倒推客户沟通", "用质量事故反向建立机制"],
      next: ["客户最怕哪类翻车？", "哪个节点最应该可视化？", "一句客户听得懂的品控承诺是什么？"],
    },
    8: {
      angles: ["maker 不是供应商，是长期内容资产", "工艺故事必须解释为什么更好", "材料价值要能被客户理解"],
      next: ["哪 2-3 个工坊值得长期讲？", "有什么普通工厂做不出的工艺？", "故事能不能帮助客户下单？"],
    },
    9: {
      angles: ["差异必须从客户感受出发", "把材料和细节翻译成购买理由", "不是更贵，而是更可信、更完整"],
      next: ["最强 3 个差异点是什么？", "和 Wayfair/Amazon 的差别怎么一句话讲清？", "哪个 detail shot 最该拍？"],
    },
    10: {
      angles: ["30-40 天不是慢，是过程可控", "等待价值来自制作、品控和独特性", "用透明流程消除不确定"],
      next: ["客户最怕等什么？", "哪些产品值得等？", "给 homeowner 和 designer 的说法分别是什么？"],
    },
    11: {
      angles: ["语言决定客户把 BW 看成什么", "红榜靠近气质，黑榜划清边界", "避免促销感和 dropshipping 感"],
      next: ["最核心 3 个品牌气质是什么？", "最不能出现的 5 个词是什么？", "BW 最大误解是什么？"],
    },
    12: {
      angles: ["用户画像按动机，不按年龄收入", "先找最容易被打动的人", "不同用户对应不同页面语言"],
      next: ["最优先 3 类客户是谁？", "哪类客户现在不适合优先服务？", "哪个真实客户最能代表画像？"],
    },
    13: {
      angles: ["客户买的是价值组合，不只是家具", "成交价值和品牌价值分开看", "信任、审美、省心、稀缺谁最核心"],
      next: ["最强价值组合是哪 2-3 层？", "哪一层最能促成下单？", "客户心里会怎么说这件事？"],
    },
    14: {
      angles: ["一句话定义要按受众分版本", "定义必须包含对象、价值、信任和差异", "避免漂亮但空的 slogan"],
      next: ["消费者版最该强调什么？", "Trade 版最该强调什么？", "合作版最该强调什么？"],
    },
  };

  const specific = byId[item.id] || { angles: [], next: [] };
  return {
    angles: specific.angles,
    evidence: common.evidence,
    outputs: common.outputs,
    next: specific.next,
  };
}

function renderTable(items) {
  els.table.innerHTML = `
    <table class="module-table">
      <thead>
        <tr>
          <th>模块</th>
          <th>问 Nico 的问题</th>
          <th>回答要求</th>
          <th>提问原因</th>
          <th>输出位置</th>
        </tr>
      </thead>
      <tbody>
        ${items
          .map(
            (item) => `
              <tr data-id="${item.id}">
                <td><strong>${item.id}. ${item.title}</strong><div class="tag-row">${item.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div></td>
                <td>${renderTextList(fullText[item.id].question)}</td>
                <td>${renderTextList(fullText[item.id].requirements)}</td>
                <td>${renderTextList(fullText[item.id].reason)}</td>
                <td>${item.output}</td>
              </tr>
            `,
          )
          .join("")}
      </tbody>
    </table>
  `;

  els.table.querySelectorAll("tr[data-id]").forEach((row) => {
    row.addEventListener("click", () => selectModule(Number(row.dataset.id)));
  });
}

function renderTextList(lines) {
  return `<div class="text-list">${lines.map((line) => `<p>${renderRichLine(line)}</p>`).join("")}</div>`;
}

function renderReadableBlock(title, lines, options = {}) {
  const displayLines = options.lead ? [options.lead, ...lines] : lines;
  return `
    <section class="readable-section ${options.className || ""}">
      <h4>${title}</h4>
      <div class="readable-grid">
        ${displayLines
          .map((line, index) => {
            const isActive = state.selectedPrompt.kind === options.kind && state.selectedPrompt.index === index;
            if (index === 0) {
              return `
                <article class="readable-item readable-lead">
                  <p>${renderRichLine(line)}</p>
                </article>
              `;
            }
            return `
              <button class="readable-item ${isActive ? "active" : ""}" data-prompt-kind="${options.kind}" data-prompt-index="${index}" type="button">
                <p>${renderRichLine(line)}</p>
              </button>
            `;
          })
          .join("")}
      </div>
    </section>
  `;
}

function renderSupportColumn(title, lines, compactLines = []) {
  return `
    <section class="support-column">
      <h3>${title}</h3>
      <ul class="support-list">
        ${lines.map((line, index) => renderSupportLine(line, compactLines[index])).join("")}
      </ul>
    </section>
  `;
}

function supportBullets(body, compact = []) {
  if (Array.isArray(compact) && compact.length) {
    return compact.map((item) => String(item).trim()).filter(Boolean);
  }
  const cleaned = String(body || "").trim().replace(/[。.]$/, "");
  if (!cleaned) return [];
  const primaryParts = cleaned
    .split(/[；;]/)
    .map((part) => part.trim())
    .filter(Boolean);
  return primaryParts
    .flatMap((part) =>
      part
        .split(/[，,]/)
        .map((chunk) => chunk.trim())
        .filter(Boolean),
    )
    .map((chunk) => chunk.replace(/^[。；，,\s]+|[。；，,\s]+$/g, ""))
    .filter(Boolean);
}

function renderSupportLine(line, compact) {
  const parts = lineParts(line);
  const bullets = supportBullets(parts.body, compact);
  return `
    <li class="support-item">
      ${parts.title ? `<strong class="support-title">${escapeHtml(parts.title)}：</strong>` : ""}
      <ul class="support-bullets">
        ${bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}
      </ul>
    </li>
  `;
}

function renderRichLine(line) {
  const match = String(line).match(/^([^：:]{2,28}[：:])(.+)$/);
  if (!match) return line;
  return `<strong class="line-title">${match[1]}</strong><span class="line-copy">${match[2].trim()}</span>`;
}

function renderStructure(items) {
  const selected = selectedModule();

  els.structure.innerHTML = `
    <article class="module-preview final-only">
      <p class="side-label">最终问题层</p>
      <h3>${selected.id}. ${selected.title}</h3>
      <div class="final-question-content">
        ${renderReadableBlock("问 Nico 的问题", fullText[selected.id].question, {
          kind: "question",
          className: "question-block",
        })}
      </div>
    </article>
  `;

  els.structure.querySelectorAll("button[data-prompt-kind]").forEach((button) => {
    button.addEventListener("click", () => {
      selectPrompt(button.dataset.promptKind, Number(button.dataset.promptIndex));
    });
  });
}

function renderDiagram(items) {
  const sections = ["表一", "表二"];
  els.diagram.innerHTML = `
    <div class="diagram">
      ${sections
        .map((section) => {
          const sectionItems = items.filter((item) => item.section === section);
          const description =
            section === "表一"
              ? "建立 BW 凭什么成立：审美来源、市场位置、竞品、选品、品控与工坊。"
              : "建立 BW 为什么被购买：差异、交付、语言、用户、价值与一句话定义。";
          return `
            <section class="diagram-lane">
              <div class="lane-title">
                <strong>${section}</strong>
                <span>${description}</span>
              </div>
              <div class="node-grid">
                ${sectionItems
                  .map(
                    (item) => `
                      <button class="node" data-id="${item.id}" type="button">
                        <b>${item.id}. ${item.title}</b>
                        <small>${item.focus}</small>
                      </button>
                    `,
                  )
                  .join("")}
              </div>
            </section>
          `;
        })
        .join("")}
    </div>
  `;

  els.diagram.querySelectorAll("button[data-id]").forEach((button) => {
    button.addEventListener("click", () => selectModule(Number(button.dataset.id)));
  });
}

function renderDiagram(items) {
  const sections = ["表一", "表二"];
  els.diagram.innerHTML = `
    <div class="diagram">
      ${sections
        .map((section) => {
          const sectionItems = items.filter((item) => item.section === section);
          const description =
            section === "表一"
              ? "建立 BW 凭什么成立：审美来源、市场位置、竞品、选品、品控与工坊。"
              : "建立 BW 为什么被购买：差异、交付、语言、用户、价值与一句话定义。";
          return `
            <section class="diagram-lane">
              <div class="lane-title">
                <strong>${section}</strong>
                <span>${description}</span>
              </div>
              <div class="node-grid">
                ${sectionItems
                  .map(
                    (item) => `
                      <button class="node" data-id="${item.id}" type="button">
                        <b>${item.id}. ${item.title}</b>
                        <small>${item.focus}</small>
                      </button>
                    `,
                  )
                  .join("")}
              </div>
            </section>
          `;
        })
        .join("")}
    </div>
  `;

  els.diagram.querySelectorAll("button[data-id]").forEach((button) => {
    button.addEventListener("click", () => selectModule(Number(button.dataset.id)));
  });
}

function renderSource() {
  const images = [
    "data/pdf_images/image_4.jpg",
    "data/pdf_images/image_11.jpg",
    "data/pdf_images/image_6.jpg",
    "data/pdf_images/image_7.jpg",
    "data/pdf_images/image_8.jpg",
    "data/pdf_images/image_12.jpg",
    "data/pdf_images/image_13.jpg",
    "data/pdf_images/image_9.jpg",
    "data/pdf_images/image_10.jpg",
  ];
  const selected = selectedModule();
  els.source.innerHTML = `
    <div class="source-layout">
      <div class="source-nav">
        ${images
          .map((image) => {
            const covered = modules
              .filter((item) => item.image === image)
              .map((item) => item.id)
              .join(", ");
            const label = covered ? `模块 ${covered}` : "目录 / 完整标题";
            return `<button class="${image === state.sourceImage ? "active" : ""}" data-image="${image}" type="button">原图 ${image.split("/").pop()}<br />${label}</button>`;
          })
          .join("")}
      </div>
      <div class="source-image-wrap" aria-label="PDF 原图证据">
        <img src="${state.sourceImage}" alt="PDF 原图证据：${selected.title}" />
      </div>
    </div>
  `;

  els.source.querySelectorAll("button[data-image]").forEach((button) => {
    button.addEventListener("click", () => {
      state.sourceImage = button.dataset.image;
      render();
    });
  });
}

function renderDetail() {
  const item = selectedModule();
  const selectedPrompt = selectedPromptDetail();
  els.detailKicker.textContent = `${item.section} · Module ${item.id} · ${item.en} · ${selectedPrompt.group}`;
  els.detailTitle.textContent = "";
  els.detailMeta.innerHTML = `
    <div class="answer-context-grid">
      ${renderSupportColumn("回答要求", fullText[item.id].requirements, supportPhrases[item.id]?.requirements)}
      ${renderSupportColumn("提问原因", fullText[item.id].reason, supportPhrases[item.id]?.reason)}
    </div>
  `;
  if (els.selectedQuestion) {
    els.selectedQuestion.innerHTML = `
      <p>当前问题</p>
      <div>${renderRichLine(selectedPrompt.text)}</div>
    `;
  }
  setNoteHtml(localStorage.getItem(noteKey(item.id, state.selectedPrompt)) || "");
}

function render() {
  const items = filteredModules();
  if (!items.find((item) => item.id === state.selectedId) && items[0]) {
    state.selectedId = items[0].id;
    state.sourceImage = items[0].image;
  }

  renderOverviewHero();
  els.resultCount.textContent = `${items.length} / ${modules.length}`;
  renderCards(items);
  renderStructure(items);
  renderTable(items);
  renderDiagram(items);
  renderSource();
  renderDetail();

  els.structure.hidden = state.view !== "structure";
  els.table.hidden = state.view !== "table";
  els.diagram.hidden = state.view !== "diagram";
  els.source.hidden = state.view !== "source";
}

function renderOverviewHero() {
  els.overviewHero.innerHTML = `
    <div>
      <p class="eyebrow">总领</p>
      <h2>这份问题表会从品牌叙事视角把控 BW 的全局结构。</h2>
      <div class="hero-copy">
        <ul>
          <li><strong class="line-title">不是标准化问卷：</strong>这是一次战略对齐，也是一套判断系统。</li>
          <li><strong class="line-title">判断目标：</strong>看清 BW 服务谁、解决什么问题、凭什么被信任、产品为什么成立、供应链如何变成品牌资产。</li>
          <li><strong class="line-title">取舍方向：</strong>判断未来在市场变化中应该靠近什么、避开什么。</li>
          <li><strong class="line-title">架构清晰：</strong>每个问题对应 BW 的一个核心模块，不做零散采访。</li>
          <li><strong class="line-title">颗粒度在线：</strong>问题要挖出真实案例、判断标准、客户洞察、失败经验和可转化素材。</li>
          <li><strong class="line-title">保持弹性：</strong>答案不是最终定论，而是未来持续迭代 BW 定位、网站、产品、内容、客户和合作模式的基础版本。</li>
          <li><strong class="line-title">协作方式：</strong>Tian 和 Nico 共同提供判断、案例和取舍，同时保留 Nico 补充新方向、新机会和新理解的空间。</li>
        </ul>
      </div>
    </div>
    <div class="system-card">
      <strong>整体结构</strong>
      <div class="structure-table">
        <div class="structure-row structure-head">
          <span>表格</span>
          <span>副标题</span>
          <span>包含模块</span>
          <span>作用</span>
        </div>
        <div class="structure-row">
          <span>表一</span>
          <span>品牌根基与商业位置</span>
          <span>1-8</span>
          <span><strong>解决 BW 凭什么成立：</strong>Nico 的设计背书、创始逻辑、市场空缺、市场位置、竞品坐标、选品标准、品控信任、工坊资产。</span>
        </div>
        <div class="structure-row">
          <span>表二</span>
          <span>用户价值与外部表达</span>
          <span>9-14</span>
          <span><strong>解决 BW 如何被客户理解和购买：</strong>产品差异、交付叙事、品牌语言、用户画像、客户购买价值、一句话品牌定义。</span>
        </div>
      </div>
    </div>
  `;
}

function applyEditorCommand(command, value = null) {
  els.notes.focus();
  document.execCommand(command, false, value);
  saveCurrentNote();
}

function selectedListElement() {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) return null;
  let node = selection.anchorNode;
  if (node && node.nodeType === Node.TEXT_NODE) node = node.parentElement;
  while (node && node !== els.notes) {
    if (node.tagName === "UL" || node.tagName === "OL") return node;
    node = node.parentElement;
  }
  return null;
}

function applyListStyle(style) {
  els.notes.focus();
  if (style === "ordered") {
    document.execCommand("insertOrderedList", false, null);
  } else {
    document.execCommand("insertUnorderedList", false, null);
  }
  const list = selectedListElement();
  if (list) {
    list.classList.remove("list-disc", "list-circle", "list-dash");
    if (style === "disc") list.classList.add("list-disc");
    if (style === "circle") list.classList.add("list-circle");
    if (style === "dash") list.classList.add("list-dash");
  }
  saveCurrentNote();
}

function uploadCurrentAnswer() {
  saveCurrentNote();
  if (!syncState.online) {
    els.prompt.textContent = "已存本地";
    window.setTimeout(() => {
      els.prompt.textContent = "上传答案";
    }, 1200);
    return;
  }

  const item = selectedModule();
  const selectedPrompt = selectedPromptDetail();
  const answer = {
    key: noteKey(item.id, state.selectedPrompt),
    moduleId: item.id,
    moduleTitle: item.title,
    questionIndex: selectedPrompt.index,
    question: selectedPrompt.text,
    html: els.notes.innerHTML,
  };
  els.prompt.disabled = true;
  els.prompt.textContent = "上传中...";
  const request =
    syncState.mode === "supabase"
      ? supabaseFetch("/rest/v1/bw_whitepaper_answers?on_conflict=id", {
          method: "POST",
          headers: { prefer: "resolution=merge-duplicates,return=representation" },
          body: JSON.stringify(toSupabaseAnswer(answer)),
        })
      : apiJson("/api/whitepaper/answers/upsert", {
          method: "POST",
          body: JSON.stringify(answer),
        });

  request
    .then(() => {
      els.prompt.textContent = "已上传";
      setSyncStatus(syncState.mode === "supabase" ? "Supabase同步" : "在线同步", "online");
    })
    .catch((error) => {
      console.error(error);
      els.prompt.textContent = "上传失败";
      setSyncStatus(isMissingSupabaseTable(error) ? "Supabase需建表" : "同步失败", "error");
    })
    .finally(() => {
      window.setTimeout(() => {
        els.prompt.disabled = false;
        els.prompt.textContent = "上传答案";
      }, 1200);
    });
}

function downloadAnswersPackage() {
  saveCurrentNote();
  const payload = currentAnswersPayload();
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const date = new Date().toISOString().slice(0, 10);
  link.href = url;
  link.download = `BW-whitepaper-answers-${date}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

async function importAnswersPackage(file) {
  const text = await file.text();
  const payload = JSON.parse(text);
  applyAnswersPayload(payload);
  if (syncState.mode === "supabase") {
    const project = encodeURIComponent(supabaseProjectId());
    await supabaseFetch(`/rest/v1/bw_whitepaper_answers?project_id=eq.${project}`, {
      method: "DELETE",
      headers: { prefer: "return=minimal" },
    });
    const answers = currentAnswersPayload().answers.map(toSupabaseAnswer);
    if (answers.length) {
      await supabaseFetch("/rest/v1/bw_whitepaper_answers", {
        method: "POST",
        headers: { prefer: "return=minimal" },
        body: JSON.stringify(answers),
      });
    }
    setSyncStatus("Supabase同步", "online");
  } else if (syncState.mode === "server") {
    await apiJson("/api/whitepaper/answers", {
      method: "PUT",
      body: JSON.stringify(currentAnswersPayload()),
    });
    setSyncStatus("在线同步", "online");
  }
  render();
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result));
    reader.addEventListener("error", () => reject(reader.error));
    reader.readAsDataURL(file);
  });
}

function loadImage(source) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", () => reject(new Error("Image failed to load.")));
    image.src = source;
  });
}

async function compressImageFile(file) {
  const dataUrl = await readFileAsDataUrl(file);
  const image = await loadImage(dataUrl);
  const maxSide = 900;
  const ratio = Math.min(1, maxSide / Math.max(image.naturalWidth, image.naturalHeight));
  const width = Math.max(1, Math.round(image.naturalWidth * ratio));
  const height = Math.max(1, Math.round(image.naturalHeight * ratio));
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d");
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, width, height);
  context.drawImage(image, 0, 0, width, height);
  return canvas.toDataURL("image/jpeg", 0.72);
}

async function insertUploadedImages(files) {
  for (const file of files) {
    if (!file.type.startsWith("image/")) continue;
    const imageUrl = await compressImageFile(file);
    const caption = escapeHtml(file.name.replace(/\.[^.]+$/, ""));
    els.notes.insertAdjacentHTML(
      "beforeend",
      `<figure><img src="${imageUrl}" alt="${caption}" /><figcaption>${caption}</figcaption></figure>`,
    );
  }
  saveCurrentNote();
}

function wrapCanvasText(context, text, maxWidth) {
  const paragraphs = String(text || "").split(/\n/);
  const lines = [];
  paragraphs.forEach((paragraph) => {
    let current = "";
    Array.from(paragraph || " ").forEach((char) => {
      const test = `${current}${char}`;
      if (current && context.measureText(test).width > maxWidth) {
        lines.push(current);
        current = char.trimStart();
      } else {
        current = test;
      }
    });
    lines.push(current);
  });
  return lines;
}

function dataUrlToBytes(dataUrl) {
  const base64 = dataUrl.split(",")[1] || "";
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }
  return bytes;
}

async function renderPdfPages() {
  const item = selectedModule();
  const selectedPrompt = selectedPromptDetail();
  const pageWidth = 1240;
  const pageHeight = 1754;
  const margin = 82;
  const bottom = pageHeight - margin;
  const pages = [];
  let canvas;
  let context;
  let y;

  function startPage() {
    canvas = document.createElement("canvas");
    canvas.width = pageWidth;
    canvas.height = pageHeight;
    context = canvas.getContext("2d");
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, pageWidth, pageHeight);
    y = margin;
  }

  function finishPage() {
    pages.push({
      bytes: dataUrlToBytes(canvas.toDataURL("image/jpeg", 0.92)),
      width: pageWidth,
      height: pageHeight,
    });
  }

  function ensureSpace(height) {
    if (y + height <= bottom) return;
    finishPage();
    startPage();
  }

  function drawRule() {
    ensureSpace(28);
    context.strokeStyle = "#d6e0e6";
    context.lineWidth = 2;
    context.beginPath();
    context.moveTo(margin, y);
    context.lineTo(pageWidth - margin, y);
    context.stroke();
    y += 28;
  }

  function drawText(text, options = {}) {
    const size = options.size || 31;
    const lineHeight = options.lineHeight || Math.round(size * 1.55);
    const indent = options.indent || 0;
    const fontWeight = options.weight || 500;
    context.font = `${fontWeight} ${size}px Inter, Arial, sans-serif`;
    context.fillStyle = options.color || "#64717c";
    const lines = wrapCanvasText(context, text, pageWidth - margin * 2 - indent);
    lines.forEach((line) => {
      ensureSpace(lineHeight);
      context.fillText(line, margin + indent, y);
      y += lineHeight;
    });
    ensureSpace(options.after || 0);
    y += options.after || 0;
  }

  function drawSection(title) {
    drawText(title, { size: 30, weight: 850, color: "#1e5d8f", lineHeight: 42, after: 12 });
  }

  function drawBullet(line) {
    const parts = lineParts(line);
    drawText(`• ${parts.title ? `${parts.title}: ` : ""}${parts.body}`, {
      size: 25,
      weight: 600,
      lineHeight: 38,
      indent: 20,
      after: 8,
    });
  }

  startPage();
  drawText("Blue & White 白皮书工作台", { size: 26, weight: 850, color: "#0f766e", lineHeight: 36 });
  drawText(`${item.section} · Module ${item.id} · ${item.en}`, {
    size: 24,
    weight: 800,
    color: "#64717c",
    lineHeight: 34,
    after: 8,
  });
  drawText(`回答 / 讨论：${item.title}`, { size: 44, weight: 900, color: "#17242d", lineHeight: 58, after: 8 });
  drawRule();
  drawSection("当前选中问题");
  drawText(selectedPrompt.text, { size: 31, weight: 760, color: "#17242d", lineHeight: 48, after: 18 });
  drawSection("回答草稿 / 追问空间");
  drawText(noteText() || "（尚未填写回答草稿）", {
    size: 28,
    weight: 500,
    color: "#4e5d68",
    lineHeight: 44,
    after: 20,
  });

  const images = Array.from(els.notes.querySelectorAll("img")).slice(0, 8);
  for (const imageNode of images) {
    try {
      const image = await loadImage(imageNode.src);
      const maxWidth = pageWidth - margin * 2;
      const maxHeight = 420;
      const ratio = Math.min(maxWidth / image.naturalWidth, maxHeight / image.naturalHeight, 1);
      const width = Math.round(image.naturalWidth * ratio);
      const height = Math.round(image.naturalHeight * ratio);
      ensureSpace(height + 40);
      context.drawImage(image, margin, y, width, height);
      y += height + 28;
    } catch (error) {
      console.warn("Skipping image in PDF.", error);
    }
  }

  drawRule();
  drawSection("回答要求");
  fullText[item.id].requirements.forEach(drawBullet);
  drawRule();
  drawSection("提问原因");
  fullText[item.id].reason.forEach(drawBullet);
  finishPage();
  return pages;
}

async function renderWholeWhitepaperPages() {
  const pageWidth = 1240;
  const pageHeight = 1754;
  const margin = 82;
  const bottom = pageHeight - margin;
  const pages = [];
  let canvas;
  let context;
  let y;

  function startPage() {
    canvas = document.createElement("canvas");
    canvas.width = pageWidth;
    canvas.height = pageHeight;
    context = canvas.getContext("2d");
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, pageWidth, pageHeight);
    y = margin;
  }

  function finishPage() {
    pages.push({
      bytes: dataUrlToBytes(canvas.toDataURL("image/jpeg", 0.92)),
      width: pageWidth,
      height: pageHeight,
    });
  }

  function ensureSpace(height) {
    if (y + height <= bottom) return;
    finishPage();
    startPage();
  }

  function drawRule() {
    ensureSpace(28);
    context.strokeStyle = "#d6e0e6";
    context.lineWidth = 2;
    context.beginPath();
    context.moveTo(margin, y);
    context.lineTo(pageWidth - margin, y);
    context.stroke();
    y += 28;
  }

  function drawText(text, options = {}) {
    const size = options.size || 28;
    const lineHeight = options.lineHeight || Math.round(size * 1.55);
    const indent = options.indent || 0;
    const fontWeight = options.weight || 500;
    context.font = `${fontWeight} ${size}px Inter, Arial, sans-serif`;
    context.fillStyle = options.color || "#64717c";
    const lines = wrapCanvasText(context, text, pageWidth - margin * 2 - indent);
    lines.forEach((line) => {
      ensureSpace(lineHeight);
      context.fillText(line, margin + indent, y);
      y += lineHeight;
    });
    ensureSpace(options.after || 0);
    y += options.after || 0;
  }

  function drawSection(title) {
    drawText(title, { size: 30, weight: 900, color: "#1e5d8f", lineHeight: 42, after: 12 });
  }

  function drawBullet(line) {
    const parts = lineParts(line);
    if (parts.title) {
      drawText(parts.title, { size: 25, weight: 900, color: "#1e5d8f", lineHeight: 34 });
      drawText(`• ${parts.body}`, { size: 25, weight: 520, lineHeight: 38, indent: 18, after: 8 });
    } else {
      drawText(`• ${parts.body}`, { size: 25, weight: 520, lineHeight: 38, indent: 18, after: 8 });
    }
  }

  async function drawAnswerImages(imageSources) {
    for (const source of imageSources.slice(0, 6)) {
      try {
        const image = await loadImage(source);
        const maxWidth = pageWidth - margin * 2;
        const maxHeight = 360;
        const ratio = Math.min(maxWidth / image.naturalWidth, maxHeight / image.naturalHeight, 1);
        const width = Math.round(image.naturalWidth * ratio);
        const height = Math.round(image.naturalHeight * ratio);
        ensureSpace(height + 30);
        context.drawImage(image, margin + 18, y, width, height);
        y += height + 22;
      } catch (error) {
        console.warn("Skipping uploaded answer image in PDF.", error);
      }
    }
  }

  function answerCount() {
    let count = 0;
    modules.forEach((item) => {
      fullText[item.id].question.forEach((_, index) => {
        if (noteHtmlFor(item.id, { kind: "question", index })) count += 1;
      });
    });
    return count;
  }

  startPage();
  drawText("Nico BW", { size: 26, weight: 900, color: "#0f766e", lineHeight: 38, after: 8 });
  drawText("Blue & White 白皮书完整导出", {
    size: 54,
    weight: 900,
    color: "#17242d",
    lineHeight: 68,
    after: 12,
  });
  drawText(`包含 14 个模块、全部问题结构，以及 ${answerCount()} 条已上传答案。`, {
    size: 28,
    weight: 700,
    color: "#64717c",
    lineHeight: 42,
    after: 18,
  });
  drawRule();
  drawSection("总领");
  drawText(
    "这份问题表会从品牌叙事视角把控 BW 的全局结构。它不是标准化问卷，而是一次战略对齐，也是一套判断系统：帮助我们看清楚 BW 服务谁、解决什么问题、凭什么被信任、产品为什么成立、供应链如何变成品牌资产，以及未来在市场变化中应该靠近什么、避开什么。",
    { size: 27, weight: 540, lineHeight: 44, after: 12 },
  );
  [
    "架构清晰：每个问题对应 BW 的一个核心模块，不做零散采访。",
    "颗粒度在线：问题要挖出真实案例、判断标准、客户洞察、失败经验和可转化素材。",
    "保持弹性：答案不是最终定论，而是未来持续迭代 BW 定位、网站、产品、内容、客户和合作模式的基础版本。",
  ].forEach(drawBullet);
  drawRule();
  drawSection("整体结构");
  drawBullet("表一：品牌根基与商业位置，包含模块 1-8，解决 BW 凭什么成立。");
  drawBullet("表二：用户价值与外部表达，包含模块 9-14，解决 BW 如何被客户理解和购买。");

  for (const item of modules) {
    ensureSpace(250);
    drawRule();
    drawText(`${item.section} · Module ${item.id} · ${item.en}`, {
      size: 23,
      weight: 850,
      color: "#64717c",
      lineHeight: 34,
    });
    drawText(`${item.id}. ${item.title}`, { size: 40, weight: 900, color: "#17242d", lineHeight: 54, after: 10 });
    drawText(`模块摘要：${item.focus}`, { size: 25, weight: 600, lineHeight: 40, after: 8 });

    drawSection("问 Nico 的问题");
    for (const [index, line] of fullText[item.id].question.entries()) {
      const parts = lineParts(line);
      const label = index === 0 ? "总问题" : parts.title || `问题 ${index}`;
      drawText(label, { size: 27, weight: 900, color: "#1e5d8f", lineHeight: 38 });
      drawText(parts.title ? parts.body : parts.full, { size: 26, weight: 560, lineHeight: 42, after: 8 });

      const answerHtml = noteHtmlFor(item.id, { kind: "question", index });
      const answer = htmlToText(answerHtml);
      if (answer) {
        drawText("已上传答案", { size: 24, weight: 900, color: "#0f766e", lineHeight: 34 });
        drawText(answer, { size: 25, weight: 520, color: "#4e5d68", lineHeight: 40, indent: 18, after: 8 });
        await drawAnswerImages(imagesFromHtml(answerHtml));
      }
    }

    drawSection("回答要求");
    fullText[item.id].requirements.forEach(drawBullet);

    drawSection("提问原因");
    fullText[item.id].reason.forEach(drawBullet);

    drawSection("输出位置");
    drawText(item.output, { size: 25, weight: 560, lineHeight: 40, after: 10 });
  }

  finishPage();
  return pages;
}

function buildPdfFromJpegPages(pages) {
  const encoder = new TextEncoder();
  const pageWidth = 595.28;
  const pageHeight = 841.89;
  const objectCount = 2 + pages.length * 3;
  const objects = new Array(objectCount + 1);
  const pageRefs = pages.map((_, index) => `${3 + index * 3} 0 R`).join(" ");
  objects[1] = { text: "<< /Type /Catalog /Pages 2 0 R >>" };
  objects[2] = { text: `<< /Type /Pages /Kids [${pageRefs}] /Count ${pages.length} >>` };

  pages.forEach((page, index) => {
    const pageObject = 3 + index * 3;
    const contentObject = pageObject + 1;
    const imageObject = pageObject + 2;
    const imageName = `Im${index}`;
    const stream = `q\n${pageWidth} 0 0 ${pageHeight} 0 0 cm\n/${imageName} Do\nQ`;
    const streamBytes = encoder.encode(stream);
    objects[pageObject] = {
      text: `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Resources << /XObject << /${imageName} ${imageObject} 0 R >> >> /Contents ${contentObject} 0 R >>`,
    };
    objects[contentObject] = {
      chunks: [
        encoder.encode(`<< /Length ${streamBytes.length} >>\nstream\n`),
        streamBytes,
        encoder.encode("\nendstream"),
      ],
    };
    objects[imageObject] = {
      chunks: [
        encoder.encode(
          `<< /Type /XObject /Subtype /Image /Width ${page.width} /Height ${page.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${page.bytes.length} >>\nstream\n`,
        ),
        page.bytes,
        encoder.encode("\nendstream"),
      ],
    };
  });

  const chunks = [];
  const offsets = [0];
  let offset = 0;
  const add = (chunk) => {
    chunks.push(chunk);
    offset += chunk.length;
  };
  add(encoder.encode("%PDF-1.4\n%Generated by BW workspace\n"));
  for (let objectNumber = 1; objectNumber <= objectCount; objectNumber += 1) {
    offsets[objectNumber] = offset;
    add(encoder.encode(`${objectNumber} 0 obj\n`));
    if (objects[objectNumber].text) {
      add(encoder.encode(objects[objectNumber].text));
    } else {
      objects[objectNumber].chunks.forEach(add);
    }
    add(encoder.encode("\nendobj\n"));
  }
  const xrefOffset = offset;
  const xrefRows = ["xref", `0 ${objectCount + 1}`, "0000000000 65535 f "];
  for (let objectNumber = 1; objectNumber <= objectCount; objectNumber += 1) {
    xrefRows.push(`${String(offsets[objectNumber]).padStart(10, "0")} 00000 n `);
  }
  add(
    encoder.encode(
      `${xrefRows.join("\n")}\ntrailer\n<< /Size ${objectCount + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`,
    ),
  );
  return new Blob(chunks, { type: "application/pdf" });
}

function safeFilePart(value) {
  return String(value || "")
    .replace(/[\\/:*?"<>|]/g, "")
    .replace(/\s+/g, "-")
    .slice(0, 42);
}

async function downloadWholeWhitepaperPdf() {
  els.export.disabled = true;
  els.export.textContent = "正在生成...";
  try {
    saveCurrentNote();
    await loadSharedAnswers();
    const pages = await renderWholeWhitepaperPages();
    const blob = buildPdfFromJpegPages(pages);
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    const date = new Date().toISOString().slice(0, 10);
    link.href = url;
    link.download = `BW-whitepaper-full-${date}.pdf`;
    link.click();
    URL.revokeObjectURL(url);
    els.export.textContent = "PDF 已生成";
    window.setTimeout(() => {
      els.export.textContent = "导出 PDF";
      els.export.disabled = false;
    }, 1400);
  } catch (error) {
    console.error(error);
    els.export.textContent = "生成失败";
    window.setTimeout(() => {
      els.export.textContent = "导出 PDF";
      els.export.disabled = false;
    }, 1800);
  }
}

els.search.addEventListener("input", (event) => {
  state.query = event.target.value;
  render();
});

els.phase.addEventListener("change", (event) => {
  state.phase = event.target.value;
  render();
});

els.view.addEventListener("change", (event) => {
  state.view = event.target.value;
  render();
});

els.notes.addEventListener("input", () => {
  saveCurrentNote();
});

document.querySelectorAll(".editor-toolbar button[data-command]").forEach((button) => {
  button.addEventListener("click", () => {
    applyEditorCommand(button.dataset.command, button.dataset.value || null);
  });
});

document.querySelectorAll(".editor-toolbar button[data-list]").forEach((button) => {
  button.addEventListener("click", () => {
    applyListStyle(button.dataset.list);
  });
});

els.fontSize.addEventListener("change", (event) => {
  if (!event.target.value) return;
  applyEditorCommand("fontSize", event.target.value);
  event.target.value = "";
});

els.fontColor.addEventListener("input", (event) => {
  applyEditorCommand("foreColor", event.target.value);
});

els.imageUpload.addEventListener("change", async (event) => {
  await insertUploadedImages(Array.from(event.target.files || []));
  event.target.value = "";
});

els.notes.addEventListener("keydown", (event) => {
  if (event.key !== "Tab") return;
  event.preventDefault();
  applyEditorCommand(event.shiftKey ? "outdent" : "indent");
});

els.prompt.addEventListener("click", () => {
  uploadCurrentAnswer();
});

els.clear.addEventListener("click", () => {
  const key = noteKey();
  setNoteHtml("");
  localStorage.removeItem(key);
  if (syncState.mode === "supabase") {
    const project = encodeURIComponent(supabaseProjectId());
    supabaseFetch(`/rest/v1/bw_whitepaper_answers?id=eq.${encodeURIComponent(key)}&project_id=eq.${project}`, {
      method: "DELETE",
      headers: { prefer: "return=minimal" },
    }).catch((error) => {
      console.error(error);
      setSyncStatus("删除失败", "error");
    });
  }
});

els.export.addEventListener("click", () => {
  downloadWholeWhitepaperPdf();
});

els.answerExport.addEventListener("click", () => {
  downloadAnswersPackage();
});

els.answerImport.addEventListener("change", async (event) => {
  const [file] = Array.from(event.target.files || []);
  if (!file) return;
  els.answerImport.value = "";
  try {
    await importAnswersPackage(file);
  } catch (error) {
    console.error(error);
    window.alert("这个答案包无法导入，请确认是从 BW 白皮书工作台导出的 JSON 文件。");
  }
});

async function init() {
  await loadSharedAnswers();
  render();
}

init();
