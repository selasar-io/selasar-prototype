import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Main from './pages/main'
import SignIn from './pages/login/signIn'
import SignUp from './pages/login/signUp'
import Search from './pages/search'
import Verification from './pages/login/verification'
import NotFound from './pages/404'

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/">
          <Main />
        </PrivateRoute>
        <PrivateRoute exact path="/search">
          <Search />
        </PrivateRoute>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/verification">
          <Verification />
        </Route>
        <Route exact path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  )
}

function PrivateRoute({ children, ...rest }) {
  const isLoggedIn = localStorage.getItem('selasar:isLoggedIn') === 'true'

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default App
