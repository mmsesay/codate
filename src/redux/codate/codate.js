const SET_CITIES = 'codate/SET_CITIES';
const GET_CITY = 'codate/GET_CITY';

// init state
const initialState = {
  cities: [],
};

// Actions
export const setCitiesAction = (payload) => ({
  type: SET_CITIES,
  payload,
});

export const getCityAction = (payload) => ({
  type: GET_CITY,
  payload,
});

// reducer
export const codateReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CITIES:
      return {
        ...state,
        cities: action.payload,
      };
    
    case GET_CITY:
      return {
        cities: [
          ...state.cities.filter((city) => city.id === action.payload.id),
        ],
      };

    default:
      return state;
  }
};
