import { api } from "@/redux/api/apiSlice";
import { tagTypes } from "@/redux/tag-types";

const serviceApi = api.injectEndpoints({
    endpoints: (build) => ({
        getServices: build.query({
            query: (query) => `/services?${query}`,
            providesTags: [tagTypes.services],
        }),
        getSingleService: build.query({
            query: (id) => `/services/${id}`,
        }),

        createServices: build.mutation({
            query: ({ data, token }) => ({
                url: `/services`,
                method: "POST",
                body: data,
                headers: {
                    Authorization: `${token}`,
                },
                contentType: "multipart/form-data",
            }),
            invalidatesTags: [tagTypes.services],
        }),
        updateService: build.mutation({
            query: ({ data, id, token }) => ({
                url: `/services/${id}`,
                method: "PATCH",
                body: data,

                headers: {
                    Authorization: `${token}`,
                },

                contentType: "multipart/form-data",
            }),
            invalidatesTags: [tagTypes.services],
        }),
        deleteService: build.mutation({
            query: ({ id, token }) => ({
                url: `/services/${id}`,
                method: "DELETE",
                headers: {
                    Authorization: `${token}`,
                },
            }),
            invalidatesTags: [tagTypes.services],
        }),
    }),
});

export const {
    useGetServicesQuery,
    useCreateServicesMutation,
    useGetSingleServiceQuery,
    useUpdateServiceMutation,
    useDeleteServiceMutation,
} = serviceApi;
