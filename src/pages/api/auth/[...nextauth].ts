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
  // Include user.id on session
  callbacks: {
    async session({ session, user, token }) {
      // TODO: Pull some information from our use from the rails backend

      // Add the rails api token to our session context
      return { ...session, accessToken: token.accessToken };
    },
    // CONFIGURE BELOW FOR API CONNECTION
    async signIn({ user, account, profile, email, credentials }) {
      // TODO: Implement user role restrictions here
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      // copy over the rails token to the jwt payload
      if (user) {
        const data: UserAPI = { ...user };

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
