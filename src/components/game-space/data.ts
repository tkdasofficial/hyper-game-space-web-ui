import {
  LayoutGrid,
  Briefcase,
  Wifi,
  Circle,
  Settings,
  Leaf,
  Scale,
  Gauge,
  Rocket,
  MemoryStick,
  TrendingUp,
  PhoneOff,
  BellOff,
  Crop,
  Video,
  PointerOff,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export type NavId = "dashboard" | "tools" | "network" | "record" | "settings";

export const navItems: { id: NavId; label: string; icon: LucideIcon }[] = [
  { id: "dashboard", label: "Dashboard", icon: LayoutGrid },
  { id: "tools", label: "Tools", icon: Briefcase },
  { id: "network", label: "Network", icon: Wifi },
  { id: "record", label: "Record", icon: Circle },
  { id: "settings", label: "Settings", icon: Settings },
];

export const metrics = [
  { label: "CPU", value: "45%", percent: 45, secondary: "2.3 GHz" },
  { label: "GPU", value: "60%", percent: 60, secondary: "587 MHz" },
  { label: "RAM", value: "70%", percent: 70, secondary: "5.6 / 8 GB" },
  { label: "TEMP", value: "38°C", percent: 38, secondary: "Good", ok: true },
];

export const modes: { id: string; name: string; desc: string; icon: LucideIcon }[] = [
  { id: "economy", name: "Economy", desc: "Battery saving", icon: Leaf },
  { id: "balance", name: "Balance", desc: "Balanced", icon: Scale },
  { id: "ultra", name: "Ultra", desc: "High performance", icon: Gauge },
  { id: "extreme", name: "Extreme", desc: "Maximum power", icon: Rocket },
];

export const quickTools: { id: string; label: string; icon: LucideIcon; toggle?: boolean }[] = [
  { id: "ram", label: "Clear RAM", icon: MemoryStick },
  { id: "fps", label: "Boost FPS", icon: TrendingUp, toggle: true },
  { id: "calls", label: "Block Calls", icon: PhoneOff, toggle: true },
  { id: "notifs", label: "Block Notifs", icon: BellOff, toggle: true },
  { id: "shot", label: "Screenshot", icon: Crop },
  { id: "record", label: "Screen Record", icon: Video, toggle: true },
  { id: "touch", label: "Touch Lock", icon: PointerOff, toggle: true },
  { id: "netlock", label: "Network Lock", icon: ShieldCheck, toggle: true },
];
