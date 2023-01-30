import type { Channel } from "@/types/actioncable";
import { useContext, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { ActionCableContext } from "../provider";
import useMount from "@/lib/hooks/useMount";

const useActionCable = (
  options: {
    channel: string;
    conversation_id?: number | string;
    sender_id: number | string;
  },
  onReceive: (data: any) => void,
  onConnect?: () => void,
  onDisconnect?: () => void,
  keepAlive = false
): Channel => {
  const { data: session } = useSession();
  const [channel, setChannel] = useState<Channel | undefined>();
  const cable = useContext(ActionCableContext);
  const mounted = useMount();

  // cleanup
  useEffect(() => {
    return () => {
      if (channel && !keepAlive) {
        channel.unsubscribe();
      }
    };
  }, [channel]);

  useEffect(() => {
    if (
      session?.user &&
      session?.user?.accessToken &&
      !channel &&
      cable &&
      mounted
    ) {
      const newChannel = cable?.subscriptions?.create(options, {
        connected: () => {
          console.log(`${options?.channel} connected!`);
          if (typeof onConnect === "function") {
            onConnect();
          }
        },
        disconnected: () => {
          console.log(`${options?.channel} disconnected!`);
          if (typeof onDisconnect === "function") {
            onDisconnect();
          }
        },
        received: (data: any) => {
          onReceive(data);
        },
      });

      setChannel(newChannel);
    }
  }, [
    mounted,
    options,
    session,
    cable,
    channel,
    onReceive,
    onConnect,
    onDisconnect,
  ]);

  return channel as Channel;
};

export default useActionCable;
