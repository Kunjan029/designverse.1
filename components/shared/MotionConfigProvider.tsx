"use client";

import { createContext, useContext, ReactNode } from "react";
import { useMotionBudget, MotionBudget } from "@/hooks/useMotionBudget";

const MotionContext = createContext<MotionBudget>({
  atmosphereLevel: 1,
  enablePhysics: true,
  enableParallax: true,
  reducedMotion: false,
});

export function MotionConfigProvider({ children }: { children: ReactNode }) {
  const budget = useMotionBudget();
  return (
    <MotionContext.Provider value={budget}>{children}</MotionContext.Provider>
  );
}

export const useMotionConfig = () => useContext(MotionContext);
