"use client";

import CoreHomeButton from "@/components/core/CoreHomeButton";
import IndexToggle from "@/components/core/IndexToggle";

export default function PersistentNav() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 pointer-events-none"
      aria-label="Designverse persistent navigation"
    >
      <div className="pointer-events-auto">
        <CoreHomeButton />
      </div>

      {/* Index toggle visible from all depths */}
      <div className="pointer-events-auto">
        <IndexToggle />
      </div>
    </nav>
  );
}
