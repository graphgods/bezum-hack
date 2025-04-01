import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/avtorizatciya")({
  component: Stranitca,
});

const users = [
  {
    name: "сыночка корзиночка",
    password: "123",
  },
  {
    name: "сыночка корзиночка",
    password: "1234",
  },
  {
    name: "сыночка корзиночка",
    password: "1235",
  },
];

function Stranitca() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [polzovatel, vibratPolzovatelya] = useState<(typeof users)[number] | undefined>();

  return (
    <div className="p-5">
      <h1 className="mb-5">Авторизация</h1>
      <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
        <DrawerTrigger>
          <Input disabled placeholder="Выберите пользователя" value={polzovatel?.name} />
        </DrawerTrigger>
        <DrawerContent>
          {users.map((user) => (
            <div
              key={user.name}
              className={cn(
                "flex items-center gap-2",
                users.find((u) => u.name === polzovatel?.name) && "bg-blue-500"
              )}
              onClick={() => {
                vibratPolzovatelya(user);
                setDrawerOpen(false);
              }}
            >
              <Avatar>
                <AvatarFallback>
                  {user.name[0]} {user.name[1]}
                </AvatarFallback>
              </Avatar>
              {user.name}
            </div>
          ))}
        </DrawerContent>
      </Drawer>
      {polzovatel && (
        <div className="mt-5 flex flex-col gap-2">
          <p>Это ваш пароль?</p>
          <p>{polzovatel.password}</p>
          <div className="flex gap-2">
            <Button>
              <Link to="/">Мой</Link>
            </Button>
            <Button
              onClick={() => {
                if (!polzovatel) return;
                const currentIndex = users.findIndex((u) => u === polzovatel);
                if (currentIndex === -1) return;
                const nextIndex = (currentIndex + 1) % users.length;
                vibratPolzovatelya(users[nextIndex]);
              }}
            >
              Не мой
            </Button>
          </div>
        </div>
      )}

      <Button asChild>
        <Link to="/registratciya" className="mt-5">
          Зарегистрироваться
        </Link>
      </Button>
    </div>
  );
}
