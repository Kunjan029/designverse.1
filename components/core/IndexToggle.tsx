"use client";

import { useIndexMode, useActions, useDepth } from "@/lib/store";

export default function IndexToggle() {
  const indexMode = useIndexMode();
  const depth = useDepth();
  const { toggleIndex } = useActions();

  // Slightly more prominent at Depth 0 (welcome screen fast-path offer)
  const prominent = depth === 0;

  return (
    <button
      onClick={toggleIndex}
      aria-label={indexMode ? "Close portfolio index" : "Open portfolio index"}
      className={`font-body text-[10px] tracking-widest2 uppercase transition-colors duration-300 ${
        prominent
          ? "text-white/50 hover:text-white/90"
          : indexMode
          ? "text-white/90"
          : "text-white/40 hover:text-white/70"
      }`}
    >
      {indexMode ? "× Close Index" : "All Work"}
    </button>
  );
}
