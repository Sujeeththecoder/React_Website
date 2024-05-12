import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
export default function App() {
  return (
   <div>
    <Navbar/>
    <div className="pt-30">
    <Hero/>
    </div>
   
   </div>
  )
}