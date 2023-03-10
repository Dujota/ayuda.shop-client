import { handleError, apiV1 } from "@/lib/services";
import type { authPageOptions } from "@/types/pages";

// PUBLIC
export async function getAllListings() {
  try {
    const listings = await apiV1.get("/listings");

    return listings.data;
  } catch (error: any) {
    handleError(error);
  }
}

// AUTH
export async function getOne({ slug, accessToken }: authPageOptions) {
  if (!slug || !accessToken) return null;

  try {
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const listing = await apiV1.get(`/listings/${slug}`, config);

    return listing.data;
  } catch (error: any) {
    handleError(error);
  }
}
