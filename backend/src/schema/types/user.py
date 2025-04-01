from strawberry import type


@type(name="Polsovatel")
class UserType:
    username: str
    password: str