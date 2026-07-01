"use client";

import { useActiveProject, useActions, useEntryContext, useDepth } from "@/lib/store";
import { getProject } from "@/lib/data/projects";
import { getCategory } from "@/lib/data/categories";

export default function FocusedProjectView() {
  const depth = useDepth();
  const activeProject = useActiveProject();
  const entryContext = useEntryContext();
  const { exitProject, goHome, toggleIndex } = useActions();

  if (depth !== 3 || !activeProject) return null;

  const project = getProject(activeProject);
  if (!project) return null;

  const category = getCategory(project.categorySlug);

  return (
    <div className="min-h-screen bg-void/95 backdrop-blur-sm text-white">
      {/* Three exit paths — always visible, never ambiguous */}
      <div className="sticky top-0 z-40 flex items-center justify-between px-6 py-4 border-b border-white/10 bg-void/90 backdrop-blur-sm">
        <button
          onClick={exitProject}
          className="font-body text-[10px] tracking-widest2 uppercase text-white/50 hover:text-white transition-colors"
          aria-label={
            entryContext === "index"
              ? "Back to index"
              : entryContext === "tool"
              ? "Back to universe"
              : "Back to category"
          }
        >
          ←{" "}
          {entryContext === "index"
            ? "Index"
            : entryContext === "tool"
            ? "Universe"
            : category?.name ?? "Back"}
        </button>

        <div className="flex items-center gap-6">
          <button
            onClick={toggleIndex}
            className="font-body text-[10px] tracking-widest2 uppercase text-white/40 hover:text-white/80 transition-colors"
          >
            All Work
          </button>
          <button
            onClick={goHome}
            className="font-body text-[10px] tracking-widest2 uppercase text-white/40 hover:text-white/80 transition-colors"
          >
            Universe
          </button>
        </div>
      </div>

      {/* Project content — clean, professional, atmosphere is gone */}
      <div className="max-w-4xl mx-auto px-6 pt-14 pb-24">
        {/* Category tag */}
        {category && (
          <div className="flex items-center gap-2 mb-6">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: category.color }}
            />
            <p
              className="font-body text-[10px] tracking-widest2 uppercase"
              style={{ color: category.color }}
            >
              {category.name} — {project.year}
            </p>
          </div>
        )}

        {/* Hero — cover placeholder */}
        <div
          className="w-full aspect-[16/9] mb-10 border border-white/10 flex items-end p-6"
          style={{
            background: category
              ? `linear-gradient(135deg, ${category.color}22, ${category.color}0a)`
              : "rgba(255,255,255,0.05)",
          }}
        >
          <p className="font-body text-[10px] uppercase tracking-widest2 text-white/30">
            Project cover — {project.title}
          </p>
        </div>

        {/* Authored voice line */}
        <p className="font-display italic text-2xl md:text-3xl text-white/90 mb-10 leading-snug"
          style={{ color: category?.color ?? "white" }}>
          &ldquo;{project.voice}&rdquo;
        </p>

        {/* Fast facts */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-white/10 mb-12">
          {[
            { label: "Role", value: project.role },
            { label: "Timeline", value: project.timeline },
            { label: "Category", value: project.categorySlug },
            { label: "Year", value: project.year },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="font-body text-[10px] tracking-widest2 uppercase text-white/30 mb-1">
                {label}
              </p>
              <p className="font-body text-sm text-white/80">{value}</p>
            </div>
          ))}
        </div>

        {/* Overview */}
        <div className="mb-10">
          <p className="font-body text-[10px] tracking-widest2 uppercase text-white/30 mb-3">
            Overview
          </p>
          <p className="font-body text-white/70 leading-relaxed">{project.oneLiner}</p>
        </div>

        {/* Problem / Friction — asymmetric, friction is the smaller, sharper column */}
        <div className="grid md:grid-cols-12 gap-8 mb-10">
          <div className="md:col-span-7">
            <p className="font-body text-[10px] tracking-widest2 uppercase text-white/30 mb-3">
              The Problem
            </p>
            <p className="font-body text-white/70 leading-relaxed">{project.oneLiner}</p>
          </div>
          <div className="md:col-span-5 md:pl-8 md:border-l border-white/10">
            <p
              className="font-body text-[10px] tracking-widest2 uppercase mb-3"
              style={{ color: category?.color ?? "rgba(255,255,255,0.3)" }}
            >
              Where It Broke
            </p>
            <p className="font-body text-white/60 leading-relaxed text-sm">{project.friction}</p>
          </div>
        </div>

        {/* Process */}
        <div className="mb-10">
          <p className="font-body text-[10px] tracking-widest2 uppercase text-white/30 mb-3">
            Process
          </p>
          <p className="font-body text-white/70 leading-relaxed">{project.process}</p>
        </div>

        {/* Outcome — inverted, largest statement */}
        <div
          className="p-8 mb-10 border border-white/10"
          style={{
            background: category ? `${category.color}0d` : "rgba(255,255,255,0.03)",
          }}
        >
          <p className="font-body text-[10px] tracking-widest2 uppercase text-white/30 mb-3">
            The Outcome
          </p>
          <p className="font-display text-xl md:text-2xl text-white leading-snug">
            {project.outcome}
          </p>
        </div>

        {/* Variations filmstrip placeholder */}
        {project.variations.length > 0 && (
          <div>
            <p className="font-body text-[10px] tracking-widest2 uppercase text-white/30 mb-4">
              Variations
            </p>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {project.variations.map((_, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-36 aspect-square border border-white/10 flex items-center justify-center"
                  style={{
                    background: category
                      ? `${category.color}0d`
                      : "rgba(255,255,255,0.03)",
                  }}
                >
                  <span className="font-body text-[9px] text-white/30">V{i + 1}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
