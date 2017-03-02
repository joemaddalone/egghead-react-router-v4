import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const Links = () =>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/?id=123">Inline</Link>
      <Link to={{pathname:'/', search:'id=456'}}>Object</Link>
    </nav>

const MyComponent = (props) => <h1>{props.id}</h1>

const App = (props) => (
  <Router basename={props.path}>
    <div>
      <Links />
      <Route path="/" render={({match, location}) => (
        <div>
          <p>{JSON.stringify(match)}</p>
          <p>{JSON.stringify(location)}</p>
          <p>{location.search}</p>
          <MyComponent
            id={new URLSearchParams(location.search).get('id')}
          />
        </div>
      )} />
    </div>
  </Router>
)

export default App
