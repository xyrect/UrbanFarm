import React from 'react'
import Navbar from '../components/Navbar'
import TextHero from '../components/TextHero'
import CardTanaman from '../components/CardTanaman'
import Batas from '../components/Batas'
import ArtikelCard from '../components/ArtikelCard'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar />
        <div>
            <TextHero />
            <CardTanaman />
            <Batas />
            <ArtikelCard />
            <Footer />
           
        </div>
    </div>
  )
}

export default Home