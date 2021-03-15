import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import '../../assets/owfont-master/css/owfont-regular.min.css';

import { setActiveCountryWeather } from '../../redux/countriesReducer';
import { WEATHER_API_KEY } from '../../constants';
import { weatherStyles } from './WeatherStyles';

const Weather = ({ capital, weather, ...props }: any) => {
  const classes = weatherStyles();
  const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=${WEATHER_API_KEY}`;
  const imgURL = `owf owf-${weather?.weather[0].id} owf-5x`;
  const [date, setDate] = useState<Date>(new Date());
  const myDate = new Date();

  useEffect(() => {
    axios.get(weatherUrl).then(({ data }) => {
      props.setActiveCountryWeather(data);
    });
  }, [capital]);

  useEffect(() => {
    const tick = setInterval(() => {
      const tzDifference = weather.timezone / 60 + myDate.getTimezoneOffset();
      const offset = tzDifference * 60 * 1000;
      setDate(new Date(myDate.getTime() + offset));
    }, 1000);

    return () => clearInterval(tick);
  });

  return (
    <div className={classes.weatherWrapper}>
      <div className="">{date.toDateString()}</div>
      <div className="">{date.toLocaleTimeString()}</div>
      <i className={imgURL} />
      <div className={classes.temp}>{Math.round(weather?.main.temp)} &#176;C</div>
      <div>{weather?.weather[0].description}</div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    weather: state.countries.weather,
  };
};

export default connect(mapStateToProps, { setActiveCountryWeather })(Weather);
