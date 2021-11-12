import { csrfFetch } from "./csrf";

const LOAD_WINES = 'wines/loadWines';
const DELETE_WINE = 'wines/deleteWines';

const loadWines = (payload) => {
  return {
    type: LOAD_WINES,
    payload
  };
};

const deleteWine = () => {
  return {
    type: DELETE_WINE
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
  dispatch(deleteWine())
  return;
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
    case DELETE_WINE:
      newState = { ...state, allWines: { ...state.allWines}, wineries: { ...state.wineries }};
      delete newState.allWines[action.id]
      return newState;
    default:
      return state;
  }
};

export default wineReducer;
