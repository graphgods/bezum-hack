import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/avtorizatciya")({
  component: Stranitca,
});

function Stranitca() {
  return (
    <div className="p-5">
      <h1>Авторизация</h1>
      
    </div>
  );
}
