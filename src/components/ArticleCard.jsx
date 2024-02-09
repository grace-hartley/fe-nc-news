import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getArticleByID, getArticleComments, getUsers } from "../api";
import Expandable from "./Expandable";
import UserContext from "../contexts/UserContext";
import { formatDate } from "../utils/format-date";
import Votes from "./Votes";
import Comments from "./Comments";

const ArticleCard = () => {
  const [articleCard, setArticleCard] = useState({});
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [articleComments, setArticleComments] = useState([]);
  const [users, setUsers] = useState([]);
  const { loggedInUser } = useContext(UserContext);

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
  }, [article_id]);

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
        <div>
          <Votes
            article_id={article_id}
            articleCard={articleCard}
            setArticleCard={setArticleCard}
          ></Votes>
        </div>
      </section>
      <Expandable>
        <section className="article-comments">
          <Comments
            article_id={article_id}
            articleComments={articleComments}
            setArticleComments={setArticleComments}
            getAuthorAvatar={getAuthorAvatar}
          />
        </section>
      </Expandable>
    </>
  );
};
export default ArticleCard;
