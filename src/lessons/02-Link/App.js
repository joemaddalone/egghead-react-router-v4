import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const Home = () => <h1>Home</h1>
const About = () => <h1>About</h1>

const Links = () =>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>

const App = (props) => (
  <Router basename={props.path}>
    <div>
      <Links />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </div>
  </Router>
)

export default App
