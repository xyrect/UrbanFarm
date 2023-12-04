import React from 'react'
import SecTentang from '../components/Sectentang'
import SecWeb from '../components/Secweb'
import SecMobile from '../components/Secmobile'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import CardBar from '../components/Cardbar'


const TentangKami = () => {
    return (
      <div>
        <Navbar />
        <div>
        <CardBar />
        <SecTentang />
        <SecWeb />
        <SecMobile />
        <Footer />
        </div>
     </div>
  )
}

export default TentangKami  