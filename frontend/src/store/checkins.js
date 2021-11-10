import { csrfFetch } from "./csrf";

const ADD_CHECKIN = 'checkins/addCheckin';

const addCheckin = (payload) => {
  return {
    type: ADD_CHECKIN,
    payload
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

const checkinsReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case ADD_CHECKIN:
      newState = { ...state,
        [action.payload.checkin.id]: action.payload.checkin
      }
      return newState;
      default:
        return state;
    };
  }

export default checkinsReducer;
