import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/prilozhenie/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/prilozhenie/"!</div>;
}
