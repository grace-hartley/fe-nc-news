import { useState, useEffect } from "react";
import { getArticleByID, patchArticleVotes } from "../api";

const Votes = ({ article_id, articleCard, setArticleCard }) => {
  const [votes, setVotes] = useState(0);
  const [err, setErr] = useState(null);
  const [voteButton, setVoteButton] = useState(false);

  useEffect(() => {
    if (article_id) {
      getArticleByID(article_id).then((article) => {
        setVotes(article.votes);
      });
    }
  }, [article_id]);

  const handleVotes = (newVotes) => {
    setVotes((currentVotes) => currentVotes + newVotes);
    patchArticleVotes(article_id, newVotes)
      .then((updatedArticle) => {
        setArticleCard(updatedArticle);
      })
      .catch((err) => {
        setVotes((currentVotes) => currentVotes - newVotes);
        setErr("Something went wrong, please try again.");
      });
  };
  const handleThumbsUp = () => {
    handleVotes(1);
  };
  const handleThumbsDown = () => {
    handleVotes(-1);
  };

  return (
    <div className="article-votes">
      {err ? <p>{err}</p> : null}
      <button
        onClick={() => {
          handleThumbsUp();
          setVoteButton(true);
        }}
        disabled={voteButton === true ? true : false}
      >
        👍
      </button>
      <p>{articleCard.votes}</p>
      <button
        onClick={() => {
          handleThumbsDown();
          setVoteButton(true);
        }}
        disabled={voteButton === true ? true : false}
      >
        👎
      </button>
    </div>
  );
};

export default Votes;
