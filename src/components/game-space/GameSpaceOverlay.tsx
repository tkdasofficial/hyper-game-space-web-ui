import { useState } from "react";
import gameBg from "@/assets/game-bg.jpg";
import { AppLogo } from "./AppLogo";
import { Dashboard } from "./Dashboard";
import { SectionTitle } from "./SectionTitle";
import { navItems, type NavId } from "./data";

function LiveTelemetry() {
  const items = [
    { label: "PING", value: "20ms", ok: true },
    { label: "FPS", value: "90", ok: true },
    { label: "TEMP", value: "38°C" },
  ];
  return (
    <div className="flex items-center gap-5">
      {items.map((i) => (
        <div key={i.label} className="flex flex-col items-center leading-tight">
          <span className="text-[10px] font-medium tracking-[0.16em] text-muted-foreground">{i.label}</span>
          <span className={`text-sm font-bold ${i.ok ? "text-status-ok" : "text-foreground"}`}>{i.value}</span>
        </div>
      ))}
    </div>
  );
}

function PlaceholderPage({ title, note }: { title: string; note: string }) {
  return (
    <section className="border border-border bg-surface-1 p-4 card-chamfer">
      <SectionTitle>{title}</SectionTitle>
      <p className="mt-3 text-sm text-muted-foreground">{note}</p>
    </section>
  );
}

export function GameSpaceOverlay() {
  const [nav, setNav] = useState<NavId>("dashboard");

  return (
    <div className="relative min-h-screen overflow-hidden bg-surface-0">
      <img
        src={gameBg}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1088}
        className="absolute inset-0 size-full scale-105 object-cover blur-[5px] brightness-[0.55] saturate-[0.75]"
      />
      <div className="absolute inset-0 bg-surface-0/45" aria-hidden="true" />


      <div className="relative flex min-h-screen items-center justify-center p-3 sm:p-6">
        <div
          className="border border-border bg-surface-0/95 panel-chamfer flex flex-col overflow-hidden w-[92vw] max-w-[1200px] sm:w-[68vw] aspect-[3/2] max-h-[80vh] sm:max-h-[72vh]"
          style={{ boxShadow: "var(--shadow-panel)" }}
        >
          <header className="flex shrink-0 items-center justify-between gap-4 border-b border-border bg-surface-1/80 px-4 py-3">
            <div className="flex items-center gap-3">
              <AppLogo />
              <h1 className="text-lg font-bold uppercase tracking-[0.12em] text-foreground">
                Game <span className="text-red">Space</span>
              </h1>
            </div>
            <LiveTelemetry />
          </header>

          <div className="flex min-h-0 flex-1">
            <nav aria-label="Toolbox sections" className="w-[86px] shrink-0 border-r border-border bg-rail py-2">
              {navItems.map((item) => {
                const isActive = nav === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setNav(item.id)}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative flex w-full flex-col items-center gap-1.5 px-1 py-3.5 transition-colors duration-150 ${
                      isActive ? "bg-red/12" : "hover:bg-surface-2/70"
                    }`}
                  >
                    {isActive && <span className="absolute left-0 top-2 bottom-2 w-[3px] bg-red" />}
                    <item.icon className={`size-5 ${isActive ? "text-red" : "text-muted-foreground"}`} />
                    <span
                      className={`text-[11px] ${isActive ? "font-semibold text-red" : "text-muted-foreground"}`}
                    >
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </nav>

            <main className="min-w-0 flex-1 overflow-auto p-3 sm:p-4">
              {nav === "dashboard" && <Dashboard />}
              {nav === "tools" && (
                <PlaceholderPage title="Gaming Tools" note="Extended in-game tools will appear here." />
              )}
              {nav === "network" && (
                <PlaceholderPage title="Network" note="Network optimization and monitoring controls." />
              )}
              {nav === "record" && (
                <PlaceholderPage title="Record" note="Screen recording and capture controls." />
              )}
              {nav === "settings" && (
                <PlaceholderPage title="Settings" note="Toolbox preferences and overlay behaviour." />
              )}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
