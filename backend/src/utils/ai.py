from dataclasses import dataclass

from openai import OpenAI


@dataclass(init=True)
class AiClient:

    model: str = "deepseek-ai/DeepSeek-R1-Distill-Llama-70B-free"
    base_url: str = "https://api.together.xyz/v1"

    async def get_answer(
        self,
        api_key: str,
        prompt: str = "",
        message: str = "",
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
                {
                    "role": "user", "content": message
                }
            ]
        )
        return response.choices[0].message.content
