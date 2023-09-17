import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  articles: localStorage.getItem("browseHistory")
    ? JSON.parse(localStorage.getItem("browseHistory"))
    : [],
};

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    addArticle: (state, action) => {
      const { url, summary } = action.payload;
      state.articles = [
        ...state.articles,
        {
          id: crypto.randomUUID(),
          url: url,
          summary: summary,
        },
      ];
      localStorage.setItem("browseHistory", JSON.stringify(state.articles));
    },
  },
});

export const { addArticle } = articleSlice.actions;

export default articleSlice.reducer;
