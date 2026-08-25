import type { ReactNode } from "react";

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.14em] text-foreground">
      <span className="h-3.5 w-[3px] bg-red" />
      {children}
    </h2>
  );
}
