import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const Links = () =>
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>

const App = (props) => (
  <Router basename={props.path}>
    <div>
      <Links />
      <Route path="/:page" render={({match, location}) => {
        return <h1>{match.params.page}</h1>}
      } />
    </div>
  </Router>
)

export default App
