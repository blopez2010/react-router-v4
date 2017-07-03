import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

const Links = () =>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
  </nav>

export class SwitchComponent extends Component {
  render() {
    return (
      <Router>
        <div>
          <br />
          <Links />
          <Switch>
            <Route exact path='/' render={() => <h1>Home</h1>} />
            <Route path='/about' render={() => <h1>About</h1>} />
            <Route render={() => <h1>Page not found</h1>} />
          </Switch>
        </div>
      </Router>
    );
  }
}