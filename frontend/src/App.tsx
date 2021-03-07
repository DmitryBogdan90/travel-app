import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Header from './components/Header/Header';

import { Home } from './components/Home';

const App: React.FC = () => {
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

export default App;
