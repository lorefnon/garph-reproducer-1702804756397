import { Resolvers } from "./base.js";

export const locations: Resolvers["Query"]["locations"] = async (_parent, { page }) => {
  return {
    locations: [],
    page: {
      current: page.num,
      size: page.size
    }
  }
}

