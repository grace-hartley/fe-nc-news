import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleByID, getArticleComments, getUsers } from "../api";
import { parseISO, format } from "date-fns";
import Expandable from "./Expandable";

const ArticleCard = () => {
  const [articleCard, setArticleCard] = useState({});
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [articleComments, setArticleComments] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (article_id) {
      getArticleByID(article_id).then((article) => {
        setArticleCard(article);
        setIsLoading(false);
      });
      getArticleComments(article_id).then((comments) => {
        setArticleComments(comments);
      });
    }
    getUsers().then((userList) => {
      setUsers(userList);
    });
  }, []);

  const formatDate = (dateStr) => {
    if (!dateStr) {
      return "";
    }
    const parsedDate = parseISO(dateStr);
    return format(new Date(parsedDate), "MMMM dd, yyyy");
  };

  const getAuthorAvatar = (author) => {
    const user = users.find((user) => user.username === author);
    return user ? user.avatar_url : "";
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <section className="article-card">
        <div className="article-img-container">
          <img
            className="article-img"
            src={articleCard.article_img_url}
            alt={`Image for post titled: "${articleCard.title}"`}
          />
        </div>
        <div className="article-details">
          <p>{formatDate(articleCard.created_at)}</p>
          <h4>{articleCard.author}</h4>
          <h3>{articleCard.title}</h3>
          <p>{articleCard.body}</p>
        </div>
        <div className="article-votes">
          <p>votes: {articleCard.votes}</p>
          <button>👍</button>
        </div>
      </section>
      <Expandable>
        <section className="article-comments">
          <ul>
            {articleComments.map((comment) => {
              return (
                <li key={comment.comment_id} className="article-comment-card">
                  <img
                    src={getAuthorAvatar(comment.author)}
                    alt={`${comment.author}'s avatar image`}
                    className="comment-author-avatar"
                  />
                  <div className="comment-details">
                    <h5>{comment.author}</h5>
                    <p>{comment.body}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      </Expandable>
    </>
  );
};
export default ArticleCard;
