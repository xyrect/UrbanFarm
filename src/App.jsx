import React from 'react'
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Panduan from './pages/Panduan'
import Artikel from './pages/Artikel'
import Detail from './pages/Detail'
import TentangKami from './pages/TentangKami'
import DetailKPP from './pages/DetailKPP'
import './App.css'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/tentangkami" element={<TentangKami/>} />
        <Route path="/panduan" element={<Panduan/>} />
        <Route path="/artikel" element={<Artikel/>} />
        <Route path="/bawangmerah" element={<Detail/>} />
        <Route path="/kacangpjg" element={<DetailKPP/>} />
      </Routes>
    </Router>
  )
}

export default App