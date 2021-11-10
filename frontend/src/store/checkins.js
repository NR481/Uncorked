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
    body: JSON.stringify({
      comment,
      userId,
      wineryId,
      wineId
    })
  });
  const data = await response.json();
  dispatch(addCheckin(data));
  return response;
};


