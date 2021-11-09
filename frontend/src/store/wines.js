const LOAD_WINES = 'wines/loadWines';

const loadWines = (payload) => {
  return {
    type: LOAD_WINES,
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

const initialState = { allWines: null };

const wineReducer = (state = initialState, action) => {
  let newState;
  switch (action.type){
    case LOAD_WINES:
      newState = {...state, allWines: {...state.allWines }};
      action.payload.wines.forEach((wine) => {
        newState.allWines[wine.id] = wine;
      });
      console.log(newState);
      return newState;
    default:
      return state;
  }
};

export default wineReducer;
