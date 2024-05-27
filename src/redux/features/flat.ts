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
      query: (id) => ({
        url: `/doctor/soft/${id}`,
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

    // update a doctor
    updateFlat: build.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: `/flat/updateFLat/${data.id}`,
          method: "PATCH",
          data: data.body,
        };
      },
      invalidatesTags: [tagTypes.admin, tagTypes.user],
    }),

    // update a doctor
    updateMyFlat: build.mutation({
      query: (data) => {
        return {
          url: `/flat/updateMyFLat/${data.id}`,
          method: "PATCH",
          data: data.body,
        };
      },
      invalidatesTags: [tagTypes.admin, tagTypes.user],
    }),
  }),
});

export const { useGetFlatQuery, usePostFlatMutation, useGetSingleFlatQuery } =
  authApi;
