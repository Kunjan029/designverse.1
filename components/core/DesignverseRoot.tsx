"use client";

import { MotionConfigProvider } from "@/components/shared/MotionConfigProvider";

export default function DesignverseRoot() {
  return (
    <MotionConfigProvider>
      <div>Hello Designverse</div>
    </MotionConfigProvider>
  );
}
