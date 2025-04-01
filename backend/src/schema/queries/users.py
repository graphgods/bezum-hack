from strawberry import type, field

from src.core.services.user_service import UserService
from src.schema.types.user import UserType


@type
class UserQuery:
    @field(name="poluchitVsehPolzovateley")
    async def get_all_users(self) -> list[UserType]:
        list = await UserService().get_all_users()
        return await UserType.list_to_types(list)