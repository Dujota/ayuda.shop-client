import axios from "axios";
import { TIMEOUT } from "../constants";

export const apiV1 = axios.create({
  baseURL: process.env.V1_API_BASE,
  timeout: TIMEOUT,
  headers: {
    Accept: "application/json",
  },
});

export const apiBase = axios.create({
  baseURL: process.env.API_BASE_URL,
  timeout: TIMEOUT,
  headers: {
    Accept: "application/json",
  },
});

export const nextApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: TIMEOUT,
  headers: {
    Accept: "application/json",
  },
});

export function handleError(error: any) {
  debugger;
  if (axios.isAxiosError(error)) {
    console.error("error message: ", error.message);
    // TODO: throwing the error triggers react.errorboundary when fetching in getServerSideProps
    // these errors include 401 from the api (any api error code)
    console.log(error);
    throw new Error(error.message);
  } else {
    console.error("unexpected error: ", error);
    throw new Error("An unexpected error occurred");
  }
}

export function parseToken(response: any) {
  if (!response?.headers?.authorization) return null;
  return response.headers.authorization.split(" ")[1];
}
