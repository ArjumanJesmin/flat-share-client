import { createApi } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "./tagTypes";
import { axiosBaseQuery } from "@/components/helpers/axios/axiosBaseQuery";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://flat-share-server-zeta.vercel.app/api/v1",
  }),
  endpoints: () => ({}),
  tagTypes: tagTypesList,
});
