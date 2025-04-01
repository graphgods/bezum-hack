from strawberry import Schema, type, field

from src.schema.mutations.users import UserMutations
from src.schema.queries.users import UserQuery


@type()
class Query(UserQuery):
    @field(name="tvoyaMama")
    async def your_mam(self) -> str:
        return "Боже какая она толствая..."

@type
class Mutation(UserMutations):
    pass

schema = Schema(query=Query, mutation=Mutation)