import { type NextPage } from "next";

import { useRouter } from "next/router";

const Listing: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  return <p>Listing: {slug}</p>;
};

export default Listing;
