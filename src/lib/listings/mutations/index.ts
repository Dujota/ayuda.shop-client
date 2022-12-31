import { handleError, apiV1 } from "@/lib/services";
import type { authPageOptions } from "@/types/pages";

type CreateListingsOptions = {
  accessToken: string;
};

// Auth
export async function createListing({ accessToken }) {
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
