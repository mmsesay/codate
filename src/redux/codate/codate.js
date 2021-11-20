const SET_CITIES = 'codate/SET_CITIES';

// init state
const initialState = {
  cities: [],
};

// Actions
export const setCitiesAction = (payload) => ({
  type: SET_CITIES,
  payload,
});

// reducer
export const codateReducer = (state = initialState, action = undefined) => {
  switch (action.type) {
    case SET_CITIES:
      return {
        ...state,
        cities: action.payload,
      };

    default:
      return state;
  }
};
