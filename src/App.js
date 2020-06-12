import React from 'react';
import UsersList from './Components/UsersList';
import Home from './Components/Home';
import { BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={UsersList} />
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default App;
