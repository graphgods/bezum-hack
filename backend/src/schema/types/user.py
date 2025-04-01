from strawberry import type


@type(name="Polsovatel")
class UserType:
    username: str
    password: str
    photo: str

    @staticmethod
    async def list_to_types(data: list) -> list["UserType"]:
        return [UserType(**item) for item in data]