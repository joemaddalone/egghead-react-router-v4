import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom';


const Links = () =>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/menu">Menu</Link>
    </nav>

const MenuLinks = () => (
    <nav>
      <NavLink to="/menu/tacos" activeClassName="active">Tacos</NavLink>
      <NavLink to="/menu/pizza" activeClassName="active">Pizza</NavLink>
      <NavLink to="/menu/vegan" activeClassName="active">Vegan</NavLink>
    </nav>
)

const MenuItem = ({match}) => <h2>{match.params.menuItem}</h2>

const Home = ({match}) => <h1>Home</h1>
const Menu = ({match}) => (
  <div>
    <h1>Menu</h1>
    <p>Select an item</p>
    <MenuLinks />
    <Route path={`${match.url}/:menuItem`} component={MenuItem}/>
  </div>
)

const App = (props) => (
  <Router basename={props.path}>
    <div>
      <Links />
      <Route exact path="/" component={Home} />
      <Route path="/menu" component={Menu} />
    </div>
  </Router>
)

export default App
