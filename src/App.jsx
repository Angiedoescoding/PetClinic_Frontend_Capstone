import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import GreetingMain from './components/GreetingMain';
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
      <GreetingMain />

      {/* // trying to connect the backend (video example), also check the package.json "proxy": "http://localhost:3000",
      {(typeof backendData.users === 'undefined') ? (
        <p>Loading - test on the App.jsx return for BACKEND SERVER. If you see this, then your are having errors with backend connections.</p>
      ) : (
        backendData.users.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      )} */}
    <div>
      {/* <img src={Rabbits} />   testing adding a picture - works */}
    </div>


    </>
  )
}

export default App
