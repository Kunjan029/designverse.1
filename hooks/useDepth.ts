"use client";

import { useDepth, usePreviousDepth, useActions } from "@/lib/store";
import type { Depth } from "@/lib/store";

export function useDepthSystem() {
  const depth = useDepth();
  const previousDepth = usePreviousDepth();
  const { enter, goHome } = useActions();

  const isDepth = (d: Depth) => depth === d;

  // Direction of the last depth transition — used by animations to slide in
  // from the correct direction (deeper = from bottom/right, shallower = from top/left)
  const direction: "deeper" | "shallower" | "none" =
    depth > previousDepth ? "deeper" : depth < previousDepth ? "shallower" : "none";

  return { depth, previousDepth, direction, isDepth, enter, goHome };
}
