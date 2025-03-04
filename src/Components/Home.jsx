import React, { useState, useEffect } from "react";
import image1 from "../Components/jithin-vijayamohanan-yE91FizJkr8-unsplash.jpg";

const Home = () => {
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [content, setContent] = useState(null);
  const [url, setUrl] = useState(null);
  const [image, setImage] = useState(null);
  const [publishedAt, setPublishedAt] = useState(null);
  const [loading, setLoading] = useState(true);
  const [trendingNews, setTrendingNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=6&apikey=4d41e386d60b4a5fd20a3cc5a408e309`
        );
        const data = await response.json();

        if (data.articles && data.articles.length > 0) {
          const firstArticle = data.articles[0];
          setTitle(firstArticle.title);
          setDescription(firstArticle.description);
          setContent(firstArticle.content);
          setUrl(firstArticle.url);
          setImage(firstArticle.image);
          setPublishedAt(firstArticle.publishedAt);

          setTrendingNews(data.articles.slice(1, 6));
        }
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <h2 className="text-center text-xl font-bold mt-10">Loading...</h2>;
  }

  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6">
      {/* Breaking News Section */}
      <div
        className="relative w-full h-[450px] sm:h-[500px] flex items-center justify-center text-white bg-cover bg-center rounded-lg shadow-lg"
        style={{ backgroundImage: `url(${image || image1})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 rounded-lg"></div>

        <div className="relative z-10 text-center max-w-2xl px-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold uppercase text-blue-400 drop-shadow-lg mb-4 tracking-wide">
            Breaking News
          </h1>

          <h2 className="text-xl sm:text-3xl font-bold text-white drop-shadow-md leading-snug">
            {title || "Latest Headline Here"}
          </h2>

         
          {content && (
            <p className="text-xs sm:text-md mt-2 p-2 sm:p-3 bg-black/50 text-gray-300 rounded-md">
              {content.slice(0, 100)}...
            </p>
          )}

          {publishedAt && (
            <p className="text-xs sm:text-sm mt-2 text-white">
              Published on: {new Date(publishedAt).toLocaleDateString()}
            </p>
          )}

          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 sm:mt-6 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-lg transition shadow-lg transform hover:scale-105"
          >
            Read More →
          </a>
        </div>
      </div>

      {/* Trending News Section */}
      <h2 className="text-2xl sm:text-3xl font-bold mt-8 sm:mt-10 mb-4 sm:mb-6 text-center">
        Trending News
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {trendingNews.map((article, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={article.image}
              alt="news"
              className="w-full h-40 sm:h-32 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg text-black font-semibold mb-2">
                {article.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {article.description
                  ? article.description.slice(0, 50) + "..."
                  : "No description available."}
              </p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition"
              >
                Read More
              </a>
              {article.publishedAt && (
                <div className="mt-3 text-gray-700 font-medium text-sm">
                  <h4>Published At:</h4>
                  <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
