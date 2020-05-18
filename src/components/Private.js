import React from 'react'
import ProtectRout from './protected';
import {getSession} from './commonFun/session';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
    console.log("rest..",rest.role.type)
    const session = JSON.parse(getSession());
    console.log("session..",session);
    return (
      <Route
        render ={() =>
         // console.log("...")
          (session && session['status'] && session['role'] === rest.role.type) ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
               
              }}
            />
          )
        }
      />
    );
  }

  export default PrivateRoute;
