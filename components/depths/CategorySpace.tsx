"use client";

import { getCategory, categories } from "@/lib/data/categories";
import { useActiveCategory, useDepth } from "@/lib/store";
import FloatingProjectField from "@/components/depths/FloatingProjectField";
import { useCategoryTransition } from "@/hooks/useCategoryTransition";

export default function CategorySpace() {
  const depth = useDepth();
  const activeCategory = useActiveCategory();
  const { selectCategory, phase } = useCategoryTransition();

  if (depth !== 2) return null;

  const category = activeCategory ? getCategory(activeCategory) : null;

  return (
    <div className="flex min-h-screen flex-col items-start justify-start px-6 pt-28 pb-16">
      {/* Category identity strip */}
      {category && (
        <div className="mb-12 w-full max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-1">
            <span
              className="h-2 w-2 rounded-full"
              style={{ background: category.color, boxShadow: `0 0 8px ${category.color}` }}
            />
            <p
              className="font-body text-xs tracking-widest2 uppercase"
              style={{ color: category.color }}
            >
              {category.name}
            </p>
          </div>
          <p className="font-body text-white/40 text-sm">{category.tagline}</p>
        </div>
      )}

      {/* Floating project field */}
      <div className="w-full max-w-6xl mx-auto">
        <FloatingProjectField />
      </div>

      {/* Category switcher — quiet row at the bottom */}
      <div className="mt-16 w-full max-w-6xl mx-auto border-t border-white/10 pt-6">
        <p className="font-body text-[10px] tracking-widest2 uppercase text-white/25 mb-4">
          Explore another universe
        </p>
        <div className="flex flex-wrap gap-4">
          {categories
            .filter((c) => c.slug !== activeCategory)
            .map((c) => (
              <button
                key={c.slug}
                onClick={() => selectCategory(c.slug)}
                disabled={phase !== "idle"}
                className="font-body text-[10px] tracking-widest2 uppercase text-white/40 hover:text-white/80 transition-colors disabled:cursor-wait"
              >
                {c.name}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
}
