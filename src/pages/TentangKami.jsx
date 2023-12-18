import React from 'react'
import SecTentang from '../components/Sectentang'
import SecWeb from '../components/Secweb'
import SecMobile from '../components/Secmobile'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import CardBar from '../components/Cardbar'
import CarouselExample from '../components/CardTeam'
import TeamData from '../components/TeamData'


const TentangKami = () => {
    return (
      <div>
        <Navbar />
        <CardBar />
        <SecTentang />
        <TeamData />
        <SecWeb />
        <SecMobile />
        <Footer />
     </div>
  )
}

export default TentangKami  