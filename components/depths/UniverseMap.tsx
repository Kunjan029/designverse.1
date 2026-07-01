"use client";

import { categories } from "@/lib/data/categories";
import CategoryCore from "@/components/depths/CategoryCore";
import { useCategoryTransition } from "@/hooks/useCategoryTransition";
import { useDepth } from "@/lib/store";

export default function UniverseMap() {
  const depth = useDepth();
  const { activeCategory, phase, isIdle, selectCategory } =
    useCategoryTransition();

  if (depth !== 1 && depth !== 2) return null;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 pb-10">
      <p className="font-body text-[10px] tracking-widest2 uppercase text-white/30 mb-14">
        Select a universe to explore
      </p>

      {/* Desktop: scattered radial layout placeholder. Phase 2 replaces with orbit positioning. */}
      {/* Mobile: clean vertical list */}
      <div className="hidden md:grid md:grid-cols-3 md:gap-x-20 md:gap-y-16 max-w-2xl">
        {categories.map((cat) => (
          <CategoryCore
            key={cat.slug}
            category={cat}
            isActive={activeCategory === cat.slug}
            isTransitioning={!isIdle}
            onSelect={selectCategory}
          />
        ))}
      </div>

      {/* Mobile list */}
      <div className="flex flex-col gap-6 md:hidden w-full max-w-xs">
        {categories.map((cat) => (
          <MobileCategoryRow
            key={cat.slug}
            category={cat}
            isActive={activeCategory === cat.slug}
            isTransitioning={!isIdle}
            onSelect={selectCategory}
          />
        ))}
      </div>
    </div>
  );
}

function MobileCategoryRow({
  category,
  isActive,
  isTransitioning,
  onSelect,
}: {
  category: (typeof categories)[number];
  isActive: boolean;
  isTransitioning: boolean;
  onSelect: (slug: string) => void;
}) {
  return (
    <button
      onClick={() => !isTransitioning && onSelect(category.slug)}
      disabled={isTransitioning}
      className="flex items-center gap-4 py-3 border-b border-white/10 text-left group disabled:cursor-wait"
    >
      <span
        className="h-8 w-8 rounded-full flex-shrink-0 transition-all duration-300"
        style={{
          background: category.color + (isActive ? "44" : "22"),
          border: `1px solid ${category.color}${isActive ? "88" : "44"}`,
          boxShadow: isActive ? `0 0 16px ${category.color}44` : "none",
        }}
      />
      <div>
        <p
          className="font-body text-xs tracking-widest2 uppercase transition-colors duration-300"
          style={{ color: isActive ? category.color : "rgba(255,255,255,0.7)" }}
        >
          {category.name}
        </p>
        <p className="font-body text-[10px] text-white/30 mt-0.5">{category.tagline}</p>
      </div>
      <span className="ml-auto text-white/30 text-xs">→</span>
    </button>
  );
}
