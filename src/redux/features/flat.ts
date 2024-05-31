import { Flat } from "@/components/type/flatTypes";
import { baseApi } from "../api/baseApi";
import { tagTypes } from "../api/tagTypes";
import { IMeta } from "@/types/common";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getFlat: build.query({
      query: (arg: Record<string, any>) => ({
        url: `/flat`,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: Flat[], meta: IMeta) => {
        return {
          flats: response,
          meta,
        };
      },
      providesTags: [tagTypes.flat],
    }),

    postFlat: build.mutation({
      query: (data) => {
        return {
          url: `/flat`,
          method: "POST",
          data,
          contentType: "application/json",
        };
      },
      invalidatesTags: [tagTypes.flat],
    }),

    deleteFlat: build.mutation({
      query: (flatId) => ({
        url: `/flat/deleteFlat/${flatId}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.flat],
    }),

    // get single flat
    getSingleFlat: build.query({
      query: (id) => ({
        url: `/flat/getSingleFlat/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.flat],
    }),

    // update a Flat
    updateMyFlat: build.mutation({
      query: (data) => {
        return {
          url: `/flat/updateMyFLat/${data.id}`,
          method: "PATCH",
          data,
        };
      },
      invalidatesTags: [tagTypes.admin, tagTypes.user],
    }),
  }),
});

export const {
  useGetFlatQuery,
  usePostFlatMutation,
  useGetSingleFlatQuery,
  useUpdateMyFlatMutation,
  useDeleteFlatMutation,
} = authApi;
