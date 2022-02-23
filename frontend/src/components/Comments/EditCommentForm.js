import { useState } from "react";
import { updateComment, getComments, removeComment } from "../../store/comments";
import { useDispatch } from "react-redux";

const EditCommentForm = ({ checkin, user, com, setModal }) => {
  const [editComment, setEditComment] = useState(com?.comment);

  const dispatch = useDispatch();

  const handleEditComment = async (e) => {
    e.preventDefault();
    const editedComment = {
      comment: editComment,
      checkinId: checkin.id,
      userId: user.id
    };
    await dispatch(updateComment(com?.id, editedComment))
      .then(dispatch(getComments(checkin?.id)));
    return setModal(false);
  };

  const handleDeleteComment = async (e) => {
    e.preventDefault();
    await dispatch(removeComment(com?.id))
      .then(dispatch(getComments(checkin?.id)));
    return setModal(false);
  }

  return (
    <form>
      <input
        value={editComment}
        onChange={(e) => setEditComment(e.target.value)}
      />
      <button
        onClick={handleEditComment}
      >
        Edit Comment
      </button>
      <button
        onClick={handleDeleteComment}
      >
        Delete
      </button>
    </form>
  );
};

export default EditCommentForm;
