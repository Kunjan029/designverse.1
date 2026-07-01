"use client";

import { useActions } from "@/lib/store";
import IndexToggle from "@/components/core/IndexToggle";

export default function WelcomeScreen() {
  const { enter } = useActions();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      {/* Wordmark */}
      <p className="font-body text-[10px] tracking-widest2 uppercase text-white/40 mb-5">
        Welcome to
      </p>

      <h1 className="font-display text-5xl md:text-7xl font-light text-white leading-tight mb-3">
        Kunjan&apos;s
        <br />
        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent font-normal">
          Designverse
        </span>
      </h1>

      <p className="font-body text-sm tracking-widest2 uppercase text-white/40 mt-4 mb-14">
        Explore Creative Universes
      </p>

      {/* Enter CTA */}
      <button
        onClick={enter}
        className="group relative px-10 py-4 font-body text-xs tracking-widest2 uppercase text-white border border-white/20 hover:border-white/60 transition-all duration-500"
        aria-label="Enter the Designverse"
      >
        <span className="relative z-10">Enter</span>
        <span className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-500" />
      </button>

      {/* Fast path — quietly available even at the door */}
      <div className="mt-8 opacity-50 hover:opacity-100 transition-opacity">
        <IndexToggle />
      </div>
    </div>
  );
}
