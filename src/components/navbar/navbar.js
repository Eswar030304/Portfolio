import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contacting from '../../assets/contact.png'
import { Link } from 'react-scroll';

const Navbar= () => {
    return (
    <nav className="navbar">
        <img src={logo} alt="Logo" className='logo'/>
        <div className= "desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
        </div>
        <button className='desktopMenuBtn' onClick={ () => {
            document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
         }}>
            <img src={contacting} alt='' className='desktopMenuImg' />Contact Me</button>
    </nav>
    )
} 

export default Navbar
