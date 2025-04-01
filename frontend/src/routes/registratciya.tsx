import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/registratciya")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/registratciya"!</div>;
}
