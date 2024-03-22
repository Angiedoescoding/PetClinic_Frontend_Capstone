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
  
  // trying to connect the backend (video example), also check the package.json "proxy": "http://localhost:3000",
  
  // const [backendData, setBackendData] = useState([{}])

  // useEffect(() => {
  //   fetch("/api").then(
  //     response => response.json()
  //   ).then(
  //     data => {
  //       setBackendData(data)
  //     }
  //   )
  // }, [])

  return (
    <>
      <div>
      <Navbar />
                <Routes>
                    <Route path="/" element={<GreetingMain />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/doctors" element={<Doctors />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/things-to-know" element={<ThingsToKnow />} />
                    <Route path="/good-deeds" element={<GoodDeeds />} />
                </Routes>
      {/* <img src={Rabbits} />   testing adding a picture - works */}
                <Footer />
      </div>

      {/* // trying to connect the backend (video example), also check the package.json "proxy": "http://localhost:3000",
      {(typeof backendData.users === 'undefined') ? (
        <p>Loading - test on the App.jsx return for BACKEND SERVER. If you see this, then your are having errors with backend connections.</p>
      ) : (
        backendData.users.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      )} */}




    </>
  )
}

export default App
