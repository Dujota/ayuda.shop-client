import { type User } from "next-auth";

export interface Credentials {
  email?: string;
  password?: string;
  csrfToken?: string;
}

export interface UserAPI extends User {
  token?: string | undefined;
}
