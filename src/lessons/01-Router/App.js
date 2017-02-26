import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import {  } from 'react-router-dom';


const Home = () => <h1>Home</h1>

class App extends React.Component {
  render(){
    return (
      <Router basename={this.props.path}>
        <div>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" render={() => <h1>About</h1>}></Route>
          <Route path="/about" children={
            ({match}) => (match && <p>about content</p>)
          }></Route>
        </div>
      </Router>
    )
  }
}

export default App
