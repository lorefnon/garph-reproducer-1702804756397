import { buildSchema } from "garph"
import { g } from "./api-schema.js"
import { Query } from "./resolvers/query.js"

export const schema = buildSchema({
  g,
  resolvers: {
    Query
  }
})

