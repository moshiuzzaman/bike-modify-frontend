import { api } from "@/redux/api/apiSlice";
import { tagTypes } from "@/redux/tag-types";

const bookApi = api.injectEndpoints({
    endpoints: (build) => ({
        getBookings: build.query({
            query: ({ query, token }) => ({
                url: `/bookings?${query}`,
                method: "GET",
                headers: {
                    Authorization: `${token}`,
                },
            }),
            providesTags: [tagTypes.booking],
        }),
        getSingleBooking: build.query({
            query: ({ id, token }) => ({
                url: `/bookings/${id}`,
                method: "GET",
                headers: {
                    Authorization: `${token}`,
                },
            }),
        }),
        createBooking: build.mutation({
            query: ({ data, token }) => ({
                url: `/bookings`,
                method: "POST",
                body: data,
                headers: {
                    Authorization: `${token}`,
                },
            }),
            invalidatesTags: [tagTypes.booking],
        }),
        getBookingByUser: build.query({
            query: ({ query, token }) => ({
                url: `/bookings/user/my-bookings?${query}`,
                method: "GET",
                headers: {
                    Authorization: `${token}`,
                },
            }),
            providesTags: [tagTypes.booking],
        }),
        deleteBooking: build.mutation({
            query: ({ id, token }) => ({
                url: `/bookings/${id}`,
                method: "DELETE",
                headers: {
                    Authorization: `${token}`,
                },
            }),
            invalidatesTags: [tagTypes.booking],
        }),
        updateBooking: build.mutation({
            query: ({ data, id, token }) => ({
                url: `/bookings/${id}`,
                method: "PATCH",
                body: data,

                headers: {
                    Authorization: `${token}`,
                },
            }),
            invalidatesTags: [tagTypes.booking],
        }),
        postReview: build.mutation({
            query: ({ data, token }) => ({
                url: `/reviews`,
                method: "POST",
                body: data,
                headers: {
                    Authorization: `${token}`,
                },
            }),
            invalidatesTags: [tagTypes.booking],
        }),
        getReviews: build.query({
            query: ({ query, token }) => ({
                url: `/reviews?${query}`,
                method: "GET",
            }),
            providesTags: [tagTypes.booking],
        }),
    }),
});

export const {
    useGetBookingsQuery,
    useGetSingleBookingQuery,
    useCreateBookingMutation,
    useGetBookingByUserQuery,
    useDeleteBookingMutation,
    useUpdateBookingMutation,
    usePostReviewMutation,
    useGetReviewsQuery,
} = bookApi;
