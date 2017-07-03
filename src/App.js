import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';

import './App.css';

// ROUTES
import {
  Basic,
  Params,
  Regex,
  QueryParams,
  SwitchComponent
} from './routes';

const Links = () => (
  <nav>
    <NavLink exact to="/">Basic</NavLink>
    <NavLink to={{ pathname: '/params' }}>Parameters</NavLink>
    <NavLink to="/regex/12-12-2017.html">Regex</NavLink>
    <NavLink to="/query-params">Query Parameters</NavLink>
    <NavLink to="/switch">Switch</NavLink>
  </nav>
)

const App = () => (
  <Router>
    <div>
      <Links />
      <Route exact path='/' render={() => <Basic />} />
      <Route path='/params' render={() => <Params />} />
      <Route path='/regex/12-12-2017.html' render={() => <Regex />} />
      <Route path='/query-params' render={() => <QueryParams />} />
      <Route path='/switch' render={() => <SwitchComponent />} />
    </div>
  </Router>
);

export default App;