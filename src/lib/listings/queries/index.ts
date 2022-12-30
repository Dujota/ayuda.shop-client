import { handleError, apiV1 } from "@/lib/services";

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
export async function getOne(slug = "") {
  if (!slug) return null;

  try {
    const listing = await apiV1.get(`/listings/${slug}`);

    return listing.data;
  } catch (error: any) {
    handleError(error);
  }
}
