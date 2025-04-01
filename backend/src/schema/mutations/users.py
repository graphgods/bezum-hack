from strawberry import type, mutation, input, field

from src.core.services.user_service import UserService
from src.schema.types.user import UserType


@input(name="dannieDlyaRegistracii")
class RegInput:
    api_client: str = field(
        name="token_v_vide_stroki_dlya_podkluchenia_api_openapi_ili_deepseek_nu_chto_to_takoe")


@type
class UserMutations:
    @mutation(name="sozdaniePolzovatelya")
    async def create_user(self, input: RegInput) -> UserType:
        user = await UserService().create_user()
        return UserType(**user)