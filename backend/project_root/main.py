from strawberry.asgi import GraphQL
from starlette.applications import Starlette

from project_root.utils import schema

app = Starlette()
gql = GraphQL(schema=schema, graphiql=True)

app.mount(path="/gql", app=gql)