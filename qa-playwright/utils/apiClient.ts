import { APIRequestContext, request } from "@playwright/test";

export async function apiClient(): Promise<APIRequestContext> {
  return await request.newContext({
    baseURL: "https://reqres.in/api"
  });
}
