import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadWineCheckins } from "../../store/checkins";
import { getComments, createComment, updateComment } from "../../store/comments";

const Comments = ({ checkin, wine, user }) => {
  const commentsObj = useSelector(state => state.comments);
  const usersObj = useSelector(state => state.checkins.users);

  const [comment, setComment] = useState('');
  const [commentId, setCommentId] = useState()
  const [editComment, setEditComment] = useState('');
  const [revealForm, setRevealForm] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComments(checkin?.id));
  }, [dispatch, checkin?.id]);

  useEffect(() => {
    dispatch(loadWineCheckins(wine?.id));
  }, [dispatch, wine?.id]);


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



  const allComments = Object.values(commentsObj);

  const comments = allComments?.filter((comment) => {
    return +comment.checkinId === +checkin.id;
  });

  const handleEdit = (e) => {
    e.preventDefault();
    setRevealForm(!revealForm);
  };

  const handleEditComment = async () => {
    const editedComment = {
      comment: editComment,
      checkinId: checkin.id,
      userId: user.id
    };
    await dispatch(updateComment(commentId, editedComment));
    setRevealForm(false);
  };

  return (
    <div>
      <h2>Comments</h2>
      {Object.values(usersObj).length > 0 &&
        comments.map((com) => (
          <div>
            {`${usersObj[com.userId].firstName} says, "${com.comment}"`}
            {user.id === com.userId &&
              <div>
                <button onClick={handleEdit}>Edit</button>
                <div>
                  {revealForm &&
                    <form onSubmit={handleEditComment}>
                      <input
                        value={editComment}
                        onChange={(e) => {
                          setEditComment(e.target.value)
                          setCommentId(com.id)
                          return;
                        }}
                      />
                      <button>Edit Comment</button>
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
