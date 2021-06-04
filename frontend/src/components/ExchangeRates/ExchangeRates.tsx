import React, { useEffect } from 'react';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { getParamByISO } from 'iso-country-currency';
import { connect } from 'react-redux';

import { setExchangeUSD, setExchangeEUR } from '../../redux/countriesReducer';
import { exchangeRatesStyles } from './ExchangeRatesStyles';

const ExchangeRates = ({
  countryName,
  exchangeRateUSD,
  exchangeRateEUR,
  ...props
}: {
  countryName: string;
  exchangeRateUSD: any;
  exchangeRateEUR: any;
  setExchangeUSD: any;
  setExchangeEUR: any;
}) => {
  const classes = exchangeRatesStyles();

  const fetchData = () => {
    const countryCurrency = getParamByISO(countryName, 'currency');
    const USDUrl = `https://api.exchangeratesapi.io/latest?symbols=${countryCurrency}&base=USD`;
    const EURUrl = `https://api.exchangeratesapi.io/latest?symbols=${countryCurrency}&base=EUR`;
    axios.get(USDUrl).then(({ data }) => {
      if (countryCurrency === 'USD') {
        props.setExchangeUSD(null, 'USD');
      } else {
        props.setExchangeUSD(data, countryCurrency);
      }
    });
    axios.get(EURUrl).then(({ data }) => {
      if (countryCurrency === 'EUR') {
        props.setExchangeUSD(null, 'EUR');
      } else {
        props.setExchangeEUR(data, countryCurrency);
      }
    });
  };

  useEffect(() => {
    if (countryName) {
      fetchData();
    }
  }, [countryName]);

  return (
    <div className={classes.root}>
      <Grid container spacing={3} style={{ width: '100%', margin: '0' }}>
        <Grid item xs={8} style={{ margin: '0 auto' }}>
          <Paper className={classes.paper}>Exchange rates</Paper>
        </Grid>
        <Grid item xs={8} sm={6} style={{ margin: '0 auto' }}>
          <Paper className={classes.paper}>
            1 EUR ={' '}
            {exchangeRateEUR ? exchangeRateEUR[0].rates[exchangeRateEUR[1]].toFixed(3) : '1 EUR'}{' '}
            {exchangeRateEUR ? exchangeRateEUR[1] : ''}
          </Paper>
        </Grid>
        <Grid item xs={8} sm={6} style={{ margin: '0 auto' }}>
          <Paper className={classes.paper}>
            1 USD = {exchangeRateUSD ? exchangeRateUSD[0].rates[exchangeRateUSD[1]].toFixed(3) : ''}{' '}
            {exchangeRateUSD ? exchangeRateUSD[1] : '1 USD'}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    isWeatherLoading: state.countries.isWeatherLoading,
    countryName: state?.countries?.weather?.sys?.country,
    exchangeRateEUR: state.countries.exchangeRateEUR,
    exchangeRateUSD: state.countries.exchangeRateUSD,
  };
};

export default connect(mapStateToProps, { setExchangeUSD, setExchangeEUR })(ExchangeRates);
