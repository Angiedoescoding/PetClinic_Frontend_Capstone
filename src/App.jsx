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
import Footer from './components/Footer';



function App() {
  
  const [services, setServices] = useState();


  return (
    <>
      <Navbar services={services}  />
      <GreetingMain />
                <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/doctors" element={<Doctors />} />
                    <Route path="/services" element={<Services services={services} setServices={setServices}/>} />
                    <Route path="/things-to-know" element={<ThingsToKnow />} />
                    <Route path="/good-deeds" element={<GoodDeeds />} />
                </Routes>
      <Footer />

    </>
  )
}

export default App
