import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { Home, MessageCircle, MousePointerClickIcon } from "lucide-react";

export const Route = createFileRoute("/prilozhenie/_layout")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="h-screen">
      <Outlet />
      <div className="h-12"></div>
      <div className="h-12 fixed bottom-0 left-0 right-0 flex gap-8  text-white justify-center items-center bg-pink-800">
        <a href="/prilozhenie">
          <div className="flex gap-1">
            Главная <Home />{" "}
          </div>
        </a>
        <Link to="/prilozhenie/perepiska">
          <div className="flex gap-1">
            Чат <MessageCircle />
          </div>
        </Link>

        <div className="flex gap-1">
          Тап <MousePointerClickIcon />{" "}
        </div>
      </div>
    </div>
  );
}
