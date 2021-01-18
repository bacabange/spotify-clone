import React, { useContext } from 'react'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import Container from '../components/Layout/Container'
import Logo from '../components/Logo'
import ProfileSection from '../components/ProfileSection'
import Search from '../components/Search'
import SongsContext from '../context/songs/songsContext';
import SongList from '../components/SongList'

function Home() {
  const songsContext = useContext(SongsContext);
  const { getSongs, isLoading, all: songs, query, pagination } = songsContext;

  const search = (text) => {
    getSongs(text);
  }

  const onNext = (url) => {
    getSongs(query, url);
  }

  const onPrevious = (url) => {
    getSongs(query, url);
  }

  return (
    <Container>
      <Header>
        <Logo>ESPOTIFAI</Logo>
        <ProfileSection />
      </Header>

      <section className={`content ${songs && query ? 'content-full' : ''}`}>
        <Search onSearch={search}/>

        {isLoading && <p>Loading</p>}
        { songs && query ? <SongList songs={songs} pagination={pagination} onNext={onNext} onPrevious={onPrevious}/> : null }

      </section>

      <Footer>
        <p className="text-center">Espotifai by <a href="https://stiven.dev">stiven.dev</a></p>
      </Footer>
    </Container>
  )
}

export default Home
