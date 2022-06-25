import React from 'react';
import './nav.css';
import {FaHome} from 'react-icons/fa';
import {BsFilePerson} from 'react-icons/bs';
import {FiBook} from 'react-icons/fi';
import {RiServiceFill} from 'react-icons/ri';
import {RiMessage2Line} from 'react-icons/ri';
import { useState } from 'react';



const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FaHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BsFilePerson /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FiBook /></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceFill /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><RiMessage2Line /></a>

    </nav>
  )
}

export default Nav