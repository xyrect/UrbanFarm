import React from 'react'
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Panduan from './pages/Panduan'
import Artikel from './pages/Artikel'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/panduan" element={<Panduan/>} />
        <Route path="/artikel" element={<Artikel/>} />
      </Routes>
  </Router>
  )
}

export default App