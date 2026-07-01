export type Project = {
  slug: string;
  title: string;
  categorySlug: string;
  year: string;
  role: string;
  timeline: string;
  oneLiner: string;
  voice: string;          // single authored line — the instinct, not the deliverable
  friction: string;       // what actually broke before it worked
  outcome: string;
  process: string;
  cover: string;
  gallery: string[];
  variations: string[];
};

const placeholder = (label: string) => `/work/placeholder-${label}.svg`;

export const projects: Project[] = [
  // SOCIALVERSE
  {
    slug: "social-diwali-2024",
    title: "Diwali 2024 Campaign",
    categorySlug: "socialverse",
    year: "2024",
    role: "Art Director",
    timeline: "2 weeks",
    oneLiner: "A festival campaign that felt personal, not promotional.",
    voice: "The brief said 'celebratory.' The work had to say something truer than that.",
    friction: "First three directions were rejected for being too generic. The fourth used actual paper lantern textures, and it landed.",
    outcome: "3× average engagement across Instagram and Facebook. Reused by the client the following year with minimal changes.",
    process: "Started with reference photography, moved into Photoshop for composite work, refined typography in Illustrator.",
    cover: placeholder("socialverse-1"),
    gallery: [placeholder("socialverse-1a"), placeholder("socialverse-1b")],
    variations: [placeholder("socialverse-1v1"), placeholder("socialverse-1v2")],
  },
  {
    slug: "social-brand-launch",
    title: "Brand Launch Series",
    categorySlug: "socialverse",
    year: "2023",
    role: "Lead Designer",
    timeline: "1 month",
    oneLiner: "Six posts that introduced a brand to 40,000 new followers.",
    voice: "Consistency matters more than individual brilliance across a feed.",
    friction: "The client wanted variety. We had to argue for a single, locked visual language across all six posts.",
    outcome: "40k follower growth in the launch month. Feed recognized as a finalist in two design newsletters.",
    process: "Visual identity established first in Figma, then expanded into post templates in Illustrator. Final compositing in Photoshop.",
    cover: placeholder("socialverse-2"),
    gallery: [placeholder("socialverse-2a")],
    variations: [placeholder("socialverse-2v1"), placeholder("socialverse-2v2"), placeholder("socialverse-2v3")],
  },
  {
    slug: "social-product-series",
    title: "Product Reveal Series",
    categorySlug: "socialverse",
    year: "2024",
    role: "Designer",
    timeline: "3 weeks",
    oneLiner: "Reveal content that built anticipation before the drop.",
    voice: "What you hide is as important as what you show.",
    friction: "Too much reveal too early. Rebuilt the sequence three times to land on the right pace.",
    outcome: "Pre-order waitlist filled within 6 hours of the final post.",
    process: "Concept in Figma, execution in Photoshop, motion in Premiere Pro.",
    cover: placeholder("socialverse-3"),
    gallery: [placeholder("socialverse-3a"), placeholder("socialverse-3b")],
    variations: [placeholder("socialverse-3v1")],
  },

  // COMMERCEVERSE
  {
    slug: "amazon-beauty-listing",
    title: "Beauty Brand Listing",
    categorySlug: "commerceverse",
    year: "2024",
    role: "Product Designer",
    timeline: "1 week",
    oneLiner: "An Amazon listing that converted at 2× the category average.",
    voice: "On Amazon, the thumbnail is the entire first impression — and it gets one second.",
    friction: "The client's product photography was unusable. Had to composite from scratch with no new shoot budget.",
    outcome: "CTR doubled within 30 days. A+ content drove a 40% increase in session duration.",
    process: "Retouching in Photoshop, layout in Illustrator, A+ content structured in Figma.",
    cover: placeholder("commerceverse-1"),
    gallery: [placeholder("commerceverse-1a"), placeholder("commerceverse-1b")],
    variations: [placeholder("commerceverse-1v1"), placeholder("commerceverse-1v2")],
  },
  {
    slug: "amazon-electronics",
    title: "Electronics Category Suite",
    categorySlug: "commerceverse",
    year: "2023",
    role: "Lead Designer",
    timeline: "3 weeks",
    oneLiner: "Twelve SKUs, one visual language, zero inconsistency.",
    voice: "Scale is the real design problem. One great image is easy; twelve matching ones is not.",
    friction: "Products arrived from three different photographers with three different lighting setups. Color matching took half the project timeline.",
    outcome: "Entire category suite ranked in the top 10 of search results within 60 days.",
    process: "Batch retouch in Photoshop, system-building in Figma, export pipeline in Illustrator.",
    cover: placeholder("commerceverse-2"),
    gallery: [placeholder("commerceverse-2a")],
    variations: [placeholder("commerceverse-2v1")],
  },
  {
    slug: "amazon-food-listing",
    title: "Food & Beverage Listing",
    categorySlug: "commerceverse",
    year: "2024",
    role: "Designer",
    timeline: "5 days",
    oneLiner: "Photography that made the product taste like something before you could buy it.",
    voice: "Food design is appetite design. The goal is a physical reaction, not approval.",
    friction: "Client wanted text-heavy infographics. The version that worked had almost no text at all.",
    outcome: "Best-selling in subcategory within 2 weeks of listing update.",
    process: "Composite photography in Photoshop, layout and typography in Illustrator.",
    cover: placeholder("commerceverse-3"),
    gallery: [placeholder("commerceverse-3a"), placeholder("commerceverse-3b")],
    variations: [placeholder("commerceverse-3v1"), placeholder("commerceverse-3v2")],
  },

  // BANNERVERSE
  {
    slug: "banner-saas-homepage",
    title: "SaaS Homepage Banners",
    categorySlug: "bannerverse",
    year: "2024",
    role: "Designer",
    timeline: "2 weeks",
    oneLiner: "Hero banners that held clarity at six different breakpoints.",
    voice: "A banner that works at 320px and 2560px is a different design problem than one that works at one size.",
    friction: "The design system didn't have enough components to support all breakpoints. Rebuilt the component library mid-project.",
    outcome: "Bounce rate on the homepage dropped 18% in the month after new banners launched.",
    process: "Responsive layout system in Figma, vector assets from Illustrator, final QA in browser.",
    cover: placeholder("bannerverse-1"),
    gallery: [placeholder("bannerverse-1a"), placeholder("bannerverse-1b")],
    variations: [placeholder("bannerverse-1v1")],
  },
  {
    slug: "banner-retail-campaign",
    title: "Retail Campaign Banners",
    categorySlug: "bannerverse",
    year: "2023",
    role: "Art Director",
    timeline: "1 week",
    oneLiner: "Twenty-four banner sizes from one master design.",
    voice: "The best banner system is one where you never touch individual sizes.",
    friction: "24 sizes, 3-day deadline, one designer. The system saved the delivery — the shortcuts would have killed it.",
    outcome: "Full campaign deployed on time across all ad networks. Zero resize complaints from media buyers.",
    process: "Master design in Figma with auto-layout, export automation via Illustrator scripts.",
    cover: placeholder("bannerverse-2"),
    gallery: [placeholder("bannerverse-2a")],
    variations: [placeholder("bannerverse-2v1"), placeholder("bannerverse-2v2"), placeholder("bannerverse-2v3")],
  },

  // FESTIVALVERSE
  {
    slug: "festival-holi-2024",
    title: "Holi 2024 Campaign",
    categorySlug: "festivalverse",
    year: "2024",
    role: "Art Director",
    timeline: "10 days",
    oneLiner: "Color used so deliberately that the brief could only say 'more.'",
    voice: "Holi is the one brief where restraint is the wrong call. Commit to the chaos.",
    friction: "Early versions were too polished. Deliberately degraded the composite to get the powder-burst texture right.",
    outcome: "Most-shared branded Holi post across three client social channels in 2024.",
    process: "Layered composite work in Photoshop, color work in Lightroom, typography in Illustrator.",
    cover: placeholder("festivalverse-1"),
    gallery: [placeholder("festivalverse-1a"), placeholder("festivalverse-1b")],
    variations: [placeholder("festivalverse-1v1"), placeholder("festivalverse-1v2")],
  },
  {
    slug: "festival-eid-campaign",
    title: "Eid Campaign",
    categorySlug: "festivalverse",
    year: "2024",
    role: "Designer",
    timeline: "1 week",
    oneLiner: "Elegance first, celebration second — in that order.",
    voice: "The most powerful festival visuals are the quietest ones in the room.",
    friction: "Client wanted gold and ornate. The final work used gold, but stripped every ornament that wasn't doing work.",
    outcome: "Campaign ran across 6 brands with minimal variation. First festival campaign the client reused across multiple markets.",
    process: "Architecture in Figma, illustration work in Illustrator, compositing in Photoshop.",
    cover: placeholder("festivalverse-2"),
    gallery: [placeholder("festivalverse-2a")],
    variations: [placeholder("festivalverse-2v1")],
  },

  // PRODUCTVERSE
  {
    slug: "product-skincare-edit",
    title: "Skincare Product Edit",
    categorySlug: "productverse",
    year: "2024",
    role: "Retoucher / Designer",
    timeline: "3 days",
    oneLiner: "Product photography that looked shot, not edited.",
    voice: "The best retouching leaves no visible trace of itself.",
    friction: "Source images had inconsistent color temperature across a six-product range. Color matching without making products look identical took most of the time.",
    outcome: "Delivered for a product launch. Client used the images across packaging, digital, and retail.",
    process: "Color correction and retouching in Photoshop, composite backgrounds in Firefly, consistency check in Lightroom.",
    cover: placeholder("productverse-1"),
    gallery: [placeholder("productverse-1a"), placeholder("productverse-1b")],
    variations: [placeholder("productverse-1v1"), placeholder("productverse-1v2")],
  },
  {
    slug: "product-electronics-hero",
    title: "Electronics Hero Shots",
    categorySlug: "productverse",
    year: "2023",
    role: "Designer",
    timeline: "1 week",
    oneLiner: "Hero shots that made a mid-range product look aspirational.",
    voice: "Lighting is the real medium. The retoucher either finds the light or invents it.",
    friction: "No studio photography available. All hero shots were composited from client-supplied reference images and stock lighting environments.",
    outcome: "Used as primary product imagery in a major retail chain listing. No reshoots requested.",
    process: "Full composite in Photoshop, lighting built from scratch, surface work in Firefly.",
    cover: placeholder("productverse-2"),
    gallery: [placeholder("productverse-2a")],
    variations: [placeholder("productverse-2v1"), placeholder("productverse-2v2")],
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug) ?? null;

export const getProjectsByCategory = (categorySlug: string) =>
  projects.filter((p) => p.categorySlug === categorySlug);
