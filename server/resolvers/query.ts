import { locations } from "./locations.js";
import { Resolvers } from "./base.js";

export const Query: Resolvers["Query"] = {
  locations,
  // locations: async (_parent, { page }) => {
  //   return {
  //     locations: [],
  //     page: {
  //       current: page.num,
  //       size: page.size
  //     }
  //   }
  // }
}
