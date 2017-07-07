import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const Home = () => (<h1>Home</h1>)
const Menu = () => (
  <div>
    <h1>Menu</h1>
    <Link to="/nested-routes/menu/food">Food</Link>
    <Link to="/nested-routes/menu/drink">Drinks</Link>
    <Link to="/nested-routes/menu/sides">Sides</Link>
    <Route
      path="/nested-routes/menu/:section"
      render={({match}) => <h2>{match.params.section}</h2>}/>
  </div>
)

export const NestedRoutes = () => (
  <Router>
    <div>
      <Link to="/nested-routes">Home</Link>
      <Link to="/nested-routes/menu">Menu</Link>
      <Route exact path='/nested-routes' component={Home} />
      <Route path='/nested-routes/menu' component={Menu} />
    </div>
  </Router>
);