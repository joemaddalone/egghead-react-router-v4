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
      <Link to="/contact/subpage">Contact-Subpage</Link>
    </nav>

const App = (props) => (
  <Router basename={props.path}>
    <div>
      <Links />
      <Route path="/:a/:b?" render={({match}) => {
        return <h1>{match.params.a}  {match.params.b}</h1>}
      } />
    </div>
  </Router>
)

export default App
