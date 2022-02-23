import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadWineCheckins } from "../../store/checkins";
import { getComments, createComment } from "../../store/comments";
import { NavLink } from "react-router-dom";
import './Comments.css';
import EditCommentModal from "./EditCommentModal";

const Comments = ({ id, user, wineries, wineList }) => {
  const commentsObj = useSelector(state => state.comments.comments);
  const usersObj = useSelector(state => state.checkins.users);
  const checkin = useSelector(state => state.checkins.checkins[id]);
  const commentCheckins = useSelector(state => state.comments.checkins[id]);

  const [comment, setComment] = useState('');
  const [validationErrors, setValidationErrors] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (checkin) {
      dispatch(getComments(checkin?.id));
    }
  }, [dispatch, checkin]);

  useEffect(() => {
    if (commentCheckins && !checkin) {
      dispatch(loadWineCheckins(commentCheckins.wineId));
    }
  }, [dispatch, commentCheckins, checkin]);

  useEffect(() => {
    const errors = [];
    if (comment.length < 5 || comment.length > 280) errors.push('Please enter a comment between 5 and 280 characters')

    setValidationErrors(errors);
  }, [comment.length]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const newComment = {
      comment,
      checkinId: checkin.id,
      userId: user.id
    };
    await dispatch(createComment(newComment));
    setComment('');
  };

  let comments;
  if (commentsObj) {
    const allComments = Object.values(commentsObj);

    comments = allComments?.filter((comment) => {
      return +comment?.checkinId === +checkin?.id;
    });
  }

  let users;
  if (usersObj) {
    users = Object.values(usersObj);
  }

  return (
    <div className="comments-wrapper">
      <h2 className="comment-header">Comments</h2>
      {users?.length > 0 &&
        comments?.map((com) => (
          <div className="comments-container" key={com?.id}>
            <NavLink
              to={{
                pathname: `/user/${users[com?.userId - 1]?.id}/profile`,
                state: { user: users[com?.userId - 1], wineries, wineList }
              }}
            >
              {users[com?.userId - 1]?.firstName}
            </NavLink>
            {` says, "${com?.comment}"`}
            {user.id === com.userId &&
              <EditCommentModal checkin={checkin} user={user} com={com}/>
            }
            <div className="border-bottom"></div>
          </div>
        ))
      }
      <form onSubmit={handleSubmit} className="submit-form">
        <ul>
          {validationErrors.length > 0 &&
            validationErrors.map((error) => (
              <li key={error}>{error}</li>
            ))
          }
        </ul>
        <input
          placeholder='Leave a comment...'
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button disabled={validationErrors.length > 0}>Submit</button>
      </form>
    </div>
  )
}

export default Comments;
