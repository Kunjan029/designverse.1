"use client";

import { MotionConfigProvider } from "@/components/shared/MotionConfigProvider";
import AtmosphereLayer from "@/components/core/AtmosphereLayer";
import PersistentNav from "@/components/core/PersistentNav";

export default function DesignverseRoot() {
  return (
    <MotionConfigProvider>
      <AtmosphereLayer />
      <PersistentNav />
      <div>Hello Designverse</div>
    </MotionConfigProvider>
  );
}
