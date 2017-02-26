import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link,
  Switch
} from 'react-router-dom';


const NotLoggedIn = (props) => (
  <div>
    <h1>Who the fuck are you?</h1>
    <button onClick={props.action}>Login</button>
  </div>
)

const Links = () =>
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>

class App extends React.Component {
  constructor(){
    super();
    this.state = {loggedIn: false}
  }
  toggleLogin(){
    let newState = !this.state.loggedIn
    this.setState({loggedIn: newState})
  }
  render(){
    return (
      <Router basename={this.props.path}>
        <div>
          <Links />
          <Switch>
          <Route exact path="/notloggedin" render={
            () => !this.state.loggedIn ?
                  <NotLoggedIn action={this.toggleLogin.bind(this)} /> :
                  <Redirect to="/home" />
          } />
          <Route path="/:page" render={
            ({match}) => this.state.loggedIn ?
                        <h1>{match.params.page}</h1> :
                        <Redirect to="/notloggedin" />
          } />
          </Switch>
        </div>
      </Router>
    )
  }
}


export default App
