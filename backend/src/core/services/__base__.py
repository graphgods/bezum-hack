from src.infrastructure.__repo__ import TinyDBRepository


class BaseService:
    def __init__(self) -> None:
        self.repo = TinyDBRepository()