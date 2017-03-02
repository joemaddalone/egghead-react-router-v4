import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.css';

const lessons = [
  {id: '01-Router'},
  {id: '02-Link'},
  {id: '03-NavLink'},
  {id: '04-Routers'},
  {id: '05-URL-Params'},
  {id: '06-URL-Regex'},
  {id: '07-Query-Params'},
  {id: '08-Catch-All'},
  {id: '09-Conditional'},
  {id: '10-Multiple'},
  {id: '11-Nested'},
  {id: '12-Redirect'},
  {id: '13-Prompt'}
]

lessons.forEach(l => l.Component =  require(`./lessons/${l.id}/App`).default)
const Links = () =>
    <ul className="lesson-nav">
          {lessons.map((l, i) => (
            <li key={l.id}><Link to={`/lessons/${l.id}`}>{l.id}</Link></li>
          ))}
    </ul>

const Back = () => <div style={{marginBottom: 64}}><Link to="/">&larr;Back to lessons</Link></div>

class App extends React.Component {
  render(){
    return (
      <Router>
        <div>
          <Route exact path="/" component={Links}></Route>
          <Route path="/lessons" component={Back}></Route>
         {lessons.map(({id, Component}) => (
            <Route key={id} path={`/lessons/${id}`} render={({match}) => <Component {...match}/>} />
          ))}
        </div>
      </Router>
    )
  }
}

export default App;
