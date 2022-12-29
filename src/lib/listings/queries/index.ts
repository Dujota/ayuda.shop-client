import { handleError, apiV1 } from "@/lib/services";

// PUBLIC
export async function getAllListings() {
  try {
    const listings = await apiV1.post("/listings");

    return { ...listings.data.data };
  } catch (error: any) {
    handleError(error);
  }
}

// AUTH
