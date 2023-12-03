import React from 'react'
import Navbar from '../components/Navbar'
import SectionCard from '../components/SectionCard'
import SectionUrban from '../components/SectionUrban'
import SectionHidroponik from '../components/SectionHidroponik'
import CardHidroponik from '../components/CardHidroponik'
import SectionPolybag from '../components/SectionPolybag'
import CardPolybag from '../components/CardPolybag'
import Footer from '../components/Footer'


const Panduan = () => {
    return (
      <div>
          <Navbar />
          <div>
            <SectionCard />
            <SectionUrban />
            <SectionHidroponik />
            <CardHidroponik />
            <SectionPolybag />
            <CardPolybag />
            <Footer />
          </div>
      </div>
    )
  }
  
  export default Panduan