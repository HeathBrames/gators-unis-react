import React from 'react';

import Home from './Home';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="routerContainer">
      <Router>
        <Switch>
          <Route path="">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
