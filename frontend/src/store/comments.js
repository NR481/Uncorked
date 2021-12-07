import { csrfFetch } from "./csrf";

const LOAD_COMMENTS = 'comments/loadComments';
const ADD_COMMENT = 'comments/addComment';

const loadComments = (comments) => {
  return {
    type: LOAD_COMMENTS,
    comments
  };
};

const addComment = (comment) => {
  return {
    type: ADD_COMMENT,
    comment
  };
};

export const getComments = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/checkins/${id}`);
  const comments = await response.json();
  dispatch(loadComments(comments));
  return comments;
};

export const createComment = (comment) => async (dispatch) => {
  const response = await csrfFetch('/api/comments', {
    method: 'POST',
    body: JSON.stringify(comment)
  });
  const data = await response.json();
  dispatch(addComment(data));
};

const commentsReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case LOAD_COMMENTS:
      newState = { ...state}
      action.comments.comments.forEach((comment) => {
        newState[comment.id] = comment;
      });
      return newState;
    case ADD_COMMENT:
      newState = { ...state,
        [action.comment.newComment.id]: action.comment.newComment
      }
      return newState;
    default:
      return state;
  };
};

export default commentsReducer;
