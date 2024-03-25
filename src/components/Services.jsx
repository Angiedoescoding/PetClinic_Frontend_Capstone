import { useEffect, useState } from 'react';
import Dogandcatwithavet from '../assets/Dogandcatwithavet.jpg'

function Services() {

  const [services, setServices] = useState();

  useEffect(() => {
    console.log("Fetching services...");
    fetch('http://localhost:3000/services')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Something went wrong.');
      }
      console.log(response.status);

      return response.json();
    })
    .then((data) => {
      console.log(data);
      setServices(data)
    })
  },[])

  return (
    <>
    <div className='servicesListContainer'>
    
    <h1 style={{ color: 'rgb(5, 5, 128)' }}>Services we provide:</h1>
    {services ? services.map((service) => {
      return (
        <div className='serviceList'>
          <h4 style={{ color: 'green' }}>{service.name}: {service.description}</h4>
          <p>Cost per procedure: ${service.price}</p>
          {/* <hr></hr> */}
        </div>
      )
    }) : null}

            <button className="appointmentBtnServ">Book an appointment</button>

    </div>
    </>  
    )
}

export default Services