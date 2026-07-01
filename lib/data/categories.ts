export type CategoryPersonality = {
  // settle variance multiplier: 0 = uniform, 1 = highly organic
  settleVariance: number;
  // orbit speed relative to base: 1 = normal, >1 = faster, <1 = slower
  orbitSpeed: number;
  // project emergence: how spread the exhale drifts
  driftSpread: number;
  // whether emerging projects align loosely to a grid (Commerceverse)
  gridAlign: boolean;
};

export type Category = {
  slug: string;
  name: string;
  tagline: string;
  color: string;           // hex, used for glow, accent, Index filter
  personality: CategoryPersonality;
};

export const categories: Category[] = [
  {
    slug: "socialverse",
    name: "Socialverse",
    tagline: "Creative Social Campaigns",
    color: "#8b5cf6",
    personality: { settleVariance: 0.9, orbitSpeed: 1.3, driftSpread: 1.4, gridAlign: false },
  },
  {
    slug: "commerceverse",
    name: "Commerceverse",
    tagline: "Amazon & Ecommerce Creatives",
    color: "#f97316",
    personality: { settleVariance: 0.2, orbitSpeed: 1.0, driftSpread: 0.8, gridAlign: true },
  },
  {
    slug: "bannerverse",
    name: "Bannerverse",
    tagline: "Website Banners",
    color: "#3b82f6",
    personality: { settleVariance: 0.4, orbitSpeed: 0.8, driftSpread: 1.1, gridAlign: false },
  },
  {
    slug: "festivalverse",
    name: "Festivalverse",
    tagline: "Festival Campaigns",
    color: "#eab308",
    personality: { settleVariance: 0.6, orbitSpeed: 0.75, driftSpread: 1.2, gridAlign: false },
  },
  {
    slug: "productverse",
    name: "Productverse",
    tagline: "Product Editing",
    color: "#94a3b8",
    personality: { settleVariance: 0.1, orbitSpeed: 0.9, driftSpread: 0.7, gridAlign: false },
  },
  {
    slug: "uxverse",
    name: "UXverse",
    tagline: "UI / UX Projects",
    color: "#06b6d4",
    personality: { settleVariance: 0.3, orbitSpeed: 1.0, driftSpread: 0.9, gridAlign: true },
  },
];

export const getCategory = (slug: string) =>
  categories.find((c) => c.slug === slug) ?? null;
