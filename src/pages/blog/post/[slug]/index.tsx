import { type NextPage } from "next";

import { useRouter } from "next/router";

import Layout from "@/components/common/layout/layout";

const Post: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Layout>
      <p>Post: {slug}</p>;
    </Layout>
  );
};

export default Post;
