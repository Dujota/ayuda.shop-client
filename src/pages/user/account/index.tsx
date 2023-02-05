import Layout from "@/components/common/layout/layout";
import { type NextPage } from "next";
import { useSession } from "next-auth/react";

const AcccountPage: NextPage = () => {
  const { data } = useSession();

  return (
    <Layout>
      <p>AcccountPage </p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Layout>
  );
};

export default AcccountPage;
