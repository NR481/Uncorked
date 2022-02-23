import { useState } from "react";
import { updateComment, getComments, removeComment } from "../../store/comments";
import { useDispatch } from "react-redux";
import "./EditCommentForm.css";

const EditCommentForm = ({ checkin, user, com, setModal }) => {
  const [editComment, setEditComment] = useState(com?.comment);
  const [validationErrors, setValidationErrors] = useState([]);

  const dispatch = useDispatch();

  const handleEditComment = async (e) => {
    e.preventDefault();

    const errors = [];
    if (editComment.length < 5 || editComment.length > 280) {
      errors.push('Please enter a comment between 5 and 280 characters')
      setValidationErrors(errors);
    }

    if (errors.length === 0) {
      const editedComment = {
        comment: editComment,
        checkinId: checkin.id,
        userId: user.id
      };
      await dispatch(updateComment(com?.id, editedComment))
        .then(dispatch(getComments(checkin?.id)));
      return setModal(false);
    }
  };

  const handleDeleteComment = async (e) => {
    e.preventDefault();
    await dispatch(removeComment(com?.id))
      .then(dispatch(getComments(checkin?.id)));
    return setModal(false);
  }

  return (
    <div>
      <form className="edit-comment-form">
      <ul>
        {validationErrors.length > 0 && (
          validationErrors.map(error => (
            <li key={error}>{error}</li>
          ))
        )}
      </ul>
        <h3>Edit your comment...</h3>
        <input
          value={editComment}
          onChange={(e) => setEditComment(e.target.value)}
          placeholder="Leave a comment..."
          required
        />
        <button
          onClick={handleEditComment}
        >
          Edit Comment
        </button>
        <button
          onClick={handleDeleteComment}
        >
          Delete Comment
        </button>
      </form>
    </div>
  );
};

export default EditCommentForm;
