import React, { useEffect, useState } from "react";

const Tech = () => {
  let [news, setNews] = useState([]);
  useEffect(() => {
    window
      .fetch(
        "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=85be68df389d4c708f95373c8e4c3090"
      )
      .then((x) => {
        return x.json();
      })
      .then((y) => setNews(y.articles));
  }, []);

  // let handleClick = () => {
  //   console.log(news);
  // };
  return (
    <div>
      {/* <button onClick={handleClick}>Fetch New News</button> */}
      <h2>Latest NEWS on Tech</h2>
      {Array.isArray(news) && news.length > 0 ? (
        <div className="listdisplay">
          <ul>
            {news.map((article, index) => (
              <li key={index} style={{ listStyle: "none" }} className="list">
                <div className="imgdiv">
                  <img src={article.urlToImage} alt="" />
                </div>
                <div className="details">
                  <h1 className="author">
                    <span style={{ color: "darkblue" }}> Author: </span>
                    {article.author}
                  </h1>
                  <strong className="title">
                    <span style={{ color: "darkblue" }}> Title: </span>
                    {article.title}
                  </strong>
                  <p className="desc">
                    <span style={{ color: "darkblue" }}> Description: </span>
                    {article.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="nonews">No news available</p>
      )}
    </div>
  );
};

export default Tech;
