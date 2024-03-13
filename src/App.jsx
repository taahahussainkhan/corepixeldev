import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Programs from './components/programs/Programs'
import Title from './components/title/Title'
import About from './components/about/About'

export default function App() {
  return (
    <div>
    <Navbar /> 
    <Hero />
    <div className="mycontainer">
      <Title title = 'What We Offer' subtitle = "Our Program"/>
    <Programs />
    <About />
    </div>
    
    </div>
  )
}
