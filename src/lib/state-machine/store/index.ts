import type { GlobalState } from "little-state-machine";
import { conversations } from "./conversations";

export const store: GlobalState = {
  conversations,
};
