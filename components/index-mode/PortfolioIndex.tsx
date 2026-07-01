"use client";

import { useState } from "react";
import { projects } from "@/lib/data/projects";
import { categories, getCategory } from "@/lib/data/categories";
import { useActions } from "@/lib/store";

export default function PortfolioIndex() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const { focusProject, closeIndex } = useActions();

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.categorySlug === activeFilter);

  return (
    <div className="fixed inset-0 z-40 bg-void/97 backdrop-blur-md overflow-y-auto">
      {/* Index header */}
      <div className="sticky top-0 z-10 bg-void/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <p className="font-body text-[10px] tracking-widest2 uppercase text-white/50">
            All Work — {filtered.length} Project{filtered.length !== 1 ? "s" : ""}
          </p>
          <button
            onClick={closeIndex}
            className="font-body text-[10px] tracking-widest2 uppercase text-white/40 hover:text-white transition-colors"
            aria-label="Close index"
          >
            × Close
          </button>
        </div>

        {/* Filter bar */}
        <div className="max-w-6xl mx-auto px-6 pb-4 flex gap-6 overflow-x-auto">
          <FilterPill
            label="All"
            value="all"
            active={activeFilter === "all"}
            color="rgba(255,255,255,0.5)"
            onClick={setActiveFilter}
          />
          {categories.map((cat) => (
            <FilterPill
              key={cat.slug}
              label={cat.name}
              value={cat.slug}
              active={activeFilter === cat.slug}
              color={cat.color}
              onClick={setActiveFilter}
            />
          ))}
        </div>
      </div>

      {/* Project grid */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map((project) => {
            const cat = getCategory(project.categorySlug);
            return (
              <button
                key={project.slug}
                onClick={() => focusProject(project.slug, "index")}
                className="group text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                aria-label={`View ${project.title}`}
              >
                {/* Cover placeholder */}
                <div
                  className="w-full aspect-[4/3] mb-3 border border-white/10 group-hover:border-white/25 transition-all duration-300 flex items-end p-3"
                  style={{
                    background: cat
                      ? `linear-gradient(135deg, ${cat.color}22, ${cat.color}0d)`
                      : "rgba(255,255,255,0.05)",
                    boxShadow: cat
                      ? `0 0 20px ${cat.color}11`
                      : "none",
                  }}
                >
                  <span className="font-body text-[9px] text-white/30 tracking-widest2 uppercase">
                    {cat?.name}
                  </span>
                </div>

                <p className="font-body text-sm text-white/80 group-hover:text-white transition-colors">
                  {project.title}
                </p>
                <p className="font-body text-[10px] text-white/35 mt-0.5">
                  {project.year} — {project.role}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function FilterPill({
  label,
  value,
  active,
  color,
  onClick,
}: {
  label: string;
  value: string;
  active: boolean;
  color: string;
  onClick: (v: string) => void;
}) {
  return (
    <button
      onClick={() => onClick(value)}
      className="flex-shrink-0 font-body text-[10px] tracking-widest2 uppercase pb-2 border-b transition-colors duration-200"
      style={{
        color: active ? color : "rgba(255,255,255,0.35)",
        borderColor: active ? color : "transparent",
      }}
    >
      {label}
    </button>
  );
}
