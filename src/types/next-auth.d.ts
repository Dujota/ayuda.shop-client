import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";
import { type DefaultSession } from "next-auth";
import type { UserAPI } from "./auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */

  // TODO: revisit why this is still causing TS error in the session callback
  interface Session {
    user: UserAPI & DefaultSession["user"];
  }

  interface User {
    token?: string;
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    idToken?: string;
    id?: string;
    provider?: string;
    accessToken?: string;
  }
}
