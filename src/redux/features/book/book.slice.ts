import { createSlice } from '@reduxjs/toolkit';

interface IBook {
  books: IBook[];
  filteredBooks: IBook[];
  test: number;
  Wishlist: any;
}

const initialState: IBook = {
  books: [],
  filteredBooks: [],
  test: 12,
  Wishlist: null,
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload;
      state.filteredBooks = action.payload;
    },

    setBookInWishlist: (state, action) => {
      state.Wishlist = action.payload;
    },
  },
});

export const { setBooks, setBookInWishlist } = bookSlice.actions;

export default bookSlice.reducer;
