import React, { useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Auth from './components/Auth/Auth';
import Header from './components/Header/Header';
import { Home } from './components/Home';
import { setCountries } from './redux/countriesReducer';
import Home from './components/Home/Home';

const App: React.FC = (props: any) => {
  useEffect(() => {
    axios.get('/countries').then(({ data }) => {
      props.setCountries(data);
    });
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/auth" component={Auth} exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default connect(null, { setCountries })(App);
