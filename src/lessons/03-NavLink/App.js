import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';

const isActiveFunc = ( match, location ) => {
  console.log(match, location)
  return match
}

const Links = () =>
    <nav>
      <NavLink to="/home" activeClassName="active">Home</NavLink>
      <NavLink to="/about" activeStyle={{ fontWeight: 'bold', color: 'red' }}>About</NavLink>
      <NavLink to="/contact" isActive={isActiveFunc}  activeClassName="active">Contact</NavLink>
    </nav>

class App extends React.Component {
  render(){
    return (
      <Router basename={this.props.path}>
        <div>
          <Links />
          <Route path="/home" render={() => <h1>Home</h1>}></Route>
          <Route path="/about" render={() => <h1>About</h1>}></Route>
          <Route path="/contact" render={() => <h1>Contact</h1>}></Route>
        </div>
      </Router>
    )
  }
}

export default App
