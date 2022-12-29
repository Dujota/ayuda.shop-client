import type { Credentials, loginWithProviderOptions } from "@/types/auth";

import {
  handleError,
  instanceApiV1,
  instanceBase,
  parseToken,
} from "@/lib/services";

export async function loginWithEmail(credentials: Credentials | undefined) {
  try {
    const data = {
      user: {
        email: credentials?.email,
        password: credentials?.password,
      },
    };
    const userRes = await instanceBase.post("/login", data);
    return { ...userRes.data.data, token: parseToken(userRes) };
  } catch (error: any) {
    handleError(error);
  }
}

export async function loginWithProvider({
  user,
  account,
  profile,
}: loginWithProviderOptions) {
  try {
    const data = {
      auth: {
        provider: account?.provider,
        uid: account?.providerAccountId,
        email_verified: profile?.email_verified || profile?.verified,
        credentials: {
          access_token: account?.access_token,
          id_token: account?.id_token,
          expires_at: account?.expires_at,
        },
        info: {
          email: user.email,
          image: user.image,
          name: user.name,
          family_name: profile?.family_name,
          given_name: profile?.given_name,
          locale: profile?.locale,
        },
      },
    };

    const oauthRes = await instanceApiV1.post("/nextauth/oauth", data);
    return oauthRes.data.data;
  } catch (error: any) {
    handleError(error);
  }
}
