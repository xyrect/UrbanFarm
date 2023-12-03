import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Cards from '../components/Cards'
import Artikelimage from '../components/Artikelimg'

const Home = () => {
  return (
    <div>
        <Navbar />
        <div>
            <Artikelimage />
            <Cards />
            <Footer />
           
        </div>
    </div>
  )
}

export default Home