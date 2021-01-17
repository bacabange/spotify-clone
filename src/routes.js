import React, {useContext, useEffect} from "react";
import { Router, Redirect } from "@reach/router";

import AuthContext from './context/auth/authContext';

import Home from './pages/Home';
import Login from './pages/Login';
import Callback from './pages/Callback';

const Routes = () => {
  const authContext = useContext(AuthContext);
  const { isAuth, login } = authContext;

  useEffect(() => {
    var token = localStorage.getItem('access_token');
    if (token) {
      login(token)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Router>
      <Login default path="/" />
      <Callback path="/callback" />
      { isAuth
        ?
        <>
          <Home path="/home" />
        </>
        : <Redirect from="/home" to="/" noThrow />
      }
    </Router>
  );
}

export default Routes;
