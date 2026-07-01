"use client";

import { useMotionConfig } from "@/components/shared/MotionConfigProvider";

// Phase 1: static radial-gradient placeholders at correct intensity levels.
// Phase 2: replaces with animated GlowClouds, CreativeCore SVG, and ToolOrbit.
export default function AtmosphereLayer() {
  const { atmosphereLevel } = useMotionConfig();

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: atmosphereLevel }}
      aria-hidden="true"
    >
      {/* Placeholder glow cloud A */}
      <div
        className="absolute top-[-20%] left-[-10%] h-[70vh] w-[70vw] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(139,92,246,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      {/* Placeholder glow cloud B */}
      <div
        className="absolute bottom-[-20%] right-[-10%] h-[60vh] w-[60vw] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(249,115,22,0.1) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />
      {/* Placeholder glow cloud C */}
      <div
        className="absolute top-[40%] left-[50%] h-[40vh] w-[40vw] rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(234,179,8,0.07) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
    </div>
  );
}
