"use client";

import { MotionConfigProvider } from "@/components/shared/MotionConfigProvider";
import AtmosphereLayer from "@/components/core/AtmosphereLayer";

export default function DesignverseRoot() {
  return (
    <MotionConfigProvider>
      <AtmosphereLayer />
      <div>Hello Designverse</div>
    </MotionConfigProvider>
  );
}
