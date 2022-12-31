import { handleError, apiV1, nextApi } from "@/lib/services";
import type { NewListingRequest } from "@/types/listing";

type CreateListingsOptions = {
  accessToken?: string;
  data: NewListingRequest;
};

// Auth
export async function createListing({
  accessToken,
  data,
}: CreateListingsOptions) {
  // if (!accessToken) throw new Error("401 - Access Denied");

  try {
    let newListingRes;
    if (accessToken) {
      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      newListingRes = await apiV1.post("/listings", data, config);
      debugger;
    } else {
      newListingRes = await nextApi.post("/listings", data);
    }

    return newListingRes.data;
  } catch (error: any) {
    handleError(error);
  }
}
