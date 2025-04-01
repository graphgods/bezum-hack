import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/avtorizatciya")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h1>Авторизация</h1>
    </div>
  );
}
