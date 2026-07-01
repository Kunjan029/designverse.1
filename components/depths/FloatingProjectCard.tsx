"use client";

import type { Project } from "@/lib/data/projects";
import type { Category } from "@/lib/data/categories";
import { useActions } from "@/lib/store";

type Props = {
  project: Project;
  category: Category;
  // Phase 2: settle config passed from FloatingProjectField physics layer
  style?: React.CSSProperties;
};

export default function FloatingProjectCard({ project, category, style }: Props) {
  const { focusProject } = useActions();

  return (
    <button
      onClick={() => focusProject(project.slug, "category")}
      aria-label={`View project: ${project.title}`}
      className="group relative flex flex-col gap-2 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
      style={style}
    >
      {/* Cover image area — Phase 1 placeholder */}
      <div
        className="relative w-48 md:w-56 aspect-[4/3] overflow-hidden border border-white/10 group-hover:border-white/25 transition-all duration-500"
        style={{
          boxShadow: `0 0 30px ${category.color}22`,
        }}
      >
        <div
          className="absolute inset-0 flex items-end p-3"
          style={{ background: `linear-gradient(135deg, ${category.color}22, ${category.color}11)` }}
        >
          <span className="font-body text-[9px] tracking-widest2 uppercase text-white/40">
            {category.name}
          </span>
        </div>

        {/* Hover glow — Phase 2 will enhance this */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            boxShadow: `inset 0 0 30px ${category.color}33`,
          }}
        />
      </div>

      <div className="px-1">
        <p className="font-body text-xs text-white/80 group-hover:text-white transition-colors duration-300">
          {project.title}
        </p>
        <p className="font-body text-[10px] text-white/35 mt-0.5">{project.year}</p>
      </div>
    </button>
  );
}
