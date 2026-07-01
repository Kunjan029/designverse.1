"use client";

import {
  useActiveCategory,
  useCategoryTransitionPhase,
  usePendingCategory,
  useActions,
} from "@/lib/store";

export function useCategoryTransition() {
  const activeCategory = useActiveCategory();
  const phase = useCategoryTransitionPhase();
  const pendingCategory = usePendingCategory();
  const { openCategory, switchCategory, onRetractionComplete, onEmergenceComplete } = useActions();

  const isRetracting = phase === "retracting";
  const isEmerging = phase === "emerging";
  const isIdle = phase === "idle";

  // Called by FloatingProjectField's exit animation `onAnimationComplete`
  const handleRetractComplete = () => {
    if (phase === "retracting") onRetractionComplete();
  };

  // Called by FloatingProjectField's entrance animation `onAnimationComplete`
  const handleEmergeComplete = () => {
    if (phase === "emerging") onEmergenceComplete();
  };

  const selectCategory = (slug: string) => {
    if (!activeCategory) {
      openCategory(slug);
    } else {
      switchCategory(slug);
    }
  };

  return {
    activeCategory,
    pendingCategory,
    phase,
    isRetracting,
    isEmerging,
    isIdle,
    selectCategory,
    handleRetractComplete,
    handleEmergeComplete,
  };
}
