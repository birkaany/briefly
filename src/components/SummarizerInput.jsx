import { useState } from "react";
import { useDispatch } from "react-redux";
import { addArticle } from "../store/features/articlesSlice";
import { useLazyFetchArticleQuery } from "../api/apiSlice";

const SummarizerInput = () => {
  const dispatch = useDispatch();
  const [articleUrl, setArticleUrl] = useState("");
  const [fetchArticle, { isLoading }] = useLazyFetchArticleQuery();

  async function handleSubmit(e) {
    e.preventDefault();
    if (articleUrl === "") {
      return;
    }
    const { data } = await fetchArticle({
      articleUrl: articleUrl,
    });
    if (data) {
      dispatch(
        addArticle({
          url: articleUrl,
          summary: data.summary,
        })
      );
    }
    setArticleUrl("");
  }

  return (
    <div className="w-full max-w-xl space-y-2 mx-auto ">
      <div className="container">
        <form
          className="flex space-x-2 bg-gray-800 overflow-hidden rounded-full"
          onSubmit={handleSubmit}
        >
          <input
            className="max-w-lg flex-1 bg-transparent outline-none text-white border-gray-900 px-6 py-3"
            placeholder="Enter URL"
            type="url"
            value={articleUrl}
            onChange={(e) => {
              const nextArticleUrl = e.target.value;
              setArticleUrl(nextArticleUrl);
            }}
          />
          <button
            className={`${
              isLoading ? "bg-gray-600" : "bg-white"
            } text-black h-full px-6 py-3`}
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "⏎"}{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SummarizerInput;
