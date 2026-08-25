import { useState } from "react";
import {
  Activity,
  Gauge,
  Globe,
  Router,
  ShieldCheck,
  SignalHigh,
  Wifi,
  Zap,
} from "lucide-react";
import { ActionButton, KeyValue, Panel, SegmentedRow, StatBar, ToggleRow } from "./ui";

const pingHistory = [22, 18, 27, 20, 31, 24, 19, 21, 35, 26, 20, 23, 17, 29, 21, 24];

const toggles = [
  { id: "boost", label: "Network Boost", desc: "Prioritise game packets", icon: Zap },
  { id: "dual", label: "Dual Channel", desc: "Wi-Fi + mobile data", icon: Router },
  { id: "lock", label: "Network Lock", desc: "Block other apps", icon: ShieldCheck },
  { id: "dns", label: "Gaming DNS", desc: "Low-latency resolver", icon: Globe },
];

export function NetworkPage() {
  const [on, setOn] = useState<string[]>(["boost"]);
  const [region, setRegion] = useState("asia");

  const toggle = (id: string) =>
    setOn((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));

  const max = Math.max(...pingHistory);

  return (
    <div className="space-y-3">
      <Panel title="Connection Status">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <KeyValue label="Ping" value="20ms" accent />
          <KeyValue label="Jitter" value="4ms" />
          <KeyValue label="Loss" value="0.2%" />
          <KeyValue label="Type" value="5G" />
        </div>
        <div className="mt-3 space-y-2.5">
          <StatBar label="Download" value="86 Mbps" percent={78} />
          <StatBar label="Upload" value="24 Mbps" percent={42} />
          <StatBar label="Signal" value="Strong" percent={88} />
        </div>
      </Panel>

      <Panel title="Latency Graph">
        <div className="flex h-[64px] items-end gap-[3px]">
          {pingHistory.map((p, i) => (
            <div
              key={i}
              className={`min-w-0 flex-1 ${p > 28 ? "bg-red" : "bg-red/45"}`}
              style={{ height: `${(p / max) * 100}%` }}
            />
          ))}
        </div>
        <div className="mt-2 flex items-center justify-between text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
          <span>60s ago</span>
          <span className="text-red">avg 23ms</span>
          <span>now</span>
        </div>
      </Panel>

      <Panel title="Server Region">
        <SegmentedRow
          options={[
            { id: "asia", label: "Asia" },
            { id: "eu", label: "Europe" },
            { id: "na", label: "N. America" },
          ]}
          value={region}
          onChange={setRegion}
        />
      </Panel>

      <Panel title="Network Tools">
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
        <div className="mt-2 grid grid-cols-2 gap-2">
          <ActionButton icon={Gauge} label="Speed Test" hint="Measure bandwidth" />
          <ActionButton icon={Activity} label="Ping Test" hint="Check game server" />
          <ActionButton icon={Wifi} label="Reconnect" hint="Reset link" />
          <ActionButton icon={SignalHigh} label="Optimise Route" hint="Pick best path" />
        </div>
      </Panel>
    </div>
  );
}
