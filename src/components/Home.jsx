import { useState, useEffect } from "react";
import ArticleList from "./ArticleList";
import { getTopics } from "../api";

import TopicsList from "./TopicsList";

const Home = () => {
  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTopics().then((topics) => {
      setTopics(topics);
      setIsLoading(false);
    });
  }, []);
  return (
    <>
      <h2>Top Articles</h2>
      <TopicsList topics={topics} setSelectedTopic={setSelectedTopic} />
      <ArticleList selectedTopic={selectedTopic} />
    </>
  );
};

export default Home;
