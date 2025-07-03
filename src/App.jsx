import React from 'react'
import Navbar from './navbar.jsx'
import Home from './home.jsx'
import About from './about.jsx'
import Work from './work.jsx'
import Experience from './experience.jsx'


function App() {

  return (
    <div className='flex h-screen max-w-[1920px] mx-auto'>
      <div className='w-1/4'>
        < Navbar />
      </div>      

      <div className='flex-1 overflow-auto'>
        <main>
          <section id="home"><Home /></section>          
          <section id="work"><Work /></section>
          <section id="experience"><Experience /></section>
          <section id="about"><About /></section>
        </main>
      </div>
    </div>
  )
}

export default App
