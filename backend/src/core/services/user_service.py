from src.core.services.__base__ import BaseService
from src.core.photos import get_random_photo


class UserService(BaseService):
    def __init__(self) -> None:
        super().__init__(db="users.json")

    async def create_user(self, username: str, email: str, password: str) -> dict:

        user = {
            "username": username,
            "password": password,
            "photo": await get_random_photo()
            "email": email,
            "password": password
        }

        self.repo.insert(user)
        return user

    async def get_all_users(self) -> list[dict]:
        return self.repo.get_all()
