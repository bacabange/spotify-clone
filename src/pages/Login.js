import React, { useContext, useEffect } from 'react'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import Container from '../components/Layout/Container'
import Logo from '../components/Logo'
import ProfileSection from '../components/ProfileSection'
import AuthContext from '../context/auth/authContext';
import { navigate } from "@reach/router"

function Login() {
  const authContext = useContext(AuthContext);
  const { isAuth } = authContext;

  useEffect(() => {
    if (isAuth) {
      navigate('/home')
    }
  }, [isAuth])

  const login = () => {
    // scope=user-read-private%20user-read-email&state=34fFs29kd09
    window.location = `${process.env.REACT_APP_AUTHORIZE_URL}?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true&scope=user-read-private%20user-read-email`;
  }

  return (
    <Container>
      <Header>
        <Logo>ESPOTIFAI</Logo>
        <ProfileSection />
      </Header>

      <section className="content">
        <button onClick={login} className="button-dark">Login</button>
      </section>

      <Footer>
        <p className="text-center">Espotifai by <a href="https://stiven.dev">stiven.dev</a></p>
      </Footer>
    </Container>
  )
}

export default Login
