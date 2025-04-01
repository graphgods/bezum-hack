from src.infrastructure.__repo__ import TinyDBRepository


class BaseService:
    def __init__(self, db: str) -> None:
        self.repo = TinyDBRepository(db_path=db)