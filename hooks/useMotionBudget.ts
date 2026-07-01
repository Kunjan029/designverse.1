"use client";

import { useEffect, useState } from "react";
import { prefersReducedMotion, isMobileDevice } from "@/lib/motion/reducedMotion";
import { atmosphereIntensity } from "@/lib/motion/transitions";
import { useDepth } from "@/lib/store";

export type MotionBudget = {
  // 0–1: overall atmosphere multiplier (clouds, glow, orbit speed)
  atmosphereLevel: number;
  // whether to render floating physics at all
  enablePhysics: boolean;
  // whether hover-driven parallax is available
  enableParallax: boolean;
  // whether to skip transition animations (just opacity)
  reducedMotion: boolean;
};

export function useMotionBudget(): MotionBudget {
  const depth = useDepth();
  const [budget, setBudget] = useState<MotionBudget>({
    atmosphereLevel: 1,
    enablePhysics: true,
    enableParallax: true,
    reducedMotion: false,
  });

  useEffect(() => {
    const reduced = prefersReducedMotion();
    const mobile = isMobileDevice();

    // Depth-driven atmosphere base
    const depthBase = atmosphereIntensity[depth] ?? 0;

    setBudget({
      atmosphereLevel: reduced ? 0 : mobile ? depthBase * 0.6 : depthBase,
      enablePhysics: !reduced && !mobile,
      enableParallax: !reduced && !mobile,
      reducedMotion: reduced,
    });
  }, [depth]);

  return budget;
}
