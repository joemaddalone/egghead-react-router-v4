import React from 'react';
import {
  BrowserRouter,
  HashRouter,
  MemoryRouter,
  StaticRouter,
  NativeRouter,
  Link,
  Route
} from 'react-router-dom';

const LinksRoutes = () => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Route exact path="/" render={() => <h1>Home</h1>} />
    <Route path="/about" render={() => <h1>About</h1>} />
  </div>
)

const forceRefresh = () => {
  console.log(new Date())
  return false
}

const BrowserRouterApp = () => (
  <BrowserRouter forceRefresh={forceRefresh()}>
    <LinksRoutes />
  </BrowserRouter>
)

const HashRouterApp = () => (
  <HashRouter hashType="hashbang">
    <LinksRoutes />
  </HashRouter>
)

const MemoryRouterApp = () => (
  <MemoryRouter
    initialEntries={['/', '/about']}
    initialIndex={1}
    >
    <LinksRoutes />
  </MemoryRouter>
)

const StaticRouterApp = () => (
  <StaticRouter location="/about" context={{}}>
    <LinksRoutes />
  </StaticRouter>
)


export default HashRouterApp
