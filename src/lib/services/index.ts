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

export function handleSuccess(response: any) {
  // api validation error response - preformatted with handle error
  // are passed through the catch.
  if (response.data?.data) {
    debugger;
    return response.data.data;
  }

  const { data, status, statusText } = response;
  return {
    data,
    status,
    statusText,
    errors: null,
  };
}

export function handleError(error: any) {
  if (axios.isAxiosError(error)) {
    console.error("error message: ", error.message);
    // TODO: throwing the error triggers react.errorboundary when fetching in getServerSideProps
    // these errors include 401 from the api (any api error code)
    console.log(error);
    if (error.response?.data) {
      const { status, statusText, data: apiErrors } = error.response;

      // Handle API model validations gracefully
      if (status === 422 && statusText === "Unprocessable Entity") {
        return {
          data: null,
          status,
          statusText,
          errors: apiErrors,
        };
      }
    }

    // Catch any other messages with the fetcher
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
