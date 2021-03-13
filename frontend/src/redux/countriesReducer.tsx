const SET_COUNTRIES = 'SET_COUNTRIES';

const initialState = {
  countries: [],
};

const countriesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_COUNTRIES:
      return {
        ...state,
        countries: [...action.countries],
      };

    default:
      return state;
  }
};

export const setCountries = (countries: any) => {
  return {
    type: SET_COUNTRIES,
    countries,
  };
};

export default countriesReducer;
