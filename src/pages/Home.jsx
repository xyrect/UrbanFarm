import React from 'react'
import Navbar from '../components/Navbar'
import TextHero from '../components/TextHero'
import CardTanaman from '../components/CardTanaman'
import Batas from '../components/Batas'
import ArtikelList from '../components/ArtikelList'

const Home = () => {
  return (
    <div>
        <Navbar />
        <div>
            <TextHero />
            <CardTanaman />
            <Batas />
            <ArtikelList />
           
        </div>
    </div>
  )
}

export default Home