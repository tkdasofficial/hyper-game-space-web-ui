import { useState } from "react";
import {
  Crosshair,
  Focus,
  Hand,
  MessageSquareOff,
  Moon,
  Sparkles,
  Sun,
  Trash2,
  Wand2,
  Zap,
} from "lucide-react";
import { ActionButton, Panel, SegmentedRow, ToggleRow } from "./ui";

const toggles = [
  { id: "crosshair", label: "Crosshair Overlay", desc: "Aim assist marker", icon: Crosshair },
  { id: "focus", label: "Focus Mode", desc: "Hide all overlays", icon: Focus },
  { id: "gesture", label: "Gesture Lock", desc: "Block edge swipes", icon: Hand },
  { id: "chat", label: "Mute Chat Popups", desc: "Silence in-game chat", icon: MessageSquareOff },
  { id: "night", label: "Night Shield", desc: "Warm screen filter", icon: Moon },
  { id: "sharp", label: "Image Sharpening", desc: "Boost texture clarity", icon: Sparkles },
];

const actions = [
  { id: "clean", label: "Deep Clean", hint: "Free junk files", icon: Trash2 },
  { id: "turbo", label: "Turbo Flush", hint: "Kill background apps", icon: Zap },
  { id: "calib", label: "Touch Calibrate", hint: "Re-sync response", icon: Wand2 },
  { id: "bright", label: "Brightness Lock", hint: "Freeze at current", icon: Sun },
];

export function ToolsPage() {
  const [on, setOn] = useState<string[]>(["focus"]);
  const [sensitivity, setSensitivity] = useState("mid");

  const toggle = (id: string) =>
    setOn((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));

  return (
    <div className="space-y-3">
      <Panel title="Gaming Tools">
        <div className="grid grid-cols-1 gap-2">
          {toggles.map((t) => (
            <ToggleRow
              key={t.id}
              icon={t.icon}
              label={t.label}
              desc={t.desc}
              on={on.includes(t.id)}
              onToggle={() => toggle(t.id)}
            />
          ))}
        </div>
      </Panel>

      <Panel title="Touch Sensitivity">
        <SegmentedRow
          options={[
            { id: "low", label: "Low" },
            { id: "mid", label: "Medium" },
            { id: "high", label: "High" },
          ]}
          value={sensitivity}
          onChange={setSensitivity}
        />
      </Panel>

      <Panel title="Instant Actions">
        <div className="grid grid-cols-2 gap-2">
          {actions.map((a) => (
            <ActionButton key={a.id} icon={a.icon} label={a.label} hint={a.hint} />
          ))}
        </div>
      </Panel>
    </div>
  );
}
