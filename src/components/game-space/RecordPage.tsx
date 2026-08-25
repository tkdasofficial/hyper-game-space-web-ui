import { useState } from "react";
import {
  Camera,
  Circle,
  Clapperboard,
  FolderOpen,
  Mic,
  Monitor,
  Scissors,
  Square,
  Timer,
} from "lucide-react";
import { ActionButton, KeyValue, Panel, SegmentedRow, ToggleRow } from "./ui";

const clips = [
  { name: "Squad Wipe", meta: "00:42 · 1080p · 86 MB" },
  { name: "Final Circle", meta: "01:18 · 1080p · 154 MB" },
  { name: "Sniper Streak", meta: "00:26 · 720p · 38 MB" },
];

export function RecordPage() {
  const [recording, setRecording] = useState(false);
  const [quality, setQuality] = useState("1080");
  const [on, setOn] = useState<string[]>(["mic"]);

  const toggle = (id: string) =>
    setOn((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));

  return (
    <div className="space-y-3">
      <Panel title="Capture">
        <button
          type="button"
          onClick={() => setRecording((r) => !r)}
          aria-pressed={recording}
          className={`flex w-full items-center gap-3 border px-3 py-3 transition-colors duration-150 card-chamfer ${
            recording ? "border-red bg-red/12" : "border-border bg-surface-2 hover:border-red/40"
          }`}
        >
          {recording ? (
            <Square className="size-5 shrink-0 text-red" />
          ) : (
            <Circle className="size-5 shrink-0 text-red/80" />
          )}
          <span className="min-w-0 flex-1 text-left">
            <span className="block text-[13px] font-semibold text-foreground">
              {recording ? "Stop Recording" : "Start Recording"}
            </span>
            <span className="block text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
              {recording ? "Recording · 00:12" : "Ready to capture"}
            </span>
          </span>
          {recording && <span className="size-2 shrink-0 animate-pulse bg-red" />}
        </button>

        <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
          <KeyValue label="Status" value={recording ? "Live" : "Idle"} accent={recording} />
          <KeyValue label="Length" value={recording ? "00:12" : "00:00"} />
          <KeyValue label="Free Space" value="12.4 GB" />
          <KeyValue label="Bitrate" value="12 Mbps" />
        </div>
      </Panel>

      <Panel title="Resolution">
        <SegmentedRow
          options={[
            { id: "720", label: "720p" },
            { id: "1080", label: "1080p" },
            { id: "1440", label: "2K" },
          ]}
          value={quality}
          onChange={setQuality}
        />
      </Panel>

      <Panel title="Capture Options">
        <div className="grid grid-cols-1 gap-2">
          <ToggleRow
            icon={Mic}
            label="Record Microphone"
            desc="Capture your voice"
            on={on.includes("mic")}
            onToggle={() => toggle("mic")}
          />
          <ToggleRow
            icon={Monitor}
            label="Show Touch Marks"
            desc="Overlay tap points"
            on={on.includes("touch")}
            onToggle={() => toggle("touch")}
          />
          <ToggleRow
            icon={Timer}
            label="Auto Highlights"
            desc="Clip kills automatically"
            on={on.includes("auto")}
            onToggle={() => toggle("auto")}
          />
        </div>
        <div className="mt-2 grid grid-cols-2 gap-2">
          <ActionButton icon={Camera} label="Screenshot" hint="Capture frame" />
          <ActionButton icon={Clapperboard} label="Save Last 30s" hint="Instant replay" />
          <ActionButton icon={Scissors} label="Trim Clip" hint="Quick editor" />
          <ActionButton icon={FolderOpen} label="Open Gallery" hint="All captures" />
        </div>
      </Panel>

      <Panel title="Recent Clips">
        <div className="grid grid-cols-1 gap-2">
          {clips.map((c) => (
            <div
              key={c.name}
              className="flex min-w-0 items-center gap-2.5 border border-border bg-surface-2 px-3 py-2.5 card-chamfer"
            >
              <Clapperboard className="size-4 shrink-0 text-red/80" />
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[13px] font-semibold text-foreground">{c.name}</span>
                <span className="block truncate text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
                  {c.meta}
                </span>
              </span>
            </div>
          ))}
        </div>
      </Panel>
    </div>
  );
}
