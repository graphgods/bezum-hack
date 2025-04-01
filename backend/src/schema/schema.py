from strawberry import Schema, type, field

from src.schema.mutations.users import UserMutations


@type()
class Query:
    @field(name="tvoyaMama")
    async def your_mam(self) -> str:
        return "Боже какая она толствая..."

@type
class Mutation(UserMutations):
    pass

schema = Schema(query=Query, mutation=Mutation)