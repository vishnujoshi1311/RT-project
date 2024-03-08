import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cards from './components/Cards'
import Food from './components/Food'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Cards/>
      <Food/>
    </div>
  )
}

export default App
