import { api } from "@/redux/api/apiSlice";

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
        }),

        getSingleUser: build.query({
            query: (id) => `/users/${id}`,
        }),
    }),
});

export const {
    useLoginUserMutation,
    useGetSingleUserQuery,
    useSignUpMutation,
    useUpdateUserMutation,
} = userApi;
