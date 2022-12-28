import { type NextPage } from "next";
import { useSession } from "next-auth/react";

const AcccountPage: NextPage = () => {
  const { data } = useSession();

  return (
    <>
      <p>AcccountPage </p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};

export default AcccountPage;
