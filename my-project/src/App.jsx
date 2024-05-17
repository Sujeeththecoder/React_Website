import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Benefits from "./components/Benefits"
import Video from "./components/Video"
export default function App() {
  return (
   <div>
    <Navbar/>
    <div className="pt-30">
    <Hero/>
    </div>
    <Benefits/>
    <Video/>
   </div>
   

  )
}