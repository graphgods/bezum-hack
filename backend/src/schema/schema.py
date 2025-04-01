from strawberry import Schema, type, field

from src.schema.mutations.users import UserMutations
from src.schema.queries.users import UserQuery
from src.schema.queries.tts import TextToSoundQuery


@type()
class Query(UserQuery, TextToSoundQuery):
    @field(name="tvoyaMama")
    async def your_mam(self) -> str:
        return "Боже какая она толствая..."


@type
class Mutation(UserMutations):
    pass


schema = Schema(query=Query, mutation=Mutation)