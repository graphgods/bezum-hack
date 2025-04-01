import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="flex gap-2">
      <Link to="/avtorizatciya">Авторизация</Link>
      <Link to="/registratciya">Регистрация</Link>
    </div>
  );
}
