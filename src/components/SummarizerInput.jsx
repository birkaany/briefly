import { useState } from "react";
const rapidApiKey = import.meta.env.VITE_RAPID_API_SUMMARIZER_KEY;

const SummarizerInput = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    fetchData(article.url);
  }
  async function fetchData(websiteUrl) {
    const url = `https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${websiteUrl}&length=3&lang=tr`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": rapidApiKey,
        "X-RapidAPI-Host": "article-extractor-and-summarizer.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setArticle({
        ...article,
        summary: JSON.stringify(result.summary),
      });
    } catch (error) {
      console.error(error);
    }
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
            value={article.url}
            onChange={(e) => {
              const nextArticle = {
                ...article,
                url: e.target.value,
              };
              setArticle(nextArticle);
            }}
          />
          <button
            className="bg-white text-black h-full px-6 py-3 rounde"
            type="submit"
          >
            ⏎
          </button>
        </form>
        <p className="text-white">{article?.summary}</p>
      </div>
    </div>
  );
};

export default SummarizerInput;
