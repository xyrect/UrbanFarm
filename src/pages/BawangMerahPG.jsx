import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Bmp from '../components/Bmp'
import BawangmerahP from '../components/BawangmerahP'

const Detail = () => {
  return (
    <div>
        <Navbar />
        <div>
            <Bmp />
            <BawangmerahP />
            <Footer />
        </div>
    </div>
  )
}

export default Detail