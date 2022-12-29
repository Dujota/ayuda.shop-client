import type { GetStaticProps, NextPage } from "next";
import type { Listing } from "@/types/listing";

const ListingsLandingPage: NextPage = (pageProps) => {
  return <div>Listings Landing Page</div>;
};

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: Listing[] = sampleUserData;
  return { props: { items } };
};

export default ListingsLandingPage;
