import { useState } from "react";
import {
  BellRing,
  Eye,
  Gamepad2,
  Info,
  RotateCcw,
  Save,
  Sliders,
  Vibrate,
} from "lucide-react";
import { ActionButton, KeyValue, Panel, SegmentedRow, ToggleRow } from "./ui";

const toggles = [
  { id: "autostart", label: "Auto-Launch In Game", desc: "Open with any game", icon: Gamepad2 },
  { id: "float", label: "Floating Bubble", desc: "Always-on shortcut", icon: Eye },
  { id: "haptics", label: "Haptic Feedback", desc: "Vibrate on toggle", icon: Vibrate },
  { id: "alerts", label: "Performance Alerts", desc: "Warn on overheat", icon: BellRing },
];

export function SettingsPage() {
  const [on, setOn] = useState<string[]>(["autostart", "float"]);
  const [size, setSize] = useState("md");
  const [position, setPosition] = useState("left");

  const toggle = (id: string) =>
    setOn((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));

  return (
    <div className="space-y-3">
      <Panel title="Overlay Preferences">
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

      <Panel title="Panel Size">
        <SegmentedRow
          options={[
            { id: "sm", label: "Small" },
            { id: "md", label: "Medium" },
            { id: "lg", label: "Large" },
          ]}
          value={size}
          onChange={setSize}
        />
      </Panel>

      <Panel title="Dock Position">
        <SegmentedRow
          options={[
            { id: "left", label: "Left" },
            { id: "center", label: "Center" },
            { id: "right", label: "Right" },
          ]}
          value={position}
          onChange={setPosition}
        />
      </Panel>

      <Panel title="Manage">
        <div className="grid grid-cols-2 gap-2">
          <ActionButton icon={Save} label="Save Profile" hint="Store current setup" />
          <ActionButton icon={Sliders} label="Advanced Tuning" hint="Per-game options" />
          <ActionButton icon={RotateCcw} label="Reset Defaults" hint="Clear all changes" />
          <ActionButton icon={Info} label="Diagnostics" hint="Device report" />
        </div>
      </Panel>

      <Panel title="About">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <KeyValue label="Version" value="4.2.1" accent />
          <KeyValue label="Engine" value="GS Core" />
          <KeyValue label="Device" value="Optimised" />
          <KeyValue label="Profiles" value="6 saved" />
        </div>
      </Panel>
    </div>
  );
}
