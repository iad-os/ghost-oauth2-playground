import { tokenService } from "@iad-os/react-ghost-auth";
import createFetchClient from "openapi-fetch";

const addAuthHeader = async (
  init: RequestInit | undefined,
  token: string | null,
  input: RequestInfo | URL,
): Promise<RequestInit> => {
  const baseHeaders =
    init?.headers ?? (input instanceof Request ? input.headers : undefined);
  const headers = new Headers(baseHeaders);
  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }
  return {
    ...init,
    headers,
  };
};

const authFetch: typeof fetch = async (input, init) => {
  const token = tokenService.getToken()?.access_token;
  if (!token) {
    return fetch(input, init);
  }
  const withAuth = await addAuthHeader(init, token, input);
  let response = await fetch(input, withAuth);
  /*
        let response = await fetch(input, init);
    */

  if (response.status === 401) {
    console.warn("401 received, refreshing token");
    const refreshed = await tokenService.refreshToken();
    if (refreshed?.access_token) {
      const retryInit = await addAuthHeader(
        init,
        refreshed.access_token,
        input,
      );
      response = await fetch(input, retryInit);
    }
  }
  return response;
};

const createAuthFetch = <Paths extends {}>() =>
  createFetchClient<Paths>({
    baseUrl: "/api",
    fetch: authFetch,
  });

export default createAuthFetch;
