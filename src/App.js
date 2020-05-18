import React from 'react';
import logo from './logo.svg';
import './App.css';
import Buycake from './components/buycakecontainer';
import Buyicecream from './components/buyicecream';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import Userlist from './components/userlist';
import Login from './components/login';
import PrivateRoute from './components/Private';
import ProtectedPage from './components/protected';
function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
            <Buycake></Buycake>
            </Route>
            <Route path="/userlist">
              <Userlist />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/protected" role={{'type':'admin'}}>
              <ProtectedPage />
            </PrivateRoute>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
