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
    </nav>

const Header = ({match}) => <h1>{match.params.page}</h1>
const Content = ({match}) => <p>{match.params.page} content</p>

class App extends React.Component {
  render(){
    return (
      <Router basename={this.props.path}>
        <div>
          <Links />
          <Route path="/:page" component={Header}></Route>
          <Route path="/:page" component={Content}></Route>
        </div>
      </Router>
    )
  }
}

export default App
