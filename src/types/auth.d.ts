import {
  type User,
  type AdapterUser,
  type Account,
  type Profile,
} from "next-auth";

export interface Credentials {
  email: string;
  password: string;
  csrfToken?: string;
}

export interface UserAPI extends User {
  accessToken?: string | any;
  id?: string | any;
  provider?: string | any;
}

// TODO: figure out how to spec out the provider
export interface ProviderProfile extends Profile {
  verified?: boolean | undefined;
  email_verified?: boolean | undefined;
  family_name?: string | undefined;
  given_name?: string | undefined;
  locale?: string | undefined;
}
export interface loginWithProviderOptions {
  user: User | AdapterUser;
  account?: Account | null;
  profile?: ProviderProfile | undefined;
}

export interface getTokenOptions {
  provider: string;
  uid: string;
}
