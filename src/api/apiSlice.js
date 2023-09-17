import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const rapidApiKey = import.meta.env.VITE_RAPID_API_SUMMARIZER_KEY;

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", rapidApiKey);
      headers.set(
        "X-RapidAPI-Host",
        "article-extractor-and-summarizer.p.rapidapi.com"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    fetchArticle: builder.query({
      query: (params) =>
        `summarize?url=${encodeURIComponent(
          params.articleUrl
        )}&length=3&lang=tr`,
    }),
  }),
});

export const { useLazyFetchArticleQuery } = apiSlice;
export default apiSlice.reducer;
