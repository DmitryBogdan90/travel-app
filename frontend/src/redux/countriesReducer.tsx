import { Country } from '../components/Home/Home.types';

const SET_COUNTRIES = 'SET_COUNTRIES';
const SET_COUNTRY_ID = 'SET_COUNTRY_ID';
const SET_ACTIVE_COUNTRY_DATA = 'SET_ACTIVE_COUNTRY_DATA';
const SET_ACTIVE_COUNTRY_WEATHER = 'SET_ACTIVE_COUNTRY_WEATHER';

const initialState = {
  countries: [],
  activeCountryId: '',
  activeCountryData: {
    capital: '',
    name: '',
    info: '',
    img: '',
    _id: '',
    sights: [],
  },
  weather: null,
};

const countriesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_COUNTRIES:
      return {
        ...state,
        countries: [...action.countries],
      };
    case SET_COUNTRY_ID:
      return {
        ...state,
        activeCountryId: action.id,
      };
    case SET_ACTIVE_COUNTRY_DATA:
      return {
        ...state,
        activeCountryData: action.data,
      };
    case SET_ACTIVE_COUNTRY_WEATHER:
      return {
        ...state,
        weather: action.data,
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

export const setCountryId = (id: string) => {
  return {
    type: SET_COUNTRY_ID,
    id,
  };
};

export const setActiveCountryData = (data: Country) => {
  return {
    type: SET_ACTIVE_COUNTRY_DATA,
    data,
  };
};

export const setActiveCountryWeather = (data: any) => {
  return {
    type: SET_ACTIVE_COUNTRY_WEATHER,
    data,
  };
};

export default countriesReducer;
