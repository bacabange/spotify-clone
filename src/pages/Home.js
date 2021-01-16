import React from 'react'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import Container from '../components/Layout/Container'
import Logo from '../components/Logo'
import ProfileImage from '../components/ProfileImage'
import Search from '../components/Search'

function Home() {
  return (
    <Container>
      <Header>
        <Logo>ESPOTIFAI</Logo>
        <ProfileImage />
      </Header>

      <section className="content">
        <Search />
      </section>

      <Footer>
        <p className="text-center">Espotifai by <a href="https://stiven.dev">stiven.dev</a></p>
      </Footer>
    </Container>
  )
}

export default Home
