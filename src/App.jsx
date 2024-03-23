import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import GreetingMain from './components/GreetingMain';
import About from './components/About'
import Doctors from './components/Doctors';
import Services from './components/Services';
import ThingsToKnow from './components/ThingsToKnow';
import GoodDeeds from './components/GoodDeeds';
import Footer from './components/Footer'

// import Rabbits from './assets/Rabbits.jpg'  testing adding a picture - works


function App() {
  
  // trying to connect the backend here (see Dylan's example)
  

  return (
    <>
      <div>
      <GreetingMain />
      <Navbar />
                <Routes>
                    {/* <Route path="/" element={<GreetingMain />} /> */}
                    <Route path="/about" element={<About />} />
                    <Route path="/doctors" element={<Doctors />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/things-to-know" element={<ThingsToKnow />} />
                    <Route path="/good-deeds" element={<GoodDeeds />} />
                </Routes>
      {/* <img src={Rabbits} />   testing adding a picture - works */}
      <Footer />
      </div>

      


    </>
  )
}

export default App
