import { useContext, useState } from "react";
import { postComment } from "../api";
import UserContext from "../contexts/UserContext";

const AddComment = ({ article_id, setArticleComments }) => {
  const { loggedInUser } = useContext(UserContext);
  const [newComment, setNewComment] = useState("");
  const [disableButton, setDisableButton] = useState(false);
  const [err, setErr] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setDisableButton(true);
    postComment(article_id, loggedInUser.username, newComment)
      .then((newComment) => {
        setArticleComments((currentComments) => [
          newComment,
          ...currentComments,
        ]);
        setNewComment("");
        setErr(null);
      })
      .catch((err) => {
        setErr("Something went wrong, please try again.");
      })
      .finally(() => {
        setDisableButton(false);
      });
  };
  return (
    <form
      className="comment-added"
      onSubmit={(event) => {
        handleSubmit(event);
      }}
    >
      <label htmlFor="newComment" className="add-a-comment">
        Add a comment:
      </label>
      <textarea
        id="newComment"
        value={newComment}
        cols="80"
        rows="3"
        onChange={(event) => {
          setNewComment(event.target.value);
          setErr("");
          {
            err ? <p>{err}</p> : "Comment added!";
          } // don't know if this is in the right place?
        }}
        required
      ></textarea>

      <button
        className="add-comment-button"
        type="submit"
        // onClick={() => setDisableButton(true)}
        // disabled={disableButton === true ? true : false}
      >
        Add Comment
      </button>
    </form>
  );
};

export default AddComment;
