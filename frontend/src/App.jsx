import { Button } from "@radix-ui/themes"
import React from "react"
import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom"
import Homepage from './pages/HomePage.jsx'
import CreatePage from './pages/CreatePage.jsx'

function App() {

  return (
    <>
     {/* First => We need a Navbar components , which is static across pages*/}
     <Navbar />
     <Routes>
      {/* Define your routes here */}
        <Route path="/" element={<Homepage/>} />
        <Route path="/create-products" element={<CreatePage/>} />
       
     </Routes>
    </>
  )
}

export default App
