import type { Channel } from "@/types/actioncable";
import { useContext, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { ActionCableContext } from "../provider";

const useActionCable = (
  channelName: string,
  channelId: string | number,
  onReceive: (data: any) => void,
  onConnect?: () => void,
  onDisconnect?: () => void
): Channel => {
  const { data: session } = useSession();
  const [channel, setChannel] = useState<Channel | undefined>();
  const cable = useContext(ActionCableContext);

  useEffect(() => {
    if (session?.user && session?.user?.accessToken && !channel && cable) {
      const newChannel = cable?.subscriptions?.create(
        {
          channel: channelName,
          id: channelId,
        },
        {
          connected: () => {
            console.log(`${channelName} connected!`);
            if (typeof onConnect === "function") {
              onConnect();
            }
          },
          disconnected: () => {
            console.log(`${channelName} disconnected!`);
            if (typeof onDisconnect === "function") {
              onDisconnect();
            }
          },
          received: (data: any) => {
            onReceive(data);
          },
        }
      );

      setChannel(newChannel);
    }
    return () => {
      if (channel) {
        channel.unsubscribe();
        ``;
      }
    };
  }, [
    channelName,
    channelId,
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
