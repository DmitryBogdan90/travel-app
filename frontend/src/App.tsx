import React, { useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Auth from './components/Auth/Auth';
import CountryPage from './components/CountryPage/CountryPage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { setCountries, setCountryId, toogleIsLoading, onSearch } from './redux/countriesReducer';

const App: React.FC = ({ pathname, ...props }: any) => {
  useEffect(() => {
    axios.get('https://travel-app-prod.herokuapp.com/countries').then(({ data }) => {
      props.setCountries(data);
      props.toogleIsLoading(false);
      props.onSearch('');
    });
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <div className="container" style={{ paddingBottom: '200px' }}>
        <Switch>
          <Route path="/travel-app" component={Home} exact />
          <Route path="/auth" component={Auth} />
          <Route path="/country/:id" component={CountryPage} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default connect(null, { setCountries, setCountryId, toogleIsLoading, onSearch })(App);
