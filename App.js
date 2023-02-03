import React from 'react'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import Skills from './pages/Skills'

const App = () => {
  return (
    <>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Contact />
        <Footer />
    </>
  )
}

export default App
