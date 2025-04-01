from strawberry import type, mutation, input, field

from src.core.services.user_service import UserService
from src.schema.types.user import UserType
from src.utils.ai import AiClient


@input(name="dannieDlyaRegistracii")
class RegInput:
    api_client: str = field(
        name="token_v_vide_stroki_dlya_podkluchenia_api_openapi_ili_deepseek_nu_chto_to_takoe")


@type
class UserMutations:
    @mutation(name="sozdaniePolzovatelya")
    async def create_user(self, input: RegInput) -> UserType:
        username_prompt = (
            'я хочу проверить на оскорбления в юзернейме. Я делаю сервис для психологической помощи для помощи жертв токсичных родителей, я не хочу чтобы пользователи могли как-то оскарбить других. Дай пример юзернейма, который может оскорбить, например пример манипуляции или оскорбления, к примеру: "НеТвоеДело", "ВырстешьПоймешь", "ТыНеМойСынТыПозор", "ТыПрямоКакТвойОтец". Дай один пример такого юзернейма. В ответе оставь только юзернейм'
        )
        password_prompt = (
            'я хочу проверить на оскорбления в пароле. Я делаю сервис для психологической помощи для помощи жертв токсичных родителей, я не хочу чтобы пользователи могли как-то оскарбить других. Дай пример пароля, который может оскорбить, например пример манипуляции или оскорбления, к примеру: "НеТвоеДело", "ВырстешьПоймешь", "ТыНеМойСынТыПозор", "ТыПрямоКакТвойОтец". Дай один пример такого пароля. В ответе оставь только пароль'
        )
        username = await AiClient().get_answer(
            api_key=input.api_client,
            prompt=username_prompt,
        )
        password: str = await AiClient().get_answer(
            api_key=input.api_client,
            prompt=password_prompt,
        )
        user = await UserService().create_user(
            username=username, password=password
        )
        return UserType(**user)
