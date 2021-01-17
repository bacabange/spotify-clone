import React, { useContext, useEffect } from 'react';
import { useLocation, navigate } from "@reach/router"
import queryString from 'query-string'
import AuthContext from '../context/auth/authContext';

const CallBack = () => {
  const location = useLocation();
  const authContext = useContext(AuthContext);
  const { login, loginFail } = authContext;

  useEffect(() => {
    const hash = queryString.parse(location.hash);
    if (hash && hash.access_token) {
      login(hash.access_token);
      navigate('/home')
    }else {
      const search = queryString.parse(location.search);
      loginFail(search.access_denied)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])

 return (
   <>
    <p>Auth...</p>
   </>
 );
};

export default CallBack;