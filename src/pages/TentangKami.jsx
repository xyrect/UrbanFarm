import React from 'react'
import SecTentang from '../components/Sectentang'
import SecWeb from '../components/Secweb'
import SecMobile from '../components/Secmobile'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


const Home = () => {
    return (
      <div>
        <Navbar />
        <div>
        <SecTentang />
        <SecWeb />
        <SecMobile />
        <Footer />
        </div>
     </div>
  )
}

export default Home  