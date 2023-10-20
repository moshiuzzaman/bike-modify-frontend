import { api } from "@/redux/api/apiSlice";
import { tagTypes } from "@/redux/tag-types";

const userApi = api.injectEndpoints({
    endpoints: (build) => ({
        loginUser: build.mutation({
            query: ({ data }) => {
                return {
                    url: `/auth/login`,
                    method: "POST",
                    body: data,
                };
            },
        }),

        signUp: build.mutation({
            query: (data) => ({
                url: `/auth/signUp`,
                method: "POST",
                body: data,
                contentType: "multipart/form-data",
            }),
            invalidatesTags: [tagTypes.user],
        }),

        updateUser: build.mutation({
            query: ({ data, id, token }) => ({
                url: `/users/${id}`,
                method: "PATCH",
                body: data,

                headers: {
                    Authorization: `${token}`,
                },

                contentType: "multipart/form-data",
            }),
            invalidatesTags: [tagTypes.user],
        }),

        getSingleUser: build.query({
            query: (id) => `/users/${id}`,
        }),
        getAllUsers: build.query({
            query: ({ query, token }) => ({
                url: `/users?${query}`,
                method: "GET",
                headers: {
                    Authorization: `${token}`,
                },
            }),
            providesTags: [tagTypes.user],
        }),
        updateUserRole: build.mutation({
            query: ({ data, id, token }) => ({
                url: `/users/${id}/role`,
                method: "PATCH",
                body: data,
                headers: {
                    Authorization: `${token}`,
                },
            }),
            invalidatesTags: [tagTypes.user],
        }),
        deleteUser: build.mutation({
            query: ({ id, token }) => ({
                url: `/users/${id}`,
                method: "DELETE",
                headers: {
                    Authorization: `${token}`,
                },
            }),
            invalidatesTags: [tagTypes.user],
        }),
    }),
});

export const {
    useLoginUserMutation,
    useGetSingleUserQuery,
    useSignUpMutation,
    useUpdateUserMutation,
    useGetAllUsersQuery,
    useUpdateUserRoleMutation,
    useDeleteUserMutation,
} = userApi;
