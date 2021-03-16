import React, { useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Auth from './components/Auth/Auth';
import CountryPage from './components/CountryPage/CountryPage';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { setCountries, setCountryId, toogleIsLoading, onSearch } from './redux/countriesReducer';

const App: React.FC = ({ pathname, ...props }: any) => {
  useEffect(() => {
    axios.get('/countries').then(({ data }) => {
      props.setCountries(data);
      props.toogleIsLoading(false);
      props.onSearch('');
    });
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/auth" component={Auth} />
          <Route path="/country/:id" component={CountryPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default connect(null, { setCountries, setCountryId, toogleIsLoading, onSearch })(App);
