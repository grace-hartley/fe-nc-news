import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticles } from "../api";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles().then((articles) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <ul className="article-list">
      {articles.map((article) => {
        return (
          <Link
            to={`/articles/${article.article_id}`}
            key={article.article_id}
            style={{ textDecoration: "none" }}
          >
            <li key={article.article_id} className="article-list-item">
              <div className="article-img-container">
                <img
                  src={article.article_img_url}
                  alt={`Image for post titled: "${article.title}"`}
                  className="article-img"
                />
              </div>
              <div className="article-details">
                <h4>{article.author}</h4>
                <h3>{article.title}</h3>
                <p>Comments: {article.comment_count}</p>
                <p>Votes: {article.votes}</p>
              </div>
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

export default ArticleList;
