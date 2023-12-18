import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Detailtomat from '../components/Detailtomat'
import Tomat from '../components/Tomat'

const Detail = () => {
  return (
    <div>
        <Navbar />
        <div>
            <Detailtomat />
            <Tomat />
            <Footer />
        </div>
    </div>
  )
}

export default Detail