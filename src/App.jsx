import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from './navbar.jsx'
import Hero from './Hero.jsx'
import About from './about.jsx'
import Work from './work.jsx'
import Experience from './experience.jsx'
import SendEmail from './SendEmail.jsx'

function App() {
  const location = useLocation();
  const isEmailPage = location.pathname === "/send-email";

  return (
    <div className='flex h-screen max-w-[2560px] max-h-[1440px] mx-auto'>
      {!isEmailPage && (
        <div className='w-1/4 overflow-auto'>
          <Navbar />
        </div>
      )}

      <div className={isEmailPage ? 'w-full' : 'flex-1 overflow-auto'}>
        <Routes>
          <Route path="/" element={
            <main>
              <section id="hero"><Hero /></section>
              <section id="work"><Work /></section>
              <section id="experience"><Experience /></section>
              <section id="about"><About /></section>
            </main>
          } />

          <Route path="/send-email" element={<SendEmail />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
