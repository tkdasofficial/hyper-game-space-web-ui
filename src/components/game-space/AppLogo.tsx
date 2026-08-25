/**
 * Replaceable app logo. Swap this component's contents (or drop in an <img />)
 * when the final Game Space logo asset is available.
 */
export function AppLogo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex size-9 items-center justify-center border border-red/60 bg-red/10 card-chamfer ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="size-5 text-red" fill="none" strokeWidth="2">
        <path d="M12 3 20 7.5v9L12 21 4 16.5v-9L12 3Z" stroke="currentColor" />
        <path d="M15.5 10.5H12V13h2v1.4a3 3 0 1 1-1.2-5.6" stroke="currentColor" strokeLinecap="square" />
      </svg>
    </span>
  );
}
