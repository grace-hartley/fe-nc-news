import { formatDate } from "../utils/format-date";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

const Comments = ({
  article_id,
  articleComments,
  setArticleComments,
  getAuthorAvatar,
}) => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <>
      {articleComments.length === 0 ? (
        <p>This article doesn't have any comments yet!</p>
      ) : (
        <ul>
          {articleComments.map((comment) => {
            if (comment) {
              return (
                <li key={comment.comment_id} className="article-comment-card">
                  <img
                    src={getAuthorAvatar(comment.author)}
                    alt={`${comment.author}'s avatar image`}
                    className="comment-author-avatar"
                  />
                  <div className="comment-details">
                    <h5>
                      {comment.author} | {formatDate(comment.created_at)}
                    </h5>
                    <p>{comment.body}</p>
                  </div>
                  {loggedInUser.username === comment.author ? (
                    <button className="delete-comment">Delete Comment</button>
                  ) : null}
                </li>
              );
            }
          })}
        </ul>
      )}
    </>
  );
};

export default Comments;
