import React from "react";
import ArticleCard from "./ArticleCard";

const ArticleList = ({ articles }) => {
  return (
    <ul className="article-list">
      {articles.map((article, index) => {
        return (
          <li key={index} className="article-list-item">
            <h4>{article.author}</h4>
            <h3>{article.title}</h3>
            <img src={article.article_img_url} alt="" className="article-img" />
            <p>Comments: {article.comment_count}</p>
            <p>Votes: {article.votes}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default ArticleList;
