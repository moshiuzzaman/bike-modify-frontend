import { api } from '@/redux/api/apiSlice';

const bookApi = api.injectEndpoints({
  endpoints: (build) => ({
    getBooks: build.query({
      query: (query) => `/books?${query}`,
    }),
    getSingleBook: build.query({
      query: (id) => `/books/${id}`,
    }),
    // create book with data and in header token
    createBook: build.mutation({
      query: (data) => ({
        url: '/books',
        method: 'POST',
        headers: {
          Authorization: `${localStorage.getItem('token')}`,
        },
        body: data,
      }),
    }),

    editBook: build.mutation({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: 'PATCH',
        headers: {
          Authorization: `${localStorage.getItem('token')}`,
        },
        body: data,
      }),
    }),
    // delete book with id and in header token
    deleteBook: build.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: 'DELETE',
        headers: {
          Authorization: `${localStorage.getItem('token')}`,
        },
      }),
    }),
    // {{API_URL}}/books/651d42bb611b9cf20c62b23e/reviews
    addReviewToBook: build.mutation({
      query: ({ id, data }) => ({
        url: `/books/${id}/reviews`,
        method: 'POST',
        headers: {
          Authorization: `${localStorage.getItem('token')}`,
        },
        body: data,
      }),
      invalidatesTags: ['reviews'],
    }),
    getBookReviews: build.query({
      query: (id) => `/books/${id}/reviews`,
      providesTags: ['reviews'],
    }),

    getUniqueFilterFields: build.query({
      query: () => `/books/unique-filter-fields`,
    }),

    addBookInWishList: build.mutation({
      query: ({ id }) => ({
        url: `/books/${id}/wishlist`,
        method: 'POST',
        headers: {
          Authorization: `${localStorage.getItem('token')}`,
        },
        
      }),
    }),
    getWishListByUserId: build.query({
      query: ({id,step}) => `/books/wishlist/${id}?step=${step}`,
    }),
    updateBookInWishList: build.mutation({
      query: ({ id, data }) => ({
        url: `/books/${id}/wishlist`,
        method: 'PATCH',
        headers: {
          Authorization: `${localStorage.getItem('token')}`,
        },
        body: data,
      }),
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetSingleBookQuery,
  useCreateBookMutation,
  useAddReviewToBookMutation,
  useGetBookReviewsQuery,
  useGetUniqueFilterFieldsQuery,
  useDeleteBookMutation,
  useEditBookMutation,
  useAddBookInWishListMutation,
  useGetWishListByUserIdQuery,
  useUpdateBookInWishListMutation,

} = bookApi;
