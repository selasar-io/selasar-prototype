import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
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
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/search">
          < Search/>
        </Route>
        <Route exact path="/verification">
          < Verification/>
        </Route>
        <Route exact path="*">
          < NotFound/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
