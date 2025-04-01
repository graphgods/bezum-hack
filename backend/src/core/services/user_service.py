from src.core.services.__base__ import BaseService


class UserService(BaseService):
    def __init__(self) -> None:
        super().__init__()

    async def create_user(self, username: str, password: str) -> dict:

        user = {
            "username": username,
            "password": password
        }

        self.repo.insert(user)
        return user
