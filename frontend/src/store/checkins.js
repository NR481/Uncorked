import { csrfFetch } from "./csrf";

const ADD_CHECKIN = 'checkins/addCheckin';
const LOAD_CHECKINS = 'checkins/loadCheckins';
const REMOVE_CHECKINS = 'checkins/removeCheckins';
const EDIT_CHECKIN = 'checkins/editCheckins';
const DELETE_CHECKIN = 'checkins/deleteCheckin';
const GET_CHECKINS = 'checkins/getCheckins';
// const GET_CHECKIN = 'checkins/getCheckin'

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

const deleteCheckin = (id) => {
  return {
    type: DELETE_CHECKIN,
    id
  };
};

const getWineCheckins = (checkins) => {
  return {
    type: GET_CHECKINS,
    checkins
  };
};

// const getCheckin = (checkin) => {
//   return {
//     type: GET_CHECKIN,
//     checkin
//   };
// };

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
};

export const loadWineCheckins = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/wines/${id}`);
  const data = await response.json();
  dispatch(getWineCheckins(data));
  return data;
};

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
  dispatch(deleteCheckin(id))
  return;
};

// export const getOneCheckin = (id) => async (dispatch) => {
//   const response = await csrfFetch(`/api/checkins/${id}`);
//   const data = await response.json();
//   dispatch(getCheckin(id));
//   return data;
// };

const checkinsReducer = (state = { checkins: {}, users: {} }, action) => {
  let newState;
  switch (action.type) {
    case ADD_CHECKIN:
      newState = { ...state,
        checkins:
        { ...state.checkins,
          [action.payload.checkin.id]: action.payload.checkin
        },
        users: { ...state.users }
      }
      return newState;
    case LOAD_CHECKINS:
      newState = { ...state, checkins: {} }
      action.checkins.checkins.forEach((checkin) => {
        newState.checkins[checkin.id] = checkin;
      })
      return newState;
    case REMOVE_CHECKINS:
      newState = null;
      return newState
    case EDIT_CHECKIN:
      newState = { ...state, checkins: { ...state.checkins}, users: { ...state.users } }
      newState[action.checkin.checkin.id] = action.checkin.checkin;
      return newState;
    case DELETE_CHECKIN:
      newState = { ...state, checkins: { ...state.checkins }, users: { ...state.users } }
      delete newState.checkins[action.id];
      return newState;
    case GET_CHECKINS:
      newState = { ...state, checkins: {} }
      action.checkins.checkins.forEach((checkin) => {
        newState.checkins[checkin.id] = checkin
      })
      action.checkins.users.forEach((user) => {
        newState.users[user.id] = user
      })
      return newState;
    default:
      return state;
    };
  }

export default checkinsReducer;
