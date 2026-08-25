import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { SectionTitle } from "./SectionTitle";
import { MarqueeText } from "./MarqueeText";

export function Panel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border border-border bg-surface-1 p-3 card-chamfer">
      <SectionTitle>{title}</SectionTitle>
      <div className="mt-2">{children}</div>
    </section>
  );
}

export function ToggleRow({
  icon: Icon,
  label,
  desc,
  on,
  onToggle,
}: {
  icon: LucideIcon;
  label: string;
  desc: string;
  on: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={on}
      className={`flex w-full min-w-0 items-center gap-2.5 border px-3 py-2.5 text-left transition-colors duration-150 card-chamfer ${
        on ? "border-red bg-red/12" : "border-border bg-surface-2 hover:border-red/40"
      }`}
    >
      <Icon className={`size-4 shrink-0 ${on ? "text-red" : "text-red/80"}`} />
      <span className="min-w-0 flex-1">
        <MarqueeText text={label} className="text-[13px] font-semibold text-foreground" />
        <span className="mt-0.5 block truncate text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
          {desc}
        </span>
      </span>
      <span
        className={`relative h-4 w-8 shrink-0 border transition-colors duration-150 ${
          on ? "border-red bg-red/30" : "border-border bg-surface-0"
        }`}
      >
        <span
          className={`absolute top-[2px] size-[10px] transition-all duration-150 ${
            on ? "left-[18px] bg-red" : "left-[2px] bg-muted-foreground"
          }`}
        />
      </span>
    </button>
  );
}

export function ActionButton({
  icon: Icon,
  label,
  hint,
  active,
  onClick,
}: {
  icon: LucideIcon;
  label: string;
  hint?: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full min-w-0 flex-col items-start gap-1 border px-3 py-2.5 text-left transition-colors duration-150 card-chamfer ${
        active ? "border-red bg-red/12" : "border-border bg-surface-2 hover:border-red/40"
      }`}
    >
      <Icon className={`size-4 ${active ? "text-red" : "text-red/80"}`} />
      <MarqueeText text={label} className="text-[13px] font-semibold text-foreground" />
      {hint && (
        <span className="block w-full truncate text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
          {hint}
        </span>
      )}
    </button>
  );
}

export function StatBar({
  label,
  value,
  percent,
}: {
  label: string;
  value: string;
  percent: number;
}) {
  return (
    <div className="min-w-0">
      <div className="flex items-baseline justify-between gap-2">
        <span className="truncate text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
          {label}
        </span>
        <span className="text-[12px] font-bold text-foreground">{value}</span>
      </div>
      <div className="mt-1 h-[5px] w-full bg-surface-2">
        <div className="h-full bg-red transition-[width] duration-300" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}

export function KeyValue({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="flex flex-col border border-border bg-surface-2 px-2.5 py-2 card-chamfer">
      <span className="truncate text-[9px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </span>
      <span className={`text-[13px] font-bold ${accent ? "text-red" : "text-foreground"}`}>{value}</span>
    </div>
  );
}

export function SegmentedRow({
  options,
  value,
  onChange,
}: {
  options: { id: string; label: string }[];
  value: string;
  onChange: (id: string) => void;
}) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {options.map((o) => {
        const isActive = o.id === value;
        return (
          <button
            key={o.id}
            type="button"
            onClick={() => onChange(o.id)}
            aria-pressed={isActive}
            className={`border px-2 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] transition-colors duration-150 card-chamfer ${
              isActive
                ? "border-red bg-red/12 text-foreground"
                : "border-border bg-surface-2 text-muted-foreground hover:border-red/40 hover:text-foreground"
            }`}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
