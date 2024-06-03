import { baseApi } from "../api/baseApi";
import { tagTypes } from "../api/tagTypes";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getFlatShare: build.query({
      query: () => ({
        url: `/flatShare`,
        method: "GET",
      }),
      providesTags: [tagTypes.flat],
    }),

    flatSharePost: build.mutation({
      query: (data) => {
        return {
          url: `/flatShare/create`,
          method: "POST",
          data,
        };
      },
      invalidatesTags: [tagTypes.flat],
    }),
  }),
});

export const { useGetFlatShareQuery, useFlatSharePostMutation } = authApi;
