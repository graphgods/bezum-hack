from tinydb import TinyDB, Query
from typing import Any, Dict, List, Optional


class TinyDBRepository:

    def __init__(self, db_path: str = "db.json"):
        """
        Инициализация репозитория с указанным файлом базы данных.
        """
        self.db = TinyDB(db_path)
        self.table = self.db.table("default")

    def insert(self, data: Dict[str, Any]) -> int:
        """
        Вставляет запись в базу данных и возвращает ее ID.
        """
        return self.table.insert(data)

    def get_by_id(self, doc_id: int) -> Optional[Dict[str, Any]]:
        """
        Получает запись по ID.
        """
        return self.table.get(doc_id=doc_id)

    def get_all(self) -> List[Dict[str, Any]]:
        """
        Получает все записи из таблицы.
        """
        return self.table.all()

    def search(self, field: str, value: Any) -> List[Dict[str, Any]]:
        """
        Поиск записей по определенному полю.
        """
        query = Query()
        return self.table.search(query[field] == value)

    def update(self, doc_id: int, data: Dict[str, Any]) -> bool:
        """
        Обновляет запись по ID. Возвращает True, если запись была обновлена.
        """
        return bool(self.table.update(data, doc_ids=[doc_id]))

    def delete(self, doc_id: int) -> bool:
        """
        Удаляет запись по ID. Возвращает True, если запись была удалена.
        """
        return bool(self.table.remove(doc_ids=[doc_id]))

    def clear(self) -> None:
        """
        Очищает таблицу.
        """
        self.table.truncate()

    def set_table(self, table_name: str) -> None:
        """
        Устанавливает активную таблицу в базе данных.
        """
        self.table = self.db.table(table_name)