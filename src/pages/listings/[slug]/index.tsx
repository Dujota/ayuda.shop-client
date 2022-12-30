import { getOne } from "@/lib/listings/queries";
import type { Listing as ListingType } from "@/types/listing";
import type { GetServerSidePropsContext, NextPage } from "next";
import type { GetServerSideProps } from "next";
import { useRouter } from "next/router";

type Props = {
  listing?: ListingType;
};

const ListingDetailPage: NextPage = ({ listing }: Props) => {
  const router = useRouter();

  return <p>{listing?.title}</p>;
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const slug = params?.slug;
  if (!slug || typeof slug !== "string") return { props: { listing: null } };

  if (slug) {
    const listing: ListingType = await getOne(slug);
    return { props: { listing } };
  }

  return { props: { listing: null } };
};

export default ListingDetailPage;
