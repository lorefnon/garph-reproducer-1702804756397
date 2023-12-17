import { NN } from "./types.js";

export const ensureNN = <T> (t: T): NN<T> => {
  if (t == null) throw new Error("Unexpected null value");
  return t;
}
