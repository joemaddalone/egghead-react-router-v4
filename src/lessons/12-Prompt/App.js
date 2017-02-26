import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Prompt
} from 'react-router-dom';


const Links = () =>
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>

class App extends React.Component {
  constructor(){
    super();
    this.state = {blocking: false}
  }
  setBlocking(){
    this.setState({blocking: true})
  }
  render(){
    return (
      <Router basename={this.props.path}>
        <div>
          <Links />
          <Prompt
            when={this.state.blocking}
            message='You have made changes, are you sure you want to leave?'
          />
          <Route path="/:page" render={
            ({match, location}) => (
              <input ref="input"
                onChange={this.setBlocking.bind(this)}
                type="text"
                placeholder={match.params.page} />
            )
          }></Route>
        </div>
      </Router>
    )
  }
}



export default App
