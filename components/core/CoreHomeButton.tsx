"use client";

import { useDepth, useActions } from "@/lib/store";

export default function CoreHomeButton() {
  const depth = useDepth();
  const { goHome } = useActions();

  // At Depth 0 this renders as a decorative element (not clickable as "home")
  // At Depth 1+ it becomes the persistent home trigger
  const isHome = depth === 0;

  return (
    <button
      onClick={isHome ? undefined : goHome}
      aria-label="Return to Designverse home"
      title="Designverse — Home"
      disabled={isHome}
      className={`group flex items-center gap-2.5 transition-opacity duration-300 ${
        isHome ? "cursor-default opacity-100" : "cursor-pointer opacity-80 hover:opacity-100"
      }`}
    >
      {/* The Core mark — placeholder SVG, Phase 2 replaces with animated SVG */}
      <span className="relative flex h-6 w-6 items-center justify-center">
        <span className="absolute h-6 w-6 rounded-full bg-gradient-to-br from-purple-500 via-pink-400 to-orange-400 opacity-80" />
        <span className="relative h-2 w-2 rounded-full bg-white opacity-90" />
      </span>

      {depth > 1 && (
        <span className="font-body text-[10px] tracking-widest2 uppercase text-white/50 group-hover:text-white/80 transition-colors">
          Designverse
        </span>
      )}
    </button>
  );
}
