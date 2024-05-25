// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const baseQuery = fetchBaseQuery({
//   baseUrl: "http://localhost:5000/api/v1",
//   credentials: "include",
// });

// const baseApi = createApi({
//   tagTypes: ["user", "flat"],
//   reducerPath: "baseApi",
//   baseQuery: baseQuery,
//   endpoints: () => ({}),
// });

// export default baseApi;

import { createApi } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "./tagTypes";
import { axiosBaseQuery } from "@/components/helpers/axios/axiosBaseQuery";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  endpoints: () => ({}),
  tagTypes: tagTypesList,
});
