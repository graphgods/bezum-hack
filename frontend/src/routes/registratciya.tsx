import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getIIOtvet } from "@/lib/ai-client";
import { cn } from "@/lib/utils";
import { createFileRoute } from "@tanstack/react-router";
import { RefreshCcw } from "lucide-react";
import React, { useEffect } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/registratciya")({
  component: RouteComponent,
});

function RouteComponent() {
  const [parol, setParol] = React.useState("");
  const [pochta, setPochta] = React.useState("");
  const [yaRobot, setYaRobot] = React.useState("");
  const [photoUroda, setPhotoUroda] = React.useState("");
  const [shagSSochineniem, setShagSSochineniem] = React.useState(false);

  useEffect(() => {
    console.log('asdasd')
    const asinxronnayFunckiaPochta = async () => {
      const pochta = await getIIOtvet({
        zapros: "Сгенируй мне рандомную почту например urod@mail.ru",
      });
      setPochta(pochta);
    };
    const asinxronnayFunckiaParol = async () => {
      const parol = await getIIOtvet({
        zapros:
          'Сгенируй мне пароль из осуждающих русских слов например с антуражом злой мамы с использованием стандартных фраз например "Вырастешь — поймешь", "Где внуки?" и оставь только в ответе пароль ',
      });

      setParol(parol);
    };

    asinxronnayFunckiaPochta();
    asinxronnayFunckiaParol();
  }, []);

  return (
    <>
      {shagSSochineniem ? (
        <div className="p-5">
          <div className="flex justify-between">
            <Button>Назад</Button>
            <a href="/">
              <Button variant={"secondary"}>Отправить</Button>
            </a>
          </div>
          <h2 className="">
            <small className="text-3xl block">Ваше сочинение</small>
            Зачем вас нас брать
          </h2>

          <Textarea className="h-100" />
        </div>
      ) : (
        <div className={cn("space-y-5 p-5")}>
          <span className="block">Регистрация</span>
          <Input placeholder="Електронна пошта" value={pochta} />
          <div className="relative">
            <Input placeholder="анадобыло лучше" value={parol} />
            <RefreshCcw
              className="absolute right-2 top-1.5"
              onClick={async () => {
                const noviyParol = await getIIOtvet({
                  zapros:
                    'Сгенируй мне пароль из осуждающих русских слов например с антуражом злой мамы с использованием стандартных фраз например "Вырастешь — поймешь", "Где внуки?" и оставь только в ответе пароль ',
                });
                setParol(noviyParol);
              }}
            />
          </div>

          <div>
            Загрузи свое детское фото
            <Input
              type="file"
              onChange={(e) => setPhotoUroda(e.target.files[0])}
            />
            <img
              className="w-100 h-100"
              src={photoUroda ? URL.createObjectURL(photoUroda) : ""}
            />
          </div>

          <div className="flex space-x-5">
            <Checkbox onCheckedChange={(robot) => setYaRobot(robot)} />
            <h5>Я робот</h5>
          </div>

          <Button
            onClick={() =>
              yaRobot
                ? toast.message(
                    "Ты читать разучился? Куда смотришь, когда жмешь? Ты как робот, всё не так делаешь!"
                  )
                : setShagSSochineniem(true)
            }
          >
            Дальше
          </Button>
        </div>
      )}
    </>
  );
}
