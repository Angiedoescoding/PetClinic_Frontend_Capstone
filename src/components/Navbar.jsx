// Importing Link from the react-router-dom for routing (navigating) between pages

import { Link } from 'react-router-dom';
import { useState } from 'react';
import Modal from './Modal'

function Navbar({services}) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }


    return (
        <header className='navHeader'>
            <div className="navContainer">
                <nav className="navbar">
                    <Link to="/about" className="navLinkStyle">About Us</Link>
                    <Link to="/doctors"className="navLinkStyle">Doctors</Link>
                    <Link to="/services" className="navLinkStyle">Services</Link>
                    <Link to="/things-to-know" className="navLinkStyle">Things to Know</Link>
                    <Link to="/good-deeds" className="navLinkStyle">Good Deeds</Link>
                    <div className="navContacts">
                        <button className="appointmentBtn" onClick={openModal}>Book an appointment</button>
                        <a href="tel:+123-456-7890" className="phoneLink">
                        Call 123-456-7890
                        </a>
                    </div>
                </nav>
            </div>
        {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} services={services} />}

    </header>
    )
}

export default Navbar




