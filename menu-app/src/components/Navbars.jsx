import React from 'react';
import './Navbar.css'; // Import the CSS file for styling

const Navbars = () => {
    return (
        <header className="navbar">
            <div className="navbar-brand">
                <img src="logo.png" alt="image" className="logo" />
                <span>MENU</span>
            </div>
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#reservation">Make a Reservation</a></li>
                <li><a href="#contact">Contact Us</a></li>
            </ul>
        </header>
    );
};

export default Navbars;
