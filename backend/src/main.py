from strawberry.asgi import GraphQL
from starlette.applications import Starlette

from src.schema.schema import schema

app = Starlette()
gql = GraphQL(schema=schema, graphiql=True)
app.mount(path="/gql", app=gql)