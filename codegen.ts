import type { CodegenConfig } from "@graphql-codegen/cli";

const NEXT_PUBLIC_AMATERUS_HASURA_GRAPHQL_SCHEMA_URL =
  process.env.NEXT_PUBLIC_AMATERUS_HASURA_GRAPHQL_SCHEMA_URL
const AMATERUS_HASURA_GRAPHQL_ADMIN_SECRET = process.env.AMATERUS_HASURA_GRAPHQL_ADMIN_SECRET

function load_schema(): CodegenConfig["schema"] {
  if (NEXT_PUBLIC_AMATERUS_HASURA_GRAPHQL_SCHEMA_URL === undefined) {
    return [];
  }

  const options = AMATERUS_HASURA_GRAPHQL_ADMIN_SECRET !== undefined ? {
    headers: {
      'X-Hasura-Admin-Secret': AMATERUS_HASURA_GRAPHQL_ADMIN_SECRET,
    },
  } : {};

  return [
    {
      [NEXT_PUBLIC_AMATERUS_HASURA_GRAPHQL_SCHEMA_URL]: options,
    },
  ]
}

const schema = load_schema();

const config: CodegenConfig = {
  schema,
  documents: ['./src/**/*.graphql'],
  overwrite: true,
  generates: {
    './src/generated/graphql.tsx': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
}

export default config;
