import { handleError, apiV1, nextApi, handleSuccess } from "@/lib/services";
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
  try {
    let newListingRes;
    if (accessToken) {
      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      newListingRes = await apiV1.post("/listings", data, config);
    } else {
      newListingRes = await nextApi.post("/listings", data);
    }

    return handleSuccess(newListingRes);
  } catch (error: any) {
    return handleError(error);
  }
}
