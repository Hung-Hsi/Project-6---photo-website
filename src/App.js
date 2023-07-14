import React from 'react'
import Nav from './components/Nav';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import About from './pages/About';
import { Routes, Route } from "react-router-dom";
import "./styles/css/style.css"

const App = () => {
  return (
    <div className='App'>
      <Nav />
      {/* <Homepage /> */}
      <Routes>
        <Route path="/photo-website" element={<Homepage />} />
        <Route path="/photo-website/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App