import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getArticlesByTopic, getTopics } from "../api";
import Sorting from "./Sorting";
import TopicsList from "./TopicsList";

const ArticlesByTopic = () => {
  const { topic } = useParams();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState("");

  useEffect(() => {
    getArticlesByTopic(topic).then((articles) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, [topic]);

  useEffect(() => {
    getTopics().then((topics) => {
      setTopics(topics);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <main>
      <TopicsList topics={topics} setSelectedTopic={setSelectedTopic} />
      <h2>Showing all {topic} articles</h2>
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
    </main>
  );
};

export default ArticlesByTopic;
