import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Toaster } from "sonner";
import kartaKartinka from '../images/photo_2025-04-01_13-58-15.jpg'

export const Route = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools />
      <Toaster />
      <Drawer>
        <DrawerTrigger asChild>
          <Button className="text-xs size-20 p-0 block  rounded all break-all fixed right-4 bottom-16">
            Вы
            <br /> организатор <br />
            БЕЗУМhack?
          </Button>
        </DrawerTrigger>
        <DrawerContent className="text-center">
          <h4 className="mt-20">Места где можно купить удлинитель</h4>
          <img src={kartaKartinka} className="w-full h-100 mb-20"/>
        </DrawerContent>
      </Drawer>
    </>
  ),
});
