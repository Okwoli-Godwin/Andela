import React from 'react'
import Homescreen from './Components/Homescreen'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Technologies from './Components/Technologies';
import Business from './Components/Business';
import Header from "./Components/Header"
import About from './Components/About';


const App = () => {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Homescreen />}/>
        <Route path='experts' element={<Technologies />}/>
        <Route path='business' element={<Business />}/>
        <Route path='about' element={<About />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

