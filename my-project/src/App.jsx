import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Benefits from "./components/Benefits"
import Video from "./components/Video"
import Teachers from "./components/Teachers"
import SimpleSteps from "./components/SimpleSteps"
import Form from "./components/Form"
import Footer from "./components/Footer"
export default function App() {
  return (
   <div>
    <Navbar/>
    <div className="pt-30">
    <Hero/>
    </div>
    <Benefits/>
    <Video/>
    <Teachers/>
    <SimpleSteps/>
    <Form/>
    <Footer/>
   </div>
   

  )
}