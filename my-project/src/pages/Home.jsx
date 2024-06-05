import React from 'react'
import Footer from '../components/Footer'
import Benefits from '../components/Benefits'
import Form  from '../components/Form'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import SimpleSteps from '../components/SimpleSteps'
import Teachers from '../components/Teachers'
import Video from '../components/Video'

function Home() {
  return (
    <div className= 'pt-35 text-white'>
      <Hero/>
    <Benefits/>
    <Video/>
    <Teachers/>
    <SimpleSteps/>
    <Form/>
    </div>
  )
}

export default Home
