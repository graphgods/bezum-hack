import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { getIIOtvet } from "@/lib/ai-client";
import { createFileRoute } from "@tanstack/react-router";
import { Play } from "lucide-react";
import React, { useMemo } from "react";

export const Route = createFileRoute("/prilozhenie/_layout/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [podborki, setPodporki] = React.useState([]);
  const [podborka, setPodborka] = React.useState("");
  const [podborkaContent, setPodborkaContent] = React.useState("");

  React.useEffect(() => {
    const sdelatNooviyPodborki = async () => {
      const noviyPodborki = await getIIOtvet({
        zapros:
          "Сгенируй мне разные название подборок от злой мамы например вы плохой бизнесмен, вы плохой сын и верни просто динную строку перечисляя элементы через запятую максимум 4",
      });

      setPodporki(noviyPodborki.split(", "));
    };

    sdelatNooviyPodborki();
  }, []);

  React.useEffect(() => {
    const fetchContent = async () => {
      const text = await getIIOtvet({
        zapros: `Сгенируй мне много разных предложений который объяснит почему ${podborka}`,
      });

      setPodborkaContent(text);
    };

    fetchContent();
  }, [podborka]);

  return (
    <div className="h-full">
      <div className="h-[40vh] flex flex-col gap-2 justify-center items-center">
        <Button className="size-20 rounded-full">
          <Play className="size-5" />
        </Button>
        включить наставление
      </div>
      <div className="px-5">
        Подборки
        <Carousel>
          <CarouselContent className="ml-4 mt-4">
            {podborki.length === 0 &&
              "сейчас твоя мама придумает тебе подборки..."}
            {podborki.map((podborkaMap, i) => (
              <CarouselItem
                key={i}
                className="mr-4 bg-pink-500 basis-[33%] size-30 rounded-md text-white flex items-center"
              >
                <Drawer
                  onOpenChange={(otkritie) => {
                    switch (otkritie) {
                      case true:
                        setPodborka(podborkaMap);
                        break;
                      case false:
                        setPodborkaContent("");
                        setPodborka("");
                        break;
                    }
                  }}
                >
                  <DrawerTrigger onClick={() => setPodborka(podborkaMap)}>
                    {podborkaMap}
                  </DrawerTrigger>
                  <DrawerContent className="h-[60vh]">
                    <div className="text-center flex items-center justify-center">
                      {podborkaContent
                        ? podborkaContent
                        : `Твоя мама еще не придумала какой ${podborka}...`}
                    </div>
                  </DrawerContent>
                </Drawer>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="px-5 mt-10">
        Мамы ваших друзей
        <span className="block text-slate-500">
          Почитайте мнение о вас от других мам
        </span>
        <div className="w-full h-20 bg-pink-500 rounded-md relative">
          <img
            className="size-10 top-2 left-2 absolute"
            src="https://yandex-images.clstorage.net/rTM501M88/3f5cf72XQD/ua9_ZcVp7zvSLkbDZCCYMsObtK3smZ9EK2XOCnDZQUGxEnmFKL5zYPZatBSwTtRn870QVJyK3DJHD0ba95RsVf6sbimCKfVig2hfl2wjnTDexve88MObGTEnklY30BsYsBEUu1_HUw-KbZhmyzTON6m4E06BzZwJKxc79ZCEPzCLjWZI3k6wAcAFL-9HJZUh0NK7ks3HhyoldKpON70dVMNzM7RQ80Apo2agS-EW2iOmrBJ55OuMNxxPB8iInw4muaFaUeBdiR3AHy_KYguVFuHaj7La-aQKKVOySBetD0fUVgadRNRnMad7oE_6N8IEqrcTRu7ugCETVBTei64hD66DZ3fEa5QH3ysn71A9hTHM85yQ6MS9Mw1PvH4LkyZPwlEalXbefCWGb51wwzPGPJKOOX31yaM-JUI33pWfGRuFtFpuxlW0PfwsAvdKN7Q40feTgfH6oxgLWKFfD5wRX9dmBIF5_Fk-lnOwUsQz5xyOsDhZ5diTJg5UFcuxnjMrm7piatZ2hBD0NyLzaiSyIPjEsafZ_ZUIKWC3ay6EAm3TRj2nc8ljHb1Zs03zGe0Cgoo3b8n2hzIEZSLgnZAyDaGNbGPwXpUf7xQJ4Fc6jzDI1piM4NiTHQ1HgG4OpQNB8msPnnP1azSPb6Jl4zTyOLasP3P49p0sPlIS16OaNjSGuHxAz16VEfkLD9JIN5olyP2ggM7lswoFeItuC708VPNAAoFH53kUtVaeZ-sq-xOWiCZjwM2PEBF6DsChlwkLjJpzbsBqqxXFPCb-UD-_EtjErKThwLAzFGeKXz2DDEjWWCCpV8dBMpFSpFnuEtAzjr44fuDxuCMzYRPqvpgtDLqrbEDkYIYk9TUN-W8NrzDL4bCA6tmiEQVtunIRpg9x91sIo2fyfyK2WKNs2BPQMr2xMn_52KQmH1Y4_oOlNQuqtnlp9kiWLtELCchVDa8T2tCNrvT7uDEsd6l1IJw"
          />
          <section className="size-10 top-4 left-16 absolute text-white w-20">
            Мама Оля
          </section>
        </div>
      </div>
    </div>
  );
}
