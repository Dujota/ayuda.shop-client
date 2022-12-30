import { handleError, apiV1 } from "@/lib/services";
import type { authPageOptions } from "@/types/pages";

// PUBLIC
export async function getAllTypes(accessToken: string) {
  if (!accessToken) return null;

  try {
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const listings = await apiV1.get("/types", config);

    return listings.data;
  } catch (error: any) {
    handleError(error);
  }
}

// AUTH
export async function getOne({ id, accessToken }: authPageOptions) {
  if (!id || !accessToken) return null;

  try {
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const listing = await apiV1.get(`/types/${id}`, config);

    return listing.data;
  } catch (error: any) {
    handleError(error);
  }
}
