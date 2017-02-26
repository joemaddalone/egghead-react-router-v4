import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';


const Links = () =>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/invalid/longer/even/more">Contact</Link>
    </nav>

class App extends React.Component {
  render(){
    return (
      <Router basename={this.props.path}>
        <div>
          <Links />
          <Switch>
            <Route exact path="/" render={() => <h1>Home</h1>}></Route>
            <Route path="/about" render={() => <h1>About</h1>}></Route>
            <Route path="/" render={({match, location}) => {
              return <h1>404: {match.params.page} was not found</h1>}
            }></Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
