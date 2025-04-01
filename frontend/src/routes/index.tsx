import { createFileRoute, Link } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="flex gap-2">
      <Toaster />
      <Link to="/avtorizatciya">Авторизация</Link>
      <Link to="/registratciya">Регистрация</Link>
    </div>
  );
}
