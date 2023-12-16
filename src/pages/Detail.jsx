import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Detailbaru from '../components/Detailbaru'
import Bawangmerah from '../components/Bawangmerah'

const Detail = () => {
  return (
    <div>
        <Navbar />
        <div>
            <Detailbaru />
            <Bawangmerah />
            <Footer />
           
        </div>
    </div>
  )
}

export default Detail