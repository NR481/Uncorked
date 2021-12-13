import { csrfFetch } from "./csrf";

const LOAD_COMMENTS = 'comments/loadComments';
const ADD_COMMENT = 'comments/addComment';
const EDIT_COMMENT = 'comments/editComment';
const DELETE_COMMENT = 'comments/deleteComment';

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

const editComment = (comment) => {
  return {
    type: EDIT_COMMENT,
    comment
  };
};

const deleteComment = (id) => {
  return {
    type: DELETE_COMMENT,
    id
  };
};

export const getComments = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/checkins/${id}`);
  const data = await response.json();
  dispatch(loadComments(data));
  return data;
};

export const createComment = (comment) => async (dispatch) => {
  const response = await csrfFetch('/api/comments', {
    method: 'POST',
    body: JSON.stringify(comment)
  });
  const data = await response.json();
  dispatch(addComment(data));
  return data;
};

export const updateComment = (id, comment) => async (dispatch) => {
  const response = await csrfFetch(`/api/comments/${id}`, {
    method: 'PUT',
    body: JSON.stringify(comment)
  });
  const data = await response.json();
  dispatch(editComment(data));
};

export const removeComment = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/comments/${id}`, {
    method: 'DELETE'
  });
  dispatch(deleteComment(id));
  return;
};

const commentsReducer = (state = { comments: {}, checkins: {} }, action) => {
  let newState;
  switch (action.type) {
    case LOAD_COMMENTS:
      newState = { ...state }
      action.comments.comments.forEach((comment) => {
        newState.comments[comment.id] = comment;
      });
      newState.checkins[action.comments.checkin.id] = action.comments.checkin
      return newState;
    case ADD_COMMENT:
      newState = { ...state,
        comments: { ...state.comments,
          [action.comment.newComment.id]: action.comment.newComment}
      }
      return newState;
    case EDIT_COMMENT:
      newState = { ...state }
      newState.comments.comments[action.comment.editedComment.id] = action.comment.editComment
      console.log(action)
      return newState;
    case DELETE_COMMENT:
      newState = { ...state }
      delete newState.comments[action.id]
      return newState;
    default:
      return state;
  };
};

export default commentsReducer;
