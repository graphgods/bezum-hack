import Together from "together-ai";

export const AI_TOKEN = "07b8af60ea716f8fcda8cc72ef79a29a5350abe7b8fdd5a73e7412f371dd433e";

const together = new Together();

export const getIIOtvet = async ({ zapros }: { zapros: string }) => {
  const res = await together.chat.completions.create({
    messages: [{ role: "user", content: zapros }],
    model: "meta-llama/Llama-3.3-70B-Instruct-Turbo-Free",
  });

  return res.choices[0].message?.content || "а не пошел ка бы ты нахуй";
};
