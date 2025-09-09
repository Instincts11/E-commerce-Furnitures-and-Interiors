import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import Service from './components/Service'
import Contact from './components/Contact'
import Browse from './components/Browse'

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} /> 
        <Route path="/services" element={<Service />} /> 
         <Route path="/contact" element={<Contact />} /> 

        <Route path="/browse" element={<Browse />} />
        
      </Routes>
    </>
  )
}

export default App