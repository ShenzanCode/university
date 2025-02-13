import React, { useState } from 'react'
import './nave.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll'

const Nave = () => {

  const[mobilemenu,setmobilemenu] =useState(false)
  const togglemenu=() => {
    mobilemenu? setmobilemenu(false): setmobilemenu(true)
  }
  return (
    <nav className='container dark-nav'>
        <img src={logo} alt="" className='logo' />
        <ul className={mobilemenu? " ":"hide-mobile-menu"}>
            <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to="programs" smooth={true} offset={-260} duration={500}>Program</Link></li>
            <li><Link to="about" smooth={true} offset={-150} duration={500}>About Us</Link></li>
            <li><Link to="campus" smooth={true} offset={-260} duration={500}>Campus</Link></li>
            <li><Link to="testimonial" smooth={true} offset={-260} duration={500}>Testimonial</Link></li>
            <li><Link to="contact" smooth={true} offset={-260} duration={500} className='btn'>Contact us</Link></li>
        </ul>
        <img src={menu_icon} className='menu-icon' alt="" onClick={togglemenu} />
    </nav>
  )
}

export default Nave