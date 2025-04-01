from src.core.services.__base__ import BaseService

class UserService(BaseService):
    def __init__(self) -> None:
        super().__init__()

    async def create_user(self) -> dict:
        username = "маминкин сыночек"
        password = "в твоем возрасте уже пора бы и съехать"

        user = {
            "username": username,
            "password": password
        }

        self.repo.insert(user)
        return user