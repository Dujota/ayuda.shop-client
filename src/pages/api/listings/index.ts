import { type NextApiRequest, type NextApiResponse } from "next";

import { getServerAuthSession } from "@/server/common/get-server-auth-session";
import { createListing } from "@/lib/listings/mutations";

const restricted = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const session = await getServerAuthSession({ req, res });
    // Process a POST request

    if (session?.user?.accessToken) {
      const { accessToken } = session.user;

      const newListing = await createListing({ data: req.body, accessToken });
      res.send({
        data: newListing,
      });
    } else {
      res.send(401);
    }
  } else {
    // Handle any other HTTP method
    res.status(404);
  }
};

export default restricted;
