import { api } from "@/redux/api/apiSlice";

const bookApi = api.injectEndpoints({
    endpoints: (build) => ({
        getBookings: build.query({
            query: (query) => `/bookings?${query}`,
        }),
    }),
});

export const {
    useGetBookingsQuery,
    
} = bookApi;
