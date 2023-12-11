import React from 'react'
import Navbar from '../components/Navbar'
import TextHero from '../components/TextHero'
import CardTanaman from '../components/CardTanaman'
import Batas from '../components/Batas'
import ArtikelCard from '../components/ArtikelCard'
import Footer from '../components/Footer'
import SecUrban from '../components/SecUrban'

const Home = () => {
  return (
    <div>
        <Navbar />
        <div>
            <TextHero />
            <SecUrban />
            <CardTanaman />
            <Batas />
            <ArtikelCard />
            <Footer />
           
        </div>
    </div>
  )
}

export default Home