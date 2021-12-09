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

const commentsReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case LOAD_COMMENTS:
      newState = { ...state, comments: {}, checkin: {} }
      action.comments.comments.forEach((comment) => {
        newState.comments[comment.id] = comment;
      });
      newState.checkin[action.comments.checkin.id] = action.comments.checkin
      return newState;
    case ADD_COMMENT:
      newState = { ...state,
        [action.comment.newComment.id]: action.comment.newComment
      }
      return newState;
    case EDIT_COMMENT:
      newState = { ...state }
      newState[action.comment.id] = action.comment
      return newState;
    default:
      return state;
  };
};

export default commentsReducer;
