import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Cards from '../components/Cards'
import Artikelimage from '../components/Artikelimg'
import Utama from '../components/utama'

const Home = () => {
  return (
    <div>
        <Navbar />
        <div>
            <Artikelimage />
            <Utama />
            <Cards />
            <Footer />
           
        </div>
    </div>
  )
}

export default Home