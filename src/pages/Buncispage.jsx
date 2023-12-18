import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Detailbuncis from '../components/DetailBuncis'
import Buncis from '../components/Buncis'

const Detail = () => {
  return (
    <div>
        <Navbar />
        <div>
            <Detailbuncis />
            <Buncis />
            <Footer />
        </div>
    </div>
  )
}

export default Detail