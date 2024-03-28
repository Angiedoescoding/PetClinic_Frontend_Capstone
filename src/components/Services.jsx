import { useEffect, useState } from 'react';
import Modal from './Modal';

function Services({services, setServices}) {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [editId, setEditId] = useState(null);
  const [editService, setEditService] = useState(null);

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


  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  const handleEditService = (id) => {
    fetch('http://localhost:3000/services', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: json.stringify({name, price}),
    })
    .then(response => response.json())
    .then(updatedService => {
      setServices(services.map(service => (service._id === editId ? updatedService : service)));
    })
    .catch(error => {
      console.error('Error editing service:', error);
    });
  }

  const handleDeleteService = (id) => {
    fetch(`http://localhost:3000/services/${id}`, {
      method: 'DELETE',
    })
    .then(() => {
      setServices(services.filter(service => service._id !== id));
    })
    .catch(error => {
      console.error('Error deleting service:', error);
    });
  };

  return (
    <>
    <div className='servicesListContainer'>
    
      <h1 style={{ color: 'rgb(5, 5, 128)' }}>Services we provide:</h1>
      {services ? services.map((service) => {
        return (
          <div className='serviceList' key={service._id}>
            <h4 style={{ color: 'green' }}>{service.name}: {service.description}</h4>
            <p>Cost per procedure: ${service.price}</p>
            <button onClick={() => handleEditService(service._id.name)}>Edit</button>
            <button onClick={() => handleDeleteService(service._id)}>Delete</button>
          </div>
        )
      }) : null}

      <button className="appointmentBtnServ" onClick={openModal}>Book an appointment</button>
    </div>
      {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} services={services} />}
    </>  
    )
}

export default Services