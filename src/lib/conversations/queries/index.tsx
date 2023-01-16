import { handleError, apiV1 } from "@/lib/services";
import type { authPageOptions } from "@/types/pages";

// All conversationsa are auth routes

export async function getMyConversations({ accessToken }: authPageOptions) {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const convRes = await apiV1.get("/conversations", config);

    return convRes.data.data;
  } catch (error: any) {
    handleError(error);
  }
}

export async function getOne({ slug, accessToken }: authPageOptions) {
  if (!slug || !accessToken) return null;

  try {
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const convRes = await apiV1.get(`/conversations/${slug}`, config);

    return convRes.data.data;
  } catch (error: any) {
    handleError(error);
  }
}
