import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';


const loggedin = true;
const Links = () =>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/old/123">Old</Link>
    <Link to="/new/456">New</Link>
    <Link to="/protected">Protected</Link>
  </nav>

export class RedirectComponent extends Component {
  render() {
    return (
      <Router>
        <div>
          <br />
          <Links />
            <Route exact path='/' render={() => <h1>Home</h1>} />
            <Route
              path='/new/:str'
              render={({match}) => <h1>New: {match.params.str}</h1>} />
            <Route path="/old/:str" render={({match}) => (
              <Redirect to={`/new/${match.params.str}`} />
            )}/>
            <Route path="/protected" render={({match}) => (
              loggedin
              ? <h1>Welcome to protected page</h1>
              : <Redirect to={`/new/login`} />
            )}/>
        </div>
      </Router>
    );
  }
}