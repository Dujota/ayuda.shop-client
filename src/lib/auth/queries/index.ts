import { handleError, instanceApiV1, parseToken } from "@/lib/services";
import type { getTokenOptions } from "@/types/auth";

export async function getToken({ provider, uid }: getTokenOptions) {
  try {
    const data = { auth: { provider, uid } };
    const tokenRes = await instanceApiV1.post("/nextauth/token", data);
    return parseToken(tokenRes);
  } catch (error: any) {
    handleError(error);
  }
}
