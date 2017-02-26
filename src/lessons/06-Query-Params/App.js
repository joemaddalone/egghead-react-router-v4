import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const Home = () => <h1>Home</h1>

const Links = () =>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to={{pathname: '/about', search: '?a=1234567890'}}>About Query</Link>
    </nav>

class App extends React.Component {
  render(){
    return (
      <Router basename={this.props.path}>
        <div>
          <Links />
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" render={({match, location}) => <h1>About {new URLSearchParams(location.search).get('a')}</h1>}></Route>
        </div>
      </Router>
    )
  }
}

export default App
