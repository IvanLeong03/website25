import React from 'react'
import Navbar from './navbar.jsx'
import Home from './home.jsx'
import Hero from './Hero.jsx'
import About from './about.jsx'
import Work from './work.jsx'
import Experience from './experience.jsx'


function App() {

  return (
    <div className='flex h-screen max-w-[1920px] max-h-[1080px] mx-auto'>
      
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
      </div>
    </div>
  )
}

export default App
