import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import DiscordProvider from "next-auth/providers/discord";
import GoogleProvider from "next-auth/providers/google";
// Services
import * as Services from "@/lib/auth/services";
// Next Auth Server
import { env } from "../../../env/server.mjs";
// Types
import type { UserAPI } from "@/types/auth.js";

export const authOptions: NextAuthOptions = {
  session: {
    // Choose how you want to save the user session.
    // The default is `"jwt"`, an encrypted JWT (JWE) stored in the session cookie.
    // If you use an `adapter` however, we default it to `"database"` instead.
    // You can still force a JWT session by explicitly defining `"jwt"`.
    // When using `"database"`, the session cookie will only contain a `sessionToken` value,
    // which is used to look up the session in the database.
    // strategy: "database",

    // Seconds - How long until an idle session expires and is no longer valid.
    // maxAge: 30 * 24 * 60 * 60, // 30 days
    maxAge: 30 * 60, // 30 mins

    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    // updateAge: 24 * 60 * 60, // 24 hours

    // The session token is usually either a random UUID or string, however if you
    // need a more customized session token string, you can define your own generate function.
    // generateSessionToken: () => {
    //   return randomUUID?.() ?? randomBytes(32).toString("hex")
    // }
  },
  jwt: {
    // The maximum age of the NextAuth.js issued JWT in seconds.
    // Defaults to `session.maxAge`.
    maxAge: 60 * 30,
    // You can define your own encode/decode functions for signing and encryption
    // async encode() { },
    // async decode() { },
  },
  // Include user.id on session
  callbacks: {
    async session({ session, user, token }) {
      // TODO: Pull some information from our use from the rails backend

      // Add the rails api token to our session context
      debugger;
      return { ...session, accessToken: token.accessToken };
    },
    // CONFIGURE BELOW FOR API CONNECTION
    async signIn({ user, account, profile, email, credentials }) {
      // TODO: Implement user role restrictions here
      debugger;
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      // copy over the rails token to the jwt payload
      if (user) {
        const data: UserAPI = { ...user };
        debugger;
        if (data?.token) {
          return { ...token, accessToken: data.token };
        }
      }

      return token;
    },
  },
  // Configure one or more authentication providers
  providers: [
    DiscordProvider({
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      id: "login",
      name: "login",
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          return await Services.loginWithEmail(credentials);
        } catch (error: any) {
          throw new Error(error.message);
        }
      },
    }),
    // CredentialsProvider({
    //   id: "signup",
    //   async authorize(credentials) {
    //     try {
    //       return await Auth.signup(credentials);
    //     } catch (error) {
    //       throw new Error(error.message);
    //     }
    //   },
    // }),
    // ...add more providers here
    /* EmailProvider({
       server: process.env.EMAIL_SERVER,
       from: process.env.EMAIL_FROM,
     }),
  */
  ],
};

export default NextAuth(authOptions);
