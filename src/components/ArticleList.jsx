import React from "react";

const ArticleList = ({ articles }) => {
  return (
    <ul className="article-list">
      {articles.map((article, index) => {
        return (
          <li key={index} className="article-list-item">
            <div className="article-img-container">
              <img
                src={article.article_img_url}
                alt=""
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
        );
      })}
    </ul>
  );
};

export default ArticleList;
