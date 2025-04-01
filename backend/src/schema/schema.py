from strawberry import Schema, type, field


@type()
class Query:
    @field(name="tvoyaMama")
    async def your_mam(self) -> str:
        return "Боже какая она толствая..."