import { type InferResolvers } from "garph";
import { QueryT } from "../api-schema.js";
import { type YogaInitialContext } from "graphql-yoga";

export type Resolvers = InferResolvers<{ Query: typeof QueryT }, { context: YogaInitialContext }>
