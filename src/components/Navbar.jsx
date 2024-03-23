// Importing Link from the react-router-dom for routing (navigating) between pages

import { Link } from 'react-router-dom';


// My original code that was working:
// import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <header className='navHeader'>
        <div className="container">
        <nav className="navbar">
            <Link to="/about" className="navLinkStyle">About Us</Link>
            <Link to="/doctors"className="navLinkStyle">Doctors</Link>
            <Link to="/services" className="navLinkStyle">Services</Link>
            <Link to="/things-to-know" className="navLinkStyle">Things to Know</Link>
            <Link to="/good-deeds" className="navLinkStyle">Good Deeds</Link>
        <div className="navContacts">
        <button className="appointmentBtn">Book an appointment</button>
        <a href="tel:+123-456-7890" className="phoneLink">
            Call 123-456-7890
        </a>
        </div>
        </nav>
    </div>
    </header>
    )
}

export default Navbar



    // THE SCROLLING STYLING WITH CONTENT AND SECTIONNAV COMPONENTS
// import { useState } from "react";
// import { motion } from "framer-motion";
// import SectionNav from "./SectionNav";
// import { sections } from "./Content";


// const Navbar = () => {
//     const [activeSection, setActiveSection] = useState("about"); // set about instead of html for now
//     const [timeOfLastClick, setTimeOfLastClick] = useState(0); // we need to keep track of this to disable the observer temporarily when user clicks on a link

//     const handleClick = (id) => {
//         setActiveSection(id);
//         const element = document.getElementById(id);
//         if (element) {
//         element.scrollIntoView({ behavior: "smooth" });
//         }
//     };

//     return (
//         <>
//         <nav className="navbar">
//         <div className="container">
//             <ul className="navUl">
//             {sections.map((link) => (
//                 <li key={link.id}>
//                 <Link
//                     to={`/${link.id}`}
//                     onClick={() => {
//                     setTimeOfLastClick(Date.now());
//                     // setActiveSection(link.id);
//                     handleClick(link.id);
//                     }}                
//                     className={activeSection === link.id ? "active" : ""}
//                     >
//                     {link.heading}
//                     {activeSection === link.id && (
//                     <motion.div
//                         layoutId="bubble"
//                         transition={{ type: "spring", duration: 0.6 }}
//                     ></motion.div>
//                     )}
//                 </Link>
//                 </li>
//             ))}
//             </ul>
//         </div>
//     </nav>


//         {sections.map((section) => (
//             <SectionNav
//             key={section.id}
//             setActiveSection={setActiveSection}
//             section={section}
//             timeOfLastClick={timeOfLastClick}
//             />
//         ))}
//         </>
//     );
// };

// export default Navbar;


