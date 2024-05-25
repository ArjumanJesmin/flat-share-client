import { baseApi } from "../api/baseApi";
import { tagTypes } from "../api/tagTypes";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getFlat: build.query({
      query: () => ({
        url: `/flat`,
        method: "GET",
      }),
      providesTags: [tagTypes.flat],
    }),
    postFlat: build.mutation({
      query: (data) => ({
        url: `/flat`,
        method: "POST",
        data,
        contentType: "application/json",
      }),
      invalidatesTags: [tagTypes.flat],
    }),
  }),
});

export const { useGetFlatQuery, usePostFlatMutation } = authApi;
