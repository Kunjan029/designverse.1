import { create } from "zustand";

// The four depths plus the Index override mode.
// Index is not a depth — it overlays any depth and preserves it for return.
export type Depth = 0 | 1 | 2 | 3;

// How did the visitor arrive at a project? Determines where exitProject() returns them.
export type EntryContext = "category" | "index" | "tool" | null;

// Category transition phases — enforces retract-before-emerge rule
export type CategoryTransitionPhase =
  | "idle"            // no transition in progress
  | "retracting"      // current category's projects are animating back into core
  | "emerging";       // new category's projects are drifting out

export type DesignverseState = {
  // ── Core state ───────────────────────────────────────────────────────────
  depth: Depth;
  activeCategory: string | null;
  activeProject: string | null;
  indexMode: boolean;
  entryContext: EntryContext;
  categoryTransitionPhase: CategoryTransitionPhase;
  pendingCategory: string | null;  // queued during retraction, applied once retraction completes

  // ── Derived ──────────────────────────────────────────────────────────────
  // Previous depth, used by animations to determine which direction to transition
  previousDepth: Depth;

  // ── Actions ──────────────────────────────────────────────────────────────

  // Enter the universe from the welcome screen. Depth 0 → 1.
  enter: () => void;

  // Creative Core click — always returns to Depth 1, index mode off.
  goHome: () => void;

  // Select a category for the first time (no active category — no retraction needed).
  openCategory: (slug: string) => void;

  // Switch to a different category. Triggers retract→emerge sequence.
  // Refuses to act if a transition is already in progress.
  switchCategory: (slug: string) => void;

  // Called by FloatingProjectField when retraction animation completes.
  // Applies pendingCategory and begins emergence phase.
  onRetractionComplete: () => void;

  // Called by FloatingProjectField when emergence animation completes.
  onEmergenceComplete: () => void;

  // Focus a project. Records entryContext so exitProject knows where to return.
  focusProject: (slug: string, context: EntryContext) => void;

  // Exit a focused project. Returns to the correct context:
  //   "category" → Depth 2, same activeCategory
  //   "index"    → indexMode: true (index overlay), depth restored to what it was
  //   "tool"     → Depth 1 (universe map)
  exitProject: () => void;

  // Toggle Portfolio Index overlay on/off.
  // Entering Index preserves current depth/category/project for accurate exit.
  toggleIndex: () => void;

  // Close Index without changing any other state.
  closeIndex: () => void;
};

export const useDesignverse = create<DesignverseState>((set, get) => ({
  depth: 0,
  activeCategory: null,
  activeProject: null,
  indexMode: false,
  entryContext: null,
  categoryTransitionPhase: "idle",
  pendingCategory: null,
  previousDepth: 0,

  // ── Actions ───────────────────────────────────────────────────────────────

  enter: () => {
    set((s) => ({ previousDepth: s.depth, depth: 1 }));
  },

  goHome: () => {
    set((s) => ({
      previousDepth: s.depth,
      depth: 1,
      activeCategory: null,
      activeProject: null,
      indexMode: false,
      entryContext: null,
      categoryTransitionPhase: "idle",
      pendingCategory: null,
    }));
  },

  openCategory: (slug) => {
    set((s) => ({
      previousDepth: s.depth,
      depth: 2,
      activeCategory: slug,
      activeProject: null,
      categoryTransitionPhase: "emerging",
    }));
  },

  switchCategory: (slug) => {
    const { categoryTransitionPhase, activeCategory } = get();
    // No-op if same category or already mid-transition
    if (slug === activeCategory) return;
    if (categoryTransitionPhase !== "idle") return;
    set({ categoryTransitionPhase: "retracting", pendingCategory: slug });
  },

  onRetractionComplete: () => {
    const { pendingCategory } = get();
    if (!pendingCategory) return;
    set({
      activeCategory: pendingCategory,
      pendingCategory: null,
      categoryTransitionPhase: "emerging",
    });
  },

  onEmergenceComplete: () => {
    set({ categoryTransitionPhase: "idle" });
  },

  focusProject: (slug, context) => {
    set((s) => ({
      previousDepth: s.depth,
      depth: 3,
      activeProject: slug,
      entryContext: context,
    }));
  },

  exitProject: () => {
    const { entryContext } = get();
    if (entryContext === "index") {
      // Return to Index overlay; restore depth to 2 (category was active when Index was opened)
      set({ depth: 2, activeProject: null, indexMode: true, entryContext: null });
    } else if (entryContext === "tool") {
      // Return to Universe Map — visitor came from a tool orbit node
      set({ depth: 1, activeCategory: null, activeProject: null, entryContext: null });
    } else {
      // Default: return to the category space the project came from
      set((s) => ({ depth: 2, activeProject: null, entryContext: null, previousDepth: s.depth }));
    }
  },

  toggleIndex: () => {
    set((s) => ({ indexMode: !s.indexMode }));
  },

  closeIndex: () => {
    set({ indexMode: false });
  },
}));

// ── Typed selector hooks ───────────────────────────────────────────────────
// Import these in components instead of selecting inline to avoid unnecessary re-renders.

export const useDepth = () => useDesignverse((s) => s.depth);
export const usePreviousDepth = () => useDesignverse((s) => s.previousDepth);
export const useActiveCategory = () => useDesignverse((s) => s.activeCategory);
export const useActiveProject = () => useDesignverse((s) => s.activeProject);
export const useIndexMode = () => useDesignverse((s) => s.indexMode);
export const useEntryContext = () => useDesignverse((s) => s.entryContext);
export const useCategoryTransitionPhase = () =>
  useDesignverse((s) => s.categoryTransitionPhase);
export const usePendingCategory = () => useDesignverse((s) => s.pendingCategory);
export const useActions = () =>
  useDesignverse((s) => ({
    enter: s.enter,
    goHome: s.goHome,
    openCategory: s.openCategory,
    switchCategory: s.switchCategory,
    onRetractionComplete: s.onRetractionComplete,
    onEmergenceComplete: s.onEmergenceComplete,
    focusProject: s.focusProject,
    exitProject: s.exitProject,
    toggleIndex: s.toggleIndex,
    closeIndex: s.closeIndex,
  }));
