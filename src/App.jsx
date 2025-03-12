import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './pages/Hero'
import Trending from './pages/Trending'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import TrendingShowDetails from './pages/TrendingShowDetails'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/trending" element={<Trending />} />
        <Route path='/trending/:showType/:id' element={<TrendingShowDetails />}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App