import axios from "axios";
import type { Credentials } from "@/types/auth";

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

    return userRes.data.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error("error message: ", error.message);

      throw new Error(error.message);
    } else {
      console.error("unexpected error: ", error);
      throw new Error("An unexpected error occurred");
    }
  }
}
