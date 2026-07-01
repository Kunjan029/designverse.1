"use client";

import { useEffect, useRef } from "react";
import { getProjectsByCategory } from "@/lib/data/projects";
import { getCategory } from "@/lib/data/categories";
import { useCategoryTransition } from "@/hooks/useCategoryTransition";
import FloatingProjectCard from "@/components/depths/FloatingProjectCard";
import { useDepth } from "@/lib/store";

const MAX_VISIBLE = 6;

export default function FloatingProjectField() {
  const depth = useDepth();
  const {
    activeCategory,
    isRetracting,
    isEmerging,
    handleRetractComplete,
    handleEmergeComplete,
  } = useCategoryTransition();

  // Simulate animation completion for Phase 1 (no actual animation yet).
  // Phase 2: remove these and wire to Framer Motion onAnimationComplete.
  const retractTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const emergeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (isRetracting) {
      retractTimer.current = setTimeout(() => handleRetractComplete(), 10);
    }
    return () => {
      if (retractTimer.current) clearTimeout(retractTimer.current);
    };
  }, [isRetracting, handleRetractComplete]);

  useEffect(() => {
    if (isEmerging) {
      emergeTimer.current = setTimeout(() => handleEmergeComplete(), 10);
    }
    return () => {
      if (emergeTimer.current) clearTimeout(emergeTimer.current);
    };
  }, [isEmerging, handleEmergeComplete]);

  if (!activeCategory || depth < 2) return null;

  const category = getCategory(activeCategory);
  if (!category) return null;

  const allProjects = getProjectsByCategory(activeCategory);
  const visible = allProjects.slice(0, MAX_VISIBLE);

  return (
    <div className="w-full">
      {/* Desktop: placeholder static grid. Phase 2 replaces with physics-positioned floats. */}
      <div className="hidden md:flex flex-wrap gap-8 justify-center">
        {visible.map((project) => (
          <FloatingProjectCard
            key={project.slug}
            project={project}
            category={category}
          />
        ))}
        {allProjects.length > MAX_VISIBLE && (
          <p className="w-full text-center font-body text-[10px] tracking-widest2 uppercase text-white/25 mt-4">
            + {allProjects.length - MAX_VISIBLE} more — scroll to explore
          </p>
        )}
      </div>

      {/* Mobile: horizontal scroll carousel */}
      <div className="flex md:hidden gap-5 overflow-x-auto pb-4 px-6 snap-x snap-mandatory scrollbar-none">
        {visible.map((project) => (
          <div key={project.slug} className="snap-center flex-shrink-0">
            <FloatingProjectCard project={project} category={category} />
          </div>
        ))}
      </div>
    </div>
  );
}
