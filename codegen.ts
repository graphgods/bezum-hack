import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://bezum.hack.makridenko.ru/gql/",
  documents: ["frontend/src/**/*.graphql"],
  generates: {
    "./frontend/src/gql/": {
      preset: "client",
    },
  },
};
export default config;
