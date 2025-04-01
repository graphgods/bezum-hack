from openai import OpenAI


async def get_ai_answer(
    api_key: str,
    base_url: str,
    model: str,
    prompt: str,
    message: str,
) -> str:
    client = OpenAI(
        api_key=api_key,
        base_url=base_url
    )
    response = client.chat.completions.create(
        model=model,
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
