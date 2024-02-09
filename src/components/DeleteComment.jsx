import { useState } from "react";
import { deleteComment } from "../api";

const DeleteComment = ({ setArticleComments, comment_id }) => {
  const [err, setErr] = useState("");

  const handleDelete = (comment_id) => [
    deleteComment(comment_id).then(() => {
      setArticleComments((currentComments) => {
        return currentComments.filter(
          (comment) => comment.comment_id !== comment_id
        );
        setErr(false);
      }).catch(() => {
        setErr(true);
      });
    }),
  ];

  return (
    <div>
      <button
        className="delete-comment"
        onClick={() => {
          handleDelete(comment_id);
        }}
      >
        Delete Comment
      </button>
      <p>
        {err === ""
          ? ""
          : err === false
          ? "Comment deleted"
          : "Comment failed to delete, please try again"}
      </p>
    </div>
  );
};

export default DeleteComment;
