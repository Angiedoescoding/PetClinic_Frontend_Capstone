// Importing Link from the react-router-dom for routing (navigating) between pages

import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import SectionNav from "./SectionNav";
import { sections } from "./Content";


const Navbar = () => {
    const [activeSection, setActiveSection] = useState("about"); // set about instead of html for now
    const [timeOfLastClick, setTimeOfLastClick] = useState(0); // we need to keep track of this to disable the observer temporarily when user clicks on a link

    const handleClick = (id) => {
        setActiveSection(id);
        const element = document.getElementById(id);
        if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
        <nav className="navbar">
        <div className="container">
            <ul className="navUl">
            {sections.map((link) => (
                <li key={link.id}>
                <Link
                    to={`/${link.id}`}
                    onClick={() => {
                    setTimeOfLastClick(Date.now());
                    // setActiveSection(link.id);
                    handleClick(link.id);
                    }}                
                    className={activeSection === link.id ? "active" : ""}
                    >
                    {link.heading}
                    {activeSection === link.id && (
                    <motion.div
                        layoutId="bubble"
                        transition={{ type: "spring", duration: 0.6 }}
                    ></motion.div>
                    )}
                </Link>
                </li>
            ))}
            </ul>
        </div>
    </nav>


        {sections.map((section) => (
            <SectionNav
            key={section.id}
            setActiveSection={setActiveSection}
            section={section}
            timeOfLastClick={timeOfLastClick}
            />
        ))}
        </>
    );
};

export default Navbar;





// My original code that was working:
// import { Link } from 'react-router-dom';

// function Navbar() {
//   return (
//     <div>
//         <nav className="navbar">
//             <Link to="/">Home</Link>
//             <Link to="/about">About Us</Link>
//             <Link to="/doctors">Doctors</Link>
//             <Link to="/services">Services</Link>
//             <Link to="/things-to-know">Things to Know</Link>
//             <Link to="/good-deeds">Good Deeds</Link>
//         </nav>
//     </div>
//   )
// }

// export default Navbar