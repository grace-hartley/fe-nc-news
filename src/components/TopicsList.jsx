import * as React from "react";
import { Link } from "react-router-dom";

const TopicsList = ({ topics, setSelectedTopic }) => {
  const handleClick = (event) => {
    setSelectedTopic(event.target.innerText);
  };

  return (
    <ul>
      {topics.map((topic) => {
        return (
          <Link to={`/topics/${topic.slug}`} key={topic.slug}>
            <button className="topic-button" onClick={handleClick}>
              {topic.slug}
            </button>
          </Link>
        );
      })}
    </ul>
  );
};

export default TopicsList;
