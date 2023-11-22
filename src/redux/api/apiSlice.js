import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://betafore-task-api.vercel.app",
  }),
  tagTypes: ["tasks"],
  endpoints: () => ({}),
});
