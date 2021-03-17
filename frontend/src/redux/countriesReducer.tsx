import { Country } from '../components/Home/Home.types';

const SET_COUNTRIES = 'SET_COUNTRIES';
const SET_COUNTRY_ID = 'SET_COUNTRY_ID';
const SET_ACTIVE_COUNTRY_DATA = 'SET_ACTIVE_COUNTRY_DATA';
const SET_ACTIVE_COUNTRY_WEATHER = 'SET_ACTIVE_COUNTRY_WEATHER';
const TOOGLE_IS_LOADING = 'TOOGLE_IS_LOADING';
const TOOGLE_IS_WEATHER_LOADING = 'TOOGLE_IS_WEATHER_LOADING';
const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE';
const SET_EXCHANGE_USD = 'SET_EXCHANGE_USD';
const SET_EXCHANGE_EUR = 'SET_EXCHANGE_EUR';

const initialState = {
  countries: [],
  filteredCountries: [],
  activeCountryId: '',
  activeCountryData: {
    capital: '',
    name: '',
    info: '',
    img: '',
    _id: '',
    sights: [],
    map: [],
  },
  exchangeRateUSD: null,
  exchangeRateEUR: null,
  isLoading: true,
  weather: null,
  isWeatherLoading: true,
  searchValue: '',
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

    case SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.searchValue,
        filteredCountries: [
          ...state.countries.filter(
            (country: Country) =>
              country.name.toLowerCase().includes(action.searchValue.toLowerCase()) ||
              country.capital.toLowerCase().includes(action.searchValue.toLowerCase()),
          ),
        ],
      };

    case SET_EXCHANGE_USD:
      return {
        ...state,
        exchangeRateUSD: [action.exchangeRateUSD, action.countryCurrency],
      };

    case SET_EXCHANGE_EUR:
      return {
        ...state,
        exchangeRateEUR: [action.exchangeRateEUR, action.countryCurrency],
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

export const onSearch = (searchValue: string) => {
  return {
    type: SET_SEARCH_VALUE,
    searchValue,
  };
};

export const setExchangeUSD = (exchangeRateUSD: any, countryCurrency: any) => {
  return {
    type: SET_EXCHANGE_USD,
    exchangeRateUSD,
    countryCurrency,
  };
};
export const setExchangeEUR = (exchangeRateEUR: any, countryCurrency: any) => {
  return {
    type: SET_EXCHANGE_EUR,
    exchangeRateEUR,
    countryCurrency,
  };
};

export default countriesReducer;
