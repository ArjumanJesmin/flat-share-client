import { baseApi } from "../api/baseApi";
import { tagTypes } from "../api/tagTypes";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getUserMe: build.query({
      query: () => ({
        url: `/user/me`,
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
    getAllUsers: build.query({
      query: () => ({
        url: `/user/users`,
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),

    changePassword: build.mutation({
      query: (data) => {
        return {
          url: `/auth/change-password`,
          method: "POST",
          data,
        };
      },
      invalidatesTags: [tagTypes.user, tagTypes.admin],
    }),

    editRole: build.mutation({
      query: ({ userId, role }) => ({
        url: `/user/${userId}/role`,
        method: "PATCH",
        role,
      }),
      invalidatesTags: [tagTypes.user, tagTypes.admin],
    }),
    changeStatus: build.mutation({
      query: ({ userId, status }) => ({
        url: `/user/${userId}/status`,
        method: "PATCH",
        status,
      }),
      invalidatesTags: [tagTypes.user, tagTypes.admin],
    }),
  }),
});

export const {
  useGetUserMeQuery,
  useGetAllUsersQuery,
  useChangePasswordMutation,
  useEditRoleMutation,
  useChangeStatusMutation,
} = userApi;
