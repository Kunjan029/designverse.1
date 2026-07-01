// All easing curves and duration tokens for Phase 1 depth transitions.
// Phase 2 will add atmospheric + physics tokens here.

export const ease = {
  // Depth navigation — deliberate, confident
  depth: [0.76, 0, 0.24, 1] as [number, number, number, number],
  // Content reveal inside Depth 3 — softer, editorial
  reveal: [0.22, 1, 0.36, 1] as [number, number, number, number],
  // Category retraction — faster, a clearing action not a reveal
  retract: [0.55, 0, 1, 0.45] as [number, number, number, number],
  // Category emergence (exhale) — slow, organic settle
  emerge: [0.22, 1, 0.36, 1] as [number, number, number, number],
} as const;

export const duration = {
  // Depth 0 → 1 (enter)
  enter: 0.6,
  // Core click → Depth 1 from any depth
  goHome: 0.5,
  // Depth 1 → 2 (category open)
  openCategory: 0.55,
  // Depth 2 → 3 (project focus)
  focusProject: 0.5,
  // Depth 3 → exit
  exitProject: 0.4,
  // Category retraction
  retract: 0.35,
  // Category emergence — slightly longer, settles naturally
  emerge: 0.7,
  // Index overlay appear/disappear
  index: 0.4,
} as const;

// Atmosphere intensity per depth (0 = off, 1 = full).
// Phase 2 will use these to drive GlowClouds, orbit, etc.
export const atmosphereIntensity: Record<number, number> = {
  0: 1,    // Welcome screen — full atmosphere
  1: 0.7,  // Universe Map — present but calm
  2: 0.4,  // Category Space — receding
  3: 0.05, // Focused Project — near-zero
};
