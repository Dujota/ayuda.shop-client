import axios from "axios";
import type { Credentials } from "@/types/auth";

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
      url: `${process.env.NEXT_BASE_URL}/login`,
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
    // return addAuthTo(userRes);
  } catch (error: any) {
    handleError(error);
  }
}
