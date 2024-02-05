import React from "react";
import ArticleCard from "./ArticleCard";

const ArticleList = ({ articles }) => {
  return (
    <ul className="article-list">
      {articles.map((article, index) => {
        return (
          <li key={index}>
            <ArticleCard article={article}></ArticleCard>
          </li>
        );
      })}
    </ul>
  );
};

export default ArticleList;
