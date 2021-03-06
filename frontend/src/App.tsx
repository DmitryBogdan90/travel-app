import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from './components/Home';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
