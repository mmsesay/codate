const SET_CITIES = 'codate/SET_CITIES';
const GET_CITIES = 'codate/GET_CITIES';

// init state
const initialState = {
  cities: [],
};

// Actions
export const setCitiesAction = (payload) => ({
  type: SET_CITIES,
  payload,
});

export const getCitiesAction = () => ({
  type: GET_CITIES,
});

// reducer
export const codateReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CITIES:
      return {
        ...state,
        cities: action.payload,
      };

    case GET_CITIES:
      return state;

    default:
      return state;
  }
};
