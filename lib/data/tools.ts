export type OrbitTier = "inner" | "middle" | "outer";

export type Tool = {
  slug: string;
  name: string;
  orbitTier: OrbitTier;
  previewAsset: string;       // path to still or muted video loop
  linkedProjectSlug: string;  // project this tool most directly enabled
};

export const tools: Tool[] = [
  // Inner orbit — core craft tools
  {
    slug: "photoshop",
    name: "Photoshop",
    orbitTier: "inner",
    previewAsset: "/tools/photoshop-preview.svg",
    linkedProjectSlug: "social-diwali-2024",
  },
  {
    slug: "illustrator",
    name: "Illustrator",
    orbitTier: "inner",
    previewAsset: "/tools/illustrator-preview.svg",
    linkedProjectSlug: "banner-retail-campaign",
  },
  {
    slug: "figma",
    name: "Figma",
    orbitTier: "inner",
    previewAsset: "/tools/figma-preview.svg",
    linkedProjectSlug: "banner-saas-homepage",
  },
  // Middle orbit — production / generation tools
  {
    slug: "premiere",
    name: "Premiere Pro",
    orbitTier: "middle",
    previewAsset: "/tools/premiere-preview.svg",
    linkedProjectSlug: "social-product-series",
  },
  {
    slug: "firefly",
    name: "Firefly",
    orbitTier: "middle",
    previewAsset: "/tools/firefly-preview.svg",
    linkedProjectSlug: "product-skincare-edit",
  },
  // Outer orbit — extended ecosystem
  {
    slug: "canva",
    name: "Canva",
    orbitTier: "outer",
    previewAsset: "/tools/canva-preview.svg",
    linkedProjectSlug: "social-brand-launch",
  },
  {
    slug: "freepik",
    name: "Freepik",
    orbitTier: "outer",
    previewAsset: "/tools/freepik-preview.svg",
    linkedProjectSlug: "festival-holi-2024",
  },
  {
    slug: "chatgpt",
    name: "ChatGPT",
    orbitTier: "outer",
    previewAsset: "/tools/chatgpt-preview.svg",
    linkedProjectSlug: "social-brand-launch",
  },
  {
    slug: "claude",
    name: "Claude",
    orbitTier: "outer",
    previewAsset: "/tools/claude-preview.svg",
    linkedProjectSlug: "banner-saas-homepage",
  },
  {
    slug: "ideogram",
    name: "Ideogram",
    orbitTier: "outer",
    previewAsset: "/tools/ideogram-preview.svg",
    linkedProjectSlug: "festival-eid-campaign",
  },
];
