// https://jsbin.com/qijilug

import React from 'react';
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

const App = (props) => (
  <Router basename={props.path}>
    <div>
      <Links />
      <Switch>
        <Route exact path="/" render={() => <h1>Home</h1>} />
        <Route path="/about" render={() => <h1>About</h1>} />
        <Route path="/contact" render={() => <h1>Contact</h1>} />
        <Route path="/:itemid"
          render={({match}) => <h1>Item: {match.params.itemid}</h1>} />
      </Switch>
    </div>
  </Router>
)

export default App
