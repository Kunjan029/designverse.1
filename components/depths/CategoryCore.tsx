"use client";

import type { Category } from "@/lib/data/categories";

type Props = {
  category: Category;
  isActive: boolean;
  isTransitioning: boolean;
  onSelect: (slug: string) => void;
};

export default function CategoryCore({
  category,
  isActive,
  isTransitioning,
  onSelect,
}: Props) {
  const { slug, name, tagline, color } = category;

  const handleClick = () => {
    if (!isTransitioning) onSelect(slug);
  };

  return (
    <button
      onClick={handleClick}
      disabled={isTransitioning}
      aria-label={`Open ${name} — ${tagline}`}
      className="group flex flex-col items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 disabled:cursor-wait"
      data-category={slug}
    >
      {/* Core orb — Phase 2 will animate this */}
      <div
        className="relative flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-full transition-all duration-500"
        style={{
          background: `radial-gradient(circle at 35% 35%, ${color}44, ${color}22)`,
          border: `1px solid ${color}${isActive ? "66" : "33"}`,
          boxShadow: isActive
            ? `0 0 40px ${color}44, 0 0 80px ${color}22`
            : `0 0 20px ${color}22`,
        }}
      >
        {/* Inner dot */}
        <span
          className="h-3 w-3 rounded-full transition-all duration-500"
          style={{
            background: color,
            opacity: isActive ? 0.9 : 0.5,
            boxShadow: isActive ? `0 0 12px ${color}` : "none",
          }}
        />
      </div>

      {/* Label */}
      <div className="text-center">
        <p
          className="font-body text-xs tracking-widest2 uppercase transition-colors duration-300"
          style={{ color: isActive ? color : "rgba(255,255,255,0.6)" }}
        >
          {name}
        </p>
        <p className="font-body text-[10px] text-white/30 mt-0.5">{tagline}</p>
      </div>
    </button>
  );
}
