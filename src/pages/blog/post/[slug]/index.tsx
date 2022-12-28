import { type NextPage } from "next";

import { useRouter } from "next/router";

const Post: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  return <p>Post: {slug}</p>;
};

export default Post;
