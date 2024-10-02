
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Navbar, Nav } from 'react-bootstrap';
// import './Navbar.css';
// import logoImage from '../Images/logoImage.jpg'; // Import your image here

// const NavigationBar = () => {
//     return (
//         <Navbar bg="black" expand="lg">
//             <Navbar.Brand as={Link} to="/" >
//                 Quiz Application
//             </Navbar.Brand>
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav">
               
//                 <img src={logoImage} alt="Logo" className="navbar-logo" /> {/* Add image here */}
//             </Navbar.Collapse>
//         </Navbar>
//     );
// };

// export default NavigationBar;
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css';
import logoImage from '../Images/logoImage.jpg'; // Import your image here

const NavigationBar = () => {
    return (
        <Navbar bg="black" expand="lg" className="navbar">
            <Navbar.Brand as={Link} to="/" className="navbar-brand">
                {/* Logo visible always */}
                <img src={logoImage} alt="Logo" className="navbar-logo" />
                Quiz Application
            </Navbar.Brand>
            
        </Navbar>
    );
};

export default NavigationBar;
