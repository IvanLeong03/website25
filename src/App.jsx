import React from 'react'
import Navbar from './navbar.jsx'
import Hero from './Hero.jsx'
import About from './about.jsx'
import Work from './work.jsx'
import Experience from './experience.jsx'
import SendEmail from './SendEmail.jsx'
import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <div className='flex h-screen max-w-[2560px] max-h-[1440px] mx-auto'>
      
      <div className='w-1/4 overflow-auto'>
        < Navbar />
      </div>      
      <div className='flex-1 overflow-auto'>
        <main>   
          <section id="hero"><Hero /></section>      
          <section id="work"><Work /></section>
          <section id="experience"><Experience /></section>
          <section id="about"><About /></section>
        </main>

        <Routes>
          <Route path="/send-email" element={<SendEmail />} />
        </Routes>

      </div>
    </div>
  )
}

export default App
