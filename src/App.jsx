import React from 'react'
import Navbar from './navbar.jsx'
import Home from './home.jsx'
import About from './about.jsx'
import Work from './work.jsx'



function App() {

  return (
    <div className='flex h-screen'>
      < Navbar />

      <div className='flex-1 overflow-auto'>
        <main>
          <section id="home"><Home /></section>
          <section id="about"><About /></section>
          <section id="work"><Work /></section>

        </main>
      </div>

    </div>

    


  )
}

export default App
