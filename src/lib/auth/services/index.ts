import axios from "axios";
import type {
  Credentials,
  getTokenOptions,
  loginWithProviderOptions,
} from "@/types/auth";

function handleError(error: any) {
  if (axios.isAxiosError(error)) {
    console.error("error message: ", error.message);

    throw new Error(error.message);
  } else {
    console.error("unexpected error: ", error);
    throw new Error("An unexpected error occurred");
  }
}

// TODO: Revisit helper to add auth header into user res
// function addAuthTo(response: any) {
//   if (!response) return null;

//   const token = response.headers.authorization.split(" ")[1];
//   return {
//     ...response.data,
//     token,
//   };
// }

function parseToken(response: any) {
  if (!response?.headers?.authorization) return null;
  return response.headers.authorization.split(" ")[1];
}

export async function loginWithEmail(credentials: Credentials | undefined) {
  try {
    const options = {
      url: `${process.env.API_BASE_URL}/login`,
      method: "POST",
      data: {
        user: {
          email: credentials?.email,
          password: credentials?.password,
        },
      },
    };
    const userRes = await axios(options);
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
    const options = {
      url: `${process.env.V1_API_BASE}/nextauth/oauth`,
      method: "POST",
      data: {
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
      },
    };

    const oauthRes = await axios(options);
    return oauthRes.data.data;
  } catch (error: any) {
    handleError(error);
  }
}

export async function getToken({ provider, uid }: getTokenOptions) {
  try {
    const options = {
      url: `${process.env.V1_API_BASE}/nextauth/token`,
      method: "POST",
      data: { auth: { provider, uid } },
    };

    const tokenRes = await axios(options);
    return parseToken(tokenRes);
  } catch (error: any) {
    handleError(error);
  }
}
