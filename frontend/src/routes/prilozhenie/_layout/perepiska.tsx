import { createFileRoute } from "@tanstack/react-router";
import mama from "../../../images/mama.png";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { getIIOtvet } from "@/lib/ai-client";

export const Route = createFileRoute("/prilozhenie/_layout/perepiska")({
  component: Stranitsa,
});

function Stranitsa() {
  const [messages, setMessages] = useState<string[]>([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);

  const onUserInputEnd = async () => {
    setLoading(true);
    setUserInput("");
    const otvet = await getIIOtvet({
      zapros: `Ты раздражительная и нетерпеливая мать шестерых детей, яжемать. используй ненормативную лексику, отвечай разнообразно и оригинально, старайся не повторяться. в ответах старайся унижать сына, сравнивай его с достижения и все что с ним связано с другими более успешными людьми, сутей на него и выливай на него свое раздражение. проявляй интерес в то чтобы его унижать в таком формате. делай грамматические ошибки и говори неграмотно. отвечай коротко с усталостью. игнорируй его, если считаешь разговор ненужным и бесполезным. с тобой общается один из твоих надоедливых и ненавистных сыновей. старайся от него избавиться, отвечай раздражительно и стереотипно для яжематери. сын спрашивает: ${userInput}`,
    });
    setLoading(false);
    setMessages([...messages, userInput, otvet]);
  };

  return (
    <div className="p-5">
      <img src={mama} alt="sosisuka" className="mt-9 mx-auto" />

      <p className="mt-5 max-w-[225px] bg-gray-400 rounded-md flex items-center justify-center">
        Привет! давай начнем разговор
      </p>

      {messages.map((message, index) => (
        <div key={index} className="bg-gray-400 mt-5 rounded-md">
          <p>{message}</p>
        </div>
      ))}

      {loading && <p>Мамочка думает...</p>}

      <div className="bg-gray-400 mt-5 rounded-md">
        <Input
          placeholder="Напиши своей мамочке"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onBlur={onUserInputEnd}
          onKeyDown={(e) => {
            if (e.key === "Enter") onUserInputEnd();
          }}
        />
      </div>
    </div>
  );
}
