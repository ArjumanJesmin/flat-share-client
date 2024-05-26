import { baseApi } from "../api/baseApi";
import { tagTypes } from "../api/tagTypes";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query({
      query: () => ({
        url: `/flat`,
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),

    // deleteFlat: build.mutation({
    //   query: (id) => ({
    //     url: `/doctor/soft/${id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: [tagTypes.flat],
    // }),

    // //get single doctor
    // getSingleId: build.query({
    //   query: (id: string | string[] | undefined) => ({
    //     url: `/flat getSingleFlat/${id}`,
    //     method: "GET",
    //   }),
    //   providesTags: [tagTypes.flat],
    // }),

    // // update a doctor
    // updateFlat: build.mutation({
    //   query: (data) => {
    //     console.log(data);
    //     return {
    //       url: `/flat/updateFLat/${data.id}`,
    //       method: "PATCH",
    //       data: data.body,
    //     };
    //   },
    //   invalidatesTags: [tagTypes.admin, tagTypes.user],
    // }),

    // // update a doctor
    // updateMyFlat: build.mutation({
    //   query: (data) => {
    //     return {
    //       url: `/flat/updateMyFLat/${data.id}`,
    //       method: "PATCH",
    //       data: data.body,
    //     };
    //   },
    //   invalidatesTags: [tagTypes.admin, tagTypes.user],
    // }),
  }),
});

export const { useGetUserQuery } = userApi;
