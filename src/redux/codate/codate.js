const GET_CITIES = 'codate/GET_CITIES';

// init state
const initialState = {
  cities: [],
};

// Actions
export const getCities = (payload) => ({
  type: GET_CITIES,
  payload,
});

// reducer
export const codateReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CITIES:
      return {
        ...state,
        cities: action.payload,
      };

    default:
      return state;
  }
};
