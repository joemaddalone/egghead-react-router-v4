import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Prompt
} from 'react-router-dom';

const Home = () => (<h1>Home</h1>)
class Form extends React.Component {
  state = {dirty: false}
  setDirty = () => this.setState({dirty: true})
  render(){
    return (
      <div>
        <h1>Form</h1>
        <input type="text" onInput={this.setDirty}/>
        <Prompt
          when={this.state.dirty}
          message="Data will be lost!"
         />
      </div>
    )
  }
}
const App = (props) => (
  <Router basename={props.path}>
    <div>
      <Link to="/">Home</Link>
      <Link to="/form">Form</Link>
      <Route exact path="/" component={Home} />
      <Route path="/form" component={Form} />
    </div>
  </Router>
)



export default App
