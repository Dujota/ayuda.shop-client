// src/providers/action_cable_provider.js
import type { ReactNode } from "react";
import { createContext, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import type { Channel } from "@/types/actioncable";

interface CableAppProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cable?: any;
  // i need the typing for  cable?.subscriptions?.create(
  subscriptions?: {
    create: (
      arg0: { channel: string; id: string | number },
      arg1: {
        connected: () => void;
        disconnected: () => void;
        received: (data: any) => void;
      }
    ) => Channel;
  };
  unsubscribe?: () => void;
}

// Create a context for the ActionCable provider
const ActionCableContext = createContext<CableAppProps | undefined>(undefined);

// Create the ActionCable provider
const ActionCableProvider = ({ children }: { children: ReactNode }) => {
  // Use the session to get the user's access token
  const { data: session } = useSession();
  // State to store the cable app
  const [CableApp, setCableApp] = useState<CableAppProps>({});

  // Async function to load the ActionCable consumer
  const loadConsumer = async () => {
    // Import the createConsumer function from the ActionCable library
    const { createConsumer } = await import("@rails/actioncable");
    return createConsumer;
  };

  // Use effect to create the cable app when the session is available and the cable app is not yet created
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      session?.user &&
      session?.user?.accessToken &&
      CableApp.cable === undefined
    ) {
      // Load the consumer and create the cable app
      loadConsumer().then((createConsumer) => {
        setCableApp({
          cable: createConsumer(
            `${process.env.NEXT_PUBLIC_API_WS_URL}?token=${session?.user?.accessToken}`
          ),
        });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  // Render the provider with the cable app as the value
  return (
    <ActionCableContext.Provider value={CableApp.cable}>
      {children}
    </ActionCableContext.Provider>
  );
};

export { ActionCableContext, ActionCableProvider };
