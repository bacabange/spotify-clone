import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';


const AuthState = props => {
  const initialState = {
    isAuth: false,
    error: null,
  }

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const login = async (token) => {
    localStorage.setItem('access_token', token);
    dispatch({ type: 'login' });
  }

  const loginFail = async (error) => {
    dispatch({ type: 'login_fail', error });
  }


  const logout = async () => {
    localStorage.removeItem('access_token');
    dispatch({ type: 'logout' });
  }

  return <AuthContext.Provider
    value={{
      isAuth: state.isAuth,
      error: state.error,
      login,
      loginFail,
      logout
    }}
  >
    {props.children}
  </AuthContext.Provider>;
}

export default AuthState;
