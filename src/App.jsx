import { Route, Routes } from "react-router-dom"

import Navbar from "./components/Navbar"
import Homepage from "./components/pages/Homepage"
import Technology from "./components/pages/Technology"
import Solutions from "./components/pages/Solutions"
import Company from "./components/pages/Company"
import Newsroom from "./components/pages/Newsroom"
import Contact from "./components/pages/Contact"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="font-inter min-h-screen flex flex-col">
      <Navbar />    
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Technology" element={<Technology />} />
          <Route path="/Solutions" element={<Solutions />} />
          <Route path="/Company" element={<Company />} />
          <Route path="/Newsroom" element={<Newsroom />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
