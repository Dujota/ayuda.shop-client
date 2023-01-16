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

    const conversations = await apiV1.get("/conversations", config);

    return conversations.data;
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
    const conversation = await apiV1.get(`/covnersations/${slug}`, config);

    return conversation.data;
  } catch (error: any) {
    handleError(error);
  }
}
