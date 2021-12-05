import { csrfFetch } from "./csrf";

const LOAD_WINES = 'wines/loadWines';
const DELETE_WINE = 'wines/deleteWine';
const ADD_WINE = 'wines/addWine';

const loadWines = (payload) => {
  return {
    type: LOAD_WINES,
    payload
  };
};

const deleteWine = (id) => {
  console.log('*********', id);
  return {
    type: DELETE_WINE,
    id
  };
};

const addWine = (payload) => {
  return {
    type: ADD_WINE,
    payload
  };
};

export const getWines = () => async (dispatch) => {
  const response = await fetch('/api/wines');

  if (response.ok){
    const wines = await response.json();
    dispatch(loadWines(wines));
    return wines;
  };
};

export const removeWine = (id) => async (dispatch) => {
  await csrfFetch(`/api/wines/${id}`, {
    method: 'DELETE'
  });
  console.log('***************')
  dispatch(deleteWine(id));
  return;
};

export const createNewWine = (wine) => async (dispatch) => {
  const response = await csrfFetch('/api/wines', {
    method: 'POST',
    body: JSON.stringify(wine)
  });
  const data = await response.json();
  dispatch(addWine(data));
  return data;
}

const initialState = { allWines: null, wineries: null };

const wineReducer = (state = initialState, action) => {
  let newState;
  switch (action.type){
    case LOAD_WINES:
      newState = {...state, allWines: { ...state.allWines }, wineries: { ...state.wineries }};
      action.payload.wines.forEach((wine) => {
        newState.allWines[wine.id] = wine;
      });
      action.payload.wineries.forEach((winery) => {
        newState.wineries[winery.id] = winery;
      });
      return newState;
    case ADD_WINE:
      newState = { ...state,
        allWines:
          { ...state.allWines,
            [action.payload.wine.id]: action.payload.wine
          },
        wineries :
          { ...state.wineries,
            [action.payload.winery.id]: action.payload.winery
          }
      }
      return newState;
    case DELETE_WINE:
      console.log(action)
      newState = { ...state, allWines: { ...state.allWines}, wineries: { ...state.wineries }};
      delete newState.allWines[action.id]
      return newState;
    default:
      return state;
  }
};

export default wineReducer;
