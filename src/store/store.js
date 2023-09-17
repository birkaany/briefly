import { configureStore } from "@reduxjs/toolkit";
import articlesSlice from "./features/articlesSlice";
import { apiSlice } from "../api/apiSlice";

export const store = configureStore({
  reducer: {
    articles: articlesSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware); // return ile middleware dizisini döndürün
  },
});
