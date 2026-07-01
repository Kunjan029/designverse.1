import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center bg-void">
      <p className="font-body text-[10px] tracking-widest2 uppercase text-white/30">404</p>
      <h1 className="font-display text-3xl text-white/80">This universe doesn&apos;t exist.</h1>
      <Link
        href="/"
        className="font-body text-[10px] tracking-widest2 uppercase text-white/40 hover:text-white transition-colors"
      >
        → Return to Designverse
      </Link>
    </div>
  );
}
