import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticles, getTopics } from "../api";
import Sorting from "./Sorting";
import TopicsList from "./TopicsList";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState("");
  const [sortBy, setSortBy] = useState("created_at");
  const [sortOrder, setSortOrder] = useState("desc");

  useEffect(() => {
    getArticles({ sortBy, sortOrder }).then((articles) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, [sortBy, sortOrder]);

  useEffect(() => {
    getTopics().then((topics) => {
      setTopics(topics);
      setIsLoading(false);
    });
  }, []);

  const handleSortByChange = (selectedSortBy) => {
    setSortBy(selectedSortBy);
  };

  const handleSortOrderChange = (selectedSortOrder) => {
    setSortOrder(selectedSortOrder);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <TopicsList topics={topics} setSelectedTopic={setSelectedTopic} />
      <Sorting
        onSortByChange={handleSortByChange}
        onSortOrderChange={handleSortOrderChange}
      />
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
    </div>
  );
};

export default ArticleList;
