"use client";

import AtmosphereLayer from "@/components/core/AtmosphereLayer";
import PersistentNav from "@/components/core/PersistentNav";
import WelcomeScreen from "@/components/depths/WelcomeScreen";
import UniverseMap from "@/components/depths/UniverseMap";
import CategorySpace from "@/components/depths/CategorySpace";
import FocusedProjectView from "@/components/depths/FocusedProjectView";
import PortfolioIndex from "@/components/index-mode/PortfolioIndex";
import { MotionConfigProvider } from "@/components/shared/MotionConfigProvider";
import { useDepth, useIndexMode } from "@/lib/store";

function ContentLayer() {
  const depth = useDepth();
  const indexMode = useIndexMode();

  return (
    <>
      {/* Index overlay — above everything, exits gracefully */}
      {indexMode && <PortfolioIndex />}

      {/* Depth-gated content — only one depth mounts at a time */}
      {depth === 0 && <WelcomeScreen />}
      {(depth === 1 || depth === 2) && <UniverseMap />}
      {depth === 2 && <CategorySpace />}
      {depth === 3 && <FocusedProjectView />}
    </>
  );
}

export default function DesignverseRoot() {
  return (
    <MotionConfigProvider>
      {/* Layer 1 — atmosphere: always mounted, opacity driven by depth */}
      <AtmosphereLayer />

      {/* Layer 2 — persistent nav: Core + Index toggle, always on top */}
      <PersistentNav />

      {/* Layer 3 — content: depth-gated screens */}
      <div className="relative z-10 min-h-screen">
        <ContentLayer />
      </div>
    </MotionConfigProvider>
  );
}
