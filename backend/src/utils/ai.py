from dataclasses import dataclass

from openai import OpenAI


@dataclass(init=True)
class AiClient:

    model: str = "deepseek/deepseek-r1:free"
    base_url: str = "https://openrouter.ai/api/v1"

    async def get_answer(
        self,
        api_key: str,
        prompt: str = "",
    ) -> str:
        client = OpenAI(
            api_key=api_key,
            base_url=self.base_url
        )
        response = client.chat.completions.create(
            model=self.model,
            messages=[
                {
                    "role": "system", "content": prompt
                },
            ]
        )
        return response.choices[0].message.content
