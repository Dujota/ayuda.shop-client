import { type DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */

  // TODO: revisit why this is still causing TS error in the session callback
  interface Session {
    accessToken: string;
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}
