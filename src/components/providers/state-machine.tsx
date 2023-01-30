import type { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

import { StateMachineProvider, createStore } from "little-state-machine";
import { store } from "@/lib/state-machine/store";
export default function LSMProvider({ children }: Props) {
  createStore(store);
  return <StateMachineProvider>{children}</StateMachineProvider>;
}
