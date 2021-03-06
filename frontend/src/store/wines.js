import { csrfFetch } from "./csrf";

const LOAD_WINES = 'wines/loadWines';
const DELETE_WINE = 'wines/deleteWine';
const ADD_WINE = 'wines/addWine';
const EDIT_WINE = 'wines/editWine';

const loadWines = (payload) => {
  return {
    type: LOAD_WINES,
    payload
  };
};

const deleteWine = (id) => {
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

const editWine = (payload) => {
  return {
    type: EDIT_WINE,
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
  })
  dispatch(deleteWine(id));
  return;
};

export const createNewWine = (wine) => async (dispatch) => {
  const { name, vintage, image, varietal, winery, location, description, userId } = wine;
  const formData = new FormData();
  formData.append("name", name);
  formData.append("vintage", vintage);
  formData.append("varietal", varietal);
  formData.append("winery", winery);
  formData.append("location", location);
  formData.append("description", description);
  formData.append("userId", userId);

  if (image) formData.append("image", image);

  const response = await csrfFetch('/api/wines', {
    method: 'POST',
    headers: { 'Content-Type': 'multipart/form-data' },
    body: formData
  });
  const data = await response.json();
  dispatch(addWine(data));
  return data;
};

export const updateWine = (id, wine) => async (dispatch) => {
  const { editName, editVintage, editImage, editVarietal, editWinery, editLocation, editDescription } = wine;
  const formData = new FormData();
  formData.append("editName", editName);
  formData.append("editVintage", editVintage);
  formData.append("editVarietal", editVarietal);
  formData.append("editWinery", editWinery);
  formData.append("editLocation", editLocation);
  formData.append("editDescription", editDescription);

  if (editImage) formData.append("editImage", editImage);
  
  const response = await csrfFetch(`/api/wines/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'multipart/form-data' },
    body: formData
  });
  const data = await response.json();
  dispatch(editWine(data));
  return data;
};

const initialState = { allWines: {}, wineries: {} };

const wineReducer = (state = initialState, action) => {
  let newState;
  switch (action.type){
    case LOAD_WINES:
      newState = {...state};
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
      newState = { ...state, allWines: { ...state.allWines}, wineries: { ...state.wineries }};
      delete newState.allWines[action.id]
      return newState;
    case EDIT_WINE:
      newState = { ...state, allWines: { ...state.allWines}, wineries: { ...state.wineries}};
      newState.allWines[action.payload.wine.id] = action.payload.wine
      newState.wineries[action.payload.winery.id] = action.payload.winery
      return newState;
    default:
      return state;
  }
};

export default wineReducer;
