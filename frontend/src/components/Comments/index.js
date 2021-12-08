import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadWineCheckins } from "../../store/checkins";
import { getComments, createComment } from "../../store/comments";

const Comments = ({ checkin, wine }) => {
  const commentsObj = useSelector(state => state.comments);
  const usersObj = useSelector(state => state.checkins.users);

  const [comment, setComment] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComments(checkin.id));
  }, [dispatch, checkin.id]);

  useEffect(() => {
    dispatch(loadWineCheckins(wine.id));
  }, [dispatch, wine.id]);

  const users = Object.values(usersObj);
  const user = users.find((user) => +user.id === +checkin.userId);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newComment = {
      comment,
      checkinId: checkin.id,
      userId: user.id
    };
    await dispatch(createComment(newComment));
    setComment('');
  }

  const allComments = Object.values(commentsObj);

  const comments = allComments?.filter((comment) => {
    return +comment.checkinId === +checkin.id;
  });


  return (
    <div>
      <h2>Comments</h2>
      {comments &&
        comments.map((comment) => (
          <div>
            {`${user.firstName} says, "${comment.comment}""`}
          </div>
        ))
      }
      <form onSubmit={handleSubmit}>
        <input
          placeholder='Leave a comment...'
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Comments;
