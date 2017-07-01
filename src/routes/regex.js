import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

export const Regex = () => (
  <Router>
    <div>
      <Route
      path="/regex/:a(\d{2}-\d{2}-\d{4}):b(\.[a-z]+)"
      render={({match}) => (
        <h1>
          paramA: {match.params.a} <br/>
          paramB: {match.params.b}
        </h1>
      )} />
    </div>
  </Router>
);