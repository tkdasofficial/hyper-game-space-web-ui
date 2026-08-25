import { createFileRoute } from "@tanstack/react-router";
import { GameSpaceOverlay } from "@/components/game-space/GameSpaceOverlay";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Game Space — In-Game Toolbox Overlay" },
      {
        name: "description",
        content:
          "Game Space in-game toolbox overlay: live performance status, performance modes and quick gaming tools.",
      },
      { property: "og:title", content: "Game Space — In-Game Toolbox Overlay" },
      {
        property: "og:description",
        content:
          "Live performance status, performance modes and quick tools in a compact in-game toolbox overlay.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <GameSpaceOverlay />;
}
