import { useEffect, useState } from 'react'
import Vetdog from '../assets/Vetdog.jpg'


function Doctors() {

  const [vets, setVets] = useState();

  useEffect(() => {
    console.log("Fetching...");
    fetch('http://localhost:3000/vets/')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Something went wrong.');
      }
      console.log(response.status);

      return response.json();
      })
    .then((data) => {
      console.log(data);
      setVets(data)
    })
  },[])

  return (
    <>
    <div className='doctorsListContainer'>
      <h1 style={{ color: 'rgb(5, 5, 128)' }}>Our doctors:</h1>
      <div className="doctors">
        {vets ? vets.map((vet) => {
          return (
          <div className='doctor'>
            <h4>{vet.firstName} {vet.lastName} - {vet.specialties}</h4>
            {/* <p style={{ color: 'green' }}>{vet.specialties}</p> */}
            <img src={Vetdog} alt="Vet with a dog" className="vetDogImg" />
          </div>
          )
        }) : null}
      </div>
    </div>
    </>
  );
}

export default Doctors