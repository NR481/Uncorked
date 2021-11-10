import { csrfFetch } from "./csrf";

const ADD_CHECKIN = 'checkins/addCheckin';
const LOAD_CHECKINS = 'checkins/loadCheckins';

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
  console.log(data);
  return data;
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
    default:
      return state;
    };
  }

export default checkinsReducer;
