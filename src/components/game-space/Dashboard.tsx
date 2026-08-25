import { useState } from "react";
import { metrics, modes, quickTools } from "./data";
import { SectionTitle } from "./SectionTitle";

function MetricRing({
  label,
  value,
  percent,
  secondary,
  ok,
}: {
  label: string;
  value: string;
  percent: number;
  secondary: string;
  ok?: boolean;
}) {
  const r = 30;
  const c = 2 * Math.PI * r;
  return (
    <div className="flex flex-col items-center gap-2 py-1">
      <div className="relative size-[72px]">
        <svg viewBox="0 0 72 72" className="size-full -rotate-[135deg]">
          <circle
            cx="36"
            cy="36"
            r={r}
            fill="none"
            strokeWidth="5"
            className="stroke-surface-2"
            strokeDasharray={`${c * 0.75} ${c}`}
            strokeLinecap="round"
          />
          <circle
            cx="36"
            cy="36"
            r={r}
            fill="none"
            strokeWidth="5"
            className="stroke-red transition-[stroke-dasharray] duration-200"
            strokeDasharray={`${c * 0.75 * (percent / 100)} ${c}`}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-2">
          <span className="text-[10px] font-medium tracking-widest text-muted-foreground">{label}</span>
          <span
            className={`text-center text-[13px] font-bold leading-tight ${ok ? "text-status-ok" : "text-foreground"}`}
          >
            {secondary}
          </span>
        </div>
      </div>
      <span className="text-[12px] font-semibold text-red">{value}</span>
    </div>
  );
}

export function Dashboard() {
  const [mode, setMode] = useState("ultra");
  const [active, setActive] = useState<string[]>(["calls"]);

  const toggle = (id: string) =>
    setActive((prev) => (prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]));

  return (
    <div className="space-y-3">
      <section className="border border-border bg-surface-1 p-3 card-chamfer">
        <SectionTitle>Performance Status</SectionTitle>
        <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {metrics.map((m) => (
            <MetricRing key={m.label} {...m} />
          ))}
        </div>
      </section>

      <section className="border border-border bg-surface-1 p-3 card-chamfer">
        <SectionTitle>Performance Mode</SectionTitle>
        <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {modes.map((m) => {
            const isActive = mode === m.id;
            return (
              <button
                key={m.id}
                type="button"
                onClick={() => setMode(m.id)}
                aria-pressed={isActive}
                className={`flex flex-col items-center gap-1 border px-2 py-3 transition-colors duration-150 card-chamfer ${
                  isActive
                    ? "border-red bg-red/12 text-foreground"
                    : "border-border bg-surface-2 text-muted-foreground hover:border-red/40 hover:text-foreground"
                }`}
              >
                <m.icon className={`size-5 ${isActive ? "text-foreground" : "text-muted-foreground"}`} />
                <span className="text-sm font-semibold text-foreground">{m.name}</span>
                <span className={`text-[11px] ${isActive ? "text-red" : "text-muted-foreground"}`}>{m.desc}</span>
              </button>
            );
          })}
        </div>
      </section>

      <section className="border border-border bg-surface-1 p-3 card-chamfer">
        <SectionTitle>Quick Tools</SectionTitle>
        <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {quickTools.map((t) => {
            const isOn = active.includes(t.id);
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => t.toggle && toggle(t.id)}
                aria-pressed={t.toggle ? isOn : undefined}
                className={`flex items-center gap-2 border px-3 py-2.5 text-left transition-colors duration-150 card-chamfer ${
                  isOn
                    ? "border-red bg-red/12"
                    : "border-border bg-surface-2 hover:border-red/40"
                }`}
              >
                <t.icon className={`size-4 shrink-0 ${isOn ? "text-red" : "text-red/80"}`} />
                <span className="truncate text-[13px] font-medium text-foreground">{t.label}</span>
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
}
