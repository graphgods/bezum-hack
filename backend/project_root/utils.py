from strawberry import Schema, type, field


@type
class Query:
    @field(name="tvoyaMama")
    async def mother(self) -> str:
        return "Боже какая она жирная."


schema = Schema(query=Query)