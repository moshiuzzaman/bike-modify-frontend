import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './features/book/book.slice';
import userReducer from './features/user/user.slice';
import { api } from './api/apiSlice';

const store = configureStore({
  reducer: {
    book: bookReducer,
    [api.reducerPath]: api.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
