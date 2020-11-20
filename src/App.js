import React from 'react';
import './App.css';

import { Home } from './components/LandingPage/Home';

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
