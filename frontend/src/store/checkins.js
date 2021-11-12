import { csrfFetch } from "./csrf";

const ADD_CHECKIN = 'checkins/addCheckin';
const LOAD_CHECKINS = 'checkins/loadCheckins';
const REMOVE_CHECKINS = 'checkins/removeCheckins';
const EDIT_CHECKIN = 'checkins/editCheckins';
const DELETE_CHECKIN = 'checkins/deleteCheckin';

const addCheckin = (payload) => {
  return {
    type: ADD_CHECKIN,
    payload
  };
};

const loadCheckins = (checkins) => {
  return {
    type: LOAD_CHECKINS,
    checkins
  };
};

const editCheckin = (checkin) => {
  return {
    type: EDIT_CHECKIN,
    checkin
  };
};

const removeCheckins = () => {
  return {
    type: REMOVE_CHECKINS
  };
};

const deleteCheckin = () => {
  return {
    type: DELETE_CHECKIN
  };
};

export const newCheckin = (input) => async (dispatch) => {
  const response = await csrfFetch('/api/checkins', {
    method: 'POST',
    body: JSON.stringify(input)
  });
  const data = await response.json();
  dispatch(addCheckin(data));
  return data;
};

export const getCheckins = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/users/${id}`);
  const data = await response.json();
  dispatch(loadCheckins(data));
  return data;
}

export const updateCheckin = (id, input) => async (dispatch) => {
  const response = await csrfFetch(`/api/checkins/${id}`, {
    method: 'PUT',
    body: JSON.stringify(input)
  });
  const data = await response.json();
  dispatch(editCheckin(data));
  return data;
}

export const deleteCheckins = () => (dispatch) => {
  dispatch(removeCheckins());
}

export const removeCheckin = (id) => async (dispatch) =>  {
  await csrfFetch(`/api/checkins/${id}`, {
    method: 'DELETE'
  });
  dispatch(deleteCheckin())
  return;
}



const checkinsReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case ADD_CHECKIN:
      newState = { ...state,
        [action.payload.checkin.id]: action.payload.checkin
      }
      return newState;
    case LOAD_CHECKINS:
      newState = { ...state}
      action.checkins.checkins.forEach((checkin) => {
        newState[checkin.id] = checkin;
      })
      return newState;
    case REMOVE_CHECKINS:
      newState = null;
      return newState
    case EDIT_CHECKIN:
      newState = { ...state }
      newState.checkins[action.checkin.checkin.id] = action.checkin.checkin;
      return newState;
    case DELETE_CHECKIN:
      newState = { ...state }
      delete newState[action.checkin];
      return newState;
    default:
      return state;
    };
  }

export default checkinsReducer;
