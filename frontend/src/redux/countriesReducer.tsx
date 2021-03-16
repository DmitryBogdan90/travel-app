import { Country } from '../components/Home/Home.types';

const SET_COUNTRIES = 'SET_COUNTRIES';
const SET_COUNTRY_ID = 'SET_COUNTRY_ID';
const SET_ACTIVE_COUNTRY_DATA = 'SET_ACTIVE_COUNTRY_DATA';
const SET_ACTIVE_COUNTRY_WEATHER = 'SET_ACTIVE_COUNTRY_WEATHER';
const TOOGLE_IS_LOADING = 'TOOGLE_IS_LOADING';
const TOOGLE_IS_WEATHER_LOADING = 'TOOGLE_IS_WEATHER_LOADING';

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
  isLoading: true,
  weather: null,
  isWeatherLoading: true,
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
    case TOOGLE_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case TOOGLE_IS_WEATHER_LOADING:
      return {
        ...state,
        isWeatherLoading: action.isWeatherLoading,
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
export const toogleIsLoading = (isLoading: boolean) => {
  return {
    type: TOOGLE_IS_LOADING,
    isLoading,
  };
};
export const toogleIsWeatherLoading = (isWeatherLoading: boolean) => {
  return {
    type: TOOGLE_IS_WEATHER_LOADING,
    isWeatherLoading,
  };
};

export default countriesReducer;
