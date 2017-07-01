import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';

const Links = () => (
  <nav>
    <NavLink exact to="/">Home</NavLink>
    <NavLink to={{pathname: '/about'}}>About</NavLink>
    <NavLink replace to="/contact">Contact</NavLink>
  </nav>
)

export const Basic = () => (
  <Router>
    <div>
      <br/>
      <Links />
      <Route exact path='/' render={() => <h1>Home</h1>} />
      <Route path='/about' render={() => <h1>About</h1>} />
      <Route path='/contact' render={() => <h1>Contact</h1>} />
    </div>
  </Router>
);