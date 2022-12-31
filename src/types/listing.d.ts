export interface Listing {
  id: number;
  user_id: number;
  type_id: number;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
}

export type ListingType = {
  id: number;
  tag: string;
  created_at: string;
  updated_at: string;
};

export type ListingTypeIndexProps = {
  types?: ListingType[];
};

export type NewListingFormValues = {
  type: string;
  title: string;
  description: string;
};

export type NewListingRequest = {
  type_id: string | number;
  title: string;
  description: string;
};
