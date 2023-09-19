import { useState } from "react";
import { useSelector } from "react-redux";

const BrowseHistory = () => {
  const articles = useSelector((state) => state.articles.articles);
  const [selectedItem, setSelectedItem] = useState(
    articles ? articles[0]?.id : null
  );

  if (articles.length > 0) {
    return (
      <section className="my-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-[1fr_5fr]">
            <aside>
              <h2 className="text-gray-300 uppercase tracking-wider text-sm my-3">
                Browse History
              </h2>
              <ul className="flex flex-col items-start gap-3 ">
                {articles?.map((item) => {
                  const activeClass = item.id === selectedItem ? "active" : "";
                  return (
                    <li
                      onClick={() => setSelectedItem(item.id)}
                      key={item.id}
                      className={`bg-gray-700 rounded-md p-3 w-full hover:bg-yellow-400 hover:text-gray-800  cursor-pointer transition-all text-sm ${activeClass}`}
                    >
                      {item.url}
                    </li>
                  );
                })}
              </ul>
            </aside>
            <div className="px-4 md:px-8 xl:px-32">
              <h2 className="text-gray-300 uppercase tracking-wider text-sm my-3">
                Summary
              </h2>
              {articles?.map((item) => {
                if (selectedItem === item.id) {
                  return <p key={item.id}>{item.summary}</p>;
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default BrowseHistory;
