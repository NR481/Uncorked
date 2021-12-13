import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadWineCheckins } from "../../store/checkins";
import { getComments, createComment, updateComment, removeComment } from "../../store/comments";
import { NavLink } from "react-router-dom";

const Comments = ({ id, wine, user, wineries, wineList }) => {
  const commentsObj = useSelector(state => state.comments.comments);
  const usersObj = useSelector(state => state.checkins.users);
  const checkin = useSelector(state => state.checkins.checkins[id]);
  const commentCheckins = useSelector(state => state.comments.checkins[id]);



  const [comment, setComment] = useState('');
  const [commentId, setCommentId] = useState()
  const [editComment, setEditComment] = useState('');
  const [revealForm, setRevealForm] = useState(false);
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


  const handleSubmit = async (e) => {
    e.preventDefault();
    const newComment = {
      comment,
      checkinId: checkin.id,
      userId: user.id
    };
    await dispatch(createComment(newComment));
    setRevealForm(false);
  };

  let comments;
  if (commentsObj) {
    const allComments = Object.values(commentsObj);

    comments = allComments?.filter((comment) => {
      return +comment?.checkinId === +checkin?.id;
    });
  }

  const handleEdit = (e) => {
    e.preventDefault();
    setRevealForm(!revealForm);
  };

  const handleEditComment = async (e) => {
    e.preventDefault();
    const editedComment = {
      comment: editComment,
      checkinId: checkin.id,
      userId: user.id
    };
    await dispatch(updateComment(commentId, editedComment))
      .then(dispatch(getComments(checkin?.id)))
      .then(setRevealForm(false));
  };

  // const handleDelete = async (e) => {
  //   e.preventDefault();
  //   await dispatch(removeComment())
  // }
  let users;
  if (usersObj) {
    users = Object.values(usersObj);
  }

  return (
    <div>
      <h2>Comments</h2>
      {users.length > 0 &&
        comments?.map((com) => (
          <div>
            <NavLink
              to={{
                pathname: `/user/${users[com?.userId-1]?.id}/profile`,
                state: { user: users[com?.userId-1], wineries, wineList }
              }}
            >
              {users[com?.userId - 1]?.firstName}
            </NavLink>
            {` says, "${com?.comment}"`}
            {user.id === com.userId &&
              <div>
                <button onClick={handleEdit}>Edit</button>
                <div>
                  {revealForm &&
                    <form>
                      <input
                        value={editComment}
                        onChange={(e) => {
                          setEditComment(e.target.value)
                          setCommentId(com?.id)
                          return;
                        }}
                      />
                      <button
                        onClick={handleEditComment}
                      >
                        Edit Comment
                      </button>
                      <button
                        onClick={async (e) => {
                          e.preventDefault();
                          await dispatch(removeComment(com?.id))
                            .then(dispatch(getComments(checkin?.id)))
                        }}
                      >
                        Delete
                      </button>
                    </form>
                  }
                </div>
              </div>
            }
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
